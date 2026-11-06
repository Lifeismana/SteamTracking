import { _, _, _, _ } from "./mobx.esm.js?contenthash=CQiZDS-T";
import { _, _ } from "./dialogs.js?contenthash=D2HH3Ebx";
import { _, _, _ } from "./logindialog.js?contenthash=C3o7S94R";
import "./modals.js?contenthash=B-zy_ctt";
import { _, _ } from "./browserapi.js?contenthash=B4KRK3Fl";
var _ = _(_()),
  _ = _();
function _() {
  return (
    (0, _.useEffect)(
      () => (
        (window.g_ShowLoginDialog = (_) =>
          _(
            (0, _.jsx)(_, {
              redirectUrl: _,
            }),
            window,
            {
              popupWidth: 700,
              popupHeight: 440,
            },
          )),
        () => {
          delete window.g_ShowLoginDialog;
        }
      ),
      [],
    ),
    null
  );
}
function _(_) {
  let { redirectUrl: _ = _.PARTNER_BASE_URL, closeModal: _ } = _,
    _ = (0, _.useRef)(
      _(new _(_.WEBAPI_BASE_URL)).GetServiceTransport(),
    ).current,
    [_, _] = (0, _.useState)(!1);
  return (0, _.jsx)(_, {
    onEscKeypress: _,
    hideTopBar: !0,
    bDisableBackgroundDismiss: !0,
    children: _
      ? (0, _.jsx)(_, {})
      : (0, _.jsx)(_, {
          platform: 2,
          transport: _,
          onComplete: (_) => {
            _ == _.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
          },
          autoFocus: !0,
          theme: `modal`,
          redirectUrl: _,
        }),
  });
}
export { _ as default };
