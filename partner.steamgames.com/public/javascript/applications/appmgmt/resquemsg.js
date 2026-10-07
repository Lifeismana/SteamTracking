/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74985],
    {
      95383: (D, b, t) => {
        "use strict";
        t.r(b), t.d(b, { default: () => Oe });
        var e = t(7850),
          c = t(90626),
          R = t(67705);
        const j = (0, R.Tc)("physical_goods", "application_config");
        function B() {
          const [r] = (0, c.useState)(() => j);
          return r;
        }
        function z(r) {
          return j.find(
            (s) =>
              s.edistributor == r.edistributor &&
              s.product_identifier == r.product_identifier,
          );
        }
        var C = t(72604),
          y = t(35038),
          A = t(32288),
          E = t(13018),
          H = t(60298),
          J = t(71742),
          p = t(34592),
          K = t(8323),
          m = t(54963),
          O = t(98609),
          g = Object.defineProperty,
          U = Object.getOwnPropertyDescriptor,
          w = (r, s, a, n) => {
            for (
              var i = n > 1 ? void 0 : n ? U(s, a) : s, o = r.length - 1, P;
              o >= 0;
              o--
            )
              (P = r[o]) && (i = (n ? P(s, a, i) : P(i)) || i);
            return n && i && g(s, a, i), i;
          };
        const N = class ue {
          m_mapProductPositionMsgList = new Map();
          m_productListChangeCallback = new K.lu();
          m_messageListChangeCallback = new Map();
          m_steamInterface = null;
          GetKey(s) {
            return `${s.edistributor}_${s.product_identifier}`;
          }
          SortList(s) {
            s.sort((a, n) => a.start_queue_position - n.start_queue_position);
          }
          GetProductListChangeCallback() {
            return this.m_productListChangeCallback;
          }
          GetPositionListChangeCallback(s) {
            const a = this.GetKey(s);
            return this.GetPositionListViaKeyChangeCallback(a);
          }
          GetPositionListViaKeyChangeCallback(s) {
            return (
              this.m_messageListChangeCallback.has(s) ||
                this.m_messageListChangeCallback.set(s, new K.lu()),
              this.m_messageListChangeCallback.get(s)
            );
          }
          GetAllProducts() {
            return Array.from(this.m_mapProductPositionMsgList.keys()).map(
              (s) => {
                const a = s.split("_");
                return {
                  edistributor: Number.parseInt(a[0]),
                  product_identifier: a[1],
                };
              },
            );
          }
          GetPositionMessagingForProduct(s) {
            const a = this.GetKey(s);
            return this.m_mapProductPositionMsgList.get(a);
          }
          AddProductID(s) {
            const a = this.GetKey(s);
            this.m_mapProductPositionMsgList.has(a) ||
              (this.m_mapProductPositionMsgList.set(a, []),
              this.GetProductListChangeCallback().Dispatch(
                this.GetAllProducts(),
              ));
          }
          async SetPositionMessages(s) {
            const a = y.w.Init(A.ku);
            if (s.length == 0)
              return (
                console.log(
                  "CReservationMessagingStore.SetPositionMessages - empty list",
                ),
                !1
              );
            s.forEach((i) => {
              let o = a.Body().add_settings();
              o.set_edistributor(i.edistributor),
                o.set_product_identifier(i.product_identifier),
                o.set_start_queue_position(i.start_queue_position),
                o.set_rtime_estimated_notification(
                  i.rtime_estimated_notification,
                ),
                o.set_localization_token(i.localization_token);
            });
            let n = null;
            try {
              const i = await A.nd.SetReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (i.GetEResult() == C.R) {
                const o = new Set(),
                  P = Math.floor(Date.now() / 1e3);
                return (
                  s.forEach((f) => {
                    (f.accountid = O.iA.accountid), (f.rtime_created = P);
                    const u = this.GetKey(f);
                    let G = this.m_mapProductPositionMsgList.get(u);
                    const v = G.findIndex(
                      (x) => x.start_queue_position == f.start_queue_position,
                    );
                    let L = [...G];
                    v >= 0 ? (L[v] = f) : (L.push(f), this.SortList(L)),
                      this.m_mapProductPositionMsgList.set(u, L),
                      o.add(this.GetKey(f));
                  }),
                  Array.from(o).forEach((f) => {
                    this.GetPositionListViaKeyChangeCallback(f).Dispatch(
                      this.m_mapProductPositionMsgList.get(f),
                    );
                  }),
                  !0
                );
              }
              n = (0, p.H)(i);
            } catch (i) {
              n = (0, p.H)(i);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  n?.strErrorMsg,
                n,
              ),
              !1
            );
          }
          async DeletePositionMessage(s) {
            const a = y.w.Init(A.$J);
            a.Body().set_edistributor(s.edistributor),
              a.Body().set_product_identifier(s.product_identifier),
              a.Body().set_start_queue_position(s.start_queue_position);
            let n = null;
            try {
              const i = await A.nd.DeleteReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (i.GetEResult() == C.R) {
                const o = this.GetKey(s);
                let P = this.m_mapProductPositionMsgList.get(o);
                const f = P.findIndex(
                    (G) => G.start_queue_position == s.start_queue_position,
                  ),
                  u = [...P];
                return (
                  u.splice(f, 1),
                  this.m_mapProductPositionMsgList.set(o, u),
                  this.GetPositionListChangeCallback(s).Dispatch(u),
                  !0
                );
              }
              n = (0, p.H)(i);
            } catch (i) {
              n = (0, p.H)(i);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  n?.strErrorMsg,
                n,
              ),
              !1
            );
          }
          async ReloadReservationPositionMessages() {
            const s = y.w.Init(A.jd);
            return await A.nd.ReloadAllReservationPositionMessages(
              this.m_steamInterface.GetServiceTransport(),
              s,
            );
          }
          static s_Singleton;
          static Get() {
            return (
              ue.s_Singleton ||
                ((ue.s_Singleton = new ue()), ue.s_Singleton.Init()),
              ue.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const s = (0, R.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, J.wT)(!!s, "require promotion_operation_token"),
              (this.m_steamInterface = (0, H.p)(
                new E.D(O.TS.WEBAPI_BASE_URL, s),
              ));
            const a = (0, R.Tc)(
              "reservation_queue_position_messages",
              "application_config",
            );
            this.ValidateInputDefault(a) &&
              (a.map((n) => {
                const i = this.GetKey(n);
                this.m_mapProductPositionMsgList.has(i) ||
                  this.m_mapProductPositionMsgList.set(i, []),
                  this.m_mapProductPositionMsgList.get(i).push(n);
              }),
              this.m_mapProductPositionMsgList.forEach((n) =>
                this.SortList(n),
              ));
          }
          GetSteamInterface() {
            return this.m_steamInterface;
          }
          ValidateInputDefault(s) {
            const a = s;
            return (
              a &&
              Array.isArray(a) &&
              a.length > 0 &&
              typeof a[0].edistributor == "number" &&
              typeof a[0].product_identifier == "string"
            );
          }
        };
        w([m.oI], N.prototype, "AddProductID", 1),
          w([m.oI], N.prototype, "SetPositionMessages", 1),
          w([m.oI], N.prototype, "DeletePositionMessage", 1),
          w([m.oI], N.prototype, "ReloadReservationPositionMessages", 1);
        let V = N;
        function Z() {
          const [r, s] = (0, c.useState)(() => V.Get().GetAllProducts());
          return (0, m.hL)(V.Get().GetProductListChangeCallback(), s), r;
        }
        function $(r) {
          const [s, a] = (0, c.useState)(() =>
            V.Get().GetPositionMessagingForProduct(r),
          );
          return (0, m.hL)(V.Get().GetPositionListChangeCallback(r), a), s;
        }
        function _() {
          const r = V.Get();
          return {
            fnAddProductID: r.AddProductID,
            fnSetPositionMessages: r.SetPositionMessages,
            fnDeletePositionMessage: r.DeletePositionMessage,
            fnReloadReservationPositionMessages:
              r.ReloadReservationPositionMessages,
          };
        }
        var Q = t(77411),
          d = t(65285),
          l = t(58534);
        function M(r) {
          const [s, a] = (0, c.useState)(null),
            { fnAddProductID: n } = _();
          return (
            console.log("AddProductToReservationPositionMessage selected: ", s),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(l.JU, { children: "Add Product SKU:" }),
                (0, e.jsx)("p", {
                  children:
                    "Select an item for which we want to communicate a reservation status.",
                }),
                (0, e.jsx)(h, { selected: s, setSelected: a }),
                (0, e.jsxs)(l.$n, {
                  disabled: !s,
                  onClick: () => {
                    n(s), a(null);
                  },
                  children: [
                    "Add '",
                    s?.product_description ?? s?.product_identifier,
                    "' To List",
                  ],
                }),
              ],
            })
          );
        }
        function h(r) {
          const { selected: s, setSelected: a } = r,
            n = (0, c.useRef)(void 0),
            i = B(),
            o = Z(),
            P = (0, c.useMemo)(
              () =>
                !i || !o
                  ? []
                  : i
                      .filter(
                        (u) =>
                          o.findIndex(
                            (G) =>
                              G.edistributor == u.edistributor &&
                              G.product_identifier == u.product_identifier,
                          ) == -1,
                      )
                      .map((u) => ({
                        value: u,
                        label: `${u.product_description} @ ${u.distributor} - product id: ${u.product_identifier}, part number ${u.part_number} `,
                      })),
              [i, o],
            );
          (0, c.useEffect)(() => {
            n?.current && n.current.clearValue();
          }, [o]);
          const f = P?.find(
            (u) =>
              s &&
              s.edistributor == u.value.edistributor &&
              s.product_identifier == u.value.product_identifier,
          );
          return (0, e.jsx)(Q.Ay, {
            isSearchable: !0,
            ref: n,
            isMulti: !1,
            isClearable: !0,
            className: d.ItemSelect,
            options: P,
            value: f,
            onChange: (u) => {
              u && a(u.value);
            },
          });
        }
        var S = t(73191),
          T = t(43308),
          I = t(59490),
          q = t(2801),
          F = t(88003),
          k = t(12932),
          ie = t(82734),
          W = t(18210),
          Pe = t(95695),
          Me = t(74107),
          be = t(72609),
          oe = t(39905),
          De = t(86722),
          Be = t(78603),
          _e = t(12842),
          se = t.n(_e);
        function Ee(r, s, a, n, i, o, P) {
          let f = null,
            u = !1,
            G;
          if (a == EHardwareDetailLoadState.k_LoadFailure || !i)
            f = SharedLocalization.Localize("#Sale_Reservations_BusyServer");
          else if (BShouldDisplayKomodoMessage(n, r))
            (u = !0),
              r === k_nSteamDeckAppid
                ? (f = LocalizeInlineReact(
                    "#Sale_Reservation_Komodo",
                    jsx("a", {
                      className: reservestyles.Link,
                      href: "https://steamdeck.komodo.jp",
                    }),
                  ))
                : r == k_nSteamMachineAppid || r == k_nSteamFrameAppid
                  ? (f = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic_NoSk",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ))
                  : (f = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ));
          else if (i && i.some((v) => !v.allow_purchase_in_country))
            (u = !0),
              (f = SharedLocalization.Localize(
                "#Sale_Reservation_NotAvailableCountry",
              ));
          else if (i && i.some((v) => v.account_restricted_from_purchasing)) {
            if (UserConfig.logged_in) {
              const v = i.some((x) => x.requires_reservation),
                L = i.find(
                  (x) =>
                    x.account_first_date_purchase_requirement &&
                    x.account_first_date_purchase_requirement > 0,
                )?.account_first_date_purchase_requirement;
              v
                ? (f = L
                    ? SharedLocalization.Localize(
                        "#Sale_Reservation_NotAvailale_PreDate",
                        LocalizeDateHumanReadable(L),
                      )
                    : SharedLocalization.Localize(
                        "#Sale_Reservation_NotAllowedAccount",
                      ))
                : (f = SharedLocalization.Localize(
                    "#Sale_Purchase_NotAllowedAccount",
                  )),
                (G = styles.UserTooNew),
                (f = jsx(ne, {
                  elReservationMessage: f,
                  strUrlLearnMoreLink: P,
                }));
            }
          } else
            i &&
              i.some(
                (v) =>
                  v.requires_reservation &&
                  v.appid_ownership_not_allowed_to_reserve &&
                  (v.not_allowed_to_reserved_because_already_owned ||
                    o.has(v.appid_ownership_not_allowed_to_reserve)),
              ) &&
              UserConfig.logged_in &&
              ((f = jsx(ne, {
                elReservationMessage: s
                  ? SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Specific",
                      s,
                    )
                  : SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Generic",
                    ),
                strUrlLearnMoreLink: P,
              })),
              (G = styles.AlreadyBought));
          return {
            elReservationSystemMessage: f,
            bHidePackageDisplay: u,
            messageDisplayClassNameOverride: G,
          };
        }
        function ne(r) {
          const { elReservationMessage: s, strUrlLearnMoreLink: a } = r;
          return a
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  s,
                  (0, e.jsx)(De.d$, {
                    url: a,
                    className: se().Link,
                    children: oe.Z.Localize("#Button_Learn"),
                  }),
                ],
              })
            : s;
        }
        var he = t(7582),
          Se = t(92825),
          ce = t.n(Se);
        function re(r, s) {
          return r > s + 1 ? r - s : r + 12 - s;
        }
        function le(r) {
          const {
            strToken: s,
            rtEstimatedNotifcationDate: a,
            strUrlLearnMoreLink: n,
            bInReservationQueue: i,
            bWaitlistIsActive: o,
            reservedHardwareDetail: P,
            bHideLabel: f,
          } = r;
          let u = oe.Z.Localize("#Sale_Reservation_Fallback_V2"),
            G = !1;
          if (
            (i
              ? (u = oe.Z.Localize("#Sale_Reservation_Fallback_user_V2"))
              : o &&
                P &&
                !P.position_is_waitlist &&
                ((u = Me.F5.Localize(
                  "#Reservation_Join_Waitlist_Cancel_Reservation",
                )),
                (G = !0)),
            !s || !a || G)
          )
            return (0, e.jsx)("div", {
              className: ce().Ctn,
              children: (0, e.jsx)(ne, {
                elReservationMessage: u,
                strUrlLearnMoreLink: n,
              }),
            });
          const v = new Date(a * 1e3),
            L = v.getMonth() + 1;
          let x = "",
            Y = "",
            ee = "",
            ye = "",
            te = s;
          switch (s) {
            case "#Sale_Reservation_Year":
            case "#Sale_Reservation_AfterYear":
              x = "" + v.getFullYear();
              break;
            case "#Sale_Reservation_MonthYear":
            case "#Sale_Reservation_AfterMonthYear":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (Y = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_TwoMonthRangeYear":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + re(L, 1))),
                (Y = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (ee = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_ThreeMonthRangeYear":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + re(L, 2))),
                (Y = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (ee = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_FourMonthRangeYear":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + re(L, 3))),
                (Y = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (ee = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_Quarter_ThreeMonths":
              (te =
                "#Sale_Reservation_Quarter" + (Math.floor((L - 1) / 3) + 1)),
                (x = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_AfterQuarter_ThreeMonths":
              (te =
                "#Sale_Reservation_AfterQuarter" +
                (Math.floor((L - 1) / 3) + 1)),
                (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (Y = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_ByYear":
              x = "" + v.getFullYear();
              break;
            case "#Sale_Reservation_ByMonthYear":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (Y = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_BetweenNowAndLastDay":
              (x = (0, W.we)("#Sale_Reservation_MonthNoun_" + L)),
                (Y = "" + new Date(v.getFullYear(), v.getMonth(), 0).getDate()),
                (ee = "" + v.getFullYear());
              break;
            case "#Sale_Reservation_RelativeWeekly":
              {
                const Ie = he.HD.GetTimeNowWithOverride(),
                  pe = Math.floor((a - Ie) / (1440 * 60));
                pe < 7 ||
                  (pe < 28
                    ? ((te = "#Sale_Reservation_RelativeWeekly_Plural"),
                      (x = "" + Math.floor(pe / 7 + 1)))
                    : ((te = "#Sale_Reservation_RelativeMonthly"),
                      (x = "" + Math.floor(pe / 28 + 1))));
              }
              break;
            case "#Sale_Reservation_AvailabilityUnknown":
              te = void 0;
              break;
            default:
              te = "#Sale_Reservation_Fallback";
          }
          return (0, e.jsxs)("div", {
            className: ce().Ctn,
            children: [
              (0, e.jsx)("div", {
                children:
                  !f &&
                  !!te &&
                  (0, W.we)(
                    i
                      ? "#Sale_Reservation_YourExpectedDate"
                      : "#Sale_Reservation_ExpectedDate",
                  ),
              }),
              (0, e.jsx)(ne, {
                elReservationMessage: te ? (0, W.we)(te, x, Y, ee, ye) : u,
                strUrlLearnMoreLink: n,
              }),
            ],
          });
        }
        var de = t(24642);
        function Re(r) {
          const s = Z();
          return !s || s.length == 0
            ? (0, e.jsx)("div", {
                children:
                  "No products with reservation position messages exists.",
              })
            : (0, e.jsx)("div", {
                children: s.map((a) =>
                  (0, e.jsx)(
                    ve,
                    { productID: a },
                    `${a.edistributor}_${a.product_identifier}`,
                  ),
                ),
              });
        }
        function fe(r) {
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(l.JU, { children: "instructions:" }),
              (0, e.jsx)("p", {
                children:
                  "Select an item from the drop-down to the left to set it as a visible item that we're taking reservations for.",
              }),
              (0, e.jsx)("p", {
                children:
                  "Once selected, you can add groupings of item quantities and a description of how we want to describe the date at which those people will recieve their items.",
              }),
              (0, e.jsx)("p", {
                children:
                  "Queue positions are fixed for each user who enters the queue and only go up with new users entering the queue.  Their position doesn't decrease when previous users cancel or purchase the item.",
              }),
            ],
          });
        }
        function me(r) {
          const s = Z();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(l.JU, { children: "Force update:" }),
              (0, e.jsx)("p", {
                children:
                  "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
              }),
              (0, e.jsx)("p", {
                children:
                  "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
              }),
              (0, e.jsx)(l.$n, {
                onClick: (a) => (0, F.pg)((0, e.jsx)(Te, {}), (0, ie.uX)(a)),
                children: "Force Reload Definitions on Steam Servers",
              }),
            ],
          });
        }
        function ve(r) {
          const { productID: s } = r,
            a = z(s),
            n = a?.product_description + " " + a?.distributor,
            i = $(s);
          return a
            ? (0, e.jsxs)(k.qx, {
                bStartMinimized: !1,
                title: n,
                tooltip: `distributor enum: ${a.edistributor}, part number: ${a.part_number}, product identifier: ${a.product_identifier}`,
                children: [
                  (0, e.jsx)(l.$n, {
                    onClick: (o) =>
                      (0, F.pg)(
                        (0, e.jsx)(je, { productID: s }),
                        (0, ie.uX)(o),
                      ),
                    children: "Add new start position",
                  }),
                  (0, e.jsxs)("table", {
                    className: d.ItemTable,
                    children: [
                      (0, e.jsx)("thead", {
                        children: (0, e.jsxs)("tr", {
                          children: [
                            (0, e.jsx)("th", {
                              children: "Starting Queue Position",
                            }),
                            (0, e.jsx)("th", {
                              children: "Estimate Date Receive Invite",
                            }),
                            (0, e.jsx)("th", { children: "Localized Date" }),
                            (0, e.jsx)("th", { children: "Entry Created By" }),
                            (0, e.jsx)("th", {}),
                          ],
                        }),
                      }),
                      (0, e.jsx)("tbody", {
                        children: i.map((o) =>
                          (0, e.jsx)(
                            ge,
                            { positionMsg: o },
                            n + o.start_queue_position,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              })
            : (0, e.jsxs)("div", {
                children: [
                  "Unexpected: Could not find ProductID: ",
                  s.edistributor,
                  " : ",
                  s.product_identifier,
                ],
              });
        }
        function ge(r) {
          const { positionMsg: s } = r;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: (0, de.D)(s.start_queue_position) }),
              (0, e.jsx)("td", {
                children: (0, W.TW)(s.rtime_estimated_notification),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(le, {
                  strUrlLearnMoreLink: void 0,
                  rtEstimatedNotifcationDate: s.rtime_estimated_notification,
                  strToken: s.localization_token,
                  bInReservationQueue: !0,
                  bHideLabel: !0,
                }),
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)(I.p, { accountID: s.accountid }),
                  }),
                  (0, e.jsx)("br", {}),
                  "On: ",
                  (0, W.TW)(s.rtime_created),
                ],
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(l.$n, {
                    onClick: (a) =>
                      (0, F.pg)(
                        (0, e.jsx)(je, {
                          productID: s,
                          existingPositionMsg: s,
                        }),
                        (0, ie.uX)(a),
                      ),
                    children: "Update",
                  }),
                  (0, e.jsx)(l.$n, {
                    onClick: (a) =>
                      (0, F.pg)(
                        (0, e.jsx)(ae, { positionMsg: s }),
                        (0, ie.uX)(a),
                      ),
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        }
        function je(r) {
          const { productID: s, existingPositionMsg: a, closeModal: n } = r,
            { fnSetPositionMessages: i } = _(),
            o = Math.floor(Date.now() / 1e3),
            [P, f] = (0, c.useState)(a?.start_queue_position || 0),
            [u, G] = (0, c.useState)(
              a?.rtime_estimated_notification || o + 1440 * 60,
            ),
            [v, L] = (0, c.useState)(
              a?.localization_token || "#Sale_Reservation_MonthYear",
            ),
            x = a ? "Update Queue Range" : "Create Queue Range",
            Y = (0, S.vs)();
          return Y.bLoading
            ? (0, e.jsx)(S.Hh, { state: Y, strDialogTitle: x, closeModal: n })
            : (0, e.jsx)(q.o0, {
                bDisableBackgroundDismiss: !0,
                strTitle: x,
                onCancel: n,
                onOK: () => {
                  Y.fnSetLoading(!0);
                  const ee = {
                    ...s,
                    start_queue_position: P,
                    rtime_estimated_notification: u,
                    localization_token: v,
                  };
                  i([ee]).then((ye) => {
                    ye
                      ? (Y.fnSetSuccess(!0),
                        Y.fnSetStrSuccess("Successfully created position"))
                      : (Y.fnSetSuccess(!1),
                        Y.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
                },
                children: (0, e.jsxs)("div", {
                  className: d.NewEntryCtn,
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        "When we get to accepting reservation number ",
                        (0, e.jsx)("i", { children: "n" }),
                        ", show those users a date they can anticipate to recieve an invite to purchase. If we are choosing a display that shows the day, please account for the date is being shown to each user in their local time.",
                      ],
                    }),
                    (0, e.jsx)(l.pd, {
                      type: "number",
                      min: "0",
                      value: P,
                      label: "Starting Queue Position",
                      onChange: (ee) =>
                        f(Number.parseInt(ee?.currentTarget?.value || "0")),
                    }),
                    (0, e.jsx)(T.K, {
                      bShowTimeZone: !0,
                      strDescription:
                        "Estimated Time Users will receive invite",
                      strDescToolTip:
                        "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                      nEarliestTime: o,
                      fnGetTimeToUpdate: () => u,
                      fnSetTimeToUpdate: G,
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(Ae, {
                      strToken: v,
                      fnSetToken: L,
                      rtEstimateDate: u,
                    }),
                  ],
                }),
              });
        }
        function ae(r) {
          const { positionMsg: s, closeModal: a } = r,
            { fnDeletePositionMessage: n } = _(),
            i = `Delete Queue Position ${(0, de.D)(s.start_queue_position)}`,
            o = (0, S.vs)();
          return o.bLoading
            ? (0, e.jsx)(S.Hh, { state: o, strDialogTitle: i, closeModal: a })
            : (0, e.jsx)(q.o0, {
                strTitle: i,
                strDescription: "Are you sure, this action is no undo'able?",
                onCancel: a,
                onOK: () => {
                  o.fnSetLoading(!0),
                    n(s).then((P) => {
                      P
                        ? (o.fnSetSuccess(!0),
                          o.fnSetStrSuccess("Successfully delete position"))
                        : (o.fnSetSuccess(!1),
                          o.fnSetStrError(
                            "Failed, please check console logs and/or try again",
                          ));
                    });
                },
              });
        }
        function Te(r) {
          const { closeModal: s } = r,
            { fnReloadReservationPositionMessages: a } = _(),
            [n, i] = (0, c.useState)(!1);
          return (
            (0, c.useEffect)(() => {
              a().then(() => i(!0));
            }, [a]),
            (0, e.jsx)(q.o0, {
              bAlertDialog: !0,
              strTitle: "Reload Definition",
              strDescription: n
                ? "Reload sent to server! Now safe to close dialog"
                : "Reloading In Progress...",
              closeModal: s,
            })
          );
        }
        const xe = [
          "#Sale_Reservation_MonthYear",
          "#Sale_Reservation_TwoMonthRangeYear",
          "#Sale_Reservation_ThreeMonthRangeYear",
          "#Sale_Reservation_FourMonthRangeYear",
          "#Sale_Reservation_Quarter_ThreeMonths",
          "#Sale_Reservation_AfterYear",
          "#Sale_Reservation_AfterMonthYear",
          "#Sale_Reservation_Year",
          "#Sale_Reservation_AfterQuarter_ThreeMonths",
          "#Sale_Reservation_RelativeWeekly",
          "#Sale_Reservation_ByYear",
          "#Sale_Reservation_ByMonthYear",
          "#Sale_Reservation_BetweenNowAndLastDay",
          "#Sale_Reservation_AvailabilityUnknown",
        ];
        function Ae(r) {
          const { strToken: s, fnSetToken: a, rtEstimateDate: n } = r,
            i = (0, c.useMemo)(
              () =>
                xe.map((o) => ({
                  label: (0, e.jsx)(le, {
                    strToken: o,
                    rtEstimatedNotifcationDate: n,
                    strUrlLearnMoreLink: void 0,
                    bInReservationQueue: !0,
                  }),
                  data: o,
                })),
              [n],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(l.m, {
                strDropDownClassName: Pe.DropDownScroll,
                label: "Date Format",
                rgOptions: i,
                selectedOption: s,
                onChange: (o) => a(o.data),
                bDisableMouseOverlay: !0,
                contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, e.jsx)("h3", {
                    children: "This will display to users as: ",
                  }),
                  (0, e.jsxs)("div", {
                    className: d.DatePreview,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, W.we)("#Sale_Reservation_ExpectedDate"),
                      }),
                      (0, e.jsx)(le, {
                        strUrlLearnMoreLink: void 0,
                        rtEstimatedNotifcationDate: n,
                        strToken: s,
                        bInReservationQueue: !0,
                        bHideLabel: !0,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        var Le = t(36707),
          Ce = t(45737),
          X = t.n(Ce);
        function Oe(r) {
          return (0, e.jsxs)("div", {
            className: (0, Le.A)(d.ctn, X().AdminPageCtn),
            children: [
              (0, e.jsx)("h1", {
                className: X().PageTitle,
                children:
                  "Lawrence's Reservation Queue Position Messaging Tools",
              }),
              (0, e.jsx)("hr", { className: "VO" }),
              (0, e.jsxs)("div", {
                className: X().ColumnCtn,
                children: [
                  (0, e.jsxs)("div", {
                    className: X().LeftCol,
                    children: [
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(M, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(Re, {}),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: X().RightCol,
                    children: [
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(fe, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(me, {}),
                      }),
                      (0, e.jsxs)("div", {
                        className: X().SectionCtn,
                        children: [
                          (0, e.jsx)(l.JU, { children: "Useful Links:" }),
                          (0, e.jsx)("ul", {
                            children: (0, e.jsx)("li", {
                              children: (0, e.jsx)("a", {
                                href: `${O.TS.STATS_BASE_URL}steamdeck/reservations/`,
                                target: "_blank",
                                children:
                                  "Steam Hardware reservation stats page",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      59432: (D, b, t) => {
        "use strict";
        t.d(b, { Gw: () => B, Lk: () => z, ai: () => j, mm: () => R });
        var e = t(14947);
        const c = e.sH.box(void 0);
        function R() {
          return c.get();
        }
        function j(C) {
          (0, e.h5)(() => c.set(C));
        }
        function B() {
          const C = c.get();
          return C || Math.floor(Date.now() / 1e3);
        }
        function z() {
          const C = c.get();
          return C ? new Date(C * 1e3) : new Date();
        }
      },
      7582: (D, b, t) => {
        "use strict";
        t.d(b, { HD: () => y, P_: () => A, f1: () => K, sB: () => p });
        var e = t(19367),
          c = t.n(e),
          R = t(90626),
          j = t(59432),
          B = t(47689),
          z = t(77291);
        class C {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, j.mm)();
          }
          set nOverrideDateNow(g) {
            (0, j.ai)(g);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, j.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, j.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, j.mm)();
          }
          ParseDevOverrides(g) {
            if (!g || g.length == 0) return;
            new URLSearchParams(g[0] == "?" ? g.substring(1) : g).has("t");
          }
        }
        const y = new C();
        (0, z.V)("g_EventCalendarDevFeatures", y);
        function A(O = 1) {
          const [g, U] = R.useState(() => J()),
            w = (0, B.m)("useTimeNowWithOverride"),
            N = R.useCallback(() => {
              w.token.reason || U(J());
            }, []);
          return (
            R.useEffect(() => {
              const V = 1e3 * O,
                Z = Date.now() % V,
                $ = V - Z,
                _ = window.setTimeout(N, $);
              return () => {
                window.clearTimeout(_);
              };
            }, [g, O, N]),
            g
          );
        }
        const H = Math.floor(new Date().getTime() / 1e3);
        function J() {
          const O = Math.floor(Date.now() / 1e3);
          return y.nOverrideDateNow ? y.nOverrideDateNow + (O - H) : O;
        }
        function p() {
          return y.nOverrideDateNow ?? H;
        }
        function K() {
          return R.useMemo(() => p(), []);
        }
        function m() {
          return React.useMemo(() => y.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      54407: (D, b, t) => {
        "use strict";
        t.d(b, { B3: () => Z, CF: () => $, KM: () => g, KT: () => V });
        var e = t(41735),
          c = t.n(e),
          R = t(58632),
          j = t.n(R),
          B = t(90626),
          z = t(20194),
          C = t(75233),
          y = t(72604),
          A = t(76559),
          E = t(34592),
          H = t(3166),
          J = t(35038),
          p = t(27386),
          K = t(68312),
          m = t(40497);
        const O = "nicknames";
        function g(_) {
          const Q = (0, K.KV)(),
            { data: d, isLoading: l } = (0, z.I)({
              queryKey: [O],
              queryFn: async () => {
                const M = new Map();
                if (H.iA.logged_in) {
                  const h = J.w.Init(p.w_T),
                    T = (await p.xtC.GetNicknameList(Q, h)).Body().toObject();
                  T?.nicknames &&
                    T.nicknames.length > 0 &&
                    T.nicknames.forEach((I) => {
                      I.accountid &&
                        I.nickname &&
                        M.set(I.accountid, I.nickname);
                    });
                }
                return M;
              },
            });
          return d ? d.get(_) : null;
        }
        async function U(_) {
          if (!_ || _.length == 0) return [];
          const Q =
            (0, H.yK)() == "community"
              ? H.TS.COMMUNITY_BASE_URL
              : H.TS.STORE_BASE_URL;
          if (_.length == 1) {
            const d = { accountid: _[0], origin: self.origin },
              l = await c().get(`${Q}actions/ajaxgetavatarpersona`, {
                params: d,
              });
            if (
              !l ||
              l.status != 200 ||
              l.data?.success != y.R ||
              !l.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, E.H))(l).strErrorMsg}`;
            return [l.data.userinfo];
          } else {
            const d = { accountids: _.join(","), origin: self.origin },
              l = await c().get(`${Q}actions/ajaxgetmultiavatarpersona`, {
                params: d,
              });
            if (
              !l ||
              l.status != 200 ||
              l.data?.success != y.R ||
              !l.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, E.H))(l).strErrorMsg}`;
            const M = new Map();
            return (
              l.data.userinfos.forEach((h) =>
                M.set(new A.b(h.steamid).GetAccountID(), h),
              ),
              _.map((h) => M.get(h))
            );
          }
        }
        const w = new (j())((_) => U(_), { cache: !1 }),
          N = "avatarandpersonas";
        function V(_) {
          const { data: Q, isLoading: d } = (0, z.I)({
            queryKey: [N, _],
            queryFn: () => w.load(_),
          });
          return [Q, d];
        }
        function Z(_) {
          const Q = (0, C.jE)(),
            { data: d, isLoading: l } = (0, z.I)({
              queryKey: [N, _],
              queryFn: async () => {
                const h = await w.loadMany(_);
                return (
                  h.forEach((S) => {
                    if (S instanceof Error) return;
                    const T = [N, new A.b(S.steamid).GetAccountID()];
                    Q.setQueryData(T, S);
                  }),
                  h
                );
              },
              enabled: _?.length > 0,
            }),
            M = (0, B.useMemo)(() => {
              const h = new Array();
              return (
                d?.forEach((S) => {
                  S instanceof Error || h.push(S);
                }),
                h
              );
            }, [d]);
          return l ? null : M;
        }
        function $(_) {
          return m.L.getQueryData([N, _]);
        }
      },
      43308: (D, b, t) => {
        "use strict";
        t.d(b, { K: () => U });
        var e = t(7850),
          c = t(90626),
          R = t(92298),
          j = t.n(R),
          B = t(44894),
          z = t(7582),
          C = t(95695),
          y = t.n(C),
          A = t(36707),
          E = t(18210),
          H = t(71421),
          J = t(12916),
          p = t.n(J),
          K = t(87937),
          m = t.n(K);
        const O = "hh:mm a",
          g = "HH:mm";
        function U(d) {
          const {
            nLatestTime: l,
            nEarliestTime: M,
            fnGetTimeToUpdate: h,
            onError: S,
            strAlsoShowTimeZone: T,
            disabled: I,
            bNoDefaultDate: q,
            className: F,
            strDescToolTip: k,
            strDescription: ie,
            bShowTimeZone: W,
            strInvalidDateTimeLocalizedMsg: Pe,
            fnIsValidDateTime: Me,
            bWeekdaysOnly: be,
            fnSetTimeToUpdate: oe,
            bForce24HourFormat: De,
            bAllowClear: Be,
          } = d;
          let _e = V() || De ? g : O;
          const se = h(),
            [Ee, ne] = c.useState(se > 0 ? m()(se * 1e3) : null),
            [he, Se] = c.useState(0),
            [ce, re] = c.useState(),
            [le, de] = c.useState(),
            Re = Q(ce, le, Pe, Me, S),
            fe = !S && Re;
          let me;
          if (l && M && l == M && M > z.HD.GetTimeNowWithOverride()) {
            const n = m().unix(M);
            (me = {
              hours: { max: n.hour(), min: n.hour(), step: 0 },
              minutes: { max: n.minute(), min: n.minute(), step: 0 },
              seconds: { max: n.seconds(), min: n.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (_e = g);
          }
          let ve;
          !se && M && !q && (ve = m().unix(M));
          const ge = m().tz.guess(),
            je = m().unix(se).tz(ge),
            ae = !!T && ge != T && m().unix(se).tz(T),
            Te = (n) => {
              if (I) return;
              de(null);
              const i = h(),
                o = m().unix(i || z.HD.GetTimeNowWithOverride());
              (n = n.clone()),
                n.hour(o.hour()),
                n.minute(o.minute()),
                n.second(0),
                oe(n.unix()),
                ne(n);
            },
            { fnOnInput: xe, fnOnInputBlur: Ae, fnOnChange: Le } = w(Z, Te, de),
            Ce = (n) => {
              if (I) return;
              re(null);
              let i = h(),
                o = 0;
              if (!i)
                o =
                  m().unix(M).hour(0).second(0).minutes(0).unix() +
                  3600 * n.hour() +
                  60 * n.minutes();
              else {
                const P = m().unix(i);
                (n = n.clone()),
                  n.year(P.year()),
                  n.month(P.month()),
                  n.date(P.date()),
                  (o = n.unix());
              }
              oe(o), ne(m().unix(o));
            },
            { fnOnInput: X, fnOnInputBlur: Oe, fnOnChange: r } = w($, Ce, re),
            s = () => {
              I || (oe(0), ne(null), de(null), re(null), Se((n) => n + 1));
            },
            a = Be && !I && se > 0;
          return (0, e.jsxs)("div", {
            className: (0, A.A)(p().EventTimeSection, F),
            children: [
              (0, e.jsxs)("div", {
                className: (0, A.A)(p().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(H.he, {
                    toolTipContent: k,
                    direction: "top",
                    children: !!ie && (0, e.jsx)("span", { children: ie }),
                  }),
                  fe &&
                    (0, e.jsxs)("span", {
                      className: p().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: B.A }), fe],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: y().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, A.A)(y().InputBorder, p().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        j(),
                        {
                          onChange: Le,
                          timeFormat: !1,
                          value: le ?? Ee,
                          isValidDate: (n) => !I && _(M, l, be, n),
                          initialValue: ve,
                          inputProps: {
                            placeholder: (0, E.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, A.A)(
                              p().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: I,
                            onChange: (n) => xe(n.currentTarget.value),
                            onBlur: (n) => Ae(n.currentTarget.value),
                          },
                        },
                        "date" + he,
                      ),
                      !!ae &&
                        (0, e.jsx)("div", {
                          className: p().PacificTimeHint,
                          children: ae.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, A.A)(y().InputBorder, p().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        j(),
                        {
                          onChange: r,
                          dateFormat: !1,
                          timeFormat: _e,
                          timeConstraints: me,
                          value: ce ?? Ee,
                          inputProps: {
                            placeholder: (0, E.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, A.A)(
                              p().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: I,
                            onChange: (n) => X(n.currentTarget.value),
                            onBlur: (n) => Oe(n.currentTarget.value),
                          },
                        },
                        "time" + he,
                      ),
                      !!ae &&
                        (0, e.jsx)("div", {
                          className: p().PacificTimeHint,
                          children: ae.format("LT"),
                        }),
                    ],
                  }),
                  W &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: p().TimeZone,
                          children: je.zoneAbbr(),
                        }),
                        !!ae &&
                          (0, e.jsx)("div", {
                            className: p().TimeZone,
                            children: ae.zoneAbbr(),
                          }),
                      ],
                    }),
                  a &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: p().ClearButton,
                      onClick: s,
                      children: (0, E.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!me &&
                (0, e.jsx)("div", {
                  children: (0, E.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function w(d, l, M) {
          const [h, S] = c.useState(!1);
          return {
            fnOnInput: (F) => {
              M(F), S(!0);
            },
            fnOnInputBlur: (F) => {
              if (h) {
                const k = d(F);
                k.isValid() && l(k);
              }
              S(!1);
            },
            fnOnChange: (F) => {
              if (!h)
                if (typeof F == "string") {
                  const k = d(F);
                  k.isValid() && l(k);
                } else l(F);
            },
          };
        }
        function N() {
          const l = m()("2025-01-14").format("L").split(/[-/.]/),
            M = l.indexOf("14");
          return l.indexOf("01") < M;
        }
        function V() {
          return m()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function Z(d) {
          return m()(d, N() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function $(d) {
          return m()(d, [O, g], !1);
        }
        function _(d, l, M, h) {
          const S = m().unix(d).hour(0).seconds(0).minute(0);
          let T = h.unix() >= S.unix();
          if (T && l && l >= d) {
            const I = m().unix(l).hour(23).minute(59).seconds(59);
            T = h.unix() <= I.unix();
          }
          return (
            T && M && (h.weekday() == 0 || h.weekday() == 6) && (T = !1), T
          );
        }
        function Q(d, l, M, h, S) {
          const T = h && h(),
            I = l && !Z(l).isValid(),
            q = d && !$(d).isValid(),
            F = q || I || typeof T == "string" || T === !1;
          let k = null;
          return (
            F &&
              ((k = (0, E.we)(
                M || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              q
                ? (k = (0, E.we)("#DateTimePicker_Time_CannotParse"))
                : I
                  ? (k = (0, E.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof T == "string" && (k = T)),
            c.useEffect(() => {
              S && S(k);
            }, [k, S]),
            k
          );
        }
      },
      59490: (D, b, t) => {
        "use strict";
        t.d(b, { p: () => y });
        var e = t(7850),
          c = t(90626),
          R = t(76559),
          j = t(54407),
          B = t(15736),
          z = t.n(B),
          C = t(3166);
        function y(A) {
          const {
              accountID: E,
              bHideWhenNotAvailable: H,
              bHideName: J,
              bLink: p = !0,
            } = A,
            [K] = (0, j.KT)(E),
            m = (0, j.KM)(E),
            O = c.useMemo(() => R.b.InitFromAccountID(E), [E]),
            g = `${C.TS.COMMUNITY_BASE_URL}profiles/${O.ConvertTo64BitString()}`,
            U = p ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: K
              ? (0, e.jsxs)(U, {
                  href: p ? g : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: B.SmallAvatar,
                      src: K.avatar_url,
                      "data-miniprofile": "s" + O.ConvertTo64BitString(),
                    }),
                    !J &&
                      (0, e.jsx)("span", {
                        children: m
                          ? `${m} (${K.persona_name})`
                          : K.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !H && (0, e.jsx)("span", { children: E }),
                }),
          });
        }
      },
      12932: (D, b, t) => {
        "use strict";
        t.d(b, { AQ: () => K, pn: () => O, qx: () => m });
        var e = t(7850),
          c = t(58534),
          R = t(18210),
          j = t(36118),
          B = t(90626),
          z = t(36707),
          C = t(95695),
          y = t.n(C),
          A = t(25792),
          E = t(64734),
          H = t.n(E),
          J = t(65946),
          p = t(11243);
        function K(g) {
          const {
              title: U,
              tooltip: w,
              getMinimized: N,
              toggleMinimized: V,
              className: Z,
              children: $,
              elAdditionalButtons: _,
            } = g,
            Q = (0, J.q3)(() => N());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, z.A)(
                  Z,
                  E.SectionTitleHeader,
                  E.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, z.A)(
                      C.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [U, !!w && (0, e.jsx)(p.o, { tooltip: w })],
                  }),
                  (0, e.jsxs)("div", {
                    className: E.SectionTitleButtons,
                    children: [
                      _,
                      (0, e.jsx)(O, { bIsMinimized: Q, fnToggleMinimize: V }),
                    ],
                  }),
                ],
              }),
              !Q && (0, e.jsx)(A.tH, { children: $ }),
            ],
          });
        }
        function m(g) {
          const [U, w] = B.useState(!!g.bStartMinimized);
          return (0, e.jsx)(K, {
            ...g,
            getMinimized: () => U,
            toggleMinimized: () => w(!U),
            children: g.children,
          });
        }
        function O(g) {
          const { bIsMinimized: U, fnToggleMinimize: w } = g,
            N = U ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(c.$n, {
            "data-tooltip-text": (0, R.we)(N),
            onClick: w,
            children: g.bIsMinimized
              ? (0, e.jsx)(j.hz4, {})
              : (0, e.jsx)(j.Xjb, {}),
          });
        }
      },
      77291: (D, b, t) => {
        "use strict";
        t.d(b, { V: () => e });
        function e(c, R) {
          typeof window > "u" || (window[c] = R);
        }
      },
      65285: (D) => {
        D.exports = {
          Dummy: "_33nIbw5FB3FiuhUid6pNCS",
          ItemTable: "dhnmdtQCg9NlRTlO2CiRm",
          ItemSelect: "_2B82L-Dg0mrzOe1OkzCeN8",
          NewEntryCtn: "_1n-Sq-XrzUPQrrWRQVdhtq",
          DatePreview: "_2p-FIFIwIlMJ256q0Zj7lo",
        };
      },
      12916: (D) => {
        D.exports = {
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      78603: (D) => {
        D.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          description: "_1oXNiM3xAFJRy_Ze38gkG3",
          description2: "_1KF2MlJ6F5jUyxes4dS-I8",
          reservation_ctn: "_1GzH4ChDWcNv3vCKTlSIfb",
          reservation_horizontal_ctn: "keZ2uzYaV6t4dSmdSpPpP",
          options: "_1ShICbWRa-d4k2sWXSBRU5",
          options_list: "_2HdrY_BfMJtBgnkQG9Yy1N",
          price: "_K9GwdoULB7fidQYauP4H",
          CommunityPreviewReservationWidgetControl: "k82adLwDVk_0_Qpi4uKHS",
          reservecopy: "_2mg-ayeqtfvSlVBeUNudsd",
          reserverow: "_1DB5FQ_X8YXXb9MTrWamkY",
          purchaseaction: "_10a9BMKHCowrtgelPrWPvh",
          reserverowReserved: "_27GR40w6gCHGSSzOvM-6f6",
          reservebutton: "_3I2SPz9E3c4Z9kizQ8Si8",
          noreserve: "UsTrTU7oUGQiO_uLnTTBQ",
          cancelreservation: "_2PaJLP896niw_vwPf8Ul5p",
          alreadyreserved: "_2jeg5CIDxIsUEOFM4IOyKE",
          expecteddate: "_1-QAWjJQ51fHnsPzqCzc6T",
          expecteddate_str: "_1Thj5rQmTc3_SU05H6yiSY",
          Link: "_1vJHwybFjHBbNcBpxq2vJO",
          ReservationPSULessAddToCart: "_2HaOvkwPHDjo-tw2MojOhW",
          ReservationPSULessOutOfStock: "Cnrm19fZ6RQr1qL0tAjK9",
          BackgroundAnimation: "_1xm0qUdmOPB5fFuOJowf-6",
          "ItemFocusAnim-darkerGrey-nocolor": "_1B7CatJQljUauJ8s1n-ljZ",
          "ItemFocusAnim-darkerGrey": "_6ssa6UMKDgZzlmkNC_YVR",
          "ItemFocusAnim-darkGreySettings": "_3zdVJjpFzFXizWMqJTanXL",
          "ItemFocusAnim-darkGrey": "_30_M6ppan1_ulIlPEXgIJl",
          "ItemFocusAnim-grey": "_3GYj5W9eacowkuiHIeomMp",
          "ItemFocusAnim-translucent-white-10": "_3hWi_Bpp8nC9QUW0w7vdoF",
          "ItemFocusAnim-translucent-white-20": "_2tLGUDqcBXOft1XNfwfowc",
          "ItemFocusAnimBorder-darkGrey": "_3lwkegIBcstdeNMYHVQcIL",
          "ItemFocusAnim-green": "iNSUXIvhm2XWFZAz-czyp",
          focusAnimation: "sCYIjlY_RF-rJsQ-OC8Vo",
          hoverAnimation: "_3fUy8YNvjnAprZfdUIuwu5",
        };
      },
      12842: (D) => {
        D.exports = {
          Link: "_1K4QC6vZ61M5lcIvcCWMEP",
          UserTooNew: "_20i0fZO4jaOWCaVeAoB6KJ",
          AlreadyBought: "g1ayBmJ07JAYzenoRRpu5",
        };
      },
      92825: (D) => {
        D.exports = { Ctn: "_3gnQfZ3NUW9NFF3WllsQ6b" };
      },
      15736: (D) => {
        D.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
      64734: (D) => {
        D.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
      61738: (D, b, t) => {
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
        function c(j) {
          var B = R(j);
          return t(B);
        }
        function R(j) {
          if (!t.o(e, j)) {
            var B = new Error("Cannot find module '" + j + "'");
            throw ((B.code = "MODULE_NOT_FOUND"), B);
          }
          return e[j];
        }
        (c.keys = function () {
          return Object.keys(e);
        }),
          (c.resolve = R),
          (D.exports = c),
          (c.id = 61738);
      },
      44894: (D, b, t) => {
        "use strict";
        t.d(b, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
