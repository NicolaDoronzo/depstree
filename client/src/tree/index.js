import * as THREE from "three";

/**
 * 
 * @returns {Promise<THREE.Mesh | THREE.InstancedMesh}
 */
export const createTree = async ({ onBranchCreated, ...params }) => {
  const worker = new Worker(new URL("./worker.js", import.meta.url), {
    type: "module",
  });
  return new Promise((resolve) => {
    worker.onmessage = (e) => {
      if (e.data.type === "loading") {
        onBranchCreated?.(e.data.payload);
      } else {
        const mesh = new THREE.ObjectLoader().parse(e.data.payload);
        mesh.metadata = e.data.metadata;
        mesh.castShadow = true;
        resolve(mesh);
      }
    };
    worker.postMessage(params);
  });
};
