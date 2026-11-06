/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as e, ft as t } from "./libraries.js?contenthash=CNC_iAx3";
import { n } from "./storeurl.js?contenthash=DQcOzpFx";
import {
  Cb as r,
  Cl as i,
  En as a,
  Sb as o,
  la as s,
  pn as c,
  xb as l,
} from "./main.js?contenthash=BznMolNX";
e();
var u = {};
(u.arabic = () =>
  o(
    () => import(`./saletech_arabic.js?contenthash=2yCQ0ko8`),
    [],
    import.meta.url,
  )),
  (u.brazilian = () =>
    o(
      () => import(`./saletech_brazilian.js?contenthash=CTfNXcXx`),
      [],
      import.meta.url,
    )),
  (u.bulgarian = () =>
    o(
      () => import(`./saletech_bulgarian.js?contenthash=BRaHwcJI`),
      [],
      import.meta.url,
    )),
  (u.czech = () =>
    o(
      () => import(`./saletech_czech.js?contenthash=DJmeP0n7`),
      [],
      import.meta.url,
    )),
  (u.danish = () =>
    o(
      () => import(`./saletech_danish.js?contenthash=BTUGnkx4`),
      [],
      import.meta.url,
    )),
  (u.dutch = () =>
    o(
      () => import(`./saletech_dutch.js?contenthash=Dc9Ysny4`),
      [],
      import.meta.url,
    )),
  (u.english = () =>
    o(
      () => import(`./saletech_english.js?contenthash=CAnOGPSp`),
      [],
      import.meta.url,
    )),
  (u.finnish = () =>
    o(
      () => import(`./saletech_finnish.js?contenthash=BjDGgkIz`),
      [],
      import.meta.url,
    )),
  (u.french = () =>
    o(
      () => import(`./saletech_french.js?contenthash=DuoNc9DG`),
      [],
      import.meta.url,
    )),
  (u.german = () =>
    o(
      () => import(`./saletech_german.js?contenthash=BNdtJH68`),
      [],
      import.meta.url,
    )),
  (u.greek = () =>
    o(
      () => import(`./saletech_greek.js?contenthash=CChaowuV`),
      [],
      import.meta.url,
    )),
  (u.hungarian = () =>
    o(
      () => import(`./saletech_hungarian.js?contenthash=BqgjpGR6`),
      [],
      import.meta.url,
    )),
  (u.indonesian = () =>
    o(
      () => import(`./saletech_indonesian.js?contenthash=CFhC_bB8`),
      [],
      import.meta.url,
    )),
  (u.italian = () =>
    o(
      () => import(`./saletech_italian.js?contenthash=CIcdryqr`),
      [],
      import.meta.url,
    )),
  (u.japanese = () =>
    o(
      () => import(`./saletech_japanese.js?contenthash=C5peSQnc`),
      [],
      import.meta.url,
    )),
  (u.koreana = () =>
    o(
      () => import(`./saletech_koreana.js?contenthash=BSPvOjLE`),
      [],
      import.meta.url,
    )),
  (u.latam = () =>
    o(
      () => import(`./saletech_latam.js?contenthash=CGORQmUp`),
      [],
      import.meta.url,
    )),
  (u.malay = () =>
    o(
      () => import(`./saletech_malay.js?contenthash=Duzlp1-H`),
      [],
      import.meta.url,
    )),
  (u.norwegian = () =>
    o(
      () => import(`./saletech_norwegian.js?contenthash=C6W9OUCH`),
      [],
      import.meta.url,
    )),
  (u.polish = () =>
    o(
      () => import(`./saletech_polish.js?contenthash=lsHMUo9c`),
      [],
      import.meta.url,
    )),
  (u.portuguese = () =>
    o(
      () => import(`./saletech_portuguese.js?contenthash=h6qM3Prz`),
      [],
      import.meta.url,
    )),
  (u.romanian = () =>
    o(
      () => import(`./saletech_romanian.js?contenthash=BRk94Ln4`),
      [],
      import.meta.url,
    )),
  (u.russian = () =>
    o(
      () => import(`./saletech_russian.js?contenthash=BtiEa2Pz`),
      [],
      import.meta.url,
    )),
  (u.sc_schinese = () =>
    o(
      () => import(`./saletech_sc_schinese.js?contenthash=BKSJU5Cw`),
      [],
      import.meta.url,
    )),
  (u.schinese = () =>
    o(
      () => import(`./saletech_schinese.js?contenthash=0VnoQpxU`),
      [],
      import.meta.url,
    )),
  (u.spanish = () =>
    o(
      () => import(`./saletech_spanish.js?contenthash=61E19XQd`),
      [],
      import.meta.url,
    )),
  (u.swedish = () =>
    o(
      () => import(`./saletech_swedish.js?contenthash=C73e0JQi`),
      [],
      import.meta.url,
    )),
  (u.tchinese = () =>
    o(
      () => import(`./saletech_tchinese.js?contenthash=COuGhuoq`),
      [],
      import.meta.url,
    )),
  (u.thai = () =>
    o(
      () => import(`./saletech_thai.js?contenthash=C_n7Zu4N`),
      [],
      import.meta.url,
    )),
  (u.turkish = () =>
    o(
      () => import(`./saletech_turkish.js?contenthash=DLj8AscS`),
      [],
      import.meta.url,
    )),
  (u.ukrainian = () =>
    o(
      () => import(`./saletech_ukrainian.js?contenthash=Bce6npAU`),
      [],
      import.meta.url,
    )),
  (u.vietnamese = () =>
    o(
      () => import(`./saletech_vietnamese.js?contenthash=BM_Pkgtn`),
      [],
      import.meta.url,
    ));
async function d(e) {
  if (u[e]) return await u[e]();
}
var f = r(d),
  p = t();
function m(e) {
  let { closeModal: t, strDescOverride: r } = e;
  return (0, p.jsx)(a, {
    strTitle: f.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: r || f.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: t,
    strOKButtonText: l.Localize(`#Button_OK`),
    onOK: () => {
      n(), t();
    },
  });
}
function h(e) {
  let [t, n, r] = i();
  return {
    elDialogElement: (0, p.jsx)(c, {
      active: t,
      children: (0, p.jsx)(m, { closeModal: r, strDescOverride: e }),
    }),
    fnShowLogonDialog: n,
  };
}
function g(e) {
  let { label: t, strDialogDesc: n } = e,
    { elDialogElement: r, fnShowLogonDialog: i } = h(n);
  return (0, p.jsxs)(p.Fragment, {
    children: [
      (0, p.jsx)(s, { onClick: i, children: t || l.Localize(`#Login_SignIn`) }),
      r,
    ],
  });
}
export { h as n, f as r, g as t };
