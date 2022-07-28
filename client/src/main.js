import * as THREE from "three";
import { createDepsTreeAsync } from "./depstree";
import {
  DependencyTreeChoiceUI,
  EmptyPackageMenuUI,
  LoadingBarUI,
} from "./package-loader-ui";
import { Sequence, Step } from "./sequence";
import setup from "./setup";
import { generateRandomDepsTreeMetadata, default as testdata } from "./testdata";

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

// scene.fog = new THREE.FogExp2(0xffffff, 0.0002);

const fieldWidth = 100000;
const fieldHeight = 100000;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight),
  new THREE.MeshStandardMaterial({ color: "black" })
);

field.rotateX(-Math.PI * 0.5);

const sequence = new Sequence([
  new Step({
    init: () => {
      const packageLoaderUI = new EmptyPackageMenuUI();
      scene.add(packageLoaderUI);
      return packageLoaderUI;
    },
    endWhen: ({ initResult: packageLoaderUI }) =>
      !!packageLoaderUI.loadedPackage,
    withResult: ({ initResult: packageLoaderUI }) => {
      scene.remove(packageLoaderUI);
      return packageLoaderUI.loadedPackage;
    },
  }),
  new Step({
    init: ({
      elapsed: startTime,
      previousTask: { result: loadedPackage },
      handlePromise,
    }) => {
      const loadingBarUI = new LoadingBarUI();
      scene.add(loadingBarUI);
      handlePromise(
        getAnalysedPackage(JSON.stringify(JSON.parse(loadedPackage))),
        "analysedPackage"
      );
      return { loadingBarUI, startTime };
    },
    action: ({ elapsed, initResult: { loadingBarUI, startTime } }) => {
      loadingBarUI.updateProgressBar(Math.min(100, elapsed - startTime));
    },
    endWhen: ({ analysedPackage }) => !!analysedPackage,
    withResult: ({ analysedPackage, initResult: { loadingBarUI } }) => {
      scene.remove(loadingBarUI);
      return JSON.parse(JSON.stringify(analysedPackage));
    },
  }),
  new Step({
    init: () => {
      const depsChoiceUI = new DependencyTreeChoiceUI();
      scene.add(depsChoiceUI);
      return depsChoiceUI;
    },
    endWhen: ({ initResult: depsChoiceUI }) => !!depsChoiceUI.chosenDepsType,
    withResult: ({
      initResult: depsChoiceUI,
      previousTask: {
        result: { dependencies, devDependencies },
      },
    }) => {
      scene.remove(depsChoiceUI);
      return {
        DEPS: dependencies,
        DEV_DEPS: devDependencies,
      }[depsChoiceUI.chosenDepsType];
    },
  }),
  new Step({
    init: ({ previousTask: { result: chosenTreeParams }, handlePromise }) => {
      const loadingBarUI = new LoadingBarUI();
      scene.add(loadingBarUI);
      handlePromise(
        createDepsTreeAsync({
          ...chosenTreeParams,
          onBranchCreated: (progress) =>
            loadingBarUI.updateProgressBar(progress * 100),
        }),
        "treeMesh"
      );
      return loadingBarUI;
    },
    endWhen: ({ treeMesh }) => !!treeMesh,
    withResult: ({ treeMesh, initResult: loadingBarUI }) => {
      scene.add(field);
      scene.add(treeMesh);
      const ambientLight = new THREE.AmbientLight();
      gui.add(ambientLight, "intensity").name("ambient");
      scene.add(ambientLight);
      const spotlight = new THREE.SpotLight();
      spotlight.position.copy(treeMesh.position);
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
      scene.remove(loadingBarUI);
    },
  }),
]);
Promise.all(
  [...new Array(3)]
    .map((_, i) =>
      generateRandomDepsTreeMetadata({
        maxDeps: 4,
        maxDepth: 10,
      })
    )
    .map((data) => createDepsTreeAsync(data))
).then((trees) => {
  trees.forEach((mesh, i) => {
    mesh.position.x += 400 * i;
    scene.add(mesh);
  });
});

// createDepsTreeAsync(testdata).then(d => scene.add(d));

const update = (elapsedTime) => {};

run(update);
