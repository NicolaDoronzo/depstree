export const takeScreenshot = (canvas, format = "image/jpeg") => {
  const base64 = canvas.toDataURL(format, 1.0);
  const a = document.createElement("a");
  a.href = base64;
  a.download = new Date().toUTCString();
  a.click();
};
