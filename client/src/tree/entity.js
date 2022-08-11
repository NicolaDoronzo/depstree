import * as THREE from "three";
import setup from "../setup";

const { raycaster } = setup();

export class TreeEntity {
  /**
   *
   * @param {THREE.Mesh} mesh
   */
  constructor(mesh) {
    this.mesh = mesh;
    mesh.castShadow = true;
    if (!mesh.isInstancedMesh) {
      const geo = new THREE.EdgesGeometry(mesh.geometry);
      const mat = new THREE.LineBasicMaterial({ color: 0x000000 });
      const wireframe = new THREE.LineSegments(geo, mat);
      mesh.add(wireframe);
    }

    window.addEventListener("click", () => {
      const intersects = raycaster.intersectObject(mesh, false);
      const intersected = intersects[0];
      if (intersected) {
        const selectedIndex = intersected.face.a;
        const indexBufferSlices = mesh.userData.indexGroups.map((g) =>
          mesh.geometry.index.array.slice(g.start, g.start + g.count)
        );
        const selectedIndexGroup = indexBufferSlices.find((group) =>
          group.includes(selectedIndex)
        );
        selectedIndexGroup.forEach((index) => {
          mesh.geometry.attributes.color.setXYZ(index, 1, 0, 0);
          mesh.geometry.attributes.color.needsUpdate = true;
        });
      }
    });
  }
}
