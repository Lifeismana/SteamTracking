import { _, _, _, _, _ } from "./mobx.esm.js?contenthash=CQiZDS-T";
import { _ } from "./storebrowsequerycontext.js?contenthash=IltPrRPI";
import { _, _ } from "./browserapi.js?contenthash=B4KRK3Fl";
import { _ } from "./storeitemcache.js?contenthash=sEBFEsXI";
var _ = _(_());
function _(_) {
  let [_, _] = (0, _.useState)(!1),
    [_] = (0, _.useState)(() => _()),
    _ = (0, _.useMemo)(
      () => ({
        country: _.COUNTRY,
        language: _.LANGUAGE,
        bUsePartnerAPI: !0,
      }),
      [],
    );
  return (
    (0, _.useEffect)(() => (_(!0), _(_)), [_]),
    _
      ? (0, _.createElement)(_, {
          context: _,
          serviceTransportOverride: _.GetServiceTransport(),
          children: _.children,
        })
      : null
  );
}
function _(_) {
  let [_] = (0, _.useState)(() => _()),
    _ = (0, _.useMemo)(
      () => ({
        country: _.COUNTRY,
        language: _.LANGUAGE,
        bUsePartnerAPI: !0,
        bIncludeUnpublished: _.bIncludeUnpublished,
      }),
      [_.bIncludeUnpublished],
    );
  return (0, _.createElement)(_, {
    context: _,
    serviceTransportOverride: _.GetServiceTransport(),
    children: _.children,
  });
}
function _() {
  let _ = _(`partnerbrowse_webapi_token`, `application_config`);
  return _(new _(_.WEBAPI_BASE_URL, _));
}
function _(_) {
  return _.Initialize(_.GetServiceTransport(), _.is_partner_member);
}
export { _, _ };
