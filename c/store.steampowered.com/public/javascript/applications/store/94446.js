"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [94446],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        const _ = _.createRef(),
          [_, _] = _.useState(""),
          _ = _.createRef(),
          _ = () => {
            const _ = _.current?.ownerDocument.defaultView;
            _.current &&
              _ &&
              _.navigator.clipboard
                .writeText(_.current.value)
                .then((_) => {
                  _((0, _._)("#EventDisplay_Share_CopiedToClipboard"));
                })
                .catch((_) => {
                  _((0, _._)("#EventDisplay_Share_FailedToCopyToClipboard")),
                    console.error("Failed to copy link to clipboard:", _);
                });
          };
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(_().FlexRowContainer, _().linkField),
              onClick: _,
              children: [
                (0, _.jsx)("span", {
                  className: _().LinkInputLabel,
                  children: (0, _._)(
                    _.labelOverride
                      ? _.labelOverride
                      : "#EventDisplay_Share_Link",
                  ),
                }),
                (0, _.jsx)("input", {
                  className: _().LinkInput,
                  ref: _,
                  value: _.eventLink,
                  readOnly: !0,
                }),
                document.queryCommandSupported("copy") &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(_().Button, _().Icon, _().LinkButton),
                    onActivate: _,
                    children: (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, _.jsx)("img", {
                        className: _().ClipboardIcon,
                        src: _._,
                      }),
                    }),
                  }),
              ],
            }),
            (0, _.jsx)("div", {
              ref: _,
              className: _().ClipboardText,
              children: _,
            }),
          ],
        });
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        state = {
          bShareOnSteamDialog: !1,
          bRequireLoginToShare: !1,
        };
        ShareOnSteamActivityFeed() {
          _._.logged_in
            ? this.setState({
                bShareOnSteamDialog: !0,
              })
            : _._.IN_CLIENT
              ? console.log(
                  "ShareEventOnSocialMediaDialog: In Client: Cannot use login widget. We expect to be already logged in.",
                )
              : this.setState({
                  bRequireLoginToShare: !0,
                });
        }
        render() {
          const {
            eventLink: _,
            sharePageUrls: _,
            appid: _,
            closeModal: _,
            emoticonStore: _,
            partnerEventStore: _,
          } = this.props;
          return this.state.bRequireLoginToShare
            ? (0, _.jsx)(_._, {
                strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                strDescription: (0, _._)(
                  "#EventDisplay_Share_NotLoggedIn_Description",
                ),
                strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                onCancel: this.props.closeModal,
                onOK: () => (0, _._)(),
              })
            : this.state.bShareOnSteamDialog
              ? (0, _.jsx)(_._, {
                  eventLink: _,
                  appid: _,
                  emoticonStore: _,
                  partnerEventStore: _,
                  closeModal: _,
                })
              : (0, _.jsx)(_._, {
                  strDescription: "",
                  strTitle: (0, _._)("#Button_Share"),
                  onCancel: this.props.closeModal,
                  onOK: this.props.closeModal,
                  bAlertDialog: !0,
                  modalClassName: "EventDisplay_Share_Dialog",
                  children: (0, _.jsx)(_, {
                    eventLink: _,
                    sharePageUrls: _,
                    fnShareOnSteamActivityFeed: this.ShareOnSteamActivityFeed,
                  }),
                });
        }
      }
      (0, _._)([_._], _.prototype, "ShareOnSteamActivityFeed", null);
      const _ = (_) => {
        const {
            eventLink: _,
            sharePageUrls: _,
            fnShareOnSteamActivityFeed: _,
          } = _,
          _ = (0, _._)(),
          [_, _] = (0, _.useState)((0, _.sfN)(_._.LANGUAGE)),
          _ = (0, _.useMemo)(() => {
            const _ = new URL(_);
            return _.searchParams.set("l", (0, _.LgB)(_)), _.href;
          }, [_, _]);
        return (0, _.jsxs)("div", {
          className: (0, _._)(_().FlexColumnContainer, _().share_controls_ctn),
          children: [
            !_ &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("div", {
                    className: _().ShareLanguagePicker,
                    children: [
                      (0, _.jsx)(_._, {
                        className: _().LanguageLabel,
                        children: (0, _._)("#EventDisplay_Share_LanguageLabel"),
                      }),
                      (0, _.jsx)("div", {
                        children: (0, _.jsx)(_._, {
                          selectedLang: _,
                          fnOnLanguageChanged: _,
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().FlexRowContainer,
                      _().ShareButtonContainer,
                    ),
                    style: {
                      flexWrap: "wrap",
                    },
                    children: [
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)("#EventDisplay_Share_OnSteam"),
                        children: (0, _.jsxs)(_._, {
                          onClick: _,
                          className: (0, _._)(
                            _().Button,
                            _().ShareBtn,
                            _().ShareSteamBtn,
                          ),
                          children: [
                            (0, _.jsx)("img", {
                              className: _().SteamIcon,
                              src: _._,
                            }),
                            (0, _.jsx)("span", {
                              style: {
                                whiteSpace: "nowrap",
                              },
                              children: (0, _._)(
                                "#EventDisplay_Share_OnMyStatus",
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(
                          "#EventDisplay_Share_OnFaceBook",
                        ),
                        children: (0, _.jsx)(_._, {
                          href: _.strFacebookUrl,
                          className: _().ShareBtn,
                          children: (0, _.jsx)("img", {
                            className: (0, _._)(_().Button),
                            src: _._,
                          }),
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(
                          "#EventDisplay_Share_OnTwitter",
                        ),
                        children: (0, _.jsx)(_._, {
                          href: _.strTwitterUrl,
                          className: _().ShareBtn,
                          children: (0, _.jsx)("img", {
                            className: (0, _._)(_().Button),
                            src: _._,
                          }),
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        toolTipContent: (0, _._)(
                          "#EventDisplay_Share_OnReddit",
                        ),
                        children: (0, _.jsx)(_._, {
                          href: _.strRedditUrl,
                          className: _().ShareBtn,
                          children: (0, _.jsx)("img", {
                            className: (0, _._)(_().Button),
                            src: _._,
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Divider,
                  }),
                ],
              }),
            (0, _.jsx)(_._, {
              eventLink: _,
            }),
          ],
        });
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDAgMTQwMCAxNDA5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxNDAwIDE0MDkiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjk4LjE5NSwxMC4xMjVjLTM2NC4zNDcsMC02NjIuODM4LDI4MC45MzgtNjkxLjIwNiw2MzcuOTY5TDM3OC43NCw4MDEuNzk3CgljMzEuNTAyLTIxLjUzOSw2OS41NTUtMzQuMTMzLDExMC40OTUtMzQuMTMzYzMuNjY5LDAsNy4zMTUsMC4wOSwxMC45MzksMC4zMTNsMTY1LjMzLTIzOS42MzdjMC0xLjEzNy0wLjAyOS0yLjI1LTAuMDI5LTMuMzk1CgljMC0xNDQuMjI3LDExNy4zMzUtMjYxLjU3NCwyNjEuNTgyLTI2MS41NzRjMTQ0LjIzMywwLDI2MS41ODMsMTE3LjM0OCwyNjEuNTgzLDI2MS41NzRjMCwxNDQuMjQ2LTExNy4zNSwyNjEuNTk4LTI2MS41ODMsMjYxLjU5OAoJYy0xLjk5LDAtMy45NS0wLjA0Ny01LjkyNi0wLjA5TDY4NS4zNDEsOTU0LjY4OGMwLjExOSwzLjA3NCwwLjIzLDYuMTkxLDAuMjMsOS4yOTdjMCwxMDguMjczLTg4LjA3NiwxOTYuMzUyLTE5Ni4zMzYsMTk2LjM1MgoJYy05NS4wNDEsMC0xNzQuNDk0LTY3Ljg0OC0xOTIuNDk2LTE1Ny42NzZMMzAuODcyLDg5Mi43NTRjODIuMzIsMjkxLjEzNywzNDkuODA3LDUwNC41ODIsNjY3LjMyMyw1MDQuNTgyCgljMzgzLjA2MiwwLDY5My41OTgtMzEwLjU1MSw2OTMuNTk4LTY5My42MTNDMTM5MS43OTMsMzIwLjY2NCwxMDgxLjI1NywxMC4xMjUsNjk4LjE5NSwxMC4xMjUiLz4KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQ0MS42NDgsMTA2Mi41NjNsLTg1LjIwMi0zNS4yMDNjMTUuMTA1LDMxLjQ0NSw0MS4yMyw1Ny43NjIsNzUuOTExLDcyLjIxNQoJYzc0Ljk2MSwzMS4yNSwxNjEuNDEtNC4zMzYsMTkyLjY2Ny03OS4zNTljMTUuMTEyLTM2LjMxMywxNS4yMjQtNzYuMzU1LDAuMjIzLTExMi43NDJjLTE0Ljk3OS0zNi4zOTEtNDMuMjUtNjQuNzczLTc5LjU3Mi03OS45MjIKCWMtMzYuMDQ3LTE1LjAwNC03NC42NTYtMTQuNDM4LTEwOC41ODctMS42MzdsODguMDA5LDM2LjM5MWM1NS4zMDQsMjMuMDUxLDgxLjQ0NCw4Ni41NTksNTguNDA4LDE0MS44NTUKCUM1NjAuNDc2LDEwNTkuNDU3LDQ5Ni45NDQsMTA4NS42MTMsNDQxLjY0OCwxMDYyLjU2MyIvPgo8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTEwMS4zNTMsNTI0Ljk2MWMwLTk2LjExMy03OC4xODQtMTc0LjMxMy0xNzQuMjk1LTE3NC4zMTNjLTk2LjA5NiwwLTE3NC4yOTQsNzguMTk5LTE3NC4yOTQsMTc0LjMxMwoJYzAsOTYuMTAyLDc4LjE5OCwxNzQuMjc3LDE3NC4yOTQsMTc0LjI3N0MxMDIzLjE2OSw2OTkuMjM4LDExMDEuMzUzLDYyMS4wNjMsMTEwMS4zNTMsNTI0Ljk2MSBNNzk2LjQxNSw1MjQuNjU2CgljMC03Mi4zMjQsNTguNjM4LTEzMC45MTgsMTMwLjk0LTEzMC45MThjNzIuMzE2LDAsMTMwLjkyNSw1OC41OTQsMTMwLjkyNSwxMzAuOTE4YzAsNzIuMzE2LTU4LjYwOCwxMzAuOTE4LTEzMC45MjUsMTMwLjkxOAoJQzg1NS4wNTMsNjU1LjU3NCw3OTYuNDE1LDU5Ni45NzMsNzk2LjQxNSw1MjQuNjU2Ii8+Cjwvc3ZnPgo=";
    },
  },
]);
