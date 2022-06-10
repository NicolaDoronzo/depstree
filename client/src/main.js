import * as THREE from "three";
import setup from "./setup";
import { createTree, makeTreeGui } from "./tree";
import { createDepsTree } from "./depstree";

const { run, scene, gui, camera } = setup();

const sun = new THREE.DirectionalLight(0xf5cd05, 1);

sun.position.set(100, 1000, 100);
scene.add(sun);
// scene.fog = new THREE.FogExp2(0xdfe9f3, 0.01);

let aTree = null;

const drawOneTree = () => {
  if (aTree) {
    scene.remove(aTree.mesh);
    aTree.dispose();
  }

  const tree = createTree();
  aTree = tree;
  scene.add(tree.mesh);
};

makeTreeGui(drawOneTree);

gui.add(
  {
    "New Tree": () => drawOneTree(),
  },
  "New Tree"
);

const fieldWidth = 1000;
const fieldHeight = 1000;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight, 20, 20),
  new THREE.MeshStandardMaterial({ wireframe: false, color: "black" })
);

const FOV = camera.fov;
let yFovRadiant = (FOV * Math.PI) / 180;
// Calculate X-FOV Radiant
let xFovRadiant = 2 * Math.atan(Math.tan(yFovRadiant / 2) * camera.aspect);
// Convert back to angle
let xFovAngle = (xFovRadiant * 180) / Math.PI;

const fovY =
  (camera.position.z * camera.getFilmHeight()) / camera.getFocalLength();
console.log(xFovAngle);
const mainMenu = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(1000, 1000),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    depthWrite: false,
    depthTest: false,
    transparent: true,
    opacity: 0.6,
  })
);
mainMenu.add(
  new THREE.Mesh(
    new THREE.PlaneBufferGeometry(1, 1),
    new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      depthWrite: false,
      depthTest: false,
    })
  )
);

document.addEventListener("click", () => {
  if (mainMenu.visible) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();
    input.addEventListener("change", () => {
      input.files[0].text().then((pkg) => {
        const body = JSON.stringify(JSON.parse(pkg));
        return fetch("http://localhost:8081/file", {
          method: "POST",
          body,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(
            ({
              dependencies,
              devDependencies,
            }) => {
              mainMenu.visible = false;
              const tree = createDepsTree(dependencies);
              const devTree = createDepsTree(devDependencies);
              tree.position.x -= 200;
              devTree.position.x += 200;
              scene.add(tree);
              scene.add(devTree);
            }
          );
      });
    });
  }
});

mainMenu.position.z += -10;
camera.add(mainMenu);

field.rotateX(-Math.PI * 0.5);
// scene.add(field);

const update = (elapsedTime) => {};

run(update);
