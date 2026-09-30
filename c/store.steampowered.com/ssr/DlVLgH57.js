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
};
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
            _(() => import(`./DPx4Uzl6.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_brazilian.json": () =>
            _(() => import(`./CK0Vktxi.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_bulgarian.json": () =>
            _(() => import(`./DpTu3S3h.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_czech.json": () =>
            _(() => import(`./ALX8am1E.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_danish.json": () =>
            _(() => import(`./DIYbPwwC.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_dutch.json": () =>
            _(() => import(`./MnTnons-.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_english.json": () =>
            _(() => import(`./utGvctIL.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_finnish.json": () =>
            _(() => import(`./Bp8HDoOk.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_french.json": () =>
            _(() => import(`./BGPu5qiu.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_german.json": () =>
            _(() => import(`./Bpbayqhi.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_greek.json": () =>
            _(() => import(`./BPIfsUcC.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_hungarian.json": () =>
            _(() => import(`./DutZbqhi.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_indonesian.json": () =>
            _(() => import(`./Bn_trGe0.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_italian.json": () =>
            _(() => import(`./CjdHD_LQ2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_japanese.json": () =>
            _(() => import(`./DQQ1ccad2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_koreana.json": () =>
            _(() => import(`./Bx-PdRbH2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_latam.json": () =>
            _(() => import(`./CzOKKQVr2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_malay.json": () =>
            _(() => import(`./k-9nkZTB2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_norwegian.json": () =>
            _(() => import(`./CZ-TIMN12.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_polish.json": () =>
            _(() => import(`./CUzM_NRO2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_portuguese.json": () =>
            _(() => import(`./CbT8TRXA2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_romanian.json": () =>
            _(() => import(`./CCkol7Hr2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_russian.json": () =>
            _(() => import(`./L1JnaQnu2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_sc_schinese.json": () =>
            _(() => import(`./C4xOMX5h2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_schinese.json": () =>
            _(() => import(`./kb0ZNYwA2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_spanish.json": () =>
            _(() => import(`./BMtQehGe2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_swedish.json": () =>
            _(() => import(`./i2M6ad1-2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_tchinese.json": () =>
            _(() => import(`./B0SkC0-p2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_thai.json": () =>
            _(() => import(`./mJE-FjfA2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_turkish.json": () =>
            _(() => import(`./BCknp-ED2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_ukrainian.json": () =>
            _(() => import(`./BIZt2U2_2.js`), [], import.meta.url),
          "../../../shared/localization/sales/sales_vietnamese.json": () =>
            _(() => import(`./X6yYZpFb2.js`), [], import.meta.url),
        }),
        `../../../shared/localization/sales/sales_${_}.json`,
        7,
      ),
      _(
        Object.assign({
          "../../../shared/localization/marketing/marketing_arabic.json": () =>
            _(() => import(`./CDrkBzWE2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_brazilian.json":
            () => _(() => import(`./CS8TUh_j2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_bulgarian.json":
            () => _(() => import(`./BM3JKh3t2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_czech.json": () =>
            _(() => import(`./CUoU1tIs2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_danish.json": () =>
            _(() => import(`./BGNQ3MtL2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_dutch.json": () =>
            _(() => import(`./BFJ3bKY72.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_english.json": () =>
            _(() => import(`./BRuuAu7E2.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_finnish.json": () =>
            _(() => import(`./nalExRqu.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_french.json": () =>
            _(() => import(`./CiaHzdpw.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_german.json": () =>
            _(() => import(`./_Zgd2RyC.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_greek.json": () =>
            _(() => import(`./BKLQme9L.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_hungarian.json":
            () => _(() => import(`./o_yskvks.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_indonesian.json":
            () => _(() => import(`./CAfEMhAU.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_italian.json": () =>
            _(() => import(`./CrZ1zJGo.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_japanese.json":
            () => _(() => import(`./Dx4pjn1B.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_koreana.json": () =>
            _(() => import(`./BYCcGR31.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_latam.json": () =>
            _(() => import(`./B-CytXpQ.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_malay.json": () =>
            _(() => import(`./DqsJk1v0.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_norwegian.json":
            () => _(() => import(`./CwWMOqtx.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_polish.json": () =>
            _(() => import(`./CGeK1CoV.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_portuguese.json":
            () => _(() => import(`./BqGGGZ92.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_romanian.json":
            () => _(() => import(`./CjkPZd3t.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_russian.json": () =>
            _(() => import(`./DZE5e62q.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_sc_schinese.json":
            () => _(() => import(`./D0BO-k0W.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_schinese.json":
            () => _(() => import(`./CdAdnFWc.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_spanish.json": () =>
            _(() => import(`./BvmtiDVF.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_swedish.json": () =>
            _(() => import(`./34KqWZk6.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_tchinese.json":
            () => _(() => import(`./mfk1rb4Z.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_thai.json": () =>
            _(() => import(`./BIsCwe1-.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_turkish.json": () =>
            _(() => import(`./BQXUk8NE.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_ukrainian.json":
            () => _(() => import(`./DsGQ6rRU.js`), [], import.meta.url),
          "../../../shared/localization/marketing/marketing_vietnamese.json":
            () => _(() => import(`./8LKUy9bj.js`), [], import.meta.url),
        }),
        `../../../shared/localization/marketing/marketing_${_}.json`,
        7,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/sales/sales_arabic.json": () =>
                _(() => import(`./DPx4Uzl6.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_brazilian.json": () =>
                _(() => import(`./CK0Vktxi.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_bulgarian.json": () =>
                _(() => import(`./DpTu3S3h.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_czech.json": () =>
                _(() => import(`./ALX8am1E.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_danish.json": () =>
                _(() => import(`./DIYbPwwC.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_dutch.json": () =>
                _(() => import(`./MnTnons-.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_english.json": () =>
                _(() => import(`./utGvctIL.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_finnish.json": () =>
                _(() => import(`./Bp8HDoOk.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_french.json": () =>
                _(() => import(`./BGPu5qiu.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_german.json": () =>
                _(() => import(`./Bpbayqhi.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_greek.json": () =>
                _(() => import(`./BPIfsUcC.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_hungarian.json": () =>
                _(() => import(`./DutZbqhi.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_indonesian.json": () =>
                _(() => import(`./Bn_trGe0.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_italian.json": () =>
                _(() => import(`./CjdHD_LQ2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_japanese.json": () =>
                _(() => import(`./DQQ1ccad2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_koreana.json": () =>
                _(() => import(`./Bx-PdRbH2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_latam.json": () =>
                _(() => import(`./CzOKKQVr2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_malay.json": () =>
                _(() => import(`./k-9nkZTB2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_norwegian.json": () =>
                _(() => import(`./CZ-TIMN12.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_polish.json": () =>
                _(() => import(`./CUzM_NRO2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_portuguese.json": () =>
                _(() => import(`./CbT8TRXA2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_romanian.json": () =>
                _(() => import(`./CCkol7Hr2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_russian.json": () =>
                _(() => import(`./L1JnaQnu2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_sc_schinese.json": () =>
                _(() => import(`./C4xOMX5h2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_schinese.json": () =>
                _(() => import(`./kb0ZNYwA2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_spanish.json": () =>
                _(() => import(`./BMtQehGe2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_swedish.json": () =>
                _(() => import(`./i2M6ad1-2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_tchinese.json": () =>
                _(() => import(`./B0SkC0-p2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_thai.json": () =>
                _(() => import(`./mJE-FjfA2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_turkish.json": () =>
                _(() => import(`./BCknp-ED2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_ukrainian.json": () =>
                _(() => import(`./BIZt2U2_2.js`), [], import.meta.url),
              "../../../shared/localization/sales/sales_vietnamese.json": () =>
                _(() => import(`./X6yYZpFb2.js`), [], import.meta.url),
            }),
            `../../../shared/localization/sales/sales_${_}.json`,
            7,
          ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/marketing/marketing_arabic.json":
                () => _(() => import(`./CDrkBzWE2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_brazilian.json":
                () => _(() => import(`./CS8TUh_j2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_bulgarian.json":
                () => _(() => import(`./BM3JKh3t2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_czech.json":
                () => _(() => import(`./CUoU1tIs2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_danish.json":
                () => _(() => import(`./BGNQ3MtL2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_dutch.json":
                () => _(() => import(`./BFJ3bKY72.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_english.json":
                () => _(() => import(`./BRuuAu7E2.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_finnish.json":
                () => _(() => import(`./nalExRqu.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_french.json":
                () => _(() => import(`./CiaHzdpw.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_german.json":
                () => _(() => import(`./_Zgd2RyC.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_greek.json":
                () => _(() => import(`./BKLQme9L.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_hungarian.json":
                () => _(() => import(`./o_yskvks.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_indonesian.json":
                () => _(() => import(`./CAfEMhAU.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_italian.json":
                () => _(() => import(`./CrZ1zJGo.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_japanese.json":
                () => _(() => import(`./Dx4pjn1B.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_koreana.json":
                () => _(() => import(`./BYCcGR31.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_latam.json":
                () => _(() => import(`./B-CytXpQ.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_malay.json":
                () => _(() => import(`./DqsJk1v0.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_norwegian.json":
                () => _(() => import(`./CwWMOqtx.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_polish.json":
                () => _(() => import(`./CGeK1CoV.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_portuguese.json":
                () => _(() => import(`./BqGGGZ92.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_romanian.json":
                () => _(() => import(`./CjkPZd3t.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_russian.json":
                () => _(() => import(`./DZE5e62q.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_sc_schinese.json":
                () => _(() => import(`./D0BO-k0W.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_schinese.json":
                () => _(() => import(`./CdAdnFWc.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_spanish.json":
                () => _(() => import(`./BvmtiDVF.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_swedish.json":
                () => _(() => import(`./34KqWZk6.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_tchinese.json":
                () => _(() => import(`./mfk1rb4Z.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_thai.json":
                () => _(() => import(`./BIsCwe1-.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_turkish.json":
                () => _(() => import(`./BQXUk8NE.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_ukrainian.json":
                () => _(() => import(`./DsGQ6rRU.js`), [], import.meta.url),
              "../../../shared/localization/marketing/marketing_vietnamese.json":
                () => _(() => import(`./8LKUy9bj.js`), [], import.meta.url),
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
