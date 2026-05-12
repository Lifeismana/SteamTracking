function _(_) {
  return {
    ..._,
    useLoaderData() {
      return _();
    },
    useRefetchLoader() {
      return _();
    },
  };
}
export { _ };
