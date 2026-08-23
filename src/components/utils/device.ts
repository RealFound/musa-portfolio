// Cihaz gücüne göre 3D efektleri kısmak için basit tespit.
// Dokunmatik + küçük/kısa ekran veya düşük çekirdek sayısı = düşük güçlü kabul et.
export const isLowPowerDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const smallScreen =
    window.innerWidth < 768 || window.innerHeight < 768;
  const lowCores =
    navigator.hardwareConcurrency !== undefined &&
    navigator.hardwareConcurrency <= 4;
  return (touch && smallScreen) || lowCores;
};
