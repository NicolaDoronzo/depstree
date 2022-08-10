import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';

export const makeField = (size) => {
  const fieldWidth = size;
  const fieldHeight = size;

  const segs = Math.min(size / 50, 100);
  const field = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(
      fieldWidth,
      fieldHeight,
      segs,
      segs
    ),
    new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true })
  );

  const verts = field.geometry.attributes.position;
  const simplex = new SimplexNoise();
  for (let i = 0; i < verts.count; i++) {
    const x = verts.getX(i);
    const y = verts.getY(i);
    const z = verts.getZ(i);
    const shift = simplex.noise2D(x, y) * (size / segs) / 2;
    verts.setZ(i, z + shift);
  }

  verts.needsUpdate = true;
  const geo = new THREE.WireframeGeometry(field.geometry);
  geo.attributes.position.needsUpdate = true;
  field.add(
    new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({ color: 0x000000 })
    )
  );

  field.receiveShadow = true;
  field.rotateX(-Math.PI * 0.5);
  return field;
}