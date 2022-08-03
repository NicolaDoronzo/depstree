import * as THREE from "three";
import { DepsTreeFactory } from "./depstree";

export const createDepsTreeSync = ({ maxDepth, ...params }) => {
  return DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
  }).build(params);
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

export const createDepsTreeAsyncV2 = ({
  maxDepth,
  onBranchCreated = () => {},
  ...params
}) => {
  const TreeGeometryBuilder = DepsTreeFactory({
    maxDepth,
    onBranchCreated: (branchNum) =>
      onBranchCreated(branchNum / TreeGeometryBuilder.totalBranches),
    isAsync: true,
    ...params,
  });
  return TreeGeometryBuilder.buildAsync(params);
};
