import * as THREE from "three";
function DepsTreeFactory() {
  return class DepsTree {
    static material = new THREE.MeshLambertMaterial({
      color: 0x000000,
    });

    static depth = 0;

    constructor({ maxDepth, dependencies, name, index, parent }) {
      this.level = DepsTree.depth;

      this.name = name;
      this.radius = (maxDepth - this.level + 1) * maxDepth;
      this.h =
        (maxDepth -
          this.level +
          dependencies.length / Math.max(this.level, 1)) *
          this.radius +
        this.name.length;
      this.topRadius = this.radius * 1;
      this.dependencies = dependencies;
      this.geometry = new THREE.CylinderBufferGeometry(
        this.topRadius,
        this.radius,
        this.h
      );
      this.mesh = new THREE.Mesh(this.geometry, DepsTree.material);
      this.geometry.translate(0, this.h * 0.5, 0);

      if (parent) {
        const angle = ((Math.PI * 2) / parent.dependencies.length) * index;
        this.mesh.translateX((Math.cos(angle) * parent.radius) / 2);
        this.mesh.translateY(
          THREE.MathUtils.randFloat(
            parent.h,
            parent.h / Math.max(dependencies.length, 2)
          )
        );
        this.mesh.translateZ((Math.sin(angle) * parent.radius) / 2);
        this.mesh.rotateY(-angle);
        this.mesh.rotateZ(
          -THREE.MathUtils.randFloat(Math.PI / 16, Math.PI / 4)
        );
      }

      DepsTree.depth++;

      this.branches = dependencies.map(
        (dep, i) =>
          new DepsTree({
            dependencies: dep.dependencies,
            parent: this,
            index: i,
            maxDepth,
            name: dep.name,
          })
      );

      DepsTree.depth--;

      this.branches.forEach((t) => this.mesh.add(t.mesh));
    }
  };
}

export const createDepsTree = (params) => {
  const DepsTree = DepsTreeFactory();
  const root = new DepsTree(params);
  return root.mesh;
};

export const foldLDepsTree = (cb) => (acc) => (node) =>
  node.branches.reduce((a, sub) => foldLDepsTree(cb)(a)(sub), cb(acc, node));
