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
  mesh.geometry.userData.mergedUserData.forEach((ud, i, arr) => {
    const prevMax = arr[i - 1]?.verticesRange?.max || 0;
    ud.verticesRange.min += prevMax + 1;
    ud.verticesRange.max += prevMax;
  })
  return mesh;
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
