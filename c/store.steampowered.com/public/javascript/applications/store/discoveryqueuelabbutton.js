import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import "./modals.js?contenthash=-J0D2LgG";
import { _, _, _, _, _, _, _ } from "./main.js?contenthash=BznMolNX";
import { _ } from "./preloaddiscoveryqueue.js?contenthash=m1c-XLkw";
var _ = _(_()),
  _ = _();
function _(_) {
  let _ = _(),
    { showDiscoveryQueue: _ } = _(0),
    _ = _.useCallback(() => {
      _.logged_in
        ? _()
        : _(
            (0, _.jsx)(_, {
              onOK: () => {
                window.location.href = `${_.STORE_BASE_URL}login?redir=${encodeURIComponent(document.location.href)}`;
              },
              strOKButtonText: _(`#DiscoveryQueue_Error_Login_Title`),
              strDescription: _(`#DiscoveryQueue_Error_Login`),
              strTitle: _(`#DiscoveryQueue_Error_Login_Title`),
            }),
            window,
          );
    }, [_]);
  return _
    ? (0, _.jsx)(_, {
        children: (0, _.jsx)(`a`, {
          onClick: _,
          className: `experiment-button`,
          children: _(`#DiscoveryQueue_OpenWizard`),
        }),
      })
    : (0, _.jsx)(`div`, {
        className: `experiment-button-placeholder`,
        children: `\xA0`,
      });
}
export { _ as default };
