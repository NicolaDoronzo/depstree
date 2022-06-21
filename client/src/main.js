import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils";
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

const sun = new THREE.DirectionalLight(0xffffff, 1);

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
  scene.add(field);
  scene.add(tree);
  const ambientLight = new THREE.AmbientLight();
  gui.add(ambientLight, "intensity").name("ambient");
  scene.add(ambientLight);
  const spotlight = new THREE.SpotLight();
  spotlight.position.copy(tree.position);
  // spotlight.position.z += tree.radius * 2;
  spotlight.rotateX(Math.PI / 2);
  spotlight.angle = 3;
  spotlight.intensity = 3;
  scene.add(spotlight);
  gui.add(spotlight.position, "x");
  gui.add(spotlight.position, "y");
  gui.add(spotlight.position, "z");
  gui.add(spotlight, "intensity", 0);
  gui.add(spotlight, "distance", 0);
  gui.add(spotlight, "angle", 0);
  gui.add(spotlight, "penumbra", 0);
  gui.add(spotlight, "decay", 0);
  scene.remove(depsTreeChoiceUI);
};

runUi();

// scene.fog = new THREE.FogExp2(0xffffff, 0.0002);

const fieldWidth = 100000;
const fieldHeight = 100000;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight),
  new THREE.MeshStandardMaterial({ color: 'black' })
);

field.rotateX(-Math.PI * 0.5);

const mat = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });

let prevMat = null;
let prevSize = null;
const geos = [];
const amt = 3;
for (let height = 10 * amt; height >= 10; height -= 10) {
  const rotationAngle = Math.PI / 8;
  const radius = height / 3;
  const geo = new THREE.CylinderBufferGeometry(radius, radius, height);
  const rotMatrix = new THREE.Matrix4().makeRotationFromEuler(
    new THREE.Euler(rotationAngle, 0, rotationAngle)
  );
  prevMat = prevMat
    ? new THREE.Matrix4()
        .multiply(prevMat)
        .multiply(rotMatrix)
        .multiply(
          new THREE.Matrix4().makeTranslation(
            0,
            prevSize / 2 + height / 2,
            prevSize / 2
          )
        )

    : new THREE.Matrix4()
    .multiply(rotMatrix)
    .multiply(new THREE.Matrix4().makeTranslation(0, height / 2, 0))

  prevSize = height;
  geo.applyMatrix4(prevMat);
  geos.push(geo);
}

// scene.add(new THREE.Mesh(BufferGeometryUtils.mergeBufferGeometries(geos), mat));

const update = (elapsedTime) => {};

run(update);
