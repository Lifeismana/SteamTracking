var _ = _(_(), 1);
async function _(_, _) {
  let _ = _(_.STORE_BASE_URL, _, _.country_code);
  return (await (await fetch(_)).json()).rgOwnedApps || [];
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return new Set();
      let _ = await _(_, _);
      return new Set(_);
    },
    staleTime: 600 * 1e3,
  };
}
function _(_) {
  let { data: _ } = _();
  return _ === void 0 ? void 0 : _.has(_);
}
function _(_) {
  let _ = _(),
    _ = _.accountid;
  return _.default.useCallback(
    (_) => {
      _.setQueryData(_(_), (_) =>
        _ ? new Set([..._.values(), ..._]) : _ ? new Set(_) : void 0,
      );
    },
    [_, _, _],
  );
}
function _(_) {
  return ["AccountOwnedApps", _ ?? 0];
}
function _(_) {
  let { data: _ } = _(_ && "appid" in _ ? void 0 : _),
    { data: _ } = _(),
    _;
  return (
    _ && "appid" in _ ? (_ = [_.appid]) : _ && (_ = _.included_appids),
    _ === void 0 || _ === void 0 || _.length == 0
      ? {
          bIsOwned: void 0,
          unAppID: void 0,
        }
      : {
          bIsOwned: !_.some((_) => !_.has(_)),
          unAppID: _[0],
        }
  );
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = {
  CapsuleMicroTrailer: "Acv6ZIJxoFk-",
  GrowOnHoverSmall: "_7QBdLN5HD9A-",
  GrowOnHoverMedium: "oFuClJZIqYM-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _, active: _, bIsHoverMode: _, eGrowOnHover: _ } = _,
    { data: _ } = _(_),
    _ = _.default.useRef(0),
    _ = _.default.useRef(null);
  _.default.useLayoutEffect(() => {
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
      _ = _.GrowOnHoverSmall;
      break;
    case 2:
      _ = _.GrowOnHoverMedium;
      break;
  }
  let _ = _[0];
  return (0, _.jsx)("video", {
    className: (0, _.default)(_.CapsuleMicroTrailer, _),
    loop: !0,
    muted: !0,
    controls: !1,
    autoPlay: !0,
    ref: _,
    onTimeUpdate: _,
    children: _.microtrailer?.map((_) =>
      _.IN_CLIENT && _.type == "video/mp4"
        ? null
        : (0, _.jsx)(
            "source",
            {
              src: _(_, _.filename || ""),
              type: _.type,
            },
            _.filename,
          ),
    ),
  });
}
function _(_) {
  let _ = _(),
    _ = _();
  return _({
    mutationFn: () => _(_, _),
    onSuccess(_) {
      let [
        _,
        { packageids_added: _, appids_added: _, purchase_result_detail: _ },
      ] = _;
      _ && _(_);
    },
  });
}
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_item_id(_.fromObject(_));
  let _ = await _.AddFreeLicense(_, _);
  return [_.GetEResult(), _.Body().toObject()];
}
export { _, _, _, _, _ };
