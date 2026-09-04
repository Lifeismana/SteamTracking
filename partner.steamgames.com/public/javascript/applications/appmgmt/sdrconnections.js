/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [5027],
    {
      47758: (U, H, _) => {
        "use strict";
        _.r(H), _.d(H, { default: () => me });
        var e = _(7850),
          q = _(41735),
          $ = _.n(q),
          x = _(90626),
          B = _(36707),
          ee = _(72604),
          se = _(92757),
          b = _(58534),
          te = _(25792),
          ne = _(18210),
          ie = _(34592),
          Q = _(3166),
          n = _(97712),
          je = _.n(n),
          ae = _(85599),
          w = _(92264),
          le = _(84346);
        function j(t) {
          return (0, e.jsxs)("span", {
            className: (0, B.A)(n.GenericLabeledItem, t.className),
            children: [
              (0, e.jsx)("span", {
                className: n.CxnGenericDataLabel,
                children: t.label,
              }),
              (0, e.jsx)("span", {
                className: n.CxnGenericData,
                children: t.children,
              }),
            ],
          });
        }
        function W(t) {
          const s = t.host,
            i = s.type + ":" + s.id;
          let l = t.host_role == "peer" ? "Peer" : "Client",
            a = null;
          if (s.data_center)
            (l = "Gameserver"),
              (a = (0, e.jsxs)(x.Fragment, {
                children: [
                  (0, e.jsx)("span", { className: n.host_id, children: i }),
                  " in ",
                  (0, e.jsx)("span", {
                    className: n.GameServerDataCenter,
                    children: s.data_center,
                  }),
                ],
              }));
          else if (s.steam_persona) {
            const r = Q.TS.COMMUNITY_BASE_URL + "/profiles/" + s.id;
            a = (0, e.jsxs)(x.Fragment, {
              children: [
                (0, e.jsx)("span", {
                  className: n.host_id,
                  children: (0, e.jsx)("a", {
                    href: r,
                    children: s.steam_persona,
                  }),
                }),
                " (",
                (0, e.jsx)("span", { className: n.host_id, children: i }),
                ")",
              ],
            });
          } else
            a = (0, e.jsx)(x.Fragment, {
              children: (0, e.jsx)("span", {
                className: n.host_id,
                children: i,
              }),
            });
          return (0, e.jsxs)("div", {
            className: (0, B.A)(
              n.ConnectionClientInfo,
              s.data_center && n.HostIsGameserver,
            ),
            children: [
              (0, e.jsxs)("div", {
                className: n.HostIDAndConnectionCtr,
                children: [
                  (0, e.jsx)(j, {
                    className: n.HostIDInfo,
                    label: l,
                    children: a,
                  }),
                  s.connection_id != null &&
                    (0, e.jsx)(j, {
                      className: n.HostConnectionID,
                      label: "ConnectionID",
                      children: s.connection_id,
                    }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: n.ClientIPInfo,
                children: [
                  s.addr &&
                    (0, e.jsx)(j, {
                      className: "addr",
                      label: "IP",
                      children: s.addr,
                    }),
                  s.city_name &&
                    (0, e.jsx)(j, {
                      className: "city_name",
                      label: "City",
                      children: s.city_name,
                    }),
                  s.country_code &&
                    (0, e.jsx)(j, {
                      className: "country_code",
                      label: "Country",
                      children: s.country_code,
                    }),
                  s.as &&
                    (0, e.jsx)(j, {
                      className: "as",
                      label: "AS",
                      children: s.as,
                    }),
                ],
              }),
            ],
          });
        }
        function M(t, s) {
          return (
            s == null && (s = 0),
            t.toLocaleString((0, le.J)(), {
              minimumFractionDigits: s,
              maximumFractionDigits: s,
            })
          );
        }
        function J(t) {
          let s = 1e30,
            i = -1e30;
          if (t && t.ping_pctile)
            for (const l in t.ping_pctile) {
              const a = parseFloat(l);
              if (a >= 5 && a <= 95) {
                const r = t.ping_pctile[l];
                r < s && (s = r), r > i && (i = r);
              }
            }
          return [s, i];
        }
        function V(t) {
          let s = 1e30;
          if (t && t.quality_pctile)
            for (const i in t.quality_pctile) {
              const l = parseFloat(i);
              if (l >= 5 && l <= 95) {
                const a = t.quality_pctile[i];
                a < s && (s = a);
              }
            }
          return s;
        }
        function X(t, s, i) {
          const l = i > 0 ? s / i : 0,
            a = (100 * l).toFixed(1) + "%";
          return (0, e.jsxs)(
            "tr",
            {
              children: [
                (0, e.jsx)("th", { className: n.Label, children: t }),
                (0, e.jsx)("td", { className: n.Pct, children: a }),
                (0, e.jsxs)("td", {
                  children: [
                    (0, e.jsx)("span", {
                      className: n.Bar,
                      style: { width: l * 90 + 1 + "px" },
                    }),
                    (0, e.jsx)("span", { className: n.Num, children: M(s) }),
                  ],
                }),
              ],
            },
            t,
          );
        }
        function z(t, s) {
          if (!(s > 0)) return null;
          let i = [];
          for (let l = 0; l < t.length; ++l) i.push(X(t[l][0], t[l][1], s));
          return (0, e.jsx)("table", {
            className: n.Histogram,
            children: (0, e.jsx)("tbody", { children: i }),
          });
        }
        function Y(t) {
          let s = [];
          for (let i = 0; i < t.length; ++i) {
            const [l, a] = t[i];
            a != null &&
              s.push(
                (0, e.jsxs)(
                  "tr",
                  {
                    children: [
                      (0, e.jsxs)("th", {
                        className: n.NTile,
                        children: [l, "% <="],
                      }),
                      (0, e.jsx)("td", { className: n.Value, children: a }),
                    ],
                  },
                  l,
                ),
              );
          }
          return s.length
            ? (0, e.jsx)("table", {
                className: n.Distribution,
                children: (0, e.jsx)("tbody", { children: s }),
              })
            : null;
        }
        function L(t) {
          return t >= 0 ? t.toFixed(0) + "ms" : "???";
        }
        function re(t) {
          const s = function (a) {
              const r = a >= 0 ? M(a) : "?";
              return (0, e.jsx)("td", {
                className: n.NumPkts,
                children: r + " pkts",
              });
            },
            i = function (a) {
              const r = a >= 0 ? M(a) : "?";
              return (0, e.jsx)("td", { className: n.KB, children: r + "kb" });
            },
            l = function (a, r) {
              let f = "";
              return (
                r > 0 && a >= 0 && (f = ((a / r) * 100).toFixed(3) + "%"),
                (0, e.jsx)("td", { className: n.Pct, children: f })
              );
            };
          return (0, e.jsxs)("div", {
            className: (0, B.A)(n.FlowPacketCounts, n.FlowStatsSection),
            children: [
              (0, e.jsx)("div", {
                className: n.FlowSectionTitle,
                children: "Summary counters",
              }),
              (0, e.jsx)("table", {
                children: (0, e.jsxs)("tbody", {
                  children: [
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Sent" }),
                        s(t.sent_pkt),
                        i(t.sent_kb),
                        (0, e.jsx)("td", { className: n.Spacer }),
                        (0, e.jsx)("th", { children: "Dropped" }),
                        s(t.drop),
                        l(t.drop, t.recv_seq),
                      ],
                    }),
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Recv" }),
                        s(t.recv_pkt),
                        i(t.recv_kb),
                        (0, e.jsx)("td", { className: n.Spacer }),
                        (0, e.jsx)("th", { children: "Duplicate" }),
                        s(t.dup),
                        l(t.dup, t.recv_seq),
                      ],
                    }),
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Recv w/ seq" }),
                        s(t.recv_seq),
                        (0, e.jsx)("td", {}),
                        (0, e.jsx)("td", { className: n.Spacer }),
                        (0, e.jsx)("th", { children: "Out of order" }),
                        s(t.ooo),
                        l(t.ooo, t.recv_seq),
                      ],
                    }),
                    (0, e.jsxs)("tr", {
                      children: [
                        (0, e.jsx)("th", { children: "Summary" }),
                        (0, e.jsx)("td", {
                          colSpan: 2,
                          className: n.FlowQualityClass,
                          children: (0, e.jsx)("span", {
                            className: "flowqualityclass_" + t.quality_class,
                            children: t.quality_class,
                          }),
                        }),
                        (0, e.jsx)("td", { className: n.Spacer }),
                        (0, e.jsx)("th", { children: "Seq num lurch" }),
                        s(t.seqlurch),
                        l(t.seqlurch, t.recv_seq),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        function ce(t) {
          let s = null,
            i = null,
            l = 0;
          const a = t.quality_hist;
          if (a) {
            const m = [
              ["Perfect", a[100] || 0],
              [">99%", a[99] || 0],
              ["97-99%", a[97] || 0],
              ["95-97%", a[95] || 0],
              ["90-95%", a[90] || 0],
              ["75-90%", a[75] || 0],
              ["50-75%", a[50] || 0],
              ["<50%", a[1] || 0],
              ["Dead", a[0] || 0],
            ];
            for (let c = 0; c < m.length; ++c) l += m[c][1];
            s = z(m, l);
          }
          if (l <= 0) return null;
          const r = t.quality_pctile;
          if (r) {
            const m = (P) => (P == null ? void 0 : P + "%"),
              c = [
                [50, m(r[50])],
                [25, m(r[25])],
                [5, m(r[5])],
                [2, m(r[2])],
              ];
            i = Y(c);
          }
          const f = M(l) + " measurement intervals";
          return (0, e.jsxs)("div", {
            className: n.QualityBreakdown,
            children: [
              (0, e.jsx)("div", {
                className: n.FlowSectionTitle,
                children: "Quality interval breakdown",
              }),
              (0, e.jsx)("div", { className: n.numSamples, children: f }),
              s,
              i,
            ],
          });
        }
        function oe(t) {
          let s = null;
          const i = t.ping_hist;
          let l = 0;
          if (i) {
            const d = [
              [0, i[25] || 0],
              [25, i[50] || 0],
              [50, i[75] || 0],
              [75, i[100] || 0],
              [100, i[125] || 0],
              [125, i[150] || 0],
              [150, i[200] || 0],
              [200, i[300] || 0],
              [300, i.max || 0],
            ];
            let u,
              v = 0;
            for (let C = 0; C < d.length; ++C)
              d[C][1] > 0 &&
                (u == null && (u = C), (v = C + 1), (l += d[C][1]));
            if (l > 0) {
              (u = Math.max(0, u - 2)), (v = Math.min(d.length, v + 2));
              let C = [];
              for (let g = u; g < v; ++g) {
                let [N, p] = d[g];
                g == u && p == 0 && (N = 0);
                let h;
                g + 1 >= d.length || (g + 1 >= v && p == 0)
                  ? (h = L(N) + "+")
                  : (h = N + "-" + L(d[g + 1][0])),
                  C.push(X(h, p, l));
              }
              s = (0, e.jsx)("table", {
                className: n.Histogram,
                children: (0, e.jsx)("tbody", { children: C }),
              });
            }
          }
          let a = null;
          const r = t.ping_pctile;
          if (r) {
            const d = (v) => (v == null ? void 0 : L(v)),
              u = [
                [5, d(r[5])],
                [50, d(r[50])],
                [75, d(r[75])],
                [95, d(r[95])],
                [98, d(r[98])],
              ];
            a = Y(u);
          }
          let f = null,
            m = 0;
          const c = t.jitter_hist;
          if (c) {
            const d = [
              ["<1ms", c[0] || 0],
              ["1-2ms", c[1] || 0],
              ["2-5ms", c[2] || 0],
              ["5-10ms", c[5] || 0],
              ["10-20ms", c[10] || 0],
              ["20ms+", c[20] || 0],
            ];
            for (let u = 0; u < d.length; ++u) m += d[u][1];
            f = z(d, m);
          }
          if (!s && !a && !f) return null;
          const P = M(l) + " samples",
            F = M(m) + " samples";
          return (0, e.jsxs)("div", {
            className: n.PingBreakdown,
            children: [
              (0, e.jsxs)("div", {
                className: n.PingSection,
                children: [
                  (0, e.jsx)("div", {
                    className: n.FlowSectionTitle,
                    children: "Round Trip Latency",
                  }),
                  (0, e.jsx)("div", { className: n.NumSamples, children: P }),
                  s,
                  a,
                ],
              }),
              (0, e.jsxs)("div", {
                className: n.JitterSection,
                children: [
                  (0, e.jsx)("div", {
                    className: n.FlowSectionTitle,
                    children: "Jitter",
                  }),
                  (0, e.jsx)("div", { className: n.NumSamples, children: F }),
                  f,
                ],
              }),
            ],
          });
        }
        function A(t) {
          const s = t.flow;
          return (0, e.jsxs)("div", {
            className: n.FlowQualityStats,
            children: [
              (0, e.jsx)("div", {
                className: n.FlowQualityTitle,
                children: t.title,
              }),
              s
                ? (0, e.jsxs)(x.Fragment, { children: [re(s), ce(s), oe(s)] })
                : (0, e.jsx)("div", {
                    className: n.NoFlowDataAvailable,
                    children: "(No data available)",
                  }),
            ],
          });
        }
        function Z(t) {
          const s = t.sess,
            i = t.cxn;
          let l = null,
            a = null;
          if (s.client_front || s.router_front) {
            const r =
              i.kind == "ded"
                ? "Front side statistics reported by client"
                : "Front side statistics reported by player";
            l = (0, e.jsxs)("div", {
              className: n.QualityFlowPairCtr,
              children: [
                (0, e.jsx)(A, { title: r, flow: s.client_front }),
                (0, e.jsx)(A, {
                  title: "Front side statistics reported by relay",
                  flow: s.router_front,
                }),
              ],
            });
          }
          return (
            (s.router_back || s.gameserver_back) &&
              (a = (0, e.jsxs)("div", {
                className: n.QualityFlowPairCtr,
                children: [
                  (0, e.jsx)(A, {
                    title: "Back side statistics reported by relay",
                    flow: s.router_back,
                  }),
                  (0, e.jsx)(A, {
                    title: "Back side statistics reported by gameserver",
                    flow: s.gameserver_back,
                  }),
                ],
              })),
            (0, e.jsxs)("div", {
              className: n.RelaySessionCtr,
              children: [
                (0, e.jsxs)("div", {
                  className: n.RelayInfoCtr,
                  children: [
                    (0, e.jsx)(j, {
                      label: "Relay address",
                      children: s.client.relay_addr,
                    }),
                    (0, e.jsx)(j, {
                      label: "Relay POP",
                      children: s.client.relay_cluster,
                    }),
                    (0, e.jsx)(j, {
                      label: "Active",
                      children: (0, w.R2)(s.active_time),
                    }),
                  ],
                }),
                l,
                a,
              ],
            })
          );
        }
        function de(t) {
          if (!t || !t.length) return null;
          let s = t[0];
          for (let i = 1; i < t.length; ++i) {
            const l = t[i];
            (l.primary > s.primary ||
              (l.primary == s.primary && l.active_time > s.active_time)) &&
              (s = l);
          }
          return s;
        }
        function _e(t) {
          const s = t.cxn,
            i = s.client,
            l = s.peer,
            a = s.client_e2e,
            r = s.peer_e2e,
            [f, m] = x.useState(!1),
            c = de(s.client_sessions);
          let P = null,
            F = null,
            d = null,
            u = null,
            v = null,
            C = null,
            g = null,
            N = [];
          if (c) {
            const p =
              l &&
              c.client.connection_id == l.connection_id &&
              (!i || c.client.connection_id != i.connection_id);
            if (c.start_time && c.duration) {
              const h = new Date(c.start_time * 1e3),
                S = new Date((c.start_time + c.duration) * 1e3),
                y = ne.pf.GetPreferredLocales(),
                D = h.toLocaleString(y, {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                E = h.toLocaleString(y, {
                  hour12: !1,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                }),
                O = S.toLocaleString(y, {
                  hour12: !1,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  timeZoneName: "short",
                }),
                I = (0, w.R2)(c.duration);
              P = (0, e.jsxs)("span", {
                className: n.CxnTimeAndDuration,
                children: [
                  (0, e.jsxs)(j, {
                    label: "Time",
                    children: [D, " ", E, "--", O],
                  }),
                  (0, e.jsx)(j, { label: "Duration", children: I }),
                ],
              });
            }
            if (
              (c.close_code &&
                (F = (0, e.jsxs)(j, {
                  label: "Closed",
                  className: n.CxnCloseInfo,
                  children: [
                    c.close_type,
                    " ",
                    c.close_msg,
                    " (",
                    c.close_code,
                    ")",
                  ],
                })),
              c.experience_class)
            ) {
              const h = c.class_reason ? ` (${c.class_reason})` : "";
              d = (0, e.jsxs)(j, {
                label: "Experience",
                children: [
                  (0, e.jsx)("span", {
                    className: "experience_" + c.experience_class,
                    children: c.experience_class,
                  }),
                  h,
                ],
              });
            }
          }
          if (s.app) {
            let p = Object.keys(s.app);
            if (p.length > 0) {
              p.sort();
              let h = [];
              for (let S of p)
                h.push((0, e.jsx)(j, { label: S, children: s.app[S] }));
              u = (0, e.jsxs)("div", {
                className: n.AppFieldsCtr,
                children: [
                  (0, e.jsx)("span", {
                    className: n.AppFieldsTitle,
                    children: "Application fields:",
                  }),
                  h,
                ],
              });
            }
          }
          if (a || r) {
            const [p, h] = J(a),
              [S, y] = J(r),
              D = Math.min(p, S),
              E = Math.max(h, y);
            if (D <= E) {
              const o =
                D * 0.03 + 2 < E
                  ? `${D}--${E}ms`
                  : Math.floor((D + E) / 2 + 0.5) + "ms";
              v = (0, e.jsx)(j, { label: "Ping", children: o });
            }
            const O = V(a),
              I = V(r),
              k = Math.min(O, I);
            if (
              (k >= 0 &&
                k <= 100 &&
                (C = (0, e.jsx)(j, {
                  label: "Packet delivery",
                  children: `${k.toFixed(2)}%`,
                })),
              f)
            ) {
              const o = "End-to-end statistics reported by client",
                R =
                  s.kind == "ded"
                    ? "End-to-end statistics reported by gameserver"
                    : "End-to-end statistics reported by peer";
              g = (0, e.jsxs)("div", {
                className: n.QualityFlowPairCtr,
                children: [
                  (0, e.jsx)(A, { title: o, flow: a }),
                  (0, e.jsx)(A, { title: R, flow: r }),
                ],
              });
            }
          }
          if (f) {
            const p = function (y) {
                let D = [...y];
                return (
                  D.sort((E, O) => (O.active_time || 0) - (E.active_time || 0)),
                  D
                );
              },
              h = s.client_sessions && s.client_sessions.length > 0,
              S = s.peer_sessions && s.peer_sessions.length > 0;
            if (h) {
              s.kind == "p2p" || S
                ? N.push(
                    (0, e.jsx)("div", {
                      className: n.SessionsGroupHeader,
                      children: "Client relay sessions",
                    }),
                  )
                : N.push(
                    (0, e.jsx)("div", {
                      className: n.SessionsGroupHeader,
                      children: "Relay sessions",
                    }),
                  );
              for (const y of p(s.client_sessions))
                N.push((0, e.jsx)(Z, { cxn: s, sess: y, host_role: "client" }));
            }
            if (S) {
              N.push(
                (0, e.jsx)("div", {
                  className: n.SessionsGroupHeader,
                  children: "Peer relay sessions",
                }),
              );
              for (const y of p(s.peer_sessions))
                N.push((0, e.jsx)(Z, { cxn: s, sess: y, host_role: "peer" }));
            }
          }
          return (0, e.jsxs)(
            "div",
            {
              className: n.ConnectionCtr,
              children: [
                (0, e.jsxs)("div", {
                  className: n.ConnectionHeader,
                  children: [
                    (0, e.jsxs)("div", {
                      className: n.CxnSummary,
                      children: [P, v, C, d, u, F],
                    }),
                    (0, e.jsx)(b.Yh, {
                      className: n.ExpandDetailsCheckbox,
                      label: "Details",
                      checked: f,
                      onChange: m,
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  className: n.CxnPeersCtr,
                  children: [
                    (0, e.jsx)(W, { host: s.client, host_role: "client" }),
                    (0, e.jsx)(W, { host: s.peer, host_role: "peer" }),
                  ],
                }),
                g,
                N,
              ],
            },
            t.key,
          );
        }
        function me(t) {
          const s = (0, se.W6)(),
            i = t.appId,
            [l, a] = x.useState(!1),
            [r, f] = x.useState(""),
            [m, c] = x.useState(void 0),
            [P, F] = x.useState(""),
            [d, u] = x.useState(""),
            [v, C] = x.useState(""),
            [g, N] = x.useState(0),
            [p, h] = x.useState(""),
            [S, y] = x.useState("");
          x.useEffect(() => {
            let o = new URLSearchParams(s.location.search);
            const R = o.get("client_id") || "",
              K = o.get("peer_id") || "",
              ue = o.get("kind") || "",
              he = o.get("app_name1") || "",
              pe = o.get("app_value1") || "";
            if ((F(R), u(K), C(ue), h(he), y(pe), !o.toString() && g == 0))
              return;
            a(!0), f(""), i > 0 && o.set("appid", "" + i);
            const xe =
              Q.TS.PARTNER_BASE_URL + "sdr/ajaxsessionsearch?" + o.toString();
            (async () => {
              try {
                const T = await $().get(xe);
                T?.data?.success == ee.R
                  ? c(T.data.connections)
                  : (console.error(
                      "sdrsessionsearch: OnPerformSearch error code  " +
                        T?.data?.success +
                        " msg: " +
                        T?.data?.msg,
                    ),
                    f(T?.data?.success + " msg: " + T?.data?.msg));
              } catch (T) {
                const G = (0, ie.H)(T);
                console.error(
                  "sdrsessionsearch: OnPerformSearch " + G.strErrorMsg,
                  G,
                ),
                  f(G.strErrorMsg);
              }
              a(!1);
            })();
          }, [i, s.location, g]);
          const D = () => {
            let o = new URLSearchParams();
            P && o.set("client_id", P),
              d && o.set("peer_id", d),
              v && o.set("kind", v),
              p && S && (o.set("app_name1", p), o.set("app_value1", S));
            let R = { ...s.location };
            (R.search = o.toString()), R != s.location && s.push(R), N(g + 1);
          };
          let E = null;
          if (m !== void 0) {
            let o = [];
            for (const R of m) {
              const K =
                (R.client.id || "") + "-" + (R.client.connection_id || "");
              o.push((0, e.jsx)(_e, { cxn: R }, K));
            }
            E = (0, e.jsxs)("div", {
              className: n.SearchResultsCtr,
              children: [
                (0, e.jsxs)("div", {
                  className: n.SearchResultsTitle,
                  children: ["Found ", m.length, " connection(s)"],
                }),
                o,
              ],
            });
          }
          const O = v == "ded" ? "Gameserver" : "Peer",
            I = !1,
            k = x.useId();
          return (0, e.jsx)(te.tH, {
            children: (0, e.jsxs)("div", {
              className: n.SDRConnectionsAppCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: n.SDRConnectionsAppTitle,
                  children: [
                    (0, e.jsx)(e.Fragment, { children: "SDR Connections - " }),
                    t.appId > 0
                      ? (0, e.jsxs)(e.Fragment, { children: ["App ", t.appId] })
                      : (0, e.jsx)(e.Fragment, { children: "All apps" }),
                    (0, e.jsx)(e.Fragment, { children: " [BETA feature]" }),
                  ],
                }),
                r && (0, e.jsx)("div", { className: n.ErrMsg, children: r }),
                (0, e.jsxs)("div", {
                  className: n.SearchParamsCtr,
                  children: [
                    (0, e.jsxs)("div", {
                      className: (0, B.A)(
                        "DialogInputLabelGroup",
                        n.ConnectionKindGroup,
                      ),
                      children: [
                        (0, e.jsx)("div", {
                          id: k,
                          className: "DialogLabel",
                          children: "Connection kind",
                        }),
                        (0, e.jsxs)(b.zW, {
                          labelId: k,
                          value: v,
                          onChange: (o) => C(o),
                          children: [
                            (0, e.jsx)(b.a, { value: "", children: "Any" }),
                            (0, e.jsx)(b.a, {
                              value: "ded",
                              children: "Dedicated server",
                            }),
                            (0, e.jsx)(b.a, {
                              value: "p2p",
                              children: "Peer-to-Peer",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n.AppFieldPair,
                      children: [
                        (0, e.jsx)(b.pd, {
                          type: "text",
                          value: P,
                          disabled: I,
                          label: "Client",
                          onChange: (o) => F(o.currentTarget.value),
                        }),
                        (0, e.jsx)(b.pd, {
                          type: "text",
                          value: d,
                          disabled: I,
                          label: O,
                          onChange: (o) => u(o.currentTarget.value),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: n.AppFieldPair,
                      children: [
                        (0, e.jsx)(b.pd, {
                          type: "text",
                          value: p,
                          disabled: I,
                          label: "App field name 1",
                          onChange: (o) => h(o.currentTarget.value),
                        }),
                        (0, e.jsx)(b.pd, {
                          type: "text",
                          value: S,
                          disabled: I,
                          label: "App field value 1",
                          onChange: (o) => y(o.currentTarget.value),
                        }),
                      ],
                    }),
                    (0, e.jsx)("div", {
                      className: n.SubmitButtonCtn,
                      children: (0, e.jsx)(b.jn, {
                        onClick: D,
                        disabled: l,
                        children: "Search ",
                      }),
                    }),
                  ],
                }),
                l && (0, e.jsx)(ae.t, {}),
                E,
              ],
            }),
          });
        }
      },
      97712: (U) => {
        U.exports = {
          SDRConnectionsAppCtn: "_3Vqm_VeN4ssp-Plt0sq9f-",
          SDRConnectionsAppTitle: "_1VJcGIkGXCYh0gu5XTfN8F",
          SearchParamsCtr: "_1iOSDTa4VQiMZClYcvyBqJ",
          ConnectionKindGroup: "_2nfRCSDfwq2_xoi3dB77TJ",
          AppFieldPair: "JhdeVCLD5Nn-qer67zICK",
          SubmitButtonCtn: "_1m5EkOjBrsq1TFE-Qr82zi",
          ErrorMsg: "_15kPlJ6rH5w4pXTrO43FBC",
          SearchResultsCtr: "xl0L8ayTr8Vlmddp5nsh_",
          SearchResultsTitle: "_2zXcRle-2BH9RfK4FpK91K",
          ConnectionCtr: "_33Z20EyKgVCf_gw2o-dJuM",
          ConnectionHeader: "_2Ckxnlhp2zC2AmsUxs9hA4",
          CxnSummary: "ZLIDfPw1nsKeKLQOzyQE2",
          GenericLabeledItem: "_3owUM5gBDF_RV2qXJQkvk1",
          CxnPeersCtr: "_2TCo_v6vmEUfdrfY3CtWUY",
          ConnectionClientInfo: "_29nFZnfU1pSV_mKnl52iO0",
          host_id: "_2gxSU_PX9i6fvFKON5GOU3",
          GameServerDataCenter: "gwTmZ9cblfSJQBeTcVIru",
          HostIsGameserver: "_15b6hVfpkp4nmpIuuvLB0-",
          HostIDInfo: "vm4PN6HoaCpN0n0Lf8aEI",
          CxnGenericData: "ftpouOEdAxieFE50x58Ch",
          ExpandDetailsCheckbox: "Pf2peEv8e7v8NNd8Ox_O9",
          SessionsGroupHeader: "_2PkRiRECyXwIWMFEHjLMZN",
          QualityFlowPairCtr: "_2mXRDHNOp7hGPyN9lhRXBL",
          QualityFlowPairTitle: "_2_XypEUOV9pIm-K7QPo37N",
          FlowQualityStats: "_2CrTqNU0Ug9ThuaEAR2o-0",
          RelaySessionCtr: "_3Ny56nIakjtPWa2rTo_ECO",
          CxnCloseInfo: "_19mRGkz4pJX0woMGbfouEw",
          AppFieldsCtr: "_2T7Ca6X3HgAneoHL9JkiEs",
          AppFieldsTitle: "_3R8n1GZ3T0u2DTjcj7_1N6",
          FlowSectionTitle: "a0Wxor6TYEbMVH7dLhXwO",
          FlowQualityTitle: "_12x87YD7BQ6cDje5hLvbPv",
          NumPkts: "_3gym37cGwcIsZIB8agk3XK",
          KB: "_3i190Q1NF3QOOxp6WbDzRs",
          Pct: "_1fRCeZ2Vze8SX02_f_AK9d",
          FlowPacketCounts: "_2EYOyHKrd9qJ5LIRS6u6T3",
          Spacer: "_29tRzyxxRK94Vgoj1UYbw",
          CxnGenericDataLabel: "_1NnpcKcQDkW2SVMohIW_9R",
          Histogram: "_3SrHBXySCqPbEk7w5T6loT",
          Bar: "_32eimNgIwt059yIMsrVWMf",
          Distribution: "_3guObDjcedjI4d8GUIsFPK",
          NTile: "vT8kyilnaIPZYPGPJCiO8",
          PingBreakdown: "_2jSWoWwbKYvirg5AnaXkGy",
          PingSection: "RIiaSPbcGDEbBV9OkUtmG",
          JitterSection: "_5OEqow5h9FrG38R53xBoS",
          QualityBreakdown: "_1RMOO_UtP0Xm5MO4xO8UHP",
          ClientIPInfo: "_1IW5oJMNg9Ki_RFXk2SgqJ",
        };
      },
    },
  ]);
})();
