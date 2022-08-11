import * as THREE from "three";
import { TreeEntity } from "./entity";

/**
 *
 * @returns {Promise<TreeEntity>}
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
        const tree = new TreeEntity(mesh);
        resolve(tree);
      }
    };
    worker.postMessage(params);
  });
};
