import * as THREE from "three";
import {
  DependencyTreeChoiceUI,
  EmptyPackageMenuUI,
  LoadingBarUI
} from "./package-loader-ui";
import { Sequence, Step } from "../lib/sequence";
import setup from "../setup";
import { createTree } from "../tree";
import { CameraController } from "../camera-controller";
import { makeField } from "../field";
import { NavigatorUI } from "../navigator/navigator-ui";
const { scene, gui, camera } = setup();

const getAnalysedPackage = (body) =>
  fetch("http://localhost:8081/file", {
    method: "POST",
    body,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());


export default new Sequence([
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
        createTree({
          ...chosenTreeParams,
          onBranchCreated: (progress) =>
            loadingBarUI.updateProgressBar(progress * 100),
        }),
        "tree"
      );
      return loadingBarUI;
    },
    endWhen: ({ tree }) => !!tree,
    withResult: ({ tree, initResult: loadingBarUI }) => {
      const controller = new CameraController(camera);
      const field = makeField(
        tree.mesh.geometry.boundingSphere.radius * 30
      );
      scene.add(field);
      scene.add(tree.mesh);
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
      new NavigatorUI(tree)
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
      scene.remove(loadingBarUI);
      return [controller, tree]
    },
  }),
  new Step({
    action: ({ previousTask: { result: entities }, elapsed }) => {
      entities.forEach(e => e.update(elapsed));
    },
    endWhen: () => false
  })
]);