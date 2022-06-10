import * as dat from "dat.gui";
import Stats from "stats.js";
import * as THREE from "three";
import "./styles.css";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
    10000
  );

  camera.position.y = 1.8;
  camera.position.z = 500;
  scene.add(camera);

  
  
  const renderer = new THREE.WebGLRenderer({
    canvas,
    preserveDrawingBuffer: true,
  });
  
  renderer.setSize(sizes.width, sizes.height);
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.update();

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
    controls.update();
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
    sizes,
  });
};

export default setup();
