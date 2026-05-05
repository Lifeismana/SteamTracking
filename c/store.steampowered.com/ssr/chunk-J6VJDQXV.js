function _(_) {
  if (0) var _;
}
var _ = _(_(), 1);
function _() {
  let _ = document.querySelector("head meta[property='valve:snr']")?.content;
  return {
    title: document.title,
    description: document.querySelector("head meta[property='description']")
      ?.content,
    shareTitle: document.querySelector("head meta[property='og:title']")
      ?.content,
    shareImage: document.querySelector("head meta[property='og:image']")
      ?.content,
    snr: _ ? _.ParseSNR(_) : void 0,
    csp: void 0,
  };
}
var _ = _(_(), 1);
async function _() {
  let _ = await Promise.all(
    window.SSR?.clientAssets?._.map((_) => import(_.href)) ?? [],
  );
  return (
    await _(),
    _.filter((_) => "route" in _ && "Component" in _.route).map((_) => _.route)
  );
}
async function _() {
  if (window.SSR?.reactRoot) return;
  let [_, _] = await Promise.all([
    _(),
    _((window.SSR?.loaderData ?? []).map(_), void 0),
  ]);
  if (((window.SSR ??= {}), !window.SSR.clientAssets))
    throw "Missing SSR clientAssets";
  let _ = window.SSR.clientAssets,
    _ = window.SSR.renderContext ?? {};
  _(_.manifest),
    _({
      assetData: _,
      metadata: _(),
      loaderData: _,
      _: 0,
      renderContext: _,
      scrollPosition: {
        _: 0,
        _: 0,
      },
    }),
    _(_),
    (window.SSR.reactRoot = (0, _.hydrateRoot)(
      document,
      (0, _.jsx)(_, {
        pageRoutes: _,
        clientAssets: _,
        metadata: _(),
        loaderData: _,
        renderContext: _,
      }),
    ));
}
export { _, _ };
