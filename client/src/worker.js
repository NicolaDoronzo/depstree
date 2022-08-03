import { DepsTreeFactory } from "./depstree";

const createDepsTree = ({ maxDepth, ...params }) => {
  const TreeGeometryBuilder = DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
    onBranchCreated: (branchCreated) =>
      postMessage({
        type: "loading",
        payload: branchCreated / TreeGeometryBuilder.totalBranches,
      }),
  });
  return TreeGeometryBuilder.build(params);
};

self.addEventListener("message", (e) => {
  const mesh = createDepsTree(e.data);

  const arrayBuffers = [];
  for (let attributeName of Object.keys(mesh.geometry.attributes)) {
    arrayBuffers.push(mesh.geometry.attributes[attributeName].array.buffer);
  }

  postMessage(
    {
      type: "done",
      payload: mesh.toJSON(),
      metadata: {
        boundingBox: mesh.geometry.boundingBox,
      },
    },
    arrayBuffers
  );
  // postMessage(mesh.toJSON());
});
