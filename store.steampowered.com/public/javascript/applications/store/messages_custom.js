/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [8287],
    {
      1012: (l, A, e) => {
        "use strict";
        e.d(A, { b: () => y });
        var t = e(90626),
          P = e(84797),
          h = e(68622),
          B = e(32339),
          M = e(4452);
        const i = { 2022: P, 2023: h, 2024: B, 2025: M },
          f = Object.values(i).reduce((d, o) => ({ ...d, ...o }), {}),
          s = 2022;
        function y(d) {
          const [o, v] = (0, t.useState)({});
          return (
            (0, t.useEffect)(() => {
              let g = i[d];
              g || (g = i[s]), v({ ...f, ...g });
            }, [d]),
            o
          );
        }
      },
      54407: (l, A, e) => {
        "use strict";
        e.d(A, { B3: () => n, KM: () => R, KT: () => O });
        var t = e(41735),
          P = e.n(t),
          h = e(58632),
          B = e.n(h),
          M = e(90626),
          i = e(80902),
          f = e(75233),
          s = e(72604),
          y = e(76559),
          d = e(34592),
          o = e(3166),
          v = e(35038),
          I = e(27386),
          g = e(68312);
        const G = "nicknames";
        function R(a) {
          const p = (0, g.KV)(),
            { data: m, isLoading: _ } = (0, i.I)({
              queryKey: [G],
              queryFn: async () => {
                const C = new Map();
                if (o.iA.logged_in) {
                  const c = v.w.Init(I.w_T),
                    T = (await I.xtC.GetNicknameList(p, c)).Body().toObject();
                  T?.nicknames &&
                    T.nicknames.length > 0 &&
                    T.nicknames.forEach((E) => {
                      E.accountid &&
                        E.nickname &&
                        C.set(E.accountid, E.nickname);
                    });
                }
                return C;
              },
            });
          return m ? m.get(a) : null;
        }
        async function S(a) {
          if (!a || a.length == 0) return [];
          const p =
            (0, o.yK)() == "community"
              ? o.TS.COMMUNITY_BASE_URL
              : o.TS.STORE_BASE_URL;
          if (a.length == 1) {
            const m = { accountid: a[0], origin: self.origin },
              _ = await P().get(`${p}actions/ajaxgetavatarpersona`, {
                params: m,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != s.R ||
              !_.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, d.H))(_).strErrorMsg}`;
            return [_.data.userinfo];
          } else {
            const m = { accountids: a.join(","), origin: self.origin },
              _ = await P().get(`${p}actions/ajaxgetmultiavatarpersona`, {
                params: m,
              });
            if (
              !_ ||
              _.status != 200 ||
              _.data?.success != s.R ||
              !_.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, d.H))(_).strErrorMsg}`;
            const C = new Map();
            return (
              _.data.userinfos.forEach((c) =>
                C.set(new y.b(c.steamid).GetAccountID(), c),
              ),
              a.map((c) => C.get(c))
            );
          }
        }
        const L = new (B())((a) => S(a), { cache: !1 }),
          D = "avatarandpersonas";
        function O(a) {
          const { data: p, isLoading: m } = (0, i.I)({
            queryKey: [D, a],
            queryFn: () => L.load(a),
          });
          return [p, m];
        }
        function n(a) {
          const p = (0, f.jE)(),
            { data: m, isLoading: _ } = (0, i.I)({
              queryKey: [D, a],
              queryFn: async () => {
                const c = await L.loadMany(a);
                return (
                  c.forEach((u) => {
                    if (u instanceof Error) return;
                    const T = [D, new y.b(u.steamid).GetAccountID()];
                    p.setQueryData(T, u);
                  }),
                  c
                );
              },
              enabled: a?.length > 0,
            }),
            C = (0, M.useMemo)(() => {
              const c = new Array();
              return (
                m?.forEach((u) => {
                  u instanceof Error || c.push(u);
                }),
                c
              );
            }, [m]);
          return _ ? null : C;
        }
        function r(a) {
          return ReactQueryClient.getQueryData([D, a]);
        }
      },
      72795: (l, A, e) => {
        "use strict";
        e.r(A), e.d(A, { default: () => I });
        var t = e(7850),
          P = e(53617),
          h = e(94344),
          B = e(19298),
          M = e(54407),
          i = e(18210),
          f = e(3166),
          s = e(32077),
          y = e.n(s),
          d = e(1012),
          o = e(36707),
          v = e(86174);
        function I(n) {
          const r = (0, d.b)(n.year),
            a = O();
          return (0, t.jsxs)("div", {
            className: (0, o.A)(s.MMFrame, r.MMFrame, r.MMOverride),
            onClick: a,
            children: [
              (0, t.jsxs)("div", {
                className: s.HeaderCtn,
                children: [
                  (0, t.jsx)(S, {
                    baseClass: (0, o.A)(s.ReplayLogo, r.ReplayLogo),
                    accentClass: (0, o.A)(
                      s.ReplayLogoAccent,
                      r.ReplayLogoAccent,
                    ),
                  }),
                  (0, t.jsx)(L, { year: n.year, theme: r }),
                ],
              }),
              (0, t.jsx)(R, { className: (0, o.A)(s.SteamLogo, r.SteamLogo) }),
              (0, t.jsx)(D, { theme: r }),
              (0, t.jsxs)("div", {
                className: (0, o.A)(s.Content, r.Content),
                children: [
                  (0, t.jsx)(g, { theme: r }),
                  (0, t.jsx)("div", {
                    className: (0, o.A)(s.Description, r.Description),
                    children: (0, i.we)("#YIR_MM_Generic_Desc"),
                  }),
                  (0, t.jsx)(G, { theme: r }),
                ],
              }),
            ],
          });
        }
        function g(n) {
          const { theme: r } = n,
            [a] = (0, M.KT)(f.iA.accountid);
          return a
            ? (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)("div", {
                    className: (0, o.A)(s.Avatar, r.Avatar),
                    children:
                      a &&
                      a.avatar_url &&
                      (0, t.jsx)("img", {
                        src: a.avatar_url.replace(/\.jpg$/, "_full.jpg"),
                      }),
                  }),
                  (0, t.jsx)("div", {
                    className: (0, o.A)(s.DataBlock, r.DataBlock),
                    children: (0, t.jsx)("div", {
                      className: (0, o.A)(s.PersonaName, r.PersonaName),
                      children: a ? a.persona_name : "",
                    }),
                  }),
                ],
              })
            : null;
        }
        function G(n) {
          const { theme: r } = n,
            a = O();
          return (0, t.jsx)(B.Z, {
            className: (0, o.A)(s.ViewPageButton, r.ViewPageButton),
            onActivate: a,
            children: (0, i.we)("#YIR_MM_Generic_Action"),
          });
        }
        function R(n) {
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 476 600",
            fill: "none",
            ...n,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M120.149 -86.0844C-66.5487 -86.0844 -219.429 57.91 -234 240.963L-43.5621 319.782C-27.4326 308.711 -7.95244 302.318 13.0861 302.318C14.9562 302.318 16.8263 302.318 18.6964 302.474L103.396 179.608C103.396 179.062 103.396 178.438 103.396 177.892C103.396 103.985 163.551 43.7991 237.419 43.7991C311.288 43.7991 371.443 103.985 371.443 177.892C371.443 251.8 311.288 311.986 237.419 311.986C236.406 311.986 235.394 311.986 234.381 311.986L113.604 398.211C113.604 399.77 113.682 401.407 113.682 402.966C113.682 458.475 68.5656 503.614 13.0861 503.614C-35.6142 503.614 -76.2888 468.844 -85.5613 422.769L-221.766 366.325C-179.611 515.542 -42.5491 625 120.149 625C316.431 625 475.467 465.803 475.467 269.497C475.467 73.1904 316.353 -86.0844 120.149 -86.0844Z",
                fillOpacity: "0.15",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M-11.3061 453.406L-54.9417 435.397C-47.2275 451.535 -33.8252 465.022 -16.0593 472.429C22.3556 488.411 66.6145 470.168 82.6661 431.733C90.3802 413.1 90.4582 392.596 82.744 373.964C75.1078 355.331 60.6146 340.752 41.9915 333.034C23.5244 325.316 3.73256 325.628 -13.6437 332.176L31.4723 350.809C59.8354 362.659 73.2377 395.169 61.3938 423.547C49.6278 451.925 17.057 465.334 -11.3061 453.484V453.406Z",
                fillOpacity: "0.15",
              }),
              (0, t.jsx)("path", {
                fill: "currentColor",
                d: "M326.71 177.812C326.71 128.541 286.659 88.4688 237.413 88.4688C188.167 88.4688 148.116 128.541 148.116 177.812C148.116 227.084 188.167 267.156 237.413 267.156C286.659 267.156 326.71 227.084 326.71 177.812ZM170.479 177.656C170.479 140.625 200.557 110.532 237.569 110.532C274.581 110.532 304.658 140.547 304.658 177.656C304.658 214.766 274.659 244.781 237.569 244.781C200.479 244.781 170.479 214.766 170.479 177.656Z",
                fillOpacity: "0.15",
              }),
            ],
          });
        }
        function S(n) {
          const { baseClass: r, accentClass: a } = n;
          return (0, t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 80 50",
            fill: "none",
            className: r,
            children: [
              (0, t.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.2213 0C17.4482 0.00172977 11.8873 2.17351 7.64545 6.08314C3.40358 9.99277 0.791694 15.3536 0.32959 21.0987L12.6419 26.1835C13.7181 25.445 14.9936 25.0504 16.2994 25.0519H16.6621L22.1382 17.1305V17.0399C22.1382 15.329 22.6464 13.6564 23.5985 12.2338C24.5506 10.8112 25.9039 9.70245 27.4872 9.0477C29.0705 8.39295 30.8128 8.22163 32.4936 8.55542C34.1745 8.88921 35.7184 9.71311 36.9303 10.9229C38.1421 12.1328 38.9673 13.6742 39.3017 15.3522C39.636 17.0303 39.4644 18.7697 38.8086 20.3504C38.1528 21.9311 37.0421 23.2822 35.6172 24.2327C34.1922 25.1833 32.517 25.6907 30.8032 25.6907H30.6218L22.8132 31.2533V31.5601C22.8098 33.1681 22.2087 34.7177 21.1265 35.9087C20.0443 37.0998 18.5579 37.8475 16.9551 38.0071C15.3524 38.1668 13.7473 37.7269 12.4507 36.7729C11.1541 35.8188 10.2583 34.4183 9.93666 32.8426L1.1306 29.2063C2.29301 33.3131 4.58013 37.0146 7.7347 39.8946C10.8893 42.7746 14.7862 44.7187 18.987 45.5082C23.1879 46.2978 27.5261 45.9015 31.5138 44.364C35.5014 42.8264 38.9802 40.2086 41.5589 36.805C44.1376 33.4013 45.7139 29.3468 46.1105 25.0976C46.5071 20.8484 45.7083 16.5729 43.8039 12.7522C41.8995 8.9315 38.9651 5.71705 35.3307 3.47042C31.6963 1.2238 27.5061 0.034119 23.2314 0.0352101L23.2213 0ZM14.7278 34.804L11.9016 33.6371C12.3115 34.4904 12.9613 35.2061 13.7719 35.6969C14.5824 36.1876 15.5185 36.4321 16.4659 36.4006C17.4133 36.369 18.331 36.0628 19.107 35.5193C19.8829 34.9757 20.4836 34.2184 20.8357 33.3397C21.1877 32.461 21.2759 31.499 21.0895 30.5712C20.903 29.6433 20.45 28.7897 19.7858 28.1145C19.1215 27.4394 18.2747 26.9719 17.3488 26.7692C16.4229 26.5665 15.4579 26.6373 14.5716 26.973L17.4885 28.1801C18.3439 28.5615 19.0162 29.2614 19.362 30.1307C19.7079 30.9999 19.6998 31.9696 19.3397 32.833C18.9796 33.6964 18.2958 34.3852 17.4343 34.7524C16.5727 35.1197 15.6015 35.1364 14.7278 34.7989V34.804ZM35.606 13.8365C36.2398 14.785 36.5776 15.8999 36.5766 17.04C36.5726 18.567 35.9629 20.0302 34.8809 21.1095C33.7989 22.1887 32.3327 22.7962 30.8032 22.7988C29.6612 22.7988 28.5448 22.4606 27.5953 21.8271C26.6457 21.1935 25.9058 20.293 25.4689 19.2396C25.0321 18.1861 24.9181 17.0269 25.1413 15.9087C25.3644 14.7905 25.9148 13.7635 26.7227 12.9576C27.5306 12.1517 28.5598 11.6032 29.68 11.3814C30.8003 11.1595 31.9612 11.2744 33.0161 11.7114C34.0709 12.1484 34.9723 12.888 35.606 13.8365ZM27.2044 14.6328C26.7283 15.3456 26.4748 16.1834 26.4758 17.04C26.4771 18.1877 26.9347 19.2878 27.748 20.0988C28.5613 20.9099 29.6638 21.3654 30.8133 21.3654C31.6714 21.3654 32.5102 21.1113 33.2237 20.6353C33.9371 20.1592 34.493 19.4826 34.8212 18.691C35.1493 17.8995 35.2349 17.0285 35.0672 16.1883C34.8994 15.3482 34.4858 14.5766 33.8786 13.9712C33.2715 13.3658 32.4982 12.9537 31.6565 12.7872C30.8147 12.6207 29.9424 12.7072 29.1499 13.0357C28.3574 13.3642 27.6804 13.92 27.2044 14.6328Z",
              }),
              (0, t.jsx)("path", {
                fill: "#4AD4FF",
                className: a,
                d: "M31.635 45.874C31.5218 45.874 31.4969 45.716 31.6033 45.6773C40.8922 42.2999 47.5266 33.3932 47.5266 22.937C47.5266 12.4808 40.8922 3.57411 31.6033 0.196722C31.4969 0.15803 31.5218 0 31.635 0C44.3028 0 54.5721 10.2692 54.5721 22.937C54.5721 35.6048 44.3028 45.874 31.635 45.874Z",
              }),
              (0, t.jsx)("path", {
                fill: "#4AD4FF",
                className: a,
                d: "M39.9974 45.874C39.8841 45.874 39.8592 45.716 39.9656 45.6773C49.2545 42.2999 55.8889 33.3932 55.8889 22.937C55.8889 12.4808 49.2545 3.57411 39.9656 0.196722C39.8592 0.15803 39.8841 0 39.9974 0C52.6651 0 62.9344 10.2692 62.9344 22.937C62.9344 35.6048 52.6651 45.874 39.9974 45.874Z",
              }),
            ],
          });
        }
        function L(n) {
          const { year: r, theme: a } = n;
          return (0, t.jsx)("div", {
            className: (0, o.A)(s.Header, a.Header),
            children: (0, i.PP)(
              "#YIR_MM_Header",
              (0, t.jsx)("br", {}),
              (0, t.jsx)("div", {
                className: (0, o.A)(s.YearSubtitle, a.YearSubtitle),
                children: (0, i.we)("#date_year", r),
              }),
            ),
          });
        }
        function D(n) {
          return (0, t.jsx)("div", {
            className: (0, o.A)(s.Hashtag, n.theme.Hashtag),
            children: (0, i.we)("#YIR_MM_HashTag"),
          });
        }
        function O() {
          const r = (0, h.J)().GetTemplateVars();
          return (0, P.WN)(r.linkurl, v.cU.wY);
        }
      },
      84797: (l) => {
        l.exports = {
          new_games_color: "#3cdf6a",
          used_games_color: "#4df",
          old_games_color: "#e496ff",
          pie_windows: "#28aee1",
          pie_linux: "#cd4141",
          pie_deck: "#9c85d1",
          pie_mac: "#939a9d",
          pie_vr: "#55af30",
          topApp_0: "#00a299",
          topApp_1: "#017baa",
          topApp_2: "#044fbb",
          topApp_3: "#2325b9",
          topApp_4: "#4a17a6",
          topApp_5: "#881abf",
          topApp_6: "#bf1a72",
          topApp_7: "#cb5545",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_1mCWTI0JoiDqCmO8bDDES5",
          SingleGame: "_2sI9nEpezKWeRW_uX3zDe9",
          ImageTint: "_1KFiu2aZBbuwvWHItKoR7-",
          Section: "ZbHrxezu8VrBxMPSTh9z3",
          StreakSizeFullBar: "_14BklrGtK29m79DW3nqHWV",
          LongestStreakBgImage: "_3bCDTuFBTstThIkVu8rZAK",
          Tab: "_2RZyYiWAwDAPtAyy1l4EhC",
          UserName: "_3ZGQww28rxBs_rNFt4A-Z",
          ConclusionName: "_2QHBE_5MFY0OIfAJK-6KPs",
          GridItem: "_3JsZSm646Y5ZkGhpSOODAW",
          AchievementBlock: "_2DHea-Spjx2dRqPQcVfpqw",
          StreakBlock: "_2Sd0qjwv69VPg701ROB46l",
          HardwareBlock: "_2KTGrVdH4bYO-rOyHaGaXe",
          DeviceBlock: "_33YJLXitiubERYxUXrbecK",
          SummaryCtnShadow: "_3eIkBGJSxL654zOmmOBOz7",
          BackgroundImage: "_36jZ71s237_s23yxdQgPFO",
          SummaryCtn: "_2l4E7GqLFXFY_rYWRbFOIt",
          TopHonorsSection: "_24OE-kMDyDQ0Ci29zIPqdq",
          MissingUserCtn: "_3L0BnaPXE2Nuz3x60nrf8",
          GenericBackground: "_1h36ybUWs1ZX5telCOk0XC",
          LogInCtn: "_26pjxsotAYqvNMpivHzvaw",
          FriendCtn: "_1mZ6NQJ_g6wG-NdlN86ksm",
          TopGameBlockContainer: "_36knYDLxQo9AaZviPf_cnn",
          OddGradient: "_1mrNpFA8PEjfLYXmvbboJl",
          EvenGradient: "uGK9CVVk1pMAHGs62QINl",
          TopMostGame: "_2pfc8dJefQjNg6UM3yLz9q",
          FirstPlayCtn: "_1TBDwSyyCkodf5oKezdape",
          GamePlayDetails: "vqmq5_0SK8i0bpeppqxnx",
          PlatformChartsCtn: "_2PR724R2IuabDLtoLxWpfk",
          IconAchievement: "_2IjTrxdj_wI9Gh7_aMbZTM",
          IconGamesPlayed: "_1pYbm7SYRqjtbSjm99vybx",
          IconStreak: "_3wrtHF8HGJ6k-7gSKy9tHu",
          PlayBehaviorContainer: "tiuwqat5VX9DqGp1wTasT",
          ProgressBarFilled: "_2TAF9zz_FTeA_XA7NabVmT",
          ProgressBarFilledGradient: "_2Jn-XMt83DMEbyRglDjPZ-",
          GameNewnessTitle: "_2S-kJn2DuxoMMQRJoCDp5K",
          NewActive: "_3nz5W7FAYvN2-2n0MuWlwo",
          DataBoxArrow: "_1EoUlR9aVJ5EMp7C5CYdlJ",
          Background: "DxFS4y1E5x3-FXRmvNTjr",
          UserData: "mjYOxpO92Sjjaq1vI0nPa",
          DataBox: "_1TC4ZL8Igk0UZwM5n37MPP",
          SteamData: "_1muEXi8fQZowcGSWQIP5EF",
          Border: "_3APY0jBERnHXknBhjYaKzK",
          PercentageLabel: "grEIxWPqvyXbDSONzpGyk",
          Color: "_1jd63YNjr7wMQzLdB_QziW",
          PercentageDescriptionLabel: "etu3gC0CbXo-55a8VnGLb",
          UsedActive: "_3cggzJW9YF-UN83xHTZQ8v",
          OldActive: "_2e8Hfol5roqPlMlmMEe4jK",
          AllGamesBGImage: "_3ugWpF65a-Hzz9zZbMdFei",
          SeeRewindButton: "_25JDT1O9te5Afb7dDcz4ry",
          MMFrame: "_34F3ONj5DcTlh_joG-sHu5",
          MMOverride: "_3410LOeYZJjY6R_H4U0YuQ",
          Header: "_1wRDr7Zzwg-daOQ9jG5qY5",
          YearSubtitle: "yqOBUuUlT4ChD5MB4Gfmb",
          ReplayLogo: "_1Dj2Lm_eGilmq2aTCNLmKz",
          ReplayLogoAccent: "_1boFekf-O9JBLOKZNRGpGL",
          Hashtag: "rUjuX2Th6QbH4f1-l8H3c",
          Avatar: "_3TIPQVu2JQ0Pp0s4DBxqdN",
          DataBlock: "_2ZVTo1HmTUnFF3TNZBarJ3",
          PersonaName: "_1n5x7nxPhP-Sq0AhY5ssVm",
          ReplayHighlight: "_1t179jT3miESogxBPLvKso",
          ViewPageButton: "jIjgB6ZoOX1pa2GftI1RS",
          Description: "_1vouHy7Qkdo_QusE7gHag1",
          OtherYearLink: "_1i52pDXbOiguTescoinJBz",
        };
      },
      68622: (l) => {
        l.exports = {
          new_games_color: "#d67070",
          used_games_color: "#683db4",
          old_games_color: "#3898b0",
          pie_windows: "#d67070",
          pie_linux: "#683db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_10kzTTAtqaz13b6p7OjG8S",
          scaleBackground: "_1WW8z64-BrcfAZZpgbuRTM",
          SingleGame: "_2Pj3-6RWhMQHDGPtVx1ftl",
          ImageTint: "RdmGip0ngXjp9kSzfsMuc",
          Section: "_1ihw3wAprvhicFWLMrq7hf",
          StreakSizeFullBar: "_3s6e74lp5bDTtWMnpcnBbA",
          LongestStreakBgImage: "_1GiTU8n2lD-sPz0sCR0Xhj",
          Tab: "_25kqUwukU9GN1Ef9tihV6L",
          UserName: "_1eLSYaRNKbAsXOhQTsmW1V",
          ConclusionName: "_3Xy9Cx3rQeyhPKSjwGEfl6",
          GridItem: "_3xyYnoaptMoTZ1HqL_koRs",
          AchievementBlock: "_1M433GBUUxgHItBhMw0U94",
          StreakBlock: "_2X6mwNm61FuayA-l1afHjg",
          HardwareBlock: "GImwL8nsYgPpolltUalGf",
          DeviceBlock: "_2s1BbZknfTzGiX0KPWI6sQ",
          SummaryCtnShadow: "_18moaZsJq2bOBUKUFkgZXW",
          BackgroundImage: "_1LIoXPNaAmjCNg--cqeYNJ",
          SummaryCtn: "_2iEZg9UeJZPaXWH8DEQgAY",
          TopHonorsSection: "_3pGXxrtry6vbrbKN05WUO6",
          FriendCtn: "_2W45uTzo4s5qj5DLPHUt2f",
          TopGameBlockContainer: "_36jqv5rato1nA9_Fm4TgqO",
          OddGradient: "_2humxv5J-6yJS4voPPdZ2t",
          EvenGradient: "_2Ri1edchogFKwyEY3XKJiq",
          TopMostGame: "_3AeiaW8hpnC1ONnWJUXAj5",
          GamePlayDetails: "il8qj5ZbFvylAOOLUaNtV",
          PlatformChartsCtn: "_1VlT4dTCqBdYP-i3bxLhyJ",
          gradient: "DcluJQjgDbSdO-U954rux",
          IconAchievement: "_1dt08I2SCDobYoSlg6xjqf",
          IconGamesPlayed: "_3Zy7ueS4aunldSTv-YA2GT",
          IconStreak: "_22reoVLCzn-Fuh73p1pXr5",
          PlayBehaviorContainer: "_1U1ZuwB1L9K4CPqioL0e5s",
          ProgressBarFilled: "_3NgeYY9GD7yBtWM_upyPTT",
          ProgressBarFilledGradient: "_2WMTIhxpdYdVPW8qMMaMIR",
          GameNewnessTitle: "_3kzRWYdjSiT3NFAj2oVTVY",
          NewActive: "_3YOjggFXHQrDGODGISowUn",
          DataBoxArrow: "_2V5vsfJLUUAm8Dkwco2jw9",
          Background: "_1P7u77iRdWEMNFa_uDOAgx",
          UserData: "sT4Y_Mssd38IykTqpNttI",
          DataBox: "sw8ZdGxYqpVlDpQ-O0ymi",
          SteamData: "_3QBOqe7aPF_N0gIqkC9fmI",
          Border: "_1LJoYGt4cvMN5B1_sAJP8f",
          PercentageLabel: "_6GBP_G16XsdGbYC8NTZh6",
          Color: "_5AuLAC-w6VzF8QR5dj5Xt",
          PercentageDescriptionLabel: "SsulucKQh-HigrEyVzMIg",
          UsedActive: "_3kPVLKj0dwg8U5A6Fg7ISA",
          OldActive: "_3n3sqX8WsGOyPAMMvYy_O-",
          AllGamesBGImage: "Da4bxMaQBEGNrVrq5DpDH",
          SeeRewindButton: "_288f6z1gFOsYlF9sPrQjGL",
          MMFrame: "_2uL2aC9JTgz2OiBYlYh0OV",
          MMOverride: "_3r4GfYoEmqFKtRaTHW4kce",
          Header: "_2a2ceVKfNdvTRhuk5GSdns",
          YearSubtitle: "_2p3PzXE3K1nmqcMQq3_IfL",
          ReplayLogo: "_3LKGj8E0hxcbos8M02X8Z5",
          ReplayLogoAccent: "QA6ZiaAVMlmpcQ76Vh1ai",
          Hashtag: "u0AZ32D3fSCUz7g34qqez",
          Avatar: "_1YfBn_vDDQheFIvB_NS8jT",
          DataBlock: "_2k0fIZXO_T84nzNLVPk3_8",
          PersonaName: "cUavdbPuv_0xdR4Dn9zos",
          ReplayHighlight: "_17c5leGvLNSi5Ww9tu6KYI",
          ViewPageButton: "AwTMLvj9vwwJanUhUW0md",
          Description: "_L5X9igrHe9C6CwhZe_ny",
          OtherYearLink: "_1fHTilDQDzxqV57h1u1xHI",
        };
      },
      32339: (l) => {
        l.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_3OQ6rgJBkGnH9Bf6r2e3HL",
          scaleBackground: "_3JN7ZUgVCUsaPMpmqP7TwR",
          SingleGame: "_1HbdEudMGphunPB0JEXg7i",
          ImageTint: "_1gfY6mgm47-kMTUtqR0-Ou",
          Section: "tRbx_6RHxbCDIMagDBI8p",
          LongestStreakBgImage: "_1MVdzFDJOXawdsqr3Yhqsw",
          StreakSizeFullBar: "_36N_E04MlrcS-OcKDAtap2",
          Tab: "_1KD4j_7fmsom6XcRjCdT0Q",
          UserName: "WSDA_clh_9sxDy4zdmbjD",
          ConclusionName: "_1gHhZmVSITXh31m_yruKhR",
          SummaryCtnShadow: "_2-LqaFKV7kacR8awEnhfJX",
          GridItem: "_3OZGvnLThiIYbr4Ouh2bxp",
          BackgroundImage: "_2aMzl_Delss7H1rWla6XDB",
          FriendCtn: "_1_-90oN_7p0LZPblYQBANu",
          TopGameBlockContainer: "_1Y5fJhtMjArQRouT4r3-C7",
          BackgroundImageFull: "_3MOFeHUyOuqaV0X3Yr3VNf",
          OddGradient: "_3ZMWDI255mEZaJyC56j0wL",
          EvenGradient: "Juac3ZakPmb2mXfPy5vYL",
          TopMostGame: "_1hCC5kg_wi3ka5DgsPuQSB",
          GamePlayDetails: "_3rUVGxkgXErfzS1dUw-09d",
          PlatformChartsCtn: "_37_pY_aEthje0YSZyP7Cs3",
          gradient: "_3Z_LYJhCqdb8ZUUwCdpQgr",
          TopHonorsSection: "_1JuNaCUGgdEe4Kg1wwxKiC",
          SectionDesc: "frtdAP-rVslnmtiDFU5hj",
          IconAchievement: "_1blrLRqm7dIEf-KlyXeucX",
          IconGamesPlayed: "_3mFHXBXxcqOg-QN0otvPIV",
          IconStreak: "_1BAN0pj-aWkXRxswwHZqJ6",
          PlayBehaviorContainer: "_3K-BxOFebKlIgA3KHN3fRd",
          ProgressBarFilled: "_149r1AuXIu7SWFlKGFPK2g",
          ProgressBarFilledGradient: "_1dBow-Dbmq4zxmKY1jgQAn",
          GameNewnessTitle: "_3yTxsy6ozFIGQBi_USS7Wq",
          NewActive: "_3Q-lCYrQuOslt990fq-rr6",
          DataBoxArrow: "_1op5IwtjH5Lq0XP38WK3LT",
          Background: "_2j3GatBNdCKuNabv1m37Yq",
          UserData: "_3m-Ki0zq5OMIcIZ41vG6wU",
          DataBox: "ezwPo6nwskfStGExxxe2",
          SteamData: "_3ki5fNFYPN-mUpMWp_7yBc",
          Border: "_3OeymkaW96P8-ADBuNVDju",
          PercentageLabel: "_3JxJmNw4L3TNLr0RgUvc-J",
          Color: "GDFSAsxyT5cjNE1qUDVjI",
          PercentageDescriptionLabel: "LkZ04ZMADGM3ycZyxP335",
          UsedActive: "_1GIOMMTrITyIDVa9Vjc6JE",
          OldActive: "_3U-IfPH0I8djRe2moFvzuF",
          AllGamesBGImage: "_1yRd48MGRuylzC44_4Dmgb",
          SeeRewindButton: "mf6UTLxYSeiKkvIhlAodx",
          MMFrame: "_2vqAzxON4lE_16iKxhv8qT",
          MMOverride: "_2HmEzExHY4aeyBFI6MUXmT",
          Header: "_3gOcUL_xfcBkYU0g20TaXb",
          YearSubtitle: "_3UwJLn8p1rV25mjYmzwrVA",
          ReplayLogo: "_221R7vRZej1-5Itjx416tA",
          ReplayLogoAccent: "_18J6u_1IgoXwwOwNs17yBg",
          Hashtag: "_3bTOGmEBF0FW3IZn63KpR7",
          Avatar: "_2zdVUZKCn5qRHBOk2Wvvhh",
          DataBlock: "Cop9oURErdKz-xnG00D19",
          PersonaName: "_1yc5XlMVWWlXCsludrsGM8",
          ViewPageButton: "_8vh-tS_EH62zvZbZzF6Bq",
          Description: "_1ImcGBhCVlOyWddPGdtGz9",
          OtherYearLink: "_3LrPDKdIcbQ34J2OlNHDXh",
          BackgroundAnimation: "_1iXipF4ysagEImD280CprP",
          "ItemFocusAnim-darkerGrey-nocolor": "_1rmm8RPOlAxQMFUAP8bygH",
          "ItemFocusAnim-darkerGrey": "_3Ws16JxP5tjYQMyhOCZPyl",
          "ItemFocusAnim-darkGreySettings": "_1U1iTefDLSbKqIp4V19WVn",
          "ItemFocusAnim-darkGrey": "_1Z34B8hAZCLKdCS-fIrGZl",
          "ItemFocusAnim-grey": "_25oYhp1kwf6zZ5vtnsQBgc",
          "ItemFocusAnim-translucent-white-10": "_12q-BgpP8S8I4o8Y7tVgP5",
          "ItemFocusAnim-translucent-white-20": "LBhH9gPpgXf2pY0_Lc3Al",
          "ItemFocusAnimBorder-darkGrey": "_3V_jsm1ATEfbvpDr6TIw3R",
          "ItemFocusAnim-green": "_1CWlcSJ0K4nB9z9UY1GJO7",
          focusAnimation: "xxHDLCKk6ZGZZcwkKMJ_o",
          hoverAnimation: "_1JpeZ-3CBjNXMpN8RezwCI",
        };
      },
      4452: (l) => {
        l.exports = {
          "duration-app-launch": "800ms",
          new_games_color: "#34f3fe",
          used_games_color: "#cc6670",
          old_games_color: "#f4d760",
          pie_windows: "#d67070",
          pie_linux: "#aa3db4",
          pie_deck: "#3898b0",
          pie_mac: "#46ab46",
          pie_vr: "#c7b84e",
          topApp_0: "#d67070",
          topApp_1: "#70d670",
          topApp_2: "#683db4",
          topApp_3: "#3898b0",
          topApp_4: "#ab4646",
          topApp_5: "#46ab46",
          topApp_6: "#3d138a",
          topApp_7: "#0e6e86",
          monthOthersColor: "#7d98aa",
          chartAccentColor: "#fff",
          chartAccentColorAlt: "#1a9ffe",
          ImagesCtn: "_2s7mIvwS-3CubLZ0qh2JUW",
          scaleBackground: "_26thFVUdrVT5cwl3ZNo621",
          SingleGame: "Oi2hkZjaYSLMdFBa10fFW",
          ImageTint: "_4dii7ZD-CzK6Hdr_1zFfz",
          Section: "_1boQl7oW6GufFP0tCEqgPg",
          LongestStreakBgImage: "Rb3f3N7xL755z9IQo1z3a",
          StreakSizeFullBar: "_3232l-2EN_vmaNNFhu8wYg",
          Tab: "_2oU8grgLlvrP-1kypqcmjG",
          UserName: "_3tdBf9Fq7kubW0eXl3uhhM",
          ConclusionName: "_1fViacRZXSttKAoUhRITId",
          SummaryCtnShadow: "_2BWKGdK_xOyg1l3a2AgT4Z",
          GridItem: "_1NKomKIPmTDGyDrAtz-2d4",
          BackgroundImage: "_3wN5uwJqxQEIAmXkzKmCFm",
          FriendCtn: "_64HO5Fgwc4BRCG8pcDvno",
          TopGameBlockContainer: "DFb2vstqM2m5UIqllW6-z",
          BackgroundImageFull: "_2BWkMEocB_PWAlCNnvwkpW",
          OddGradient: "_31GzI9SB2Wj87sB13c7XHz",
          EvenGradient: "_283mQrlso9fruh_DtsBP18",
          TopMostGame: "_2PmC6qr8RF22oGrrTwa-Ai",
          GamePlayDetails: "_3gAeRCR1lnQimVrfYKP6JD",
          PlatformChartsCtn: "TSAyulrl5QSSKjK1gTZdg",
          gradient: "_2kZoREa11DQ2pGPkasd9xs",
          TopHonorsSection: "_3vxAkxTbGM_XzgF_jQu8MR",
          SectionDesc: "CJ9awmTLX6bSz36NY4HT4",
          IconAchievement: "_2vdLENzDQtBQjyAkyv9S_w",
          IconGamesPlayed: "_3iBplwgmTqlW65lS36SzT2",
          IconStreak: "_3muGaWbeottcWdmhZBqB53",
          PlayBehaviorContainer: "_3g2ea3qJY6j67_cFF5Mgsq",
          ProgressBarFilled: "_1LQbY-wdcf-dh-t3dkucGC",
          ProgressBarFilledGradient: "_3aihmNXrhiBM33b7t7UKFC",
          GameNewnessTitle: "_39lOiSYRWalnWaZ5SX3zhx",
          NewActive: "_1sdItmmpaYbqIRLLUtrDrG",
          DataBoxArrow: "_3ajjJPkrXfayfPA3Vivx-8",
          Background: "A6FIZiuS0_nAypC7LbvhE",
          UserData: "_1KHyWCx0wbs471k7TSRMAs",
          DataBox: "_2c-eiPgDpepgIpD_jtHUzC",
          SteamData: "_1yhuxYer1QE_Vm8FfAmsIa",
          Border: "_1SA7sXKMgETCa_JaP3B6C4",
          PercentageLabel: "_1c_OSzoiESQi8VycwjySgq",
          Color: "_2dH3sotPVHLbsosd0aSRFe",
          PercentageDescriptionLabel: "-_6lWC6tfX-A_YFsFXfOv",
          UsedActive: "_3or6GTplqe7LbAyXhO8n4E",
          OldActive: "_19DsdrAsV7SPTJTtHyxbx9",
          AllGamesBGImage: "_2OdQZo0IGLXzoR4AUydRp3",
          SeeRewindButton: "_1V87Pd_xyPBUjoW6T3yIYp",
          MMFrame: "_1rm7lp0POJnMfv_wJCmj51",
          MMOverride: "_3dXsGCw_Hqvycqp0ierI13",
          Header: "_2Mb9gJJAqkyW-uwgteM7bR",
          YearSubtitle: "_2JtAZbKQCRYsuq8Grhj9D_",
          ReplayLogo: "mpZwdryoa_9MxYXp1Qr8Q",
          ReplayLogoAccent: "_3TL2UyEq_QwjQ1KvR0c_LW",
          Hashtag: "_2vAhvd0pJ4Bjao8aEg0lk0",
          Avatar: "_1zOzJvJn7vryT-8zfXh6h4",
          DataBlock: "_3AqjU369Dul6eM24tTW4Ro",
          PersonaName: "_3C6Kgz1wyud6uRK9iRRtnZ",
          ViewPageButton: "g4FuYY6kNOhx6ps41n66o",
          Description: "_3ZFqletUdCzkvW-BpBfk0",
          OtherYearLink: "_3_I-YXo6WE2pSgpSqOe90G",
          BackgroundAnimation: "pim2eKmSTb2NQIYFR8-kO",
          "ItemFocusAnim-darkerGrey-nocolor": "_34ksdmLRP6M-DL55A02DbT",
          "ItemFocusAnim-darkerGrey": "_1rk5lOTR37WlC5N5CRPD_3",
          "ItemFocusAnim-darkGreySettings": "_3fTyTKz8tIlcCsQ-iKdny7",
          "ItemFocusAnim-darkGrey": "_1hxhmw8W2ifnYr2qLY4uPy",
          "ItemFocusAnim-grey": "_3O7xVUyXHUO3jznnaVQkCj",
          "ItemFocusAnim-translucent-white-10": "_3cPKti68OjsijubFhK8nJh",
          "ItemFocusAnim-translucent-white-20": "_2WYaf97De-ZJ0mFANrqtDV",
          "ItemFocusAnimBorder-darkGrey": "_2WH9L3RX3P6NaqBc2WQPlc",
          "ItemFocusAnim-green": "_3YKGX14tVZ6u6O9dDCD9Sb",
          focusAnimation: "_16qKuIfVUjk7_3Q-w67mSd",
          hoverAnimation: "_2uOutcDfkb2CPTKk4_5i7l",
        };
      },
      32077: (l) => {
        l.exports = {
          MMFrame: "kmeCX_wpui82T0Ay3SHMK",
          HeaderCtn: "_1x7ZLZe4piW-DdqVrsm5Rc",
          Header: "_3zmnJddpZHfuRioLAQcKiy",
          YearSubtitle: "GD-gM7AAfIW0KNZGy6viX",
          SteamLogo: "_3kQfW35d8vQmlimznJtDHn",
          ReplayLogo: "_1YyUUdxLCPo7rivj2LMbsy",
          ReplayLogoAccent: "_2vNb48AZCK8WI85zHtsdCY",
          Hashtag: "_3ys0VP797mCkRyi1qy9HAV",
          Content: "_11HvbQQuzHlFxfOA60-Iwg",
          Avatar: "_3Or4z4eTNQFrEBsv0jrVjh",
          DataBlock: "Vs2aJC40zq4lSl1GB9Fl_",
          PersonaName: "_1rb__jUs4xd9Symf36sR84",
          ReplayHighlight: "_1V-KRTqy8PtfpmvRkySY8x",
          GenericTitleBlock: "_15WYpmISjvERUIGbPuilgB",
          ViewPageButton: "_1Dve5b-rHkzuotINR4Xh7G",
          Description: "_3PEXENleI6xShkV5isURGX",
        };
      },
    },
  ]);
})();
