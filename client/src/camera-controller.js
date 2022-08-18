import * as THREE from "three";

export class CameraController {
  /**
   * @type {THREE.Box3}
   */
  target;

  animate = null;

  /**
   *
   * @param {THREE.Camera} camera
   */
  constructor(camera) {
    this.camera = camera;
  }

  /**
   *
   * @param {THREE.Vector3} target
   */
  calculateEndPosition() {
    const center = this.target.getCenter(new THREE.Vector3());
    const radius = this.target.getBoundingSphere(new THREE.Sphere()).radius;
    const cameraPosition = this.camera.position.clone();

    const POI = center.add(
      new THREE.Vector3()
        .subVectors(cameraPosition.setY(center.y), center)
        .normalize()
        .multiplyScalar(radius * 2.5)
    );
    return POI;
  }

  _getCameraTransition() {
    const camera = this.camera;
    const lookAtTargetStart = this.currentLookAtTarget.clone();
    const currentLookAtRef = this.currentLookAtTarget;
    const lookatTargetEnd = this.target.getCenter(new THREE.Vector3());
    const transitionSeconds = 2;
    const startPosition = camera.position.clone();
    const endPosition = this.calculateEndPosition();

    let startTime = null;

    return function tick(totalElapsed) {
      startTime = startTime || totalElapsed;
      const elapsed = totalElapsed - startTime;
      const t = THREE.MathUtils.clamp(elapsed / transitionSeconds, 0, 1);
      const currentPosition = new THREE.Vector3().lerpVectors(
        startPosition,
        endPosition,
        t
      );
      const currentLookAtTargetPosition = new THREE.Vector3().lerpVectors(
        lookAtTargetStart,
        lookatTargetEnd,
        t
      );
      currentLookAtRef.copy(currentLookAtTargetPosition);
      camera.position.copy(currentPosition);
      camera.lookAt(currentLookAtTargetPosition);

      if (t >= 1) {
        return null;
      } else {
        return tick;
      }
    };
  }

  /**
   *
   * @param {THREE.Box3} target
   */
  setTarget(target) {
    this.target = target;
    this.currentLookAtTarget =
      this.currentLookAtTarget || this.target.getCenter(new THREE.Vector3());
    this.animate = this._getCameraTransition();
  }

  update(elapsed) {
    if (this.animate) {
      this.animate = this.animate(elapsed);
    }
  }
}
