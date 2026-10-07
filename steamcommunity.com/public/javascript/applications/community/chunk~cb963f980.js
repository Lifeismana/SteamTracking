/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [60362],
    {
      76105: (C, R, t) => {
        "use strict";
        t.d(R, { t: () => o });
        var e = t(72609);
        const r = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function o(A, h) {
          let _ = "0000000000000000000000000000000000000000";
          typeof A == "string" ? (_ = A) : A && (_ = i(A) || _);
          let B = ".jpg";
          _ === "0000000000000000000000000000000000000000" && (_ = r),
            _.length == 44 && ((B = _.slice(-4)), (_ = _.slice(0, 40)));
          let d = e.TS.AVATAR_BASE_URL;
          switch (
            (d ||
              ((d = e.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (d += _.slice(0, 2) + "/")),
            (d += _),
            h)
          ) {
            case "X-Small":
            case "Small":
              break;
            case "Medium":
            case "MediumLarge":
              d += "_medium";
              break;
            case "Large":
            case "X-Large":
            case "FillArea":
              d += "_full";
              break;
          }
          return (d += B), d;
        }
        function i(A) {
          return A
            ? (typeof A[Symbol.iterator] == "function"
                ? Array.from(A)
                : Object.values(A).filter((_) => typeof _ == "number")
              )
                .map((_) => _.toString(16).padStart(2, "0"))
                .join("")
            : "";
        }
      },
      30986: (C, R, t) => {
        "use strict";
        t.d(R, { Ul: () => a, wm: () => f });
        var e = t(7850);
        const r =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          o =
            t.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching",
          i =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
        var A = t(99412),
          h = t(90626);
        function _(x) {
          const { rgSources: D, onIncrementalError: M, alt: I, ...L } = x,
            [T, u] = (0, h.useState)(0),
            g = D[T];
          return (0, e.jsx)("img", {
            onError: (l) => {
              u((p) => p + 1), M == null || M(l, g, T);
            },
            alt: I,
            ...L,
            src: g,
          });
        }
        var B = t(72609),
          d = t(64238),
          j = t.n(d),
          E = t(16339),
          s = t(76105);
        function a(x) {
          const {
              avatarURL: D,
              size: M,
              statusStyle: I,
              statusPosition: L,
              className: T,
              children: u,
              isOnline: g,
              isInGame: l,
              isWatchingBroadcast: p,
              isAwayOrSnooze: S,
              alt: z,
            } = x,
            U = [];
          return (
            D && U.push(D),
            U.push(K(M != null ? M : "Medium")),
            (0, e.jsxs)("div", {
              className: j()(
                E.AvatarHolder,
                {
                  [E.Offline]: !g,
                  [E.Online]: g,
                  [E.InGame]: l,
                  [E.WatchingBroadcast]: p,
                  [E.AwayOrSnooze]: S,
                },
                T,
              ),
              "data-size": M,
              "data-status-position": L,
              children: [
                (0, e.jsx)("div", { className: E.AvatarStatus, style: I }),
                (0, e.jsx)(_, {
                  className: j()(E.Avatar),
                  rgSources: U,
                  draggable: !1,
                  alt: z,
                }),
                u,
              ],
            })
          );
        }
        function n(x) {
          const {
            profileItem: D,
            className: M,
            bDisableAnimation: I,
            ...L
          } = x;
          if (!D || !D.image_small || D.image_small.length == 0) return null;
          let T = I ? D.image_large : D.image_small;
          return (
            T || (T = D.image_small),
            T.startsWith("https://") ||
              (T = Config.MEDIA_CDN_COMMUNITY_URL + "images/" + T),
            jsx("div", {
              className: classNames(styles.AvatarFrame, M),
              ...L,
              children: jsx("img", {
                className: styles.AvatarFrameImg,
                src: T,
                alt: "",
                role: "presentation",
              }),
            })
          );
        }
        function f(x) {
          var D, M, I, L, T, u, g;
          const {
            playerLinkDetails: l,
            animatedAvatar: p,
            avatarFrame: S,
            size: z,
            ...U
          } = x;
          let c = (0, s.t)(
            (D = l.public_data) == null ? void 0 : D.sha_digest_avatar,
            z,
          );
          return (
            (M = p == null ? void 0 : p.image_small) != null &&
              M.length &&
              (c = B.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + p.image_small),
            (0, e.jsx)(a, {
              avatarURL: c,
              size: z,
              isOnline:
                ((I = l.private_data) == null ? void 0 : I.persona_state) ===
                A.UXk,
              isInGame:
                ((L = l.private_data) == null ? void 0 : L.game_id) !== void 0,
              isWatchingBroadcast:
                ((T = l.private_data) == null
                  ? void 0
                  : T.watching_broadcast_accountid) !== void 0,
              isAwayOrSnooze:
                ((u = l.private_data) == null ? void 0 : u.persona_state) ===
                  A.PrD ||
                ((g = l.private_data) == null ? void 0 : g.persona_state) ===
                  A.vPz,
              ...U,
            })
          );
        }
        function v(x, D) {
          const [M, I] = useState(x !== "None");
          return (
            useEffect(() => {
              if ((I(x !== "None"), x === "None" || x === "Infinite")) return;
              let L;
              switch (x) {
                case "Short":
                  L = 2500;
                  break;
                case "Medium":
                  L = 5e3;
                  break;
                case "Long":
                  L = 1e4;
                  break;
              }
              const T = setTimeout(() => {
                I(D);
              }, L);
              return () => {
                clearTimeout(T);
              };
            }, [x, D]),
            M
          );
        }
        function O(x) {
          var D, M;
          const {
              loopDuration: I = "Infinite",
              bParentHovered: L,
              bLimitProfileFrameAnimationTime: T,
              className: u,
              ...g
            } = x,
            [l, p] = useState(!1),
            S = v(I, l),
            z = useProfileItemsEquipped(
              g.playerLinkDetails.public_data.steamid,
            );
          return jsx("div", {
            className: u,
            onMouseEnter: () => p(!0),
            onMouseLeave: () => p(!1),
            children: jsx(f, {
              ...g,
              animatedAvatar: S
                ? (D = z.data) == null
                  ? void 0
                  : D.animated_avatar
                : void 0,
              children: jsx(n, {
                profileItem: (M = z.data) == null ? void 0 : M.avatar_frame,
                bDisableAnimation: T && !S,
              }),
            }),
          });
        }
        function K(x) {
          switch (x) {
            case "X-Small":
            case "Small":
              return (0, B.YJ)(r);
            case "Medium":
            case "MediumLarge":
              return (0, B.YJ)(i);
            case "Large":
            case "X-Large":
            case "FillArea":
              return (0, B.YJ)(o);
          }
        }
      },
      86946: (C, R, t) => {
        "use strict";
        t.d(R, { j: () => j, w: () => E });
        var e = t(7850),
          r = t(64238),
          o = t.n(r),
          i = t(38878),
          A = t.n(i),
          h = t(60351),
          _ = t(68031),
          B = t(8928),
          d = t(69289);
        function j(s) {
          const {
              children: a,
              beforeContent: n,
              afterContent: f,
              hasValue: v,
              ...O
            } = s,
            K = E(O);
          return (0, e.jsxs)(_.s, {
            ...K,
            align: "center",
            "data-has-value": !!v,
            minWidth: "0",
            children: [
              n && (0, e.jsx)(_.s, { paddingRight: "2", children: n }),
              (0, e.jsx)(h.az, { flexGrow: "1", minWidth: "0", children: a }),
              f && (0, e.jsx)(_.s, { paddingLeft: "2", children: f }),
            ],
          });
        }
        function E(s) {
          const {
              variant: a = "basic",
              size: n = "2",
              radius: f,
              focusable: v = !0,
              hoverable: O = !0,
              clickable: K = !0,
              disabled: x,
              className: D,
              status: M,
              ...I
            } = s,
            L = a === "underline" ? "none" : f;
          return (0, d.mz)(
            {
              ...I,
              radius: L,
              "data-status": M,
              className: o()(
                i.ControlBox,
                v && !x && i.Focusable,
                O && !x && i.Hoverable,
                K && !x && i.Clickable,
                x && i.Disabled,
                i[`Variant-${a}`],
                i[`Size-${n}`],
                D,
              ),
            },
            B.h,
          );
        }
      },
      98929: (C, R, t) => {
        "use strict";
        t.d(R, { F: () => o });
        var e = t(24089),
          r = t.n(e);
        function o() {
          return e.TextEntry;
        }
      },
      1522: (C, R, t) => {
        "use strict";
        t.d(R, { f: () => j });
        var e = t(7850),
          r = t(3877),
          o = t(98929),
          i = t(86946),
          A = t(64238),
          h = t.n(A),
          _ = t(80549),
          B = t(24660),
          d = t(3166);
        function j(E) {
          const {
              rows: s = 3,
              resize: a = "none",
              ref: n,
              value: f,
              onTextChange: v,
              onChange: O,
              disabled: K,
              variant: x,
              ...D
            } = E,
            M = (g) => {
              K || (v(g.target.value), O && O(g));
            },
            I = (0, _.f)("TextArea", x),
            L = (0, d.Qn)(),
            T = (0, i.w)({
              ...D,
              className: h()((0, r.T)(), (0, o.F)()),
              style: { resize: a },
              cursor: "text",
              disabled: K,
              variant: I,
            }),
            u = L ? B.dO : "textarea";
          return (0, e.jsx)(u, {
            ref: n,
            ...T,
            value: f || "",
            onChange: M,
            rows: s,
            readOnly: K,
            "aria-disabled": K,
          });
        }
      },
      15252: (C, R, t) => {
        "use strict";
        t.d(R, { Ae: () => E, EY: () => d, U6: () => j });
        var e = t(7850),
          r = t(1039),
          o = t(69289),
          i = t(8928),
          A = t(64238),
          h = t.n(A),
          _ = t(65274),
          B = t.n(_);
        function d(s) {
          const { as: a = "span", ref: n, className: f, ...v } = s,
            O = a;
          return (0, e.jsx)(O, {
            ref: n,
            ...(0, o.mz)({ ...v, className: h()(_.Text, f) }, E),
          });
        }
        const j = [
            {
              prop: "weight",
              responsive: !0,
              className: _.TextWeight,
              cssProperty: (s) => ["--text-weight", `var(--font-weight-${s})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: _.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var f;
                return [
                  "--text-color",
                  (0, o.To)(
                    s,
                    (f = (0, r.I)(a.contrast, n)) != null ? f : "body",
                  ),
                ];
              },
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (s, a, n) => {
                var f;
                return [
                  "--text-color",
                  (0, o.To)(
                    (f = (0, r.I)(a.color, n)) != null ? f : "text-body",
                    s,
                  ),
                ];
              },
            },
            { prop: "truncate", className: _.Truncate },
            {
              prop: "lineClamp",
              responsive: !0,
              className: _.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: _.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          E = [
            ...j,
            ...i.L,
            {
              prop: "size",
              responsive: !0,
              className: (s) => _[`TextSize-${s}`],
            },
          ];
      },
      86336: (C, R, t) => {
        "use strict";
        t.d(R, { W: () => E, Y: () => d });
        var e = t(7850),
          r = t(50122),
          o = t.n(r),
          i = t(15252),
          A = t(69289),
          h = t(24660),
          _ = t(70182),
          B = t(3166);
        function d(s) {
          var a;
          const { underline: n = "auto", focusable: f, navProps: v, ...O } = s,
            K = (0, B.Qn)(),
            x =
              (a = f != null ? f : v == null ? void 0 : v.focusable) != null
                ? a
                : !!O.href,
            D = (0, A.mz)({ ...O, underline: n, className: r.TextLink }, j);
          return K && (x || v)
            ? (0, e.jsx)(h.Ii, { ...D, ...(v || {}), focusable: x })
            : (0, e.jsx)("a", { ...D });
        }
        const j = [
          ...i.Ae,
          { prop: "underline", className: (s) => r[`Underline-${s}`] },
        ];
        function E(s) {
          var a;
          const { underline: n = "auto", focusable: f, navProps: v, ...O } = s,
            K = (0, B.Qn)(),
            x =
              (a = f != null ? f : v == null ? void 0 : v.focusable) != null
                ? a
                : !!O.onClick,
            D = (0, e.jsx)("span", {
              role: "button",
              ...(0, A.mz)(
                { ...O, underline: n, className: r.TextLinkButton },
                j,
              ),
            });
          return K && (x || v)
            ? (0, e.jsx)(_.J, { ...(v || {}), focusable: x, children: D })
            : D;
        }
      },
      15860: (C, R, t) => {
        "use strict";
        t.d(R, { L: () => h, c: () => A });
        var e = t(75916),
          r = t(76617),
          o = t(58632),
          i = t.n(o);
        function A(_, B) {
          return new (i())(
            async (d) => {
              const j = [...d],
                E = await e.xtC.GetPlayerLinkDetails(_, { steamids: j }),
                s = new Map();
              return (
                E.Body()
                  .accounts()
                  .forEach((a) => {
                    const n = a.toObject();
                    s.set(n.public_data.steamid, n);
                  }),
                j.map((a) => {
                  var n;
                  return (n = s.get(a)) != null ? n : null;
                })
              );
            },
            { maxBatchSize: 100, cache: !1, ...B },
          );
        }
        function h(_) {
          return (0, r.V)("PlayerLinkDetails", () => A(_));
        }
      },
      85978: (C, R, t) => {
        "use strict";
        t.d(R, { jn: () => j });
        var e = t(72609),
          r = t(68312),
          o = t(20117),
          i = t(88942),
          A = t(15860);
        const h = 1;
        function _(s) {
          var a, n, f, v, O;
          return (
            (a = s == null ? void 0 : s.private_data) == null ||
              delete a.account_name,
            (n = s == null ? void 0 : s.public_data) == null ||
              delete n.account_flags,
            (f = s == null ? void 0 : s.public_data) == null ||
              delete f.ban_expires_time,
            (v = s == null ? void 0 : s.public_data) == null ||
              delete v.privacy_state,
            ((O = s == null ? void 0 : s.public_data) == null
              ? void 0
              : O.profile_state) !== h &&
              (s == null || delete s.private_data),
            s
          );
        }
        function B(s) {
          return ["PlayerLinkDetails", s];
        }
        function d(s, a) {
          const n =
            typeof a == "number"
              ? o.b2.InitFromAccountID(a, e.TS.EUNIVERSE).ConvertTo64BitString()
              : a;
          return {
            queryKey: B(n),
            queryFn: async () => {
              if (n) {
                const f = await s.load(n);
                return _(f);
              }
              return null;
            },
            enabled: !!n,
          };
        }
        function j(s) {
          const a = (0, r.KV)(),
            n = (0, A.L)(a);
          return (0, i.I)(d(n, s));
        }
        function E(s, a) {
          a.forEach((n) => {
            var f;
            (f = n == null ? void 0 : n.public_data) != null &&
              f.steamid &&
              s.setQueryData(B(n.public_data.steamid), n);
          });
        }
      },
      72524: (C, R, t) => {
        "use strict";
        t.d(R, { R: () => a });
        var e = t(7850),
          r = t(20476),
          o = t(90626),
          i = t(86067),
          A = t(26072),
          h = t(46085),
          _ = t(30770),
          B = t.n(_),
          d = t(19298),
          j = t(1522),
          E = t(68031),
          s = t(75083);
        function a(n) {
          const { reportedContentID: f, onClose: v } = n,
            [O, K] = (0, o.useState)(r.PV),
            x = (0, h.lY)(f),
            [D, M] = (0, o.useState)(""),
            I = async () => {
              await x.mutateAsync({ eNewLevel: O, strNote: D }), v();
            };
          return (0, e.jsxs)(d.Z, {
            className: B().EscalateSubjectDialogCtn,
            children: [
              (0, e.jsx)(d.Z, {
                children: i.T.Localize("#moderation_escalation_description"),
              }),
              (0, e.jsxs)("select", {
                className: B().EscalationLevelSelect,
                value: O,
                onChange: (L) => K(parseInt(L.target.value)),
                children: [
                  (0, e.jsx)("option", {
                    value: r.HH,
                    children: i.T.Localize("#moderation_escalationlevel_any"),
                  }),
                  (0, e.jsx)("option", {
                    value: r.lp,
                    children: i.T.Localize(
                      "#moderation_escalationlevel_supervisor",
                    ),
                  }),
                  (0, e.jsx)("option", {
                    value: r.PV,
                    children: i.T.Localize("#moderation_escalationlevel_valve"),
                  }),
                ],
              }),
              (0, e.jsx)("label", {
                children: i.T.Localize("#moderation_escalation_escalationnote"),
              }),
              (0, e.jsx)(j.f, { onTextChange: M, value: D }),
              (0, e.jsxs)(E.s, {
                direction: "row",
                justify: "end",
                gap: "2",
                marginTop: "2",
                children: [
                  (0, e.jsx)(s.$, {
                    color: "dull",
                    onClick: v,
                    children: A.u.Localize("#moderation_cancel"),
                  }),
                  (0, e.jsx)(s.$, {
                    onClick: I,
                    loading: x.isPending,
                    children: i.T.Localize("#moderation_escalation_escalate"),
                  }),
                ],
              }),
            ],
          });
        }
      },
      14432: (C, R, t) => {
        "use strict";
        t.d(R, { F: () => j });
        var e = t(7850),
          r = t(86392),
          o = t(90626),
          i = t(26072),
          A = t(59884),
          h = t.n(A),
          _ = t(24660),
          B = t(19298),
          d = t(66243);
        function j(E) {
          const [s, a] = (0, o.useState)(null),
            [n, f] = (0, o.useState)([]),
            [v, O] = (0, o.useState)(!1),
            [K, x] = (0, o.useState)(!1);
          let D = E.reasons;
          for (const u of n) D = D[u].children;
          const M = s !== null ? (0, r.V$)(s) : null,
            I = s !== null ? (0, r.GA)(s) : null,
            L = () => {
              s !== null
                ? a(null)
                : n.length === 0
                  ? E.onSelect(null)
                  : f(n.slice(0, -1));
            },
            T = () => {
              let u = s;
              u !== null &&
                (v && (0, r.V$)(u) !== null && (u = (0, r.V$)(u)),
                K && (0, r.GA)(u) !== null && (u = (0, r.GA)(u)),
                E.onSelect(u));
            };
          return (0, e.jsxs)("div", {
            children: [
              s === null &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: h().BlockList,
                      children: D.map((u, g) => {
                        const l = () => {
                          if ((0, r.Ju)(u)) {
                            const p = [...n];
                            p.push(g), f(p);
                          } else if ((0, r.X$)(u))
                            (0, r.V$)(u.value) || (0, r.GA)(u.value)
                              ? a(u.value)
                              : E.onSelect(u.value);
                          else throw new Error("This should be unreachable.");
                        };
                        return (0, r.Ur)(u)
                          ? (0, e.jsx)(
                              _.Ii,
                              {
                                className: h().BlockListItem,
                                href: u.url,
                                children: i.u.Localize(u.strLocToken),
                              },
                              u.url,
                            )
                          : (0, e.jsxs)(
                              B.Z,
                              {
                                onActivate: l,
                                className: h().BlockListItem,
                                children: [
                                  (0, e.jsx)("span", {
                                    children: (0, r.Ju)(u)
                                      ? i.u.Localize(u.strLocToken)
                                      : (0, r.Jt)(u.value),
                                  }),
                                  (0, r.Ju)(u) &&
                                    (0, e.jsx)("span", { children: "\u25B6" }),
                                ],
                              },
                              g,
                            );
                      }),
                    }),
                    (0, e.jsx)(d.n9, { onClick: L, children: "Back" }),
                  ],
                }),
              s !== null &&
                (0, e.jsxs)("div", {
                  className: h().BlockList,
                  children: [
                    (0, e.jsx)("div", {
                      className: h().BlockListItem,
                      children: (0, r.Jt)(s),
                    }),
                    M !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: v,
                            onChange: (u) => O(u.target.checked),
                          }),
                          " Targeted at women",
                        ],
                      }),
                    I !== null &&
                      (0, e.jsxs)("label", {
                        children: [
                          (0, e.jsx)("input", {
                            type: "checkbox",
                            checked: K,
                            onChange: (u) => x(u.target.checked),
                          }),
                          " Deepfake",
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: h().BottomButtons,
                      children: [
                        (0, e.jsx)(d.n9, { onClick: L, children: "Back" }),
                        (0, e.jsx)(d.n9, { onClick: T, children: "Continue" }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        }
      },
      13725: (C, R, t) => {
        "use strict";
        t.d(R, { B8: () => O, lX: () => L });
        var e = t(7850),
          r = t(30986),
          o = t(15252),
          i = t(86336),
          A = t(85978),
          h = t(16114),
          _ = t(26072),
          B = t(80151),
          d = t(49527),
          j = t(85599),
          E = t(3166),
          s = t(86067),
          a = t(20609),
          n = t.n(a),
          f = t(46085),
          v = t(86392);
        function O(u) {
          const { reportedContentID: g } = u;
          return g ? (0, e.jsx)(D, { ...u }) : (0, e.jsx)(K, {});
        }
        function K(u) {
          return (0, e.jsx)("div", {
            children: (0, e.jsxs)("table", {
              className: n().ModerationTable,
              children: [
                (0, e.jsx)(x, {}),
                (0, e.jsx)("tbody", {
                  children: (0, e.jsx)("tr", {
                    children: (0, e.jsx)("td", {
                      colSpan: 4,
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        children: s.T.Localize("#subjectauditlog_noentries"),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        }
        function x() {
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("colgroup", {
                children: [
                  (0, e.jsx)("col", { className: n().DateCol }),
                  (0, e.jsx)("col", { className: n().ActorCol }),
                  (0, e.jsx)("col", { className: n().ActionCol }),
                  (0, e.jsx)("col", {}),
                ],
              }),
              (0, e.jsx)("thead", {
                children: (0, e.jsxs)("tr", {
                  children: [
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Actor",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Action",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Details",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function D(u) {
          var g, l, p, S, z;
          const U = (0, f.Kt)(u.reportedContentID),
            c =
              (p =
                (l =
                  (g = U == null ? void 0 : U.data) == null
                    ? void 0
                    : g.entries) == null
                  ? void 0
                  : l.length) != null
                ? p
                : 0,
            m =
              (z = (S = U.data) == null ? void 0 : S.entries) != null ? z : [];
          return (
            m.sort((y, P) => P.timestamp - y.timestamp),
            (0, e.jsx)("div", {
              children:
                c > 0 &&
                (0, e.jsxs)("table", {
                  className: n().ModerationTable,
                  children: [
                    (0, e.jsx)(x, {}),
                    (0, e.jsxs)("tbody", {
                      children: [
                        U === void 0 &&
                          (0, e.jsx)("tr", {
                            children: (0, e.jsx)("td", {
                              colSpan: 4,
                              children: (0, e.jsx)(o.EY, {
                                size: "2",
                                children: s.T.Localize(
                                  "#subjectauditlog_noentries",
                                ),
                              }),
                            }),
                          }),
                        U &&
                          (0, e.jsxs)(e.Fragment, {
                            children: [
                              U.isLoading &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(j.t, {}),
                                  }),
                                }),
                              U.isError &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_error",
                                      ),
                                    }),
                                  }),
                                }),
                              U.isSuccess &&
                                c === 0 &&
                                (0, e.jsx)("tr", {
                                  children: (0, e.jsx)("td", {
                                    colSpan: 4,
                                    children: (0, e.jsx)(o.EY, {
                                      size: "2",
                                      children: s.T.Localize(
                                        "#subjectauditlog_noentries",
                                      ),
                                    }),
                                  }),
                                }),
                              U.isSuccess &&
                                c > 0 &&
                                m.map((y) =>
                                  (0, e.jsx)(M, { entry: y }, y.timestamp),
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
        function M(u) {
          var g;
          const { entry: l } = u,
            p = (0, A.jn)(l.actor_steamid);
          if (!p.isSuccess || !p.data) return null;
          const S = (g = p.data.public_data) == null ? void 0 : g.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  size: "2",
                  children: (0, h.P0)(l.timestamp, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)(i.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${l.actor_steamid}`,
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        truncate: !0,
                        title: S,
                        className: n().ReporterName,
                        children: S,
                      }),
                    }),
                    (0, e.jsx)(i.Y, {
                      size: "2",
                      href: `${E.TS.COMMUNITY_BASE_URL}moderation/activity/${l.actor_steamid}`,
                      children: "(activity)",
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(o.EY, {
                  size: "2",
                  children: [
                    (0, v.fg)(l.action),
                    l.automated_action &&
                      (0, e.jsx)(e.Fragment, { children: "\xA0(Automated)" }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  as: "div",
                  size: "2",
                  children: (0, e.jsx)(I, {
                    eAction: l.action,
                    jsonData: l.additional_json_data,
                  }),
                }),
              }),
            ],
          });
        }
        function I(u) {
          const { eAction: g, jsonData: l } = u;
          let p = {};
          l && (p = JSON.parse(l));
          const S = p.report_id
            ? (0, e.jsxs)("span", { children: ["Report ID: ", p.report_id] })
            : null;
          switch (g) {
            case B.Hd:
              return S;
            case B._F:
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  "Reason: ",
                  (0, v.Jt)(p.reason),
                  p.resolution !== d.CC &&
                    p.resolution !== d.S6 &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Resolution: ",
                        (0, v.l)(p.resolution),
                      ],
                    }),
                  p.sanctions &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        (0, e.jsx)("br", {}),
                        "Sanctions: ",
                        p.sanctions.map(v.cB).join(", "),
                      ],
                    }),
                ],
              });
            case B.Nu:
              return S;
            case B.XP:
              return (0, e.jsx)(e.Fragment, {
                children: JSON.stringify(p, null, "	"),
              });
            case B.YI:
              return (0, e.jsxs)(e.Fragment, {
                children: ["New level: ", (0, v.ar)(p.level)],
              });
            case B._7:
              return S;
            default:
              return null;
          }
        }
        function L(u) {
          var g;
          const { subject: l } = u,
            p = l && l.reports && l.reports.length > 0,
            S = [
              ...((g = l == null ? void 0 : l.reports) != null ? g : []),
            ].sort((z, U) => {
              var c, m;
              return (
                ((c = U.time_reported) != null ? c : 0) -
                ((m = z.time_reported) != null ? m : 0)
              );
            });
          return (0, e.jsxs)("table", {
            className: n().ModerationTable,
            children: [
              (0, e.jsxs)("colgroup", {
                children: [
                  (0, e.jsx)("col", { className: n().DateCol }),
                  (0, e.jsx)("col", { className: n().ReporterCol }),
                  (0, e.jsx)("col", { className: n().StatusCol }),
                  (0, e.jsx)("col", {}),
                ],
              }),
              (0, e.jsx)("thead", {
                children: (0, e.jsxs)("tr", {
                  children: [
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Date",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reporter",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Status",
                      }),
                    }),
                    (0, e.jsx)("th", {
                      children: (0, e.jsx)(o.EY, {
                        size: "2",
                        weight: "heavy",
                        contrast: "description",
                        children: "Reason",
                      }),
                    }),
                  ],
                }),
              }),
              (0, e.jsxs)("tbody", {
                children: [
                  !p &&
                    (0, e.jsx)("tr", {
                      children: (0, e.jsx)("td", {
                        colSpan: 4,
                        children: (0, e.jsx)(o.EY, {
                          size: "2",
                          children: s.T.Localize(
                            "#contentreportslist_noreports",
                          ),
                        }),
                      }),
                    }),
                  p && S.map((z) => (0, e.jsx)(T, { report: z }, z.report_id)),
                ],
              }),
            ],
          });
        }
        function T(u) {
          var g;
          const { report: l } = u,
            p = (0, A.jn)(l.reporter_steamid);
          if (!p.isSuccess || !((g = p.data) != null && g.public_data))
            return null;
          const S = !!l.time_disputed && l.dispute_resolved === d.z_,
            z =
              l.resolved !== d.z_ &&
              (!l.time_disputed || l.dispute_resolved !== d.z_),
            U = l.time_dispute_resolved !== 0,
            c = l.resolved === d.CC,
            m = p.data.public_data.persona_name;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", {
                children: (0, e.jsx)(o.EY, {
                  size: "2",
                  children: (0, h.P0)(l.time_reported, !1, ""),
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)("div", {
                  className: n().ReporterCell,
                  children: [
                    (0, e.jsx)("a", {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${l.reporter_steamid}`,
                      children: (0, e.jsx)(r.wm, {
                        playerLinkDetails: p.data,
                        size: "X-Small",
                        alt: "Reporter",
                      }),
                    }),
                    (0, e.jsx)(i.Y, {
                      href: `${E.TS.COMMUNITY_BASE_URL}profiles/${l.reporter_steamid}`,
                      children: (0, e.jsx)(o.EY, {
                        title: m,
                        size: "2",
                        truncate: !0,
                        className: n().ReporterName,
                        children: m,
                      }),
                    }),
                  ],
                }),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsxs)(o.EY, {
                  as: "div",
                  size: "2",
                  children: [
                    !z &&
                      (0, e.jsx)("span", {
                        children: _.u.Localize(
                          "#moderation_resolutionstatus_pending",
                        ),
                      }),
                    c &&
                      !S &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_acquitted_at",
                          (0, h.P0)(l.time_resolved, !1, ""),
                        ),
                      }),
                    z &&
                      !c &&
                      !S &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_resolved_at",
                          (0, h.P0)(l.time_resolved, !1, ""),
                        ),
                      }),
                    S &&
                      !U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_disputed_at",
                          (0, h.P0)(l.time_disputed, !1, ""),
                        ),
                      }),
                    U &&
                      (0, e.jsx)("span", {
                        children: s.T.Localize(
                          "#contentreportslist_dispute_resolved_at",
                          (0, h.P0)(l.time_dispute_resolved, !1, ""),
                        ),
                      }),
                  ],
                }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(o.EY, {
                    as: "div",
                    size: "2",
                    children: (0, v.Jt)(l.report_reason),
                  }),
                  !!l.report_text &&
                    (0, e.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(o.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Report: ",
                        }),
                        l.report_text,
                      ],
                    }),
                  !!l.time_disputed &&
                    !!l.dispute_details &&
                    (0, e.jsxs)(o.EY, {
                      as: "div",
                      size: "2",
                      marginTop: "1",
                      children: [
                        (0, e.jsx)(o.EY, {
                          size: "1",
                          weight: "heavy",
                          contrast: "description",
                          children: "Dispute: ",
                        }),
                        l.dispute_details,
                      ],
                    }),
                ],
              }),
            ],
          });
        }
      },
      46085: (C, R, t) => {
        "use strict";
        t.d(R, {
          EC: () => z,
          KQ: () => S,
          Kt: () => I,
          Ky: () => v,
          N8: () => T,
          OI: () => a,
          YL: () => u,
          c3: () => U,
          lY: () => L,
          w3: () => K,
          wy: () => l,
          y4: () => g,
        });
        var e = t(72604),
          r = t(35038),
          o = t(98112),
          i = t(16277),
          A = t(68312),
          h = t(88942),
          _ = t(29385),
          B = t(61739),
          d = t(86392);
        const j = "get_reported_content",
          E = "get_reported_content_by_id",
          s = "get_reported_content_audit_log",
          a = (c) => [j, JSON.stringify(c)],
          n = (c) => [E, c],
          f = (c) => [s, c];
        async function v(c, m) {
          return Promise.all([
            c.invalidateQueries({ queryKey: [j], exact: !1 }),
            c.invalidateQueries({ queryKey: n(m) }),
            c.invalidateQueries({ queryKey: f(m) }),
          ]);
        }
        function O(c, m) {
          return {
            queryKey: a(m),
            enabled: (0, d.NX)(m),
            queryFn: async () => {
              const y = r.w.Init(i.Mw);
              y.Body().set_coordinates(i.UC.fromObject(m));
              const P = await i.fL.GetReportedContent(c, y);
              if (!P.BSuccess())
                throw new Error(
                  "Failed in GetReportedContent, EResult: " + P.GetEResult(),
                );
              return P.Body().toObject();
            },
          };
        }
        function K(c) {
          const m = (0, A.KV)();
          return (0, h.I)(O(m, c));
        }
        function x(c, m) {
          return {
            queryKey: n(m),
            queryFn: async () => {
              const y = CProtoBufMsg.Init(
                CContentModeration_GetReportedContentByID_Request,
              );
              y.Body().set_reported_content_id(m);
              const P = await ContentModerationService.GetReportedContentByID(
                c,
                y,
              );
              if (!P.BSuccess())
                throw new Error(
                  "Failed in GetReportedContentByID, EResult: " +
                    P.GetEResult(),
                );
              return P.Body().toObject();
            },
          };
        }
        function D(c) {
          const m = useActiveServiceTransport();
          return useQuery(x(m, c));
        }
        function M(c, m) {
          return {
            queryKey: f(m),
            queryFn: async () => {
              if (!m) return;
              const y = r.w.Init(i.v5);
              return (
                y.Body().set_reported_content_id(m),
                (await i.fL.GetAuditLogByID(c, y)).Body().toObject()
              );
            },
          };
        }
        function I(c) {
          const m = (0, A.KV)();
          return (0, h.I)(M(m, c));
        }
        function L(c) {
          const m = (0, A.KV)(),
            y = (0, _.jE)();
          return (0, B.n)({
            mutationFn: async (P) => {
              const W = r.w.Init(i.Qi);
              W.Body().set_reported_content_id(c),
                W.Body().set_new_level(P.eNewLevel),
                P.eReason && W.Body().set_reason(P.eReason),
                P.strNote && W.Body().set_note(P.strNote);
              const Q = await i.fL.EscalateSubjectByID(m, W);
              if (Q.GetEResult() !== e.R)
                throw new Error(`Failed to escalate subject: ${Q.GetEMsg()}`);
            },
            onSuccess: async () => {
              await Promise.all([
                v(y, c),
                y.invalidateQueries({ queryKey: ["get_claimed"] }),
                y.invalidateQueries({ queryKey: ["get_subject_overview"] }),
              ]);
            },
          });
        }
        function T() {
          const c = (0, A.KV)(),
            m = (0, _.jE)();
          return (0, B.n)({
            mutationFn: async (y) => {
              const P = r.w.Init(i.Nr);
              P.Body().set_reported_content_id(y.reportedContentID);
              const W = await i.fL.SustainModerationByID(c, P);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async (y, P) => {
              await v(m, P.reportedContentID),
                await m.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function u(c) {
          const m = (0, _.jE)(),
            y = (0, A.KV)();
          return (0, B.n)({
            mutationKey: ["release_subject", ...c],
            mutationFn: async () => {
              const P = r.w.Init(i.GD);
              for (const Q of c) {
                const b = new i.F9();
                b.set_reported_content_id(Q),
                  P.Body().add_subjects_to_release(b);
              }
              const W = await i.fL.ReleaseSubjects(y, P);
              if (!W.BSuccess()) throw new Error("EResult " + W.GetEResult());
            },
            onSuccess: async () => {
              await Promise.all([
                m.invalidateQueries({ queryKey: ["get_claimed"] }),
                m.invalidateQueries({ queryKey: ["get_subject_overview"] }),
                ...c.map((P) => v(m, P)),
              ]);
            },
          });
        }
        function g(c, m) {
          const y = (0, A.KV)(),
            P = (0, _.jE)();
          return (0, B.n)({
            mutationFn: async () => {
              const W = r.w.Init(i.LW);
              W.Body().set_reported_content_id(c), W.Body().set_details(m);
              const Q = await i.fL.OwnerDisputeModeration(y, W);
              if (!Q.BSuccess()) throw new Error("EResult " + Q.GetEResult());
            },
            onSuccess: async () => {
              await v(P, c);
            },
          });
        }
        function l(c, m) {
          const y = (0, _.jE)(),
            P = (0, A.KV)();
          return (0, B.n)({
            mutationFn: async () => {
              const W = r.w.Init(i.ps);
              W.Body().set_reported_content_id(c),
                W.Body().set_owner_dispute_details(m);
              const Q = await i.fL.UpdateSubjectByID(P, W);
              if (!Q.BSuccess()) throw new Error("EResult " + Q.GetEResult());
            },
            onSuccess: async () => {
              await v(y, c);
            },
          });
        }
        function p(c, m) {
          return {
            queryKey: ["reporterstats", m],
            queryFn: async () => {
              const y = r.w.Init(i.KD);
              y.Body().set_steamid(m);
              const P = await i.fL.GetReporterStats(c, y);
              if (!P.BSuccess()) throw new Error("EResult " + P.GetEResult());
              return P.Body().toObject();
            },
          };
        }
        function S(c) {
          const m = (0, A.KV)();
          return (0, h.I)(p(m, c));
        }
        function z(c, m, y) {
          const P = (0, A.KV)(),
            W = (0, _.jE)();
          return (0, B.n)({
            mutationFn: async (Q) => {
              const b = r.w.Init(o.Er);
              b.Body().set_steamid(c),
                b.Body().set_comment_thread_id(m),
                b.Body().set_gidcomment(y),
                b.Body().set_reason(Q.reason),
                b.Body().set_note(Q.message);
              for (const F of Q.sanctions) {
                const G = new o.u6();
                G.set_sanction(F.sanction),
                  F.days && G.set_days(F.days),
                  b.Body().add_sanctions(G);
              }
              const N = await o.BE.SanctionComment(P, b);
              if (!N.BSuccess())
                throw new Error(
                  `SanctionComment failed. EResult: ${N.GetEResult()} (${N.GetErrorMessage()})`,
                );
            },
            onSuccess: async () => {
              await W.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
        function U(c, m, y) {
          const P = (0, A.KV)(),
            W = (0, _.jE)();
          return (0, B.n)({
            mutationFn: async () => {
              const Q = r.w.Init(o.RX);
              Q.Body().set_steamid(c),
                Q.Body().set_comment_thread_id(m),
                Q.Body().set_gidcomment(y),
                Q.Body().set_report_action(o.du.Pn),
                Q.Body().set_resolve(!0),
                await o.Vi.UpdateCommentReportState(P, Q);
            },
            onSuccess: async () => {
              await W.invalidateQueries({ queryKey: ["get_claimed"] });
            },
          });
        }
      },
      76617: (C, R, t) => {
        "use strict";
        t.d(R, { V: () => B });
        function e(d) {
          return Object.prototype.toString.call(d) === "[object Object]";
        }
        function r(d) {
          if (!e(d)) return !1;
          const j = d.constructor;
          if (typeof j == "undefined") return !0;
          const E = j.prototype;
          return !(
            !e(E) || !Object.prototype.hasOwnProperty.call(E, "isPrototypeOf")
          );
        }
        function o(...d) {
          return JSON.stringify(d, (j, E) => {
            if (r(E)) {
              const s = {};
              return (
                Object.keys(E)
                  .sort()
                  .forEach((a) => {
                    s[a] = E[a];
                  }),
                s
              );
            }
            return E;
          });
        }
        var i = t(90626),
          A = t(7850);
        const h = (0, i.createContext)({ instances: {}, factories: {} });
        function _(d) {
          const { name: j, fnFactory: E, children: s } = d,
            a = React.useContext(h),
            [n] = useState({}),
            f = useMemo(
              () => ({
                instances: n,
                factories: { ...a.factories, [j]: E },
                parent: a,
              }),
              [n, j, a],
            );
          return jsx(h.Provider, { value: f, children: s });
        }
        function B(d, j) {
          var E;
          const s = (0, i.useContext)(h),
            a = typeof d == "string" ? d : o(...d);
          let n = s;
          for (; n; ) {
            if (a in n.instances) return n.instances[a];
            if (a in n.factories) break;
            n = n.parent;
          }
          const v = (
            (E = n == null ? void 0 : n.factories[a]) != null ? E : j
          )();
          return ((n != null ? n : s).instances[a] = v), v;
        }
      },
      66243: (C, R, t) => {
        "use strict";
        t.d(R, { Oh: () => j, n9: () => B, sP: () => A });
        var e = t(7850),
          r = t(24660),
          o = t(44375),
          i = t.n(o);
        function A(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(r.fu, {
            className: o.GreenButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function h(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function _(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function B(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(r.fu, {
            className: o.BlueButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function d(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
        function j(s) {
          const { children: a, ...n } = s;
          return (0, e.jsx)(r.fu, {
            className: o.GreyButton,
            type: "button",
            ...n,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function E(s) {
          const { children: a, ...n } = s;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...n,
            children: jsx("span", { children: a }),
          });
        }
      },
      16339: (C) => {
        C.exports = {
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
      38878: (C) => {
        C.exports = {
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
      24089: (C) => {
        C.exports = { TextEntry: "_1vE-LsK6l_D_5yjbywZV1p" };
      },
      65274: (C) => {
        C.exports = {
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
      50122: (C) => {
        C.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      30770: (C) => {
        C.exports = {
          EscalateSubjectDialogCtn: "_2JObmr3sTdkGUMl1qy7pFq",
          BottomButtons: "_3ismg57mYPglYuxYD8MyWH",
          EscalationLevelSelect: "eM6-NVA-Wty4aAN1I5edn",
          ReasonTextArea: "_2Y0347paZ_xn2vI7jgBpkJ",
        };
      },
      59884: (C) => {
        C.exports = {
          BlockList: "F2uRfcfN3gZAD8WCNOVq6",
          BlockListItem: "eti_An9vsSQWyfrrZgqZO",
          DefaultItem: "zvsH8nLNLnBES_qChiT1v",
        };
      },
      20609: (C) => {
        C.exports = {
          ModerationTable: "B_CTlZJTCpB51h5D3KWu_",
          DateCol: "aLI0z0IY1ZCOHVZ6SLNx7",
          ReporterCol: "d_bWuY3Uyq1mDx69WuZxS",
          StatusCol: "_3Obdj5melGcGBcTf3eRBE3",
          ActorCol: "mznx-al2cLLnbFgi_8eth",
          ActionCol: "_pcwGAPcwJyBzTt8ykeKF",
          ReporterCell: "_1eEXuIiBlAL6-KQEr8s7iq",
          ReporterName: "_3gF45ikEXjHH4wFKEIGFSB",
        };
      },
      44375: (C) => {
        C.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
    },
  ]);
})();
