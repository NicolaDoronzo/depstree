import * as dat from "dat.gui";
import Stats from "stats.js";
import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import "./styles.css";

const setup = () => {
  const stats = new Stats();
  const gui = new dat.GUI();
  const canvas = document.querySelector("canvas.webgl");
  const uiContainer = document.querySelector("#ui");
  const scene = new THREE.Scene();
  const pointer = new THREE.Vector2();

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

    uiRenderer.setSize(sizes.width, sizes.height);
  });

  addEventListener("mousemove", (ev) => {
    pointer.x = (ev.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(ev.clientY / window.innerHeight) * 2 + 1;
  });

  const camera = new THREE.PerspectiveCamera(
    50,
    sizes.width / sizes.height,
    0.1,
    100000
  );

  camera.position.y = 1.8;
  camera.position.z = 500;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    preserveDrawingBuffer: true,
  });

  const uiRenderer = new CSS2DRenderer({
    element: uiContainer,
  });

  const raycaster = new THREE.Raycaster();

  renderer.setSize(sizes.width, sizes.height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  uiRenderer.setSize(sizes.width, sizes.height);

  const clock = new THREE.Clock();
  let previousTime = 0;
  const tick = (update) => {
    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - previousTime;
    previousTime = elapsedTime;

    if (process.env.NODE_ENV === "development") {
      stats.begin();
    }
    raycaster.setFromCamera(pointer, camera);

    update(elapsedTime);
    renderer.render(scene, camera);
    uiRenderer.render(scene, camera);
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
    uiRenderer,
    pointer,
    raycaster,
  });
};

export default setup();
