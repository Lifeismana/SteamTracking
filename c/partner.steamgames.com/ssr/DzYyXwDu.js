[
  [`None`, `none`, -1],
  [`Afrikaans`, `afrikaans`, 0],
  [`Albanian`, `albanian`, 1],
  [`Amharic`, `amharic`, 2],
  [`Armenian`, `armenian`, 3],
  [`Assamese`, `assamese`, 4],
  [`Azerbaijani`, `azerbaijani`, 5],
  [`Bangla`, `bangla`, 6],
  [`Basque`, `basque`, 7],
  [`Belarusian`, `belarusian`, 8],
  [`Bosnian`, `bosnian`, 9],
  [`Catalan`, `catalan`, 10],
  [`Cherokee`, `cherokee`, 11],
  [`Croatian`, `croatian`, 12],
  [`Dari`, `dari`, 13],
  [`Estonian`, `estonian`, 14],
  [`Filipino`, `filipino`, 15],
  [`Galician`, `galician`, 16],
  [`Georgian`, `georgian`, 17],
  [`Gujarati`, `gujarati`, 18],
  [`Punjabi (Gurmukhi)`, `gurmukhi`, 19],
  [`Hausa`, `hausa`, 20],
  [`Hebrew`, `hebrew`, 21],
  [`Hindi`, `hindi`, 22],
  [`Icelandic`, `icelandic`, 23],
  [`Igbo`, `igbo`, 24],
  [`Indonesian`, `indonesian`, 25],
  [`Irish`, `irish`, 26],
  [`Kannada`, `kannada`, 27],
  [`Kazakh`, `kazakh`, 28],
  [`Khmer`, `khmer`, 29],
  [`K'iche'`, `kiche`, 30],
  [`Kinyarwanda`, `kinyarwanda`, 31],
  [`Konkani`, `konkani`, 32],
  [`Kyrgyz`, `kyrgyz`, 33],
  [`Latvian`, `latvian`, 34],
  [`Lithuanian`, `lithuanian`, 35],
  [`Luxembourgish`, `luxembourgish`, 36],
  [`Macedonian`, `macedonian`, 37],
  [`Malay`, `malay`, 38],
  [`Malayalam`, `malayalam`, 39],
  [`Maltese`, `maltese`, 40],
  [`Maori`, `maori`, 41],
  [`Marathi`, `marathi`, 42],
  [`Mongolian`, `mongolian`, 43],
  [`Nepali`, `nepali`, 44],
  [`Odia`, `odia`, 45],
  [`Persian`, `persian`, 46],
  [`Quechua`, `quechua`, 47],
  [`Scots`, `scots`, 48],
  [`Serbian`, `serbian`, 49],
  [`Punjabi (Shahmukhi)`, `shahmukhi`, 50],
  [`Sindhi`, `sindhi`, 51],
  [`Sinhala`, `sinhala`, 52],
  [`Slovak`, `slovak`, 53],
  [`Slovenian`, `slovenian`, 54],
  [`Sorani`, `sorani`, 55],
  [`Sotho`, `sotho`, 56],
  [`Swahili`, `swahili`, 57],
  [`Tajik`, `tajik`, 58],
  [`Tamil`, `tamil`, 59],
  [`Tatar`, `tatar`, 60],
  [`Telugu`, `telugu`, 61],
  [`Tigrinya`, `tigrinya`, 62],
  [`Tswana`, `tswana`, 63],
  [`Turkmen`, `turkmen`, 64],
  [`Urdu`, `urdu`, 65],
  [`Uyghur`, `uyghur`, 66],
  [`Uzbek`, `uzbek`, 67],
  [`Valencian`, `valencian`, 68],
  [`Welsh`, `welsh`, 69],
  [`Wolof`, `wolof`, 70],
  [`Xhosa`, `xhosa`, 71],
  [`Yoruba`, `yoruba`, 72],
  [`Zulu`, `zulu`, 73],
].map((_) => ({
  name: _[0],
  shortName: _[1],
  eAdditionalLanguage: _[2],
}));
function _(_, _ = ``) {
  switch (_) {
    case 0:
      return `english`;
    case 1:
      return `german`;
    case 2:
      return `french`;
    case 3:
      return `italian`;
    case 4:
      return `koreana`;
    case 5:
      return `spanish`;
    case 6:
      return `schinese`;
    case 7:
      return `tchinese`;
    case 8:
      return `russian`;
    case 9:
      return `thai`;
    case 10:
      return `japanese`;
    case 11:
      return `portuguese`;
    case 12:
      return `polish`;
    case 13:
      return `danish`;
    case 14:
      return `dutch`;
    case 15:
      return `finnish`;
    case 16:
      return `norwegian`;
    case 17:
      return `swedish`;
    case 18:
      return `hungarian`;
    case 19:
      return `czech`;
    case 20:
      return `romanian`;
    case 21:
      return `turkish`;
    case 25:
      return `arabic`;
    case 22:
      return `brazilian`;
    case 23:
      return `bulgarian`;
    case 24:
      return `greek`;
    case 26:
      return `ukrainian`;
    case 27:
      return `latam`;
    case 28:
      return `vietnamese`;
    case 29:
      return `sc_schinese`;
    case 30:
      return `indonesian`;
    case 31:
      return `malay`;
    default:
      return _;
  }
}
function _(_, _ = 0) {
  switch (_) {
    case `english`:
      return 0;
    case `german`:
      return 1;
    case `french`:
      return 2;
    case `italian`:
      return 3;
    case `korean`:
    case `koreana`:
      return 4;
    case `spanish`:
      return 5;
    case `schinese`:
      return 6;
    case `tchinese`:
      return 7;
    case `russian`:
      return 8;
    case `thai`:
      return 9;
    case `japanese`:
      return 10;
    case `portuguese`:
      return 11;
    case `polish`:
      return 12;
    case `danish`:
      return 13;
    case `dutch`:
      return 14;
    case `finnish`:
      return 15;
    case `norwegian`:
      return 16;
    case `swedish`:
      return 17;
    case `hungarian`:
      return 18;
    case `czech`:
      return 19;
    case `romanian`:
      return 20;
    case `turkish`:
      return 21;
    case `arabic`:
      return 25;
    case `brazilian`:
      return 22;
    case `bulgarian`:
      return 23;
    case `greek`:
      return 24;
    case `ukrainian`:
      return 26;
    case `latam`:
      return 27;
    case `vietnamese`:
      return 28;
    case `sc_schinese`:
      return 29;
    case `indonesian`:
      return 30;
    case `malay`:
      return 31;
    default:
      return _;
  }
}
function _(_) {
  switch (_) {
    default:
      break;
    case 4:
    case 1:
    case 8:
      return !0;
  }
  return !1;
}
var _ = (function (_) {
  return (
    (_[(_.k_EWindowBringToFrontInvalid = 0)] = `k_EWindowBringToFrontInvalid`),
    (_[(_.k_EWindowBringToFrontAndForceOS = 1)] =
      `k_EWindowBringToFrontAndForceOS`),
    (_[(_.k_EWindowBringToFrontWithoutForcingOS = 2)] =
      `k_EWindowBringToFrontWithoutForcingOS`),
    _
  );
})({});
export { _, _, _, _ };
