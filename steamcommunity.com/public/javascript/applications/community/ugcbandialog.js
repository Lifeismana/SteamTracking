/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Pt as t, ot as n } from "./libraries.js?contenthash=BSMOk6Fq";
import { t as r } from "./segmentedcontrol.js?contenthash=805r5BY7";
import { t as i } from "./textarea.js?contenthash=BFWS2Z4-";
import { t as a } from "./moderationreasonpicker.js?contenthash=BDmMKDgA";
import { n as o, r as s } from "./basebuttons.js?contenthash=C8_9mAcy";
import {
  B as c,
  Bt as l,
  Ht as u,
  Jf as d,
  Jt as f,
  K as p,
  _f as m,
  b as h,
  et as g,
  fm as _,
  st as v,
  vf as y,
} from "./main.js?contenthash=DniUHuiT";
var b = {};
(b.arabic = () =>
  d(
    () => import(`./workshop_ui_arabic.js?contenthash=CgNIBhO_`),
    [],
    import.meta.url,
  )),
  (b.brazilian = () =>
    d(
      () => import(`./workshop_ui_brazilian.js?contenthash=B0sPpj2s`),
      [],
      import.meta.url,
    )),
  (b.bulgarian = () =>
    d(
      () => import(`./workshop_ui_bulgarian.js?contenthash=DkaXDrVT`),
      [],
      import.meta.url,
    )),
  (b.czech = () =>
    d(
      () => import(`./workshop_ui_czech.js?contenthash=CR55SdKt`),
      [],
      import.meta.url,
    )),
  (b.danish = () =>
    d(
      () => import(`./workshop_ui_danish.js?contenthash=6D-UZiLV`),
      [],
      import.meta.url,
    )),
  (b.dutch = () =>
    d(
      () => import(`./workshop_ui_dutch.js?contenthash=D8fsuUGc`),
      [],
      import.meta.url,
    )),
  (b.english = () =>
    d(
      () => import(`./workshop_ui_english.js?contenthash=Dh-vG6eu`),
      [],
      import.meta.url,
    )),
  (b.finnish = () =>
    d(
      () => import(`./workshop_ui_finnish.js?contenthash=b1u8ToRO`),
      [],
      import.meta.url,
    )),
  (b.french = () =>
    d(
      () => import(`./workshop_ui_french.js?contenthash=MYrTJhSj`),
      [],
      import.meta.url,
    )),
  (b.german = () =>
    d(
      () => import(`./workshop_ui_german.js?contenthash=BN4ZrqFq`),
      [],
      import.meta.url,
    )),
  (b.greek = () =>
    d(
      () => import(`./workshop_ui_greek.js?contenthash=JL3thF17`),
      [],
      import.meta.url,
    )),
  (b.hungarian = () =>
    d(
      () => import(`./workshop_ui_hungarian.js?contenthash=BsnWlAZM`),
      [],
      import.meta.url,
    )),
  (b.indonesian = () =>
    d(
      () => import(`./workshop_ui_indonesian.js?contenthash=zE67BC1s`),
      [],
      import.meta.url,
    )),
  (b.italian = () =>
    d(
      () => import(`./workshop_ui_italian.js?contenthash=xERCkQbq`),
      [],
      import.meta.url,
    )),
  (b.japanese = () =>
    d(
      () => import(`./workshop_ui_japanese.js?contenthash=Dov3V6rn`),
      [],
      import.meta.url,
    )),
  (b.koreana = () =>
    d(
      () => import(`./workshop_ui_koreana.js?contenthash=By_90HD-`),
      [],
      import.meta.url,
    )),
  (b.latam = () =>
    d(
      () => import(`./workshop_ui_latam.js?contenthash=7eQMNkyZ`),
      [],
      import.meta.url,
    )),
  (b.malay = () =>
    d(
      () => import(`./workshop_ui_malay.js?contenthash=CLq3oWlj`),
      [],
      import.meta.url,
    )),
  (b.norwegian = () =>
    d(
      () => import(`./workshop_ui_norwegian.js?contenthash=Bid4XHar`),
      [],
      import.meta.url,
    )),
  (b.polish = () =>
    d(
      () => import(`./workshop_ui_polish.js?contenthash=BimpAq1a`),
      [],
      import.meta.url,
    )),
  (b.portuguese = () =>
    d(
      () => import(`./workshop_ui_portuguese.js?contenthash=b8Iv1h4A`),
      [],
      import.meta.url,
    )),
  (b.romanian = () =>
    d(
      () => import(`./workshop_ui_romanian.js?contenthash=C67Ar53h`),
      [],
      import.meta.url,
    )),
  (b.russian = () =>
    d(
      () => import(`./workshop_ui_russian.js?contenthash=BKv2RrYr`),
      [],
      import.meta.url,
    )),
  (b.sc_schinese = () =>
    d(
      () => import(`./workshop_ui_sc_schinese.js?contenthash=Bz1NNdNu`),
      [],
      import.meta.url,
    )),
  (b.schinese = () =>
    d(
      () => import(`./workshop_ui_schinese.js?contenthash=DeW-Oh8Y`),
      [],
      import.meta.url,
    )),
  (b.spanish = () =>
    d(
      () => import(`./workshop_ui_spanish.js?contenthash=7q8KAtNQ`),
      [],
      import.meta.url,
    )),
  (b.swedish = () =>
    d(
      () => import(`./workshop_ui_swedish.js?contenthash=Cs391RAc`),
      [],
      import.meta.url,
    )),
  (b.tchinese = () =>
    d(
      () => import(`./workshop_ui_tchinese.js?contenthash=AkPDnYo9`),
      [],
      import.meta.url,
    )),
  (b.thai = () =>
    d(
      () => import(`./workshop_ui_thai.js?contenthash=CzHJQhth`),
      [],
      import.meta.url,
    )),
  (b.turkish = () =>
    d(
      () => import(`./workshop_ui_turkish.js?contenthash=DlRYw-w1`),
      [],
      import.meta.url,
    )),
  (b.ukrainian = () =>
    d(
      () => import(`./workshop_ui_ukrainian.js?contenthash=4gY23YYZ`),
      [],
      import.meta.url,
    )),
  (b.vietnamese = () =>
    d(
      () => import(`./workshop_ui_vietnamese.js?contenthash=qFDc39VG`),
      [],
      import.meta.url,
    ));
