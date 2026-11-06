import "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _ } from "./storeurl.js?contenthash=DQcOzpFx";
import { _, _, _, _, _, _, _ } from "./main.js?contenthash=BznMolNX";
_();
var _ = {};
(_.arabic = () =>
  _(
    () => import(`./saletech_arabic.js?contenthash=2yCQ0ko8`),
    [],
    import.meta.url,
  )),
  (_.brazilian = () =>
    _(
      () => import(`./saletech_brazilian.js?contenthash=CTfNXcXx`),
      [],
      import.meta.url,
    )),
  (_.bulgarian = () =>
    _(
      () => import(`./saletech_bulgarian.js?contenthash=BRaHwcJI`),
      [],
      import.meta.url,
    )),
  (_.czech = () =>
    _(
      () => import(`./saletech_czech.js?contenthash=DJmeP0n7`),
      [],
      import.meta.url,
    )),
  (_.danish = () =>
    _(
      () => import(`./saletech_danish.js?contenthash=BTUGnkx4`),
      [],
      import.meta.url,
    )),
  (_.dutch = () =>
    _(
      () => import(`./saletech_dutch.js?contenthash=Dc9Ysny4`),
      [],
      import.meta.url,
    )),
  (_.english = () =>
    _(
      () => import(`./saletech_english.js?contenthash=CAnOGPSp`),
      [],
      import.meta.url,
    )),
  (_.finnish = () =>
    _(
      () => import(`./saletech_finnish.js?contenthash=BjDGgkIz`),
      [],
      import.meta.url,
    )),
  (_.french = () =>
    _(
      () => import(`./saletech_french.js?contenthash=DuoNc9DG`),
      [],
      import.meta.url,
    )),
  (_.german = () =>
    _(
      () => import(`./saletech_german.js?contenthash=BNdtJH68`),
      [],
      import.meta.url,
    )),
  (_.greek = () =>
    _(
      () => import(`./saletech_greek.js?contenthash=CChaowuV`),
      [],
      import.meta.url,
    )),
  (_.hungarian = () =>
    _(
      () => import(`./saletech_hungarian.js?contenthash=BqgjpGR6`),
      [],
      import.meta.url,
    )),
  (_.indonesian = () =>
    _(
      () => import(`./saletech_indonesian.js?contenthash=CFhC_bB8`),
      [],
      import.meta.url,
    )),
  (_.italian = () =>
    _(
      () => import(`./saletech_italian.js?contenthash=CIcdryqr`),
      [],
      import.meta.url,
    )),
  (_.japanese = () =>
    _(
      () => import(`./saletech_japanese.js?contenthash=C5peSQnc`),
      [],
      import.meta.url,
    )),
  (_.koreana = () =>
    _(
      () => import(`./saletech_koreana.js?contenthash=BSPvOjLE`),
      [],
      import.meta.url,
    )),
  (_.latam = () =>
    _(
      () => import(`./saletech_latam.js?contenthash=CGORQmUp`),
      [],
      import.meta.url,
    )),
  (_.malay = () =>
    _(
      () => import(`./saletech_malay.js?contenthash=Duzlp1-H`),
      [],
      import.meta.url,
    )),
  (_.norwegian = () =>
    _(
      () => import(`./saletech_norwegian.js?contenthash=C6W9OUCH`),
      [],
      import.meta.url,
    )),
  (_.polish = () =>
    _(
      () => import(`./saletech_polish.js?contenthash=lsHMUo9c`),
      [],
      import.meta.url,
    )),
  (_.portuguese = () =>
    _(
      () => import(`./saletech_portuguese.js?contenthash=h6qM3Prz`),
      [],
      import.meta.url,
    )),
  (_.romanian = () =>
    _(
      () => import(`./saletech_romanian.js?contenthash=BRk94Ln4`),
      [],
      import.meta.url,
    )),
  (_.russian = () =>
    _(
      () => import(`./saletech_russian.js?contenthash=BtiEa2Pz`),
      [],
      import.meta.url,
    )),
  (_.sc_schinese = () =>
    _(
      () => import(`./saletech_sc_schinese.js?contenthash=BKSJU5Cw`),
      [],
      import.meta.url,
    )),
  (_.schinese = () =>
    _(
      () => import(`./saletech_schinese.js?contenthash=0VnoQpxU`),
      [],
      import.meta.url,
    )),
  (_.spanish = () =>
    _(
      () => import(`./saletech_spanish.js?contenthash=61E19XQd`),
      [],
      import.meta.url,
    )),
  (_.swedish = () =>
    _(
      () => import(`./saletech_swedish.js?contenthash=C73e0JQi`),
      [],
      import.meta.url,
    )),
  (_.tchinese = () =>
    _(
      () => import(`./saletech_tchinese.js?contenthash=COuGhuoq`),
      [],
      import.meta.url,
    )),
  (_.thai = () =>
    _(
      () => import(`./saletech_thai.js?contenthash=C_n7Zu4N`),
      [],
      import.meta.url,
    )),
  (_.turkish = () =>
    _(
      () => import(`./saletech_turkish.js?contenthash=DLj8AscS`),
      [],
      import.meta.url,
    )),
  (_.ukrainian = () =>
    _(
      () => import(`./saletech_ukrainian.js?contenthash=Bce6npAU`),
      [],
      import.meta.url,
    )),
  (_.vietnamese = () =>
    _(
      () => import(`./saletech_vietnamese.js?contenthash=BM_Pkgtn`),
      [],
      import.meta.url,
    ));
async function _(_) {
  if (_[_]) return await _[_]();
}
var _ = _(_),
  _ = _();
function _(_) {
  let { closeModal: _, strDescOverride: _ } = _;
  return (0, _.jsx)(_, {
    strTitle: _.Localize(`#LoginRedirect_Dialog_Title`),
    strDescription: _ || _.Localize(`#LoginRedirect_Dialog_Description`),
    onCancel: _,
    strOKButtonText: _.Localize(`#Button_OK`),
    onOK: () => {
      _(), _();
    },
  });
}
function _(_) {
  let [_, _, _] = _();
  return {
    elDialogElement: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        closeModal: _,
        strDescOverride: _,
      }),
    }),
    fnShowLogonDialog: _,
  };
}
function _(_) {
  let { label: _, strDialogDesc: _ } = _,
    { elDialogElement: _, fnShowLogonDialog: _ } = _(_);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      (0, _.jsx)(_, {
        onClick: _,
        children: _ || _.Localize(`#Login_SignIn`),
      }),
      _,
    ],
  });
}
export { _, _, _ };
