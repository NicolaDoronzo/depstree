import perlin from '../shaders/perlin.vert';

/**
 * @param material {THREE.Material}
 */
export default (material) => {

  material.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      `#include <common>`,
      `#include <common>

        varying vec2 vUv;

        ${perlin}
        
      `
    );

    // const x = verts.getX(i);
    // const y = verts.getY(i);
    // const z = verts.getZ(i);
    // const halfRadius = this.radius / 2;
    // const offset = y / Math.min(this.h, 1000);
    // const treeBendingAmt = simplex.noise2D(offset, offset) * halfRadius;
    // const barkShiftingAmt = simplex.noise3D(x, y, z) * 0.15 * halfRadius;
    // verts.setX(i, x + treeBendingAmt + barkShiftingAmt);
    // verts.setY(i, y + barkShiftingAmt);
    // verts.setZ(i, z + barkShiftingAmt);

    shader.vertexShader = shader.vertexShader.replace(
      `#include <begin_vertex>`,
      `#include <begin_vertex>
        float treeBendingAmt = cnoise2d(transformed.yy);
        float barkShiftingAmt = cnoise3d(transformed.xyz) * 0.2; 
        transformed.x += (treeBendingAmt + barkShiftingAmt);
        transformed.y += barkShiftingAmt;
        transformed.z += barkShiftingAmt;
        vUv = uv;
      `
    );
    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <common>`,
      `#include <common>
        varying vec2 vUv;
      `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      `#include <output_fragment>`,
      `#include <output_fragment>

        // gl_FragColor = vec4(vUv.y, vUv.y, vUv.y, 1.0);
      `
    )
  };
}