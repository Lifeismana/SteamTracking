/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [22634],
    {
      15860: (B, O, r) => {
        "use strict";
        r.d(O, { L: () => L, c: () => f });
        var e = r(27386),
          m = r(76617),
          S = r(58632),
          D = r.n(S);
        function f(u, y) {
          return new (D())(
            async (E) => {
              const w = [...E],
                s = await e.xtC.GetPlayerLinkDetails(u, { steamids: w }),
                A = new Map();
              return (
                s
                  .Body()
                  .accounts()
                  .forEach((j) => {
                    const k = j.toObject();
                    A.set(k.public_data.steamid, k);
                  }),
                w.map((j) => A.get(j) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...y },
          );
        }
        function L(u) {
          return (0, m.V)("PlayerLinkDetails", () => f(u));
        }
      },
      76617: (B, O, r) => {
        "use strict";
        r.d(O, { V: () => y });
        function e(E) {
          return Object.prototype.toString.call(E) === "[object Object]";
        }
        function m(E) {
          if (!e(E)) return !1;
          const w = E.constructor;
          if (typeof w > "u") return !0;
          const s = w.prototype;
          return !(
            !e(s) || !Object.prototype.hasOwnProperty.call(s, "isPrototypeOf")
          );
        }
        function S(...E) {
          return JSON.stringify(E, (w, s) => {
            if (m(s)) {
              const A = {};
              return (
                Object.keys(s)
                  .sort()
                  .forEach((j) => {
                    A[j] = s[j];
                  }),
                A
              );
            }
            return s;
          });
        }
        var D = r(90626),
          f = r(7850);
        const L = (0, D.createContext)({ instances: {}, factories: {} });
        function u(E) {
          const { name: w, fnFactory: s, children: A } = E,
            j = React.useContext(L),
            [k] = useState({}),
            N = useMemo(
              () => ({
                instances: k,
                factories: { ...j.factories, [w]: s },
                parent: j,
              }),
              [k, w, j],
            );
          return jsx(L.Provider, { value: N, children: A });
        }
        function y(E, w) {
          const s = (0, D.useContext)(L),
            A = typeof E == "string" ? E : S(...E);
          let j = s;
          for (; j; ) {
            if (A in j.instances) return j.instances[A];
            if (A in j.factories) break;
            j = j.parent;
          }
          const N = (j?.factories[A] ?? w)();
          return ((j ?? s).instances[A] = N), N;
        }
      },
      88034: (B, O, r) => {
        "use strict";
        r.d(O, { Gw: () => f, Lk: () => L, ai: () => D, mm: () => S });
        var e = r(14947);
        const m = e.sH.box(void 0);
        function S() {
          return m.get();
        }
        function D(u) {
          (0, e.h5)(() => m.set(u));
        }
        function f() {
          const u = m.get();
          return u || Math.floor(Date.now() / 1e3);
        }
        function L() {
          const u = m.get();
          return u ? new Date(u * 1e3) : new Date();
        }
      },
      46943: (B, O, r) => {
        "use strict";
        r.d(O, { Ul: () => c, xz: () => g, $Y: () => b, i8: () => p });
        var e = r(7850),
          m = r(90626),
          S = r(75844),
          D = r(5858),
          f = r(36707),
          L = r(3166),
          u = r(13465);
        const y =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          E =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          w =
            r.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var s = r(43047),
          A = r.n(s),
          j = r(71742),
          k = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          h = (l, d, v, C) => {
            for (
              var M = C > 1 ? void 0 : C ? N(d, v) : d, R = l.length - 1, G;
              R >= 0;
              R--
            )
              (G = l[R]) && (M = (C ? G(d, v, M) : G(M)) || M);
            return C && M && k(d, v, M), M;
          };
        function _(l) {
          switch (l) {
            case "X-Small":
            case "Small":
              return y;
            case "Medium":
            case "MediumLarge":
              return E;
            case "Large":
            case "X-Large":
            case "FillArea":
              return w;
            default:
              return (0, j.z_)(l, `Unhandled size ${l}`), E;
          }
        }
        const c = m.memo(function (d) {
          const {
              strAvatarURL: v,
              size: C = "Medium",
              className: M,
              statusStyle: R,
              statusPosition: G,
              children: F,
              ...Q
            } = d,
            V = m.useMemo(() => {
              const W = [];
              return v && W.push(v), W.push(_(C)), W;
            }, [v, C]);
          return (0, e.jsxs)("div", {
            className: (0, f.A)(
              A().avatarHolder,
              "avatarHolder",
              "no-drag",
              C,
              M,
            ),
            ...Q,
            children: [
              (0, e.jsx)("div", {
                className: (0, f.A)(A().avatarStatus, "avatarStatus", G),
                style: R,
              }),
              (0, e.jsx)(u.c, {
                className: (0, f.A)(A().avatar, "avatar"),
                rgSources: V,
                draggable: !1,
              }),
              F,
            ],
          });
        });
        let p = class extends m.Component {
          render() {
            const {
              persona: l,
              size: d = "Medium",
              animatedAvatar: v,
              className: C,
              strBackupAvatarURL: M,
              ...R
            } = this.props;
            let G = "";
            return (
              v && v.image_small && v.image_small.length != 0
                ? (G = L.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + v.image_small)
                : l
                  ? ((G = l.avatar_url_medium),
                    d == "Small" || d == "X-Small"
                      ? (G = l.avatar_url)
                      : (d == "Large" || d == "X-Large" || d == "FillArea") &&
                        (G = l.avatar_url_full))
                  : M && (G = M),
              (0, e.jsx)(c, {
                strAvatarURL: G,
                size: d,
                className: (0, f.A)((0, D.rO)(l), C),
                ...R,
              })
            );
          }
        };
        p = h([S.PA], p);
        const b = (0, S.PA)((l) => {
          const {
            profileItem: d,
            className: v,
            bDisableAnimation: C,
            ...M
          } = l;
          if (!d || !d.image_small || d.image_small.length == 0) return null;
          let R = C ? d.image_large : d.image_small;
          return (
            R || (R = d.image_small),
            R.startsWith("https://") ||
              (R = L.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + R),
            (0, e.jsx)("div", {
              className: (0, f.A)(A().avatarFrame, v, "avatarFrame"),
              ...M,
              children: (0, e.jsx)("img", {
                className: A().avatarFrameImg,
                src: R,
              }),
            })
          );
        });
        let g = class extends m.Component {
          m_timer;
          constructor(l) {
            super(l),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let l = 0;
            switch (this.props.loopDuration) {
              case "Short":
                l = 2500;
                break;
              case "Medium":
                l = 5e3;
                break;
              case "Long":
                l = 1e4;
                break;
            }
            l != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                l,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(l) {
            this.props.loopDuration != l.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != l.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: l,
              animatedAvatar: d,
              avatarFrame: v,
              children: C,
              style: M,
              bLimitProfileFrameAnimationTime: R,
              bParentHovered: G,
              ...F
            } = this.props;
            F.onClick && (M = { ...M, cursor: "pointer" });
            const Q = this.state.bAnimate ? (d ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(p, {
                animatedAvatar: Q,
                ...F,
                children: [
                  C,
                  (0, e.jsx)(b, {
                    profileItem: v ?? null,
                    bDisableAnimation: R && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        g = h([S.PA], g);
      },
      7582: (B, O, r) => {
        "use strict";
        r.d(O, { HD: () => y, f1: () => k, s4: () => N, sB: () => j });
        var e = r(19367),
          m = r.n(e),
          S = r(90626),
          D = r(88034),
          f = r(47689),
          L = r(77291);
        class u {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, D.mm)();
          }
          set nOverrideDateNow(_) {
            (0, D.ai)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, D.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, D.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, D.mm)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const y = new u();
        (0, L.V)("g_EventCalendarDevFeatures", y);
        function E(h = 1) {
          const [_, c] = React.useState(() => A()),
            p = useCancelTokenSource("useTimeNowWithOverride"),
            b = React.useCallback(() => {
              p.token.reason || c(A());
            }, []);
          return (
            React.useEffect(() => {
              const g = 1e3 * h,
                l = Date.now() % g,
                d = g - l,
                v = window.setTimeout(b, d);
              return () => {
                window.clearTimeout(v);
              };
            }, [_, h, b]),
            _
          );
        }
        const s = Math.floor(new Date().getTime() / 1e3);
        function A() {
          const h = Math.floor(Date.now() / 1e3);
          return y.nOverrideDateNow ? y.nOverrideDateNow + (h - s) : h;
        }
        function j() {
          return y.nOverrideDateNow ?? s;
        }
        function k() {
          return S.useMemo(() => j(), []);
        }
        function N() {
          return S.useMemo(() => y.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      35098: (B, O, r) => {
        "use strict";
        r.d(O, { DW: () => A, js: () => w, mK: () => _, tb: () => h });
        var e = r(90626),
          m = r(80902),
          S = r(54806),
          D = r(99412),
          f = r(68312),
          L = r(15369),
          u = r(5858),
          y = r(76559),
          E = r(15860);
        function w(g) {
          const l = (0, f.KV)(),
            d = e.useContext(N);
          return (0, m.I)(_(d, l, g));
        }
        function s(g) {
          const l = React.useRef(void 0),
            d = w(g);
          return d.data
            ? d
            : (l.current ||
                (l.current = new CPersonaStateImpl(
                  typeof g == "string"
                    ? new CSteamID(g)
                    : CSteamID.InitFromAccountID(g),
                )),
              { ...d, data: l.current });
        }
        function A(g) {
          const l = (0, f.KV)(),
            d = e.useContext(N);
          return (0, S.E)({ queries: g.map((v) => _(d, l, v)) });
        }
        function j(g) {
          return ReactQueryClient.getQueryData(["PlayerSummary", g]);
        }
        function k(g) {
          const { loadPersonaState: l, children: d } = g,
            v = React.useMemo(() => ({ loadPersonaState: l }), [l]);
          return React.createElement(N.Provider, { value: v }, d);
        }
        const N = e.createContext({
          loadPersonaState: async (g, l) => {
            if (g == null) return null;
            const d = await p(l).load(
              y.b.InitFromAccountID(g).ConvertTo64BitString(),
            );
            return b(y.b.InitFromAccountID(g), d);
          },
        });
        function h() {
          return e.useContext(N);
        }
        function _(g, l, d) {
          const v = typeof d == "string" ? new y.b(d).GetAccountID() : d;
          return {
            queryKey: ["PlayerSummary", v],
            queryFn: () => g.loadPersonaState(v, l),
            enabled: !!v,
          };
        }
        let c;
        function p(g) {
          return (c ??= (0, E.c)(g));
        }
        function b(g, l) {
          let d = new u.Z(g);
          const v = l?.public_data,
            C = l?.private_data;
          return (
            (d.m_bInitialized = !!l),
            (d.m_ePersonaState = C?.persona_state ?? D.cU3),
            (d.m_strAvatarHash = v?.sha_digest_avatar
              ? (0, L.Kx)(v.sha_digest_avatar)
              : u.dV),
            (d.m_strPlayerName = v?.persona_name ?? g.ConvertTo64BitString()),
            (d.m_strAccountName = C?.account_name),
            C?.persona_state_flags &&
              (d.m_unPersonaStateFlags = C?.persona_state_flags),
            C?.game_id && (d.m_gameid = C?.game_id),
            C?.game_server_ip_address &&
              (d.m_unGameServerIP = C?.game_server_ip_address),
            C?.lobby_steam_id && (d.m_game_lobby_id = C?.lobby_steam_id),
            C?.game_extra_info && (d.m_strGameExtraInfo = C?.game_extra_info),
            v?.profile_url && (d.m_strProfileURL = v.profile_url),
            d
          );
        }
      },
      63547: (B, O, r) => {
        "use strict";
        r.d(O, { QW: () => N, VZ: () => k, g: () => A, kF: () => s });
        var e = r(72604),
          m = r(35038),
          S = r(55051),
          D = r(72609),
          f = r(80902),
          L = r(75233),
          u = r(51614),
          y = r(90626),
          E = r(68312);
        const w = "PlaytestInvites";
        function s() {
          const h = (0, E.KV)();
          return (0, f.I)({
            queryKey: [w],
            queryFn: async () => {
              const _ = m.w.Init(S.rX),
                c = await S.BX.GetInvites(h, _);
              if (c.GetEResult() != e.R)
                throw new Error(
                  `Error from usePlaytestInvite: ${c.GetEResult()} ${c.GetErrorMessage()}`,
                );
              return c.Body()?.toObject().invites ?? [];
            },
          });
        }
        function A(h) {
          const _ = (0, E.KV)(),
            c = (0, L.jE)();
          return (0, u.n)({
            mutationFn: async (p) => {
              const b = m.w.Init(S.q);
              b.Body().add_invite_ids(h),
                b.Body().set_status(p.bAccept ? S.b1.T5 : S.b1.eh);
              const g = await S.BX.UpdateInvites(_, b);
              if (g.GetEResult() != e.R)
                throw {
                  result: g.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${g.GetErrorMessage()} ( ${g.GetEResult()} )`,
                };
            },
            onSuccess: (p, b) => {
              c.setQueryData([w], (g) =>
                g.map((l) =>
                  l.invite_id === h
                    ? { ...l, status: b.bAccept ? S.b1.T5 : S.b1.eh }
                    : l,
                ),
              );
            },
            onError: () => {
              c.invalidateQueries({ queryKey: [w] });
            },
          });
        }
        function j(h) {
          return ["PlaytestUserStatus", h];
        }
        function k(h) {
          const _ = (0, E.KV)();
          return (0, f.I)({
            queryKey: j(h),
            queryFn: async () => {
              if (D.iA.logged_in) {
                const c = m.w.Init(S.eW);
                h && c.Body().set_appid(h);
                const p = await S.BX.GetUserStatus(_, c);
                if (p.GetEResult() != e.R)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${p.GetEResult()} ${p.GetErrorMessage()}`,
                  );
                return p.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function N() {
          const h = (0, L.jE)();
          return y.useCallback(
            (_, c) => {
              h.setQueryData(j(_), c);
            },
            [h],
          );
        }
      },
      84676: (B, O, r) => {
        "use strict";
        r.d(O, {
          G6: () => A,
          Gg: () => N,
          Ow: () => k,
          Sq: () => E,
          YM: () => g,
          eR: () => w,
          ik: () => s,
          mZ: () => h,
          t7: () => j,
          zX: () => c,
        });
        var e = r(41735),
          m = r.n(e),
          S = r(90626),
          D = r(72604),
          f = r(56062),
          L = r(30096),
          u = r(10142);
        function y(l, d, v = !0) {
          const C = v
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            M = v || CStoreItemCache.Get().BHasStoreItem(l, d, C) ? l : null,
            [R, G] = A(M, d, C),
            [F, Q] = useState(null),
            [V, W] = A(F, d, C);
          useEffect(() => {
            R?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              Q(R.GetParentAppID());
          }, [R]);
          let J = R?.GetShortDescription()
            ? StripBBCodeTags(R.GetShortDescription())
            : "";
          (!J || J.length === 0) &&
            V &&
            (J = V?.GetShortDescription()
              ? StripBBCodeTags(V.GetShortDescription())
              : "");
          const z = G == s && (!F || W == s);
          return [J, z];
        }
        const E = 1,
          w = 2,
          s = 3;
        function A(l, d, v, C) {
          const M = (0, S.useRef)(void 0),
            R = (0, S.useRef)(void 0),
            G = (0, L.CH)();
          M.current = l;
          const [F, Q] = (0, S.useState)(void 0),
            {
              include_assets: V,
              include_release: W,
              include_platforms: J,
              include_all_purchase_options: z,
              include_screenshots: oe,
              include_trailers: ce,
              include_ratings: le,
              include_tag_count: ae,
              include_reviews: q,
              include_basic_info: de,
              include_supported_languages: re,
              include_full_description: ne,
              include_included_items: $,
              include_assets_without_overrides: ie,
              apply_user_filters: Y,
              include_links: ue,
              include_extra_details: me,
            } = v;
          if (
            ((0, S.useEffect)(() => {
              const ee = {
                include_assets: V,
                include_release: W,
                include_platforms: J,
                include_all_purchase_options: z,
                include_screenshots: oe,
                include_trailers: ce,
                include_ratings: le,
                include_tag_count: ae,
                include_reviews: q,
                include_basic_info: de,
                include_supported_languages: re,
                include_full_description: ne,
                include_included_items: $,
                include_assets_without_overrides: ie,
                apply_user_filters: Y,
                include_links: ue,
                include_extra_details: me,
              };
              let _e = null;
              return (
                !l ||
                  l < 0 ||
                  u.A.Get().BHasStoreItem(l, d, ee) ||
                  (F !== void 0 && C && C == R.current) ||
                  (C !== R.current && (Q(void 0), (R.current = C)),
                  (_e = m().CancelToken.source()),
                  u.A.Get()
                    .QueueStoreItemRequest(l, d, ee)
                    .then((ye) => {
                      !_e?.token.reason && M.current === l && Q(ye == D.R), G();
                    })),
                () => _e?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              l,
              d,
              C,
              F,
              V,
              W,
              J,
              z,
              oe,
              ce,
              le,
              ae,
              q,
              de,
              re,
              ne,
              $,
              ie,
              Y,
              ue,
              me,
              G,
            ]),
            !l)
          )
            return [null, w];
          if (F === !1) return [void 0, w];
          if (u.A.Get().BIsStoreItemMissing(l, d)) return [void 0, w];
          if (!u.A.Get().BHasStoreItem(l, d, v)) return [void 0, E];
          const pe = u.A.Get().GetStoreItemWithLegacyVisibilityCheck(l, d);
          return pe ? [pe, s] : [null, w];
        }
        function j(l, d, v) {
          return A(l, f.c6.qI, d, v);
        }
        function k(l, d, v) {
          return A(l, f.c6.xO, d, v);
        }
        function N(l, d, v) {
          return A(l, f.c6.RD, d, v);
        }
        function h(l, d, v) {
          const [C, M] = A(l, d, v);
          let R;
          C?.GetStoreItemType() == f.c6.RD &&
            !C.GetAssets()?.GetHeaderURL() &&
            C?.GetIncludedAppIDs().length == 1 &&
            (R = C.GetIncludedAppIDs()[0]);
          const [G, F] = j(R, v);
          return R && G?.BIsVisible() ? [G, F] : [C, M];
        }
        function _(l, d, v, C) {
          const M = (0, L.CH)(),
            {
              include_assets: R,
              include_release: G,
              include_platforms: F,
              include_all_purchase_options: Q,
              include_screenshots: V,
              include_trailers: W,
              include_ratings: J,
              include_tag_count: z,
              include_reviews: oe,
              include_basic_info: ce,
              include_supported_languages: le,
              include_full_description: ae,
              include_included_items: q,
              include_assets_without_overrides: de,
              apply_user_filters: re,
              include_links: ne,
              include_extra_details: $,
            } = v;
          return (
            (0, S.useEffect)(() => {
              if (!l || l.length == 0) return;
              const Y = {
                  include_assets: R,
                  include_release: G,
                  include_platforms: F,
                  include_all_purchase_options: Q,
                  include_screenshots: V,
                  include_trailers: W,
                  include_ratings: J,
                  include_tag_count: z,
                  include_reviews: oe,
                  include_basic_info: ce,
                  include_supported_languages: le,
                  include_full_description: ae,
                  include_included_items: q,
                  include_assets_without_overrides: de,
                  apply_user_filters: re,
                  include_links: ne,
                  include_extra_details: $,
                },
                ue = l.filter(
                  (ee) =>
                    !(
                      u.A.Get().BHasStoreItem(ee, d, Y) ||
                      u.A.Get().BIsStoreItemMissing(ee, d)
                    ),
                );
              if (ue.length == 0) return;
              const me = m().CancelToken.source(),
                pe = ue.map((ee) => u.A.Get().QueueStoreItemRequest(ee, d, Y));
              return (
                Promise.all(pe).then(() => {
                  me.token.reason || M();
                }),
                () => me.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              l,
              d,
              C,
              M,
              R,
              G,
              F,
              Q,
              V,
              W,
              J,
              z,
              oe,
              ce,
              le,
              ae,
              q,
              de,
              re,
              ne,
              $,
            ]),
            l
              ? l.every(
                  (Y) =>
                    u.A.Get().BHasStoreItem(Y, d, v) ||
                    u.A.Get().BIsStoreItemMissing(Y, d),
                )
                ? l.every((Y) =>
                    u.A.Get().GetStoreItemWithLegacyVisibilityCheck(Y, d),
                  )
                  ? s
                  : w
                : E
              : w
          );
        }
        function c(l, d, v) {
          return _(l, f.c6.qI, d, v);
        }
        function p(l, d, v) {
          return _(l, EStoreItemType.k_EStoreItemType_Bundle, d, v);
        }
        function b(l, d, v) {
          return _(l, EStoreItemType.k_EStoreItemType_Package, d, v);
        }
        function g() {
          S.useEffect(
            () => (
              u.A.Get().SetReturnUnavailableItems(!0),
              () => u.A.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      54929: (B, O, r) => {
        "use strict";
        r.d(O, { XC: () => w, _G: () => A });
        var e = r(7850),
          m = r(90626),
          S = r(36118),
          D = r(36707),
          f = r(41672),
          L = r(96538),
          u = r(39449),
          y = r.n(u),
          E = r(18210);
        function w() {
          const [j, k] = m.useState(void 0),
            N = m.useCallback(() => k(void 0), []),
            h = (0, e.jsx)(L.EN, {
              active: j !== void 0,
              children: (0, e.jsx)(s, { closeModal: N, rgImageURL: j }),
            });
          return [k, h];
        }
        function s(j) {
          const { closeModal: k, rgImageURL: N } = j,
            [h, _] = m.useState(0),
            c = N?.length ?? 0,
            p = m.useCallback(() => {
              h == 0 ? _(c - 1) : _(h - 1);
            }, [h, c]),
            b = m.useCallback(() => {
              N && h + 1 >= c ? _(0) : _(h + 1);
            }, [h, N, c]);
          return (0, e.jsxs)(L.eV, {
            title: (0, E.we)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: k,
            bHideCloseIcon: !0,
            modalClassName: y().PopupScreenshotModal,
            children: [
              (0, e.jsx)(A, {
                index: h,
                numElements: N?.length || 0,
                fnForward: b,
                fnBackwards: p,
                fnClose: k,
                bCircular: !0,
              }),
              (0, e.jsx)("div", {
                className: y().PopupScreenshotContainer,
                children: (0, e.jsx)("img", {
                  className: y().PopupScreenshot,
                  src: N?.[h],
                }),
              }),
            ],
          });
        }
        function A(j) {
          const {
            index: k,
            numElements: N,
            fnForward: h,
            fnBackwards: _,
            fnClose: c,
            bCircular: p,
          } = j;
          (0, f.E)("ArrowLeft", () => _?.(), !0, !0),
            (0, f.E)("Left", () => _?.(), !0, !0),
            (0, f.E)("ArrowRight", () => h?.(), !0, !0),
            (0, f.E)("Right", () => h?.(), !0, !0),
            (0, f.E)("Escape", () => c && c(), !0, !0),
            (0, f.E)("Esc", () => c && c(), !0, !0);
          let b = N > 1;
          return (0, e.jsxs)("div", {
            className: y().ButtonCtn,
            children: [
              b &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        y().ButtonIcon,
                        k === 0 && !p ? y().Disabled : null,
                      ),
                      onClick: _,
                      children: (0, e.jsx)(S.V5W, { angle: 270 }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, D.A)(
                        y().ButtonIcon,
                        k === N - 1 && !p ? y().Disabled : null,
                      ),
                      onClick: h,
                      children: (0, e.jsx)(S.V5W, { angle: 90 }),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: y().ButtonIcon,
                onClick: c,
                children: (0, e.jsx)(S.X, {}),
              }),
            ],
          });
        }
      },
      39239: (B, O, r) => {
        "use strict";
        r.d(O, { i: () => y, o: () => u });
        var e = r(7850),
          m = r(90626),
          S = r(18210),
          D = r(67523),
          f = r.n(D),
          L = r(80150);
        function u(E) {
          const {
              className: w,
              srcs: s,
              lazyLoad: A,
              width: j,
              height: k,
              alt: N,
              crossOrigin: h,
            } = E,
            [_, c] = m.useState(s.length),
            [p, b] = m.useState(0);
          m.useEffect(() => {
            _ != s.length && (c(s.length), b(0));
          }, [_, s.length]);
          const g = m.useCallback(() => {
            E.onImageError && E.onImageError(E.srcs[p]),
              p + 1 < E.srcs.length && b(p + 1);
          }, [p, E]);
          return s.length == 0
            ? null
            : (0, e.jsx)("img", {
                className: w,
                src: s[p],
                crossOrigin: h,
                onError: g,
                loading: A ? "lazy" : void 0,
                width: j,
                height: k,
                alt: N,
              });
        }
        function y(E) {
          const [w, s] = m.useState(!1),
            {
              className: A,
              src: j,
              lazyLoad: k,
              width: N,
              height: h,
              alt: _,
              crossOrigin: c,
            } = E;
          return w
            ? (0, e.jsxs)("div", {
                className: D.ErrorDiv,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, S.we)("#Image_ErrorTitle", j),
                  }),
                  (0, e.jsx)("ul", {
                    children: (0, e.jsx)("li", {
                      children: (0, S.we)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, e.jsx)("p", {
                    children: (0, S.we)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, e.jsx)(L.o, {
                className: A,
                src: j,
                onError: () => s(!0),
                crossOrigin: c,
                loading: k ? "lazy" : void 0,
                width: N,
                height: h,
                alt: _,
              });
        }
      },
      80150: (B, O, r) => {
        "use strict";
        r.d(O, { o: () => A });
        var e = r(7850),
          m = r(90626),
          S = r(36118),
          D = r(36707),
          f = r(54929),
          L = r(21659),
          u = r(21038),
          y = r.n(u);
        const E = 1.3,
          w = 3,
          s = 256;
        function A(j) {
          const [k, N] = (0, m.useState)(!1),
            [h, _] = (0, m.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            c = (0, m.useRef)(null),
            [p, b] = (0, f.XC)();
          return (
            (0, m.useEffect)(() => {
              h.naturalWidth > h.displayWidth * E &&
                h.naturalHeight > h.displayHeight * E &&
                h.naturalWidth > s &&
                h.naturalWidth / h.naturalHeight < w &&
                N(!0);
            }, [h]),
            k
              ? (0, e.jsxs)("span", {
                  className: u.PreviewCtn,
                  children: [
                    b,
                    (0, e.jsx)("span", {
                      className: u.SVG,
                      children: (0, e.jsx)(S.YNO, {}),
                    }),
                    (0, e.jsx)("img", {
                      ...j,
                      className: (0, D.A)({
                        ...(j.className && { [j.className]: !0 }),
                      }),
                      onClick: (g) => {
                        j.src && p([j.src]);
                      },
                    }),
                  ],
                })
              : (0, e.jsx)("img", {
                  ...j,
                  ref: c,
                  onLoad: (g) => {
                    if (!g.currentTarget.closest("a") && !(0, L.c5)()) {
                      const {
                        naturalWidth: l,
                        naturalHeight: d,
                        width: v,
                        height: C,
                      } = g.currentTarget;
                      _({
                        naturalWidth: l,
                        naturalHeight: d,
                        displayWidth: v,
                        displayHeight: C,
                      });
                    }
                  },
                })
          );
        }
      },
      13465: (B, O, r) => {
        "use strict";
        r.d(O, { c: () => S });
        var e = r(7850),
          m = r(90626);
        function S(D) {
          const {
              rgSources: f,
              onIncrementalError: L,
              onError: u,
              strAltText: y,
              ref: E,
              ...w
            } = D,
            s = m.useRef(null),
            [A, j] = m.useState(0),
            [k, N] = m.useState(0);
          m.useImperativeHandle(
            E,
            () => ({ imgRef: s, nSourceIndex: A, nSourceLength: f.length }),
            [s, A, f],
          );
          const h = m.useMemo(() => JSON.stringify(f), [f]);
          m.useEffect(() => {
            j(0), N((p) => p + 1);
          }, [h]);
          const _ = m.useMemo(() => {
              let p = "";
              return (
                f && f.length > A && (p = f[A]),
                p ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    D,
                    A,
                  ),
                  (p =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                p
              );
            }, [f, A, D]),
            c = m.useCallback(
              (p) => {
                L?.(p, f[A], A);
                const b = A + 1;
                b >= f.length && u && u(p), b < f.length && j(b);
              },
              [A, u, L, f],
            );
          return (0, e.jsx)(
            "img",
            { ref: s, ...w, src: _, onError: c, alt: y },
            k,
          );
        }
      },
      69: (B, O, r) => {
        "use strict";
        r.r(O),
          r.d(O, { AccountPreferencesRoutes: () => Qe, default: () => Xt });
        var e = r(7850),
          m = r(90626),
          S = r(92757),
          D = r(14947),
          f = r(72604),
          L = r(34592),
          u = r(3166),
          y = r(79024),
          E = r(41735),
          w = r.n(E),
          s = r(18210),
          A = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          k = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? j(t, n) : t, P = a.length - 1, T;
              P >= 0;
              P--
            )
              (T = a[P]) && (o = (i ? T(t, n, o) : T(o)) || o);
            return i && o && A(t, n, o), o;
          };
        class N {
          m_Preferences = void 0;
          constructor(t) {
            (0, D.Gn)(this),
              (this.m_Preferences = t),
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
              (this.m_Preferences.preference_state == y.CY.__ ||
                this.m_Preferences.preference_state == y.CY.PK) &&
                ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                  !0),
                (this.m_Preferences.content_customization.recentapps = !0),
                (this.m_Preferences.third_party_analytics.google_analytics =
                  !0),
                (this.m_Preferences.third_party_content.sketchfab = !0),
                (this.m_Preferences.third_party_content.twitter = !0),
                (this.m_Preferences.third_party_content.vimeo = !0),
                (this.m_Preferences.third_party_content.youtube = !0)),
              this.m_Preferences.version == y.ie.CL &&
                (this.m_Preferences.version = y.ie.mO);
          }
          GetVersion() {
            return this.m_Preferences.version;
          }
          GetPreferenceState() {
            return this.m_Preferences.preference_state;
          }
          BIsAllowAll() {
            return (
              this.m_Preferences.preference_state == y.CY.PK ||
              this.m_Preferences.preference_state == y.CY.__
            );
          }
          BIsRejectAll() {
            return this.m_Preferences.preference_state == y.CY.rE;
          }
          SetPreferenceState(t) {
            if (this.m_Preferences.preference_state != t) {
              if (
                ((this.m_Preferences.preference_state = t),
                t == y.CY.PK || t == y.CY.rE)
              ) {
                let n = t == y.CY.PK;
                (this.m_Preferences.content_customization.recentapps = n),
                  (this.m_Preferences.third_party_analytics.google_analytics =
                    n),
                  (this.m_Preferences.third_party_content.sketchfab = n),
                  (this.m_Preferences.third_party_content.twitter = n),
                  (this.m_Preferences.third_party_content.vimeo = n),
                  (this.m_Preferences.third_party_content.youtube = n),
                  (this.m_Preferences.valve_analytics.product_impressions_tracking =
                    n);
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
            return this.m_Preferences.valve_analytics
              .product_impressions_tracking;
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
            (this.m_Preferences.preference_state = y.CY.UI),
              this.PostCookieSettings();
          }
          async PostCookieSettings() {
            const t = u.TS.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              n = new FormData();
            n.set("sessionid", (0, u.KC)()),
              n.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              if (i.status != 200 || i?.data?.success != f.R)
                window.ShowAlertDialog(
                  (0, s.we)("#CookiePref_Error"),
                  (0, s.we)("#CookiePref_ErrorNotSaved"),
                );
              else if (i?.data?.success == f.R) {
                const { transfer_urls: o, transfer_params: P } = i.data;
                o && P && this.TransferCookiePreferencesToSites(o, P);
              }
            } catch {
              window.ShowAlertDialog(
                (0, s.we)("#CookiePref_Error"),
                (0, s.we)("#CookiePref_ErrorNotSaved"),
              );
            }
          }
          TransferCookiePreferencesToSites(t, n) {
            const i = new FormData();
            i.set("transfer_params", n);
            for (const o of t) w().post(o, i);
          }
        }
        k([D.sH], N.prototype, "m_Preferences", 2);
        var h = r(75844),
          _ = r(16412),
          c = r(72518),
          p = r(36707),
          b = r(19298),
          g = r(24660);
        const l = 0,
          d = 1,
          v = 2,
          C = 0,
          M = 1,
          R = 2,
          G = 3;
        var F = Object.defineProperty,
          Q = Object.getOwnPropertyDescriptor,
          V = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? Q(t, n) : t, P = a.length - 1, T;
              P >= 0;
              P--
            )
              (T = a[P]) && (o = (i ? T(t, n, o) : T(o)) || o);
            return i && o && F(t, n, o), o;
          };
        class W {
          m_Preferences = void 0;
          constructor(t) {
            (0, D.Gn)(this), (this.m_Preferences = t);
          }
          SetDeckFeedback(t) {
            (this.m_Preferences.provide_deck_feedback = t),
              this.PostStorePreferences();
          }
          SetGameFrameRateReporting(t) {
            (this.m_Preferences.game_frame_rate_reporting = t),
              this.PostStorePreferences();
          }
          GetProvideDeckFeedbackEnabled() {
            return this.m_Preferences.provide_deck_feedback == d;
          }
          GetGameFrameRateReportingEnabled() {
            return this.m_Preferences.game_frame_rate_reporting == R;
          }
          ToggleProvideDeckFeeback() {
            (this.m_Preferences.provide_deck_feedback =
              this.m_Preferences.provide_deck_feedback == d ? v : d),
              this.PostStorePreferences();
          }
          ToggleGameFrameRateReporting() {
            (this.m_Preferences.game_frame_rate_reporting =
              this.m_Preferences.game_frame_rate_reporting == R ? M : R),
              this.PostStorePreferences();
          }
          async PostStorePreferences() {
            const t = u.TS.STORE_BASE_URL + "account/savepreferences",
              n = new FormData();
            n.set("sessionid", (0, u.KC)()),
              n.set(
                "provide_deck_feedback",
                this.m_Preferences.provide_deck_feedback.toString(),
              ),
              n.set(
                "game_frame_rate_reporting",
                this.m_Preferences.game_frame_rate_reporting.toString(),
              );
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              i.status != 200 || i?.data?.success != f.R
                ? window.ShowAlertDialog(
                    (0, s.we)("#DataCollectionPref_Error"),
                    (0, s.we)("#DataCollectionPref_ErrorNotSaved"),
                  )
                : i?.data?.success == f.R;
            } catch {
              window.ShowAlertDialog(
                (0, s.we)("#DataCollectionPref_Error"),
                (0, s.we)("#DataCollectionPref_ErrorNotSaved"),
              );
            }
          }
        }
        V([D.sH], W.prototype, "m_Preferences", 2);
        var J = r(42993),
          z = r(99412),
          oe = Object.defineProperty,
          ce = Object.getOwnPropertyDescriptor,
          le = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? ce(t, n) : t, P = a.length - 1, T;
              P >= 0;
              P--
            )
              (T = a[P]) && (o = (i ? T(t, n, o) : T(o)) || o);
            return i && o && oe(t, n, o), o;
          };
        const ae = class Pe {
          m_rgSavedHardware = [];
          static s_AccountSavedHardwareStore;
          constructor() {
            (0, D.Gn)(this);
          }
          static Get() {
            return (
              Pe.s_AccountSavedHardwareStore ||
                ((Pe.s_AccountSavedHardwareStore = new Pe()),
                Pe.s_AccountSavedHardwareStore.Init()),
              Pe.s_AccountSavedHardwareStore
            );
          }
          Init() {
            this.m_rgSavedHardware = (0, u.Tc)(
              "saved_hardware",
              "application_config",
            );
          }
          GetSavedHardware() {
            return this.m_rgSavedHardware;
          }
          async PostRequest(t, n) {
            try {
              let i = await w().post(t, n, { withCredentials: !0 });
              return i.status != 200 || i?.data?.success != f.R
                ? (window.ShowAlertDialog(
                    (0, s.we)("#SavedHardware_Error_Title"),
                    (0, s.we)("#SavedHardware_Error_Desc"),
                  ),
                  !1)
                : !0;
            } catch {
              return (
                window.ShowAlertDialog(
                  (0, s.we)("#SavedHardware_Error_Title"),
                  (0, s.we)("#SavedHardware_Error_Desc"),
                ),
                !1
              );
            }
          }
          async RenameHardware(t, n) {
            const i = u.TS.STORE_BASE_URL + "account/ajaxhardwarerename",
              o = new FormData();
            if (
              (o.set("sessionid", (0, u.KC)()),
              o.set("savedHardwareID", t),
              o.set("strFriendlyName", n),
              await this.PostRequest(i, o))
            )
              for (let T = 0; T < this.m_rgSavedHardware.length; ++T)
                this.m_rgSavedHardware[T].hardware_id == t &&
                  (this.m_rgSavedHardware[T].friendly_name = n);
          }
          async DeleteHardware(t) {
            const n = u.TS.STORE_BASE_URL + "account/ajaxhardwaredelete",
              i = new FormData();
            if (
              (i.set("sessionid", (0, u.KC)()),
              i.set("savedHardwareID", t),
              await this.PostRequest(n, i))
            ) {
              for (let P = 0; P < this.m_rgSavedHardware.length; ++P)
                if (this.m_rgSavedHardware[P].hardware_id == t) {
                  this.m_rgSavedHardware.splice(P, 1);
                  return;
                }
            }
          }
        };
        le([D.sH], ae.prototype, "m_rgSavedHardware", 2);
        let q = ae;
        function de() {
          return q.Get().GetSavedHardware();
        }
        var re = r(19730),
          ne = r(65946),
          $ = r(88003),
          ie = r(82734),
          Y = r(1880);
        function ue(a) {
          const { hw: t, closeModal: n } = a,
            i = m.useCallback(() => {
              q.Get().DeleteHardware(t.hardware_id), n();
            }, [n, t.hardware_id]);
          return (0, e.jsx)(Y.o0, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, s.we)("#SavedHardware_Delete_Confirm_Title"),
            onCancel: n,
            onOK: i,
            strOKButtonText: (0, s.we)("#SavedHardware_Delete"),
            children: (0, s.we)(
              "#SavedHardware_Delete_Confirm_Desc",
              t.friendly_name,
            ),
          });
        }
        function me(a) {
          const { hw: t, closeModal: n } = a,
            [i, o] = m.useState(t.friendly_name),
            P = m.useCallback(() => {
              q.Get().RenameHardware(t.hardware_id, i.trim()), n();
            }, [i, n, t.hardware_id]);
          return (0, e.jsx)(Y.o0, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, s.we)("#SavedHardware_Rename_Confirm_Title"),
            onCancel: n,
            onOK: P,
            bOKDisabled: i.trim().length == 0,
            strOKButtonText: (0, s.we)("#SavedHardware_Rename"),
            children: (0, e.jsx)(_.FO, {
              label: (0, s.we)("#SavedHardware_Rename_Confirm_Label"),
              value: i,
              onChange: (T) => {
                o(T.target.value);
              },
              maxLength: 100,
            }),
          });
        }
        const pe = (0, ne.PA)((a) => {
            const { hw: t } = a;
            let n;
            switch (t.system_info.gaming_device_type) {
              case z.LS$:
                n = (0, s.we)("#HardwareVariant_SteamDeck");
                break;
              case z.ppM:
                n = (0, s.we)("#HardwareVariant_LegionGoS");
                break;
              case z.bOm:
                n = (0, s.we)("#HardwareVariant_SteamMachine");
                break;
            }
            return (0, e.jsxs)("div", {
              className: c.SavedHardware,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsxs)("div", {
                      className: c.FriendlyName,
                      children: [t.friendly_name, " "],
                    }),
                    (0, e.jsxs)("div", {
                      className: c.Details,
                      children: [
                        n && (0, e.jsx)("div", { children: n }),
                        (0, e.jsx)("div", { children: t.system_info.os }),
                        (0, e.jsxs)("div", {
                          children: [
                            t.system_info.cpu_name,
                            " - ",
                            (0, re.dm)(
                              parseInt(t.system_info.system_ram) * 1024 * 1024,
                              0,
                            ),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          children: [
                            t.system_info.adapter_description,
                            " - ",
                            (0, re.dm)(
                              t.system_info.vram_size * 1024 * 1024,
                              0,
                            ),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: c.Timestamp,
                      children: (0, s.we)(
                        "#SavedHardware_Timestamp",
                        (0, s.$z)(t.timestamp_created),
                      ),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: c.SavedHardwareControls,
                  children: [
                    (0, e.jsx)(_.$n, {
                      className: c.RenameButton,
                      onClick: (i) =>
                        (0, $.pg)((0, e.jsx)(me, { hw: t }), (0, ie.uX)(i)),
                      children: (0, s.we)("#SavedHardware_Rename"),
                    }),
                    (0, e.jsx)(_.$n, {
                      className: c.DeleteButton,
                      onClick: (i) =>
                        (0, $.pg)((0, e.jsx)(ue, { hw: t }), (0, ie.uX)(i)),
                      children: (0, s.we)("#SavedHardware_Delete"),
                    }),
                  ],
                }),
              ],
            });
          }),
          ee = (0, ne.PA)(() => {
            const a = de(),
              t = typeof SteamClient < "u",
              n = m.useCallback(() => {
                window.location.reload();
              }, []),
              i = m.useCallback(() => {
                window.SteamClient.BrowserView.RegisterForMessageFromParent(n),
                  SteamClient.BrowserView.PostMessageToParent(
                    "ShowSavedHardwareDialog",
                    "",
                  );
              }, [n]);
            return (0, e.jsxs)("div", {
              className: c.CookieGroup,
              children: [
                (0, e.jsxs)("div", {
                  className: c.CookieSection,
                  children: [
                    (0, e.jsx)("h2", {
                      children: (0, s.we)("#SavedHardware_Title"),
                    }),
                    (0, e.jsx)("p", {
                      className: c.SectionDescription,
                      children: (0, s.we)("#SavedHardware_Desc"),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: c.SavedHardwareList,
                  children: a.map((o) =>
                    (0, e.jsx)(pe, { hw: o }, o.hardware_id),
                  ),
                }),
                (0, e.jsx)("div", {
                  className: c.SavedHardwareControls,
                  children:
                    t &&
                    (0, e.jsxs)(_.$n, {
                      className: c.SavedHardwareAddPCButton,
                      onClick: i,
                      children: [(0, s.we)("#SavedHardware_AddNew"), " "],
                    }),
                }),
              ],
            });
          });
        let _e = null,
          ye = null;
        function Ve() {
          if (!_e) {
            let a = (0, u.Tc)("cookiepreferences", "application_config");
            _e = new N(a);
          }
          if (!ye) {
            let a = (0, u.Tc)("storedatapreferences", "application_config");
            ye = new W(a);
          }
          return [_e, ye];
        }
        const Ye = (0, h.PA)(() => {
            const [a, t] = Ve(),
              n = (0, m.useCallback)(() => {
                a.SetPreferenceState(y.CY.PK);
              }, [a]),
              i = (0, m.useCallback)(() => {
                a.SetPreferenceState(y.CY.rE);
              }, [a]),
              o = (0, J.LH)();
            return (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    c.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)("#CookiePref_OptionalCookies_Title"),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, e.jsxs)(b.Z, {
                      "flow-children": "row",
                      className: c.ButtonGroup,
                      children: [
                        (0, e.jsx)(g.ml, {
                          className: (0, p.A)(
                            c.AllButton,
                            a.BIsRejectAll() ? c.ButtonHighlight : "",
                          ),
                          onClick: i,
                          children: (0, s.we)("#CookiePref_RejectAll"),
                        }),
                        (0, e.jsx)(g.ml, {
                          className: (0, p.A)(
                            c.AllButton,
                            a.BIsAllowAll() ? c.ButtonHighlight : "",
                          ),
                          onClick: n,
                          children: (0, s.we)("#CookiePref_AcceptAll"),
                        }),
                      ],
                    }),
                    (0, e.jsx)(Je, { settings: a }),
                    (0, e.jsx)(Xe, { settings: a }),
                    (0, e.jsx)(Ze, { settings: a }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    c.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)(
                      "#CookiePref_TechnicallyNeccesary_Title",
                    ),
                  }),
                }),
                (0, e.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, e.jsx)("p", {
                      children: (0, s.we)(
                        "#CookiePref_TechnicallyNeccesary_Desc",
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: c.CookieGroup,
                      children: [
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_SessionID_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_SessionID_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_ShoppingCart_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_ShoppingCart_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_SteamCountry_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_SteamCountry_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Timezone_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Timezone_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_BirthTime_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_BirthTime_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Login_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Login_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)("#CookiePref_Language_Title"),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)("#CookiePref_Language_Desc"),
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: c.NecessaryGroup,
                          children: [
                            (0, e.jsx)("span", {
                              className: c.NecessaryTitle,
                              children: (0, s.we)(
                                "#CookiePref_CookieSettings_Title",
                              ),
                            }),
                            (0, e.jsx)("span", {
                              className: c.NecessaryDesc,
                              children: (0, s.we)(
                                "#CookiePref_CookieSettings_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    c.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, e.jsx)("div", {
                    children: (0, s.we)("#PrivacySettings_Marketing_Header"),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "account_settings_container",
                  children: (0, e.jsx)($e, { settings: a }),
                }),
                !!o &&
                  (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(
                          c.DataCollectionSettingsHeader,
                          "account_header_line noicon",
                        ),
                        children: (0, e.jsx)("div", {
                          children: (0, s.we)("#DataPreferences_Header"),
                        }),
                      }),
                      (0, e.jsx)("div", {
                        className: "account_settings_container",
                        children: (0, e.jsx)(qe, { settings: t }),
                      }),
                    ],
                  }),
                null,
              ],
            });
          }),
          Je = (0, h.PA)((a) => {
            const { settings: t } = a,
              n = (0, m.useCallback)(() => {
                t.ToggleRecentApps();
              }, [t]);
            return (0, e.jsx)("div", {
              className: c.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: c.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_Content_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: c.SectionDescription,
                    children: (0, s.we)("#CookiePref_Content_Desc"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_Content_ToggleTitle"),
                    checked: t.GetRecentApps(),
                    description: (0, s.we)("#CookiePref_Content_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          Xe = (0, h.PA)((a) => {
            const { settings: t } = a,
              n = (0, m.useCallback)(() => {
                t.ToggleImpressions();
              }, [t]);
            return (0, e.jsx)("div", {
              className: c.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: c.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_ValveAnalytics_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: c.SectionDescription,
                    children: (0, s.we)("#CookiePref_ValveAnalytics_Desc"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_ValveAnalytics_ToggleTitle"),
                    checked: t.GetImpressions(),
                    description: (0, s.we)(
                      "#CookiePref_ValveAnalytics_ToggleDesc",
                    ),
                  }),
                ],
              }),
            });
          }),
          Ze = (0, h.PA)((a) => {
            const { settings: t } = a,
              n = (0, m.useCallback)(() => {
                t.ToggleYouTube();
              }, [t]),
              i = (0, m.useCallback)(() => {
                t.ToggleVimeo();
              }, [t]),
              o = (0, m.useCallback)(() => {
                t.ToggleSketchfab();
              }, [t]);
            return (0, e.jsx)("div", {
              className: c.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: c.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#CookiePref_ThirdParty_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: c.SectionDescription,
                    children: (0, s.we)("#CookiePref_ThirdParty_Desc"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: n,
                    label: (0, s.we)("#CookiePref_YouTube_Title"),
                    checked: t.GetYouTube(),
                    description: (0, s.PP)(
                      "#CookiePref_YouTube_Desc",
                      (0, e.jsx)("a", {
                        href: "https://policies.google.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_YouTube_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: i,
                    label: (0, s.we)("#CookiePref_Vimeo_Title"),
                    checked: t.GetVimeo(),
                    description: (0, s.PP)(
                      "#CookiePref_Vimeo_Desc",
                      (0, e.jsx)("a", {
                        href: "https://vimeo.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_Vimeo_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: o,
                    label: (0, s.we)("#CookiePref_Sketchfab_Title"),
                    checked: t.GetSketchfab(),
                    description: (0, s.PP)(
                      "#CookiePref_Sketchfab_Desc",
                      (0, e.jsx)("a", {
                        href: "https://sketchfab.com/privacy",
                        target: "_blank",
                        children: (0, s.we)(
                          "#CookiePref_Sketchfab_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                ],
              }),
            });
          }),
          $e = (0, h.PA)((a) => {
            const { settings: t } = a,
              n = (0, m.useCallback)(() => {
                t.ToggleUTMEnabled();
              }, [t]);
            return (0, e.jsx)("div", {
              className: c.CookieGroup,
              children: (0, e.jsxs)("div", {
                className: c.CookieSection,
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#PrivacySettings_Marketing_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: c.SectionDescription,
                    children: (0, s.we)("#PrivacySettings_Marketing_Desc"),
                  }),
                  (0, e.jsx)(_.RF, {
                    onChange: n,
                    label: (0, s.we)("#PrivacySettings_UTM_ToggleLabel"),
                    checked: t.GetUTMEnabled(),
                    description: (0, s.we)("#PrivacySettings_UTM_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          qe = (0, h.PA)((a) => {
            const { settings: t } = a,
              n = (0, m.useCallback)(() => {
                t.ToggleProvideDeckFeeback();
              }, [t]),
              i = (0, m.useCallback)(() => {
                t.ToggleGameFrameRateReporting();
              }, [t]);
            return (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)("div", {
                  className: c.CookieGroup,
                  children: (0, e.jsxs)("div", {
                    className: c.CookieSection,
                    children: [
                      (0, e.jsx)("h2", {
                        children: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Title",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        className: c.SectionDescription,
                        children: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Desc",
                        ),
                      }),
                      (0, e.jsx)(_.RF, {
                        onChange: n,
                        checked: t.GetProvideDeckFeedbackEnabled(),
                        description: (0, s.we)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)("div", {
                  className: c.CookieGroup,
                  children: (0, e.jsxs)("div", {
                    className: c.CookieSection,
                    children: [
                      (0, e.jsx)("h2", {
                        id: "FrameRateReporting",
                        children: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Title",
                        ),
                      }),
                      (0, e.jsx)("p", {
                        className: c.SectionDescription,
                        children: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Description",
                        ),
                      }),
                      (0, e.jsx)(_.RF, {
                        onChange: i,
                        checked: t.GetGameFrameRateReportingEnabled(),
                        description: (0, s.we)(
                          "#DataPreferences_FrameRateReporting_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, e.jsx)(ee, {}),
              ],
            });
          });
        var Ce = r(20076),
          et = r(86227),
          U = r.n(et),
          Ie = r(63547),
          tt = r(46943),
          st = r(35098),
          at = r(76559),
          Be = r(84676),
          xe = r(55051),
          rt = r(7582),
          nt = r(53107),
          it = r(25792),
          ot = r(85599),
          ct = r(20169),
          lt = r(61855);
        const dt = 1422450;
        function be(a) {
          const { bShowPlaytestOverview: t } = a,
            n = (0, Ie.kF)();
          let i = [];
          return (
            n.isSuccess &&
              (i = n.data
                .filter((o) => o.status === xe.b1.fm || o.status === xe.b1.T5)
                .map((o) => {
                  switch (o.status) {
                    case xe.b1.T5:
                      return (0, e.jsx)(ut, { invite: o }, o.invite_id);
                    case xe.b1.fm:
                    default:
                      return (0, e.jsx)(mt, { invite: o }, o.invite_id);
                  }
                })),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)("div", {
                  className: "account_header_line noicon",
                  children: (0, s.we)("#PlaytestInvites_Title"),
                }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    U().PlaytestInvites,
                    "account_settings_container",
                  ),
                  children:
                    n.isLoading || i.length > 0
                      ? i
                      : (0, s.we)("#PlaytestInvites_NoInvites"),
                }),
                t &&
                  (0, e.jsxs)("div", {
                    className: "account_settings_container",
                    children: [
                      (0, e.jsx)("h2", {
                        children: (0, s.we)("#PlaytestInvites_Desc_Title"),
                      }),
                      (0, e.jsx)("p", {
                        className: U().Description,
                        children: (0, s.we)("#PlaytestInvites_Desc1"),
                      }),
                      (0, e.jsx)("p", {
                        className: U().Description,
                        children: (0, s.we)("#PlaytestInvites_Desc2"),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function ut(a) {
          const { invite: t } = a,
            n = t.appid;
          let o = Me(t.appid)?.GetName() ?? t.app_name;
          const P = m.useCallback(
            (T) => {
              (0, nt.EP)((0, ie.uX)(T), `steam://open/games/details/${n}`);
            },
            [n],
          );
          return (0, e.jsxs)("div", {
            className: U().PlaytestInvite,
            children: [
              (0, e.jsx)("div", {
                className: U().InviteInfo,
                children: (0, e.jsx)("span", {
                  children: (0, s.we)("#PlaytestInvites_Welcome", o),
                }),
              }),
              !u.TS.IN_MOBILE_WEBVIEW &&
                (0, e.jsx)("div", {
                  className: U().StatusCtn,
                  children: (0, e.jsx)(b.Z, {
                    className: U().Buttons,
                    children: (0, e.jsx)(_.jn, {
                      className: U().WideButton,
                      noFocusRing: !1,
                      onClick: P,
                      children: (0, s.we)("#PlaytestInvites_ViewLibrary"),
                    }),
                  }),
                }),
            ],
          });
        }
        function mt(a) {
          const { invite: t } = a,
            n = (0, rt.f1)(),
            i = Me(t.appid);
          let o = i?.GetName() ?? t.app_name;
          const P = (0, Ie.g)(t.invite_id),
            T = m.useCallback(
              (Z) => {
                P.mutate({ bAccept: Z });
              },
              [P],
            ),
            X = new at.b(t.steamid_inviter);
          return (0, e.jsx)(it.tH, {
            children: (0, e.jsxs)(b.Z, {
              className: U().PlaytestInvite,
              navEntryPreferPosition: ct.iU.MAINTAIN_X,
              children: [
                (0, e.jsxs)("div", {
                  className: U().InviteInfo,
                  children: [
                    (0, e.jsx)(ht, { steamIDInviter: X }),
                    (0, e.jsx)(_t, {
                      appStoreItem: i,
                      strAppName: o,
                      nAppID: t.appid,
                    }),
                    (0, e.jsx)("div", {
                      className: U().TimeInvited,
                      children: (0, s.Nm)(t.time_created ?? n),
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: U().StatusCtn,
                  children: P.isPending
                    ? (0, e.jsx)(ot.t, {
                        size: "medium",
                        position: "center",
                        msDelayAppear: 250,
                      })
                    : (0, e.jsxs)("div", {
                        className: U().Buttons,
                        children: [
                          (0, e.jsx)(_.jn, {
                            noFocusRing: !1,
                            onClick: () => T(!0),
                            children: (0, s.we)("#PlaytestInvites_Accept"),
                          }),
                          (0, e.jsx)(_.$n, {
                            noFocusRing: !1,
                            onClick: () => T(!1),
                            children: (0, s.we)("#PlaytestInvites_Reject"),
                          }),
                        ],
                      }),
                }),
              ],
            }),
          });
        }
        function _t(a) {
          const { appStoreItem: t, strAppName: n, nAppID: i } = a;
          let o = t?.GetDeveloperNames()?.length
              ? t.GetDeveloperNames()[0]
              : null,
            P = t?.GetStorePageURL(),
            T = (0, e.jsx)("img", {
              className: U().SmallCap,
              src: t?.GetAssets().GetSmallCapsuleURL() ?? lt.A,
            });
          return (
            i == dt && (o = "Valve"),
            (0, e.jsxs)("div", {
              className: U().AppInfoCtn,
              children: [
                P ? (0, e.jsxs)(g.Ii, { href: P, children: [" ", T, " "] }) : T,
                (0, e.jsxs)("div", {
                  className: U().AppDescription,
                  children: [
                    (0, e.jsx)("div", { className: U().AppName, children: n }),
                    o &&
                      (0, e.jsx)("div", {
                        className: U().AppDetail,
                        children: (0, s.we)("#PlaytestInvites_AppDeveloper", o),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function ht(a) {
          const { steamIDInviter: t } = a;
          return t.BIsValid()
            ? (0, e.jsx)(vt, { steamIDInviter: t })
            : (0, e.jsx)(Le, {});
        }
        function vt(a) {
          const { steamIDInviter: t } = a,
            n = (0, st.js)(t.ConvertTo64BitString()),
            i = n?.data;
          return n.isSuccess
            ? (0, e.jsxs)("div", {
                className: (0, p.A)(
                  U().AvatarAndPersona,
                  U().InviteDescription,
                ),
                children: [
                  (0, e.jsx)(tt.i8, {
                    persona: i,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, e.jsx)("div", {
                    children: (0, s.PP)(
                      "#PlaytestInvites_InviteDescription_FromUser2",
                      (0, e.jsx)(g.Ii, {
                        href: i.GetCommunityProfileURL(),
                        children: i?.m_strPlayerName,
                      }),
                    ),
                  }),
                ],
              })
            : (0, e.jsx)(Le, {});
        }
        function Le(a) {
          return (0, e.jsx)("div", {
            className: U().InviteDescription,
            children: (0, s.we)("#PlaytestInvites_InviteDescription_FromApp2"),
          });
        }
        function Me(a) {
          const [t, n] = (0, Be.t7)(a, {
            include_basic_info: !0,
            include_assets: !0,
          });
          return t && n == Be.ik ? t : null;
        }
        var ft = r(31896),
          we = r.n(ft);
        function pt(a) {
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(be, { bShowPlaytestOverview: !1 }),
              (0, e.jsx)("div", {
                className: "account_header_line noicon",
                children: (0, s.we)("#PlaytestStatus_Title"),
              }),
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  we().PlaytestStatusCtn,
                  "account_settings_container",
                ),
                children: (0, s.we)("#PlaytestStatus_None"),
              }),
              (0, e.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, e.jsx)("h2", {
                    children: (0, s.we)("#PlaytestInvites_Desc_Title"),
                  }),
                  (0, e.jsx)("p", {
                    className: we().Description,
                    children: (0, s.we)("#PlaytestInvites_Desc1"),
                  }),
                  (0, e.jsx)("p", {
                    className: we().Description,
                    children: (0, s.we)("#PlaytestInvites_Desc2"),
                  }),
                ],
              }),
            ],
          });
        }
        var gt = Object.defineProperty,
          At = Object.getOwnPropertyDescriptor,
          Oe = (a, t, n, i) => {
            for (
              var o = i > 1 ? void 0 : i ? At(t, n) : t, P = a.length - 1, T;
              P >= 0;
              P--
            )
              (T = a[P]) && (o = (i ? T(t, n, o) : T(o)) || o);
            return i && o && gt(t, n, o), o;
          };
        const Te = class De {
          m_rgActiveDevices = [];
          m_rgRevokedDevices = [];
          m_strAccountName;
          m_strPhoneHint;
          m_strEmail;
          m_msgTwoFactorStatus;
          m_strLatestAndroidAppVersion;
          static s_AuthorizedDevicesStore;
          constructor() {
            (0, D.Gn)(this);
          }
          static Get() {
            return (
              De.s_AuthorizedDevicesStore ||
                ((De.s_AuthorizedDevicesStore = new De()),
                De.s_AuthorizedDevicesStore.Init()),
              De.s_AuthorizedDevicesStore
            );
          }
          Init() {
            (this.m_rgActiveDevices = (0, u.Tc)(
              "active_devices",
              "application_config",
            )),
              (this.m_rgRevokedDevices = (0, u.Tc)(
                "revoked_devices",
                "application_config",
              )),
              (this.m_strAccountName = (0, u.Tc)(
                "accountName",
                "application_config",
              )),
              (this.m_strPhoneHint = (0, u.Tc)(
                "phone_hint",
                "application_config",
              )),
              (this.m_strEmail = (0, u.Tc)("email", "application_config")),
              (this.m_msgTwoFactorStatus = (0, u.Tc)(
                "two_factor_status",
                "application_config",
              )),
              (this.m_strLatestAndroidAppVersion = (0, u.Tc)(
                "latest_android_app_version",
                "application_config",
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
        Oe([D.sH], Te.prototype, "m_rgActiveDevices", 2),
          Oe([D.sH], Te.prototype, "m_rgRevokedDevices", 2);
        let he = Te;
        var te = r(56718),
          Ge = r(39239);
        const jt =
            r.p +
            "images/applications/store/sg_shield_off.png?v=valveisgoodatcaching",
          Ue =
            r.p +
            "images/applications/store/sg_shield_on.png?v=valveisgoodatcaching",
          St =
            r.p +
            "images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching";
        var Pt = r(32093),
          H = r(6740),
          He = r(44787),
          se = r(33405),
          Ne = r(36118),
          Dt = r(71421),
          Ee = r(92264),
          yt = r(36174),
          Ct = r(11838),
          x = r(61359),
          xt = ((a) => (
            (a[(a.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            a
          ))(xt || {}),
          Et = ((a) => (
            (a[(a.k_EMobileConfirmationAction_None = 0)] =
              "k_EMobileConfirmationAction_None"),
            (a[(a.k_EMobileConfirmationAction_Allow = 1)] =
              "k_EMobileConfirmationAction_Allow"),
            (a[(a.k_EMobileConfirmationAction_Cancel = 2)] =
              "k_EMobileConfirmationAction_Cancel"),
            a
          ))(Et || {}),
          wt = ((a) => (
            (a[(a.k_EMobileConfirmationType_Invalid = 0)] =
              "k_EMobileConfirmationType_Invalid"),
            (a[(a.k_EMobileConfirmationType_Test = 1)] =
              "k_EMobileConfirmationType_Test"),
            (a[(a.k_EMobileConfirmationType_Trade = 2)] =
              "k_EMobileConfirmationType_Trade"),
            (a[(a.k_EMobileConfirmationType_MarketListing = 3)] =
              "k_EMobileConfirmationType_MarketListing"),
            (a[(a.k_EMobileConfirmationType_FeatureOptOut = 4)] =
              "k_EMobileConfirmationType_FeatureOptOut"),
            (a[(a.k_EMobileConfirmationType_PhoneNumberChange = 5)] =
              "k_EMobileConfirmationType_PhoneNumberChange"),
            (a[(a.k_EMobileConfirmationType_AccountRecovery = 6)] =
              "k_EMobileConfirmationType_AccountRecovery"),
            (a[(a.k_EMobileConfirmationType_BuildChangeRequest = 7)] =
              "k_EMobileConfirmationType_BuildChangeRequest"),
            (a[(a.k_EMobileConfirmationType_AddUser = 8)] =
              "k_EMobileConfirmationType_AddUser"),
            (a[(a.k_EMobileConfirmationType_RegisterApiKey = 9)] =
              "k_EMobileConfirmationType_RegisterApiKey"),
            (a[(a.k_EMobileConfirmationType_InviteToFamilyGroup = 10)] =
              "k_EMobileConfirmationType_InviteToFamilyGroup"),
            (a[(a.k_EMobileConfirmationType_JoinFamilyGroup = 11)] =
              "k_EMobileConfirmationType_JoinFamilyGroup"),
            (a[(a.k_EMobileConfirmationType_MarketPurchase = 12)] =
              "k_EMobileConfirmationType_MarketPurchase"),
            (a[(a.k_EMobileConfirmationType_RequestRefund = 13)] =
              "k_EMobileConfirmationType_RequestRefund"),
            a
          ))(wt || {});
        const Tt = (0, h.PA)(() => {
          let a = he.Get();
          const t = ze(),
            n = (K) => {
              (0, $.pg)((0, e.jsx)(Gt, {}), (0, ie.uX)(K));
            },
            i = Date.now() / 1e3,
            o = Fe(a),
            P = a.GetTwoFactorStatus();
          let T = null;
          switch (P.steamguard_scheme) {
            default:
            case 0:
              T = "#accountpreferences_revoked_devices_revoked_description";
              break;
            case 1:
              T =
                "#accountpreferences_revoked_devices_revoked_description_email";
              break;
            case 2:
              T =
                "#accountpreferences_revoked_devices_revoked_description_auth";
              break;
          }
          let X = [],
            Z = [];
          for (const K of a.GetActiveDevices()) {
            const fe = K.logged_in && K.last_seen?.time > i - 900,
              je =
                K.effective_token_state == H.wv.BH ? x.RememberedDevice : null,
              Se = (0, e.jsx)(
                ke,
                {
                  className: je,
                  device: K,
                  bActiveNow: fe,
                  bCurrentDevice: t == K.token_id,
                  strActiveCountry: o,
                  msgTwoFactorStatus: P,
                },
                K.token_id,
              );
            fe ? X.push(Se) : Z.push(Se);
          }
          const Ae = a
            .GetRevokedDevices()
            .map((K) =>
              (0, e.jsx)(
                ke,
                {
                  className: x.RevokedDevice,
                  device: K,
                  strActiveCountry: o,
                  msgTwoFactorStatus: P,
                },
                K.token_id,
              ),
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  x.AuthorizedDeviceHeader,
                  "account_header_line noicon",
                ),
                children: (0, e.jsx)("div", {
                  children: (0, s.we)(
                    "#accountpreferences_authorized_devices_header",
                  ),
                }),
              }),
              (0, e.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, e.jsx)("div", {
                    className: x.SectionDescription,
                    children: (0, s.PP)(
                      "#accountpreferences_authorized_devices_description",
                      (0, e.jsx)("p", {}),
                    ),
                  }),
                  (0, e.jsxs)("div", {
                    className: x.AuthorizedDeviceGroup,
                    children: [
                      (0, e.jsx)(Re, {
                        elHeader: (0, e.jsxs)("div", {
                          className: x.ActiveNow,
                          children: [
                            (0, e.jsx)(Ne.jlt, { className: x.ActiveNowDot }),
                            (0, s.we)(
                              "#accountpreferences_authorized_device_active_now",
                            ),
                          ],
                        }),
                        rgDevices: X,
                      }),
                      (0, e.jsx)(Re, {
                        elHeader: (0, s.we)(
                          "#accountpreferences_authorized_devices_recentseen_heading",
                        ),
                        rgDevices: Z,
                      }),
                      (0, e.jsx)("div", {
                        className: x.DeviceGroup,
                        children: (0, e.jsx)("div", {
                          className: x.RemoveDevicesRow,
                          children: (0, e.jsx)(_.wl, {
                            className: x.RemoveDevicesButton,
                            onClick: n,
                            children: (0, s.we)(
                              "#accountpreferences_authorized_devices_remove_button",
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Ae?.length > 0 &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, p.A)(
                        x.AuthorizedDeviceHeader,
                        "account_header_line noicon",
                      ),
                      children: (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#accountpreferences_revoked_devices_revoked_header",
                        ),
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className: "account_settings_container",
                      children: [
                        (0, e.jsx)("div", {
                          className: x.SectionDescription,
                          children: (0, s.PP)(T, (0, e.jsx)("p", {})),
                        }),
                        (0, e.jsx)("div", {
                          className: x.AuthorizedDeviceGroup,
                          children: (0, e.jsx)(Re, { rgDevices: Ae }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        });
        function Re(a) {
          const { rgDevices: t, elHeader: n } = a;
          return t.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: x.DeviceGroup,
                children: [n && n, t],
              });
        }
        function Fe(a) {
          const t = Date.now() / 1e3;
          return Ke(
            a
              .GetActiveDevices()
              .find((n) => n.logged_in && n.last_seen?.time > t - 900) ??
              a.GetActiveDevices()[0],
          ).country;
        }
        function ze() {
          const [a] = m.useState(() =>
            (0, u.Tc)("requesting_token_id", "application_config"),
          );
          return a;
        }
        function Nt(a, t) {
          return (
            t?.state > 0 &&
            a.token_id &&
            a.token_id == t?.last_seen_auth_token_id
          );
        }
        function ke(a) {
          const {
              device: t,
              bActiveNow: n,
              bCurrentDevice: i,
              strActiveCountry: o,
              className: P,
              msgTwoFactorStatus: T,
              bShowAuthenticatorActivity: X,
            } = a,
            [Z, Ae] = (0, m.useState)(!1),
            K = m.useRef(void 0);
          m.useEffect(() => {
            K.current?.BHasFocus() && K.current?.Node().ForceMeasureFocusRing();
          }, [Z]);
          let fe = Mt(t);
          fe.length &&
            (fe = ` ${(0, s.we)("#accountpreferences_authorized_devices_name_separator")} "${fe}"`);
          const je = Ke(t);
          let Se = null;
          !je.country || !o || o == je.country
            ? (Se = (0, e.jsx)("div", {
                className: x.LocationNotSuspicious,
                children: je.location,
              }))
            : (Se = (0, e.jsx)(Dt.he, {
                className: x.Tooltip,
                toolTipContent: (0, s.we)(
                  "#accountpreferences_authorized_devices_suspicous_tooltip",
                ),
                direction: "top",
                children: (0, e.jsxs)("div", {
                  className: x.LocationSuspicious,
                  children: [je.location, (0, e.jsx)(te.$$j, {})],
                }),
              }));
          const Zt = Nt(t, T);
          return (0, e.jsxs)(
            b.Z,
            {
              className: (0, p.A)(x.DeviceContainer, n && x.ActiveDevice, P),
              navRef: K,
              onActivate: () => Ae(!Z),
              children: [
                (0, e.jsx)(Lt, { device: t, bHasAuthenticator: Zt }),
                (0, e.jsxs)("div", {
                  className: x.DeviceContent,
                  children: [
                    (0, e.jsxs)("div", {
                      className: x.DeviceHeaderRow,
                      children: [
                        (0, e.jsxs)("div", {
                          className: x.DeviceNameContainer,
                          children: [
                            (0, e.jsxs)("div", {
                              className: x.DeviceName,
                              children: [(0, e.jsx)(Ot, { device: t }), fe],
                            }),
                            i &&
                              (0, e.jsx)("div", {
                                className: x.ThisDevice,
                                children: (0, s.we)(
                                  "#accountpreferences_authorized_devices_this_device",
                                ),
                              }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: x.DetailsToggleContainer,
                          children: [
                            Se,
                            (0, e.jsx)("div", {
                              className: x.DetailsToggle,
                              children: (0, e.jsx)(_.wl, {
                                className: (0, p.A)({
                                  [x.DetailsToggle]: !0,
                                  [x.Selected]: Z,
                                }),
                                children: (0, e.jsx)(te.b8_, {
                                  direction: "down",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsx)(Rt, {
                      device: t,
                      bActiveNow: n,
                      msgTwoFactorStatus: X && T,
                    }),
                    Z && (0, e.jsx)(Bt, { device: t }),
                  ],
                }),
              ],
            },
            "id_" + t.token_id,
          );
        }
        function Rt(a) {
          const { device: t, bActiveNow: n, msgTwoFactorStatus: i } = a;
          return i?.state > 0
            ? (0, e.jsx)(kt, {
                msgTwoFactorUsage: i.usages?.length > 0 ? i.usages[0] : null,
              })
            : n
              ? null
              : (0, e.jsx)(It, { device: t });
        }
        function kt(a) {
          const { msgTwoFactorUsage: t } = a;
          if (!t || !t.time) return null;
          const n = (0, Ee.Nm)(t.time);
          let i = null;
          if (t.usage_type == He.oN.U3)
            i = (0, s.we)("#authorized_devices_lasttwofactor_login", n);
          else if (t.usage_type == He.oN.Ej) {
            const o = t.confirmation_action == 1 ? "_allow" : "_cancel";
            switch (t.confirmation_type) {
              case 2:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_trade${o}`,
                  n,
                );
                break;
              case 3:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_marketlisting${o}`,
                  n,
                );
                break;
              case 5:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_phonechange${o}`,
                  n,
                );
                break;
              case 6:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_accountrecovery${o}`,
                  n,
                );
                break;
              case 7:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_buildchange${o}`,
                  n,
                );
                break;
              case 8:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_adduser${o}`,
                  n,
                );
                break;
              case 9:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_registerapikey${o}`,
                  n,
                );
                break;
              case 10:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${o}`,
                  n,
                );
                break;
              case 11:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${o}`,
                  n,
                );
                break;
              case 12:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_marketpurchase${o}`,
                  n,
                );
                break;
              case 13:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_refund${o}`,
                  n,
                );
                break;
              default:
                i = (0, s.we)(
                  `#authorized_devices_lasttwofactor_confirmation_unknown${o}`,
                  n,
                );
            }
          }
          return i
            ? (0, e.jsx)("div", {
                className: x.LastSeenRow,
                children: (0, e.jsx)("div", { children: i }),
              })
            : null;
        }
        function It(a) {
          const { device: t } = a,
            n =
              t.first_seen?.time &&
              t.first_seen.time + yt.Kp.PerWeek * 2 > Date.now() / 1e3,
            i = t.effective_token_state == H.wv.BH;
          let o = (0, s.we)(
            "#accountpreferences_authorized_devices_last_seen_max",
          );
          return (
            t.last_seen?.time
              ? (o = (0, Ee.Nm)(t.last_seen.time))
              : t.time_updated &&
                t.time_updated >
                  Math.floor(Date.now() / 1e3 - 2160 * 60 * 60) &&
                (o = (0, Ee.Nm)(t.time_updated)),
            (0, e.jsxs)("div", {
              className: x.LastSeenRow,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)("span", {
                      className: x.LastActive,
                      children: (0, s.we)(
                        "#accountpreferences_authorized_devices_last_seen_title",
                      ),
                    }),
                    o,
                    i &&
                      (0, e.jsxs)("span", {
                        className: x.LastActive,
                        children: [
                          " - ",
                          (0, s.we)(
                            "#accountpreferences_authorized_devices_state_signedout",
                          ),
                        ],
                      }),
                  ],
                }),
                n &&
                  (0, e.jsx)("div", {
                    className: x.NewDevice,
                    children: (0, s.oW)(
                      "#accountpreferences_authorized_devices_new_device",
                      (0, e.jsx)("a", {
                        href:
                          u.TS.HELP_BASE_URL + "wizard/HelpWithAccountStolen",
                        onClick: (P) => {
                          P.stopPropagation();
                        },
                      }),
                    ),
                  }),
              ],
            })
          );
        }
        function Bt(a) {
          const { device: t } = a;
          return (0, e.jsx)("div", {
            className: x.AuthorizedDeviceDetails,
            children: (0, s.we)(
              bt(t),
              (0, s.TW)(t.first_seen.time) +
                " @ " +
                (0, Ee.KC)(t.first_seen.time),
            ),
          });
        }
        function bt(a) {
          const t = a.authentication_type,
            n = a.auth_type;
          if (t == H.O6.w$) return "#authorized_devices_default_qr";
          if (a.effective_token_state == H.wv.BH)
            return "#authorized_devices_remembered_machine";
          switch (n) {
            case H.TY.Xs:
              return "#authorized_devices_emailcode_password";
            case H.TY.bH:
              return "#authorized_devices_devicecode_password";
            case H.TY.x0:
            case H.TY.$Y:
              return "#authorized_devices_mobileconf_password";
            case H.TY.ig:
              return "#authorized_devices_machinetoken_password";
            case H.TY.sF:
            case H.TY.oP:
            case H.TY.WM:
            default:
              return "#authorized_devices_default_password";
          }
        }
        function Lt(a) {
          const { device: t, bHasAuthenticator: n } = a,
            i = t.effective_token_state == H.wv.BH;
          let o = null;
          if (t.platform_type == H.SS.tS)
            o = i
              ? (0, e.jsx)(te.SQF, {
                  className: (0, p.A)(x.DeviceLogo, x.RememberedDevice),
                })
              : (0, e.jsx)(te.FH7, { className: x.DeviceLogo });
          else if (
            t.platform_type == H.SS.w0 &&
            (t.gaming_device_type === z.LS$ ||
              t.gaming_device_type == z.ppM ||
              t.gaming_device_type == z.Ner)
          )
            o = i
              ? (0, e.jsx)(te.VRo, {
                  className: (0, p.A)(x.DeviceLogo, x.RememberedDevice),
                })
              : (0, e.jsx)(te.oEi, { className: x.DeviceLogo });
          else
            switch (t.os_platform) {
              case se.tz.k_EPlatformTypeWin32:
              case se.tz.k_EPlatformTypeWin64:
              case se.tz.k_EPlatformTypeOSX:
                o = i
                  ? (0, e.jsx)(te.ulH, {
                      className: (0, p.A)(x.DeviceLogo, x.RememberedDevice),
                    })
                  : (0, e.jsx)(te.nl8, { className: x.DeviceLogo });
                break;
              case se.tz.k_EPlatformTypeAndroid32:
              case se.tz.k_EPlatformTypeAndroid64:
              case se.tz.k_EPlatformTypeLinux32:
              case se.tz.k_EPlatformTypeLinux64:
                o = (0, e.jsx)(Ne.rfv, { className: x.DeviceLogo });
                break;
              case se.tz.k_EPlatformTypeIOS32:
              case se.tz.k_EPlatformTypeIOS64:
                o = (0, e.jsx)(Ne.rfv, { className: x.DeviceLogo });
                break;
            }
          return n
            ? (0, e.jsxs)("div", {
                className: x.DeviceLogoBoundingBox,
                children: [
                  o,
                  (0, e.jsx)("img", {
                    src: Ue,
                    className: x.DeviceSteamGuardLogo,
                  }),
                ],
              })
            : o;
        }
        function Mt(a) {
          if (a.platform_type == H.SS.tS) {
            let t = new Ct.UAParser(a.token_description).getResult();
            return t.browser.name && t.os.name
              ? t.browser.name == "WebKit"
                ? t.os.name
                : (0, s.we)(
                    "#accountpreferences_authorized_devices_browser_on_os",
                    t.browser.name,
                    t.os.name,
                  )
              : (0, s.we)(
                  "#accountpreferences_authorized_devices_browser_unmatched",
                );
          } else return a.token_description;
        }
        function Ke(a) {
          const t = a.last_seen ?? a.first_seen;
          if (t)
            if ((0, Pt.nA)(u.TS.EREALM)) {
              if (t.city) return { location: t.city, country: t.country };
            } else
              return {
                location: `${t.city ? t.city + ", " : ""}${t.country}`,
                country: t.country,
              };
          return {
            location: (0, s.we)(
              "#accountpreferences_authorized_devices_loc_unknown",
            ),
            country: "",
          };
        }
        function Ot(a) {
          const { device: t } = a;
          switch (t.platform_type) {
            case H.SS.Ql:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_mobile",
              );
            case H.SS.w0:
              return t.gaming_device_type === z.LS$
                ? (0, s.we)(
                    "#accountpreferences_authorized_devices_type_steamdeck",
                  )
                : t.gaming_device_type == z.ppM
                  ? (0, s.we)(
                      "#accountpreferences_authorized_devices_type_legiongos",
                    )
                  : t.gaming_device_type == z.Ner
                    ? (0, s.we)(
                        "#accountpreferences_authorized_devices_type_steamos",
                      )
                    : (0, s.we)(
                        "#accountpreferences_authorized_devices_type_desktop",
                      );
            case H.SS.tS:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_browser",
              );
            case H.SS.FB:
            default:
              return (0, s.we)(
                "#accountpreferences_authorized_devices_type_unknown",
              );
          }
        }
        function Gt(a) {
          const { closeModal: t } = a,
            n = async () => {
              const i = new FormData();
              i.set("action", "deauthorize"),
                i.set("sessionid", (0, u.KC)()),
                await w().post(
                  u.TS.STORE_BASE_URL + "twofactor/manage_action",
                  i,
                );
              const o = document.createElement("form");
              (o.method = "POST"), (o.action = u.TS.STORE_BASE_URL + "logout");
              const P = document.createElement("input");
              (P.type = "hidden"),
                (P.name = "sessionid"),
                (P.value = (0, u.KC)()),
                o.appendChild(P),
                document.body.appendChild(o),
                o.submit();
            };
          return (0, e.jsx)($.x_, {
            onEscKeypress: t,
            children: (0, e.jsxs)(_.UC, {
              children: [
                (0, e.jsx)(_.Y9, {
                  children: (0, s.we)("#authorized_devices_deauthorize_title"),
                }),
                (0, e.jsxs)(_.nB, {
                  children: [
                    (0, e.jsx)(_.a3, {
                      children: (0, s.we)(
                        "#authorized_devices_deauthorize_msg",
                      ),
                    }),
                    (0, e.jsx)(_.wi, {
                      children: (0, e.jsx)(_.CB, {
                        strOKText: (0, s.we)(
                          "#authorized_devices_deauthorize_proceed",
                        ),
                        onOK: n,
                        onCancel: t,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var I = r(86342),
          Ut = ((a) => (
            (a[(a.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (a[(a.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            a
          ))(Ut || {});
        function Ht(a) {
          return (0, e.jsxs)("div", {
            children: [(0, e.jsx)(Ft, {}), (0, e.jsx)(Tt, {})],
          });
        }
        function Ft(a) {
          const t = u.TS.HELP_BASE_URL + "faqs/view/7EFD-3CAE-64D3-1C31",
            n = he.Get(),
            i = n.GetTwoFactorStatus()?.steamguard_scheme == 2;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: "account_header_line",
                children: (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsx)(te.iSZ, { className: I.HeaderIcon }),
                    (0, s.we)("#youraccount_account_security"),
                  ],
                }),
              }),
              (0, e.jsxs)("div", {
                className: (0, p.A)(
                  I.AccountSecurityCtn,
                  "account_settings_container",
                ),
                children: [
                  (0, e.jsx)("div", {
                    children: (0, s.oW)(
                      "#accountpreferences_account_security_description",
                      (0, e.jsx)(g.Ii, { target: "_blank", href: t }),
                    ),
                  }),
                  i
                    ? (0, e.jsx)(zt, {
                        msgTwoFactorStatus: n.GetTwoFactorStatus(),
                        strFaqUrl: t,
                      })
                    : (0, e.jsx)(Kt, { strFaqUrl: t }),
                  (0, e.jsxs)("div", {
                    className: I.AccountDetailsCtn,
                    children: [
                      (0, e.jsx)(Wt, {}),
                      (0, e.jsx)("div", { className: I.Divider }),
                      (0, e.jsx)(Vt, {}),
                      (0, e.jsx)(Qt, {
                        msgTwoFactorStatus: n.GetTwoFactorStatus(),
                      }),
                      i && (0, e.jsx)(Yt, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function zt(a) {
          const { msgTwoFactorStatus: t, strFaqUrl: n } = a,
            i = he.Get(),
            o = Fe(i),
            P = ze(),
            T = [
              ...(i.GetActiveDevices() ?? []),
              ...(i.GetActiveDevices() ?? []),
            ];
          let X = null,
            Z = !1;
          return (
            t?.last_seen_auth_token_id &&
              ((X = T.find((Ae) => Ae.token_id === t.last_seen_auth_token_id)),
              (Z = P?.length > 0 && P == X?.token_id)),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsxs)("div", {
                  className: I.SteamGuardStatusHeader,
                  children: [
                    (0, e.jsx)("img", { className: I.SteamGuardLogo, src: Ue }),
                    (0, e.jsx)("div", {
                      className: I.HeaderText,
                      children: (0, s.we)(
                        "#accountpreferences_account_security_steamguard",
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: I.RemoveText,
                      children: (0, e.jsx)(g.Ii, {
                        href:
                          u.TS.STORE_BASE_URL +
                          "twofactor/remove?step=promptdevice",
                        children: (0, s.we)(
                          "#accountpreferences_account_security_steamguard_remove",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: I.SteamGuardStatusBody,
                  children: [
                    !!X &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)(ke, {
                            className: I.AuthorizedDevice,
                            device: X,
                            strActiveCountry: o,
                            msgTwoFactorStatus: t,
                            bShowAuthenticatorActivity: !0,
                          }),
                          (0, e.jsx)("div", { className: I.Divider }),
                        ],
                      }),
                    (0, e.jsxs)("div", {
                      className: I.SteamGuardActionsCtn,
                      children: [
                        (0, e.jsx)(ve, {
                          strLabel: (0, s.we)(
                            "#accountpreferences_account_security_move",
                          ),
                          href:
                            u.TS.HELP_BASE_URL +
                            "faqs/view/29A9-9EEE-09F0-75F9",
                        }),
                        (0, e.jsx)(ve, {
                          strLabel: (0, s.we)(
                            "#accountpreferences_account_security_help_lost",
                          ),
                          href:
                            u.TS.STORE_BASE_URL +
                            "twofactor/remove?step=promptdevice",
                        }),
                        (0, e.jsx)("div", {
                          className: I.RightAligned,
                          children: (0, e.jsx)(g.Ii, {
                            href: n,
                            target: "_blank",
                            children: (0, s.we)(
                              "#accountpreferences_account_security_view_faq",
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
        function Kt(a) {
          const { strFaqUrl: t } = a,
            n = he.Get().GetLatestAndroidAppVersion();
          return (0, e.jsxs)("div", {
            className: I.NoSteamGuardCtn,
            children: [
              (0, e.jsxs)("div", {
                className: I.SteamGuardStatusHeader,
                children: [
                  (0, e.jsx)("img", { className: I.SteamGuardLogo, src: jt }),
                  (0, e.jsx)("div", {
                    className: I.HeaderText,
                    children: (0, s.we)(
                      "#accountpreferences_account_security_no_steamguard",
                    ),
                  }),
                ],
              }),
              (0, e.jsx)("div", { className: I.Divider }),
              (0, e.jsxs)("div", {
                className: I.NoSteamGuardBody,
                children: [
                  (0, e.jsxs)("div", {
                    className: I.QROuterCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: I.GetMobileAppCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: I.GetMobileAppText,
                            children: (0, s.oW)(
                              "#accountpreferences_account_security_get_app",
                              (0, e.jsx)(g.Ii, {
                                href:
                                  u.TS.STORE_BASE_URL + "mobile#mobile_section",
                              }),
                            ),
                          }),
                          (0, e.jsx)("div", {
                            children: (0, s.we)(
                              "#accountpreferences_account_security_scan_qr",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsx)("img", { src: St, className: I.QRCode }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: I.MobileAppLinksCtn,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, s.we)(
                          "#accountpreferences_account_security_mobile_os_reqs",
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: I.MobileAppDownloadImages,
                        children: [
                          (0, e.jsx)(g.Ii, {
                            href: "https://itunes.apple.com/us/app/steam-mobile/id495369748",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, e.jsx)(Ge.o, {
                              srcs: We(
                                u.TS.IMG_URL +
                                  "mobile/localizedimages/appleappstore/apple_store_",
                                ".png",
                              ),
                              className: I.AppleAppStoreImg,
                            }),
                          }),
                          (0, e.jsx)(g.Ii, {
                            href: "https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, e.jsx)(Ge.o, {
                              srcs: We(
                                u.TS.IMG_URL +
                                  "mobile/localizedimages/googleplaystore/google_play_store_",
                                ".png",
                              ),
                              className: I.GooglePlayStoreImg,
                            }),
                          }),
                        ],
                      }),
                      (0, e.jsx)("div", {
                        children: (0, s.oW)(
                          "#accountpreferences_account_security_apk_download",
                          (0, e.jsx)("a", {
                            href: `https://media.steampowered.com/apps/steam-android/steam-${n}.apk`,
                          }),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        children: (0, e.jsx)("a", {
                          href: t,
                          target: "_blank",
                          children: (0, s.we)(
                            "#accountpreferences_account_security_mobile_faq",
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
        function We(a, t) {
          const n = s.A0.GetLanguageFallback(u.TS.LANGUAGE);
          let i = [a + u.TS.LANGUAGE + t];
          return u.TS.LANGUAGE != n && i.push(a + n + t), i;
        }
        function Wt(a) {
          const t = he.Get(),
            n = u.TS.IN_MOBILE_WEBVIEW;
          return (0, e.jsxs)("div", {
            className: I.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(ge, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_account_name",
                ),
                strText: t.GetAccountName(),
              }),
              (0, e.jsx)(ve, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_change_pass",
                ),
                href:
                  u.TS.HELP_BASE_URL +
                  "wizard/HelpChangePassword?redir=store/account/",
                target: n ? "_blank" : void 0,
              }),
            ],
          });
        }
        function Qt(a) {
          const { msgTwoFactorStatus: t } = a,
            n = he.Get(),
            i = t.email_validated,
            o = t.steamguard_scheme == 1,
            P = u.TS.IN_MOBILE_WEBVIEW;
          return (0, e.jsxs)("div", {
            className: I.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(ge, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_email",
                ),
                strText: n.GetEmailAddress(),
              }),
              (0, e.jsx)(ge, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_email_status",
                ),
                strText: i
                  ? (0, s.we)("#youraccount_email_verified")
                  : (0, s.we)("#youraccount_email_unverified"),
              }),
              o &&
                (0, e.jsx)(ge, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_verification",
                  ),
                  strText: (0, s.we)(
                    "#accountpreferences_account_security_via_email",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: I.EmailActions,
                children: [
                  (0, e.jsx)(ve, {
                    strLabel: (0, s.we)(
                      "#accountpreferences_account_security_change_email",
                    ),
                    href:
                      u.TS.HELP_BASE_URL +
                      "wizard/HelpChangeEmail?redir=store/account/",
                    target: P ? "_blank" : void 0,
                  }),
                  o &&
                    (0, e.jsx)(ve, {
                      strLabel: (0, s.we)(
                        "#accountpreferences_account_security_remove_email_guard",
                      ),
                      href: u.TS.STORE_BASE_URL + "twofactor/manage",
                    }),
                ],
              }),
            ],
          });
        }
        function Vt(a) {
          const t = he.Get();
          let n = (0, s.we)("#accountpreferences_account_security_phone_none");
          return (
            t.GetPhoneHint() &&
              (n = (0, s.we)(
                "#accountpreferences_account_security_phone_hint",
                t.GetPhoneHint(),
              )),
            (0, e.jsxs)("div", {
              className: I.AccountDetailsSubBlock,
              children: [
                (0, e.jsx)(ge, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_phone",
                  ),
                  strText: n,
                }),
                (0, e.jsx)(ve, {
                  strLabel: (0, s.we)(
                    "#accountpreferences_account_security_manage_phone",
                  ),
                  href: u.TS.STORE_BASE_URL + "phone/manage",
                }),
              ],
            })
          );
        }
        function Yt(a) {
          return (0, e.jsxs)("div", {
            className: I.AccountDetailsSubBlock,
            children: [
              (0, e.jsx)(ge, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_backup_codes",
                ),
              }),
              (0, e.jsx)(ve, {
                strLabel: (0, s.we)(
                  "#accountpreferences_account_security_get_backup_codes",
                ),
                href: u.TS.STORE_BASE_URL + "twofactor/emergency_codes",
              }),
            ],
          });
        }
        function ge(a) {
          const { strLabel: t, strText: n } = a;
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("span", {
                className: I.AccountDetailLabel,
                children: t,
              }),
              !!n && (0, e.jsx)("span", { children: n }),
            ],
          });
        }
        function ve(a) {
          const { strLabel: t, href: n, target: i } = a;
          return (0, e.jsx)("div", {
            children: (0, e.jsx)(g.Ii, {
              className: I.AccountActionButton,
              href: n,
              target: i,
              children: t,
            }),
          });
        }
        const Jt = m.lazy(() =>
            Promise.all([
              r.e(92298),
              r.e(70576),
              r.e(33512),
              r.e(18307),
              r.e(79611),
              r.e(94781),
              r.e(80702),
              r.e(68578),
              r.e(4874),
              r.e(7368),
              r.e(56925),
              r.e(67072),
            ]).then(r.bind(r, 80052)),
          ),
          Qe = {
            CookieSettings: () => "/cookiepreferences",
            FamilyManagement: () => "/familymanagement",
            SecurityDevices: () => "/authorizeddevices",
            PlaytestInvites: () => "/playtestinvites",
            Playtests: () => "/playtests",
          },
          Xt = (a) => {
            const t = a.match.url,
              n = Qe;
            return (0, e.jsxs)(S.dO, {
              children: [
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.CookieSettings()}`,
                  render: () =>
                    (0, e.jsx)(Ce.X, {
                      config: {
                        "cookie-preferences": () => (0, e.jsx)(Ye, {}),
                      },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.FamilyManagement()}`,
                  render: () =>
                    (0, e.jsx)(Ce.X, {
                      config: { "family-management": () => (0, e.jsx)(Jt, {}) },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.SecurityDevices()}`,
                  render: () =>
                    (0, e.jsx)(Ce.X, {
                      config: { "security-devices": () => (0, e.jsx)(Ht, {}) },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.PlaytestInvites()}`,
                  render: () =>
                    (0, e.jsx)(Ce.X, {
                      config: {
                        "playtest-invites": () =>
                          (0, e.jsx)(be, { bShowPlaytestOverview: !0 }),
                      },
                    }),
                }),
                (0, e.jsx)(S.qh, {
                  path: `${t}${n.Playtests()}`,
                  render: () =>
                    (0, e.jsx)(Ce.X, {
                      config: { playtests: (i) => (0, e.jsx)(pt, { ...i }) },
                    }),
                }),
              ],
            });
          };
      },
      43047: (B) => {
        B.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      39449: (B) => {
        B.exports = {
          PopupScreenshotModal: "yloqxGhIEzvGIwbQbo6KP",
          PopupScreenshotContainer: "_1wwvw8QMJqug_-ioZdRJTC",
          PopupScreenshot: "_31XZuVC3l846TjPDScscaS",
          ButtonCtn: "_3MyspS-H5SnsUnKa3yhdtJ",
          ButtonIcon: "_1tCO1rmBfntUI0TlpTly1F",
          Disabled: "_1a_f8VY56CtjgePDRTaC-W",
        };
      },
      67523: (B) => {
        B.exports = { ErrorDiv: "_2FXMECiK-1oag3HieTiKJW" };
      },
      21038: (B) => {
        B.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      61359: (B) => {
        B.exports = {
          AuthorizedDeviceHeader: "_2OcGChel9mKKDiT5UYgL8I",
          SectionDescription: "_2INQL8oKYSG91_gqx2zvnV",
          AuthorizedDeviceGroup: "_20iEFcT5JyJPhTjbaJ0ajE",
          DeviceGroup: "_2mir-ym1kKS06jV0W7mtUx",
          AuthorizedDevicesRecentHeader: "_35lIIoiD4gnKLmNL3H9zAo",
          RememberedDevice: "_2gQ1ywJDhv3qFFjvjtt39w",
          DeviceLogo: "_3u6D3tBNr6Pd8scEAu0WHh",
          RevokedDevice: "_22EU1rJVczbjFuV39qprXh",
          DeviceContainer: "_173r5KvavKBUk01FwZftvC",
          ActiveDevice: "_2eItHkwsCAtMw7E-EF_YG_",
          ThisDevice: "_3o3paJd8GOTYKXh7Rd3Br8",
          DeviceContent: "_3fcDKsMFeSrukc_lptL5k6",
          DeviceHeaderRow: "_366kraIS4n5agiJpxnOSL2",
          DeviceNameContainer: "_2thyM-IiBuBfn44nW5anSY",
          DeviceName: "e-cYNmgoRYobtL32PBDvh",
          LocationSuspicious: "_2wFj-skWKPalSQ4MHk27Wr",
          LastSeenRow: "_2Q1XRSo_YDuNplXJSPKtsq",
          LastActive: "CKNbt1mIaNAep7MwHG6eX",
          NewDevice: "_10WUgZtyhPN8XWybruXSY9",
          AuthorizedDeviceDetails: "Zq-YGng4xfhI7CCwSN6UF",
          DetailsToggleContainer: "_2h6gzZPnXmr8pFVxduqp_k",
          DetailsToggle: "_2-E69gxiszxb3lmuoV7yYi",
          Selected: "JQwtQncjBu_1UajTl86pS",
          ActiveNow: "aR0IvXuy6BAh7MauaSs5j",
          ActiveNowDot: "_2sNYH7uxn-CGdZCk4lGMAg",
          DeviceLogoBoundingBox: "_25S2w41EbEIy3v97Dc0nl8",
          DeviceSteamGuardLogo: "_3BA92JhNM9ztpJY4hnWagy",
          RemoveDevicesRow: "_3EYcq6Ow2WM7bGuzWyQRMN",
          RemoveDevicesButton: "_37dMp7l0gWnMweQxR4Qj7Z",
        };
      },
      72518: (B) => {
        B.exports = {
          AllButton: "_24Y_0sMrz5EywcAsFUstI1",
          ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
          CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
          DataCollectionSettingsHeader: "-N7TxEZXL1e7VIKEfBOds",
          ButtonGroup: "YPn6VOod44mu0w34xdzDC",
          CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
          CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
          SectionDescription: "GA-wFr-pPreiaNq3wRump",
          NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
          NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
          NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
          SavedHardwareList: "_3cKa2WCkwVF9l83qdejZnW",
          SavedHardware: "rH2OfMey8m_-tFha6mSo3",
          FriendlyName: "_33i2P3K0jts8t9ZvEucxHX",
          Details: "_1rRiE6QmvGsMc-qivc5Xp1",
          SavedHardwareControls: "_24azLL9qdi04Bq8Q6NT3pc",
          DeleteButton: "kwiQ_gtacj8i38Yf6HMLh",
          RenameButton: "_1uhme8b0f9MEqNEEMZTVIt",
          SavedHardwareAddPCButton: "_1h6y7HfPp9ZETEt3vGYcIa",
        };
      },
      86227: (B) => {
        B.exports = {
          narrowWidth: "500px",
          PlaytestInvites: "_3XPWJM0EKr-dJ0B0NJtmjq",
          PlaytestInvite: "_22d1cAhcNjyVeCgm3buXvn",
          InviteInfo: "_9XX6R8HJVzwJ9jnfbIL-I",
          InviteDescription: "_3o2bwehhb6IiaAgm2UqSWZ",
          TimeInvited: "_1QDTpUha3gVN27iIGSQYu3",
          StatusCtn: "_1ItLCAR90cxfIMjbiraDqU",
          Buttons: "_1Fh12RGmObsvcXIRY7vQYf",
          WideButton: "wA5p2wik9ul235sZq1VJO",
          AppInfoCtn: "_2ToVcjoGTH4m6cNznWft6s",
          AppName: "_3rcHvM3XilLmqUey9RCWcR",
          AppDetail: "_1y2mfNER5Q5t4vb_ImMa3M",
          AppDescription: "_3O4Y1ujrXP2H7shfwIyVyr",
          SmallCap: "_1dsys_7Sn0ty3ZFNvF8VtC",
          AvatarAndPersona: "_3uUPNFsdEI9Fba-fyvnslj",
          Description: "_2fAxlp5l2ZkuTUe5oYvdRB",
        };
      },
      31896: (B) => {
        B.exports = { PlaytestStatusCtn: "_2eYiuTSkBQNywb-x-gquMD" };
      },
      86342: (B) => {
        B.exports = {
          narrowWidth: "500px",
          HeaderIcon: "_1DTV9TockJu_p7oiuZdWi6",
          AccountSecurityCtn: "_20DWPovgBZty81RwR7w9KW",
          AccountDetailsCtn: "FPQ9JppMamYmV0bS3zfDK",
          Divider: "_2DEfsEp7B2EWcj-wsoNnhc",
          AccountDetailsSubBlock: "aSLHKQsd5_tpAOdPgV5W1",
          EmailActions: "_2beoIY1coKEr8VYWkMFz1e",
          AccountDetailLabel: "W8esOSj_nvqyHTDxmGb2D",
          AccountActionButton: "_9fMwjaiixbDViVPurFAa4",
          SteamGuardStatusHeader: "BblQleWhhGVHu1TTaGdBI",
          HeaderText: "f3AwNeCF2PApiJ1yy2SII",
          SteamGuardLogo: "_373XxWi-VMyuhak5AkKWJR",
          RemoveText: "_2kFtGHlyLy724EB-HfKU6P",
          SteamGuardStatusBody: "-haW8HUYitKrzvsXQj_y6",
          AuthorizedDevice: "_1AvzOfTQ0sRKrk6NjJCe1M",
          SteamGuardActionsCtn: "_2JiIyKqLJrcGM5ABcQJ12s",
          RightAligned: "_3tH8spjqRz_Z6mmB4uWK-m",
          NoSteamGuardCtn: "o7VeKaSFD1CCBeZaAx-fb",
          NoSteamGuardBody: "_1UZaReJ5vqaDDNrR92LUfB",
          GetMobileAppCtn: "_3l4-i07loydWsCfabu0uv4",
          GetMobileAppText: "_34Ckpic2BxcwJoDsL0LQ7O",
          QROuterCtn: "XuL3KGluGJQa0C1sMnVC1",
          QRPointingArrow: "_1h-ifgHMnM357x2V6pKErV",
          QRCode: "owjpvFLO7gx4wTw_RofLx",
          MobileAppLinksCtn: "_2_7_jSeZidSftWskkhJV84",
          MobileAppDownloadImages: "_1aj-IQUPvF3Cq-lE1msSiJ",
          AppleAppStoreImg: "_3h50gHmzosl6KqYJtKto9O",
          GooglePlayStoreImg: "_273YCymOUtX4V13BJ6p2uZ",
        };
      },
      61738: (B, O, r) => {
        var e = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function m(D) {
          var f = S(D);
          return r(f);
        }
        function S(D) {
          if (!r.o(e, D)) {
            var f = new Error("Cannot find module '" + D + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          return e[D];
        }
        (m.keys = function () {
          return Object.keys(e);
        }),
          (m.resolve = S),
          (B.exports = m),
          (m.id = 61738);
      },
    },
  ]);
})();
