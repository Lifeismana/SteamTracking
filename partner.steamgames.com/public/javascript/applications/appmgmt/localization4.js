/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { Ga as e } from "./dialogs.js?contenthash=D2HH3Ebx";
import { D as t } from "./react-router.js?contenthash=C8paMHEZ";
var n = { DefaultFancyTable: `_9B0qMqxa5jA-`, NoColumnBorders: `CFDvy9hAlHM-` },
  r = {};
(r.arabic = () =>
  e(
    () => import(`./countries_arabic.js?contenthash=CnsneA4d`),
    [],
    import.meta.url,
  )),
  (r.brazilian = () =>
    e(
      () => import(`./countries_brazilian.js?contenthash=CALmOJto`),
      [],
      import.meta.url,
    )),
  (r.bulgarian = () =>
    e(
      () => import(`./countries_bulgarian.js?contenthash=oYxe4spa`),
      [],
      import.meta.url,
    )),
  (r.czech = () =>
    e(
      () => import(`./countries_czech.js?contenthash=BWDC5kGU`),
      [],
      import.meta.url,
    )),
  (r.danish = () =>
    e(
      () => import(`./countries_danish.js?contenthash=EEBKgdJ7`),
      [],
      import.meta.url,
    )),
  (r.dutch = () =>
    e(
      () => import(`./countries_dutch.js?contenthash=Bd0qPFWw`),
      [],
      import.meta.url,
    )),
  (r.english = () =>
    e(
      () => import(`./countries_english.js?contenthash=DGfI8mjf`),
      [],
      import.meta.url,
    )),
  (r.finnish = () =>
    e(
      () => import(`./countries_finnish.js?contenthash=DJ2jWV6C`),
      [],
      import.meta.url,
    )),
  (r.french = () =>
    e(
      () => import(`./countries_french.js?contenthash=BHDyJLA2`),
      [],
      import.meta.url,
    )),
  (r.german = () =>
    e(
      () => import(`./countries_german.js?contenthash=Bhw0R02j`),
      [],
      import.meta.url,
    )),
  (r.greek = () =>
    e(
      () => import(`./countries_greek.js?contenthash=BfIf9PB1`),
      [],
      import.meta.url,
    )),
  (r.hungarian = () =>
    e(
      () => import(`./countries_hungarian.js?contenthash=CNU8yyzr`),
      [],
      import.meta.url,
    )),
  (r.indonesian = () =>
    e(
      () => import(`./countries_indonesian.js?contenthash=gxi8riSk`),
      [],
      import.meta.url,
    )),
  (r.italian = () =>
    e(
      () => import(`./countries_italian.js?contenthash=BPjKYtPw`),
      [],
      import.meta.url,
    )),
  (r.japanese = () =>
    e(
      () => import(`./countries_japanese.js?contenthash=CTU8UjAY`),
      [],
      import.meta.url,
    )),
  (r.koreana = () =>
    e(
      () => import(`./countries_koreana.js?contenthash=YIbKysKc`),
      [],
      import.meta.url,
    )),
  (r.latam = () =>
    e(
      () => import(`./countries_latam.js?contenthash=ihXFy2ig`),
      [],
      import.meta.url,
    )),
  (r.malay = () =>
    e(
      () => import(`./countries_malay.js?contenthash=CQ8zWsN2`),
      [],
      import.meta.url,
    )),
  (r.norwegian = () =>
    e(
      () => import(`./countries_norwegian.js?contenthash=peH4n5Qp`),
      [],
      import.meta.url,
    )),
  (r.polish = () =>
    e(
      () => import(`./countries_polish.js?contenthash=D0ciN4vj`),
      [],
      import.meta.url,
    )),
  (r.portuguese = () =>
    e(
      () => import(`./countries_portuguese.js?contenthash=Czav1MSb`),
      [],
      import.meta.url,
    )),
  (r.romanian = () =>
    e(
      () => import(`./countries_romanian.js?contenthash=x5WbPPQ8`),
      [],
      import.meta.url,
    )),
  (r.russian = () =>
    e(
      () => import(`./countries_russian.js?contenthash=CMbkJx4I`),
      [],
      import.meta.url,
    )),
  (r.sc_schinese = () =>
    e(
      () => import(`./countries_sc_schinese.js?contenthash=DDMtjPKy`),
      [],
      import.meta.url,
    )),
  (r.schinese = () =>
    e(
      () => import(`./countries_schinese.js?contenthash=DkpAntEL`),
      [],
      import.meta.url,
    )),
  (r.spanish = () =>
    e(
      () => import(`./countries_spanish.js?contenthash=C6ctwvJz`),
      [],
      import.meta.url,
    )),
  (r.swedish = () =>
    e(
      () => import(`./countries_swedish.js?contenthash=CTdn95dq`),
      [],
      import.meta.url,
    )),
  (r.tchinese = () =>
    e(
      () => import(`./countries_tchinese.js?contenthash=C5YY7eXG`),
      [],
      import.meta.url,
    )),
  (r.thai = () =>
    e(
      () => import(`./countries_thai.js?contenthash=CCb1m3Cm`),
      [],
      import.meta.url,
    )),
  (r.turkish = () =>
    e(
      () => import(`./countries_turkish.js?contenthash=BKU6T6UC`),
      [],
      import.meta.url,
    )),
  (r.ukrainian = () =>
    e(
      () => import(`./countries_ukrainian.js?contenthash=DfcrINGM`),
      [],
      import.meta.url,
    )),
  (r.vietnamese = () =>
    e(
      () => import(`./countries_vietnamese.js?contenthash=CpZ827ce`),
      [],
      import.meta.url,
    ));
async function i(e) {
  if (r[e]) return await r[e]();
}
var a = t(i);
function o(e) {
  return a.Localize(`#Steam_Country_${e}`);
}
export { n, o as t };
