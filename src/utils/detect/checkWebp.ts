export function checkWebp(): Promise<boolean> {
  const img: HTMLImageElement = new Image();
  img.src =
    'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
  return new Promise((resolve) => {
    img.onload = function () {
      img.width > 0 && img.height > 0 ? resolve(true) : resolve(false);
    };
    img.onerror = function () {
      resolve(false);
    };
  });
}
