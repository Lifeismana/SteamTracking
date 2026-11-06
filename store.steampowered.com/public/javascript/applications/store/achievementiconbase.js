/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { o as e } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { Lt as t, ft as n } from "./libraries.js?contenthash=CNC_iAx3";
import {
  Cb as r,
  Hb as i,
  Sb as a,
  Sc as o,
} from "./main.js?contenthash=BznMolNX";
function s(e) {
  let { appid: t, profileUrl: n, dlc: r } = e,
    a = n
      ? `${n}/achievements/${t}`
      : `${i.COMMUNITY_BASE_URL}achievements/${t}`;
  return r === void 0 ? a : `${a}?dlc=${r}`;
}
function c(e) {
  return s(e);
}
var l = e(t(), 1),
  u = `CK7wluN09Eo-`,
  d = `dc7pWlMQLmU-`,
  f = `gKxbRyrbiIU-`,
  p = {};
(p.arabic = () =>
  a(
    () => import(`./achievements_arabic.js?contenthash=Bgub2UJW`),
    [],
    import.meta.url,
  )),
  (p.brazilian = () =>
    a(
      () => import(`./achievements_brazilian.js?contenthash=SkLEXqK0`),
      [],
      import.meta.url,
    )),
  (p.bulgarian = () =>
    a(
      () => import(`./achievements_bulgarian.js?contenthash=CroClk0w`),
      [],
      import.meta.url,
    )),
  (p.czech = () =>
    a(
      () => import(`./achievements_czech.js?contenthash=D34tWesk`),
      [],
      import.meta.url,
    )),
  (p.danish = () =>
    a(
      () => import(`./achievements_danish.js?contenthash=DQU04KFS`),
      [],
      import.meta.url,
    )),
  (p.dutch = () =>
    a(
      () => import(`./achievements_dutch.js?contenthash=DsvNIUr9`),
      [],
      import.meta.url,
    )),
  (p.english = () =>
    a(
      () => import(`./achievements_english.js?contenthash=BnuZFCVC`),
      [],
      import.meta.url,
    )),
  (p.finnish = () =>
    a(
      () => import(`./achievements_finnish.js?contenthash=5RN_c7gx`),
      [],
      import.meta.url,
    )),
  (p.french = () =>
    a(
      () => import(`./achievements_french.js?contenthash=DPUR7qm4`),
      [],
      import.meta.url,
    )),
  (p.german = () =>
    a(
      () => import(`./achievements_german.js?contenthash=C15OUeRf`),
      [],
      import.meta.url,
    )),
  (p.greek = () =>
    a(
      () => import(`./achievements_greek.js?contenthash=-PZPCoWr`),
      [],
      import.meta.url,
    )),
  (p.hungarian = () =>
    a(
      () => import(`./achievements_hungarian.js?contenthash=B9haiPex`),
      [],
      import.meta.url,
    )),
  (p.indonesian = () =>
    a(
      () => import(`./achievements_indonesian.js?contenthash=BsLBBvqo`),
      [],
      import.meta.url,
    )),
  (p.italian = () =>
    a(
      () => import(`./achievements_italian.js?contenthash=CrIzzniS`),
      [],
      import.meta.url,
    )),
  (p.japanese = () =>
    a(
      () => import(`./achievements_japanese.js?contenthash=T9YFQfLY`),
      [],
      import.meta.url,
    )),
  (p.koreana = () =>
    a(
      () => import(`./achievements_koreana.js?contenthash=DCzrsY86`),
      [],
      import.meta.url,
    )),
  (p.latam = () =>
    a(
      () => import(`./achievements_latam.js?contenthash=BZKbAwcA`),
      [],
      import.meta.url,
    )),
  (p.malay = () =>
    a(
      () => import(`./achievements_malay.js?contenthash=L8DvJodu`),
      [],
      import.meta.url,
    )),
  (p.norwegian = () =>
    a(
      () => import(`./achievements_norwegian.js?contenthash=0gZVpCto`),
      [],
      import.meta.url,
    )),
  (p.polish = () =>
    a(
      () => import(`./achievements_polish.js?contenthash=CKXMEH8j`),
      [],
      import.meta.url,
    )),
  (p.portuguese = () =>
    a(
      () => import(`./achievements_portuguese.js?contenthash=B_KmYm6U`),
      [],
      import.meta.url,
    )),
  (p.romanian = () =>
    a(
      () => import(`./achievements_romanian.js?contenthash=HoH1qWn6`),
      [],
      import.meta.url,
    )),
  (p.russian = () =>
    a(
      () => import(`./achievements_russian.js?contenthash=DgtQp5ge`),
      [],
      import.meta.url,
    )),
  (p.sc_schinese = () =>
    a(
      () => import(`./achievements_sc_schinese.js?contenthash=5akBnFuf`),
      [],
      import.meta.url,
    )),
  (p.schinese = () =>
    a(
      () => import(`./achievements_schinese.js?contenthash=6CXN6AIo`),
      [],
      import.meta.url,
    )),
  (p.spanish = () =>
    a(
      () => import(`./achievements_spanish.js?contenthash=DBmXjLJN`),
      [],
      import.meta.url,
    )),
  (p.swedish = () =>
    a(
      () => import(`./achievements_swedish.js?contenthash=CaoyMuEh`),
      [],
      import.meta.url,
    )),
  (p.tchinese = () =>
    a(
      () => import(`./achievements_tchinese.js?contenthash=DjiZhi5i`),
      [],
      import.meta.url,
    )),
  (p.thai = () =>
    a(
      () => import(`./achievements_thai.js?contenthash=Duqq2WgB`),
      [],
      import.meta.url,
    )),
  (p.turkish = () =>
    a(
      () => import(`./achievements_turkish.js?contenthash=Dg8Zq-k1`),
      [],
      import.meta.url,
    )),
  (p.ukrainian = () =>
    a(
      () => import(`./achievements_ukrainian.js?contenthash=DbB4q6UX`),
      [],
      import.meta.url,
    )),
  (p.vietnamese = () =>
    a(
      () => import(`./achievements_vietnamese.js?contenthash=DldRheRO`),
      [],
      import.meta.url,
    ));
