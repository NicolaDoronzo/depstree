import * as dat from "dat.gui";
import Stats from "stats.js";
import * as THREE from "three";
import { initFpsControls } from "./fps-controls";
import "./styles.css";

const setup = () => {
  const stats = new Stats();
  const gui = new dat.GUI();
  const canvas = document.querySelector("canvas.webgl");
  const scene = new THREE.Scene();

  window.scene = scene;
  window.debugSphere = (vec) => {
    const debugSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.1),
      new THREE.MeshBasicMaterial({ color: "red" })
    );
    debugSphere.position.copy(vec);
    scene.add(debugSphere);
  };

  const sizes = {
    width: innerWidth,
    height: innerHeight,
  };

  if (process.env.NODE_ENV === "development") {
    stats.showPanel(0);
    document.body.appendChild(stats.dom);
  }

  addEventListener("resize", () => {
    sizes.width = innerWidth;
    sizes.height = innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  });

  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.1,
    1000
  );

  camera.position.y = 1.8;
  scene.add(camera);

  const { controls, update: updateFpsControls } = initFpsControls(camera);

  addEventListener("click", () => {
    controls.isLocked ? controls.unlock() : controls.lock();
  });

  const renderer = new THREE.WebGLRenderer({
    canvas,
    preserveDrawingBuffer: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const clock = new THREE.Clock();
  let previousTime = 0;
  const tick = (update) => {
    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - previousTime;
    previousTime = elapsedTime;

    if (process.env.NODE_ENV === "development") {
      stats.begin();
    }

    update(elapsedTime);
    updateFpsControls(delta);
    renderer.render(scene, camera);
    if (process.env.NODE_ENV === "development") {
      stats.end();
    }
    requestAnimationFrame(() => tick(update));
  };

  return () => ({
    gui,
    canvas,
    scene,
    renderer,
    camera,
    run: tick,
  });
};

export default setup();
