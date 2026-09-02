/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7257],
    {
      27257: (J, ce, m) => {
        "use strict";
        m.r(ce), m.d(ce, { default: () => ho });
        var e = m(7850),
          A = m(8561),
          pe = m(81240),
          V = m(19565),
          ue = m(23569),
          G = m(99931),
          O = m(93519),
          q = m(89984),
          H = m(79216);
        function ee(a) {
          return H.sM({ rules: [H.tG(/^>$/, a.nodes.quote)] });
        }
        var h = m(90626),
          te = m(43458),
          R = m(1917),
          _ = m(19316),
          W = m(2801),
          L = m(38348),
          k = m(36707),
          r = m(18210),
          C = m(54963),
          z = m(63226),
          $ = m(46457),
          me = m(52279);
        function ge(a, t, o, s = R.V2.left) {
          a.dispatch(
            a.state.tr.insert(
              a.state.selection.to,
              t.create({ videoID: o, align: s }),
            ),
          );
        }
        function Se(a) {
          const {
              videoID: t,
              align: o,
              editModel: s,
              selected: n,
              setAttrs: l,
              focusView: i,
            } = a,
            [d, c, u] = (0, C.uD)(),
            p = h.useCallback(() => {
              u(), i();
            }, [u, i]),
            x = h.useCallback(
              (v, M) => {
                l({ videoID: v, align: M }), p();
              },
              [l, p],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              d &&
                (0, e.jsx)(he, {
                  videoID: t,
                  align: o,
                  bEditing: !0,
                  hideModal: p,
                  onSave: x,
                }),
              (0, e.jsxs)(me.rK, {
                className: (0, k.A)(z.PreviewYoutubeEditor, n && z.Selected),
                children: [
                  (0, e.jsx)(me.h5, {
                    onEditClick: c,
                    onDeleteClick: a.removeNode,
                    bStrongShadows: !0,
                  }),
                  n && (0, e.jsx)("div", { className: z.SelectionOverlay }),
                  (0, e.jsx)($.Bm, {
                    event: s.GetEventModel(),
                    strTag: "previewyoutube",
                    args: { "": `${t};${o}` },
                    rawargs: `${t};${o}`,
                    showErrorInfo: !0,
                  }),
                ],
              }),
            ],
          });
        }
        function he(a) {
          const {
              videoID: t = "",
              align: o = "",
              bEditing: s = !1,
              hideModal: n,
              onSave: l,
            } = a,
            [i, d] = h.useState(o || R.V2.full),
            [c, u] = h.useState(
              t ? `https://www.youtube.com/watch?v=${t}` : "",
            ),
            [p, x] = h.useState(void 0),
            v = h.useCallback(() => {
              const { strVideoID: g } = (0, te.XU)(c);
              return (
                g ? l(g, i) : x((0, r.we)("#EventEditor_InsertYouTube_NoURL")),
                !1
              );
            }, [c, i, l]),
            M = h.useCallback((g) => {
              g && (g.element.focus(), g.element.select());
            }, []);
          return (0, e.jsx)(W.EN, {
            active: !0,
            children: (0, e.jsxs)(L._, {
              strTitle: (0, r.we)("#EventEditor_InsertYouTube"),
              closeModal: n,
              strOKText: s
                ? (0, r.we)("#Button_Save")
                : (0, r.we)("#EventEditor_InsertYouTube"),
              onOK: v,
              children: [
                p && (0, e.jsx)("div", { className: z.Error, children: p }),
                (0, e.jsx)(_.pd, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_URL"),
                  placeholder: (0, r.we)(
                    "#EventEditor_InsertYouTube_Placholder",
                  ),
                  value: c,
                  ref: M,
                  onChange: (g) => u(g.currentTarget.value),
                }),
                (0, e.jsxs)(_.o1, {
                  label: (0, r.we)("#EventEditor_InsertYouTube_Position"),
                  children: [
                    (0, e.jsx)(_.Od, {
                      checked: i == R.V2.left,
                      onChange: (g) => g && d(R.V2.left),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Left"),
                    }),
                    (0, e.jsx)(_.Od, {
                      checked: i == R.V2.right,
                      onChange: (g) => g && d(R.V2.right),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Right"),
                    }),
                    (0, e.jsx)(_.Od, {
                      checked: i == R.V2.full,
                      onChange: (g) => g && d(R.V2.full),
                      label: (0, r.we)("#EventEditor_InsertYouTube_Full"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var se = m(64868),
          B = m(55884),
          S = m(75372),
          U = m(65946),
          ie = m(49628),
          P = m(95557),
          E = m(56718),
          D = m(1880),
          y = m(69168),
          f = m(50660),
          ae = m(1397),
          I = m.n(ae),
          w = m(99412),
          K = m(71742),
          Y = m(50109),
          je = m(7582),
          Q = m(95695),
          ye = m(43308),
          re = m(41635),
          Ne = m(92264),
          ne = m(36174),
          _e = m(87937),
          tt = m(61819),
          ot = m(88942),
          st = m(3166),
          nt = m(41735),
          lt = m.n(nt),
          it = m(11243);
        function at(a) {
          const { hideModal: t, fnUpdateSession: o } = a,
            [s, n] = (0, h.useState)(() => Ee(!0, null)),
            [l, i] = (0, h.useState)(() => be(!0, null)),
            [d] = (0, U.q3)(() => [l.location_type]);
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_create_title"),
              onOK: () => o(s, l),
              closeModal: () => {
                i(be(!0, null)), n(Ee(!0, null)), t();
              },
              bOKDisabled: !d == null,
              children: (0, e.jsxs)("div", {
                className: I().DialogCtn,
                children: [
                  (0, e.jsx)(Be, { group: s, fnSetGroup: n }),
                  (0, e.jsx)(Ae, { session: l, fnSetSession: i }),
                ],
              }),
            }),
          });
        }
        function rt(a) {
          const { hideModal: t, groupInput: o, fnUpdateGroupSession: s } = a,
            [n, l] = (0, h.useState)(() => Ee(!1, o));
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#MeetSteam_edit_title"),
              onOK: () => {
                s(n), t();
              },
              onCancel: () => {
                l(Ee(!1, o)), t();
              },
              children: (0, e.jsx)("div", {
                className: I().DialogCtn,
                children: (0, e.jsx)(Be, { group: n, fnSetGroup: l }),
              }),
            }),
          });
        }
        function Ge(a) {
          const {
              bCreate: t,
              hideModal: o,
              sessionInput: s,
              fnUpdateSession: n,
            } = a,
            [l, i] = (0, h.useState)(() => be(t, s)),
            [d] = (0, U.q3)(() => [l.location_type]);
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                n(l), o();
              },
              onCancel: () => {
                i(be(t, s)), o();
              },
              bOKDisabled: !d,
              children: (0, e.jsx)("div", {
                className: I().DialogCtn,
                children: (0, e.jsx)(Ae, { session: l, fnSetSession: i }),
              }),
            }),
          });
        }
        function Be(a) {
          const { group: t, fnSetGroup: o } = a,
            s = (0, Y.E)();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, r.we)("#MeetSteam_edit_session_name"),
                value: r.NT.Get(t.localized_session_title, s),
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_session_title = r.NT.Set(
                    l.localized_session_title,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#MeetSteam_edit_session_desc"),
              }),
              (0, e.jsx)("textarea", {
                className: (0, k.A)(
                  "DialogTextInputBase",
                  I().EventDescriptionField,
                ),
                value: r.NT.Get(t.localized_session_description, s),
                rows: 5,
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_session_description = r.NT.Set(
                    l.localized_session_description,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                label: "Intended Audience",
                tooltip:
                  "A short descriptions for whom then event is designed for to help partners self select",
                value: r.NT.Get(t.localized_intended_audience, s),
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_intended_audience = r.NT.Set(
                    l.localized_intended_audience,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsxs)(_.JU, {
                children: [
                  "FAQ ",
                  (0, e.jsx)(it.o, {
                    tooltip:
                      "Optional FAQ section which appears in the pop-up display and hidden by default",
                  }),
                ],
              }),
              (0, e.jsx)("textarea", {
                className: (0, k.A)(
                  "DialogTextInputBase",
                  I().EventDescriptionField,
                ),
                value: r.NT.Get(t.localized_sesssion_faq, s),
                rows: 5,
                onChange: (n) => {
                  const l = { ...t };
                  (l.localized_sesssion_faq = r.NT.Set(
                    l.localized_sesssion_faq,
                    s,
                    n.currentTarget.value,
                  )),
                    o(l);
                },
              }),
              (0, e.jsx)(_.Yh, {
                checked: t.ask_registration_question,
                onChange: (n) => {
                  const l = { ...t };
                  (l.ask_registration_question = n), o(l);
                },
                label:
                  "Ask partner to tell us what they want to learn from the sessions",
              }),
              (0, e.jsx)(dt, { ...a }),
            ],
          });
        }
        function dt(a) {
          var t;
          const { group: o, fnSetGroup: s } = a,
            [n, l] = (0, h.useState)(
              ((t = o.group_visibility_tokens) == null ? void 0 : t.length) > 0,
            );
          return n
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    children:
                      "By default, all sessions are visibility to any partner wiht a list. We can limit visibility to users by adding tokens below. Multiple Meet Steam sections can be visible together if they share the same token. To make the tokens appears most friendly, we are limiting them to exactly 5 digits. Only one token can be set on the URL.",
                  }),
                  o.group_visibility_tokens.map((i, d) =>
                    (0, e.jsx)(
                      _.pd,
                      {
                        type: "number",
                        min: "10000",
                        max: "99999",
                        value: i || 1e4,
                        onChange: (c) => {
                          const u = { ...o };
                          (u.group_visibility_tokens[d] = Number.parseInt(
                            c.currentTarget.value,
                          )),
                            s(u);
                        },
                        label: "Visibility Token",
                      },
                      "token" + i + "_" + d,
                    ),
                  ),
                  (0, e.jsx)(_.$n, {
                    onClick: () => {
                      const i = { ...o };
                      (i.group_visibility_tokens = [
                        ...i.group_visibility_tokens,
                        1e4,
                      ]),
                        s(i);
                    },
                    children: "Add Token",
                  }),
                  o.group_visibility_tokens.length > 0 &&
                    (0, e.jsx)(_.$n, {
                      onClick: () => {
                        const i = { ...o };
                        (i.group_visibility_tokens =
                          i.group_visibility_tokens.slice(0, -1)),
                          s(i);
                      },
                      children: "Remove Last Token",
                    }),
                ],
              })
            : (0, e.jsx)(_.Yh, {
                checked: !1,
                onChange: l,
                label: "Change Visibility Options",
              });
        }
        function Ae(a) {
          const { session: t, fnSetSession: o } = a,
            [s, n, l, i, d, c] = (0, U.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.max_capacity,
              t.max_per_team,
              t.location_type,
              t.in_person_time_zone,
            ]),
            u = [];
          for (let M = 0; M < 4; ++M) u.push({ data: M, label: M });
          const p = Math.max(0, Math.floor((n - s) / 60)),
            x = Intl.DateTimeFormat().resolvedOptions().timeZone,
            v = d === "in_person" ? (c != null ? c : P.hh) : x;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Re, {
                startTime: t.rtime_start,
                location_type: d,
                fnUpdateLocationAndTZ: (M, g) =>
                  o({ ...t, location_type: M, in_person_time_zone: g }),
                in_person_time_zone: c,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(ye.K, {
                strDescription: (0, r.we)("#MeetSteam_edit_start"),
                nEarliestTime: 0,
                fnGetTimeToUpdate: () => s,
                fnSetTimeToUpdate: (M) =>
                  o({
                    ...t,
                    rtime_start: M,
                    rtime_end: M + ne.Kp.PerMinute * p,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(_.pd, {
                type: "number",
                min: 0,
                label: (0, r.we)("#MeetSteam_edit_duration"),
                onChange: (M) => {
                  const g = Number.parseInt(M.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * g });
                },
                value: p,
              }),
              (0, e.jsx)(Ve, {
                rtime_start: s,
                rtime_end: n,
                sDisplayTimeZone: v,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("br", {}),
              (0, e.jsxs)("div", {
                className: I().ParticipantRow,
                children: [
                  (0, e.jsx)(_.pd, {
                    type: "number",
                    value: l,
                    label: (0, r.we)("#MeetSteam_edit_max_capacity"),
                    min: 1,
                    onChange: (M) =>
                      o({
                        ...t,
                        max_capacity: Number.parseInt(M.currentTarget.value),
                      }),
                  }),
                  (0, e.jsx)(_.m, {
                    controlled: !0,
                    label: (0, r.we)("#MeetSteam_edit_guest_count"),
                    tooltip: (0, r.we)("#MeetSteam_edit_guest_count_ttip"),
                    rgOptions: u,
                    selectedOption: i,
                    onChange: (M) => o({ ...t, max_per_team: M.data }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ve(a) {
          const { rtime_start: t, rtime_end: o, sDisplayTimeZone: s } = a,
            n = _e.unix(t).tz(P.hh),
            l = _e.unix(t).tz(s),
            i = l.utcOffset() - n.utcOffset(),
            d = _e.unix(o).tz(P.hh),
            c = _e.unix(o).tz(s),
            u = c.utcOffset() - d.utcOffset();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                children: [
                  (0, r.we)("#MeetSteam_edit_displayed_start"),
                  ": ",
                  (0, Ne.P0)(l.unix() + i * 60, !1, l.format("z")),
                  " ",
                ],
              }),
              (0, e.jsxs)("div", {
                children: [
                  (0, r.we)("#MeetSteam_edit_displayed_end"),
                  ": ",
                  (0, Ne.P0)(c.unix() + u * 60, !1, c.format("z")),
                  " ",
                ],
              }),
            ],
          });
        }
        function Re(a) {
          const {
              startTime: t,
              location_type: o,
              fnUpdateLocationAndTZ: s,
              in_person_time_zone: n,
            } = a,
            l = { option: (x) => ({ ...x, color: "#444444" }) },
            i = ct(t),
            d = h.useMemo(
              () =>
                i.reduce((x, v) => x.set(v.name, v.friendly_name), new Map()),
              [i],
            ),
            c = (x) => {
              var v;
              return (v = d.get(x)) != null ? v : x;
            },
            u = h.useId(),
            p = h.useId();
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                id: u,
                className: Q.EventEditorTextTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_title"),
              }),
              (0, e.jsx)("div", {
                id: p,
                className: Q.EventEditorTextSubTitle,
                children: (0, r.we)("#MeetSteam_edit_date_display_desc"),
              }),
              (0, e.jsxs)(_.zW, {
                labelId: u,
                descriptionId: p,
                value: o,
                onChange: (x) => s(x, n),
                children: [
                  (0, e.jsx)(_.a, {
                    value: "in_person",
                    children: (0, r.we)(
                      "#MeetSteam_edit_date_display_in_person",
                    ),
                  }),
                  (0, e.jsx)(_.a, {
                    value: "virtual",
                    children: (0, r.we)("#MeetSteam_edit_date_display_virtual"),
                  }),
                ],
              }),
              o === "in_person" &&
                (0, e.jsx)(tt.Ay, {
                  styles: l,
                  isSearchable: !0,
                  isMulti: !1,
                  options: i.map((x) => ({
                    label: x.friendly_name,
                    value: x.name,
                  })),
                  defaultMenuIsOpen: !1,
                  value: n
                    ? { label: c(n), value: n }
                    : { label: c(P.hh), value: P.hh },
                  onChange: (x) => s(o, x.value),
                }),
            ],
          });
        }
        function ct(a) {
          const t = (0, ot.I)({
            queryKey: ["timezone", a],
            queryFn: async () => {
              const o = `${st.TS.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                s = { reference_time: a },
                n = await lt().get(o, { params: s });
              return n == null ? void 0 : n.data.timezones;
            },
          });
          return t.isSuccess ? t.data : [];
        }
        function Ee(a, t) {
          if (a) {
            const s = S.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_groups;
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((l) => l.group_id == n) >= 0);
            return {
              group_id: n,
              localized_session_title: (0, re.$Y)([], w.bP9, null),
              localized_session_description: (0, re.$Y)([], w.bP9, null),
              localized_sesssion_faq: (0, re.$Y)([], w.bP9, null),
              localized_intended_audience: (0, re.$Y)([], w.bP9, null),
              group_visibility_tokens: [],
              ask_registration_question: !1,
              sessions: [],
            };
          } else if (t)
            return {
              ...t,
              localized_session_description: [
                ...t.localized_session_description,
              ],
              localized_session_title: [...t.localized_session_title],
              localized_sesssion_faq: [...(t.localized_sesssion_faq || [])],
              localized_intended_audience: [
                ...(t.localized_intended_audience || []),
              ],
              group_visibility_tokens: [...(t.group_visibility_tokens || [])],
              ask_registration_question: t.ask_registration_question,
            };
          return (
            (0, K.wT)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null
          );
        }
        function be(a, t) {
          if (a) {
            const o = je.HD.GetTimeNowWithOverride(),
              n = S.mh.GetEditModel().GetEventModel()
                .jsondata.meet_steam_groups,
              l =
                n == null
                  ? void 0
                  : n.reduce((c, u) => c.concat(u.sessions), []);
            let i = 0;
            do i = Math.floor(1e4 + Math.random() * 9e4);
            while (l && l.findIndex((c) => c.id == i) >= 0);
            const d = Math.ceil(o / 3600) * 3600;
            return {
              id: i,
              rtime_start: d + ne.Kp.PerDay,
              rtime_end: d + ne.Kp.PerDay + ne.Kp.PerHour,
              max_capacity: 100,
              max_per_team: 3,
            };
          } else if (t) return { ...t };
          return (
            (0, K.wT)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null
          );
        }
        function Te(a) {
          const t = S.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            for (let n = 0; n < s.sessions.length; ++n)
              if (s.sessions[n].id == a)
                return { groupIndex: o, sessionIndex: n };
          }
          return null;
        }
        function Le(a) {
          const t = S.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_groups.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_groups[o];
            if (s.group_id == a) return { group: s, groupIndex: o };
          }
          return null;
        }
        function ze(a) {
          const t = S.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.meet_steam_schedules.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.meet_steam_schedules[o];
            if (s.schedule_id == a) return { schedule: s, scheduleIndex: o };
          }
          return null;
        }
        var fe = m(36118),
          oe = m(21438);
        function ut(a, t, o) {
          a.dispatch(
            a.state.tr.insert(a.state.selection.to, t.create({ group_id: o })),
          );
        }
        function mt(a) {
          var t;
          const { focusView: o, removeNode: s, group_id: n } = a,
            l = (0, oe.LU)(),
            i = (0, U.q3)(() => {
              var j;
              return (j = l.GetEventModel().jsondata.meet_steam_groups) == null
                ? void 0
                : j.find((b) => b.group_id == n);
            }),
            [d, c, u] = (0, C.uD)(),
            p = h.useCallback(() => {
              o(), u();
            }, [o, u]),
            [x, v, M] = (0, C.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return !i || l.GetClanAccountID() != (0, ie.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam session group",
              })
            : (0, e.jsxs)("div", {
                className: I().EditorCtn,
                children: [
                  (0, e.jsx)(pt, { groupData: i, focusView: o }),
                  (0, e.jsxs)("div", {
                    className: I().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: c,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: v,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                      ((t = i.group_visibility_tokens) == null
                        ? void 0
                        : t.length) > 0 &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Limited visibility to those with the appropriate URLs",
                          children: (0, e.jsx)(fe.WLA, {}),
                        }),
                      !!i.ask_registration_question &&
                        (0, e.jsx)(f.ff, {
                          onClick: () => {},
                          tooltip:
                            "Will ask partner to provides questions for us for this session.",
                          children: (0, e.jsx)(fe.vfN, {}),
                        }),
                    ],
                  }),
                  !!d &&
                    (0, e.jsx)(rt, {
                      hideModal: p,
                      groupInput: i,
                      fnUpdateGroupSession: (j) => {
                        const { groupIndex: b } = Le(j.group_id),
                          N = S.mh.GetEditModel();
                        (N.GetEventModel().jsondata.meet_steam_groups[b] = j),
                          N.SetDirty(B.IQ.description);
                      },
                    }),
                  !!x &&
                    (0, e.jsx)(y.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { groupIndex: j } = Le(i.group_id),
                            b = S.mh.GetEditModel(),
                            N = [
                              ...b.GetEventModel().jsondata.meet_steam_groups,
                            ];
                          N.splice(j, 1),
                            (b.GetEventModel().jsondata.meet_steam_groups = N),
                            b.SetDirty(B.IQ.description),
                            s();
                        },
                        closeModal: g,
                      }),
                    }),
                ],
              });
        }
        function pt(a) {
          const { groupData: t, focusView: o } = a,
            s = (0, U.q3)(() => t.sessions || []),
            [n, l, i] = (0, C.uD)(),
            d = h.useCallback(() => {
              o(), i();
            }, [o, i]);
          return t
            ? (0, e.jsxs)(P.jr, {
                groupData: t,
                children: [
                  s.map((c, u) =>
                    (0, e.jsx)(
                      ht,
                      {
                        focusView: o,
                        sessionID: c.id,
                        bShowOR: u + 1 < s.length,
                      },
                      "timecol_" + t.group_id + "_" + c.id,
                    ),
                  ),
                  (0, e.jsx)(f.ff, {
                    className: I().AddNew,
                    onClick: l,
                    tooltip: (0, r.we)("#MeetSteam_add"),
                    children: (0, e.jsx)(E.OMN, {}),
                  }),
                  n &&
                    (0, e.jsx)(Ge, {
                      bCreate: !0,
                      hideModal: d,
                      fnUpdateSession: (c) => {
                        const u = S.mh.GetEditModel(),
                          p = [...t.sessions, c];
                        p.sort((x, v) => x.rtime_start - v.rtime_start),
                          (t.sessions = p),
                          u.SetDirty(B.IQ.description);
                      },
                    }),
                ],
              })
            : null;
        }
        function ht(a) {
          const { sessionID: t, bShowOR: o, focusView: s } = a,
            [n, l] = (0, C.OP)(),
            i = (0, U.q3)(() => {
              const { groupIndex: j, sessionIndex: b } = Te(t);
              return S.mh.GetEditModel().GetEventModel().jsondata
                .meet_steam_groups[j].sessions[b];
            }),
            [d, c, u] = (0, C.uD)(),
            p = h.useCallback(() => {
              s(), u();
            }, [s, u]),
            [x, v, M] = (0, C.uD)(),
            g = h.useCallback(() => {
              s(), M();
            }, [s, M]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)("div", {
                className: I().Column,
                ...l,
                children: [
                  (0, e.jsx)(P.Tn, { sessionData: i }),
                  !!n &&
                    (0, e.jsxs)("div", {
                      className: I().controls,
                      children: [
                        (0, e.jsx)(f.ff, {
                          onClick: c,
                          tooltip: (0, r.we)("#Button_Edit"),
                          children: (0, e.jsx)(E.ffu, {}),
                        }),
                        (0, e.jsx)(f.ff, {
                          onClick: v,
                          tooltip: (0, r.we)("#Button_Delete"),
                          children: (0, e.jsx)(E.sED, {}),
                        }),
                      ],
                    }),
                  !!d &&
                    (0, e.jsx)(Ge, {
                      bCreate: !1,
                      hideModal: p,
                      sessionInput: i,
                      fnUpdateSession: (j) => {
                        const b = S.mh.GetEditModel(),
                          { groupIndex: N, sessionIndex: Z } = Te(t),
                          le = [
                            ...b.GetEventModel().jsondata.meet_steam_groups[N]
                              .sessions,
                          ];
                        (le[Z] = j),
                          le.sort((ke, jo) => ke.rtime_start - jo.rtime_start),
                          (b.GetEventModel().jsondata.meet_steam_groups[
                            N
                          ].sessions = le),
                          b.SetDirty(B.IQ.description);
                      },
                    }),
                  !!x &&
                    (0, e.jsx)(y.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const j = S.mh.GetEditModel(),
                            { groupIndex: b, sessionIndex: N } = Te(t),
                            Z = [
                              ...j.GetEventModel().jsondata.meet_steam_groups[b]
                                .sessions,
                            ];
                          Z.splice(N, 1),
                            Z.sort((le, ke) => le.rtime_start - ke.rtime_start),
                            (j.GetEventModel().jsondata.meet_steam_groups[
                              b
                            ].sessions = Z),
                            j.SetDirty(B.IQ.description);
                        },
                        closeModal: g,
                      }),
                    }),
                ],
              }),
              o && (0, e.jsx)(P.w3, {}),
            ],
          });
        }
        var de = m(73723),
          F = m(38539),
          _o = m(81973),
          ft = m(35184);
        function vt(a, t, o, s, n) {
          const l = () => o.createChecked(null, n.createChecked()),
            i = () => s.createChecked(null, n.createChecked());
          return a.createChecked(null, [
            t.createChecked(null, [l(), l()]),
            t.createChecked(null, [i(), i()]),
          ]);
        }
        function xt(a) {
          const { schema: t } = a,
            {
              table: o,
              table_row: s,
              table_header: n,
              table_cell: l,
              paragraph: i,
            } = t.nodes,
            d = h.useCallback(
              (c, u, p) =>
                F.aH(c)
                  ? !1
                  : (u && u(c.tr.insert(c.selection.to, vt(o, s, n, l, i))),
                    !0),
              [o, s, n, l, i],
            );
          return o
            ? (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_InsertTable"),
                command: d,
                children: (0, e.jsx)(E._Q2, {}),
              })
            : null;
        }
        function Mt(a) {
          const { schema: t, className: o } = a,
            { callbacks: s, view: n } = (0, f.wU)(),
            [l, i] = h.useState(() => !!t.nodes.table && F.aH(n.state));
          return (
            (0, C.hL)(
              s,
              h.useCallback(
                (d) => i(!!t.nodes.table && F.aH(d.state)),
                [t.nodes.table],
              ),
            ),
            (0, e.jsx)(ft.R, {
              visible: l,
              msAnimationDuration: 100,
              children: (0, e.jsx)(f.Ez, {
                className: o,
                children: (0, e.jsx)(gt, { schema: t }),
              }),
            })
          );
        }
        function gt(a) {
          const { schema: t } = a;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowBefore"),
                command: F.JD,
                children: (0, e.jsx)(E.BPi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddRowAfter"),
                command: F.gC,
                children: (0, e.jsx)(E.fG_, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteRow"),
                command: F.aR,
                children: (0, e.jsx)(E.XW_, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnBefore"),
                command: F.RC,
                children: (0, e.jsx)(E.l26, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_AddColumnAfter"),
                command: F.GU,
                children: (0, e.jsx)(E.ur3, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_DeleteColumn"),
                command: F.gR,
                children: (0, e.jsx)(E.dyV, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderRow"),
                command: F.uC,
                children: (0, e.jsx)(E.mLi, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderColumn"),
                command: F.xV,
                children: (0, e.jsx)(E.sXN, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_HeaderCell"),
                command: F._G,
                children: (0, e.jsx)(E.Maz, {}),
              }),
              (0, e.jsx)(f.XQ, {}),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_MergeCells"),
                command: F.w7,
                children: (0, e.jsx)(E.rnq, {}),
              }),
              (0, e.jsx)(f.cQ, {
                tooltip: (0, r.we)("#FormattingToolbar_Tables_SplitCells"),
                command: F.L0,
                children: (0, e.jsx)(E.vB9, {}),
              }),
              !1,
            ],
          });
        }
        function Eo(a) {
          const { schema: t } = a,
            { table: o } = t.nodes,
            { callbacks: s, view: n } = useToolbarContext(),
            [l, i] = React.useState(() =>
              IsInNodeWithAttribute(n.state, o, TableAttr.NoBorder),
            ),
            [d, c] = React.useState(() =>
              IsInNodeWithAttribute(n.state, o, TableAttr.EqualCells),
            ),
            u = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.NoBorder),
              [o],
            ),
            p = React.useMemo(
              () => ToggleNodeBoolAttributeCommand(o, TableAttr.EqualCells),
              [o],
            );
          return (
            useCallbackList(
              s,
              React.useCallback(
                (x) => {
                  i(IsInNodeWithAttribute(x.state, o, TableAttr.NoBorder)),
                    c(IsInNodeWithAttribute(x.state, o, TableAttr.EqualCells));
                },
                [o],
              ),
            ),
            jsxs(Fragment, {
              children: [
                jsx(Gap, {}),
                jsx(CommandButton, {
                  tooltip: "Toggle No Borders",
                  command: u,
                  toggled: l,
                  children: "brd",
                }),
                jsx(CommandButton, {
                  tooltip: "Toggle Equal Cells",
                  command: p,
                  toggled: d,
                  children: "eqc",
                }),
              ],
            })
          );
        }
        var Pe = m(44483),
          jt = m(14535),
          _t = m(28516),
          Ie = m.n(_t);
        function Et(a, t, o) {
          a.dispatch(
            a.state.tr.insert(
              a.state.selection.to,
              t.create({ schedule_id: o }),
            ),
          );
        }
        function Fe(a, t) {
          if (a) {
            const s = S.mh.GetEditModel().GetEventModel()
              .jsondata.meet_steam_schedules;
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((i) => i.schedule_id == n) >= 0);
            return { schedule_id: n, session_breaks: [] };
          } else if (t) return { ...t };
          return (
            (0, K.wT)(
              !1,
              "HelperCreateOrCloneMeetSteamSchedule Expect Create or previous model",
            ),
            null
          );
        }
        function Ke(a) {
          const { hideModal: t, fnUpdateSession: o, inputScheduleModel: s } = a,
            n = (0, je.f1)(),
            l = (0, oe.LU)(),
            [i, d] = (0, h.useState)(() => Fe(!s, s)),
            [c, u, p] = (0, U.q3)(() => [
              i.location_type,
              i.in_person_time_zone,
              l.GetEventModel().jsondata.meet_steam_groups || [],
            ]),
            x = (0, h.useMemo)(() => {
              const v = p.reduce((M, g) => M.concat(g.sessions), []);
              return v.length == 0
                ? n
                : Math.min(...v.map((M) => M.rtime_start));
            }, [p, n]);
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: s
                ? "Update Meet Steam Schedule"
                : "Create Meet Steam Schedule View",
              onOK: () => o(i),
              closeModal: () => {
                d(Fe(!s, s)), t();
              },
              children: (0, e.jsxs)("div", {
                className: Ie().DialogCtn,
                children: [
                  (0, e.jsx)(Re, {
                    startTime: l.GetEventStartTime(),
                    location_type: c,
                    in_person_time_zone: u,
                    fnUpdateLocationAndTZ: (v, M) =>
                      d({ ...i, location_type: v, in_person_time_zone: M }),
                  }),
                  (0, e.jsx)(bt, {
                    inputScheduleModel: i,
                    fnUpdateSession: (v) => d(v),
                    rtBreakStartingTime: x,
                  }),
                ],
              }),
            }),
          });
        }
        function bt(a) {
          const {
              fnUpdateSession: t,
              inputScheduleModel: o,
              rtBreakStartingTime: s,
            } = a,
            [n, l] = (0, U.q3)(() => [
              o.session_breaks || [],
              o.in_person_time_zone || P.hh,
            ]),
            i = (0, h.useCallback)(
              (d, c) => {
                const u = { ...o };
                (u.session_breaks = u.session_breaks
                  ? [...u.session_breaks]
                  : []),
                  c < u.session_breaks.length
                    ? (u.session_breaks[c] = d)
                    : u.session_breaks.push(d),
                  t(u);
              },
              [t, o],
            );
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsx)("div", { children: "Scheduled Breaks" }),
              n
                .sort((d, c) => c.rtime_start - d.rtime_start)
                .map((d, c) =>
                  (0, e.jsx)(
                    Dt,
                    {
                      sDisplayTimeZone: l,
                      index: c,
                      breakSession: d,
                      fnOnUpdate: (u) => i(u, c),
                    },
                    "breakedit" + d.break_id,
                  ),
                ),
              (0, e.jsx)(_.$n, {
                onClick: () => {
                  var d;
                  const c = o.session_breaks ? [...o.session_breaks] : [];
                  let u = Math.floor(1 + Math.random() * 1e5);
                  for (; c.findIndex((p) => p.break_id == u) >= 0; )
                    u = Math.floor(1 + Math.random() * 1e5);
                  i(
                    {
                      break_id: u,
                      localized_break_description: (0, re.$Y)([], w.bP9, null),
                      rtime_start: s,
                      rtime_end: s + ne.Kp.PerHour,
                    },
                    ((d = o.session_breaks) == null ? void 0 : d.length) || 0,
                  );
                },
                children: "+ Add Break",
              }),
            ],
          });
        }
        function Dt(a) {
          const {
              breakSession: t,
              fnOnUpdate: o,
              index: s,
              sDisplayTimeZone: n,
            } = a,
            l = (0, Y.E)(),
            [i, d, c, u] = (0, U.q3)(() => [
              t.rtime_start,
              t.rtime_end,
              t.localized_break_description[l] || "",
              Math.max(0, Math.floor((t.rtime_end - t.rtime_start) / 60)),
            ]);
          return (0, e.jsxs)("div", {
            children: [
              (0, e.jsxs)("div", { children: ["Break # ", s + 1] }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(ye.K, {
                strDescription: "Break Start Time",
                nEarliestTime: 0,
                fnGetTimeToUpdate: () => i,
                fnSetTimeToUpdate: (p) =>
                  o({
                    ...t,
                    rtime_start: p,
                    rtime_end: p + ne.Kp.PerMinute * u,
                  }),
                fnIsValidDateTime: () => !0,
                bShowTimeZone: !0,
              }),
              (0, e.jsx)("br", {}),
              (0, e.jsx)(_.pd, {
                type: "number",
                min: 0,
                label: "Break duration in minutes",
                onChange: (p) => {
                  const x = Number.parseInt(p.currentTarget.value);
                  o({ ...t, rtime_end: t.rtime_start + ne.Kp.PerMinute * x });
                },
                value: u,
              }),
              (0, e.jsx)(_.pd, {
                type: "text",
                label: "Break Description",
                value: c,
                onChange: (p) => {
                  const x = { ...t };
                  (x.localized_break_description[l] = p.currentTarget.value),
                    o(x);
                },
              }),
              (0, e.jsx)(Ve, {
                rtime_start: i,
                rtime_end: d,
                sDisplayTimeZone: n,
              }),
            ],
          });
        }
        function Ct(a) {
          const { focusView: t, removeNode: o, schedule_id: s } = a,
            n = (0, oe.LU)(),
            l = (0, U.q3)(() => {
              var g;
              return (g = n.GetEventModel().jsondata.meet_steam_schedules) ==
                null
                ? void 0
                : g.find((j) => j.schedule_id == s);
            }),
            [i, d, c] = (0, C.uD)(),
            u = h.useCallback(() => {
              t(), c();
            }, [t, c]),
            [p, x, v] = (0, C.uD)(),
            M = h.useCallback(() => {
              t(), v();
            }, [t, v]);
          return !l || n.GetClanAccountID() != (0, ie.H)()
            ? (0, e.jsx)("div", {
                children: "Error: Cannot edit meet steam schedule view",
              })
            : (0, e.jsxs)("div", {
                className: Ie().EditorCtn,
                children: [
                  (0, e.jsx)(P.fs, {
                    eventModel: n.GetEventModel(),
                    scheduleData: l,
                  }),
                  (0, e.jsxs)("div", {
                    className: Ie().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                    ],
                  }),
                  !!i &&
                    (0, e.jsx)(Ke, {
                      hideModal: u,
                      inputScheduleModel: l,
                      fnUpdateSession: (g) => {
                        const { scheduleIndex: j } = ze(g.schedule_id);
                        (n.GetEventModel().jsondata.meet_steam_schedules[j] =
                          g),
                          n.SetDirty(B.IQ.description);
                      },
                    }),
                  !!p &&
                    (0, e.jsx)(y.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { scheduleIndex: g } = ze(l.schedule_id),
                            j = S.mh.GetEditModel(),
                            b = [
                              ...j.GetEventModel().jsondata
                                .meet_steam_schedules,
                            ];
                          b.splice(g, 1),
                            (j.GetEventModel().jsondata.meet_steam_schedules =
                              b),
                            j.SetDirty(B.IQ.description),
                            o();
                        },
                        closeModal: M,
                      }),
                    }),
                ],
              });
        }
        var St = m(16346),
          yt = m(38655),
          Ye = m(58483),
          De = m(76842),
          Tt = m(14947);
        function Pt(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            [n, l] = h.useState(!1),
            i = h.useCallback(
              (c, u) => {
                s.dispatch(
                  s.state.tr.insert(
                    s.state.selection.to,
                    t.nodes.emoticon.create(null, t.text(c)),
                  ),
                ),
                  u || s.focus();
              },
              [s, t],
            ),
            d = h.useCallback(
              (c) => {
                l(!0);
                const u = (0, St.lX)((0, e.jsx)(It, { OnSelected: i }), c, {
                  bOverlapHorizontal: !0,
                });
                (0, Tt.z7)(
                  () => !u.visible,
                  () => l(!1),
                );
              },
              [i],
            );
          return (0, e.jsx)(f.ff, {
            tooltip: "#Editor_Emoticon",
            onClick: d,
            toggled: n,
            children: (0, e.jsx)(fe.jZW, {}),
          });
        }
        function It(a) {
          const t = (0, Ye.LJ)();
          return (
            (0, De.k3)(t),
            (0, e.jsx)(yt.iY, { emoticonStore: t, OnSelected: a.OnSelected })
          );
        }
        var Ut = m(98609),
          T = m(40852),
          wt = m(813),
          Ot = m(63287),
          X = m.n(Ot),
          kt = m(5471),
          Nt = m(70377),
          Gt = m(36343),
          He = m(50974);
        function Bt(a) {
          const { hideModal: t, fnUpdateSession: o, clanAccountID: s } = a,
            [n, l] = (0, h.useState)(() => Ce(!0, null));
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Create_title"),
              onOK: () => o(n),
              closeModal: () => {
                l(Ce(!0, null)), t();
              },
              children: (0, e.jsx)("div", {
                className: X().DialogCtn,
                children: (0, e.jsx)(Qe, {
                  clanAccountID: s,
                  userPollDef: n,
                  fnSetDef: l,
                }),
              }),
            }),
          });
        }
        function At(a) {
          const {
              hideModal: t,
              userPollDef: o,
              clanAccountID: s,
              fnUpdateUserPollDef: n,
            } = a,
            [l, i] = (0, h.useState)(() => Ce(!1, o));
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Edit_title"),
              onOK: () => {
                n(l);
              },
              onCancel: () => {
                i(Ce(!1, o));
              },
              closeModal: t,
              children: (0, e.jsx)("div", {
                className: X().DialogCtn,
                children: (0, e.jsx)(Qe, {
                  userPollDef: l,
                  clanAccountID: s,
                  fnSetDef: i,
                }),
              }),
            }),
          });
        }
        function We(a) {
          switch (a) {
            default:
            case T.$t.k_EPollResult_NotVisible:
              return (0, r.we)("#UserPolls_Visibility_None");
            case T.$t.k_EPollResult_Visible_After_End:
              return (0, r.we)("#UserPolls_Visibility_End");
            case T.$t.k_EPollResult_Visible_After_Vote:
              return (0, r.we)("#UserPolls_Visibility_Voter");
            case T.$t.k_EPollResult_Visible_After_Vote_Or_End:
              return (0, r.we)("#UserPolls_Visibility_Voter_or_End");
            case T.$t.k_EPollResult_Visible_On_Demand:
              return (0, r.we)("#UserPolls_Visibility_OnDemand");
          }
        }
        function Qe(a) {
          const { userPollDef: t, fnSetDef: o } = a,
            s = (0, Y.E)(),
            [n] = (0, U.q3)(() => [t.results_visibility_settings]),
            l = Object.values(T.$t).map((i) => ({ data: i, label: We(i) }));
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.pd, {
                type: "text",
                label: (0, r.we)("#UserPolls_Description"),
                value: r.NT.Get(t.localized_poll_description, s),
                onChange: (i) => {
                  const d = { ...t };
                  (d.localized_poll_description = r.NT.Set(
                    d.localized_poll_description,
                    s,
                    i.currentTarget.value,
                  )),
                    o(d);
                },
              }),
              (0, e.jsx)(Lt, { ...a }),
              (0, e.jsx)(Rt, { ...a }),
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#UserPolls_Visibility"),
              }),
              (0, e.jsx)("div", {
                className: X().PollArea,
                children: (0, e.jsx)(_.m, {
                  strDropDownClassName: Q.DropDownScroll,
                  rgOptions: l,
                  selectedOption: n,
                  onChange: (i) => {
                    i.data != t.results_visibility_settings &&
                      o({ ...t, results_visibility_settings: i.data });
                  },
                  bDisableMouseOverlay: !0,
                  contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                }),
              }),
              (0, e.jsx)(Vt, { ...a }),
            ],
          });
        }
        function Vt(a) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = a,
            n = (0, oe.LU)(),
            l = (0, T.rR)(n.GetClanSteamID()),
            [i] = (0, U.q3)(() => [o.user_poll_background]),
            d = (0, h.useCallback)(
              (c, u, p, x, v) => {
                (0, K.wT)(
                  p != null && p >= w.Bhc && p < w.bP9,
                  "Unexpected value for elang: " + p,
                ),
                  (0, K.wT)(
                    v === "user_poll_background",
                    "Unexpected artwork type " + v,
                  );
                const M = (0, Nt.G)(c, u);
                M.image && s({ ...o, user_poll_background: M.image });
              },
              [s, o],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, {
                children: (0, r.we)("#UserPolls_BackgroundImage"),
              }),
              (0, e.jsxs)("div", {
                className: X().PollArea,
                children: [
                  (0, e.jsx)("p", {
                    children: (0, r.we)("#UserPolls_BackgroundImage_desc"),
                  }),
                  (0, e.jsx)(kt.a, {
                    rgRealmList: n.GetIncludedRealmList(),
                    rgSupportArtwork: T.YX,
                    strUploadAjaxURL: l,
                    fnOnUploadSuccess: d,
                    elOverrideDragAndDropText: (0, r.we)(
                      "#Template_Section_MediaUpdate_Static_Dnd",
                    ),
                    bTwoPhaseUpload: !0,
                    bDirectTempStorageUpload: !0,
                  }),
                  !!i && (0, e.jsx)("img", { src: (0, Gt.F)(t, i) }),
                ],
              }),
            ],
          });
        }
        function ve(a) {
          switch (a) {
            case T.BY.k_EPollVoter_AnyUser:
              return (0, r.we)("#UserPolls_Voters_Anyone");
            case T.BY.k_EPollVoter_UserGameInLibrary:
              return (0, r.we)("#UserPolls_Voters_Owners");
            case T.BY.k_EPollVoter_MinPlayTime:
              return (0, r.we)("#UserPolls_Voters_Players");
            case T.BY.k_EPollVoter_MemberOfGroup:
              return (0, r.we)("#UserPolls_Voters_Members");
          }
        }
        function Rt(a) {
          const { clanAccountID: t, userPollDef: o, fnSetDef: s } = a,
            [n, l] = (0, wt.TB)(t),
            [i, d] = (0, U.q3)(() => [
              o.voter_min_playtime_seconds,
              o.voter_eligibility,
            ]),
            c = (0, h.useMemo)(() => {
              const u = [
                {
                  label: ve(T.BY.k_EPollVoter_AnyUser),
                  data: T.BY.k_EPollVoter_AnyUser,
                },
              ];
              return (
                l && l.is_ogg && t != He.II
                  ? (u.push({
                      label: ve(T.BY.k_EPollVoter_UserGameInLibrary),
                      data: T.BY.k_EPollVoter_UserGameInLibrary,
                    }),
                    u.push({
                      label: ve(T.BY.k_EPollVoter_MinPlayTime),
                      data: T.BY.k_EPollVoter_MinPlayTime,
                    }))
                  : l &&
                    (!l.is_ogg || t == He.II) &&
                    u.push({
                      label: ve(T.BY.k_EPollVoter_MemberOfGroup),
                      data: T.BY.k_EPollVoter_MemberOfGroup,
                    }),
                u
              );
            }, [t, l]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, { children: (0, r.we)("#UserPolls_Voters") }),
              (0, e.jsxs)("div", {
                className: X().PollArea,
                children: [
                  (0, e.jsx)(_.m, {
                    strDropDownClassName: Q.DropDownScroll,
                    rgOptions: c,
                    selectedOption: d,
                    onChange: (u) => {
                      if (u.data != o.voter_eligibility) {
                        let p = { ...o, voter_eligibility: u.data };
                        u.data == T.BY.k_EPollVoter_MinPlayTime &&
                          (p.voter_min_playtime_seconds = 5 * we),
                          s(p);
                      }
                    },
                    bDisableMouseOverlay: !0,
                    contextMenuPositionOptions: { bDisableMouseOverlay: !0 },
                  }),
                  d == T.BY.k_EPollVoter_MinPlayTime &&
                    (0, e.jsx)("div", {
                      className: X().OptionInset,
                      children: (0, e.jsx)(_.pd, {
                        type: "number",
                        label: (0, r.we)("#UserPolls_MinPlayTime"),
                        value: i / we,
                        min: 5,
                        onChange: (u) => {
                          var p, x;
                          const M =
                            ((x = Number.parseInt(
                              (p = u == null ? void 0 : u.currentTarget) == null
                                ? void 0
                                : p.value,
                            )) != null
                              ? x
                              : 5) * we;
                          o.voter_min_playtime_seconds != M &&
                            s({ ...o, voter_min_playtime_seconds: M });
                        },
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function Lt(a) {
          const { userPollDef: t, fnSetDef: o } = a,
            [s, n] = (0, U.q3)(() => [
              t.poll_end_time,
              t.poll_end_days_since_start,
            ]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(_.JU, { children: (0, r.we)("#UserPolls_Starts") }),
              (0, e.jsxs)("div", {
                className: X().PollArea,
                children: [
                  (0, e.jsxs)("div", {
                    className: (0, k.A)(Q.FlexRowContainer, Q.RadioOption),
                    children: [
                      (0, e.jsx)("input", {
                        type: "radio",
                        name: "StartDateRadio",
                        id: "UserPollDialog_Days",
                        checked: !!n,
                        onChange: () => {
                          t.poll_end_days_since_start ||
                            o({
                              ...t,
                              poll_end_time: void 0,
                              poll_end_days_since_start: Ue * xe,
                            });
                        },
                      }),
                      (0, e.jsx)("label", {
                        htmlFor: "UserPollDialog_Days",
                        children: (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_In_Days"),
                        }),
                      }),
                    ],
                  }),
                  !!n &&
                    (0, e.jsx)("div", {
                      className: X().OptionInset,
                      children: (0, e.jsx)(_.pd, {
                        type: "number",
                        value: n / xe,
                        min: 1,
                        onChange: (l) => {
                          var i, d;
                          const u =
                            ((d = Number.parseInt(
                              (i = l == null ? void 0 : l.currentTarget) == null
                                ? void 0
                                : i.value,
                            )) != null
                              ? d
                              : 1) * xe;
                          t.poll_end_days_since_start != u &&
                            o({
                              ...t,
                              poll_end_time: void 0,
                              poll_end_days_since_start: u,
                            });
                        },
                      }),
                    }),
                  (0, e.jsxs)("div", {
                    className: (0, k.A)(Q.FlexRowContainer, Q.RadioOption),
                    children: [
                      (0, e.jsx)("input", {
                        type: "radio",
                        name: "StartDateRadio",
                        id: "UserPollDialog_SpecificTime",
                        checked: !!s,
                        onChange: () => {
                          t.poll_end_time ||
                            o({
                              ...t,
                              poll_end_days_since_start: void 0,
                              poll_end_time:
                                Math.floor(Date.now() / 1e3) + Ue * xe,
                            });
                        },
                      }),
                      (0, e.jsx)("label", {
                        htmlFor: "UserPollDialog_SpecificTime",
                        children: (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_Specific"),
                        }),
                      }),
                    ],
                  }),
                  !!s &&
                    (0, e.jsxs)("div", {
                      className: (0, k.A)(X().OptionInset, Q.FlexRowContainer),
                      children: [
                        (0, e.jsx)(ye.K, {
                          strDescription: "",
                          nEarliestTime: Math.floor(Date.now() / 1e3) + 3600,
                          fnGetTimeToUpdate: () => s,
                          fnSetTimeToUpdate: (l) => {
                            t.poll_end_time != l &&
                              o({
                                ...t,
                                poll_end_days_since_start: void 0,
                                poll_end_time: l,
                              });
                          },
                          fnIsValidDateTime: () =>
                            s > Math.floor(Date.now() / 1e3) + 3600,
                        }),
                        (0, e.jsx)("span", {
                          children: (0, r.we)("#UserPolls_EndTime_Zone"),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        const Ue = 7,
          xe = 1440 * 60,
          we = 60;
        function Ce(a, t) {
          if (a) {
            const s =
              S.mh.GetEditModel().GetEventModel().jsondata.user_polls || [];
            let n = 0;
            do n = Math.floor(1e4 + Math.random() * 9e4);
            while (s && s.findIndex((l) => l.poll_id == n) >= 0);
            return {
              poll_id: n,
              options: [],
              localized_poll_description: (0, re.$Y)([], w.bP9, null),
              poll_end_days_since_start: Ue * xe,
              poll_end_time: void 0,
              results_visibility_settings: T.$t.k_EPollResult_Visible_On_Demand,
              voter_eligibility: T.BY.k_EPollVoter_AnyUser,
            };
          } else if (t)
            return {
              ...t,
              localized_poll_description: [...t.localized_poll_description],
            };
          return (
            (0, K.wT)(
              !1,
              "HelperCreateOrCloneUserPollModel Expect Create or previous model",
            ),
            null
          );
        }
        function $e(a) {
          const {
              bCreate: t,
              hideModal: o,
              pollOptionsInput: s,
              fnUpdatePollOption: n,
            } = a,
            [l, i] = (0, h.useState)(() => Xe(t, s)),
            d = (0, Y.E)();
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsx)(D.o0, {
              strTitle: (0, r.we)(
                t ? "#UserPolls_Option_Create" : "#UserPolls_Option_Edit",
              ),
              onOK: () => {
                n(l), o();
              },
              onCancel: () => {
                i(Xe(t, s)), o();
              },
              children: (0, e.jsx)("div", {
                className: X().DialogCtn,
                children: (0, e.jsx)(_.pd, {
                  type: "text",
                  label: (0, r.we)("#UserPolls_Option_Title"),
                  value: r.NT.Get(l.localized_option, d),
                  onChange: (c) => {
                    const u = { ...l };
                    (u.localized_option = [...u.localized_option]),
                      (u.localized_option = r.NT.Set(
                        u.localized_option,
                        d,
                        c.currentTarget.value,
                      )),
                      i(u);
                  },
                }),
              }),
            }),
          });
        }
        function Xe(a, t) {
          if (a) {
            const s = S.mh.GetEditModel().GetEventModel().jsondata.user_polls,
              n =
                s == null
                  ? void 0
                  : s.reduce((i, d) => i.concat(d.options), []);
            let l = 0;
            do l = Math.floor(1e4 + Math.random() * 9e4);
            while (n && n.findIndex((i) => i.option_id == l) >= 0);
            return {
              option_id: l,
              localized_option: (0, re.$Y)([], w.bP9, null),
            };
          } else if (t) return { ...t };
          return (
            (0, K.wT)(
              !1,
              "HelperCreateOrClonePollOptionModel Expect Create or previous model",
            ),
            null
          );
        }
        var Ze = m(29757),
          zt = m(56330),
          Je = m(31909);
        function Oe(a) {
          const t = S.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            for (let n = 0; n < s.options.length; ++n)
              if (s.options[n].option_id == a)
                return { pollIndex: o, optionIndex: n };
          }
          return null;
        }
        function qe(a) {
          const t = S.mh.GetEditModel();
          for (
            let o = 0;
            o < t.GetEventModel().jsondata.user_polls.length;
            ++o
          ) {
            const s = t.GetEventModel().jsondata.user_polls[o];
            if (s.poll_id == a) return { userPollDef: s, pollIndex: o };
          }
          return null;
        }
        var Ft = m(91512);
        function Kt(a, t, o) {
          a.dispatch(
            a.state.tr.insert(a.state.selection.to, t.create({ poll_id: o })),
          );
        }
        function Yt(a) {
          const { focusView: t, removeNode: o, poll_id: s } = a,
            n = (0, oe.LU)(),
            l = (0, U.q3)(() => {
              var g;
              return (g = n.GetEventModel().jsondata.user_polls) == null
                ? void 0
                : g.find((j) => j.poll_id == s);
            }),
            [i, d, c] = (0, C.uD)(),
            u = h.useCallback(() => {
              t(), c();
            }, [t, c]),
            [p, x, v] = (0, C.uD)(),
            M = h.useCallback(() => {
              t(), v();
            }, [t, v]);
          return l
            ? (0, e.jsxs)("div", {
                className: I().EditorCtn,
                children: [
                  (0, e.jsx)(Ht, { userPollDef: l, focusView: t }),
                  (0, e.jsxs)("div", {
                    className: I().controls,
                    children: [
                      (0, e.jsx)(f.ff, {
                        onClick: d,
                        tooltip: (0, r.we)("#Button_Edit"),
                        children: (0, e.jsx)(E.ffu, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: x,
                        tooltip: (0, r.we)("#Button_Delete"),
                        children: (0, e.jsx)(E.sED, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: We(l.results_visibility_settings),
                        children: (0, e.jsx)(fe.WLA, {}),
                      }),
                      (0, e.jsx)(f.ff, {
                        onClick: () => {},
                        tooltip: ve(l.voter_eligibility),
                        children: (0, e.jsx)(fe.JpU, {}),
                      }),
                    ],
                  }),
                  !!i &&
                    (0, e.jsx)(At, {
                      hideModal: u,
                      userPollDef: l,
                      clanAccountID: n.GetClanAccountID(),
                      fnUpdateUserPollDef: (g) => {
                        const { pollIndex: j } = qe(g.poll_id),
                          b = S.mh.GetEditModel();
                        (b.GetEventModel().jsondata.user_polls[j] = g),
                          b.SetDirty(B.IQ.description);
                      },
                    }),
                  !!p &&
                    (0, e.jsx)(y.E, {
                      active: !0,
                      children: (0, e.jsx)(D.o0, {
                        strTitle: (0, r.we)("#Button_Delete"),
                        strDescription: (0, r.we)("#Dialog_AreYouSure"),
                        onOK: () => {
                          const { pollIndex: g } = qe(l.poll_id),
                            j = S.mh.GetEditModel(),
                            b = [...j.GetEventModel().jsondata.user_polls];
                          b.splice(g, 1),
                            (j.GetEventModel().jsondata.user_polls = b),
                            j.SetDirty(B.IQ.description),
                            o();
                        },
                        closeModal: M,
                      }),
                    }),
                ],
              })
            : (0, e.jsx)("div", {
                className: zt.ErrorStylesWithIcon,
                children: (0, r.we)("#UserPolls_Editor_FailToFindModel", s),
              });
        }
        function Ht(a) {
          const { userPollDef: t, focusView: o } = a,
            [s, n] = (0, U.q3)(() => [
              t.options || [],
              t.randomize_option_order,
            ]),
            l = (0, oe.LU)(),
            i = (0, Y.E)(),
            [d, c, u] = (0, C.uD)(),
            p = h.useCallback(() => {
              o(), u();
            }, [o, u]),
            [x, v, M] = (0, C.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return t
            ? (0, e.jsxs)(Je.W6, {
                userPollDef: t,
                eventModel: l.GetEventModel(),
                lang: i,
                children: [
                  s.map((j) =>
                    (0, e.jsx)(
                      Qt,
                      { focusView: o, optionID: j.option_id },
                      "polloption" + t.poll_id + "_" + j.option_id,
                    ),
                  ),
                  (0, e.jsxs)("div", {
                    className: X().AdminOptions,
                    children: [
                      (0, e.jsx)(Ze.wl, {
                        className: "",
                        onClick: c,
                        children: (0, r.we)("#UserPolls_Option_Add"),
                      }),
                      (0, e.jsx)(Ze.wl, {
                        className: "",
                        onClick: v,
                        children: (0, r.we)("#UserPolls_Option_Reorder"),
                      }),
                    ],
                  }),
                  d &&
                    (0, e.jsx)($e, {
                      bCreate: !0,
                      hideModal: p,
                      fnUpdatePollOption: (j) => {
                        const b = S.mh.GetEditModel();
                        t.options || (t.options = []),
                          t.options.push(j),
                          b.SetDirty(B.IQ.description);
                      },
                    }),
                  x &&
                    (0, e.jsx)(Wt, {
                      hideModal: g,
                      options: s,
                      bRandomize: n,
                      fnUpdateOptions: (j, b) => {
                        (t.randomize_option_order = b), (t.options = j);
                      },
                    }),
                ],
              })
            : null;
        }
        function Wt(a) {
          const {
              options: t,
              bRandomize: o,
              fnUpdateOptions: s,
              hideModal: n,
            } = a,
            l = (0, Y.E)(),
            [i, d] = (0, h.useState)(o),
            [c, u] = (0, h.useState)(t);
          return (0, e.jsx)(y.E, {
            active: !0,
            children: (0, e.jsxs)(D.o0, {
              strTitle: (0, r.we)("#UserPolls_Option_Reorder"),
              strDescription: (0, r.we)("#UserPolls_Option_Reorder_desc"),
              onCancel: () => {
                d(o), u(t);
              },
              onOK: () => {
                s([...c], i);
              },
              closeModal: n,
              children: [
                (0, e.jsx)(_.Yh, {
                  label: (0, r.we)("#UserPolls_Option_Randomize"),
                  checked: i,
                  onChange: d,
                }),
                (0, e.jsx)(Ft.A, {
                  items: c,
                  render: (p) => {
                    var x, v;
                    return (0, e.jsx)("div", {
                      children:
                        ((x = p.localized_option) == null ? void 0 : x[l]) ||
                        ((v = p.localized_option) == null
                          ? void 0
                          : v[w.Bhc]) ||
                        "",
                    });
                  },
                  onReorder: (p) => u(p),
                }),
              ],
            }),
          });
        }
        function Qt(a) {
          const { optionID: t, focusView: o } = a,
            [s, n] = (0, C.OP)(),
            l = (0, U.q3)(() => {
              const { optionIndex: j, pollIndex: b } = Oe(t);
              return S.mh.GetEditModel().GetEventModel().jsondata.user_polls[b]
                .options[j];
            }),
            i = (0, Y.E)(),
            [d, c, u] = (0, C.uD)(),
            p = h.useCallback(() => {
              o(), u();
            }, [o, u]),
            [x, v, M] = (0, C.uD)(),
            g = h.useCallback(() => {
              o(), M();
            }, [o, M]);
          return (0, e.jsxs)("div", {
            className: I().Column,
            ...n,
            children: [
              (0, e.jsx)(Je.s3, { pollOptionDef: l, lang: i }),
              !!s &&
                (0, e.jsxs)("div", {
                  className: I().controls,
                  children: [
                    (0, e.jsx)(f.ff, {
                      onClick: c,
                      tooltip: (0, r.we)("#Button_Edit"),
                      children: (0, e.jsx)(E.ffu, {}),
                    }),
                    (0, e.jsx)(f.ff, {
                      onClick: v,
                      tooltip: (0, r.we)("#Button_Delete"),
                      children: (0, e.jsx)(E.sED, {}),
                    }),
                  ],
                }),
              !!d &&
                (0, e.jsx)($e, {
                  bCreate: !1,
                  hideModal: p,
                  pollOptionsInput: l,
                  fnUpdatePollOption: (j) => {
                    const b = S.mh.GetEditModel(),
                      { optionIndex: N, pollIndex: Z } = Oe(t),
                      le = [
                        ...b.GetEventModel().jsondata.user_polls[Z].options,
                      ];
                    (le[N] = j),
                      (b.GetEventModel().jsondata.user_polls[Z].options = le),
                      b.SetDirty(B.IQ.description);
                  },
                }),
              !!x &&
                (0, e.jsx)(y.E, {
                  active: !0,
                  children: (0, e.jsx)(D.o0, {
                    strTitle: (0, r.we)("#Button_Delete"),
                    strDescription: (0, r.we)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const j = S.mh.GetEditModel(),
                        { optionIndex: b, pollIndex: N } = Oe(t),
                        Z = [
                          ...j.GetEventModel().jsondata.user_polls[N].options,
                        ];
                      Z.splice(b, 1),
                        (j.GetEventModel().jsondata.user_polls[N].options = Z),
                        j.SetDirty(B.IQ.description);
                    },
                    closeModal: g,
                  }),
                }),
            ],
          });
        }
        const $t = h.memo(function (t) {
          const {
            view: o,
            schema: s,
            refUpdateToolbar: n,
            className: l,
            clanSteamID: i,
            bSpellcheckEnabled: d,
            setSpellcheckEnabled: c,
          } = t;
          return (0, e.jsx)(f.bI, {
            refUpdateToolbar: n,
            view: o,
            children: (0, e.jsxs)("div", {
              className: t.className,
              children: [
                (0, e.jsxs)(f.Ez, {
                  className: t.className,
                  children: [
                    (0, e.jsx)(de.MV, {}),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(de.Km, { schema: s }),
                    (0, e.jsx)(f.XQ, {}),
                    s.marks.link && (0, e.jsx)(Xt, { schema: s }),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(de.Hz, { schema: s }),
                    (0, e.jsx)(de.WJ, { schema: s, levels: 3 }),
                    (0, e.jsx)(f.XQ, {}),
                    (0, e.jsx)(Pt, { schema: s }),
                    (0, e.jsx)(Jt, { schema: s, clanSteamID: i }),
                    (0, e.jsx)(xt, { schema: s }),
                    (0, e.jsx)(de.C$, {
                      schema: s,
                      showIndentButtonsAsNeeded: !0,
                    }),
                    (0, e.jsx)(f.hK, {}),
                    c &&
                      (0, e.jsx)(de.Nt, {
                        bSpellcheckEnabled: d,
                        setSpellcheckEnabled: c,
                      }),
                    s.nodes.meetsteamsessiongroup &&
                      (0, e.jsx)(eo, { schema: s }),
                    s.nodes.meetsteamscheduleview &&
                      (0, e.jsx)(to, { schema: s }),
                    s.nodes.userpolls &&
                      Ut.iA.is_support &&
                      (0, e.jsx)(Zt, { schema: s }),
                  ],
                }),
                (0, e.jsx)(Mt, { className: t.className, schema: s }),
              ],
            }),
          });
        });
        function Xt(a) {
          const t = (0, jt.V9)();
          return (0, e.jsx)(de.z9, { schema: a.schema, addtlAttrs: t });
        }
        function Zt(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, se.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            u = h.useCallback(
              (p) => {
                n.GetEventModel().jsondata.user_polls ||
                  (n.GetEventModel().jsondata.user_polls = []),
                  n.GetEventModel().jsondata.user_polls.push({ ...p }),
                  Kt(s, t.nodes.userpolls, p.poll_id),
                  c();
              },
              [t, s, c, n],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              l &&
                (0, e.jsx)(Bt, {
                  hideModal: c,
                  clanAccountID: n.GetClanAccountID(),
                  fnUpdateSession: u,
                }),
              (0, e.jsx)(f.ff, {
                tooltip: "#UserPolls_Toolbar_ttip",
                onClick: i,
                toggled: l,
                children: (0, e.jsx)(E.fQB, {}),
              }),
            ],
          });
        }
        function Jt(a) {
          const { schema: t, clanSteamID: o } = a,
            { callbacks: s, view: n } = (0, f.wU)(),
            { image: l, video: i, previewyoutube: d } = t.nodes,
            c = h.useCallback(
              (g, j) => {
                n.dispatch(
                  n.state.tr.insert(n.state.selection.to, j.create(g)),
                );
              },
              [n],
            ),
            u = h.useCallback(() => n.focus(), [n]),
            {
              showInsertImageModal: p,
              showInsertVideoModal: x,
              imageModal: v,
              activeModal: M,
            } = (0, O.wU)({
              clanSteamID: o,
              imageNodeType: l,
              videoNodeType: i,
              onItemSelected: c,
              onHideModal: u,
            });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              v,
              l &&
                (0, e.jsx)(f.ff, {
                  tooltip: "#EventEditor_InsertImage_Title",
                  onClick: p,
                  toggled: M == "image",
                  children: (0, e.jsx)(E._V3, {}),
                }),
              i &&
                (0, e.jsx)(f.ff, {
                  tooltip: "#EventEditor_EditVideo_Title",
                  onClick: x,
                  toggled: M == "video",
                  children: (0, e.jsx)(E.CeX, {}),
                }),
              d && (0, e.jsx)(qt, { schema: t }),
              (l || i || d) && (0, e.jsx)(f.XQ, {}),
            ],
          });
        }
        function qt(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            [n, l, i] = (0, se.uD)(),
            d = h.useCallback(() => {
              i(), s.focus();
            }, [i, s]),
            c = h.useCallback(
              (u, p) => {
                ge(s, t.nodes.previewyoutube, u, p), d();
              },
              [t, s, d],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              n && (0, e.jsx)(he, { hideModal: d, onSave: c }),
              (0, e.jsx)(f.ff, {
                tooltip: "#EventEditor_InsertYouTube",
                onClick: l,
                toggled: n,
                children: (0, e.jsx)("img", { src: Pe.A }),
              }),
            ],
          });
        }
        function eo(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, se.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            u = h.useCallback(
              (p, x) => {
                n.GetEventModel().jsondata.meet_steam_groups ||
                  (n.GetEventModel().jsondata.meet_steam_groups = []),
                  n
                    .GetEventModel()
                    .jsondata.meet_steam_groups.push({ ...p, sessions: [x] }),
                  ut(s, t.nodes.meetsteamsessiongroup, p.group_id),
                  c();
              },
              [t, s, c, n],
            );
          if ((n == null ? void 0 : n.GetClanAccountID()) == (0, ie.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                l && (0, e.jsx)(at, { hideModal: c, fnUpdateSession: u }),
                (0, e.jsx)(f.ff, {
                  tooltip: "#MeetSteam_add_group_ttip",
                  onClick: i,
                  toggled: l,
                  children: (0, e.jsx)("img", { src: Pe.A }),
                }),
              ],
            });
        }
        function to(a) {
          const { schema: t } = a,
            { callbacks: o, view: s } = (0, f.wU)(),
            n = (0, oe.LU)(),
            [l, i, d] = (0, se.uD)(),
            c = h.useCallback(() => {
              d(), s.focus();
            }, [d, s]),
            u = h.useCallback(
              (p) => {
                n.GetEventModel().jsondata.meet_steam_schedules ||
                  (n.GetEventModel().jsondata.meet_steam_schedules = []),
                  n
                    .GetEventModel()
                    .jsondata.meet_steam_schedules.push({ ...p }),
                  Et(s, t.nodes.meetsteamscheduleview, p.schedule_id),
                  c();
              },
              [t, s, c, n],
            );
          if ((n == null ? void 0 : n.GetClanAccountID()) == (0, ie.H)())
            return (0, e.jsxs)(e.Fragment, {
              children: [
                l &&
                  (0, e.jsx)(Ke, {
                    hideModal: c,
                    inputScheduleModel: null,
                    fnUpdateSession: u,
                  }),
                (0, e.jsx)(f.ff, {
                  tooltip: "#MeetSteam_add_schedule_ttip",
                  onClick: i,
                  toggled: l,
                  children: (0, e.jsx)("img", { src: Pe.A }),
                }),
              ],
            });
        }
        var oo = m(75844),
          so = m(90316),
          Me = m.n(so),
          no = m(83085),
          lo = m(93147),
          io = m(96197);
        function ao(a) {
          const { schema: t, emoticonStore: o } = a,
            s = t.nodes.emoticon;
          (0, De.k3)(o),
            (0, V.c$)(
              h.useMemo(
                () => (0, H.sM)({ rules: [co(/:([a-zA-Z0-9_]+):$/, s, o)] }),
                [s, o],
              ),
            );
          const n = h.useMemo(
            () => [
              {
                type: s,
                component: ro,
                readProps: (l) => ({
                  emoticonStore: o,
                  emoticon: l.textContent,
                }),
              },
            ],
            [s, o],
          );
          return (0, e.jsx)(ue.U, { specs: n });
        }
        function ro(a) {
          const { selected: t, emoticonStore: o, emoticon: s } = a;
          if (((0, De.k3)(o), o.BHasEmoticon(s))) {
            const l = t
              ? { background: "#54a5d4", filter: "brightness(1.2)" }
              : void 0;
            return (0, e.jsx)("span", {
              style: l,
              children: (0, e.jsx)(io.n, { emoticon: s }),
            });
          } else return `:${s}:`;
        }
        function co(a, t, o) {
          return new H.fV(a, (s, n, l, i) => {
            const d = n[1];
            if (!o.BHasEmoticon(d)) return null;
            const c = t.create(null, s.schema.text(d));
            return s.tr.replaceWith(l, i, c);
          });
        }
        var et = m(25598),
          uo = m(78844),
          mo = m(65217),
          po = m(25792);
        const ho = (0, oo.PA)(function (t) {
          const { editModel: o } = t,
            s = o.GetEventModel().loadedAllLanguages,
            n = o.GetCurEditLanguage();
          return s
            ? (0, e.jsx)(po.tH, {
                children: (0, e.jsx)(vo, { ...t, eCurrentEditLanguage: n }),
              })
            : null;
        });
        function fo(a, t, o, s) {
          let n = t.GetDescription(o);
          return (
            (n =
              n == null
                ? void 0
                : n.replace(
                    De.pN.GetUnvalidatedEmoticonReplaceRegex(),
                    "[emoticon]$1[/emoticon]",
                  )),
            new A.n(a, n, (l) => t.SetDescription(o, l), {
              parser: {
                fnProcessText: (l) =>
                  (0, mo.F)(a.pm_schema, l, a.pm_schema.marks.link, s),
              },
            })
          );
        }
        const vo = h.memo(function (t) {
          const {
              editModel: o,
              refOnInsertImage: s,
              limitBBCode: n,
              eCurrentEditLanguage: l,
            } = t,
            [i, d] = h.useState(),
            c = h.useMemo(() => (0, q.u)(n), [n]),
            [u, p] = h.useState(),
            x = xo(o.GetClanSteamID(), c);
          h.useEffect(() => {
            p(fo(c, o, l, x));
          }, [c, x, o, l]);
          const v = h.useRef(void 0);
          (0, pe.i)(u, { msAutosaveTimeout: 1e3 });
          const { nodes: M, marks: g } = c.pm_schema;
          return (
            (0, O.ww)(s, M.image, M.video, g.link, i),
            (0, e.jsx)(O.Su, {
              clanSteamID: o.GetClanSteamID(),
              imageNode: M.image,
              videoNode: M.video,
              children: (0, e.jsxs)("div", {
                className: Me().EventDescriptionContainer,
                children: [
                  (0, e.jsx)($t, {
                    view: i,
                    schema: c.pm_schema,
                    refUpdateToolbar: v,
                    className: Me().ToolBar,
                    clanSteamID: o.GetClanSteamID(),
                  }),
                  (0, e.jsx)("div", {
                    className: Me().EventDescriptionArea,
                    children: (0, e.jsx)(lo.l, {
                      pmState: u,
                      className: (0, k.A)(
                        Me().EventDescriptionRichField,
                        Me().EventDetailsBody,
                      ),
                      refOnUpdate: v,
                      refView: d,
                      panelProps: { onBlur: () => u.CommitChanges() },
                      children: (0, e.jsx)(Mo, {
                        eventSchemaConfig: c,
                        editModel: o,
                        onURLPasted: x,
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
        function xo(a, t) {
          const { nodes: o } = t.pm_schema,
            s = (0, O.w_)(a, o.image, o.video),
            n = (0, et.s)(o.dynamiclink);
          return h.useCallback(
            (...l) => {
              let i = "default";
              return (
                s && (i = s(...l)), i == "default" && n && (i = n(...l)), i
              );
            },
            [s, n],
          );
        }
        const Mo = h.memo(function (t) {
          const { eventSchemaConfig: o, editModel: s, onURLPasted: n } = t,
            l = (0, Ye.LJ)(),
            { marks: i, nodes: d } = o.pm_schema;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(G.W, {
                linkMarkType: i.link,
                onURLPasted: n,
                schema: o.pm_schema,
              }),
              d.image && (0, e.jsx)(no.pw, { nodeType: d.image }),
              (0, e.jsx)(go, {
                schemaConfig: o,
                editModel: s,
                clanSteamID: s.GetClanSteamID(),
              }),
              (0, e.jsx)(ao, { emoticonStore: l, schema: o.pm_schema }),
            ],
          });
        });
        function go(a) {
          const { schemaConfig: t, editModel: o, clanSteamID: s } = a,
            n = t.pm_schema,
            l = h.useMemo(() => ee(n), [n]);
          (0, V.c$)(l);
          const i = n.nodes,
            d = i.image,
            c = i.video,
            u = i.carousel,
            p = h.useCallback(
              (v, M) => ({
                schemaConfig: t,
                node: M,
                imageNodeType: d,
                videoNodeType: c,
                carouselNodeType: u,
                editModel: o,
                clanSteamID: s,
              }),
              [t, d, c, u, o, s],
            ),
            x = h.useMemo(
              () => [
                i.previewyoutube && {
                  type: i.previewyoutube,
                  component: Se,
                  readProps: (v) => ({
                    videoID: v.attrs.videoID,
                    align: v.attrs.align,
                    editModel: o,
                  }),
                },
                d && {
                  type: d,
                  component: O.Yp,
                  readProps: (v) => p("image", v),
                },
                c && {
                  type: c,
                  component: O.Yp,
                  readProps: (v) => p("video", v),
                },
                i.meetsteamsessiongroup && {
                  type: i.meetsteamsessiongroup,
                  component: mt,
                  readProps: (v) => ({ group_id: v.attrs.group_id }),
                },
                i.meetsteamscheduleview && {
                  type: i.meetsteamscheduleview,
                  component: Ct,
                  readProps: (v) => ({ schedule_id: v.attrs.schedule_id }),
                },
                i.userpolls && {
                  type: i.userpolls,
                  component: Yt,
                  readProps: (v) => ({ poll_id: v.attrs.poll_id }),
                },
                i.dynamiclink && {
                  type: i.dynamiclink,
                  component: et.b,
                  readProps: (v) => ({
                    editModel: o,
                    href: v.attrs.href,
                    schema: t.pm_schema,
                  }),
                },
                i.carousel && {
                  type: i.carousel,
                  component: uo.E,
                  readProps: (v) => ({
                    node: v,
                    imageNodeType: d,
                    videoNodeType: c,
                    schemaConfig: t,
                    editModel: o,
                  }),
                },
              ],
              [i, d, c, o, p, t],
            );
          return (0, e.jsx)(ue.U, { specs: x });
        }
      },
      99931: (J, ce, m) => {
        "use strict";
        m.d(ce, { W: () => h });
        var e = m(7850),
          A = m(57053),
          pe = m(52893),
          V = m(90626),
          ue = m(18210),
          G = m(12293),
          O = m(19565),
          q = m(59722),
          H = m.n(q),
          ee = m(65217);
        const h = V.memo(function (W) {
          const {
              linkMarkType: L,
              onURLPasted: k,
              schema: r,
              onClickURL: C = R,
            } = W,
            z = V.useRef(C);
          z.current = C;
          const [$, me] = V.useState(),
            [ge, Se] = V.useState(),
            [he, se] = V.useState(),
            [B, S] = (0, G.E)(r),
            U = V.useMemo(
              () =>
                new pe.k_({
                  props: {
                    handleClickOn(P, E, D, y, f, ae) {
                      if (ae && (f.ctrlKey || f.button == 1)) {
                        const w = D.resolve(E - y)
                          .marks()
                          .find((K) => K.type == L);
                        if (w)
                          return (
                            z.current(w.attrs.href, f.view),
                            f.preventDefault(),
                            !0
                          );
                      }
                      return !1;
                    },
                    handleKeyDown(P, E) {
                      return E.key == "k" &&
                        (E.metaKey || E.ctrlKey) &&
                        !E.shiftKey &&
                        !E.altKey
                        ? (B(P), !0)
                        : !1;
                    },
                    clipboardTextParser(P, E, D, y) {
                      const f = (0, ee.F)(r, P, L, k);
                      return f && new A.Ji(A.FK.from(f), E.start(), E.end());
                    },
                    handlePaste(P, E, D) {
                      let y = [];
                      if (
                        (D.content.descendants((w, K) => {
                          if (w.isText) {
                            const Y = (0, ee.F)(r, w.text, L, k);
                            Y && y.push({ node: w, pos: K, rgNodes: Y });
                          }
                        }),
                        !y.length)
                      )
                        return !1;
                      let f = P.state.tr;
                      f.selection.empty || f.deleteSelection();
                      let ae = f.selection.from,
                        I = 0;
                      for (const w of y) {
                        const { node: K, pos: Y, rgNodes: je } = w,
                          Q = D.content.cut(I, Y).append(A.FK.from(je));
                        f.insert(ae, Q),
                          (ae += Q.size + 2),
                          (I = Y + K.nodeSize);
                      }
                      return (
                        f.insert(ae, D.content.cut(I)),
                        f.scrollIntoView(),
                        P.dispatch(f),
                        !0
                      );
                    },
                    handleDOMEvents: {
                      mouseover: (P, E) => {
                        for (
                          let D = E.target;
                          D && D != E.currentTarget;
                          D = D.parentElement
                        )
                          if (
                            D.nodeName == "A" &&
                            "getBoundingClientRect" in D
                          ) {
                            const y = D.getBoundingClientRect();
                            me(y.left + y.width / 2), Se(y.bottom + 2), se(D);
                            return;
                          }
                        se(void 0);
                      },
                      mouseleave: (P, E) => (se(void 0), !1),
                    },
                  },
                }),
              [L, B, k, r],
            );
          (0, O.c$)(U);
          let ie = null;
          return (
            he &&
              $ &&
              ge &&
              (ie = (0, e.jsx)(te, {
                top: ge,
                left: $,
                href: he.getAttribute("href"),
              })),
            (0, e.jsxs)(e.Fragment, { children: [ie, S] })
          );
        });
        function te(_) {
          const { top: W, left: L, href: k } = _,
            [r, C] = V.useState(0),
            z = V.useRef(null);
          V.useLayoutEffect(() => {
            C(z.current.getBoundingClientRect().width);
          }, [W, L, k]);
          const $ = { top: `${W}px`, left: `${Math.max(L - r / 2, 12)}px` };
          return (0, e.jsxs)("div", {
            className: q.Hover,
            style: $,
            ref: z,
            children: [
              (0, e.jsx)("div", { className: q.Link, children: k }),
              (0, e.jsx)("div", {
                className: q.LinkHelp,
                children: (0, ue.we)("#UserGameNotes_ClickToOpenLink"),
              }),
            ],
          });
        }
        function R(_, W) {
          W.open(_);
        }
      },
      35184: (J, ce, m) => {
        "use strict";
        m.d(ce, { R: () => V });
        var e = m(7850),
          A = m(90626),
          pe = m(72739);
        function V(G) {
          const {
              id: O,
              role: q,
              visible: H = !0,
              className: ee,
              keepMounted: h = !1,
              expandDirection: te = "height",
              msAnimationDuration: R = 250,
              children: _,
            } = G,
            { style: W, active: L, refDiv: k } = ue(H, te, R);
          return !H && !L && !h
            ? null
            : (0, e.jsx)("div", {
                id: O,
                role: q,
                className: ee,
                ref: k,
                style: W,
                inert: !H,
                children: _,
              });
        }
        function ue(G, O = "height", q = 250) {
          const H = A.useRef(null),
            ee = A.useRef(!0),
            [h, te] = A.useState("idle"),
            [R, _] = A.useState(G ? {} : { [O]: "0px", overflow: "hidden" }),
            [W, L] = A.useState(G);
          return (
            A.useLayoutEffect(() => {
              ee.current || te("start"), G && L(G);
            }, [G]),
            A.useLayoutEffect(
              () => (
                (ee.current = !1),
                () => {
                  ee.current = !0;
                }
              ),
              [],
            ),
            A.useLayoutEffect(() => {
              const r = H.current,
                C = O == "height" ? "scrollHeight" : "scrollWidth",
                z = () => {
                  pe.unstable_batchedUpdates(() => {
                    _(G ? {} : { [O]: "0px", overflow: "hidden" }),
                      te("idle"),
                      L(G);
                  });
                };
              if (h == "start") {
                const $ = r[C];
                $ == 0
                  ? z()
                  : (_((me) => ({
                      [O]: G ? "0px" : `${$}px`,
                      ...me,
                      overflow: "hidden",
                    })),
                    te("active"));
              } else if (h == "active") {
                r.scrollTop;
                const $ = r[C];
                return (
                  _({ overflow: "hidden", [O]: G ? `${$}px` : "0px" }),
                  r.addEventListener("transitionend", z),
                  () => {
                    r.removeEventListener("transitionend", z);
                  }
                );
              }
            }, [h, G]),
            { style: { ...R, transition: `${O} ${q}ms` }, active: W, refDiv: H }
          );
        }
      },
      1397: (J) => {
        J.exports = {
          Column: "_3l7NrcIIw_fedlHdVwJMVE",
          controls: "_3PGiW8qQcZDfnK9rOz7sjY",
          EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
          AddNew: "JBYdBhACB7UzXP4l_tpF2",
          DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
          ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
          EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
        };
      },
      28516: (J) => {
        J.exports = {
          EditorCtn: "_2h37cwEb2SfJphgpbu-dPv",
          controls: "kI20RMKnHD3qdQhl-Hr4K",
        };
      },
      63287: (J) => {
        J.exports = {
          DialogCtn: "_9JDWJYvoHTETKmebCO7iE",
          PollArea: "_1h-JdwvtVK38j8M4EXeUah",
          OptionInset: "_5o_Ifm1O6jf-4Iq4Kv07F",
          AdminOptions: "_1Kt8VfgLBvg0tD86og8ps7",
        };
      },
      59722: (J) => {
        J.exports = {
          Hover: "_1lo3nIamSX1TzzE4TlhFXA",
          Link: "_1ds3uh7ntoekPm635F2Ziv",
          LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
        };
      },
    },
  ]);
})();
