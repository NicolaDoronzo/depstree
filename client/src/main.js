import * as THREE from "three";
import { CameraController } from "./camera-controller";
import { makeField } from "./field";
import setup from "./setup";
import {
  generateRandomDepsTreeMetadata,
  default as testdata,
} from "./testdata";
import { createTree } from "./tree";

const { run, scene, gui, camera, pointer } = setup();

let mesh = null;
const controller = new CameraController(camera);

createTree(
  // generateRandomDepsTreeMetadata({ maxDeps: 5, maxDepth: 4 })
  testdata
).then((tree) => {
  mesh = tree;

  camera.position.set(
    0,
    tree.mesh.geometry.boundingSphere.radius / 2,
    tree.mesh.geometry.boundingSphere.radius * 3
  );

  tree.selectedBranchId$.subscribe((branchId) => {
    if (branchId) {
      const box = tree.computeSubtreeBoundingBox(branchId);
      controller.setTarget(box);
    }
  });
  const field = makeField(
    tree.mesh.geometry.boundingSphere.radius * 30
    // 1000
  );

  scene.add(field);
  scene.add(tree.mesh);
  const ambientLight = new THREE.AmbientLight();
  ambientLight.intensity = -1;
  gui.add(ambientLight, "intensity").name("ambient");
  scene.add(ambientLight);

  const topLight = new THREE.SpotLight();
  topLight.shadow.camera.far = 100000;
  topLight.shadow.camera.fov = 100000;
  topLight.castShadow = true;
  topLight.angle = 3;
  topLight.penumbra = 1;
  topLight.intensity = 3;
  topLight.position.copy(tree.mesh.position);
  topLight.position.y += tree.mesh.geometry.boundingSphere.radius * 4;
  topLight.position.z -= tree.mesh.geometry.boundingSphere.radius * 4;
  topLight.position.x -= tree.mesh.geometry.boundingSphere.radius * 4;
  topLight.target.position.copy(tree.mesh.position);
  topLight.target.updateMatrixWorld();

  scene.add(topLight);
});

const update = (elapsedTime) => {
  mesh?.update();
  controller.update(elapsedTime);
};

run(update);
