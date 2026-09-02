/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [7049],
    {
      47049: (D, S, s) => {
        "use strict";
        s.r(S), s.d(S, { default: () => p });
        var n = s(7850),
          d = s(90626),
          _ = s(58033),
          O = s(72609),
          P = s(58534),
          v = s(55409),
          T = s(21988),
          b = s(13401),
          y = s(95695),
          L = s.n(y);
        function p(R) {
          const { bHideTour: B, fnConversionMethodSelected: M } = R,
            {
              eConversionMethod: E,
              setConversionMethod: f,
              rgAvailableConversionMethods: x,
            } = (0, b.MA)(),
            A = (0, d.useMemo)(() => {
              const h = new Array();
              return (
                x.findIndex((C) => C == v.Y5.lZ) >= 0 &&
                  h.push({
                    label: _.g.Localize("#ConversionMethod_Nuanced"),
                    data: v.Y5.lZ,
                  }),
                x.findIndex((C) => C == v.Y5.KC) >= 0 &&
                  h.push({
                    label: _.g.Localize("#ConversionMethod_PPP"),
                    data: v.Y5.KC,
                  }),
                x.findIndex((C) => C == v.Y5.bA) >= 0 &&
                  h.push({
                    label: _.g.Localize("#ConversionMethod_FX"),
                    data: v.Y5.bA,
                  }),
                h
              );
            }, [x]);
          return A.length <= 1
            ? O.iA.is_support
              ? (0, n.jsxs)("div", {
                  className: L().ValveOnlyBackground,
                  children: [
                    "Hiding Converison Method Widget; only have ",
                    A.length,
                    " method in guideline.",
                  ],
                })
              : null
            : (0, n.jsx)(T.fX, {
                name: "conversion_method",
                stops: j(),
                active: B !== void 0 ? !B : !0,
                children: (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("div", {
                      children: _.g.LocalizeReact(
                        "#ConversionMethod_Title",
                        (0, n.jsx)("a", {
                          href: `${O.TS.PARTNER_BASE_URL}pricing/explorer`,
                          target: "_blank",
                          rel: "noreferrer",
                          children: _.g.Localize("#ConversionMethod_Link"),
                        }),
                      ),
                    }),
                    (0, n.jsx)(T.dD, {
                      tour: "conversion_method",
                      name: "convert_dropdown",
                      options: { position: "below", offset: 18 },
                      children: (0, n.jsx)("div", {
                        children: (0, n.jsx)(P.ZU, {
                          rgOptions: A,
                          contextMenuPositionOptions: { bMatchWidth: !1 },
                          selectedOption: E,
                          onChange: (h) => {
                            f(h.data), M && M(h.data);
                          },
                        }),
                      }),
                    }),
                  ],
                }),
              });
        }
        function j() {
          return [
            {
              id: "convert_dropdown",
              title: _.g.Localize("#Tour_ConversionMethod_Title"),
              content: [
                (0, n.jsxs)(
                  "div",
                  {
                    children: [
                      _.g.Localize("#Tour_ConversionMethod_Desc1"),
                      " ",
                    ],
                  },
                  "convert_dropdown_1",
                ),
                (0, n.jsxs)(
                  "div",
                  {
                    children: [
                      _.g.Localize("#Tour_ConversionMethod_Desc2"),
                      "\xA0",
                      _.g.LocalizeReact(
                        "#Tour_ConversionMethod_Desc3",
                        (0, n.jsx)("a", {
                          href: `${O.TS.PARTNER_BASE_URL}pricing/explorer`,
                          children: _.g.Localize("#Tour_ConversionMethod_Link"),
                        }),
                      ),
                    ],
                  },
                  "convert_dropdown_1",
                ),
              ],
            },
          ];
        }
      },
      21988: (D, S, s) => {
        "use strict";
        s.d(S, { dD: () => X, fX: () => Z });
        var n = s(7850),
          d = s(90626),
          _ = s(2596),
          O = s.n(_),
          P = s(36118),
          v = s(58534),
          T = s(18210),
          b = s(71568),
          y = s(72739),
          L = s(68312),
          p = s(14947),
          j = s(65946),
          R = s(18938),
          B = Object.defineProperty,
          M = Object.getOwnPropertyDescriptor,
          E = (e, t, o, r) => {
            for (
              var i = r > 1 ? void 0 : r ? M(t, o) : t, a = e.length - 1, l;
              a >= 0;
              a--
            )
              (l = e[a]) && (i = (r ? l(t, o, i) : l(i)) || i);
            return r && i && B(t, o, i), i;
          };
        class f {
          m_tours = {};
          m_strActiveTour = "";
          m_storage = void 0;
          m_bReady = !1;
          constructor() {
            (0, p.Gn)(this);
          }
          async Init(t) {
            if (this.m_storage) return;
            this.m_storage = t;
            const o = await A(t);
            Object.keys(o || {}).forEach((r) => {
              const i = !!o[r];
              this.m_tours[r] = {
                ...(this.m_tours[r] || { stops: {} }),
                bSeen: i,
              };
            }),
              (this.m_bReady = !0);
          }
          UpdateStop(t, o, r, i) {
            this.m_tours[t] || (this.m_tours[t] = { bSeen: !1, stops: {} }),
              (this.m_tours[t].stops[o] = { options: r, elem: i });
          }
          BHasSeenTour(t) {
            return this.m_bReady
              ? this.m_tours[t] && this.m_tours[t].bSeen
              : !0;
          }
          GetTrackedStops(t) {
            return this.m_tours[t]?.stops || {};
          }
          ActivateTour(t) {
            this.m_strActiveTour &&
              this.m_strActiveTour !== t &&
              this.DismissTour(this.m_strActiveTour),
              (this.m_strActiveTour = t);
          }
          DismissTour(t) {
            this.m_tours[t] &&
              (this.MarkTourSeen(t),
              (this.m_tours[t].bSeen = !0),
              this.m_strActiveTour === t && (this.m_strActiveTour = ""));
          }
          MarkTourSeen(t) {
            return h(this.m_storage, t, Date.now());
          }
          MarkTourUnseen(t) {
            return h(this.m_storage, t, void 0);
          }
        }
        E([p.sH], f.prototype, "m_tours", 2),
          E([p.sH], f.prototype, "m_strActiveTour", 2),
          E([p.sH], f.prototype, "m_bReady", 2),
          E([p.XI.bound], f.prototype, "UpdateStop", 1),
          E([p.XI], f.prototype, "ActivateTour", 1),
          E([p.XI], f.prototype, "DismissTour", 1);
        const x = "tour_history";
        async function A(e) {
          const t = await e.GetObject(x);
          return !t || typeof t != "object" ? {} : t;
        }
        async function h(e, t, o) {
          const r = await A(e);
          return e.StoreObject(x, { ...r, [t]: o });
        }
        const C = new f();
        function K() {
          const e = (0, L.rX)();
          return (
            (0, d.useEffect)(() => {
              C.Init(e);
            }, [e]),
            C
          );
        }
        function w(e) {
          const t = K(),
            { bShowTour: o, stopElems: r } = (0, j.q3)(() => ({
              bShowTour: !t.BHasSeenTour(e),
              stopElems: t.GetTrackedStops(e),
            }));
          return {
            bShowTour: o,
            stopElems: r,
            onInteraction: (0, d.useCallback)(() => t.MarkTourSeen(e), [t, e]),
            onDismiss: (0, d.useCallback)(() => t.DismissTour(e), [t, e]),
            onActivate: (0, d.useCallback)(() => t.ActivateTour(e), [t, e]),
            updateStop: t.UpdateStop,
          };
        }
        function Z(e) {
          const { children: t } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [t, (0, n.jsx)(z, { ...e })],
          });
        }
        function z(e) {
          const { active: t, name: o, stops: r } = e,
            {
              bShowTour: i,
              onInteraction: a,
              onDismiss: l,
              stopElems: c,
            } = w(o),
            [u, g] = (0, d.useState)(0);
          if (!i || !t || u >= r.length) return null;
          const I = () => {
              g(u + 1), a();
            },
            { id: U, title: Q, content: k } = r[u],
            W = c[U];
          if (!W || !W.elem) return null;
          let F = k;
          return (
            Array.isArray(k) &&
              (F = k.map((q, $) => (0, n.jsx)("div", { children: q }, $))),
            (0, n.jsx)(N, {
              ...W,
              children: (0, n.jsxs)(V, {
                tour: o,
                title: Q,
                onRequestClose: l,
                children: [
                  F,
                  (0, n.jsxs)("div", {
                    className: _.Action,
                    children: [
                      r.length > 1 &&
                        (0, n.jsx)("div", {
                          className: _.TipCount,
                          children: (0, T.we)(
                            "#Tour_TipCount",
                            u + 1,
                            r.length,
                          ),
                        }),
                      u < r.length - 1
                        ? (0, n.jsx)(v.jn, {
                            onClick: I,
                            children: (0, T.we)("#Button_Next"),
                          })
                        : (0, n.jsx)(v.jn, {
                            onClick: l,
                            children: (0, T.we)("#Button_Done"),
                          }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function N(e) {
          const { elem: t, options: o, children: r } = e,
            { ownerWindow: i } = (0, b.R7)(),
            a = t.getBoundingClientRect(),
            { style: l, position: c } = G(i, a, o.position, o.offset);
          return (0, y.createPortal)(
            (0, n.jsxs)("div", {
              className: _.TourPositioner,
              style: l,
              "data-position": c,
              children: [(0, n.jsx)(J, { position: c, targetRect: a }), r],
            }),
            i.document.body,
          );
        }
        function G(e, t, o, r = 0) {
          let i,
            a = o;
          const l = 240,
            c = 10,
            u = r + m,
            g = l + c + u;
          let I = e.document.body.matches(":dir(rtl)");
          switch (
            (I &&
              (a === "left" ? (a = "right") : a === "right" && (a = "left")),
            ((a === "left" && t.x < g) ||
              (a === "right" && e.innerWidth - (t.x + t.width) < g)) &&
              (a = "below"),
            a)
          ) {
            case "left":
              i = {
                top: t.top,
                width: t.left - c - u,
                left: c,
                minWidth: l,
                flexDirection: "row",
                justifyContent: "flex-end",
              };
              break;
            case "right":
              i = {
                top: t.top,
                left: t.right + u,
                right: c,
                minWidth: l,
                flexDirection: "row",
                justifyContent: "flex-start",
              };
              break;
            case "above":
              i = {
                top: c,
                height: t.y - c - u,
                left: t.x,
                flexDirection: "column",
                justifyContent: "flex-end",
              };
              break;
            default:
              I
                ? (i = {
                    top: t.y + t.height + u,
                    right: e.innerWidth - t.right,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  })
                : (i = {
                    top: t.y + t.height + u,
                    left: t.x,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  });
              break;
          }
          return {
            style: { ...i, ...{ display: "flex" } },
            position: a,
            rect: t,
          };
        }
        function V(e) {
          const { tour: t, title: o, onRequestClose: r, children: i } = e,
            { onActivate: a } = w(t);
          return (
            (0, d.useEffect)(() => a(), [a]),
            (0, n.jsxs)("div", {
              className: _.TourBox,
              children: [
                (0, n.jsx)("div", {
                  onClick: r,
                  className: _.CloseButton,
                  children: (0, n.jsx)(P.sED, { className: _.X }),
                }),
                (0, n.jsx)("div", { className: _.Title, children: o }),
                (0, n.jsx)("div", { className: _.Content, children: i }),
              ],
            })
          );
        }
        function X(e) {
          const { name: t, tour: o, options: r, children: i } = e,
            { updateStop: a } = w(o),
            l = (0, d.useCallback)((g) => a(o, t, r, g), [a, o, t]),
            c = d.Children.only(i),
            u = (0, R.Ue)(l, c.props.ref);
          return (0, d.cloneElement)(d.Children.only(i), { ref: u });
        }
        function J(e) {
          const { position: t, targetRect: o } = e;
          return (0, n.jsx)("svg", {
            viewBox: "0 0 28 10",
            className: _.TourStopArrow,
            style: Y(t, o),
            children: (0, n.jsx)("polygon", {
              points: "0,0 14,10 28,0",
              fill: "currentColor",
            }),
          });
        }
        const H = 28,
          m = 10;
        function Y(e, t) {
          const o = { width: `${H}px`, height: `${m}px` };
          switch (e) {
            case "right":
              (o.left = "0px"), (o.top = `${Math.max(t.height / 2 - m, m)}px`);
              break;
            case "left":
              (o.right = "0px"), (o.top = `${Math.max(t.height / 2 - m, m)}px`);
              break;
            case "above":
              (o.bottom = `${-m}px`),
                (o.insetInlineStart = `${Math.max(t.width / 2 - m, m)}px`);
              break;
            case "below":
              (o.top = `${-m}px`),
                (o.insetInlineStart = `${Math.max(t.width / 2 - m, m)}px`);
          }
          return o;
        }
        function tt() {
          const e = K();
          return useCallback((t) => e.MarkTourUnseen(t), [e]);
        }
      },
      95695: (D) => {
        D.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      2596: (D) => {
        D.exports = {
          "duration-app-launch": "800ms",
          TourPositioner: "_3SETpnYbAtvmO7w4gpOCtK",
          TourBox: "_1lcizT_Nbxsk484XzTtcFf",
          CloseButton: "_1A5Qloms_qv3D5xh052LKf",
          X: "kcjJIs0EE3MG_h_t5nCza",
          Title: "_51Xf1tIa1NCIih20Qi1Nm",
          Content: "_1iiz2Ocj1OAe9wZjdPrZSv",
          Action: "_39eWK3BcJKYP9H1X1cTdyV",
          TipCount: "_1T5ZuXrxnGb4BDtEbYTuGz",
          TourStopArrow: "_2JvQPEForHWVgljtxxAwRP",
          BackgroundAnimation: "_15yvWK6GCakW5yZ0YB66fv",
          "ItemFocusAnim-darkerGrey-nocolor": "Eu2HOvMbunn7MzCLIJ5ES",
          "ItemFocusAnim-darkerGrey": "DvP1wiF6eV9afdQaEkods",
          "ItemFocusAnim-darkGreySettings": "_2MNkLvIOgwx0GSMCjDlkL8",
          "ItemFocusAnim-darkGrey": "_2tQsBdyAzzF2_nY65OSwNm",
          "ItemFocusAnim-grey": "Qg-4WEghuaXqBRIE-lEVs",
          "ItemFocusAnim-translucent-white-10": "_18ENJxMfn40_y_8CMeuuMm",
          "ItemFocusAnim-translucent-white-20": "_1wbIEe3KnohwpAw2O4M9YP",
          "ItemFocusAnimBorder-darkGrey": "_3hC5OOIGfv0lY8ykI4qpNa",
          "ItemFocusAnim-green": "_3ZDnxVKI3Xfr_a6bvaivKR",
          focusAnimation: "_2KA789f9Y4_LCtoyqU3FM3",
          hoverAnimation: "VH09gZfzWmSxuuocDY_-n",
        };
      },
    },
  ]);
})();
