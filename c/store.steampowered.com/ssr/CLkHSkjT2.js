function _(_) {
  return () => (
    (_ = (_ * 1664525 + 1013904223) % 4294967296), (_ >>> 0) / 4294967296
  );
}
function _() {
  return Math.floor(Math.random() * 4294967296);
}
export { _, _ };
