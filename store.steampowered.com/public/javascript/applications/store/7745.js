/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7745],
  {
    48093: (e) => {
      e.exports = {
        ListBox: "_1PUg8GjnBeN7rBK-dcyQFl",
        ListBoxOption: "_20oF9tLSfptitLraDOp6X6",
      };
    },
    60097: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_4SG2MjCMpIRt6W-Zj4Oxm",
        HeaderNotices: "_2BtczALVCY2zzCLnj8oga9",
        FooterNoticesHeader: "_2itvgQZbn40lY_jj5sG8it",
        MustFix: "_1SFErQFwOLmnLCBVlq9zxK",
        FooterNotice: "_1WMk6EdVNns2fKuDOCrBX3",
        NoticeIndex: "_3N9Ik0sMA90E7jGHJqycWH",
      };
    },
    64201: (e) => {
      e.exports = { LineItemStoreHover: "_3DfrtekI1PCxuXbfj85Zwp" };
    },
    86711: (e) => {
      e.exports = {
        strMaxCartPartResponsiveWidth: "840px",
        CartCard: "_1MfAwU630QwDv6FuV9c_Dr",
        LineItemsCtn: "_3ypRUtQoOfOrCsyHlzfGm4",
        StoreSalePriceBox: "_5m_q0MLlnLkt_KBd7iMbO",
        StoreSaleDiscountedPriceCtn: "_1ZzX6NkuELfMhPL0SJCQSK",
        Scrollable: "_2A58_XmT-KCSwE_kh-xntF",
        LineItemWrapper: "XjPmFc2t_i1DAuEXEbIX",
        fadeIn: "xtUORpc8Xy9Hs_tdAIitT",
        ImageLink: "fGORfr7ZEqjO3WrgO6A4t",
        LineItemCapsule: "_2Xz_WXO8PfREP4c9ZWAuNg",
        HeaderImg: "_37_1K2XQrVBwncWFXTcpMP",
        HeaderImgBlurred: "_3hT2r7Sb_Yx9PdYSB0rjpl",
        LineItemPlaceholder: "_1_mV-2sC0r25eLrKyufPRK",
        AddRemoveLinks: "_2Agry3evdkG3gKPyhNf7Hz",
        RemoveLineItem: "_3YCgcpoCojlbS6DvkNsG2J",
        AddLineItem: "_2qvlyUCwtTBUslo1Z7-RlG",
        VerifyLineItem: "_2HO_qGTXtEZz_EF60S6hfS",
        LineItemRightCol: "ysGS-IPPWEkwN-O5rr-0V",
        InnerLineItemCtn: "_3F0SnUeC_obtI4WyQtijAa",
        LineItemDetailsCtn: "_3GKl4T2MbvnGPvRzyXC5nQ",
        LineItemCol: "HhD4RK0A4phOlAwZQDckk",
        LineItemDetailsRow: "_1wLomHB2PWPNx7TsNYpdtm",
        Text: "_2aGDkEAUaGvF4KHHZRRkEj",
        NoWrap: "c0VFjXtN_fgP-PR6wQe66",
        ComplianceLink: "_1Gqg5Ajp0R5LqzbJ4Wtecz",
        LineItemDetailsRowTop: "_1aXXp4afkXP3Ez03MjTY3D",
        LineItemSpaceBetween: "_3L6hUlrzXOezye2BqWz-T7",
        LineItemTitle: "EflKs0JjldhDSxbUBaiOp",
        LineItemPricingOptions: "_2BTcfC4-tZENmEAXbVzKA7",
        PlatformIcons: "_2FgjpNRRiZkDXAB53vFFOh",
        PurchaseOptionPickerCtn: "_2iq-WR8SMiZcAwSnm-8-eE",
        AddLineItemCtn: "_3-GZz-m5p_fxd2pqPGK6u9",
        AddLineItemIcon: "_4Uz7u01J6OO_P0hhfb0Kc",
        PendingLineItem: "_3w61e3curroiu7lCOKvLN8",
        FlexRow: "_2Y0WvaYzp-79xegxjV_kQI",
        PriceWidget: "_3_q-F_MXXBH_JQPJvWznnc",
        Warning: "_1_vNtL4JTtFLtSgY25zz_5",
        LineItemNoticeAppsCtn: "_2bBPt2vaBRl7xTiWEkA-PR",
        LoadingThrobber: "_9ECtylscKVGNrQpLPlds0",
        WhiteText: "_1CYn6Bwc5kuZ25-Gyb9btE",
        ErrorLineItem: "_2Qnb-DOaU8BbFWOUBG3hs1",
        Left: "Twv2unKjIVTB3vmgieygi",
        Error: "_2LPurUnl-MyMX6q6B0uNX",
        Muted: "_3efIWtJm5nAuQLmq9N3nJd",
        GiftForNotice: "tKoWmz4HQdpU6S-Fq6IEh",
        Name: "_2BZrRaucjIMeqixZMVlakn",
        RemoveButton: "_1j8t9ZjX3tyKrSBnkY6IeG",
      };
    },
    14773: (e, t, n) => {
      "use strict";
      n.d(t, { l6: () => W, WM: () => R });
      var i = n(7850),
        r = n(90626),
        s = n(73788),
        a = n(8083),
        o = n(90534),
        c = n(80797),
        l = n(48093);
      const d = Object.assign(
        function (e) {
          const { render: t, ...n } = e;
          return (0, c.Q)(
            t,
            (0, i.jsx)(o.az, {
              radius: "sm",
              background: "dull-8",
              className: l.ListBox,
            }),
            { role: "listbox", ...n },
          );
        },
        {
          Option: function (e) {
            const {
                selected: t,
                focused: n,
                label: r = null,
                render: s,
                disabled: a,
                ...d
              } = e,
              u = t ? "true" : "false",
              _ = n ? "true" : void 0;
            return (0, c.Q)(
              s,
              (0, i.jsx)(o.az, {
                focusable: !0,
                "data-selected": u,
                "data-focused": _,
                "aria-disabled": a,
                className: l.ListBoxOption,
                paddingY: "2",
                paddingX: "3",
              }),
              { role: "option", ...d },
              { selected: t, focused: n, disabled: a },
            );
          },
        },
      );
      var u = n(49560),
        _ = n(45699),
        p = n(85585),
        m = n(78327);
      const f = (0, r.createContext)(null);
      function h(e) {
        return (0, m.Qn)() ? (0, i.jsx)(g, { ...e }) : (0, i.jsx)(x, { ...e });
      }
      function g(e) {
        const { state: t, children: n } = e,
          s = r.useRef(void 0);
        return (
          (0, _.O7)(s, !!s.current, !1),
          (0, i.jsx)(p.D6, {
            navID: "PopoverList",
            onCancelButton: () => t.floating.context.onOpenChange(!1),
            modal: !0,
            navTreeRef: s,
            children: n,
          })
        );
      }
      function x(e) {
        const { state: t, children: n } = e;
        return (0, i.jsx)(s.s3, {
          context: t.floating.context,
          initialFocus: t.initialFocus,
          returnFocus: !1,
          children: n,
        });
      }
      const I = function (e) {
          const { children: t, state: n } = e;
          return (0, i.jsx)(f.Provider, { value: n, children: t });
        },
        j = function (e) {
          const { children: t } = e,
            n = r.Children.only(t),
            i = (0, r.useContext)(f),
            a = (0, s.SV)([i?.floating.refs.setReference, n?.props.ref]);
          if (!n) return null;
          if (!i)
            return (
              console.error(
                "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const { ref: o, ...c } = n.props;
          return (0, r.cloneElement)(n, { ref: a, ...i.getReferenceProps(c) });
        },
        C = function (e) {
          const { children: t, render: n, ref: a } = e,
            o = (0, r.useContext)(f),
            c = (0, s.SV)([
              a,
              o?.floating.refs.setFloating,
              (e) => e?.showPopover?.(),
            ]);
          return o
            ? o.open
              ? (0, i.jsx)(h, {
                  state: o,
                  children: (0, i.jsx)(d, {
                    ref: c,
                    style: o.floating.floatingStyles,
                    ...o.getFloatingProps({ popover: "manual" }),
                    render: n,
                    children: (0, i.jsx)(s.ph, {
                      elementsRef: o.elementsRef,
                      labelsRef: o.labelsRef,
                      children: t,
                    }),
                  }),
                })
              : null
            : (console.error(
                "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
              ),
              null);
        },
        L = function (e) {
          const {
              children: t,
              label: n,
              selected: a,
              onSelect: o,
              ref: c,
              disabled: l,
              ...u
            } = e,
            _ = (0, r.useContext)(f),
            { ref: p, index: m } = (0, s.rm)({ label: n }),
            h = (0, s.SV)([c, p]);
          if (!_)
            return (
              console.error(
                "<PopoverListItem> must be a child of <PopoverListRoot>.",
              ),
              null
            );
          const g = m === _.activeIndex,
            x = m === _.selectedIndex || !!a;
          return (0, i.jsx)(d.Option, {
            ref: h,
            selected: x,
            focused: g,
            role: "option",
            tabIndex: 0,
            ..._.getItemProps({
              onClick: l ? void 0 : o,
              onKeyDown: (e) => {
                l ||
                  ("Enter" !== e.key &&
                    (" " !== e.key || _.typingRef.current)) ||
                  (o(e), e.preventDefault(), e.stopPropagation());
              },
              active: g,
              selected: x,
              disabled: l,
              ...u,
            }),
            children: t,
          });
        };
      var v = n(61023),
        y = n(89047),
        b = n(20187),
        N = n(40704);
      function w(e) {
        return (0, i.jsx)(N.I, {
          ...e,
          viewBoxSize: 12,
          children: (0, i.jsx)("path", {
            d: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
            fill: "currentColor",
          }),
        });
      }
      var O = n(13843);
      var E = n(57757),
        S = n(83392),
        z = n(66922);
      function R(e) {
        return P(e, !1);
      }
      function P(e, t) {
        const { onSelectionChange: n, selectedValue: i, ...s } = e,
          [a, o] = (0, r.useState)(!1),
          c = (0, r.useCallback)(
            (e) => {
              n(e), t || o(!1);
            },
            [n, t],
          ),
          l = (0, r.useCallback)(
            (e) => {
              c(t ? [] : null), e.stopPropagation(), e.preventDefault();
            },
            [c, t],
          ),
          d = (0, r.useCallback)(
            (e) => {
              if (t) {
                const t = i,
                  n = t.indexOf(e);
                if (-1 !== n) return c(t.slice(0, n).concat(t.slice(n + 1)));
                c(t.concat(e));
              } else c(e);
            },
            [c, i, t],
          );
        return {
          onSelectionChange: c,
          onItemSelectionChange: d,
          onClear: l,
          bOpen: a,
          setOpen: o,
          multiselect: t,
          selectedValue: i,
          ...s,
        };
      }
      const F = {
        Root: function (e) {
          const {
              children: t,
              state: n,
              placement: o = "bottom-end",
              popoverWidth: c = "dropdown",
              popoverMaxHeight: l,
              ...d
            } = e,
            [_, p] = (0, r.useState)(null),
            [m, f] = (0, r.useState)(null),
            h = (0, r.useMemo)(
              () =>
                n.rgOptions.findIndex((e) =>
                  n.multiselect
                    ? n.selectedValue.includes(e)
                    : e === n.selectedValue,
                ),
              [n.selectedValue, n.rgOptions, n.multiselect],
            ),
            g = (0, r.useRef)(null),
            x = {
              ...n,
              ...d,
              focusedValue: _,
              onFocusChange: p,
              refPopover: g,
              setOpen: (e) => {
                e && p(n.multiselect ? n.selectedValue[0] : n.selectedValue),
                  n.setOpen(e);
              },
              focusedIndex: m,
              onFocusedIndexChange: f,
            },
            j = (function (e) {
              const {
                open: t,
                onOpenChange: n,
                activeIndex: i,
                setActiveIndex: o,
                selectedIndex: c,
                setSelectedIndex: l,
                interactions: d = {},
                role: _,
                placement: p,
              } = e;
              let m = t;
              const f = (0, s.we)({
                  open: m,
                  onOpenChange: n,
                  middleware: (0, u.p)(e),
                  whileElementsMounted: a.ll,
                  placement: p && "object" == typeof p ? p.initial : p,
                  strategy: "fixed",
                  platform: {
                    ...a.iD,
                    getOffsetParent: (e) =>
                      e?.ownerDocument?.defaultView ?? window,
                  },
                }),
                h = (0, s.kp)(f.context, { enabled: !!d.click }),
                g = (0, s.iQ)(f.context, { enabled: !!d.focus }),
                x = (0, s.s9)(f.context),
                I = (0, r.useRef)([]),
                j = (0, s.C1)(f.context, {
                  listRef: I,
                  activeIndex: i,
                  selectedIndex: c,
                  onNavigate: o,
                  virtual: !!d.virtualItemFocus,
                  loop: !0,
                  focusItemOnOpen: !1,
                }),
                C = (0, r.useRef)([]),
                L = (0, r.useRef)(!1),
                v = (0, s.lY)(f.context, {
                  enabled: !!d.typeahead,
                  listRef: C,
                  activeIndex: i,
                  selectedIndex: c,
                  onMatch: m ? o : l,
                  onTypingChange: (e) => (L.current = e),
                }),
                y = (0, s.It)(f.context, { role: _ }),
                {
                  getFloatingProps: b,
                  getReferenceProps: N,
                  getItemProps: w,
                } = (0, s.bv)([y, h, g, x, j, v]);
              return {
                floating: f,
                getFloatingProps: b,
                getReferenceProps: N,
                getItemProps: w,
                open: m,
                activeIndex: i,
                selectedIndex: c,
                setSelectedIndex: l,
                elementsRef: I,
                labelsRef: C,
                typingRef: L,
                initialFocus: d.virtualItemFocus ? -1 : void 0,
              };
            })({
              open: n.bOpen,
              onOpenChange: n.setOpen,
              width: c,
              maxHeight: l,
              placement: o,
              selectedIndex: h,
              setSelectedIndex: (e) => n.onItemSelectionChange(n.rgOptions[e]),
              activeIndex: m,
              setActiveIndex: f,
              gutter: "4",
              interactions: { click: !0, typeahead: !0 },
              role: "select",
              scroll: !0,
            });
          return (0, i.jsx)(B.Provider, {
            value: x,
            children: (0, i.jsx)(I, { state: j, children: t }),
          });
        },
        Option: function (e) {
          const { value: t, children: n, disabled: r, ...s } = e,
            {
              onItemSelectionChange: a,
              multiselect: o,
              selectedValue: c,
              maxSelected: l,
            } = k("<SelectTrigger>"),
            d = "string" == typeof t ? t : void 0;
          let u = !1,
            _ = !1;
          o
            ? ((u = Array.isArray(c) && c.includes(t)),
              (_ = !!l && Array.isArray(c) && c.length >= l))
            : (u = t === c);
          const p = r || (_ && !u);
          return (0, i.jsxs)(L, {
            label: d,
            onSelect: () => a(t),
            selected: u,
            disabled: p,
            ...s,
            children: [
              o &&
                (0, i.jsxs)(S.s, {
                  gap: "2",
                  align: "center",
                  children: [
                    (0, i.jsx)(E.S, { checked: u, variant: "dark" }),
                    n,
                  ],
                }),
              !o && n,
            ],
          });
        },
        Options: function (e) {
          const { refPopover: t } = k("<Select.Options>");
          return (0, i.jsx)(C, { ref: t, children: e.children });
        },
        Trigger: function (e) {
          const { children: t, render: n } = e,
            {
              bOpen: r,
              setOpen: s,
              selectedValue: a,
              variant: o,
              size: l,
              radius: d,
              status: u,
              rgOptions: _,
              multiselect: p,
              onClear: m,
              focusedValue: f,
              onFocusChange: h,
              onSelectionChange: g,
              clearable: x,
              focusedIndex: I,
              onItemSelectionChange: C,
              onFocusedIndexChange: L,
              refPopover: b,
              placeholder: N,
              maxSelected: O,
              ...E
            } = k("<SelectTrigger>"),
            S = {
              tabIndex: 0,
              role: "combobox",
              onClick: () => s(!r),
              children: t,
            },
            R = p ? Array.isArray(a) && a.length > 0 : !!a,
            P =
              R && x
                ? (0, i.jsx)(w, { onClick: m, cursor: "pointer", hitSlop: !0 })
                : (0, i.jsx)(y.V, {}),
            F = (0, z.f)("Select", o),
            A = (0, i.jsx)(v.j, {
              afterContent: P,
              variant: F,
              size: l,
              radius: d,
              status: u,
              hasValue: R,
              tabIndex: 0,
              cursor: "pointer",
              ...E,
            }),
            W = (0, c.Q)(n, A, S, void 0);
          return (0, i.jsx)(j, { children: W });
        },
        Value: function (e) {
          return (0, i.jsx)(b.EY, {
            weight: "medium",
            truncate: !0,
            contrast: "title",
            children: e.children,
          });
        },
        Placeholder: function (e) {
          return (0, i.jsx)(b.EY, {
            contrast: "description",
            truncate: !0,
            children: e.children,
          });
        },
      };
      function A(e) {
        return "string" == typeof e
          ? e
          : "number" == typeof e
            ? e.toString()
            : (console.error(
                "Could not use default option labeler on Select option value. Custom labeler requried",
                e,
              ),
              "");
      }
      const W = Object.assign(function (e) {
        const {
            selectedValue: t,
            onSelectionChange: n,
            options: r,
            placeholder: s,
            getOptionLabel: a = A,
            ...o
          } = e,
          c = R({
            onSelectionChange: n,
            selectedValue: t,
            rgOptions: r,
            placeholder: s,
          }),
          l = null != t,
          d = l ? a(t) : "";
        return (0, i.jsxs)(W.Root, {
          state: c,
          ...o,
          children: [
            (0, i.jsxs)(W.Trigger, {
              children: [
                l && (0, i.jsx)(W.Value, { children: d }),
                !l && (0, i.jsx)(W.Placeholder, { children: s }),
              ],
            }),
            (0, i.jsx)(W.Options, {
              children: c.rgOptions.map((e, t) =>
                (0, i.jsx)(W.Option, { value: e, children: a(e) }, t),
              ),
            }),
          ],
        });
      }, F);
      const Q = F;
      const D = Object.assign(function (e) {
          const {
              selectedValue: t,
              onSelectionChange: n,
              options: r,
              placeholder: s,
              getOptionLabel: a = A,
              maxSelected: o,
              ...c
            } = e,
            l = (function (e) {
              return P(e, !0);
            })({
              onSelectionChange: n,
              selectedValue: t,
              rgOptions: r,
              placeholder: s,
              maxSelected: o,
            }),
            d = Array.isArray(t) && t.length > 0;
          let u = "";
          if (d) {
            const e = t.map((e) => a(e));
            u =
              "ListFormat" in Intl
                ? new Intl.ListFormat(
                    (0, O.A)().languages[0].strISOCode,
                  ).format(e)
                : e.join(", ");
          }
          return (0, i.jsxs)(D.Root, {
            state: l,
            ...c,
            children: [
              (0, i.jsxs)(D.Trigger, {
                children: [
                  d && (0, i.jsx)(D.Value, { children: u }),
                  !d && (0, i.jsx)(D.Placeholder, { children: s }),
                ],
              }),
              (0, i.jsx)(D.Options, {
                children: l.rgOptions.map((e, t) =>
                  (0, i.jsx)(D.Option, { value: e, children: a(e) }, t),
                ),
              }),
            ],
          });
        }, Q),
        B = (0, r.createContext)(null);
      function k(e) {
        const t = (0, r.useContext)(B);
        return t || console.error(`${e} must be used within a <Select>!`), t;
      }
    },
    90485: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => f, t: () => m });
      var i = n(56545),
        r = n(3108),
        s = n(71430),
        a = n(23809),
        o = n(75233),
        c = n(51614),
        l = n(79443),
        d = n(65244),
        u = n(30709),
        _ = n(93676),
        p = n(99838);
      function m(e) {
        const t = (0, a.KV)(),
          n = (0, o.jE)(),
          d = (0, u.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t, n) {
              if ((0, l.c2)(t)) {
                const t = i.w.Init(r.tj);
                t.Body().set_line_item_id(n);
                const s = await r.t8.RemoveItemFromCart(e, t);
                return (0, p.WZ)(), s.Body().toObject();
              }
              {
                const r = i.w.Init(s.VJ);
                r.Body().set_gidlineitems([n]),
                  r.Body().set_gidshoppingcart(t.gid);
                const a = await s.Q2.RemoveLineItems(e, r);
                return (0, p.WZ)(), a.Body().toObject();
              }
            })(t, d, e),
          onSuccess: (e) => {
            "cart" in e ? (0, _.LN)(n, d, e.cart) : (0, _.Cd)(n, d);
          },
        });
      }
      function f() {
        const e = (0, a.KV)(),
          t = (0, o.jE)(),
          n = (0, u.j4)();
        return (0, c.n)({
          mutationFn: async () =>
            await (async function (e, t) {
              if ((0, l.c2)(t)) {
                const t = i.w.Init(r.HK);
                return (await r.t8.DeleteCart(e, t)).BSuccess();
              }
              {
                const n = await (0, d.d0)(e, t);
                if (n && n.line_items && n.line_items.length) {
                  const r = i.w.Init(s.VJ);
                  return (
                    r
                      .Body()
                      .set_gidlineitems(
                        n.line_items.map(({ line_item_id: e }) => e),
                      ),
                    r.Body().set_gidshoppingcart(t.gid),
                    (await s.Q2.RemoveLineItems(e, r)).BSuccess()
                  );
                }
                return !1;
              }
            })(e, n),
          onSuccess: () => (0, _.Cd)(t, n),
        });
      }
    },
    13904: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => m });
      var i = n(56545),
        r = n(3108),
        s = n(16909),
        a = n(66418),
        o = n(23809),
        c = n(75233),
        l = n(51614),
        d = n(30709),
        u = n(93676),
        _ = n(79443),
        p = n(71430);
      function m(e) {
        const t = (0, d.j4)(),
          n = (0, o.KV)(),
          m = (0, c.jE)(),
          f = (0, u.GO)(t);
        return (0, l.n)({
          mutationFn: (e) =>
            (async function (e, t, n, o, c, l) {
              if ((0, _.c2)(t)) {
                const t = i.w.Init(r.Bk);
                t.Body().set_line_item_id(n),
                  t.Body().set_user_country(a.iA.country_code),
                  c && t.Body().set_gift_info(s.$z.fromObject(c)),
                  o && t.Body().set_flags(r.Eo.fromObject(o)),
                  l && t.Body().set_apply_gidcoupon(l);
                const d = await r.t8.ModifyLineItem(e, t);
                return (
                  d.BSuccess() ||
                    console.warn(
                      `Failed to update gift info: ${d.GetEResult()}`,
                    ),
                  [d.GetEResult(), d.Body().toObject()]
                );
              }
              {
                const r = i.w.Init(p.ic);
                r.Body().set_gidlineitem(n),
                  r.Body().set_gidshoppingcart(t.gid),
                  c
                    ? r.Body().set_gift_info(s.$z.fromObject(c))
                    : o?.is_gift &&
                      r
                        .Body()
                        .set_gift_info(
                          s.$z.fromObject({
                            accountid_giftee: 0,
                            email_giftee: "",
                          }),
                        );
                const a = await p.Q2.ModifyLineItem(e, r);
                return (
                  a.BSuccess() ||
                    console.warn(
                      `Failed to update gift info in anonymous cart: ${a.GetEResult()}`,
                    ),
                  a.Body().toObject()
                );
              }
            })(n, t, e.lineItemID, e.lineItemFlags, e.giftInfo, e.gidCoupon),
          onMutate: async (e) => {
            await m.cancelQueries({ queryKey: f });
            const t = m.getQueryData(f);
            return (
              m.setQueryData(f, (t) => ({
                ...(t ?? {}),
                line_items:
                  t?.line_items?.map((t) =>
                    t.line_item_id !== e.lineItemID
                      ? t
                      : {
                          ...t,
                          flags: e.lineItemFlags || t.flags,
                          gift_info: e.giftInfo || t.gift_info,
                        },
                  ) ?? [],
              })),
              { previousCart: t }
            );
          },
          onSuccess: (e) => {
            "cart" in e ? (0, u.LN)(m, t, e.cart) : (0, u.Cd)(m, t);
          },
          onError: (e, t, n) => {
            n?.previousCart && m.setQueryData(f, n.previousCart);
          },
        });
      }
    },
    27498: (e, t, n) => {
      "use strict";
      n.d(t, { Ez: () => c, fg: () => l, iZ: () => d });
      var i = n(7850),
        r = n(30709),
        s = n(90626);
      const a = s.createContext({ step: "initial", setStep: () => {} });
      function o() {
        return (0, s.useContext)(a);
      }
      function c() {
        const e = o();
        return [e.step, e.setStep];
      }
      function l() {
        const e = o();
        return [e.cartWideGiftInfo, e.onCartWideGiftInfoChange];
      }
      function d(e) {
        const {
            step: t,
            setStep: n,
            cartID: o,
            cartWideGiftInfo: c,
            onCartWideGiftInfoChange: l,
            children: d,
          } = e,
          u = s.useMemo(
            () => ({
              step: t,
              setStep: n,
              cartWideGiftInfo: c,
              onCartWideGiftInfoChange: l,
            }),
            [t, n, c, l],
          );
        return (0, i.jsx)(a.Provider, {
          value: u,
          children: (0, i.jsx)(r.h3, { cartID: o, children: d }),
        });
      }
    },
    42798: (e, t, n) => {
      "use strict";
      n.d(t, {
        LP: () => C,
        WA: () => i,
        Yz: () => y,
        ZZ: () => j,
        wW: () => I,
      });
      var i,
        r = n(7850),
        s = n(93332),
        a = n(16909),
        o = n(66418),
        c = n(29233),
        l = n(39777),
        d = n(52541),
        u = n(64238),
        _ = n.n(u),
        p = n(90626),
        m = n(21782),
        f = n(85906),
        h = n(60097),
        g = n(70343);
      !(function (e) {
        (e[(e.k_ECartDisplayType_Unknown = 0)] = "k_ECartDisplayType_Unknown"),
          (e[(e.k_ECartDisplayType_Modal = 1)] = "k_ECartDisplayType_Modal"),
          (e[(e.k_ECartDisplayType_FullPage = 2)] =
            "k_ECartDisplayType_FullPage");
      })(i || (i = {}));
      const x = p.createContext({
        rgCartLevelNotices: [],
        mapValidateNoticesToFootnote: new Map(),
        eDisplayType: i.k_ECartDisplayType_Unknown,
      });
      function I(e) {
        const { validateCart: t, eDisplayType: n, children: i } = e,
          s = (function (e, t) {
            return p.useMemo(() => {
              let n = new Map(),
                i = new Map(),
                r = 1;
              const s = (e, t) => {
                i.has(e) || i.set(e, { index: r++, footnote_text: t });
              };
              let o = !1;
              e?.cart_items?.forEach((e) => {
                let t = !!e.gift_info?.accountid_giftee;
                e.errors && (o = !0),
                  e.errors?.duplicate_appids_in_cart?.length &&
                    s(
                      a.WN.ZK,
                      f.Q8.Localize("#Cart_Error_DuplicateApps_FootNote"),
                    ),
                  e.errors?.owned_appids?.length &&
                    (e.errors?.has_existing_billing_agreement
                      ? s(
                          a.WN.Gy,
                          f.Q8.Localize(
                            "#Cart_Error_ExistingBillingAgreement_FootNote",
                          ),
                        )
                      : s(
                          a.WN.kj,
                          f.Q8.Localize(
                            t
                              ? "#Cart_Error_AlreadyOwned_GiftFootNote"
                              : "#Cart_Error_AlreadyOwned_FootNote",
                          ),
                        )),
                  e.errors?.unavailable_in_country &&
                    s(
                      a.WN.Hp,
                      f.Q8.Localize("#Cart_Error_UnavailableCountry_FootNote"),
                    ),
                  e.errors?.adult_content_restricted &&
                    s(
                      a.WN.C4,
                      f.Q8.Localize(
                        "#Cart_Error_AdultContentRestricted_FootNote",
                      ),
                    ),
                  e.errors?.commercial_license_restricted &&
                    s(
                      a.WN.yQ,
                      f.Q8.Localize(
                        "#Cart_Error_CommercialLicenseRestricted_FootNote",
                      ),
                    ),
                  e.errors?.missing_must_own_appids &&
                    s(
                      a.WN.VL,
                      t
                        ? f.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNoteGift",
                          )
                        : f.Q8.Localize(
                            "#Cart_Error_MissingMustOwnApps_FootNote",
                          ),
                    ),
                  e.warnings?.appids_in_mastersub?.length &&
                    s(
                      a.WN.Q7,
                      f.Q8.Localize("#Cart_Error_MasterSubscription_FootNote"),
                    ),
                  e.warnings?.price_has_changed &&
                    n.set(
                      a.WN.vY,
                      f.Q8.Localize("#Cart_Warning_PriceChange_FootNote"),
                    );
              });
              let c = Array.from(n.values());
              return (
                o && c.unshift(f.Q8.Localize("#Cart_CartLevelErrorNotice")),
                {
                  rgCartLevelNotices: c,
                  mapValidateNoticesToFootnote: i,
                  eDisplayType: t,
                }
              );
            }, [e, t]);
          })(t, n);
        return (0, r.jsx)(x.Provider, { value: s, children: i });
      }
      function j() {
        const { rgCartLevelNotices: e } = p.useContext(x);
        return e && e.length
          ? 1 == e.length
            ? (0, r.jsx)("div", {
                className: h.HeaderNotices,
                children: f.Q8.Localize("#Cart_CartLevelErrorFormat", e[0]),
              })
            : (0, r.jsxs)("div", {
                className: h.HeaderNotices,
                children: [
                  (0, r.jsx)("div", {
                    children: f.Q8.Localize("#Cart_CartLevelErrorMultiple"),
                  }),
                  (0, r.jsx)("ul", {
                    children: e.map((e, t) =>
                      (0, r.jsx)("li", { children: e }, t),
                    ),
                  }),
                ],
              })
          : null;
      }
      function C(e) {
        const { validateCart: t } = e,
          { mapValidateNoticesToFootnote: n } = p.useContext(x);
        if (!n || !n.size) return null;
        const i = (t?.cart_items || []).every((e) => !e.errors),
          s = i
            ? f.Q8.Localize("#Cart_FooterNoticeHeader_Warning")
            : f.Q8.Localize("#Cart_FooterNoticeHeader_MustFix"),
          a = _()(h.FooterNoticesHeader, !i && h.MustFix);
        return (0, r.jsxs)("div", {
          children: [
            (0, r.jsx)("div", { className: a, children: s }),
            Array.from(n).map(([e, t]) =>
              (0, r.jsx)(L, { notice: t }, t.index),
            ),
          ],
        });
      }
      function L(e) {
        const { notice: t } = e;
        return (0, r.jsxs)("div", {
          className: h.FooterNotice,
          children: [
            (0, r.jsx)("div", {
              className: h.NoticeIndex,
              children: (0, r.jsx)("sup", { children: t.index }),
            }),
            (0, r.jsx)("div", { children: t.footnote_text }),
          ],
        });
      }
      function v() {
        const e = p.useContext(x);
        return e?.eDisplayType ?? i.k_ECartDisplayType_Unknown;
      }
      function y(e) {
        const { lineItem: t } = e,
          n = v();
        let s = [],
          o = !!t.gift_info?.accountid_giftee;
        return (
          t.errors?.duplicate_appids_in_cart?.length &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.ZK,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_DuplicateApps_LineItem",
                  ),
                  appids: t.errors.duplicate_appids_in_cart,
                },
                "duplicate_appids",
              ),
            ),
          s.push((0, r.jsx)(S, { lineItem: t }, "owned_apps")),
          t.errors?.unavailable_in_country &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.Hp,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_UnavailableCountry_LineItem",
                  ),
                },
                "unavailable_in_country",
              ),
            ),
          t.errors?.adult_content_restricted &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.C4,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_AdultContentRestricted_LineItem",
                  ),
                },
                "adult_content_restricted",
              ),
            ),
          t.errors?.commercial_license_restricted &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.yQ,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_CommercialLicenseRestricted_LineItem",
                  ),
                },
                "commercial_license_restricted",
              ),
            ),
          t.errors?.gift_not_valid_for_recipient_region &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN._o,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_GiftRecipientInvalid",
                  ),
                },
                "gift_recipient_invalid",
              ),
            ),
          s.push((0, r.jsx)(z, { lineItem: t }, "coupon_notices")),
          t.errors?.too_many_in_cart &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.YF,
                  notice_text: f.Q8.Localize("#Cart_Error_TooManyInCart"),
                },
                "too_many_in_cart",
              ),
            ),
          t.errors?.missing_must_own_appids?.length &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.VL,
                  notice_text: o
                    ? f.Q8.Localize(
                        "#Cart_Error_MissingMustOwnApps_GiftLineItem",
                      )
                    : f.Q8.Localize("#Cart_Error_MissingMustOwnApps_LineItem"),
                  appids: t.errors.missing_must_own_appids,
                },
                "missing_must_own_appids",
              ),
            ),
          t.warnings?.appids_in_mastersub?.length &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.Q7,
                  notice_text: f.Q8.Localize(
                    "#Cart_Error_MasterSubscription_LineItem",
                  ),
                  appids: t.warnings.appids_in_mastersub.flatMap((e) =>
                    e.cart_appid ? [e.cart_appid] : [],
                  ),
                },
                "appids_in_mastersub",
              ),
            ),
          t.warnings?.owned_appids?.length &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.fZ,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_AlreadyOwned_LineItem",
                  ),
                  appids: t.warnings.owned_appids,
                },
                "owned_appids",
              ),
            ),
          t.warnings?.owned_appids_extra_copy?.length &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.Vx,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_ExtraCopies_LineItem",
                  ),
                  appids: t.warnings.owned_appids_extra_copy,
                },
                "owned_appids_extra_copy",
              ),
            ),
          t.warnings?.price_has_changed &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.vY,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_PriceChange_LineItem",
                  ),
                },
                "price_has_changed",
              ),
            ),
          t.warnings?.non_refundable &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.YQ,
                  notice_text: f.Q8.Localize("#Cart_Warning_NoRefund_LineItem"),
                },
                "non_refundable",
              ),
            ),
          t.warnings?.gift_recipient_higher_price &&
            s.push(
              (0, r.jsx)(
                b,
                {
                  purchase_state: a.WN.j6,
                  notice_text: f.Q8.Localize(
                    "#Cart_Warning_RecipientHigherPrice",
                  ),
                },
                "gift_recipient_higher_price",
              ),
            ),
          s.push((0, r.jsx)(O, { lineItem: t }, "available_cheaper")),
          o &&
            n !== i.k_ECartDisplayType_FullPage &&
            s.push(
              (0, r.jsx)(
                E,
                { nGifteeAccountID: t.gift_info.accountid_giftee },
                "non_friend_gift",
              ),
            ),
          s
        );
      }
      function b(e) {
        const { purchase_state: t, notice_text: n, appids: s } = e,
          a = (function (e) {
            const t = p.useContext(x);
            return t?.mapValidateNoticesToFootnote.get(e)?.index;
          })(t),
          o = v() === i.k_ECartDisplayType_FullPage && !!a;
        return (0, r.jsxs)(g.dp, {
          children: [
            n,
            o && (0, r.jsx)("sup", { children: a }),
            " ",
            (0, r.jsx)(N, { rgAppIDs: s ?? [] }),
          ],
        });
      }
      function N(e) {
        const { rgAppIDs: t } = e;
        return t && 0 != t.length
          ? t.map((e, n) =>
              (0, r.jsx)(w, { appid: e, last: n >= t.length - 1 }, `${e}_${n}`),
            )
          : null;
      }
      function w(e) {
        const { appid: t, last: n } = e,
          { data: i } = (0, l.J$)({ appid: t });
        return i
          ? (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(m.y, { appid: t, name_override: i.name }),
                !n && (0, r.jsx)(r.Fragment, { children: ", " }),
              ],
            })
          : null;
      }
      function O(e) {
        const { lineItem: t } = e,
          { data: n } = (0, l.mr)(t.item_id),
          { data: i } = (0, l.EO)(t.item_id);
        if (!!(!!t.gift_info?.accountid_giftee || !n || !i || (0, d.vk)(n, i)))
          return null;
        const s = i.packageid
          ? { packageid: i.packageid }
          : { bundleid: i.bundleid };
        return (0, r.jsx)(g.dp, {
          children: f.Q8.LocalizeReact(
            "#Cart_Warning_AvailableAtALowerPrice",
            (0, r.jsx)(m.y, { ...s, name_override: i.purchase_option_name }),
          ),
        });
      }
      function E(e) {
        const { nGifteeAccountID: t } = e,
          n = c.b2.InitFromAccountID(t, o.TS.EUNIVERSE).ConvertTo64BitString(),
          { data: i } = (0, s.Dv)();
        return p.useMemo(() => !i || i.includes(n), [i, n]) || !o.iA.logged_in
          ? null
          : (0, r.jsx)(g.dp, {
              children: f.Q8.Localize("#Cart_Warning_GiftToNonFriend"),
            });
      }
      function S(e) {
        const { lineItem: t } = e;
        if (!t.errors?.owned_appids?.length) return null;
        let n = !!t.gift_info?.accountid_giftee;
        if (t.errors?.has_existing_billing_agreement)
          return (0, r.jsx)(b, {
            purchase_state: a.WN.Gy,
            notice_text: f.Q8.Localize("#Cart_Error_ExistingBillingAgreement"),
          });
        {
          const e = (t.store_item?.included_appids?.length ?? 0) > 1;
          let i = f.Q8.Localize(
            n
              ? "#Cart_Error_AlreadyOwned_GiftLineItem_Game"
              : "#Cart_Error_AlreadyOwned_LineItem_Game",
          );
          return (
            e &&
              (i = f.Q8.Localize(
                n
                  ? "#Cart_Error_AlreadyOwned_GiftLineItem"
                  : "#Cart_Error_AlreadyOwned_LineItem",
              )),
            (0, r.jsx)(b, {
              purchase_state: a.WN.kj,
              notice_text: i,
              appids: e ? t.errors.owned_appids : void 0,
            })
          );
        }
      }
      function z(e) {
        const { lineItem: t } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            t.errors?.coupon_exclusive_promo &&
              (0, r.jsx)(b, {
                purchase_state: a.WN.rp,
                notice_text: f.Q8.Localize(
                  "#Cart_Error_CouponIsExclusivePromo",
                ),
              }),
            t.errors?.invalid_coupon &&
              (0, r.jsx)(b, {
                purchase_state: a.WN.p_,
                notice_text: f.Q8.Localize("#Cart_Error_CouponIsInvalid"),
              }),
            t.errors?.invalid_coupon_for_item &&
              (0, r.jsx)(b, {
                purchase_state: a.WN.VJ,
                notice_text: f.Q8.Localize(
                  "#Cart_Error_CouponIsInvalidForItem",
                ),
              }),
          ],
        });
      }
    },
    21782: (e, t, n) => {
      "use strict";
      n.d(t, { y: () => l });
      var i = n(7850),
        r = n(29008),
        s = n(39777),
        a = n(64201),
        o = n.n(a);
      const c = {
        direction: "right",
        style: { width: "320px", height: (125 / 184) * 320 + "px" },
      };
      function l(e) {
        const { name_override: t, ...n } = e,
          { data: a } = (0, s.J$)(t ? void 0 : n),
          l = t ?? a?.name;
        return (0, i.jsx)(r.Q, {
          id: n,
          hoverProps: c,
          name: l,
          className: o().LineItemStoreHover,
          bShowWishlistButton: !1,
          children: l,
        });
      }
    },
    46988: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => k });
      var i = n(7850),
        r = n(14773),
        s = n(18519),
        a = n(76217),
        o = n(81393),
        c = n(3108),
        l = n(95578),
        d = n(66418),
        u = n(40895),
        _ = n(1090),
        p = n(69345),
        m = n(51622),
        f = n(5309),
        h = n(39777),
        g = n(52541),
        x = n(14987),
        I = n(9006),
        j = n(13327),
        C = n(54806),
        L = n(64238),
        v = n.n(L),
        y = n(90626),
        b = n(84811),
        N = n(70809),
        w = n(26514),
        O = n(90485),
        E = n(13904),
        S = n(79443),
        z = n(27498),
        R = n(85906),
        P = n(30709),
        F = n(42798),
        A = n(21782),
        W = n(86711),
        Q = n.n(W),
        D = n(70343),
        B = n(32754);
      function k(e) {
        const {
          lineItems: t,
          cartValidation: n,
          LineItemContainer: r = H,
          scrollable: s = !1,
        } = e;
        if (!t.length) return (0, i.jsx)(V, {});
        const a = n?.cart_items
          ? n.cart_items.reduce((e, t) => ((e[t.line_item_id] = t), e), {})
          : {};
        return (0, i.jsx)(D.uO, {
          scrollable: s,
          children: t.map((e, t) =>
            e
              ? (0, i.jsx)(
                  b.tH,
                  {
                    fallback: (t) => (0, i.jsx)(M, { item: e, error: t }),
                    children: (0, i.jsx)(T, {
                      item: e,
                      validatedItem: a[e.line_item_id],
                      LineItemContainer: r,
                    }),
                  },
                  e.line_item_id || t,
                )
              : (0, i.jsx)(D.vF, {}, t),
          ),
        });
      }
      function T(e) {
        const { item: t, validatedItem: n, LineItemContainer: r } = e,
          s = (function (e) {
            const t = e.type;
            switch (t) {
              case c.KW.$B:
                return { packageid: e.packageid };
              case c.KW.XY:
                return { bundleid: e.bundleid };
              case c.KW.vC:
                return;
              default:
                (0, o.z_)(t, `Unhandled type: ${t}`);
            }
            return;
          })(t);
        if (!s) throw `Unknown line item type (${t.type})`;
        const { data: a } = (0, h.J$)(s),
          { data: l } = (0, h.U2)(s),
          { data: d } = (0, h.mr)(s),
          u = l ? (0, g.Jz)(l) : s;
        return (
          (0, h.lv)(u),
          (0, h.qI)(u),
          !a || (a.visible && null !== d)
            ? a && l && d && n
              ? (0, i.jsx)(G, {
                  lineItem: t,
                  validatedItem: n,
                  storeItem: a,
                  displayItem: l,
                  purchaseOption: d,
                  LineItemContainer: r,
                })
              : (0, i.jsx)(D.vF, {})
            : (0, i.jsx)(U, {
                lineItemID: t.line_item_id,
                validatedItem: n,
                storeItem: a,
              })
        );
      }
      function M(e) {
        const { item: t, error: n } = e,
          r = (0, O.t)(t.line_item_id);
        return (0, i.jsxs)(D.Rz, {
          className: Q().ErrorLineItem,
          children: [
            (0, i.jsxs)("div", {
              className: Q().Left,
              children: [
                (0, i.jsx)("div", {
                  className: Q().Error,
                  children: R.Q8.Localize("#Cart_LineItem_ErrorBoundary"),
                }),
                (0, i.jsx)("div", {
                  className: Q().Muted,
                  children: n.message,
                }),
              ],
            }),
            (0, i.jsx)(a.Z, {
              onActivate: () => r.mutate(),
              className: Q().RemoveButton,
              children: R.Q8.Localize("#Cart_Remove"),
            }),
          ],
        });
      }
      function V() {
        return (0, i.jsx)(D.Rz, {
          className: Q().ErrorLineItem,
          children: (0, i.jsx)("div", {
            className: Q().Left,
            children: (0, i.jsx)("div", {
              className: Q().LineItemTitle,
              children: R.Q8.Localize("#Cart_Empty"),
            }),
          }),
        });
      }
      function G(e) {
        const {
            storeItem: t,
            displayItem: n,
            lineItem: r,
            purchaseOption: s,
            validatedItem: o,
            LineItemContainer: c,
          } = e,
          l = r.line_item_id,
          d = (0, g.Jz)(t),
          u = (0, O.t)(l),
          _ = u.isPending || u.isSuccess,
          { data: f } = (0, h.by)(d),
          I = (0, x._Z)(d),
          { data: C, isLoading: L } = (0, j.Pt)(),
          b = y.useMemo(() => I.filter((e) => C?.has(e)), [I, C]),
          N = y.useId();
        if (L) return (0, i.jsx)(D.vF, {});
        const w = r.flags?.is_gift,
          E = I.length > 0 && b.length === I.length,
          S = !w && b.length > 0 && !E;
        return (0, i.jsxs)(c, {
          lineItem: r,
          storeItem: t,
          validatedItem: o,
          children: [
            _ && (0, i.jsx)(D.UD, {}),
            (0, i.jsxs)(a.Z, {
              className: v()(Q().InnerLineItemCtn, _ && Q().PendingLineItem),
              "flow-children": "row",
              children: [
                (0, i.jsx)("div", {
                  className: v()(Q().LineItemColumn, Q().LineItemCapsule),
                  children: (0, i.jsx)(p.p, {
                    storeItem: n,
                    feature: "cart-items",
                    noImpressionTracking: !0,
                    className: Q().ImageLink,
                    children: (0, i.jsx)(Z, {
                      storeItem: n,
                      alt: t.name,
                      blurred: !!o.errors?.adult_content_restricted,
                    }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: Q().LineItemDetailsCtn,
                  children: [
                    (0, i.jsx)(D.UW, {
                      className: Q().LineItemDetailsRowTop,
                      children: (0, i.jsx)("div", {
                        className: Q().LineItemTitle,
                        id: N,
                        children: t.name,
                      }),
                    }),
                    f?.is_coming_soon && (0, i.jsx)(q, { storeItem: t }),
                    (0, i.jsxs)(K, {
                      validatedItem: o,
                      children: [
                        (0, i.jsx)($, { storeItem: t, purchaseOption: s }),
                        (0, i.jsx)(ee, { purchaseOption: s }),
                        (0, i.jsx)(ne, { storeItem: t, purchaseOption: s }),
                      ],
                    }),
                    (0, i.jsx)(se, { validatedItem: o }),
                    S && (0, i.jsx)(ae, { appids: b }),
                    (0, i.jsxs)(D.UW, {
                      className: Q().LineItemSpaceBetween,
                      children: [
                        (0, i.jsx)("div", {
                          className: v()(Q().LineItemCol, Q().PlatformIcons),
                          children: (0, i.jsx)(m.Dm, { id: (0, g.Jz)(n) }),
                        }),
                        (0, i.jsx)(X, { purchaseOption: s, validatedItem: o }),
                      ],
                    }),
                    (0, i.jsx)(Y, {
                      lineItem: r,
                      purchaseOption: s,
                      validatedItem: o,
                      rgAppIDs: I,
                      bAllAppsPrivate: E,
                      fnRemoveLineItem: u.mutate,
                      accessibilityId: N,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function U(e) {
        const { lineItemID: t, validatedItem: n, storeItem: r } = e,
          s = (0, O.t)(t),
          o = s.isPending;
        return (0, i.jsxs)(D.Rz, {
          placeholder: !0,
          children: [
            o && (0, i.jsx)(D.UD, {}),
            (0, i.jsxs)("div", {
              className: v()(Q().InnerLineItemCtn, o && Q().PendingLineItem),
              children: [
                (0, i.jsx)("div", {
                  className: v()(Q().LineItemColumn, Q().LineItemCapsule),
                  children: (0, i.jsx)(p.p, {
                    storeItem: r,
                    noImpressionTracking: !0,
                    children: (0, i.jsx)(Z, { storeItem: r }),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: Q().LineItemDetailsCtn,
                  children: [
                    (0, i.jsx)(D.UW, {
                      className: Q().LineItemDetailsRowTop,
                      children: (0, i.jsx)("div", {
                        className: Q().LineItemTitle,
                        children: r?.name,
                      }),
                    }),
                    !!n && (0, i.jsx)(K, { validatedItem: n }),
                    (0, i.jsx)(D.UW, {
                      className: Q().LineItemSpaceBetween,
                      children: (0, i.jsx)(a.Z, {
                        onActivate: () => s.mutate(),
                        className: Q().RemoveLineItem,
                        children: R.Q8.Localize("#Cart_Remove"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Z(e) {
        const { storeItem: t, alt: n, blurred: r } = e,
          { data: s } = (0, h.lv)((0, g.Jz)(t));
        let a = `${d.TS.STORE_BASE_URL}public/images/checkout/Cart_generic_header_logo.png`;
        return (
          s?.header
            ? (a =
                d.TS.STORE_ITEM_BASE_URL +
                s.asset_url_format.replace("${FILENAME}", s.header))
            : s?.small_capsule &&
              (a =
                d.TS.STORE_ITEM_BASE_URL +
                s.asset_url_format.replace("${FILENAME}", s.small_capsule)),
          (0, i.jsx)("img", {
            alt: n ?? t.name,
            className: r ? Q().HeaderImgBlurred : Q().HeaderImg,
            src: a,
          })
        );
      }
      function H(e) {
        return (0, i.jsx)(a.Z, {
          children: (0, i.jsx)(D.Rz, { children: e.children }),
        });
      }
      function K(e) {
        const { validatedItem: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: Q().LineItemSpaceBetween,
          children: [(0, i.jsx)(F.Yz, { lineItem: t }), n],
        });
      }
      function q(e) {
        const { storeItem: t } = e,
          { data: n } = (0, h.by)((0, g.Jz)(t)),
          r = (0, f.VM)(n);
        if (!n) return null;
        let s = R.Q8.Localize("#Cart_ComingSoon", r);
        return (
          ["text_tba", "text_comingsoon"].includes(n.coming_soon_display) &&
            (s = r),
          (0, i.jsx)(D.dp, { children: s })
        );
      }
      function X(e) {
        const { purchaseOption: t, validatedItem: n } = e;
        let r = t?.formatted_original_price,
          s = t?.formatted_final_price,
          a = t?.discount_pct;
        const o = n.subtotal?.amount_in_cents !== t?.final_price_in_cents;
        return (
          n.original_price &&
            n.subtotal &&
            o &&
            ((r = n.original_price.formatted_amount),
            (s = n.subtotal.formatted_amount),
            (a = (0, D.dR)(n))),
          (0, i.jsx)("div", {
            className: Q().LineItemRightCol,
            children: (0, i.jsx)(u.kb, {
              className: Q().PriceWidget,
              formatted_orig_price: r,
              formatted_final_price: s,
              discount_percent: a,
              bHideDiscountPercentForCompliance:
                t.hide_discount_pct_for_compliance,
              bDiscountFromCoupon: !!n.coupon_discount?.amount_in_cents,
            }),
          })
        );
      }
      function Y(e) {
        const {
            lineItem: t,
            purchaseOption: n,
            validatedItem: r,
            rgAppIDs: s,
            bAllAppsPrivate: o,
            fnRemoveLineItem: c,
            accessibilityId: l,
          } = e,
          u = (0, S.EJ)(),
          [_] = (0, z.fg)(),
          p =
            _?.accountid_giftee || (u ? t.gift_info?.accountid_giftee : void 0),
          m = (0, P.j4)(),
          f =
            (0, S.ZB)() && !r?.restrict_add_additional_to_cart && !(0, S.kx)(m),
          h = r.errors?.adult_content_restricted,
          g = (0, w.A)(
            t.packageid,
            t.bundleid,
            ie(n),
            void 0,
            "cart-add-additional",
          ),
          x = y.useId(),
          I = y.useId();
        return (0, i.jsxs)(D.UW, {
          className: Q().LineItemSpaceBetween,
          children: [
            (0, i.jsx)("div", {
              className: v()(Q().LineItemCol, Q().PurchaseOptionPickerCtn),
              children: p
                ? (0, i.jsx)(J, { recipient: p })
                : (0, i.jsx)(re, {
                    lineItem: t,
                    rgAppIDs: s,
                    bAllAppsPrivate: o,
                    purchaseOption: n,
                  }),
            }),
            (0, i.jsxs)("div", {
              className: v()(Q().LineItemRightCol, Q().AddRemoveLinks),
              children: [
                f &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(B.Gq, {
                        toolTipContent: R.Q8.Localize(
                          "#Cart_LineItem_Add_Tooltip",
                        ),
                        usePointerEvents: !0,
                        children: (0, i.jsx)(a.Z, {
                          onActivate: () => !g.isPending && g.mutate(),
                          className: Q().AddLineItem,
                          id: x,
                          "aria-labelledby": `${x} ${l}`,
                          children: R.Q8.Localize("#Cart_Add"),
                        }),
                      }),
                      "|",
                    ],
                  }),
                !u &&
                  (0, i.jsx)(a.Z, {
                    onActivate: () => c(),
                    className: Q().RemoveLineItem,
                    id: I,
                    "aria-labelledby": `${I} ${l}`,
                    children: R.Q8.Localize("#Cart_Remove"),
                  }),
                h &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      "| ",
                      (0, i.jsx)("a", {
                        href: `${d.TS.STORE_CHECKOUT_BASE_URL}checkout/?purchasetype=updatebillinginfo&r=cart`,
                        className: Q().VerifyLineItem,
                        children: R.Q8.Localize("#Cart_Verify"),
                      }),
                      " ",
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function J(e) {
        const { data: t } = (0, s.jn)(e.recipient),
          n = t?.public_data?.persona_name;
        return (0, i.jsx)("div", {
          className: Q().GiftForNotice,
          children: R.Q8.LocalizeReact(
            "#Cart_GiftForNotice",
            n ? (0, i.jsx)("span", { className: Q().Name, children: n }) : "",
          ),
        });
      }
      function $(e) {
        const { storeItem: t, purchaseOption: n } = e,
          r = !!n.requires_shipping && t.item_type === l.c6.RD,
          { data: s } = (0, _.DR)(r ? t.id : void 0);
        return s
          ? (0, i.jsx)(D.dp, {
              children: R.Q8.Localize(
                "#Cart_ShippingEstimate_DeliveryDate",
                (0, N.x)(s),
              ),
            })
          : null;
      }
      function ee(e) {
        const { purchaseOption: t } = e;
        if (!t.requires_shipping) return null;
        const n = d.iA.country_code;
        return ["GB"].includes(n)
          ? (0, i.jsx)(D.dp, {
              children: (0, i.jsx)(a.Z, {
                children: (0, i.jsx)("a", {
                  className: Q().ComplianceLink,
                  target: "_blank",
                  href: "https://www.valvesoftware.com/legal/statement-of-compliance",
                  rel: "noreferrer",
                  children: R.Q8.Localize(
                    "#Cart_LineItem_Hardware_Compliance_Label",
                  ),
                }),
              }),
            })
          : null;
      }
      const te = {
        1: "Second",
        2: "Minute",
        3: "Hour",
        4: "Day",
        5: "Week",
        6: "Month",
        7: "Year",
      };
      function ne(e) {
        const { storeItem: t, purchaseOption: n } = e;
        if (t.item_type !== l.c6.RD) return null;
        const r = n.recurrence_info;
        if (!r) return null;
        let s = "#Package";
        2 === r.billing_agreement_type && (s = "#GameBillingPackage");
        !!n.formatted_final_price && !!n.discount_pct && (s += "WithDiscount");
        const a = s + "CostIncludesSubscriptionBy" + te[r.renewal_time_unit];
        return (0, i.jsx)(D.dp, {
          children: R.Q8.Localize(
            a,
            n.formatted_final_price,
            r.formatted_renewal_price,
            r.renewal_time_period,
            n.discount_pct,
          ),
        });
      }
      function ie(e) {
        return e.user_can_purchase_as_gift;
      }
      function re(e) {
        const {
            lineItem: t,
            rgAppIDs: n,
            bAllAppsPrivate: a,
            purchaseOption: o,
          } = e,
          c = (0, E.C)(),
          l = (0, j.DT)(),
          d = (0, S.EJ)(),
          { data: u } = (0, s.jn)(t.gift_info?.accountid_giftee),
          _ = !ie(o) || d,
          p = !(!(m = o).is_commercial_license && !m.requires_shipping);
        var m;
        let f = [
          {
            data: "myself",
            label: R.Q8.Localize("#Cart_LineItemOptions_Myself"),
          },
        ];
        if (
          (p ||
            f.push({
              data: "private",
              label: R.Q8.Localize("#Cart_LineItemOptions_Privately"),
              tooltip: R.Q8.Localize("#Cart_LineItemOptions_PrivateTooltip"),
            }),
          !_)
        ) {
          const e = u?.public_data?.persona_name;
          t.gift_info?.accountid_giftee && e
            ? f.push({
                data: "gift",
                label: R.Q8.Localize("#Cart_LineItemOptions_GiftForPersona", e),
              })
            : f.push({
                data: "gift",
                label: R.Q8.Localize("#Cart_LineItemOptions_Gift"),
              });
        }
        let h = t.flags?.is_gift ? "gift" : "myself";
        if (("myself" === h && a && (h = "private"), 1 === f.length))
          return null;
        return (0, i.jsx)(r.l6, {
          onSelectionChange: (e) => {
            if (h === e.data) return;
            const i = (e) => l.mutate({ rgAppIDs: n, bPrivate: e }),
              r = (e) =>
                c.mutate({
                  lineItemID: t.line_item_id,
                  lineItemFlags: { ...t.flags, is_gift: e },
                  giftInfo: e ? t.gift_info : void 0,
                });
            "private" === h ? i(!1) : "gift" === h && r(!1),
              "private" === e.data ? i(!0) : "gift" === e.data && r(!0);
          },
          selectedValue: f.find((e) => e.data === h) ?? null,
          options: f,
          getOptionLabel: (e) =>
            e.tooltip
              ? (0, i.jsx)(B.Gq, {
                  toolTipContent: e.tooltip,
                  usePointerEvents: !0,
                  children: (0, i.jsx)("span", { children: e.label }),
                })
              : e.label,
          size: "1",
          placement: "bottom-start",
        });
      }
      const se = y.memo(function (e) {
        const { validatedItem: t } = e,
          n = t.included_packageids ?? [],
          r = (0, I.eG)(),
          s = (0, C.E)({
            queries: n.map((e) => (0, h.mt)(r, { packageid: e })),
          }),
          a = [
            ...new Set(
              s
                .map((e) => e.data)
                .filter((e) => !!e)
                .flat(),
            ),
          ];
        return !a.length || (1 == a.length && !t.item_id?.bundleid)
          ? null
          : (0, i.jsxs)(D.UW, {
              text: !0,
              children: [
                (0, i.jsxs)("span", {
                  children: [
                    R.Q8.LocalizePlural("#Cart_IncludesItems", a.length),
                    ":",
                    " ",
                  ],
                }),
                a.map((e, t) =>
                  (0, i.jsxs)(
                    y.Fragment,
                    {
                      children: [t > 0 && ", ", (0, i.jsx)(A.y, { appid: e })],
                    },
                    e,
                  ),
                ),
              ],
            });
      });
      function ae(e) {
        const { appids: t } = e,
          n = t.map((e, t) =>
            (0, i.jsxs)(
              y.Fragment,
              { children: [t > 0 && ", ", (0, i.jsx)(A.y, { appid: e })] },
              e,
            ),
          );
        return (0, i.jsxs)(D.UW, {
          children: [
            (0, i.jsxs)("span", {
              children: [R.Q8.Localize("#Cart_Notice_SomeAppsPrivate"), " "],
            }),
            n,
          ],
        });
      }
    },
    70343: (e, t, n) => {
      "use strict";
      n.d(t, {
        Rz: () => m,
        UD: () => h,
        UW: () => p,
        dR: () => x,
        dp: () => g,
        uO: () => _,
        vF: () => f,
      });
      var i = n(7850),
        r = n(76217),
        s = n(37788),
        a = n(75204),
        o = n(64238),
        c = n.n(o),
        l = n(22797),
        d = n(86711),
        u = n.n(d);
      function _(e) {
        const { scrollable: t = !1, children: n } = e,
          s = t ? a.MS : r.Z;
        return (0, i.jsx)(s, {
          className: c()(u().LineItemsCtn, t && u().Scrollable),
          focusableIfEmpty: !0,
          children: n,
        });
      }
      function p(e) {
        const { text: t, children: n, className: s, noWrap: a } = e;
        return (0, i.jsx)(r.Z, {
          "flow-children": "row",
          className: c()(
            u().LineItemDetailsRow,
            t && u().Text,
            a && u().NoWrap,
            s,
          ),
          children: n,
        });
      }
      function m(e) {
        const { placeholder: t, className: n, children: r } = e;
        return (0, i.jsx)(s.YZ, {
          className: c()(u().LineItemWrapper, t && u().LineItemPlaceholder, n),
          children: r,
        });
      }
      function f() {
        return (0, i.jsx)(m, { placeholder: !0, children: (0, i.jsx)(h, {}) });
      }
      function h() {
        return (0, i.jsx)("div", {
          className: u().LoadingThrobber,
          children: (0, i.jsx)(l.t, {
            size: "medium",
            position: "center",
            msDelayAppear: 250,
          }),
        });
      }
      function g(e) {
        const { children: t } = e;
        return (0, i.jsx)(p, {
          text: !0,
          children: (0, i.jsx)("div", { className: u().Warning, children: t }),
        });
      }
      function x(e) {
        if (e.coupon_applied) return e.coupon_applied.discount_pct;
        const t = parseInt(e.original_price.amount_in_cents),
          n = parseInt(e.subtotal.amount_in_cents);
        return Math.min(99, Math.floor(((t - n) / t) * 100 + 0.5));
      }
    },
    8364: (e, t, n) => {
      "use strict";
      n.d(t, { MT: () => j, g7: () => x, p2: () => I, xz: () => g });
      var i = n(56545),
        r = n(94076),
        s = n(16909),
        a = n(95578),
        o = n(23809),
        c = n(9006),
        l = n(58214),
        d = n(66418),
        u = n(80902),
        _ = n(79443),
        p = n(27498),
        m = n(30709),
        f = n(93676);
      const h = {
          include_basic_info: !0,
          include_assets: !0,
          include_platforms: !0,
          include_release: !0,
        },
        g = {
          ...h,
          include_included_items: !0,
          include_all_purchase_options: !0,
          included_item_data_request: h,
        };
      function x() {
        const e = (0, o.KV)(),
          t = (0, m.j4)(),
          [n] = (0, p.fg)(),
          { storeBrowseContext: a, cacheStoreItemData: h } = (0, c.yn)();
        return (0, u.I)({
          queryKey: (0, f.m4)(t, n),
          queryFn: async () =>
            (async function (e, t, n, a, o, c) {
              const d = i.w.Init(r.vL);
              (0, _.kx)(t) || (0, _.uU)(t)
                ? (d.Body().set_gidshoppingcart(t.gid),
                  a && d.Body().set_gift_info(s.$z.fromObject(a)))
                : (0, _.sb)(t) && d.Body().set_gidreplayoftransid(t.gid);
              (0, l.rV)(n, d), o && (0, l.Bn)(d, o);
              const u = await r._o.ValidateCart(e, d);
              u.BSuccess() ||
                console.warn(
                  `Failed to validate shopping cart: ${u.GetEResult()}`,
                );
              if (o && c)
                for (const e of u.Body().cart_items()) c(e.store_item(), o);
              return u.Body().toObject();
            })(e, t, a, n, g, h),
          staleTime: 1 / 0,
          enabled: d.iA.logged_in || !(0, _.c2)(t),
        });
      }
      function I(e) {
        return (
          !(!e?.cart_items?.length || 0 === e.cart_items.length) &&
          e.cart_items.every(
            ({ store_item: e }) =>
              e?.item_type == a.c6.RD &&
              !!(e.self_purchase_option || e.best_purchase_option)
                ?.requires_shipping,
          )
        );
      }
      function j(e) {
        return (
          !(!e?.cart_items?.length || 0 === e.cart_items.length) &&
          e.cart_items.every(
            ({ store_item: e, gift_info: t }) =>
              !(
                e?.item_type != a.c6.RD ||
                (!t?.accountid_giftee && !t?.email_giftee)
              ),
          )
        );
      }
    },
    93332: (e, t, n) => {
      "use strict";
      n.d(t, { Dv: () => d });
      var i = n(29233),
        r = n(22837),
        s = n(56545),
        a = n(88544),
        o = (n(42457), n(68950)),
        c = n(23809),
        l = n(80902);
      function d() {
        const e = (0, c.KV)(),
          t = (0, o.LH)();
        return (0, l.I)(
          (function (e, t) {
            return {
              queryKey: ["GetFriendsList", t],
              queryFn: async () => {
                const t = s.w.Init(a.pH),
                  n = await a.DF.GetFriendsList(e, t);
                return n
                  .Body()
                  .friendslist()
                  ?.friends()
                  ?.filter((e) => {
                    if (!e.ulfriendid()) return !1;
                    const t = new i.b2(e.ulfriendid());
                    return (
                      (e.efriendrelationship() == r._UC ||
                        e.efriendrelationship() == r.Ec7) &&
                      t.BIsIndividualAccount()
                    );
                  })
                  .map((e) => e.ulfriendid());
              },
            };
          })(e, t),
        );
      }
    },
  },
]);
