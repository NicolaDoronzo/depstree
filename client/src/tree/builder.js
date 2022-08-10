import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { MathUtils } from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";

const material = new THREE.MeshBasicMaterial({
  vertexColors: true,
  polygonOffset: true,
  polygonOffsetFactor: 1,
  polygonOffsetUnits: 1,
});

const instancedMaterial = new THREE.MeshBasicMaterial({
  color: 'white',
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
  let branchCreatedCounter = 0;

  const totalBranches = (function recurseCalc(data, accumulator) {
    if (!data.dependencies?.length) {
      return accumulator;
    } else {
      return data.dependencies.reduce((acc, cur) => {
        return recurseCalc(cur, acc + cur.dependencies.length);
      }, accumulator);
    }
  })({ dependencies }, dependencies.length + 1);

  class TreeBuilder {

    static get ready() {
      return branchCreatedCounter === totalBranches;
    }

    constructor({ dependencies = [], name, index, parent, level = 0, instancedMesh }) {
      branchCreatedCounter++;
      this.parent = parent;
      this.index = index;
      this.level = level;
      this.dependencies = dependencies;
      this.name = name;
      this.radius = parent ? parent.topRadius : maxDepth * maxDepth;

      this.h = this._calculateHeight();
      this.topRadius = this.radius * 0.7;
      this.instancedMesh = instancedMesh;

      if (!parent) {
        this.matrix = new THREE.Matrix4().makeTranslation(0, this.h * 0.5, 0);
      } else {
        this.matrix = this._makeChildTransformationMatrix();
      }

      if (!instancedMesh) {
        this.geometry = this._makeBranchGeometry();
        this.geometry.applyMatrix4(this.matrix);
      } else {
        instancedMesh.setMatrixAt(branchCreatedCounter - 1, this.matrix.clone().scale(new THREE.Vector3(this.radius, this.h, this.radius)));
      }

      this.branches = [];

      if (!isAsync) {
        this._setSubBranches()
      } else {
        requestAnimationFrame(() => {
          this._setSubBranches()
        });
      }
    }

    _setSubBranches() {
      onBranchCreated(branchCreatedCounter / totalBranches);
      this.branches = this.dependencies.map(
        (sub, index) =>
          new TreeBuilder({
            dependencies: sub.dependencies,
            parent: this,
            index,
            name: sub.name,
            level: this.level + 1,
            instancedMesh: this.instancedMesh
          })
      );
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

    _calculateHeight() {
      return (maxDepth +
        Math.log10(this.dependencies.length || 1) / Math.max(this.level * 3, 1)) *
        this.radius +
        this.name.length
    }

    _makeBranchGeometry() {
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

      const geometry = new THREE.CylinderBufferGeometry(
        this.topRadius,
        this.radius,
        this.h,
        radialSegments,
        heightSegments
      );

      const colorBuffer = new Float32Array(
        geometry.attributes.position.count * 3
      );

      for (let i = 0; i < geometry.attributes.position.count * 3; i++) {
        const i3 = i * 3;
        colorBuffer[i3 + 0] = 1;
        colorBuffer[i3 + 1] = 1;
        colorBuffer[i3 + 2] = 1;
      }
      geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorBuffer, 3)
      );

      this._shiftVertsWithNoise(geometry);

      return geometry
    }

    _shiftVertsWithNoise(geometry) {
      const verts = geometry.attributes.position;
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

  const build = (params) => {
    const root = new TreeBuilder(params);
    const geos = root.fold((acc, n) => acc.concat(n.geometry), []);
    const treeGeo = mergeBufferGeometries(geos);
    treeGeo.computeBoundingBox();
    const mesh = new THREE.Mesh(treeGeo, material);
    return mesh;
  }

  const buildInstanced = (params) => {
    const geo = new THREE.CylinderBufferGeometry(0.7, 1, 1, 20, 20);
    const instancedMesh = new THREE.InstancedMesh(geo, instancedMaterial, totalBranches);
    instancedMesh.geometry.computeBoundingBox();
    new TreeBuilder({ ...params, instancedMesh });
    return instancedMesh
  }

  const buildAsync = (params) => {
    const root = new TreeBuilder(params);

    const buildTreeWhenBranchesReady = (resolve) => {
      if (TreeBuilder.ready) {
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

  return {
    build,
    buildAsync,
    buildInstanced
  }
}

export const createSync = ({ maxDepth, onBranchCreated = () => {}, instanced, ...params }) => {
  const { build, buildInstanced } = DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
    onBranchCreated,
  });

  if (instanced) {
    return buildInstanced(params)
  } else {
    return build(params);
  }
};


export const createAsync = ({
  maxDepth,
  onBranchCreated = () => { },
  ...params
}) => {
  const { buildAsync } = DepsTreeFactory({
    maxDepth,
    onBranchCreated,
    isAsync: true,
    ...params,
  });
  return buildAsync(params);
};
