var _ = _(_(), 1);
var _ = {
  ModalConfirmDialog: "qwA5BLuU6jE-",
  Header: "e1fOZZF2Hp0-",
  Buttons: "-ggTgNpcvJE-",
};
var _ = _(_(), 1);
function _(_) {
  let {
    strTitle: _,
    strDescription: _,
    className: _,
    children: _,
    navID: _,
    ..._
  } = _;
  return (0, _.jsxs)(_, {
    className: (0, _.default)(_, _.ModalConfirmDialog),
    onClose: _.onClose,
    navID: _,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          className: _.Header,
          children: [
            (0, _.jsx)("h2", {
              children: _,
            }),
            (0, _.jsx)("button", {
              onClick: _.onClose,
              children: (0, _.jsx)(_, {}),
            }),
          ],
        }),
      _ &&
        (0, _.jsx)(_, {
          className: _.Description,
          children: (0, _.jsx)("div", {
            children: _,
          }),
        }),
      _,
      (0, _.jsx)(_, {
        ..._,
      }),
    ],
  });
}
function _(_) {
  let { strOKLabel: _, strCancelLabel: _, onOK: _, onClose: _ } = _;
  return (0, _.jsxs)(_, {
    className: _.Buttons,
    children: [
      !!_ &&
        (0, _.jsx)(_, {
          onClick: _ ?? _,
          children: _,
        }),
      !!_ &&
        (0, _.jsx)(_, {
          onClick: _,
          children: _,
        }),
    ],
  });
}
var _ = "./community_arabic-XXXXXXXX.json";
var _ = "./community_brazilian-XXXXXXXX.json";
var _ = "./community_bulgarian-XXXXXXXX.json";
var _ = "./community_czech-XXXXXXXX.json";
var _ = "./community_danish-XXXXXXXX.json";
var _ = "./community_dutch-XXXXXXXX.json";
var _ = "./community_english-XXXXXXXX.json";
var _ = "./community_finnish-XXXXXXXX.json";
var _ = "./community_french-XXXXXXXX.json";
var _ = "./community_german-XXXXXXXX.json";
var _ = "./community_greek-XXXXXXXX.json";
var _ = "./community_hungarian-XXXXXXXX.json";
var _ = "./community_indonesian-XXXXXXXX.json";
var _ = "./community_italian-XXXXXXXX.json";
var _ = "./community_japanese-XXXXXXXX.json";
var _ = "./community_koreana-XXXXXXXX.json";
var _ = "./community_latam-XXXXXXXX.json";
var _ = "./community_norwegian-XXXXXXXX.json";
var _ = "./community_polish-XXXXXXXX.json";
var _ = "./community_portuguese-XXXXXXXX.json";
var _ = "./community_romanian-XXXXXXXX.json";
var _ = "./community_russian-XXXXXXXX.json";
var _ = "./community_schinese-XXXXXXXX.json";
var _ = "./community_spanish-XXXXXXXX.json";
var _ = "./community_swedish-XXXXXXXX.json";
var _ = "./community_tchinese-XXXXXXXX.json";
var _ = "./community_thai-XXXXXXXX.json";
var _ = "./community_turkish-XXXXXXXX.json";
var _ = "./community_ukrainian-XXXXXXXX.json";
var _ = "./community_vietnamese-XXXXXXXX.json";
var _ = {};
_.arabic = _;
_.brazilian = _;
_.bulgarian = _;
_.czech = _;
_.danish = _;
_.dutch = _;
_.english = _;
_.finnish = _;
_.french = _;
_.german = _;
_.greek = _;
_.hungarian = _;
_.indonesian = _;
_.italian = _;
_.japanese = _;
_.koreana = _;
_.latam = _;
_.norwegian = _;
_.polish = _;
_.portuguese = _;
_.romanian = _;
_.russian = _;
_.schinese = _;
_.spanish = _;
_.swedish = _;
_.tchinese = _;
_.thai = _;
_.turkish = _;
_.ukrainian = _;
_.vietnamese = _;
async function _(_) {
  if (_[_]) return (await fetch(new URL(_[_], import.meta.url))).json();
}
var _ = _(_);
export { _, _ };
