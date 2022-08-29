import * as THREE from "three";
import { BehaviorSubject } from "../lib/behaviorSubject";
import setup from "../setup";

const { raycaster } = setup();

export class TreeEntity {
  selectedVerticesNeedUpdate = false;
  selectedBranchId$ = new BehaviorSubject(0);

  /**
   *
   * @param {THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>} mesh
   */
  constructor(mesh) {
    this.mesh = mesh;
    this.originalDependencyTree = mesh.userData.originalDependencyTree;
    this.mesh.geometry.computeBoundingSphere();
    mesh.castShadow = true;
    this.branchVertexIdDictionary = this._getVerticesForEachBranchId();

    this.selectedBranchId$.subscribe((selectedBranchId) => {
      this._deselectAllBranches();
      console.log(selectedBranchId);
      if (selectedBranchId) {
        this._selectBranchWithSubBranches(selectedBranchId);
      }
      this.selectedVerticesNeedUpdate = true;
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

    this.mesh.material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader.replace(
        `#include <common>`,
        `#include <common>
          attribute uint aIsBranchSelected;
          flat varying uint vIsBranchSelected;
          varying vec2 vUv;
        `
      );
      shader.vertexShader = shader.vertexShader.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
          vUv = uv;
          vIsBranchSelected = aIsBranchSelected;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <common>`,
        `#include <common>
          varying vec2 vUv;
          flat varying uint vIsBranchSelected;
        `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <output_fragment>`,
        `#include <output_fragment>
          
          gl_FragColor = uint(1) == vIsBranchSelected ? vec4(1.0, 0.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 0.1);
        `
      );
    };
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

  _deselectAllBranches() {
    for (
      let i = 0;
      i < this.mesh.geometry.attributes.aIsBranchSelected.count;
      i++
    ) {
      this.mesh.geometry.attributes.aIsBranchSelected.setX(i, 0);
    }
  }

  _selectBranch(branchId) {
    this.branchVertexIdDictionary[branchId].forEach((index) => {
      this.mesh.geometry.attributes.aIsBranchSelected.setX(index, 1);
    });
  }

  _selectBranchWithSubBranches = (branchId) => {
    for (const id of this._getSubBranchesIdOfBranch(branchId)) {
      this._selectBranch(id);
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
    // this.mesh.material.needsUpdate = this.selectedVerticesNeedUpdate;
    this.mesh.geometry.attributes.aIsBranchSelected.needsUpdate =
      this.selectedVerticesNeedUpdate;
    this.selectedVerticesNeedUpdate = false;
  }
}
