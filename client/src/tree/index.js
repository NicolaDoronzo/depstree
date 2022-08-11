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
        console.log(e.data.payload);
        const mesh = new THREE.ObjectLoader().parse(e.data.payload);
        mesh.metadata = e.data.metadata;
        mesh.castShadow = true;
        if (mesh.isInstancedMesh) {
          const cylinderEdges = new THREE.EdgesGeometry(mesh.geometry);
          const instEdgesMat = new THREE.InstancedBufferGeometry().copy(cylinderEdges);
          
          const instancedLines = new THREE.InstancedMesh(
            cylinderEdges,
            new THREE.LineBasicMaterial({ 
              color: 0x000000,
              polygonOffset: true,
              polygonOffsetFactor: 1,
              polygonOffsetUnits: 1 
            }),
            mesh.userData.totalBranches
          );
          
          for (let i = 0; i < mesh.userData.totalBranches; i++) {
            const mat = new THREE.Matrix4();
            mesh.getMatrixAt(i, mat);
            instancedLines.setMatrixAt(i, mat);
          }
          mesh.add(instancedLines);
        } else {
          const geo = new THREE.EdgesGeometry(mesh.geometry);
          const mat = new THREE.LineBasicMaterial({ color: 0x000000 });
          const wireframe = new THREE.LineSegments(geo, mat);
          mesh.add(wireframe);
        }
        resolve(mesh);
      }
    };
    worker.postMessage(params);
  });
};