async function x(e) {
  if (b[e]) return await b[e]();
}
var S = y(x),
  C = `ZIf4FUEhPes-`,
  w = e(t(), 1),
  T = n(),
  E = [
    { labelToken: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
      eModerationReason: 2,
    },
  ],
  D = [
    { labelToken: `#Workshop_ItemAdmin_Ban_Preset_None` },
    {
      labelToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNotice`,
      reasonToken: `#Workshop_ItemAdmin_Ban_Preset_NoCounterNoticeReason`,
    },
  ],
  O = [`copyright`, `other`],
  k = [`copyright`, `malware`, `other`],
  A = {
    copyright: `#Workshop_ItemAdmin_Ban_Preset_Copyright`,
    malware: `#Workshop_ItemAdmin_Ban_Category_Malware`,
    other: `#Workshop_ItemAdmin_Ban_Category_Other`,
  };
function j(e) {
  return g.Localize(`#moderation_ugcban_default_note`, c(e));
}
function M(e) {
  let {
      bBanned: t,
      bIsSupport: n,
      bWorkshopContent: d,
      onConfirm: g,
      onError: _,
      onClose: y,
    } = e,
    b = n && !t,
    x = !n && !t,
    [M, N] = (0, w.useState)(e.strBanReason),
    [P, F] = (0, w.useState)(null),
    [I, L] = (0, w.useState)(!1),
    [R, z] = (0, w.useState)(null),
    [B, V] = (0, w.useState)(!1),
    H = t ? D : E,
    U = S.Localize(
      t ? `#Workshop_ItemAdmin_Ban_Unset` : `#Workshop_ItemAdmin_Ban_Set`,
    ),
    W =
      !B &&
      M.trim().length > 1 &&
      !(b && P === null) &&
      !(x && d && R === null);
  return I
    ? (0, T.jsx)(h, {
        className: C,
        strTitle: U,
        onClose: y,
        children: (0, T.jsx)(a, {
          reasons: p(),
          onSelect: (e) => {
            e !== null &&
              ((!M.trim() || (P !== null && M === j(P))) && N(j(e)), F(e)),
              L(!1);
          },
        }),
      })
    : (0, T.jsxs)(h, {
        className: C,
        strTitle: U,
        onClose: y,
        children: [
          n &&
            (0, T.jsxs)(f, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                b &&
                  (0, T.jsxs)(f, {
                    direction: `row`,
                    gap: `2`,
                    align: `center`,
                    children: [
                      (0, T.jsx)(l, {
                        children: S.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                      }),
                      (0, T.jsx)(u, {
                        size: `1`,
                        color: `dull`,
                        onClick: () => L(!0),
                        children:
                          P === null
                            ? S.Localize(
                                `#Workshop_ItemAdmin_Ban_Reason_Unselected`,
                              )
                            : c(P),
                      }),
                    ],
                  }),
                (0, T.jsxs)(f, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, T.jsx)(l, {
                      children: S.Localize(`#Workshop_ItemAdmin_Ban_Presets`),
                    }),
                    (0, T.jsx)(v, {
                      options: H,
                      getOptionLabel: (e) => S.Localize(e.labelToken),
                      selectedValue: null,
                      placeholder: S.Localize(H[0].labelToken),
                      onSelectionChange: (e) => {
                        N(e.reasonToken ? S.Localize(e.reasonToken) : ``),
                          e.eModerationReason !== void 0 &&
                            P === null &&
                            F(e.eModerationReason);
                      },
                    }),
                  ],
                }),
              ],
            }),
          x &&
            (0, T.jsxs)(f, {
              direction: `column`,
              gap: `2`,
              marginBottom: `2`,
              children: [
                (0, T.jsxs)(f, {
                  direction: `row`,
                  gap: `2`,
                  align: `center`,
                  children: [
                    (0, T.jsx)(l, {
                      children: S.Localize(`#Workshop_ItemAdmin_Ban_Reason`),
                    }),
                    (0, T.jsx)(r, {
                      options: d ? k : O,
                      getOptionLabel: (e) => S.Localize(A[e]),
                      value: R,
                      onValueChange: (e) => {
                        let t = S.Localize(
                          `#Workshop_ItemAdmin_Ban_Preset_CopyrightReason`,
                        );
                        e == `copyright` && M.trim().length === 0
                          ? N(t)
                          : M === t && N(``),
                          z(e);
                      },
                    }),
                  ],
                }),
                R == `malware` &&
                  (0, T.jsx)(l, {
                    children: S.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_MalwareDesc`,
                    ),
                  }),
                R == `other` &&
                  (0, T.jsx)(l, {
                    children: S.Localize(
                      `#Workshop_ItemAdmin_Ban_Category_OtherDesc`,
                    ),
                  }),
              ],
            }),
          (0, T.jsx)(i, {
            value: M,
            onTextChange: N,
            maxLength: 256,
            rows: 6,
            resize: `vertical`,
          }),
          (0, T.jsxs)(f, {
            justify: `end`,
            gap: `3`,
            align: `center`,
            marginTop: `3`,
            children: [
              (0, T.jsx)(o, {
                disabled: !W,
                onClick: () => {
                  V(!0);
                  let e = R == `malware` ? 16 : (P ?? 0);
                  Promise.resolve(g(M.trim(), e)).then(y, (e) => {
                    V(!1), _?.(e);
                  });
                },
                autoFocus: !0,
                children: m.Localize(`#Button_OK`),
              }),
              (0, T.jsx)(s, {
                onClick: y,
                children: (0, T.jsx)(`span`, {
                  children: m.Localize(`#Button_Cancel`),
                }),
              }),
            ],
          }),
        ],
      });
}
function N() {
  let [e, t] = w.useState(null);
  return (
    w.useEffect(
      () => (
        (window.ShowUGCBanDialog = (e, n) => {
          t({ ...n, key: Date.now(), fnOnConfirm: e });
        }),
        () => {
          delete window.ShowUGCBanDialog;
        }
      ),
      [],
    ),
    e
      ? (0, T.jsx)(
          M,
          {
            bBanned: !1,
            strBanReason: ``,
            bIsSupport: !!_.is_support,
            bWorkshopContent: !!e.bWorkshopContent,
            onConfirm: (t, n) => e.fnOnConfirm(n, t),
            onClose: () => t(null),
          },
          e.key,
        )
      : null
  );
}
export { N as UGCBanDialogOnGlobalVariable };
