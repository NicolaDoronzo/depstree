import * as THREE from "three";
import { createDepsTreeAsync } from "./create-depstree";
import {
  DependencyTreeChoiceUI,
  EmptyPackageMenuUI,
  LoadingBarUI,
} from "./package-loader-ui";
import { Sequence, Step } from "./sequence";
import setup from "./setup";
import { default as testdata } from "./testdata";

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

// const sun = new THREE.DirectionalLight(0xffffff, 1);

// sun.position.set(100, 1000, 100);
// scene.add(sun);

// scene.fog = new THREE.FogExp2(0xffffff, 0.0002);

const fieldWidth = 100000;
const fieldHeight = 100000;

const field = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(fieldWidth, fieldHeight),
  new THREE.MeshStandardMaterial({ color: "white" })
);

field.receiveShadow = true;
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
      ambientLight.intensity = -5;
      gui.add(ambientLight, "intensity").name("ambient");
      scene.add(ambientLight);
      const spotlight = new THREE.PointLight();

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

// Promise.all(
//   [...new Array(0)]
//     .map((_, i) =>
//       generateRandomDepsTreeMetadata({
//         maxDeps: 4,
//         maxDepth: 10,
//       })
//     )
//     .map((data) => createDepsTreeAsync(data))
// ).then((trees) => {
//   trees.forEach((mesh, i) => {
//     mesh.position.x += 400 * i;
//     scene.add(mesh);
//   });
// });

// const p = document.createElement('p')
// p.innerText = 'Lol'
// p.style.fontSize = "4rem"
// scene.add(new CSS3DObject(p));
// createDepsTreeAsync(testdata).then((mesh) => scene.add(mesh));
// scene.add(createDepsTree(testdata));
// new FontLoader()
//   .loadAsync("/fonts/helvetiker_regular.typeface.json")
//   .then((font) => {
//     createDepsTreeAsync(testdata).then((tree) => {
//       const color = 0x006699;

//       const matLite = new THREE.MeshBasicMaterial({
//         color: color,
//         transparent: true,
//         opacity: 0.8,
//         side: THREE.DoubleSide,
//       });

//       const message = testdata.name;
//       const shapes = font.generateShapes(message, 500);
//       const geometry = new THREE.ShapeGeometry(shapes);

//       geometry.computeBoundingBox();
//       const xMid =
//         -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

//       geometry.translate(xMid, 0, 0);

//       const text = new THREE.Mesh(geometry, matLite);
//       text.position
//         .copy(tree.position)
//         // .add(new THREE.Vector3(0, 0, tree.root.radius * 3));
//       text.rotateX(-Math.PI / 2);
//       scene.add(text);
//       scene.add(tree);
//     });
//   });

let tree = null;
createDepsTreeAsync(testdata).then((mesh) => {
  console.log(mesh);
  tree = mesh;
  scene.add(field);
  scene.add(mesh);
  const ambientLight = new THREE.AmbientLight();
  ambientLight.intensity = -1;
  gui.add(ambientLight, "intensity").name("ambient");
  scene.add(ambientLight);
  const bottomLight = new THREE.SpotLight(0xffffff);
  bottomLight.intensity = 4;
  gui.add(bottomLight, "intensity");
  gui.add(bottomLight, "angle");
  gui.add(bottomLight, "penumbra");
  const rootMetadata = mesh.geometry.userData.mergedUserData[0];
  bottomLight.position.copy(mesh.position);
  bottomLight.position.x += rootMetadata.radius * 1.5;
  bottomLight.position.z += rootMetadata.radius * 1.5;
  bottomLight.position.y += 10;
  bottomLight.target.position.set(
    bottomLight.position.x,
    1000,
    bottomLight.position.z
  );
  bottomLight.target.updateMatrixWorld();

  const boxSizes = {
    width: Math.abs(
      mesh.metadata.boundingBox.min.x - mesh.metadata.boundingBox.max.x
    ),
    height: Math.abs(
      mesh.metadata.boundingBox.min.y - mesh.metadata.boundingBox.max.y
    ),
    depth: Math.abs(
      mesh.metadata.boundingBox.min.z - mesh.metadata.boundingBox.max.z
    ),
  };

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
  topLight.position.copy(mesh.position);
  topLight.position.y += boxSizes.height * 4;
  topLight.position.z -= boxSizes.depth * 4;
  topLight.position.x -= boxSizes.width * 4;
  topLight.target.position.copy(mesh.position);
  topLight.target.updateMatrixWorld();

  scene.add(topLight);
  scene.add(bottomLight);
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener("click", () => {
  const intersects = raycaster.intersectObject(tree);
  const intersected = intersects[0];
  if (intersected) {
    const vertex = intersected.face.a;
    const mesh = intersected.object;
    console.log(
      mesh.geometry.userData.mergedUserData.find(
        (ud) => vertex >= ud.verticesRange.min && vertex <= ud.verticesRange.max
      )
    );
  }
});

window.addEventListener("mousemove", (ev) => {
  pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
});

const update = (elapsedTime) => {
  raycaster.setFromCamera(pointer, camera);
};

run(update);