async function m(e) {
  if (p[e]) return await p[e]();
}
var h = r(m);
function g(e) {
  return e !== void 0 && e < 10;
}
var _ = n();
function v(e) {
  if (e !== void 0) return { "--icon-size": e == `fill` ? `100%` : `${e}px` };
}
function y(e) {
  let {
      imgURL: t,
      glow: n,
      pauseAnimation: r,
      hidden: i,
      alt: a,
      hideNativeTooltip: s = !1,
      className: c,
      size: p,
      ...m
    } = e,
    [h, g] = l.useState(!1),
    y = l.useCallback((e) => {
      e &&
        (e.complete
          ? g(!0)
          : (e.onload = () => {
              g(!0);
            }));
    }, []),
    b = n && (i || h),
    x = v(p);
  return (0, _.jsxs)(`div`, {
    className: o(d, c, r && `QitWOKeXzIo-`),
    style: x,
    ...m,
    children: [
      b &&
        (0, _.jsx)(`div`, {
          className: `pZot2CAG0rQ-`,
          children: (0, _.jsx)(`div`, {
            className: `tzerkVxSWek-`,
            children: (0, _.jsx)(`div`, { className: `rl2nPtOHt2k-` }),
          }),
        }),
      i
        ? (0, _.jsx)(`div`, {
            className: o(f, b && `HTU-WDYrxMw-`),
            children: `?`,
          })
        : (0, _.jsx)(`img`, {
            ref: y,
            className: o(u, b && `HTU-WDYrxMw-`),
            src: t == `` ? void 0 : t,
            loading: `lazy`,
            alt: a,
            title: s ? void 0 : a,
          }),
    ],
  });
}
function b(e) {
  let {
      achievement: t,
      globalUnlockPercentage: n,
      unlocked: r,
      forceVisible: i = !1,
      hidden: a,
      ...o
    } = e,
    s = a ?? (!r && !i && t.hidden),
    c = (r ? t.icon_achieved : t.icon_unachieved) ?? ``,
    l = r && g(n),
    u = s ? h.Localize(`#AchievementSpoilerName`) : (t.name ?? ` `);
  return (0, _.jsx)(y, { hidden: s, imgURL: c, glow: l, alt: u, ...o });
}
export { c as i, y as n, h as r, b as t };
