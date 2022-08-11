import { createSync } from "./builder";

self.addEventListener("message", (e) => {
  const mesh = createSync({
    ...e.data,
    onBranchCreated: (progress) =>
      postMessage({
        type: "loading",
        payload: progress,
      })
  });

  const arrayBuffers = [];
  for (let attributeName of Object.keys(mesh.geometry.attributes)) {
    arrayBuffers.push(mesh.geometry.attributes[attributeName].array.buffer);
  }

  postMessage(
    {
      type: "done",
      payload: mesh.toJSON(),
    },
    arrayBuffers
  );
});
