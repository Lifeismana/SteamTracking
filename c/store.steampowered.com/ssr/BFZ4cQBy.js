var _ = (_, _, _) => {
    let _ = _.lastIndexOf(`?`),
      _ = _[_ === -1 || _ < _.lastIndexOf(`/`) ? _ : _.slice(0, _)];
    return _
      ? typeof _ == `function`
        ? _()
        : Promise.resolve(_)
      : new Promise((_, _) => {
          (typeof queueMicrotask == `function` ? queueMicrotask : setTimeout)(
            _.bind(
              null,
              Error(
                `Unknown variable dynamic import: ` +
                  _ +
                  (_.split(`/`).length === _
                    ? ``
                    : `. Note that variables only represent file names one level deep.`),
              ),
            ),
          );
        });
  },
  _ = Intl.DateTimeFormat().resolvedOptions().timeZone;
`document` in globalThis &&
  document.cookie
    .split(`;`)
    .find((_) => _.trim().startsWith(`timezoneName`))
    ?.split(`=`)[1];
function _() {
  `document` in globalThis &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
}
_(),
  _({
    enforceActions: `never`,
  }),
  _();
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _, _, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/sales/sales_arabic.json": () =>
            _(() => import(`./C49Fa1VK.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            _(() => import(`./DO4Yw4bJ.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            _(() => import(`./g6Cj2zNX.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            _(() => import(`./B1_D5AGj.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            _(() => import(`./cX3hY3da.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            _(() => import(`./DTh0RSj_.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            _(() => import(`./utGvctIL.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            _(() => import(`./B27roQ3r.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            _(() => import(`./DJAg6s1v.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            _(() => import(`./Qn8KE9J5.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            _(() => import(`./BrDPuTXU.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            _(() => import(`./ndG7A_Tp.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            _(() => import(`./0yfNVupE.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            _(() => import(`./DM5BkH7q.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            _(() => import(`./C46STKzb.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            _(() => import(`./b1h1hZ__.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            _(() => import(`./BmKDlo6R.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            _(() => import(`./DTujhi8b.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            _(() => import(`./JAw1lu85.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            _(() => import(`./A_7CbQaB.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            _(() => import(`./Ct24eiWY.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            _(() => import(`./Chn961mF.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            _(() => import(`./CO04fdCc.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            _(() => import(`./C4xOMX5h.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            _(() => import(`./CBAT0BLB.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            _(() => import(`./BFEiSzz2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            _(() => import(`./w6GlDEOO.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            _(() => import(`./BIoR9Drd.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            _(() => import(`./oZDQvv49.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            _(() => import(`./BBQzq5xn.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            _(() => import(`./CquFgDbG.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            _(() => import(`./B-xeza89.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${_}.json`,
        7,
      ),
      _(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            _(() => import(`./CXTU_kPt.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () => _(() => import(`./CDR24QgT2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () => _(() => import(`./WSRaicQ72.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            _(() => import(`./BP230Hx62.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            _(() => import(`./D5SisJZB2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            _(() => import(`./BItx-m692.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            _(() => import(`./Smtx6Czj2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            _(() => import(`./BTHqjYwp2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            _(() => import(`./j8xay5k32.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            _(() => import(`./l59Zb1gr2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            _(() => import(`./M0un-L992.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () => _(() => import(`./XRtw-lVB2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () => _(() => import(`./BPlcgKGI2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            _(() => import(`./CGCbxxwO2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () => _(() => import(`./BbHpitkn2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            _(() => import(`./DbWH5voi2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            _(() => import(`./Bi2kiPW12.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            _(() => import(`./7ASgoXVu2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () => _(() => import(`./B8kXBDYX2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            _(() => import(`./BejitO6F2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () => _(() => import(`./BcLakd6k2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () => _(() => import(`./DkxjZZBV2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            _(() => import(`./CeyReJr02.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () => _(() => import(`./D0BO-k0W2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () => _(() => import(`./6twok38K2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            _(() => import(`./BIt7zsic2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            _(() => import(`./ynnQrfp22.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () => _(() => import(`./C_jjXkAR.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            _(() => import(`./DWQR6X3a.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            _(() => import(`./ClP361hT.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () => _(() => import(`./CO1wcFnp.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () => _(() => import(`./Dti23NBd.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${_}.json`,
        7,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/sales/sales_arabic.json": () =>
                _(() => import(`./C49Fa1VK.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_brazilian.json": () =>
                _(() => import(`./DO4Yw4bJ.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_bulgarian.json": () =>
                _(() => import(`./g6Cj2zNX.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_czech.json": () =>
                _(() => import(`./B1_D5AGj.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_danish.json": () =>
                _(() => import(`./cX3hY3da.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_dutch.json": () =>
                _(() => import(`./DTh0RSj_.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_english.json": () =>
                _(() => import(`./utGvctIL.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_finnish.json": () =>
                _(() => import(`./B27roQ3r.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_french.json": () =>
                _(() => import(`./DJAg6s1v.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_german.json": () =>
                _(() => import(`./Qn8KE9J5.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_greek.json": () =>
                _(() => import(`./BrDPuTXU.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_hungarian.json": () =>
                _(() => import(`./ndG7A_Tp.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_indonesian.json": () =>
                _(() => import(`./0yfNVupE.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_italian.json": () =>
                _(() => import(`./DM5BkH7q.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_japanese.json": () =>
                _(() => import(`./C46STKzb.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_koreana.json": () =>
                _(() => import(`./b1h1hZ__.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_latam.json": () =>
                _(() => import(`./BmKDlo6R.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_malay.json": () =>
                _(() => import(`./DTujhi8b.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_norwegian.json": () =>
                _(() => import(`./JAw1lu85.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_polish.json": () =>
                _(() => import(`./A_7CbQaB.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_portuguese.json": () =>
                _(() => import(`./Ct24eiWY.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_romanian.json": () =>
                _(() => import(`./Chn961mF.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_russian.json": () =>
                _(() => import(`./CO04fdCc.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_sc_schinese.json": () =>
                _(() => import(`./C4xOMX5h.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_schinese.json": () =>
                _(() => import(`./CBAT0BLB.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_spanish.json": () =>
                _(() => import(`./BFEiSzz2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_swedish.json": () =>
                _(() => import(`./w6GlDEOO.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_tchinese.json": () =>
                _(() => import(`./BIoR9Drd.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_thai.json": () =>
                _(() => import(`./oZDQvv49.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_turkish.json": () =>
                _(() => import(`./BBQzq5xn.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_ukrainian.json": () =>
                _(() => import(`./CquFgDbG.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_vietnamese.json": () =>
                _(() => import(`./B-xeza89.js`), [], import.meta.url),
            }),
            `../../../shared/localization/sales/sales_${_}.json`,
            7,
          ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/marketing/marketing_arabic.json":
                () => _(() => import(`./CXTU_kPt.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_brazilian.json":
                () => _(() => import(`./CDR24QgT2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_bulgarian.json":
                () => _(() => import(`./WSRaicQ72.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_czech.json":
                () => _(() => import(`./BP230Hx62.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_danish.json":
                () => _(() => import(`./D5SisJZB2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_dutch.json":
                () => _(() => import(`./BItx-m692.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_english.json":
                () => _(() => import(`./Smtx6Czj2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_finnish.json":
                () => _(() => import(`./BTHqjYwp2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_french.json":
                () => _(() => import(`./j8xay5k32.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_german.json":
                () => _(() => import(`./l59Zb1gr2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_greek.json":
                () => _(() => import(`./M0un-L992.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_hungarian.json":
                () => _(() => import(`./XRtw-lVB2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_indonesian.json":
                () => _(() => import(`./BPlcgKGI2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_italian.json":
                () => _(() => import(`./CGCbxxwO2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_japanese.json":
                () => _(() => import(`./BbHpitkn2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_koreana.json":
                () => _(() => import(`./DbWH5voi2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_latam.json":
                () => _(() => import(`./Bi2kiPW12.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_malay.json":
                () => _(() => import(`./7ASgoXVu2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_norwegian.json":
                () => _(() => import(`./B8kXBDYX2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_polish.json":
                () => _(() => import(`./BejitO6F2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_portuguese.json":
                () => _(() => import(`./BcLakd6k2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_romanian.json":
                () => _(() => import(`./DkxjZZBV2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_russian.json":
                () => _(() => import(`./CeyReJr02.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_sc_schinese.json":
                () => _(() => import(`./D0BO-k0W2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_schinese.json":
                () => _(() => import(`./6twok38K2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_spanish.json":
                () => _(() => import(`./BIt7zsic2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_swedish.json":
                () => _(() => import(`./ynnQrfp22.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_tchinese.json":
                () => _(() => import(`./C_jjXkAR.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_thai.json":
                () => _(() => import(`./DWQR6X3a.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_turkish.json":
                () => _(() => import(`./ClP361hT.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_ukrainian.json":
                () => _(() => import(`./CO1wcFnp.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_vietnamese.json":
                () => _(() => import(`./Dti23NBd.js`), [], import.meta.url),
            }),
            `../../../shared/localization/marketing/marketing_${_}.json`,
            7,
          ),
      _.Ready(),
    ]);
  _.AddTokens(
    {
      ..._,
      ..._,
    },
    {
      ..._,
      ..._,
    },
  );
}
_(_().strLanguage).finally(_);
