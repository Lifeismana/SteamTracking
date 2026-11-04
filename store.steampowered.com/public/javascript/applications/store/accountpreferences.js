/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./familymanagement.js?contenthash=gB6E6RM2",
      "./rolldown-runtime.js?contenthash=C8f2gWku",
      "./libraries.js?contenthash=CNC_iAx3",
      "./storelink.js?contenthash=DbXsJvxx",
      "./main.js?contenthash=kKx7KIpL",
      "../../../css/applications/store/main.css?contenthash=CL06k7su",
      "../../../css/applications/store/storelink.css?contenthash=DfLuucjw",
      "./saletags.js?contenthash=BwL-6HIw",
      "./usedataloader.client.js?contenthash=BsFeMYKq",
      "./claninfo.js?contenthash=BlNqCvUQ",
      "./storeurl.js?contenthash=vS2YFFbY",
      "./modals.js?contenthash=DpVzH-G7",
      "./ostype.js?contenthash=hoSDCDrc",
      "../../../css/applications/store/ostype.css?contenthash=x1XGuNl0",
      "./microtrailerdisplay.js?contenthash=Dvan3els",
      "../../../css/applications/store/microtrailerdisplay.css?contenthash=Cfa2oe-r",
      "./ajaxhooks.js?contenthash=DzoC2RB5",
      "./historyutils.js?contenthash=DxNfPuHi",
      "./throbber.js?contenthash=BXPvXAzf",
      "../../../css/applications/store/throbber.css?contenthash=DMWv5jTr",
      "./stringutils.js?contenthash=Dlrxs4RX",
      "./linkfilter.js?contenthash=WjEMWTt6",
      "./saletechredirectsignin.js?contenthash=Dwo6Jpbj",
      "./partnereventshared.module.js?contenthash=C0PbqCeD",
      "../../../css/applications/store/partnereventshared.css?contenthash=BGIA11o9",
      "./personautils.js?contenthash=CP6saxRY",
      "./csstransitionwrapper.js?contenthash=DDqjRsoV",
      "../../../css/applications/store/csstransitionwrapper.css?contenthash=5k1i5yPG",
      "./remotedownloadhooks.js?contenthash=BwTacque",
      "./steammessages_clan_pb.js?contenthash=CeloCwA2",
      "../../../css/applications/store/saletags.css?contenthash=Be_ydV96",
      "./moment.js?contenthash=Csw2oUrB",
      "./privateapps.js?contenthash=MXpV6k3c",
      "./playerstore.js?contenthash=Bo9QuCb2",
      "./persona.js?contenthash=CDTNGqtb",
      "./appinfostore.js?contenthash=CXbnsRHy",
      "./appinfo.js?contenthash=C1L54-z-",
      "./playerlinkdetailsdataloader.js?contenthash=DYxxKv71",
      "./storeitemhooks.js?contenthash=DlFAS_az",
      "./friendsstore.js?contenthash=CAh5SwAF",
      "./steammessages_friendslist_pb.js?contenthash=Ckr5PeLS",
      "./contentdescriptors.js?contenthash=B436g94H",
      "./expanderbutton.js?contenthash=DGl4aNoJ",
      "../../../css/applications/store/expanderbutton.css?contenthash=7EgfjSu7",
      "./steammessages_familygroups_pb.js?contenthash=D15LowAE",
      "./familymanagementstore.js?contenthash=BV4bva5N",
      "./steamavatar.js?contenthash=CMI9swrX",
      "./multisourceimage.js?contenthash=BKu7brjS",
      "../../../css/applications/store/steamavatar.css?contenthash=BQtkhJsu",
      "./personanameandstatus.js?contenthash=CEImKD8t",
      "./enums_epersonastateflag.js?contenthash=DUdzI8yJ",
      "./alternate_icons.js?contenthash=B_Ywhusu",
      "../../../css/applications/store/personanameandstatus.css?contenthash=BMiL-wHD",
      "./useavatarandpersona.js?contenthash=mqAKroqo",
      "./react-datetime.js?contenthash=CIC02Ql_",
      "../../../css/applications/store/react-datetime.css?contenthash=BLBSEpof",
      "./layout.js?contenthash=DdFM6FeZ",
      "../../../css/applications/store/layout.css?contenthash=CjyZtTRZ",
      "../../../css/applications/store/familymanagement.css?contenthash=C14v1NI8",
    ]),
) => i.map((i) => d[i]);
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import {
  At as n,
  F as r,
  L as i,
  Lt as a,
  d as o,
  ft as s,
  kt as c,
  l,
  tt as u,
} from "./libraries.js?contenthash=CNC_iAx3";
import { n as d } from "./image.js?contenthash=BtrZ2hNg";
import { r as f, t as p } from "./ostype.js?contenthash=hoSDCDrc";
import { t as m } from "./throbber.js?contenthash=BXPvXAzf";
import { i as h } from "./eventdevfeaturestore.js?contenthash=Dosr9jZG";
import { n as g } from "./playerstore.js?contenthash=Bo9QuCb2";
import { n as _ } from "./storeitemhooks.js?contenthash=DlFAS_az";
import {
  Br as v,
  Ct as y,
  En as b,
  Fn as x,
  Gy as S,
  Jr as ee,
  Ky as C,
  Mu as te,
  On as ne,
  Pb as w,
  Pn as T,
  Ry as re,
  Vy as ie,
  Xb as E,
  Xc as ae,
  Xo as oe,
  Xy as D,
  Yb as O,
  ax as k,
  bi as se,
  cr as ce,
  db as le,
  dr as ue,
  gb as A,
  hl as j,
  hr as de,
  ib as M,
  ii as fe,
  il as N,
  io as pe,
  ir as P,
  jc as F,
  lr as me,
  ni as he,
  ol as I,
  or as ge,
  pr as L,
  qr as _e,
  ri as ve,
  rr as R,
  sb as z,
  tr as ye,
  ui as be,
  uy as xe,
  vr as B,
  w as V,
  wb as Se,
  wc as H,
  wr as Ce,
  xS as we,
  xb as Te,
  xi as Ee,
  yi as De,
} from "./main.js?contenthash=kKx7KIpL";
import "./steammessages_twofactor_pb.js?contenthash=BoDSXqQA";
import { i as Oe } from "./steamavatar.js?contenthash=CMI9swrX";
import { r as ke, t as Ae } from "./playteststore.js?contenthash=C4AHQegU";
var U = e(a()),
  je = e(u()),
  Me = class {
    m_Preferences = void 0;
    constructor(e) {
      c(this),
        (this.m_Preferences = e),
        (!this.m_Preferences.content_customization ||
          Array.isArray(this.m_Preferences.content_customization)) &&
          (this.m_Preferences.content_customization = {}),
        (!this.m_Preferences.third_party_analytics ||
          Array.isArray(this.m_Preferences.third_party_analytics)) &&
          (this.m_Preferences.third_party_analytics = {}),
        (!this.m_Preferences.third_party_content ||
          Array.isArray(this.m_Preferences.third_party_content)) &&
          (this.m_Preferences.third_party_content = {}),
        (!this.m_Preferences.valve_analytics ||
          Array.isArray(this.m_Preferences.valve_analytics)) &&
          (this.m_Preferences.valve_analytics = {}),
        (this.m_Preferences.utm_enabled === void 0 ||
          this.m_Preferences.utm_enabled === null) &&
          (this.m_Preferences.utm_enabled = !0),
        (this.m_Preferences.preference_state == 0 ||
          this.m_Preferences.preference_state == 1) &&
          ((this.m_Preferences.valve_analytics.product_impressions_tracking =
            !0),
          (this.m_Preferences.content_customization.recentapps = !0),
          (this.m_Preferences.third_party_analytics.google_analytics = !0),
          (this.m_Preferences.third_party_content.sketchfab = !0),
          (this.m_Preferences.third_party_content.twitter = !0),
          (this.m_Preferences.third_party_content.vimeo = !0),
          (this.m_Preferences.third_party_content.youtube = !0)),
        this.m_Preferences.version == 0 && (this.m_Preferences.version = 1);
    }
    GetVersion() {
      return this.m_Preferences.version;
    }
    GetPreferenceState() {
      return this.m_Preferences.preference_state;
    }
    BIsAllowAll() {
      return (
        this.m_Preferences.preference_state == 1 ||
        this.m_Preferences.preference_state == 0
      );
    }
    BIsRejectAll() {
      return this.m_Preferences.preference_state == 2;
    }
    SetPreferenceState(e) {
      if (this.m_Preferences.preference_state != e) {
        if (((this.m_Preferences.preference_state = e), e == 1 || e == 2)) {
          let t = e == 1;
          (this.m_Preferences.content_customization.recentapps = t),
            (this.m_Preferences.third_party_analytics.google_analytics = t),
            (this.m_Preferences.third_party_content.sketchfab = t),
            (this.m_Preferences.third_party_content.twitter = t),
            (this.m_Preferences.third_party_content.vimeo = t),
            (this.m_Preferences.third_party_content.youtube = t),
            (this.m_Preferences.valve_analytics.product_impressions_tracking =
              t);
        }
        this.PostCookieSettings();
      }
    }
    GetRecentApps() {
      return this.m_Preferences.content_customization.recentapps;
    }
    ToggleRecentApps() {
      (this.m_Preferences.content_customization.recentapps =
        !this.m_Preferences.content_customization.recentapps),
        this.ProcessToggle();
    }
    GetImpressions() {
      return this.m_Preferences.valve_analytics.product_impressions_tracking;
    }
    ToggleImpressions() {
      (this.m_Preferences.valve_analytics.product_impressions_tracking =
        !this.m_Preferences.valve_analytics.product_impressions_tracking),
        this.ProcessToggle();
    }
    GetSketchfab() {
      return this.m_Preferences.third_party_content.sketchfab;
    }
    ToggleSketchfab() {
      (this.m_Preferences.third_party_content.sketchfab =
        !this.m_Preferences.third_party_content.sketchfab),
        this.ProcessToggle();
    }
    GetVimeo() {
      return this.m_Preferences.third_party_content.vimeo;
    }
    ToggleVimeo() {
      (this.m_Preferences.third_party_content.vimeo =
        !this.m_Preferences.third_party_content.vimeo),
        this.ProcessToggle();
    }
    GetYouTube() {
      return this.m_Preferences.third_party_content.youtube;
    }
    ToggleYouTube() {
      (this.m_Preferences.third_party_content.youtube =
        !this.m_Preferences.third_party_content.youtube),
        this.ProcessToggle();
    }
    GetUTMEnabled() {
      return this.m_Preferences.utm_enabled;
    }
    ToggleUTMEnabled() {
      (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
        this.PostCookieSettings();
    }
    ProcessToggle() {
      (this.m_Preferences.preference_state = 3), this.PostCookieSettings();
    }
    async PostCookieSettings() {
      let e = k.STORE_BASE_URL + `account/ajaxsetcookiepreferences`,
        t = new FormData();
      t.set(`sessionid`, O()),
        t.append(`cookiepreferences`, JSON.stringify(this.m_Preferences));
      try {
        let n = await je.default.post(e, t, { withCredentials: !0 });
        if (n.status != 200 || n?.data?.success != 1)
          window.ShowAlertDialog(
            S(`#CookiePref_Error`),
            S(`#CookiePref_ErrorNotSaved`),
          );
        else if (n?.data?.success == 1) {
          let { transfer_urls: e, transfer_params: t } = n.data;
          e && t && this.TransferCookiePreferencesToSites(e, t);
        }
      } catch {
        window.ShowAlertDialog(
          S(`#CookiePref_Error`),
          S(`#CookiePref_ErrorNotSaved`),
        );
      }
    }
    TransferCookiePreferencesToSites(e, t) {
      let n = new FormData();
      n.set(`transfer_params`, t);
      for (let t of e) je.default.post(t, n);
    }
  };
w([n], Me.prototype, `m_Preferences`, void 0);
var Ne = `VK34WouHuaw-`,
  Pe = `_5poRwjVM2xA-`,
  Fe = `f5Yon4sBMms-`,
  Ie = `dAbDU2dWSc8-`,
  W = `FhWHeCBXNTE-`,
  G = `_1jidsj59ecM-`,
  K = `nsVR689da2w-`,
  q = `KRR6D4MqfmI-`,
  J = `ianSd3EEgC4-`,
  Y = `GNihUgwOi5E-`,
  Le = `-vGnfVpkS8E-`,
  Re = `xexqER2-FTo-`,
  ze = `YBWuxM9Y7u8-`,
  Be = `_4ZnBPObA-Zo-`,
  Ve = `i9VafgXk4E0-`,
  He = `wH9bvzYo4Oo-`,
  Ue = `TLijdnKtJ-U-`,
  We = class {
    m_Preferences = void 0;
    constructor(e) {
      c(this), (this.m_Preferences = e);
    }
    SetDeckFeedback(e) {
      (this.m_Preferences.provide_deck_feedback = e),
        this.PostStorePreferences();
    }
    SetGameFrameRateReporting(e) {
      (this.m_Preferences.game_frame_rate_reporting = e),
        this.PostStorePreferences();
    }
    GetProvideDeckFeedbackEnabled() {
      return this.m_Preferences.provide_deck_feedback == 1;
    }
    GetGameFrameRateReportingEnabled() {
      return this.m_Preferences.game_frame_rate_reporting == 2;
    }
    ToggleProvideDeckFeeback() {
      (this.m_Preferences.provide_deck_feedback =
        this.m_Preferences.provide_deck_feedback == 1 ? 2 : 1),
        this.PostStorePreferences();
    }
    ToggleGameFrameRateReporting() {
      (this.m_Preferences.game_frame_rate_reporting =
        this.m_Preferences.game_frame_rate_reporting == 2 ? 1 : 2),
        this.PostStorePreferences();
    }
    async PostStorePreferences() {
      let e = k.STORE_BASE_URL + `account/savepreferences`,
        t = new FormData();
      t.set(`sessionid`, O()),
        t.set(
          `provide_deck_feedback`,
          this.m_Preferences.provide_deck_feedback.toString(),
        ),
        t.set(
          `game_frame_rate_reporting`,
          this.m_Preferences.game_frame_rate_reporting.toString(),
        );
      try {
        let n = await je.default.post(e, t, { withCredentials: !0 });
        n.status != 200 || n?.data?.success != 1
          ? window.ShowAlertDialog(
              S(`#DataCollectionPref_Error`),
              S(`#DataCollectionPref_ErrorNotSaved`),
            )
          : n?.data?.success;
      } catch {
        window.ShowAlertDialog(
          S(`#DataCollectionPref_Error`),
          S(`#DataCollectionPref_ErrorNotSaved`),
        );
      }
    }
  };
w([n], We.prototype, `m_Preferences`, void 0);
var Ge = class e {
  m_rgSavedHardware = [];
  static s_AccountSavedHardwareStore;
  constructor() {
    c(this);
  }
  static Get() {
    return (
      e.s_AccountSavedHardwareStore ||
        ((e.s_AccountSavedHardwareStore = new e()),
        e.s_AccountSavedHardwareStore.Init()),
      e.s_AccountSavedHardwareStore
    );
  }
  Init() {
    this.m_rgSavedHardware = E(`saved_hardware`, `application_config`);
  }
  GetSavedHardware() {
    return this.m_rgSavedHardware;
  }
  async PostRequest(e, t) {
    try {
      let n = await je.default.post(e, t, { withCredentials: !0 });
      return n.status != 200 || n?.data?.success != 1
        ? (window.ShowAlertDialog(
            S(`#SavedHardware_Error_Title`),
            S(`#SavedHardware_Error_Desc`),
          ),
          !1)
        : !0;
    } catch {
      return (
        window.ShowAlertDialog(
          S(`#SavedHardware_Error_Title`),
          S(`#SavedHardware_Error_Desc`),
        ),
        !1
      );
    }
  }
  async RenameHardware(e, t) {
    let n = k.STORE_BASE_URL + `account/ajaxhardwarerename`,
      r = new FormData();
    if (
      (r.set(`sessionid`, O()),
      r.set(`savedHardwareID`, e),
      r.set(`strFriendlyName`, t),
      await this.PostRequest(n, r))
    )
      for (let n = 0; n < this.m_rgSavedHardware.length; ++n)
        this.m_rgSavedHardware[n].hardware_id == e &&
          (this.m_rgSavedHardware[n].friendly_name = t);
  }
  async DeleteHardware(e) {
    let t = k.STORE_BASE_URL + `account/ajaxhardwaredelete`,
      n = new FormData();
    if (
      (n.set(`sessionid`, O()),
      n.set(`savedHardwareID`, e),
      await this.PostRequest(t, n))
    ) {
      for (let t = 0; t < this.m_rgSavedHardware.length; ++t)
        if (this.m_rgSavedHardware[t].hardware_id == e) {
          this.m_rgSavedHardware.splice(t, 1);
          return;
        }
    }
  }
};
w([n], Ge.prototype, `m_rgSavedHardware`, void 0);
function Ke() {
  return Ge.Get().GetSavedHardware();
}
var X = s();
function qe(e) {
  let { hw: t, closeModal: n } = e,
    r = U.useCallback(() => {
      Ge.Get().DeleteHardware(t.hardware_id), n();
    }, [n, t.hardware_id]);
  return (0, X.jsx)(ne, {
    bDisableBackgroundDismiss: !0,
    strTitle: S(`#SavedHardware_Delete_Confirm_Title`),
    onCancel: n,
    onOK: r,
    strOKButtonText: S(`#SavedHardware_Delete`),
    children: S(`#SavedHardware_Delete_Confirm_Desc`, t.friendly_name),
  });
}
function Je(e) {
  let { hw: t, closeModal: n } = e,
    [r, i] = U.useState(t.friendly_name),
    a = U.useCallback(() => {
      Ge.Get().RenameHardware(t.hardware_id, r.trim()), n();
    }, [r, n, t.hardware_id]);
  return (0, X.jsx)(ne, {
    bDisableBackgroundDismiss: !0,
    strTitle: S(`#SavedHardware_Rename_Confirm_Title`),
    onCancel: n,
    onOK: a,
    bOKDisabled: r.trim().length == 0,
    strOKButtonText: S(`#SavedHardware_Rename`),
    children: (0, X.jsx)(b, {
      label: S(`#SavedHardware_Rename_Confirm_Label`),
      value: r,
      onChange: (e) => {
        i(e.target.value);
      },
      maxLength: 100,
    }),
  });
}
var Ye = o((e) => {
    let { hw: t } = e,
      n;
    switch (t.system_info.gaming_device_type) {
      case 544:
        n = S(`#HardwareVariant_SteamDeck`);
        break;
      case 545:
        n = S(`#HardwareVariant_LegionGoS`);
        break;
      case 546:
        n = S(`#HardwareVariant_SteamMachine`);
    }
    return (0, X.jsxs)(`div`, {
      className: Re,
      children: [
        (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsxs)(`div`, {
              className: ze,
              children: [t.friendly_name, ` `],
            }),
            (0, X.jsxs)(`div`, {
              className: Be,
              children: [
                n && (0, X.jsx)(`div`, { children: n }),
                (0, X.jsx)(`div`, { children: t.system_info.os }),
                (0, X.jsxs)(`div`, {
                  children: [
                    t.system_info.cpu_name,
                    ` - `,
                    y(parseInt(t.system_info.system_ram) * 1024 * 1024, 0),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  children: [
                    t.system_info.adapter_description,
                    ` - `,
                    y(t.system_info.vram_size * 1024 * 1024, 0),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: void 0,
              children: S(`#SavedHardware_Timestamp`, le(t.timestamp_created)),
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: Ve,
          children: [
            (0, X.jsx)(P, {
              className: Ue,
              onClick: (e) => T((0, X.jsx)(Je, { hw: t }), te(e)),
              children: S(`#SavedHardware_Rename`),
            }),
            (0, X.jsx)(P, {
              className: He,
              onClick: (e) => T((0, X.jsx)(qe, { hw: t }), te(e)),
              children: S(`#SavedHardware_Delete`),
            }),
          ],
        }),
      ],
    });
  }),
  Xe = o(() => {
    let e = Ke(),
      t = typeof SteamClient < `u`,
      n = U.useCallback(() => {
        window.location.reload();
      }, []),
      r = U.useCallback(() => {
        window.SteamClient.BrowserView.RegisterForMessageFromParent(n),
          SteamClient.BrowserView.PostMessageToParent(
            `ShowSavedHardwareDialog`,
            ``,
          );
      }, [n]);
    return (0, X.jsxs)(`div`, {
      className: W,
      children: [
        (0, X.jsxs)(`div`, {
          className: G,
          children: [
            (0, X.jsx)(`h2`, { children: S(`#SavedHardware_Title`) }),
            (0, X.jsx)(`p`, {
              className: K,
              children: S(`#SavedHardware_Desc`),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: Le,
          children: e.map((e) => (0, X.jsx)(Ye, { hw: e }, e.hardware_id)),
        }),
        (0, X.jsx)(`div`, {
          className: Ve,
          children:
            t &&
            (0, X.jsxs)(P, {
              className: `_6xNO-D5DinA-`,
              onClick: r,
              children: [S(`#SavedHardware_AddNew`), ` `],
            }),
        }),
      ],
    });
  }),
  Ze = null,
  Qe = null;
function $e() {
  return (
    (Ze ||= new Me(E(`cookiepreferences`, `application_config`))),
    (Qe ||= new We(E(`storedatapreferences`, `application_config`))),
    [Ze, Qe]
  );
}
var et = l(() => {
    let [e, t] = $e(),
      n = (0, U.useCallback)(() => {
        e.SetPreferenceState(1);
      }, [e]),
      r = (0, U.useCallback)(() => {
        e.SetPreferenceState(2);
      }, [e]),
      i = xe();
    return (0, X.jsxs)(`div`, {
      children: [
        (0, X.jsx)(`div`, {
          className: H(Fe, `account_header_line noicon`),
          children: (0, X.jsx)(`div`, {
            children: S(`#CookiePref_OptionalCookies_Title`),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, X.jsxs)(F, {
              "flow-children": `row`,
              className: Ie,
              children: [
                (0, X.jsx)(I, {
                  className: H(Ne, e.BIsRejectAll() ? Pe : ``),
                  onClick: r,
                  children: S(`#CookiePref_RejectAll`),
                }),
                (0, X.jsx)(I, {
                  className: H(Ne, e.BIsAllowAll() ? Pe : ``),
                  onClick: n,
                  children: S(`#CookiePref_AcceptAll`),
                }),
              ],
            }),
            (0, X.jsx)(tt, { settings: e }),
            (0, X.jsx)(nt, { settings: e }),
            (0, X.jsx)(rt, { settings: e }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: H(Fe, `account_header_line noicon`),
          children: (0, X.jsx)(`div`, {
            children: S(`#CookiePref_TechnicallyNeccesary_Title`),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, X.jsx)(`p`, {
              children: S(`#CookiePref_TechnicallyNeccesary_Desc`),
            }),
            (0, X.jsxs)(`div`, {
              className: W,
              children: [
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_SessionID_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_SessionID_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_ShoppingCart_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_ShoppingCart_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_SteamCountry_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_SteamCountry_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_Timezone_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_Timezone_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_BirthTime_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_BirthTime_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_Login_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_Login_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_Language_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_Language_Desc`),
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: q,
                  children: [
                    (0, X.jsx)(`span`, {
                      className: J,
                      children: S(`#CookiePref_CookieSettings_Title`),
                    }),
                    (0, X.jsx)(`span`, {
                      className: Y,
                      children: S(`#CookiePref_CookieSettings_Desc`),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: H(Fe, `account_header_line noicon`),
          children: (0, X.jsx)(`div`, {
            children: S(`#PrivacySettings_Marketing_Header`),
          }),
        }),
        (0, X.jsx)(`div`, {
          className: `account_settings_container`,
          children: (0, X.jsx)(it, { settings: e }),
        }),
        !!i &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                className: H(`_64aHmRjJ5Ns-`, `account_header_line noicon`),
                children: (0, X.jsx)(`div`, {
                  children: S(`#DataPreferences_Header`),
                }),
              }),
              (0, X.jsx)(`div`, {
                className: `account_settings_container`,
                children: (0, X.jsx)(at, { settings: t }),
              }),
            ],
          }),
        null,
      ],
    });
  }),
  tt = l((e) => {
    let { settings: t } = e,
      n = (0, U.useCallback)(() => {
        t.ToggleRecentApps();
      }, [t]);
    return (0, X.jsx)(`div`, {
      className: W,
      children: (0, X.jsxs)(`div`, {
        className: G,
        children: [
          (0, X.jsx)(`h2`, { children: S(`#CookiePref_Content_Title`) }),
          (0, X.jsx)(`p`, {
            className: K,
            children: S(`#CookiePref_Content_Desc`),
          }),
          (0, X.jsx)(B, {
            onChange: n,
            label: S(`#CookiePref_Content_ToggleTitle`),
            checked: t.GetRecentApps(),
            description: S(`#CookiePref_Content_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  nt = l((e) => {
    let { settings: t } = e,
      n = (0, U.useCallback)(() => {
        t.ToggleImpressions();
      }, [t]);
    return (0, X.jsx)(`div`, {
      className: W,
      children: (0, X.jsxs)(`div`, {
        className: G,
        children: [
          (0, X.jsx)(`h2`, { children: S(`#CookiePref_ValveAnalytics_Title`) }),
          (0, X.jsx)(`p`, {
            className: K,
            children: S(`#CookiePref_ValveAnalytics_Desc`),
          }),
          (0, X.jsx)(B, {
            onChange: n,
            label: S(`#CookiePref_ValveAnalytics_ToggleTitle`),
            checked: t.GetImpressions(),
            description: S(`#CookiePref_ValveAnalytics_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  rt = l((e) => {
    let { settings: t } = e,
      n = (0, U.useCallback)(() => {
        t.ToggleYouTube();
      }, [t]),
      r = (0, U.useCallback)(() => {
        t.ToggleVimeo();
      }, [t]),
      i = (0, U.useCallback)(() => {
        t.ToggleSketchfab();
      }, [t]);
    return (0, X.jsx)(`div`, {
      className: W,
      children: (0, X.jsxs)(`div`, {
        className: G,
        children: [
          (0, X.jsx)(`h2`, { children: S(`#CookiePref_ThirdParty_Title`) }),
          (0, X.jsx)(`p`, {
            className: K,
            children: S(`#CookiePref_ThirdParty_Desc`),
          }),
          (0, X.jsx)(B, {
            onChange: n,
            label: S(`#CookiePref_YouTube_Title`),
            checked: t.GetYouTube(),
            description: D(
              `#CookiePref_YouTube_Desc`,
              (0, X.jsx)(`a`, {
                href: `https://policies.google.com/privacy`,
                target: `_blank`,
                children: S(`#CookiePref_YouTube_TogglePolicyName`),
              }),
            ),
          }),
          (0, X.jsx)(B, {
            onChange: r,
            label: S(`#CookiePref_Vimeo_Title`),
            checked: t.GetVimeo(),
            description: D(
              `#CookiePref_Vimeo_Desc`,
              (0, X.jsx)(`a`, {
                href: `https://vimeo.com/privacy`,
                target: `_blank`,
                children: S(`#CookiePref_Vimeo_TogglePolicyName`),
              }),
            ),
          }),
          (0, X.jsx)(B, {
            onChange: i,
            label: S(`#CookiePref_Sketchfab_Title`),
            checked: t.GetSketchfab(),
            description: D(
              `#CookiePref_Sketchfab_Desc`,
              (0, X.jsx)(`a`, {
                href: `https://sketchfab.com/privacy`,
                target: `_blank`,
                children: S(`#CookiePref_Sketchfab_TogglePolicyName`),
              }),
            ),
          }),
        ],
      }),
    });
  }),
  it = l((e) => {
    let { settings: t } = e,
      n = (0, U.useCallback)(() => {
        t.ToggleUTMEnabled();
      }, [t]);
    return (0, X.jsx)(`div`, {
      className: W,
      children: (0, X.jsxs)(`div`, {
        className: G,
        children: [
          (0, X.jsx)(`h2`, { children: S(`#PrivacySettings_Marketing_Title`) }),
          (0, X.jsx)(`p`, {
            className: K,
            children: S(`#PrivacySettings_Marketing_Desc`),
          }),
          (0, X.jsx)(B, {
            onChange: n,
            label: S(`#PrivacySettings_UTM_ToggleLabel`),
            checked: t.GetUTMEnabled(),
            description: S(`#PrivacySettings_UTM_ToggleDesc`),
          }),
        ],
      }),
    });
  }),
  at = l((e) => {
    let { settings: t } = e,
      n = (0, U.useCallback)(() => {
        t.ToggleProvideDeckFeeback();
      }, [t]),
      r = (0, U.useCallback)(() => {
        t.ToggleGameFrameRateReporting();
      }, [t]);
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(`div`, {
          className: W,
          children: (0, X.jsxs)(`div`, {
            className: G,
            children: [
              (0, X.jsx)(`h2`, {
                children: S(`#DataPreferences_Provide_SteamOS_Feedback_Title`),
              }),
              (0, X.jsx)(`p`, {
                className: K,
                children: S(`#DataPreferences_Provide_SteamOS_Feedback_Desc`),
              }),
              (0, X.jsx)(B, {
                onChange: n,
                checked: t.GetProvideDeckFeedbackEnabled(),
                description: S(
                  `#DataPreferences_Provide_SteamOS_Feedback_Label`,
                ),
              }),
            ],
          }),
        }),
        (0, X.jsx)(`div`, {
          className: W,
          children: (0, X.jsxs)(`div`, {
            className: G,
            children: [
              (0, X.jsx)(`h2`, {
                id: `FrameRateReporting`,
                children: S(`#DataPreferences_FrameRateReporting_Title`),
              }),
              (0, X.jsx)(`p`, {
                className: K,
                children: S(`#DataPreferences_FrameRateReporting_Description`),
              }),
              (0, X.jsx)(B, {
                onChange: r,
                checked: t.GetGameFrameRateReportingEnabled(),
                description: S(`#DataPreferences_FrameRateReporting_Label`),
              }),
            ],
          }),
        }),
        (0, X.jsx)(Xe, {}),
      ],
    });
  }),
  ot = `sML4yrXupis-`,
  st = `PN-BLDRmOi8-`,
  ct = `dbVek-y66VM-`,
  lt = `G9YiArwIWMc-`,
  ut = `RLZi3mFotC8-`,
  dt = `pF1Nwx-LELQ-`,
  ft = `oWGsep6hjnY-`,
  pt = `F5865fLuKas-`,
  mt = `FrKp3u6aEXY-`,
  ht = `Ygu4WfbzVL8-`,
  gt = `qpPlg5ibwQY-`,
  _t = `jR5Et-4d2rw-`,
  vt = 1422450;
function yt(e) {
  let { bShowPlaytestOverview: t } = e,
    n = Ae(),
    r = [];
  return (
    n.isSuccess &&
      (r = n.data
        .filter((e) => e.status === 1 || e.status === 3)
        .map((e) => {
          switch (e.status) {
            case 3:
              return (0, X.jsx)(bt, { invite: e }, e.invite_id);
            default:
              return (0, X.jsx)(xt, { invite: e }, e.invite_id);
          }
        })),
    (0, X.jsxs)(`div`, {
      children: [
        (0, X.jsx)(`div`, {
          className: `account_header_line noicon`,
          children: S(`#PlaytestInvites_Title`),
        }),
        (0, X.jsx)(`div`, {
          className: H(ot, `account_settings_container`),
          children:
            n.isLoading || r.length > 0 ? r : S(`#PlaytestInvites_NoInvites`),
        }),
        t &&
          (0, X.jsxs)(`div`, {
            className: `account_settings_container`,
            children: [
              (0, X.jsx)(`h2`, { children: S(`#PlaytestInvites_Desc_Title`) }),
              (0, X.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: S(`#PlaytestInvites_Desc1`),
              }),
              (0, X.jsx)(`p`, {
                className: `SnnYqQRRwLQ-`,
                children: S(`#PlaytestInvites_Desc2`),
              }),
            ],
          }),
      ],
    })
  );
}
function bt(e) {
  let { invite: t } = e,
    n = t.appid,
    r = Et(t.appid)?.GetName() ?? t.app_name,
    i = U.useCallback(
      (e) => {
        Ce(te(e), `steam://open/games/details/${n}`);
      },
      [n],
    );
  return (0, X.jsxs)(`div`, {
    className: st,
    children: [
      (0, X.jsx)(`div`, {
        className: ct,
        children: (0, X.jsx)(`span`, {
          children: S(`#PlaytestInvites_Welcome`, r),
        }),
      }),
      !k.IN_MOBILE_WEBVIEW &&
        (0, X.jsx)(`div`, {
          className: `pF1Nwx-LELQ-`,
          children: (0, X.jsx)(F, {
            className: `oWGsep6hjnY-`,
            children: (0, X.jsx)(L, {
              className: `Bq8C8lENGmc-`,
              noFocusRing: !1,
              onClick: i,
              children: S(`#PlaytestInvites_ViewLibrary`),
            }),
          }),
        }),
    ],
  });
}
function xt(e) {
  let { invite: t } = e,
    n = h(),
    r = Et(t.appid),
    i = r?.GetName() ?? t.app_name,
    a = ke(t.invite_id),
    o = U.useCallback(
      (e) => {
        a.mutate({ bAccept: e });
      },
      [a],
    ),
    s = new re(t.steamid_inviter);
  return (0, X.jsx)(ae, {
    children: (0, X.jsxs)(F, {
      className: st,
      navEntryPreferPosition: j.MAINTAIN_X,
      children: [
        (0, X.jsxs)(`div`, {
          className: ct,
          children: [
            (0, X.jsx)(Ct, { steamIDInviter: s }),
            (0, X.jsx)(St, { appStoreItem: r, strAppName: i, nAppID: t.appid }),
            (0, X.jsx)(`div`, {
              className: ut,
              children: A(t.time_created ?? n),
            }),
          ],
        }),
        (0, X.jsx)(`div`, {
          className: dt,
          children: a.isPending
            ? (0, X.jsx)(m, {
                size: `medium`,
                position: `center`,
                msDelayAppear: 250,
              })
            : (0, X.jsxs)(`div`, {
                className: ft,
                children: [
                  (0, X.jsx)(L, {
                    noFocusRing: !1,
                    onClick: () => o(!0),
                    children: S(`#PlaytestInvites_Accept`),
                  }),
                  (0, X.jsx)(P, {
                    noFocusRing: !1,
                    onClick: () => o(!1),
                    children: S(`#PlaytestInvites_Reject`),
                  }),
                ],
              }),
        }),
      ],
    }),
  });
}
function St(e) {
  let { appStoreItem: t, strAppName: n, nAppID: r } = e,
    i = t?.GetDeveloperNames()?.length ? t.GetDeveloperNames()[0] : null,
    a = t?.GetStorePageURL(),
    o = (0, X.jsx)(`img`, {
      className: gt,
      src: t?.GetAssets().GetSmallCapsuleURL() ?? f,
    });
  return (
    r == vt && (i = `Valve`),
    (0, X.jsxs)(`div`, {
      className: pt,
      children: [
        a ? (0, X.jsxs)(N, { href: a, children: [` `, o, ` `] }) : o,
        (0, X.jsxs)(`div`, {
          className: ht,
          children: [
            (0, X.jsx)(`div`, { className: mt, children: n }),
            i &&
              (0, X.jsx)(`div`, {
                className: `_5NumTItJbZc-`,
                children: S(`#PlaytestInvites_AppDeveloper`, i),
              }),
          ],
        }),
      ],
    })
  );
}
function Ct(e) {
  let { steamIDInviter: t } = e;
  return t.BIsValid()
    ? (0, X.jsx)(wt, { steamIDInviter: t })
    : (0, X.jsx)(Tt, {});
}
function wt(e) {
  let { steamIDInviter: t } = e,
    n = g(t.ConvertTo64BitString()),
    r = n?.data;
  return n.isSuccess
    ? (0, X.jsxs)(`div`, {
        className: H(_t, lt),
        children: [
          (0, X.jsx)(Oe, {
            persona: r,
            size: `Small`,
            statusPosition: `right`,
          }),
          (0, X.jsx)(`div`, {
            children: D(
              `#PlaytestInvites_InviteDescription_FromUser2`,
              (0, X.jsx)(N, {
                href: r.GetCommunityProfileURL(),
                children: r?.m_strPlayerName,
              }),
            ),
          }),
        ],
      })
    : (0, X.jsx)(Tt, {});
}
function Tt(e) {
  return (0, X.jsx)(`div`, {
    className: lt,
    children: S(`#PlaytestInvites_InviteDescription_FromApp2`),
  });
}
function Et(e) {
  let [t, n] = _(e, { include_basic_info: !0, include_assets: !0 });
  return t && n == 3 ? t : null;
}
var Dt = `bCxa8Ii97Bk-`;
function Ot(e) {
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(yt, { bShowPlaytestOverview: !1 }),
      (0, X.jsx)(`div`, {
        className: `account_header_line noicon`,
        children: S(`#PlaytestStatus_Title`),
      }),
      (0, X.jsx)(`div`, {
        className: H(Dt, `account_settings_container`),
        children: S(`#PlaytestStatus_None`),
      }),
      (0, X.jsxs)(`div`, {
        className: `account_settings_container`,
        children: [
          (0, X.jsx)(`h2`, { children: S(`#PlaytestInvites_Desc_Title`) }),
          (0, X.jsx)(`p`, {
            className: void 0,
            children: S(`#PlaytestInvites_Desc1`),
          }),
          (0, X.jsx)(`p`, {
            className: void 0,
            children: S(`#PlaytestInvites_Desc2`),
          }),
        ],
      }),
    ],
  });
}
var Z = class e {
  m_rgActiveDevices = [];
  m_rgRevokedDevices = [];
  m_strAccountName;
  m_strPhoneHint;
  m_strEmail;
  m_msgTwoFactorStatus;
  m_strLatestAndroidAppVersion;
  static s_AuthorizedDevicesStore;
  constructor() {
    c(this);
  }
  static Get() {
    return (
      e.s_AuthorizedDevicesStore ||
        ((e.s_AuthorizedDevicesStore = new e()),
        e.s_AuthorizedDevicesStore.Init()),
      e.s_AuthorizedDevicesStore
    );
  }
  Init() {
    (this.m_rgActiveDevices = E(`active_devices`, `application_config`)),
      (this.m_rgRevokedDevices = E(`revoked_devices`, `application_config`)),
      (this.m_strAccountName = E(`accountName`, `application_config`)),
      (this.m_strPhoneHint = E(`phone_hint`, `application_config`)),
      (this.m_strEmail = E(`email`, `application_config`)),
      (this.m_msgTwoFactorStatus = E(
        `two_factor_status`,
        `application_config`,
      )),
      (this.m_strLatestAndroidAppVersion = E(
        `latest_android_app_version`,
        `application_config`,
      ));
  }
  GetActiveDevices() {
    return this.m_rgActiveDevices;
  }
  GetRevokedDevices() {
    return this.m_rgRevokedDevices;
  }
  GetAccountName() {
    return this.m_strAccountName;
  }
  GetPhoneHint() {
    return this.m_strPhoneHint;
  }
  GetEmailAddress() {
    return this.m_strEmail;
  }
  GetTwoFactorStatus() {
    return this.m_msgTwoFactorStatus;
  }
  GetLatestAndroidAppVersion() {
    return this.m_strLatestAndroidAppVersion;
  }
};
w([n], Z.prototype, `m_rgActiveDevices`, void 0),
  w([n], Z.prototype, `m_rgRevokedDevices`, void 0);
var kt = new URL(
    `../../../images/applications/store/sg_shield_off.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  At = new URL(
    `../../../images/applications/store/sg_shield_on.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  jt = new URL(
    `../../../images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching`,
    import.meta.url,
  ).href,
  Mt = t((e, t, n) => {
    (function (n, r) {
      var i = `1.0.41`,
        a = ``,
        o = `function`,
        s = `undefined`,
        c = `object`,
        l = `string`,
        u = `major`,
        d = `model`,
        f = `name`,
        p = `type`,
        m = `vendor`,
        h = `version`,
        g = `architecture`,
        _ = `console`,
        v = `mobile`,
        y = `tablet`,
        b = `smarttv`,
        x = `wearable`,
        S = `embedded`,
        ee = `Amazon`,
        C = `Apple`,
        te = `ASUS`,
        ne = `BlackBerry`,
        w = `Browser`,
        T = `Chrome`,
        re = `Edge`,
        ie = `Firefox`,
        E = `Google`,
        ae = `Honor`,
        oe = `Huawei`,
        D = `Lenovo`,
        O = `LG`,
        k = `Microsoft`,
        se = `Motorola`,
        ce = `Nvidia`,
        le = `OnePlus`,
        ue = `Opera`,
        A = `OPPO`,
        j = `Samsung`,
        de = `Sharp`,
        M = `Sony`,
        fe = `Xiaomi`,
        N = `Zebra`,
        pe = `Facebook`,
        P = `Chromium OS`,
        F = `Mac OS`,
        me = ` Browser`,
        he = function (e, t) {
          var n = {};
          for (var r in e)
            n[r] = t[r] && t[r].length % 2 == 0 ? t[r].concat(e[r]) : e[r];
          return n;
        },
        I = function (e) {
          for (var t = {}, n = 0; n < e.length; n++)
            t[e[n].toUpperCase()] = e[n];
          return t;
        },
        ge = function (e, t) {
          return typeof e == l && L(t).indexOf(L(e)) !== -1;
        },
        L = function (e) {
          return e.toLowerCase();
        },
        _e = function (e) {
          return typeof e == l ? e.replace(/[^\d\.]/g, a).split(`.`)[0] : r;
        },
        ve = function (e, t) {
          if (typeof e == l)
            return (
              (e = e.replace(/^\s\s*/, a)),
              typeof t === s ? e : e.substring(0, 500)
            );
        },
        R = function (e, t) {
          for (var n = 0, i, a, s, l, u, d; n < t.length && !u; ) {
            var f = t[n],
              p = t[n + 1];
            for (i = a = 0; i < f.length && !u && f[i]; )
              if (((u = f[i++].exec(e)), u))
                for (s = 0; s < p.length; s++)
                  (d = u[++a]),
                    (l = p[s]),
                    typeof l == c && l.length > 0
                      ? l.length === 2
                        ? typeof l[1] == o
                          ? (this[l[0]] = l[1].call(this, d))
                          : (this[l[0]] = l[1])
                        : l.length === 3
                          ? typeof l[1] === o && !(l[1].exec && l[1].test)
                            ? (this[l[0]] = d ? l[1].call(this, d, l[2]) : r)
                            : (this[l[0]] = d ? d.replace(l[1], l[2]) : r)
                          : l.length === 4 &&
                            (this[l[0]] = d
                              ? l[3].call(this, d.replace(l[1], l[2]))
                              : r)
                      : (this[l] = d || r);
            n += 2;
          }
        },
        z = function (e, t) {
          for (var n in t)
            if (typeof t[n] == c && t[n].length > 0) {
              for (var i = 0; i < t[n].length; i++)
                if (ge(t[n][i], e)) return n === `?` ? r : n;
            } else if (ge(t[n], e)) return n === `?` ? r : n;
          return t.hasOwnProperty(`*`) ? t[`*`] : e;
        },
        ye = {
          "1.0": `/8`,
          1.2: `/1`,
          1.3: `/3`,
          "2.0": `/412`,
          "2.0.2": `/416`,
          "2.0.3": `/417`,
          "2.0.4": `/419`,
          "?": `/`,
        },
        be = {
          ME: `4.90`,
          "NT 3.11": `NT3.51`,
          "NT 4.0": `NT4.0`,
          2e3: `NT 5.0`,
          XP: [`NT 5.1`, `NT 5.2`],
          Vista: `NT 6.0`,
          7: `NT 6.1`,
          8: `NT 6.2`,
          8.1: `NT 6.3`,
          10: [`NT 6.4`, `NT 10.0`],
          RT: `ARM`,
        },
        xe = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [h, [f, `Chrome`]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [h, [f, `Edge`]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [f, h],
            [/opios[\/ ]+([\w\.]+)/i],
            [h, [f, ue + ` Mini`]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [h, [f, ue + ` GX`]],
            [/\bopr\/([\w\.]+)/i],
            [h, [f, ue]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [h, [f, `Baidu`]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [h, [f, `Maxthon`]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,
              /(heytap|ovi|115)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [f, h],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [h, [f, `Quark`]],
            [/\bddg\/([\w\.]+)/i],
            [h, [f, `DuckDuckGo`]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [h, [f, `UC` + w]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [h, [f, `WeChat`]],
            [/konqueror\/([\w\.]+)/i],
            [h, [f, `Konqueror`]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [h, [f, `IE`]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [h, [f, `Yandex`]],
            [/slbrowser\/([\w\.]+)/i],
            [h, [f, `Smart Lenovo ` + w]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1 Secure ` + w], h],
            [/\bfocus\/([\w\.]+)/i],
            [h, [f, ie + ` Focus`]],
            [/\bopt\/([\w\.]+)/i],
            [h, [f, ue + ` Touch`]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [h, [f, `Coc Coc`]],
            [/dolfin\/([\w\.]+)/i],
            [h, [f, `Dolphin`]],
            [/coast\/([\w\.]+)/i],
            [h, [f, ue + ` Coast`]],
            [/miuibrowser\/([\w\.]+)/i],
            [h, [f, `MIUI` + me]],
            [/fxios\/([\w\.-]+)/i],
            [h, [f, ie]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [h, [f, `360`]],
            [/\b(qq)\/([\w\.]+)/i],
            [[f, /(.+)/, `$1Browser`], h],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[f, /(.+)/, `$1` + me], h],
            [/samsungbrowser\/([\w\.]+)/i],
            [h, [f, j + ` Internet`]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [h, [f, `Sogou Explorer`]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[f, `Sogou Mobile`], h],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [f, h],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [f],
            [
              /ome\/([\w\.]+) \w* ?(iron) saf/i,
              /ome\/([\w\.]+).+qihu (360)[es]e/i,
            ],
            [h, f],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[f, pe], h],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /(daum)apps[\/ ]([\w\.]+)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [f, h],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [h, [f, `GSA`]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [h, [f, `TikTok`]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [h, [f, T + ` Headless`]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[f, T + ` WebView`], h],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [h, [f, `Android ` + w]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [f, h],
            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
            [h, [f, `Mobile Safari`]],
            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
            [h, f],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [f, [h, z, ye]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [f, h],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[f, `Netscape`], h],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [f, h],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [h, [f, ie + ` Reality`]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /\b(links) \(([\w\.]+)/i,
            ],
            [f, [h, /_/g, `.`]],
            [/(cobalt)\/([\w\.]+)/i],
            [f, [h, /master.|lts./, ``]],
          ],
          cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[g, `amd64`]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[g, `ia32`]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[g, `arm64`]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[g, `armhf`]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[g, `arm`]],
            [/((ppc|powerpc)(64)?)( mac|;|\))/i],
            [[g, /ower/, a, L]],
            [/ sun4\w[;\)]/i],
            [[g, `sparc`]],
            [
              /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
            ],
            [[g, L]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [d, [m, j], [p, y]],
            [
              /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]((?!sm-[lr])[-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [d, [m, j], [p, v]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [d, [m, C], [p, v]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [d, [m, C], [p, y]],
            [/(macintosh);/i],
            [d, [m, C]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [d, [m, de], [p, v]],
            [
              /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i,
            ],
            [d, [m, ae], [p, y]],
            [/honor([-\w ]+)[;\)]/i],
            [d, [m, ae], [p, v]],
            [
              /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [d, [m, oe], [p, y]],
            [
              /(?:huawei)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [d, [m, oe], [p, v]],
            [
              /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
              /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
              [d, /_/g, ` `],
              [m, fe],
              [p, y],
            ],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              / ([\w ]+) miui\/v?\d/i,
            ],
            [
              [d, /_/g, ` `],
              [m, fe],
              [p, v],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [d, [m, A], [p, v]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [d, [m, z, { OnePlus: [`304`, `403`, `203`], "*": A }], [p, y]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [d, [m, `Vivo`], [p, v]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [d, [m, `Realme`], [p, v]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [d, [m, se], [p, v]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [d, [m, se], [p, y]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [d, [m, O], [p, y]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv|watch)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [d, [m, O], [p, v]],
            [
              /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
              /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [d, [m, D], [p, y]],
            [/(nokia) (t[12][01])/i],
            [m, d, [p, y]],
            [
              /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
              /nokia[-_ ]?(([-\w\. ]*))/i,
            ],
            [
              [d, /_/g, ` `],
              [p, v],
              [m, `Nokia`],
            ],
            [/(pixel (c|tablet))\b/i],
            [d, [m, E], [p, y]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [d, [m, E], [p, v]],
            [
              /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [d, [m, M], [p, v]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [d, `Xperia Tablet`],
              [m, M],
              [p, y],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [d, [m, le], [p, v]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [d, [m, ee], [p, y]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [d, /(.+)/g, `Fire Phone $1`],
              [m, ee],
              [p, v],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [d, m, [p, y]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [d, [m, ne], [p, v]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [d, [m, te], [p, y]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [d, [m, te], [p, v]],
            [/(nexus 9)/i],
            [d, [m, `HTC`], [p, y]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [m, [d, /_/g, ` `], [p, v]],
            [
              /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
            ],
            [d, [m, `TCL`], [p, y]],
            [/(itel) ((\w+))/i],
            [
              [m, L],
              d,
              [p, z, { tablet: [`p10001l`, `w7001`], "*": `mobile` }],
            ],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [d, [m, `Acer`], [p, y]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [d, [m, `Meizu`], [p, v]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [d, [m, `Ulefone`], [p, v]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [d, [m, `Energizer`], [p, v]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [d, [m, `Cat`], [p, v]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [d, [m, `Smartfren`], [p, v]],
            [/droid.+; (a(?:015|06[35]|142p?))/i],
            [d, [m, `Nothing`], [p, v]],
            [
              /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
              /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [d, [m, `Archos`], [p, y]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [d, [m, `Archos`], [p, v]],
            [/(imo) (tab \w+)/i, /(infinix) (x1101b?)/i],
            [m, d, [p, y]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
              /; (hmd|imo) ([\w ]+?)(?: bui|\))/i,
              /(hp) ([\w ]+\w)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [m, d, [p, v]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
              /(nook)[\w ]+build\/(\w+)/i,
              /(dell) (strea[kpr\d ]*[\dko])/i,
              /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
              /(trinity)[- ]*(t\d{3}) bui/i,
              /(gigaset)[- ]+(q\w{1,9}) bui/i,
              /(vodafone) ([\w ]+)(?:\)| bui)/i,
            ],
            [m, d, [p, y]],
            [/(surface duo)/i],
            [d, [m, k], [p, y]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [d, [m, `Fairphone`], [p, v]],
            [/(u304aa)/i],
            [d, [m, `AT&T`], [p, v]],
            [/\bsie-(\w*)/i],
            [d, [m, `Siemens`], [p, v]],
            [/\b(rct\w+) b/i],
            [d, [m, `RCA`], [p, y]],
            [/\b(venue[\d ]{2,7}) b/i],
            [d, [m, `Dell`], [p, y]],
            [/\b(q(?:mv|ta)\w+) b/i],
            [d, [m, `Verizon`], [p, y]],
            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
            [d, [m, `Barnes & Noble`], [p, y]],
            [/\b(tm\d{3}\w+) b/i],
            [d, [m, `NuVision`], [p, y]],
            [/\b(k88) b/i],
            [d, [m, `ZTE`], [p, y]],
            [/\b(nx\d{3}j) b/i],
            [d, [m, `ZTE`], [p, v]],
            [/\b(gen\d{3}) b.+49h/i],
            [d, [m, `Swiss`], [p, v]],
            [/\b(zur\d{3}) b/i],
            [d, [m, `Swiss`], [p, y]],
            [/\b((zeki)?tb.*\b) b/i],
            [d, [m, `Zeki`], [p, y]],
            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
            [[m, `Dragon Touch`], d, [p, y]],
            [/\b(ns-?\w{0,9}) b/i],
            [d, [m, `Insignia`], [p, y]],
            [/\b((nxa|next)-?\w{0,9}) b/i],
            [d, [m, `NextBook`], [p, y]],
            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
            [[m, `Voice`], d, [p, v]],
            [/\b(lvtel\-)?(v1[12]) b/i],
            [[m, `LvTel`], d, [p, v]],
            [/\b(ph-1) /i],
            [d, [m, `Essential`], [p, v]],
            [/\b(v(100md|700na|7011|917g).*\b) b/i],
            [d, [m, `Envizen`], [p, y]],
            [/\b(trio[-\w\. ]+) b/i],
            [d, [m, `MachSpeed`], [p, y]],
            [/\btu_(1491) b/i],
            [d, [m, `Rotor`], [p, y]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [d, [m, ce], [p, y]],
            [/(sprint) (\w+)/i],
            [m, d, [p, v]],
            [/(kin\.[onetw]{3})/i],
            [
              [d, /\./g, ` `],
              [m, k],
              [p, v],
            ],
            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [d, [m, N], [p, y]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [d, [m, N], [p, v]],
            [/smart-tv.+(samsung)/i],
            [m, [p, b]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [d, /^/, `SmartTV`],
              [m, j],
              [p, b],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [m, O],
              [p, b],
            ],
            [/(apple) ?tv/i],
            [m, [d, C + ` TV`], [p, b]],
            [/crkey/i],
            [
              [d, T + `cast`],
              [m, E],
              [p, b],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [d, [m, ee], [p, b]],
            [/(shield \w+ tv)/i],
            [d, [m, ce], [p, b]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [d, [m, de], [p, b]],
            [/(bravia[\w ]+)( bui|\))/i],
            [d, [m, M], [p, b]],
            [/(mi(tv|box)-?\w+) bui/i],
            [d, [m, fe], [p, b]],
            [/Hbbtv.*(technisat) (.*);/i],
            [m, d, [p, b]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [m, ve],
              [d, ve],
              [p, b],
            ],
            [/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],
            [d, [p, b]],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[p, b]],
            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
            [m, d, [p, _]],
            [/droid.+; (shield)( bui|\))/i],
            [d, [m, ce], [p, _]],
            [/(playstation \w+)/i],
            [d, [m, M], [p, _]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [d, [m, k], [p, _]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [d, [m, j], [p, x]],
            [
              /((pebble))app/i,
              /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i,
            ],
            [m, d, [p, x]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [d, [m, A], [p, x]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [d, [m, C], [p, x]],
            [/(opwwe\d{3})/i],
            [d, [m, le], [p, x]],
            [/(moto 360)/i],
            [d, [m, se], [p, x]],
            [/(smartwatch 3)/i],
            [d, [m, M], [p, x]],
            [/(g watch r)/i],
            [d, [m, O], [p, x]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [d, [m, N], [p, x]],
            [/droid.+; (glass) \d/i],
            [d, [m, E], [p, x]],
            [/(pico) (4|neo3(?: link|pro)?)/i],
            [m, d, [p, x]],
            [/; (quest( \d| pro)?)/i],
            [d, [m, pe], [p, x]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [m, [p, S]],
            [/(aeobc)\b/i],
            [d, [m, ee], [p, S]],
            [/(homepod).+mac os/i],
            [d, [m, C], [p, S]],
            [/windows iot/i],
            [[p, S]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [d, [p, v]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [d, [p, y]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[p, y]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[p, v]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [d, [m, `Generic`]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [h, [f, re + `HTML`]],
            [/(arkweb)\/([\w\.]+)/i],
            [f, h],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [h, [f, `Blink`]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [f, h],
            [/ladybird\//i],
            [[f, `LibWeb`]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [h, f],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [f, h],
            [/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],
            [f, [h, z, be]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [h, z, be],
              [f, `Windows`],
            ],
            [
              /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [h, /_/g, `.`],
              [f, `iOS`],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [f, F],
              [h, /_/g, `.`],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [h, f],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[f, /(.+)/, `$1 Touch`], h],
            [
              /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/; ]?([\d\.]*)/i,
            ],
            [f, h],
            [/\(bb(10);/i],
            [h, [f, ne]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [h, [f, `Symbian`]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [h, [f, ie + ` OS`]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [h, [f, `webOS`]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [h, [f, `watchOS`]],
            [/crkey\/([\d\.]+)/i],
            [h, [f, T + `cast`]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[f, P], h],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) ([wids345portablevuch]+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [f, h],
            [/(sunos) ?([\w\.\d]*)/i],
            [[f, `Solaris`], h],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [f, h],
          ],
        },
        B = function (e, t) {
          if ((typeof e == c && ((t = e), (e = r)), !(this instanceof B)))
            return new B(e, t).getResult();
          var i = typeof n !== s && n.navigator ? n.navigator : r,
            _ = e || (i && i.userAgent ? i.userAgent : a),
            b = i && i.userAgentData ? i.userAgentData : r,
            x = t ? he(xe, t) : xe,
            S = i && i.userAgent == _;
          return (
            (this.getBrowser = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                R.call(e, _, x.browser),
                (e[u] = _e(e[h])),
                S &&
                  i &&
                  i.brave &&
                  typeof i.brave.isBrave == o &&
                  (e[f] = `Brave`),
                e
              );
            }),
            (this.getCPU = function () {
              var e = {};
              return (e[g] = r), R.call(e, _, x.cpu), e;
            }),
            (this.getDevice = function () {
              var e = {};
              return (
                (e[m] = r),
                (e[d] = r),
                (e[p] = r),
                R.call(e, _, x.device),
                S && !e[p] && b && b.mobile && (e[p] = v),
                S &&
                  e[d] == `Macintosh` &&
                  i &&
                  typeof i.standalone !== s &&
                  i.maxTouchPoints &&
                  i.maxTouchPoints > 2 &&
                  ((e[d] = `iPad`), (e[p] = y)),
                e
              );
            }),
            (this.getEngine = function () {
              var e = {};
              return (e[f] = r), (e[h] = r), R.call(e, _, x.engine), e;
            }),
            (this.getOS = function () {
              var e = {};
              return (
                (e[f] = r),
                (e[h] = r),
                R.call(e, _, x.os),
                S &&
                  !e[f] &&
                  b &&
                  b.platform &&
                  b.platform != `Unknown` &&
                  (e[f] = b.platform
                    .replace(/chrome os/i, P)
                    .replace(/macos/i, F)),
                e
              );
            }),
            (this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU(),
              };
            }),
            (this.getUA = function () {
              return _;
            }),
            (this.setUA = function (e) {
              return (
                (_ = typeof e == l && e.length > 500 ? ve(e, 500) : e), this
              );
            }),
            this.setUA(_),
            this
          );
        };
      (B.VERSION = i),
        (B.BROWSER = I([f, h, u])),
        (B.CPU = I([g])),
        (B.DEVICE = I([d, m, p, _, v, b, y, x, S])),
        (B.ENGINE = B.OS = I([f, h])),
        typeof e === s
          ? typeof define === o && define.amd
            ? define(function () {
                return B;
              })
            : typeof n !== s && (n.UAParser = B)
          : (typeof t !== s && t.exports && (e = t.exports = B),
            (e.UAParser = B));
      var V = typeof n !== s && (n.jQuery || n.Zepto);
      if (V && !V.ua) {
        var Se = new B();
        (V.ua = Se.getResult()),
          (V.ua.get = function () {
            return Se.getUA();
          }),
          (V.ua.set = function (e) {
            Se.setUA(e);
            var t = Se.getResult();
            for (var n in t) V.ua[n] = t[n];
          });
      }
    })(typeof window == `object` ? window : n);
  })(),
  Nt = `viqEyBlMfbY-`,
  Pt = `shgsJDaY3CY-`,
  Ft = `jYhMQWJDOI0-`,
  It = `hjaE7AQsOK0-`,
  Lt = `xKL55sYr9nU-`,
  Q = `UhBY1FfjFrU-`,
  Rt = `qyZsB6JuVjY-`,
  zt = `saDXcTipZ7A-`,
  Bt = `VLFX-mKqLNw-`,
  Vt = `YRwct28ezfU-`,
  Ht = `epOqB4sJsvo-`,
  Ut = `VXFw-xEFbdo-`,
  Wt = `rkTP-9I7urk-`,
  Gt = `fz9qBoc1vQM-`,
  Kt = `tjO6BKRl12o-`,
  qt = `ayE79te7Zzo-`,
  Jt = `_8EDXdeI-GJU-`,
  Yt = `L4f9mqbFIEU-`,
  Xt = `G87uOZgrnCw-`,
  Zt = `CtCaOVl6dE0-`,
  Qt = `_0tit-21mIgs-`,
  $t = `C7BpVBVjnOM-`,
  en = `N-1Yp4EnJ8k-`,
  tn = `urfarZbyAYI-`,
  nn = `p-1G-Tb-pSA-`,
  rn = l(() => {
    let e = Z.Get(),
      t = sn(),
      n = (e) => {
        T((0, X.jsx)(yn, {}), te(e));
      },
      r = Date.now() / 1e3,
      i = on(e),
      a = e.GetTwoFactorStatus(),
      o = null;
    switch (a.steamguard_scheme) {
      default:
      case 0:
        o = `#accountpreferences_revoked_devices_revoked_description`;
        break;
      case 1:
        o = `#accountpreferences_revoked_devices_revoked_description_email`;
        break;
      case 2:
        o = `#accountpreferences_revoked_devices_revoked_description_auth`;
    }
    let s = [],
      c = [];
    for (let n of e.GetActiveDevices()) {
      let e = n.logged_in && n.last_seen?.time > r - 900,
        o = n.effective_token_state == 5 ? Lt : null,
        l = (0, X.jsx)(
          ln,
          {
            className: o,
            device: n,
            bActiveNow: e,
            bCurrentDevice: t == n.token_id,
            strActiveCountry: i,
            msgTwoFactorStatus: a,
          },
          n.token_id,
        );
      e ? s.push(l) : c.push(l);
    }
    let l = e
      .GetRevokedDevices()
      .map((e) =>
        (0, X.jsx)(
          ln,
          {
            className: Rt,
            device: e,
            strActiveCountry: i,
            msgTwoFactorStatus: a,
          },
          e.token_id,
        ),
      );
    return (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsx)(`div`, {
          className: H(Nt, `account_header_line noicon`),
          children: (0, X.jsx)(`div`, {
            children: S(`#accountpreferences_authorized_devices_header`),
          }),
        }),
        (0, X.jsxs)(`div`, {
          className: `account_settings_container`,
          children: [
            (0, X.jsx)(`div`, {
              className: Pt,
              children: D(
                `#accountpreferences_authorized_devices_description`,
                (0, X.jsx)(`p`, {}),
              ),
            }),
            (0, X.jsxs)(`div`, {
              className: Ft,
              children: [
                (0, X.jsx)(an, {
                  elHeader: (0, X.jsxs)(`div`, {
                    className: Zt,
                    children: [
                      (0, X.jsx)(pe, { className: Qt }),
                      S(`#accountpreferences_authorized_device_active_now`),
                    ],
                  }),
                  rgDevices: s,
                }),
                (0, X.jsx)(an, {
                  elHeader: S(
                    `#accountpreferences_authorized_devices_recentseen_heading`,
                  ),
                  rgDevices: c,
                }),
                (0, X.jsx)(`div`, {
                  className: It,
                  children: (0, X.jsx)(`div`, {
                    className: tn,
                    children: (0, X.jsx)(de, {
                      className: nn,
                      onClick: n,
                      children: S(
                        `#accountpreferences_authorized_devices_remove_button`,
                      ),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        l?.length > 0 &&
          (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(`div`, {
                className: H(`viqEyBlMfbY-`, `account_header_line noicon`),
                children: (0, X.jsx)(`div`, {
                  children: S(
                    `#accountpreferences_revoked_devices_revoked_header`,
                  ),
                }),
              }),
              (0, X.jsxs)(`div`, {
                className: `account_settings_container`,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `shgsJDaY3CY-`,
                    children: D(o, (0, X.jsx)(`p`, {})),
                  }),
                  (0, X.jsx)(`div`, {
                    className: `jYhMQWJDOI0-`,
                    children: (0, X.jsx)(an, { rgDevices: l }),
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  });
function an(e) {
  let { rgDevices: t, elHeader: n } = e;
  return t.length == 0
    ? null
    : (0, X.jsxs)(`div`, { className: It, children: [n && n, t] });
}
function on(e) {
  let t = Date.now() / 1e3;
  return _n(
    e
      .GetActiveDevices()
      .find((e) => e.logged_in && e.last_seen?.time > t - 900) ??
      e.GetActiveDevices()[0],
  ).country;
}
function sn() {
  let [e] = U.useState(() => E(`requesting_token_id`, `application_config`));
  return e;
}
function cn(e, t) {
  return t?.state > 0 && e.token_id && e.token_id == t?.last_seen_auth_token_id;
}
function ln(e) {
  let {
      device: t,
      bActiveNow: n,
      bCurrentDevice: r,
      strActiveCountry: i,
      className: a,
      msgTwoFactorStatus: o,
      bShowAuthenticatorActivity: s,
    } = e,
    [c, l] = (0, U.useState)(!1),
    u = U.useRef(void 0);
  U.useEffect(() => {
    u.current?.BHasFocus() && u.current?.Node().ForceMeasureFocusRing();
  }, [c]);
  let d = gn(t);
  d.length &&
    (d = ` ${S(`#accountpreferences_authorized_devices_name_separator`)} "${d}"`);
  let f = _n(t),
    p = null;
  p =
    !f.country || !i || i == f.country
      ? (0, X.jsx)(`div`, { className: void 0, children: f.location })
      : (0, X.jsx)(v, {
          className: void 0,
          toolTipContent: S(
            `#accountpreferences_authorized_devices_suspicous_tooltip`,
          ),
          direction: `top`,
          children: (0, X.jsxs)(`div`, {
            className: Wt,
            children: [f.location, (0, X.jsx)(be, {})],
          }),
        });
  let m = cn(t, o);
  return (0, X.jsxs)(
    F,
    {
      className: H(zt, n && `fXJ1YocT7BI-`, a),
      navRef: u,
      onActivate: () => l(!c),
      children: [
        (0, X.jsx)(hn, { device: t, bHasAuthenticator: m }),
        (0, X.jsxs)(`div`, {
          className: Bt,
          children: [
            (0, X.jsxs)(`div`, {
              className: Vt,
              children: [
                (0, X.jsxs)(`div`, {
                  className: Ht,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: Ut,
                      children: [(0, X.jsx)(vn, { device: t }), d],
                    }),
                    r &&
                      (0, X.jsx)(`div`, {
                        className: `_9iz0N0Ekqfc-`,
                        children: S(
                          `#accountpreferences_authorized_devices_this_device`,
                        ),
                      }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: Jt,
                  children: [
                    p,
                    (0, X.jsx)(`div`, {
                      className: Yt,
                      children: (0, X.jsx)(de, {
                        className: H({ [Yt]: !0, [Xt]: c }),
                        children: (0, X.jsx)(fe, { direction: `down` }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(un, {
              device: t,
              bActiveNow: n,
              msgTwoFactorStatus: s && o,
            }),
            c && (0, X.jsx)(pn, { device: t }),
          ],
        }),
      ],
    },
    `id_` + t.token_id,
  );
}
function un(e) {
  let { device: t, bActiveNow: n, msgTwoFactorStatus: r } = e;
  return r?.state > 0
    ? (0, X.jsx)(dn, {
        msgTwoFactorUsage: r.usages?.length > 0 ? r.usages[0] : null,
      })
    : n
      ? null
      : (0, X.jsx)(fn, { device: t });
}
function dn(e) {
  let { msgTwoFactorUsage: t } = e;
  if (!t || !t.time) return null;
  let n = A(t.time),
    r = null;
  if (t.usage_type == 3) r = S(`#authorized_devices_lasttwofactor_login`, n);
  else if (t.usage_type == 2) {
    let e = t.confirmation_action == 1 ? `_allow` : `_cancel`;
    switch (t.confirmation_type) {
      case 2:
        r = S(`#authorized_devices_lasttwofactor_confirmation_trade${e}`, n);
        break;
      case 3:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_marketlisting${e}`,
          n,
        );
        break;
      case 5:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_phonechange${e}`,
          n,
        );
        break;
      case 6:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_accountrecovery${e}`,
          n,
        );
        break;
      case 7:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_buildchange${e}`,
          n,
        );
        break;
      case 8:
        r = S(`#authorized_devices_lasttwofactor_confirmation_adduser${e}`, n);
        break;
      case 9:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_registerapikey${e}`,
          n,
        );
        break;
      case 10:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${e}`,
          n,
        );
        break;
      case 11:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${e}`,
          n,
        );
        break;
      case 12:
        r = S(
          `#authorized_devices_lasttwofactor_confirmation_marketpurchase${e}`,
          n,
        );
        break;
      case 13:
        r = S(`#authorized_devices_lasttwofactor_confirmation_refund${e}`, n);
        break;
      default:
        r = S(`#authorized_devices_lasttwofactor_confirmation_unknown${e}`, n);
    }
  }
  return r
    ? (0, X.jsx)(`div`, {
        className: Gt,
        children: (0, X.jsx)(`div`, { children: r }),
      })
    : null;
}
function fn(e) {
  let { device: t } = e,
    n =
      t.first_seen?.time &&
      t.first_seen.time + Te.PerWeek * 2 > Date.now() / 1e3,
    r = t.effective_token_state == 5,
    i = S(`#accountpreferences_authorized_devices_last_seen_max`);
  return (
    t.last_seen?.time
      ? (i = A(t.last_seen.time))
      : t.time_updated &&
        t.time_updated > Math.floor(Date.now() / 1e3 - 7776e3) &&
        (i = A(t.time_updated)),
    (0, X.jsxs)(`div`, {
      className: Gt,
      children: [
        (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsx)(`span`, {
              className: Kt,
              children: S(
                `#accountpreferences_authorized_devices_last_seen_title`,
              ),
            }),
            i,
            r &&
              (0, X.jsxs)(`span`, {
                className: `tjO6BKRl12o-`,
                children: [
                  ` - `,
                  S(`#accountpreferences_authorized_devices_state_signedout`),
                ],
              }),
          ],
        }),
        n &&
          (0, X.jsx)(`div`, {
            className: `YTM6P3pGOLY-`,
            children: C(
              `#accountpreferences_authorized_devices_new_device`,
              (0, X.jsx)(`a`, {
                href: k.HELP_BASE_URL + `wizard/HelpWithAccountStolen`,
                onClick: (e) => {
                  e.stopPropagation();
                },
              }),
            ),
          }),
      ],
    })
  );
}
function pn(e) {
  let { device: t } = e;
  return (0, X.jsx)(`div`, {
    className: qt,
    children: S(mn(t), M(t.first_seen.time) + ` @ ` + z(t.first_seen.time)),
  });
}
function mn(e) {
  let t = e.authentication_type,
    n = e.auth_type;
  if (t == 2) return `#authorized_devices_default_qr`;
  if (e.effective_token_state == 5)
    return `#authorized_devices_remembered_machine`;
  switch (n) {
    case 2:
      return `#authorized_devices_emailcode_password`;
    case 3:
      return `#authorized_devices_devicecode_password`;
    case 4:
    case 5:
      return `#authorized_devices_mobileconf_password`;
    case 6:
      return `#authorized_devices_machinetoken_password`;
    default:
      return `#authorized_devices_default_password`;
  }
}
function hn(e) {
  let { device: t, bHasAuthenticator: n } = e,
    r = t.effective_token_state == 5,
    i = null;
  if (t.platform_type == 2)
    i = r
      ? (0, X.jsx)(ee, { className: H(Q, Lt) })
      : (0, X.jsx)(_e, { className: Q });
  else if (
    t.platform_type == 1 &&
    (t.gaming_device_type === 544 ||
      t.gaming_device_type == 545 ||
      t.gaming_device_type == 541)
  )
    i = r
      ? (0, X.jsx)(se, { className: H(Q, Lt) })
      : (0, X.jsx)(De, { className: Q });
  else
    switch (t.os_platform) {
      case p.k_EPlatformTypeWin32:
      case p.k_EPlatformTypeWin64:
      case p.k_EPlatformTypeOSX:
        i = r
          ? (0, X.jsx)(he, { className: H(Q, Lt) })
          : (0, X.jsx)(ve, { className: Q });
        break;
      case p.k_EPlatformTypeAndroid32:
      case p.k_EPlatformTypeAndroid64:
      case p.k_EPlatformTypeLinux32:
      case p.k_EPlatformTypeLinux64:
        i = (0, X.jsx)(oe, { className: Q });
        break;
      case p.k_EPlatformTypeIOS32:
      case p.k_EPlatformTypeIOS64:
        i = (0, X.jsx)(oe, { className: Q });
    }
  return n
    ? (0, X.jsxs)(`div`, {
        className: $t,
        children: [i, (0, X.jsx)(`img`, { src: At, className: en })],
      })
    : i;
}
function gn(e) {
  if (e.platform_type == 2) {
    let t = new Mt.UAParser(e.token_description).getResult();
    return t.browser.name && t.os.name
      ? t.browser.name == `WebKit`
        ? t.os.name
        : S(
            `#accountpreferences_authorized_devices_browser_on_os`,
            t.browser.name,
            t.os.name,
          )
      : S(`#accountpreferences_authorized_devices_browser_unmatched`);
  }
  return e.token_description;
}
function _n(e) {
  let t = e.last_seen ?? e.first_seen;
  if (t) {
    if (!we(k.EREALM))
      return {
        location: `${t.city ? t.city + `, ` : ``}${t.country}`,
        country: t.country,
      };
    if (t.city) return { location: t.city, country: t.country };
  }
  return {
    location: S(`#accountpreferences_authorized_devices_loc_unknown`),
    country: ``,
  };
}
function vn(e) {
  let { device: t } = e;
  switch (t.platform_type) {
    case 3:
      return S(`#accountpreferences_authorized_devices_type_mobile`);
    case 1:
      return t.gaming_device_type === 544
        ? S(`#accountpreferences_authorized_devices_type_steamdeck`)
        : t.gaming_device_type == 545
          ? S(`#accountpreferences_authorized_devices_type_legiongos`)
          : t.gaming_device_type == 541
            ? S(`#accountpreferences_authorized_devices_type_steamos`)
            : S(`#accountpreferences_authorized_devices_type_desktop`);
    case 2:
      return S(`#accountpreferences_authorized_devices_type_browser`);
    default:
      return S(`#accountpreferences_authorized_devices_type_unknown`);
  }
}
function yn(e) {
  let { closeModal: t } = e;
  return (0, X.jsx)(x, {
    onEscKeypress: t,
    children: (0, X.jsxs)(ge, {
      children: [
        (0, X.jsx)(me, {
          children: S(`#authorized_devices_deauthorize_title`),
        }),
        (0, X.jsxs)(ye, {
          children: [
            (0, X.jsx)(R, {
              children: S(`#authorized_devices_deauthorize_msg`),
            }),
            (0, X.jsx)(ce, {
              children: (0, X.jsx)(ue, {
                strOKText: S(`#authorized_devices_deauthorize_proceed`),
                onOK: async () => {
                  let e = new FormData();
                  e.set(`action`, `deauthorize`),
                    e.set(`sessionid`, O()),
                    await je.default.post(
                      k.STORE_BASE_URL + `twofactor/manage_action`,
                      e,
                    );
                  let t = document.createElement(`form`);
                  (t.method = `POST`), (t.action = k.STORE_BASE_URL + `logout`);
                  let n = document.createElement(`input`);
                  (n.type = `hidden`),
                    (n.name = `sessionid`),
                    (n.value = O()),
                    t.appendChild(n),
                    document.body.appendChild(t),
                    t.submit();
                },
                onCancel: t,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var bn = `jUbJDWS4KbM-`,
  xn = `_0KS5vxiuuas-`,
  Sn = `RKNvgkD9-fw-`,
  Cn = `fYndRKZmMkc-`,
  wn = `h8-4lFF5M58-`,
  Tn = `xGrGbCIFdZU-`,
  En = `_5P46ZCZGTXo-`,
  Dn = `-NSP4bX00mY-`,
  On = `FDb0NIXOm0A-`,
  kn = `FdmRCehAGYI-`,
  An = `TJDzvw9F008-`,
  jn = `UdRjmwOXHfE-`,
  Mn = `M0mNJBjOgYk-`,
  Nn = `_9fLN420LJa4-`,
  Pn = `_1v5wNzaTsw8-`,
  Fn = `q-crQp6szwI-`,
  In = `n8evf-z8Ij8-`,
  Ln = `mTLl2oNfUQ4-`,
  Rn = `wiKtgWcwiPk-`,
  zn = `_5Uqj-ZJajHU-`,
  Bn = `kzUM4acS-oo-`,
  Vn = `Ik-mDI6yuZA-`,
  Hn = `_8k8bd7Cwz7o-`,
  Un = `_7-ZGCcZvb7s-`,
  Wn = `S--CyhEr6Jk-`;
function Gn(e) {
  return (0, X.jsxs)(`div`, {
    children: [(0, X.jsx)(Kn, {}), (0, X.jsx)(rn, {})],
  });
}
function Kn(e) {
  let t = k.HELP_BASE_URL + `faqs/view/7EFD-3CAE-64D3-1C31`,
    n = Z.Get(),
    r = n.GetTwoFactorStatus()?.steamguard_scheme == 2;
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(`div`, {
        className: `account_header_line`,
        children: (0, X.jsxs)(`div`, {
          children: [
            (0, X.jsx)(Ee, { className: bn }),
            S(`#youraccount_account_security`),
          ],
        }),
      }),
      (0, X.jsxs)(`div`, {
        className: H(xn, `account_settings_container`),
        children: [
          (0, X.jsx)(`div`, {
            children: C(
              `#accountpreferences_account_security_description`,
              (0, X.jsx)(N, { target: `_blank`, href: t }),
            ),
          }),
          r
            ? (0, X.jsx)(qn, {
                msgTwoFactorStatus: n.GetTwoFactorStatus(),
                strFaqUrl: t,
              })
            : (0, X.jsx)(Jn, { strFaqUrl: t }),
          (0, X.jsxs)(`div`, {
            className: Sn,
            children: [
              (0, X.jsx)(Xn, {}),
              (0, X.jsx)(`div`, { className: Cn }),
              (0, X.jsx)(Qn, {}),
              (0, X.jsx)(Zn, { msgTwoFactorStatus: n.GetTwoFactorStatus() }),
              r && (0, X.jsx)($n, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function qn(e) {
  let { msgTwoFactorStatus: t, strFaqUrl: n } = e,
    r = Z.Get(),
    i = on(r),
    a = sn(),
    o = [...(r.GetActiveDevices() ?? []), ...(r.GetActiveDevices() ?? [])],
    s = null;
  return (
    t?.last_seen_auth_token_id &&
      ((s = o.find((e) => e.token_id === t.last_seen_auth_token_id)),
      a?.length > 0 && s?.token_id),
    (0, X.jsxs)(`div`, {
      children: [
        (0, X.jsxs)(`div`, {
          className: On,
          children: [
            (0, X.jsx)(`img`, { className: An, src: At }),
            (0, X.jsx)(`div`, {
              className: kn,
              children: S(`#accountpreferences_account_security_steamguard`),
            }),
            (0, X.jsx)(`div`, {
              className: jn,
              children: (0, X.jsx)(N, {
                href: k.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                children: S(
                  `#accountpreferences_account_security_steamguard_remove`,
                ),
              }),
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: Mn,
          children: [
            !!s &&
              (0, X.jsxs)(X.Fragment, {
                children: [
                  (0, X.jsx)(ln, {
                    className: `-jL8shO-BT4-`,
                    device: s,
                    strActiveCountry: i,
                    msgTwoFactorStatus: t,
                    bShowAuthenticatorActivity: !0,
                  }),
                  (0, X.jsx)(`div`, { className: `fYndRKZmMkc-` }),
                ],
              }),
            (0, X.jsxs)(`div`, {
              className: Nn,
              children: [
                (0, X.jsx)($, {
                  strLabel: S(`#accountpreferences_account_security_move`),
                  href: k.HELP_BASE_URL + `faqs/view/29A9-9EEE-09F0-75F9`,
                }),
                (0, X.jsx)($, {
                  strLabel: S(`#accountpreferences_account_security_help_lost`),
                  href: k.STORE_BASE_URL + `twofactor/remove?step=promptdevice`,
                }),
                (0, X.jsx)(`div`, {
                  className: Pn,
                  children: (0, X.jsx)(N, {
                    href: n,
                    target: `_blank`,
                    children: S(
                      `#accountpreferences_account_security_view_faq`,
                    ),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Jn(e) {
  let { strFaqUrl: t } = e,
    n = Z.Get().GetLatestAndroidAppVersion();
  return (0, X.jsxs)(`div`, {
    className: Fn,
    children: [
      (0, X.jsxs)(`div`, {
        className: On,
        children: [
          (0, X.jsx)(`img`, { className: An, src: kt }),
          (0, X.jsx)(`div`, {
            className: kn,
            children: S(`#accountpreferences_account_security_no_steamguard`),
          }),
        ],
      }),
      (0, X.jsx)(`div`, { className: Cn }),
      (0, X.jsxs)(`div`, {
        className: In,
        children: [
          (0, X.jsxs)(`div`, {
            className: zn,
            children: [
              (0, X.jsxs)(`div`, {
                className: Ln,
                children: [
                  (0, X.jsx)(`div`, {
                    className: Rn,
                    children: C(
                      `#accountpreferences_account_security_get_app`,
                      (0, X.jsx)(N, {
                        href: k.STORE_BASE_URL + `mobile#mobile_section`,
                      }),
                    ),
                  }),
                  (0, X.jsx)(`div`, {
                    children: S(`#accountpreferences_account_security_scan_qr`),
                  }),
                ],
              }),
              (0, X.jsx)(`img`, { src: jt, className: Bn }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: Vn,
            children: [
              (0, X.jsx)(`div`, {
                children: S(
                  `#accountpreferences_account_security_mobile_os_reqs`,
                ),
              }),
              (0, X.jsxs)(`div`, {
                className: Hn,
                children: [
                  (0, X.jsx)(N, {
                    href: `https://itunes.apple.com/us/app/steam-mobile/id495369748`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, X.jsx)(d, {
                      srcs: Yn(
                        k.IMG_URL +
                          `mobile/localizedimages/appleappstore/apple_store_`,
                        `.png`,
                      ),
                      className: Un,
                    }),
                  }),
                  (0, X.jsx)(N, {
                    href: `https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community`,
                    rel: `noopener`,
                    target: `_blank`,
                    children: (0, X.jsx)(d, {
                      srcs: Yn(
                        k.IMG_URL +
                          `mobile/localizedimages/googleplaystore/google_play_store_`,
                        `.png`,
                      ),
                      className: Wn,
                    }),
                  }),
                ],
              }),
              (0, X.jsx)(`div`, {
                children: C(
                  `#accountpreferences_account_security_apk_download`,
                  (0, X.jsx)(`a`, {
                    href: `https://media.steampowered.com/apps/steam-android/steam-${n}.apk`,
                  }),
                ),
              }),
              (0, X.jsx)(`div`, {
                children: (0, X.jsx)(`a`, {
                  href: t,
                  target: `_blank`,
                  children: S(
                    `#accountpreferences_account_security_mobile_faq`,
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Yn(e, t) {
  let n = ie.GetLanguageFallback(k.LANGUAGE),
    r = [e + k.LANGUAGE + t];
  return k.LANGUAGE != n && r.push(e + n + t), r;
}
function Xn(e) {
  let t = Z.Get(),
    n = k.IN_MOBILE_WEBVIEW;
  return (0, X.jsxs)(`div`, {
    className: wn,
    children: [
      (0, X.jsx)(er, {
        strLabel: S(`#accountpreferences_account_security_account_name`),
        strText: t.GetAccountName(),
      }),
      (0, X.jsx)($, {
        strLabel: S(`#accountpreferences_account_security_change_pass`),
        href:
          k.HELP_BASE_URL + `wizard/HelpChangePassword?redir=store/account/`,
        target: n ? `_blank` : void 0,
      }),
    ],
  });
}
function Zn(e) {
  let { msgTwoFactorStatus: t } = e,
    n = Z.Get(),
    r = t.email_validated,
    i = t.steamguard_scheme == 1,
    a = k.IN_MOBILE_WEBVIEW;
  return (0, X.jsxs)(`div`, {
    className: wn,
    children: [
      (0, X.jsx)(er, {
        strLabel: S(`#accountpreferences_account_security_email`),
        strText: n.GetEmailAddress(),
      }),
      (0, X.jsx)(er, {
        strLabel: S(`#accountpreferences_account_security_email_status`),
        strText: S(
          r ? `#youraccount_email_verified` : `#youraccount_email_unverified`,
        ),
      }),
      i &&
        (0, X.jsx)(er, {
          strLabel: S(`#accountpreferences_account_security_verification`),
          strText: S(`#accountpreferences_account_security_via_email`),
        }),
      (0, X.jsxs)(`div`, {
        className: Tn,
        children: [
          (0, X.jsx)($, {
            strLabel: S(`#accountpreferences_account_security_change_email`),
            href:
              k.HELP_BASE_URL + `wizard/HelpChangeEmail?redir=store/account/`,
            target: a ? `_blank` : void 0,
          }),
          i &&
            (0, X.jsx)($, {
              strLabel: S(
                `#accountpreferences_account_security_remove_email_guard`,
              ),
              href: k.STORE_BASE_URL + `twofactor/manage`,
            }),
        ],
      }),
    ],
  });
}
function Qn(e) {
  let t = Z.Get(),
    n = S(`#accountpreferences_account_security_phone_none`);
  return (
    t.GetPhoneHint() &&
      (n = S(
        `#accountpreferences_account_security_phone_hint`,
        t.GetPhoneHint(),
      )),
    (0, X.jsxs)(`div`, {
      className: wn,
      children: [
        (0, X.jsx)(er, {
          strLabel: S(`#accountpreferences_account_security_phone`),
          strText: n,
        }),
        (0, X.jsx)($, {
          strLabel: S(`#accountpreferences_account_security_manage_phone`),
          href: k.STORE_BASE_URL + `phone/manage`,
        }),
      ],
    })
  );
}
function $n(e) {
  return (0, X.jsxs)(`div`, {
    className: wn,
    children: [
      (0, X.jsx)(er, {
        strLabel: S(`#accountpreferences_account_security_backup_codes`),
      }),
      (0, X.jsx)($, {
        strLabel: S(`#accountpreferences_account_security_get_backup_codes`),
        href: k.STORE_BASE_URL + `twofactor/emergency_codes`,
      }),
    ],
  });
}
function er(e) {
  let { strLabel: t, strText: n } = e;
  return (0, X.jsxs)(`div`, {
    children: [
      (0, X.jsx)(`span`, { className: En, children: t }),
      !!n && (0, X.jsx)(`span`, { children: n }),
    ],
  });
}
function $(e) {
  let { strLabel: t, href: n, target: r } = e;
  return (0, X.jsx)(`div`, {
    children: (0, X.jsx)(N, { className: Dn, href: n, target: r, children: t }),
  });
}
var tr = U.lazy(() =>
    Se(
      () => import(`./familymanagement.js?contenthash=gB6E6RM2`),
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
        56, 57, 58,
      ]),
      import.meta.url,
    ),
  ),
  nr = {
    CookieSettings: () => `/cookiepreferences`,
    FamilyManagement: () => `/familymanagement`,
    SecurityDevices: () => `/authorizeddevices`,
    PlaytestInvites: () => `/playtestinvites`,
    Playtests: () => `/playtests`,
  },
  rr = (e) => {
    let t = e.match.url,
      n = nr;
    return (0, X.jsxs)(i, {
      children: [
        (0, X.jsx)(r, {
          path: `${t}${n.CookieSettings()}`,
          render: () =>
            (0, X.jsx)(V, {
              config: { "cookie-preferences": () => (0, X.jsx)(et, {}) },
            }),
        }),
        (0, X.jsx)(r, {
          path: `${t}${n.FamilyManagement()}`,
          render: () =>
            (0, X.jsx)(V, {
              config: { "family-management": () => (0, X.jsx)(tr, {}) },
            }),
        }),
        (0, X.jsx)(r, {
          path: `${t}${n.SecurityDevices()}`,
          render: () =>
            (0, X.jsx)(V, {
              config: { "security-devices": () => (0, X.jsx)(Gn, {}) },
            }),
        }),
        (0, X.jsx)(r, {
          path: `${t}${n.PlaytestInvites()}`,
          render: () =>
            (0, X.jsx)(V, {
              config: {
                "playtest-invites": () =>
                  (0, X.jsx)(yt, { bShowPlaytestOverview: !0 }),
              },
            }),
        }),
        (0, X.jsx)(r, {
          path: `${t}${n.Playtests()}`,
          render: () =>
            (0, X.jsx)(V, {
              config: { playtests: (e) => (0, X.jsx)(Ot, { ...e }) },
            }),
        }),
      ],
    });
  };
export { nr as AccountPreferencesRoutes, rr as default };
