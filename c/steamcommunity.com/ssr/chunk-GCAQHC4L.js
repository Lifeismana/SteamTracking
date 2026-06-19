var _ = {
  BackgroundImageCtn: "JAD8UTa-0ek-",
  WorkshopBackgroundGridCtn: "i0jZqaPzWXM-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _, workshop: _, className: _, imageClassName: _, ..._ } = _,
    { data: _ } = _(_),
    { data: _ } = _(_);
  if (!_ || !_) return null;
  let _ =
      _(_, "library_hero_2x") ??
      _(_, "library_hero") ??
      _(_, "raw_page_background"),
    _ = `${_.COMMUNITY_CDN_URL}public/images/sharedfiles/workshop_background_grid.png`;
  return _
    ? (0, _.jsxs)(_.Fragment, {
        children: [
          (0, _.jsx)("div", {
            className: _(_.BackgroundImageCtn, _),
            ..._,
            children: (0, _.jsx)("img", {
              src: _,
              alt: _.name,
              className: _,
            }),
          }),
          _ &&
            (0, _.jsx)(_.Fragment, {
              children: (0, _.jsx)("div", {
                className: _.WorkshopBackgroundGridCtn,
              }),
            }),
        ],
      })
    : null;
}
export { _ };
