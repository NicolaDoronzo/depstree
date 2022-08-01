import * as THREE from "three";
import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { DepsTreeFactory } from "./depstree";

const createDepsTree = ({ maxDepth, ...params }) => {
  const DepsTree = DepsTreeFactory({
    maxDepth,
    dependencies: params.dependencies,
    onBranchCreated: (branchCreated) =>
      postMessage({
        type: "loading",
        payload: branchCreated / DepsTree.totalBranches,
      }),
  });
  const root = new DepsTree(params);
  const geos = root.fold((acc, n) => acc.concat(n.geometry), []);
  const treeGeo = mergeBufferGeometries(geos);
  treeGeo.computeBoundingBox();
  const mesh = new THREE.Mesh(
    treeGeo,
    new THREE.MeshStandardMaterial({
      color: 0x8f8f8f,
      flatShading: true,
    })
  );
  return { mesh, root };
};

self.addEventListener("message", (e) => {
  const {
    mesh,
    root: { name, radius, h, topRadius },
  } = createDepsTree(e.data);

  const arrayBuffers = [];
  for (let attributeName of Object.keys(mesh.geometry.attributes)) {
    arrayBuffers.push(mesh.geometry.attributes[attributeName].array.buffer);
  }

  postMessage(
    {
      type: "done",
      payload: mesh.toJSON(),
      metadata: {
        name,
        radius,
        h,
        topRadius,
        boundingBox: mesh.geometry.boundingBox
      },
    },
    arrayBuffers
  );
  // postMessage(mesh.toJSON());
});
