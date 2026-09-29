var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `HH5ALP-yy9w-`,
  _ = `pL7LfiRjyGI-`,
  _ = `bL9vWoA1bDE-`,
  _ = _(),
  _ = (function (_) {
    return (
      (_[(_.k_ETrailerGrowAmount_None = 0)] = `k_ETrailerGrowAmount_None`),
      (_[(_.k_ETrailerGrowAmount_Implicit = 1)] =
        `k_ETrailerGrowAmount_Implicit`),
      (_[(_.k_ETrailerGrowAmount_Medium = 2)] = `k_ETrailerGrowAmount_Medium`),
      _
    );
  })({});
function _(_) {
  let { _: _, active: _, bIsHoverMode: _, eGrowOnActivate: _ } = _,
    { data: _ } = _(_),
    _ = _.useRef(0),
    _ = _.useRef(null);
  _.useLayoutEffect(() => {
    _ && _.current && (_.current.currentTime = _.current);
  }, [_]);
  let _ = (_) => {
      _.current = _.currentTarget.currentTime;
    },
    _ = _(_ ? _ : void 0);
  if ((_ && _.IN_MOBILE) || !_ || !_ || !_.visible || !_) return null;
  let _ = _.filter((_) => _.microtrailer && _.microtrailer.length > 0);
  if (_.length === 0)
    return _ && _.related_items?.parent_appid && (_.type == 1 || _.type == 12)
      ? (0, _.jsx)(_, {
          ..._,
          _: {
            appid: _.related_items.parent_appid,
          },
        })
      : null;
  let _;
  switch (_) {
    case 1:
      _ = _;
      break;
    case 2:
      _ = _;
      break;
  }
  let _ = _[0];
  return (0, _.jsx)(`video`, {
    className: (0, _.default)(_, _),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: _,
    playsInline: !0,
    onTimeUpdate: _,
    children: (0, _.jsx)(_, {
      trailer: _,
    }),
  });
}
function _(_) {
  let { trailer: _ } = _;
  return !_ || !_.microtrailer
    ? null
    : (0, _.jsx)(_.Fragment, {
        children: _.microtrailer?.map((_) =>
          _.IN_CLIENT && _.type == `video/mp4`
            ? null
            : (0, _.jsx)(
                `source`,
                {
                  src: _(_, _.filename || ``),
                  type: _.type,
                },
                _.filename,
              ),
        ),
      });
}
export { _, _, _ };
