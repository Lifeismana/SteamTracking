(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [79139],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          reactNodes = [];
          AppendText(_, _ = !1) {
            _.length &&
              (_
                ? this.reactNodes.push(
                    _.createElement(
                      "span",
                      {
                        "data-copytext": "",
                        "data-copystyle": "merge-adjacent",
                        "bbcode-text": _,
                      },
                      _,
                    ),
                  )
                : this.reactNodes.push(_));
          }
          AppendNode(_) {
            this.reactNodes.push(_);
          }
          GetElements() {
            return this.reactNodes;
          }
        }
        class _ {
          m_decoratedAccumulator;
          constructor(_) {
            (0, _._)(_, "decorated accumulator cannot be null"),
              (this.m_decoratedAccumulator = _);
          }
          AppendText(_, _ = !1) {
            this.m_decoratedAccumulator.AppendText(_, _);
          }
          AppendNode(_) {
            this.m_decoratedAccumulator.AppendNode(_);
          }
          GetElements() {
            return this.m_decoratedAccumulator.GetElements();
          }
        }
        class _ extends _ {
          constructor(_) {
            super(_);
          }
          AppendText(_) {
            let _ = _;
            const _ = [];
            for (
              let _ = _.indexOf(`
`);
              _ !== -1;
              _ = _.indexOf(`
`)
            )
              _.push(_.substr(0, _)),
                _.push(_.createElement("br")),
                (_ = _.substr(_ + 1));
            _.length && _.push(_),
              _.forEach((_) => {
                super.AppendNode(_);
              });
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        class _ {
          m_fnAccumulatorFactory;
          m_dictComponents;
          constructor(_, _) {
            _ instanceof Map
              ? (this.m_dictComponents = _)
              : (this.m_dictComponents = new Map(Object.entries(_))),
              (this.m_fnAccumulatorFactory = _);
          }
          Parse(_, _, _ = !0) {
            const _ = _(_ || "", _);
            return this.Parse_BuildElements(_, _);
          }
          Parse_BuildElements(_, _) {
            let _ = this.m_fnAccumulatorFactory(void 0);
            const _ = [],
              _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
              _ = this.m_dictComponents,
              _ = (_) => !!(_.tag && _.get(_.tag)?.autocloses);
            let _ = !1,
              _ = !0;
            const _ = (_, _) => {
              let _ = _.text.toLowerCase();
              if (_ && _.node.tag === _ && _.get(_.node.tag)) {
                const _ = _.get(_.node.tag),
                  _ = {
                    tagname: _.node.tag,
                    args: _.node.args,
                    rawargs: _.node.rawargs,
                  },
                  _ = _(_.Constructor, _, ..._.GetElements());
                (_ = _.accumulator),
                  Array.isArray(_)
                    ? _.forEach((_) => _.AppendNode(_))
                    : _.AppendNode(_),
                  (_ = !!_.skipFollowingNewline),
                  (_ = _.bWrapTextForCopying);
              } else if (_) {
                const _ = _.accumulator;
                _.AppendText("[" + _.node.text + "]", !1),
                  _.GetElements().forEach((_) => _.AppendNode(_)),
                  _.AppendText("[/" + _.text + "]", !1),
                  (_ = _),
                  (_ = _.bWrapTextForCopying);
              }
            };
            for (
              _.forEach((_, _) => {
                if (_.type == _) {
                  const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                  _.AppendText(_, _), (_ = !1);
                } else if (_.type == _) {
                  const _ = _.get(_.tag);
                  if (!_) _.AppendText("[" + _.text + "]", _.length == 0);
                  else {
                    const _ = _();
                    if (_ !== void 0) {
                      const _ = _.get(_.node.tag);
                      _ &&
                        _.autocloses &&
                        _.tag === _.node.tag &&
                        _(_.pop(), _.node);
                    }
                    _.push({
                      accumulator: _,
                      node: _,
                      bWrapTextForCopying: _,
                    }),
                      (_ = this.m_fnAccumulatorFactory(_)),
                      (_ = !!_.skipInternalNewline),
                      (_ = _.allowWrapTextForCopying ?? !1);
                  }
                } else if (_.type == _) {
                  let _ = _.text.toLowerCase();
                  for (; _() && _().node.tag !== _ && _(_().node); ) {
                    const _ = _.pop();
                    _(_, _.node);
                  }
                  if (_()?.node.tag == _) {
                    const _ = _.pop();
                    _(_, _);
                  } else _.AppendText("[/" + _.text + "]", _.length == 0);
                }
              });
              _.length > 0;
            ) {
              const _ = _.pop();
              _(_, _.node);
            }
            return _.GetElements();
          }
        }
        function _(_, _, _ = !1) {
          let _ = "[" + _;
          _?.[""] && (_ += `=${_ ? "" + _[""] : _("" + _[""])}`);
          for (const _ in _) _ !== "" && (_ += ` ${_(_)}=${_("" + _[_])}`);
          return (_ += "]"), _;
        }
        function _(_) {
          return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function _(_) {
          return _.replace(/(\\| |\])/g, "\\$1");
        }
        function _(_) {
          return `[/${_}]`;
        }
        function _(_) {
          return _.replace(/(\\|\[)/g, "\\$1");
        }
        function _(_, _, _ = _) {
          const { type: _, text: _ = "" } = _;
          if (_ == _) {
            let _ = _.indexOf("=");
            const _ = _.indexOf(" ");
            _ != -1 && (_ == -1 || _ < _) && (_ = _);
            let _,
              _,
              _ = "";
            _ > 0
              ? ((_ = _.substr(0, _).toLocaleLowerCase()),
                (_ = _.substr(_)),
                (_ = _(_)))
              : ((_ = {}), (_ = _.toLocaleLowerCase())),
              _.push({
                type: _,
                text: _,
                tag: _,
                args: _,
                rawargs: _,
              });
          } else
            _ != _ &&
              _.push({
                type: _,
                text: _,
              });
          return {
            type: _,
            text: "",
          };
        }
        function _(_) {
          let _ = "";
          return (
            _.type == _ ? (_ = "[/") : _.type == _ && (_ = "["),
            {
              type: _,
              text: _ + (_.text ?? ""),
            }
          );
        }
        function _(_, _) {
          const _ = [];
          let _ = {
              type: _,
              text: "",
            },
            _ = !1,
            _ = !1,
            _ = !1;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            switch (_.type) {
              case _:
                _ == "["
                  ? ((_.type = _), (_ = !0))
                  : ((_.type = _), _ == "\\" && _ ? (_ = !_) : (_.text += _));
                break;
              case _:
              case _:
                if (_ == "/" && _) (_.type = _), (_.text = ""), (_ = !1);
                else if (_ == "[" && !_) (_ = _(_, _(_), _)), (_ = !0);
                else if (_ == "]" && !_) {
                  const _ =
                      _.type == _ && _.text?.toLocaleLowerCase() == "noparse",
                    _ = _.type == _ && _.text?.toLocaleLowerCase() == "noparse";
                  _ || (_ && !_)
                    ? ((_ = _(_)), (_.text += _))
                    : _
                      ? (_ = !0)
                      : _ && (_ = !1),
                    (_ = _(_, _)),
                    (_ = !1);
                } else
                  _ == "\\" && _
                    ? ((_.text += _), (_ = !_), (_ = !1))
                    : ((_.text += _), (_ = !1), (_ = !1));
                break;
              case _:
                _ == "[" && !_
                  ? ((_ = _(_, _, _)), (_ = !0))
                  : _ == "\\" && _
                    ? (_ && (_.text += _), (_ = !_))
                    : ((_.text += _), (_ = !1));
                break;
            }
          }
          return (
            _.type != _ &&
              (_.type == _ || _.type == _
                ? _.push(_(_))
                : _.push({
                    type: _.type,
                    text: _.text ?? "",
                  })),
            _
          );
        }
        function _(_) {
          if (!_ || _.length < 1) return {};
          const _ = {};
          let _ = "",
            _ = "",
            _;
          ((_) => {
            (_[(_.PRE_NAME = 0)] = "PRE_NAME"),
              (_[(_.IN_NAME = 1)] = "IN_NAME"),
              (_[(_.POST_NAME = 2)] = "POST_NAME"),
              (_[(_.IN_VALUE = 3)] = "IN_VALUE"),
              (_[(_.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(_ || (_ = {}));
          let _ = 0,
            _ = 0;
          _[0] == "=" && (_ = 2);
          let _ = !1;
          for (_++; _ < _.length; _++) {
            const _ = _[_];
            let _ = !0,
              _ = !1;
            switch (_) {
              case 0:
                if (_ == "=") return {};
                if (_ == " ") continue;
                _ = 1;
                break;
              case 1:
                (_ == "=" || _ == " ") &&
                  !_ &&
                  (_ == " " ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                break;
              case 2:
                _ == " "
                  ? ((_ = 0), (_ = !1), (_ = !0))
                  : _ == '"'
                    ? ((_ = 4), (_ = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((_ == " " && _ != 4 && !_) || (_ == '"' && _ == 4 && !_)) &&
                  ((_ = 0), (_ = !1), (_ = !0));
                break;
            }
            if (_)
              if (_ == "\\" && !_) _ = !0;
              else if (((_ = !1), _ == 1)) _ += _;
              else if (_ == 3 || _ == 4) _ += _;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            _ && ((_[_] = _), (_ = ""), (_ = ""));
          }
          return _ != 0 && (_[_] = _), _;
        }
        class _ extends _ {
          m_renderingLanguage;
          constructor(_, _, _) {
            super(_, _ ?? (() => new _._())),
              (this.m_renderingLanguage =
                typeof _ == "string" ? (0, _.sfN)(_) : _);
          }
          UpdateOverrideLanguage(_) {
            this.m_renderingLanguage = _;
          }
          ParseBBCode(_, _, _ = !0) {
            let _ = 0;
            const _ = this.Parse(
              _,
              (_, _, ..._) =>
                _.createElement(
                  _,
                  {
                    ..._,
                    context: _,
                    language: this.m_renderingLanguage,
                    key: `bbnode_${_++}`,
                  },
                  ..._,
                ),
              _,
            );
            return _.length > 1
              ? _.createElement(_.Fragment, null, ..._)
              : _.length == 1
                ? _[0]
                : null;
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          Box: _.DynamicLinkBox,
          Preview: _.DynamicLink_Preview,
          Type: _.DynamicLink_Type,
        };
        function _(_) {
          return (0, _.jsx)("img", {
            className: _.DynamicLink_Preview,
            src: _.strURL,
            alt: _.strAlt ?? "",
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Content,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Name,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Author,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.DynamicLink_AuthorName,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Description,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.DynamicLink_Date,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_YoutubeViews,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Dynamiclink_Content,
            children: _.children,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new Map([
            [
              "b",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "i",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "h1",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h2",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h3",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h4",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h5",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "center",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "smalltext",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "u",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "strike",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "spoiler",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "hr",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "noparse",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "url",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "quote",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "pullquote",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "code",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "c",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "list",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "olist",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "*",
              {
                Constructor: _,
                autocloses: !0,
                skipInternalNewline: !0,
              },
            ],
            [
              "table",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "tr",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            [
              "calendarevent",
              {
                Constructor: _,
                autocloses: !0,
              },
            ],
            [
              "doclink",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "color",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "bgcolor",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "p",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
          ]),
          _ = new Map([
            [
              "looping_media",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "video",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "youtubeorvideo",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "previewyoutube",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
          ]);
        function _(_, _) {
          return _ === void 0 ? _[""] : _[_];
        }
        function _(_, _) {
          return (_) =>
            _({
              ..._,
              className: _,
            });
        }
        function _(_) {
          return (0, _.jsx)("b", {
            className: _().Bold,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("i", {
            className: (0, _._)(_().Italic, "BB_Italic"),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("u", {
            className: _().Underline,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("s", {
            className: _().Strike,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsxs)("p", {
            className: _().Paragraph,
            children: [_.children, (0, _.jsx)("wbr", {})],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().Paragraph,
            role: "paragraph",
            children: [_.children, (0, _.jsx)("wbr", {})],
          });
        }
        function _(_, _, _) {
          let _ = _(_.args, "id");
          return (
            _ || (_ = _(_.args)),
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)(_, {
              _: _ || void 0,
              className: (0, _._)(_, _.className),
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("h1", _, (0, _._)(_().Header1, "BB_Header1"));
        }
        function _(_) {
          return _("h2", _, (0, _._)(_().Header2, "BB_Header2"));
        }
        function _(_) {
          return _("h3", _, (0, _._)(_().Header3, "BB_Header3"));
        }
        function _(_) {
          return _("h4", _, (0, _._)(_().Header4, "BB_Header4"));
        }
        function _(_) {
          return _("h5", _, (0, _._)(_().Header5, "BB_Header5"));
        }
        function _(_) {
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)("span", {
              _: _ || void 0,
              className: (0, _._)(_().CenterSpan, "BB_Center"),
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("div", _, (0, _._)(_().SmallText, "BB_SmallText"));
        }
        function _(_) {
          let [_, _] = _.useState(!1),
            _ = _.useCallback(() => {
              _(!_);
            }, [_]);
          return (0, _.jsx)(_._, {
            className: (0, _._)(_().Spoiler, _ && _().Revealed),
            focusable: !0,
            onActivate: _,
            onOKActionDescription: (0, _._)(
              _ ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, _.jsx)("span", {
              className: _().SpoilerText,
              children: _.children,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("hr", {
            className: _()._,
          });
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)("span", {
            style: {
              color: _,
            },
            children: _.children,
          });
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)("span", {
            style: {
              backgroundColor: _,
            },
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(_(_.args));
          if (!_) {
            const _ = _.children;
            typeof _ == "string" && (0, _._)(_) && (_ = (0, _._)(_));
          }
          const _ = _(_.args, "style") == "button" ? _().LinkButton : void 0,
            _ = _ && _(_.args, "buttoncolor");
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            _ === void 0 && !_
              ? _.children || ""
              : _ === void 0 ||
                  (typeof _ == "string" && _.length > 0 && _[0] == "#")
                ? (0, _.jsx)("a", {
                    href: _ ?? null,
                    _: _,
                    children: _.children,
                  })
                : (0, _.jsx)(_, {
                    className: _,
                    href: _,
                    _: _,
                    style: {
                      backgroundColor: _,
                    },
                    children: _.children,
                  })
          );
        }
        function _(_) {
          const _ = _(_.args),
            _ = _(_.args, "style") == "button" ? _().LinkButton : void 0,
            _ = _ && _(_.args, "buttoncolor");
          return (0, _.jsx)(_, {
            className: _,
            style: {
              backgroundColor: _,
            },
            href: `${_._.PARTNER_BASE_URL}doc/${_}`,
            children: _.children,
          });
        }
        const _ = (_) => {
          const { href: _, ..._ } = _;
          let _ = (0, _._)(_ ?? ""),
            _;
          (0, _._)(_)
            ? ((_ =
                (_._.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, _._)(_)),
              (_ = "noopener nofollow"))
            : (_ = (0, _._)(_));
          const _ =
            typeof _.children == "string" &&
            _.children.length > 0 &&
            _ &&
            !_.startsWith("steam://")
              ? (0, _._)(_)
              : void 0;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "top",
            children: (0, _.jsx)(_._, {
              ..._,
              href: _,
              rel: _,
              children: _.children,
            }),
          });
        };
        function _(_) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: _(_.args),
            children: _.children,
          });
        }
        function _(_) {
          const _ = _(_.args, "author");
          return (0, _.jsxs)("blockquote", {
            className: (0, _._)(_().BlockQuote, _.className),
            children: [
              !!_ &&
                (0, _.jsxs)("div", {
                  className: _().QuoteAuthor,
                  children: [
                    (0, _._)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, _.jsx)("b", {
                      children: _ + ":",
                    }),
                  ],
                }),
              _.children,
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().PullQuote,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("code", {
            className: _().CodeBlock,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("code", {
            className: _().Code,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("ul", {
            className: (0, _._)(_().List, "bullets"),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("ol", {
            className: _().OrderedList,
            children: _.children,
          });
        }
        function _(_) {
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)("li", {
              className: _().ListItem,
              _: _ || void 0,
              children: _.children,
            })
          );
        }
        function _(_) {
          return _.children;
        }
        function _(_) {
          const _ = _(_.args, "noborder"),
            _ = _(_.args, "equalcells"),
            _ = _(_.args, "colwidth");
          return (0, _.jsxs)("table", {
            className: (0, _._)(
              _().Table,
              "BB_Table",
              _ && _().NoBorder,
              _ && _().EqualCells,
            ),
            children: [
              _ &&
                (0, _.jsx)("colgroup", {
                  children: _.split(",").map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        width: _,
                      },
                      _,
                    ),
                  ),
                }),
              (0, _.jsx)("tbody", {
                children: _.children,
              }),
            ],
          });
        }
        function _(_) {
          const { width: _ } = _;
          let _;
          return (
            _ &&
              parseInt(_) > 0 &&
              (_ = {
                width: `${_}px`,
              }),
            (0, _.jsx)("col", {
              style: _,
            })
          );
        }
        function _(_) {
          return (0, _.jsx)("tr", {
            className: (0, _._)(_().TableRow, "BB_TableRow"),
            children: _.children,
          });
        }
        function _(_, _) {
          const _ = _(_.args, "width"),
            _ = _(_.args, "colspan"),
            _ = _(_.args, "rowspan"),
            _ = {};
          return (
            _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
            _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
            (0, _.jsx)(_, {
              className: (0, _._)(_().TableCell, _ == "td" && "BB_TableData"),
              ..._,
              style: _
                ? {
                    width: _,
                  }
                : void 0,
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("th", _);
        }
        function _(_) {
          return _("td", _);
        }
        function _(_, _, _, _) {
          switch (_) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: _().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: _().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: _ || _ || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: _ || _ || "#Bbcode_Expand_ShowMore_Expanded",
                style: _().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: _().ExpandSection_ShowMore,
              };
          }
        }
        function _(_) {
          const _ = !!_(_.args, "expanded"),
            [_, _] = _.useState(_),
            _ = _(_.args, "title"),
            _ = _(_.args, "collapsed_str"),
            _ = _(_.args, "expanded_str"),
            _ = _(_(_.args, "type"), _, _, _);
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().ExpandSectionBlock]: !0,
              [_.style ?? ""]: _.style != null,
              [_().ExpandSectionExpanded]: _,
              [_().ExpandSectionCollapsed]: !_,
              BBCodeExpanded: _,
              BBCodeCollapsed: !_,
            }),
            children: [
              (0, _.jsxs)("div", {
                className: _().ExpandSectionHeader,
                onClick: () => _(!_),
                children: [
                  (0, _._)(_ ? _.expanded : _.collapsed),
                  (0, _.jsx)("div", {
                    className: _().EmbedArrow,
                    children: (0, _.jsx)(_.DK4, {
                      angle: _ ? 180 : 0,
                    }),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().ExpandSectionBody,
                  children: _.children,
                }),
            ],
          });
        }
        function _(_) {
          const _ = _(_.args, "title"),
            _ = _(_.args, "start") ?? _(_.args, "datetime"),
            _ = _(_.args, "end") ?? _(_.args, "datetime"),
            _ = _(_.args, "body") ?? null,
            _ = _(_.args, "location") ?? null,
            _ = _(_.args, "id") ?? "",
            _ = new Date(_),
            _ = _.getUTCFullYear(),
            _ = ("0" + (_.getUTCMonth() + 1)).slice(-2),
            _ = ("0" + _.getUTCDate()).slice(-2),
            _ = ("0" + _.getUTCHours()).slice(-2),
            _ = ("0" + _.getUTCMinutes()).slice(-2),
            _ = `${_}${_}${_}T${_}${_}00Z`,
            _ = new Date(_),
            _ = _.getUTCFullYear(),
            _ = ("0" + (_.getUTCMonth() + 1)).slice(-2),
            _ = ("0" + _.getUTCDate()).slice(-2),
            _ = ("0" + _.getUTCHours()).slice(-2),
            _ = ("0" + _.getUTCMinutes()).slice(-2),
            _ = `${_}${_}${_}T${_}${_}00Z`;
          let _;
          try {
            let _ = `BEGIN:VCALENDAR\r
`;
            (_ += `VERSION:2.0\r
`),
              (_ += `BEGIN:VEVENT\r
`),
              (_ += `DTSTART:${_}\r
`),
              (_ += `DTEND:${_}\r
`),
              (_ += `SUMMARY:${_.replace(
                `
`,
                "\\n",
              )}\r
`),
              _ &&
                (_ += `DESCRIPTION:${_.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              _ &&
                (_ += `LOCATION:${_.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (_ += `END:VEVENT\r
`),
              (_ += `END:VCALENDAR\r
`),
              (_ = `data:text/calendar;charset=utf-8;base64,${_._(new TextEncoder().encode(_))}`);
          } catch (_) {
            console.error(_);
          }
          let _ = "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (_ += `&text=${encodeURI(_)}`),
            (_ += `&details=${encodeURI(_)}`),
            (_ += `&dates=${encodeURI(_ + "/" + _)}`);
          const _ = (_) => {
            if ("ReactNativeWebView" in window) {
              const _ = window.ReactNativeWebView,
                _ = {
                  event_name: "addcalendarevent",
                  tsStart: _.getTime(),
                  tsEnd: _.getTime(),
                  strTitle: _,
                  strNotes: _,
                  strLocation: _,
                };
              _.postMessage(JSON.stringify(_)), _.preventDefault();
            }
          };
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              "SaleSectionCalendarEventContainer",
              _().CalendarEventContainer,
            ),
            _: _,
            children: [
              _ &&
                (0, _.jsx)("a", {
                  className: (0, _._)(
                    "SaleSectionCalendarEventLink",
                    _().CalendarEventLink,
                  ),
                  href: _,
                  onClick: _,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, _.jsx)("a", {
                className: (0, _._)(
                  "SaleSectionCalendarEventLink",
                  _().CalendarEventLink,
                ),
                href: _,
                children: "Google",
              }),
              _ &&
                (0, _.jsx)("a", {
                  className: (0, _._)(
                    "SaleSectionCalendarEventLink",
                    _().CalendarEventLink,
                  ),
                  href: _,
                  onClick: _,
                  download: "calendar.ics",
                  children: "Outlook",
                }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          let _ = (0, _._)(_, "poster");
          _ && (_ = (0, _._)(_));
          const _ = new Array();
          {
            const _ = (0, _._)(_, "mp4");
            _ &&
              _.push({
                sURL: (0, _._)(_),
                sFormat: "video/mp4",
              });
            const _ = (0, _._)(_, "webm");
            _ &&
              _.push({
                sURL: (0, _._)(_),
                sFormat: "video/webm",
              });
          }
          const _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _ != _.Bhc,
            _ = new Array();
          for (let _ = _.Bhc; _ < _.bP9; _++) {
            const _ = (0, _._)(_, "sub_" + (0, _.wwZ)(_));
            _ &&
              _.push({
                sURL: (0, _._)(_),
                eLanguage: _,
                sKind: "subtitles",
                bDefault: _ && _ == _,
              });
            const _ = (0, _._)(_, "cap_" + (0, _.wwZ)(_));
            _ &&
              _.push({
                sURL: (0, _._)(_),
                eLanguage: _,
                sKind: "captions",
                bDefault: _ && _ == _,
              });
          }
          return {
            sPoster: _,
            rgVideoSources: _,
            rgVideoTracks: _,
          };
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)(_._, {
            video: _,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function _(_) {
          const _ = _(_.args),
            _ = _.children ? _.children.toString() : void 0;
          _ &&
            _.startsWith("http") &&
            _.rgVideoSources.push({
              sURL: (0, _._)(_),
              sFormat: "video/webm",
            });
          const _ = (0, _._)(_.args, "autoplay"),
            _ = _ !== "0" && _ !== "off" && _ !== "false",
            _ = (0, _._)(_.args, "controls"),
            _ = _ !== "0" && _ !== "off" && _ !== "false",
            _ = (0, _._)(_.args, "loop"),
            _ = _ !== "0" && _ !== "off" && _ !== "false";
          return (0, _.jsx)(_._, {
            video: _,
            bAutoPlay: _,
            bControls: _,
            bLoop: _ ? _ : _,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapYouTubeVideo = new Map();
          m_mapSharedFile = new Map();
          async LoadYouTubeDynamicData(_, _) {
            let _ = new Array(),
              _ = "";
            if (
              (_.forEach((_, _) => {
                const _ = this.m_mapYouTubeVideo.get(_);
                _ ? _.push(_) : (_.length > 0 && (_ += ","), (_ += _));
              }),
              _.length == 0)
            )
              return _;
            let _ = {
              youtubevideoids: _,
            };
            const _ = (
              await _().get(
                _._.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                {
                  params: _,
                  cancelToken: _.token,
                },
              )
            )?.data?.youtube;
            return (
              _ &&
                (0, _._)(() => {
                  _.forEach((_, _) => {
                    this.m_mapYouTubeVideo.set(_.videoid, _), _.push(_);
                  });
                }),
              _
            );
          }
          async LoadSharedFileDynamicData(_, _) {
            let _ = new Array(),
              _ = "";
            if (
              (_.forEach((_, _) => {
                const _ = this.m_mapSharedFile.get(_);
                _ ? _.push(_) : (_.length > 0 && (_ += ","), (_ += _));
              }),
              _.length == 0)
            )
              return _;
            let _ = {
              sharedfileids: _,
            };
            const _ = (
              await _().get(
                _._.STORE_BASE_URL + "/events/ajaxgetdynamiceventmetadata",
                {
                  params: _,
                  cancelToken: _.token,
                },
              )
            )?.data?.sharedfiles;
            return (
              _ &&
                (0, _._)(() => {
                  _.forEach((_, _) => {
                    this.m_mapSharedFile.set(_.sharedfileid, _), _.push(_);
                  });
                }),
              _
            );
          }
        }
        _([_._], _.prototype, "m_mapYouTubeVideo", 2),
          _([_._], _.prototype, "m_mapSharedFile", 2);
        const _ = new _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return new _._(new _._());
        }
        function _() {
          return new Map([...Array.from(_._.entries())]);
        }
        function _(_) {
          const { text: _, languageOverride: _ } = _,
            [_] = (0, _.useState)(new _._(_(), _, _ ?? _._.LANGUAGE));
          return (0, _.jsx)(_.Fragment, {
            children: _.ParseBBCode(_, {}),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          return _._.EREALM === _._.k_ESteamRealmChina;
        }
        var _ = ((_) => (
          (_.left = "leftthumb"),
          (_.right = "rightthumb"),
          (_.full = "full"),
          (_.summary = "summary"),
          _
        ))(_ || {});
        function _(_) {
          const _ = _ == "full" ? _.sizeFull : _.sizeThumb,
            _ =
              _ == "full" ? "" : _ == "leftthumb" ? _.floatLeft : _.floatRight;
          return {
            sizeStr: _,
            alignStr: _,
          };
        }
        function _(_) {
          if (_()) return null;
          let _ = (0, _._)(_.args);
          if (_) {
            let _ = _.split(";");
            if (_.length == 2) {
              let _ = _[0],
                _ = _[1].toLocaleLowerCase();
              const { sizeStr: _, alignStr: _ } = _(_);
              return (0, _.jsx)(_._, {
                videoID: _,
                classNameAlign: _,
                classNameSize: _,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, _.jsx)(_.Fragment, {});
        }
        function _(_) {
          if (_()) return null;
          const _ = GetVideoIDAndStartTimeFromYouTubeURL(_);
          return _?.strVideoID !== void 0
            ? jsx(YouTubeInlineSnippet, {
                videoID: _.strVideoID,
                nStartSeconds: _.nStartSeconds,
                classNameAlign: "",
                classNameSize: youtubestyles.sizeFull,
                bShowVideoImmediately: !1,
              })
            : _;
        }
        function _(_) {
          if (_() || _._.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, _._)(_);
          const _ = (0, _._)(_.args, "youtubeid"),
            _ = (0, _._)(_.args, "size"),
            _ = (0, _._)(_.args, "seconds"),
            { sizeStr: _, alignStr: _ } = _(_);
          return (0, _.jsx)(_._, {
            videoID: _,
            nStartSeconds: _ ? Number.parseInt(_) : void 0,
            classNameAlign: _,
            classNameSize: _,
            bShowVideoImmediately: !0,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              videoID: _,
              bShowVideoImmediately: _,
              bAutoPlay: _,
              nStartSeconds: _,
              classNameSize: _,
              classNameAlign: _,
            } = _,
            [_, _] = (0, _.useState)(!_),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("YouTubeInlineSnippet"),
            [_, _] = (0, _.useState)({
              title: (0, _._)("#Loading"),
              description: "",
              videoid: _,
              views: "0",
            });
          if (
            ((0, _.useEffect)(() => {
              _ &&
                _._.LoadYouTubeDynamicData([_], _)
                  .then((_) => {
                    !_.token.reason && _.length > 0 && (_(_[0]), _(!0));
                  })
                  .catch((_) =>
                    console.error(
                      "YouTubeInlineSnippet: " + (0, _._)(_).strErrorMsg,
                    ),
                  );
            }, [_, _, _]),
            _)
          ) {
            const _ = _.title,
              _ = _.views,
              _ = _.description;
            return (0, _.jsxs)("div", {
              className: _._.Box,
              onClick: () => _(!1),
              children: [
                (0, _.jsx)(_._, {
                  strURL: "https://img.youtube.com/vi/" + _ + "/0.jpg",
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#EventEditor_YouTubeVideoTitle", _),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _._)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, _._)(Number(_)),
                      ),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        _ && _,
                        !_ &&
                          (0, _.jsx)(_._, {
                            size: "medium",
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, _.jsx)(_._, {
              video: _,
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_().PreviewYouTubeVideo, _, _),
                _: _,
                children: [
                  (0, _.jsx)("img", {
                    className: _().PlaceholderImg,
                    src:
                      _._.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, _.jsx)(_._, {
                    video: _,
                    autoplay: _ ?? !1,
                    startSeconds: _,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { text: _ = "", style: _, children: _ } = _;
          if (_ == null)
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          let _;
          if (
            (_ instanceof Array
              ? (_ = _.map((_) => (_ ? _.toString() : ""))
                  .filter((_) => _.length > 0)
                  .join(`
`))
              : (_ = _.toString()),
            _.Children.count(_) == 1)
          ) {
            let _ = _.Children.only(_);
            return _.cloneElement(_, {
              "data-copystyle": _,
              "data-copytext": _,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${_} copytext=${_}`),
              (0, _.jsx)(_.Fragment, {
                children: _,
              })
            );
        }
        function _(_) {
          let _ = _.cloneContents(),
            _ = "",
            _ = "",
            _ = !1,
            _ = (
              _.querySelector("[data-activechat=true]") || _
            ).querySelectorAll("[data-copytext]"),
            _ = Array.from(_).map(
              (_) => _.getAttribute("data-copystyle") || "msg",
            );
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_],
              _ = _[_];
            if (_ + 1 < _.length && DOMUtils.BIsParent(_, _[_ + 1])) continue;
            let _ = _.tagName.toLowerCase(),
              _ = _.includes("block"),
              _ = _.includes("timestamp"),
              _ = _.includes("server"),
              _ = _.includes("invite"),
              _ = _.includes("emote"),
              _ = _.includes("no-prefix"),
              _ = _.includes("no-suffix"),
              _ = _.includes("allow-embedded-newlines"),
              _ = _.includes("block-continue"),
              _ = _.includes("merge-adjacent"),
              _ = _.includes("force-display"),
              _ = _.includes("prepend-innertext"),
              _ = _.includes("append-innertext"),
              _ = _.includes("prepend-newline"),
              _ = _.includes("append-newline"),
              _ = _.includes("speaker");
            if (!_) {
              let _ = _.match(/img|iframe/) != null,
                _ = _.querySelector("img,iframe") != null;
              if (!_.innerText && !_ && !_) continue;
            }
            _ &&
              (_ > 0 && _[_ - 1].includes("merge-adjacent") && (_ = !0),
              _ + 1 < _.length &&
                _[_ + 1].includes("merge-adjacent") &&
                (_ = !0)),
              _ && (_ = !0);
            let _ = "",
              _ = `
`;
            !_ && !_ && !_ && !_ && !_
              ? (_ && (_ += "	"),
                _.includes("msg") && _ && (_ = !0),
                _.includes("block") && !_ && (_ = !0))
              : (_.length != 0 &&
                  (_ += `
`),
                (_ || _) && (_ += "		"));
            let _ = _.getAttribute("data-copytext") ?? "";
            _.length == 0
              ? (_ = _.innerText)
              : _ && _.innerText.length > 0
                ? (_ = `${_.innerText}${
                    _.includes("-with-newline")
                      ? `
`
                      : " "
                  }${_}`)
                : _ &&
                  _.innerText.length > 0 &&
                  (_ += `${
                    _.includes("-with-newline")
                      ? `
`
                      : " "
                  }${_.innerText}`),
              _.length != 0 &&
                (_ &&
                  (_ += `
`),
                _ || (_ += _),
                (_ += _ ? _ : _.replace(/\n/g, _ + _)),
                _ || (_ += _),
                _ &&
                  (_ += `
`)),
              (_ = _);
          }
          if (_.length != 0) return _;
        }
        function _(_) {
          const _ = _(_);
          _ != null && DOMUtils.CopyTextToClipboard(_);
        }
        function _(_) {
          const _ = document.createRange();
          _.selectNode(_), _(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { emoticon: _, large: _ } = _,
            [_, _] = (0, _._)(),
            [_, _] = _.useState(null),
            _ = `:${_}:`,
            _ = (0, _._)(_, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                text: _,
                style: "merge-adjacent",
                children: (0, _.jsx)("img", {
                  ..._,
                  src: _,
                  className: (0, _._)(_().emoticon, _ ? _().large : void 0),
                  "data-emoticon": _,
                  alt: _,
                  ref: _,
                }),
              }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  target: _,
                  emoticon: _,
                }),
            ],
          });
        }
        function _(_) {
          const { target: _, emoticon: _ } = _,
            { data: _ } = _(_);
          return (0, _.jsx)(_, {
            target: _,
            title: `:${_}:`,
            subtitle: _ && _.app_name ? _.app_name : void 0,
            children: (0, _.jsx)(_, {
              emoticon: _,
              large: !0,
            }),
          });
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["EmoticonHover", _],
            queryFn: async () => {
              const _ = `${_._.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(_)}?l=${encodeURIComponent(_._.LANGUAGE)}&origin=${self.origin}`,
                _ = await fetch(_);
              if (_.status != 200)
                throw `Error fetching emoticon: ${_.status} ${_.statusText}`;
              return await _.json();
            },
          });
        }
        const _ = ({ target: _, title: _, subtitle: _, children: _ }) =>
          (0, _.jsxs)(_._, {
            target: _,
            style: {
              zIndex: 1700,
            },
            className: _().EmoticonHover,
            children: [
              _,
              (0, _.jsxs)("div", {
                className: _().Info,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Name,
                    children:
                      _ ||
                      (0, _.jsx)("span", {
                        children: "\xA0",
                      }),
                  }),
                  (0, _.jsx)("div", {
                    className: _().AppName,
                    children:
                      _ ||
                      (0, _.jsx)("span", {
                        children: "\xA0",
                      }),
                  }),
                ],
              }),
            ],
          });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          if (!_) return _;
          const _ = _.trim(),
            _ = _.toLowerCase();
          return _.startsWith("javascript:") ||
            _.startsWith("data:") ||
            _.startsWith("vbscript:")
            ? ""
            : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = (0, _._)((_) => {
            const _ = (0, _._)(_.photo, (0, _.sfN)(_._.LANGUAGE)),
              _ = _ ? (typeof _ == "string" ? _ : _[1]) : void 0,
              _ = !!_.title,
              _ = !!_.company;
            return (0, _.jsxs)("div", {
              className: _().SpeakerPopup,
              onMouseLeave: _.fnClose,
              children: [
                (0, _.jsxs)("div", {
                  className: _().SpeakerInfoOuter,
                  children: [
                    _.photo &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                    (0, _.jsxs)("div", {
                      className: _().SpeakerInfoInner,
                      children: [
                        (0, _.jsx)("div", {
                          children: _.name,
                        }),
                        (_ || _) &&
                          (0, _.jsxs)("div", {
                            children: [
                              _ &&
                                (0, _.jsx)("span", {
                                  className: _().SpeakerTitle,
                                  children: _.title,
                                }),
                              _ &&
                                _ &&
                                (0, _.jsx)("span", {
                                  children: ", ",
                                }),
                              _ &&
                                (0, _.jsx)("span", {
                                  children: _.company,
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                _.bio &&
                  (0, _.jsxs)("div", {
                    className: _().SpeakerBio,
                    children: [
                      _.bio,
                      _.bioString &&
                        (0, _.jsx)(_._, {
                          text: _.bioString,
                        }),
                    ],
                  }),
              ],
            });
          }),
          _ = class _ extends _.Component {
            static sm_embeddedElements = new _._(
              "presenter-hover-source-elements",
            );
            m_refAnchor = _.createRef();
            m_fnHidePopup = null;
            m_nScrollPosAtHoverStart = 0;
            ClosePopup() {
              (0, _._)() ||
                (this.m_fnHidePopup &&
                  (this.m_fnHidePopup(),
                  (this.m_fnHidePopup = null),
                  window.removeEventListener("scroll", this.OnScroll)));
            }
            componentWillUnmount() {
              this.ClosePopup();
            }
            OnScroll() {
              Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
                this.ClosePopup();
            }
            OnHover(_) {
              const _ = this.m_refAnchor.current;
              if (!_) return;
              const _ = {
                  direction: "right",
                  bEnablePointerEvents: !0,
                  style: {
                    maxWidth: 640,
                    minHeight: _.clientHeight,
                  },
                  target: _,
                },
                _ = "presenter-hover-" + Math.floor(Math.random() * 1e8);
              (this.m_fnHidePopup = () =>
                _.sm_embeddedElements.HideElement(_.ownerDocument, _)),
                window.addEventListener("scroll", this.OnScroll),
                (this.m_nScrollPosAtHoverStart = window.scrollY),
                _.sm_embeddedElements.ShowElementDelayed(
                  _.ownerDocument,
                  150,
                  (0, _.jsx)(_._, {
                    ..._,
                    children: (0, _.jsx)(_, {
                      ...this.props,
                      fnClose: this.OnLeave,
                    }),
                  }),
                  _,
                );
            }
            OnLeave(_) {
              this.ClosePopup();
            }
            render() {
              return (0, _.jsx)("div", {
                className: _().SpeakerHover,
                ref: this.m_refAnchor,
                onMouseEnter: this.OnHover,
                onFocus: this.OnHover,
                onMouseLeave: this.OnLeave,
                onBlur: this.OnLeave,
                children: this.props.children,
              });
            }
          };
        _([_._], _.prototype, "ClosePopup", 1),
          _([_._], _.prototype, "OnScroll", 1),
          _([_._], _.prototype, "OnHover", 1),
          _([_._], _.prototype, "OnLeave", 1);
        let _ = _;
        function _(_) {
          const {
              photo: _,
              name: _,
              title: _,
              company: _,
              hidePhotoInCompactView: _,
            } = _,
            _ = (0, _._)(_, (0, _.sfN)(_._.LANGUAGE)),
            _ = _ && !_ ? (typeof _ == "string" ? _ : _[1]) : null,
            _ = !!_,
            _ = !!_;
          return (0, _.jsx)("div", {
            className: _().SpeakerOuter,
            children: (0, _.jsx)(_, {
              ..._,
              children: (0, _.jsx)("div", {
                className: _().Speaker,
                children: (0, _.jsxs)("div", {
                  className: _().SpeakerInfoOuter,
                  children: [
                    !!_ &&
                      (0, _.jsx)("img", {
                        src: _,
                      }),
                    (0, _.jsxs)("div", {
                      className: _().SpeakerInfoInner,
                      children: [
                        (0, _.jsx)("div", {
                          children: _,
                        }),
                        (_ || _) &&
                          (0, _.jsxs)("div", {
                            children: [
                              _ &&
                                (0, _.jsx)("span", {
                                  className: _().SpeakerTitle,
                                  children: _,
                                }),
                              _ &&
                                _ &&
                                (0, _.jsx)("span", {
                                  children: ", ",
                                }),
                              _ &&
                                (0, _.jsx)("span", {
                                  children: _,
                                }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          return !(
            !(0, _._)(_.sPoster) ||
            (_.rgVideoSources &&
              _.rgVideoSources.some((_) => !(0, _._)(_.sURL))) ||
            (_.rgVideoTracks && _.rgVideoTracks.some((_) => !(0, _._)(_.sURL)))
          );
        }
        const _ = class _ {
          m_bUserHasVolumePreference = !1;
          m_flVolumePreference = 0;
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(_) {
            (this.m_flVolumePreference = _),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
        };
        _([_._], _.prototype, "BUserHasVolumePreference", 1),
          _([_._], _.prototype, "SetVolumePreference", 1);
        let _ = _;
        const _ = (0, _.forwardRef)(function (_, _) {
            const {
                video: _,
                bAutoPlay: _,
                bControls: _,
                bLoop: _,
                bMuted: _,
                className: _,
                mediaScale: _,
                onClick: _,
                altText: _,
              } = _,
              _ = (0, _.useMemo)(
                () =>
                  !!_.rgVideoTracks?.some(
                    (_) => _.sKind == "subtitles" || _.sKind == "captions",
                  ),
                [_.rgVideoTracks],
              ),
              [_, _] = _.useState(!1),
              _ = _();
            if (!_.rgVideoSources || !_.rgVideoSources.length) return null;
            const _ = _(_);
            let _;
            (!_ || (_ && _._.EUNIVERSE == _.wLO)) && (_ = "anonymous");
            const _ = _ || (_ && _.Get().BVolumePreferenceMuted()),
              _ = _.sPoster ? _(_.sPoster, _) : "",
              _ = (_) => {
                const _ = _.target,
                  _ = _.muted ? 0 : _.volume;
                _ && _.Get().SetVolumePreference(_);
              },
              _ = (_) => {
                const _ = _.target,
                  _ = _.currentTime == 0,
                  _ = _.Get().BUserHasVolumePreference();
                if ((_(!0), !!_))
                  if (!_ && !_) {
                    const _ = _.muted ? 0 : _.volume;
                    _.Get().SetVolumePreference(_);
                  } else
                    _ &&
                      ((_.volume = _.Get().GetVolumePreference()),
                      (_.muted = _.Get().BVolumePreferenceMuted()));
              };
            return (0, _.jsxs)("video", {
              width: "100%",
              height: "auto",
              autoPlay: _,
              muted: _,
              playsInline: !0,
              controls: _,
              poster: _,
              loop: _,
              crossOrigin: _,
              onVolumeChange: _,
              onPlay: _,
              ref: _,
              className: _,
              onClick: _,
              "aria-label": _,
              style: {
                width: _ && _ >= 1 && _ < 100 ? `${_}%` : void 0,
              },
              children: [
                (0, _.jsx)(_, {
                  rgVideoSources: _.rgVideoSources,
                }),
                (0, _.jsx)(_, {
                  rgVideoTracks: _.rgVideoTracks,
                }),
              ],
            });
          }),
          _ = _.createContext(void 0);
        function _(_) {
          const { children: _, strOrigin: _ } = _;
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return _.useContext(_) || (0, _._)();
        }
        function _(_, _) {
          if (_)
            try {
              const _ = new URL(_);
              return (
                (_.search = (_.search ? _.search + "&" : "?") + "origin=" + _),
                _.toString()
              );
            } catch {
              return _;
            }
        }
        function _(_) {
          const { rgVideoSources: _ } = _,
            _ = _();
          return _.filter((_) => !!_.sURL).map((_) =>
            (0, _.jsx)(
              "source",
              {
                src: _(_.sURL, _),
                type: _.sFormat,
              },
              _.sURL,
            ),
          );
        }
        function _(_) {
          const { rgVideoTracks: _ } = _;
          return _
            ? _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    track: _,
                    rgVideoTracks: _,
                  },
                  _,
                ),
              )
            : null;
        }
        function _(_) {
          const { track: _, rgVideoTracks: _ } = _,
            _ = _();
          let _ = _.eLanguage;
          if (_._.EREALM == _._.k_ESteamRealmChina)
            if (_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmChina))
              _ = _._.GetELanguageFallback(_);
            else if (_ === _.NFp) {
              if (_.find((_) => _._.GetELanguageFallback(_.eLanguage) === _))
                return null;
            } else return null;
          else if (!_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmGlobal))
            return null;
          return (0, _.jsx)("track", {
            src: _(_.sURL, _),
            kind: _.sKind,
            default: _.bDefault,
            srcLang: (0, _.wwZ)(_),
            label: (0, _._)(_),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          enabled: !0,
        });
        function _(_) {
          const { enabled: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                enabled: _,
              }),
              [_],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGamepadFocus: _ = !1,
              onRender: _,
              style: _,
              mode: _ = "JustLoad",
              children: _,
              ..._
            } = _,
            _ = _.useContext(_),
            [_, _] = _.useState(() => ({
              bRenderChildren: !_.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            _ = _.useRef(null),
            _ = _ === "LoadAndUnload" && _.enabled,
            _ = _.useCallback(
              (_) => {
                _((_) => {
                  if (_.bRenderChildren === _ || (_.bRenderChildren && !_))
                    return _;
                  let _ = 0,
                    _ = 0;
                  if (_.current) {
                    const _ = _.current.getBoundingClientRect();
                    _ && ((_ = _.width), (_ = _.height));
                  }
                  return (
                    _ && _ && _(),
                    {
                      bRenderChildren: _,
                      nPrevRenderWidth: _,
                      nPrevRenderHeight: _,
                    }
                  );
                });
              },
              [_, _],
            );
          _.useEffect(() => {
            _.enabled || _(!0);
          }, [_.enabled, _]);
          let _ = _;
          if (!_.bRenderChildren) {
            const _ = _.nPrevRenderWidth || _,
              _ = _.nPrevRenderHeight || _;
            (_ !== void 0 || _ !== void 0) &&
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = _ ? "repeated" : "once";
          let _ = (0, _.jsx)(_._, {
            containerRef: _,
            style: _,
            ..._,
            onVisibilityChange: _,
            trigger: _,
            children: _.bRenderChildren && _,
          });
          return (
            _ &&
              (_ = (0, _.jsx)(_._, {
                focusableIfEmpty: !0,
                style: {
                  height: "100%",
                },
                children: _,
              })),
            _
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          _: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DynamicLinkBox: "_3OFDUxRty2ooEGGBg8vLNM",
          DynamicLink_Preview: "_4x92ciMecfHsd6LXEp3zX",
          DynamicLink_Author: "_2CrHQnyBFUGqFf-6TbIsUA",
          DynamicLink_Description: "_1iv64lWG6UxhSX400UsU1S",
          DynamicLink_YouTubeEmbed: "_3Jd9PKMuBGuSbDBCsV03Oo",
          DynamicLink_StoreWidget: "uvn7ESAm1Jwm-SOwZmBWO",
          DynamicLink_Content: "_29vvBvtM17Ec_19L9VJZdk",
          DynamicLink_Name: "_25KAQjQwrv2EL8tnlLeTB7",
          DynamicLink_YoutubeViews: "_3ZgvwxMMqbe_8wVfRiQ9kq",
          Dynamiclink_Content: "_3UUlLNsS9oZt2zNHM5T76z",
          DynamicLink_URL: "_9135FDWNKXjIolFAo7Gub",
          DynamicLink_AuthorName: "_6R7Q24Jlkhs_t0fYUHxQx",
          DynamicLink_Date: "_15wEuEj-SyCZ4J4hJqtmgD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreviewYouTubeVideo: "rUASsQgg0rvqoACIDRygZ",
          sizeThumb: "_3dy3KtMG10uNhU2HRfwx3A",
          sizeFull: "_14CxWorQ1RNkZvdhXYWAh-",
          PlaceholderImg: "LILNdsmSgG52f0MP1f2O3",
          floatLeft: "_2OWxr5tZIjB4gTfA3vE2Gc",
          floatRight: "om0Rs75g2ScLGnDWC76IQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          NewEmoticonIndicator: "_5BtHMjT9usALaSWHGugdV",
          NewEmoticonCircle: "u5Kx6dkUppvb-1qV4IIuy",
          EmoticonSelector: "_21dGPKyxoQJmk8T757A5tl",
          emoticon: "_1ZQW1wV5cNj3sDpibfbUqs",
          large: "_20l1z3ShpHQ9njRDYgy1I5",
          EmoticonSelector_Emoticons: "_1zMG_TAAO7uJ9DZvsPLfay",
          EmoticonSelector_Separator: "_2ETbIGwtl6SLfkb48DDgvG",
          EmoticonSelector_SeparatorBackground: "_3vIdbqkcpvxxyyRioKoQkz",
          EmoticonSelector_Controls: "_2ncH4xow85UXkBM0hcrY8l",
          EmoticonSelector_Item: "iSEjD9v1iZNJNbGHtDLZx",
          EmoticonSelector_Item_New: "_1C2S6Gne45ErVlr3yX0YuG",
          EffectHeading: "_1G4cTIWNmmp8hn-0UODGqo",
          StickerHeading: "_2o2L-YGgH5cNuwJW9nU9dm",
          GetFestive: "EOLiaNBZK-eUBTeiD-P4c",
          TopDivider: "xf7hAWPD4WwXxsyXYxFFo",
          BottomDivider: "_1gjpUnY8RyS8HpizGQvyFI",
          StickerButton: "_2fYj8pHe3bHHxWj4FucFvj",
          EffectButton: "_22MJpsSm-Ur5FU5WpYQKzn",
          EmoticonHover: "W_hPU2JmhTx3oUqDN9ADo",
          Info: "_29D_0UxbftoceIAKZktndo",
          Name: "_3zUR2KWg7TNWOQx2nDFyoh",
          AppName: "_2JWWOJGZuX70xQcA2QaBg",
          StickerHoverSticker: "_1HdRqbOgpBfEQzQ2py5nq5",
          EffectHoverEffect: "_1GZ-ESK0dV6oJBDhsU3RiH",
          PickerTab: "VrrpBsQE4GFseDy3cTw1Q",
          Clock: "_16xcLj__xBHmc9xDYmADhW",
          EmoticonItem: "P1aWuK_DhstDh-M08okCK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SpeakerOuter: "_3rRqPJdGrYx9YMtQMciIFY",
          Speaker: "_3F7-FkJu8-JstT7SouP8XJ",
          SpeakerPopup: "_3y7kVhhGmtbSgbZdte0EuV",
          SpeakerInfoOuter: "_1NC9nn23Pdd7FtZW6zM7he",
          SpeakerInfoInner: "_1bMpEcCbkVkKo1Oc02WFoJ",
          SpeakerTitle: "_2Vo0lUG19xIopljkxhtSod",
          SpeakerBio: "_2yP7s2N28D9PFHs9yUr3jD",
          SpeakerHover: "_16UyHpAXG98qQsfN8mBk3x",
        };
      },
    },
  ]);
})();
