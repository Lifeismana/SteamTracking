/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6966],
  {
    90023: (e, o, r) => {
      r.r(o), r.d(o, { default: () => d });
      var t = r(7850),
        n = r(90626),
        i = r(738),
        s = r(9154),
        a = r(97436),
        l = r(99532),
        p = r(96059),
        u = r(78327),
        c = r(28240);
      function d() {
        return (
          (0, n.useEffect)(
            () => (
              (window.g_ShowLoginDialog = (e) =>
                (0, i.pg)((0, t.jsx)(w, { redirectUrl: e }), window, {
                  popupWidth: 700,
                  popupHeight: 440,
                })),
              () => {
                delete window.g_ShowLoginDialog;
              }
            ),
            [],
          ),
          null
        );
      }
      function w(e) {
        const { redirectUrl: o = u.TS.PARTNER_BASE_URL, closeModal: r } = e,
          i = (0, n.useRef)(
            new p.D(u.TS.WEBAPI_BASE_URL).GetServiceTransport(),
          ).current,
          [d, w] = (0, n.useState)(!1);
        return (0, t.jsx)(s.x_, {
          onEscKeypress: r,
          hideTopBar: !0,
          bDisableBackgroundDismiss: !0,
          children: d
            ? (0, t.jsx)(a.Fn, {})
            : (0, t.jsx)(a.YN, {
                platform: l.SS.tS,
                transport: i,
                onComplete: (e) => {
                  e == c.wI.k_PrimaryDomainFail
                    ? w(!0)
                    : window.location.assign(o);
                },
                autoFocus: !0,
                theme: "modal",
                redirectUrl: o,
              }),
        });
      }
    },
  },
]);
