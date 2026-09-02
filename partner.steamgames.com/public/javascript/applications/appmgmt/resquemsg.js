/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [4985],
    {
      95383: (D, N, t) => {
        "use strict";
        t.r(N), t.d(N, { default: () => Ce });
        var e = t(7850),
          l = t(90626),
          S = t(67705);
        const g = (0, S.Tc)("physical_goods", "application_config");
        function U() {
          const [i] = (0, l.useState)(() => g);
          return i;
        }
        function F(i) {
          return g.find(
            (s) =>
              s.edistributor == i.edistributor &&
              s.product_identifier == i.product_identifier,
          );
        }
        var L = t(72604),
          C = t(35038),
          x = t(70512),
          E = t(13018),
          H = t(71742),
          Q = t(34592),
          P = t(8323),
          O = t(54963),
          j = t(98609),
          k = Object.defineProperty,
          v = Object.getOwnPropertyDescriptor,
          I = (i, s, a, r) => {
            for (
              var n = r > 1 ? void 0 : r ? v(s, a) : s, o = i.length - 1, h;
              o >= 0;
              o--
            )
              (h = i[o]) && (n = (r ? h(s, a, n) : h(n)) || n);
            return r && n && k(s, a, n), n;
          };
        const y = class le {
          m_mapProductPositionMsgList = new Map();
          m_productListChangeCallback = new P.lu();
          m_messageListChangeCallback = new Map();
          m_steamInterface = null;
          GetKey(s) {
            return `${s.edistributor}_${s.product_identifier}`;
          }
          SortList(s) {
            s.sort((a, r) => a.start_queue_position - r.start_queue_position);
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
                this.m_messageListChangeCallback.set(s, new P.lu()),
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
            const a = C.w.Init(x.ku);
            if (s.length == 0)
              return (
                console.log(
                  "CReservationMessagingStore.SetPositionMessages - empty list",
                ),
                !1
              );
            s.forEach((n) => {
              let o = a.Body().add_settings();
              o.set_edistributor(n.edistributor),
                o.set_product_identifier(n.product_identifier),
                o.set_start_queue_position(n.start_queue_position),
                o.set_rtime_estimated_notification(
                  n.rtime_estimated_notification,
                ),
                o.set_localization_token(n.localization_token);
            });
            let r = null;
            try {
              const n = await x.nd.SetReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (n.GetEResult() == L.R) {
                const o = new Set(),
                  h = Math.floor(Date.now() / 1e3);
                return (
                  s.forEach((u) => {
                    (u.accountid = j.iA.accountid), (u.rtime_created = h);
                    const m = this.GetKey(u);
                    let G = this.m_mapProductPositionMsgList.get(m);
                    const f = G.findIndex(
                      (T) => T.start_queue_position == u.start_queue_position,
                    );
                    let A = [...G];
                    f >= 0 ? (A[f] = u) : (A.push(u), this.SortList(A)),
                      this.m_mapProductPositionMsgList.set(m, A),
                      o.add(this.GetKey(u));
                  }),
                  Array.from(o).forEach((u) => {
                    this.GetPositionListViaKeyChangeCallback(u).Dispatch(
                      this.m_mapProductPositionMsgList.get(u),
                    );
                  }),
                  !0
                );
              }
              r = (0, Q.H)(n);
            } catch (n) {
              r = (0, Q.H)(n);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  r?.strErrorMsg,
                r,
              ),
              !1
            );
          }
          async DeletePositionMessage(s) {
            const a = C.w.Init(x.$J);
            a.Body().set_edistributor(s.edistributor),
              a.Body().set_product_identifier(s.product_identifier),
              a.Body().set_start_queue_position(s.start_queue_position);
            let r = null;
            try {
              const n = await x.nd.DeleteReservationPositionMessage(
                this.m_steamInterface.GetServiceTransport(),
                a,
              );
              if (n.GetEResult() == L.R) {
                const o = this.GetKey(s);
                let h = this.m_mapProductPositionMsgList.get(o);
                const u = h.findIndex(
                    (G) => G.start_queue_position == s.start_queue_position,
                  ),
                  m = [...h];
                return (
                  m.splice(u, 1),
                  this.m_mapProductPositionMsgList.set(o, m),
                  this.GetPositionListChangeCallback(s).Dispatch(m),
                  !0
                );
              }
              r = (0, Q.H)(n);
            } catch (n) {
              r = (0, Q.H)(n);
            }
            return (
              console.error(
                "CReservationMessagingStore.SetPositionMessages failed: " +
                  r?.strErrorMsg,
                r,
              ),
              !1
            );
          }
          async ReloadReservationPositionMessages() {
            const s = C.w.Init(x.jd);
            return await x.nd.ReloadAllReservationPositionMessages(
              this.m_steamInterface.GetServiceTransport(),
              s,
            );
          }
          static s_Singleton;
          static Get() {
            return (
              le.s_Singleton ||
                ((le.s_Singleton = new le()), le.s_Singleton.Init()),
              le.s_Singleton
            );
          }
          constructor() {}
          Init() {
            const s = (0, S.Tc)(
              "promotion_operation_token",
              "application_config",
            );
            (0, H.wT)(!!s, "require promotion_operation_token"),
              (this.m_steamInterface = new E.D(j.TS.WEBAPI_BASE_URL, s));
            const a = (0, S.Tc)(
              "reservation_queue_position_messages",
              "application_config",
            );
            this.ValidateInputDefault(a) &&
              (a.map((r) => {
                const n = this.GetKey(r);
                this.m_mapProductPositionMsgList.has(n) ||
                  this.m_mapProductPositionMsgList.set(n, []),
                  this.m_mapProductPositionMsgList.get(n).push(r);
              }),
              this.m_mapProductPositionMsgList.forEach((r) =>
                this.SortList(r),
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
        I([O.oI], y.prototype, "AddProductID", 1),
          I([O.oI], y.prototype, "SetPositionMessages", 1),
          I([O.oI], y.prototype, "DeletePositionMessage", 1),
          I([O.oI], y.prototype, "ReloadReservationPositionMessages", 1);
        let W = y;
        function J() {
          const [i, s] = (0, l.useState)(() => W.Get().GetAllProducts());
          return (0, O.hL)(W.Get().GetProductListChangeCallback(), s), i;
        }
        function $(i) {
          const [s, a] = (0, l.useState)(() =>
            W.Get().GetPositionMessagingForProduct(i),
          );
          return (0, O.hL)(W.Get().GetPositionListChangeCallback(i), a), s;
        }
        function V() {
          const i = W.Get();
          return {
            fnAddProductID: i.AddProductID,
            fnSetPositionMessages: i.SetPositionMessages,
            fnDeletePositionMessage: i.DeletePositionMessage,
            fnReloadReservationPositionMessages:
              i.ReloadReservationPositionMessages,
          };
        }
        var p = t(77411),
          z = t(65285),
          c = t(58534);
        function d(i) {
          const [s, a] = (0, l.useState)(null),
            { fnAddProductID: r } = V();
          return (
            console.log("AddProductToReservationPositionMessage selected: ", s),
            (0, e.jsxs)("div", {
              children: [
                (0, e.jsx)(c.JU, { children: "Add Product SKU:" }),
                (0, e.jsx)("p", {
                  children:
                    "Select an item for which we want to communicate a reservation status.",
                }),
                (0, e.jsx)(M, { selected: s, setSelected: a }),
                (0, e.jsxs)(c.$n, {
                  disabled: !s,
                  onClick: () => {
                    r(s), a(null);
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
        function M(i) {
          const { selected: s, setSelected: a } = i,
            r = (0, l.useRef)(void 0),
            n = U(),
            o = J(),
            h = (0, l.useMemo)(
              () =>
                !n || !o
                  ? []
                  : n
                      .filter(
                        (m) =>
                          o.findIndex(
                            (G) =>
                              G.edistributor == m.edistributor &&
                              G.product_identifier == m.product_identifier,
                          ) == -1,
                      )
                      .map((m) => ({
                        value: m,
                        label: `${m.product_description} @ ${m.distributor} - product id: ${m.product_identifier}, part number ${m.part_number} `,
                      })),
              [n, o],
            );
          (0, l.useEffect)(() => {
            r?.current && r.current.clearValue();
          }, [o]);
          const u = h?.find(
            (m) =>
              s &&
              s.edistributor == m.value.edistributor &&
              s.product_identifier == m.value.product_identifier,
          );
          return (0, e.jsx)(p.Ay, {
            isSearchable: !0,
            ref: r,
            isMulti: !1,
            isClearable: !0,
            className: z.ItemSelect,
            options: h,
            value: u,
            onChange: (m) => {
              m && a(m.value);
            },
          });
        }
        var _ = t(73191),
          b = t(43308),
          R = t(59490),
          B = t(2801),
          q = t(88003),
          Z = t(12932),
          w = t(82734),
          K = t(18210),
          Me = t(95695),
          De = t(74107),
          ye = t(72609),
          ce = t(39905),
          de = t(95535),
          be = t(78603),
          Ee = t(12842),
          fe = t.n(Ee);
        function ne(i, s, a, r, n, o, h) {
          let u = null,
            m = !1,
            G;
          if (a == EHardwareDetailLoadState.k_LoadFailure || !n)
            u = SharedLocalization.Localize("#Sale_Reservations_BusyServer");
          else if (BShouldDisplayKomodoMessage(r, i))
            (m = !0),
              i === k_nSteamDeckAppid
                ? (u = LocalizeInlineReact(
                    "#Sale_Reservation_Komodo",
                    jsx("a", {
                      className: reservestyles.Link,
                      href: "https://steamdeck.komodo.jp",
                    }),
                  ))
                : i == k_nSteamMachineAppid
                  ? (u = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic_NoSk",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ))
                  : (u = LocalizeReact(
                      "#Sale_Reservation_Komodo_Generic",
                      s ??
                        SharedLocalization.Localize("#AppTypeLabel_hardware"),
                      jsx("a", {
                        className: reservestyles.Link,
                        href: "https://komodostation.com/",
                        children: "komodostation.com",
                      }),
                    ));
          else if (n && n.some((f) => !f.allow_purchase_in_country))
            (m = !0),
              (u = SharedLocalization.Localize(
                "#Sale_Reservation_NotAvailableCountry",
              ));
          else if (n && n.some((f) => f.account_restricted_from_purchasing)) {
            if (UserConfig.logged_in) {
              const f = n.some((T) => T.requires_reservation),
                A = n.find(
                  (T) =>
                    T.account_first_date_purchase_requirement &&
                    T.account_first_date_purchase_requirement > 0,
                )?.account_first_date_purchase_requirement;
              f
                ? (u = A
                    ? SharedLocalization.Localize(
                        "#Sale_Reservation_NotAvailale_PreDate",
                        LocalizeDateHumanReadable(A),
                      )
                    : SharedLocalization.Localize(
                        "#Sale_Reservation_NotAllowedAccount",
                      ))
                : (u = SharedLocalization.Localize(
                    "#Sale_Purchase_NotAllowedAccount",
                  )),
                (G = styles.UserTooNew),
                (u = jsx(ae, {
                  elReservationMessage: u,
                  strUrlLearnMoreLink: h,
                }));
            }
          } else
            n &&
              n.some(
                (f) =>
                  f.requires_reservation &&
                  f.appid_ownership_not_allowed_to_reserve &&
                  (f.not_allowed_to_reserved_because_already_owned ||
                    o.has(f.appid_ownership_not_allowed_to_reserve)),
              ) &&
              UserConfig.logged_in &&
              ((u = jsx(ae, {
                elReservationMessage: s
                  ? SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Specific",
                      s,
                    )
                  : SharedLocalization.Localize(
                      "#Sale_Reservation_CannotReserveDueToOwnership_Generic",
                    ),
                strUrlLearnMoreLink: h,
              })),
              (G = styles.AlreadyBought));
          return {
            elReservationSystemMessage: u,
            bHidePackageDisplay: m,
            messageDisplayClassNameOverride: G,
          };
        }
        function ae(i) {
          const { elReservationMessage: s, strUrlLearnMoreLink: a } = i;
          return a
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  s,
                  (0, e.jsx)(de.d$, {
                    url: a,
                    className: fe().Link,
                    children: ce.Z.Localize("#Button_Learn"),
                  }),
                ],
              })
            : s;
        }
        var ue = t(7582),
          ve = t(92825),
          ge = t.n(ve);
        function ie(i, s) {
          return i > s + 1 ? i - s : i + 12 - s;
        }
        function oe(i) {
          const {
            strToken: s,
            rtEstimatedNotifcationDate: a,
            strUrlLearnMoreLink: r,
            bInReservationQueue: n,
            bWaitlistIsActive: o,
            reservedHardwareDetail: h,
            bHideLabel: u,
          } = i;
          let m = ce.Z.Localize("#Sale_Reservation_Fallback_V2"),
            G = !1;
          if (
            (n
              ? (m = ce.Z.Localize("#Sale_Reservation_Fallback_user_V2"))
              : o &&
                h &&
                !h.position_is_waitlist &&
                ((m = De.F5.Localize(
                  "#Reservation_Join_Waitlist_Cancel_Reservation",
                )),
                (G = !0)),
            !s || !a || G)
          )
            return (0, e.jsx)("div", {
              className: ge().Ctn,
              children: (0, e.jsx)(ae, {
                elReservationMessage: m,
                strUrlLearnMoreLink: r,
              }),
            });
          const f = new Date(a * 1e3),
            A = f.getMonth() + 1;
          let T = "",
            Y = "",
            ee = "",
            Oe = "",
            te = s;
          switch (s) {
            case "#Sale_Reservation_Year":
            case "#Sale_Reservation_AfterYear":
              T = "" + f.getFullYear();
              break;
            case "#Sale_Reservation_MonthYear":
            case "#Sale_Reservation_AfterMonthYear":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (Y = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_TwoMonthRangeYear":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + ie(A, 1))),
                (Y = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (ee = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_ThreeMonthRangeYear":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + ie(A, 2))),
                (Y = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (ee = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_FourMonthRangeYear":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + ie(A, 3))),
                (Y = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (ee = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_Quarter_ThreeMonths":
              (te =
                "#Sale_Reservation_Quarter" + (Math.floor((A - 1) / 3) + 1)),
                (T = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_AfterQuarter_ThreeMonths":
              (te =
                "#Sale_Reservation_AfterQuarter" +
                (Math.floor((A - 1) / 3) + 1)),
                (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (Y = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_ByYear":
              T = "" + f.getFullYear();
              break;
            case "#Sale_Reservation_ByMonthYear":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (Y = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_BetweenNowAndLastDay":
              (T = (0, K.we)("#Sale_Reservation_MonthNoun_" + A)),
                (Y = "" + new Date(f.getFullYear(), f.getMonth(), 0).getDate()),
                (ee = "" + f.getFullYear());
              break;
            case "#Sale_Reservation_RelativeWeekly":
              {
                const Ie = ue.HD.GetTimeNowWithOverride(),
                  Pe = Math.floor((a - Ie) / (1440 * 60));
                Pe < 7 ||
                  (Pe < 28
                    ? ((te = "#Sale_Reservation_RelativeWeekly_Plural"),
                      (T = "" + Math.floor(Pe / 7 + 1)))
                    : ((te = "#Sale_Reservation_RelativeMonthly"),
                      (T = "" + Math.floor(Pe / 28 + 1))));
              }
              break;
            case "#Sale_Reservation_AvailabilityUnknown":
              te = void 0;
              break;
            default:
              te = "#Sale_Reservation_Fallback";
          }
          return (0, e.jsxs)("div", {
            className: ge().Ctn,
            children: [
              (0, e.jsx)("div", {
                children:
                  !u &&
                  !!te &&
                  (0, K.we)(
                    n
                      ? "#Sale_Reservation_YourExpectedDate"
                      : "#Sale_Reservation_ExpectedDate",
                  ),
              }),
              (0, e.jsx)(ae, {
                elReservationMessage: te ? (0, K.we)(te, T, Y, ee, Oe) : m,
                strUrlLearnMoreLink: r,
              }),
            ],
          });
        }
        var re = t(24642);
        function me(i) {
          const s = J();
          return !s || s.length == 0
            ? (0, e.jsx)("div", {
                children:
                  "No products with reservation position messages exists.",
              })
            : (0, e.jsx)("div", {
                children: s.map((a) =>
                  (0, e.jsx)(
                    _e,
                    { productID: a },
                    `${a.edistributor}_${a.product_identifier}`,
                  ),
                ),
              });
        }
        function Se(i) {
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(c.JU, { children: "instructions:" }),
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
        function je(i) {
          const s = J();
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(c.JU, { children: "Force update:" }),
              (0, e.jsx)("p", {
                children:
                  "By default, the server caches the list in memory and that list will refresh from SQL every hour. You can use the force button to refresh immediately across all of the servers.",
              }),
              (0, e.jsx)("p", {
                children:
                  "We recommend we force a refresh when all changes are done, otherwise, it will be somewhat random (within an hour) between each server picking up the updates -- so users might get different messages if they reload the page until all servers refresh.",
              }),
              (0, e.jsx)(c.$n, {
                onClick: (a) => (0, q.pg)((0, e.jsx)(se, {}), (0, w.uX)(a)),
                children: "Force Reload Definitions on Steam Servers",
              }),
            ],
          });
        }
        function _e(i) {
          const { productID: s } = i,
            a = F(s),
            r = a?.product_description + " " + a?.distributor,
            n = $(s);
          return a
            ? (0, e.jsxs)(Z.qx, {
                bStartMinimized: !1,
                title: r,
                tooltip: `distributor enum: ${a.edistributor}, part number: ${a.part_number}, product identifier: ${a.product_identifier}`,
                children: [
                  (0, e.jsx)(c.$n, {
                    onClick: (o) =>
                      (0, q.pg)((0, e.jsx)(he, { productID: s }), (0, w.uX)(o)),
                    children: "Add new start position",
                  }),
                  (0, e.jsxs)("table", {
                    className: z.ItemTable,
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
                        children: n.map((o) =>
                          (0, e.jsx)(
                            pe,
                            { positionMsg: o },
                            r + o.start_queue_position,
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
        function pe(i) {
          const { positionMsg: s } = i;
          return (0, e.jsxs)("tr", {
            children: [
              (0, e.jsx)("td", { children: (0, re.D)(s.start_queue_position) }),
              (0, e.jsx)("td", {
                children: (0, K.TW)(s.rtime_estimated_notification),
              }),
              (0, e.jsx)("td", {
                children: (0, e.jsx)(oe, {
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
                    children: (0, e.jsx)(R.p, { accountID: s.accountid }),
                  }),
                  (0, e.jsx)("br", {}),
                  "On: ",
                  (0, K.TW)(s.rtime_created),
                ],
              }),
              (0, e.jsxs)("td", {
                children: [
                  (0, e.jsx)(c.$n, {
                    onClick: (a) =>
                      (0, q.pg)(
                        (0, e.jsx)(he, {
                          productID: s,
                          existingPositionMsg: s,
                        }),
                        (0, w.uX)(a),
                      ),
                    children: "Update",
                  }),
                  (0, e.jsx)(c.$n, {
                    onClick: (a) =>
                      (0, q.pg)(
                        (0, e.jsx)(Re, { positionMsg: s }),
                        (0, w.uX)(a),
                      ),
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        }
        function he(i) {
          const { productID: s, existingPositionMsg: a, closeModal: r } = i,
            { fnSetPositionMessages: n } = V(),
            o = Math.floor(Date.now() / 1e3),
            [h, u] = (0, l.useState)(a?.start_queue_position || 0),
            [m, G] = (0, l.useState)(
              a?.rtime_estimated_notification || o + 1440 * 60,
            ),
            [f, A] = (0, l.useState)(
              a?.localization_token || "#Sale_Reservation_MonthYear",
            ),
            T = a ? "Update Queue Range" : "Create Queue Range",
            Y = (0, _.vs)();
          return Y.bLoading
            ? (0, e.jsx)(_.Hh, { state: Y, strDialogTitle: T, closeModal: r })
            : (0, e.jsx)(B.o0, {
                bDisableBackgroundDismiss: !0,
                strTitle: T,
                onCancel: r,
                onOK: () => {
                  Y.fnSetLoading(!0);
                  const ee = {
                    ...s,
                    start_queue_position: h,
                    rtime_estimated_notification: m,
                    localization_token: f,
                  };
                  n([ee]).then((Oe) => {
                    Oe
                      ? (Y.fnSetSuccess(!0),
                        Y.fnSetStrSuccess("Successfully created position"))
                      : (Y.fnSetSuccess(!1),
                        Y.fnSetStrError(
                          "Failed, please check console logs and/or try again",
                        ));
                  });
                },
                children: (0, e.jsxs)("div", {
                  className: z.NewEntryCtn,
                  children: [
                    (0, e.jsxs)("p", {
                      children: [
                        "When we get to accepting reservation number ",
                        (0, e.jsx)("i", { children: "n" }),
                        ", show those users a date they can anticipate to recieve an invite to purchase. If we are choosing a display that shows the day, please account for the date is being shown to each user in their local time.",
                      ],
                    }),
                    (0, e.jsx)(c.pd, {
                      type: "number",
                      min: "0",
                      value: h,
                      label: "Starting Queue Position",
                      onChange: (ee) =>
                        u(Number.parseInt(ee?.currentTarget?.value || "0")),
                    }),
                    (0, e.jsx)(b.K, {
                      bShowTimeZone: !0,
                      strDescription:
                        "Estimated Time Users will receive invite",
                      strDescToolTip:
                        "Everyone above this queue position until the next entry, we expect to have been invited by or on this date",
                      nEarliestTime: o,
                      fnGetTimeToUpdate: () => m,
                      fnSetTimeToUpdate: G,
                    }),
                    (0, e.jsx)("br", {}),
                    (0, e.jsx)(xe, {
                      strToken: f,
                      fnSetToken: A,
                      rtEstimateDate: m,
                    }),
                  ],
                }),
              });
        }
        function Re(i) {
          const { positionMsg: s, closeModal: a } = i,
            { fnDeletePositionMessage: r } = V(),
            n = `Delete Queue Position ${(0, re.D)(s.start_queue_position)}`,
            o = (0, _.vs)();
          return o.bLoading
            ? (0, e.jsx)(_.Hh, { state: o, strDialogTitle: n, closeModal: a })
            : (0, e.jsx)(B.o0, {
                strTitle: n,
                strDescription: "Are you sure, this action is no undo'able?",
                onCancel: a,
                onOK: () => {
                  o.fnSetLoading(!0),
                    r(s).then((h) => {
                      h
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
        function se(i) {
          const { closeModal: s } = i,
            { fnReloadReservationPositionMessages: a } = V(),
            [r, n] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              a().then(() => n(!0));
            }, [a]),
            (0, e.jsx)(B.o0, {
              bAlertDialog: !0,
              strTitle: "Reload Definition",
              strDescription: r
                ? "Reload sent to server! Now safe to close dialog"
                : "Reloading In Progress...",
              closeModal: s,
            })
          );
        }
        const Te = [
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
        function xe(i) {
          const { strToken: s, fnSetToken: a, rtEstimateDate: r } = i,
            n = (0, l.useMemo)(
              () =>
                Te.map((o) => ({
                  label: (0, e.jsx)(oe, {
                    strToken: o,
                    rtEstimatedNotifcationDate: r,
                    strUrlLearnMoreLink: void 0,
                    bInReservationQueue: !0,
                  }),
                  data: o,
                })),
              [r],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)(c.m, {
                strDropDownClassName: Me.DropDownScroll,
                label: "Date Format",
                rgOptions: n,
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
                    className: z.DatePreview,
                    children: [
                      (0, e.jsx)("div", {
                        children: (0, K.we)("#Sale_Reservation_ExpectedDate"),
                      }),
                      (0, e.jsx)(oe, {
                        strUrlLearnMoreLink: void 0,
                        rtEstimatedNotifcationDate: r,
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
        var Ae = t(36707),
          Le = t(45737),
          X = t.n(Le);
        function Ce(i) {
          return (0, e.jsxs)("div", {
            className: (0, Ae.A)(z.ctn, X().AdminPageCtn),
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
                        children: (0, e.jsx)(d, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(me, {}),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: X().RightCol,
                    children: [
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(Se, {}),
                      }),
                      (0, e.jsx)("div", {
                        className: X().SectionCtn,
                        children: (0, e.jsx)(je, {}),
                      }),
                      (0, e.jsxs)("div", {
                        className: X().SectionCtn,
                        children: [
                          (0, e.jsx)(c.JU, { children: "Useful Links:" }),
                          (0, e.jsx)("ul", {
                            children: (0, e.jsx)("li", {
                              children: (0, e.jsx)("a", {
                                href: `${j.TS.STATS_BASE_URL}steamdeck/reservations/`,
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
      88034: (D, N, t) => {
        "use strict";
        t.d(N, { Gw: () => U, Lk: () => F, ai: () => g, mm: () => S });
        var e = t(14947);
        const l = e.sH.box(void 0);
        function S() {
          return l.get();
        }
        function g(L) {
          (0, e.h5)(() => l.set(L));
        }
        function U() {
          const L = l.get();
          return L || Math.floor(Date.now() / 1e3);
        }
        function F() {
          const L = l.get();
          return L ? new Date(L * 1e3) : new Date();
        }
      },
      7582: (D, N, t) => {
        "use strict";
        t.d(N, { HD: () => C, P_: () => x, f1: () => O, sB: () => P });
        var e = t(19367),
          l = t.n(e),
          S = t(90626),
          g = t(88034),
          U = t(47689),
          F = t(77291);
        class L {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, g.mm)();
          }
          set nOverrideDateNow(v) {
            (0, g.ai)(v);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, g.Gw)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, g.Lk)();
          }
          BHasTimeOverride() {
            return !!(0, g.mm)();
          }
          ParseDevOverrides(v) {
            if (!v || v.length == 0) return;
            new URLSearchParams(v[0] == "?" ? v.substring(1) : v).has("t");
          }
        }
        const C = new L();
        (0, F.V)("g_EventCalendarDevFeatures", C);
        function x(k = 1) {
          const [v, I] = S.useState(() => Q()),
            y = (0, U.m)("useTimeNowWithOverride"),
            W = S.useCallback(() => {
              y.token.reason || I(Q());
            }, []);
          return (
            S.useEffect(() => {
              const J = 1e3 * k,
                $ = Date.now() % J,
                V = J - $,
                p = window.setTimeout(W, V);
              return () => {
                window.clearTimeout(p);
              };
            }, [v, k, W]),
            v
          );
        }
        const H = Math.floor(new Date().getTime() / 1e3);
        function Q() {
          const k = Math.floor(Date.now() / 1e3);
          return C.nOverrideDateNow ? C.nOverrideDateNow + (k - H) : k;
        }
        function P() {
          return C.nOverrideDateNow ?? H;
        }
        function O() {
          return S.useMemo(() => P(), []);
        }
        function j() {
          return React.useMemo(() => C.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      54407: (D, N, t) => {
        "use strict";
        t.d(N, { B3: () => $, CF: () => V, KM: () => v, KT: () => J });
        var e = t(41735),
          l = t.n(e),
          S = t(58632),
          g = t.n(S),
          U = t(90626),
          F = t(20194),
          L = t(75233),
          C = t(72604),
          x = t(76559),
          E = t(34592),
          H = t(3166),
          Q = t(35038),
          P = t(59514),
          O = t(68312),
          j = t(40497);
        const k = "nicknames";
        function v(p) {
          const z = (0, O.KV)(),
            { data: c, isLoading: d } = (0, F.I)({
              queryKey: [k],
              queryFn: async () => {
                const M = new Map();
                if (H.iA.logged_in) {
                  const _ = Q.w.Init(P.w_T),
                    R = (await P.xtC.GetNicknameList(z, _)).Body().toObject();
                  R?.nicknames &&
                    R.nicknames.length > 0 &&
                    R.nicknames.forEach((B) => {
                      M.set(B.accountid, B.nickname);
                    });
                }
                return M;
              },
            });
          return c ? c.get(p) : null;
        }
        async function I(p) {
          if (!p || p.length == 0) return [];
          const z =
            (0, H.yK)() == "community"
              ? H.TS.COMMUNITY_BASE_URL
              : H.TS.STORE_BASE_URL;
          if (p.length == 1) {
            const c = { accountid: p[0], origin: self.origin },
              d = await l().get(`${z}actions/ajaxgetavatarpersona`, {
                params: c,
              });
            if (
              !d ||
              d.status != 200 ||
              d.data?.success != C.R ||
              !d.data?.userinfo
            )
              throw `Load single avatar/persona failed ${((0, E.H))(d).strErrorMsg}`;
            return [d.data.userinfo];
          } else {
            const c = { accountids: p.join(","), origin: self.origin },
              d = await l().get(`${z}actions/ajaxgetmultiavatarpersona`, {
                params: c,
              });
            if (
              !d ||
              d.status != 200 ||
              d.data?.success != C.R ||
              !d.data?.userinfos
            )
              throw `Load single avatar/persona failed ${((0, E.H))(d).strErrorMsg}`;
            const M = new Map();
            return (
              d.data.userinfos.forEach((_) =>
                M.set(new x.b(_.steamid).GetAccountID(), _),
              ),
              p.map((_) => M.get(_))
            );
          }
        }
        const y = new (g())((p) => I(p), { cache: !1 }),
          W = "avatarandpersonas";
        function J(p) {
          const { data: z, isLoading: c } = (0, F.I)({
            queryKey: [W, p],
            queryFn: () => y.load(p),
          });
          return [z, c];
        }
        function $(p) {
          const z = (0, L.jE)(),
            { data: c, isLoading: d } = (0, F.I)({
              queryKey: [W, p],
              queryFn: async () => {
                const _ = await y.loadMany(p);
                return (
                  _.forEach((b) => {
                    const R = [W, new x.b(b.steamid).GetAccountID()];
                    z.setQueryData(R, b);
                  }),
                  _
                );
              },
              enabled: p?.length > 0,
            }),
            M = (0, U.useMemo)(() => {
              const _ = new Array();
              return (
                c?.forEach((b) => {
                  b instanceof Error || _.push(b);
                }),
                _
              );
            }, [c]);
          return d ? null : M;
        }
        function V(p) {
          return j.L.getQueryData([W, p]);
        }
      },
      43308: (D, N, t) => {
        "use strict";
        t.d(N, { K: () => I });
        var e = t(7850),
          l = t(90626),
          S = t(92298),
          g = t.n(S),
          U = t(44894),
          F = t(7582),
          L = t(95695),
          C = t.n(L),
          x = t(36707),
          E = t(18210),
          H = t(71421),
          Q = t(12916),
          P = t.n(Q),
          O = t(87937),
          j = t.n(O);
        const k = "hh:mm a",
          v = "HH:mm";
        function I(c) {
          const {
            nLatestTime: d,
            nEarliestTime: M,
            fnGetTimeToUpdate: _,
            onError: b,
            strAlsoShowTimeZone: R,
            disabled: B,
            bNoDefaultDate: q,
            className: Z,
            strDescToolTip: w,
            strDescription: K,
            bShowTimeZone: Me,
            strInvalidDateTimeLocalizedMsg: De,
            fnIsValidDateTime: ye,
            bWeekdaysOnly: ce,
            fnSetTimeToUpdate: de,
            bForce24HourFormat: be,
            bAllowClear: Ee,
          } = c;
          let fe = J() || be ? v : k;
          const ne = _(),
            [ae, ue] = l.useState(ne > 0 ? j()(ne * 1e3) : null),
            [ve, ge] = l.useState(0),
            [ie, oe] = l.useState(),
            [re, me] = l.useState(),
            Se = z(ie, re, De, ye, b),
            je = !b && Se;
          let _e;
          if (d && M && d == M && M > F.HD.GetTimeNowWithOverride()) {
            const n = j().unix(M);
            (_e = {
              hours: { max: n.hour(), min: n.hour(), step: 0 },
              minutes: { max: n.minute(), min: n.minute(), step: 0 },
              seconds: { max: n.seconds(), min: n.seconds(), step: 0 },
              milliseconds: { max: 0, min: 0, step: 0 },
            }),
              (fe = v);
          }
          let pe;
          !ne && M && !q && (pe = j().unix(M));
          const he = j().tz.guess(),
            Re = j().unix(ne).tz(he),
            se = !!R && he != R && j().unix(ne).tz(R),
            Te = (n) => {
              if (B) return;
              me(null);
              const o = _(),
                h = j().unix(o || F.HD.GetTimeNowWithOverride());
              (n = n.clone()),
                n.hour(h.hour()),
                n.minute(h.minute()),
                n.second(0),
                de(n.unix()),
                ue(n);
            },
            { fnOnInput: xe, fnOnInputBlur: Ae, fnOnChange: Le } = y($, Te, me),
            X = (n) => {
              if (B) return;
              oe(null);
              let o = _(),
                h = 0;
              if (!o)
                h =
                  j().unix(M).hour(0).second(0).minutes(0).unix() +
                  3600 * n.hour() +
                  60 * n.minutes();
              else {
                const u = j().unix(o);
                (n = n.clone()),
                  n.year(u.year()),
                  n.month(u.month()),
                  n.date(u.date()),
                  (h = n.unix());
              }
              de(h), ue(j().unix(h));
            },
            { fnOnInput: Ce, fnOnInputBlur: i, fnOnChange: s } = y(V, X, oe),
            a = () => {
              B || (de(0), ue(null), me(null), oe(null), ge((n) => n + 1));
            },
            r = Ee && !B && ne > 0;
          return (0, e.jsxs)("div", {
            className: (0, x.A)(P().EventTimeSection, Z),
            children: [
              (0, e.jsxs)("div", {
                className: (0, x.A)(P().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, e.jsx)(H.he, {
                    toolTipContent: w,
                    direction: "top",
                    children: !!K && (0, e.jsx)("span", { children: K }),
                  }),
                  je &&
                    (0, e.jsxs)("span", {
                      className: P().DateErrorCtn,
                      children: [(0, e.jsx)("img", { src: U.A }), je],
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: C().FlexRowContainer,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, x.A)(C().InputBorder, P().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        g(),
                        {
                          onChange: Le,
                          timeFormat: !1,
                          value: re ?? ae,
                          isValidDate: (n) => !B && p(M, d, ce, n),
                          initialValue: pe,
                          inputProps: {
                            placeholder: (0, E.we)(
                              "#DateTimePicker_Enter_Date",
                            ),
                            className: (0, x.A)(
                              P().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: B,
                            onChange: (n) => xe(n.currentTarget.value),
                            onBlur: (n) => Ae(n.currentTarget.value),
                          },
                        },
                        "date" + ve,
                      ),
                      !!se &&
                        (0, e.jsx)("div", {
                          className: P().PacificTimeHint,
                          children: se.format("L"),
                        }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, x.A)(C().InputBorder, P().TimeBlock),
                    children: [
                      (0, e.jsx)(
                        g(),
                        {
                          onChange: s,
                          dateFormat: !1,
                          timeFormat: fe,
                          timeConstraints: _e,
                          value: ie ?? ae,
                          inputProps: {
                            placeholder: (0, E.we)(
                              "#DateTimePicker_Enter_Time",
                            ),
                            className: (0, x.A)(
                              P().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: B,
                            onChange: (n) => Ce(n.currentTarget.value),
                            onBlur: (n) => i(n.currentTarget.value),
                          },
                        },
                        "time" + ve,
                      ),
                      !!se &&
                        (0, e.jsx)("div", {
                          className: P().PacificTimeHint,
                          children: se.format("LT"),
                        }),
                    ],
                  }),
                  Me &&
                    (0, e.jsxs)("div", {
                      children: [
                        (0, e.jsx)("div", {
                          className: P().TimeZone,
                          children: Re.zoneAbbr(),
                        }),
                        !!se &&
                          (0, e.jsx)("div", {
                            className: P().TimeZone,
                            children: se.zoneAbbr(),
                          }),
                      ],
                    }),
                  r &&
                    (0, e.jsx)("button", {
                      type: "button",
                      className: P().ClearButton,
                      onClick: a,
                      children: (0, E.we)("#Button_Clear"),
                    }),
                ],
              }),
              !!_e &&
                (0, e.jsx)("div", {
                  children: (0, E.we)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function y(c, d, M) {
          const [_, b] = l.useState(!1);
          return {
            fnOnInput: (Z) => {
              M(Z), b(!0);
            },
            fnOnInputBlur: (Z) => {
              if (_) {
                const w = c(Z);
                w.isValid() && d(w);
              }
              b(!1);
            },
            fnOnChange: (Z) => {
              if (!_)
                if (typeof Z == "string") {
                  const w = c(Z);
                  w.isValid() && d(w);
                } else d(Z);
            },
          };
        }
        function W() {
          const d = j()("2025-01-14").format("L").split(/[-/.]/),
            M = d.indexOf("14");
          return d.indexOf("01") < M;
        }
        function J() {
          return j()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function $(c) {
          return j()(c, W() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function V(c) {
          return j()(c, [k, v], !1);
        }
        function p(c, d, M, _) {
          const b = j().unix(c).hour(0).seconds(0).minute(0);
          let R = _.unix() >= b.unix();
          if (R && d && d >= c) {
            const B = j().unix(d).hour(23).minute(59).seconds(59);
            R = _.unix() <= B.unix();
          }
          return (
            R && M && (_.weekday() == 0 || _.weekday() == 6) && (R = !1), R
          );
        }
        function z(c, d, M, _, b) {
          const R = _ && _(),
            B = d && !$(d).isValid(),
            q = c && !V(c).isValid(),
            Z = q || B || typeof R == "string" || R === !1;
          let w = null;
          return (
            Z &&
              ((w = (0, E.we)(
                M || "#DateTimePicker_Fallback_Invalid_DateTime",
              )),
              q
                ? (w = (0, E.we)("#DateTimePicker_Time_CannotParse"))
                : B
                  ? (w = (0, E.we)("#DateTimePicker_Date_CannotParse"))
                  : typeof R == "string" && (w = R)),
            l.useEffect(() => {
              b && b(w);
            }, [w, b]),
            w
          );
        }
      },
      59490: (D, N, t) => {
        "use strict";
        t.d(N, { p: () => C });
        var e = t(7850),
          l = t(90626),
          S = t(76559),
          g = t(54407),
          U = t(15736),
          F = t.n(U),
          L = t(3166);
        function C(x) {
          const {
              accountID: E,
              bHideWhenNotAvailable: H,
              bHideName: Q,
              bLink: P = !0,
            } = x,
            [O] = (0, g.KT)(E),
            j = (0, g.KM)(E),
            k = l.useMemo(() => S.b.InitFromAccountID(E), [E]),
            v = `${L.TS.COMMUNITY_BASE_URL}profiles/${k.ConvertTo64BitString()}`,
            I = P ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: O
              ? (0, e.jsxs)(I, {
                  href: P ? v : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: U.SmallAvatar,
                      src: O.avatar_url,
                      "data-miniprofile": "s" + k.ConvertTo64BitString(),
                    }),
                    !Q &&
                      (0, e.jsx)("span", {
                        children: j
                          ? `${j} (${O.persona_name})`
                          : O.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !H && (0, e.jsx)("span", { children: E }),
                }),
          });
        }
      },
      12932: (D, N, t) => {
        "use strict";
        t.d(N, { AQ: () => O, pn: () => k, qx: () => j });
        var e = t(7850),
          l = t(58534),
          S = t(18210),
          g = t(36118),
          U = t(90626),
          F = t(36707),
          L = t(95695),
          C = t.n(L),
          x = t(25792),
          E = t(64734),
          H = t.n(E),
          Q = t(65946),
          P = t(11243);
        function O(v) {
          const {
              title: I,
              tooltip: y,
              getMinimized: W,
              toggleMinimized: J,
              className: $,
              children: V,
              elAdditionalButtons: p,
            } = v,
            z = (0, Q.q3)(() => W());
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: (0, F.A)(
                  $,
                  E.SectionTitleHeader,
                  E.required_title,
                  "SectionTitleHeader",
                ),
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, F.A)(
                      L.CollapsableSectionTitle,
                      "EventEditorTextTitle",
                    ),
                    children: [I, !!y && (0, e.jsx)(P.o, { tooltip: y })],
                  }),
                  (0, e.jsxs)("div", {
                    className: E.SectionTitleButtons,
                    children: [
                      p,
                      (0, e.jsx)(k, { bIsMinimized: z, fnToggleMinimize: J }),
                    ],
                  }),
                ],
              }),
              !z && (0, e.jsx)(x.tH, { children: V }),
            ],
          });
        }
        function j(v) {
          const [I, y] = U.useState(!!v.bStartMinimized);
          return (0, e.jsx)(O, {
            ...v,
            getMinimized: () => I,
            toggleMinimized: () => y(!I),
            children: v.children,
          });
        }
        function k(v) {
          const { bIsMinimized: I, fnToggleMinimize: y } = v,
            W = I ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
          return (0, e.jsx)(l.$n, {
            "data-tooltip-text": (0, S.we)(W),
            onClick: y,
            children: v.bIsMinimized
              ? (0, e.jsx)(g.hz4, {})
              : (0, e.jsx)(g.Xjb, {}),
          });
        }
      },
      77291: (D, N, t) => {
        "use strict";
        t.d(N, { V: () => e });
        function e(l, S) {
          typeof window > "u" || (window[l] = S);
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
      61738: (D, N, t) => {
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
        function l(g) {
          var U = S(g);
          return t(U);
        }
        function S(g) {
          if (!t.o(e, g)) {
            var U = new Error("Cannot find module '" + g + "'");
            throw ((U.code = "MODULE_NOT_FOUND"), U);
          }
          return e[g];
        }
        (l.keys = function () {
          return Object.keys(e);
        }),
          (l.resolve = S),
          (D.exports = l),
          (l.id = 61738);
      },
      44894: (D, N, t) => {
        "use strict";
        t.d(N, { A: () => e });
        const e =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
