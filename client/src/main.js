import * as THREE from "three";
import { makeField } from "./field";
import setup from "./setup";
import { generateRandomDepsTreeMetadata, default as testdata } from "./testdata";
import { createTree } from "./tree";

const { run, scene, gui, camera, pointer } = setup();

let mesh = null;

createTree(
  // generateRandomDepsTreeMetadata({ maxDeps: 5, maxDepth: 4 })
  testdata
).then((tree) => {
  mesh = tree;
  const boxSizes = {
    width: Math.abs(
      tree.mesh.userData.boundingBox.min.x -
        tree.mesh.userData.boundingBox.max.x
    ),
    height: Math.abs(
      tree.mesh.userData.boundingBox.min.y -
        tree.mesh.userData.boundingBox.max.y
    ),
    depth: Math.abs(
      tree.mesh.userData.boundingBox.min.z -
        tree.mesh.userData.boundingBox.max.z
    ),
  };
  const field = makeField(
    // boxSizes.width * 30
    1000
  );
  scene.add(field);
  scene.add(tree.mesh);
  const ambientLight = new THREE.AmbientLight();
  ambientLight.intensity = -1;
  gui.add(ambientLight, "intensity").name("ambient");
  scene.add(ambientLight);

  const box = new THREE.Mesh(
    new THREE.BoxGeometry(boxSizes.width, boxSizes.height, boxSizes.depth),
    new THREE.MeshStandardMaterial({
      transparent: true,
      opacity: 0.8,
      color: "blue",
    })
  );
  box.position.y += boxSizes.height / 2;

  const topLight = new THREE.SpotLight();
  topLight.shadow.camera.far = 100000;
  topLight.shadow.camera.fov = 100000;
  topLight.castShadow = true;
  topLight.angle = 3;
  topLight.penumbra = 1;
  topLight.intensity = 3;
  topLight.position.copy(tree.mesh.position);
  topLight.position.y += boxSizes.height * 4;
  topLight.position.z -= boxSizes.depth * 4;
  topLight.position.x -= boxSizes.width * 4;
  topLight.target.position.copy(tree.mesh.position);
  topLight.target.updateMatrixWorld();

  scene.add(topLight);
});


const update = (elapsedTime) => {
  mesh?.update();
};

run(update);
