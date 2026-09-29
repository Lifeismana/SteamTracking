/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8319],
  {
    19418: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        Picker: "tid_OE5NJWCCVJQP1PfRc",
        Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
        Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
        Focus: "_1xH5si_KorJpS4ST2Geksh",
        TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
        Active: "_1ddEQAfz6GuVRSEqk-d0r",
        Content: "dUQIH8Qg80N6kjB8UQO0P",
        ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
        Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
        SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
        SectionTitle: "_3WuFl419BivPeLqeVIC939",
        FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
        FilterInput: "_2l4z-U60lABvd9XWArGjAf",
        AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
        BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
        "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
        "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
        "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
        "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
        "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
        "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
        "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
        "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
        "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
        focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
        hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
      };
    },
    90024: (e) => {
      e.exports = {
        narrowWidth: "500px",
        chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
        chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
        chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
        chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
        minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
        chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
        EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
        EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
        disabled: "jaQN2IyN4P8LZXJ6P11qy",
        Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
        AudioLines: "IWabakUFeIH_d5rhBZ6dG",
        Active: "_37tPtXtV-sv9XgDHjS2cnj",
      };
    },
    283: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => _ });
      var s = n(34629),
        r = n(7850),
        o = n(90626),
        i = n(75844),
        c = n(84933),
        l = n(45699),
        a = n(76217),
        d = n(88997),
        m = n(10820),
        h = n(61859),
        p = n(52038),
        u = n(90024),
        x = n.n(u),
        S = n(97232),
        f = n(32754);
      const C = 1576780700;
      let j = class extends o.Component {
        OnEmoticonClick(e) {
          const {
              emoticonStore: t,
              strFlairGroupID: n,
              SetUIDisplayPref: s,
              contextOptions: o,
              bShowChatAddons: i,
            } = this.props,
            {
              roomEffectSettings: c,
              onRoomEffectSelected: l,
              onStickerSelected: a,
            } = this.props;
          let h = null;
          if (
            ((h =
              i && c && l && a
                ? (0, r.jsx)(m.Q4, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (e) =>
                      this.props.OnEmoticonSelected(e, !1),
                    roomEffectSettings: c,
                    onRoomEffectSelected: l,
                    onStickerSelected: a,
                  })
                : n && t.flair_list && t.GetFlairListByGroupID(n)?.length > 0
                  ? (0, r.jsx)(m.CE, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })
                  : (0, r.jsx)(m.iY, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
            (0, d.lX)(
              h,
              e,
              o || {
                bOverlapHorizontal: !0,
                bPreferPopLeft: !0,
                bPreferPopTop: !0,
              },
            ),
            this.BHaveUnseenEmoticons() && s)
          ) {
            let e = this.GetNewestIndicatorTime();
            (!e || e < C) && (e = C), s("rtLastAckedNewEmoticons", e);
          }
        }
        GetNewestIndicatorTime() {
          let e = this.props.emoticonStore,
            t = Number.MIN_SAFE_INTEGER,
            n = e.GetTimeReceivedNewestEmoticon();
          n && (t = n);
          let s = e.GetTimeReceivedForStickerOrEffect();
          return (t = Math.max(s, t)), t > Number.MIN_SAFE_INTEGER ? t : void 0;
        }
        BHaveUnseenEmoticons() {
          const { rtLastAckedNewEmoticons: e } = this.props;
          let t = this.GetNewestIndicatorTime();
          return !e || e < C || (t && (!e || e < t));
        }
        render() {
          const { disabled: e, className: t, ttip: n, useImg: s } = this.props;
          let o = [t],
            i = !1;
          return (
            e ? o.push("disabled") : this.BHaveUnseenEmoticons() && (i = !0),
            n && o.push("ttip"),
            s
              ? (0, r.jsx)(a.Z, {
                  onClick: this.OnEmoticonClick,
                  onOKActionDescription: (0, h.we)("#ChatEntryButton_Emoticon"),
                  focusable: !0,
                  children: (0, r.jsx)(f.he, {
                    toolTipContent: n,
                    children: (0, r.jsx)("img", {
                      src: this.props.useImg,
                      className: (0, p.A)(...o),
                      title:
                        this.props.title ||
                        (0, h.we)("#ChatEntryButton_Emoticon"),
                    }),
                  }),
                })
              : (o.push(x().chatSubmitButton, x().EmoticonPickerButton),
                (0, r.jsx)(l.fu, {
                  className: (0, p.A)(...o),
                  onOKActionDescription: (0, h.we)("#ChatEntryButton_Emoticon"),
                  type: "button",
                  onClick: this.OnEmoticonClick,
                  title:
                    this.props.title || (0, h.we)("#ChatEntryButton_Emoticon"),
                  disabled: e,
                  children: (0, r.jsxs)(f.he, {
                    toolTipContent: n,
                    children: [
                      this.props.buttonIcon || (0, r.jsx)(S.nl, {}),
                      i && (0, r.jsx)(m.iD, {}),
                    ],
                  }),
                }))
          );
        }
      };
      (0, s.Cg)([c.oI], j.prototype, "OnEmoticonClick", null),
        (j = (0, s.Cg)([i.PA], j));
      const _ = j;
    },
    10820: (e, t, n) => {
      "use strict";
      n.d(t, { Q4: () => y, iY: () => M, CE: () => O, iD: () => K });
      var s = n(34629),
        r = n(7850),
        o = n(14947),
        i = n(75844),
        c = n(90626),
        l = n(30193),
        a = n(55263),
        d = n(60155),
        m = n(52038),
        h = n(61859);
      function p(e, t, n = !1) {
        return `${e}economy/sticker${n ? "static" : ""}/${encodeURIComponent(t)}`;
      }
      var u = n(78327),
        x = n(56283),
        S = n(76217),
        f = n(88006),
        C = n(19418);
      class j extends c.Component {
        constructor(e) {
          super(e), (this.state = { activeIndex: e.initialActiveIndex || 0 });
        }
        render() {
          const { config: e } = this.props,
            { activeIndex: t } = this.state,
            n = e[t],
            s = n ? n.renderContent() : null,
            o = e.length > 1,
            i = o
              ? ({ detail: { button: t } }) => {
                  t === f.pR.BUMPER_LEFT
                    ? this.setState({
                        activeIndex: Math.max(0, this.state.activeIndex - 1),
                      })
                    : t === f.pR.BUMPER_RIGHT &&
                      this.setState({
                        activeIndex: Math.min(
                          e.length - 1,
                          this.state.activeIndex + 1,
                        ),
                      });
                }
              : void 0;
          return (0, r.jsxs)(S.Z, {
            className: C.Picker,
            onButtonDown: i,
            children: [o && (0, r.jsx)(_, { children: this.RenderTabs() }), s],
          });
        }
        RenderTabs() {
          return this.props.config.map(({ renderTab: e }, t) => {
            const n = this.state.activeIndex === t;
            return (0, r.jsx)(
              E,
              {
                active: n,
                onClick: () => this.setState({ activeIndex: t }),
                children: e(n),
              },
              t,
            );
          });
        }
      }
      function _(e) {
        return (0, r.jsx)(S.Z, {
          className: C.Tabs,
          "flow-children": "row",
          children: e.children,
        });
      }
      function k(e) {
        return (0, r.jsx)("div", {
          className: C.Content,
          children: e.children,
        });
      }
      function E(e) {
        const { active: t, children: n, onClick: s } = e;
        return (0, r.jsx)(S.Z, {
          className: (0, m.A)(C.Tab, t && C.Active),
          focusClassName: C.Focus,
          onActivate: s,
          children: (0, r.jsx)("div", {
            className: (0, m.A)(C.TabContent, t && C.Active),
            children: n,
          }),
        });
      }
      function A(e) {
        const {
          items: t,
          renderItem: n,
          onItemSelect: s,
          keyExtractor: o,
          renderEmpty: i,
        } = e;
        let c = t.map((e, i) =>
          (0, r.jsx)(
            S.Z,
            {
              className: C.Item,
              onActivate: () => s(t[i]),
              autoFocus: 0 === i,
              focusClassName: C.Focus,
              children: n(t[i]),
            },
            o(e),
          ),
        );
        return (
          0 === t.length && i && (c = i()),
          (0, r.jsx)(S.Z, {
            "flow-children": "grid",
            className: C.ItemList,
            children: c,
          })
        );
      }
      function I(e) {
        const { title: t, onFilterChange: n, filter: s, onSubmit: o, ...i } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(k, {
              children: (0, r.jsx)(v, {
                title: t,
                children: (0, r.jsx)(A, { ...i }),
              }),
            }),
            (0, r.jsx)(P, { value: s, onChange: n, onSubmit: o }),
          ],
        });
      }
      function w(e) {
        const { onFilterChange: t, filter: n, sections: s, title: o } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(k, {
              children: [
                o &&
                  (0, r.jsx)("div", {
                    className: C.SectionedPageTitle,
                    children: o,
                  }),
                s.map(({ title: e, ...t }) =>
                  (0, r.jsx)(
                    v,
                    { title: e, children: (0, r.jsx)(A, { ...t }) },
                    e,
                  ),
                ),
              ],
            }),
            (0, r.jsx)(P, { value: n, onChange: t }),
          ],
        });
      }
      function v(e) {
        return (0, r.jsxs)("div", {
          className: C.Section,
          children: [
            (0, r.jsx)("div", { className: C.SectionTitle, children: e.title }),
            (0, r.jsx)("div", {
              className: C.SectionContent,
              children: e.children,
            }),
          ],
        });
      }
      function P(e) {
        const { value: t, onChange: n, onSubmit: s } = e;
        return (0, r.jsx)("div", {
          className: C.FilterInputContainer,
          children: (0, r.jsx)(x.pd, {
            type: "text",
            placeholder: (0, h.we)("#AddonPicker_Search"),
            className: C.FilterInput,
            value: t,
            onChange: (e) => n(e.target.value),
            onSubmit: s,
          }),
        });
      }
      function N(e) {
        const { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          className: (0, m.A)(t, C.AddonPickerMessage),
          ...n,
        });
      }
      var g = n(42060),
        L = n.n(g),
        T = n(51272),
        b = n(81962);
      function F(e) {
        return e.recent_emoticons;
      }
      function G(e) {
        return e.recent_stickers;
      }
      function R(e) {
        return F(e).length + G(e).length > 0;
      }
      const y = (0, i.PA)((e) => {
        const {
          emoticonStore: t,
          roomEffectSettings: n,
          strFlairGroupID: s,
          onEmoticonSelected: i,
          onRoomEffectSelected: l,
          onStickerSelected: a,
        } = e;
        !(function (e) {
          const [t, n] = (0, c.useState)(e.is_initialized);
          (0, c.useEffect)(() => {
            if (!e.is_initialized) {
              e.UpdateEmoticonList();
              const t = (0, o.z7)(
                () => e.is_initialized,
                () => n(e.is_initialized),
              );
              return () => t();
            }
            return () => {};
          }, [e]);
        })(t);
        const p = [];
        return (
          R(t) &&
            p.push({
              renderTab: (e) =>
                (0, r.jsx)("span", {
                  title: (0, h.we)("#AddonPicker_RecentlyUsed"),
                  className: (0, m.A)(
                    L().PickerTab,
                    L().Clock,
                    e && L().ActiveTab,
                  ),
                  children: (0, r.jsx)(ne, {}),
                }),
              renderContent: () =>
                (0, r.jsx)(H, {
                  store: t,
                  onEmoticonSelect: (e) => i(e.name),
                  onStickerSelect: (e) => a(e.name),
                  flairGroupID: s,
                }),
            }),
          (0, r.jsx)(d.tz, {
            children: (0, r.jsx)(j, {
              config: [
                ...p,
                {
                  renderTab: (e) =>
                    (0, r.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_Emoticons"),
                      className: (0, m.A)(L().PickerTab, e && L().ActiveTab),
                      children: (0, r.jsx)(ee, {}),
                    }),
                  renderContent: () =>
                    (0, r.jsx)(U, {
                      store: t,
                      onItemSelect: (e) => i(e.name),
                      flairGroupID: s,
                    }),
                },
                {
                  renderTab: (e) =>
                    (0, r.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_Stickers"),
                      className: (0, m.A)(L().PickerTab, e && L().ActiveTab),
                      children: (0, r.jsx)($, {}),
                    }),
                  renderContent: () =>
                    (0, r.jsx)(Z, { store: t, onItemSelect: (e) => a(e.name) }),
                },
                {
                  renderTab: (e) =>
                    (0, r.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_RoomEffects"),
                      className: (0, m.A)(L().PickerTab, e && L().ActiveTab),
                      children: (0, r.jsx)(te, {}),
                    }),
                  renderContent: () =>
                    (0, r.jsx)(z, {
                      store: t,
                      effectSettings: n,
                      onItemSelect: (e) => l(e.name),
                    }),
                },
              ],
            }),
          })
        );
      });
      let B = class extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          const {
              emoticonStore: e,
              onEmoticonSelected: t,
              onStickerSelected: n,
              strFlairGroupID: s,
            } = this.props,
            o = [];
          return (
            R(e) &&
              o.push({
                renderTab: (e) =>
                  (0, r.jsx)("span", {
                    title: (0, h.we)("#AddonPicker_RecentlyUsed"),
                    className: (0, m.A)(
                      L().PickerTab,
                      L().Clock,
                      e && L().ActiveTab,
                    ),
                    children: (0, r.jsx)(ne, {}),
                  }),
                renderContent: () =>
                  (0, r.jsx)(H, {
                    store: e,
                    onEmoticonSelect: (e) => t(e.name),
                    onStickerSelect: (e) => n(e.name),
                    flairGroupID: s,
                  }),
              }),
            (0, r.jsx)(d.tz, {
              children: (0, r.jsx)(j, {
                config: [
                  ...o,
                  {
                    renderTab: (e) =>
                      (0, r.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Emoticons"),
                        className: (0, m.A)(L().PickerTab, e && L().ActiveTab),
                        children: (0, r.jsx)(ee, {}),
                      }),
                    renderContent: () =>
                      (0, r.jsx)(U, {
                        store: e,
                        onItemSelect: (e) => t(e.name),
                        flairGroupID: s,
                      }),
                  },
                  {
                    renderTab: (e) =>
                      (0, r.jsx)("span", {
                        title: (0, h.we)("#AddonPicker_Stickers"),
                        className: (0, m.A)(L().PickerTab, e && L().ActiveTab),
                        children: (0, r.jsx)($, {}),
                      }),
                    renderContent: () =>
                      (0, r.jsx)(Z, {
                        store: e,
                        onItemSelect: (e) => n(e.name),
                      }),
                  },
                ],
              }),
            })
          );
        }
      };
      B = (0, s.Cg)([i.PA], B);
      class M extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return (0, r.jsx)(d.tz, {
            children: (0, r.jsx)(j, {
              config: [
                {
                  renderTab: () =>
                    (0, r.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_Emoticons"),
                      className: L().PickerTab,
                      children: (0, r.jsx)(ee, {}),
                    }),
                  renderContent: () =>
                    (0, r.jsx)(W, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          });
        }
      }
      class O extends c.Component {
        m_disposeEmoticonStore;
        constructor(e) {
          super(e), (this.state = { strSearchText: "" });
          let t = this.props.emoticonStore;
          t.is_initialized ||
            (t.UpdateEmoticonList(),
            (this.m_disposeEmoticonStore = (0, o.z7)(
              () => t.is_initialized,
              () => this.forceUpdate(),
            )));
        }
        componentWillUnmount() {
          this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
        }
        render() {
          return (0, r.jsx)(d.tz, {
            children: (0, r.jsx)(j, {
              config: [
                {
                  renderTab: () =>
                    (0, r.jsx)("span", {
                      title: (0, h.we)("#AddonPicker_Emoticons"),
                      className: L().PickerTab,
                      children: (0, r.jsx)(ee, {}),
                    }),
                  renderContent: () =>
                    (0, r.jsx)(V, {
                      store: this.props.emoticonStore,
                      onItemSelect: (e) => this.props.OnSelected(e.name, !1),
                      flairGroupID: this.props.strFlairGroupID,
                    }),
                },
              ],
            }),
          });
        }
      }
      class H extends c.Component {
        state = { filter: "" };
        render() {
          const {
              store: e,
              onEmoticonSelect: t,
              onStickerSelect: n,
            } = this.props,
            { filter: s } = this.state,
            o = [];
          return (
            F(e) &&
              o.push({
                title: (0, h.we)("#AddonPicker_RecentEmoticons"),
                items: l.pN.FilterEmoticons(F(e), s),
                onItemSelect: t,
                renderItem: (e) => (0, r.jsx)(q, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  (0, r.jsx)(N, {
                    children: s
                      ? (0, h.we)("#AddonPicker_NoResults")
                      : (0, h.we)(
                          "#AddonPicker_NoRecent",
                          (0, h.we)("#AddonPicker_Emoticons"),
                        ),
                  }),
              }),
            G(e).length &&
              o.push({
                title: (0, h.we)("#AddonPicker_RecentStickers"),
                items: l.pN.FilterStickers(G(e), s),
                onItemSelect: n,
                renderItem: (e) => (0, r.jsx)(X, { sticker: e }),
                keyExtractor: ({ name: e }) => e,
                renderEmpty: () =>
                  (0, r.jsx)(N, {
                    children: s
                      ? (0, h.we)("#AddonPicker_NoResults")
                      : (0, h.we)(
                          "#AddonPicker_NoRecent",
                          (0, h.we)("#AddonPicker_Stickers"),
                        ),
                  }),
              }),
            (0, r.jsx)(w, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: s,
              sections: o,
            })
          );
        }
      }
      class U extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state,
            o = !s && n ? e.GetFlairListByGroupID(n) : e.emoticon_list,
            i = l.pN.FilterEmoticons(o, s).slice(0, 1e3);
          return (0, r.jsx)(I, {
            title: (0, h.we)("#AddonPicker_Emoticons"),
            items: i,
            onItemSelect: t,
            renderItem: (e) => (0, r.jsx)(q, { emoticon: e }),
            keyExtractor: (e) => e.name,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            onSubmit: () => t(i[0]),
            renderEmpty: () =>
              s
                ? (0, r.jsx)(N, {
                    children: (0, h.we)("#AddonPicker_NoResults"),
                  })
                : (0, r.jsx)(D, {}),
          });
        }
      }
      function D() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(N, {
              children: (0, h.we)(
                "#AddonPicker_NoneOwned",
                (0, h.we)("#AddonPicker_Emoticons"),
              ),
            }),
            (0, r.jsx)(N, {
              children: (0, h.PP)(
                "#AddonPicker_AcquireAtPointsShopOrMarket",
                (0, r.jsx)(T.uU, {
                  href: `${u.TS.STORE_BASE_URL}points/shop/c/emoticons`,
                  children: (0, h.we)("#AddonPicker_AcquireAtPointsShop_Link"),
                }),
                (0, r.jsx)(T.uU, {
                  href: `${u.TS.COMMUNITY_BASE_URL}market`,
                  children: (0, h.we)(
                    "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                  ),
                }),
              ),
            }),
          ],
        });
      }
      class Z extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t } = this.props,
            { filter: n } = this.state,
            s = l.pN.FilterStickers(e.GetStickerList(), n);
          return (0, r.jsx)(I, {
            title: (0, h.we)("#EmoticonPicker_StickerHeading"),
            items: s,
            onItemSelect: t,
            renderItem: (e) => (0, r.jsx)(X, { sticker: e }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: n,
            onSubmit: () => t(s[0]),
            renderEmpty: () =>
              n
                ? (0, r.jsx)(N, {
                    children: (0, h.we)("#AddonPicker_NoResults"),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(N, {
                        children: (0, h.we)(
                          "#AddonPicker_NoneOwned",
                          (0, h.we)("#AddonPicker_Stickers"),
                        ),
                      }),
                      (0, r.jsx)(N, {
                        children: (0, h.PP)(
                          "#AddonPicker_AcquireAtPointsShop",
                          (0, r.jsx)(T.uU, {
                            href: `${u.TS.STORE_BASE_URL}points/shop/c/stickers`,
                            children: (0, h.we)(
                              "#AddonPicker_AcquireAtPointsShop_Link",
                            ),
                          }),
                        ),
                      }),
                    ],
                  }),
          });
        }
      }
      class z extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, effectSettings: t, onItemSelect: n } = this.props,
            { filter: s } = this.state,
            o = e.GetEffectList().filter(({ name: e }) => e.indexOf(s) > -1);
          return (0, r.jsx)(I, {
            title: (0, h.we)("#EmoticonPicker_EffectHeading"),
            items: o,
            onItemSelect: n,
            renderItem: (e) =>
              (0, r.jsx)(Y, { effect: e, roomEffectSettings: t }),
            keyExtractor: ({ name: e }) => e,
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            onSubmit: () => n(o[0]),
            renderEmpty: () =>
              s
                ? (0, r.jsx)(N, {
                    children: (0, h.we)("#AddonPicker_NoResults"),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(N, {
                        children: (0, h.we)(
                          "#AddonPicker_NoneOwned",
                          (0, h.we)("#AddonPicker_RoomEffects"),
                        ),
                      }),
                      (0, r.jsx)(N, {
                        children: (0, h.PP)(
                          "#AddonPicker_AcquireAtPointsShop",
                          (0, r.jsx)(T.uU, {
                            href: `${u.TS.STORE_BASE_URL}points/shop/c/chateffects`,
                            children: (0, h.we)(
                              "#AddonPicker_AcquireAtPointsShop_Link",
                            ),
                          }),
                        ),
                      }),
                    ],
                  }),
          });
        }
      }
      let W = class extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state,
            o = [];
          return (
            F(e).length &&
              o.push({
                title: (0, h.we)("#AddonPicker_RecentEmoticons"),
                items: l.pN.FilterEmoticons(F(e), s),
                onItemSelect: t,
                renderItem: (e) => (0, r.jsx)(q, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  (0, r.jsx)(N, {
                    children: s
                      ? (0, h.we)("#AddonPicker_NoResults")
                      : (0, h.we)(
                          "#AddonPicker_NoRecent",
                          (0, h.we)("#AddonPicker_Emoticons"),
                        ),
                  }),
              }),
            (0, r.jsx)(w, {
              onFilterChange: (e) => this.setState({ filter: e }),
              filter: s,
              sections: [
                ...o,
                {
                  title: (0, h.we)("#AddonPicker_AllEmoticons"),
                  items: l.pN.FilterStickers(e.emoticon_list, s).slice(0, 1e3),
                  onItemSelect: t,
                  renderItem: (e) => (0, r.jsx)(q, { emoticon: e }),
                  keyExtractor: (e) => e.name,
                  renderEmpty: () =>
                    s
                      ? (0, r.jsx)(N, {
                          children: (0, h.we)("#AddonPicker_NoResults"),
                        })
                      : (0, r.jsx)(D, {}),
                },
              ],
            })
          );
        }
      };
      W = (0, s.Cg)([i.PA], W);
      let V = class extends c.Component {
        state = { filter: "" };
        render() {
          const { store: e, onItemSelect: t, flairGroupID: n } = this.props,
            { filter: s } = this.state;
          return (0, r.jsx)(w, {
            onFilterChange: (e) => this.setState({ filter: e }),
            filter: s,
            sections: [
              {
                title: (0, h.we)("#ChatEntryButton_Flair"),
                items: l.pN.FilterStickers(e.GetFlairListByGroupID(n), s),
                onItemSelect: t,
                renderItem: (e) => (0, r.jsx)(q, { emoticon: e }),
                keyExtractor: (e) => e.name,
                renderEmpty: () =>
                  s
                    ? (0, r.jsx)(N, {
                        children: (0, h.we)("#AddonPicker_NoResults"),
                      })
                    : (0, r.jsx)(D, {}),
              },
            ],
          });
        }
      };
      V = (0, s.Cg)([i.PA], V);
      const q = (e) => {
        const { emoticon: t, large: n } = e,
          s = !t.last_used && t.time_received;
        return (0, r.jsxs)("div", {
          className: L().EmoticonItem,
          children: [
            (0, r.jsx)(b.n, { emoticon: t.name, large: n }),
            s && (0, r.jsx)(K, {}),
          ],
        });
      };
      class X extends c.Component {
        state = { showHover: !1 };
        m_ref = c.createRef();
        render() {
          const { sticker: e, className: t, ...n } = this.props,
            s = p(u.TS.COMMUNITY_CDN_URL, e.name);
          return (0, r.jsxs)("div", {
            ref: this.m_ref,
            className: (0, m.A)(t, L().StickerButton),
            onMouseOver: () => this.setState({ showHover: !0 }),
            onFocus: () => this.setState({ showHover: !0 }),
            onMouseLeave: () => this.setState({ showHover: !1 }),
            onBlur: () => this.setState({ showHover: !1 }),
            ...n,
            children: [
              (0, r.jsx)("img", { style: { width: "100%" }, src: s }),
              this.state.showHover &&
                this.m_ref.current &&
                (0, r.jsx)(Q, { target: this.m_ref.current, sticker: e }),
            ],
          });
        }
      }
      const Q = (0, i.PA)((e) => {
        const {
            target: t,
            sticker: { name: n, appid: s },
          } = e,
          [o] = (0, a.t7)(s, {});
        return (0, r.jsx)(b.c, {
          target: t,
          title: n,
          subtitle: o?.GetName(),
          children: (0, r.jsx)("img", {
            src: p(u.TS.COMMUNITY_CDN_URL, n),
            className: L().StickerHoverSticker,
          }),
        });
      });
      class Y extends c.Component {
        state = { showHover: !1 };
        m_ref = c.createRef();
        render() {
          const {
              effect: e,
              roomEffectSettings: t,
              className: n,
              ...s
            } = this.props,
            o = t[e.name];
          return (0, r.jsxs)("div", {
            ref: this.m_ref,
            onMouseOver: () => this.setState({ showHover: !0 }),
            onFocus: () => this.setState({ showHover: !0 }),
            onMouseLeave: () => this.setState({ showHover: !1 }),
            onBlur: () => this.setState({ showHover: !1 }),
            className: (0, m.A)(n, L().EffectButton),
            ...s,
            children: [
              o.renderEffectIcon(),
              this.state.showHover &&
                this.m_ref.current &&
                (0, r.jsx)(J, {
                  target: this.m_ref.current,
                  effect: e,
                  roomEffectSettings: t,
                }),
            ],
          });
        }
      }
      const J = (0, i.PA)((e) => {
        const {
            target: t,
            effect: { name: n, appid: s },
            roomEffectSettings: o,
          } = e,
          i = o[n],
          [c] = (0, a.t7)(s, {});
        return (0, r.jsx)(b.c, {
          target: t,
          title: n,
          subtitle: c?.GetName(),
          children: (0, r.jsx)("div", {
            className: L().EffectHoverEffect,
            children: i.renderEffectIcon(),
          }),
        });
      });
      function K() {
        return (0, r.jsx)("div", {
          className: L().NewEmoticonIndicator,
          children: (0, r.jsx)("div", { className: L().NewEmoticonCircle }),
        });
      }
      function $(e) {
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...e,
          children: [
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M21 29H22.1875V31H19L21 29Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M29 22.1875V21L31 19V22.1875H29Z",
            }),
          ],
        });
      }
      function ee(e) {
        return (0, r.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...e,
          children: (0, r.jsx)("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
          }),
        });
      }
      function te(e) {
        return (0, r.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 36 36",
          fill: "none",
          ...e,
          children: [
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
            }),
            (0, r.jsx)("path", {
              fill: "currentColor",
              d: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
            }),
          ],
        });
      }
      function ne(e) {
        const { className: t, ...n } = e;
        return (0, r.jsx)("svg", {
          className: (0, m.A)("SVGIcon_Button SVGIcon_Clock", t),
          version: "1.1",
          x: "0px",
          y: "0px",
          width: "20px",
          height: "20px",
          viewBox: "0 0 24 24",
          ...n,
          children: (0, r.jsx)("path", {
            d: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
          }),
        });
      }
    },
    97232: (e, t, n) => {
      "use strict";
      n.d(t, { Jl: () => c, nl: () => a, rf: () => l });
      var s = n(7850),
        r = n(12155),
        o = n(4869),
        i = n(78327);
      function c(e) {
        return (0, i.Qn)()
          ? (0, s.jsx)(o.MGO, { ...e })
          : (0, s.jsx)(r.Jlk, { ...e });
      }
      function l() {
        return (0, s.jsx)(r.rfv, {});
      }
      function a() {
        return (0, i.Qn)() ? (0, s.jsx)(o.nl, {}) : (0, s.jsx)(r.jZW, {});
      }
    },
  },
]);
