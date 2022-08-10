import SimplexNoise from "simplex-noise";
import { createTree } from "./tree";
import * as THREE from "three";
import setup from "./setup";
import { makeField } from "./field";
import testdata, { generateRandomDepsTreeMetadata } from "./testdata";
import perlin from './shaders/perlin.vert';

const { run, scene, gui, camera, pointer } = setup();


const customUniforms = {
  uTime: { value: 0 },
  uMinVertex: { value: 0 },
  uMaxVertex: { value: 0 },
};


createTree(
  generateRandomDepsTreeMetadata({ maxDeps: 5, maxDepth: 4 })
  // testdata
).then((tree) => {

  createTree({... generateRandomDepsTreeMetadata({ maxDeps: 5, maxDepth: 4 }), instanced: true }).then(instancedTree => {
    instancedTree.position.x += 300;
    scene.add(instancedTree);
  })
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
      tree.metadata.boundingBox.min.x - tree.metadata.boundingBox.max.x
    ),
    height: Math.abs(
      tree.metadata.boundingBox.min.y - tree.metadata.boundingBox.max.y
    ),
    depth: Math.abs(
      tree.metadata.boundingBox.min.z - tree.metadata.boundingBox.max.z
    ),
  };
  const field = makeField(
    // boxSizes.width * 30
    1000
  );
  scene.add(field);
  scene.add(tree);
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
  topLight.position.copy(tree.position);
  topLight.position.y += boxSizes.height * 4;
  topLight.position.z -= boxSizes.depth * 4;
  topLight.position.x -= boxSizes.width * 4;
  topLight.target.position.copy(tree.position);
  topLight.target.updateMatrixWorld();

  scene.add(topLight);

  window.addEventListener("click", () => {
    const intersects = raycaster.intersectObject(tree, false);
    const intersected = intersects[0];
    if (intersected) {
      // do stuff
    }
  });
});

const raycaster = new THREE.Raycaster();

const update = (elapsedTime) => {
  raycaster.setFromCamera(pointer, camera);
  customUniforms.uTime.value = elapsedTime;
};

run(update);
