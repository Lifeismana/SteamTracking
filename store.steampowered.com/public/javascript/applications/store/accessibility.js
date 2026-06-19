/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [40445],
  {
    63404: (e) => {
      e.exports = {
        narrowWidth: "500px",
        Details: "_8DSX9d1ihrMSeZUFC9elD",
        Summary: "_1FCh_hPFNuwj9vrVDMOvMC",
        FeatureList: "TwihVkmmqI5XLg6P4fpwF",
        CategoryIcon: "_1GkKPFI1K10GLg9538MMAF",
        FeatureNameContainer: "_3sRe2CGQBgablPBz9Bc9c2",
        GroupLabel: "_2079QFhY02KJ4KxGMltDNJ",
        FeatureGroupItems: "_2WWlH-JTbq_f1PEyooC78U",
        InfoRow: "_1RmibngWLogcFmO93kGFgq",
        FeatureName: "ny6hWVK6ii05H200KRhds",
        ImageContainer: "_29jQMo9DGCmcSKyDIC3V7M",
        InfoLink: "_2xmH7agKi37v9kwFHi093S",
      };
    },
    13229: (e, i, t) => {
      "use strict";
      t.r(i),
        t.d(i, {
          AccessibilityFeatureDisplay: () => A,
          AccessibilityIcon: () => p,
        });
      var s = t(7850),
        l = t(90626),
        c = t(61859),
        a = t(78327),
        o = t(63404),
        n = t.n(o);
      const r = {
          bAccessibilityDifficultyLevels:
            "#Accessibility_Feature_AdjustableDifficulty",
          bAccessibilitySaveAnytime: "#Accessibility_Feature_SaveAnytime",
          bAccessibilityNarratedMenus: "#Accessibility_Feature_NarratedMenus",
          bAccessibilityBackgroundVolumeControls:
            "#Accessibility_Feature_CustomVolumeControls",
          bAccessibilityStereoSound: "#Accessibility_Feature_StereoSound",
          bAccessibilitySurroundSound: "#Accessibility_Feature_SurroundSound",
          bAccessibilityResizableUI:
            "#Accessibility_Feature_AdjustableTextSize",
          bAccessibilitySubtitles: "#Accessibility_Feature_SubtitleOptions",
          bAccessibilityColorAlternatives:
            "#Accessibility_Feature_ColorAlternatives",
          bAccessibilityCameraComfort: "#Accessibility_Feature_CameraComfort",
          bAccessibilityKeyboardOnlyOption:
            "#Accessibility_Feature_KeyboardOnlyOption",
          bAccessibilityMouseOnlyOption:
            "#Accessibility_Feature_MouseOnlyOption",
          bAccessibilityTouchOnlyOption:
            "#Accessibility_Feature_TouchOnlyOption",
          bAccessibilityPlayableWithoutQuicktimeEvents:
            "#Accessibility_Feature_WithoutQuickTimeEvents",
          bAccessibilityChatTexttoSpeech: "#Accessibility_Feature_TextToSpeech",
          bAccessibilityChatSpeechtoText: "#Accessibility_Feature_SpeechToText",
          bAccessibilityPlayableAtYourOwnPace:
            "#Accessibility_Feature_PlayableAtYourOwnPace",
          bAccessibilityPlayableWithoutVision:
            "#Accessibility_Feature_PlayableWithoutVision",
          bAccessibilityContrastControls:
            "#Accessibility_Feature_ContrastControls",
        },
        u = {
          bAccessibilityDifficultyLevels: "adjustable_difficulty",
          bAccessibilitySaveAnytime: "save_anytime",
          bAccessibilityNarratedMenus: "narrated_game_menus",
          bAccessibilityBackgroundVolumeControls: "custom_volume_controls",
          bAccessibilityStereoSound: "stereo_sound",
          bAccessibilitySurroundSound: "surround_sound",
          bAccessibilityResizableUI: "adjustable_text_size",
          bAccessibilitySubtitles: "subtitle_options",
          bAccessibilityColorAlternatives: "color_alternatives",
          bAccessibilityCameraComfort: "camera_comfort",
          bAccessibilityKeyboardOnlyOption: "keyboard_only_option",
          bAccessibilityMouseOnlyOption: "mouse_only_option",
          bAccessibilityTouchOnlyOption: "touch_only_option",
          bAccessibilityPlayableWithoutQuicktimeEvents:
            "playable_without_timed_input",
          bAccessibilityChatTexttoSpeech: "chat_text_to_speech",
          bAccessibilityChatSpeechtoText: "chat_speech_to_text",
          bAccessibilityPlayableAtYourOwnPace: "playable_at_your_own_pace",
          bAccessibilityPlayableWithoutVision: "playable_without_vision",
          bAccessibilityContrastControls: "contrast_controls",
        },
        b = {
          bAccessibilityDifficultyLevels: "gameplay",
          bAccessibilitySaveAnytime: "gameplay",
          bAccessibilityNarratedMenus: "audio",
          bAccessibilityBackgroundVolumeControls: "audio",
          bAccessibilityStereoSound: "audio",
          bAccessibilitySurroundSound: "audio",
          bAccessibilityResizableUI: "visual",
          bAccessibilitySubtitles: "visual",
          bAccessibilityColorAlternatives: "visual",
          bAccessibilityCameraComfort: "visual",
          bAccessibilityPlayableWithoutVision: "visual",
          bAccessibilityContrastControls: "visual",
          bAccessibilityKeyboardOnlyOption: "input",
          bAccessibilityMouseOnlyOption: "input",
          bAccessibilityTouchOnlyOption: "input",
          bAccessibilityPlayableWithoutQuicktimeEvents: "input",
          bAccessibilityChatTexttoSpeech: "input",
          bAccessibilityChatSpeechtoText: "input",
          bAccessibilityPlayableAtYourOwnPace: "input",
        },
        y = {
          gameplay: "#Accessibility_Group_Gameplay",
          visual: "#Accessibility_Group_Visual",
          audio: "#Accessibility_Group_Audio",
          input: "#Accessibility_Group_Input",
        };
      function A(e) {
        const [i, t] = (0, l.useState)(e.initialOpen ?? !1),
          o = l.useId(),
          r = Object.entries(e.features)
            .filter(([e, i]) => i)
            .map(([e]) => e);
        if (0 === r.length) return null;
        const u = {};
        r.forEach((e) => {
          const i = b[e];
          (u[i] ??= []), u[i].push(e);
        });
        const y = Object.keys(u).length > 1;
        return (0, s.jsxs)("details", {
          className: n().Details,
          open: i,
          onToggle: (e) => t(e.currentTarget.open),
          children: [
            (0, s.jsxs)("summary", {
              className: n().Summary,
              "data-panel": '{"clickOnActivate": true}',
              children: [
                (0, s.jsx)("div", {
                  className: n().ImageContainer,
                  children: (0, s.jsx)(p, {
                    className: n().CategoryIcon,
                    "aria-label": "",
                  }),
                }),
                (0, s.jsxs)("span", {
                  className: n().FeatureNameContainer,
                  id: o,
                  children: [
                    (0, s.jsx)("span", {
                      className: n().FeatureName,
                      children: i
                        ? (0, c.we)("#AccessibilityFeatures")
                        : (0, c.we)(
                            "#AccessibilityFeaturesWithCount",
                            r.length,
                          ),
                    }),
                    (0, s.jsx)("a", {
                      className: n().InfoLink,
                      href: `${a.TS.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                      target: "_blank",
                      children: "?",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("ul", {
              className: n().FeatureList,
              "aria-labelledby": o,
              children: [
                y &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      u.gameplay &&
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)(_, {
                            group: "gameplay",
                            features: u.gameplay,
                            open: i,
                          }),
                        }),
                      u.visual &&
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)(_, {
                            group: "visual",
                            features: u.visual,
                            open: i,
                          }),
                        }),
                      u.audio &&
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)(_, {
                            group: "audio",
                            features: u.audio,
                            open: i,
                          }),
                        }),
                      u.input &&
                        (0, s.jsx)("li", {
                          children: (0, s.jsx)(_, {
                            group: "input",
                            features: u.input,
                            open: i,
                          }),
                        }),
                    ],
                  }),
                !y &&
                  r.map((e) =>
                    (0, s.jsx)(
                      "li",
                      { children: (0, s.jsx)(d, { feature: e, open: i }) },
                      e,
                    ),
                  ),
              ],
            }),
          ],
        });
      }
      function p(e) {
        return (0, s.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 1200 1200",
          ...e,
          children: [
            (0, s.jsx)("path", {
              fill: "currentColor",
              d: "m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z",
              fillRule: "evenodd",
            }),
            (0, s.jsx)("path", {
              fill: "currentColor",
              d: "m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z",
              fillRule: "evenodd",
            }),
            (0, s.jsx)("path", {
              fill: "currentColor",
              d: "m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23",
              fillRule: "evenodd",
            }),
          ],
        });
      }
      function _(e) {
        const i = l.useId();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("span", {
              className: n().GroupLabel,
              id: i,
              children: (0, c.we)(y[e.group]),
            }),
            (0, s.jsx)("ul", {
              className: n().FeatureGroupItems,
              "aria-labelledby": i,
              children: e.features.map((i) =>
                (0, s.jsx)(
                  "li",
                  { children: (0, s.jsx)(d, { feature: i, open: e.open }) },
                  i,
                ),
              ),
            }),
          ],
        });
      }
      function d(e) {
        return (0, s.jsx)("a", {
          href: `${a.TS.STORE_BASE_URL}category/${u[e.feature]}`,
          className: n().InfoRow,
          "data-panel": '{"clickOnActivate": true}',
          "data-gp-focus-disabled": e.open ? void 0 : "true",
          children: (0, s.jsx)("span", {
            className: n().FeatureNameContainer,
            children: (0, s.jsx)("span", {
              className: n().FeatureName,
              children: (0, c.we)(r[e.feature]),
            }),
          }),
        });
      }
    },
  },
]);
