/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [34178],
    {
      91085: (y, ne, o) => {
        "use strict";
        o.d(ne, { J: () => Mt });
        var t = o(7850),
          V = o(25518),
          U = o(72604),
          $ = o(35038),
          W = o(27386),
          B = o(72609),
          q = o(51614),
          p = o(90626),
          le = o(85528),
          D = o(76559),
          w = o(35098),
          ee = o(41735),
          X = o.n(ee),
          T = o(75844),
          f = o(16346),
          O = o(43458),
          S = o(29630),
          M = o(53424),
          l = o(30096),
          u = o(41301),
          d = o(96197),
          v = o(38655),
          h = o(14947),
          x = o(77700),
          E = o.n(x),
          A = o(36707),
          Me = Object.defineProperty,
          j = Object.getOwnPropertyDescriptor,
          F = (n, e, s, r) => {
            for (
              var a = r > 1 ? void 0 : r ? j(e, s) : e, c = n.length - 1, m;
              c >= 0;
              c--
            )
              (m = n[c]) && (a = (r ? m(e, s, a) : m(a)) || a);
            return r && a && Me(e, s, a), a;
          };
        class z extends p.Component {
          m_strLastSearch;
          m_rgCurrentMatches = [];
          m_mapMatchByKey = new Map();
          containerRef = p.createRef();
          constructor(e) {
            super(e),
              (this.m_hMobxSearchDisposer = (0, h.fm)(async () => {
                await this.UpdateSearchResults(this.props.strSearch),
                  this.forceUpdate();
              })),
              (this.state = { selectedIndex: void 0 });
          }
          OnKeyDown(e) {
            if (this.BHandleKeyPress(e.keyCode)) {
              e.preventDefault();
              return;
            }
          }
          BHandleKeyPress(e) {
            switch (e) {
              case u.Oy:
                this.SetSelectedIndexDelta(-1);
                break;
              case u.BH:
                this.SetSelectedIndexDelta(1);
                break;
              case u.po:
                this.SetSelectedIndex(0);
                break;
              case u.o7:
                this.SetSelectedIndexDelta(-this.GetPageSize());
                break;
              case u.xF:
                this.SetSelectedIndex(-1);
                break;
              case u.v3:
                this.SetSelectedIndexDelta(this.GetPageSize());
                break;
              case u.wd:
              case u.$R:
                if (this.state.selectedIndex !== void 0)
                  this.ChooseSuggestion(
                    this.m_rgCurrentMatches[this.state.selectedIndex],
                  );
                else
                  return (
                    this.props.onSuggestionSelected(this.props.strSearch), !1
                  );
                break;
              case u.zV:
                this.props.onSuggestionSelected(this.props.strSearch);
                break;
              default:
                return !1;
            }
            return !0;
          }
          GetPageSize() {
            let e = this.containerRef.current,
              s = e && e.firstElementChild,
              r = this.m_rgCurrentMatches.length;
            if (
              (r > this.getMaxMatches() && (r = this.getMaxMatches()), s && r)
            ) {
              let a = s.scrollHeight / r,
                c = s.clientHeight / a;
              return Math.max(1, Math.floor(c));
            }
            return 5;
          }
          ChooseSuggestion(e) {
            this.props.onSuggestionSelected(
              this.props.strSearch,
              e ? this.getSelection(e) : void 0,
            );
          }
          SetSelectedIndexDelta(e) {
            this.state.selectedIndex !== void 0
              ? this.SetSelectedIndex(this.state.selectedIndex + e)
              : this.SetSelectedIndex(e === 1 ? 0 : e);
          }
          SetSelectedIndex(e) {
            if (!this.m_rgCurrentMatches.length) return;
            let s = this.m_rgCurrentMatches.length;
            s > this.getMaxMatches() && (s = this.getMaxMatches()),
              (e = e % s),
              e < 0 && (e += s),
              this.setState({ selectedIndex: e });
          }
          FindKeyIndex(e) {
            if (!this.m_mapMatchByKey.size && this.m_rgCurrentMatches.length)
              for (let s = 0; s < this.m_rgCurrentMatches.length; s++)
                this.m_mapMatchByKey.set(
                  this.getKey(this.m_rgCurrentMatches[s]),
                  s,
                );
            return this.m_mapMatchByKey.get(e);
          }
          OnClickSuggestion(e) {
            let s = this.FindKeyIndex(e);
            s !== void 0 && this.ChooseSuggestion(this.m_rgCurrentMatches[s]);
          }
          OnMouseOverSuggestion(e) {
            let s = this.FindKeyIndex(e);
            s !== void 0 && this.SetSelectedIndex(s);
          }
          BindSelectedElement(e) {
            if (!e) return;
            let s = this.containerRef.current,
              r = e.containerRef.current,
              a = s && s.firstElementChild;
            !r ||
              !a ||
              ((a.scrollTop + a.clientHeight < r.offsetTop ||
                r.offsetTop < a.scrollTop) &&
                r.scrollIntoView());
          }
          async UpdateSearchResults(e) {
            (this.m_rgCurrentMatches = await this.performSearch(e)),
              (this.m_strLastSearch = e),
              this.m_mapMatchByKey.clear(),
              this.m_rgCurrentMatches.length
                ? !this.state || this.state.selectedIndex === void 0
                  ? (this.props.nMinimumSearchLengthBeforeAutoSelection ===
                      void 0 ||
                      e.length >=
                        this.props.nMinimumSearchLengthBeforeAutoSelection) &&
                    this.setState({ selectedIndex: 0 })
                  : this.state.selectedIndex >=
                      this.m_rgCurrentMatches.length &&
                    this.setState({ selectedIndex: 0 })
                : this.state &&
                  this.state.selectedIndex !== void 0 &&
                  this.setState({ selectedIndex: void 0 });
          }
          m_hMobxSearchDisposer;
          componentWillUnmount() {
            this.m_hMobxSearchDisposer &&
              (this.m_hMobxSearchDisposer(),
              (this.m_hMobxSearchDisposer = void 0));
          }
          async componentDidUpdate(e) {
            this.m_strLastSearch != this.props.strSearch &&
              (await this.UpdateSearchResults(this.props.strSearch),
              this.forceUpdate());
          }
          render() {
            let e = [];
            if (this.m_rgCurrentMatches.length) {
              let s = this.getMaxMatches();
              for (
                let r = 0;
                r < Math.min(s, this.m_rgCurrentMatches.length);
                r++
              ) {
                let a = this.m_rgCurrentMatches[r],
                  c = this.getKey(a),
                  m = r === this.state.selectedIndex;
                e.push(
                  (0, t.jsx)(
                    oe,
                    {
                      matchKey: c,
                      fnOnClick: this.OnClickSuggestion,
                      fnOnMouseOver: this.OnMouseOverSuggestion,
                      bIsSelected: m,
                      ref: m ? this.BindSelectedElement : void 0,
                      children: this.renderMatch(a),
                    },
                    c,
                  ),
                );
              }
              this.m_rgCurrentMatches.length > s &&
                e.push(
                  this.renderTooManyMatchesMessage(
                    this.m_rgCurrentMatches.length - s,
                  ),
                );
            } else {
              let s = this.renderNoMatchMessage();
              if (!s) return null;
              e.push(s);
            }
            return (0, t.jsx)("div", {
              className: E().mentionDialogPosition,
              ref: this.containerRef,
              children: (0, t.jsxs)("div", {
                className: E().mentionDialog,
                tabIndex: 0,
                onKeyDown: this.OnKeyDown,
                children: [this.renderHeader(), e],
              }),
            });
          }
        }
        F([l.oI], z.prototype, "OnKeyDown", 1),
          F([l.oI], z.prototype, "OnClickSuggestion", 1),
          F([l.oI], z.prototype, "OnMouseOverSuggestion", 1),
          F([l.oI], z.prototype, "BindSelectedElement", 1);
        class oe extends p.PureComponent {
          containerRef = p.createRef();
          OnMouseOver(e) {
            this.props.fnOnMouseOver(this.props.matchKey);
          }
          OnClick(e) {
            this.props.fnOnClick(this.props.matchKey);
          }
          render() {
            return (0, t.jsx)("div", {
              className: (0, A.A)(
                E().suggestOption,
                E().mentionSearchOption,
                this.props.bIsSelected ? E().selected : "",
              ),
              onMouseEnter: this.OnMouseOver,
              onClick: this.OnClick,
              ref: this.containerRef,
              children: this.props.children,
            });
          }
        }
        F([l.oI], oe.prototype, "OnMouseOver", 1),
          F([l.oI], oe.prototype, "OnClick", 1);
        const je = z;
        var Ne = o(79786),
          ye = o.n(Ne);
        class Fe extends je {
          performSearch(e) {
            return this.props.emoticonStore.SearchEmoticons(e, 10, !1);
          }
          getSelection(e) {
            return e.name;
          }
          getKey(e) {
            return e.name;
          }
          renderMatch(e) {
            return (0, t.jsxs)("div", {
              className: (0, A.A)(
                ye().EmoticonSuggestion,
                e.recent ? "Recent" : "",
              ),
              children: [
                (0, t.jsxs)("div", {
                  className: ye().Emoticon,
                  children: [
                    (0, t.jsx)(d.n, { emoticon: e.name }),
                    e.new && (0, t.jsx)(v.iD, {}),
                  ],
                }),
                ":",
                e.name,
                ":",
              ],
            });
          }
          renderNoMatchMessage() {
            return null;
          }
          renderTooManyMatchesMessage(e) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        const Ge = Fe;
        var Ke = o(34510),
          Be = o.n(Ke),
          i = o(18210);
        class ke extends je {
          performSearch(e) {
            let s = Array();
            return (
              this.props.supportBBCodes.forEach((r) => {
                r.indexOf(e) >= 0 && s.push({ name: r });
              }),
              s
            );
          }
          getSelection(e) {
            return "[" + e.name + "][/" + e.name + "]";
          }
          getKey(e) {
            return e.name;
          }
          renderMatch(e) {
            return (0, t.jsxs)(
              "div",
              {
                className: (0, A.A)(Be().BBCodeSuggestion),
                children: [
                  (0, t.jsx)("div", {
                    className: Be().BBCode,
                    children: e.name,
                  }),
                  "[",
                  e.name,
                  "]...[/",
                  e.name,
                  "]",
                ],
              },
              e.name,
            );
          }
          renderNoMatchMessage() {
            return (0, t.jsx)(
              "div",
              {
                className: (0, A.A)(E().mentionSearchOption, E().noMatches),
                children: (0, i.we)("#Bbcode_No_Match"),
              },
              "nomatches",
            );
          }
          renderTooManyMatchesMessage(e) {
            return null;
          }
          renderHeader() {
            return null;
          }
          getMaxMatches() {
            return Number.MAX_VALUE;
          }
        }
        var We = Object.defineProperty,
          ze = Object.getOwnPropertyDescriptor,
          te = (n, e, s, r) => {
            for (
              var a = r > 1 ? void 0 : r ? ze(e, s) : e, c = n.length - 1, m;
              c >= 0;
              c--
            )
              (m = n[c]) && (a = (r ? m(e, s, a) : m(a)) || a);
            return r && a && We(e, s, a), a;
          };
        class Z extends p.Component {
          descTextAreaRef = p.createRef();
          m_MentionDialog;
          m_bDisabled = !0;
          m_iMentionSearchStartOffset;
          m_iMentionSearchCancelledOffset;
          constructor(e) {
            super(e),
              (this.state = {
                mentionSearch: void 0,
                activeSuggestSearchType: void 0,
              });
          }
          BindMentionDialog(e) {
            this.m_MentionDialog = e ?? void 0;
          }
          OnKeyDown(e) {
            if (
              this.state.activeSuggestSearchType &&
              this.m_MentionDialog &&
              !e.shiftKey &&
              !e.ctrlKey &&
              this.m_MentionDialog.BHandleKeyPress(e.keyCode)
            ) {
              e.preventDefault();
              return;
            }
            (e.keyCode == u.Dh || e.keyCode == u.jt) &&
              (this.m_iMentionSearchCancelledOffset = void 0);
          }
          FindMatchOpener(e, s, r) {
            for (let a = r - 1; a >= 0; a--) {
              if (s[a] == e) return a;
              if (
                s[a] == " " ||
                s[a] ==
                  `
`
              )
                break;
            }
          }
          ReplaceSuggestedText(e, s) {
            const r = this.descTextAreaRef.current;
            if (!r) return;
            let a = r.selectionStart,
              c = r.value,
              m = this.FindMatchOpener(e, c, a);
            if (
              (m === void 0 &&
                e == "@" &&
                (m = this.FindMatchOpener("\uFF20", c, a)),
              m !== void 0)
            ) {
              let C = c.substr(0, m);
              (C += s), (a >= c.length || c[a] != " ") && (C += " ");
              let P = C.length;
              (C += c.substr(a)),
                (r.value = C),
                (r.selectionStart = r.selectionEnd = P),
                this.props.fnSetText(C),
                this.FocusTextInput();
            }
          }
          OnFocus(e) {
            this.UpdateAutoSearchState();
          }
          OnKeyPress(e) {
            this.UpdateAutoSearchState();
          }
          OnClick(e) {
            this.UpdateAutoSearchState();
          }
          ClearMentionSearchState() {
            (this.m_iMentionSearchStartOffset = void 0),
              this.state.activeSuggestSearchType &&
                this.setState({
                  activeSuggestSearchType: void 0,
                  mentionSearch: void 0,
                });
          }
          OnEmoticonSuggestionSelected(e, s) {
            if (!s) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText(":", ":" + s + ":"),
              this.ClearMentionSearchState();
          }
          OnBBCodeSuggestionSelected(e, s) {
            if (!s) {
              (this.m_iMentionSearchCancelledOffset =
                this.m_iMentionSearchStartOffset),
                this.ClearMentionSearchState();
              return;
            }
            this.ReplaceSuggestedText("[", s), this.ClearMentionSearchState();
          }
          FocusTextInput() {
            this.descTextAreaRef.current &&
              this.descTextAreaRef.current.focus();
          }
          UpdateAutoSearchState() {
            let e = this.descTextAreaRef.current;
            if (!e || this.m_bDisabled) return;
            if (e.selectionStart != e.selectionEnd || !e.selectionStart) {
              this.ClearMentionSearchState();
              return;
            }
            let s = e.selectionStart,
              r = e.value,
              a,
              c;
            for (let C = s - 1; C >= 0; C--) {
              let P = C > 0 ? r[C - 1] : void 0;
              if (this.props.emoticonStore && r[C] == ":" && r.length > 2) {
                (!P ||
                  P == " " ||
                  P ==
                    `
` ||
                  P == ":") &&
                  ((a = C), (c = "Emoticon"));
                break;
              } else if (r[C] == "[" && (C + 1 > r.length || r[C + 1] != "/")) {
                (!P ||
                  P == " " ||
                  P ==
                    `
` ||
                  P == "]") &&
                  ((a = C), (c = "BBCode"));
                break;
              } else if (
                r[C] == " " ||
                r[C] ==
                  `
`
              )
                break;
            }
            if (a === void 0 || a === this.m_iMentionSearchCancelledOffset) {
              this.ClearMentionSearchState();
              return;
            }
            let m = r.substr(a + 1, s - a - 1);
            (this.m_iMentionSearchStartOffset = a),
              this.setState({ activeSuggestSearchType: c, mentionSearch: m });
          }
          GetTextAreaRef() {
            return this.descTextAreaRef;
          }
          GetTextAreaCurrent() {
            return this.descTextAreaRef.current;
          }
          render() {
            let {
                emoticonStore: e,
                supportBBCodes: s,
                fnSetText: r,
                ...a
              } = this.props,
              c;
            switch (this.state.activeSuggestSearchType) {
              case "Emoticon":
                e &&
                  (c = (0, t.jsx)(Ge, {
                    emoticonStore: e,
                    strSearch: this.state.mentionSearch,
                    nMinimumSearchLengthBeforeAutoSelection: 2,
                    onSuggestionSelected: this.OnEmoticonSuggestionSelected,
                    ref: this.BindMentionDialog,
                  }));
                break;
              case "BBCode":
                c = (0, t.jsx)(ke, {
                  supportBBCodes: s,
                  strSearch: this.state.mentionSearch,
                  nMinimumSearchLengthBeforeAutoSelection: 2,
                  onSuggestionSelected: this.OnBBCodeSuggestionSelected,
                  ref: this.BindMentionDialog,
                });
                break;
            }
            return (0, t.jsxs)(p.Fragment, {
              children: [
                c,
                (0, t.jsx)("textarea", {
                  ...a,
                  ref: this.descTextAreaRef,
                  onKeyDown: this.OnKeyDown,
                  onKeyUp: this.OnKeyPress,
                  onFocus: this.OnFocus,
                  onClick: this.OnClick,
                }),
              ],
            });
          }
        }
        te([l.oI], Z.prototype, "BindMentionDialog", 1),
          te([l.oI], Z.prototype, "OnKeyDown", 1),
          te([l.oI], Z.prototype, "OnFocus", 1),
          te([l.oI], Z.prototype, "OnKeyPress", 1),
          te([l.oI], Z.prototype, "OnClick", 1),
          te([l.oI], Z.prototype, "OnEmoticonSuggestionSelected", 1),
          te([l.oI], Z.prototype, "OnBBCodeSuggestionSelected", 1),
          te([l.oI], Z.prototype, "FocusTextInput", 1),
          te([l.oI], Z.prototype, "GetTextAreaRef", 1),
          te([l.oI], Z.prototype, "GetTextAreaCurrent", 1);
        var G = o(16412),
          Ye = o(22714),
          Ve = o(95695),
          fe = o.n(Ve),
          re = o(96538),
          ae = o(88003),
          Xe = o(41609),
          Ze = o.n(Xe),
          ce = o(82734),
          Q = o(3166);
        const Qe =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyNjlFOEM1MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyNjlFOEM2MjJEMzExRTJCNTVBQkZGOUQyOTI0ODU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjI2OUU4QzMyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjI2OUU4QzQyMkQzMTFFMkI1NUFCRkY5RDI5MjQ4NTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4IrEPeAAABJ0lEQVR42mL8//8/AzmABUScEOZJI1HfLBaoppmk2sh4Ql/r/69HD0jSxCanwMD07eVzhl9ADgz/ZmJikMjOY2CUlEIRR8YgPYzbBLhQQoeJl4/B7uY9hv9//jC8XLWc4UFfD8OPZ08xbGX6CSSQ8XdgKH/79o3h+69fDHwBwQy6ew8ySOYXMfxiZERRx/ILPTqA/K9fv8K5f4EG3Pn5i+EfSB2SWpaf6G6A2vgP6NSrWzYz3J8zk0Hk9SsGVka0ePzLxs7w9ydC+3+gpn29PQzv9uxiEHz7mkEY6ESQPb+QHMbMwcHAwiotw/Dj3h2E6L+/DIyrljKIgCMLGMoMmCmLQ0qagdnh66fn/xgYfP+B9BCJv79/lw5KcrPISKqzGMlN5AABBgBSmY83jVsiQAAAAABJRU5ErkJggg==";
        var Je = o(58612),
          $e = o(34360),
          qe = o(34736),
          ve = o(85599),
          Ee = o(71421),
          et = o(99312),
          I = o.n(et),
          tt = o(99412),
          st = o(72849),
          nt = o(71742),
          ot = o(21254),
          rt = o(55436),
          at = o(64233),
          it = o(75909);
        const lt = (0, T.PA)((n) => {
          const {
              clanSteamID: e,
              inputClanImage: s,
              nWidth: r,
              nHeight: a,
              setImage: c,
            } = n,
            m = p.useMemo(() => ({ width: r, height: a }), [r, a]),
            [C, P] = p.useState(void 0),
            [H, Ce] = p.useState(!!s),
            [ge, xe] = p.useState(!1),
            J = (0, it.zO)(e, "dummy"),
            Te = p.useCallback(
              async (k) => {
                if (
                  (J.ClearImages(),
                  k && (Ce(!0), await J.AddExistingClanImage(k, tt.Bhc)))
                ) {
                  P(k);
                  const N = J.GetUploadImages()[0].IsValidAssetType(m);
                  N.error.length == 0 &&
                    !N.needsCrop &&
                    (!s || s.image_hash != k.image_hash) &&
                    c(k);
                }
                Ce(!1);
              },
              [J, s, c, m],
            );
          p.useEffect(() => {
            Te(s);
          }, [Te, s]);
          const me = (k) => {
              const Y = new D.b(Q.UF.CLANSTEAMID);
              (0, ae.pg)(
                (0, t.jsx)(rt.z, {
                  clanSteamID: Y,
                  fnImageSelectCallBack: (N) => Te(N),
                }),
                (0, ce.uX)(k) ?? window,
              );
            },
            _e = (k) => {
              const Y = (0, ce.uX)(k) ?? window;
              let N = J.GetUploadImages()[0];
              (0, ae.pg)(
                (0, t.jsx)(ot.q, {
                  ownerWin: Y,
                  uploadFile: N,
                  forceResolution: { width: r, height: a },
                  fileType: st.bg.dU,
                }),
                Y,
              );
            },
            Oe = async () => {
              xe(!0);
              try {
                const k = await J.UploadAllImages(m),
                  Y = Object.values(k);
                if (Y && Y.length > 0) {
                  (0, nt.wT)(
                    Y.length == 1,
                    "ClanImagePickForCertainSize expected size 1, got " +
                      Y.length,
                  );
                  const N = Y[0].bSuccess ? Y[0].uploadResult : void 0,
                    Ue = S.zU.GetHashAndExt(N ?? null),
                    we = S.zU.GetThumbHashAndExt(N ?? null);
                  if (N?.image_hash && N.file_type !== void 0 && Ue && we) {
                    const _t = S.zU.GenerateURLFromHashAndExt(e, Ue),
                      Ot = S.zU.GenerateURLFromHashAndExt(e, we),
                      He = {
                        imageid: -11231412,
                        image_hash: N.image_hash,
                        thumbnail_hash: N.thumbnail_hash,
                        file_type: N.file_type,
                        file_name: N.file_name,
                        clanAccountID: e.GetAccountID(),
                        url: _t,
                        thumb_url: Ot,
                        uploaded_time: Date.now() / 1e3,
                      };
                    P(He), c(He);
                  }
                }
              } finally {
                xe(!1);
              }
            };
          let Ie = "",
            R = !1,
            ie;
          if (J && J.GetFilesToUpload().length > 0) {
            ie = J.GetUploadImages()[0];
            const k = ie.IsValidAssetType(m);
            (Ie = k.error), (R = k.needsCrop);
          }
          return (0, t.jsxs)(t.Fragment, {
            children: [
              H
                ? (0, t.jsx)(ve.t, {
                    size: "medium",
                    string: (0, i.we)("#Loading"),
                  })
                : C &&
                  (0, t.jsx)("div", {
                    className: at.Image,
                    style: {
                      backgroundImage: `url( '${ie ? ie.dataUrl : C.url}' )`,
                      height: `${a}px`,
                      width: `${r}px`,
                    },
                  }),
              !!Ie && (0, t.jsx)("p", { children: Ie }),
              R &&
                (0, t.jsx)(G.$n, {
                  onClick: _e,
                  children: (0, i.we)("#BBCode_ResizeImage"),
                }),
              ie &&
                ie.bCropped &&
                (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, i.we)(
                        "#ClanImagePickAndResize_UploadStatus",
                        ie.status,
                      ),
                    }),
                    ge
                      ? (0, t.jsx)(ve.t, {
                          string: (0, i.we)("#Uploading"),
                          size: "small",
                        })
                      : (0, t.jsx)(G.$n, {
                          onClick: Oe,
                          children: (0, i.we)(
                            "#ClanImagePickAndResize_UploadImage",
                          ),
                        }),
                  ],
                }),
              (0, t.jsx)(G.$n, {
                onClick: me,
                children: (0, i.we)("#BBCode_ChooseImage", r, a),
              }),
            ],
          });
        });
        var ct = o(34592),
          be = Object.defineProperty,
          dt = Object.getOwnPropertyDescriptor,
          ht = (n, e, s) =>
            e in n
              ? be(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (n[e] = s),
          pt = (n, e, s, r) => {
            for (
              var a = r > 1 ? void 0 : r ? dt(e, s) : e, c = n.length - 1, m;
              c >= 0;
              c--
            )
              (m = n[c]) && (a = (r ? m(e, s, a) : m(a)) || a);
            return r && a && be(e, s, a), a;
          },
          ut = (n, e, s) => ht(n, typeof e != "symbol" ? e + "" : e, s);
        let de = class extends p.Component {
          m_cancelSignal = X().CancelToken.source();
          constructor(n) {
            super(n),
              (this.state = {
                formattingHelp: {
                  __html: de.s_formattingHelp.get(n.formatType) ?? "",
                },
              });
          }
          componentDidMount() {
            this.AjaxGetFormattingHelp().catch((n) => {
              this.setState((0, ct.H)(n));
            });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "FormattingHelpWidget component unmounted",
            );
          }
          static GetHelpURL(n, e) {
            return (
              Q.TS.COMMUNITY_BASE_URL +
              "comment/" +
              n +
              "/formattinghelp" +
              (e ? "?ajax=1" : "")
            );
          }
          async AjaxGetFormattingHelp() {
            if (this.state.formattingHelp.__html == "") {
              let n = { sessionid: (0, Q.KC)() },
                e;
              (e = await X().get(de.GetHelpURL(this.props.formatType, !0), {
                params: n,
                cancelToken: this.m_cancelSignal.token,
              })),
                de.s_formattingHelp.set(this.props.formatType, e.data),
                this.setState({ formattingHelp: { __html: e.data } });
            }
          }
          render() {
            return this.state.strErrorMsg
              ? (0, t.jsxs)("div", {
                  children: [
                    this.state.strErrorMsg,
                    (0, t.jsx)("br", {}),
                    this.state.errorCode,
                  ],
                })
              : this.state.formattingHelp.__html == ""
                ? (0, t.jsx)(ve.t, {})
                : (0, t.jsx)(re.o0, {
                    strTitle: (0, i.we)(
                      "#EventEditor_FormattingHelp_GetHelpLink",
                    ),
                    strDescription: "",
                    closeModal: this.props.closeModal,
                    onOK: this.props.closeModal,
                    onCancel: this.props.closeModal,
                    bAlertDialog: !0,
                    className: "ModernBBStyles",
                    children: (0, t.jsx)("div", {
                      dangerouslySetInnerHTML: this.state.formattingHelp,
                    }),
                  });
          }
        };
        ut(de, "s_formattingHelp", new Map()), (de = pt([T.PA], de));
        var Re = o(38340),
          _ = o(1917),
          gt = o(11243),
          Ae = Object.defineProperty,
          mt = Object.getOwnPropertyDescriptor,
          ft = (n, e, s) =>
            e in n
              ? Ae(n, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s,
                })
              : (n[e] = s),
          g = (n, e, s, r) => {
            for (
              var a = r > 1 ? void 0 : r ? mt(e, s) : e, c = n.length - 1, m;
              c >= 0;
              c--
            )
              (m = n[c]) && (a = (r ? m(e, s, a) : m(a)) || a);
            return r && a && Ae(e, s, a), a;
          },
          vt = (n, e, s) => ft(n, typeof e != "symbol" ? e + "" : e, s);
        let pe = class extends p.Component {
          descAutoTextAreaRef = p.createRef();
          constructor(n) {
            super(n), (this.state = { bShowDragTarget: !1 });
          }
          componentDidMount() {
            M.pU.AddClanImageDragListener(this.ClanImageDragListener);
          }
          componentWillUnmount() {
            M.pU.RemoveClanImageDragListener(this.ClanImageDragListener);
          }
          ClanImageDragListener(n, e) {
            this.state.bShowDragTarget != e &&
              this.setState({ bShowDragTarget: e });
          }
          onFocus(n) {
            n && n.target.select();
          }
          InsertText(n) {
            L.replaceSelection(this.GetTextAreaRef()?.current, n);
          }
          OnTextAreaDropListener(n) {
            if (
              (n.preventDefault(),
              n.stopPropagation(),
              n.dataTransfer.items && n.dataTransfer.items[0])
            ) {
              let e = n.dataTransfer.getData("text");
              if (e && e.length > 0) {
                for (let s of [S.zU.GetBaseURL(), S.zU.GetBaseURLV2()])
                  if (e.startsWith(s)) {
                    let r =
                      "[img]" + Re.lw + "/" + e.substr(s.length) + "[/img]";
                    L.replaceSelection(this.GetTextAreaRef()?.current, r);
                    break;
                  }
              }
            }
          }
          GetTextAreaRef() {
            return this.descAutoTextAreaRef.current?.GetTextAreaRef();
          }
          render() {
            return (0, t.jsxs)(p.Fragment, {
              children: [
                (0, t.jsx)(b, {
                  pathToImages:
                    Q.TS.COMMUNITY_CDN_URL +
                    "public/images/sharedfiles/guides/",
                  fnTextareaRef: this.GetTextAreaRef,
                  emoticonStore: this.props.emoticonStore,
                  supportBBCodes: this.props.limitBBCode
                    ? this.props.limitBBCode
                    : V.Kl,
                  bSupportHTMLImport: this.props.bSupportHTMLImport,
                  showFormatHelp: this.props.showFormatHelp,
                  bEmbeddedInDialog: this.props.bEmbeddedInDialog,
                  clanSteamID: this.props.clanSteamID,
                }),
                (0, t.jsx)("div", {
                  className: (0, A.A)(
                    I().DescriptionCtn,
                    I().BBCodeEditorInputStyles,
                    this.state.bShowDragTarget ? I().DragTarget : "",
                    this.props.className ? this.props.className : "",
                  ),
                  children: (0, t.jsx)(Z, {
                    cols: 90,
                    rows: this.props.nOverridesRows || 22,
                    maxLength: 64e3,
                    className: (0, A.A)(
                      I().DefaultEditor,
                      this.props.classNameForTextArea
                        ? this.props.classNameForTextArea
                        : "",
                    ),
                    placeholder: this.props.strPlaceholder,
                    ref: this.descAutoTextAreaRef,
                    value: this.props.fnGetCurText(),
                    onChange: this.props.fnOnTextChange,
                    onDrop: this.OnTextAreaDropListener,
                    emoticonStore: this.props.emoticonStore,
                    fnSetText: this.props.fnSetText,
                    supportBBCodes: this.props.limitBBCode
                      ? this.props.limitBBCode
                      : V.Kl,
                  }),
                }),
              ],
            });
          }
        };
        g([l.oI], pe.prototype, "ClanImageDragListener", 1),
          g([l.oI], pe.prototype, "onFocus", 1),
          g([l.oI], pe.prototype, "OnTextAreaDropListener", 1),
          g([l.oI], pe.prototype, "GetTextAreaRef", 1),
          (pe = g([T.PA], pe));
        class L {
          static BIsFireFox() {
            return !!new RegExp(/Firefox\/([0-9\.]+)(?:\s|$)/i).exec(
              navigator.userAgent,
            );
          }
          static replaceSelection(e, s) {
            if (!e) return;
            let r = e.selectionStart;
            e.focus(),
              L.InsertTextAtSelect(s, e),
              e.setSelectionRange(r, r + s.length);
          }
          static getSelectedString(e) {
            return e
              ? e.value.substr(
                  e.selectionStart,
                  e.selectionEnd - e.selectionStart,
                )
              : "";
          }
          static wrapBBCode(e, s, r) {
            if (!r) return;
            let a = L.getSelectedString(r),
              c = "";
            a.indexOf(e) == 0 && a.lastIndexOf(s) == a.length - s.length
              ? (c = a.substr(e.length, a.length - e.length - s.length))
              : (c = e + a + s),
              L.replaceSelection(r, c);
          }
          static append(e, s) {
            s &&
              (s.focus(),
              s.setSelectionRange(s.value.length, s.value.length),
              L.InsertTextAtSelect(e, s));
          }
          static ClearTextArea(e) {
            if (e) {
              e.focus();
              const s = 0,
                r = e.value.length;
              if (s !== r) {
                e.setRangeText
                  ? e.setRangeText("", s, r, "preserve")
                  : (e.value = "");
                const a = new Event("input", { bubbles: !0 });
                e.dispatchEvent(a);
              }
              e.focus();
            }
          }
          static overwrite(e, s) {
            s && (L.ClearTextArea(s), L.InsertTextAtSelect(e, s));
          }
          static InsertTextAtSelect(e, s) {
            const r = s.selectionStart,
              a = s.selectionEnd;
            if (r !== null && a !== null) {
              s.setRangeText
                ? s.setRangeText(e, r, a, "preserve")
                : (s.value = s.value.slice(0, r) + e + s.value.slice(a));
              const c = new Event("input", { bubbles: !0 });
              s.dispatchEvent(c),
                (s.selectionStart = s.selectionEnd = r + e.length);
            }
            s.focus();
          }
        }
        let b = class extends p.Component {
          m_linkPopupRef = p.createRef();
          onBold() {
            L.wrapBBCode("[b]", "[/b]", this.props.fnTextareaRef()?.current);
          }
          onItalics() {
            L.wrapBBCode("[i]", "[/i]", this.props.fnTextareaRef()?.current);
          }
          onUnderline() {
            L.wrapBBCode("[u]", "[/u]", this.props.fnTextareaRef()?.current);
          }
          onStrikeThrough() {
            L.wrapBBCode(
              "[strike]",
              "[/strike]",
              this.props.fnTextareaRef()?.current,
            );
          }
          onHeader() {
            L.wrapBBCode("[h1]", "[/h1]", this.props.fnTextareaRef()?.current);
          }
          onHeader2() {
            L.wrapBBCode("[h2]", "[/h2]", this.props.fnTextareaRef()?.current);
          }
          onHeader3() {
            L.wrapBBCode("[h3]", "[/h3]", this.props.fnTextareaRef()?.current);
          }
          onUnorderedList() {
            this.handleList("list");
          }
          onOrderedList() {
            this.handleList("olist");
          }
          handleList(n) {
            let e = this.props.fnTextareaRef()?.current;
            if (!e) return;
            let s =
                "[" +
                n +
                `]
`,
              r = "[/" + n + "]";
            if (e.selectionStart == e.selectionEnd)
              L.wrapBBCode(
                s + "[*]",
                `
` + r,
                e,
              );
            else {
              let a = L.getSelectedString(e),
                c =
                  s +
                  a
                    .split(`
`)
                    .map((m) => (m.match(/\*+\s/) ? "[*]" : "[*] ") + m)
                    .join(`
`) +
                  `
` +
                  r;
              L.replaceSelection(e, c);
            }
          }
          OnAddLink(n) {
            const e = this.props.fnTextareaRef();
            e &&
              (0, ae.HT)(
                (0, t.jsx)(he, { textareaRef: e }),
                (0, ce.uX)(n) ?? window,
              );
          }
          ShowHelpDialog(n) {
            this.props.showFormatHelp &&
              (0, ae.HT)(
                (0, t.jsx)(de, { formatType: this.props.showFormatHelp }),
                (0, ce.uX)(n) ?? window,
              );
          }
          OnConvertHTMLToBBCodeDialog(n) {
            const e = this.props.fnTextareaRef();
            if (!e) return;
            const s = (0, ce.uX)(n) ?? window;
            (0, ae.HT)((0, t.jsx)(ue, { ownerWindow: s, textareaRef: e }), s);
          }
          OnOpenYoutubeDialog(n) {
            const e = this.props.fnTextareaRef();
            if (!e) return;
            let s = Q.TS.IMG_URL + "applications/community/";
            (0, ae.HT)(
              (0, t.jsx)(se, { textareaRef: e, pathToImages: s }),
              (0, ce.uX)(n) ?? window,
            );
          }
          OnOpenImageDialog(n) {
            const e = this.props.fnTextareaRef();
            e &&
              (0, ae.HT)(
                (0, t.jsx)(Se, { textareaRef: e }),
                (0, ce.uX)(n) ?? window,
              );
          }
          OnOpenSpeakerDialog(n) {
            const e = this.props.fnTextareaRef(),
              s = this.props.clanSteamID;
            !e ||
              !s ||
              (0, ae.pg)(
                (0, t.jsx)(St, { clanSteamID: s, textareaRef: e }),
                (0, ce.uX)(n) ?? window,
              );
          }
          OnEmoticonSelected(n, e = !1) {
            let s = `\u02D0${n}\u02D0`;
            L.replaceSelection(this.props.fnTextareaRef()?.current, s),
              this.props.fnTextareaRef()?.current?.focus();
          }
          BSupports(n) {
            return this.props.supportBBCodes.findIndex((e) => e == n) >= 0;
          }
          render() {
            const {
              showFormatHelp: n,
              bEmbeddedInDialog: e,
              bSupportHTMLImport: s,
              pathToImages: r,
            } = this.props;
            let a;
            return (
              n &&
                (e
                  ? (a = (0, t.jsx)("span", {
                      className: (0, A.A)("ttip", I().ActionGetHelp),
                      children: (0, t.jsx)(Ee.he, {
                        toolTipContent: (0, i.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: (0, t.jsxs)("a", {
                          href: de.GetHelpURL(n, !1),
                          target: Q.TS.IN_CLIENT ? void 0 : "_blank",
                          children: [
                            (0, t.jsx)("img", { src: r + "/action_help.png" }),
                            " ",
                            (0, i.we)(
                              "#EventEditor_FormattingHelp_GetHelpLink",
                            ),
                          ],
                        }),
                      }),
                    }))
                  : (a = (0, t.jsx)("span", {
                      onClick: this.ShowHelpDialog,
                      className: (0, A.A)("ttip", I().ActionGetHelp),
                      children: (0, t.jsxs)(Ee.he, {
                        toolTipContent: (0, i.we)(
                          "#EventEditor_FormattingHelp_GetHelpLink",
                        ),
                        children: [
                          (0, t.jsx)("img", { src: r + "/action_help.png" }),
                          " ",
                          (0, i.we)("#EventEditor_FormattingHelp_GetHelpLink"),
                        ],
                      }),
                    }))),
              (0, t.jsxs)("div", {
                className: I().TextEditorToolBarContainer,
                children: [
                  this.BSupports("b") &&
                    (0, t.jsx)(K, {
                      onClick: this.onBold,
                      tooltip: (0, i.we)("#Editor_Bold"),
                      imgURL: this.props.pathToImages + "/format_bold.png",
                    }),
                  this.BSupports("u") &&
                    (0, t.jsx)(K, {
                      onClick: this.onUnderline,
                      tooltip: (0, i.we)("#Editor_Underline"),
                      imgURL: this.props.pathToImages + "/format_underline.png",
                    }),
                  this.BSupports("i") &&
                    (0, t.jsx)(K, {
                      onClick: this.onItalics,
                      tooltip: (0, i.we)("#Editor_Italics"),
                      imgURL: this.props.pathToImages + "/format_italic.png",
                    }),
                  this.BSupports("strike") &&
                    (0, t.jsx)(K, {
                      onClick: this.onStrikeThrough,
                      tooltip: (0, i.we)("#Editor_StrikeThrough"),
                      imgURL: this.props.pathToImages + "/format_strike.png",
                    }),
                  !!(this.BSupports("url") && !e) &&
                    (0, t.jsx)(K, {
                      onClick: this.OnAddLink,
                      tooltip: (0, i.we)("#Editor_Link"),
                      imgURL: this.props.pathToImages + "/format_link.png",
                    }),
                  this.BSupports("list") &&
                    (0, t.jsx)(K, {
                      onClick: this.onUnorderedList,
                      tooltip: (0, i.we)("#Editor_Unordered"),
                      imgURL: this.props.pathToImages + "/format_bullet.png",
                    }),
                  this.BSupports("olist") &&
                    (0, t.jsx)(K, {
                      onClick: this.onOrderedList,
                      tooltip: (0, i.we)("#Editor_Ordered"),
                      imgURL: this.props.pathToImages + "/format_numbered.png",
                    }),
                  this.BSupports("h1") &&
                    (0, t.jsx)(K, {
                      onClick: this.onHeader,
                      tooltip: (0, i.we)("#Editor_Header"),
                      imgURL: this.props.pathToImages + "/format_header1.png",
                    }),
                  this.BSupports("h2") &&
                    (0, t.jsx)(K, {
                      onClick: this.onHeader2,
                      tooltip: (0, i.we)("#Editor_Header2"),
                      imgURL: this.props.pathToImages + "/format_header2.png",
                    }),
                  this.BSupports("h3") &&
                    (0, t.jsx)(K, {
                      onClick: this.onHeader3,
                      tooltip: (0, i.we)("#Editor_Header3"),
                      imgURL: this.props.pathToImages + "/format_header3.png",
                    }),
                  this.BSupports("previewyoutube") &&
                    (0, t.jsx)(K, {
                      onClick: this.OnOpenYoutubeDialog,
                      tooltip: (0, i.we)("#EventEditor_InsertYouTube"),
                      imgURL: Qe,
                    }),
                  (0, t.jsx)("span", {
                    className: "ttip",
                    children:
                      this.props.emoticonStore &&
                      (0, t.jsx)(Ee.he, {
                        toolTipContent: (0, i.we)("#Editor_Emoticon"),
                        children: (0, t.jsx)(Ye.A, {
                          title: " ",
                          className: (0, A.A)(I().EmoteOuter),
                          disabled: !1,
                          OnEmoticonSelected: this.OnEmoticonSelected,
                          rtLastAckedNewEmoticons: Number.MAX_VALUE,
                          emoticonStore: this.props.emoticonStore,
                          useImg: this.props.pathToImages + "/format_emote.png",
                          contextOptions: {
                            bOverlapHorizontal: !0,
                            bDisablePopTop: !0,
                          },
                        }),
                      }),
                  }),
                  !!(this.BSupports("img") && !e) &&
                    (0, t.jsx)(K, {
                      onClick: this.OnOpenImageDialog,
                      tooltip: (0, i.we)("#EventEditor_InsertImage"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(
                    Q.iA.is_support &&
                    this.props.clanSteamID &&
                    this.BSupports("speaker")
                  ) &&
                    (0, t.jsx)(K, {
                      onClick: this.OnOpenSpeakerDialog,
                      tooltip: (0, i.we)("#EventEditor_AddSpeaker"),
                      imgURL: this.props.pathToImages + "/insert_img.png",
                    }),
                  !!(s && !e) &&
                    (0, t.jsx)(K, {
                      onClick: this.OnConvertHTMLToBBCodeDialog,
                      className: I().ActionImportHTML,
                      tooltip: (0, i.we)("#EventEditor_ImportFromHTML_ttip"),
                      children: (0, i.we)("#EventEditor_ImportHTML"),
                    }),
                  a,
                ],
              })
            );
          }
        };
        g([l.oI], b.prototype, "onBold", 1),
          g([l.oI], b.prototype, "onItalics", 1),
          g([l.oI], b.prototype, "onUnderline", 1),
          g([l.oI], b.prototype, "onStrikeThrough", 1),
          g([l.oI], b.prototype, "onHeader", 1),
          g([l.oI], b.prototype, "onHeader2", 1),
          g([l.oI], b.prototype, "onHeader3", 1),
          g([l.oI], b.prototype, "onUnorderedList", 1),
          g([l.oI], b.prototype, "onOrderedList", 1),
          g([l.oI], b.prototype, "OnAddLink", 1),
          g([l.oI], b.prototype, "ShowHelpDialog", 1),
          g([l.oI], b.prototype, "OnConvertHTMLToBBCodeDialog", 1),
          g([l.oI], b.prototype, "OnOpenYoutubeDialog", 1),
          g([l.oI], b.prototype, "OnOpenImageDialog", 1),
          g([l.oI], b.prototype, "OnOpenSpeakerDialog", 1),
          g([l.oI], b.prototype, "OnEmoticonSelected", 1),
          (b = g([T.PA], b));
        function K(n) {
          return (0, t.jsx)("span", {
            onClick: n.onClick,
            className: n.className,
            children: (0, t.jsxs)(Ee.he, {
              toolTipContent: n.tooltip,
              className: "ttip",
              children: [
                !!n.imgURL && (0, t.jsx)("img", { src: n.imgURL }),
                n.children,
              ],
            }),
          });
        }
        let se = class extends p.Component {
          state = { youtubeInput: "", alignment: _.V2.left };
          OnYoutubeInsertLink() {
            const n =
              this.state.youtubeInput && (0, O.XU)(this.state.youtubeInput);
            if (!n) {
              alert((0, i.we)("#EventEditor_InsertYouTube_NoURL"));
              return;
            }
            if (this.state.alignment == _.V2.summary) {
              const e =
                "https://www.youtube.com/watch?v=" +
                n.strVideoID +
                (n.nStartSeconds ? "&t=" + n.nStartSeconds : "");
              L.wrapBBCode(e, "", this.props.textareaRef.current);
            } else {
              let e =
                "[previewyoutube=" +
                n.strVideoID +
                ";" +
                this.state.alignment +
                "]";
              L.wrapBBCode(
                e,
                "[/previewyoutube]",
                this.props.textareaRef.current,
              );
            }
            this.setState({ youtubeInput: "", alignment: _.V2.left });
          }
          OnUrlChange(n) {
            this.state.youtubeInput != n.target.value &&
              this.setState({ youtubeInput: n.target.value });
          }
          OnLeftSelected() {
            this.setState({ alignment: _.V2.left });
          }
          OnRightSelected() {
            this.setState({ alignment: _.V2.right });
          }
          OnFullSelected() {
            this.setState({ alignment: _.V2.full });
          }
          OnSummarySelected() {
            this.setState({ alignment: _.V2.summary });
          }
          OnOuterDivClickPassDown(n) {}
          render() {
            return (0, t.jsx)(re.o0, {
              strTitle: (0, i.we)("#EventEditor_InsertYouTube"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnYoutubeInsertLink,
              strOKButtonText: (0, i.we)("#EventEditor_InsertYouTube"),
              className: I().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: I().YouTubeInput,
                children: [
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, i.we)("#EventEditor_InsertYouTube_URL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            ref: (n) => {
                              n?.focus();
                            },
                            type: "text",
                            value: this.state.youtubeInput,
                            onChange: this.OnUrlChange,
                            placeholder: (0, i.we)(
                              "#EventEditor_InsertYouTube_Placholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: "DialogInputLabelGroup",
                    children: [
                      (0, t.jsx)("div", {
                        className: "DialogLabel",
                        children: (0, i.we)(
                          "#EventEditor_InsertYouTube_Position",
                        ),
                      }),
                      (0, t.jsxs)("div", {
                        className: I().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: _.V2.left,
                            value: _.V2.left,
                            checked: this.state.alignment == _.V2.left,
                            onChange: this.OnLeftSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: _.V2.left,
                            children: (0, t.jsx)("span", {
                              children: (0, i.we)(
                                "#EventEditor_InsertYouTube_Left",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: I().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: _.V2.right,
                            value: _.V2.right,
                            checked: this.state.alignment == _.V2.right,
                            onChange: this.OnRightSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: _.V2.right,
                            children: (0, t.jsx)("span", {
                              children: (0, i.we)(
                                "#EventEditor_InsertYouTube_Right",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: I().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: _.V2.full,
                            value: _.V2.full,
                            checked: this.state.alignment == _.V2.full,
                            onChange: this.OnFullSelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: _.V2.full,
                            children: (0, t.jsx)("span", {
                              children: (0, i.we)(
                                "#EventEditor_InsertYouTube_Full",
                              ),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: I().YouTubePreviewInsertOption,
                        onClick: this.OnOuterDivClickPassDown,
                        children: [
                          (0, t.jsx)("input", {
                            type: "radio",
                            name: "YouTubePreviewInsertType",
                            id: _.V2.summary,
                            value: _.V2.summary,
                            checked: this.state.alignment == _.V2.summary,
                            onChange: this.OnSummarySelected,
                          }),
                          (0, t.jsx)("label", {
                            htmlFor: _.V2.summary,
                            children: (0, t.jsx)("span", {
                              children: (0, i.we)(
                                "#EventEditor_InsertYouTube_Summary",
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        };
        g([l.oI], se.prototype, "OnYoutubeInsertLink", 1),
          g([l.oI], se.prototype, "OnUrlChange", 1),
          g([l.oI], se.prototype, "OnLeftSelected", 1),
          g([l.oI], se.prototype, "OnRightSelected", 1),
          g([l.oI], se.prototype, "OnFullSelected", 1),
          g([l.oI], se.prototype, "OnSummarySelected", 1),
          g([l.oI], se.prototype, "OnOuterDivClickPassDown", 1),
          (se = g([T.PA], se));
        let he = class extends p.Component {
          state = { textToDisplay: "", strURL: "" };
          LoadFromTextArea() {
            const { textareaRef: n } = this.props;
            if (n && n.current) {
              let e = L.getSelectedString(n.current),
                s = he.m_regExp.exec(e);
              s
                ? this.setState({ strURL: s[1], textToDisplay: s[2] })
                : this.setState({ textToDisplay: e });
            }
          }
          componentDidMount() {
            this.LoadFromTextArea();
          }
          onLinkTitleUpdate(n) {
            this.setState({ textToDisplay: n.target.value });
          }
          onLinkURLUpdate(n) {
            this.setState({ strURL: n.target.value });
          }
          onInsertLink() {
            const { strURL: n, textToDisplay: e } = this.state;
            let s = "[url=" + n + "]" + e + "[/url]";
            L.replaceSelection(this.props.textareaRef.current, s);
          }
          render() {
            return (0, t.jsx)(re.o0, {
              strTitle: (0, i.we)("#Editor_Link"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onOK: this.onInsertLink,
              onCancel: this.props.closeModal,
              strOKButtonText: (0, i.we)("#EventEditor_InsertLinkURL"),
              className: I().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: I().EventEditorLinkInput,
                children: [
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, i.we)("#EventEditor_LinkDescription"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkTitleUpdate,
                            value: this.state.textToDisplay,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, i.we)("#EventEditor_LinkURL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            type: "text",
                            onChange: this.onLinkURLUpdate,
                            value: this.state.strURL,
                            className: "DialogInput DialogTextInputBase",
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        vt(he, "m_regExp", new RegExp(/\[url=([^\]]*)\]([^\[\]]+)\[\/url\]/i)),
          g([l.oI], he.prototype, "onLinkTitleUpdate", 1),
          g([l.oI], he.prototype, "onLinkURLUpdate", 1),
          g([l.oI], he.prototype, "onInsertLink", 1),
          (he = g([T.PA], he));
        let Se = class extends p.Component {
          refFirstInput = p.createRef();
          state = { imgURL: "", anchorURL: "" };
          componentDidMount() {
            this.refFirstInput.current?.focus();
          }
          OnImageInsert() {
            const { anchorURL: n, imgURL: e } = this.state;
            let s = "",
              r = "";
            n && n.length > 0 && ((s += "[url=" + n + "]"), (r = "[/url]" + r)),
              (s += "[img]" + e),
              (r = "[/img]" + r),
              L.wrapBBCode(s, r, this.props.textareaRef.current);
          }
          OnImageURLChange(n) {
            this.state.imgURL != n.target.value &&
              this.setState({ imgURL: n.target.value });
          }
          OnAnchorURLChange(n) {
            this.state.anchorURL != n.target.value &&
              this.setState({ anchorURL: n.target.value });
          }
          render() {
            const { imgURL: n, anchorURL: e } = this.state;
            return (0, t.jsx)(re.o0, {
              strTitle: (0, i.we)("#EventEditor_InsertImage_Title"),
              strDescription: "",
              closeModal: this.props.closeModal,
              onCancel: this.props.closeModal,
              onOK: this.OnImageInsert,
              strOKButtonText: (0, i.we)("#EventEditor_InsertImage_Title"),
              className: I().BBCodeEditorInputStyles,
              children: (0, t.jsxs)("div", {
                className: I().EventEditorLinkInput,
                children: [
                  (0, t.jsx)("p", {
                    children: (0, i.we)("#EventEditor_InsertImage_Desc"),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, i.we)("#EventEditor_InsertImage_URL"),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: n,
                            onChange: this.OnImageURLChange,
                            placeholder: (0, i.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                            ref: this.refFirstInput,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "DialogInputLabelGroup",
                    children: (0, t.jsxs)("label", {
                      children: [
                        (0, t.jsx)("div", {
                          className: "DialogLabel",
                          children: (0, i.we)(
                            "#EventEditor_InsertImage_Anchor",
                          ),
                        }),
                        (0, t.jsx)("div", {
                          className: "DialogInput_Wrapper",
                          children: (0, t.jsx)("input", {
                            className: "DialogInput DialogTextInputBase",
                            type: "text",
                            value: e,
                            onChange: this.OnAnchorURLChange,
                            placeholder: (0, i.we)(
                              "#EventEditor_InsertImage_Placeholder",
                            ),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        g([l.oI], Se.prototype, "OnImageInsert", 1),
          g([l.oI], Se.prototype, "OnImageURLChange", 1),
          g([l.oI], Se.prototype, "OnAnchorURLChange", 1),
          (Se = g([T.PA], Se));
        const St = (n) => {
          const [e, s] = p.useState(""),
            [r, a] = p.useState(""),
            [c, m] = p.useState(""),
            [C, P] = p.useState(""),
            [H, Ce] = p.useState(void 0),
            [ge, xe] = p.useState(void 0),
            { data: J } = (0, Je.Dv)(),
            { isLoading: Te, data: me } = (0, w.js)(ge?.GetAccountID()),
            _e = () => {
              let R = `[speaker name="${e.trim()}"`;
              if (
                (r.trim().length > 0 && (R += ` title="${r}"`),
                c.trim().length > 0 && (R += ` company="${c}"`),
                H)
              ) {
                const ie =
                  Re.lw + "/" + H.clanAccountID + "/" + S.zU.GetHashAndExt(H);
                R += ` photo="${ie}"`;
              }
              ge && (R += ` steamid="${ge.ConvertTo64BitString()}"`),
                (R += `]${C}[/speaker]`),
                L.replaceSelection(n.textareaRef.current, R);
            },
            Oe = e.trim().length != 0 && C.trim().length != 0,
            Ie = 184;
          return (0, t.jsx)(re.o0, {
            strTitle: (0, i.we)("#EventEditor_AddSpeaker"),
            strDescription: (0, i.we)("#EventEditor_AddSpeaker_Desc"),
            closeModal: n.closeModal,
            onCancel: n.closeModal,
            bOKDisabled: !Oe,
            onOK: _e,
            className: I().BBCodeEditorInputStyles,
            children: (0, t.jsxs)("div", {
              className: I().InsertSpeakerCtn,
              children: [
                (0, t.jsx)(G.pd, {
                  type: "text",
                  label: (0, i.we)("#EventEditor_AddSpeaker_Name"),
                  value: e,
                  onChange: (R) => s(R.target.value),
                  focusOnMount: !0,
                }),
                (0, t.jsxs)("div", {
                  className: I().TitleGroup,
                  children: [
                    (0, t.jsx)(G.pd, {
                      type: "text",
                      label: (0, i.we)("#EventEditor_AddSpeaker_Title"),
                      value: r,
                      onChange: (R) => a(R.target.value),
                    }),
                    (0, t.jsx)(G.pd, {
                      type: "text",
                      label: (0, i.we)("#EventEditor_AddSpeaker_Company"),
                      value: c,
                      onChange: (R) => m(R.target.value),
                    }),
                  ],
                }),
                (0, t.jsx)(Ee.he, {
                  toolTipContent: (0, i.we)(
                    "#EventEditor_AssociateSteamAccount_ttip",
                  ),
                  children: (0, t.jsxs)("div", {
                    className: "DialogLabel",
                    children: [
                      (0, i.we)("#EventEditor_AssociateSteamAccount"),
                      " (?)",
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  children: [
                    Te &&
                      (0, t.jsx)(ve.t, {
                        string: (0, i.we)("#Loading"),
                        size: "small",
                      }),
                    ge &&
                      me &&
                      (0, t.jsxs)("a", {
                        href:
                          Q.TS.COMMUNITY_BASE_URL +
                          "profiles/" +
                          ge.ConvertTo64BitString(),
                        target: "_blank",
                        children: [
                          me
                            ? (0, t.jsx)("img", {
                                style: { marginRight: "8px" },
                                src: me.avatar_url,
                              })
                            : null,
                          me ? me.m_strPlayerName : null,
                        ],
                      }),
                    (0, t.jsxs)("div", {
                      className: I().AssociateRowCtn,
                      children: [
                        (0, t.jsx)(G.$n, {
                          onClick: () => xe(new D.b(Q.iA.steamid)),
                          children: (0, i.we)(
                            "#EventEditor_SteamAccount_addme",
                          ),
                        }),
                        (0, t.jsx)(G.$n, {
                          onClick: (R) =>
                            (0, f.lX)(
                              (0, t.jsx)(Ct, {
                                friends: J ?? [],
                                setSteamID: xe,
                              }),
                              R,
                            ),
                          children: (0, i.we)(
                            "#EventEditor_SteamAccount_addfriend",
                          ),
                        }),
                        (0, t.jsx)(G.$n, {
                          onClick: () => xe(void 0),
                          children: (0, i.we)(
                            "#EventEditor_SteamAccount_clear",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: I().PhotoCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, i.we)("#EventEditor_ChoosePhoto"),
                    }),
                    (0, t.jsx)(lt, {
                      clanSteamID: n.clanSteamID,
                      inputClanImage: H,
                      setImage: Ce,
                      nWidth: Ie,
                      nHeight: Ie,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: I().AboutCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, i.we)("#EventEditor_AddSpeaker_About"),
                    }),
                    (0, t.jsx)(G.Cl, {
                      value: C,
                      onChange: (R) => P(R.target.value),
                      rows: 8,
                      cols: 80,
                      nMinHeight: 40,
                      placeholder: (0, i.we)(
                        "#EventEditor_AddSpeaker_About_Placeholder",
                      ),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: I().PreviewCtn,
                  children: [
                    (0, t.jsx)("div", {
                      className: "DialogLabel",
                      children: (0, i.we)("#Button_Preview"),
                    }),
                    (0, t.jsx)(qe.$k, {
                      company: c,
                      name: e,
                      title: r,
                      bioString: C,
                      photo: H ? H.url : void 0,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
        function Ct(n) {
          const { friends: e, setSteamID: s } = n;
          return (0, t.jsx)("div", {
            className: I().DropDownScroll,
            children: e.map((r) =>
              (0, t.jsx)(xt, { steamid: r, setSteamID: s }, r),
            ),
          });
        }
        function xt(n) {
          const { steamid: e, setSteamID: s } = n,
            { data: r } = (0, w.js)(e);
          return (0, t.jsx)($e.kt, {
            onSelected: () => s(new D.b(e)),
            children: (0, t.jsxs)("div", {
              style: { display: "flex", alignItems: "center" },
              children: [
                r &&
                  (0, t.jsx)("img", {
                    className: Ze().WhitelistAvatar,
                    src: r.avatar_url,
                  }),
                r?.m_strPlayerName,
              ],
            }),
          });
        }
        let ue = class extends p.Component {
          m_isMounted = !1;
          m_bAppend = !1;
          constructor(n) {
            super(n), (this.state = { bPreserveNewLines: !1, strHTMLData: "" });
          }
          componentDidMount() {
            this.m_isMounted = !0;
          }
          componentWillUnmount() {
            this.m_isMounted = !1;
          }
          OnConvertAndOverriteHTML() {
            (this.m_bAppend = !1), this.ConvertBBCode();
          }
          OnConvertAndAppendHTML() {
            (this.m_bAppend = !0), this.ConvertBBCode();
          }
          async ConvertHtmlToBBCode(n, e) {
            let s = new URLSearchParams();
            return (
              s.append("content", n),
              s.append("preserve_newlines", e ? "1" : "0"),
              (
                await X().post(
                  Q.TS.COMMUNITY_BASE_URL + "/actions/ConvertHTMLToBBCode",
                  s,
                )
              ).data.content
            );
          }
          ConvertBBCode() {
            this.setState({ bConverting: !0 }),
              this.ConvertHtmlToBBCode(
                this.state.strHTMLData,
                this.state.bPreserveNewLines,
              )
                .then((n) => {
                  this.m_isMounted &&
                    (this.m_bAppend
                      ? L.append(n, this.props.textareaRef.current)
                      : L.overwrite(n, this.props.textareaRef.current),
                    this.setState({
                      bConverting: !1,
                      bFinishedConverting: !0,
                    }));
                })
                .catch((n) => {
                  (0, ae.pg)(
                    (0, t.jsx)(re.KG, {
                      strTitle: (0, i.we)("#EventEditor_ConvertHTML_Error"),
                      strDescription: (0, i.we)(
                        "#EventEditor_ConvertHTML_Error_Desc",
                        n.response && n.response.data ? n.response.data.msg : n,
                      ),
                      bAlertDialog: !0,
                      bDestructiveWarning: !0,
                    }),
                    this.props.ownerWindow,
                    { strTitle: (0, i.we)("#EventEditor_ConvertHTML_Error") },
                  );
                });
          }
          OnCheckboxChange(n) {
            let e = n.target.checked;
            e != this.state.bPreserveNewLines &&
              this.setState({ bPreserveNewLines: e });
          }
          OnTextAreaChange(n) {
            this.setState({ strHTMLData: n.currentTarget.value });
          }
          render() {
            const { closeModal: n } = this.props;
            return this.state.bConverting
              ? (0, t.jsx)(re.o0, {
                  strTitle: (0, i.we)("#EventEditor_ImportFromHTML"),
                  strDescription: (0, i.we)(
                    "#EventEditor_ImportFromHTML_ConversionInProgress",
                  ),
                  closeModal: n,
                  bAlertDialog: !0,
                  onOK: n,
                  onCancel: n,
                  children: (0, t.jsx)(ve.t, {}),
                })
              : this.state.bFinishedConverting
                ? (0, t.jsx)(re.o0, {
                    strTitle: (0, i.we)("#EventEditor_ImportFromHTML"),
                    strDescription: (0, i.we)(
                      "#EventEditor_ImportFromHTML_ConvertFinished",
                    ),
                    closeModal: n,
                    bAlertDialog: !0,
                    onOK: n,
                    onCancel: n,
                  })
                : (0, t.jsx)(re.eV, {
                    title: (0, i.we)("#EventEditor_ImportFromHTML"),
                    onOK: this.OnConvertAndOverriteHTML,
                    onCancel: n,
                    className: I().BBCodeEditorInputStyles,
                    children: (0, t.jsxs)(G.nB, {
                      children: [
                        (0, t.jsx)(G.a3, {
                          children: (0, t.jsxs)("div", {
                            className: (0, A.A)(
                              fe().FlexColumnContainer,
                              I().ImportHTMLCtn,
                            ),
                            children: [
                              (0, t.jsx)("div", {
                                className: fe().FlexColumnContainer,
                                children: (0, i.PP)(
                                  "#EventEditor_ImportFromHTML_ConvertDescription",
                                  (0, t.jsx)("a", {
                                    target: Q.TS.IN_CLIENT ? void 0 : "_blank",
                                    href: "https://partner.steamgames.com/doc/marketing/event_tools/import",
                                    children: (0, i.we)(
                                      "#EventEditor_ImportFromHTML_ConvertLearn",
                                    ),
                                  }),
                                ),
                              }),
                              (0, t.jsx)("textarea", {
                                value: this.state.strHTMLData,
                                placeholder: (0, i.we)(
                                  "#EventEditor_ImportFromHTML_Instruction",
                                ),
                                className: I().ImportHTMLTextArea,
                                onChange: this.OnTextAreaChange,
                                ref: (e) => {
                                  e?.focus();
                                },
                              }),
                              (0, t.jsxs)("div", {
                                className: I().ImportHTMLCheckBoxLine,
                                children: [
                                  (0, t.jsx)("input", {
                                    id: "ImportFromHTMLNewLines",
                                    type: "checkbox",
                                    checked: this.state.bPreserveNewLines,
                                    onChange: this.OnCheckboxChange,
                                  }),
                                  (0, t.jsxs)("label", {
                                    htmlFor: "ImportFromHTMLNewLines",
                                    children: [
                                      (0, i.we)(
                                        "#EventEditor_ImportFromHTML_PreserveNewlines",
                                      ),
                                      (0, t.jsx)(gt.o, {
                                        tooltip: (0, i.we)(
                                          "#EventEditor_ImportFromHTML_PreserveNewlines_Hint",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                children: (0, i.we)(
                                  "#EventEditor_ImportFromHTML_ConvertToBBCode",
                                ),
                              }),
                            ],
                          }),
                        }),
                        (0, t.jsx)(G.wi, {
                          children: (0, t.jsx)(G.VQ, {
                            onCancel: () => n?.(),
                            strOKText: (0, i.we)("#Button_Overwrite"),
                            onUpdate: this.OnConvertAndAppendHTML,
                            strUpdateText: (0, i.we)("#Button_Append"),
                          }),
                        }),
                      ],
                    }),
                  });
          }
        };
        g([l.oI], ue.prototype, "OnConvertAndOverriteHTML", 1),
          g([l.oI], ue.prototype, "OnConvertAndAppendHTML", 1),
          g([l.oI], ue.prototype, "OnCheckboxChange", 1),
          g([l.oI], ue.prototype, "OnTextAreaChange", 1),
          (ue = g([T.PA], ue));
        var It = o(1683),
          Pe = o(1880),
          Et = o(67705),
          Lt = o(29981),
          Le = o.n(Lt);
        function Tt(n, e) {
          return n.trim().length
            ? n +
                `

` +
                e
            : e;
        }
        async function Dt(n, e, s) {
          if (B.TS.IN_STEAMUI) {
            const m = $.w.Init(W.kVt);
            m.Body().set_appid(e), m.Body().set_status_text(s);
            const C = await W.xtC.PostStatusToFriends(
              le.Vw.CMInterface.GetServiceTransport(),
              m,
            );
            if (C.GetEResult() != U.R) throw new Error(String(C.GetEResult()));
            return;
          }
          const r = new FormData();
          r.append("appid", String(e ?? 0)),
            r.append("status_text", s),
            r.append("sessionid", (0, Et.KC)());
          const a = await fetch(n + "ajaxpostuserstatus", {
            method: "POST",
            body: r,
            credentials: "include",
          });
          let c;
          try {
            c = a.ok ? await a.json() : void 0;
          } catch {
            c = void 0;
          }
          if (c?.success != U.R) throw new Error(c?.message ?? a.statusText);
        }
        function Mt(n) {
          const { appid: e, eventLink: s, emoticonStore: r, closeModal: a } = n,
            { data: c } = (0, w.js)(B.iA.steamid),
            [m, C] = p.useState(""),
            P =
              B.TS.COMMUNITY_BASE_URL +
              "profiles/" +
              D.b.InitFromAccountID(B.iA.accountid).ConvertTo64BitString() +
              "/",
            H = (0, q.n)({ mutationFn: () => Dt(P, e, Tt(m, s)) });
          return H.isIdle
            ? (0, t.jsx)(Pe.o0, {
                strDescription: "",
                strTitle: (0, i.we)("#Button_Share"),
                onCancel: a,
                onOK: () => H.mutate(),
                strOKButtonText: (0, i.we)("#Button_Post"),
                children: (0, t.jsxs)("div", {
                  className: fe().FlexColumnContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, i.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: (0, A.A)(
                        Le().Container,
                        fe().FlexColumnContainer,
                      ),
                      children: [
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("img", {
                              className: Le().SmallAvatar,
                              src: c?.avatar_url,
                              alt: "",
                              "data-miniprofile": "s" + B.iA.steamid,
                            }),
                            (0, t.jsx)("div", {
                              className: (0, A.A)(fe().FlexColumnContainer),
                              children: (0, t.jsx)(pe, {
                                strPlaceholder: (0, i.we)(
                                  "#EventDisplay_Share_OnMyStatus_Placeholder",
                                ),
                                fnGetCurText: () => m,
                                fnOnTextChange: (Ce) =>
                                  C(Ce.currentTarget.value),
                                fnSetText: C,
                                emoticonStore: r,
                                bSupportHTMLImport: !1,
                                showFormatHelp: "UserStatusPublished",
                                limitBBCode: V.iH,
                                classNameForTextArea: Le().ShareDescription,
                                bEmbeddedInDialog: !0,
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: Le().ShareLink,
                          children: (0, t.jsx)(It.Zn, { text: s }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : (0, t.jsx)(Pe.o0, {
                strDescription: "",
                strTitle: (0, i.we)("#Button_Share"),
                onCancel: a,
                onOK: a,
                bAlertDialog: !0,
                children: (0, t.jsxs)("div", {
                  className: fe().FlexColumnContainer,
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, i.we)(
                        "#EventDisplay_Share_OnMyStatus_Details",
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: Le().Container,
                      children: [
                        H.isPending && (0, t.jsx)(ve.t, { position: "center" }),
                        H.isSuccess &&
                          (0, t.jsx)("div", {
                            children: (0, i.we)("#EventDisplay_Share_Success"),
                          }),
                        H.isError &&
                          (0, t.jsx)("div", {
                            children:
                              (0, i.we)("#EventDisplay_Share_Failure") +
                              `

` +
                              H.error.message,
                          }),
                        H.isSuccess &&
                          (0, t.jsx)("a", {
                            href: P + "home",
                            target: B.TS.IN_CLIENT ? void 0 : "_blank",
                            rel: "noreferrer",
                            children: (0, i.we)(
                              "#EventDisplay_Share_OpenActivityFeed",
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
              });
        }
      },
      50109: (y, ne, o) => {
        "use strict";
        o.d(ne, { E: () => X, O: () => ee });
        var t = o(14947),
          V = o(65946),
          U = o(99412),
          $ = o(41635),
          W = o(27066),
          B = o(3166),
          q = o(38585),
          p = Object.defineProperty,
          le = Object.getOwnPropertyDescriptor,
          D = (T, f, O, S) => {
            for (
              var M = S > 1 ? void 0 : S ? le(f, O) : f, l = T.length - 1, u;
              l >= 0;
              l--
            )
              (u = T[l]) && (M = (S ? u(f, O, M) : u(M)) || M);
            return S && M && p(f, O, M), M;
          };
        const w = class De {
          m_eCurLang = (0, U.sfN)(B.TS.LANGUAGE);
          m_rgHasData = (0, $.$Y)([], U.bP9, !1);
          m_bHasLocalizationContext = !1;
          m_callback = new q.l();
          GetCallback() {
            return this.m_callback;
          }
          GetCurEditLanguage() {
            return this.m_eCurLang;
          }
          SetCurEditLanguage(f) {
            return this.m_eCurLang != f
              ? ((this.m_eCurLang = f), this.GetCallback().Dispatch(f), !0)
              : !1;
          }
          SetHasLanguage(f) {
            f.forEach((O, S) => {
              this.m_rgHasData[S] != O && (this.m_rgHasData[S] = O);
            });
          }
          BHasLanguageData(f) {
            return this.m_rgHasData[f];
          }
          GetHasLocalizationContext() {
            return this.m_bHasLocalizationContext;
          }
          SetHasLocalizationContext(f) {
            f != this.m_bHasLocalizationContext &&
              (this.m_bHasLocalizationContext = f);
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              De.s_globalSingletonStore ||
                (De.s_globalSingletonStore = new De()),
              De.s_globalSingletonStore
            );
          }
          constructor() {
            (0, t.Gn)(this);
          }
        };
        D([t.sH], w.prototype, "m_eCurLang", 2),
          D([t.sH], w.prototype, "m_rgHasData", 2),
          D([t.sH], w.prototype, "m_bHasLocalizationContext", 2),
          D([W.o], w.prototype, "GetCurEditLanguage", 1),
          D([W.o], w.prototype, "SetCurEditLanguage", 1),
          D([t.XI.bound], w.prototype, "SetHasLanguage", 1),
          D([W.o], w.prototype, "BHasLanguageData", 1);
        let ee = w;
        function X() {
          return (0, V.q3)(() => ee.Get().GetCurEditLanguage());
        }
      },
      35098: (y, ne, o) => {
        "use strict";
        o.d(ne, { DW: () => ee, js: () => D, mK: () => S, tb: () => O });
        var t = o(90626),
          V = o(80902),
          U = o(54806),
          $ = o(99412),
          W = o(68312),
          B = o(15369),
          q = o(5858),
          p = o(76559),
          le = o(15860);
        function D(d) {
          const v = (0, W.KV)(),
            h = t.useContext(f);
          return (0, V.I)(S(h, v, d));
        }
        function w(d) {
          const v = React.useRef(void 0),
            h = D(d);
          return h.data
            ? h
            : (v.current ||
                (v.current = new CPersonaStateImpl(
                  typeof d == "string"
                    ? new CSteamID(d)
                    : CSteamID.InitFromAccountID(d),
                )),
              { ...h, data: v.current });
        }
        function ee(d) {
          const v = (0, W.KV)(),
            h = t.useContext(f);
          return (0, U.E)({ queries: d.map((x) => S(h, v, x)) });
        }
        function X(d) {
          return ReactQueryClient.getQueryData(["PlayerSummary", d]);
        }
        function T(d) {
          const { loadPersonaState: v, children: h } = d,
            x = React.useMemo(() => ({ loadPersonaState: v }), [v]);
          return React.createElement(f.Provider, { value: x }, h);
        }
        const f = t.createContext({
          loadPersonaState: async (d, v) => {
            if (d == null) return null;
            const h = await l(v).load(
              p.b.InitFromAccountID(d).ConvertTo64BitString(),
            );
            return u(p.b.InitFromAccountID(d), h);
          },
        });
        function O() {
          return t.useContext(f);
        }
        function S(d, v, h) {
          const x = typeof h == "string" ? new p.b(h).GetAccountID() : h;
          return {
            queryKey: ["PlayerSummary", x],
            queryFn: () => d.loadPersonaState(x, v),
            enabled: !!x,
          };
        }
        let M;
        function l(d) {
          return (M ??= (0, le.c)(d));
        }
        function u(d, v) {
          let h = new q.Z(d);
          const x = v?.public_data,
            E = v?.private_data;
          return (
            (h.m_bInitialized = !!v),
            (h.m_ePersonaState = E?.persona_state ?? $.cU3),
            (h.m_strAvatarHash = x?.sha_digest_avatar
              ? (0, B.Kx)(x.sha_digest_avatar)
              : q.dV),
            (h.m_strPlayerName = x?.persona_name ?? d.ConvertTo64BitString()),
            (h.m_strAccountName = E?.account_name),
            E?.persona_state_flags &&
              (h.m_unPersonaStateFlags = E?.persona_state_flags),
            E?.game_id && (h.m_gameid = E?.game_id),
            E?.game_server_ip_address &&
              (h.m_unGameServerIP = E?.game_server_ip_address),
            E?.lobby_steam_id && (h.m_game_lobby_id = E?.lobby_steam_id),
            E?.game_extra_info && (h.m_strGameExtraInfo = E?.game_extra_info),
            x?.profile_url && (h.m_strProfileURL = x.profile_url),
            h
          );
        }
      },
      55436: (y, ne, o) => {
        "use strict";
        o.d(ne, { r: () => X, z: () => w });
        var t = o(7850),
          V = o(90626),
          U = o(16412),
          $ = o(25792),
          W = o(96538),
          B = o(18210),
          q = o(85599),
          p = o(17618),
          le = o.n(p),
          D = o(53424);
        const w = (T) => {
            const { clanSteamID: f, fnImageSelectCallBack: O } = T,
              [S, M] = (0, V.useState)(""),
              l = (0, D.mr)(T.clanSteamID.GetAccountID()),
              u = () => T.closeModal && T.closeModal(),
              d = D.pU.GetFilteredClanImages(f, S),
              v = (h) => {
                O(h), u();
              };
            return (0, t.jsx)($.tH, {
              children: (0, t.jsx)(W.x_, {
                onEscKeypress: u,
                children: (0, t.jsxs)(U.UC, {
                  children: [
                    (0, t.jsx)(U.Y9, {
                      children: (0, B.we)("#ClanImageChooser_Title"),
                    }),
                    (0, t.jsx)(U.nB, {
                      children: (0, t.jsxs)(U.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children: (0, B.we)("#ClanImageChooser_Desc"),
                          }),
                          (0, t.jsx)(U.pd, {
                            placeholder: (0, B.we)("#ClanImageChooser_Search"),
                            value: S,
                            onChange: (h) => M(h.currentTarget.value),
                          }),
                          (0, t.jsx)("div", {
                            className: p.ImagesOuterContainer,
                            children: l
                              ? (0, t.jsx)(q.t, {
                                  size: "medium",
                                  string: (0, B.we)("#Loading"),
                                })
                              : d.length > 0
                                ? d.map((h) =>
                                    (0, t.jsx)(
                                      ee,
                                      {
                                        clanImage: h,
                                        searchStringHilight: S,
                                        fnImageClick: v,
                                      },
                                      "ci" + h.image_hash,
                                    ),
                                  )
                                : S.trim().length == 0
                                  ? (0, t.jsx)("div", {
                                      children: (0, B.we)(
                                        "#ClanImageChooser_None",
                                      ),
                                    })
                                  : (0, t.jsx)("div", {
                                      children: (0, B.we)(
                                        "#EventCalendar_GameSearch_NoneFound",
                                      ),
                                    }),
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(U.wi, {
                      children: (0, t.jsx)(U.$n, {
                        onClick: u,
                        children: (0, B.we)("#Button_Cancel"),
                      }),
                    }),
                  ],
                }),
              }),
            });
          },
          ee = (T) => {
            const { clanImage: f, searchStringHilight: O, fnImageClick: S } = T;
            let M = f.file_name ? f.file_name : "",
              l = X(O, M, String(f.imageid), p.Hilight);
            return (0, t.jsxs)("div", {
              className: p.ImageContainer,
              children: [
                (0, t.jsx)("div", {
                  className: p.Image,
                  style: { backgroundImage: `url( '${f.thumb_url}' )` },
                  onDoubleClick: () => S(f),
                }),
                (0, t.jsx)("div", {
                  className: p.ImageFilename,
                  title: M,
                  children: l,
                }),
              ],
            });
          };
        function X(T, f, O, S) {
          let M = [];
          if (T.length > 0) {
            let l = f.toLocaleLowerCase();
            for (let u = 0; u < f.length; ) {
              let d = l.indexOf(T, u);
              if (d < 0) {
                M.push(
                  (0, t.jsx)(
                    "span",
                    { children: f.substring(u) },
                    O + "_" + String(u),
                  ),
                );
                break;
              } else
                u < d &&
                  M.push(
                    (0, t.jsx)(
                      "span",
                      { children: f.substring(u, d) },
                      O + "_" + String(u),
                    ),
                  ),
                  M.push(
                    (0, t.jsx)(
                      "span",
                      { className: S, children: f.substr(d, T.length) },
                      O + "_" + String(u),
                    ),
                  ),
                  (u = d + T.length);
            }
          } else M.push((0, t.jsx)("span", { children: f }, O + "_null"));
          return M;
        }
      },
      24806: (y, ne, o) => {
        "use strict";
        o.d(ne, { Ng: () => S });
        var t = o(7850),
          V = o(75844),
          U = o(90626),
          $ = o(99412),
          W = o(32093),
          B = o(50109),
          q = o(95695),
          p = o.n(q),
          le = o(36707),
          D = o(18210),
          w = o(92264),
          ee = o(30096),
          X = o(71421),
          T = Object.defineProperty,
          f = Object.getOwnPropertyDescriptor,
          O = (u, d, v, h) => {
            for (
              var x = h > 1 ? void 0 : h ? f(d, v) : d, E = u.length - 1, A;
              E >= 0;
              E--
            )
              (A = u[E]) && (x = (h ? A(d, v, x) : A(x)) || x);
            return h && x && T(d, v, x), x;
          };
        let S = class extends U.Component {
          GenerateLanguageOptions() {
            let u = [];
            const {
              fnFilterLanguage: d,
              fnLangHasData: v,
              fnLastUpdateRTime: h,
              fnIsLangSupported: x,
            } = this.props;
            this.props.bAllowUnsetOption &&
              u.push(
                (0, t.jsx)(
                  "option",
                  {
                    value: $.xPp,
                    children: (0, D.we)("#language_selection_none"),
                  },
                  "langpicker_unset",
                ),
              );
            let E = new Array();
            const A = this.props.realms || [W.TU.k_ESteamRealmGlobal];
            for (const j of D.A0.GetLanguageListForRealms(A)) {
              if (d && !d(j)) continue;
              const F = (0, $.LgB)(j),
                z = (0, D.we)("#Language_" + F),
                oe = !!(x && x(j));
              E.push({ eLang: j, sLocName: z, bSupported: oe });
            }
            E.sort((j, F) =>
              j.bSupported != F.bSupported
                ? j.bSupported
                  ? -1
                  : 1
                : j.sLocName.localeCompare(F.sLocName),
            );
            let Me = !1;
            for (const j of E) {
              j.bSupported != Me &&
                (u.push(
                  (0, t.jsx)(
                    "option",
                    {
                      className: p().SupportedGroupLabel,
                      disabled: !0,
                      children: (0, D.we)(
                        j.bSupported
                          ? "#LanguageGroup_Supported"
                          : "#LanguageGroup_Unsupported",
                      ),
                    },
                    j.bSupported ? "SupportedGroup" : "UnsupportedGroup",
                  ),
                ),
                (Me = j.bSupported));
              const F = v && v(j.eLang),
                z = h && h(j.eLang);
              let oe = j.sLocName;
              z &&
                z !== 0 &&
                ((oe += " "),
                (oe += (0, D.we)(
                  "#Language_Last_Update",
                  (0, D.$z)(z) +
                    " @ " +
                    (0, w.KC)(z, { bForce24HourClock: !1 }),
                ))),
                u.push(
                  (0, t.jsx)(
                    "option",
                    {
                      value: j.eLang,
                      className: (0, le.A)(
                        { [p().LanguageWithContent]: F },
                        j.bSupported
                          ? p().SupportedLanguage
                          : p().UnsupportedLanguage,
                      ),
                      children: oe,
                    },
                    "langpicker" + j.eLang + (F ? "_hasdata" : ""),
                  ),
                );
            }
            return u;
          }
          OnLanguageChange(u) {
            const { fnOnLanguageChanged: d, selectedLang: v } = this.props;
            let h = Number.parseInt(u.currentTarget.value);
            h != v && d && d(h);
          }
          render() {
            const { selectedLang: u, bDisabled: d, strTooltip: v } = this.props;
            let h = this.GenerateLanguageOptions();
            return (0, t.jsx)(X.he, {
              toolTipContent: v,
              children: (0, t.jsx)("select", {
                value: u,
                onChange: this.OnLanguageChange,
                disabled: d,
                children: h,
              }),
            });
          }
        };
        O([ee.oI], S.prototype, "OnLanguageChange", 1), (S = O([V.PA], S));
        function M(u) {
          const [d, v] = useObserver(() => [
            CEditorLocStore.Get().GetHasLocalizationContext(),
            CEditorLocStore.Get().GetCurEditLanguage(),
          ]);
          return jsx(S, {
            selectedLang: v,
            fnLangHasData: CEditorLocStore.Get().BHasLanguageData,
            fnOnLanguageChanged: CEditorLocStore.Get().SetCurEditLanguage,
            bDisabled: !d,
            strTooltip: d ? void 0 : Localize("#Localization_EditorNotInFocus"),
          });
        }
        function l(u) {
          const { fnLangHasData: d } = u;
          React.useEffect(
            () => (
              CEditorLocStore.Get().SetHasLocalizationContext(!0),
              () => CEditorLocStore.Get().SetHasLocalizationContext(!1)
            ),
            [],
          );
          const v = useObserver(() => {
            const h = [];
            for (let x = k_ELanguage_English; x < k_ELanguage_MAX; ++x)
              h[x] = !!(d && d(x));
            return h;
          });
          return (
            React.useEffect(() => CEditorLocStore.Get().SetHasLanguage(v), [v]),
            jsx(Fragment, {})
          );
        }
      },
      29981: (y) => {
        y.exports = {
          Container: "_340f4eUQ6g1wEP6XkvOi2m",
          SmallAvatar: "ZcSEHEBy6UFM8ApdYw48V",
          ShareDescription: "tGyGdizK9jd1VLqtQkToE",
          ShareLink: "_2hGcij8WDcw-rJXIjWEBu",
        };
      },
      99312: (y) => {
        y.exports = {
          DragTarget: "_2sUvh2ZpsDAw1xNqgRBELg",
          DragOnTopOfMe: "_1mvpIyLL0-Pd4QMIoRXHtu",
          DescriptionCtn: "_3DQEBNkYGY3hyLFAjhtq7V",
          EventEditorLinkInput: "_25nbuIEmk-BBWxsSvWGG1n",
          DefaultEditor: "NENu2K19GJmLf1Asga-WF",
          ImportHTMLCtn: "_3sVZHF23hli8ijIwtMs8oU",
          ImportHTMLTextArea: "DHbRFUDVAeXGluFH-smoE",
          ImportHTMLConvertButtons: "lnyZaHhcGtBzDU0SMlFd1",
          ImportHTMLCheckBoxLine: "_3R3FNRLSeiOwBgELGjSPbz",
          OptionRow: "_2Y3MLEmGvWMI8BoNZgCllJ",
          TextEditorToolBarContainer: "_2bOpQtX5QAuQxfGhEJ_iYg",
          EmoteOuter: "_1x3UOXJkizqKhkssRfFjSS",
          YouTubeInput: "_3WXTC22teDkm8BMc01ZTLA",
          YouTubePreviewInsertOption: "_6ocliVvrdQxHPu-upv6-s",
          DropDownScroll: "P0-tbY3743fHY8SAzfF6b",
          InsertSpeakerCtn: "_2f-6Yv5h7xjUcZCrepnQhg",
          TitleGroup: "_1ddLhT39tQNuR4ljq6Nfg5",
          AssociateRowCtn: "_2HeY5m9J-kxRVzGn8dAwv5",
          PhotoCtn: "_2-f4CX_EyXfhRUmPdIey4w",
          AboutCtn: "_3hF9cNUOsfV0BkzEaWn7FM",
          PreviewCtn: "_VCRyh7nyN-2xDV6yH6Sg",
          BBCodeEditorInputStyles: "F506h2OVFDcZeXFtyqthY",
        };
      },
      34510: (y) => {
        y.exports = {
          BBCode_Toggle: "_3dX8-PpYvSNsGv4k5lvP-R",
          Active: "_2vTzhbuJFb9_vHvquo2L-L",
          BBCode: "_1pH9CKzm5VpicOgzyWpsy_",
        };
      },
      64233: (y) => {
        y.exports = { Image: "_1po_jxHTSix3Li3w5ZnMBB" };
      },
      79786: (y) => {
        y.exports = {
          Emoticon_Toggle: "Y5J3nttqNZsLax6MbnH-L",
          Active: "YCbwLzK9cJ7QissjKq11n",
          Emoticon: "_2o57_fRPxv5_x6BkjL_cgc",
        };
      },
      17618: (y) => {
        y.exports = {
          ImagesOuterContainer: "_3A8RGZO2pwg1yKDAdFqp9r",
          Hilight: "_1v_zQLXgFsvon1SwxrWjE-",
          ImageContainer: "_2ti3yMwzfkGoiW68FuNjTG",
          Image: "y902_9A0Wj5bTshbt4xRb",
          ImageFilename: "_2jzLZXXxgDMMcA9X0QDSdg",
        };
      },
      41609: (y) => {
        y.exports = {
          WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
          WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
          WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
          Disabled: "_2VzE-3UQEHXyAext8t7gLW",
          Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
          DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
          Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
          JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
          BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
          DragGhost: "_61nYWo98IhSjR8PWtQX9O",
          Grabbable: "riuelIz655g_IBddWfLQ-",
          DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
          WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
          ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
          DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
          DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
        };
      },
      77700: (y) => {
        y.exports = {
          narrowWidth: "500px",
          mentionDialogPosition: "_3isL0ZmZcmPqrXDdNiNSsm",
          mentionDialog: "_1QU3cLCGXCmYTUvjYiqqz6",
          mentionSearchText: "_1xVcZo7UqD1Idiz3hcGoHg",
          suggestOption: "vquL9mspYzz2tBtxrzqw9",
          mentionSearchOption: "_3O0sMruBIaruOmKJLJre-J",
          manyMatches: "_1cweL4uxVeoeKoymO9IuaT",
          selected: "boNOGnexLhWO9Nd0e6-0A",
          nickname: "_2dKJqMZUnKQIInZReBkcRI",
          mentionSearchMatch: "_2_0t_pDYqkDefMC0gDZV8G",
        };
      },
    },
  ]);
})();
