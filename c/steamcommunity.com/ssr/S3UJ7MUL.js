var _ = _({
  "../../../shared/localization/shared_arabic.json": () =>
    import("./shared_arabic-XXXXXXXX.js"),
  "../../../shared/localization/shared_brazilian.json": () =>
    import("./shared_brazilian-XXXXXXXX.js"),
  "../../../shared/localization/shared_bulgarian.json": () =>
    import("./shared_bulgarian-XXXXXXXX.js"),
  "../../../shared/localization/shared_czech.json": () =>
    import("./shared_czech-XXXXXXXX.js"),
  "../../../shared/localization/shared_danish.json": () =>
    import("./shared_danish-XXXXXXXX.js"),
  "../../../shared/localization/shared_dutch.json": () =>
    import("./shared_dutch-XXXXXXXX.js"),
  "../../../shared/localization/shared_english.json": () =>
    import("./shared_english-XXXXXXXX.js"),
  "../../../shared/localization/shared_finnish.json": () =>
    import("./shared_finnish-XXXXXXXX.js"),
  "../../../shared/localization/shared_french.json": () =>
    import("./shared_french-XXXXXXXX.js"),
  "../../../shared/localization/shared_german.json": () =>
    import("./shared_german-XXXXXXXX.js"),
  "../../../shared/localization/shared_greek.json": () =>
    import("./shared_greek-XXXXXXXX.js"),
  "../../../shared/localization/shared_hungarian.json": () =>
    import("./shared_hungarian-XXXXXXXX.js"),
  "../../../shared/localization/shared_indonesian.json": () =>
    import("./shared_indonesian-XXXXXXXX.js"),
  "../../../shared/localization/shared_italian.json": () =>
    import("./shared_italian-XXXXXXXX.js"),
  "../../../shared/localization/shared_japanese.json": () =>
    import("./shared_japanese-XXXXXXXX.js"),
  "../../../shared/localization/shared_koreana.json": () =>
    import("./shared_koreana-XXXXXXXX.js"),
  "../../../shared/localization/shared_latam.json": () =>
    import("./shared_latam-XXXXXXXX.js"),
  "../../../shared/localization/shared_norwegian.json": () =>
    import("./shared_norwegian-XXXXXXXX.js"),
  "../../../shared/localization/shared_polish.json": () =>
    import("./shared_polish-XXXXXXXX.js"),
  "../../../shared/localization/shared_portuguese.json": () =>
    import("./shared_portuguese-XXXXXXXX.js"),
  "../../../shared/localization/shared_romanian.json": () =>
    import("./shared_romanian-XXXXXXXX.js"),
  "../../../shared/localization/shared_russian.json": () =>
    import("./shared_russian-XXXXXXXX.js"),
  "../../../shared/localization/shared_sc_schinese.json": () =>
    import("./shared_sc_schinese-XXXXXXXX.js"),
  "../../../shared/localization/shared_schinese.json": () =>
    import("./shared_schinese-XXXXXXXX.js"),
  "../../../shared/localization/shared_spanish.json": () =>
    import("./shared_spanish-XXXXXXXX.js"),
  "../../../shared/localization/shared_swedish.json": () =>
    import("./shared_swedish-XXXXXXXX.js"),
  "../../../shared/localization/shared_tchinese.json": () =>
    import("./shared_tchinese-XXXXXXXX.js"),
  "../../../shared/localization/shared_thai.json": () =>
    import("./shared_thai-XXXXXXXX.js"),
  "../../../shared/localization/shared_turkish.json": () =>
    import("./shared_turkish-XXXXXXXX.js"),
  "../../../shared/localization/shared_ukrainian.json": () =>
    import("./shared_ukrainian-XXXXXXXX.js"),
  "../../../shared/localization/shared_vietnamese.json": () =>
    import("./shared_vietnamese-XXXXXXXX.js"),
});
_({
  enforceActions: "never",
});
_();
async function _(_) {
  let _ = _.GetLanguageFallback(_),
    _ = _ === _,
    [_, _] = await _([
      _(`../../../shared/localization/shared_${_}.json`),
      _ ? {} : _(`../../../shared/localization/shared_${_}.json`),
    ]);
  _.AddTokens(
    {
      ..._,
    },
    {
      ..._,
    },
  );
}
_(_().strLanguage).finally(_);
