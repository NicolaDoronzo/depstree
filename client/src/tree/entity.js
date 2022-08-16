import * as THREE from "three";
import { BehaviorSubject } from "../lib/behaviorSubject";
import setup from "../setup";

const { raycaster, orbitControls } = setup();

export class TreeEntity {
  colorNeedsUpdate = false;
  selectedBranchId$ = new BehaviorSubject(null);

  /**
   *
   * @param {THREE.Mesh} mesh
   */
  constructor(mesh) {
    this.mesh = mesh;
    mesh.castShadow = true;

    this.branchVertexIdDictionary = this._getVerticesForEachBranchId();

    if (!mesh.isInstancedMesh) {
      this._addWireframeGeometry();
    }

    this.selectedBranchId$.subscribe((selectedBranchId) => {
      this._clearColor();
      if (selectedBranchId) {
        this._colorBranchWithSubBranches(selectedBranchId);
        const lookAtTarget = new THREE.Vector3();
        this.computeSubtreeBoundingBox(selectedBranchId).getCenter(
          lookAtTarget
        );
        orbitControls.target = lookAtTarget;
      }
      this.colorNeedsUpdate = true;
    });

    window.addEventListener("click", () => {
      const intersects = raycaster.intersectObject(mesh, false);
      const intersected = intersects[0];
      if (intersected) {
        const selectedVertexIndex = intersected.face.a;
        const newBranchId = this._findBranchIdByIndex(selectedVertexIndex);
        if (newBranchId === this.selectedBranchId$._value) {
          this.selectedBranchId$.next(null);
        } else {
          this.selectedBranchId$.next(newBranchId);
        }
      }
    });
  }

  _addWireframeGeometry() {
    const geo = new THREE.EdgesGeometry(this.mesh.geometry);
    const mat = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wireframe = new THREE.LineSegments(geo, mat);
    this.mesh.add(wireframe);
  }

  /**
   *
   * @returns {{ [number]: ArrayLike<number>}}
   */
  _getVerticesForEachBranchId() {
    return this.mesh.userData.indexGroups.reduce((acc, g) => {
      acc[g.branchId] = this.mesh.geometry.index.array.slice(
        g.start,
        g.start + g.count
      );
      return acc;
    }, {});
  }

  _findBranchVerticesByIndex(index) {
    return Object.values(this.branchVertexIdDictionary).find((group) =>
      group.includes(index)
    );
  }

  _findBranchIdByIndex(index) {
    return Object.entries(this.branchVertexIdDictionary).find(([, group]) =>
      group.includes(index)
    )[0];
  }

  /**
   *
   * @param {number} branchId
   * @returns {number[]}
   */
  _getSubBranchesIdOfBranch(branchId) {
    return this.mesh.userData.branchingMap[branchId].concat(branchId);
  }

  _clearColor() {
    for (let i = 0; i < this.mesh.geometry.attributes.color.count; i++) {
      this.mesh.geometry.attributes.color.setXYZ(i, 1, 1, 1);
    }
  }

  _setBranchColor(branchId) {
    this.branchVertexIdDictionary[branchId].forEach((index) => {
      this.mesh.geometry.attributes.color.setXYZ(index, 1, 0, 0);
    });
  }

  _colorBranchWithSubBranches = (branchId) => {
    for (const id of this._getSubBranchesIdOfBranch(branchId)) {
      this._setBranchColor(id);
    }
  };

  computeSubtreeBoundingBox(branchId) {
    const positionAttribute = this.mesh.geometry.attributes.position;
    const positions = this._getSubBranchesIdOfBranch(branchId)
      .flatMap((id) => [...this.branchVertexIdDictionary[id]])
      .flatMap((index) => [
        positionAttribute.getX(index),
        positionAttribute.getY(index),
        positionAttribute.getZ(index),
      ]);
    return new THREE.Box3().setFromArray(positions);
  }

  update() {
    this.mesh.geometry.attributes.color.needsUpdate = this.colorNeedsUpdate;
    this.colorNeedsUpdate = false;
  }
}
