import * as THREE from "three";
import { MathUtils } from "three";
import setup from "./setup";
import vertexShader from "./shaders/tree.vert";
import fragmentShader from "./shaders/tree.frag";

const { gui } = setup();

const treeParams = {
  bottomToTopRadiusRatio: 1,
  branchRotationAngle: 0.63,
  branchRotationRandomness: 1.4,
  childHeightRatio: 0.8,
  childHeightRandomness: 1.2,
  childRadiusRatio: 0.45,
  childRadiusRandomness: 1.5,
  branchMinAmount: 2,
  branchMaxAmount: 4,
  branchVerticalPosition: 0.2,
  branchVerticalPositionRandomness: 1.3,
};

const branchGeoParams = {
  radialSegments: 10,
  heightSegments: 5,
};

export const makeTreeGui = (onFinishChange) => {
  const treeFolder = gui.addFolder("Tree params");

  treeFolder
    .add(treeParams, "bottomToTopRadiusRatio", 0.5, 2)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "branchRotationAngle", 0, Math.PI * 2 * 0.25)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "branchRotationRandomness", 1, 4)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "childHeightRatio", 0.5, 1.5)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "childHeightRandomness", 1, 4)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "childRadiusRatio", 0.2, 1.5)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "childRadiusRandomness", 1, 4)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "branchMinAmount", 1, 6, 1)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "branchMaxAmount", 2, 6, 1)
    .onFinishChange(onFinishChange);

  treeFolder
    .add(treeParams, "branchVerticalPosition", 0.2, 1.5)
    .onFinishChange(onFinishChange);
  treeFolder
    .add(treeParams, "branchVerticalPositionRandomness", 1, 4)
    .onFinishChange(onFinishChange);

  const branchGeoFolder = gui.addFolder("Branch Geometry");
  branchGeoFolder
    .add(branchGeoParams, "radialSegments", 1, 30, 1)
    .onFinishChange(onFinishChange);
  branchGeoFolder
    .add(branchGeoParams, "heightSegments", 1, 30, 1)
    .onFinishChange(onFinishChange);
};

class Tree {
  static meshTypeAmount = 5;
  static material = new THREE.MeshToonMaterial({
    // vertexShader,
    color: 0x000000,
    // fragmentShader,
    // wireframe: false
  });

  constructor({ radius, h }) {
    this.radius = radius;
    this.h = h;
    this.topRadius = this.radius * treeParams.bottomToTopRadiusRatio;
    this.branches = [];

    this.geometry = new THREE.CylinderBufferGeometry(
      this.topRadius,
      this.radius,
      this.h,
      branchGeoParams.radialSegments,
      branchGeoParams.heightSegments
    );
    this.branchMesh = new THREE.Mesh(this.geometry, Tree.material);

    this.mesh = new THREE.Group();
    this.branchMesh.translateY(h / 2);
    this.mesh.add(this.branchMesh);
    this.mesh.scale.y = 0;
    this.growthSpeed = MathUtils.randFloat(0.01, 0.03);
  }

  grow() {
    if (this.mesh.scale.y < 1) {
      this.mesh.scale.y += this.growthSpeed;
    } else {
      this.branches.forEach((b) => b.grow());
    }
  }

  dispose = () => {
    foldRTree((node) => (node, node.geometry.dispose()))(this);
  };
}

export const createTree = ({ levels }, opts = { radius: 1, h: 8 }) => {
  const createBranch = (parent, branchAmount) => (index) => {
    const childAvgRadius = parent.radius * treeParams.childRadiusRatio;
    const childAvgHeight = parent.h * treeParams.childHeightRatio;
    const branch = new Tree({
      radius: MathUtils.randFloat(
        childAvgRadius / treeParams.childRadiusRandomness,
        childAvgRadius * treeParams.childRadiusRandomness
      ),
      h: MathUtils.randFloat(
        childAvgHeight / treeParams.childHeightRandomness,
        childAvgHeight * treeParams.childHeightRandomness
      ),
    });
    const angle = ((Math.PI * 2) / branchAmount) * index;
    branch.mesh.translateX((Math.cos(angle) * parent.radius) / 2);
    branch.mesh.translateY(
      parent.h -
        branch.radius -
        MathUtils.randFloat(
          treeParams.branchVerticalPosition /
            treeParams.branchVerticalPositionRandomness,
          treeParams.branchVerticalPosition *
            treeParams.branchVerticalPositionRandomness
        )
    );
    branch.mesh.translateZ((Math.sin(angle) * parent.radius) / 2);
    branch.mesh.rotateY(-angle);
    branch.mesh.rotateZ(
      -THREE.MathUtils.randFloat(
        treeParams.branchRotationAngle / treeParams.branchRotationRandomness,
        treeParams.branchRotationAngle * treeParams.branchRotationRandomness
      )
    );
    parent.mesh.add(branch.mesh);
    return branch;
  };

  const root = new Tree(opts);
  const rec = (lv) => (tree) => {
    if (lv < levels) {
      const branches = new Array(
        THREE.MathUtils.randInt(
          treeParams.branchMinAmount,
          treeParams.branchMaxAmount
        )
      )
        .fill(null)
        .map((_, i, arr) => createBranch(tree, arr.length)(i));
      branches.forEach(rec(lv + 1));
      Object.assign(tree, { branches });
    }
  };
  rec(0)(root);
  return root;
};

export const foldLTree = (cb) => (acc) => (node) =>
  node.branches.reduce((a, sub) => foldLTree(cb)(a)(sub), cb(acc, node));

export const foldRTree = (cb) => (node) =>
  cb({ ...node, branches: node.branches.map(foldRTree(cb)) });
