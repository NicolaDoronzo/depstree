import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { MathUtils } from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import fragmentShader from './shaders/tree.frag';
import vertexShader from './shaders/tree.vert';

const material = new THREE.MeshBasicMaterial({
  vertexColors: true,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  polygonOffsetUnits: 1,
});


const instancedMaterial = new THREE.MeshBasicMaterial({
  color: 'white',
  // vertexColors: true,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  polygonOffsetUnits: 1,
});

function DepsTreeFactory({
  maxDepth,
  onBranchCreated = async () => { },
  isAsync = false,
  dependencies,
}) {
  const totalBranches = (function calc(data, accumulator) {
    if (!data.dependencies?.length) {
      return accumulator;
    } else {
      return data.dependencies.reduce((acc, cur) => {
        return calc(cur, acc + cur.dependencies.length);
      }, accumulator);
    }
  })({ dependencies }, dependencies.length + 1);

  let branchCreatedCounter = 0;

  return class TreeMeshBuilder {
    static get totalBranches() {
      return totalBranches;
    }

    static get ready() {
      return branchCreatedCounter === totalBranches;
    }

    static buildInstanced(params) {
      const geo = new THREE.CylinderBufferGeometry(0.7, 1, 1, 20, 20);
      const instancedMesh = new THREE.InstancedMesh(geo, instancedMaterial, totalBranches);
      instancedMesh.geometry.computeBoundingBox();
      new TreeMeshBuilder({ ...params, instancedMesh });
      return instancedMesh
    }

    static build(params) {
      const root = new TreeMeshBuilder(params);
      const geos = root.fold((acc, n) => acc.concat(n.geometry), []);
      const treeGeo = mergeBufferGeometries(geos);
      treeGeo.computeBoundingBox();
      treeGeo.userData.mergedUserData.forEach((ud, i, arr) => {
        const prevMax = arr[i - 1]?.verticesRange?.max || 0;
        ud.verticesRange.min += prevMax + (i === 0 ? 0 : 1);
        ud.verticesRange.max += prevMax;
      });
      const mesh = new THREE.Mesh(treeGeo, material);
      // const geo = new THREE.EdgesGeometry(mesh.geometry);
      // const mat = new THREE.LineBasicMaterial({ color: 0x000000 });
      // const wireframe = new THREE.LineSegments(geo, mat);
      // mesh.add(wireframe);
      return mesh;
    }

    /**
     *
     * @param {*} params
     * @returns {Promise<THREE.Mesh>}
     */
    static async buildAsync(params) {
      const root = new TreeMeshBuilder(params);

      const buildTreeWhenBranchesReady = (resolve) => {
        if (TreeMeshBuilder.ready) {
          const geoms = root.fold(
            (acc, branch) => acc.concat(branch.geometry),
            []
          );
          const treeGeo = mergeBufferGeometries(geoms);
          treeGeo.userData.mergedUserData.forEach((ud, i, arr) => {
            const prevMax = arr[i - 1]?.verticesRange?.max || 0;
            ud.verticesRange.min += prevMax + 1;
            ud.verticesRange.max += prevMax;
          });
          const mesh = new THREE.Mesh(treeGeo, material);

          resolve(mesh);
        } else {
          requestAnimationFrame(() => buildTreeWhenBranchesReady(resolve));
        }
      };
      return new Promise(buildTreeWhenBranchesReady);
    }

    constructor({ dependencies = [], name, index, parent, level = 0, instancedMesh }) {
      branchCreatedCounter++;
      this.parent = parent;
      this.index = index;
      this.level = level;
      this.dependencies = dependencies;
      this.name = name;
      this.radius = parent ? parent.topRadius : maxDepth * maxDepth;

      this.h =
        (maxDepth +
          Math.log10(dependencies.length || 1) / Math.max(this.level * 3, 1)) *
        this.radius +
        this.name.length;
      this.topRadius = this.radius * 0.7;

      const radialSegments = MathUtils.clamp(
        Math.floor(this.radius / 10),
        10,
        20
      );
      const heightSegments = MathUtils.clamp(
        Math.floor(this.h / (maxDepth * 3)),
        3,
        20
      );
      

      this.geometry = new THREE.CylinderBufferGeometry(
        this.topRadius,
        this.radius,
        this.h,
        radialSegments,
        heightSegments
      );

      const colorBuffer = new Float32Array(
        this.geometry.attributes.position.count * 3
      );

      for (let i = 0; i < this.geometry.attributes.position.count * 3; i++) {
        const i3 = i * 3;
        colorBuffer[i3 + 0] = 1;
        colorBuffer[i3 + 1] = 1;
        colorBuffer[i3 + 2] = 1;
      }
      this.geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorBuffer, 3)
      );

      if (!parent) {
        this.matrix = new THREE.Matrix4().makeTranslation(0, this.h * 0.5, 0);
      } else {
        this.matrix = this._makeChildTransformationMatrix();
      }

      this.geometry.applyMatrix4(this.matrix);

      this._shiftVertsWithNoise();

      this.verticesRange = {
        min: 0,
        max: Math.max(...this.geometry.index.array) - 1,
      };

      this.branches = [];

      if (instancedMesh) {
        instancedMesh.setMatrixAt(branchCreatedCounter - 1, this.matrix.clone().scale(new THREE.Vector3(this.radius, this.h, this.radius)));
        // instancedMesh.setColorAt(branchCreatedCounter - 1, Math.random() > 0.5 ? new THREE.Color(0xff0000) : new THREE.Color(0x00ff00))
      }

      if (!isAsync) {
        onBranchCreated(branchCreatedCounter);
        this.branches = dependencies.map(
          (dep, i) =>
            new TreeMeshBuilder({
              dependencies: dep.dependencies,
              parent: this,
              index: i,
              name: dep.name,
              level: this.level + 1,
              instancedMesh
            })
        );
      } else {
        requestAnimationFrame(() => {
          onBranchCreated(branchCreatedCounter);
          this.branches = dependencies.map(
            (dep, i) =>
              new TreeMeshBuilder({
                dependencies: dep.dependencies,
                parent: this,
                index: i,
                name: dep.name,
                level: this.level + 1,
                instancedMesh
              })
          );
        });
      }

      this.geometry.userData = {
        name: this.name,
        radius: this.radius,
        topRadius: this.topRadius,
        height: this.h,
        verticesRange: this.verticesRange,
        branches: this.branches.map((b) => b.geometry.userData),
      };
    }

    _makeChildTransformationMatrix = () => {
      const angle =
        ((Math.PI * 2) / this.parent.dependencies.length) * this.index;
      const xTranslation = (Math.cos(angle) * this.parent.radius) / 2;
      const yTranslation = this.parent.h * 0.5 - this.radius * 4;
      const zTranslation = (Math.sin(angle) * this.parent.radius) / 2;
      const translationMatrix = new THREE.Matrix4().makeTranslation(
        xTranslation,
        yTranslation,
        zTranslation
      );

      const rotationMatrix = new THREE.Matrix4().makeRotationFromEuler(
        new THREE.Euler(
          0,
          -angle,
          -Math.PI / MathUtils.lerp(3, 6, (this.level + 1) / maxDepth)
        )
      );

      const pivotTranslatinoMatrix = new THREE.Matrix4().makeTranslation(
        0,
        -this.h * 0.5,
        0
      );
      return new THREE.Matrix4()
        .multiply(this.parent.matrix)
        .multiply(new THREE.Matrix4().makeTranslation(0, this.h * 0.5, 0))
        .multiply(translationMatrix)
        .multiply(pivotTranslatinoMatrix)
        .multiply(rotationMatrix)
        .multiply(pivotTranslatinoMatrix.invert());
    };

    _shiftVertsWithNoise() {
      const verts = this.geometry.attributes.position;
      const simplex = new SimplexNoise();
      for (let i = 0; i < verts.count; i++) {
        const x = verts.getX(i);
        const y = verts.getY(i);
        const z = verts.getZ(i);
        const halfRadius = this.radius / 2;
        const offset = y / Math.min(this.h, 1000);
        const treeBendingAmt = simplex.noise2D(offset, offset) * halfRadius;
        const barkShiftingAmt = simplex.noise3D(x, y, z) * 0.15 * halfRadius;
        verts.setX(i, x + treeBendingAmt + barkShiftingAmt);
        verts.setY(i, y + barkShiftingAmt);
        verts.setZ(i, z + barkShiftingAmt);
      }

      verts.needsUpdate = true;
    }

    fold(reducer, initialAccumulator) {
      return this.branches.reduce(
        (a, sub) => sub.fold(reducer, a),
        reducer(initialAccumulator, this)
      );
    }

    visit(cb) {
      cb(this);
      this.branches.forEach((branch) => branch.visit(cb));
    }
  };
}

export const createDepsTreeSync = ({ maxDepth, onBranchCreated, instanced, ...params }) => {
  const TreeMeshBuilder = DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
    onBranchCreated: (branchCreated) =>
      postMessage({
        type: "loading",
        payload: branchCreated / TreeMeshBuilder.totalBranches,
      }),
  });

  if (instanced) {
    return TreeMeshBuilder.buildInstanced(params)
  } else {
    return TreeMeshBuilder.build(params);
  }
};


export const createDepsTreeAsyncV2 = ({
  maxDepth,
  onBranchCreated = () => { },
  ...params
}) => {
  const TreeMeshBuilder = DepsTreeFactory({
    maxDepth,
    onBranchCreated: (branchNum) =>
      onBranchCreated(branchNum / TreeMeshBuilder.totalBranches),
    isAsync: true,
    ...params,
  });
  return TreeMeshBuilder.buildAsync(params);
};
