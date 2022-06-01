import * as THREE from "three";
import { MathUtils } from "three";
import setup from "./setup";
import { createTree, makeTreeGui } from "./tree";

const { run, scene, gui } = setup();

const pointLight = new THREE.PointLight(0xffffff, 0.7);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(pointLight);
// scene.add(ambientLight);

const params = {
  depthLevels: 4,
  rootBranchHeight: 8,
  rootBranchRadius: 1,
};

let aTree = null;

const drawOneTree = () => {
  if (aTree) {
    scene.remove(aTree.mesh);
    aTree.dispose();
  }

  const tree = createTree(
    {
      levels: params.depthLevels,
      branchAmount: THREE.MathUtils.randInt(
        params.minBranchAmount,
        params.maxBranchAmount
      ),
    },
    {
      h: params.rootBranchHeight,
      radius: params.rootBranchRadius,
    }
  );
  aTree = tree;
  scene.add(tree.mesh);
};

makeTreeGui(drawOneTree);

gui.add(params, "depthLevels", 1, 8, 1).onFinishChange(drawOneTree);
gui.add(params, "rootBranchHeight", 1, 50, 0.1).onFinishChange(drawOneTree);
gui.add(params, "rootBranchRadius", 0.5, 10, 0.1).onFinishChange(drawOneTree);
gui.add(
  {
    "New Tree": () => drawOneTree(),
  },
  "New Tree"
);

const forest = new Array(20).fill(null).map(() =>
  createTree(
    {
      levels: params.depthLevels,
      branchAmount: THREE.MathUtils.randInt(
        params.minBranchAmount,
        params.maxBranchAmount
      ),
    },
    {
      h: params.rootBranchHeight,
      radius: params.rootBranchRadius,
    }
  )
);

const fieldWidth = 100;
const fieldHeight = 100;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight, 20, 20),
  new THREE.MeshBasicMaterial({ wireframe: true, color: "black" })
);

field.rotateX(-Math.PI * 0.5);
scene.add(field);

for (const tree of forest) {
  tree.mesh.position.x = MathUtils.randFloatSpread(fieldWidth);
  tree.mesh.position.z = MathUtils.randFloatSpread(fieldHeight);
  scene.add(tree.mesh);
}

const update = (elapsedTime) => {
  for (const tree of forest) {
    tree.grow();
  }
};

run(update);
