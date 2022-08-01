import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { MathUtils } from "three";

export function DepsTreeFactory({
  maxDepth,
  onBranchCreated = async () => {},
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

  return class DepsTree {
    static get totalBranches() {
      return totalBranches;
    }

    static get ready() {
      return branchCreatedCounter === totalBranches;
    }

    constructor({ dependencies = [], name, index, parent, level = 0 }) {
      branchCreatedCounter++;
      this.parent = parent;
      this.index = index;
      this.level = level;
      this.dependencies = dependencies;
      this.name = name;
      this.radius = parent ? parent.topRadius : maxDepth * maxDepth;
      
      this.h =
        (maxDepth +
          Math.log10(dependencies.length) / Math.max(this.level * 3, 1)) *
          this.radius +
        this.name.length;
      this.topRadius = this.radius * 0.7;

      const radialSegments = MathUtils.clamp(
        Math.floor(this.radius / 5),
        10,
        30
      );
      const heightSegments = MathUtils.clamp(
        Math.floor(this.h / (maxDepth * 2)),
        3,
        30
      );

      this.geometry = new THREE.CylinderBufferGeometry(
        this.topRadius,
        this.radius,
        this.h,
        radialSegments,
        heightSegments
      );

      if (!parent) {
        this.matrix = new THREE.Matrix4().makeTranslation(0, this.h * 0.5, 0);
      } else {
        this.matrix = this._makeChildTransformationMatrix();
      }

      this.geometry.applyMatrix4(this.matrix);
      this._shiftVertsWithNoise();

      this.branches = [];

      if (!isAsync) {
        onBranchCreated(branchCreatedCounter);
        this.branches = dependencies.map(
          (dep, i) =>
            new DepsTree({
              dependencies: dep.dependencies,
              parent: this,
              index: i,
              name: dep.name,
              level: this.level + 1,
            })
        );
      } else {
        requestAnimationFrame(() => {
          onBranchCreated(branchCreatedCounter);
          this.branches = dependencies.map(
            (dep, i) =>
              new DepsTree({
                dependencies: dep.dependencies,
                parent: this,
                index: i,
                name: dep.name,
                level: this.level + 1,
              })
          );
        });
      }
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
