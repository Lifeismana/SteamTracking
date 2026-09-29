/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [60362],
  {
    16339: (e) => {
      e.exports = {
        AvatarHolder: "_1_sHcxv9rQdANehiviVZR4",
        Avatar: "_3qaudpkfSKoxlwfA-deQLX",
        Offline: "_2G4b7NcQECHtFR_D28hqQG",
        Online: "_2-QtgoeBaZrzBPhoKaud5x",
        AvatarStatus: "_3pbKzT087jaL2EeQO1qsaR",
        InGame: "_2K3Q_r66P06VLgIPo-DYsv",
        AwayOrSnooze: "_3VrE4NMh7NJt0aKikAbOA3",
        WatchingBroadcast: "FhCJhs583_Ocqm0UT9y_d",
        AvatarFrame: "_3ZPXpi9X8K-n17XiGgTMdU",
        AvatarFrameImg: "Uk4DBWxeyo7Tn8SAl8afe",
      };
    },
    38878: (e) => {
      e.exports = {
        "Variant-basic": "xqG5GdDEeYauX2ots2DLl",
        "Size-3": "_1K_Ve980-qBq8l1-cZJdw1",
        "Variant-inset": "_2Z-Zr4UW8-jHrU5olM_rpn",
        "Variant-inset-focus": "_2RYWJyn7v0tvoY5cR63QuI",
        Focusable: "_1cd-wdIp5lIWsydAxII-vY",
        "Variant-inset-glass": "_32JdL4FubsmwHfHXm6OB9I",
        "Variant-underline": "yV_Aq5WutzzittgbOJ1R-",
        "Variant-dim": "_2qQgKJgeeqc9lEI-i7HdsM",
        "Variant-highlight": "EFvA4gLIikUE06LDGCqg5",
        "Variant-bare": "_3vxqpebgJYIYNTcigTXx21",
        ControlBox: "_2gL71Yq-HzVI9oOGyWu3jH",
        Hoverable: "_8JNTStqpIYaMWQJx6g6hK",
        Clickable: "_1KONo9A0HE0_NOK2F6uvXy",
        Disabled: "_2I6xXve3oCxh8fra7SWTnq",
        "Size-1": "_2e1xlPghh48rkP13ydQOPb",
        "Size-2": "B7HtDxiiORArIRcBR9kVB",
      };
    },
    24089: (e) => {
      e.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
    },
    65274: (e) => {
      e.exports = {
        Text: "f6hU22EA7Z8peFWZVBJU",
        Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
        "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
        "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
        "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
        "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
        "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
        "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
        "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
        "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
        "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
        TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
        TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
        LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
        WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
      };
    },
    30770: (e) => {
      e.exports = {
        EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
        BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
        EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
        ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
      };
    },
    59884: (e) => {
      e.exports = {
        BlockList: "F2uRfcfN3gZAD8WCNOVq6",
        BlockListItem: "eti_An9vsSQWyfrrZgqZO",
        DefaultItem: "zvsH8nLNLnBES_qChiT1v",
      };
    },
    20609: (e) => {
      e.exports = { ContentReportsTable: "vOw0zIvYhKvicImwO2-XL" };
    },
    44375: (e) => {
      e.exports = {
        GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
        GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
        BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
      };
    },
    99171: (e, t, n) => {
      "use strict";
      n.d(t, { t: () => r });
      var s = n(66418);
      const a = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function r(e, t) {
        let n = "0000000000000000000000000000000000000000";
        "string" == typeof e
          ? (n = e)
          : e &&
            (n =
              (function (e) {
                if (!e) return "";
                return (
                  "function" == typeof e[Symbol.iterator]
                    ? Array.from(e)
                    : Object.values(e).filter((e) => "number" == typeof e)
                )
                  .map((e) => e.toString(16).padStart(2, "0"))
                  .join("");
              })(e) || n);
        let r = ".jpg";
        "0000000000000000000000000000000000000000" === n && (n = a),
          44 == n.length && ((r = n.slice(-4)), (n = n.slice(0, 40)));
        let i = s.TS.AVATAR_BASE_URL;
        switch (
          (i ||
            ((i = s.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (i += n.slice(0, 2) + "/")),
          (i += n),
          t)
        ) {
          case "X-Small":
          case "Small":
            break;
          case "Medium":
          case "MediumLarge":
            i += "_medium";
            break;
          case "Large":
          case "X-Large":
          case "FillArea":
            i += "_full";
        }
        return (i += r), i;
      }
    },
    98682: (e, t, n) => {
      "use strict";
      n.d(t, { Ul: () => _, wm: () => v });
      var s = n(7850);
      const a =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
        r =
          n.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
        i =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
      var o = n(22837),
        c = n(90626);
      function l(e) {
        const { rgSources: t, onIncrementalError: n, alt: a, ...r } = e,
          [i, o] = (0, c.useState)(0),
          l = t[i];
        return (0, s.jsx)("img", {
          onError: (e) => {
            o((e) => e + 1), null == n || n(e, l, i);
          },
          alt: a,
          ...r,
          src: l,
        });
      }
      var d = n(66418),
        u = n(64238),
        A = n.n(u),
        p = n(16339),
        h = n(99171);
      function _(e) {
        const {
            avatarURL: t,
            size: n,
            statusStyle: o,
            statusPosition: c,
            className: u,
            children: h,
            isOnline: _,
            isInGame: v,
            isWatchingBroadcast: m,
            isAwayOrSnooze: x,
            alt: B,
          } = e,
          j = [];
        return (
          t && j.push(t),
          j.push(
            (function (e) {
              switch (e) {
                case "X-Small":
                case "Small":
                  return (0, d.YJ)(a);
                case "Medium":
                case "MediumLarge":
                  return (0, d.YJ)(i);
                case "Large":
                case "X-Large":
                case "FillArea":
                  return (0, d.YJ)(r);
              }
            })(null != n ? n : "Medium"),
          ),
          (0, s.jsxs)("div", {
            className: A()(
              p.AvatarHolder,
              {
                [p.Offline]: !_,
                [p.Online]: _,
                [p.InGame]: v,
                [p.WatchingBroadcast]: m,
                [p.AwayOrSnooze]: x,
              },
              u,
            ),
            "data-size": n,
            "data-status-position": c,
            children: [
              (0, s.jsx)("div", { className: p.AvatarStatus, style: o }),
              (0, s.jsx)(l, {
                className: A()(p.Avatar),
                rgSources: j,
                draggable: !1,
                alt: B,
              }),
              h,
            ],
          })
        );
      }
      function v(e) {
        var t, n, a, r, i, c, l;
        const {
          playerLinkDetails: u,
          animatedAvatar: A,
          avatarFrame: p,
          size: v,
          ...m
        } = e;
        let x = (0, h.t)(
          null === (t = u.public_data) || void 0 === t
            ? void 0
            : t.sha_digest_avatar,
          v,
        );
        return (
          (null === (n = null == A ? void 0 : A.image_small) || void 0 === n
            ? void 0
            : n.length) &&
            (x = d.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + A.image_small),
          (0, s.jsx)(_, {
            avatarURL: x,
            size: v,
            isOnline:
              (null === (a = u.private_data) || void 0 === a
                ? void 0
                : a.persona_state) === o.UXk,
            isInGame:
              void 0 !==
              (null === (r = u.private_data) || void 0 === r
                ? void 0
                : r.game_id),
            isWatchingBroadcast:
              void 0 !==
              (null === (i = u.private_data) || void 0 === i
                ? void 0
                : i.watching_broadcast_accountid),
            isAwayOrSnooze:
              (null === (c = u.private_data) || void 0 === c
                ? void 0
                : c.persona_state) === o.PrD ||
              (null === (l = u.private_data) || void 0 === l
                ? void 0
                : l.persona_state) === o.vPz,
            ...m,
          })
        );
      }
    },
    61023: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => u, w: () => A });
      var s = n(7850),
        a = n(64238),
        r = n.n(a),
        i = n(38878),
        o = n(90534),
        c = n(83392),
        l = n(75659),
        d = n(11526);
      function u(e) {
        const {
            children: t,
            beforeContent: n,
            afterContent: a,
            hasValue: r,
            ...i
          } = e,
          l = A(i);
        return (0, s.jsxs)(c.s, {
          ...l,
          align: "center",
          "data-has-value": !!r,
          minWidth: "0",
          children: [
            n && (0, s.jsx)(c.s, { paddingRight: "2", children: n }),
            (0, s.jsx)(o.az, { flexGrow: "1", minWidth: "0", children: t }),
            a && (0, s.jsx)(c.s, { paddingLeft: "2", children: a }),
          ],
        });
      }
      function A(e) {
        const {
            variant: t = "basic",
            size: n = "2",
            radius: s,
            focusable: a = !0,
            hoverable: o = !0,
            clickable: c = !0,
            disabled: u,
            className: A,
            status: p,
            ...h
          } = e,
          _ = "underline" === t ? "none" : s;
        return (0, d.mz)(
          {
            ...h,
            radius: _,
            "data-status": p,
            className: r()(
              i.ControlBox,
              a && !u && i.Focusable,
              o && !u && i.Hoverable,
              c && !u && i.Clickable,
              u && i.Disabled,
              i[`Variant-${t}`],
              i[`Size-${n}`],
              A,
            ),
          },
          l.h,
        );
      }
    },
    63910: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => a });
      var s = n(24089);
      function a() {
        return s.TextEntry;
      }
    },
    58157: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => A });
      var s = n(7850),
        a = n(11820),
        r = n(63910),
        i = n(61023),
        o = n(64238),
        c = n.n(o),
        l = n(66922),
        d = n(45699),
        u = n(78327);
      function A(e) {
        const {
            rows: t = 3,
            resize: n = "none",
            ref: o,
            value: A,
            onTextChange: p,
            onChange: h,
            disabled: _,
            variant: v,
            ...m
          } = e,
          x = (0, l.f)("TextArea", v),
          B = (0, u.Qn)(),
          j = (0, i.w)({
            ...m,
            className: c()((0, a.T)(), (0, r.F)()),
            style: { resize: n },
            cursor: "text",
            disabled: _,
            variant: x,
          }),
          f = B ? d.dO : "textarea";
        return (0, s.jsx)(f, {
          ref: o,
          ...j,
          value: A || "",
          onChange: (e) => {
            _ || (p(e.target.value), h && h(e));
          },
          rows: t,
          readOnly: _,
          "aria-disabled": _,
        });
      }
    },
    20187: (e, t, n) => {
      "use strict";
      n.d(t, { Ae: () => A, EY: () => d, U6: () => u });
      var s = n(7850),
        a = n(55348),
        r = n(11526),
        i = n(75659),
        o = n(64238),
        c = n.n(o),
        l = n(65274);
      function d(e) {
        const { as: t = "span", ref: n, className: a, ...i } = e,
          o = t;
        return (0, s.jsx)(o, {
          ref: n,
          ...(0, r.mz)({ ...i, className: c()(l.Text, a) }, A),
        });
      }
      const u = [
          {
            prop: "weight",
            responsive: !0,
            className: l.TextWeight,
            cssProperty: (e) => ["--text-weight", `var(--font-weight-${e})`],
          },
          {
            prop: "align",
            responsive: !0,
            className: l.TextAlign,
            cssProperty: "--text-align",
          },
          {
            prop: "color",
            responsive: !0,
            cssProperty: (e, t, n) => {
              var s;
              return [
                "--text-color",
                (0, r.To)(
                  e,
                  null !== (s = (0, a.I)(t.contrast, n)) && void 0 !== s
                    ? s
                    : "body",
                ),
              ];
            },
          },
          {
            prop: "contrast",
            responsive: !0,
            cssProperty: (e, t, n) => {
              var s;
              return [
                "--text-color",
                (0, r.To)(
                  null !== (s = (0, a.I)(t.color, n)) && void 0 !== s
                    ? s
                    : "text-body",
                  e,
                ),
              ];
            },
          },
          { prop: "truncate", className: l.Truncate },
          {
            prop: "lineClamp",
            responsive: !0,
            className: l.LineClamp,
            cssProperty: "--line-clamp",
          },
          {
            prop: "whiteSpace",
            className: l.WhiteSpace,
            cssProperty: "--white-space",
          },
        ],
        A = [
          ...u,
          ...i.L,
          {
            prop: "size",
            responsive: !0,
            className: (e) => l[`TextSize-${e}`],
          },
        ];
    },
    11333: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => c, c: () => o });
      var s = n(78619),
        a = n(49845),
        r = n(58632),
        i = n.n(r);
      function o(e, t) {
        return new (i())(
          async (t) => {
            const n = [...t],
              a = await s.xtC.GetPlayerLinkDetails(e, { steamids: n }),
              r = new Map();
            return (
              a
                .Body()
                .accounts()
                .forEach((e) => {
                  const t = e.toObject();
                  r.set(t.public_data.steamid, t);
                }),
              n.map((e) => {
                var t;
                return null !== (t = r.get(e)) && void 0 !== t ? t : null;
              })
            );
          },
          { maxBatchSize: 100, cache: !1, ...t },
        );
      }
      function c(e) {
        return (0, a.V)("PlayerLinkDetails", () => o(e));
      }
    },
    18519: (e, t, n) => {
      "use strict";
      n.d(t, { jn: () => u });
      var s = n(66418),
        a = n(23809),
        r = n(29233),
        i = n(88942),
        o = n(11333);
      const c = 1;
      function l(e) {
        return ["PlayerLinkDetails", e];
      }
      function d(e, t) {
        const n =
          "number" == typeof t
            ? r.b2.InitFromAccountID(t, s.TS.EUNIVERSE).ConvertTo64BitString()
            : t;
        return {
          queryKey: l(n),
          queryFn: async () => {
            if (n) {
              return (function (e) {
                var t, n, s, a, r;
                return (
                  null === (t = null == e ? void 0 : e.private_data) ||
                    void 0 === t ||
                    delete t.account_name,
                  null === (n = null == e ? void 0 : e.public_data) ||
                    void 0 === n ||
                    delete n.account_flags,
                  null === (s = null == e ? void 0 : e.public_data) ||
                    void 0 === s ||
                    delete s.ban_expires_time,
                  null === (a = null == e ? void 0 : e.public_data) ||
                    void 0 === a ||
                    delete a.privacy_state,
                  (null === (r = null == e ? void 0 : e.public_data) ||
                  void 0 === r
                    ? void 0
                    : r.profile_state) !== c &&
                    (null == e || delete e.private_data),
                  e
                );
              })(await e.load(n));
            }
            return null;
          },
          enabled: !!n,
        };
      }
      function u(e) {
        const t = (0, a.KV)(),
          n = (0, o.L)(t);
        return (0, i.I)(d(n, e));
      }
    },
    75187: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => _ });
      var s = n(7850),
        a = n(15993),
        r = n(90626),
        i = n(43224),
        o = n(65843),
        c = n(90182),
        l = n(30770),
        d = n.n(l),
        u = n(76217),
        A = n(58157),
        p = n(83392),
        h = n(48474);
      function _(e) {
        const { reportedContentID: t, onClose: n } = e,
          [l, _] = (0, r.useState)(a.PV),
          v = (0, c.lY)(t),
          [m, x] = (0, r.useState)("");
        return (0, s.jsxs)(u.Z, {
          className: d().EscalateSubjectDialogCtn,
          children: [
            (0, s.jsx)(u.Z, {
              children: i.T.Localize("#moderation_escalation_description"),
            }),
            (0, s.jsxs)("select", {
              className: d().EscalationLevelSelect,
              value: l,
              onChange: (e) => _(parseInt(e.target.value)),
              children: [
                (0, s.jsx)("option", {
                  value: a.HH,
                  children: i.T.Localize("#moderation_escalationlevel_any"),
                }),
                (0, s.jsx)("option", {
                  value: a.lp,
                  children: i.T.Localize(
                    "#moderation_escalationlevel_supervisor",
                  ),
                }),
                (0, s.jsx)("option", {
                  value: a.PV,
                  children: i.T.Localize("#moderation_escalationlevel_valve"),
                }),
              ],
            }),
            (0, s.jsx)("label", {
              children: i.T.Localize("#moderation_escalation_escalationnote"),
            }),
            (0, s.jsx)(A.f, { onTextChange: x, value: m }),
            (0, s.jsxs)(p.s, {
              direction: "row",
              justify: "end",
              gap: "2",
              marginTop: "2",
              children: [
                (0, s.jsx)(h.$, {
                  color: "dull",
                  onClick: n,
                  children: o.u.Localize("#moderation_cancel"),
                }),
                (0, s.jsx)(h.$, {
                  onClick: async () => {
                    await v.mutateAsync({ eNewLevel: l, strNote: m }), n();
                  },
                  loading: v.isPending,
                  children: i.T.Localize("#moderation_escalation_escalate"),
                }),
              ],
            }),
          ],
        });
      }
    },
    56061: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => A });
      var s = n(7850),
        a = n(63987),
        r = n(90626),
        i = n(65843),
        o = n(59884),
        c = n.n(o),
        l = n(45699),
        d = n(76217),
        u = n(55388);
      function A(e) {
        const [t, n] = (0, r.useState)(null),
          [o, A] = (0, r.useState)([]),
          [p, h] = (0, r.useState)(!1),
          [_, v] = (0, r.useState)(!1);
        let m = e.reasons;
        for (const e of o) m = m[e].children;
        const x = null !== t ? (0, a.V$)(t) : null,
          B = null !== t ? (0, a.GA)(t) : null,
          j = () => {
            null !== t
              ? n(null)
              : 0 === o.length
                ? e.onSelect(null)
                : A(o.slice(0, -1));
          };
        return (0, s.jsxs)("div", {
          children: [
            null === t &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("div", {
                    className: c().BlockList,
                    children: m.map((t, r) => {
                      const u = () => {
                        if ((0, a.Ju)(t)) {
                          const e = [...o];
                          e.push(r), A(e);
                        } else {
                          if (!(0, a.X$)(t))
                            throw new Error("This should be unreachable.");
                          (0, a.V$)(t.value) || (0, a.GA)(t.value)
                            ? n(t.value)
                            : e.onSelect(t.value);
                        }
                      };
                      return (0, a.Ur)(t)
                        ? (0, s.jsx)(
                            l.Ii,
                            {
                              className: c().BlockListItem,
                              href: t.url,
                              children: i.u.Localize(t.strLocToken),
                            },
                            t.url,
                          )
                        : (0, s.jsxs)(
                            d.Z,
                            {
                              onActivate: u,
                              className: c().BlockListItem,
                              children: [
                                (0, s.jsx)("span", {
                                  children: (0, a.Ju)(t)
                                    ? i.u.Localize(t.strLocToken)
                                    : (0, a.Jt)(t.value),
                                }),
                                (0, a.Ju)(t) &&
                                  (0, s.jsx)("span", { children: "▶" }),
                              ],
                            },
                            r,
                          );
                    }),
                  }),
                  (0, s.jsx)(u.n9, { onClick: j, children: "Back" }),
                ],
              }),
            null !== t &&
              (0, s.jsxs)("div", {
                className: c().BlockList,
                children: [
                  (0, s.jsx)("div", {
                    className: c().BlockListItem,
                    children: (0, a.Jt)(t),
                  }),
                  null !== x &&
                    (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          checked: p,
                          onChange: (e) => h(e.target.checked),
                        }),
                        " Targeted at women",
                      ],
                    }),
                  null !== B &&
                    (0, s.jsxs)("label", {
                      children: [
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          checked: _,
                          onChange: (e) => v(e.target.checked),
                        }),
                        " Deepfake",
                      ],
                    }),
                  (0, s.jsxs)("div", {
                    className: c().BottomButtons,
                    children: [
                      (0, s.jsx)(u.n9, { onClick: j, children: "Back" }),
                      (0, s.jsx)(u.n9, {
                        onClick: () => {
                          let n = t;
                          null !== n &&
                            (p && null !== (0, a.V$)(n) && (n = (0, a.V$)(n)),
                            _ && null !== (0, a.GA)(n) && (n = (0, a.GA)(n)),
                            e.onSelect(n));
                        },
                        children: "Continue",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      }
    },
    12542: (e, t, n) => {
      "use strict";
      n.d(t, { B8: () => m, lX: () => g });
      var s = n(7850),
        a = n(55184),
        r = n(90314),
        i = n(4340),
        o = n(90182),
        c = n(22797),
        l = n(43224),
        d = n(18519),
        u = n(39832),
        A = n(78327),
        p = n(63987),
        h = n(98682),
        _ = n(20609),
        v = n.n(_);
      function m(e) {
        const { reportedContentID: t } = e;
        return t ? (0, s.jsx)(B, { ...e }) : (0, s.jsx)(x, {});
      }
      function x(e) {
        return (0, s.jsx)("div", {
          children: (0, s.jsxs)("table", {
            children: [
              (0, s.jsx)("thead", {
                children: (0, s.jsxs)("tr", {
                  children: [
                    (0, s.jsx)("th", { children: "Date" }),
                    (0, s.jsx)("th", { children: "Actor" }),
                    (0, s.jsx)("th", { children: "Action" }),
                    (0, s.jsx)("th", { children: "Details" }),
                  ],
                }),
              }),
              (0, s.jsx)("tbody", {
                children: (0, s.jsx)("tr", {
                  children: (0, s.jsx)("td", {
                    colSpan: 4,
                    children: l.T.Localize("#subjectauditlog_noentries"),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function B(e) {
        var t, n, a, r, i;
        const d = (0, o.Kt)(e.reportedContentID),
          u =
            null !==
              (a =
                null ===
                  (n =
                    null === (t = null == d ? void 0 : d.data) || void 0 === t
                      ? void 0
                      : t.entries) || void 0 === n
                  ? void 0
                  : n.length) && void 0 !== a
              ? a
              : 0,
          A =
            null !==
              (i =
                null === (r = d.data) || void 0 === r ? void 0 : r.entries) &&
            void 0 !== i
              ? i
              : [];
        return (
          A.sort((e, t) => t.timestamp - e.timestamp),
          (0, s.jsx)("div", {
            children:
              u > 0 &&
              (0, s.jsxs)("table", {
                children: [
                  (0, s.jsx)("thead", {
                    children: (0, s.jsxs)("tr", {
                      children: [
                        (0, s.jsx)("th", { children: "Date" }),
                        (0, s.jsx)("th", { children: "Actor" }),
                        (0, s.jsx)("th", { children: "Action" }),
                        (0, s.jsx)("th", { children: "Details" }),
                      ],
                    }),
                  }),
                  (0, s.jsxs)("tbody", {
                    children: [
                      void 0 === d &&
                        (0, s.jsx)("tr", {
                          children: (0, s.jsx)("td", {
                            colSpan: 4,
                            children: l.T.Localize(
                              "#subjectauditlog_noentries",
                            ),
                          }),
                        }),
                      d &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            d.isLoading &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: (0, s.jsx)(c.t, {}),
                                }),
                              }),
                            d.isError &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: l.T.Localize(
                                    "#subjectauditlog_error",
                                  ),
                                }),
                              }),
                            d.isSuccess &&
                              0 === u &&
                              (0, s.jsx)("tr", {
                                children: (0, s.jsx)("td", {
                                  colSpan: 4,
                                  children: l.T.Localize(
                                    "#subjectauditlog_noentries",
                                  ),
                                }),
                              }),
                            d.isSuccess &&
                              u > 0 &&
                              A.map((e) =>
                                (0, s.jsx)(j, { entry: e }, e.timestamp),
                              ),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
          })
        );
      }
      function j(e) {
        var t, n;
        const { entry: a } = e,
          r = (0, d.jn)(a.actor_steamid);
        return r.isSuccess && r.data
          ? (0, s.jsxs)("tr", {
              children: [
                (0, s.jsx)("td", { children: (0, u.P0)(a.timestamp, !1, "") }),
                (0, s.jsxs)("td", {
                  children: [
                    (0, s.jsx)("a", {
                      href: `${A.TS.COMMUNITY_BASE_URL}profiles/${a.actor_steamid}`,
                      children: (0, s.jsx)("span", {
                        children:
                          null ===
                            (n =
                              null === (t = r.data) || void 0 === t
                                ? void 0
                                : t.public_data) || void 0 === n
                            ? void 0
                            : n.persona_name,
                      }),
                    }),
                    " ",
                    "(",
                    (0, s.jsx)("a", {
                      href: `/moderation/activity/${a.actor_steamid}`,
                      children: "activity",
                    }),
                    ")",
                  ],
                }),
                (0, s.jsxs)("td", {
                  children: [
                    (0, p.fg)(a.action),
                    a.automated_action &&
                      (0, s.jsx)(s.Fragment, { children: " (Automated)" }),
                  ],
                }),
                (0, s.jsx)("td", {
                  children: (0, s.jsx)(f, {
                    eAction: a.action,
                    jsonData: a.additional_json_data,
                  }),
                }),
              ],
            })
          : null;
      }
      function f(e) {
        const { eAction: t, jsonData: n } = e;
        let i = {};
        switch ((n && (i = JSON.parse(n)), t)) {
          case a.Hd:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          case a._F:
            return (0, s.jsxs)(s.Fragment, {
              children: [
                "Reason: ",
                (0, p.Jt)(i.reason),
                i.resolution !== r.CC &&
                  i.resolution !== r.S6 &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Resolution: ",
                      (0, p.l)(i.resolution),
                    ],
                  }),
                i.sanctions &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Sanctions: ",
                      i.sanctions.map(p.cB).join(", "),
                    ],
                  }),
              ],
            });
          case a.Nu:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          case a.XP:
            return (0, s.jsx)(s.Fragment, {
              children: JSON.stringify(i, null, "\t"),
            });
          case a.YI:
            return (0, s.jsxs)(s.Fragment, {
              children: ["New level: ", (0, p.ar)(i.level)],
            });
          case a._7:
            return (0, s.jsxs)(s.Fragment, {
              children: ["Report ID: ", i.report_id],
            });
          default:
            return null;
        }
      }
      function g(e) {
        var t;
        const { subject: n } = e,
          a = n && n.reports && n.reports.length > 0;
        return (0, s.jsx)("table", {
          className: v().ContentReportsTable,
          children: (0, s.jsxs)("tbody", {
            children: [
              !a &&
                (0, s.jsx)("tr", {
                  children: (0, s.jsx)("td", {
                    colSpan: 4,
                    children: l.T.Localize("#contentreportslist_noreports"),
                  }),
                }),
              a &&
                (null === (t = n.reports) || void 0 === t
                  ? void 0
                  : t.map((e) => (0, s.jsx)(y, { report: e }, e.report_id))),
            ],
          }),
        });
      }
      function y(e) {
        var t, n;
        const { report: a } = e,
          o = (0, d.jn)(a.reporter_steamid);
        if (!o.isSuccess) return null;
        if (!(null === (t = o.data) || void 0 === t ? void 0 : t.public_data))
          return null;
        const c = !!a.time_disputed && a.dispute_resolved === r.z_,
          _ =
            a.resolved !== r.z_ &&
            (!a.time_disputed || a.dispute_resolved !== r.z_),
          v = 0 !== a.time_dispute_resolved,
          m = a.resolved === r.CC;
        return (0, s.jsxs)("tr", {
          children: [
            (0, s.jsx)("td", { children: (0, u.P0)(a.time_reported, !1, "") }),
            (0, s.jsxs)("td", {
              children: [
                (0, s.jsx)("a", {
                  href: `${A.TS.COMMUNITY_BASE_URL}profiles/${a.reporter_steamid}`,
                  children: (0, s.jsx)(h.wm, {
                    playerLinkDetails: o.data,
                    size: "X-Small",
                    alt: "Reporter",
                  }),
                }),
                " ",
                (0, s.jsx)("a", {
                  href: `${A.TS.COMMUNITY_BASE_URL}profiles/${a.reporter_steamid}`,
                  children: (0, s.jsx)("span", {
                    children:
                      null === (n = o.data.public_data) || void 0 === n
                        ? void 0
                        : n.persona_name,
                  }),
                }),
              ],
            }),
            (0, s.jsx)("td", {
              children:
                a.report_reason !== i.OQ &&
                (0, s.jsx)("span", { children: (0, p.Jt)(a.report_reason) }),
            }),
            (0, s.jsxs)("td", {
              children: [
                m &&
                  !c &&
                  !v &&
                  (0, s.jsx)("span", {
                    children: l.T.Localize(
                      "#contentreportslist_acquitted_at",
                      (0, u.P0)(a.time_resolved, !1, ""),
                    ),
                  }),
                _ &&
                  !m &&
                  !c &&
                  !v &&
                  (0, s.jsx)("span", {
                    children: l.T.Localize(
                      "#contentreportslist_resolved_at",
                      (0, u.P0)(a.time_resolved, !1, ""),
                    ),
                  }),
                c &&
                  !v &&
                  (0, s.jsx)("span", {
                    children: l.T.Localize(
                      "#contentreportslist_disputed_at",
                      (0, u.P0)(a.time_disputed, !1, ""),
                    ),
                  }),
                v &&
                  (0, s.jsx)("span", {
                    children: l.T.Localize(
                      "#contentreportslist_dispute_resolved_at",
                      (0, u.P0)(a.time_dispute_resolved, !1, ""),
                    ),
                  }),
                !c && (0, s.jsx)("span", { children: a.report_text }),
                c &&
                  (0, s.jsxs)("span", {
                    children: [
                      (0, s.jsx)("br", {}),
                      "Original: ",
                      a.report_text,
                      (0, s.jsx)("br", {}),
                      "Dispute: ",
                      a.dispute_details,
                    ],
                  }),
              ],
            }),
          ],
        });
      }
    },
    90182: (e, t, n) => {
      "use strict";
      n.d(t, {
        EC: () => E,
        KQ: () => S,
        Kt: () => x,
        Ky: () => v,
        N8: () => j,
        OI: () => p,
        YL: () => f,
        c3: () => w,
        lY: () => B,
        w3: () => m,
        wy: () => y,
        y4: () => g,
      });
      var s = n(37085),
        a = n(56545),
        r = n(43261),
        i = n(99164),
        o = n(23809),
        c = n(88942),
        l = n(29385),
        d = n(61739),
        u = n(63987);
      const A = "get_reported_content",
        p = (e) => [A, JSON.stringify(e)],
        h = (e) => ["get_reported_content_by_id", e],
        _ = (e) => ["get_reported_content_audit_log", e];
      async function v(e, t) {
        return Promise.all([
          e.invalidateQueries({ queryKey: [A], exact: !1 }),
          e.invalidateQueries({ queryKey: h(t) }),
          e.invalidateQueries({ queryKey: _(t) }),
        ]);
      }
      function m(e) {
        const t = (0, o.KV)();
        return (0, c.I)(
          (function (e, t) {
            return {
              queryKey: p(t),
              enabled: (0, u.NX)(t),
              queryFn: async () => {
                const n = a.w.Init(i.Mw);
                n.Body().set_coordinates(i.UC.fromObject(t));
                const s = await i.fL.GetReportedContent(e, n);
                if (!s.BSuccess())
                  throw new Error(
                    "Failed in GetReportedContent, EResult: " + s.GetEResult(),
                  );
                return s.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function x(e) {
        const t = (0, o.KV)();
        return (0, c.I)(
          (function (e, t) {
            return {
              queryKey: _(t),
              queryFn: async () => {
                if (!t) return;
                const n = a.w.Init(i.v5);
                return (
                  n.Body().set_reported_content_id(t),
                  (await i.fL.GetAuditLogByID(e, n)).Body().toObject()
                );
              },
            };
          })(t, e),
        );
      }
      function B(e) {
        const t = (0, o.KV)(),
          n = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (n) => {
            const r = a.w.Init(i.Qi);
            r.Body().set_reported_content_id(e),
              r.Body().set_new_level(n.eNewLevel),
              n.eReason && r.Body().set_reason(n.eReason),
              n.strNote && r.Body().set_note(n.strNote);
            const o = await i.fL.EscalateSubjectByID(t, r);
            if (o.GetEResult() !== s.R)
              throw new Error(`Failed to escalate subject: ${o.GetEMsg()}`);
          },
          onSuccess: async () => {
            await Promise.all([
              v(n, e),
              n.invalidateQueries({ queryKey: ["get_claimed"] }),
              n.invalidateQueries({ queryKey: ["get_subject_overview"] }),
            ]);
          },
        });
      }
      function j() {
        const e = (0, o.KV)(),
          t = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (t) => {
            const n = a.w.Init(i.Nr);
            n.Body().set_reported_content_id(t.reportedContentID);
            const s = await i.fL.SustainModerationByID(e, n);
            if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
          },
          onSuccess: async (e, n) => {
            await v(t, n.reportedContentID),
              await t.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function f(e) {
        const t = (0, l.jE)(),
          n = (0, o.KV)();
        return (0, d.n)({
          mutationKey: ["release_subject", ...e],
          mutationFn: async () => {
            const t = a.w.Init(i.GD);
            for (const n of e) {
              const e = new i.F9();
              e.set_reported_content_id(n), t.Body().add_subjects_to_release(e);
            }
            const s = await i.fL.ReleaseSubjects(n, t);
            if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
          },
          onSuccess: async () => {
            await Promise.all([
              t.invalidateQueries({ queryKey: ["get_claimed"] }),
              t.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ...e.map((e) => v(t, e)),
            ]);
          },
        });
      }
      function g(e, t) {
        const n = (0, o.KV)(),
          s = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const s = a.w.Init(i.LW);
            s.Body().set_reported_content_id(e), s.Body().set_details(t);
            const r = await i.fL.OwnerDisputeModeration(n, s);
            if (!r.BSuccess()) throw new Error("EResult " + r.GetEResult());
          },
          onSuccess: async () => {
            await v(s, e);
          },
        });
      }
      function y(e, t) {
        const n = (0, l.jE)(),
          s = (0, o.KV)();
        return (0, d.n)({
          mutationFn: async () => {
            const n = a.w.Init(i.ps);
            n.Body().set_reported_content_id(e),
              n.Body().set_owner_dispute_details(t);
            const r = await i.fL.UpdateSubjectByID(s, n);
            if (!r.BSuccess()) throw new Error("EResult " + r.GetEResult());
          },
          onSuccess: async () => {
            await v(n, e);
          },
        });
      }
      function S(e) {
        const t = (0, o.KV)();
        return (0, c.I)(
          (function (e, t) {
            return {
              queryKey: ["reporterstats", t],
              queryFn: async () => {
                const n = a.w.Init(i.KD);
                n.Body().set_steamid(t);
                const s = await i.fL.GetReporterStats(e, n);
                if (!s.BSuccess()) throw new Error("EResult " + s.GetEResult());
                return s.Body().toObject();
              },
            };
          })(t, e),
        );
      }
      function E(e, t, n) {
        const s = (0, o.KV)(),
          i = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async (i) => {
            const o = a.w.Init(r.Er);
            o.Body().set_steamid(e),
              o.Body().set_comment_thread_id(t),
              o.Body().set_gidcomment(n),
              o.Body().set_reason(i.reason),
              o.Body().set_note(i.message);
            for (const e of i.sanctions) {
              const t = new r.u6();
              t.set_sanction(e.sanction),
                e.days && t.set_days(e.days),
                o.Body().add_sanctions(t);
            }
            const c = await r.BE.SanctionComment(s, o);
            if (!c.BSuccess())
              throw new Error(
                `SanctionComment failed. EResult: ${c.GetEResult()} (${c.GetErrorMessage()})`,
              );
          },
          onSuccess: async () => {
            await i.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
      function w(e, t, n) {
        const s = (0, o.KV)(),
          i = (0, l.jE)();
        return (0, d.n)({
          mutationFn: async () => {
            const i = a.w.Init(r.RX);
            i.Body().set_steamid(e),
              i.Body().set_comment_thread_id(t),
              i.Body().set_gidcomment(n),
              i.Body().set_report_action(r.du.Pn),
              i.Body().set_resolve(!0),
              await r.Vi.UpdateCommentReportState(s, i);
          },
          onSuccess: async () => {
            await i.invalidateQueries({ queryKey: ["get_claimed"] });
          },
        });
      }
    },
    49845: (e, t, n) => {
      "use strict";
      function s(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function a(...e) {
        return JSON.stringify(e, (e, t) => {
          if (
            (function (e) {
              if (!s(e)) return !1;
              const t = e.constructor;
              if (void 0 === t) return !0;
              const n = t.prototype;
              return (
                !!s(n) &&
                !!Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
              );
            })(t)
          ) {
            const e = {};
            return (
              Object.keys(t)
                .sort()
                .forEach((n) => {
                  e[n] = t[n];
                }),
              e
            );
          }
          return t;
        });
      }
      n.d(t, { V: () => o });
      var r = n(90626);
      n(7850);
      const i = (0, r.createContext)({ instances: {}, factories: {} });
      function o(e, t) {
        var n;
        const s = (0, r.useContext)(i),
          o = "string" == typeof e ? e : a(...e);
        let c = s;
        for (; c; ) {
          if (o in c.instances) return c.instances[o];
          if (o in c.factories) break;
          c = c.parent;
        }
        const l = (
          null !== (n = null == c ? void 0 : c.factories[o]) && void 0 !== n
            ? n
            : t
        )();
        return ((null != c ? c : s).instances[o] = l), l;
      }
    },
    55388: (e, t, n) => {
      "use strict";
      n.d(t, { Oh: () => c, n9: () => o, sP: () => i });
      var s = n(7850),
        a = n(45699),
        r = n(44375);
      function i(e) {
        const { children: t, ...n } = e;
        return (0, s.jsx)(a.fu, {
          className: r.GreenButton,
          type: "button",
          ...n,
          children: (0, s.jsx)("span", { children: t }),
        });
      }
      function o(e) {
        const { children: t, ...n } = e;
        return (0, s.jsx)(a.fu, {
          className: r.BlueButton,
          type: "button",
          ...n,
          children: (0, s.jsx)("span", { children: t }),
        });
      }
      function c(e) {
        const { children: t, ...n } = e;
        return (0, s.jsx)(a.fu, {
          className: r.GreyButton,
          type: "button",
          ...n,
          children: (0, s.jsx)("span", { children: t }),
        });
      }
    },
  },
]);
