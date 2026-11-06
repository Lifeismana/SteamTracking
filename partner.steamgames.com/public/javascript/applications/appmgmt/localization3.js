/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ga as e } from "./dialogs.js?contenthash=D2HH3Ebx";
import { D as t } from "./react-router.js?contenthash=C8paMHEZ";
var n = {};
(n.arabic = () =>
  e(
    () => import(`./pricing_arabic.js?contenthash=D5h0LVE6`),
    [],
    import.meta.url,
  )),
  (n.brazilian = () =>
    e(
      () => import(`./pricing_brazilian.js?contenthash=CZVR3Fgt`),
      [],
      import.meta.url,
    )),
  (n.bulgarian = () =>
    e(
      () => import(`./pricing_bulgarian.js?contenthash=BpiMVyxA`),
      [],
      import.meta.url,
    )),
  (n.czech = () =>
    e(
      () => import(`./pricing_czech.js?contenthash=Dfr-tGWh`),
      [],
      import.meta.url,
    )),
  (n.danish = () =>
    e(
      () => import(`./pricing_danish.js?contenthash=Ls4w6jTp`),
      [],
      import.meta.url,
    )),
  (n.dutch = () =>
    e(
      () => import(`./pricing_dutch.js?contenthash=D_hzHpAV`),
      [],
      import.meta.url,
    )),
  (n.english = () =>
    e(
      () => import(`./pricing_english.js?contenthash=Cpv_k359`),
      [],
      import.meta.url,
    )),
  (n.finnish = () =>
    e(
      () => import(`./pricing_finnish.js?contenthash=bd0cFGjR`),
      [],
      import.meta.url,
    )),
  (n.french = () =>
    e(
      () => import(`./pricing_french.js?contenthash=CMe5D9zg`),
      [],
      import.meta.url,
    )),
  (n.german = () =>
    e(
      () => import(`./pricing_german.js?contenthash=BExJOpfH`),
      [],
      import.meta.url,
    )),
  (n.greek = () =>
    e(
      () => import(`./pricing_greek.js?contenthash=C5Kliez5`),
      [],
      import.meta.url,
    )),
  (n.hungarian = () =>
    e(
      () => import(`./pricing_hungarian.js?contenthash=CWdhaXEf`),
      [],
      import.meta.url,
    )),
  (n.indonesian = () =>
    e(
      () => import(`./pricing_indonesian.js?contenthash=COtWtuFv`),
      [],
      import.meta.url,
    )),
  (n.italian = () =>
    e(
      () => import(`./pricing_italian.js?contenthash=B21GTST1`),
      [],
      import.meta.url,
    )),
  (n.japanese = () =>
    e(
      () => import(`./pricing_japanese.js?contenthash=DNPX28qB`),
      [],
      import.meta.url,
    )),
  (n.koreana = () =>
    e(
      () => import(`./pricing_koreana.js?contenthash=Byg1cURx`),
      [],
      import.meta.url,
    )),
  (n.latam = () =>
    e(
      () => import(`./pricing_latam.js?contenthash=Btf_5EbN`),
      [],
      import.meta.url,
    )),
  (n.malay = () =>
    e(
      () => import(`./pricing_malay.js?contenthash=B2UZzJac`),
      [],
      import.meta.url,
    )),
  (n.norwegian = () =>
    e(
      () => import(`./pricing_norwegian.js?contenthash=CBvD-yIy`),
      [],
      import.meta.url,
    )),
  (n.polish = () =>
    e(
      () => import(`./pricing_polish.js?contenthash=BsRhOzz5`),
      [],
      import.meta.url,
    )),
  (n.portuguese = () =>
    e(
      () => import(`./pricing_portuguese.js?contenthash=LdgziAL3`),
      [],
      import.meta.url,
    )),
  (n.romanian = () =>
    e(
      () => import(`./pricing_romanian.js?contenthash=BBatqvxA`),
      [],
      import.meta.url,
    )),
  (n.russian = () =>
    e(
      () => import(`./pricing_russian.js?contenthash=OUuvDLC_`),
      [],
      import.meta.url,
    )),
  (n.sc_schinese = () =>
    e(
      () => import(`./pricing_sc_schinese.js?contenthash=DOvwRWoo`),
      [],
      import.meta.url,
    )),
  (n.schinese = () =>
    e(
      () => import(`./pricing_schinese.js?contenthash=prJiZEoN`),
      [],
      import.meta.url,
    )),
  (n.spanish = () =>
    e(
      () => import(`./pricing_spanish.js?contenthash=CLfpHLrV`),
      [],
      import.meta.url,
    )),
  (n.swedish = () =>
    e(
      () => import(`./pricing_swedish.js?contenthash=BkujLTx9`),
      [],
      import.meta.url,
    )),
  (n.tchinese = () =>
    e(
      () => import(`./pricing_tchinese.js?contenthash=Cwp14GJe`),
      [],
      import.meta.url,
    )),
  (n.thai = () =>
    e(
      () => import(`./pricing_thai.js?contenthash=BPEmf8Uo`),
      [],
      import.meta.url,
    )),
  (n.turkish = () =>
    e(
      () => import(`./pricing_turkish.js?contenthash=hivHli7F`),
      [],
      import.meta.url,
    )),
  (n.ukrainian = () =>
    e(
      () => import(`./pricing_ukrainian.js?contenthash=BxYBd-B2`),
      [],
      import.meta.url,
    )),
  (n.vietnamese = () =>
    e(
      () => import(`./pricing_vietnamese.js?contenthash=lhOk_P_3`),
      [],
      import.meta.url,
    ));
async function r(e) {
  if (n[e]) return await n[e]();
}
var i = t(r);
export { i as t };
