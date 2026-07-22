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
    [_, _] = await _([
      _(
        Object.assign({
          "../../../shared/localization/shared_arabic.json": () =>
            _(() => import(`./tmltOu0P.js`), [], import.meta.url),
          "../../../shared/localization/shared_brazilian.json": () =>
            _(() => import(`./CdTtqnC9.js`), [], import.meta.url),
          "../../../shared/localization/shared_bulgarian.json": () =>
            _(() => import(`./CDcevEz3.js`), [], import.meta.url),
          "../../../shared/localization/shared_czech.json": () =>
            _(() => import(`./BFxH1OzJ.js`), [], import.meta.url),
          "../../../shared/localization/shared_danish.json": () =>
            _(() => import(`./y7UWVPOr.js`), [], import.meta.url),
          "../../../shared/localization/shared_dutch.json": () =>
            _(() => import(`./C_0Wr29l.js`), [], import.meta.url),
          "../../../shared/localization/shared_english.json": () =>
            _(() => import(`./D8tSpTw4.js`), [], import.meta.url),
          "../../../shared/localization/shared_finnish.json": () =>
            _(() => import(`./T98mKj87.js`), [], import.meta.url),
          "../../../shared/localization/shared_french.json": () =>
            _(() => import(`./DslJtulI.js`), [], import.meta.url),
          "../../../shared/localization/shared_german.json": () =>
            _(() => import(`./BG-QmMJ2.js`), [], import.meta.url),
          "../../../shared/localization/shared_greek.json": () =>
            _(() => import(`./NAgGVQMN.js`), [], import.meta.url),
          "../../../shared/localization/shared_hungarian.json": () =>
            _(() => import(`./Udya3x-n.js`), [], import.meta.url),
          "../../../shared/localization/shared_indonesian.json": () =>
            _(() => import(`./BFV3Jw4s.js`), [], import.meta.url),
          "../../../shared/localization/shared_italian.json": () =>
            _(() => import(`./C9VLZBRc.js`), [], import.meta.url),
          "../../../shared/localization/shared_japanese.json": () =>
            _(() => import(`./DAh3r6BF.js`), [], import.meta.url),
          "../../../shared/localization/shared_koreana.json": () =>
            _(() => import(`./B0up4n82.js`), [], import.meta.url),
          "../../../shared/localization/shared_latam.json": () =>
            _(() => import(`./BwatgHcA.js`), [], import.meta.url),
          "../../../shared/localization/shared_malay.json": () =>
            _(() => import(`./BFJFSIuH.js`), [], import.meta.url),
          "../../../shared/localization/shared_norwegian.json": () =>
            _(() => import(`./D7Uow3p8.js`), [], import.meta.url),
          "../../../shared/localization/shared_polish.json": () =>
            _(() => import(`./bxysDX4o.js`), [], import.meta.url),
          "../../../shared/localization/shared_portuguese.json": () =>
            _(() => import(`./CJERdTPI.js`), [], import.meta.url),
          "../../../shared/localization/shared_romanian.json": () =>
            _(() => import(`./ByUuW_65.js`), [], import.meta.url),
          "../../../shared/localization/shared_russian.json": () =>
            _(() => import(`./T-6tortE.js`), [], import.meta.url),
          "../../../shared/localization/shared_sc_schinese.json": () =>
            _(() => import(`./ByDbZaKa.js`), [], import.meta.url),
          "../../../shared/localization/shared_schinese.json": () =>
            _(() => import(`./BmrPNp8O.js`), [], import.meta.url),
          "../../../shared/localization/shared_spanish.json": () =>
            _(() => import(`./BS0dAIVU.js`), [], import.meta.url),
          "../../../shared/localization/shared_swedish.json": () =>
            _(() => import(`./BIaQY8Pi.js`), [], import.meta.url),
          "../../../shared/localization/shared_tchinese.json": () =>
            _(() => import(`./2He3kg9Y2.js`), [], import.meta.url),
          "../../../shared/localization/shared_thai.json": () =>
            _(() => import(`./CCSaFVk02.js`), [], import.meta.url),
          "../../../shared/localization/shared_turkish.json": () =>
            _(() => import(`./DA2DTykp2.js`), [], import.meta.url),
          "../../../shared/localization/shared_ukrainian.json": () =>
            _(() => import(`./J7hoYh9c2.js`), [], import.meta.url),
          "../../../shared/localization/shared_vietnamese.json": () =>
            _(() => import(`./DFUFd5ud2.js`), [], import.meta.url),
        }),
        `../../../shared/localization/shared_${_}.json`,
        6,
      ),
      _
        ? {}
        : _(
            Object.assign({
              "../../../shared/localization/shared_arabic.json": () =>
                _(() => import(`./tmltOu0P.js`), [], import.meta.url),
              "../../../shared/localization/shared_brazilian.json": () =>
                _(() => import(`./CdTtqnC9.js`), [], import.meta.url),
              "../../../shared/localization/shared_bulgarian.json": () =>
                _(() => import(`./CDcevEz3.js`), [], import.meta.url),
              "../../../shared/localization/shared_czech.json": () =>
                _(() => import(`./BFxH1OzJ.js`), [], import.meta.url),
              "../../../shared/localization/shared_danish.json": () =>
                _(() => import(`./y7UWVPOr.js`), [], import.meta.url),
              "../../../shared/localization/shared_dutch.json": () =>
                _(() => import(`./C_0Wr29l.js`), [], import.meta.url),
              "../../../shared/localization/shared_english.json": () =>
                _(() => import(`./D8tSpTw4.js`), [], import.meta.url),
              "../../../shared/localization/shared_finnish.json": () =>
                _(() => import(`./T98mKj87.js`), [], import.meta.url),
              "../../../shared/localization/shared_french.json": () =>
                _(() => import(`./DslJtulI.js`), [], import.meta.url),
              "../../../shared/localization/shared_german.json": () =>
                _(() => import(`./BG-QmMJ2.js`), [], import.meta.url),
              "../../../shared/localization/shared_greek.json": () =>
                _(() => import(`./NAgGVQMN.js`), [], import.meta.url),
              "../../../shared/localization/shared_hungarian.json": () =>
                _(() => import(`./Udya3x-n.js`), [], import.meta.url),
              "../../../shared/localization/shared_indonesian.json": () =>
                _(() => import(`./BFV3Jw4s.js`), [], import.meta.url),
              "../../../shared/localization/shared_italian.json": () =>
                _(() => import(`./C9VLZBRc.js`), [], import.meta.url),
              "../../../shared/localization/shared_japanese.json": () =>
                _(() => import(`./DAh3r6BF.js`), [], import.meta.url),
              "../../../shared/localization/shared_koreana.json": () =>
                _(() => import(`./B0up4n82.js`), [], import.meta.url),
              "../../../shared/localization/shared_latam.json": () =>
                _(() => import(`./BwatgHcA.js`), [], import.meta.url),
              "../../../shared/localization/shared_malay.json": () =>
                _(() => import(`./BFJFSIuH.js`), [], import.meta.url),
              "../../../shared/localization/shared_norwegian.json": () =>
                _(() => import(`./D7Uow3p8.js`), [], import.meta.url),
              "../../../shared/localization/shared_polish.json": () =>
                _(() => import(`./bxysDX4o.js`), [], import.meta.url),
              "../../../shared/localization/shared_portuguese.json": () =>
                _(() => import(`./CJERdTPI.js`), [], import.meta.url),
              "../../../shared/localization/shared_romanian.json": () =>
                _(() => import(`./ByUuW_65.js`), [], import.meta.url),
              "../../../shared/localization/shared_russian.json": () =>
                _(() => import(`./T-6tortE.js`), [], import.meta.url),
              "../../../shared/localization/shared_sc_schinese.json": () =>
                _(() => import(`./ByDbZaKa.js`), [], import.meta.url),
              "../../../shared/localization/shared_schinese.json": () =>
                _(() => import(`./BmrPNp8O.js`), [], import.meta.url),
              "../../../shared/localization/shared_spanish.json": () =>
                _(() => import(`./BS0dAIVU.js`), [], import.meta.url),
              "../../../shared/localization/shared_swedish.json": () =>
                _(() => import(`./BIaQY8Pi.js`), [], import.meta.url),
              "../../../shared/localization/shared_tchinese.json": () =>
                _(() => import(`./2He3kg9Y2.js`), [], import.meta.url),
              "../../../shared/localization/shared_thai.json": () =>
                _(() => import(`./CCSaFVk02.js`), [], import.meta.url),
              "../../../shared/localization/shared_turkish.json": () =>
                _(() => import(`./DA2DTykp2.js`), [], import.meta.url),
              "../../../shared/localization/shared_ukrainian.json": () =>
                _(() => import(`./J7hoYh9c2.js`), [], import.meta.url),
              "../../../shared/localization/shared_vietnamese.json": () =>
                _(() => import(`./DFUFd5ud2.js`), [], import.meta.url),
            }),
            `../../../shared/localization/shared_${_}.json`,
            6,
          ),
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
