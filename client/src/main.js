import * as THREE from "three";
import { createDepsTree } from "./depstree";
import {
  DependencyTreeChoiceUI,
  EmptyPackageMenuUI,
  LoadingBarUI,
} from "./package-loader-ui";
import setup from "./setup";

const getAnalysedPackage = (body) =>
  fetch("http://localhost:8081/file", {
    method: "POST",
    body,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
const { run, scene, gui, camera } = setup();

const sun = new THREE.DirectionalLight(0xf5cd05, 1);

sun.position.set(100, 1000, 100);
scene.add(sun);

const runUi = async () => {
  const packageLoaderUI = new EmptyPackageMenuUI();
  scene.add(packageLoaderUI);
  const loadedPackage = await packageLoaderUI.whenLoaded();
  scene.remove(packageLoaderUI);
  const packageLoadingBarUI = new LoadingBarUI();
  scene.add(packageLoadingBarUI);
  const { dependencies, devDependencies } = await getAnalysedPackage(
    loadedPackage
  );
  const depsTreeChoiceUI = new DependencyTreeChoiceUI();
  scene.remove(packageLoadingBarUI);
  scene.add(depsTreeChoiceUI);
  const choice = await depsTreeChoiceUI.whenChosed();
  const tree = createDepsTree(
    {
      DEPS: dependencies,
      DEV_DEPS: devDependencies,
    }[choice]
  );
  scene.add(tree);
  scene.remove(depsTreeChoiceUI);
};

runUi();
// scene.fog = new THREE.FogExp2(0xdfe9f3, 0.01);

const fieldWidth = 1000;
const fieldHeight = 1000;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight, 20, 20),
  new THREE.MeshStandardMaterial({ wireframe: false, color: "black" })
);

field.rotateX(-Math.PI * 0.5);
// scene.add(field);

const update = (elapsedTime) => {};

run(update);
