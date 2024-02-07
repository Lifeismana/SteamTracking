/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [988],
  {
    65440: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        GrantAwardModal: "awardmodal_GrantAwardModal_2vlF5",
        Header: "awardmodal_Header_2p7RU",
        Title: "awardmodal_Title_2Rty4",
        Description: "awardmodal_Description_j46gb",
        ButtonContainer: "awardmodal_ButtonContainer_1SCKZ",
        Button: "awardmodal_Button_zGUr9",
        Selected: "awardmodal_Selected_29Zn-",
        Disabled: "awardmodal_Disabled_18eTZ",
        LabelCtn: "awardmodal_LabelCtn_in9vJ",
        IconCtn: "awardmodal_IconCtn_3N4SI",
        Label: "awardmodal_Label_V7W5c",
        Points: "awardmodal_Points_Mh1VB",
        IconCheckMark: "awardmodal_IconCheckMark_2cjo-",
        Footer: "awardmodal_Footer_3uhvi",
        Left: "awardmodal_Left_po3ze",
        BalanceIcon: "awardmodal_BalanceIcon_R3Rrv",
        BalanceDetails: "awardmodal_BalanceDetails_2R8Ec",
        BalanceLabel: "awardmodal_BalanceLabel_26lUC",
        BalanceAmount: "awardmodal_BalanceAmount_1A7rm",
        Right: "awardmodal_Right_9EVpk",
        Actions: "awardmodal_Actions_3grEe",
        Action: "awardmodal_Action_m5O_I",
        FooterLink: "awardmodal_FooterLink_LnM57",
        Divider: "awardmodal_Divider_3-_vd",
        ConfirmContainer: "awardmodal_ConfirmContainer_2SlCz",
        ConfirmAwardImage: "awardmodal_ConfirmAwardImage_1jCgm",
        ConfirmTextCtn: "awardmodal_ConfirmTextCtn_2vpMp",
        ConfirmText: "awardmodal_ConfirmText_1VsBl",
        AwardName: "awardmodal_AwardName_18XKP",
        TimePeriod: "awardmodal_TimePeriod_2dsFe",
        Visible: "awardmodal_Visible_99awB",
        LoadingContainer: "awardmodal_LoadingContainer_1Ojo0",
        SuccessContainer: "awardmodal_SuccessContainer_mT3Zs",
        SuccessText: "awardmodal_SuccessText_1cegP",
        InitialLoading: "awardmodal_InitialLoading_2tQ62",
        ErrorContainer: "awardmodal_ErrorContainer_3mAxw",
        ErrorText: "awardmodal_ErrorText_2tq6F",
        PointsAmount: "awardmodal_PointsAmount_-p4kk",
        PointsAmountIcon: "awardmodal_PointsAmountIcon_18Asb",
        NotEnoughPoints: "awardmodal_NotEnoughPoints_140Wj",
      };
    },
    42705: (e, t, a) => {
      "use strict";
      a.r(t),
        a.d(t, {
          CheckmarkCircle: () => M,
          LibraryLoyaltyAwardModal: () => P,
          default: () => B,
        });
      var r = a(85556),
        n = a(80751),
        o = a.n(n),
        s = a(27605),
        i = a(47427),
        l = a(82493),
        c = a(91618),
        d = a(47144),
        m = a(77581),
        u = a(94947),
        _ = a.n(u),
        g = a(54842),
        E = a(79545),
        h = a(37563),
        p = a(88016);
      class w {
        constructor(e) {
          (this.m_lPointsAvailable = null),
            (this.m_bPointsBalanceLoadedOrInFlight = !1),
            (this.m_mapReactionConfiguration = new Map()),
            (this.m_bReactionConfigurationLoadedOrInFlight = !1),
            (this.m_mapExistingReactions = new Map()),
            (0, g.rC)(this),
            (this.m_transport = e);
        }
        BIsLoggedIn() {
          return h.L7.logged_in;
        }
        SetTarget(e, t) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            return (
              (this.m_targetID = e),
              (this.m_eTargetType = t),
              this.LoadExistingReactions()
            );
          });
        }
        AddReaction(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn())
              return { eResult: 21, strMessage: "Not logged on" };
            let t = E.gA.Init(p.HW);
            t.Body().set_target_type(this.m_eTargetType),
              t.Body().set_targetid(this.m_targetID),
              t.Body().set_reactionid(e),
              console.log(" ProtoBuf sending..."),
              console.log(t),
              console.log("Target ID is..." + t.Body().targetid());
            let a = yield p.pQ.AddReaction(this.m_transport, t);
            return (
              1 == a.GetEResult() &&
                (this.m_bPointsBalanceLoadedOrInFlight = !1),
              { eResult: a.GetEResult(), strMessage: "" }
            );
          });
        }
        GetUserPointBalance() {
          return this.BIsLoggedIn()
            ? (this.m_bPointsBalanceLoadedOrInFlight ||
                this.LoadUserPointBalance(),
              this.m_lPointsAvailable)
            : null;
        }
        LoadUserPointBalance() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return Promise.resolve(null);
            this.m_bPointsBalanceLoadedOrInFlight = !0;
            const e = E.gA.Init(p.aO);
            e.SetBodyFields({ steamid: h.L7.steamid });
            let t = yield p.pQ.GetSummary(this.m_transport, e);
            1 == t.GetEResult()
              ? (this.m_lPointsAvailable = _().fromString(
                  t.Body().summary().points(),
                ))
              : console.error(
                  `Error when calling LoyaltyRewardsService.GetSummary: EResult=${t.GetEResult()}`,
                );
          });
        }
        GetAwardConfigurations() {
          return (
            this.m_bReactionConfigurationLoadedOrInFlight ||
              this.LoadAwardsConfiguration(),
            this.m_mapReactionConfiguration
          );
        }
        LoadAwardsConfiguration() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            this.m_bReactionConfigurationLoadedOrInFlight = !0;
            const e = E.gA.Init(p.f_);
            let t = yield p.pQ.GetReactionConfig(this.m_transport, e);
            if (1 == t.GetEResult()) {
              let e = t.Body().toObject().reactions;
              for (const t of e)
                this.m_mapReactionConfiguration.set(t.reactionid, t);
            } else
              console.error(
                `Error when calling LoyaltyRewardsService.GetReactionConfig: EResult=${t.GetEResult()}`,
              );
          });
        }
        GetExistingReactions() {
          return this.m_mapExistingReactions;
        }
        LoadExistingReactions() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (!this.BIsLoggedIn()) return 21;
            this.m_mapExistingReactions.clear();
            const e = E.gA.Init(p.Yl);
            e.Body().set_target_type(this.m_eTargetType),
              e.Body().set_targetid(this.m_targetID);
            let t = yield p.pQ.GetReactions(this.m_transport, e);
            return (
              1 == t.GetEResult() &&
                t
                  .Body()
                  .reactionids()
                  .map((e) => this.m_mapExistingReactions.set(e, !0)),
              t.GetEResult()
            );
          });
        }
      }
      (0, r.gn)([g.LO.ref], w.prototype, "m_lPointsAvailable", void 0),
        (0, r.gn)(
          [g.LO.deep],
          w.prototype,
          "m_mapReactionConfiguration",
          void 0,
        ),
        (0, r.gn)([g.LO.deep], w.prototype, "m_mapExistingReactions", void 0);
      var A = a(1485),
        v = a(27438),
        y = a(62613),
        C = a(46882),
        R = a(13129),
        L = a(31846),
        b = a(20417),
        N = a(277),
        f = a(65440);
      function S(e) {
        return (0, L.Xx)(`#RewardsReaction_${e}`);
      }
      var G,
        I,
        T,
        x = a(47978);
      !(function (e) {
        (e[(e.LOADING = 0)] = "LOADING"),
          (e[(e.SELECTING = 1)] = "SELECTING"),
          (e[(e.CONFIRM = 2)] = "CONFIRM"),
          (e[(e.SUBMITTING = 3)] = "SUBMITTING"),
          (e[(e.DONE = 4)] = "DONE"),
          (e[(e.ERROR = 5)] = "ERROR"),
          (e[(e.LOADING_ERROR = 6)] = "LOADING_ERROR");
      })(T || (T = {}));
      const M = (e) =>
        i.createElement(
          "svg",
          Object.assign(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            e,
          ),
          i.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM10.9577 17.254L18.8038 10.0384L16.773 7.83022L10.0706 13.9941L7.71092 11.2399L5.43271 13.1918L8.80323 17.1259C9.06802 17.4349 9.44701 17.6231 9.85327 17.6473C10.2595 17.6715 10.6582 17.5295 10.9577 17.254Z",
          }),
        );
      class O extends i.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e =
            ((t = this.props.reactionType),
            (a =
              !this.props.bDisableAnimation &&
              (this.state.bHovered || this.props.bForceAnimated)),
            `${h.De.STORE_CDN_URL}public/images/loyalty/reactions/${a ? "animated" : "still"}/${t}.png`);
          var t, a;
          return i.createElement("img", {
            className: this.props.className,
            src: e,
            onMouseEnter: this.handleMouseOver,
            onMouseLeave: this.handleMouseOut,
          });
        }
      }
      (0, r.gn)([b.ak], O.prototype, "handleMouseOver", null),
        (0, r.gn)([b.ak], O.prototype, "handleMouseOut", null);
      let k = (G = class extends i.Component {
        constructor(e) {
          super(e),
            (window.fnLoyalty_ShowAwardModal = (t, a, r, n, o) => {
              o || (o = 0),
                this.Init(e.serviceTransport),
                this.setState({
                  bShowModal: !0,
                  fnSuccessFunc: r,
                  targetid: t,
                  ugcType: n,
                  initialSelectedReaction: o,
                  targetType: a,
                });
            }),
            (this.state = { bLoading: !0 });
        }
        Init(e) {
          return (0, r.mG)(this, void 0, void 0, function* () {
            if (G.s_LoyaltyAwardModalStore) return;
            if (e) return void (G.s_LoyaltyAwardModalStore = new w(e));
            const t = (0, h.kQ)("loyaltystore", "application_config"),
              a = yield (function () {
                return (0, r.mG)(this, void 0, void 0, function* () {
                  try {
                    const e = yield o().get(
                      `${(0, h.Kc)()}pointssummary/ajaxgetasyncconfig`,
                      { withCredentials: !0 },
                    );
                    return 1 === e.data.success
                      ? e.data.data
                      : (console.error(
                          `Failed to load async config: ${e.data.success}`,
                        ),
                        {});
                  } catch (e) {
                    return (
                      console.error(
                        `Unexpected failure while loading async config: ${e}`,
                      ),
                      {}
                    );
                  }
                });
              })(),
              n = Object.assign(Object.assign({}, t), a),
              s = new m.J(h.De.WEBAPI_BASE_URL, n.webapi_token);
            (G.s_LoyaltyAwardModalStore = new w(s.GetServiceTransport())),
              this.setState({ bLoading: !1 });
          });
        }
        render() {
          const {
              bLoading: e,
              bShowModal: t,
              targetType: a,
              fnSuccessFunc: r,
              targetid: n,
              ugcType: o,
              initialSelectedReaction: s,
            } = this.state,
            l = G.s_LoyaltyAwardModalStore;
          if (!t) return null;
          if (e)
            return i.createElement(
              v.On,
              {
                className: f.GrantAwardModal,
                active: !0,
                onDismiss: () => this.setState({ bShowModal: !1 }),
              },
              i.createElement(F, null),
              i.createElement(U, null),
              i.createElement(
                "div",
                { className: f.InitialLoading },
                i.createElement(
                  "div",
                  { className: (0, R.Z)(f.LoadingContainer, f.Visible) },
                  i.createElement(Z, null),
                ),
              ),
            );
          l.GetAwardConfigurations();
          return i.createElement(D, {
            key: n,
            targetid: n,
            active: t,
            targetType: a,
            ugcType: o,
            onDismiss: () => this.setState({ bShowModal: !1 }),
            onSuccess: r,
            store: G.s_LoyaltyAwardModalStore,
            initialSelectedReaction: s,
          });
        }
      });
      (k.defaultProps = { targetType: 1 }), (k = G = (0, r.gn)([s.Pi], k));
      const B = k;
      let P = (I = class extends i.Component {
        static Initialize(e) {
          null === this.s_LoyaltyAwardModalStore &&
            (this.s_LoyaltyAwardModalStore = new w(e.GetServiceTransport()));
        }
        constructor(e) {
          super(e);
        }
        render() {
          const {
              targetType: e,
              targetid: t,
              bShowModal: a,
              ugcType: r,
              initialSelectedReaction: n,
              onDismiss: o,
            } = this.props,
            s = I.s_LoyaltyAwardModalStore;
          if (null === s)
            return console.log("Store not initialized yet."), null;
          s.GetAwardConfigurations();
          return i.createElement(D, {
            key: t,
            targetid: t,
            active: a,
            targetType: e,
            ugcType: r,
            onDismiss: o,
            onSuccess: o,
            store: I.s_LoyaltyAwardModalStore,
            initialSelectedReaction: n,
          });
        }
      });
      (P.s_LoyaltyAwardModalStore = null), (P = I = (0, r.gn)([s.Pi], P));
      let D = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              selectedReaction: e.initialSelectedReaction || 0,
              ePhase: T.LOADING,
            });
        }
        componentDidMount() {
          return (0, r.mG)(this, void 0, void 0, function* () {
            let e = yield this.props.store.SetTarget(
              this.props.targetid,
              this.props.targetType,
            );
            1 == e
              ? this.setState({ ePhase: T.SELECTING })
              : this.setState({ ePhase: T.LOADING_ERROR, eResult: e });
          });
        }
        render() {
          const {
              active: e,
              targetType: t,
              ugcType: a,
              store: r,
              onDismiss: n,
            } = this.props,
            { selectedReaction: o, ePhase: s, celebrate: c } = this.state;
          if (!e) return null;
          const m = r.GetExistingReactions(),
            u = r.GetAwardConfigurations(),
            _ = r.GetUserPointBalance(),
            g = (function (e, t, a) {
              let r = [];
              return (
                e.forEach(function (e) {
                  if (e.valid_target_types.includes(t))
                    switch (t) {
                      case 1:
                      case 3:
                      case 4:
                      case 5:
                        r.push(e.reactionid);
                        break;
                      case 2:
                        e.valid_ugc_types.includes(a) && r.push(e.reactionid);
                    }
                }),
                r
              );
            })(u, t, a),
            E = 0 === o ? null : u.get(o),
            p = E ? E.points_cost : 0,
            w = E ? E.points_transferred : 0;
          let y,
            C = "";
          switch (t) {
            case 1:
              C = (0, L.Xx)("#GrantAwardDescription_Review");
              break;
            case 2:
              C = (0, L.Xx)("#GrantAwardDescription_UGC");
              break;
            case 3:
              C = (0, L.Xx)("#GrantAwardDescription_Profile");
              break;
            case 4:
              C = (0, L.Xx)("#GrantAwardDescription_ForumTopic");
              break;
            case 5:
              C = (0, L.Xx)("#GrantAwardDescription_Comment");
          }
          switch (s) {
            case T.SELECTING:
              {
                const e = 0 === o || m.get(o),
                  t = !_ || _.greaterThanOrEqual(p),
                  a = i.createElement(
                    A.KM,
                    {
                      onClick: () => this.setState({ ePhase: T.CONFIRM }),
                      disabled: e,
                      focusable: !e,
                      title: (0, L.Xx)(
                        e
                          ? "#GrantAward_PromptTooltip"
                          : "#GrantAward_SubmitTooltip",
                      ),
                    },
                    (0, L.Xx)(
                      e ? "#GrantAward_SelectAward" : "#GrantAward_Next",
                    ),
                  );
                y = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: C }),
                  i.createElement(U, null),
                  0 === g.length &&
                    i.createElement(
                      "div",
                      { className: f.InitialLoading },
                      i.createElement(
                        "div",
                        { className: (0, R.Z)(f.LoadingContainer, f.Visible) },
                        i.createElement(Z, null),
                      ),
                    ),
                  i.createElement(
                    d.P8,
                    {
                      className: f.ButtonContainer,
                      scrollDirection: "y",
                      "flow-children": "grid",
                    },
                    g.map((e, t) =>
                      i.createElement(H, {
                        autoFocus: 0 == t,
                        key: e,
                        reaction: e,
                        selected: e === o && !m.get(e),
                        cost: u.get(e).points_cost,
                        alreadyAwarded: m.get(e),
                        onClick: () => {
                          m.get(e) ||
                            this.setState({
                              selectedReaction: e === o ? 0 : e,
                            });
                        },
                      }),
                    ),
                  ),
                  i.createElement(U, null),
                  i.createElement(
                    X,
                    { store: r },
                    e || t
                      ? a
                      : [
                          i.createElement(
                            "div",
                            { key: "msg", className: f.NotEnoughPoints },
                            (0, L.Xx)(
                              "#GrantAward_CantAfford",
                              _.negate().add(p).toNumber().toLocaleString(),
                            ),
                          ),
                          i.createElement(
                            l.IS,
                            {
                              key: "button",
                              href: `${h.De.STORE_BASE_URL}points/howitworks`,
                            },
                            i.createElement(
                              A.zx,
                              { key: "button" },
                              (0, L.Xx)("#GrantAward_HowToGetPoints"),
                            ),
                          ),
                        ],
                  ),
                );
              }
              break;
            case T.CONFIRM:
            case T.SUBMITTING:
            case T.DONE:
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: C }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.ConfirmContainer,
                        s === T.CONFIRM && f.Visible,
                      ),
                    },
                    i.createElement(O, {
                      className: f.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: f.ConfirmTextCtn },
                      i.createElement(
                        "div",
                        { className: f.ConfirmText },
                        (0, L.kQ)(
                          "#GrantAward_Confirm",
                          i.createElement(j, null, p.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: f.AwardName },
                            S(o),
                          ),
                        ),
                      ),
                      i.createElement(
                        "div",
                        { className: f.ConfirmText },
                        (0, L.kQ)(
                          "#GrantAward_Confirm_Details",
                          i.createElement(j, null, w.toLocaleString()),
                          i.createElement(
                            "span",
                            { className: f.TimePeriod },
                            (0, L.Xx)("#GrantAward_Confirm_DetailsTimePeriod"),
                          ),
                        ),
                      ),
                    ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.LoadingContainer,
                        s === T.SUBMITTING && f.Visible,
                      ),
                    },
                    i.createElement(Z, null),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: (0, R.Z)(
                        f.SuccessContainer,
                        s === T.DONE && f.Visible,
                      ),
                    },
                    i.createElement(O, {
                      className: f.ConfirmAwardImage,
                      reactionType: o,
                    }),
                    i.createElement(
                      "div",
                      { className: f.SuccessText },
                      (0, L.Xx)("#GrantAward_Success"),
                    ),
                  ),
                ),
                i.createElement(U, null),
                i.createElement(
                  X,
                  { store: r },
                  i.createElement(
                    A.zx,
                    {
                      onClick: () => this.setState({ ePhase: T.SELECTING }),
                      disabled: s !== T.CONFIRM,
                    },
                    (0, L.Xx)("#GrantAward_Back"),
                  ),
                  i.createElement(
                    A.KM,
                    {
                      onClick: this.GrantAward,
                      title: (0, L.Xx)("#GrantAward_SubmitTooltip"),
                      disabled: s !== T.CONFIRM,
                    },
                    (0, L.Xx)("#GrantAwardNowButton"),
                  ),
                ),
              );
              break;
            case T.ERROR:
              {
                let e = "";
                switch (this.state.eResult) {
                  case 10:
                    e = (0, L.Xx)("#GrantAwardError_Busy");
                    break;
                  case 32:
                    e = (0, L.Xx)("#GrantAwardError_PersistFailed");
                    break;
                  case 8:
                    e = (0, L.Xx)("#GrantAwardError_InvalidParam");
                    break;
                  case 42:
                    e = (0, L.Xx)("#GrantAwardError_NoMatch");
                    break;
                  case 107:
                    e = (0, L.Xx)("#GrantAwardError_InsufficientFunds");
                    break;
                  case 15:
                    e = (0, L.Xx)("#GrantAwardError_AccessDenied");
                    break;
                  case 21:
                    e = (0, L.Xx)("#GrantAwardError_NotLoggedOn");
                    break;
                  case 29:
                    e = (0, L.Xx)("#GrantAwardError_DuplicateRequest");
                    break;
                  default:
                    e = (0, L.Xx)("#GrantAwardError_Fail");
                }
                y = i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(F, { description: C }),
                  i.createElement(U, null),
                  i.createElement(
                    "div",
                    { style: { position: "relative" } },
                    i.createElement(
                      "div",
                      { className: f.ErrorContainer },
                      i.createElement("div", { className: f.ErrorText }, e),
                    ),
                  ),
                  i.createElement(U, null),
                  i.createElement(
                    X,
                    { store: r },
                    i.createElement(
                      A.zx,
                      { onClick: () => this.setState({ ePhase: T.SELECTING }) },
                      (0, L.Xx)("#GrantAward_Back"),
                    ),
                  ),
                );
              }
              break;
            case T.LOADING_ERROR: {
              let e = "";
              switch (this.state.eResult) {
                case 10:
                  e = (0, L.Xx)("#GrantAwardError_Busy");
                  break;
                case 21:
                  e = (0, L.Xx)("#GrantAwardError_NotLoggedOn");
                  break;
                default:
                  e = (0, L.Xx)("#GrantAwardError_LoadExistingReactions");
              }
              y = i.createElement(
                i.Fragment,
                null,
                i.createElement(F, { description: C }),
                i.createElement(U, null),
                i.createElement(
                  "div",
                  { style: { position: "relative" } },
                  i.createElement(
                    "div",
                    { className: f.ErrorContainer },
                    i.createElement("div", { className: f.ErrorText }, e),
                  ),
                ),
                i.createElement(U, null),
              );
            }
          }
          return i.createElement(
            v.On,
            { className: f.GrantAwardModal, active: e, onDismiss: n },
            i.createElement(
              v.Pv,
              { navID: "GrantAward", closeModal: n },
              c && i.createElement(N.DI, { eType: N.sS.Default }),
              y,
            ),
          );
        }
        GrantAward() {
          const { targetid: e, store: t, onSuccess: a } = this.props,
            { selectedReaction: r } = this.state;
          null !== r &&
            0 != r &&
            (this.setState({ ePhase: T.SUBMITTING }),
            t.AddReaction(r).then(({ eResult: t, strMessage: n }) => {
              1 == t
                ? this.setState({ ePhase: T.DONE, celebrate: !0 }, () =>
                    setTimeout(() => {
                      a && a(e, r);
                    }, 2e3),
                  )
                : this.setState({ ePhase: T.ERROR, eResult: t });
            }));
        }
      };
      (0, r.gn)([b.ak], D.prototype, "GrantAward", null),
        (D = (0, r.gn)([s.Pi], D));
      const F = ({ description: e }) =>
          i.createElement(
            "div",
            { className: f.Header },
            i.createElement(
              "div",
              { className: f.Title },
              (0, L.Xx)("#GrantAwardTitle"),
            ),
            i.createElement("div", { className: f.Description }, e),
          ),
        X = (0, s.Pi)(({ store: e, children: t }) => {
          const a = e.GetUserPointBalance(),
            r = a && a.toNumber().toLocaleString();
          return i.createElement(
            "div",
            { className: f.Footer },
            i.createElement(
              "div",
              { className: f.Left },
              i.createElement(y.doA, { className: f.BalanceIcon }),
              i.createElement(
                "div",
                { className: f.BalanceDetails },
                i.createElement(
                  "div",
                  { className: f.BalanceLabel },
                  (0, L.Xx)("#YourBalance"),
                ),
                i.createElement("div", { className: f.BalanceAmount }, r),
              ),
            ),
            i.createElement(
              "div",
              { className: f.Right },
              i.createElement(
                c.s,
                { className: f.Actions, "flow-children": "row" },
                i.Children.map(t, (e) =>
                  i.createElement("div", { className: f.Action }, e),
                ),
              ),
              i.createElement(
                "a",
                {
                  className: f.FooterLink,
                  href: `${h.De.STORE_BASE_URL}points/howitworks`,
                },
                (0, L.Xx)("#GrantAward_PointsLink"),
              ),
            ),
          );
        }),
        U = () => i.createElement("div", { className: f.Divider });
      class H extends i.PureComponent {
        constructor(e) {
          super(e), (this.state = { bHovered: !1 });
        }
        handleMouseOver(e) {
          this.setState({ bHovered: !0 });
        }
        handleMouseOut() {
          this.setState({ bHovered: !1 });
        }
        render() {
          const e = this.props,
            {
              reaction: t,
              selected: a,
              alreadyAwarded: n,
              cost: o,
              autoFocus: s,
            } = e,
            l = (0, r._T)(e, [
              "reaction",
              "selected",
              "alreadyAwarded",
              "cost",
              "autoFocus",
            ]);
          return i.createElement(
            x.k,
            Object.assign(
              {
                type: "button",
                onMouseEnter: this.handleMouseOver,
                onMouseLeave: this.handleMouseOut,
                className: (0, R.Z)(f.Button, a && f.Selected, n && f.Disabled),
                autoFocus: s,
              },
              l,
            ),
            i.createElement(
              "div",
              { className: f.IconCtn },
              i.createElement(O, {
                reactionType: t,
                bForceAnimated: this.state.bHovered,
                bDisableAnimation: n,
              }),
            ),
            i.createElement(
              "div",
              { className: f.LabelCtn },
              i.createElement("div", { className: f.Label }, S(t)),
              i.createElement(j, { className: f.Points }, o.toLocaleString()),
            ),
            n && i.createElement(M, { className: f.IconCheckMark }),
          );
        }
      }
      (0, r.gn)([b.ak], H.prototype, "handleMouseOver", null),
        (0, r.gn)([b.ak], H.prototype, "handleMouseOut", null);
      const Z = () =>
          i.createElement(C.V, { size: "large", className: f.Loading }),
        j = (e) => {
          const { children: t, className: a } = e,
            n = (0, r._T)(e, ["children", "className"]);
          return i.createElement(
            "span",
            Object.assign({}, n, { className: (0, R.Z)(a, f.PointsAmount) }),
            i.createElement(y.doA, { className: f.PointsAmountIcon }),
            t,
          );
        };
    },
  },
]);
