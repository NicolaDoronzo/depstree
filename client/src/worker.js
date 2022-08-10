import { createDepsTreeSync } from "./depstree";

self.addEventListener("message", (e) => {
  const mesh = createDepsTreeSync({...e.data, instanced: true });

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
});
