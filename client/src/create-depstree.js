import * as THREE from "three";
import { DepsTreeFactory } from "./depstree";

export const createDepsTree = ({ maxDepth, ...params }) => {
  const DepsTree = DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
  });
  const root = new DepsTree(params);
  const geos = root.fold((acc, n) => acc.concat(n.geometry), []);
  const treeGeo = mergeBufferGeometries(geos);
  const mesh = new THREE.Mesh(
    treeGeo,
    new THREE.MeshPhongMaterial({
      color: 0x8f8f8f,
      flatShading: true,
    })
  );
  return mesh;
};

export const createDepsTreeAsync = async ({ onBranchCreated, ...params }) => {
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

export const createDepsTreeAsyncV2 = async ({
  maxDepth,
  onBranchCreated = () => {},
  ...params
}) => {
  const DepsTree = DepsTreeFactory({
    maxDepth,
    onBranchCreated: (branchNum) =>
      onBranchCreated(branchNum / DepsTree.totalBranches),
    isAsync: true,
    ...params,
  });

  const root = new DepsTree(params);

  const checkReadyState = (resolve) => {
    if (DepsTree.ready) {
      const geoms = root.fold((acc, branch) => acc.concat(branch.geometry), []);
      const treeGeo = mergeBufferGeometries(geoms);
      const mesh = new THREE.Mesh(
        treeGeo,
        new THREE.MeshPhongMaterial({
          color: 0x8f8f8f,
          flatShading: true,
        })
      );
      mesh.root = root;

      resolve(mesh);
    } else {
      requestAnimationFrame(() => checkReadyState(resolve));
    }
  };
  return new Promise(checkReadyState);
};
