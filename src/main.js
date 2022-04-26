import * as dat from "dat.gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "stats.js";
import "./styles.css";

const stats = new Stats();
const gui = new dat.GUI();
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

const sizes = {
  width: innerWidth,
  height: innerHeight,
};

if (process.env.NODE_ENV) {
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
  100
);

camera.position.x = 4;
camera.position.y = 2;
camera.position.z = 5;

scene.add(camera);

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

const renderer = new THREE.WebGLRenderer({
  canvas,
  preserveDrawingBuffer: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

const update = (elapsedTime) => {
  orbitControls.update();

  /* 
    UPDATE CODE HERE 
  */
  
  renderer.render(scene, camera);
};

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  if (process.env.NODE_ENV) {
    stats.begin();
    update(elapsedTime);
    stats.end();
  } else {
    update(elapsedTime);
  }
  requestAnimationFrame(tick);
};

tick();

addEventListener("keyup", (e) => {
  if (e.key === "s") {
    const base64 = canvas.toDataURL("image/jpeg", 1.0);
    const a = document.createElement('a');
    a.href = base64;
    a.download = new Date().toUTCString();
    a.click();
  }
});
