import SimplexNoise from "simplex-noise";
import * as THREE from "three";
import { createDepsTreeAsync } from "./create-depstree";
import {
  DependencyTreeChoiceUI,
  EmptyPackageMenuUI,
  LoadingBarUI,
} from "./package-loader-ui";
import { Sequence, Step } from "./sequence";
import setup from "./setup";
import testdata, { generateRandomDepsTreeMetadata } from "./testdata";
import perlin from './shaders/perlin.vert';

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

const makeField = (size) => {
  const fieldWidth = size;
  const fieldHeight = size;

  const segs = Math.min(size / 50, 100);
  const field = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
      fieldWidth,
      fieldHeight,
      segs,
      segs
    ),
    new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true })
  );

  const verts = field.geometry.attributes.position;
  const simplex = new SimplexNoise();
  for (let i = 0; i < verts.count; i++) {
    const x = verts.getX(i);
    const y = verts.getY(i);
    const z = verts.getZ(i);
    const shift = simplex.noise2D(x, y) * (size / segs) / 2;
    verts.setZ(i, z + shift);
  }

  verts.needsUpdate = true;
  const geo = new THREE.WireframeGeometry(field.geometry);
  geo.attributes.position.needsUpdate = true;
  field.add(
    new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({ color: 0x000000 })
    )
  );

  field.receiveShadow = true;
  field.rotateX(-Math.PI * 0.5);
  return field;
};

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


/**
 * @type {THREE.Mesh}
 */
let tree = null;

const customUniforms = {
  uTime: { value: 0 },
  uMinVertex: { value: 0 },
  uMaxVertex: { value: 0 },
};

createDepsTreeAsync(
  generateRandomDepsTreeMetadata({ maxDeps: 5, maxDepth: 4 })
  // testdata
).then((mesh) => {
  tree = mesh;
  // tree.material.onBeforeCompile = (shader) => {
  //   shader.uniforms.uTime = customUniforms.uTime;
  //   shader.vertexShader = shader.vertexShader.replace(
  //     `#include <common>`,
  //     `#include <common>
       
  //       uniform float uTime;
  //       varying vec2 vUv;
  //       ${perlin}
  //     `
  //   );

  //   shader.vertexShader = shader.vertexShader.replace(
  //     `#include <begin_vertex>`,
  //     `#include <begin_vertex>
        
  //       float noiz = cnoise(1.0, 1.0);
  //       vUv = uv;
  //     `
  //   );
  //   shader.fragmentShader = shader.fragmentShader.replace(
  //     `#include <common>`,
  //     `#include <common>
  //       varying vec2 vUv;
  //     `
  //   )
    
  //   shader.fragmentShader = shader.fragmentShader.replace(
  //     `#include <output_fragment>`,
  //     `#include <output_fragment>
      
  //       gl_FragColor = vec4(vUv.y, vUv.y, vUv.y, 1.0);
  //     `
  //   )
  // };
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
  const field = makeField(
    // boxSizes.width * 30
    1000
    );
  scene.add(field);
  scene.add(mesh);
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
  topLight.position.copy(mesh.position);
  topLight.position.y += boxSizes.height * 4;
  topLight.position.z -= boxSizes.depth * 4;
  topLight.position.x -= boxSizes.width * 4;
  topLight.target.position.copy(mesh.position);
  topLight.target.updateMatrixWorld();

  scene.add(topLight);
});

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

window.addEventListener("click", () => {
  const intersects = raycaster.intersectObject(tree, false);
  const intersected = intersects[0];
  if (intersected) {
    const piece = tree.geometry.userData.mergedUserData.find(
      (ud) => vertex >= ud.verticesRange.min && vertex <= ud.verticesRange.max
    );

    for (let i = piece.verticesRange.min; i <= piece.verticesRange.max; i++) {
      const x = tree.geometry.attributes.position.getX(i)
      const y = tree.geometry.attributes.position.getY(i)
      const z = tree.geometry.attributes.position.getZ(i)
      tree.geometry.attributes.position.setX(i, x + 100);
      tree.geometry.attributes.position.setY(i, y + 100);
      tree.geometry.attributes.position.setZ(i, z + 100);
      tree.geometry.attributes.position.needsUpdate = true;
    }

  }
});

window.addEventListener("mousemove", (ev) => {
  pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
});

const update = (elapsedTime) => {
  raycaster.setFromCamera(pointer, camera);
  customUniforms.uTime.value = elapsedTime;
};

run(update);
