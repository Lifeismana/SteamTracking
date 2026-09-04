/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6995],
    {
      45772: () => {},
      74763: () => {},
      54806: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { E: () => ye });
        var v = Fe(90626),
          se = Fe(86709),
          Te = Fe(45747),
          ve = Fe(74500),
          ge = Fe(57168);
        function Ye(K, Q) {
          return K.filter((ce) => !Q.includes(ce));
        }
        function _e(K, Q, ce) {
          const _ = K.slice(0);
          return (_[Q] = ce), _;
        }
        var ze = class extends ve.Q {
            #i;
            #e;
            #r;
            #s;
            #t;
            #n;
            #l;
            #a;
            constructor(K, Q, ce) {
              super(),
                (this.#i = K),
                (this.#s = ce),
                (this.#r = []),
                (this.#t = []),
                (this.#e = []),
                this.setQueries(Q);
            }
            onSubscribe() {
              this.listeners.size === 1 &&
                this.#t.forEach((K) => {
                  K.subscribe((Q) => {
                    this.#h(K, Q);
                  });
                });
            }
            onUnsubscribe() {
              this.listeners.size || this.destroy();
            }
            destroy() {
              (this.listeners = new Set()),
                this.#t.forEach((K) => {
                  K.destroy();
                });
            }
            setQueries(K, Q, ce) {
              (this.#r = K),
                (this.#s = Q),
                se.j.batch(() => {
                  const _ = this.#t,
                    G = this.#o(this.#r);
                  G.forEach((me) =>
                    me.observer.setOptions(me.defaultedQueryOptions, ce),
                  );
                  const U = G.map((me) => me.observer),
                    ae = U.map((me) => me.getCurrentResult()),
                    X = U.some((me, ke) => me !== _[ke]);
                  (_.length === U.length && !X) ||
                    ((this.#t = U),
                    (this.#e = ae),
                    this.hasListeners() &&
                      (Ye(_, U).forEach((me) => {
                        me.destroy();
                      }),
                      Ye(U, _).forEach((me) => {
                        me.subscribe((ke) => {
                          this.#h(me, ke);
                        });
                      }),
                      this.#u()));
                });
            }
            getCurrentResult() {
              return this.#e;
            }
            getQueries() {
              return this.#t.map((K) => K.getCurrentQuery());
            }
            getObservers() {
              return this.#t;
            }
            getOptimisticResult(K, Q) {
              const _ = this.#o(K).map((G) =>
                G.observer.getOptimisticResult(G.defaultedQueryOptions),
              );
              return [_, (G) => this.#f(G ?? _, Q), () => this.#c(_, K)];
            }
            #c(K, Q) {
              const ce = this.#o(Q);
              return ce.map((_, G) => {
                const U = K[G];
                return _.defaultedQueryOptions.notifyOnChangeProps
                  ? U
                  : _.observer.trackResult(U, (ae) => {
                      ce.forEach((X) => {
                        X.observer.trackProp(ae);
                      });
                    });
              });
            }
            #f(K, Q) {
              return Q
                ? ((!this.#n || this.#e !== this.#a || Q !== this.#l) &&
                    ((this.#l = Q),
                    (this.#a = this.#e),
                    (this.#n = (0, ge.BH)(this.#n, Q(K)))),
                  this.#n)
                : K;
            }
            #o(K) {
              const Q = new Map(this.#t.map((_) => [_.options.queryHash, _])),
                ce = [];
              return (
                K.forEach((_) => {
                  const G = this.#i.defaultQueryOptions(_),
                    U = Q.get(G.queryHash);
                  U
                    ? ce.push({ defaultedQueryOptions: G, observer: U })
                    : ce.push({
                        defaultedQueryOptions: G,
                        observer: new Te.$(this.#i, G),
                      });
                }),
                ce
              );
            }
            #h(K, Q) {
              const ce = this.#t.indexOf(K);
              ce !== -1 && ((this.#e = _e(this.#e, ce, Q)), this.#u());
            }
            #u() {
              if (this.hasListeners()) {
                const K = this.#n,
                  Q = this.#f(this.#c(this.#e, this.#r), this.#s?.combine);
                K !== Q &&
                  se.j.batch(() => {
                    this.listeners.forEach((ce) => {
                      ce(this.#e);
                    });
                  });
              }
            }
          },
          Me = Fe(75233),
          We = Fe(22730),
          Je = Fe(43424),
          Ne = Fe(19086),
          Ge = Fe(44407),
          et = Fe(19866);
        function ye({ queries: K, ...Q }, ce) {
          const _ = (0, Me.jE)(ce),
            G = (0, We.w)(),
            U = (0, Je.h)(),
            ae = v.useMemo(
              () =>
                K.map((de) => {
                  const C = _.defaultQueryOptions(de);
                  return (
                    (C._optimisticResults = G ? "isRestoring" : "optimistic"), C
                  );
                }),
              [K, _, G],
            );
          ae.forEach((de) => {
            (0, Ge.jv)(de), (0, Ne.LJ)(de, U);
          }),
            (0, Ne.wZ)(U);
          const [X] = v.useState(() => new ze(_, ae, Q)),
            [me, ke, Be] = X.getOptimisticResult(ae, Q.combine);
          v.useSyncExternalStore(
            v.useCallback(
              (de) => (G ? et.l : X.subscribe(se.j.batchCalls(de))),
              [X, G],
            ),
            () => X.getCurrentResult(),
            () => X.getCurrentResult(),
          ),
            v.useEffect(() => {
              X.setQueries(ae, Q, { listeners: !1 });
            }, [ae, Q, X]);
          const Ve = me.some((de, C) => (0, Ge.EU)(ae[C], de))
            ? me.flatMap((de, C) => {
                const z = ae[C];
                if (z) {
                  const T = new Te.$(_, z);
                  if ((0, Ge.EU)(z, de)) return (0, Ge.iL)(z, T, U);
                  (0, Ge.nE)(de, G) && (0, Ge.iL)(z, T, U);
                }
                return [];
              })
            : [];
          if (Ve.length > 0) throw Promise.all(Ve);
          const Ae = me.find((de, C) => {
            const z = ae[C];
            return (
              z &&
              (0, Ne.$1)({
                result: de,
                errorResetBoundary: U,
                throwOnError: z.throwOnError,
                query: _.getQueryCache().get(z.queryHash),
              })
            );
          });
          if (Ae?.error) throw Ae.error;
          return ke(Be());
        }
      },
      12362: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          I$: () => ae,
          RV: () => mt,
          hy: () => Ve,
          st: () => Le,
          wh: () => pe,
          y_: () => j,
        });
        var v = Fe(63734),
          se = Fe(57053),
          Te = Fe(52893);
        const ve = ($, H) =>
          $.selection.empty
            ? !1
            : (H && H($.tr.deleteSelection().scrollIntoView()), !0);
        function ge($, H) {
          let { $cursor: te } = $.selection;
          return !te ||
            (H ? !H.endOfTextblock("backward", $) : te.parentOffset > 0)
            ? null
            : te;
        }
        const Ye = ($, H, te) => {
            let re = ge($, te);
            if (!re) return !1;
            let oe = Ne(re);
            if (!oe) {
              let be = re.blockRange(),
                we = be && (0, v.jP)(be);
              return we == null
                ? !1
                : (H && H($.tr.lift(be, we).scrollIntoView()), !0);
            }
            let fe = oe.nodeBefore;
            if (!fe.type.spec.isolating && C($, oe, H)) return !0;
            if (
              re.parent.content.size == 0 &&
              (We(fe, "end") || Te.nh.isSelectable(fe))
            ) {
              let be = (0, v.$L)($.doc, re.before(), re.after(), se.Ji.empty);
              if (be && be.slice.size < be.to - be.from) {
                if (H) {
                  let we = $.tr.step(be);
                  we.setSelection(
                    We(fe, "end")
                      ? Te.LN.findFrom(
                          we.doc.resolve(we.mapping.map(oe.pos, -1)),
                          -1,
                        )
                      : Te.nh.create(we.doc, oe.pos - fe.nodeSize),
                  ),
                    H(we.scrollIntoView());
                }
                return !0;
              }
            }
            return fe.isAtom && oe.depth == re.depth - 1
              ? (H &&
                  H($.tr.delete(oe.pos - fe.nodeSize, oe.pos).scrollIntoView()),
                !0)
              : !1;
          },
          _e = ($, H, te) => {
            let re = ge($, te);
            if (!re) return !1;
            let oe = Ne(re);
            return oe ? Me($, oe, H) : !1;
          },
          ze = ($, H, te) => {
            let re = Ge($, te);
            if (!re) return !1;
            let oe = K(re);
            return oe ? Me($, oe, H) : !1;
          };
        function Me($, H, te) {
          let re = H.nodeBefore,
            oe = re,
            fe = H.pos - 1;
          for (; !oe.isTextblock; fe--) {
            if (oe.type.spec.isolating) return !1;
            let Ue = oe.lastChild;
            if (!Ue) return !1;
            oe = Ue;
          }
          let be = H.nodeAfter,
            we = be,
            He = H.pos + 1;
          for (; !we.isTextblock; He++) {
            if (we.type.spec.isolating) return !1;
            let Ue = we.firstChild;
            if (!Ue) return !1;
            we = Ue;
          }
          let je = replaceStep($.doc, fe, He, Slice.empty);
          if (
            !je ||
            je.from != fe ||
            (je instanceof ReplaceStep && je.slice.size >= He - fe)
          )
            return !1;
          if (te) {
            let Ue = $.tr.step(je);
            Ue.setSelection(TextSelection.create(Ue.doc, fe)),
              te(Ue.scrollIntoView());
          }
          return !0;
        }
        function We($, H, te = !1) {
          for (
            let re = $;
            re;
            re = H == "start" ? re.firstChild : re.lastChild
          ) {
            if (re.isTextblock) return !0;
            if (te && re.childCount != 1) return !1;
          }
          return !1;
        }
        const Je = ($, H, te) => {
          let { $head: re, empty: oe } = $.selection,
            fe = re;
          if (!oe) return !1;
          if (re.parent.isTextblock) {
            if (te ? !te.endOfTextblock("backward", $) : re.parentOffset > 0)
              return !1;
            fe = Ne(re);
          }
          let be = fe && fe.nodeBefore;
          return !be || !Te.nh.isSelectable(be)
            ? !1
            : (H &&
                H(
                  $.tr
                    .setSelection(Te.nh.create($.doc, fe.pos - be.nodeSize))
                    .scrollIntoView(),
                ),
              !0);
        };
        function Ne($) {
          if (!$.parent.type.spec.isolating)
            for (let H = $.depth - 1; H >= 0; H--) {
              if ($.index(H) > 0) return $.doc.resolve($.before(H + 1));
              if ($.node(H).type.spec.isolating) break;
            }
          return null;
        }
        function Ge($, H) {
          let { $cursor: te } = $.selection;
          return !te ||
            (H
              ? !H.endOfTextblock("forward", $)
              : te.parentOffset < te.parent.content.size)
            ? null
            : te;
        }
        const et = ($, H, te) => {
            let re = Ge($, te);
            if (!re) return !1;
            let oe = K(re);
            if (!oe) return !1;
            let fe = oe.nodeAfter;
            if (C($, oe, H)) return !0;
            if (
              re.parent.content.size == 0 &&
              (We(fe, "start") || Te.nh.isSelectable(fe))
            ) {
              let be = (0, v.$L)($.doc, re.before(), re.after(), se.Ji.empty);
              if (be && be.slice.size < be.to - be.from) {
                if (H) {
                  let we = $.tr.step(be);
                  we.setSelection(
                    We(fe, "start")
                      ? Te.LN.findFrom(
                          we.doc.resolve(we.mapping.map(oe.pos)),
                          1,
                        )
                      : Te.nh.create(we.doc, we.mapping.map(oe.pos)),
                  ),
                    H(we.scrollIntoView());
                }
                return !0;
              }
            }
            return fe.isAtom && oe.depth == re.depth - 1
              ? (H &&
                  H($.tr.delete(oe.pos, oe.pos + fe.nodeSize).scrollIntoView()),
                !0)
              : !1;
          },
          ye = ($, H, te) => {
            let { $head: re, empty: oe } = $.selection,
              fe = re;
            if (!oe) return !1;
            if (re.parent.isTextblock) {
              if (
                te
                  ? !te.endOfTextblock("forward", $)
                  : re.parentOffset < re.parent.content.size
              )
                return !1;
              fe = K(re);
            }
            let be = fe && fe.nodeAfter;
            return !be || !Te.nh.isSelectable(be)
              ? !1
              : (H &&
                  H(
                    $.tr
                      .setSelection(Te.nh.create($.doc, fe.pos))
                      .scrollIntoView(),
                  ),
                !0);
          };
        function K($) {
          if (!$.parent.type.spec.isolating)
            for (let H = $.depth - 1; H >= 0; H--) {
              let te = $.node(H);
              if ($.index(H) + 1 < te.childCount)
                return $.doc.resolve($.after(H + 1));
              if (te.type.spec.isolating) break;
            }
          return null;
        }
        const Q = ($, H) => {
            let te = $.selection,
              re = te instanceof NodeSelection,
              oe;
            if (re) {
              if (te.node.isTextblock || !canJoin($.doc, te.from)) return !1;
              oe = te.from;
            } else if (((oe = joinPoint($.doc, te.from, -1)), oe == null))
              return !1;
            if (H) {
              let fe = $.tr.join(oe);
              re &&
                fe.setSelection(
                  NodeSelection.create(
                    fe.doc,
                    oe - $.doc.resolve(oe).nodeBefore.nodeSize,
                  ),
                ),
                H(fe.scrollIntoView());
            }
            return !0;
          },
          ce = ($, H) => {
            let te = $.selection,
              re;
            if (te instanceof NodeSelection) {
              if (te.node.isTextblock || !canJoin($.doc, te.to)) return !1;
              re = te.to;
            } else if (((re = joinPoint($.doc, te.to, 1)), re == null))
              return !1;
            return H && H($.tr.join(re).scrollIntoView()), !0;
          },
          _ = ($, H) => {
            let { $from: te, $to: re } = $.selection,
              oe = te.blockRange(re),
              fe = oe && liftTarget(oe);
            return fe == null
              ? !1
              : (H && H($.tr.lift(oe, fe).scrollIntoView()), !0);
          },
          G = ($, H) => {
            let { $head: te, $anchor: re } = $.selection;
            return !te.parent.type.spec.code || !te.sameParent(re)
              ? !1
              : (H &&
                  H(
                    $.tr
                      .insertText(`
`)
                      .scrollIntoView(),
                  ),
                !0);
          };
        function U($) {
          for (let H = 0; H < $.edgeCount; H++) {
            let { type: te } = $.edge(H);
            if (te.isTextblock && !te.hasRequiredAttrs()) return te;
          }
          return null;
        }
        const ae = ($, H) => {
            let { $head: te, $anchor: re } = $.selection;
            if (!te.parent.type.spec.code || !te.sameParent(re)) return !1;
            let oe = te.node(-1),
              fe = te.indexAfter(-1),
              be = U(oe.contentMatchAt(fe));
            if (!be || !oe.canReplaceWith(fe, fe, be)) return !1;
            if (H) {
              let we = te.after(),
                He = $.tr.replaceWith(we, we, be.createAndFill());
              He.setSelection(Te.LN.near(He.doc.resolve(we), 1)),
                H(He.scrollIntoView());
            }
            return !0;
          },
          X = ($, H) => {
            let te = $.selection,
              { $from: re, $to: oe } = te;
            if (
              te instanceof Te.i5 ||
              re.parent.inlineContent ||
              oe.parent.inlineContent
            )
              return !1;
            let fe = U(oe.parent.contentMatchAt(oe.indexAfter()));
            if (!fe || !fe.isTextblock) return !1;
            if (H) {
              let be = (
                  !re.parentOffset && oe.index() < oe.parent.childCount
                    ? re
                    : oe
                ).pos,
                we = $.tr.insert(be, fe.createAndFill());
              we.setSelection(Te.U3.create(we.doc, be + 1)),
                H(we.scrollIntoView());
            }
            return !0;
          },
          me = ($, H) => {
            let { $cursor: te } = $.selection;
            if (!te || te.parent.content.size) return !1;
            if (te.depth > 1 && te.after() != te.end(-1)) {
              let fe = te.before();
              if ((0, v.zy)($.doc, fe))
                return H && H($.tr.split(fe).scrollIntoView()), !0;
            }
            let re = te.blockRange(),
              oe = re && (0, v.jP)(re);
            return oe == null
              ? !1
              : (H && H($.tr.lift(re, oe).scrollIntoView()), !0);
          };
        function ke($) {
          return (H, te) => {
            let { $from: re, $to: oe } = H.selection;
            if (H.selection instanceof Te.nh && H.selection.node.isBlock)
              return !re.parentOffset || !(0, v.zy)(H.doc, re.pos)
                ? !1
                : (te && te(H.tr.split(re.pos).scrollIntoView()), !0);
            if (!re.parent.isBlock) return !1;
            if (te) {
              let fe = oe.parentOffset == oe.parent.content.size,
                be = H.tr;
              (H.selection instanceof Te.U3 || H.selection instanceof Te.i5) &&
                be.deleteSelection();
              let we =
                  re.depth == 0
                    ? null
                    : U(re.node(-1).contentMatchAt(re.indexAfter(-1))),
                He = $ && $(oe.parent, fe),
                je = He ? [He] : fe && we ? [{ type: we }] : void 0,
                Ue = (0, v.zy)(be.doc, be.mapping.map(re.pos), 1, je);
              if (
                (!je &&
                  !Ue &&
                  (0, v.zy)(
                    be.doc,
                    be.mapping.map(re.pos),
                    1,
                    we ? [{ type: we }] : void 0,
                  ) &&
                  (we && (je = [{ type: we }]), (Ue = !0)),
                Ue &&
                  (be.split(be.mapping.map(re.pos), 1, je),
                  !fe && !re.parentOffset && re.parent.type != we))
              ) {
                let $e = be.mapping.map(re.before()),
                  Ze = be.doc.resolve($e);
                we &&
                  re.node(-1).canReplaceWith(Ze.index(), Ze.index() + 1, we) &&
                  be.setNodeMarkup(be.mapping.map(re.before()), we);
              }
              te(be.scrollIntoView());
            }
            return !0;
          };
        }
        const Be = ke(),
          Re = ($, H) =>
            Be(
              $,
              H &&
                ((te) => {
                  let re =
                    $.storedMarks ||
                    ($.selection.$to.parentOffset && $.selection.$from.marks());
                  re && te.ensureMarks(re), H(te);
                }),
            ),
          Ve = ($, H) => {
            let { $from: te, to: re } = $.selection,
              oe,
              fe = te.sharedDepth(re);
            return fe == 0
              ? !1
              : ((oe = te.before(fe)),
                H && H($.tr.setSelection(Te.nh.create($.doc, oe))),
                !0);
          },
          Ae = ($, H) => (H && H($.tr.setSelection(new Te.i5($.doc))), !0);
        function de($, H, te) {
          let re = H.nodeBefore,
            oe = H.nodeAfter,
            fe = H.index();
          return !re || !oe || !re.type.compatibleContent(oe.type)
            ? !1
            : !re.content.size && H.parent.canReplace(fe - 1, fe)
              ? (te &&
                  te($.tr.delete(H.pos - re.nodeSize, H.pos).scrollIntoView()),
                !0)
              : !H.parent.canReplace(fe, fe + 1) ||
                  !(oe.isTextblock || (0, v.n9)($.doc, H.pos))
                ? !1
                : (te &&
                    te(
                      $.tr
                        .clearIncompatible(
                          H.pos,
                          re.type,
                          re.contentMatchAt(re.childCount),
                        )
                        .join(H.pos)
                        .scrollIntoView(),
                    ),
                  !0);
        }
        function C($, H, te) {
          let re = H.nodeBefore,
            oe = H.nodeAfter,
            fe,
            be;
          if (re.type.spec.isolating || oe.type.spec.isolating) return !1;
          if (de($, H, te)) return !0;
          let we = H.parent.canReplace(H.index(), H.index() + 1);
          if (
            we &&
            (fe = (be = re.contentMatchAt(re.childCount)).findWrapping(
              oe.type,
            )) &&
            be.matchType(fe[0] || oe.type).validEnd
          ) {
            if (te) {
              let $e = H.pos + oe.nodeSize,
                Ze = se.FK.empty;
              for (let at = fe.length - 1; at >= 0; at--)
                Ze = se.FK.from(fe[at].create(null, Ze));
              Ze = se.FK.from(re.copy(Ze));
              let rt = $.tr.step(
                  new v.Wg(
                    H.pos - 1,
                    $e,
                    H.pos,
                    $e,
                    new se.Ji(Ze, 1, 0),
                    fe.length,
                    !0,
                  ),
                ),
                it = $e + 2 * fe.length;
              (0, v.n9)(rt.doc, it) && rt.join(it), te(rt.scrollIntoView());
            }
            return !0;
          }
          let He = Te.LN.findFrom(H, 1),
            je = He && He.$from.blockRange(He.$to),
            Ue = je && (0, v.jP)(je);
          if (Ue != null && Ue >= H.depth)
            return te && te($.tr.lift(je, Ue).scrollIntoView()), !0;
          if (we && We(oe, "start", !0) && We(re, "end")) {
            let $e = re,
              Ze = [];
            for (; Ze.push($e), !$e.isTextblock; ) $e = $e.lastChild;
            let rt = oe,
              it = 1;
            for (; !rt.isTextblock; rt = rt.firstChild) it++;
            if ($e.canReplace($e.childCount, $e.childCount, rt.content)) {
              if (te) {
                let at = se.FK.empty;
                for (let dt = Ze.length - 1; dt >= 0; dt--)
                  at = se.FK.from(Ze[dt].copy(at));
                let gt = $.tr.step(
                  new v.Wg(
                    H.pos - Ze.length,
                    H.pos + oe.nodeSize,
                    H.pos + it,
                    H.pos + oe.nodeSize - it,
                    new se.Ji(at, Ze.length, 0),
                    0,
                    !0,
                  ),
                );
                te(gt.scrollIntoView());
              }
              return !0;
            }
          }
          return !1;
        }
        function z($) {
          return function (H, te) {
            let re = H.selection,
              oe = $ < 0 ? re.$from : re.$to,
              fe = oe.depth;
            for (; oe.node(fe).isInline; ) {
              if (!fe) return !1;
              fe--;
            }
            return oe.node(fe).isTextblock
              ? (te &&
                  te(
                    H.tr.setSelection(
                      Te.U3.create(H.doc, $ < 0 ? oe.start(fe) : oe.end(fe)),
                    ),
                  ),
                !0)
              : !1;
          };
        }
        const T = z(-1),
          A = z(1);
        function B($, H = null) {
          return function (te, re) {
            let { $from: oe, $to: fe } = te.selection,
              be = oe.blockRange(fe),
              we = be && findWrapping(be, $, H);
            return we
              ? (re && re(te.tr.wrap(be, we).scrollIntoView()), !0)
              : !1;
          };
        }
        function j($, H = null) {
          return function (te, re) {
            let oe = !1;
            for (let fe = 0; fe < te.selection.ranges.length && !oe; fe++) {
              let {
                $from: { pos: be },
                $to: { pos: we },
              } = te.selection.ranges[fe];
              te.doc.nodesBetween(be, we, (He, je) => {
                if (oe) return !1;
                if (!(!He.isTextblock || He.hasMarkup($, H)))
                  if (He.type == $) oe = !0;
                  else {
                    let Ue = te.doc.resolve(je),
                      $e = Ue.index();
                    oe = Ue.parent.canReplaceWith($e, $e + 1, $);
                  }
              });
            }
            if (!oe) return !1;
            if (re) {
              let fe = te.tr;
              for (let be = 0; be < te.selection.ranges.length; be++) {
                let {
                  $from: { pos: we },
                  $to: { pos: He },
                } = te.selection.ranges[be];
                fe.setBlockType(we, He, $, H);
              }
              re(fe.scrollIntoView());
            }
            return !0;
          };
        }
        function Y($, H, te) {
          for (let re = 0; re < H.length; re++) {
            let { $from: oe, $to: fe } = H[re],
              be =
                oe.depth == 0
                  ? $.inlineContent && $.type.allowsMarkType(te)
                  : !1;
            if (
              ($.nodesBetween(oe.pos, fe.pos, (we) => {
                if (be) return !1;
                be = we.inlineContent && we.type.allowsMarkType(te);
              }),
              be)
            )
              return !0;
          }
          return !1;
        }
        function pe($, H = null) {
          return function (te, re) {
            let { empty: oe, $cursor: fe, ranges: be } = te.selection;
            if ((oe && !fe) || !Y(te.doc, be, $)) return !1;
            if (re)
              if (fe)
                $.isInSet(te.storedMarks || fe.marks())
                  ? re(te.tr.removeStoredMark($))
                  : re(te.tr.addStoredMark($.create(H)));
              else {
                let we = !1,
                  He = te.tr;
                for (let je = 0; !we && je < be.length; je++) {
                  let { $from: Ue, $to: $e } = be[je];
                  we = te.doc.rangeHasMark(Ue.pos, $e.pos, $);
                }
                for (let je = 0; je < be.length; je++) {
                  let { $from: Ue, $to: $e } = be[je];
                  if (we) He.removeMark(Ue.pos, $e.pos, $);
                  else {
                    let Ze = Ue.pos,
                      rt = $e.pos,
                      it = Ue.nodeAfter,
                      at = $e.nodeBefore,
                      gt = it && it.isText ? /^\s*/.exec(it.text)[0].length : 0,
                      dt = at && at.isText ? /\s*$/.exec(at.text)[0].length : 0;
                    Ze + gt < rt && ((Ze += gt), (rt -= dt)),
                      He.addMark(Ze, rt, $.create(H));
                  }
                }
                re(He.scrollIntoView());
              }
            return !0;
          };
        }
        function Oe($, H) {
          return (te) => {
            if (!te.isGeneric) return $(te);
            let re = [];
            for (let fe = 0; fe < te.mapping.maps.length; fe++) {
              let be = te.mapping.maps[fe];
              for (let we = 0; we < re.length; we++) re[we] = be.map(re[we]);
              be.forEach((we, He, je, Ue) => re.push(je, Ue));
            }
            let oe = [];
            for (let fe = 0; fe < re.length; fe += 2) {
              let be = re[fe],
                we = re[fe + 1],
                He = te.doc.resolve(be),
                je = He.sharedDepth(we),
                Ue = He.node(je);
              for (
                let $e = He.indexAfter(je), Ze = He.after(je + 1);
                Ze <= we;
                ++$e
              ) {
                let rt = Ue.maybeChild($e);
                if (!rt) break;
                if ($e && oe.indexOf(Ze) == -1) {
                  let it = Ue.child($e - 1);
                  it.type == rt.type && H(it, rt) && oe.push(Ze);
                }
                Ze += rt.nodeSize;
              }
            }
            oe.sort((fe, be) => fe - be);
            for (let fe = oe.length - 1; fe >= 0; fe--)
              canJoin(te.doc, oe[fe]) && te.join(oe[fe]);
            $(te);
          };
        }
        function De($, H) {
          let te = Array.isArray(H) ? (re) => H.indexOf(re.type.name) > -1 : H;
          return (re, oe, fe) => $(re, oe && Oe(oe, te), fe);
        }
        function Le(...$) {
          return function (H, te, re) {
            for (let oe = 0; oe < $.length; oe++)
              if ($[oe](H, te, re)) return !0;
            return !1;
          };
        }
        let Qe = Le(ve, Ye, Je),
          nt = Le(ve, et, ye);
        const qe = {
            Enter: Le(G, X, me, Be),
            "Mod-Enter": ae,
            Backspace: Qe,
            "Mod-Backspace": Qe,
            "Shift-Backspace": Qe,
            Delete: nt,
            "Mod-Delete": nt,
            "Mod-a": Ae,
          },
          st = {
            "Ctrl-h": qe.Backspace,
            "Alt-Backspace": qe["Mod-Backspace"],
            "Ctrl-d": qe.Delete,
            "Ctrl-Alt-Backspace": qe["Mod-Delete"],
            "Alt-Delete": qe["Mod-Delete"],
            "Alt-d": qe["Mod-Delete"],
            "Ctrl-a": T,
            "Ctrl-e": A,
          };
        for (let $ in qe) st[$] = qe[$];
        const mt = (
          typeof navigator < "u"
            ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
            : typeof os < "u" && os.platform
              ? os.platform() == "darwin"
              : !1
        )
          ? st
          : qe;
      },
      15024: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { z: () => Me });
        var v = Fe(7502),
          se = Fe(52893),
          Te = Fe(57053),
          ve = Fe(29287);
        class ge extends se.LN {
          constructor(K) {
            super(K, K);
          }
          map(K, Q) {
            let ce = K.resolve(Q.map(this.head));
            return ge.valid(ce) ? new ge(ce) : se.LN.near(ce);
          }
          content() {
            return Te.Ji.empty;
          }
          eq(K) {
            return K instanceof ge && K.head == this.head;
          }
          toJSON() {
            return { type: "gapcursor", pos: this.head };
          }
          static fromJSON(K, Q) {
            if (typeof Q.pos != "number")
              throw new RangeError("Invalid input for GapCursor.fromJSON");
            return new ge(K.resolve(Q.pos));
          }
          getBookmark() {
            return new Ye(this.anchor);
          }
          static valid(K) {
            let Q = K.parent;
            if (Q.isTextblock || !_e(K) || !ze(K)) return !1;
            let ce = Q.type.spec.allowGapCursor;
            if (ce != null) return ce;
            let _ = Q.contentMatchAt(K.index()).defaultType;
            return _ && _.isTextblock;
          }
          static findGapCursorFrom(K, Q, ce = !1) {
            e: for (;;) {
              if (!ce && ge.valid(K)) return K;
              let _ = K.pos,
                G = null;
              for (let U = K.depth; ; U--) {
                let ae = K.node(U);
                if (Q > 0 ? K.indexAfter(U) < ae.childCount : K.index(U) > 0) {
                  G = ae.child(Q > 0 ? K.indexAfter(U) : K.index(U) - 1);
                  break;
                } else if (U == 0) return null;
                _ += Q;
                let X = K.doc.resolve(_);
                if (ge.valid(X)) return X;
              }
              for (;;) {
                let U = Q > 0 ? G.firstChild : G.lastChild;
                if (!U) {
                  if (G.isAtom && !G.isText && !se.nh.isSelectable(G)) {
                    (K = K.doc.resolve(_ + G.nodeSize * Q)), (ce = !1);
                    continue e;
                  }
                  break;
                }
                (G = U), (_ += Q);
                let ae = K.doc.resolve(_);
                if (ge.valid(ae)) return ae;
              }
              return null;
            }
          }
        }
        (ge.prototype.visible = !1),
          (ge.findFrom = ge.findGapCursorFrom),
          se.LN.jsonID("gapcursor", ge);
        class Ye {
          constructor(K) {
            this.pos = K;
          }
          map(K) {
            return new Ye(K.map(this.pos));
          }
          resolve(K) {
            let Q = K.resolve(this.pos);
            return ge.valid(Q) ? new ge(Q) : se.LN.near(Q);
          }
        }
        function _e(ye) {
          for (let K = ye.depth; K >= 0; K--) {
            let Q = ye.index(K),
              ce = ye.node(K);
            if (Q == 0) {
              if (ce.type.spec.isolating) return !0;
              continue;
            }
            for (let _ = ce.child(Q - 1); ; _ = _.lastChild) {
              if (
                (_.childCount == 0 && !_.inlineContent) ||
                _.isAtom ||
                _.type.spec.isolating
              )
                return !0;
              if (_.inlineContent) return !1;
            }
          }
          return !0;
        }
        function ze(ye) {
          for (let K = ye.depth; K >= 0; K--) {
            let Q = ye.indexAfter(K),
              ce = ye.node(K);
            if (Q == ce.childCount) {
              if (ce.type.spec.isolating) return !0;
              continue;
            }
            for (let _ = ce.child(Q); ; _ = _.firstChild) {
              if (
                (_.childCount == 0 && !_.inlineContent) ||
                _.isAtom ||
                _.type.spec.isolating
              )
                return !0;
              if (_.inlineContent) return !1;
            }
          }
          return !0;
        }
        function Me() {
          return new se.k_({
            props: {
              decorations: et,
              createSelectionBetween(ye, K, Q) {
                return K.pos == Q.pos && ge.valid(Q) ? new ge(Q) : null;
              },
              handleClick: Ne,
              handleKeyDown: We,
              handleDOMEvents: { beforeinput: Ge },
            },
          });
        }
        const We = (0, v.K)({
          ArrowLeft: Je("horiz", -1),
          ArrowRight: Je("horiz", 1),
          ArrowUp: Je("vert", -1),
          ArrowDown: Je("vert", 1),
        });
        function Je(ye, K) {
          const Q =
            ye == "vert" ? (K > 0 ? "down" : "up") : K > 0 ? "right" : "left";
          return function (ce, _, G) {
            let U = ce.selection,
              ae = K > 0 ? U.$to : U.$from,
              X = U.empty;
            if (U instanceof se.U3) {
              if (!G.endOfTextblock(Q) || ae.depth == 0) return !1;
              (X = !1), (ae = ce.doc.resolve(K > 0 ? ae.after() : ae.before()));
            }
            let me = ge.findGapCursorFrom(ae, K, X);
            return me ? (_ && _(ce.tr.setSelection(new ge(me))), !0) : !1;
          };
        }
        function Ne(ye, K, Q) {
          if (!ye || !ye.editable) return !1;
          let ce = ye.state.doc.resolve(K);
          if (!ge.valid(ce)) return !1;
          let _ = ye.posAtCoords({ left: Q.clientX, top: Q.clientY });
          return _ &&
            _.inside > -1 &&
            se.nh.isSelectable(ye.state.doc.nodeAt(_.inside))
            ? !1
            : (ye.dispatch(ye.state.tr.setSelection(new ge(ce))), !0);
        }
        function Ge(ye, K) {
          if (
            K.inputType != "insertCompositionText" ||
            !(ye.state.selection instanceof ge)
          )
            return !1;
          let { $from: Q } = ye.state.selection,
            ce = Q.parent
              .contentMatchAt(Q.index())
              .findWrapping(ye.state.schema.nodes.text);
          if (!ce) return !1;
          let _ = Te.FK.empty;
          for (let U = ce.length - 1; U >= 0; U--)
            _ = Te.FK.from(ce[U].createAndFill(null, _));
          let G = ye.state.tr.replace(Q.pos, Q.pos, new Te.Ji(_, 0, 0));
          return (
            G.setSelection(se.U3.near(G.doc.resolve(Q.pos + 1))),
            ye.dispatch(G),
            !1
          );
        }
        function et(ye) {
          if (!(ye.selection instanceof ge)) return null;
          let K = document.createElement("div");
          return (
            (K.className = "ProseMirror-gapcursor"),
            ve.zF.create(ye.doc, [
              ve.NZ.widget(ye.selection.head, K, { key: "gapcursor" }),
            ])
          );
        }
      },
      7502: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { K: () => et, w: () => Ge });
        for (
          var v = {
              8: "Backspace",
              9: "Tab",
              10: "Enter",
              12: "NumLock",
              13: "Enter",
              16: "Shift",
              17: "Control",
              18: "Alt",
              20: "CapsLock",
              27: "Escape",
              32: " ",
              33: "PageUp",
              34: "PageDown",
              35: "End",
              36: "Home",
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown",
              44: "PrintScreen",
              45: "Insert",
              46: "Delete",
              59: ";",
              61: "=",
              91: "Meta",
              92: "Meta",
              106: "*",
              107: "+",
              108: ",",
              109: "-",
              110: ".",
              111: "/",
              144: "NumLock",
              145: "ScrollLock",
              160: "Shift",
              161: "Shift",
              162: "Control",
              163: "Control",
              164: "Alt",
              165: "Alt",
              173: "-",
              186: ";",
              187: "=",
              188: ",",
              189: "-",
              190: ".",
              191: "/",
              192: "`",
              219: "[",
              220: "\\",
              221: "]",
              222: "'",
            },
            se = {
              48: ")",
              49: "!",
              50: "@",
              51: "#",
              52: "$",
              53: "%",
              54: "^",
              55: "&",
              56: "*",
              57: "(",
              59: ":",
              61: "+",
              173: "_",
              186: ":",
              187: "+",
              188: "<",
              189: "_",
              190: ">",
              191: "?",
              192: "~",
              219: "{",
              220: "|",
              221: "}",
              222: '"',
            },
            Te = typeof navigator < "u" && /Mac/.test(navigator.platform),
            ve =
              typeof navigator < "u" &&
              /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
                navigator.userAgent,
              ),
            ge = 0;
          ge < 10;
          ge++
        )
          v[48 + ge] = v[96 + ge] = String(ge);
        for (var ge = 1; ge <= 24; ge++) v[ge + 111] = "F" + ge;
        for (var ge = 65; ge <= 90; ge++)
          (v[ge] = String.fromCharCode(ge + 32)),
            (se[ge] = String.fromCharCode(ge));
        for (var Ye in v) se.hasOwnProperty(Ye) || (se[Ye] = v[Ye]);
        function _e(ye) {
          var K =
              (Te && ye.metaKey && ye.shiftKey && !ye.ctrlKey && !ye.altKey) ||
              (ve && ye.shiftKey && ye.key && ye.key.length == 1) ||
              ye.key == "Unidentified",
            Q =
              (!K && ye.key) ||
              (ye.shiftKey ? se : v)[ye.keyCode] ||
              ye.key ||
              "Unidentified";
          return (
            Q == "Esc" && (Q = "Escape"),
            Q == "Del" && (Q = "Delete"),
            Q == "Left" && (Q = "ArrowLeft"),
            Q == "Up" && (Q = "ArrowUp"),
            Q == "Right" && (Q = "ArrowRight"),
            Q == "Down" && (Q = "ArrowDown"),
            Q
          );
        }
        var ze = Fe(52893);
        const Me =
          typeof navigator < "u"
            ? /Mac|iP(hone|[oa]d)/.test(navigator.platform)
            : !1;
        function We(ye) {
          let K = ye.split(/-(?!$)/),
            Q = K[K.length - 1];
          Q == "Space" && (Q = " ");
          let ce, _, G, U;
          for (let ae = 0; ae < K.length - 1; ae++) {
            let X = K[ae];
            if (/^(cmd|meta|m)$/i.test(X)) U = !0;
            else if (/^a(lt)?$/i.test(X)) ce = !0;
            else if (/^(c|ctrl|control)$/i.test(X)) _ = !0;
            else if (/^s(hift)?$/i.test(X)) G = !0;
            else if (/^mod$/i.test(X)) Me ? (U = !0) : (_ = !0);
            else throw new Error("Unrecognized modifier name: " + X);
          }
          return (
            ce && (Q = "Alt-" + Q),
            _ && (Q = "Ctrl-" + Q),
            U && (Q = "Meta-" + Q),
            G && (Q = "Shift-" + Q),
            Q
          );
        }
        function Je(ye) {
          let K = Object.create(null);
          for (let Q in ye) K[We(Q)] = ye[Q];
          return K;
        }
        function Ne(ye, K, Q = !0) {
          return (
            K.altKey && (ye = "Alt-" + ye),
            K.ctrlKey && (ye = "Ctrl-" + ye),
            K.metaKey && (ye = "Meta-" + ye),
            Q && K.shiftKey && (ye = "Shift-" + ye),
            ye
          );
        }
        function Ge(ye) {
          return new ze.k_({ props: { handleKeyDown: et(ye) } });
        }
        function et(ye) {
          let K = Je(ye);
          return function (Q, ce) {
            let _ = _e(ce),
              G,
              U = K[Ne(_, ce)];
            if (U && U(Q.state, Q.dispatch, Q)) return !0;
            if (_.length == 1 && _ != " ") {
              if (ce.shiftKey) {
                let ae = K[Ne(_, ce, !1)];
                if (ae && ae(Q.state, Q.dispatch, Q)) return !0;
              }
              if (
                (ce.shiftKey ||
                  ce.altKey ||
                  ce.metaKey ||
                  _.charCodeAt(0) > 127) &&
                (G = v[ce.keyCode]) &&
                G != _
              ) {
                let ae = K[Ne(G, ce)];
                if (ae && ae(Q.state, Q.dispatch, Q)) return !0;
              }
            }
            return !1;
          };
        }
      },
      57053: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          S4: () => je,
          ZF: () => L,
          FK: () => ge,
          CU: () => Me,
          sX: () => oe,
          bP: () => de,
          u$: () => Ve,
          vI: () => We,
          Sj: () => fe,
          Ji: () => Je,
        });
        function v(S) {
          this.content = S;
        }
        (v.prototype = {
          constructor: v,
          find: function (S) {
            for (var r = 0; r < this.content.length; r += 2)
              if (this.content[r] === S) return r;
            return -1;
          },
          get: function (S) {
            var r = this.find(S);
            return r == -1 ? void 0 : this.content[r + 1];
          },
          update: function (S, r, s) {
            var a = s && s != S ? this.remove(s) : this,
              p = a.find(S),
              b = a.content.slice();
            return (
              p == -1 ? b.push(s || S, r) : ((b[p + 1] = r), s && (b[p] = s)),
              new v(b)
            );
          },
          remove: function (S) {
            var r = this.find(S);
            if (r == -1) return this;
            var s = this.content.slice();
            return s.splice(r, 2), new v(s);
          },
          addToStart: function (S, r) {
            return new v([S, r].concat(this.remove(S).content));
          },
          addToEnd: function (S, r) {
            var s = this.remove(S).content.slice();
            return s.push(S, r), new v(s);
          },
          addBefore: function (S, r, s) {
            var a = this.remove(r),
              p = a.content.slice(),
              b = a.find(S);
            return p.splice(b == -1 ? p.length : b, 0, r, s), new v(p);
          },
          forEach: function (S) {
            for (var r = 0; r < this.content.length; r += 2)
              S(this.content[r], this.content[r + 1]);
          },
          prepend: function (S) {
            return (
              (S = v.from(S)),
              S.size ? new v(S.content.concat(this.subtract(S).content)) : this
            );
          },
          append: function (S) {
            return (
              (S = v.from(S)),
              S.size ? new v(this.subtract(S).content.concat(S.content)) : this
            );
          },
          subtract: function (S) {
            var r = this;
            S = v.from(S);
            for (var s = 0; s < S.content.length; s += 2)
              r = r.remove(S.content[s]);
            return r;
          },
          toObject: function () {
            var S = {};
            return (
              this.forEach(function (r, s) {
                S[r] = s;
              }),
              S
            );
          },
          get size() {
            return this.content.length >> 1;
          },
        }),
          (v.from = function (S) {
            if (S instanceof v) return S;
            var r = [];
            if (S) for (var s in S) r.push(s, S[s]);
            return new v(r);
          });
        const se = v;
        function Te(S, r, s) {
          for (let a = 0; ; a++) {
            if (a == S.childCount || a == r.childCount)
              return S.childCount == r.childCount ? null : s;
            let p = S.child(a),
              b = r.child(a);
            if (p == b) {
              s += p.nodeSize;
              continue;
            }
            if (!p.sameMarkup(b)) return s;
            if (p.isText && p.text != b.text) {
              for (let w = 0; p.text[w] == b.text[w]; w++) s++;
              return s;
            }
            if (p.content.size || b.content.size) {
              let w = Te(p.content, b.content, s + 1);
              if (w != null) return w;
            }
            s += p.nodeSize;
          }
        }
        function ve(S, r, s, a) {
          for (let p = S.childCount, b = r.childCount; ; ) {
            if (p == 0 || b == 0) return p == b ? null : { a: s, b: a };
            let w = S.child(--p),
              P = r.child(--b),
              q = w.nodeSize;
            if (w == P) {
              (s -= q), (a -= q);
              continue;
            }
            if (!w.sameMarkup(P)) return { a: s, b: a };
            if (w.isText && w.text != P.text) {
              let Ce = 0,
                Pe = Math.min(w.text.length, P.text.length);
              for (
                ;
                Ce < Pe &&
                w.text[w.text.length - Ce - 1] ==
                  P.text[P.text.length - Ce - 1];
              )
                Ce++, s--, a--;
              return { a: s, b: a };
            }
            if (w.content.size || P.content.size) {
              let Ce = ve(w.content, P.content, s - 1, a - 1);
              if (Ce) return Ce;
            }
            (s -= q), (a -= q);
          }
        }
        class ge {
          constructor(r, s) {
            if (((this.content = r), (this.size = s || 0), s == null))
              for (let a = 0; a < r.length; a++) this.size += r[a].nodeSize;
          }
          nodesBetween(r, s, a, p = 0, b) {
            for (let w = 0, P = 0; P < s; w++) {
              let q = this.content[w],
                Ce = P + q.nodeSize;
              if (
                Ce > r &&
                a(q, p + P, b || null, w) !== !1 &&
                q.content.size
              ) {
                let Pe = P + 1;
                q.nodesBetween(
                  Math.max(0, r - Pe),
                  Math.min(q.content.size, s - Pe),
                  a,
                  p + Pe,
                );
              }
              P = Ce;
            }
          }
          descendants(r) {
            this.nodesBetween(0, this.size, r);
          }
          textBetween(r, s, a, p) {
            let b = "",
              w = !0;
            return (
              this.nodesBetween(
                r,
                s,
                (P, q) => {
                  let Ce = P.isText
                    ? P.text.slice(Math.max(r, q) - q, s - q)
                    : P.isLeaf
                      ? p
                        ? typeof p == "function"
                          ? p(P)
                          : p
                        : P.type.spec.leafText
                          ? P.type.spec.leafText(P)
                          : ""
                      : "";
                  P.isBlock &&
                    ((P.isLeaf && Ce) || P.isTextblock) &&
                    a &&
                    (w ? (w = !1) : (b += a)),
                    (b += Ce);
                },
                0,
              ),
              b
            );
          }
          append(r) {
            if (!r.size) return this;
            if (!this.size) return r;
            let s = this.lastChild,
              a = r.firstChild,
              p = this.content.slice(),
              b = 0;
            for (
              s.isText &&
              s.sameMarkup(a) &&
              ((p[p.length - 1] = s.withText(s.text + a.text)), (b = 1));
              b < r.content.length;
              b++
            )
              p.push(r.content[b]);
            return new ge(p, this.size + r.size);
          }
          cut(r, s = this.size) {
            if (r == 0 && s == this.size) return this;
            let a = [],
              p = 0;
            if (s > r)
              for (let b = 0, w = 0; w < s; b++) {
                let P = this.content[b],
                  q = w + P.nodeSize;
                q > r &&
                  ((w < r || q > s) &&
                    (P.isText
                      ? (P = P.cut(
                          Math.max(0, r - w),
                          Math.min(P.text.length, s - w),
                        ))
                      : (P = P.cut(
                          Math.max(0, r - w - 1),
                          Math.min(P.content.size, s - w - 1),
                        ))),
                  a.push(P),
                  (p += P.nodeSize)),
                  (w = q);
              }
            return new ge(a, p);
          }
          cutByIndex(r, s) {
            return r == s
              ? ge.empty
              : r == 0 && s == this.content.length
                ? this
                : new ge(this.content.slice(r, s));
          }
          replaceChild(r, s) {
            let a = this.content[r];
            if (a == s) return this;
            let p = this.content.slice(),
              b = this.size + s.nodeSize - a.nodeSize;
            return (p[r] = s), new ge(p, b);
          }
          addToStart(r) {
            return new ge([r].concat(this.content), this.size + r.nodeSize);
          }
          addToEnd(r) {
            return new ge(this.content.concat(r), this.size + r.nodeSize);
          }
          eq(r) {
            if (this.content.length != r.content.length) return !1;
            for (let s = 0; s < this.content.length; s++)
              if (!this.content[s].eq(r.content[s])) return !1;
            return !0;
          }
          get firstChild() {
            return this.content.length ? this.content[0] : null;
          }
          get lastChild() {
            return this.content.length
              ? this.content[this.content.length - 1]
              : null;
          }
          get childCount() {
            return this.content.length;
          }
          child(r) {
            let s = this.content[r];
            if (!s)
              throw new RangeError("Index " + r + " out of range for " + this);
            return s;
          }
          maybeChild(r) {
            return this.content[r] || null;
          }
          forEach(r) {
            for (let s = 0, a = 0; s < this.content.length; s++) {
              let p = this.content[s];
              r(p, a, s), (a += p.nodeSize);
            }
          }
          findDiffStart(r, s = 0) {
            return Te(this, r, s);
          }
          findDiffEnd(r, s = this.size, a = r.size) {
            return ve(this, r, s, a);
          }
          findIndex(r, s = -1) {
            if (r == 0) return _e(0, r);
            if (r == this.size) return _e(this.content.length, r);
            if (r > this.size || r < 0)
              throw new RangeError(
                `Position ${r} outside of fragment (${this})`,
              );
            for (let a = 0, p = 0; ; a++) {
              let b = this.child(a),
                w = p + b.nodeSize;
              if (w >= r) return w == r || s > 0 ? _e(a + 1, w) : _e(a, p);
              p = w;
            }
          }
          toString() {
            return "<" + this.toStringInner() + ">";
          }
          toStringInner() {
            return this.content.join(", ");
          }
          toJSON() {
            return this.content.length
              ? this.content.map((r) => r.toJSON())
              : null;
          }
          static fromJSON(r, s) {
            if (!s) return ge.empty;
            if (!Array.isArray(s))
              throw new RangeError("Invalid input for Fragment.fromJSON");
            return new ge(s.map(r.nodeFromJSON));
          }
          static fromArray(r) {
            if (!r.length) return ge.empty;
            let s,
              a = 0;
            for (let p = 0; p < r.length; p++) {
              let b = r[p];
              (a += b.nodeSize),
                p && b.isText && r[p - 1].sameMarkup(b)
                  ? (s || (s = r.slice(0, p)),
                    (s[s.length - 1] = b.withText(
                      s[s.length - 1].text + b.text,
                    )))
                  : s && s.push(b);
            }
            return new ge(s || r, a);
          }
          static from(r) {
            if (!r) return ge.empty;
            if (r instanceof ge) return r;
            if (Array.isArray(r)) return this.fromArray(r);
            if (r.attrs) return new ge([r], r.nodeSize);
            throw new RangeError(
              "Can not convert " +
                r +
                " to a Fragment" +
                (r.nodesBetween
                  ? " (looks like multiple versions of prosemirror-model were loaded)"
                  : ""),
            );
          }
        }
        ge.empty = new ge([], 0);
        const Ye = { index: 0, offset: 0 };
        function _e(S, r) {
          return (Ye.index = S), (Ye.offset = r), Ye;
        }
        function ze(S, r) {
          if (S === r) return !0;
          if (!(S && typeof S == "object") || !(r && typeof r == "object"))
            return !1;
          let s = Array.isArray(S);
          if (Array.isArray(r) != s) return !1;
          if (s) {
            if (S.length != r.length) return !1;
            for (let a = 0; a < S.length; a++) if (!ze(S[a], r[a])) return !1;
          } else {
            for (let a in S) if (!(a in r) || !ze(S[a], r[a])) return !1;
            for (let a in r) if (!(a in S)) return !1;
          }
          return !0;
        }
        class Me {
          constructor(r, s) {
            (this.type = r), (this.attrs = s);
          }
          addToSet(r) {
            let s,
              a = !1;
            for (let p = 0; p < r.length; p++) {
              let b = r[p];
              if (this.eq(b)) return r;
              if (this.type.excludes(b.type)) s || (s = r.slice(0, p));
              else {
                if (b.type.excludes(this.type)) return r;
                !a &&
                  b.type.rank > this.type.rank &&
                  (s || (s = r.slice(0, p)), s.push(this), (a = !0)),
                  s && s.push(b);
              }
            }
            return s || (s = r.slice()), a || s.push(this), s;
          }
          removeFromSet(r) {
            for (let s = 0; s < r.length; s++)
              if (this.eq(r[s])) return r.slice(0, s).concat(r.slice(s + 1));
            return r;
          }
          isInSet(r) {
            for (let s = 0; s < r.length; s++) if (this.eq(r[s])) return !0;
            return !1;
          }
          eq(r) {
            return (
              this == r || (this.type == r.type && ze(this.attrs, r.attrs))
            );
          }
          toJSON() {
            let r = { type: this.type.name };
            for (let s in this.attrs) {
              r.attrs = this.attrs;
              break;
            }
            return r;
          }
          static fromJSON(r, s) {
            if (!s) throw new RangeError("Invalid input for Mark.fromJSON");
            let a = r.marks[s.type];
            if (!a)
              throw new RangeError(
                `There is no mark type ${s.type} in this schema`,
              );
            return a.create(s.attrs);
          }
          static sameSet(r, s) {
            if (r == s) return !0;
            if (r.length != s.length) return !1;
            for (let a = 0; a < r.length; a++) if (!r[a].eq(s[a])) return !1;
            return !0;
          }
          static setFrom(r) {
            if (!r || (Array.isArray(r) && r.length == 0)) return Me.none;
            if (r instanceof Me) return [r];
            let s = r.slice();
            return s.sort((a, p) => a.type.rank - p.type.rank), s;
          }
        }
        Me.none = [];
        class We extends Error {}
        class Je {
          constructor(r, s, a) {
            (this.content = r), (this.openStart = s), (this.openEnd = a);
          }
          get size() {
            return this.content.size - this.openStart - this.openEnd;
          }
          insertAt(r, s) {
            let a = Ge(this.content, r + this.openStart, s);
            return a && new Je(a, this.openStart, this.openEnd);
          }
          removeBetween(r, s) {
            return new Je(
              Ne(this.content, r + this.openStart, s + this.openStart),
              this.openStart,
              this.openEnd,
            );
          }
          eq(r) {
            return (
              this.content.eq(r.content) &&
              this.openStart == r.openStart &&
              this.openEnd == r.openEnd
            );
          }
          toString() {
            return (
              this.content + "(" + this.openStart + "," + this.openEnd + ")"
            );
          }
          toJSON() {
            if (!this.content.size) return null;
            let r = { content: this.content.toJSON() };
            return (
              this.openStart > 0 && (r.openStart = this.openStart),
              this.openEnd > 0 && (r.openEnd = this.openEnd),
              r
            );
          }
          static fromJSON(r, s) {
            if (!s) return Je.empty;
            let a = s.openStart || 0,
              p = s.openEnd || 0;
            if (typeof a != "number" || typeof p != "number")
              throw new RangeError("Invalid input for Slice.fromJSON");
            return new Je(ge.fromJSON(r, s.content), a, p);
          }
          static maxOpen(r, s = !0) {
            let a = 0,
              p = 0;
            for (
              let b = r.firstChild;
              b && !b.isLeaf && (s || !b.type.spec.isolating);
              b = b.firstChild
            )
              a++;
            for (
              let b = r.lastChild;
              b && !b.isLeaf && (s || !b.type.spec.isolating);
              b = b.lastChild
            )
              p++;
            return new Je(r, a, p);
          }
        }
        Je.empty = new Je(ge.empty, 0, 0);
        function Ne(S, r, s) {
          let { index: a, offset: p } = S.findIndex(r),
            b = S.maybeChild(a),
            { index: w, offset: P } = S.findIndex(s);
          if (p == r || b.isText) {
            if (P != s && !S.child(w).isText)
              throw new RangeError("Removing non-flat range");
            return S.cut(0, r).append(S.cut(s));
          }
          if (a != w) throw new RangeError("Removing non-flat range");
          return S.replaceChild(a, b.copy(Ne(b.content, r - p - 1, s - p - 1)));
        }
        function Ge(S, r, s, a) {
          let { index: p, offset: b } = S.findIndex(r),
            w = S.maybeChild(p);
          if (b == r || w.isText)
            return a && !a.canReplace(p, p, s)
              ? null
              : S.cut(0, r).append(s).append(S.cut(r));
          let P = Ge(w.content, r - b - 1, s);
          return P && S.replaceChild(p, w.copy(P));
        }
        function et(S, r, s) {
          if (s.openStart > S.depth)
            throw new We("Inserted content deeper than insertion position");
          if (S.depth - s.openStart != r.depth - s.openEnd)
            throw new We("Inconsistent open depths");
          return ye(S, r, s, 0);
        }
        function ye(S, r, s, a) {
          let p = S.index(a),
            b = S.node(a);
          if (p == r.index(a) && a < S.depth - s.openStart) {
            let w = ye(S, r, s, a + 1);
            return b.copy(b.content.replaceChild(p, w));
          } else if (s.content.size)
            if (!s.openStart && !s.openEnd && S.depth == a && r.depth == a) {
              let w = S.parent,
                P = w.content;
              return G(
                w,
                P.cut(0, S.parentOffset)
                  .append(s.content)
                  .append(P.cut(r.parentOffset)),
              );
            } else {
              let { start: w, end: P } = X(s, S);
              return G(b, U(S, w, P, r, a));
            }
          else return G(b, ae(S, r, a));
        }
        function K(S, r) {
          if (!r.type.compatibleContent(S.type))
            throw new We("Cannot join " + r.type.name + " onto " + S.type.name);
        }
        function Q(S, r, s) {
          let a = S.node(s);
          return K(a, r.node(s)), a;
        }
        function ce(S, r) {
          let s = r.length - 1;
          s >= 0 && S.isText && S.sameMarkup(r[s])
            ? (r[s] = S.withText(r[s].text + S.text))
            : r.push(S);
        }
        function _(S, r, s, a) {
          let p = (r || S).node(s),
            b = 0,
            w = r ? r.index(s) : p.childCount;
          S &&
            ((b = S.index(s)),
            S.depth > s ? b++ : S.textOffset && (ce(S.nodeAfter, a), b++));
          for (let P = b; P < w; P++) ce(p.child(P), a);
          r && r.depth == s && r.textOffset && ce(r.nodeBefore, a);
        }
        function G(S, r) {
          return S.type.checkContent(r), S.copy(r);
        }
        function U(S, r, s, a, p) {
          let b = S.depth > p && Q(S, r, p + 1),
            w = a.depth > p && Q(s, a, p + 1),
            P = [];
          return (
            _(null, S, p, P),
            b && w && r.index(p) == s.index(p)
              ? (K(b, w), ce(G(b, U(S, r, s, a, p + 1)), P))
              : (b && ce(G(b, ae(S, r, p + 1)), P),
                _(r, s, p, P),
                w && ce(G(w, ae(s, a, p + 1)), P)),
            _(a, null, p, P),
            new ge(P)
          );
        }
        function ae(S, r, s) {
          let a = [];
          if ((_(null, S, s, a), S.depth > s)) {
            let p = Q(S, r, s + 1);
            ce(G(p, ae(S, r, s + 1)), a);
          }
          return _(r, null, s, a), new ge(a);
        }
        function X(S, r) {
          let s = r.depth - S.openStart,
            p = r.node(s).copy(S.content);
          for (let b = s - 1; b >= 0; b--) p = r.node(b).copy(ge.from(p));
          return {
            start: p.resolveNoCache(S.openStart + s),
            end: p.resolveNoCache(p.content.size - S.openEnd - s),
          };
        }
        class me {
          constructor(r, s, a) {
            (this.pos = r),
              (this.path = s),
              (this.parentOffset = a),
              (this.depth = s.length / 3 - 1);
          }
          resolveDepth(r) {
            return r == null ? this.depth : r < 0 ? this.depth + r : r;
          }
          get parent() {
            return this.node(this.depth);
          }
          get doc() {
            return this.node(0);
          }
          node(r) {
            return this.path[this.resolveDepth(r) * 3];
          }
          index(r) {
            return this.path[this.resolveDepth(r) * 3 + 1];
          }
          indexAfter(r) {
            return (
              (r = this.resolveDepth(r)),
              this.index(r) + (r == this.depth && !this.textOffset ? 0 : 1)
            );
          }
          start(r) {
            return (
              (r = this.resolveDepth(r)), r == 0 ? 0 : this.path[r * 3 - 1] + 1
            );
          }
          end(r) {
            return (
              (r = this.resolveDepth(r)),
              this.start(r) + this.node(r).content.size
            );
          }
          before(r) {
            if (((r = this.resolveDepth(r)), !r))
              throw new RangeError(
                "There is no position before the top-level node",
              );
            return r == this.depth + 1 ? this.pos : this.path[r * 3 - 1];
          }
          after(r) {
            if (((r = this.resolveDepth(r)), !r))
              throw new RangeError(
                "There is no position after the top-level node",
              );
            return r == this.depth + 1
              ? this.pos
              : this.path[r * 3 - 1] + this.path[r * 3].nodeSize;
          }
          get textOffset() {
            return this.pos - this.path[this.path.length - 1];
          }
          get nodeAfter() {
            let r = this.parent,
              s = this.index(this.depth);
            if (s == r.childCount) return null;
            let a = this.pos - this.path[this.path.length - 1],
              p = r.child(s);
            return a ? r.child(s).cut(a) : p;
          }
          get nodeBefore() {
            let r = this.index(this.depth),
              s = this.pos - this.path[this.path.length - 1];
            return s
              ? this.parent.child(r).cut(0, s)
              : r == 0
                ? null
                : this.parent.child(r - 1);
          }
          posAtIndex(r, s) {
            s = this.resolveDepth(s);
            let a = this.path[s * 3],
              p = s == 0 ? 0 : this.path[s * 3 - 1] + 1;
            for (let b = 0; b < r; b++) p += a.child(b).nodeSize;
            return p;
          }
          marks() {
            let r = this.parent,
              s = this.index();
            if (r.content.size == 0) return Me.none;
            if (this.textOffset) return r.child(s).marks;
            let a = r.maybeChild(s - 1),
              p = r.maybeChild(s);
            if (!a) {
              let P = a;
              (a = p), (p = P);
            }
            let b = a.marks;
            for (var w = 0; w < b.length; w++)
              b[w].type.spec.inclusive === !1 &&
                (!p || !b[w].isInSet(p.marks)) &&
                (b = b[w--].removeFromSet(b));
            return b;
          }
          marksAcross(r) {
            let s = this.parent.maybeChild(this.index());
            if (!s || !s.isInline) return null;
            let a = s.marks,
              p = r.parent.maybeChild(r.index());
            for (var b = 0; b < a.length; b++)
              a[b].type.spec.inclusive === !1 &&
                (!p || !a[b].isInSet(p.marks)) &&
                (a = a[b--].removeFromSet(a));
            return a;
          }
          sharedDepth(r) {
            for (let s = this.depth; s > 0; s--)
              if (this.start(s) <= r && this.end(s) >= r) return s;
            return 0;
          }
          blockRange(r = this, s) {
            if (r.pos < this.pos) return r.blockRange(this);
            for (
              let a =
                this.depth -
                (this.parent.inlineContent || this.pos == r.pos ? 1 : 0);
              a >= 0;
              a--
            )
              if (r.pos <= this.end(a) && (!s || s(this.node(a))))
                return new Ve(this, r, a);
            return null;
          }
          sameParent(r) {
            return this.pos - this.parentOffset == r.pos - r.parentOffset;
          }
          max(r) {
            return r.pos > this.pos ? r : this;
          }
          min(r) {
            return r.pos < this.pos ? r : this;
          }
          toString() {
            let r = "";
            for (let s = 1; s <= this.depth; s++)
              r +=
                (r ? "/" : "") +
                this.node(s).type.name +
                "_" +
                this.index(s - 1);
            return r + ":" + this.parentOffset;
          }
          static resolve(r, s) {
            if (!(s >= 0 && s <= r.content.size))
              throw new RangeError("Position " + s + " out of range");
            let a = [],
              p = 0,
              b = s;
            for (let w = r; ; ) {
              let { index: P, offset: q } = w.content.findIndex(b),
                Ce = b - q;
              if ((a.push(w, P, p + q), !Ce || ((w = w.child(P)), w.isText)))
                break;
              (b = Ce - 1), (p += q + 1);
            }
            return new me(s, a, b);
          }
          static resolveCached(r, s) {
            for (let p = 0; p < ke.length; p++) {
              let b = ke[p];
              if (b.pos == s && b.doc == r) return b;
            }
            let a = (ke[Be] = me.resolve(r, s));
            return (Be = (Be + 1) % Re), a;
          }
        }
        let ke = [],
          Be = 0,
          Re = 12;
        class Ve {
          constructor(r, s, a) {
            (this.$from = r), (this.$to = s), (this.depth = a);
          }
          get start() {
            return this.$from.before(this.depth + 1);
          }
          get end() {
            return this.$to.after(this.depth + 1);
          }
          get parent() {
            return this.$from.node(this.depth);
          }
          get startIndex() {
            return this.$from.index(this.depth);
          }
          get endIndex() {
            return this.$to.indexAfter(this.depth);
          }
        }
        const Ae = Object.create(null);
        class de {
          constructor(r, s, a, p = Me.none) {
            (this.type = r),
              (this.attrs = s),
              (this.marks = p),
              (this.content = a || ge.empty);
          }
          get nodeSize() {
            return this.isLeaf ? 1 : 2 + this.content.size;
          }
          get childCount() {
            return this.content.childCount;
          }
          child(r) {
            return this.content.child(r);
          }
          maybeChild(r) {
            return this.content.maybeChild(r);
          }
          forEach(r) {
            this.content.forEach(r);
          }
          nodesBetween(r, s, a, p = 0) {
            this.content.nodesBetween(r, s, a, p, this);
          }
          descendants(r) {
            this.nodesBetween(0, this.content.size, r);
          }
          get textContent() {
            return this.isLeaf && this.type.spec.leafText
              ? this.type.spec.leafText(this)
              : this.textBetween(0, this.content.size, "");
          }
          textBetween(r, s, a, p) {
            return this.content.textBetween(r, s, a, p);
          }
          get firstChild() {
            return this.content.firstChild;
          }
          get lastChild() {
            return this.content.lastChild;
          }
          eq(r) {
            return (
              this == r || (this.sameMarkup(r) && this.content.eq(r.content))
            );
          }
          sameMarkup(r) {
            return this.hasMarkup(r.type, r.attrs, r.marks);
          }
          hasMarkup(r, s, a) {
            return (
              this.type == r &&
              ze(this.attrs, s || r.defaultAttrs || Ae) &&
              Me.sameSet(this.marks, a || Me.none)
            );
          }
          copy(r = null) {
            return r == this.content
              ? this
              : new de(this.type, this.attrs, r, this.marks);
          }
          mark(r) {
            return r == this.marks
              ? this
              : new de(this.type, this.attrs, this.content, r);
          }
          cut(r, s = this.content.size) {
            return r == 0 && s == this.content.size
              ? this
              : this.copy(this.content.cut(r, s));
          }
          slice(r, s = this.content.size, a = !1) {
            if (r == s) return Je.empty;
            let p = this.resolve(r),
              b = this.resolve(s),
              w = a ? 0 : p.sharedDepth(s),
              P = p.start(w),
              Ce = p.node(w).content.cut(p.pos - P, b.pos - P);
            return new Je(Ce, p.depth - w, b.depth - w);
          }
          replace(r, s, a) {
            return et(this.resolve(r), this.resolve(s), a);
          }
          nodeAt(r) {
            for (let s = this; ; ) {
              let { index: a, offset: p } = s.content.findIndex(r);
              if (((s = s.maybeChild(a)), !s)) return null;
              if (p == r || s.isText) return s;
              r -= p + 1;
            }
          }
          childAfter(r) {
            let { index: s, offset: a } = this.content.findIndex(r);
            return { node: this.content.maybeChild(s), index: s, offset: a };
          }
          childBefore(r) {
            if (r == 0) return { node: null, index: 0, offset: 0 };
            let { index: s, offset: a } = this.content.findIndex(r);
            if (a < r)
              return { node: this.content.child(s), index: s, offset: a };
            let p = this.content.child(s - 1);
            return { node: p, index: s - 1, offset: a - p.nodeSize };
          }
          resolve(r) {
            return me.resolveCached(this, r);
          }
          resolveNoCache(r) {
            return me.resolve(this, r);
          }
          rangeHasMark(r, s, a) {
            let p = !1;
            return (
              s > r &&
                this.nodesBetween(
                  r,
                  s,
                  (b) => (a.isInSet(b.marks) && (p = !0), !p),
                ),
              p
            );
          }
          get isBlock() {
            return this.type.isBlock;
          }
          get isTextblock() {
            return this.type.isTextblock;
          }
          get inlineContent() {
            return this.type.inlineContent;
          }
          get isInline() {
            return this.type.isInline;
          }
          get isText() {
            return this.type.isText;
          }
          get isLeaf() {
            return this.type.isLeaf;
          }
          get isAtom() {
            return this.type.isAtom;
          }
          toString() {
            if (this.type.spec.toDebugString)
              return this.type.spec.toDebugString(this);
            let r = this.type.name;
            return (
              this.content.size &&
                (r += "(" + this.content.toStringInner() + ")"),
              z(this.marks, r)
            );
          }
          contentMatchAt(r) {
            let s = this.type.contentMatch.matchFragment(this.content, 0, r);
            if (!s)
              throw new Error(
                "Called contentMatchAt on a node with invalid content",
              );
            return s;
          }
          canReplace(r, s, a = ge.empty, p = 0, b = a.childCount) {
            let w = this.contentMatchAt(r).matchFragment(a, p, b),
              P = w && w.matchFragment(this.content, s);
            if (!P || !P.validEnd) return !1;
            for (let q = p; q < b; q++)
              if (!this.type.allowsMarks(a.child(q).marks)) return !1;
            return !0;
          }
          canReplaceWith(r, s, a, p) {
            if (p && !this.type.allowsMarks(p)) return !1;
            let b = this.contentMatchAt(r).matchType(a),
              w = b && b.matchFragment(this.content, s);
            return w ? w.validEnd : !1;
          }
          canAppend(r) {
            return r.content.size
              ? this.canReplace(this.childCount, this.childCount, r.content)
              : this.type.compatibleContent(r.type);
          }
          check() {
            this.type.checkContent(this.content);
            let r = Me.none;
            for (let s = 0; s < this.marks.length; s++)
              r = this.marks[s].addToSet(r);
            if (!Me.sameSet(r, this.marks))
              throw new RangeError(
                `Invalid collection of marks for node ${this.type.name}: ${this.marks.map((s) => s.type.name)}`,
              );
            this.content.forEach((s) => s.check());
          }
          toJSON() {
            let r = { type: this.type.name };
            for (let s in this.attrs) {
              r.attrs = this.attrs;
              break;
            }
            return (
              this.content.size && (r.content = this.content.toJSON()),
              this.marks.length &&
                (r.marks = this.marks.map((s) => s.toJSON())),
              r
            );
          }
          static fromJSON(r, s) {
            if (!s) throw new RangeError("Invalid input for Node.fromJSON");
            let a = null;
            if (s.marks) {
              if (!Array.isArray(s.marks))
                throw new RangeError("Invalid mark data for Node.fromJSON");
              a = s.marks.map(r.markFromJSON);
            }
            if (s.type == "text") {
              if (typeof s.text != "string")
                throw new RangeError("Invalid text node in JSON");
              return r.text(s.text, a);
            }
            let p = ge.fromJSON(r, s.content);
            return r.nodeType(s.type).create(s.attrs, p, a);
          }
        }
        de.prototype.text = void 0;
        class C extends de {
          constructor(r, s, a, p) {
            if ((super(r, s, null, p), !a))
              throw new RangeError("Empty text nodes are not allowed");
            this.text = a;
          }
          toString() {
            return this.type.spec.toDebugString
              ? this.type.spec.toDebugString(this)
              : z(this.marks, JSON.stringify(this.text));
          }
          get textContent() {
            return this.text;
          }
          textBetween(r, s) {
            return this.text.slice(r, s);
          }
          get nodeSize() {
            return this.text.length;
          }
          mark(r) {
            return r == this.marks
              ? this
              : new C(this.type, this.attrs, this.text, r);
          }
          withText(r) {
            return r == this.text
              ? this
              : new C(this.type, this.attrs, r, this.marks);
          }
          cut(r = 0, s = this.text.length) {
            return r == 0 && s == this.text.length
              ? this
              : this.withText(this.text.slice(r, s));
          }
          eq(r) {
            return this.sameMarkup(r) && this.text == r.text;
          }
          toJSON() {
            let r = super.toJSON();
            return (r.text = this.text), r;
          }
        }
        function z(S, r) {
          for (let s = S.length - 1; s >= 0; s--)
            r = S[s].type.name + "(" + r + ")";
          return r;
        }
        class T {
          constructor(r) {
            (this.validEnd = r), (this.next = []), (this.wrapCache = []);
          }
          static parse(r, s) {
            let a = new A(r, s);
            if (a.next == null) return T.empty;
            let p = B(a);
            a.next && a.err("Unexpected trailing text");
            let b = st(Qe(p));
            return ft(b, a), b;
          }
          matchType(r) {
            for (let s = 0; s < this.next.length; s++)
              if (this.next[s].type == r) return this.next[s].next;
            return null;
          }
          matchFragment(r, s = 0, a = r.childCount) {
            let p = this;
            for (let b = s; p && b < a; b++) p = p.matchType(r.child(b).type);
            return p;
          }
          get inlineContent() {
            return this.next.length != 0 && this.next[0].type.isInline;
          }
          get defaultType() {
            for (let r = 0; r < this.next.length; r++) {
              let { type: s } = this.next[r];
              if (!(s.isText || s.hasRequiredAttrs())) return s;
            }
            return null;
          }
          compatible(r) {
            for (let s = 0; s < this.next.length; s++)
              for (let a = 0; a < r.next.length; a++)
                if (this.next[s].type == r.next[a].type) return !0;
            return !1;
          }
          fillBefore(r, s = !1, a = 0) {
            let p = [this];
            function b(w, P) {
              let q = w.matchFragment(r, a);
              if (q && (!s || q.validEnd))
                return ge.from(P.map((Ce) => Ce.createAndFill()));
              for (let Ce = 0; Ce < w.next.length; Ce++) {
                let { type: Pe, next: ct } = w.next[Ce];
                if (
                  !(Pe.isText || Pe.hasRequiredAttrs()) &&
                  p.indexOf(ct) == -1
                ) {
                  p.push(ct);
                  let Nt = b(ct, P.concat(Pe));
                  if (Nt) return Nt;
                }
              }
              return null;
            }
            return b(this, []);
          }
          findWrapping(r) {
            for (let a = 0; a < this.wrapCache.length; a += 2)
              if (this.wrapCache[a] == r) return this.wrapCache[a + 1];
            let s = this.computeWrapping(r);
            return this.wrapCache.push(r, s), s;
          }
          computeWrapping(r) {
            let s = Object.create(null),
              a = [{ match: this, type: null, via: null }];
            for (; a.length; ) {
              let p = a.shift(),
                b = p.match;
              if (b.matchType(r)) {
                let w = [];
                for (let P = p; P.type; P = P.via) w.push(P.type);
                return w.reverse();
              }
              for (let w = 0; w < b.next.length; w++) {
                let { type: P, next: q } = b.next[w];
                !P.isLeaf &&
                  !P.hasRequiredAttrs() &&
                  !(P.name in s) &&
                  (!p.type || q.validEnd) &&
                  (a.push({ match: P.contentMatch, type: P, via: p }),
                  (s[P.name] = !0));
              }
            }
            return null;
          }
          get edgeCount() {
            return this.next.length;
          }
          edge(r) {
            if (r >= this.next.length)
              throw new RangeError(
                `There's no ${r}th edge in this content match`,
              );
            return this.next[r];
          }
          toString() {
            let r = [];
            function s(a) {
              r.push(a);
              for (let p = 0; p < a.next.length; p++)
                r.indexOf(a.next[p].next) == -1 && s(a.next[p].next);
            }
            return (
              s(this),
              r
                .map((a, p) => {
                  let b = p + (a.validEnd ? "*" : " ") + " ";
                  for (let w = 0; w < a.next.length; w++)
                    b +=
                      (w ? ", " : "") +
                      a.next[w].type.name +
                      "->" +
                      r.indexOf(a.next[w].next);
                  return b;
                })
                .join(`
`)
            );
          }
        }
        T.empty = new T(!0);
        class A {
          constructor(r, s) {
            (this.string = r),
              (this.nodeTypes = s),
              (this.inline = null),
              (this.pos = 0),
              (this.tokens = r.split(/\s*(?=\b|\W|$)/)),
              this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(),
              this.tokens[0] == "" && this.tokens.shift();
          }
          get next() {
            return this.tokens[this.pos];
          }
          eat(r) {
            return this.next == r && (this.pos++ || !0);
          }
          err(r) {
            throw new SyntaxError(
              r + " (in content expression '" + this.string + "')",
            );
          }
        }
        function B(S) {
          let r = [];
          do r.push(j(S));
          while (S.eat("|"));
          return r.length == 1 ? r[0] : { type: "choice", exprs: r };
        }
        function j(S) {
          let r = [];
          do r.push(Y(S));
          while (S.next && S.next != ")" && S.next != "|");
          return r.length == 1 ? r[0] : { type: "seq", exprs: r };
        }
        function Y(S) {
          let r = Le(S);
          for (;;)
            if (S.eat("+")) r = { type: "plus", expr: r };
            else if (S.eat("*")) r = { type: "star", expr: r };
            else if (S.eat("?")) r = { type: "opt", expr: r };
            else if (S.eat("{")) r = Oe(S, r);
            else break;
          return r;
        }
        function pe(S) {
          /\D/.test(S.next) && S.err("Expected number, got '" + S.next + "'");
          let r = Number(S.next);
          return S.pos++, r;
        }
        function Oe(S, r) {
          let s = pe(S),
            a = s;
          return (
            S.eat(",") && (S.next != "}" ? (a = pe(S)) : (a = -1)),
            S.eat("}") || S.err("Unclosed braced range"),
            { type: "range", min: s, max: a, expr: r }
          );
        }
        function De(S, r) {
          let s = S.nodeTypes,
            a = s[r];
          if (a) return [a];
          let p = [];
          for (let b in s) {
            let w = s[b];
            w.groups.indexOf(r) > -1 && p.push(w);
          }
          return (
            p.length == 0 && S.err("No node type or group '" + r + "' found"), p
          );
        }
        function Le(S) {
          if (S.eat("(")) {
            let r = B(S);
            return S.eat(")") || S.err("Missing closing paren"), r;
          } else if (/\W/.test(S.next))
            S.err("Unexpected token '" + S.next + "'");
          else {
            let r = De(S, S.next).map(
              (s) => (
                S.inline == null
                  ? (S.inline = s.isInline)
                  : S.inline != s.isInline &&
                    S.err("Mixing inline and block content"),
                { type: "name", value: s }
              ),
            );
            return S.pos++, r.length == 1 ? r[0] : { type: "choice", exprs: r };
          }
        }
        function Qe(S) {
          let r = [[]];
          return p(b(S, 0), s()), r;
          function s() {
            return r.push([]) - 1;
          }
          function a(w, P, q) {
            let Ce = { term: q, to: P };
            return r[w].push(Ce), Ce;
          }
          function p(w, P) {
            w.forEach((q) => (q.to = P));
          }
          function b(w, P) {
            if (w.type == "choice")
              return w.exprs.reduce((q, Ce) => q.concat(b(Ce, P)), []);
            if (w.type == "seq")
              for (let q = 0; ; q++) {
                let Ce = b(w.exprs[q], P);
                if (q == w.exprs.length - 1) return Ce;
                p(Ce, (P = s()));
              }
            else if (w.type == "star") {
              let q = s();
              return a(P, q), p(b(w.expr, q), q), [a(q)];
            } else if (w.type == "plus") {
              let q = s();
              return p(b(w.expr, P), q), p(b(w.expr, q), q), [a(q)];
            } else {
              if (w.type == "opt") return [a(P)].concat(b(w.expr, P));
              if (w.type == "range") {
                let q = P;
                for (let Ce = 0; Ce < w.min; Ce++) {
                  let Pe = s();
                  p(b(w.expr, q), Pe), (q = Pe);
                }
                if (w.max == -1) p(b(w.expr, q), q);
                else
                  for (let Ce = w.min; Ce < w.max; Ce++) {
                    let Pe = s();
                    a(q, Pe), p(b(w.expr, q), Pe), (q = Pe);
                  }
                return [a(q)];
              } else {
                if (w.type == "name") return [a(P, void 0, w.value)];
                throw new Error("Unknown expr type");
              }
            }
          }
        }
        function nt(S, r) {
          return r - S;
        }
        function qe(S, r) {
          let s = [];
          return a(r), s.sort(nt);
          function a(p) {
            let b = S[p];
            if (b.length == 1 && !b[0].term) return a(b[0].to);
            s.push(p);
            for (let w = 0; w < b.length; w++) {
              let { term: P, to: q } = b[w];
              !P && s.indexOf(q) == -1 && a(q);
            }
          }
        }
        function st(S) {
          let r = Object.create(null);
          return s(qe(S, 0));
          function s(a) {
            let p = [];
            a.forEach((w) => {
              S[w].forEach(({ term: P, to: q }) => {
                if (!P) return;
                let Ce;
                for (let Pe = 0; Pe < p.length; Pe++)
                  p[Pe][0] == P && (Ce = p[Pe][1]);
                qe(S, q).forEach((Pe) => {
                  Ce || p.push([P, (Ce = [])]),
                    Ce.indexOf(Pe) == -1 && Ce.push(Pe);
                });
              });
            });
            let b = (r[a.join(",")] = new T(a.indexOf(S.length - 1) > -1));
            for (let w = 0; w < p.length; w++) {
              let P = p[w][1].sort(nt);
              b.next.push({ type: p[w][0], next: r[P.join(",")] || s(P) });
            }
            return b;
          }
        }
        function ft(S, r) {
          for (let s = 0, a = [S]; s < a.length; s++) {
            let p = a[s],
              b = !p.validEnd,
              w = [];
            for (let P = 0; P < p.next.length; P++) {
              let { type: q, next: Ce } = p.next[P];
              w.push(q.name),
                b && !(q.isText || q.hasRequiredAttrs()) && (b = !1),
                a.indexOf(Ce) == -1 && a.push(Ce);
            }
            b &&
              r.err(
                "Only non-generatable nodes (" +
                  w.join(", ") +
                  ") in a required position (see https://prosemirror.net/docs/guide/#generatable)",
              );
          }
        }
        function mt(S) {
          let r = Object.create(null);
          for (let s in S) {
            let a = S[s];
            if (!a.hasDefault) return null;
            r[s] = a.default;
          }
          return r;
        }
        function $(S, r) {
          let s = Object.create(null);
          for (let a in S) {
            let p = r && r[a];
            if (p === void 0) {
              let b = S[a];
              if (b.hasDefault) p = b.default;
              else throw new RangeError("No value supplied for attribute " + a);
            }
            s[a] = p;
          }
          return s;
        }
        function H(S) {
          let r = Object.create(null);
          if (S) for (let s in S) r[s] = new re(S[s]);
          return r;
        }
        class te {
          constructor(r, s, a) {
            (this.name = r),
              (this.schema = s),
              (this.spec = a),
              (this.markSet = null),
              (this.groups = a.group ? a.group.split(" ") : []),
              (this.attrs = H(a.attrs)),
              (this.defaultAttrs = mt(this.attrs)),
              (this.contentMatch = null),
              (this.inlineContent = null),
              (this.isBlock = !(a.inline || r == "text")),
              (this.isText = r == "text");
          }
          get isInline() {
            return !this.isBlock;
          }
          get isTextblock() {
            return this.isBlock && this.inlineContent;
          }
          get isLeaf() {
            return this.contentMatch == T.empty;
          }
          get isAtom() {
            return this.isLeaf || !!this.spec.atom;
          }
          get whitespace() {
            return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
          }
          hasRequiredAttrs() {
            for (let r in this.attrs) if (this.attrs[r].isRequired) return !0;
            return !1;
          }
          compatibleContent(r) {
            return this == r || this.contentMatch.compatible(r.contentMatch);
          }
          computeAttrs(r) {
            return !r && this.defaultAttrs
              ? this.defaultAttrs
              : $(this.attrs, r);
          }
          create(r = null, s, a) {
            if (this.isText)
              throw new Error("NodeType.create can't construct text nodes");
            return new de(
              this,
              this.computeAttrs(r),
              ge.from(s),
              Me.setFrom(a),
            );
          }
          createChecked(r = null, s, a) {
            return (
              (s = ge.from(s)),
              this.checkContent(s),
              new de(this, this.computeAttrs(r), s, Me.setFrom(a))
            );
          }
          createAndFill(r = null, s, a) {
            if (((r = this.computeAttrs(r)), (s = ge.from(s)), s.size)) {
              let w = this.contentMatch.fillBefore(s);
              if (!w) return null;
              s = w.append(s);
            }
            let p = this.contentMatch.matchFragment(s),
              b = p && p.fillBefore(ge.empty, !0);
            return b ? new de(this, r, s.append(b), Me.setFrom(a)) : null;
          }
          validContent(r) {
            let s = this.contentMatch.matchFragment(r);
            if (!s || !s.validEnd) return !1;
            for (let a = 0; a < r.childCount; a++)
              if (!this.allowsMarks(r.child(a).marks)) return !1;
            return !0;
          }
          checkContent(r) {
            if (!this.validContent(r))
              throw new RangeError(
                `Invalid content for node ${this.name}: ${r.toString().slice(0, 50)}`,
              );
          }
          allowsMarkType(r) {
            return this.markSet == null || this.markSet.indexOf(r) > -1;
          }
          allowsMarks(r) {
            if (this.markSet == null) return !0;
            for (let s = 0; s < r.length; s++)
              if (!this.allowsMarkType(r[s].type)) return !1;
            return !0;
          }
          allowedMarks(r) {
            if (this.markSet == null) return r;
            let s;
            for (let a = 0; a < r.length; a++)
              this.allowsMarkType(r[a].type)
                ? s && s.push(r[a])
                : s || (s = r.slice(0, a));
            return s ? (s.length ? s : Me.none) : r;
          }
          static compile(r, s) {
            let a = Object.create(null);
            r.forEach((b, w) => (a[b] = new te(b, s, w)));
            let p = s.spec.topNode || "doc";
            if (!a[p])
              throw new RangeError(
                "Schema is missing its top node type ('" + p + "')",
              );
            if (!a.text)
              throw new RangeError("Every schema needs a 'text' type");
            for (let b in a.text.attrs)
              throw new RangeError(
                "The text node type should not have attributes",
              );
            return a;
          }
        }
        class re {
          constructor(r) {
            (this.hasDefault = Object.prototype.hasOwnProperty.call(
              r,
              "default",
            )),
              (this.default = r.default);
          }
          get isRequired() {
            return !this.hasDefault;
          }
        }
        class oe {
          constructor(r, s, a, p) {
            (this.name = r),
              (this.rank = s),
              (this.schema = a),
              (this.spec = p),
              (this.attrs = H(p.attrs)),
              (this.excluded = null);
            let b = mt(this.attrs);
            this.instance = b ? new Me(this, b) : null;
          }
          create(r = null) {
            return !r && this.instance
              ? this.instance
              : new Me(this, $(this.attrs, r));
          }
          static compile(r, s) {
            let a = Object.create(null),
              p = 0;
            return r.forEach((b, w) => (a[b] = new oe(b, p++, s, w))), a;
          }
          removeFromSet(r) {
            for (var s = 0; s < r.length; s++)
              r[s].type == this &&
                ((r = r.slice(0, s).concat(r.slice(s + 1))), s--);
            return r;
          }
          isInSet(r) {
            for (let s = 0; s < r.length; s++)
              if (r[s].type == this) return r[s];
          }
          excludes(r) {
            return this.excluded.indexOf(r) > -1;
          }
        }
        class fe {
          constructor(r) {
            (this.linebreakReplacement = null),
              (this.cached = Object.create(null));
            let s = (this.spec = {});
            for (let p in r) s[p] = r[p];
            (s.nodes = se.from(r.nodes)),
              (s.marks = se.from(r.marks || {})),
              (this.nodes = te.compile(this.spec.nodes, this)),
              (this.marks = oe.compile(this.spec.marks, this));
            let a = Object.create(null);
            for (let p in this.nodes) {
              if (p in this.marks)
                throw new RangeError(p + " can not be both a node and a mark");
              let b = this.nodes[p],
                w = b.spec.content || "",
                P = b.spec.marks;
              if (
                ((b.contentMatch = a[w] || (a[w] = T.parse(w, this.nodes))),
                (b.inlineContent = b.contentMatch.inlineContent),
                b.spec.linebreakReplacement)
              ) {
                if (this.linebreakReplacement)
                  throw new RangeError("Multiple linebreak nodes defined");
                if (!b.isInline || !b.isLeaf)
                  throw new RangeError(
                    "Linebreak replacement nodes must be inline leaf nodes",
                  );
                this.linebreakReplacement = b;
              }
              b.markSet =
                P == "_"
                  ? null
                  : P
                    ? be(this, P.split(" "))
                    : P == "" || !b.inlineContent
                      ? []
                      : null;
            }
            for (let p in this.marks) {
              let b = this.marks[p],
                w = b.spec.excludes;
              b.excluded =
                w == null ? [b] : w == "" ? [] : be(this, w.split(" "));
            }
            (this.nodeFromJSON = this.nodeFromJSON.bind(this)),
              (this.markFromJSON = this.markFromJSON.bind(this)),
              (this.topNodeType = this.nodes[this.spec.topNode || "doc"]),
              (this.cached.wrappings = Object.create(null));
          }
          node(r, s = null, a, p) {
            if (typeof r == "string") r = this.nodeType(r);
            else if (r instanceof te) {
              if (r.schema != this)
                throw new RangeError(
                  "Node type from different schema used (" + r.name + ")",
                );
            } else throw new RangeError("Invalid node type: " + r);
            return r.createChecked(s, a, p);
          }
          text(r, s) {
            let a = this.nodes.text;
            return new C(a, a.defaultAttrs, r, Me.setFrom(s));
          }
          mark(r, s) {
            return typeof r == "string" && (r = this.marks[r]), r.create(s);
          }
          nodeFromJSON(r) {
            return de.fromJSON(this, r);
          }
          markFromJSON(r) {
            return Me.fromJSON(this, r);
          }
          nodeType(r) {
            let s = this.nodes[r];
            if (!s) throw new RangeError("Unknown node type: " + r);
            return s;
          }
        }
        function be(S, r) {
          let s = [];
          for (let a = 0; a < r.length; a++) {
            let p = r[a],
              b = S.marks[p],
              w = b;
            if (b) s.push(b);
            else
              for (let P in S.marks) {
                let q = S.marks[P];
                (p == "_" ||
                  (q.spec.group && q.spec.group.split(" ").indexOf(p) > -1)) &&
                  s.push((w = q));
              }
            if (!w) throw new SyntaxError("Unknown mark type: '" + r[a] + "'");
          }
          return s;
        }
        function we(S) {
          return S.tag != null;
        }
        function He(S) {
          return S.style != null;
        }
        class je {
          constructor(r, s) {
            (this.schema = r),
              (this.rules = s),
              (this.tags = []),
              (this.styles = []),
              s.forEach((a) => {
                we(a) ? this.tags.push(a) : He(a) && this.styles.push(a);
              }),
              (this.normalizeLists = !this.tags.some((a) => {
                if (!/^(ul|ol)\b/.test(a.tag) || !a.node) return !1;
                let p = r.nodes[a.node];
                return p.contentMatch.matchType(p);
              }));
          }
          parse(r, s = {}) {
            let a = new kt(this, s, !1);
            return a.addAll(r, s.from, s.to), a.finish();
          }
          parseSlice(r, s = {}) {
            let a = new kt(this, s, !0);
            return a.addAll(r, s.from, s.to), Je.maxOpen(a.finish());
          }
          matchTag(r, s, a) {
            for (
              let p = a ? this.tags.indexOf(a) + 1 : 0;
              p < this.tags.length;
              p++
            ) {
              let b = this.tags[p];
              if (
                J(r, b.tag) &&
                (b.namespace === void 0 || r.namespaceURI == b.namespace) &&
                (!b.context || s.matchesContext(b.context))
              ) {
                if (b.getAttrs) {
                  let w = b.getAttrs(r);
                  if (w === !1) continue;
                  b.attrs = w || void 0;
                }
                return b;
              }
            }
          }
          matchStyle(r, s, a, p) {
            for (
              let b = p ? this.styles.indexOf(p) + 1 : 0;
              b < this.styles.length;
              b++
            ) {
              let w = this.styles[b],
                P = w.style;
              if (
                !(
                  P.indexOf(r) != 0 ||
                  (w.context && !a.matchesContext(w.context)) ||
                  (P.length > r.length &&
                    (P.charCodeAt(r.length) != 61 ||
                      P.slice(r.length + 1) != s))
                )
              ) {
                if (w.getAttrs) {
                  let q = w.getAttrs(s);
                  if (q === !1) continue;
                  w.attrs = q || void 0;
                }
                return w;
              }
            }
          }
          static schemaRules(r) {
            let s = [];
            function a(p) {
              let b = p.priority == null ? 50 : p.priority,
                w = 0;
              for (; w < s.length; w++) {
                let P = s[w];
                if ((P.priority == null ? 50 : P.priority) < b) break;
              }
              s.splice(w, 0, p);
            }
            for (let p in r.marks) {
              let b = r.marks[p].spec.parseDOM;
              b &&
                b.forEach((w) => {
                  a((w = h(w))),
                    w.mark || w.ignore || w.clearMark || (w.mark = p);
                });
            }
            for (let p in r.nodes) {
              let b = r.nodes[p].spec.parseDOM;
              b &&
                b.forEach((w) => {
                  a((w = h(w))), w.node || w.ignore || w.mark || (w.node = p);
                });
            }
            return s;
          }
          static fromSchema(r) {
            return (
              r.cached.domParser ||
              (r.cached.domParser = new je(r, je.schemaRules(r)))
            );
          }
        }
        const Ue = {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            canvas: !0,
            dd: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            figcaption: !0,
            figure: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            li: !0,
            noscript: !0,
            ol: !0,
            output: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            tfoot: !0,
            ul: !0,
          },
          $e = {
            head: !0,
            noscript: !0,
            object: !0,
            script: !0,
            style: !0,
            title: !0,
          },
          Ze = { ol: !0, ul: !0 },
          rt = 1,
          it = 2,
          at = 4;
        function gt(S, r, s) {
          return r != null
            ? (r ? rt : 0) | (r === "full" ? it : 0)
            : S && S.whitespace == "pre"
              ? rt | it
              : s & ~at;
        }
        class dt {
          constructor(r, s, a, p, b, w, P) {
            (this.type = r),
              (this.attrs = s),
              (this.marks = a),
              (this.pendingMarks = p),
              (this.solid = b),
              (this.options = P),
              (this.content = []),
              (this.activeMarks = Me.none),
              (this.stashMarks = []),
              (this.match = w || (P & at ? null : r.contentMatch));
          }
          findWrapping(r) {
            if (!this.match) {
              if (!this.type) return [];
              let s = this.type.contentMatch.fillBefore(ge.from(r));
              if (s) this.match = this.type.contentMatch.matchFragment(s);
              else {
                let a = this.type.contentMatch,
                  p;
                return (p = a.findWrapping(r.type))
                  ? ((this.match = a), p)
                  : null;
              }
            }
            return this.match.findWrapping(r.type);
          }
          finish(r) {
            if (!(this.options & rt)) {
              let a = this.content[this.content.length - 1],
                p;
              if (a && a.isText && (p = /[ \t\r\n\u000c]+$/.exec(a.text))) {
                let b = a;
                a.text.length == p[0].length
                  ? this.content.pop()
                  : (this.content[this.content.length - 1] = b.withText(
                      b.text.slice(0, b.text.length - p[0].length),
                    ));
              }
            }
            let s = ge.from(this.content);
            return (
              !r &&
                this.match &&
                (s = s.append(this.match.fillBefore(ge.empty, !0))),
              this.type ? this.type.create(this.attrs, s, this.marks) : s
            );
          }
          popFromStashMark(r) {
            for (let s = this.stashMarks.length - 1; s >= 0; s--)
              if (r.eq(this.stashMarks[s]))
                return this.stashMarks.splice(s, 1)[0];
          }
          applyPending(r) {
            for (let s = 0, a = this.pendingMarks; s < a.length; s++) {
              let p = a[s];
              (this.type ? this.type.allowsMarkType(p.type) : k(p.type, r)) &&
                !p.isInSet(this.activeMarks) &&
                ((this.activeMarks = p.addToSet(this.activeMarks)),
                (this.pendingMarks = p.removeFromSet(this.pendingMarks)));
            }
          }
          inlineContext(r) {
            return this.type
              ? this.type.inlineContent
              : this.content.length
                ? this.content[0].isInline
                : r.parentNode &&
                  !Ue.hasOwnProperty(r.parentNode.nodeName.toLowerCase());
          }
        }
        class kt {
          constructor(r, s, a) {
            (this.parser = r),
              (this.options = s),
              (this.isOpen = a),
              (this.open = 0);
            let p = s.topNode,
              b,
              w = gt(null, s.preserveWhitespace, 0) | (a ? at : 0);
            p
              ? (b = new dt(
                  p.type,
                  p.attrs,
                  Me.none,
                  Me.none,
                  !0,
                  s.topMatch || p.type.contentMatch,
                  w,
                ))
              : a
                ? (b = new dt(null, null, Me.none, Me.none, !0, null, w))
                : (b = new dt(
                    r.schema.topNodeType,
                    null,
                    Me.none,
                    Me.none,
                    !0,
                    null,
                    w,
                  )),
              (this.nodes = [b]),
              (this.find = s.findPositions),
              (this.needsBlock = !1);
          }
          get top() {
            return this.nodes[this.open];
          }
          addDOM(r) {
            r.nodeType == 3
              ? this.addTextNode(r)
              : r.nodeType == 1 && this.addElement(r);
          }
          withStyleRules(r, s) {
            let a = r.getAttribute("style");
            if (!a) return s();
            let p = this.readStyles(c(a));
            if (!p) return;
            let [b, w] = p,
              P = this.top;
            for (let q = 0; q < w.length; q++) this.removePendingMark(w[q], P);
            for (let q = 0; q < b.length; q++) this.addPendingMark(b[q]);
            s();
            for (let q = 0; q < b.length; q++) this.removePendingMark(b[q], P);
            for (let q = 0; q < w.length; q++) this.addPendingMark(w[q]);
          }
          addTextNode(r) {
            let s = r.nodeValue,
              a = this.top;
            if (
              a.options & it ||
              a.inlineContext(r) ||
              /[^ \t\r\n\u000c]/.test(s)
            ) {
              if (a.options & rt)
                a.options & it
                  ? (s = s.replace(
                      /\r\n?/g,
                      `
`,
                    ))
                  : (s = s.replace(/\r?\n|\r/g, " "));
              else if (
                ((s = s.replace(/[ \t\r\n\u000c]+/g, " ")),
                /^[ \t\r\n\u000c]/.test(s) &&
                  this.open == this.nodes.length - 1)
              ) {
                let p = a.content[a.content.length - 1],
                  b = r.previousSibling;
                (!p ||
                  (b && b.nodeName == "BR") ||
                  (p.isText && /[ \t\r\n\u000c]$/.test(p.text))) &&
                  (s = s.slice(1));
              }
              s && this.insertNode(this.parser.schema.text(s)),
                this.findInText(r);
            } else this.findInside(r);
          }
          addElement(r, s) {
            let a = r.nodeName.toLowerCase(),
              p;
            Ze.hasOwnProperty(a) && this.parser.normalizeLists && _t(r);
            let b =
              (this.options.ruleFromNode && this.options.ruleFromNode(r)) ||
              (p = this.parser.matchTag(r, this, s));
            if (b ? b.ignore : $e.hasOwnProperty(a))
              this.findInside(r), this.ignoreFallback(r);
            else if (!b || b.skip || b.closeParent) {
              b && b.closeParent
                ? (this.open = Math.max(0, this.open - 1))
                : b && b.skip.nodeType && (r = b.skip);
              let w,
                P = this.top,
                q = this.needsBlock;
              if (Ue.hasOwnProperty(a))
                P.content.length &&
                  P.content[0].isInline &&
                  this.open &&
                  (this.open--, (P = this.top)),
                  (w = !0),
                  P.type || (this.needsBlock = !0);
              else if (!r.firstChild) {
                this.leafFallback(r);
                return;
              }
              b && b.skip
                ? this.addAll(r)
                : this.withStyleRules(r, () => this.addAll(r)),
                w && this.sync(P),
                (this.needsBlock = q);
            } else
              this.withStyleRules(r, () => {
                this.addElementByRule(r, b, b.consuming === !1 ? p : void 0);
              });
          }
          leafFallback(r) {
            r.nodeName == "BR" &&
              this.top.type &&
              this.top.type.inlineContent &&
              this.addTextNode(
                r.ownerDocument.createTextNode(`
`),
              );
          }
          ignoreFallback(r) {
            r.nodeName == "BR" &&
              (!this.top.type || !this.top.type.inlineContent) &&
              this.findPlace(this.parser.schema.text("-"));
          }
          readStyles(r) {
            let s = Me.none,
              a = Me.none;
            for (let p = 0; p < r.length; p += 2)
              for (let b = void 0; ; ) {
                let w = this.parser.matchStyle(r[p], r[p + 1], this, b);
                if (!w) break;
                if (w.ignore) return null;
                if (
                  (w.clearMark
                    ? this.top.pendingMarks
                        .concat(this.top.activeMarks)
                        .forEach((P) => {
                          w.clearMark(P) && (a = P.addToSet(a));
                        })
                    : (s = this.parser.schema.marks[w.mark]
                        .create(w.attrs)
                        .addToSet(s)),
                  w.consuming === !1)
                )
                  b = w;
                else break;
              }
            return [s, a];
          }
          addElementByRule(r, s, a) {
            let p, b, w;
            s.node
              ? ((b = this.parser.schema.nodes[s.node]),
                b.isLeaf
                  ? this.insertNode(b.create(s.attrs)) || this.leafFallback(r)
                  : (p = this.enter(b, s.attrs || null, s.preserveWhitespace)))
              : ((w = this.parser.schema.marks[s.mark].create(s.attrs)),
                this.addPendingMark(w));
            let P = this.top;
            if (b && b.isLeaf) this.findInside(r);
            else if (a) this.addElement(r, a);
            else if (s.getContent)
              this.findInside(r),
                s
                  .getContent(r, this.parser.schema)
                  .forEach((q) => this.insertNode(q));
            else {
              let q = r;
              typeof s.contentElement == "string"
                ? (q = r.querySelector(s.contentElement))
                : typeof s.contentElement == "function"
                  ? (q = s.contentElement(r))
                  : s.contentElement && (q = s.contentElement),
                this.findAround(r, q, !0),
                this.addAll(q);
            }
            p && this.sync(P) && this.open--, w && this.removePendingMark(w, P);
          }
          addAll(r, s, a) {
            let p = s || 0;
            for (
              let b = s ? r.childNodes[s] : r.firstChild,
                w = a == null ? null : r.childNodes[a];
              b != w;
              b = b.nextSibling, ++p
            )
              this.findAtPoint(r, p), this.addDOM(b);
            this.findAtPoint(r, p);
          }
          findPlace(r) {
            let s, a;
            for (let p = this.open; p >= 0; p--) {
              let b = this.nodes[p],
                w = b.findWrapping(r);
              if (
                (w &&
                  (!s || s.length > w.length) &&
                  ((s = w), (a = b), !w.length)) ||
                b.solid
              )
                break;
            }
            if (!s) return !1;
            this.sync(a);
            for (let p = 0; p < s.length; p++) this.enterInner(s[p], null, !1);
            return !0;
          }
          insertNode(r) {
            if (r.isInline && this.needsBlock && !this.top.type) {
              let s = this.textblockFromContext();
              s && this.enterInner(s);
            }
            if (this.findPlace(r)) {
              this.closeExtra();
              let s = this.top;
              s.applyPending(r.type),
                s.match && (s.match = s.match.matchType(r.type));
              let a = s.activeMarks;
              for (let p = 0; p < r.marks.length; p++)
                (!s.type || s.type.allowsMarkType(r.marks[p].type)) &&
                  (a = r.marks[p].addToSet(a));
              return s.content.push(r.mark(a)), !0;
            }
            return !1;
          }
          enter(r, s, a) {
            let p = this.findPlace(r.create(s));
            return p && this.enterInner(r, s, !0, a), p;
          }
          enterInner(r, s = null, a = !1, p) {
            this.closeExtra();
            let b = this.top;
            b.applyPending(r), (b.match = b.match && b.match.matchType(r));
            let w = gt(r, p, b.options);
            b.options & at && b.content.length == 0 && (w |= at),
              this.nodes.push(
                new dt(r, s, b.activeMarks, b.pendingMarks, a, null, w),
              ),
              this.open++;
          }
          closeExtra(r = !1) {
            let s = this.nodes.length - 1;
            if (s > this.open) {
              for (; s > this.open; s--)
                this.nodes[s - 1].content.push(this.nodes[s].finish(r));
              this.nodes.length = this.open + 1;
            }
          }
          finish() {
            return (
              (this.open = 0),
              this.closeExtra(this.isOpen),
              this.nodes[0].finish(this.isOpen || this.options.topOpen)
            );
          }
          sync(r) {
            for (let s = this.open; s >= 0; s--)
              if (this.nodes[s] == r) return (this.open = s), !0;
            return !1;
          }
          get currentPos() {
            this.closeExtra();
            let r = 0;
            for (let s = this.open; s >= 0; s--) {
              let a = this.nodes[s].content;
              for (let p = a.length - 1; p >= 0; p--) r += a[p].nodeSize;
              s && r++;
            }
            return r;
          }
          findAtPoint(r, s) {
            if (this.find)
              for (let a = 0; a < this.find.length; a++)
                this.find[a].node == r &&
                  this.find[a].offset == s &&
                  (this.find[a].pos = this.currentPos);
          }
          findInside(r) {
            if (this.find)
              for (let s = 0; s < this.find.length; s++)
                this.find[s].pos == null &&
                  r.nodeType == 1 &&
                  r.contains(this.find[s].node) &&
                  (this.find[s].pos = this.currentPos);
          }
          findAround(r, s, a) {
            if (r != s && this.find)
              for (let p = 0; p < this.find.length; p++)
                this.find[p].pos == null &&
                  r.nodeType == 1 &&
                  r.contains(this.find[p].node) &&
                  s.compareDocumentPosition(this.find[p].node) & (a ? 2 : 4) &&
                  (this.find[p].pos = this.currentPos);
          }
          findInText(r) {
            if (this.find)
              for (let s = 0; s < this.find.length; s++)
                this.find[s].node == r &&
                  (this.find[s].pos =
                    this.currentPos -
                    (r.nodeValue.length - this.find[s].offset));
          }
          matchesContext(r) {
            if (r.indexOf("|") > -1)
              return r.split(/\s*\|\s*/).some(this.matchesContext, this);
            let s = r.split("/"),
              a = this.options.context,
              p = !this.isOpen && (!a || a.parent.type == this.nodes[0].type),
              b = -(a ? a.depth + 1 : 0) + (p ? 0 : 1),
              w = (P, q) => {
                for (; P >= 0; P--) {
                  let Ce = s[P];
                  if (Ce == "") {
                    if (P == s.length - 1 || P == 0) continue;
                    for (; q >= b; q--) if (w(P - 1, q)) return !0;
                    return !1;
                  } else {
                    let Pe =
                      q > 0 || (q == 0 && p)
                        ? this.nodes[q].type
                        : a && q >= b
                          ? a.node(q - b).type
                          : null;
                    if (!Pe || (Pe.name != Ce && Pe.groups.indexOf(Ce) == -1))
                      return !1;
                    q--;
                  }
                }
                return !0;
              };
            return w(s.length - 1, this.open);
          }
          textblockFromContext() {
            let r = this.options.context;
            if (r)
              for (let s = r.depth; s >= 0; s--) {
                let a = r.node(s).contentMatchAt(r.indexAfter(s)).defaultType;
                if (a && a.isTextblock && a.defaultAttrs) return a;
              }
            for (let s in this.parser.schema.nodes) {
              let a = this.parser.schema.nodes[s];
              if (a.isTextblock && a.defaultAttrs) return a;
            }
          }
          addPendingMark(r) {
            let s = N(r, this.top.pendingMarks);
            s && this.top.stashMarks.push(s),
              (this.top.pendingMarks = r.addToSet(this.top.pendingMarks));
          }
          removePendingMark(r, s) {
            for (let a = this.open; a >= 0; a--) {
              let p = this.nodes[a];
              if (p.pendingMarks.lastIndexOf(r) > -1)
                p.pendingMarks = r.removeFromSet(p.pendingMarks);
              else {
                p.activeMarks = r.removeFromSet(p.activeMarks);
                let w = p.popFromStashMark(r);
                w &&
                  p.type &&
                  p.type.allowsMarkType(w.type) &&
                  (p.activeMarks = w.addToSet(p.activeMarks));
              }
              if (p == s) break;
            }
          }
        }
        function _t(S) {
          for (let r = S.firstChild, s = null; r; r = r.nextSibling) {
            let a = r.nodeType == 1 ? r.nodeName.toLowerCase() : null;
            a && Ze.hasOwnProperty(a) && s
              ? (s.appendChild(r), (r = s))
              : a == "li"
                ? (s = r)
                : a && (s = null);
          }
        }
        function J(S, r) {
          return (
            S.matches ||
            S.msMatchesSelector ||
            S.webkitMatchesSelector ||
            S.mozMatchesSelector
          ).call(S, r);
        }
        function c(S) {
          let r = /\s*([\w-]+)\s*:\s*([^;]+)/g,
            s,
            a = [];
          for (; (s = r.exec(S)); ) a.push(s[1], s[2].trim());
          return a;
        }
        function h(S) {
          let r = {};
          for (let s in S) r[s] = S[s];
          return r;
        }
        function k(S, r) {
          let s = r.schema.nodes;
          for (let a in s) {
            let p = s[a];
            if (!p.allowsMarkType(S)) continue;
            let b = [],
              w = (P) => {
                b.push(P);
                for (let q = 0; q < P.edgeCount; q++) {
                  let { type: Ce, next: Pe } = P.edge(q);
                  if (Ce == r || (b.indexOf(Pe) < 0 && w(Pe))) return !0;
                }
              };
            if (w(p.contentMatch)) return !0;
          }
        }
        function N(S, r) {
          for (let s = 0; s < r.length; s++) if (S.eq(r[s])) return r[s];
        }
        class L {
          constructor(r, s) {
            (this.nodes = r), (this.marks = s);
          }
          serializeFragment(r, s = {}, a) {
            a || (a = ie(s).createDocumentFragment());
            let p = a,
              b = [];
            return (
              r.forEach((w) => {
                if (b.length || w.marks.length) {
                  let P = 0,
                    q = 0;
                  for (; P < b.length && q < w.marks.length; ) {
                    let Ce = w.marks[q];
                    if (!this.marks[Ce.type.name]) {
                      q++;
                      continue;
                    }
                    if (!Ce.eq(b[P][0]) || Ce.type.spec.spanning === !1) break;
                    P++, q++;
                  }
                  for (; P < b.length; ) p = b.pop()[1];
                  for (; q < w.marks.length; ) {
                    let Ce = w.marks[q++],
                      Pe = this.serializeMark(Ce, w.isInline, s);
                    Pe &&
                      (b.push([Ce, p]),
                      p.appendChild(Pe.dom),
                      (p = Pe.contentDOM || Pe.dom));
                  }
                }
                p.appendChild(this.serializeNodeInner(w, s));
              }),
              a
            );
          }
          serializeNodeInner(r, s) {
            let { dom: a, contentDOM: p } = L.renderSpec(
              ie(s),
              this.nodes[r.type.name](r),
            );
            if (p) {
              if (r.isLeaf)
                throw new RangeError(
                  "Content hole not allowed in a leaf node spec",
                );
              this.serializeFragment(r.content, s, p);
            }
            return a;
          }
          serializeNode(r, s = {}) {
            let a = this.serializeNodeInner(r, s);
            for (let p = r.marks.length - 1; p >= 0; p--) {
              let b = this.serializeMark(r.marks[p], r.isInline, s);
              b && ((b.contentDOM || b.dom).appendChild(a), (a = b.dom));
            }
            return a;
          }
          serializeMark(r, s, a = {}) {
            let p = this.marks[r.type.name];
            return p && L.renderSpec(ie(a), p(r, s));
          }
          static renderSpec(r, s, a = null) {
            if (typeof s == "string") return { dom: r.createTextNode(s) };
            if (s.nodeType != null) return { dom: s };
            if (s.dom && s.dom.nodeType != null) return s;
            let p = s[0],
              b = p.indexOf(" ");
            b > 0 && ((a = p.slice(0, b)), (p = p.slice(b + 1)));
            let w,
              P = a ? r.createElementNS(a, p) : r.createElement(p),
              q = s[1],
              Ce = 1;
            if (
              q &&
              typeof q == "object" &&
              q.nodeType == null &&
              !Array.isArray(q)
            ) {
              Ce = 2;
              for (let Pe in q)
                if (q[Pe] != null) {
                  let ct = Pe.indexOf(" ");
                  ct > 0
                    ? P.setAttributeNS(Pe.slice(0, ct), Pe.slice(ct + 1), q[Pe])
                    : P.setAttribute(Pe, q[Pe]);
                }
            }
            for (let Pe = Ce; Pe < s.length; Pe++) {
              let ct = s[Pe];
              if (ct === 0) {
                if (Pe < s.length - 1 || Pe > Ce)
                  throw new RangeError(
                    "Content hole must be the only child of its parent node",
                  );
                return { dom: P, contentDOM: P };
              } else {
                let { dom: Nt, contentDOM: Tt } = L.renderSpec(r, ct, a);
                if ((P.appendChild(Nt), Tt)) {
                  if (w) throw new RangeError("Multiple content holes");
                  w = Tt;
                }
              }
            }
            return { dom: P, contentDOM: w };
          }
          static fromSchema(r) {
            return (
              r.cached.domSerializer ||
              (r.cached.domSerializer = new L(
                this.nodesFromSchema(r),
                this.marksFromSchema(r),
              ))
            );
          }
          static nodesFromSchema(r) {
            let s = W(r.nodes);
            return s.text || (s.text = (a) => a.text), s;
          }
          static marksFromSchema(r) {
            return W(r.marks);
          }
        }
        function W(S) {
          let r = {};
          for (let s in S) {
            let a = S[s].spec.toDOM;
            a && (r[s] = a);
          }
          return r;
        }
        function ie(S) {
          return S.document || window.document;
        }
      },
      4188: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          $B: () => ce,
          Aw: () => Me,
          Sd: () => Ne,
          T2: () => ye,
          fF: () => ze,
          o8: () => _e,
          wn: () => et,
        });
        var v = Fe(63734),
          se = Fe(57053),
          Te = Fe(52893);
        const ve = ["ol", 0],
          ge = ["ul", 0],
          Ye = ["li", 0],
          _e = {
            attrs: { order: { default: 1 } },
            parseDOM: [
              {
                tag: "ol",
                getAttrs(_) {
                  return {
                    order: _.hasAttribute("start")
                      ? +_.getAttribute("start")
                      : 1,
                  };
                },
              },
            ],
            toDOM(_) {
              return _.attrs.order == 1
                ? ve
                : ["ol", { start: _.attrs.order }, 0];
            },
          },
          ze = {
            parseDOM: [{ tag: "ul" }],
            toDOM() {
              return ge;
            },
          },
          Me = {
            parseDOM: [{ tag: "li" }],
            toDOM() {
              return Ye;
            },
            defining: !0,
          };
        function We(_, G) {
          let U = {};
          for (let ae in _) U[ae] = _[ae];
          for (let ae in G) U[ae] = G[ae];
          return U;
        }
        function Je(_, G, U) {
          return _.append({
            ordered_list: We(_e, { content: "list_item+", group: U }),
            bullet_list: We(ze, { content: "list_item+", group: U }),
            list_item: We(Me, { content: G }),
          });
        }
        function Ne(_, G = null) {
          return function (U, ae) {
            let { $from: X, $to: me } = U.selection,
              ke = X.blockRange(me),
              Be = !1,
              Re = ke;
            if (!ke) return !1;
            if (
              ke.depth >= 2 &&
              X.node(ke.depth - 1).type.compatibleContent(_) &&
              ke.startIndex == 0
            ) {
              if (X.index(ke.depth - 1) == 0) return !1;
              let Ae = U.doc.resolve(ke.start - 2);
              (Re = new se.u$(Ae, Ae, ke.depth)),
                ke.endIndex < ke.parent.childCount &&
                  (ke = new se.u$(
                    X,
                    U.doc.resolve(me.end(ke.depth)),
                    ke.depth,
                  )),
                (Be = !0);
            }
            let Ve = (0, v.oM)(Re, _, G, ke);
            return Ve
              ? (ae && ae(Ge(U.tr, ke, Ve, Be, _).scrollIntoView()), !0)
              : !1;
          };
        }
        function Ge(_, G, U, ae, X) {
          let me = se.FK.empty;
          for (let Ae = U.length - 1; Ae >= 0; Ae--)
            me = se.FK.from(U[Ae].type.create(U[Ae].attrs, me));
          _.step(
            new v.Wg(
              G.start - (ae ? 2 : 0),
              G.end,
              G.start,
              G.end,
              new se.Ji(me, 0, 0),
              U.length,
              !0,
            ),
          );
          let ke = 0;
          for (let Ae = 0; Ae < U.length; Ae++)
            U[Ae].type == X && (ke = Ae + 1);
          let Be = U.length - ke,
            Re = G.start + U.length - (ae ? 2 : 0),
            Ve = G.parent;
          for (
            let Ae = G.startIndex, de = G.endIndex, C = !0;
            Ae < de;
            Ae++, C = !1
          )
            !C && (0, v.zy)(_.doc, Re, Be) && (_.split(Re, Be), (Re += 2 * Be)),
              (Re += Ve.child(Ae).nodeSize);
          return _;
        }
        function et(_, G) {
          return function (U, ae) {
            let { $from: X, $to: me, node: ke } = U.selection;
            if ((ke && ke.isBlock) || X.depth < 2 || !X.sameParent(me))
              return !1;
            let Be = X.node(-1);
            if (Be.type != _) return !1;
            if (
              X.parent.content.size == 0 &&
              X.node(-1).childCount == X.indexAfter(-1)
            ) {
              if (
                X.depth == 3 ||
                X.node(-3).type != _ ||
                X.index(-2) != X.node(-2).childCount - 1
              )
                return !1;
              if (ae) {
                let de = se.FK.empty,
                  C = X.index(-1) ? 1 : X.index(-2) ? 2 : 3;
                for (let j = X.depth - C; j >= X.depth - 3; j--)
                  de = se.FK.from(X.node(j).copy(de));
                let z =
                  X.indexAfter(-1) < X.node(-2).childCount
                    ? 1
                    : X.indexAfter(-2) < X.node(-3).childCount
                      ? 2
                      : 3;
                de = de.append(se.FK.from(_.createAndFill()));
                let T = X.before(X.depth - (C - 1)),
                  A = U.tr.replace(T, X.after(-z), new se.Ji(de, 4 - C, 0)),
                  B = -1;
                A.doc.nodesBetween(T, A.doc.content.size, (j, Y) => {
                  if (B > -1) return !1;
                  j.isTextblock && j.content.size == 0 && (B = Y + 1);
                }),
                  B > -1 && A.setSelection(Te.LN.near(A.doc.resolve(B))),
                  ae(A.scrollIntoView());
              }
              return !0;
            }
            let Re =
                me.pos == X.end() ? Be.contentMatchAt(0).defaultType : null,
              Ve = U.tr.delete(X.pos, me.pos),
              Ae = Re
                ? [G ? { type: _, attrs: G } : null, { type: Re }]
                : void 0;
            return (0, v.zy)(Ve.doc, X.pos, 2, Ae)
              ? (ae && ae(Ve.split(X.pos, 2, Ae).scrollIntoView()), !0)
              : !1;
          };
        }
        function ye(_) {
          return function (G, U) {
            let { $from: ae, $to: X } = G.selection,
              me = ae.blockRange(
                X,
                (ke) => ke.childCount > 0 && ke.firstChild.type == _,
              );
            return me
              ? U
                ? ae.node(me.depth - 1).type == _
                  ? K(G, U, _, me)
                  : Q(G, U, me)
                : !0
              : !1;
          };
        }
        function K(_, G, U, ae) {
          let X = _.tr,
            me = ae.end,
            ke = ae.$to.end(ae.depth);
          me < ke &&
            (X.step(
              new v.Wg(
                me - 1,
                ke,
                me,
                ke,
                new se.Ji(se.FK.from(U.create(null, ae.parent.copy())), 1, 0),
                1,
                !0,
              ),
            ),
            (ae = new se.u$(
              X.doc.resolve(ae.$from.pos),
              X.doc.resolve(ke),
              ae.depth,
            )));
          const Be = (0, v.jP)(ae);
          if (Be == null) return !1;
          X.lift(ae, Be);
          let Re = X.mapping.map(me, -1) - 1;
          return (0, v.n9)(X.doc, Re) && X.join(Re), G(X.scrollIntoView()), !0;
        }
        function Q(_, G, U) {
          let ae = _.tr,
            X = U.parent;
          for (let z = U.end, T = U.endIndex - 1, A = U.startIndex; T > A; T--)
            (z -= X.child(T).nodeSize), ae.delete(z - 1, z + 1);
          let me = ae.doc.resolve(U.start),
            ke = me.nodeAfter;
          if (ae.mapping.map(U.end) != U.start + me.nodeAfter.nodeSize)
            return !1;
          let Be = U.startIndex == 0,
            Re = U.endIndex == X.childCount,
            Ve = me.node(-1),
            Ae = me.index(-1);
          if (
            !Ve.canReplace(
              Ae + (Be ? 0 : 1),
              Ae + 1,
              ke.content.append(Re ? se.FK.empty : se.FK.from(X)),
            )
          )
            return !1;
          let de = me.pos,
            C = de + ke.nodeSize;
          return (
            ae.step(
              new v.Wg(
                de - (Be ? 1 : 0),
                C + (Re ? 1 : 0),
                de + 1,
                C - 1,
                new se.Ji(
                  (Be ? se.FK.empty : se.FK.from(X.copy(se.FK.empty))).append(
                    Re ? se.FK.empty : se.FK.from(X.copy(se.FK.empty)),
                  ),
                  Be ? 0 : 1,
                  Re ? 0 : 1,
                ),
                Be ? 0 : 1,
              ),
            ),
            G(ae.scrollIntoView()),
            !0
          );
        }
        function ce(_) {
          return function (G, U) {
            let { $from: ae, $to: X } = G.selection,
              me = ae.blockRange(
                X,
                (Ve) => Ve.childCount > 0 && Ve.firstChild.type == _,
              );
            if (!me) return !1;
            let ke = me.startIndex;
            if (ke == 0) return !1;
            let Be = me.parent,
              Re = Be.child(ke - 1);
            if (Re.type != _) return !1;
            if (U) {
              let Ve = Re.lastChild && Re.lastChild.type == Be.type,
                Ae = se.FK.from(Ve ? _.create() : null),
                de = new se.Ji(
                  se.FK.from(
                    _.create(null, se.FK.from(Be.type.create(null, Ae))),
                  ),
                  Ve ? 3 : 1,
                  0,
                ),
                C = me.start,
                z = me.end;
              U(
                G.tr
                  .step(new v.Wg(C - (Ve ? 3 : 1), z, C, z, de, 1, !0))
                  .scrollIntoView(),
              );
            }
            return !0;
          };
        }
      },
      52893: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          $t: () => me,
          LN: () => ve,
          U3: () => ze,
          hs: () => Ae,
          i5: () => Ne,
          k_: () => Be,
          nh: () => We,
          yn: () => ge,
        });
        var v = Fe(57053),
          se = Fe(63734);
        const Te = Object.create(null);
        class ve {
          constructor(C, z, T) {
            (this.$anchor = C),
              (this.$head = z),
              (this.ranges = T || [new ge(C.min(z), C.max(z))]);
          }
          get anchor() {
            return this.$anchor.pos;
          }
          get head() {
            return this.$head.pos;
          }
          get from() {
            return this.$from.pos;
          }
          get to() {
            return this.$to.pos;
          }
          get $from() {
            return this.ranges[0].$from;
          }
          get $to() {
            return this.ranges[0].$to;
          }
          get empty() {
            let C = this.ranges;
            for (let z = 0; z < C.length; z++)
              if (C[z].$from.pos != C[z].$to.pos) return !1;
            return !0;
          }
          content() {
            return this.$from.doc.slice(this.from, this.to, !0);
          }
          replace(C, z = v.Ji.empty) {
            let T = z.content.lastChild,
              A = null;
            for (let Y = 0; Y < z.openEnd; Y++) (A = T), (T = T.lastChild);
            let B = C.steps.length,
              j = this.ranges;
            for (let Y = 0; Y < j.length; Y++) {
              let { $from: pe, $to: Oe } = j[Y],
                De = C.mapping.slice(B);
              C.replaceRange(
                De.map(pe.pos),
                De.map(Oe.pos),
                Y ? v.Ji.empty : z,
              ),
                Y == 0 &&
                  ye(C, B, (T ? T.isInline : A && A.isTextblock) ? -1 : 1);
            }
          }
          replaceWith(C, z) {
            let T = C.steps.length,
              A = this.ranges;
            for (let B = 0; B < A.length; B++) {
              let { $from: j, $to: Y } = A[B],
                pe = C.mapping.slice(T),
                Oe = pe.map(j.pos),
                De = pe.map(Y.pos);
              B
                ? C.deleteRange(Oe, De)
                : (C.replaceRangeWith(Oe, De, z),
                  ye(C, T, z.isInline ? -1 : 1));
            }
          }
          static findFrom(C, z, T = !1) {
            let A = C.parent.inlineContent
              ? new ze(C)
              : et(C.node(0), C.parent, C.pos, C.index(), z, T);
            if (A) return A;
            for (let B = C.depth - 1; B >= 0; B--) {
              let j =
                z < 0
                  ? et(C.node(0), C.node(B), C.before(B + 1), C.index(B), z, T)
                  : et(
                      C.node(0),
                      C.node(B),
                      C.after(B + 1),
                      C.index(B) + 1,
                      z,
                      T,
                    );
              if (j) return j;
            }
            return null;
          }
          static near(C, z = 1) {
            return (
              this.findFrom(C, z) || this.findFrom(C, -z) || new Ne(C.node(0))
            );
          }
          static atStart(C) {
            return et(C, C, 0, 0, 1) || new Ne(C);
          }
          static atEnd(C) {
            return et(C, C, C.content.size, C.childCount, -1) || new Ne(C);
          }
          static fromJSON(C, z) {
            if (!z || !z.type)
              throw new RangeError("Invalid input for Selection.fromJSON");
            let T = Te[z.type];
            if (!T) throw new RangeError(`No selection type ${z.type} defined`);
            return T.fromJSON(C, z);
          }
          static jsonID(C, z) {
            if (C in Te)
              throw new RangeError("Duplicate use of selection JSON ID " + C);
            return (Te[C] = z), (z.prototype.jsonID = C), z;
          }
          getBookmark() {
            return ze.between(this.$anchor, this.$head).getBookmark();
          }
        }
        ve.prototype.visible = !0;
        class ge {
          constructor(C, z) {
            (this.$from = C), (this.$to = z);
          }
        }
        let Ye = !1;
        function _e(de) {
          !Ye &&
            !de.parent.inlineContent &&
            ((Ye = !0),
            console.warn(
              "TextSelection endpoint not pointing into a node with inline content (" +
                de.parent.type.name +
                ")",
            ));
        }
        class ze extends ve {
          constructor(C, z = C) {
            _e(C), _e(z), super(C, z);
          }
          get $cursor() {
            return this.$anchor.pos == this.$head.pos ? this.$head : null;
          }
          map(C, z) {
            let T = C.resolve(z.map(this.head));
            if (!T.parent.inlineContent) return ve.near(T);
            let A = C.resolve(z.map(this.anchor));
            return new ze(A.parent.inlineContent ? A : T, T);
          }
          replace(C, z = v.Ji.empty) {
            if ((super.replace(C, z), z == v.Ji.empty)) {
              let T = this.$from.marksAcross(this.$to);
              T && C.ensureMarks(T);
            }
          }
          eq(C) {
            return (
              C instanceof ze && C.anchor == this.anchor && C.head == this.head
            );
          }
          getBookmark() {
            return new Me(this.anchor, this.head);
          }
          toJSON() {
            return { type: "text", anchor: this.anchor, head: this.head };
          }
          static fromJSON(C, z) {
            if (typeof z.anchor != "number" || typeof z.head != "number")
              throw new RangeError("Invalid input for TextSelection.fromJSON");
            return new ze(C.resolve(z.anchor), C.resolve(z.head));
          }
          static create(C, z, T = z) {
            let A = C.resolve(z);
            return new this(A, T == z ? A : C.resolve(T));
          }
          static between(C, z, T) {
            let A = C.pos - z.pos;
            if (((!T || A) && (T = A >= 0 ? 1 : -1), !z.parent.inlineContent)) {
              let B = ve.findFrom(z, T, !0) || ve.findFrom(z, -T, !0);
              if (B) z = B.$head;
              else return ve.near(z, T);
            }
            return (
              C.parent.inlineContent ||
                (A == 0
                  ? (C = z)
                  : ((C = (ve.findFrom(C, -T, !0) || ve.findFrom(C, T, !0))
                      .$anchor),
                    C.pos < z.pos != A < 0 && (C = z))),
              new ze(C, z)
            );
          }
        }
        ve.jsonID("text", ze);
        class Me {
          constructor(C, z) {
            (this.anchor = C), (this.head = z);
          }
          map(C) {
            return new Me(C.map(this.anchor), C.map(this.head));
          }
          resolve(C) {
            return ze.between(C.resolve(this.anchor), C.resolve(this.head));
          }
        }
        class We extends ve {
          constructor(C) {
            let z = C.nodeAfter,
              T = C.node(0).resolve(C.pos + z.nodeSize);
            super(C, T), (this.node = z);
          }
          map(C, z) {
            let { deleted: T, pos: A } = z.mapResult(this.anchor),
              B = C.resolve(A);
            return T ? ve.near(B) : new We(B);
          }
          content() {
            return new v.Ji(v.FK.from(this.node), 0, 0);
          }
          eq(C) {
            return C instanceof We && C.anchor == this.anchor;
          }
          toJSON() {
            return { type: "node", anchor: this.anchor };
          }
          getBookmark() {
            return new Je(this.anchor);
          }
          static fromJSON(C, z) {
            if (typeof z.anchor != "number")
              throw new RangeError("Invalid input for NodeSelection.fromJSON");
            return new We(C.resolve(z.anchor));
          }
          static create(C, z) {
            return new We(C.resolve(z));
          }
          static isSelectable(C) {
            return !C.isText && C.type.spec.selectable !== !1;
          }
        }
        (We.prototype.visible = !1), ve.jsonID("node", We);
        class Je {
          constructor(C) {
            this.anchor = C;
          }
          map(C) {
            let { deleted: z, pos: T } = C.mapResult(this.anchor);
            return z ? new Me(T, T) : new Je(T);
          }
          resolve(C) {
            let z = C.resolve(this.anchor),
              T = z.nodeAfter;
            return T && We.isSelectable(T) ? new We(z) : ve.near(z);
          }
        }
        class Ne extends ve {
          constructor(C) {
            super(C.resolve(0), C.resolve(C.content.size));
          }
          replace(C, z = v.Ji.empty) {
            if (z == v.Ji.empty) {
              C.delete(0, C.doc.content.size);
              let T = ve.atStart(C.doc);
              T.eq(C.selection) || C.setSelection(T);
            } else super.replace(C, z);
          }
          toJSON() {
            return { type: "all" };
          }
          static fromJSON(C) {
            return new Ne(C);
          }
          map(C) {
            return new Ne(C);
          }
          eq(C) {
            return C instanceof Ne;
          }
          getBookmark() {
            return Ge;
          }
        }
        ve.jsonID("all", Ne);
        const Ge = {
          map() {
            return this;
          },
          resolve(de) {
            return new Ne(de);
          },
        };
        function et(de, C, z, T, A, B = !1) {
          if (C.inlineContent) return ze.create(de, z);
          for (
            let j = T - (A > 0 ? 0 : 1);
            A > 0 ? j < C.childCount : j >= 0;
            j += A
          ) {
            let Y = C.child(j);
            if (Y.isAtom) {
              if (!B && We.isSelectable(Y))
                return We.create(de, z - (A < 0 ? Y.nodeSize : 0));
            } else {
              let pe = et(de, Y, z + A, A < 0 ? Y.childCount : 0, A, B);
              if (pe) return pe;
            }
            z += Y.nodeSize * A;
          }
          return null;
        }
        function ye(de, C, z) {
          let T = de.steps.length - 1;
          if (T < C) return;
          let A = de.steps[T];
          if (!(A instanceof se.Ln || A instanceof se.Wg)) return;
          let B = de.mapping.maps[T],
            j;
          B.forEach((Y, pe, Oe, De) => {
            j == null && (j = De);
          }),
            de.setSelection(ve.near(de.doc.resolve(j), z));
        }
        const K = 1,
          Q = 2,
          ce = 4;
        class _ extends se.dL {
          constructor(C) {
            super(C.doc),
              (this.curSelectionFor = 0),
              (this.updated = 0),
              (this.meta = Object.create(null)),
              (this.time = Date.now()),
              (this.curSelection = C.selection),
              (this.storedMarks = C.storedMarks);
          }
          get selection() {
            return (
              this.curSelectionFor < this.steps.length &&
                ((this.curSelection = this.curSelection.map(
                  this.doc,
                  this.mapping.slice(this.curSelectionFor),
                )),
                (this.curSelectionFor = this.steps.length)),
              this.curSelection
            );
          }
          setSelection(C) {
            if (C.$from.doc != this.doc)
              throw new RangeError(
                "Selection passed to setSelection must point at the current document",
              );
            return (
              (this.curSelection = C),
              (this.curSelectionFor = this.steps.length),
              (this.updated = (this.updated | K) & ~Q),
              (this.storedMarks = null),
              this
            );
          }
          get selectionSet() {
            return (this.updated & K) > 0;
          }
          setStoredMarks(C) {
            return (this.storedMarks = C), (this.updated |= Q), this;
          }
          ensureMarks(C) {
            return (
              v.CU.sameSet(
                this.storedMarks || this.selection.$from.marks(),
                C,
              ) || this.setStoredMarks(C),
              this
            );
          }
          addStoredMark(C) {
            return this.ensureMarks(
              C.addToSet(this.storedMarks || this.selection.$head.marks()),
            );
          }
          removeStoredMark(C) {
            return this.ensureMarks(
              C.removeFromSet(this.storedMarks || this.selection.$head.marks()),
            );
          }
          get storedMarksSet() {
            return (this.updated & Q) > 0;
          }
          addStep(C, z) {
            super.addStep(C, z),
              (this.updated = this.updated & ~Q),
              (this.storedMarks = null);
          }
          setTime(C) {
            return (this.time = C), this;
          }
          replaceSelection(C) {
            return this.selection.replace(this, C), this;
          }
          replaceSelectionWith(C, z = !0) {
            let T = this.selection;
            return (
              z &&
                (C = C.mark(
                  this.storedMarks ||
                    (T.empty
                      ? T.$from.marks()
                      : T.$from.marksAcross(T.$to) || v.CU.none),
                )),
              T.replaceWith(this, C),
              this
            );
          }
          deleteSelection() {
            return this.selection.replace(this), this;
          }
          insertText(C, z, T) {
            let A = this.doc.type.schema;
            if (z == null)
              return C
                ? this.replaceSelectionWith(A.text(C), !0)
                : this.deleteSelection();
            {
              if ((T == null && (T = z), (T = T ?? z), !C))
                return this.deleteRange(z, T);
              let B = this.storedMarks;
              if (!B) {
                let j = this.doc.resolve(z);
                B = T == z ? j.marks() : j.marksAcross(this.doc.resolve(T));
              }
              return (
                this.replaceRangeWith(z, T, A.text(C, B)),
                this.selection.empty ||
                  this.setSelection(ve.near(this.selection.$to)),
                this
              );
            }
          }
          setMeta(C, z) {
            return (this.meta[typeof C == "string" ? C : C.key] = z), this;
          }
          getMeta(C) {
            return this.meta[typeof C == "string" ? C : C.key];
          }
          get isGeneric() {
            for (let C in this.meta) return !1;
            return !0;
          }
          scrollIntoView() {
            return (this.updated |= ce), this;
          }
          get scrolledIntoView() {
            return (this.updated & ce) > 0;
          }
        }
        function G(de, C) {
          return !C || !de ? de : de.bind(C);
        }
        class U {
          constructor(C, z, T) {
            (this.name = C),
              (this.init = G(z.init, T)),
              (this.apply = G(z.apply, T));
          }
        }
        const ae = [
          new U("doc", {
            init(de) {
              return de.doc || de.schema.topNodeType.createAndFill();
            },
            apply(de) {
              return de.doc;
            },
          }),
          new U("selection", {
            init(de, C) {
              return de.selection || ve.atStart(C.doc);
            },
            apply(de) {
              return de.selection;
            },
          }),
          new U("storedMarks", {
            init(de) {
              return de.storedMarks || null;
            },
            apply(de, C, z, T) {
              return T.selection.$cursor ? de.storedMarks : null;
            },
          }),
          new U("scrollToSelection", {
            init() {
              return 0;
            },
            apply(de, C) {
              return de.scrolledIntoView ? C + 1 : C;
            },
          }),
        ];
        class X {
          constructor(C, z) {
            (this.schema = C),
              (this.plugins = []),
              (this.pluginsByKey = Object.create(null)),
              (this.fields = ae.slice()),
              z &&
                z.forEach((T) => {
                  if (this.pluginsByKey[T.key])
                    throw new RangeError(
                      "Adding different instances of a keyed plugin (" +
                        T.key +
                        ")",
                    );
                  this.plugins.push(T),
                    (this.pluginsByKey[T.key] = T),
                    T.spec.state &&
                      this.fields.push(new U(T.key, T.spec.state, T));
                });
          }
        }
        class me {
          constructor(C) {
            this.config = C;
          }
          get schema() {
            return this.config.schema;
          }
          get plugins() {
            return this.config.plugins;
          }
          apply(C) {
            return this.applyTransaction(C).state;
          }
          filterTransaction(C, z = -1) {
            for (let T = 0; T < this.config.plugins.length; T++)
              if (T != z) {
                let A = this.config.plugins[T];
                if (
                  A.spec.filterTransaction &&
                  !A.spec.filterTransaction.call(A, C, this)
                )
                  return !1;
              }
            return !0;
          }
          applyTransaction(C) {
            if (!this.filterTransaction(C))
              return { state: this, transactions: [] };
            let z = [C],
              T = this.applyInner(C),
              A = null;
            for (;;) {
              let B = !1;
              for (let j = 0; j < this.config.plugins.length; j++) {
                let Y = this.config.plugins[j];
                if (Y.spec.appendTransaction) {
                  let pe = A ? A[j].n : 0,
                    Oe = A ? A[j].state : this,
                    De =
                      pe < z.length &&
                      Y.spec.appendTransaction.call(
                        Y,
                        pe ? z.slice(pe) : z,
                        Oe,
                        T,
                      );
                  if (De && T.filterTransaction(De, j)) {
                    if ((De.setMeta("appendedTransaction", C), !A)) {
                      A = [];
                      for (let Le = 0; Le < this.config.plugins.length; Le++)
                        A.push(
                          Le < j
                            ? { state: T, n: z.length }
                            : { state: this, n: 0 },
                        );
                    }
                    z.push(De), (T = T.applyInner(De)), (B = !0);
                  }
                  A && (A[j] = { state: T, n: z.length });
                }
              }
              if (!B) return { state: T, transactions: z };
            }
          }
          applyInner(C) {
            if (!C.before.eq(this.doc))
              throw new RangeError("Applying a mismatched transaction");
            let z = new me(this.config),
              T = this.config.fields;
            for (let A = 0; A < T.length; A++) {
              let B = T[A];
              z[B.name] = B.apply(C, this[B.name], this, z);
            }
            return z;
          }
          get tr() {
            return new _(this);
          }
          static create(C) {
            let z = new X(C.doc ? C.doc.type.schema : C.schema, C.plugins),
              T = new me(z);
            for (let A = 0; A < z.fields.length; A++)
              T[z.fields[A].name] = z.fields[A].init(C, T);
            return T;
          }
          reconfigure(C) {
            let z = new X(this.schema, C.plugins),
              T = z.fields,
              A = new me(z);
            for (let B = 0; B < T.length; B++) {
              let j = T[B].name;
              A[j] = this.hasOwnProperty(j) ? this[j] : T[B].init(C, A);
            }
            return A;
          }
          toJSON(C) {
            let z = {
              doc: this.doc.toJSON(),
              selection: this.selection.toJSON(),
            };
            if (
              (this.storedMarks &&
                (z.storedMarks = this.storedMarks.map((T) => T.toJSON())),
              C && typeof C == "object")
            )
              for (let T in C) {
                if (T == "doc" || T == "selection")
                  throw new RangeError(
                    "The JSON fields `doc` and `selection` are reserved",
                  );
                let A = C[T],
                  B = A.spec.state;
                B && B.toJSON && (z[T] = B.toJSON.call(A, this[A.key]));
              }
            return z;
          }
          static fromJSON(C, z, T) {
            if (!z)
              throw new RangeError("Invalid input for EditorState.fromJSON");
            if (!C.schema)
              throw new RangeError("Required config field 'schema' missing");
            let A = new X(C.schema, C.plugins),
              B = new me(A);
            return (
              A.fields.forEach((j) => {
                if (j.name == "doc") B.doc = v.bP.fromJSON(C.schema, z.doc);
                else if (j.name == "selection")
                  B.selection = ve.fromJSON(B.doc, z.selection);
                else if (j.name == "storedMarks")
                  z.storedMarks &&
                    (B.storedMarks = z.storedMarks.map(C.schema.markFromJSON));
                else {
                  if (T)
                    for (let Y in T) {
                      let pe = T[Y],
                        Oe = pe.spec.state;
                      if (
                        pe.key == j.name &&
                        Oe &&
                        Oe.fromJSON &&
                        Object.prototype.hasOwnProperty.call(z, Y)
                      ) {
                        B[j.name] = Oe.fromJSON.call(pe, C, z[Y], B);
                        return;
                      }
                    }
                  B[j.name] = j.init(C, B);
                }
              }),
              B
            );
          }
        }
        function ke(de, C, z) {
          for (let T in de) {
            let A = de[T];
            A instanceof Function
              ? (A = A.bind(C))
              : T == "handleDOMEvents" && (A = ke(A, C, {})),
              (z[T] = A);
          }
          return z;
        }
        class Be {
          constructor(C) {
            (this.spec = C),
              (this.props = {}),
              C.props && ke(C.props, this, this.props),
              (this.key = C.key ? C.key.key : Ve("plugin"));
          }
          getState(C) {
            return C[this.key];
          }
        }
        const Re = Object.create(null);
        function Ve(de) {
          return de in Re ? de + "$" + ++Re[de] : ((Re[de] = 0), de + "$");
        }
        class Ae {
          constructor(C = "key") {
            this.key = Ve(C);
          }
          get(C) {
            return C.config.pluginsByKey[this.key];
          }
          getState(C) {
            return C[this.key];
          }
        }
      },
      38539: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { AL: () => nn, LF: () => an, Qg: () => Nt, of: () => ye });
        var v = Fe(52893),
          se = Fe(57053),
          Te = Fe(29287),
          ve = Fe(7502),
          ge = Fe(63734),
          Ye,
          _e;
        if (typeof WeakMap < "u") {
          let d = new WeakMap();
          (Ye = (f) => d.get(f)), (_e = (f, g) => (d.set(f, g), g));
        } else {
          const d = [];
          let g = 0;
          (Ye = (y) => {
            for (let x = 0; x < d.length; x += 2)
              if (d[x] == y) return d[x + 1];
          }),
            (_e = (y, x) => (g == 10 && (g = 0), (d[g++] = y), (d[g++] = x)));
        }
        var ze = class {
          constructor(d, f, g, y) {
            (this.width = d),
              (this.height = f),
              (this.map = g),
              (this.problems = y);
          }
          findCell(d) {
            for (let f = 0; f < this.map.length; f++) {
              const g = this.map[f];
              if (g != d) continue;
              const y = f % this.width,
                x = (f / this.width) | 0;
              let O = y + 1,
                E = x + 1;
              for (let F = 1; O < this.width && this.map[f + F] == g; F++) O++;
              for (
                let F = 1;
                E < this.height && this.map[f + this.width * F] == g;
                F++
              )
                E++;
              return { left: y, top: x, right: O, bottom: E };
            }
            throw new RangeError(`No cell with offset ${d} found`);
          }
          colCount(d) {
            for (let f = 0; f < this.map.length; f++)
              if (this.map[f] == d) return f % this.width;
            throw new RangeError(`No cell with offset ${d} found`);
          }
          nextCell(d, f, g) {
            const { left: y, right: x, top: O, bottom: E } = this.findCell(d);
            return f == "horiz"
              ? (g < 0 ? y == 0 : x == this.width)
                ? null
                : this.map[O * this.width + (g < 0 ? y - 1 : x)]
              : (g < 0 ? O == 0 : E == this.height)
                ? null
                : this.map[y + this.width * (g < 0 ? O - 1 : E)];
          }
          rectBetween(d, f) {
            const { left: g, right: y, top: x, bottom: O } = this.findCell(d),
              { left: E, right: F, top: I, bottom: V } = this.findCell(f);
            return {
              left: Math.min(g, E),
              top: Math.min(x, I),
              right: Math.max(y, F),
              bottom: Math.max(O, V),
            };
          }
          cellsInRect(d) {
            const f = [],
              g = {};
            for (let y = d.top; y < d.bottom; y++)
              for (let x = d.left; x < d.right; x++) {
                const O = y * this.width + x,
                  E = this.map[O];
                g[E] ||
                  ((g[E] = !0),
                  !(
                    (x == d.left && x && this.map[O - 1] == E) ||
                    (y == d.top && y && this.map[O - this.width] == E)
                  ) && f.push(E));
              }
            return f;
          }
          positionAt(d, f, g) {
            for (let y = 0, x = 0; ; y++) {
              const O = x + g.child(y).nodeSize;
              if (y == d) {
                let E = f + d * this.width;
                const F = (d + 1) * this.width;
                for (; E < F && this.map[E] < x; ) E++;
                return E == F ? O - 1 : this.map[E];
              }
              x = O;
            }
          }
          static get(d) {
            return Ye(d) || _e(d, Me(d));
          }
        };
        function Me(d) {
          if (d.type.spec.tableRole != "table")
            throw new RangeError("Not a table node: " + d.type.name);
          const f = We(d),
            g = d.childCount,
            y = [];
          let x = 0,
            O = null;
          const E = [];
          for (let V = 0, Z = f * g; V < Z; V++) y[V] = 0;
          for (let V = 0, Z = 0; V < g; V++) {
            const ee = d.child(V);
            Z++;
            for (let Ee = 0; ; Ee++) {
              for (; x < y.length && y[x] != 0; ) x++;
              if (Ee == ee.childCount) break;
              const Xe = ee.child(Ee),
                { colspan: lt, rowspan: ut, colwidth: Rt } = Xe.attrs;
              for (let Lt = 0; Lt < ut; Lt++) {
                if (Lt + V >= g) {
                  (O || (O = [])).push({
                    type: "overlong_rowspan",
                    pos: Z,
                    n: ut - Lt,
                  });
                  break;
                }
                const Gt = x + Lt * f;
                for (let Et = 0; Et < lt; Et++) {
                  y[Gt + Et] == 0
                    ? (y[Gt + Et] = Z)
                    : (O || (O = [])).push({
                        type: "collision",
                        row: V,
                        pos: Z,
                        n: lt - Et,
                      });
                  const Vt = Rt && Rt[Et];
                  if (Vt) {
                    const It = ((Gt + Et) % f) * 2,
                      $t = E[It];
                    $t == null || ($t != Vt && E[It + 1] == 1)
                      ? ((E[It] = Vt), (E[It + 1] = 1))
                      : $t == Vt && E[It + 1]++;
                  }
                }
              }
              (x += lt), (Z += Xe.nodeSize);
            }
            const he = (V + 1) * f;
            let xe = 0;
            for (; x < he; ) y[x++] == 0 && xe++;
            xe && (O || (O = [])).push({ type: "missing", row: V, n: xe }), Z++;
          }
          const F = new ze(f, g, y, O);
          let I = !1;
          for (let V = 0; !I && V < E.length; V += 2)
            E[V] != null && E[V + 1] < g && (I = !0);
          return I && Je(F, E, d), F;
        }
        function We(d) {
          let f = -1,
            g = !1;
          for (let y = 0; y < d.childCount; y++) {
            const x = d.child(y);
            let O = 0;
            if (g)
              for (let E = 0; E < y; E++) {
                const F = d.child(E);
                for (let I = 0; I < F.childCount; I++) {
                  const V = F.child(I);
                  E + V.attrs.rowspan > y && (O += V.attrs.colspan);
                }
              }
            for (let E = 0; E < x.childCount; E++) {
              const F = x.child(E);
              (O += F.attrs.colspan), F.attrs.rowspan > 1 && (g = !0);
            }
            f == -1 ? (f = O) : f != O && (f = Math.max(f, O));
          }
          return f;
        }
        function Je(d, f, g) {
          d.problems || (d.problems = []);
          const y = {};
          for (let x = 0; x < d.map.length; x++) {
            const O = d.map[x];
            if (y[O]) continue;
            y[O] = !0;
            const E = g.nodeAt(O);
            if (!E) throw new RangeError(`No cell with offset ${O} found`);
            let F = null;
            const I = E.attrs;
            for (let V = 0; V < I.colspan; V++) {
              const Z = (x + V) % d.width,
                ee = f[Z * 2];
              ee != null &&
                (!I.colwidth || I.colwidth[V] != ee) &&
                ((F || (F = Ne(I)))[V] = ee);
            }
            F &&
              d.problems.unshift({
                type: "colwidth mismatch",
                pos: O,
                colwidth: F,
              });
          }
        }
        function Ne(d) {
          if (d.colwidth) return d.colwidth.slice();
          const f = [];
          for (let g = 0; g < d.colspan; g++) f.push(0);
          return f;
        }
        function Ge(d, f) {
          if (typeof d == "string") return {};
          const g = d.getAttribute("data-colwidth"),
            y =
              g && /^\d+(,\d+)*$/.test(g)
                ? g.split(",").map((E) => Number(E))
                : null,
            x = Number(d.getAttribute("colspan") || 1),
            O = {
              colspan: x,
              rowspan: Number(d.getAttribute("rowspan") || 1),
              colwidth: y && y.length == x ? y : null,
            };
          for (const E in f) {
            const F = f[E].getFromDOM,
              I = F && F(d);
            I != null && (O[E] = I);
          }
          return O;
        }
        function et(d, f) {
          const g = {};
          d.attrs.colspan != 1 && (g.colspan = d.attrs.colspan),
            d.attrs.rowspan != 1 && (g.rowspan = d.attrs.rowspan),
            d.attrs.colwidth &&
              (g["data-colwidth"] = d.attrs.colwidth.join(","));
          for (const y in f) {
            const x = f[y].setDOMAttr;
            x && x(d.attrs[y], g);
          }
          return g;
        }
        function ye(d) {
          const f = d.cellAttributes || {},
            g = {
              colspan: { default: 1 },
              rowspan: { default: 1 },
              colwidth: { default: null },
            };
          for (const y in f) g[y] = { default: f[y].default };
          return {
            table: {
              content: "table_row+",
              tableRole: "table",
              isolating: !0,
              group: d.tableGroup,
              parseDOM: [{ tag: "table" }],
              toDOM() {
                return ["table", ["tbody", 0]];
              },
            },
            table_row: {
              content: "(table_cell | table_header)*",
              tableRole: "row",
              parseDOM: [{ tag: "tr" }],
              toDOM() {
                return ["tr", 0];
              },
            },
            table_cell: {
              content: d.cellContent,
              attrs: g,
              tableRole: "cell",
              isolating: !0,
              parseDOM: [{ tag: "td", getAttrs: (y) => Ge(y, f) }],
              toDOM(y) {
                return ["td", et(y, f), 0];
              },
            },
            table_header: {
              content: d.cellContent,
              attrs: g,
              tableRole: "header_cell",
              isolating: !0,
              parseDOM: [{ tag: "th", getAttrs: (y) => Ge(y, f) }],
              toDOM(y) {
                return ["th", et(y, f), 0];
              },
            },
          };
        }
        function K(d) {
          let f = d.cached.tableNodeTypes;
          if (!f) {
            f = d.cached.tableNodeTypes = {};
            for (const g in d.nodes) {
              const y = d.nodes[g],
                x = y.spec.tableRole;
              x && (f[x] = y);
            }
          }
          return f;
        }
        var Q = new v.hs("selectingCells");
        function ce(d) {
          for (let f = d.depth - 1; f > 0; f--)
            if (d.node(f).type.spec.tableRole == "row")
              return d.node(0).resolve(d.before(f + 1));
          return null;
        }
        function _(d) {
          for (let f = d.depth; f > 0; f--) {
            const g = d.node(f).type.spec.tableRole;
            if (g === "cell" || g === "header_cell") return d.node(f);
          }
          return null;
        }
        function G(d) {
          const f = d.selection.$head;
          for (let g = f.depth; g > 0; g--)
            if (f.node(g).type.spec.tableRole == "row") return !0;
          return !1;
        }
        function U(d) {
          const f = d.selection;
          if ("$anchorCell" in f && f.$anchorCell)
            return f.$anchorCell.pos > f.$headCell.pos
              ? f.$anchorCell
              : f.$headCell;
          if ("node" in f && f.node && f.node.type.spec.tableRole == "cell")
            return f.$anchor;
          const g = ce(f.$head) || ae(f.$head);
          if (g) return g;
          throw new RangeError(`No cell found around position ${f.head}`);
        }
        function ae(d) {
          for (let f = d.nodeAfter, g = d.pos; f; f = f.firstChild, g++) {
            const y = f.type.spec.tableRole;
            if (y == "cell" || y == "header_cell") return d.doc.resolve(g);
          }
          for (let f = d.nodeBefore, g = d.pos; f; f = f.lastChild, g--) {
            const y = f.type.spec.tableRole;
            if (y == "cell" || y == "header_cell")
              return d.doc.resolve(g - f.nodeSize);
          }
        }
        function X(d) {
          return d.parent.type.spec.tableRole == "row" && !!d.nodeAfter;
        }
        function me(d) {
          return d.node(0).resolve(d.pos + d.nodeAfter.nodeSize);
        }
        function ke(d, f) {
          return (
            d.depth == f.depth && d.pos >= f.start(-1) && d.pos <= f.end(-1)
          );
        }
        function Be(d) {
          return ze.get(d.node(-1)).findCell(d.pos - d.start(-1));
        }
        function Re(d) {
          return ze.get(d.node(-1)).colCount(d.pos - d.start(-1));
        }
        function Ve(d, f, g) {
          const y = d.node(-1),
            x = ze.get(y),
            O = d.start(-1),
            E = x.nextCell(d.pos - O, f, g);
          return E == null ? null : d.node(0).resolve(O + E);
        }
        function Ae(d, f, g = 1) {
          const y = { ...d, colspan: d.colspan - g };
          return (
            y.colwidth &&
              ((y.colwidth = y.colwidth.slice()),
              y.colwidth.splice(f, g),
              y.colwidth.some((x) => x > 0) || (y.colwidth = null)),
            y
          );
        }
        function de(d, f, g = 1) {
          const y = { ...d, colspan: d.colspan + g };
          if (y.colwidth) {
            y.colwidth = y.colwidth.slice();
            for (let x = 0; x < g; x++) y.colwidth.splice(f, 0, 0);
          }
          return y;
        }
        function C(d, f, g) {
          const y = K(f.type.schema).header_cell;
          for (let x = 0; x < d.height; x++)
            if (f.nodeAt(d.map[g + x * d.width]).type != y) return !1;
          return !0;
        }
        var z = class At extends v.LN {
          constructor(f, g = f) {
            const y = f.node(-1),
              x = ze.get(y),
              O = f.start(-1),
              E = x.rectBetween(f.pos - O, g.pos - O),
              F = f.node(0),
              I = x.cellsInRect(E).filter((Z) => Z != g.pos - O);
            I.unshift(g.pos - O);
            const V = I.map((Z) => {
              const ee = y.nodeAt(Z);
              if (!ee) throw RangeError(`No cell with offset ${Z} found`);
              const he = O + Z + 1;
              return new v.yn(F.resolve(he), F.resolve(he + ee.content.size));
            });
            super(V[0].$from, V[0].$to, V),
              (this.$anchorCell = f),
              (this.$headCell = g);
          }
          map(f, g) {
            const y = f.resolve(g.map(this.$anchorCell.pos)),
              x = f.resolve(g.map(this.$headCell.pos));
            if (X(y) && X(x) && ke(y, x)) {
              const O = this.$anchorCell.node(-1) != y.node(-1);
              return O && this.isRowSelection()
                ? At.rowSelection(y, x)
                : O && this.isColSelection()
                  ? At.colSelection(y, x)
                  : new At(y, x);
            }
            return v.U3.between(y, x);
          }
          content() {
            const f = this.$anchorCell.node(-1),
              g = ze.get(f),
              y = this.$anchorCell.start(-1),
              x = g.rectBetween(
                this.$anchorCell.pos - y,
                this.$headCell.pos - y,
              ),
              O = {},
              E = [];
            for (let I = x.top; I < x.bottom; I++) {
              const V = [];
              for (
                let Z = I * g.width + x.left, ee = x.left;
                ee < x.right;
                ee++, Z++
              ) {
                const he = g.map[Z];
                if (O[he]) continue;
                O[he] = !0;
                const xe = g.findCell(he);
                let Ee = f.nodeAt(he);
                if (!Ee) throw RangeError(`No cell with offset ${he} found`);
                const Xe = x.left - xe.left,
                  lt = xe.right - x.right;
                if (Xe > 0 || lt > 0) {
                  let ut = Ee.attrs;
                  if (
                    (Xe > 0 && (ut = Ae(ut, 0, Xe)),
                    lt > 0 && (ut = Ae(ut, ut.colspan - lt, lt)),
                    xe.left < x.left)
                  ) {
                    if (((Ee = Ee.type.createAndFill(ut)), !Ee))
                      throw RangeError(
                        `Could not create cell with attrs ${JSON.stringify(ut)}`,
                      );
                  } else Ee = Ee.type.create(ut, Ee.content);
                }
                if (xe.top < x.top || xe.bottom > x.bottom) {
                  const ut = {
                    ...Ee.attrs,
                    rowspan:
                      Math.min(xe.bottom, x.bottom) - Math.max(xe.top, x.top),
                  };
                  xe.top < x.top
                    ? (Ee = Ee.type.createAndFill(ut))
                    : (Ee = Ee.type.create(ut, Ee.content));
                }
                V.push(Ee);
              }
              E.push(f.child(I).copy(se.FK.from(V)));
            }
            const F = this.isColSelection() && this.isRowSelection() ? f : E;
            return new se.Ji(se.FK.from(F), 1, 1);
          }
          replace(f, g = se.Ji.empty) {
            const y = f.steps.length,
              x = this.ranges;
            for (let E = 0; E < x.length; E++) {
              const { $from: F, $to: I } = x[E],
                V = f.mapping.slice(y);
              f.replace(V.map(F.pos), V.map(I.pos), E ? se.Ji.empty : g);
            }
            const O = v.LN.findFrom(
              f.doc.resolve(f.mapping.slice(y).map(this.to)),
              -1,
            );
            O && f.setSelection(O);
          }
          replaceWith(f, g) {
            this.replace(f, new se.Ji(se.FK.from(g), 0, 0));
          }
          forEachCell(f) {
            const g = this.$anchorCell.node(-1),
              y = ze.get(g),
              x = this.$anchorCell.start(-1),
              O = y.cellsInRect(
                y.rectBetween(this.$anchorCell.pos - x, this.$headCell.pos - x),
              );
            for (let E = 0; E < O.length; E++) f(g.nodeAt(O[E]), x + O[E]);
          }
          isColSelection() {
            const f = this.$anchorCell.index(-1),
              g = this.$headCell.index(-1);
            if (Math.min(f, g) > 0) return !1;
            const y = f + this.$anchorCell.nodeAfter.attrs.rowspan,
              x = g + this.$headCell.nodeAfter.attrs.rowspan;
            return Math.max(y, x) == this.$headCell.node(-1).childCount;
          }
          static colSelection(f, g = f) {
            const y = f.node(-1),
              x = ze.get(y),
              O = f.start(-1),
              E = x.findCell(f.pos - O),
              F = x.findCell(g.pos - O),
              I = f.node(0);
            return (
              E.top <= F.top
                ? (E.top > 0 && (f = I.resolve(O + x.map[E.left])),
                  F.bottom < x.height &&
                    (g = I.resolve(
                      O + x.map[x.width * (x.height - 1) + F.right - 1],
                    )))
                : (F.top > 0 && (g = I.resolve(O + x.map[F.left])),
                  E.bottom < x.height &&
                    (f = I.resolve(
                      O + x.map[x.width * (x.height - 1) + E.right - 1],
                    ))),
              new At(f, g)
            );
          }
          isRowSelection() {
            const f = this.$anchorCell.node(-1),
              g = ze.get(f),
              y = this.$anchorCell.start(-1),
              x = g.colCount(this.$anchorCell.pos - y),
              O = g.colCount(this.$headCell.pos - y);
            if (Math.min(x, O) > 0) return !1;
            const E = x + this.$anchorCell.nodeAfter.attrs.colspan,
              F = O + this.$headCell.nodeAfter.attrs.colspan;
            return Math.max(E, F) == g.width;
          }
          eq(f) {
            return (
              f instanceof At &&
              f.$anchorCell.pos == this.$anchorCell.pos &&
              f.$headCell.pos == this.$headCell.pos
            );
          }
          static rowSelection(f, g = f) {
            const y = f.node(-1),
              x = ze.get(y),
              O = f.start(-1),
              E = x.findCell(f.pos - O),
              F = x.findCell(g.pos - O),
              I = f.node(0);
            return (
              E.left <= F.left
                ? (E.left > 0 && (f = I.resolve(O + x.map[E.top * x.width])),
                  F.right < x.width &&
                    (g = I.resolve(O + x.map[x.width * (F.top + 1) - 1])))
                : (F.left > 0 && (g = I.resolve(O + x.map[F.top * x.width])),
                  E.right < x.width &&
                    (f = I.resolve(O + x.map[x.width * (E.top + 1) - 1]))),
              new At(f, g)
            );
          }
          toJSON() {
            return {
              type: "cell",
              anchor: this.$anchorCell.pos,
              head: this.$headCell.pos,
            };
          }
          static fromJSON(f, g) {
            return new At(f.resolve(g.anchor), f.resolve(g.head));
          }
          static create(f, g, y = g) {
            return new At(f.resolve(g), f.resolve(y));
          }
          getBookmark() {
            return new T(this.$anchorCell.pos, this.$headCell.pos);
          }
        };
        (z.prototype.visible = !1), v.LN.jsonID("cell", z);
        var T = class lr {
          constructor(f, g) {
            (this.anchor = f), (this.head = g);
          }
          map(f) {
            return new lr(f.map(this.anchor), f.map(this.head));
          }
          resolve(f) {
            const g = f.resolve(this.anchor),
              y = f.resolve(this.head);
            return g.parent.type.spec.tableRole == "row" &&
              y.parent.type.spec.tableRole == "row" &&
              g.index() < g.parent.childCount &&
              y.index() < y.parent.childCount &&
              ke(g, y)
              ? new z(g, y)
              : v.LN.near(y, 1);
          }
        };
        function A(d) {
          if (!(d.selection instanceof z)) return null;
          const f = [];
          return (
            d.selection.forEachCell((g, y) => {
              f.push(Te.NZ.node(y, y + g.nodeSize, { class: "selectedCell" }));
            }),
            Te.zF.create(d.doc, f)
          );
        }
        function B({ $from: d, $to: f }) {
          if (d.pos == f.pos || d.pos < f.pos - 6) return !1;
          let g = d.pos,
            y = f.pos,
            x = d.depth;
          for (; x >= 0 && !(d.after(x + 1) < d.end(x)); x--, g++);
          for (
            let O = f.depth;
            O >= 0 && !(f.before(O + 1) > f.start(O));
            O--, y--
          );
          return g == y && /row|table/.test(d.node(x).type.spec.tableRole);
        }
        function j({ $from: d, $to: f }) {
          let g, y;
          for (let x = d.depth; x > 0; x--) {
            const O = d.node(x);
            if (
              O.type.spec.tableRole === "cell" ||
              O.type.spec.tableRole === "header_cell"
            ) {
              g = O;
              break;
            }
          }
          for (let x = f.depth; x > 0; x--) {
            const O = f.node(x);
            if (
              O.type.spec.tableRole === "cell" ||
              O.type.spec.tableRole === "header_cell"
            ) {
              y = O;
              break;
            }
          }
          return g !== y && f.parentOffset === 0;
        }
        function Y(d, f, g) {
          const y = (f || d).selection,
            x = (f || d).doc;
          let O, E;
          if (y instanceof v.nh && (E = y.node.type.spec.tableRole)) {
            if (E == "cell" || E == "header_cell") O = z.create(x, y.from);
            else if (E == "row") {
              const F = x.resolve(y.from + 1);
              O = z.rowSelection(F, F);
            } else if (!g) {
              const F = ze.get(y.node),
                I = y.from + 1,
                V = I + F.map[F.width * F.height - 1];
              O = z.create(x, I + 1, V);
            }
          } else
            y instanceof v.U3 && B(y)
              ? (O = v.U3.create(x, y.from))
              : y instanceof v.U3 &&
                j(y) &&
                (O = v.U3.create(x, y.$from.start(), y.$from.end()));
          return O && (f || (f = d.tr)).setSelection(O), f;
        }
        var pe = new v.hs("fix-tables");
        function Oe(d, f, g, y) {
          const x = d.childCount,
            O = f.childCount;
          e: for (let E = 0, F = 0; E < O; E++) {
            const I = f.child(E);
            for (let V = F, Z = Math.min(x, E + 3); V < Z; V++)
              if (d.child(V) == I) {
                (F = V + 1), (g += I.nodeSize);
                continue e;
              }
            y(I, g),
              F < x && d.child(F).sameMarkup(I)
                ? Oe(d.child(F), I, g + 1, y)
                : I.nodesBetween(0, I.content.size, y, g + 1),
              (g += I.nodeSize);
          }
        }
        function De(d, f) {
          let g;
          const y = (x, O) => {
            x.type.spec.tableRole == "table" && (g = Le(d, x, O, g));
          };
          return (
            f ? f.doc != d.doc && Oe(f.doc, d.doc, 0, y) : d.doc.descendants(y),
            g
          );
        }
        function Le(d, f, g, y) {
          const x = ze.get(f);
          if (!x.problems) return y;
          y || (y = d.tr);
          const O = [];
          for (let I = 0; I < x.height; I++) O.push(0);
          for (let I = 0; I < x.problems.length; I++) {
            const V = x.problems[I];
            if (V.type == "collision") {
              const Z = f.nodeAt(V.pos);
              if (!Z) continue;
              const ee = Z.attrs;
              for (let he = 0; he < ee.rowspan; he++) O[V.row + he] += V.n;
              y.setNodeMarkup(
                y.mapping.map(g + 1 + V.pos),
                null,
                Ae(ee, ee.colspan - V.n, V.n),
              );
            } else if (V.type == "missing") O[V.row] += V.n;
            else if (V.type == "overlong_rowspan") {
              const Z = f.nodeAt(V.pos);
              if (!Z) continue;
              y.setNodeMarkup(y.mapping.map(g + 1 + V.pos), null, {
                ...Z.attrs,
                rowspan: Z.attrs.rowspan - V.n,
              });
            } else if (V.type == "colwidth mismatch") {
              const Z = f.nodeAt(V.pos);
              if (!Z) continue;
              y.setNodeMarkup(y.mapping.map(g + 1 + V.pos), null, {
                ...Z.attrs,
                colwidth: V.colwidth,
              });
            }
          }
          let E, F;
          for (let I = 0; I < O.length; I++)
            O[I] && (E == null && (E = I), (F = I));
          for (let I = 0, V = g + 1; I < x.height; I++) {
            const Z = f.child(I),
              ee = V + Z.nodeSize,
              he = O[I];
            if (he > 0) {
              let xe = "cell";
              Z.firstChild && (xe = Z.firstChild.type.spec.tableRole);
              const Ee = [];
              for (let lt = 0; lt < he; lt++) {
                const ut = K(d.schema)[xe].createAndFill();
                ut && Ee.push(ut);
              }
              const Xe = (I == 0 || E == I - 1) && F == I ? V + 1 : ee - 1;
              y.insert(y.mapping.map(Xe), Ee);
            }
            V = ee;
          }
          return y.setMeta(pe, { fixTables: !0 });
        }
        function Qe(d) {
          const f = d.selection,
            g = U(d),
            y = g.node(-1),
            x = g.start(-1),
            O = ze.get(y);
          return {
            ...(f instanceof z
              ? O.rectBetween(f.$anchorCell.pos - x, f.$headCell.pos - x)
              : O.findCell(g.pos - x)),
            tableStart: x,
            map: O,
            table: y,
          };
        }
        function nt(d, { map: f, tableStart: g, table: y }, x) {
          let O = x > 0 ? -1 : 0;
          C(f, y, x + O) && (O = x == 0 || x == f.width ? null : 0);
          for (let E = 0; E < f.height; E++) {
            const F = E * f.width + x;
            if (x > 0 && x < f.width && f.map[F - 1] == f.map[F]) {
              const I = f.map[F],
                V = y.nodeAt(I);
              d.setNodeMarkup(
                d.mapping.map(g + I),
                null,
                de(V.attrs, x - f.colCount(I)),
              ),
                (E += V.attrs.rowspan - 1);
            } else {
              const I =
                  O == null
                    ? K(y.type.schema).cell
                    : y.nodeAt(f.map[F + O]).type,
                V = f.positionAt(E, x, y);
              d.insert(d.mapping.map(g + V), I.createAndFill());
            }
          }
          return d;
        }
        function qe(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d);
            f(nt(d.tr, g, g.left));
          }
          return !0;
        }
        function st(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d);
            f(nt(d.tr, g, g.right));
          }
          return !0;
        }
        function ft(d, { map: f, table: g, tableStart: y }, x) {
          const O = d.mapping.maps.length;
          for (let E = 0; E < f.height; ) {
            const F = E * f.width + x,
              I = f.map[F],
              V = g.nodeAt(I),
              Z = V.attrs;
            if (
              (x > 0 && f.map[F - 1] == I) ||
              (x < f.width - 1 && f.map[F + 1] == I)
            )
              d.setNodeMarkup(
                d.mapping.slice(O).map(y + I),
                null,
                Ae(Z, x - f.colCount(I)),
              );
            else {
              const ee = d.mapping.slice(O).map(y + I);
              d.delete(ee, ee + V.nodeSize);
            }
            E += Z.rowspan;
          }
        }
        function mt(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d),
              y = d.tr;
            if (g.left == 0 && g.right == g.map.width) return !1;
            for (let x = g.right - 1; ft(y, g, x), x != g.left; x--) {
              const O = g.tableStart ? y.doc.nodeAt(g.tableStart - 1) : y.doc;
              if (!O) throw RangeError("No table found");
              (g.table = O), (g.map = ze.get(O));
            }
            f(y);
          }
          return !0;
        }
        function $(d, f, g) {
          var y;
          const x = K(f.type.schema).header_cell;
          for (let O = 0; O < d.width; O++)
            if (
              ((y = f.nodeAt(d.map[O + g * d.width])) == null
                ? void 0
                : y.type) != x
            )
              return !1;
          return !0;
        }
        function H(d, { map: f, tableStart: g, table: y }, x) {
          var O;
          let E = g;
          for (let V = 0; V < x; V++) E += y.child(V).nodeSize;
          const F = [];
          let I = x > 0 ? -1 : 0;
          $(f, y, x + I) && (I = x == 0 || x == f.height ? null : 0);
          for (let V = 0, Z = f.width * x; V < f.width; V++, Z++)
            if (x > 0 && x < f.height && f.map[Z] == f.map[Z - f.width]) {
              const ee = f.map[Z],
                he = y.nodeAt(ee).attrs;
              d.setNodeMarkup(g + ee, null, { ...he, rowspan: he.rowspan + 1 }),
                (V += he.colspan - 1);
            } else {
              const ee =
                  I == null
                    ? K(y.type.schema).cell
                    : (O = y.nodeAt(f.map[Z + I * f.width])) == null
                      ? void 0
                      : O.type,
                he = ee?.createAndFill();
              he && F.push(he);
            }
          return d.insert(E, K(y.type.schema).row.create(null, F)), d;
        }
        function te(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d);
            f(H(d.tr, g, g.top));
          }
          return !0;
        }
        function re(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d);
            f(H(d.tr, g, g.bottom));
          }
          return !0;
        }
        function oe(d, { map: f, table: g, tableStart: y }, x) {
          let O = 0;
          for (let V = 0; V < x; V++) O += g.child(V).nodeSize;
          const E = O + g.child(x).nodeSize,
            F = d.mapping.maps.length;
          d.delete(O + y, E + y);
          const I = new Set();
          for (let V = 0, Z = x * f.width; V < f.width; V++, Z++) {
            const ee = f.map[Z];
            if (!I.has(ee)) {
              if ((I.add(ee), x > 0 && ee == f.map[Z - f.width])) {
                const he = g.nodeAt(ee).attrs;
                d.setNodeMarkup(d.mapping.slice(F).map(ee + y), null, {
                  ...he,
                  rowspan: he.rowspan - 1,
                }),
                  (V += he.colspan - 1);
              } else if (x < f.height && ee == f.map[Z + f.width]) {
                const he = g.nodeAt(ee),
                  xe = he.attrs,
                  Ee = he.type.create(
                    { ...xe, rowspan: he.attrs.rowspan - 1 },
                    he.content,
                  ),
                  Xe = f.positionAt(x + 1, V, g);
                d.insert(d.mapping.slice(F).map(y + Xe), Ee),
                  (V += xe.colspan - 1);
              }
            }
          }
        }
        function fe(d, f) {
          if (!G(d)) return !1;
          if (f) {
            const g = Qe(d),
              y = d.tr;
            if (g.top == 0 && g.bottom == g.map.height) return !1;
            for (let x = g.bottom - 1; oe(y, g, x), x != g.top; x--) {
              const O = g.tableStart ? y.doc.nodeAt(g.tableStart - 1) : y.doc;
              if (!O) throw RangeError("No table found");
              (g.table = O), (g.map = ze.get(g.table));
            }
            f(y);
          }
          return !0;
        }
        function be(d) {
          const f = d.content;
          return (
            f.childCount == 1 &&
            f.child(0).isTextblock &&
            f.child(0).childCount == 0
          );
        }
        function we({ width: d, height: f, map: g }, y) {
          let x = y.top * d + y.left,
            O = x,
            E = (y.bottom - 1) * d + y.left,
            F = x + (y.right - y.left - 1);
          for (let I = y.top; I < y.bottom; I++) {
            if (
              (y.left > 0 && g[O] == g[O - 1]) ||
              (y.right < d && g[F] == g[F + 1])
            )
              return !0;
            (O += d), (F += d);
          }
          for (let I = y.left; I < y.right; I++) {
            if (
              (y.top > 0 && g[x] == g[x - d]) ||
              (y.bottom < f && g[E] == g[E + d])
            )
              return !0;
            x++, E++;
          }
          return !1;
        }
        function He(d, f) {
          const g = d.selection;
          if (!(g instanceof z) || g.$anchorCell.pos == g.$headCell.pos)
            return !1;
          const y = Qe(d),
            { map: x } = y;
          if (we(x, y)) return !1;
          if (f) {
            const O = d.tr,
              E = {};
            let F = Fragment2.empty,
              I,
              V;
            for (let Z = y.top; Z < y.bottom; Z++)
              for (let ee = y.left; ee < y.right; ee++) {
                const he = x.map[Z * x.width + ee],
                  xe = y.table.nodeAt(he);
                if (!(E[he] || !xe))
                  if (((E[he] = !0), I == null)) (I = he), (V = xe);
                  else {
                    be(xe) || (F = F.append(xe.content));
                    const Ee = O.mapping.map(he + y.tableStart);
                    O.delete(Ee, Ee + xe.nodeSize);
                  }
              }
            if (I == null || V == null) return !0;
            if (
              (O.setNodeMarkup(I + y.tableStart, null, {
                ...de(
                  V.attrs,
                  V.attrs.colspan,
                  y.right - y.left - V.attrs.colspan,
                ),
                rowspan: y.bottom - y.top,
              }),
              F.size)
            ) {
              const Z = I + 1 + V.content.size,
                ee = be(V) ? I + 1 : Z;
              O.replaceWith(ee + y.tableStart, Z + y.tableStart, F);
            }
            O.setSelection(new z(O.doc.resolve(I + y.tableStart))), f(O);
          }
          return !0;
        }
        function je(d, f) {
          const g = K(d.schema);
          return Ue(({ node: y }) => g[y.type.spec.tableRole])(d, f);
        }
        function Ue(d) {
          return (f, g) => {
            var y;
            const x = f.selection;
            let O, E;
            if (x instanceof z) {
              if (x.$anchorCell.pos != x.$headCell.pos) return !1;
              (O = x.$anchorCell.nodeAfter), (E = x.$anchorCell.pos);
            } else {
              if (((O = _(x.$from)), !O)) return !1;
              E = (y = ce(x.$from)) == null ? void 0 : y.pos;
            }
            if (
              O == null ||
              E == null ||
              (O.attrs.colspan == 1 && O.attrs.rowspan == 1)
            )
              return !1;
            if (g) {
              let F = O.attrs;
              const I = [],
                V = F.colwidth;
              F.rowspan > 1 && (F = { ...F, rowspan: 1 }),
                F.colspan > 1 && (F = { ...F, colspan: 1 });
              const Z = Qe(f),
                ee = f.tr;
              for (let xe = 0; xe < Z.right - Z.left; xe++)
                I.push(V ? { ...F, colwidth: V && V[xe] ? [V[xe]] : null } : F);
              let he;
              for (let xe = Z.top; xe < Z.bottom; xe++) {
                let Ee = Z.map.positionAt(xe, Z.left, Z.table);
                xe == Z.top && (Ee += O.nodeSize);
                for (let Xe = Z.left, lt = 0; Xe < Z.right; Xe++, lt++)
                  (Xe == Z.left && xe == Z.top) ||
                    ee.insert(
                      (he = ee.mapping.map(Ee + Z.tableStart, 1)),
                      d({ node: O, row: xe, col: Xe }).createAndFill(I[lt]),
                    );
              }
              ee.setNodeMarkup(
                E,
                d({ node: O, row: Z.top, col: Z.left }),
                I[0],
              ),
                x instanceof z &&
                  ee.setSelection(
                    new z(
                      ee.doc.resolve(x.$anchorCell.pos),
                      he ? ee.doc.resolve(he) : void 0,
                    ),
                  ),
                g(ee);
            }
            return !0;
          };
        }
        function $e(d, f) {
          return function (g, y) {
            if (!G(g)) return !1;
            const x = U(g);
            if (x.nodeAfter.attrs[d] === f) return !1;
            if (y) {
              const O = g.tr;
              g.selection instanceof z
                ? g.selection.forEachCell((E, F) => {
                    E.attrs[d] !== f &&
                      O.setNodeMarkup(F, null, { ...E.attrs, [d]: f });
                  })
                : O.setNodeMarkup(x.pos, null, {
                    ...x.nodeAfter.attrs,
                    [d]: f,
                  }),
                y(O);
            }
            return !0;
          };
        }
        function Ze(d) {
          return function (f, g) {
            if (!G(f)) return !1;
            if (g) {
              const y = K(f.schema),
                x = Qe(f),
                O = f.tr,
                E = x.map.cellsInRect(
                  d == "column"
                    ? {
                        left: x.left,
                        top: 0,
                        right: x.right,
                        bottom: x.map.height,
                      }
                    : d == "row"
                      ? {
                          left: 0,
                          top: x.top,
                          right: x.map.width,
                          bottom: x.bottom,
                        }
                      : x,
                ),
                F = E.map((I) => x.table.nodeAt(I));
              for (let I = 0; I < E.length; I++)
                F[I].type == y.header_cell &&
                  O.setNodeMarkup(x.tableStart + E[I], y.cell, F[I].attrs);
              if (O.steps.length == 0)
                for (let I = 0; I < E.length; I++)
                  O.setNodeMarkup(
                    x.tableStart + E[I],
                    y.header_cell,
                    F[I].attrs,
                  );
              g(O);
            }
            return !0;
          };
        }
        function rt(d, f, g) {
          const y = f.map.cellsInRect({
            left: 0,
            top: 0,
            right: d == "row" ? f.map.width : 1,
            bottom: d == "column" ? f.map.height : 1,
          });
          for (let x = 0; x < y.length; x++) {
            const O = f.table.nodeAt(y[x]);
            if (O && O.type !== g.header_cell) return !1;
          }
          return !0;
        }
        function it(d, f) {
          return (
            (f = f || { useDeprecatedLogic: !1 }),
            f.useDeprecatedLogic
              ? Ze(d)
              : function (g, y) {
                  if (!G(g)) return !1;
                  if (y) {
                    const x = K(g.schema),
                      O = Qe(g),
                      E = g.tr,
                      F = rt("row", O, x),
                      I = rt("column", O, x),
                      Z = (d === "column" ? F : d === "row" ? I : !1) ? 1 : 0,
                      ee =
                        d == "column"
                          ? { left: 0, top: Z, right: 1, bottom: O.map.height }
                          : d == "row"
                            ? { left: Z, top: 0, right: O.map.width, bottom: 1 }
                            : O,
                      he =
                        d == "column"
                          ? I
                            ? x.cell
                            : x.header_cell
                          : d == "row"
                            ? F
                              ? x.cell
                              : x.header_cell
                            : x.cell;
                    O.map.cellsInRect(ee).forEach((xe) => {
                      const Ee = xe + O.tableStart,
                        Xe = E.doc.nodeAt(Ee);
                      Xe && E.setNodeMarkup(Ee, he, Xe.attrs);
                    }),
                      y(E);
                  }
                  return !0;
                }
          );
        }
        var at = it("row", { useDeprecatedLogic: !0 }),
          gt = it("column", { useDeprecatedLogic: !0 }),
          dt = it("cell", { useDeprecatedLogic: !0 });
        function kt(d, f) {
          if (f < 0) {
            const g = d.nodeBefore;
            if (g) return d.pos - g.nodeSize;
            for (let y = d.index(-1) - 1, x = d.before(); y >= 0; y--) {
              const O = d.node(-1).child(y),
                E = O.lastChild;
              if (E) return x - 1 - E.nodeSize;
              x -= O.nodeSize;
            }
          } else {
            if (d.index() < d.parent.childCount - 1)
              return d.pos + d.nodeAfter.nodeSize;
            const g = d.node(-1);
            for (
              let y = d.indexAfter(-1), x = d.after();
              y < g.childCount;
              y++
            ) {
              const O = g.child(y);
              if (O.childCount) return x + 1;
              x += O.nodeSize;
            }
          }
          return null;
        }
        function _t(d) {
          return function (f, g) {
            if (!G(f)) return !1;
            const y = kt(U(f), d);
            if (y == null) return !1;
            if (g) {
              const x = f.doc.resolve(y);
              g(
                f.tr
                  .setSelection(TextSelection2.between(x, me(x)))
                  .scrollIntoView(),
              );
            }
            return !0;
          };
        }
        function J(d, f) {
          const g = d.selection.$anchor;
          for (let y = g.depth; y > 0; y--)
            if (g.node(y).type.spec.tableRole == "table")
              return (
                f && f(d.tr.delete(g.before(y), g.after(y)).scrollIntoView()),
                !0
              );
          return !1;
        }
        function c(d, f) {
          const g = d.selection;
          if (!(g instanceof z)) return !1;
          if (f) {
            const y = d.tr,
              x = K(d.schema).cell.createAndFill().content;
            g.forEachCell((O, E) => {
              O.content.eq(x) ||
                y.replace(
                  y.mapping.map(E + 1),
                  y.mapping.map(E + O.nodeSize - 1),
                  new se.Ji(x, 0, 0),
                );
            }),
              y.docChanged && f(y);
          }
          return !0;
        }
        function h(d) {
          if (!d.size) return null;
          let { content: f, openStart: g, openEnd: y } = d;
          for (
            ;
            f.childCount == 1 &&
            ((g > 0 && y > 0) || f.child(0).type.spec.tableRole == "table");
          )
            g--, y--, (f = f.child(0).content);
          const x = f.child(0),
            O = x.type.spec.tableRole,
            E = x.type.schema,
            F = [];
          if (O == "row")
            for (let I = 0; I < f.childCount; I++) {
              let V = f.child(I).content;
              const Z = I ? 0 : Math.max(0, g - 1),
                ee = I < f.childCount - 1 ? 0 : Math.max(0, y - 1);
              (Z || ee) && (V = N(K(E).row, new se.Ji(V, Z, ee)).content),
                F.push(V);
            }
          else if (O == "cell" || O == "header_cell")
            F.push(g || y ? N(K(E).row, new se.Ji(f, g, y)).content : f);
          else return null;
          return k(E, F);
        }
        function k(d, f) {
          const g = [];
          for (let x = 0; x < f.length; x++) {
            const O = f[x];
            for (let E = O.childCount - 1; E >= 0; E--) {
              const { rowspan: F, colspan: I } = O.child(E).attrs;
              for (let V = x; V < x + F; V++) g[V] = (g[V] || 0) + I;
            }
          }
          let y = 0;
          for (let x = 0; x < g.length; x++) y = Math.max(y, g[x]);
          for (let x = 0; x < g.length; x++)
            if ((x >= f.length && f.push(se.FK.empty), g[x] < y)) {
              const O = K(d).cell.createAndFill(),
                E = [];
              for (let F = g[x]; F < y; F++) E.push(O);
              f[x] = f[x].append(se.FK.from(E));
            }
          return { height: f.length, width: y, rows: f };
        }
        function N(d, f) {
          const g = d.createAndFill();
          return new ge.dL(g).replace(0, g.content.size, f).doc;
        }
        function L({ width: d, height: f, rows: g }, y, x) {
          if (d != y) {
            const O = [],
              E = [];
            for (let F = 0; F < g.length; F++) {
              const I = g[F],
                V = [];
              for (let Z = O[F] || 0, ee = 0; Z < y; ee++) {
                let he = I.child(ee % I.childCount);
                Z + he.attrs.colspan > y &&
                  (he = he.type.createChecked(
                    Ae(he.attrs, he.attrs.colspan, Z + he.attrs.colspan - y),
                    he.content,
                  )),
                  V.push(he),
                  (Z += he.attrs.colspan);
                for (let xe = 1; xe < he.attrs.rowspan; xe++)
                  O[F + xe] = (O[F + xe] || 0) + he.attrs.colspan;
              }
              E.push(se.FK.from(V));
            }
            (g = E), (d = y);
          }
          if (f != x) {
            const O = [];
            for (let E = 0, F = 0; E < x; E++, F++) {
              const I = [],
                V = g[F % f];
              for (let Z = 0; Z < V.childCount; Z++) {
                let ee = V.child(Z);
                E + ee.attrs.rowspan > x &&
                  (ee = ee.type.create(
                    { ...ee.attrs, rowspan: Math.max(1, x - ee.attrs.rowspan) },
                    ee.content,
                  )),
                  I.push(ee);
              }
              O.push(se.FK.from(I));
            }
            (g = O), (f = x);
          }
          return { width: d, height: f, rows: g };
        }
        function W(d, f, g, y, x, O, E) {
          const F = d.doc.type.schema,
            I = K(F);
          let V, Z;
          if (x > f.width)
            for (let ee = 0, he = 0; ee < f.height; ee++) {
              const xe = g.child(ee);
              he += xe.nodeSize;
              const Ee = [];
              let Xe;
              xe.lastChild == null || xe.lastChild.type == I.cell
                ? (Xe = V || (V = I.cell.createAndFill()))
                : (Xe = Z || (Z = I.header_cell.createAndFill()));
              for (let lt = f.width; lt < x; lt++) Ee.push(Xe);
              d.insert(d.mapping.slice(E).map(he - 1 + y), Ee);
            }
          if (O > f.height) {
            const ee = [];
            for (
              let Ee = 0, Xe = (f.height - 1) * f.width;
              Ee < Math.max(f.width, x);
              Ee++
            ) {
              const lt =
                Ee >= f.width
                  ? !1
                  : g.nodeAt(f.map[Xe + Ee]).type == I.header_cell;
              ee.push(
                lt
                  ? Z || (Z = I.header_cell.createAndFill())
                  : V || (V = I.cell.createAndFill()),
              );
            }
            const he = I.row.create(null, se.FK.from(ee)),
              xe = [];
            for (let Ee = f.height; Ee < O; Ee++) xe.push(he);
            d.insert(d.mapping.slice(E).map(y + g.nodeSize - 2), xe);
          }
          return !!(V || Z);
        }
        function ie(d, f, g, y, x, O, E, F) {
          if (E == 0 || E == f.height) return !1;
          let I = !1;
          for (let V = x; V < O; V++) {
            const Z = E * f.width + V,
              ee = f.map[Z];
            if (f.map[Z - f.width] == ee) {
              I = !0;
              const he = g.nodeAt(ee),
                { top: xe, left: Ee } = f.findCell(ee);
              d.setNodeMarkup(d.mapping.slice(F).map(ee + y), null, {
                ...he.attrs,
                rowspan: E - xe,
              }),
                d.insert(
                  d.mapping.slice(F).map(f.positionAt(E, Ee, g)),
                  he.type.createAndFill({
                    ...he.attrs,
                    rowspan: xe + he.attrs.rowspan - E,
                  }),
                ),
                (V += he.attrs.colspan - 1);
            }
          }
          return I;
        }
        function S(d, f, g, y, x, O, E, F) {
          if (E == 0 || E == f.width) return !1;
          let I = !1;
          for (let V = x; V < O; V++) {
            const Z = V * f.width + E,
              ee = f.map[Z];
            if (f.map[Z - 1] == ee) {
              I = !0;
              const he = g.nodeAt(ee),
                xe = f.colCount(ee),
                Ee = d.mapping.slice(F).map(ee + y);
              d.setNodeMarkup(
                Ee,
                null,
                Ae(he.attrs, E - xe, he.attrs.colspan - (E - xe)),
              ),
                d.insert(
                  Ee + he.nodeSize,
                  he.type.createAndFill(Ae(he.attrs, 0, E - xe)),
                ),
                (V += he.attrs.rowspan - 1);
            }
          }
          return I;
        }
        function r(d, f, g, y, x) {
          let O = g ? d.doc.nodeAt(g - 1) : d.doc;
          if (!O) throw new Error("No table found");
          let E = ze.get(O);
          const { top: F, left: I } = y,
            V = I + x.width,
            Z = F + x.height,
            ee = d.tr;
          let he = 0;
          function xe() {
            if (((O = g ? ee.doc.nodeAt(g - 1) : ee.doc), !O))
              throw new Error("No table found");
            (E = ze.get(O)), (he = ee.mapping.maps.length);
          }
          W(ee, E, O, g, V, Z, he) && xe(),
            ie(ee, E, O, g, I, V, F, he) && xe(),
            ie(ee, E, O, g, I, V, Z, he) && xe(),
            S(ee, E, O, g, F, Z, I, he) && xe(),
            S(ee, E, O, g, F, Z, V, he) && xe();
          for (let Ee = F; Ee < Z; Ee++) {
            const Xe = E.positionAt(Ee, I, O),
              lt = E.positionAt(Ee, V, O);
            ee.replace(
              ee.mapping.slice(he).map(Xe + g),
              ee.mapping.slice(he).map(lt + g),
              new se.Ji(x.rows[Ee - F], 0, 0),
            );
          }
          xe(),
            ee.setSelection(
              new z(
                ee.doc.resolve(g + E.positionAt(F, I, O)),
                ee.doc.resolve(g + E.positionAt(Z - 1, V - 1, O)),
              ),
            ),
            f(ee);
        }
        var s = (0, ve.K)({
          ArrowLeft: p("horiz", -1),
          ArrowRight: p("horiz", 1),
          ArrowUp: p("vert", -1),
          ArrowDown: p("vert", 1),
          "Shift-ArrowLeft": b("horiz", -1),
          "Shift-ArrowRight": b("horiz", 1),
          "Shift-ArrowUp": b("vert", -1),
          "Shift-ArrowDown": b("vert", 1),
          Backspace: c,
          "Mod-Backspace": c,
          Delete: c,
          "Mod-Delete": c,
        });
        function a(d, f, g) {
          return g.eq(d.selection)
            ? !1
            : (f && f(d.tr.setSelection(g).scrollIntoView()), !0);
        }
        function p(d, f) {
          return (g, y, x) => {
            if (!x) return !1;
            const O = g.selection;
            if (O instanceof z) return a(g, y, v.LN.near(O.$headCell, f));
            if (d != "horiz" && !O.empty) return !1;
            const E = Ce(x, d, f);
            if (E == null) return !1;
            if (d == "horiz")
              return a(g, y, v.LN.near(g.doc.resolve(O.head + f), f));
            {
              const F = g.doc.resolve(E),
                I = Ve(F, d, f);
              let V;
              return (
                I
                  ? (V = v.LN.near(I, 1))
                  : f < 0
                    ? (V = v.LN.near(g.doc.resolve(F.before(-1)), -1))
                    : (V = v.LN.near(g.doc.resolve(F.after(-1)), 1)),
                a(g, y, V)
              );
            }
          };
        }
        function b(d, f) {
          return (g, y, x) => {
            if (!x) return !1;
            const O = g.selection;
            let E;
            if (O instanceof z) E = O;
            else {
              const I = Ce(x, d, f);
              if (I == null) return !1;
              E = new z(g.doc.resolve(I));
            }
            const F = Ve(E.$headCell, d, f);
            return F ? a(g, y, new z(E.$anchorCell, F)) : !1;
          };
        }
        function w(d, f) {
          const g = d.state.doc,
            y = ce(g.resolve(f));
          return y ? (d.dispatch(d.state.tr.setSelection(new z(y))), !0) : !1;
        }
        function P(d, f, g) {
          if (!G(d.state)) return !1;
          let y = h(g);
          const x = d.state.selection;
          if (x instanceof z) {
            y ||
              (y = {
                width: 1,
                height: 1,
                rows: [se.FK.from(N(K(d.state.schema).cell, g))],
              });
            const O = x.$anchorCell.node(-1),
              E = x.$anchorCell.start(-1),
              F = ze
                .get(O)
                .rectBetween(x.$anchorCell.pos - E, x.$headCell.pos - E);
            return (
              (y = L(y, F.right - F.left, F.bottom - F.top)),
              r(d.state, d.dispatch, E, F, y),
              !0
            );
          } else if (y) {
            const O = U(d.state),
              E = O.start(-1);
            return (
              r(
                d.state,
                d.dispatch,
                E,
                ze.get(O.node(-1)).findCell(O.pos - E),
                y,
              ),
              !0
            );
          } else return !1;
        }
        function q(d, f) {
          var g;
          if (f.ctrlKey || f.metaKey) return;
          const y = Pe(d, f.target);
          let x;
          if (f.shiftKey && d.state.selection instanceof z)
            O(d.state.selection.$anchorCell, f), f.preventDefault();
          else if (
            f.shiftKey &&
            y &&
            (x = ce(d.state.selection.$anchor)) != null &&
            ((g = ct(d, f)) == null ? void 0 : g.pos) != x.pos
          )
            O(x, f), f.preventDefault();
          else if (!y) return;
          function O(I, V) {
            let Z = ct(d, V);
            const ee = Q.getState(d.state) == null;
            if (!Z || !ke(I, Z))
              if (ee) Z = I;
              else return;
            const he = new z(I, Z);
            if (ee || !d.state.selection.eq(he)) {
              const xe = d.state.tr.setSelection(he);
              ee && xe.setMeta(Q, I.pos), d.dispatch(xe);
            }
          }
          function E() {
            d.root.removeEventListener("mouseup", E),
              d.root.removeEventListener("dragstart", E),
              d.root.removeEventListener("mousemove", F),
              Q.getState(d.state) != null &&
                d.dispatch(d.state.tr.setMeta(Q, -1));
          }
          function F(I) {
            const V = I,
              Z = Q.getState(d.state);
            let ee;
            if (Z != null) ee = d.state.doc.resolve(Z);
            else if (Pe(d, V.target) != y && ((ee = ct(d, f)), !ee)) return E();
            ee && O(ee, V);
          }
          d.root.addEventListener("mouseup", E),
            d.root.addEventListener("dragstart", E),
            d.root.addEventListener("mousemove", F);
        }
        function Ce(d, f, g) {
          if (!(d.state.selection instanceof v.U3)) return null;
          const { $head: y } = d.state.selection;
          for (let x = y.depth - 1; x >= 0; x--) {
            const O = y.node(x);
            if (
              (g < 0 ? y.index(x) : y.indexAfter(x)) !=
              (g < 0 ? 0 : O.childCount)
            )
              return null;
            if (
              O.type.spec.tableRole == "cell" ||
              O.type.spec.tableRole == "header_cell"
            ) {
              const F = y.before(x),
                I =
                  f == "vert"
                    ? g > 0
                      ? "down"
                      : "up"
                    : g > 0
                      ? "right"
                      : "left";
              return d.endOfTextblock(I) ? F : null;
            }
          }
          return null;
        }
        function Pe(d, f) {
          for (; f && f != d.dom; f = f.parentNode)
            if (f.nodeName == "TD" || f.nodeName == "TH") return f;
          return null;
        }
        function ct(d, f) {
          const g = d.posAtCoords({ left: f.clientX, top: f.clientY });
          return g && g ? ce(d.state.doc.resolve(g.pos)) : null;
        }
        var Nt = class {
          constructor(d, f) {
            (this.node = d),
              (this.defaultCellMinWidth = f),
              (this.dom = document.createElement("div")),
              (this.dom.className = "tableWrapper"),
              (this.table = this.dom.appendChild(
                document.createElement("table"),
              )),
              this.table.style.setProperty(
                "--default-cell-min-width",
                `${f}px`,
              ),
              (this.colgroup = this.table.appendChild(
                document.createElement("colgroup"),
              )),
              Tt(d, this.colgroup, this.table, f),
              (this.contentDOM = this.table.appendChild(
                document.createElement("tbody"),
              ));
          }
          update(d) {
            return d.type != this.node.type
              ? !1
              : ((this.node = d),
                Tt(d, this.colgroup, this.table, this.defaultCellMinWidth),
                !0);
          }
          ignoreMutation(d) {
            return (
              d.type == "attributes" &&
              (d.target == this.table || this.colgroup.contains(d.target))
            );
          }
        };
        function Tt(d, f, g, y, x, O) {
          var E;
          let F = 0,
            I = !0,
            V = f.firstChild;
          const Z = d.firstChild;
          if (Z) {
            for (let ee = 0, he = 0; ee < Z.childCount; ee++) {
              const { colspan: xe, colwidth: Ee } = Z.child(ee).attrs;
              for (let Xe = 0; Xe < xe; Xe++, he++) {
                const lt = x == he ? O : Ee && Ee[Xe],
                  ut = lt ? lt + "px" : "";
                if (((F += lt || y), lt || (I = !1), V))
                  V.style.width != ut && (V.style.width = ut),
                    (V = V.nextSibling);
                else {
                  const Rt = document.createElement("col");
                  (Rt.style.width = ut), f.appendChild(Rt);
                }
              }
            }
            for (; V; ) {
              const ee = V.nextSibling;
              (E = V.parentNode) == null || E.removeChild(V), (V = ee);
            }
            I
              ? ((g.style.width = F + "px"), (g.style.minWidth = ""))
              : ((g.style.width = ""), (g.style.minWidth = F + "px"));
          }
        }
        var bt = new v.hs("tableColumnResizing");
        function nn({
          handleWidth: d = 5,
          cellMinWidth: f = 25,
          defaultCellMinWidth: g = 100,
          View: y = Nt,
          lastColumnResizable: x = !0,
        } = {}) {
          const O = new v.k_({
            key: bt,
            state: {
              init(E, F) {
                var I, V;
                const Z =
                    (V = (I = O.spec) == null ? void 0 : I.props) == null
                      ? void 0
                      : V.nodeViews,
                  ee = K(F.schema).table.name;
                return (
                  y && Z && (Z[ee] = (he, xe) => new y(he, g, xe)),
                  new qt(-1, !1)
                );
              },
              apply(E, F) {
                return F.apply(E);
              },
            },
            props: {
              attributes: (E) => {
                const F = bt.getState(E);
                return F && F.activeHandle > -1
                  ? { class: "resize-cursor" }
                  : {};
              },
              handleDOMEvents: {
                mousemove: (E, F) => {
                  rn(E, F, d, x);
                },
                mouseleave: (E) => {
                  gn(E);
                },
                mousedown: (E, F) => {
                  yn(E, F, f, g);
                },
              },
              decorations: (E) => {
                const F = bt.getState(E);
                if (F && F.activeHandle > -1) return ln(E, F.activeHandle);
              },
              nodeViews: {},
            },
          });
          return O;
        }
        var qt = class mn {
          constructor(f, g) {
            (this.activeHandle = f), (this.dragging = g);
          }
          apply(f) {
            const g = this,
              y = f.getMeta(bt);
            if (y && y.setHandle != null) return new mn(y.setHandle, !1);
            if (y && y.setDragging !== void 0)
              return new mn(g.activeHandle, y.setDragging);
            if (g.activeHandle > -1 && f.docChanged) {
              let x = f.mapping.map(g.activeHandle, -1);
              return X(f.doc.resolve(x)) || (x = -1), new mn(x, g.dragging);
            }
            return g;
          }
        };
        function rn(d, f, g, y) {
          const x = bt.getState(d.state);
          if (x && !x.dragging) {
            const O = xn(f.target);
            let E = -1;
            if (O) {
              const { left: F, right: I } = O.getBoundingClientRect();
              f.clientX - F <= g
                ? (E = sn(d, f, "left", g))
                : I - f.clientX <= g && (E = sn(d, f, "right", g));
            }
            if (E != x.activeHandle) {
              if (!y && E !== -1) {
                const F = d.state.doc.resolve(E),
                  I = F.node(-1),
                  V = ze.get(I),
                  Z = F.start(-1);
                if (
                  V.colCount(F.pos - Z) + F.nodeAfter.attrs.colspan - 1 ==
                  V.width - 1
                )
                  return;
              }
              Ut(d, E);
            }
          }
        }
        function gn(d) {
          const f = bt.getState(d.state);
          f && f.activeHandle > -1 && !f.dragging && Ut(d, -1);
        }
        function yn(d, f, g, y) {
          var x;
          const O = (x = d.dom.ownerDocument.defaultView) != null ? x : window,
            E = bt.getState(d.state);
          if (!E || E.activeHandle == -1 || E.dragging) return !1;
          const F = d.state.doc.nodeAt(E.activeHandle),
            I = bn(d, E.activeHandle, F.attrs);
          d.dispatch(
            d.state.tr.setMeta(bt, {
              setDragging: { startX: f.clientX, startWidth: I },
            }),
          );
          function V(ee) {
            O.removeEventListener("mouseup", V),
              O.removeEventListener("mousemove", Z);
            const he = bt.getState(d.state);
            he?.dragging &&
              (Qt(d, he.activeHandle, on(he.dragging, ee, g)),
              d.dispatch(d.state.tr.setMeta(bt, { setDragging: null })));
          }
          function Z(ee) {
            if (!ee.which) return V(ee);
            const he = bt.getState(d.state);
            if (he && he.dragging) {
              const xe = on(he.dragging, ee, g);
              Xt(d, he.activeHandle, xe, y);
            }
          }
          return (
            Xt(d, E.activeHandle, I, y),
            O.addEventListener("mouseup", V),
            O.addEventListener("mousemove", Z),
            f.preventDefault(),
            !0
          );
        }
        function bn(d, f, { colspan: g, colwidth: y }) {
          const x = y && y[y.length - 1];
          if (x) return x;
          const O = d.domAtPos(f);
          let F = O.node.childNodes[O.offset].offsetWidth,
            I = g;
          if (y) for (let V = 0; V < g; V++) y[V] && ((F -= y[V]), I--);
          return F / I;
        }
        function xn(d) {
          for (; d && d.nodeName != "TD" && d.nodeName != "TH"; )
            d =
              d.classList && d.classList.contains("ProseMirror")
                ? null
                : d.parentNode;
          return d;
        }
        function sn(d, f, g, y) {
          const x = g == "right" ? -y : y,
            O = d.posAtCoords({ left: f.clientX + x, top: f.clientY });
          if (!O) return -1;
          const { pos: E } = O,
            F = ce(d.state.doc.resolve(E));
          if (!F) return -1;
          if (g == "right") return F.pos;
          const I = ze.get(F.node(-1)),
            V = F.start(-1),
            Z = I.map.indexOf(F.pos - V);
          return Z % I.width == 0 ? -1 : V + I.map[Z - 1];
        }
        function on(d, f, g) {
          const y = f.clientX - d.startX;
          return Math.max(g, d.startWidth + y);
        }
        function Ut(d, f) {
          d.dispatch(d.state.tr.setMeta(bt, { setHandle: f }));
        }
        function Qt(d, f, g) {
          const y = d.state.doc.resolve(f),
            x = y.node(-1),
            O = ze.get(x),
            E = y.start(-1),
            F = O.colCount(y.pos - E) + y.nodeAfter.attrs.colspan - 1,
            I = d.state.tr;
          for (let V = 0; V < O.height; V++) {
            const Z = V * O.width + F;
            if (V && O.map[Z] == O.map[Z - O.width]) continue;
            const ee = O.map[Z],
              he = x.nodeAt(ee).attrs,
              xe = he.colspan == 1 ? 0 : F - O.colCount(ee);
            if (he.colwidth && he.colwidth[xe] == g) continue;
            const Ee = he.colwidth ? he.colwidth.slice() : Dt(he.colspan);
            (Ee[xe] = g),
              I.setNodeMarkup(E + ee, null, { ...he, colwidth: Ee });
          }
          I.docChanged && d.dispatch(I);
        }
        function Xt(d, f, g, y) {
          const x = d.state.doc.resolve(f),
            O = x.node(-1),
            E = x.start(-1),
            F = ze.get(O).colCount(x.pos - E) + x.nodeAfter.attrs.colspan - 1;
          let I = d.domAtPos(x.start(-1)).node;
          for (; I && I.nodeName != "TABLE"; ) I = I.parentNode;
          I && Tt(O, I.firstChild, I, y, F, g);
        }
        function Dt(d) {
          return Array(d).fill(0);
        }
        function ln(d, f) {
          var g;
          const y = [],
            x = d.doc.resolve(f),
            O = x.node(-1);
          if (!O) return Te.zF.empty;
          const E = ze.get(O),
            F = x.start(-1),
            I = E.colCount(x.pos - F) + x.nodeAfter.attrs.colspan - 1;
          for (let V = 0; V < E.height; V++) {
            const Z = I + V * E.width;
            if (
              (I == E.width - 1 || E.map[Z] != E.map[Z + 1]) &&
              (V == 0 || E.map[Z] != E.map[Z - E.width])
            ) {
              const ee = E.map[Z],
                he = F + ee + O.nodeAt(ee).nodeSize - 1,
                xe = document.createElement("div");
              (xe.className = "column-resize-handle"),
                (g = bt.getState(d)) != null &&
                  g.dragging &&
                  y.push(
                    Te.NZ.node(F + ee, F + ee + O.nodeAt(ee).nodeSize, {
                      class: "column-resize-dragging",
                    }),
                  ),
                y.push(Te.NZ.widget(he, xe));
            }
          }
          return Te.zF.create(d.doc, y);
        }
        function an({ allowTableNodeSelection: d = !1 } = {}) {
          return new v.k_({
            key: Q,
            state: {
              init() {
                return null;
              },
              apply(f, g) {
                const y = f.getMeta(Q);
                if (y != null) return y == -1 ? null : y;
                if (g == null || !f.docChanged) return g;
                const { deleted: x, pos: O } = f.mapping.mapResult(g);
                return x ? null : O;
              },
            },
            props: {
              decorations: A,
              handleDOMEvents: { mousedown: q },
              createSelectionBetween(f) {
                return Q.getState(f.state) != null ? f.state.selection : null;
              },
              handleTripleClick: w,
              handleKeyDown: s,
              handlePaste: P,
            },
            appendTransaction(f, g, y) {
              return Y(y, De(y, g), d);
            },
          });
        }
      },
      63734: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          $L: () => H,
          Ln: () => ae,
          Um: () => $,
          Wg: () => X,
          X9: () => Ge,
          dL: () => _t,
          jP: () => Ae,
          n9: () => nt,
          oM: () => C,
          zy: () => Le,
        });
        var v = Fe(57053);
        const se = 65535,
          Te = Math.pow(2, 16);
        function ve(J, c) {
          return J + c * Te;
        }
        function ge(J) {
          return J & se;
        }
        function Ye(J) {
          return (J - (J & se)) / Te;
        }
        const _e = 1,
          ze = 2,
          Me = 4,
          We = 8;
        class Je {
          constructor(c, h, k) {
            (this.pos = c), (this.delInfo = h), (this.recover = k);
          }
          get deleted() {
            return (this.delInfo & We) > 0;
          }
          get deletedBefore() {
            return (this.delInfo & (_e | Me)) > 0;
          }
          get deletedAfter() {
            return (this.delInfo & (ze | Me)) > 0;
          }
          get deletedAcross() {
            return (this.delInfo & Me) > 0;
          }
        }
        class Ne {
          constructor(c, h = !1) {
            if (((this.ranges = c), (this.inverted = h), !c.length && Ne.empty))
              return Ne.empty;
          }
          recover(c) {
            let h = 0,
              k = ge(c);
            if (!this.inverted)
              for (let N = 0; N < k; N++)
                h += this.ranges[N * 3 + 2] - this.ranges[N * 3 + 1];
            return this.ranges[k * 3] + h + Ye(c);
          }
          mapResult(c, h = 1) {
            return this._map(c, h, !1);
          }
          map(c, h = 1) {
            return this._map(c, h, !0);
          }
          _map(c, h, k) {
            let N = 0,
              L = this.inverted ? 2 : 1,
              W = this.inverted ? 1 : 2;
            for (let ie = 0; ie < this.ranges.length; ie += 3) {
              let S = this.ranges[ie] - (this.inverted ? N : 0);
              if (S > c) break;
              let r = this.ranges[ie + L],
                s = this.ranges[ie + W],
                a = S + r;
              if (c <= a) {
                let p = r ? (c == S ? -1 : c == a ? 1 : h) : h,
                  b = S + N + (p < 0 ? 0 : s);
                if (k) return b;
                let w = c == (h < 0 ? S : a) ? null : ve(ie / 3, c - S),
                  P = c == S ? ze : c == a ? _e : Me;
                return (h < 0 ? c != S : c != a) && (P |= We), new Je(b, P, w);
              }
              N += s - r;
            }
            return k ? c + N : new Je(c + N, 0, null);
          }
          touches(c, h) {
            let k = 0,
              N = ge(h),
              L = this.inverted ? 2 : 1,
              W = this.inverted ? 1 : 2;
            for (let ie = 0; ie < this.ranges.length; ie += 3) {
              let S = this.ranges[ie] - (this.inverted ? k : 0);
              if (S > c) break;
              let r = this.ranges[ie + L],
                s = S + r;
              if (c <= s && ie == N * 3) return !0;
              k += this.ranges[ie + W] - r;
            }
            return !1;
          }
          forEach(c) {
            let h = this.inverted ? 2 : 1,
              k = this.inverted ? 1 : 2;
            for (let N = 0, L = 0; N < this.ranges.length; N += 3) {
              let W = this.ranges[N],
                ie = W - (this.inverted ? L : 0),
                S = W + (this.inverted ? 0 : L),
                r = this.ranges[N + h],
                s = this.ranges[N + k];
              c(ie, ie + r, S, S + s), (L += s - r);
            }
          }
          invert() {
            return new Ne(this.ranges, !this.inverted);
          }
          toString() {
            return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
          }
          static offset(c) {
            return c == 0 ? Ne.empty : new Ne(c < 0 ? [0, -c, 0] : [0, 0, c]);
          }
        }
        Ne.empty = new Ne([]);
        class Ge {
          constructor(c = [], h, k = 0, N = c.length) {
            (this.maps = c), (this.mirror = h), (this.from = k), (this.to = N);
          }
          slice(c = 0, h = this.maps.length) {
            return new Ge(this.maps, this.mirror, c, h);
          }
          copy() {
            return new Ge(
              this.maps.slice(),
              this.mirror && this.mirror.slice(),
              this.from,
              this.to,
            );
          }
          appendMap(c, h) {
            (this.to = this.maps.push(c)),
              h != null && this.setMirror(this.maps.length - 1, h);
          }
          appendMapping(c) {
            for (let h = 0, k = this.maps.length; h < c.maps.length; h++) {
              let N = c.getMirror(h);
              this.appendMap(c.maps[h], N != null && N < h ? k + N : void 0);
            }
          }
          getMirror(c) {
            if (this.mirror) {
              for (let h = 0; h < this.mirror.length; h++)
                if (this.mirror[h] == c)
                  return this.mirror[h + (h % 2 ? -1 : 1)];
            }
          }
          setMirror(c, h) {
            this.mirror || (this.mirror = []), this.mirror.push(c, h);
          }
          appendMappingInverted(c) {
            for (
              let h = c.maps.length - 1, k = this.maps.length + c.maps.length;
              h >= 0;
              h--
            ) {
              let N = c.getMirror(h);
              this.appendMap(
                c.maps[h].invert(),
                N != null && N > h ? k - N - 1 : void 0,
              );
            }
          }
          invert() {
            let c = new Ge();
            return c.appendMappingInverted(this), c;
          }
          map(c, h = 1) {
            if (this.mirror) return this._map(c, h, !0);
            for (let k = this.from; k < this.to; k++)
              c = this.maps[k].map(c, h);
            return c;
          }
          mapResult(c, h = 1) {
            return this._map(c, h, !1);
          }
          _map(c, h, k) {
            let N = 0;
            for (let L = this.from; L < this.to; L++) {
              let W = this.maps[L],
                ie = W.mapResult(c, h);
              if (ie.recover != null) {
                let S = this.getMirror(L);
                if (S != null && S > L && S < this.to) {
                  (L = S), (c = this.maps[S].recover(ie.recover));
                  continue;
                }
              }
              (N |= ie.delInfo), (c = ie.pos);
            }
            return k ? c : new Je(c, N, null);
          }
        }
        const et = Object.create(null);
        class ye {
          getMap() {
            return Ne.empty;
          }
          merge(c) {
            return null;
          }
          static fromJSON(c, h) {
            if (!h || !h.stepType)
              throw new RangeError("Invalid input for Step.fromJSON");
            let k = et[h.stepType];
            if (!k) throw new RangeError(`No step type ${h.stepType} defined`);
            return k.fromJSON(c, h);
          }
          static jsonID(c, h) {
            if (c in et)
              throw new RangeError("Duplicate use of step JSON ID " + c);
            return (et[c] = h), (h.prototype.jsonID = c), h;
          }
        }
        class K {
          constructor(c, h) {
            (this.doc = c), (this.failed = h);
          }
          static ok(c) {
            return new K(c, null);
          }
          static fail(c) {
            return new K(null, c);
          }
          static fromReplace(c, h, k, N) {
            try {
              return K.ok(c.replace(h, k, N));
            } catch (L) {
              if (L instanceof v.vI) return K.fail(L.message);
              throw L;
            }
          }
        }
        function Q(J, c, h) {
          let k = [];
          for (let N = 0; N < J.childCount; N++) {
            let L = J.child(N);
            L.content.size && (L = L.copy(Q(L.content, c, L))),
              L.isInline && (L = c(L, h, N)),
              k.push(L);
          }
          return v.FK.fromArray(k);
        }
        class ce extends ye {
          constructor(c, h, k) {
            super(), (this.from = c), (this.to = h), (this.mark = k);
          }
          apply(c) {
            let h = c.slice(this.from, this.to),
              k = c.resolve(this.from),
              N = k.node(k.sharedDepth(this.to)),
              L = new v.Ji(
                Q(
                  h.content,
                  (W, ie) =>
                    !W.isAtom || !ie.type.allowsMarkType(this.mark.type)
                      ? W
                      : W.mark(this.mark.addToSet(W.marks)),
                  N,
                ),
                h.openStart,
                h.openEnd,
              );
            return K.fromReplace(c, this.from, this.to, L);
          }
          invert() {
            return new _(this.from, this.to, this.mark);
          }
          map(c) {
            let h = c.mapResult(this.from, 1),
              k = c.mapResult(this.to, -1);
            return (h.deleted && k.deleted) || h.pos >= k.pos
              ? null
              : new ce(h.pos, k.pos, this.mark);
          }
          merge(c) {
            return c instanceof ce &&
              c.mark.eq(this.mark) &&
              this.from <= c.to &&
              this.to >= c.from
              ? new ce(
                  Math.min(this.from, c.from),
                  Math.max(this.to, c.to),
                  this.mark,
                )
              : null;
          }
          toJSON() {
            return {
              stepType: "addMark",
              mark: this.mark.toJSON(),
              from: this.from,
              to: this.to,
            };
          }
          static fromJSON(c, h) {
            if (typeof h.from != "number" || typeof h.to != "number")
              throw new RangeError("Invalid input for AddMarkStep.fromJSON");
            return new ce(h.from, h.to, c.markFromJSON(h.mark));
          }
        }
        ye.jsonID("addMark", ce);
        class _ extends ye {
          constructor(c, h, k) {
            super(), (this.from = c), (this.to = h), (this.mark = k);
          }
          apply(c) {
            let h = c.slice(this.from, this.to),
              k = new v.Ji(
                Q(
                  h.content,
                  (N) => N.mark(this.mark.removeFromSet(N.marks)),
                  c,
                ),
                h.openStart,
                h.openEnd,
              );
            return K.fromReplace(c, this.from, this.to, k);
          }
          invert() {
            return new ce(this.from, this.to, this.mark);
          }
          map(c) {
            let h = c.mapResult(this.from, 1),
              k = c.mapResult(this.to, -1);
            return (h.deleted && k.deleted) || h.pos >= k.pos
              ? null
              : new _(h.pos, k.pos, this.mark);
          }
          merge(c) {
            return c instanceof _ &&
              c.mark.eq(this.mark) &&
              this.from <= c.to &&
              this.to >= c.from
              ? new _(
                  Math.min(this.from, c.from),
                  Math.max(this.to, c.to),
                  this.mark,
                )
              : null;
          }
          toJSON() {
            return {
              stepType: "removeMark",
              mark: this.mark.toJSON(),
              from: this.from,
              to: this.to,
            };
          }
          static fromJSON(c, h) {
            if (typeof h.from != "number" || typeof h.to != "number")
              throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
            return new _(h.from, h.to, c.markFromJSON(h.mark));
          }
        }
        ye.jsonID("removeMark", _);
        class G extends ye {
          constructor(c, h) {
            super(), (this.pos = c), (this.mark = h);
          }
          apply(c) {
            let h = c.nodeAt(this.pos);
            if (!h) return K.fail("No node at mark step's position");
            let k = h.type.create(h.attrs, null, this.mark.addToSet(h.marks));
            return K.fromReplace(
              c,
              this.pos,
              this.pos + 1,
              new v.Ji(v.FK.from(k), 0, h.isLeaf ? 0 : 1),
            );
          }
          invert(c) {
            let h = c.nodeAt(this.pos);
            if (h) {
              let k = this.mark.addToSet(h.marks);
              if (k.length == h.marks.length) {
                for (let N = 0; N < h.marks.length; N++)
                  if (!h.marks[N].isInSet(k))
                    return new G(this.pos, h.marks[N]);
                return new G(this.pos, this.mark);
              }
            }
            return new U(this.pos, this.mark);
          }
          map(c) {
            let h = c.mapResult(this.pos, 1);
            return h.deletedAfter ? null : new G(h.pos, this.mark);
          }
          toJSON() {
            return {
              stepType: "addNodeMark",
              pos: this.pos,
              mark: this.mark.toJSON(),
            };
          }
          static fromJSON(c, h) {
            if (typeof h.pos != "number")
              throw new RangeError(
                "Invalid input for AddNodeMarkStep.fromJSON",
              );
            return new G(h.pos, c.markFromJSON(h.mark));
          }
        }
        ye.jsonID("addNodeMark", G);
        class U extends ye {
          constructor(c, h) {
            super(), (this.pos = c), (this.mark = h);
          }
          apply(c) {
            let h = c.nodeAt(this.pos);
            if (!h) return K.fail("No node at mark step's position");
            let k = h.type.create(
              h.attrs,
              null,
              this.mark.removeFromSet(h.marks),
            );
            return K.fromReplace(
              c,
              this.pos,
              this.pos + 1,
              new v.Ji(v.FK.from(k), 0, h.isLeaf ? 0 : 1),
            );
          }
          invert(c) {
            let h = c.nodeAt(this.pos);
            return !h || !this.mark.isInSet(h.marks)
              ? this
              : new G(this.pos, this.mark);
          }
          map(c) {
            let h = c.mapResult(this.pos, 1);
            return h.deletedAfter ? null : new U(h.pos, this.mark);
          }
          toJSON() {
            return {
              stepType: "removeNodeMark",
              pos: this.pos,
              mark: this.mark.toJSON(),
            };
          }
          static fromJSON(c, h) {
            if (typeof h.pos != "number")
              throw new RangeError(
                "Invalid input for RemoveNodeMarkStep.fromJSON",
              );
            return new U(h.pos, c.markFromJSON(h.mark));
          }
        }
        ye.jsonID("removeNodeMark", U);
        class ae extends ye {
          constructor(c, h, k, N = !1) {
            super(),
              (this.from = c),
              (this.to = h),
              (this.slice = k),
              (this.structure = N);
          }
          apply(c) {
            return this.structure && me(c, this.from, this.to)
              ? K.fail("Structure replace would overwrite content")
              : K.fromReplace(c, this.from, this.to, this.slice);
          }
          getMap() {
            return new Ne([this.from, this.to - this.from, this.slice.size]);
          }
          invert(c) {
            return new ae(
              this.from,
              this.from + this.slice.size,
              c.slice(this.from, this.to),
            );
          }
          map(c) {
            let h = c.mapResult(this.from, 1),
              k = c.mapResult(this.to, -1);
            return h.deletedAcross && k.deletedAcross
              ? null
              : new ae(h.pos, Math.max(h.pos, k.pos), this.slice);
          }
          merge(c) {
            if (!(c instanceof ae) || c.structure || this.structure)
              return null;
            if (
              this.from + this.slice.size == c.from &&
              !this.slice.openEnd &&
              !c.slice.openStart
            ) {
              let h =
                this.slice.size + c.slice.size == 0
                  ? v.Ji.empty
                  : new v.Ji(
                      this.slice.content.append(c.slice.content),
                      this.slice.openStart,
                      c.slice.openEnd,
                    );
              return new ae(
                this.from,
                this.to + (c.to - c.from),
                h,
                this.structure,
              );
            } else if (
              c.to == this.from &&
              !this.slice.openStart &&
              !c.slice.openEnd
            ) {
              let h =
                this.slice.size + c.slice.size == 0
                  ? v.Ji.empty
                  : new v.Ji(
                      c.slice.content.append(this.slice.content),
                      c.slice.openStart,
                      this.slice.openEnd,
                    );
              return new ae(c.from, this.to, h, this.structure);
            } else return null;
          }
          toJSON() {
            let c = { stepType: "replace", from: this.from, to: this.to };
            return (
              this.slice.size && (c.slice = this.slice.toJSON()),
              this.structure && (c.structure = !0),
              c
            );
          }
          static fromJSON(c, h) {
            if (typeof h.from != "number" || typeof h.to != "number")
              throw new RangeError("Invalid input for ReplaceStep.fromJSON");
            return new ae(
              h.from,
              h.to,
              v.Ji.fromJSON(c, h.slice),
              !!h.structure,
            );
          }
        }
        ye.jsonID("replace", ae);
        class X extends ye {
          constructor(c, h, k, N, L, W, ie = !1) {
            super(),
              (this.from = c),
              (this.to = h),
              (this.gapFrom = k),
              (this.gapTo = N),
              (this.slice = L),
              (this.insert = W),
              (this.structure = ie);
          }
          apply(c) {
            if (
              this.structure &&
              (me(c, this.from, this.gapFrom) || me(c, this.gapTo, this.to))
            )
              return K.fail("Structure gap-replace would overwrite content");
            let h = c.slice(this.gapFrom, this.gapTo);
            if (h.openStart || h.openEnd)
              return K.fail("Gap is not a flat range");
            let k = this.slice.insertAt(this.insert, h.content);
            return k
              ? K.fromReplace(c, this.from, this.to, k)
              : K.fail("Content does not fit in gap");
          }
          getMap() {
            return new Ne([
              this.from,
              this.gapFrom - this.from,
              this.insert,
              this.gapTo,
              this.to - this.gapTo,
              this.slice.size - this.insert,
            ]);
          }
          invert(c) {
            let h = this.gapTo - this.gapFrom;
            return new X(
              this.from,
              this.from + this.slice.size + h,
              this.from + this.insert,
              this.from + this.insert + h,
              c
                .slice(this.from, this.to)
                .removeBetween(
                  this.gapFrom - this.from,
                  this.gapTo - this.from,
                ),
              this.gapFrom - this.from,
              this.structure,
            );
          }
          map(c) {
            let h = c.mapResult(this.from, 1),
              k = c.mapResult(this.to, -1),
              N = this.from == this.gapFrom ? h.pos : c.map(this.gapFrom, -1),
              L = this.to == this.gapTo ? k.pos : c.map(this.gapTo, 1);
            return (h.deletedAcross && k.deletedAcross) ||
              N < h.pos ||
              L > k.pos
              ? null
              : new X(
                  h.pos,
                  k.pos,
                  N,
                  L,
                  this.slice,
                  this.insert,
                  this.structure,
                );
          }
          toJSON() {
            let c = {
              stepType: "replaceAround",
              from: this.from,
              to: this.to,
              gapFrom: this.gapFrom,
              gapTo: this.gapTo,
              insert: this.insert,
            };
            return (
              this.slice.size && (c.slice = this.slice.toJSON()),
              this.structure && (c.structure = !0),
              c
            );
          }
          static fromJSON(c, h) {
            if (
              typeof h.from != "number" ||
              typeof h.to != "number" ||
              typeof h.gapFrom != "number" ||
              typeof h.gapTo != "number" ||
              typeof h.insert != "number"
            )
              throw new RangeError(
                "Invalid input for ReplaceAroundStep.fromJSON",
              );
            return new X(
              h.from,
              h.to,
              h.gapFrom,
              h.gapTo,
              v.Ji.fromJSON(c, h.slice),
              h.insert,
              !!h.structure,
            );
          }
        }
        ye.jsonID("replaceAround", X);
        function me(J, c, h) {
          let k = J.resolve(c),
            N = h - c,
            L = k.depth;
          for (; N > 0 && L > 0 && k.indexAfter(L) == k.node(L).childCount; )
            L--, N--;
          if (N > 0) {
            let W = k.node(L).maybeChild(k.indexAfter(L));
            for (; N > 0; ) {
              if (!W || W.isLeaf) return !0;
              (W = W.firstChild), N--;
            }
          }
          return !1;
        }
        function ke(J, c, h, k) {
          let N = [],
            L = [],
            W,
            ie;
          J.doc.nodesBetween(c, h, (S, r, s) => {
            if (!S.isInline) return;
            let a = S.marks;
            if (!k.isInSet(a) && s.type.allowsMarkType(k.type)) {
              let p = Math.max(r, c),
                b = Math.min(r + S.nodeSize, h),
                w = k.addToSet(a);
              for (let P = 0; P < a.length; P++)
                a[P].isInSet(w) ||
                  (W && W.to == p && W.mark.eq(a[P])
                    ? (W.to = b)
                    : N.push((W = new _(p, b, a[P]))));
              ie && ie.to == p ? (ie.to = b) : L.push((ie = new ce(p, b, k)));
            }
          }),
            N.forEach((S) => J.step(S)),
            L.forEach((S) => J.step(S));
        }
        function Be(J, c, h, k) {
          let N = [],
            L = 0;
          J.doc.nodesBetween(c, h, (W, ie) => {
            if (!W.isInline) return;
            L++;
            let S = null;
            if (k instanceof v.sX) {
              let r = W.marks,
                s;
              for (; (s = k.isInSet(r)); )
                (S || (S = [])).push(s), (r = s.removeFromSet(r));
            } else k ? k.isInSet(W.marks) && (S = [k]) : (S = W.marks);
            if (S && S.length) {
              let r = Math.min(ie + W.nodeSize, h);
              for (let s = 0; s < S.length; s++) {
                let a = S[s],
                  p;
                for (let b = 0; b < N.length; b++) {
                  let w = N[b];
                  w.step == L - 1 && a.eq(N[b].style) && (p = w);
                }
                p
                  ? ((p.to = r), (p.step = L))
                  : N.push({ style: a, from: Math.max(ie, c), to: r, step: L });
              }
            }
          }),
            N.forEach((W) => J.step(new _(W.from, W.to, W.style)));
        }
        function Re(J, c, h, k = h.contentMatch, N = !0) {
          let L = J.doc.nodeAt(c),
            W = [],
            ie = c + 1;
          for (let S = 0; S < L.childCount; S++) {
            let r = L.child(S),
              s = ie + r.nodeSize,
              a = k.matchType(r.type);
            if (!a) W.push(new ae(ie, s, v.Ji.empty));
            else {
              k = a;
              for (let p = 0; p < r.marks.length; p++)
                h.allowsMarkType(r.marks[p].type) ||
                  J.step(new _(ie, s, r.marks[p]));
              if (N && r.isText && h.whitespace != "pre") {
                let p,
                  b = /\r?\n|\r/g,
                  w;
                for (; (p = b.exec(r.text)); )
                  w ||
                    (w = new v.Ji(
                      v.FK.from(h.schema.text(" ", h.allowedMarks(r.marks))),
                      0,
                      0,
                    )),
                    W.push(new ae(ie + p.index, ie + p.index + p[0].length, w));
              }
            }
            ie = s;
          }
          if (!k.validEnd) {
            let S = k.fillBefore(v.FK.empty, !0);
            J.replace(ie, ie, new v.Ji(S, 0, 0));
          }
          for (let S = W.length - 1; S >= 0; S--) J.step(W[S]);
        }
        function Ve(J, c, h) {
          return (
            (c == 0 || J.canReplace(c, J.childCount)) &&
            (h == J.childCount || J.canReplace(0, h))
          );
        }
        function Ae(J) {
          let h = J.parent.content.cutByIndex(J.startIndex, J.endIndex);
          for (let k = J.depth; ; --k) {
            let N = J.$from.node(k),
              L = J.$from.index(k),
              W = J.$to.indexAfter(k);
            if (k < J.depth && N.canReplace(L, W, h)) return k;
            if (k == 0 || N.type.spec.isolating || !Ve(N, L, W)) break;
          }
          return null;
        }
        function de(J, c, h) {
          let { $from: k, $to: N, depth: L } = c,
            W = k.before(L + 1),
            ie = N.after(L + 1),
            S = W,
            r = ie,
            s = v.FK.empty,
            a = 0;
          for (let w = L, P = !1; w > h; w--)
            P || k.index(w) > 0
              ? ((P = !0), (s = v.FK.from(k.node(w).copy(s))), a++)
              : S--;
          let p = v.FK.empty,
            b = 0;
          for (let w = L, P = !1; w > h; w--)
            P || N.after(w + 1) < N.end(w)
              ? ((P = !0), (p = v.FK.from(N.node(w).copy(p))), b++)
              : r++;
          J.step(
            new X(S, r, W, ie, new v.Ji(s.append(p), a, b), s.size - a, !0),
          );
        }
        function C(J, c, h = null, k = J) {
          let N = T(J, c),
            L = N && A(k, c);
          return L
            ? N.map(z).concat({ type: c, attrs: h }).concat(L.map(z))
            : null;
        }
        function z(J) {
          return { type: J, attrs: null };
        }
        function T(J, c) {
          let { parent: h, startIndex: k, endIndex: N } = J,
            L = h.contentMatchAt(k).findWrapping(c);
          if (!L) return null;
          let W = L.length ? L[0] : c;
          return h.canReplaceWith(k, N, W) ? L : null;
        }
        function A(J, c) {
          let { parent: h, startIndex: k, endIndex: N } = J,
            L = h.child(k),
            W = c.contentMatch.findWrapping(L.type);
          if (!W) return null;
          let S = (W.length ? W[W.length - 1] : c).contentMatch;
          for (let r = k; S && r < N; r++) S = S.matchType(h.child(r).type);
          return !S || !S.validEnd ? null : W;
        }
        function B(J, c, h) {
          let k = v.FK.empty;
          for (let W = h.length - 1; W >= 0; W--) {
            if (k.size) {
              let ie = h[W].type.contentMatch.matchFragment(k);
              if (!ie || !ie.validEnd)
                throw new RangeError(
                  "Wrapper type given to Transform.wrap does not form valid content of its parent wrapper",
                );
            }
            k = v.FK.from(h[W].type.create(h[W].attrs, k));
          }
          let N = c.start,
            L = c.end;
          J.step(new X(N, L, N, L, new v.Ji(k, 0, 0), h.length, !0));
        }
        function j(J, c, h, k, N) {
          if (!k.isTextblock)
            throw new RangeError(
              "Type given to setBlockType should be a textblock",
            );
          let L = J.steps.length;
          J.doc.nodesBetween(c, h, (W, ie) => {
            if (
              W.isTextblock &&
              !W.hasMarkup(k, N) &&
              Oe(J.doc, J.mapping.slice(L).map(ie), k)
            ) {
              let S = null;
              if (k.schema.linebreakReplacement) {
                let p = k.whitespace == "pre",
                  b = !!k.contentMatch.matchType(k.schema.linebreakReplacement);
                p && !b ? (S = !1) : !p && b && (S = !0);
              }
              S === !1 && pe(J, W, ie, L),
                Re(J, J.mapping.slice(L).map(ie, 1), k, void 0, S === null);
              let r = J.mapping.slice(L),
                s = r.map(ie, 1),
                a = r.map(ie + W.nodeSize, 1);
              return (
                J.step(
                  new X(
                    s,
                    a,
                    s + 1,
                    a - 1,
                    new v.Ji(v.FK.from(k.create(N, null, W.marks)), 0, 0),
                    1,
                    !0,
                  ),
                ),
                S === !0 && Y(J, W, ie, L),
                !1
              );
            }
          });
        }
        function Y(J, c, h, k) {
          c.forEach((N, L) => {
            if (N.isText) {
              let W,
                ie = /\r?\n|\r/g;
              for (; (W = ie.exec(N.text)); ) {
                let S = J.mapping.slice(k).map(h + 1 + L + W.index);
                J.replaceWith(
                  S,
                  S + 1,
                  c.type.schema.linebreakReplacement.create(),
                );
              }
            }
          });
        }
        function pe(J, c, h, k) {
          c.forEach((N, L) => {
            if (N.type == N.type.schema.linebreakReplacement) {
              let W = J.mapping.slice(k).map(h + 1 + L);
              J.replaceWith(
                W,
                W + 1,
                c.type.schema.text(`
`),
              );
            }
          });
        }
        function Oe(J, c, h) {
          let k = J.resolve(c),
            N = k.index();
          return k.parent.canReplaceWith(N, N + 1, h);
        }
        function De(J, c, h, k, N) {
          let L = J.doc.nodeAt(c);
          if (!L) throw new RangeError("No node at given position");
          h || (h = L.type);
          let W = h.create(k, null, N || L.marks);
          if (L.isLeaf) return J.replaceWith(c, c + L.nodeSize, W);
          if (!h.validContent(L.content))
            throw new RangeError("Invalid content for node type " + h.name);
          J.step(
            new X(
              c,
              c + L.nodeSize,
              c + 1,
              c + L.nodeSize - 1,
              new v.Ji(v.FK.from(W), 0, 0),
              1,
              !0,
            ),
          );
        }
        function Le(J, c, h = 1, k) {
          let N = J.resolve(c),
            L = N.depth - h,
            W = (k && k[k.length - 1]) || N.parent;
          if (
            L < 0 ||
            N.parent.type.spec.isolating ||
            !N.parent.canReplace(N.index(), N.parent.childCount) ||
            !W.type.validContent(
              N.parent.content.cutByIndex(N.index(), N.parent.childCount),
            )
          )
            return !1;
          for (let r = N.depth - 1, s = h - 2; r > L; r--, s--) {
            let a = N.node(r),
              p = N.index(r);
            if (a.type.spec.isolating) return !1;
            let b = a.content.cutByIndex(p, a.childCount),
              w = k && k[s + 1];
            w && (b = b.replaceChild(0, w.type.create(w.attrs)));
            let P = (k && k[s]) || a;
            if (!a.canReplace(p + 1, a.childCount) || !P.type.validContent(b))
              return !1;
          }
          let ie = N.indexAfter(L),
            S = k && k[0];
          return N.node(L).canReplaceWith(
            ie,
            ie,
            S ? S.type : N.node(L + 1).type,
          );
        }
        function Qe(J, c, h = 1, k) {
          let N = J.doc.resolve(c),
            L = v.FK.empty,
            W = v.FK.empty;
          for (
            let ie = N.depth, S = N.depth - h, r = h - 1;
            ie > S;
            ie--, r--
          ) {
            L = v.FK.from(N.node(ie).copy(L));
            let s = k && k[r];
            W = v.FK.from(s ? s.type.create(s.attrs, W) : N.node(ie).copy(W));
          }
          J.step(new ae(c, c, new v.Ji(L.append(W), h, h), !0));
        }
        function nt(J, c) {
          let h = J.resolve(c),
            k = h.index();
          return qe(h.nodeBefore, h.nodeAfter) && h.parent.canReplace(k, k + 1);
        }
        function qe(J, c) {
          return !!(J && c && !J.isLeaf && J.canAppend(c));
        }
        function st(J, c, h = -1) {
          let k = J.resolve(c);
          for (let N = k.depth; ; N--) {
            let L,
              W,
              ie = k.index(N);
            if (
              (N == k.depth
                ? ((L = k.nodeBefore), (W = k.nodeAfter))
                : h > 0
                  ? ((L = k.node(N + 1)), ie++, (W = k.node(N).maybeChild(ie)))
                  : ((L = k.node(N).maybeChild(ie - 1)), (W = k.node(N + 1))),
              L &&
                !L.isTextblock &&
                qe(L, W) &&
                k.node(N).canReplace(ie, ie + 1))
            )
              return c;
            if (N == 0) break;
            c = h < 0 ? k.before(N) : k.after(N);
          }
        }
        function ft(J, c, h) {
          let k = new ae(c - h, c + h, v.Ji.empty, !0);
          J.step(k);
        }
        function mt(J, c, h) {
          let k = J.resolve(c);
          if (k.parent.canReplaceWith(k.index(), k.index(), h)) return c;
          if (k.parentOffset == 0)
            for (let N = k.depth - 1; N >= 0; N--) {
              let L = k.index(N);
              if (k.node(N).canReplaceWith(L, L, h)) return k.before(N + 1);
              if (L > 0) return null;
            }
          if (k.parentOffset == k.parent.content.size)
            for (let N = k.depth - 1; N >= 0; N--) {
              let L = k.indexAfter(N);
              if (k.node(N).canReplaceWith(L, L, h)) return k.after(N + 1);
              if (L < k.node(N).childCount) return null;
            }
          return null;
        }
        function $(J, c, h) {
          let k = J.resolve(c);
          if (!h.content.size) return c;
          let N = h.content;
          for (let L = 0; L < h.openStart; L++) N = N.firstChild.content;
          for (let L = 1; L <= (h.openStart == 0 && h.size ? 2 : 1); L++)
            for (let W = k.depth; W >= 0; W--) {
              let ie =
                  W == k.depth
                    ? 0
                    : k.pos <= (k.start(W + 1) + k.end(W + 1)) / 2
                      ? -1
                      : 1,
                S = k.index(W) + (ie > 0 ? 1 : 0),
                r = k.node(W),
                s = !1;
              if (L == 1) s = r.canReplace(S, S, N);
              else {
                let a = r.contentMatchAt(S).findWrapping(N.firstChild.type);
                s = a && r.canReplaceWith(S, S, a[0]);
              }
              if (s)
                return ie == 0
                  ? k.pos
                  : ie < 0
                    ? k.before(W + 1)
                    : k.after(W + 1);
            }
          return null;
        }
        function H(J, c, h = c, k = v.Ji.empty) {
          if (c == h && !k.size) return null;
          let N = J.resolve(c),
            L = J.resolve(h);
          return te(N, L, k) ? new ae(c, h, k) : new re(N, L, k).fit();
        }
        function te(J, c, h) {
          return (
            !h.openStart &&
            !h.openEnd &&
            J.start() == c.start() &&
            J.parent.canReplace(J.index(), c.index(), h.content)
          );
        }
        class re {
          constructor(c, h, k) {
            (this.$from = c),
              (this.$to = h),
              (this.unplaced = k),
              (this.frontier = []),
              (this.placed = v.FK.empty);
            for (let N = 0; N <= c.depth; N++) {
              let L = c.node(N);
              this.frontier.push({
                type: L.type,
                match: L.contentMatchAt(c.indexAfter(N)),
              });
            }
            for (let N = c.depth; N > 0; N--)
              this.placed = v.FK.from(c.node(N).copy(this.placed));
          }
          get depth() {
            return this.frontier.length - 1;
          }
          fit() {
            for (; this.unplaced.size; ) {
              let r = this.findFittable();
              r ? this.placeNodes(r) : this.openMore() || this.dropNode();
            }
            let c = this.mustMoveInline(),
              h = this.placed.size - this.depth - this.$from.depth,
              k = this.$from,
              N = this.close(c < 0 ? this.$to : k.doc.resolve(c));
            if (!N) return null;
            let L = this.placed,
              W = k.depth,
              ie = N.depth;
            for (; W && ie && L.childCount == 1; )
              (L = L.firstChild.content), W--, ie--;
            let S = new v.Ji(L, W, ie);
            return c > -1
              ? new X(k.pos, c, this.$to.pos, this.$to.end(), S, h)
              : S.size || k.pos != this.$to.pos
                ? new ae(k.pos, N.pos, S)
                : null;
          }
          findFittable() {
            let c = this.unplaced.openStart;
            for (
              let h = this.unplaced.content, k = 0, N = this.unplaced.openEnd;
              k < c;
              k++
            ) {
              let L = h.firstChild;
              if (
                (h.childCount > 1 && (N = 0), L.type.spec.isolating && N <= k)
              ) {
                c = k;
                break;
              }
              h = L.content;
            }
            for (let h = 1; h <= 2; h++)
              for (let k = h == 1 ? c : this.unplaced.openStart; k >= 0; k--) {
                let N,
                  L = null;
                k
                  ? ((L = be(this.unplaced.content, k - 1).firstChild),
                    (N = L.content))
                  : (N = this.unplaced.content);
                let W = N.firstChild;
                for (let ie = this.depth; ie >= 0; ie--) {
                  let { type: S, match: r } = this.frontier[ie],
                    s,
                    a = null;
                  if (
                    h == 1 &&
                    (W
                      ? r.matchType(W.type) ||
                        (a = r.fillBefore(v.FK.from(W), !1))
                      : L && S.compatibleContent(L.type))
                  )
                    return {
                      sliceDepth: k,
                      frontierDepth: ie,
                      parent: L,
                      inject: a,
                    };
                  if (h == 2 && W && (s = r.findWrapping(W.type)))
                    return {
                      sliceDepth: k,
                      frontierDepth: ie,
                      parent: L,
                      wrap: s,
                    };
                  if (L && r.matchType(L.type)) break;
                }
              }
          }
          openMore() {
            let { content: c, openStart: h, openEnd: k } = this.unplaced,
              N = be(c, h);
            return !N.childCount || N.firstChild.isLeaf
              ? !1
              : ((this.unplaced = new v.Ji(
                  c,
                  h + 1,
                  Math.max(k, N.size + h >= c.size - k ? h + 1 : 0),
                )),
                !0);
          }
          dropNode() {
            let { content: c, openStart: h, openEnd: k } = this.unplaced,
              N = be(c, h);
            if (N.childCount <= 1 && h > 0) {
              let L = c.size - h <= h + N.size;
              this.unplaced = new v.Ji(oe(c, h - 1, 1), h - 1, L ? h - 1 : k);
            } else this.unplaced = new v.Ji(oe(c, h, 1), h, k);
          }
          placeNodes({
            sliceDepth: c,
            frontierDepth: h,
            parent: k,
            inject: N,
            wrap: L,
          }) {
            for (; this.depth > h; ) this.closeFrontierNode();
            if (L)
              for (let P = 0; P < L.length; P++) this.openFrontierNode(L[P]);
            let W = this.unplaced,
              ie = k ? k.content : W.content,
              S = W.openStart - c,
              r = 0,
              s = [],
              { match: a, type: p } = this.frontier[h];
            if (N) {
              for (let P = 0; P < N.childCount; P++) s.push(N.child(P));
              a = a.matchFragment(N);
            }
            let b = ie.size + c - (W.content.size - W.openEnd);
            for (; r < ie.childCount; ) {
              let P = ie.child(r),
                q = a.matchType(P.type);
              if (!q) break;
              r++,
                (r > 1 || S == 0 || P.content.size) &&
                  ((a = q),
                  s.push(
                    we(
                      P.mark(p.allowedMarks(P.marks)),
                      r == 1 ? S : 0,
                      r == ie.childCount ? b : -1,
                    ),
                  ));
            }
            let w = r == ie.childCount;
            w || (b = -1),
              (this.placed = fe(this.placed, h, v.FK.from(s))),
              (this.frontier[h].match = a),
              w &&
                b < 0 &&
                k &&
                k.type == this.frontier[this.depth].type &&
                this.frontier.length > 1 &&
                this.closeFrontierNode();
            for (let P = 0, q = ie; P < b; P++) {
              let Ce = q.lastChild;
              this.frontier.push({
                type: Ce.type,
                match: Ce.contentMatchAt(Ce.childCount),
              }),
                (q = Ce.content);
            }
            this.unplaced = w
              ? c == 0
                ? v.Ji.empty
                : new v.Ji(
                    oe(W.content, c - 1, 1),
                    c - 1,
                    b < 0 ? W.openEnd : c - 1,
                  )
              : new v.Ji(oe(W.content, c, r), W.openStart, W.openEnd);
          }
          mustMoveInline() {
            if (!this.$to.parent.isTextblock) return -1;
            let c = this.frontier[this.depth],
              h;
            if (
              !c.type.isTextblock ||
              !He(this.$to, this.$to.depth, c.type, c.match, !1) ||
              (this.$to.depth == this.depth &&
                (h = this.findCloseLevel(this.$to)) &&
                h.depth == this.depth)
            )
              return -1;
            let { depth: k } = this.$to,
              N = this.$to.after(k);
            for (; k > 1 && N == this.$to.end(--k); ) ++N;
            return N;
          }
          findCloseLevel(c) {
            e: for (let h = Math.min(this.depth, c.depth); h >= 0; h--) {
              let { match: k, type: N } = this.frontier[h],
                L = h < c.depth && c.end(h + 1) == c.pos + (c.depth - (h + 1)),
                W = He(c, h, N, k, L);
              if (W) {
                for (let ie = h - 1; ie >= 0; ie--) {
                  let { match: S, type: r } = this.frontier[ie],
                    s = He(c, ie, r, S, !0);
                  if (!s || s.childCount) continue e;
                }
                return {
                  depth: h,
                  fit: W,
                  move: L ? c.doc.resolve(c.after(h + 1)) : c,
                };
              }
            }
          }
          close(c) {
            let h = this.findCloseLevel(c);
            if (!h) return null;
            for (; this.depth > h.depth; ) this.closeFrontierNode();
            h.fit.childCount && (this.placed = fe(this.placed, h.depth, h.fit)),
              (c = h.move);
            for (let k = h.depth + 1; k <= c.depth; k++) {
              let N = c.node(k),
                L = N.type.contentMatch.fillBefore(N.content, !0, c.index(k));
              this.openFrontierNode(N.type, N.attrs, L);
            }
            return c;
          }
          openFrontierNode(c, h = null, k) {
            let N = this.frontier[this.depth];
            (N.match = N.match.matchType(c)),
              (this.placed = fe(
                this.placed,
                this.depth,
                v.FK.from(c.create(h, k)),
              )),
              this.frontier.push({ type: c, match: c.contentMatch });
          }
          closeFrontierNode() {
            let h = this.frontier.pop().match.fillBefore(v.FK.empty, !0);
            h.childCount &&
              (this.placed = fe(this.placed, this.frontier.length, h));
          }
        }
        function oe(J, c, h) {
          return c == 0
            ? J.cutByIndex(h, J.childCount)
            : J.replaceChild(
                0,
                J.firstChild.copy(oe(J.firstChild.content, c - 1, h)),
              );
        }
        function fe(J, c, h) {
          return c == 0
            ? J.append(h)
            : J.replaceChild(
                J.childCount - 1,
                J.lastChild.copy(fe(J.lastChild.content, c - 1, h)),
              );
        }
        function be(J, c) {
          for (let h = 0; h < c; h++) J = J.firstChild.content;
          return J;
        }
        function we(J, c, h) {
          if (c <= 0) return J;
          let k = J.content;
          return (
            c > 1 &&
              (k = k.replaceChild(
                0,
                we(k.firstChild, c - 1, k.childCount == 1 ? h - 1 : 0),
              )),
            c > 0 &&
              ((k = J.type.contentMatch.fillBefore(k).append(k)),
              h <= 0 &&
                (k = k.append(
                  J.type.contentMatch
                    .matchFragment(k)
                    .fillBefore(v.FK.empty, !0),
                ))),
            J.copy(k)
          );
        }
        function He(J, c, h, k, N) {
          let L = J.node(c),
            W = N ? J.indexAfter(c) : J.index(c);
          if (W == L.childCount && !h.compatibleContent(L.type)) return null;
          let ie = k.fillBefore(L.content, !0, W);
          return ie && !je(h, L.content, W) ? ie : null;
        }
        function je(J, c, h) {
          for (let k = h; k < c.childCount; k++)
            if (!J.allowsMarks(c.child(k).marks)) return !0;
          return !1;
        }
        function Ue(J) {
          return J.spec.defining || J.spec.definingForContent;
        }
        function $e(J, c, h, k) {
          if (!k.size) return J.deleteRange(c, h);
          let N = J.doc.resolve(c),
            L = J.doc.resolve(h);
          if (te(N, L, k)) return J.step(new ae(c, h, k));
          let W = at(N, J.doc.resolve(h));
          W[W.length - 1] == 0 && W.pop();
          let ie = -(N.depth + 1);
          W.unshift(ie);
          for (let p = N.depth, b = N.pos - 1; p > 0; p--, b--) {
            let w = N.node(p).type.spec;
            if (w.defining || w.definingAsContext || w.isolating) break;
            W.indexOf(p) > -1
              ? (ie = p)
              : N.before(p) == b && W.splice(1, 0, -p);
          }
          let S = W.indexOf(ie),
            r = [],
            s = k.openStart;
          for (let p = k.content, b = 0; ; b++) {
            let w = p.firstChild;
            if ((r.push(w), b == k.openStart)) break;
            p = w.content;
          }
          for (let p = s - 1; p >= 0; p--) {
            let b = r[p],
              w = Ue(b.type);
            if (w && !b.sameMarkup(N.node(Math.abs(ie) - 1))) s = p;
            else if (w || !b.type.isTextblock) break;
          }
          for (let p = k.openStart; p >= 0; p--) {
            let b = (p + s + 1) % (k.openStart + 1),
              w = r[b];
            if (w)
              for (let P = 0; P < W.length; P++) {
                let q = W[(P + S) % W.length],
                  Ce = !0;
                q < 0 && ((Ce = !1), (q = -q));
                let Pe = N.node(q - 1),
                  ct = N.index(q - 1);
                if (Pe.canReplaceWith(ct, ct, w.type, w.marks))
                  return J.replace(
                    N.before(q),
                    Ce ? L.after(q) : h,
                    new v.Ji(Ze(k.content, 0, k.openStart, b), b, k.openEnd),
                  );
              }
          }
          let a = J.steps.length;
          for (
            let p = W.length - 1;
            p >= 0 && (J.replace(c, h, k), !(J.steps.length > a));
            p--
          ) {
            let b = W[p];
            b < 0 || ((c = N.before(b)), (h = L.after(b)));
          }
        }
        function Ze(J, c, h, k, N) {
          if (c < h) {
            let L = J.firstChild;
            J = J.replaceChild(0, L.copy(Ze(L.content, c + 1, h, k, L)));
          }
          if (c > k) {
            let L = N.contentMatchAt(0),
              W = L.fillBefore(J).append(J);
            J = W.append(L.matchFragment(W).fillBefore(v.FK.empty, !0));
          }
          return J;
        }
        function rt(J, c, h, k) {
          if (!k.isInline && c == h && J.doc.resolve(c).parent.content.size) {
            let N = mt(J.doc, c, k.type);
            N != null && (c = h = N);
          }
          J.replaceRange(c, h, new v.Ji(v.FK.from(k), 0, 0));
        }
        function it(J, c, h) {
          let k = J.doc.resolve(c),
            N = J.doc.resolve(h),
            L = at(k, N);
          for (let W = 0; W < L.length; W++) {
            let ie = L[W],
              S = W == L.length - 1;
            if ((S && ie == 0) || k.node(ie).type.contentMatch.validEnd)
              return J.delete(k.start(ie), N.end(ie));
            if (
              ie > 0 &&
              (S ||
                k
                  .node(ie - 1)
                  .canReplace(k.index(ie - 1), N.indexAfter(ie - 1)))
            )
              return J.delete(k.before(ie), N.after(ie));
          }
          for (let W = 1; W <= k.depth && W <= N.depth; W++)
            if (
              c - k.start(W) == k.depth - W &&
              h > k.end(W) &&
              N.end(W) - h != N.depth - W
            )
              return J.delete(k.before(W), h);
          J.delete(c, h);
        }
        function at(J, c) {
          let h = [],
            k = Math.min(J.depth, c.depth);
          for (let N = k; N >= 0; N--) {
            let L = J.start(N);
            if (
              L < J.pos - (J.depth - N) ||
              c.end(N) > c.pos + (c.depth - N) ||
              J.node(N).type.spec.isolating ||
              c.node(N).type.spec.isolating
            )
              break;
            (L == c.start(N) ||
              (N == J.depth &&
                N == c.depth &&
                J.parent.inlineContent &&
                c.parent.inlineContent &&
                N &&
                c.start(N - 1) == L - 1)) &&
              h.push(N);
          }
          return h;
        }
        class gt extends ye {
          constructor(c, h, k) {
            super(), (this.pos = c), (this.attr = h), (this.value = k);
          }
          apply(c) {
            let h = c.nodeAt(this.pos);
            if (!h) return K.fail("No node at attribute step's position");
            let k = Object.create(null);
            for (let L in h.attrs) k[L] = h.attrs[L];
            k[this.attr] = this.value;
            let N = h.type.create(k, null, h.marks);
            return K.fromReplace(
              c,
              this.pos,
              this.pos + 1,
              new v.Ji(v.FK.from(N), 0, h.isLeaf ? 0 : 1),
            );
          }
          getMap() {
            return Ne.empty;
          }
          invert(c) {
            return new gt(
              this.pos,
              this.attr,
              c.nodeAt(this.pos).attrs[this.attr],
            );
          }
          map(c) {
            let h = c.mapResult(this.pos, 1);
            return h.deletedAfter ? null : new gt(h.pos, this.attr, this.value);
          }
          toJSON() {
            return {
              stepType: "attr",
              pos: this.pos,
              attr: this.attr,
              value: this.value,
            };
          }
          static fromJSON(c, h) {
            if (typeof h.pos != "number" || typeof h.attr != "string")
              throw new RangeError("Invalid input for AttrStep.fromJSON");
            return new gt(h.pos, h.attr, h.value);
          }
        }
        ye.jsonID("attr", gt);
        class dt extends ye {
          constructor(c, h) {
            super(), (this.attr = c), (this.value = h);
          }
          apply(c) {
            let h = Object.create(null);
            for (let N in c.attrs) h[N] = c.attrs[N];
            h[this.attr] = this.value;
            let k = c.type.create(h, c.content, c.marks);
            return K.ok(k);
          }
          getMap() {
            return Ne.empty;
          }
          invert(c) {
            return new dt(this.attr, c.attrs[this.attr]);
          }
          map(c) {
            return this;
          }
          toJSON() {
            return { stepType: "docAttr", attr: this.attr, value: this.value };
          }
          static fromJSON(c, h) {
            if (typeof h.attr != "string")
              throw new RangeError("Invalid input for DocAttrStep.fromJSON");
            return new dt(h.attr, h.value);
          }
        }
        ye.jsonID("docAttr", dt);
        let kt = class extends Error {};
        (kt = function J(c) {
          let h = Error.call(this, c);
          return (h.__proto__ = J.prototype), h;
        }),
          (kt.prototype = Object.create(Error.prototype)),
          (kt.prototype.constructor = kt),
          (kt.prototype.name = "TransformError");
        class _t {
          constructor(c) {
            (this.doc = c),
              (this.steps = []),
              (this.docs = []),
              (this.mapping = new Ge());
          }
          get before() {
            return this.docs.length ? this.docs[0] : this.doc;
          }
          step(c) {
            let h = this.maybeStep(c);
            if (h.failed) throw new kt(h.failed);
            return this;
          }
          maybeStep(c) {
            let h = c.apply(this.doc);
            return h.failed || this.addStep(c, h.doc), h;
          }
          get docChanged() {
            return this.steps.length > 0;
          }
          addStep(c, h) {
            this.docs.push(this.doc),
              this.steps.push(c),
              this.mapping.appendMap(c.getMap()),
              (this.doc = h);
          }
          replace(c, h = c, k = v.Ji.empty) {
            let N = H(this.doc, c, h, k);
            return N && this.step(N), this;
          }
          replaceWith(c, h, k) {
            return this.replace(c, h, new v.Ji(v.FK.from(k), 0, 0));
          }
          delete(c, h) {
            return this.replace(c, h, v.Ji.empty);
          }
          insert(c, h) {
            return this.replaceWith(c, c, h);
          }
          replaceRange(c, h, k) {
            return $e(this, c, h, k), this;
          }
          replaceRangeWith(c, h, k) {
            return rt(this, c, h, k), this;
          }
          deleteRange(c, h) {
            return it(this, c, h), this;
          }
          lift(c, h) {
            return de(this, c, h), this;
          }
          join(c, h = 1) {
            return ft(this, c, h), this;
          }
          wrap(c, h) {
            return B(this, c, h), this;
          }
          setBlockType(c, h = c, k, N = null) {
            return j(this, c, h, k, N), this;
          }
          setNodeMarkup(c, h, k = null, N) {
            return De(this, c, h, k, N), this;
          }
          setNodeAttribute(c, h, k) {
            return this.step(new gt(c, h, k)), this;
          }
          setDocAttribute(c, h) {
            return this.step(new dt(c, h)), this;
          }
          addNodeMark(c, h) {
            return this.step(new G(c, h)), this;
          }
          removeNodeMark(c, h) {
            if (!(h instanceof v.CU)) {
              let k = this.doc.nodeAt(c);
              if (!k) throw new RangeError("No node at position " + c);
              if (((h = h.isInSet(k.marks)), !h)) return this;
            }
            return this.step(new U(c, h)), this;
          }
          split(c, h = 1, k) {
            return Qe(this, c, h, k), this;
          }
          addMark(c, h, k) {
            return ke(this, c, h, k), this;
          }
          removeMark(c, h, k) {
            return Be(this, c, h, k), this;
          }
          clearIncompatible(c, h, k) {
            return Re(this, c, h, k), this;
          }
        }
      },
      29287: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { Lz: () => Gr, NZ: () => Mt, zF: () => pt });
        var v = Fe(52893),
          se = Fe(57053),
          Te = Fe(63734);
        const ve = function (t) {
            for (var e = 0; ; e++) if (((t = t.previousSibling), !t)) return e;
          },
          ge = function (t) {
            let e = t.assignedSlot || t.parentNode;
            return e && e.nodeType == 11 ? e.host : e;
          };
        let Ye = null;
        const _e = function (t, e, n) {
            let i = Ye || (Ye = document.createRange());
            return (
              i.setEnd(t, n ?? t.nodeValue.length), i.setStart(t, e || 0), i
            );
          },
          ze = function () {
            Ye = null;
          },
          Me = function (t, e, n, i) {
            return n && (Je(t, e, n, i, -1) || Je(t, e, n, i, 1));
          },
          We = /^(img|br|input|textarea|hr)$/i;
        function Je(t, e, n, i, o) {
          for (;;) {
            if (t == n && e == i) return !0;
            if (e == (o < 0 ? 0 : Ne(t))) {
              let l = t.parentNode;
              if (
                !l ||
                l.nodeType != 1 ||
                K(t) ||
                We.test(t.nodeName) ||
                t.contentEditable == "false"
              )
                return !1;
              (e = ve(t) + (o < 0 ? 0 : 1)), (t = l);
            } else if (t.nodeType == 1) {
              if (
                ((t = t.childNodes[e + (o < 0 ? -1 : 0)]),
                t.contentEditable == "false")
              )
                return !1;
              e = o < 0 ? Ne(t) : 0;
            } else return !1;
          }
        }
        function Ne(t) {
          return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
        }
        function Ge(t, e) {
          for (;;) {
            if (t.nodeType == 3 && e) return t;
            if (t.nodeType == 1 && e > 0) {
              if (t.contentEditable == "false") return null;
              (t = t.childNodes[e - 1]), (e = Ne(t));
            } else if (t.parentNode && !K(t)) (e = ve(t)), (t = t.parentNode);
            else return null;
          }
        }
        function et(t, e) {
          for (;;) {
            if (t.nodeType == 3 && e < t.nodeValue.length) return t;
            if (t.nodeType == 1 && e < t.childNodes.length) {
              if (t.contentEditable == "false") return null;
              (t = t.childNodes[e]), (e = 0);
            } else if (t.parentNode && !K(t))
              (e = ve(t) + 1), (t = t.parentNode);
            else return null;
          }
        }
        function ye(t, e, n) {
          for (let i = e == 0, o = e == Ne(t); i || o; ) {
            if (t == n) return !0;
            let l = ve(t);
            if (((t = t.parentNode), !t)) return !1;
            (i = i && l == 0), (o = o && l == Ne(t));
          }
        }
        function K(t) {
          let e;
          for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode);
          return (
            e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t)
          );
        }
        const Q = function (t) {
          return (
            t.focusNode &&
            Me(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset)
          );
        };
        function ce(t, e) {
          let n = document.createEvent("Event");
          return (
            n.initEvent("keydown", !0, !0),
            (n.keyCode = t),
            (n.key = n.code = e),
            n
          );
        }
        function _(t) {
          let e = t.activeElement;
          for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
          return e;
        }
        function G(t, e, n) {
          if (t.caretPositionFromPoint)
            try {
              let i = t.caretPositionFromPoint(e, n);
              if (i) return { node: i.offsetNode, offset: i.offset };
            } catch {}
          if (t.caretRangeFromPoint) {
            let i = t.caretRangeFromPoint(e, n);
            if (i) return { node: i.startContainer, offset: i.startOffset };
          }
        }
        const U = typeof navigator < "u" ? navigator : null,
          ae = typeof document < "u" ? document : null,
          X = (U && U.userAgent) || "",
          me = /Edge\/(\d+)/.exec(X),
          ke = /MSIE \d/.exec(X),
          Be = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(X),
          Re = !!(ke || Be || me),
          Ve = ke ? document.documentMode : Be ? +Be[1] : me ? +me[1] : 0,
          Ae = !Re && /gecko\/(\d+)/i.test(X);
        Ae && +(/Firefox\/(\d+)/.exec(X) || [0, 0])[1];
        const de = !Re && /Chrome\/(\d+)/.exec(X),
          C = !!de,
          z = de ? +de[1] : 0,
          T = !Re && !!U && /Apple Computer/.test(U.vendor),
          A = T && (/Mobile\/\w+/.test(X) || (!!U && U.maxTouchPoints > 2)),
          B = A || (U ? /Mac/.test(U.platform) : !1),
          j = U ? /Win/.test(U.platform) : !1,
          Y = /Android \d/.test(X),
          pe = !!ae && "webkitFontSmoothing" in ae.documentElement.style,
          Oe = pe
            ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
            : 0;
        function De(t) {
          let e = t.defaultView && t.defaultView.visualViewport;
          return e
            ? { left: 0, right: e.width, top: 0, bottom: e.height }
            : {
                left: 0,
                right: t.documentElement.clientWidth,
                top: 0,
                bottom: t.documentElement.clientHeight,
              };
        }
        function Le(t, e) {
          return typeof t == "number" ? t : t[e];
        }
        function Qe(t) {
          let e = t.getBoundingClientRect(),
            n = e.width / t.offsetWidth || 1,
            i = e.height / t.offsetHeight || 1;
          return {
            left: e.left,
            right: e.left + t.clientWidth * n,
            top: e.top,
            bottom: e.top + t.clientHeight * i,
          };
        }
        function nt(t, e, n) {
          let i = t.someProp("scrollThreshold") || 0,
            o = t.someProp("scrollMargin") || 5,
            l = t.dom.ownerDocument;
          for (let u = n || t.dom; u; u = ge(u)) {
            if (u.nodeType != 1) continue;
            let m = u,
              M = m == l.body,
              D = M ? De(l) : Qe(m),
              R = 0,
              ne = 0;
            if (
              (e.top < D.top + Le(i, "top")
                ? (ne = -(D.top - e.top + Le(o, "top")))
                : e.bottom > D.bottom - Le(i, "bottom") &&
                  (ne =
                    e.bottom - e.top > D.bottom - D.top
                      ? e.top + Le(o, "top") - D.top
                      : e.bottom - D.bottom + Le(o, "bottom")),
              e.left < D.left + Le(i, "left")
                ? (R = -(D.left - e.left + Le(o, "left")))
                : e.right > D.right - Le(i, "right") &&
                  (R = e.right - D.right + Le(o, "right")),
              R || ne)
            )
              if (M) l.defaultView.scrollBy(R, ne);
              else {
                let ue = m.scrollLeft,
                  Se = m.scrollTop;
                ne && (m.scrollTop += ne), R && (m.scrollLeft += R);
                let le = m.scrollLeft - ue,
                  Ke = m.scrollTop - Se;
                e = {
                  left: e.left - le,
                  top: e.top - Ke,
                  right: e.right - le,
                  bottom: e.bottom - Ke,
                };
              }
            if (M || /^(fixed|sticky)$/.test(getComputedStyle(u).position))
              break;
          }
        }
        function qe(t) {
          let e = t.dom.getBoundingClientRect(),
            n = Math.max(0, e.top),
            i,
            o;
          for (
            let l = (e.left + e.right) / 2, u = n + 1;
            u < Math.min(innerHeight, e.bottom);
            u += 5
          ) {
            let m = t.root.elementFromPoint(l, u);
            if (!m || m == t.dom || !t.dom.contains(m)) continue;
            let M = m.getBoundingClientRect();
            if (M.top >= n - 20) {
              (i = m), (o = M.top);
              break;
            }
          }
          return { refDOM: i, refTop: o, stack: st(t.dom) };
        }
        function st(t) {
          let e = [],
            n = t.ownerDocument;
          for (
            let i = t;
            i &&
            (e.push({ dom: i, top: i.scrollTop, left: i.scrollLeft }), t != n);
            i = ge(i)
          );
          return e;
        }
        function ft({ refDOM: t, refTop: e, stack: n }) {
          let i = t ? t.getBoundingClientRect().top : 0;
          mt(n, i == 0 ? 0 : i - e);
        }
        function mt(t, e) {
          for (let n = 0; n < t.length; n++) {
            let { dom: i, top: o, left: l } = t[n];
            i.scrollTop != o + e && (i.scrollTop = o + e),
              i.scrollLeft != l && (i.scrollLeft = l);
          }
        }
        let $ = null;
        function H(t) {
          if (t.setActive) return t.setActive();
          if ($) return t.focus($);
          let e = st(t);
          t.focus(
            $ == null
              ? {
                  get preventScroll() {
                    return ($ = { preventScroll: !0 }), !0;
                  },
                }
              : void 0,
          ),
            $ || (($ = !1), mt(e, 0));
        }
        function te(t, e) {
          let n,
            i = 2e8,
            o,
            l = 0,
            u = e.top,
            m = e.top,
            M,
            D;
          for (let R = t.firstChild, ne = 0; R; R = R.nextSibling, ne++) {
            let ue;
            if (R.nodeType == 1) ue = R.getClientRects();
            else if (R.nodeType == 3) ue = _e(R).getClientRects();
            else continue;
            for (let Se = 0; Se < ue.length; Se++) {
              let le = ue[Se];
              if (le.top <= u && le.bottom >= m) {
                (u = Math.max(le.bottom, u)), (m = Math.min(le.top, m));
                let Ke =
                  le.left > e.left
                    ? le.left - e.left
                    : le.right < e.left
                      ? e.left - le.right
                      : 0;
                if (Ke < i) {
                  (n = R),
                    (i = Ke),
                    (o =
                      Ke && n.nodeType == 3
                        ? {
                            left: le.right < e.left ? le.right : le.left,
                            top: e.top,
                          }
                        : e),
                    R.nodeType == 1 &&
                      Ke &&
                      (l = ne + (e.left >= (le.left + le.right) / 2 ? 1 : 0));
                  continue;
                }
              } else
                le.top > e.top &&
                  !M &&
                  le.left <= e.left &&
                  le.right >= e.left &&
                  ((M = R),
                  (D = {
                    left: Math.max(le.left, Math.min(le.right, e.left)),
                    top: le.top,
                  }));
              !n &&
                ((e.left >= le.right && e.top >= le.top) ||
                  (e.left >= le.left && e.top >= le.bottom)) &&
                (l = ne + 1);
            }
          }
          return (
            !n && M && ((n = M), (o = D), (i = 0)),
            n && n.nodeType == 3
              ? re(n, o)
              : !n || (i && n.nodeType == 1)
                ? { node: t, offset: l }
                : te(n, o)
          );
        }
        function re(t, e) {
          let n = t.nodeValue.length,
            i = document.createRange();
          for (let o = 0; o < n; o++) {
            i.setEnd(t, o + 1), i.setStart(t, o);
            let l = $e(i, 1);
            if (l.top != l.bottom && oe(e, l))
              return {
                node: t,
                offset: o + (e.left >= (l.left + l.right) / 2 ? 1 : 0),
              };
          }
          return { node: t, offset: 0 };
        }
        function oe(t, e) {
          return (
            t.left >= e.left - 1 &&
            t.left <= e.right + 1 &&
            t.top >= e.top - 1 &&
            t.top <= e.bottom + 1
          );
        }
        function fe(t, e) {
          let n = t.parentNode;
          return n &&
            /^li$/i.test(n.nodeName) &&
            e.left < t.getBoundingClientRect().left
            ? n
            : t;
        }
        function be(t, e, n) {
          let { node: i, offset: o } = te(e, n),
            l = -1;
          if (i.nodeType == 1 && !i.firstChild) {
            let u = i.getBoundingClientRect();
            l = u.left != u.right && n.left > (u.left + u.right) / 2 ? 1 : -1;
          }
          return t.docView.posFromDOM(i, o, l);
        }
        function we(t, e, n, i) {
          let o = -1;
          for (let l = e, u = !1; l != t.dom; ) {
            let m = t.docView.nearestDesc(l, !0);
            if (!m) return null;
            if (
              m.dom.nodeType == 1 &&
              ((m.node.isBlock && m.parent && !u) || !m.contentDOM)
            ) {
              let M = m.dom.getBoundingClientRect();
              if (
                (m.node.isBlock &&
                  m.parent &&
                  !u &&
                  ((u = !0),
                  M.left > i.left || M.top > i.top
                    ? (o = m.posBefore)
                    : (M.right < i.left || M.bottom < i.top) &&
                      (o = m.posAfter)),
                !m.contentDOM && o < 0 && !m.node.isText)
              )
                return (
                  m.node.isBlock
                    ? i.top < (M.top + M.bottom) / 2
                    : i.left < (M.left + M.right) / 2
                )
                  ? m.posBefore
                  : m.posAfter;
            }
            l = m.dom.parentNode;
          }
          return o > -1 ? o : t.docView.posFromDOM(e, n, -1);
        }
        function He(t, e, n) {
          let i = t.childNodes.length;
          if (i && n.top < n.bottom)
            for (
              let o = Math.max(
                  0,
                  Math.min(
                    i - 1,
                    Math.floor((i * (e.top - n.top)) / (n.bottom - n.top)) - 2,
                  ),
                ),
                l = o;
              ;
            ) {
              let u = t.childNodes[l];
              if (u.nodeType == 1) {
                let m = u.getClientRects();
                for (let M = 0; M < m.length; M++) {
                  let D = m[M];
                  if (oe(e, D)) return He(u, e, D);
                }
              }
              if ((l = (l + 1) % i) == o) break;
            }
          return t;
        }
        function je(t, e) {
          let n = t.dom.ownerDocument,
            i,
            o = 0,
            l = G(n, e.left, e.top);
          l && ({ node: i, offset: o } = l);
          let u = (t.root.elementFromPoint ? t.root : n).elementFromPoint(
              e.left,
              e.top,
            ),
            m;
          if (!u || !t.dom.contains(u.nodeType != 1 ? u.parentNode : u)) {
            let D = t.dom.getBoundingClientRect();
            if (!oe(e, D) || ((u = He(t.dom, e, D)), !u)) return null;
          }
          if (T) for (let D = u; i && D; D = ge(D)) D.draggable && (i = void 0);
          if (((u = fe(u, e)), i)) {
            if (
              Ae &&
              i.nodeType == 1 &&
              ((o = Math.min(o, i.childNodes.length)), o < i.childNodes.length)
            ) {
              let R = i.childNodes[o],
                ne;
              R.nodeName == "IMG" &&
                (ne = R.getBoundingClientRect()).right <= e.left &&
                ne.bottom > e.top &&
                o++;
            }
            let D;
            pe &&
              o &&
              i.nodeType == 1 &&
              (D = i.childNodes[o - 1]).nodeType == 1 &&
              D.contentEditable == "false" &&
              D.getBoundingClientRect().top >= e.top &&
              o--,
              i == t.dom &&
              o == i.childNodes.length - 1 &&
              i.lastChild.nodeType == 1 &&
              e.top > i.lastChild.getBoundingClientRect().bottom
                ? (m = t.state.doc.content.size)
                : (o == 0 ||
                    i.nodeType != 1 ||
                    i.childNodes[o - 1].nodeName != "BR") &&
                  (m = we(t, i, o, e));
          }
          m == null && (m = be(t, u, e));
          let M = t.docView.nearestDesc(u, !0);
          return { pos: m, inside: M ? M.posAtStart - M.border : -1 };
        }
        function Ue(t) {
          return t.top < t.bottom || t.left < t.right;
        }
        function $e(t, e) {
          let n = t.getClientRects();
          if (n.length) {
            let i = n[e < 0 ? 0 : n.length - 1];
            if (Ue(i)) return i;
          }
          return Array.prototype.find.call(n, Ue) || t.getBoundingClientRect();
        }
        const Ze = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
        function rt(t, e, n) {
          let {
              node: i,
              offset: o,
              atom: l,
            } = t.docView.domFromPos(e, n < 0 ? -1 : 1),
            u = pe || Ae;
          if (i.nodeType == 3)
            if (
              u &&
              (Ze.test(i.nodeValue) || (n < 0 ? !o : o == i.nodeValue.length))
            ) {
              let M = $e(_e(i, o, o), n);
              if (
                Ae &&
                o &&
                /\s/.test(i.nodeValue[o - 1]) &&
                o < i.nodeValue.length
              ) {
                let D = $e(_e(i, o - 1, o - 1), -1);
                if (D.top == M.top) {
                  let R = $e(_e(i, o, o + 1), -1);
                  if (R.top != M.top) return it(R, R.left < D.left);
                }
              }
              return M;
            } else {
              let M = o,
                D = o,
                R = n < 0 ? 1 : -1;
              return (
                n < 0 && !o
                  ? (D++, (R = -1))
                  : n >= 0 && o == i.nodeValue.length
                    ? (M--, (R = 1))
                    : n < 0
                      ? M--
                      : D++,
                it($e(_e(i, M, D), R), R < 0)
              );
            }
          if (!t.state.doc.resolve(e - (l || 0)).parent.inlineContent) {
            if (l == null && o && (n < 0 || o == Ne(i))) {
              let M = i.childNodes[o - 1];
              if (M.nodeType == 1) return at(M.getBoundingClientRect(), !1);
            }
            if (l == null && o < Ne(i)) {
              let M = i.childNodes[o];
              if (M.nodeType == 1) return at(M.getBoundingClientRect(), !0);
            }
            return at(i.getBoundingClientRect(), n >= 0);
          }
          if (l == null && o && (n < 0 || o == Ne(i))) {
            let M = i.childNodes[o - 1],
              D =
                M.nodeType == 3
                  ? _e(M, Ne(M) - (u ? 0 : 1))
                  : M.nodeType == 1 && (M.nodeName != "BR" || !M.nextSibling)
                    ? M
                    : null;
            if (D) return it($e(D, 1), !1);
          }
          if (l == null && o < Ne(i)) {
            let M = i.childNodes[o];
            for (; M.pmViewDesc && M.pmViewDesc.ignoreForCoords; )
              M = M.nextSibling;
            let D = M
              ? M.nodeType == 3
                ? _e(M, 0, u ? 0 : 1)
                : M.nodeType == 1
                  ? M
                  : null
              : null;
            if (D) return it($e(D, -1), !0);
          }
          return it($e(i.nodeType == 3 ? _e(i) : i, -n), n >= 0);
        }
        function it(t, e) {
          if (t.width == 0) return t;
          let n = e ? t.left : t.right;
          return { top: t.top, bottom: t.bottom, left: n, right: n };
        }
        function at(t, e) {
          if (t.height == 0) return t;
          let n = e ? t.top : t.bottom;
          return { top: n, bottom: n, left: t.left, right: t.right };
        }
        function gt(t, e, n) {
          let i = t.state,
            o = t.root.activeElement;
          i != e && t.updateState(e), o != t.dom && t.focus();
          try {
            return n();
          } finally {
            i != e && t.updateState(i), o != t.dom && o && o.focus();
          }
        }
        function dt(t, e, n) {
          let i = e.selection,
            o = n == "up" ? i.$from : i.$to;
          return gt(t, e, () => {
            let { node: l } = t.docView.domFromPos(o.pos, n == "up" ? -1 : 1);
            for (;;) {
              let m = t.docView.nearestDesc(l, !0);
              if (!m) break;
              if (m.node.isBlock) {
                l = m.contentDOM || m.dom;
                break;
              }
              l = m.dom.parentNode;
            }
            let u = rt(t, o.pos, 1);
            for (let m = l.firstChild; m; m = m.nextSibling) {
              let M;
              if (m.nodeType == 1) M = m.getClientRects();
              else if (m.nodeType == 3)
                M = _e(m, 0, m.nodeValue.length).getClientRects();
              else continue;
              for (let D = 0; D < M.length; D++) {
                let R = M[D];
                if (
                  R.bottom > R.top + 1 &&
                  (n == "up"
                    ? u.top - R.top > (R.bottom - u.top) * 2
                    : R.bottom - u.bottom > (u.bottom - R.top) * 2)
                )
                  return !1;
              }
            }
            return !0;
          });
        }
        const kt = /[\u0590-\u08ac]/;
        function _t(t, e, n) {
          let { $head: i } = e.selection;
          if (!i.parent.isTextblock) return !1;
          let o = i.parentOffset,
            l = !o,
            u = o == i.parent.content.size,
            m = t.domSelection();
          return !kt.test(i.parent.textContent) || !m.modify
            ? n == "left" || n == "backward"
              ? l
              : u
            : gt(t, e, () => {
                let {
                    focusNode: M,
                    focusOffset: D,
                    anchorNode: R,
                    anchorOffset: ne,
                  } = t.domSelectionRange(),
                  ue = m.caretBidiLevel;
                m.modify("move", n, "character");
                let Se = i.depth ? t.docView.domAfterPos(i.before()) : t.dom,
                  { focusNode: le, focusOffset: Ke } = t.domSelectionRange(),
                  Ie =
                    (le &&
                      !Se.contains(le.nodeType == 1 ? le : le.parentNode)) ||
                    (M == le && D == Ke);
                try {
                  m.collapse(R, ne),
                    M && (M != R || D != ne) && m.extend && m.extend(M, D);
                } catch {}
                return ue != null && (m.caretBidiLevel = ue), Ie;
              });
        }
        let J = null,
          c = null,
          h = !1;
        function k(t, e, n) {
          return J == e && c == n
            ? h
            : ((J = e),
              (c = n),
              (h = n == "up" || n == "down" ? dt(t, e, n) : _t(t, e, n)));
        }
        const N = 0,
          L = 1,
          W = 2,
          ie = 3;
        class S {
          constructor(e, n, i, o) {
            (this.parent = e),
              (this.children = n),
              (this.dom = i),
              (this.contentDOM = o),
              (this.dirty = N),
              (i.pmViewDesc = this);
          }
          matchesWidget(e) {
            return !1;
          }
          matchesMark(e) {
            return !1;
          }
          matchesNode(e, n, i) {
            return !1;
          }
          matchesHack(e) {
            return !1;
          }
          parseRule() {
            return null;
          }
          stopEvent(e) {
            return !1;
          }
          get size() {
            let e = 0;
            for (let n = 0; n < this.children.length; n++)
              e += this.children[n].size;
            return e;
          }
          get border() {
            return 0;
          }
          destroy() {
            (this.parent = void 0),
              this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
            for (let e = 0; e < this.children.length; e++)
              this.children[e].destroy();
          }
          posBeforeChild(e) {
            for (let n = 0, i = this.posAtStart; ; n++) {
              let o = this.children[n];
              if (o == e) return i;
              i += o.size;
            }
          }
          get posBefore() {
            return this.parent.posBeforeChild(this);
          }
          get posAtStart() {
            return this.parent
              ? this.parent.posBeforeChild(this) + this.border
              : 0;
          }
          get posAfter() {
            return this.posBefore + this.size;
          }
          get posAtEnd() {
            return this.posAtStart + this.size - 2 * this.border;
          }
          localPosFromDOM(e, n, i) {
            if (
              this.contentDOM &&
              this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)
            )
              if (i < 0) {
                let l, u;
                if (e == this.contentDOM) l = e.childNodes[n - 1];
                else {
                  for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                  l = e.previousSibling;
                }
                for (; l && !((u = l.pmViewDesc) && u.parent == this); )
                  l = l.previousSibling;
                return l ? this.posBeforeChild(u) + u.size : this.posAtStart;
              } else {
                let l, u;
                if (e == this.contentDOM) l = e.childNodes[n];
                else {
                  for (; e.parentNode != this.contentDOM; ) e = e.parentNode;
                  l = e.nextSibling;
                }
                for (; l && !((u = l.pmViewDesc) && u.parent == this); )
                  l = l.nextSibling;
                return l ? this.posBeforeChild(u) : this.posAtEnd;
              }
            let o;
            if (e == this.dom && this.contentDOM) o = n > ve(this.contentDOM);
            else if (
              this.contentDOM &&
              this.contentDOM != this.dom &&
              this.dom.contains(this.contentDOM)
            )
              o = e.compareDocumentPosition(this.contentDOM) & 2;
            else if (this.dom.firstChild) {
              if (n == 0)
                for (let l = e; ; l = l.parentNode) {
                  if (l == this.dom) {
                    o = !1;
                    break;
                  }
                  if (l.previousSibling) break;
                }
              if (o == null && n == e.childNodes.length)
                for (let l = e; ; l = l.parentNode) {
                  if (l == this.dom) {
                    o = !0;
                    break;
                  }
                  if (l.nextSibling) break;
                }
            }
            return (o ?? i > 0) ? this.posAtEnd : this.posAtStart;
          }
          nearestDesc(e, n = !1) {
            for (let i = !0, o = e; o; o = o.parentNode) {
              let l = this.getDesc(o),
                u;
              if (l && (!n || l.node))
                if (
                  i &&
                  (u = l.nodeDOM) &&
                  !(u.nodeType == 1
                    ? u.contains(e.nodeType == 1 ? e : e.parentNode)
                    : u == e)
                )
                  i = !1;
                else return l;
            }
          }
          getDesc(e) {
            let n = e.pmViewDesc;
            for (let i = n; i; i = i.parent) if (i == this) return n;
          }
          posFromDOM(e, n, i) {
            for (let o = e; o; o = o.parentNode) {
              let l = this.getDesc(o);
              if (l) return l.localPosFromDOM(e, n, i);
            }
            return -1;
          }
          descAt(e) {
            for (let n = 0, i = 0; n < this.children.length; n++) {
              let o = this.children[n],
                l = i + o.size;
              if (i == e && l != i) {
                for (; !o.border && o.children.length; ) o = o.children[0];
                return o;
              }
              if (e < l) return o.descAt(e - i - o.border);
              i = l;
            }
          }
          domFromPos(e, n) {
            if (!this.contentDOM)
              return { node: this.dom, offset: 0, atom: e + 1 };
            let i = 0,
              o = 0;
            for (let l = 0; i < this.children.length; i++) {
              let u = this.children[i],
                m = l + u.size;
              if (m > e || u instanceof P) {
                o = e - l;
                break;
              }
              l = m;
            }
            if (o)
              return this.children[i].domFromPos(
                o - this.children[i].border,
                n,
              );
            for (
              let l;
              i &&
              !(l = this.children[i - 1]).size &&
              l instanceof r &&
              l.side >= 0;
              i--
            );
            if (n <= 0) {
              let l,
                u = !0;
              for (
                ;
                (l = i ? this.children[i - 1] : null),
                  !(!l || l.dom.parentNode == this.contentDOM);
                i--, u = !1
              );
              return l && n && u && !l.border && !l.domAtom
                ? l.domFromPos(l.size, n)
                : { node: this.contentDOM, offset: l ? ve(l.dom) + 1 : 0 };
            } else {
              let l,
                u = !0;
              for (
                ;
                (l = i < this.children.length ? this.children[i] : null),
                  !(!l || l.dom.parentNode == this.contentDOM);
                i++, u = !1
              );
              return l && u && !l.border && !l.domAtom
                ? l.domFromPos(0, n)
                : {
                    node: this.contentDOM,
                    offset: l ? ve(l.dom) : this.contentDOM.childNodes.length,
                  };
            }
          }
          parseRange(e, n, i = 0) {
            if (this.children.length == 0)
              return {
                node: this.contentDOM,
                from: e,
                to: n,
                fromOffset: 0,
                toOffset: this.contentDOM.childNodes.length,
              };
            let o = -1,
              l = -1;
            for (let u = i, m = 0; ; m++) {
              let M = this.children[m],
                D = u + M.size;
              if (o == -1 && e <= D) {
                let R = u + M.border;
                if (
                  e >= R &&
                  n <= D - M.border &&
                  M.node &&
                  M.contentDOM &&
                  this.contentDOM.contains(M.contentDOM)
                )
                  return M.parseRange(e, n, R);
                e = u;
                for (let ne = m; ne > 0; ne--) {
                  let ue = this.children[ne - 1];
                  if (
                    ue.size &&
                    ue.dom.parentNode == this.contentDOM &&
                    !ue.emptyChildAt(1)
                  ) {
                    o = ve(ue.dom) + 1;
                    break;
                  }
                  e -= ue.size;
                }
                o == -1 && (o = 0);
              }
              if (o > -1 && (D > n || m == this.children.length - 1)) {
                n = D;
                for (let R = m + 1; R < this.children.length; R++) {
                  let ne = this.children[R];
                  if (
                    ne.size &&
                    ne.dom.parentNode == this.contentDOM &&
                    !ne.emptyChildAt(-1)
                  ) {
                    l = ve(ne.dom);
                    break;
                  }
                  n += ne.size;
                }
                l == -1 && (l = this.contentDOM.childNodes.length);
                break;
              }
              u = D;
            }
            return {
              node: this.contentDOM,
              from: e,
              to: n,
              fromOffset: o,
              toOffset: l,
            };
          }
          emptyChildAt(e) {
            if (this.border || !this.contentDOM || !this.children.length)
              return !1;
            let n = this.children[e < 0 ? 0 : this.children.length - 1];
            return n.size == 0 || n.emptyChildAt(e);
          }
          domAfterPos(e) {
            let { node: n, offset: i } = this.domFromPos(e, 0);
            if (n.nodeType != 1 || i == n.childNodes.length)
              throw new RangeError("No node after pos " + e);
            return n.childNodes[i];
          }
          setSelection(e, n, i, o = !1) {
            let l = Math.min(e, n),
              u = Math.max(e, n);
            for (let ue = 0, Se = 0; ue < this.children.length; ue++) {
              let le = this.children[ue],
                Ke = Se + le.size;
              if (l > Se && u < Ke)
                return le.setSelection(
                  e - Se - le.border,
                  n - Se - le.border,
                  i,
                  o,
                );
              Se = Ke;
            }
            let m = this.domFromPos(e, e ? -1 : 1),
              M = n == e ? m : this.domFromPos(n, n ? -1 : 1),
              D = i.getSelection(),
              R = !1;
            if ((Ae || T) && e == n) {
              let { node: ue, offset: Se } = m;
              if (ue.nodeType == 3) {
                if (
                  ((R = !!(
                    Se &&
                    ue.nodeValue[Se - 1] ==
                      `
`
                  )),
                  R && Se == ue.nodeValue.length)
                )
                  for (let le = ue, Ke; le; le = le.parentNode) {
                    if ((Ke = le.nextSibling)) {
                      Ke.nodeName == "BR" &&
                        (m = M = { node: Ke.parentNode, offset: ve(Ke) + 1 });
                      break;
                    }
                    let Ie = le.pmViewDesc;
                    if (Ie && Ie.node && Ie.node.isBlock) break;
                  }
              } else {
                let le = ue.childNodes[Se - 1];
                R =
                  le && (le.nodeName == "BR" || le.contentEditable == "false");
              }
            }
            if (
              Ae &&
              D.focusNode &&
              D.focusNode != M.node &&
              D.focusNode.nodeType == 1
            ) {
              let ue = D.focusNode.childNodes[D.focusOffset];
              ue && ue.contentEditable == "false" && (o = !0);
            }
            if (
              !(o || (R && T)) &&
              Me(m.node, m.offset, D.anchorNode, D.anchorOffset) &&
              Me(M.node, M.offset, D.focusNode, D.focusOffset)
            )
              return;
            let ne = !1;
            if ((D.extend || e == n) && !R) {
              D.collapse(m.node, m.offset);
              try {
                e != n && D.extend(M.node, M.offset), (ne = !0);
              } catch {}
            }
            if (!ne) {
              if (e > n) {
                let Se = m;
                (m = M), (M = Se);
              }
              let ue = document.createRange();
              ue.setEnd(M.node, M.offset),
                ue.setStart(m.node, m.offset),
                D.removeAllRanges(),
                D.addRange(ue);
            }
          }
          ignoreMutation(e) {
            return !this.contentDOM && e.type != "selection";
          }
          get contentLost() {
            return (
              this.contentDOM &&
              this.contentDOM != this.dom &&
              !this.dom.contains(this.contentDOM)
            );
          }
          markDirty(e, n) {
            for (let i = 0, o = 0; o < this.children.length; o++) {
              let l = this.children[o],
                u = i + l.size;
              if (i == u ? e <= u && n >= i : e < u && n > i) {
                let m = i + l.border,
                  M = u - l.border;
                if (e >= m && n <= M) {
                  (this.dirty = e == i || n == u ? W : L),
                    e == m &&
                    n == M &&
                    (l.contentLost || l.dom.parentNode != this.contentDOM)
                      ? (l.dirty = ie)
                      : l.markDirty(e - m, n - m);
                  return;
                } else
                  l.dirty =
                    l.dom == l.contentDOM &&
                    l.dom.parentNode == this.contentDOM &&
                    !l.children.length
                      ? W
                      : ie;
              }
              i = u;
            }
            this.dirty = W;
          }
          markParentsDirty() {
            let e = 1;
            for (let n = this.parent; n; n = n.parent, e++) {
              let i = e == 1 ? W : L;
              n.dirty < i && (n.dirty = i);
            }
          }
          get domAtom() {
            return !1;
          }
          get ignoreForCoords() {
            return !1;
          }
          isText(e) {
            return !1;
          }
        }
        class r extends S {
          constructor(e, n, i, o) {
            let l,
              u = n.type.toDOM;
            if (
              (typeof u == "function" &&
                (u = u(i, () => {
                  if (!l) return o;
                  if (l.parent) return l.parent.posBeforeChild(l);
                })),
              !n.type.spec.raw)
            ) {
              if (u.nodeType != 1) {
                let m = document.createElement("span");
                m.appendChild(u), (u = m);
              }
              (u.contentEditable = "false"),
                u.classList.add("ProseMirror-widget");
            }
            super(e, [], u, null),
              (this.widget = n),
              (this.widget = n),
              (l = this);
          }
          matchesWidget(e) {
            return this.dirty == N && e.type.eq(this.widget.type);
          }
          parseRule() {
            return { ignore: !0 };
          }
          stopEvent(e) {
            let n = this.widget.spec.stopEvent;
            return n ? n(e) : !1;
          }
          ignoreMutation(e) {
            return e.type != "selection" || this.widget.spec.ignoreSelection;
          }
          destroy() {
            this.widget.type.destroy(this.dom), super.destroy();
          }
          get domAtom() {
            return !0;
          }
          get side() {
            return this.widget.type.side;
          }
        }
        class s extends S {
          constructor(e, n, i, o) {
            super(e, [], n, null), (this.textDOM = i), (this.text = o);
          }
          get size() {
            return this.text.length;
          }
          localPosFromDOM(e, n) {
            return e != this.textDOM
              ? this.posAtStart + (n ? this.size : 0)
              : this.posAtStart + n;
          }
          domFromPos(e) {
            return { node: this.textDOM, offset: e };
          }
          ignoreMutation(e) {
            return (
              e.type === "characterData" && e.target.nodeValue == e.oldValue
            );
          }
        }
        class a extends S {
          constructor(e, n, i, o) {
            super(e, [], i, o), (this.mark = n);
          }
          static create(e, n, i, o) {
            let l = o.nodeViews[n.type.name],
              u = l && l(n, o, i);
            return (
              (!u || !u.dom) &&
                (u = se.ZF.renderSpec(document, n.type.spec.toDOM(n, i))),
              new a(e, n, u.dom, u.contentDOM || u.dom)
            );
          }
          parseRule() {
            return this.dirty & ie || this.mark.type.spec.reparseInView
              ? null
              : {
                  mark: this.mark.type.name,
                  attrs: this.mark.attrs,
                  contentElement: this.contentDOM,
                };
          }
          matchesMark(e) {
            return this.dirty != ie && this.mark.eq(e);
          }
          markDirty(e, n) {
            if ((super.markDirty(e, n), this.dirty != N)) {
              let i = this.parent;
              for (; !i.node; ) i = i.parent;
              i.dirty < this.dirty && (i.dirty = this.dirty), (this.dirty = N);
            }
          }
          slice(e, n, i) {
            let o = a.create(this.parent, this.mark, !0, i),
              l = this.children,
              u = this.size;
            n < u && (l = Ut(l, n, u, i)), e > 0 && (l = Ut(l, 0, e, i));
            for (let m = 0; m < l.length; m++) l[m].parent = o;
            return (o.children = l), o;
          }
        }
        class p extends S {
          constructor(e, n, i, o, l, u, m, M, D) {
            super(e, [], l, u),
              (this.node = n),
              (this.outerDeco = i),
              (this.innerDeco = o),
              (this.nodeDOM = m);
          }
          static create(e, n, i, o, l, u) {
            let m = l.nodeViews[n.type.name],
              M,
              D =
                m &&
                m(
                  n,
                  l,
                  () => {
                    if (!M) return u;
                    if (M.parent) return M.parent.posBeforeChild(M);
                  },
                  i,
                  o,
                ),
              R = D && D.dom,
              ne = D && D.contentDOM;
            if (n.isText) {
              if (!R) R = document.createTextNode(n.text);
              else if (R.nodeType != 3)
                throw new RangeError(
                  "Text must be rendered as a DOM text node",
                );
            } else
              R ||
                ({ dom: R, contentDOM: ne } = se.ZF.renderSpec(
                  document,
                  n.type.spec.toDOM(n),
                ));
            !ne &&
              !n.isText &&
              R.nodeName != "BR" &&
              (R.hasAttribute("contenteditable") ||
                (R.contentEditable = "false"),
              n.type.spec.draggable && (R.draggable = !0));
            let ue = R;
            return (
              (R = nn(R, i, n)),
              D
                ? (M = new q(e, n, i, o, R, ne || null, ue, D, l, u + 1))
                : n.isText
                  ? new w(e, n, i, o, R, ue, l)
                  : new p(e, n, i, o, R, ne || null, ue, l, u + 1)
            );
          }
          parseRule() {
            if (this.node.type.spec.reparseInView) return null;
            let e = { node: this.node.type.name, attrs: this.node.attrs };
            if (
              (this.node.type.whitespace == "pre" &&
                (e.preserveWhitespace = "full"),
              !this.contentDOM)
            )
              e.getContent = () => this.node.content;
            else if (!this.contentLost) e.contentElement = this.contentDOM;
            else {
              for (let n = this.children.length - 1; n >= 0; n--) {
                let i = this.children[n];
                if (this.dom.contains(i.dom.parentNode)) {
                  e.contentElement = i.dom.parentNode;
                  break;
                }
              }
              e.contentElement || (e.getContent = () => se.FK.empty);
            }
            return e;
          }
          matchesNode(e, n, i) {
            return (
              this.dirty == N &&
              e.eq(this.node) &&
              qt(n, this.outerDeco) &&
              i.eq(this.innerDeco)
            );
          }
          get size() {
            return this.node.nodeSize;
          }
          get border() {
            return this.node.isLeaf ? 0 : 1;
          }
          updateChildren(e, n) {
            let i = this.node.inlineContent,
              o = n,
              l = e.composing ? this.localCompositionInfo(e, n) : null,
              u = l && l.pos > -1 ? l : null,
              m = l && l.pos < 0,
              M = new gn(this, u && u.node, e);
            xn(
              this.node,
              this.innerDeco,
              (D, R, ne) => {
                D.spec.marks
                  ? M.syncToMarks(D.spec.marks, i, e)
                  : D.type.side >= 0 &&
                    !ne &&
                    M.syncToMarks(
                      R == this.node.childCount
                        ? se.CU.none
                        : this.node.child(R).marks,
                      i,
                      e,
                    ),
                  M.placeWidget(D, e, o);
              },
              (D, R, ne, ue) => {
                M.syncToMarks(D.marks, i, e);
                let Se;
                M.findNodeMatch(D, R, ne, ue) ||
                  (m &&
                    e.state.selection.from > o &&
                    e.state.selection.to < o + D.nodeSize &&
                    (Se = M.findIndexWithChild(l.node)) > -1 &&
                    M.updateNodeAt(D, R, ne, Se, e)) ||
                  M.updateNextNode(D, R, ne, e, ue, o) ||
                  M.addNode(D, R, ne, e, o),
                  (o += D.nodeSize);
              },
            ),
              M.syncToMarks([], i, e),
              this.node.isTextblock && M.addTextblockHacks(),
              M.destroyRest(),
              (M.changed || this.dirty == W) &&
                (u && this.protectLocalComposition(e, u),
                Ce(this.contentDOM, this.children, e),
                A && sn(this.dom));
          }
          localCompositionInfo(e, n) {
            let { from: i, to: o } = e.state.selection;
            if (
              !(e.state.selection instanceof v.U3) ||
              i < n ||
              o > n + this.node.content.size
            )
              return null;
            let l = e.input.compositionNode;
            if (!l || !this.dom.contains(l.parentNode)) return null;
            if (this.node.inlineContent) {
              let u = l.nodeValue,
                m = on(this.node.content, u, i - n, o - n);
              return m < 0 ? null : { node: l, pos: m, text: u };
            } else return { node: l, pos: -1, text: "" };
          }
          protectLocalComposition(e, { node: n, pos: i, text: o }) {
            if (this.getDesc(n)) return;
            let l = n;
            for (; l.parentNode != this.contentDOM; l = l.parentNode) {
              for (; l.previousSibling; )
                l.parentNode.removeChild(l.previousSibling);
              for (; l.nextSibling; ) l.parentNode.removeChild(l.nextSibling);
              l.pmViewDesc && (l.pmViewDesc = void 0);
            }
            let u = new s(this, l, n, o);
            e.input.compositionNodes.push(u),
              (this.children = Ut(this.children, i, i + o.length, e, u));
          }
          update(e, n, i, o) {
            return this.dirty == ie || !e.sameMarkup(this.node)
              ? !1
              : (this.updateInner(e, n, i, o), !0);
          }
          updateInner(e, n, i, o) {
            this.updateOuterDeco(n),
              (this.node = e),
              (this.innerDeco = i),
              this.contentDOM && this.updateChildren(o, this.posAtStart),
              (this.dirty = N);
          }
          updateOuterDeco(e) {
            if (qt(e, this.outerDeco)) return;
            let n = this.nodeDOM.nodeType != 1,
              i = this.dom;
            (this.dom = Tt(
              this.dom,
              this.nodeDOM,
              Nt(this.outerDeco, this.node, n),
              Nt(e, this.node, n),
            )),
              this.dom != i &&
                ((i.pmViewDesc = void 0), (this.dom.pmViewDesc = this)),
              (this.outerDeco = e);
          }
          selectNode() {
            this.nodeDOM.nodeType == 1 &&
              this.nodeDOM.classList.add("ProseMirror-selectednode"),
              (this.contentDOM || !this.node.type.spec.draggable) &&
                (this.dom.draggable = !0);
          }
          deselectNode() {
            this.nodeDOM.nodeType == 1 &&
              this.nodeDOM.classList.remove("ProseMirror-selectednode"),
              (this.contentDOM || !this.node.type.spec.draggable) &&
                this.dom.removeAttribute("draggable");
          }
          get domAtom() {
            return this.node.isAtom;
          }
        }
        function b(t, e, n, i, o) {
          nn(i, e, t);
          let l = new p(void 0, t, e, n, i, i, i, o, 0);
          return l.contentDOM && l.updateChildren(o, 0), l;
        }
        class w extends p {
          constructor(e, n, i, o, l, u, m) {
            super(e, n, i, o, l, null, u, m, 0);
          }
          parseRule() {
            let e = this.nodeDOM.parentNode;
            for (; e && e != this.dom && !e.pmIsDeco; ) e = e.parentNode;
            return { skip: e || !0 };
          }
          update(e, n, i, o) {
            return this.dirty == ie ||
              (this.dirty != N && !this.inParent()) ||
              !e.sameMarkup(this.node)
              ? !1
              : (this.updateOuterDeco(n),
                (this.dirty != N || e.text != this.node.text) &&
                  e.text != this.nodeDOM.nodeValue &&
                  ((this.nodeDOM.nodeValue = e.text),
                  o.trackWrites == this.nodeDOM && (o.trackWrites = null)),
                (this.node = e),
                (this.dirty = N),
                !0);
          }
          inParent() {
            let e = this.parent.contentDOM;
            for (let n = this.nodeDOM; n; n = n.parentNode)
              if (n == e) return !0;
            return !1;
          }
          domFromPos(e) {
            return { node: this.nodeDOM, offset: e };
          }
          localPosFromDOM(e, n, i) {
            return e == this.nodeDOM
              ? this.posAtStart + Math.min(n, this.node.text.length)
              : super.localPosFromDOM(e, n, i);
          }
          ignoreMutation(e) {
            return e.type != "characterData" && e.type != "selection";
          }
          slice(e, n, i) {
            let o = this.node.cut(e, n),
              l = document.createTextNode(o.text);
            return new w(
              this.parent,
              o,
              this.outerDeco,
              this.innerDeco,
              l,
              l,
              i,
            );
          }
          markDirty(e, n) {
            super.markDirty(e, n),
              this.dom != this.nodeDOM &&
                (e == 0 || n == this.nodeDOM.nodeValue.length) &&
                (this.dirty = ie);
          }
          get domAtom() {
            return !1;
          }
          isText(e) {
            return this.node.text == e;
          }
        }
        class P extends S {
          parseRule() {
            return { ignore: !0 };
          }
          matchesHack(e) {
            return this.dirty == N && this.dom.nodeName == e;
          }
          get domAtom() {
            return !0;
          }
          get ignoreForCoords() {
            return this.dom.nodeName == "IMG";
          }
        }
        class q extends p {
          constructor(e, n, i, o, l, u, m, M, D, R) {
            super(e, n, i, o, l, u, m, D, R), (this.spec = M);
          }
          update(e, n, i, o) {
            if (this.dirty == ie) return !1;
            if (this.spec.update) {
              let l = this.spec.update(e, n, i);
              return l && this.updateInner(e, n, i, o), l;
            } else
              return !this.contentDOM && !e.isLeaf
                ? !1
                : super.update(e, n, i, o);
          }
          selectNode() {
            this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
          }
          deselectNode() {
            this.spec.deselectNode
              ? this.spec.deselectNode()
              : super.deselectNode();
          }
          setSelection(e, n, i, o) {
            this.spec.setSelection
              ? this.spec.setSelection(e, n, i)
              : super.setSelection(e, n, i, o);
          }
          destroy() {
            this.spec.destroy && this.spec.destroy(), super.destroy();
          }
          stopEvent(e) {
            return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
          }
          ignoreMutation(e) {
            return this.spec.ignoreMutation
              ? this.spec.ignoreMutation(e)
              : super.ignoreMutation(e);
          }
        }
        function Ce(t, e, n) {
          let i = t.firstChild,
            o = !1;
          for (let l = 0; l < e.length; l++) {
            let u = e[l],
              m = u.dom;
            if (m.parentNode == t) {
              for (; m != i; ) (i = rn(i)), (o = !0);
              i = i.nextSibling;
            } else (o = !0), t.insertBefore(m, i);
            if (u instanceof a) {
              let M = i ? i.previousSibling : t.lastChild;
              Ce(u.contentDOM, u.children, n),
                (i = M ? M.nextSibling : t.firstChild);
            }
          }
          for (; i; ) (i = rn(i)), (o = !0);
          o && n.trackWrites == t && (n.trackWrites = null);
        }
        const Pe = function (t) {
          t && (this.nodeName = t);
        };
        Pe.prototype = Object.create(null);
        const ct = [new Pe()];
        function Nt(t, e, n) {
          if (t.length == 0) return ct;
          let i = n ? ct[0] : new Pe(),
            o = [i];
          for (let l = 0; l < t.length; l++) {
            let u = t[l].type.attrs;
            if (u) {
              u.nodeName && o.push((i = new Pe(u.nodeName)));
              for (let m in u) {
                let M = u[m];
                M != null &&
                  (n &&
                    o.length == 1 &&
                    o.push((i = new Pe(e.isInline ? "span" : "div"))),
                  m == "class"
                    ? (i.class = (i.class ? i.class + " " : "") + M)
                    : m == "style"
                      ? (i.style = (i.style ? i.style + ";" : "") + M)
                      : m != "nodeName" && (i[m] = M));
              }
            }
          }
          return o;
        }
        function Tt(t, e, n, i) {
          if (n == ct && i == ct) return e;
          let o = e;
          for (let l = 0; l < i.length; l++) {
            let u = i[l],
              m = n[l];
            if (l) {
              let M;
              (m &&
                m.nodeName == u.nodeName &&
                o != t &&
                (M = o.parentNode) &&
                M.nodeName.toLowerCase() == u.nodeName) ||
                ((M = document.createElement(u.nodeName)),
                (M.pmIsDeco = !0),
                M.appendChild(o),
                (m = ct[0])),
                (o = M);
            }
            bt(o, m || ct[0], u);
          }
          return o;
        }
        function bt(t, e, n) {
          for (let i in e)
            i != "class" &&
              i != "style" &&
              i != "nodeName" &&
              !(i in n) &&
              t.removeAttribute(i);
          for (let i in n)
            i != "class" &&
              i != "style" &&
              i != "nodeName" &&
              n[i] != e[i] &&
              t.setAttribute(i, n[i]);
          if (e.class != n.class) {
            let i = e.class ? e.class.split(" ").filter(Boolean) : [],
              o = n.class ? n.class.split(" ").filter(Boolean) : [];
            for (let l = 0; l < i.length; l++)
              o.indexOf(i[l]) == -1 && t.classList.remove(i[l]);
            for (let l = 0; l < o.length; l++)
              i.indexOf(o[l]) == -1 && t.classList.add(o[l]);
            t.classList.length == 0 && t.removeAttribute("class");
          }
          if (e.style != n.style) {
            if (e.style) {
              let i =
                  /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,
                o;
              for (; (o = i.exec(e.style)); ) t.style.removeProperty(o[1]);
            }
            n.style && (t.style.cssText += n.style);
          }
        }
        function nn(t, e, n) {
          return Tt(t, t, ct, Nt(e, n, t.nodeType != 1));
        }
        function qt(t, e) {
          if (t.length != e.length) return !1;
          for (let n = 0; n < t.length; n++)
            if (!t[n].type.eq(e[n].type)) return !1;
          return !0;
        }
        function rn(t) {
          let e = t.nextSibling;
          return t.parentNode.removeChild(t), e;
        }
        class gn {
          constructor(e, n, i) {
            (this.lock = n),
              (this.view = i),
              (this.index = 0),
              (this.stack = []),
              (this.changed = !1),
              (this.top = e),
              (this.preMatch = yn(e.node.content, e));
          }
          destroyBetween(e, n) {
            if (e != n) {
              for (let i = e; i < n; i++) this.top.children[i].destroy();
              this.top.children.splice(e, n - e), (this.changed = !0);
            }
          }
          destroyRest() {
            this.destroyBetween(this.index, this.top.children.length);
          }
          syncToMarks(e, n, i) {
            let o = 0,
              l = this.stack.length >> 1,
              u = Math.min(l, e.length);
            for (
              ;
              o < u &&
              (o == l - 1 ? this.top : this.stack[(o + 1) << 1]).matchesMark(
                e[o],
              ) &&
              e[o].type.spec.spanning !== !1;
            )
              o++;
            for (; o < l; )
              this.destroyRest(),
                (this.top.dirty = N),
                (this.index = this.stack.pop()),
                (this.top = this.stack.pop()),
                l--;
            for (; l < e.length; ) {
              this.stack.push(this.top, this.index + 1);
              let m = -1;
              for (
                let M = this.index;
                M < Math.min(this.index + 3, this.top.children.length);
                M++
              ) {
                let D = this.top.children[M];
                if (D.matchesMark(e[l]) && !this.isLocked(D.dom)) {
                  m = M;
                  break;
                }
              }
              if (m > -1)
                m > this.index &&
                  ((this.changed = !0), this.destroyBetween(this.index, m)),
                  (this.top = this.top.children[this.index]);
              else {
                let M = a.create(this.top, e[l], n, i);
                this.top.children.splice(this.index, 0, M),
                  (this.top = M),
                  (this.changed = !0);
              }
              (this.index = 0), l++;
            }
          }
          findNodeMatch(e, n, i, o) {
            let l = -1,
              u;
            if (
              o >= this.preMatch.index &&
              (u = this.preMatch.matches[o - this.preMatch.index]).parent ==
                this.top &&
              u.matchesNode(e, n, i)
            )
              l = this.top.children.indexOf(u, this.index);
            else
              for (
                let m = this.index,
                  M = Math.min(this.top.children.length, m + 5);
                m < M;
                m++
              ) {
                let D = this.top.children[m];
                if (D.matchesNode(e, n, i) && !this.preMatch.matched.has(D)) {
                  l = m;
                  break;
                }
              }
            return l < 0
              ? !1
              : (this.destroyBetween(this.index, l), this.index++, !0);
          }
          updateNodeAt(e, n, i, o, l) {
            let u = this.top.children[o];
            return (
              u.dirty == ie && u.dom == u.contentDOM && (u.dirty = W),
              u.update(e, n, i, l)
                ? (this.destroyBetween(this.index, o), this.index++, !0)
                : !1
            );
          }
          findIndexWithChild(e) {
            for (;;) {
              let n = e.parentNode;
              if (!n) return -1;
              if (n == this.top.contentDOM) {
                let i = e.pmViewDesc;
                if (i) {
                  for (let o = this.index; o < this.top.children.length; o++)
                    if (this.top.children[o] == i) return o;
                }
                return -1;
              }
              e = n;
            }
          }
          updateNextNode(e, n, i, o, l, u) {
            for (let m = this.index; m < this.top.children.length; m++) {
              let M = this.top.children[m];
              if (M instanceof p) {
                let D = this.preMatch.matched.get(M);
                if (D != null && D != l) return !1;
                let R = M.dom,
                  ne,
                  ue =
                    this.isLocked(R) &&
                    !(
                      e.isText &&
                      M.node &&
                      M.node.isText &&
                      M.nodeDOM.nodeValue == e.text &&
                      M.dirty != ie &&
                      qt(n, M.outerDeco)
                    );
                if (!ue && M.update(e, n, i, o))
                  return (
                    this.destroyBetween(this.index, m),
                    M.dom != R && (this.changed = !0),
                    this.index++,
                    !0
                  );
                if (!ue && (ne = this.recreateWrapper(M, e, n, i, o, u)))
                  return (
                    (this.top.children[this.index] = ne),
                    ne.contentDOM &&
                      ((ne.dirty = W),
                      ne.updateChildren(o, u + 1),
                      (ne.dirty = N)),
                    (this.changed = !0),
                    this.index++,
                    !0
                  );
                break;
              }
            }
            return !1;
          }
          recreateWrapper(e, n, i, o, l, u) {
            if (
              e.dirty ||
              n.isAtom ||
              !e.children.length ||
              !e.node.content.eq(n.content)
            )
              return null;
            let m = p.create(this.top, n, i, o, l, u);
            if (m.contentDOM) {
              (m.children = e.children), (e.children = []);
              for (let M of m.children) M.parent = m;
            }
            return e.destroy(), m;
          }
          addNode(e, n, i, o, l) {
            let u = p.create(this.top, e, n, i, o, l);
            u.contentDOM && u.updateChildren(o, l + 1),
              this.top.children.splice(this.index++, 0, u),
              (this.changed = !0);
          }
          placeWidget(e, n, i) {
            let o =
              this.index < this.top.children.length
                ? this.top.children[this.index]
                : null;
            if (
              o &&
              o.matchesWidget(e) &&
              (e == o.widget || !o.widget.type.toDOM.parentNode)
            )
              this.index++;
            else {
              let l = new r(this.top, e, n, i);
              this.top.children.splice(this.index++, 0, l), (this.changed = !0);
            }
          }
          addTextblockHacks() {
            let e = this.top.children[this.index - 1],
              n = this.top;
            for (; e instanceof a; )
              (n = e), (e = n.children[n.children.length - 1]);
            (!e ||
              !(e instanceof w) ||
              /\n$/.test(e.node.text) ||
              (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))) &&
              ((T || C) &&
                e &&
                e.dom.contentEditable == "false" &&
                this.addHackNode("IMG", n),
              this.addHackNode("BR", this.top));
          }
          addHackNode(e, n) {
            if (
              n == this.top &&
              this.index < n.children.length &&
              n.children[this.index].matchesHack(e)
            )
              this.index++;
            else {
              let i = document.createElement(e);
              e == "IMG" &&
                ((i.className = "ProseMirror-separator"), (i.alt = "")),
                e == "BR" && (i.className = "ProseMirror-trailingBreak");
              let o = new P(this.top, [], i, null);
              n != this.top
                ? n.children.push(o)
                : n.children.splice(this.index++, 0, o),
                (this.changed = !0);
            }
          }
          isLocked(e) {
            return (
              this.lock &&
              (e == this.lock ||
                (e.nodeType == 1 && e.contains(this.lock.parentNode)))
            );
          }
        }
        function yn(t, e) {
          let n = e,
            i = n.children.length,
            o = t.childCount,
            l = new Map(),
            u = [];
          e: for (; o > 0; ) {
            let m;
            for (;;)
              if (i) {
                let D = n.children[i - 1];
                if (D instanceof a) (n = D), (i = D.children.length);
                else {
                  (m = D), i--;
                  break;
                }
              } else {
                if (n == e) break e;
                (i = n.parent.children.indexOf(n)), (n = n.parent);
              }
            let M = m.node;
            if (M) {
              if (M != t.child(o - 1)) break;
              --o, l.set(m, o), u.push(m);
            }
          }
          return { index: o, matched: l, matches: u.reverse() };
        }
        function bn(t, e) {
          return t.type.side - e.type.side;
        }
        function xn(t, e, n, i) {
          let o = e.locals(t),
            l = 0;
          if (o.length == 0) {
            for (let D = 0; D < t.childCount; D++) {
              let R = t.child(D);
              i(R, o, e.forChild(l, R), D), (l += R.nodeSize);
            }
            return;
          }
          let u = 0,
            m = [],
            M = null;
          for (let D = 0; ; ) {
            let R, ne;
            for (; u < o.length && o[u].to == l; ) {
              let Ie = o[u++];
              Ie.widget && (R ? (ne || (ne = [R])).push(Ie) : (R = Ie));
            }
            if (R)
              if (ne) {
                ne.sort(bn);
                for (let Ie = 0; Ie < ne.length; Ie++) n(ne[Ie], D, !!M);
              } else n(R, D, !!M);
            let ue, Se;
            if (M) (Se = -1), (ue = M), (M = null);
            else if (D < t.childCount) (Se = D), (ue = t.child(D++));
            else break;
            for (let Ie = 0; Ie < m.length; Ie++)
              m[Ie].to <= l && m.splice(Ie--, 1);
            for (; u < o.length && o[u].from <= l && o[u].to > l; )
              m.push(o[u++]);
            let le = l + ue.nodeSize;
            if (ue.isText) {
              let Ie = le;
              u < o.length && o[u].from < Ie && (Ie = o[u].from);
              for (let ot = 0; ot < m.length; ot++)
                m[ot].to < Ie && (Ie = m[ot].to);
              Ie < le &&
                ((M = ue.cut(Ie - l)),
                (ue = ue.cut(0, Ie - l)),
                (le = Ie),
                (Se = -1));
            } else for (; u < o.length && o[u].to < le; ) u++;
            let Ke =
              ue.isInline && !ue.isLeaf
                ? m.filter((Ie) => !Ie.inline)
                : m.slice();
            i(ue, Ke, e.forChild(l, ue), Se), (l = le);
          }
        }
        function sn(t) {
          if (t.nodeName == "UL" || t.nodeName == "OL") {
            let e = t.style.cssText;
            (t.style.cssText = e + "; list-style: square !important"),
              window.getComputedStyle(t).listStyle,
              (t.style.cssText = e);
          }
        }
        function on(t, e, n, i) {
          for (let o = 0, l = 0; o < t.childCount && l <= i; ) {
            let u = t.child(o++),
              m = l;
            if (((l += u.nodeSize), !u.isText)) continue;
            let M = u.text;
            for (; o < t.childCount; ) {
              let D = t.child(o++);
              if (((l += D.nodeSize), !D.isText)) break;
              M += D.text;
            }
            if (l >= n) {
              if (l >= i && M.slice(i - e.length - m, i - m) == e)
                return i - e.length;
              let D = m < i ? M.lastIndexOf(e, i - m - 1) : -1;
              if (D >= 0 && D + e.length + m >= n) return m + D;
              if (
                n == i &&
                M.length >= i + e.length - m &&
                M.slice(i - m, i - m + e.length) == e
              )
                return i;
            }
          }
          return -1;
        }
        function Ut(t, e, n, i, o) {
          let l = [];
          for (let u = 0, m = 0; u < t.length; u++) {
            let M = t[u],
              D = m,
              R = (m += M.size);
            D >= n || R <= e
              ? l.push(M)
              : (D < e && l.push(M.slice(0, e - D, i)),
                o && (l.push(o), (o = void 0)),
                R > n && l.push(M.slice(n - D, M.size, i)));
          }
          return l;
        }
        function Qt(t, e = null) {
          let n = t.domSelectionRange(),
            i = t.state.doc;
          if (!n.focusNode) return null;
          let o = t.docView.nearestDesc(n.focusNode),
            l = o && o.size == 0,
            u = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
          if (u < 0) return null;
          let m = i.resolve(u),
            M,
            D;
          if (Q(n)) {
            for (M = m; o && !o.node; ) o = o.parent;
            let R = o.node;
            if (
              o &&
              R.isAtom &&
              v.nh.isSelectable(R) &&
              o.parent &&
              !(R.isInline && ye(n.focusNode, n.focusOffset, o.dom))
            ) {
              let ne = o.posBefore;
              D = new v.nh(u == ne ? m : i.resolve(ne));
            }
          } else {
            let R = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
            if (R < 0) return null;
            M = i.resolve(R);
          }
          if (!D) {
            let R =
              e == "pointer" || (t.state.selection.head < m.pos && !l) ? 1 : -1;
            D = E(t, M, m, R);
          }
          return D;
        }
        function Xt(t) {
          return t.editable
            ? t.hasFocus()
            : I(t) &&
                document.activeElement &&
                document.activeElement.contains(t.dom);
        }
        function Dt(t, e = !1) {
          let n = t.state.selection;
          if ((x(t, n), !!Xt(t))) {
            if (
              !e &&
              t.input.mouseDown &&
              t.input.mouseDown.allowDefault &&
              C
            ) {
              let i = t.domSelectionRange(),
                o = t.domObserver.currentSelection;
              if (
                i.anchorNode &&
                o.anchorNode &&
                Me(i.anchorNode, i.anchorOffset, o.anchorNode, o.anchorOffset)
              ) {
                (t.input.mouseDown.delayedSelectionSync = !0),
                  t.domObserver.setCurSelection();
                return;
              }
            }
            if ((t.domObserver.disconnectSelection(), t.cursorWrapper)) y(t);
            else {
              let { anchor: i, head: o } = n,
                l,
                u;
              ln &&
                !(n instanceof v.U3) &&
                (n.$from.parent.inlineContent || (l = an(t, n.from)),
                !n.empty && !n.$from.parent.inlineContent && (u = an(t, n.to))),
                t.docView.setSelection(i, o, t.root, e),
                ln && (l && f(l), u && f(u)),
                n.visible
                  ? t.dom.classList.remove("ProseMirror-hideselection")
                  : (t.dom.classList.add("ProseMirror-hideselection"),
                    "onselectionchange" in document && g(t));
            }
            t.domObserver.setCurSelection(), t.domObserver.connectSelection();
          }
        }
        const ln = T || (C && z < 63);
        function an(t, e) {
          let { node: n, offset: i } = t.docView.domFromPos(e, 0),
            o = i < n.childNodes.length ? n.childNodes[i] : null,
            l = i ? n.childNodes[i - 1] : null;
          if (T && o && o.contentEditable == "false") return d(o);
          if (
            (!o || o.contentEditable == "false") &&
            (!l || l.contentEditable == "false")
          ) {
            if (o) return d(o);
            if (l) return d(l);
          }
        }
        function d(t) {
          return (
            (t.contentEditable = "true"),
            T && t.draggable && ((t.draggable = !1), (t.wasDraggable = !0)),
            t
          );
        }
        function f(t) {
          (t.contentEditable = "false"),
            t.wasDraggable && ((t.draggable = !0), (t.wasDraggable = null));
        }
        function g(t) {
          let e = t.dom.ownerDocument;
          e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
          let n = t.domSelectionRange(),
            i = n.anchorNode,
            o = n.anchorOffset;
          e.addEventListener(
            "selectionchange",
            (t.input.hideSelectionGuard = () => {
              (n.anchorNode != i || n.anchorOffset != o) &&
                (e.removeEventListener(
                  "selectionchange",
                  t.input.hideSelectionGuard,
                ),
                setTimeout(() => {
                  (!Xt(t) || t.state.selection.visible) &&
                    t.dom.classList.remove("ProseMirror-hideselection");
                }, 20));
            }),
          );
        }
        function y(t) {
          let e = t.domSelection(),
            n = document.createRange(),
            i = t.cursorWrapper.dom,
            o = i.nodeName == "IMG";
          o ? n.setEnd(i.parentNode, ve(i) + 1) : n.setEnd(i, 0),
            n.collapse(!1),
            e.removeAllRanges(),
            e.addRange(n),
            !o &&
              !t.state.selection.visible &&
              Re &&
              Ve <= 11 &&
              ((i.disabled = !0), (i.disabled = !1));
        }
        function x(t, e) {
          if (e instanceof v.nh) {
            let n = t.docView.descAt(e.from);
            n != t.lastSelectedViewDesc &&
              (O(t), n && n.selectNode(), (t.lastSelectedViewDesc = n));
          } else O(t);
        }
        function O(t) {
          t.lastSelectedViewDesc &&
            (t.lastSelectedViewDesc.parent &&
              t.lastSelectedViewDesc.deselectNode(),
            (t.lastSelectedViewDesc = void 0));
        }
        function E(t, e, n, i) {
          return (
            t.someProp("createSelectionBetween", (o) => o(t, e, n)) ||
            v.U3.between(e, n, i)
          );
        }
        function F(t) {
          return t.editable && !t.hasFocus() ? !1 : I(t);
        }
        function I(t) {
          let e = t.domSelectionRange();
          if (!e.anchorNode) return !1;
          try {
            return (
              t.dom.contains(
                e.anchorNode.nodeType == 3
                  ? e.anchorNode.parentNode
                  : e.anchorNode,
              ) &&
              (t.editable ||
                t.dom.contains(
                  e.focusNode.nodeType == 3
                    ? e.focusNode.parentNode
                    : e.focusNode,
                ))
            );
          } catch {
            return !1;
          }
        }
        function V(t) {
          let e = t.docView.domFromPos(t.state.selection.anchor, 0),
            n = t.domSelectionRange();
          return Me(e.node, e.offset, n.anchorNode, n.anchorOffset);
        }
        function Z(t, e) {
          let { $anchor: n, $head: i } = t.selection,
            o = e > 0 ? n.max(i) : n.min(i),
            l = o.parent.inlineContent
              ? o.depth
                ? t.doc.resolve(e > 0 ? o.after() : o.before())
                : null
              : o;
          return l && v.LN.findFrom(l, e);
        }
        function ee(t, e) {
          return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
        }
        function he(t, e, n) {
          let i = t.state.selection;
          if (i instanceof v.U3)
            if (n.indexOf("s") > -1) {
              let { $head: o } = i,
                l = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter;
              if (!l || l.isText || !l.isLeaf) return !1;
              let u = t.state.doc.resolve(
                o.pos + l.nodeSize * (e < 0 ? -1 : 1),
              );
              return ee(t, new v.U3(i.$anchor, u));
            } else if (i.empty) {
              if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
                let o = Z(t.state, e);
                return o && o instanceof v.nh ? ee(t, o) : !1;
              } else if (!(B && n.indexOf("m") > -1)) {
                let o = i.$head,
                  l = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter,
                  u;
                if (!l || l.isText) return !1;
                let m = e < 0 ? o.pos - l.nodeSize : o.pos;
                return l.isAtom || ((u = t.docView.descAt(m)) && !u.contentDOM)
                  ? v.nh.isSelectable(l)
                    ? ee(
                        t,
                        new v.nh(
                          e < 0 ? t.state.doc.resolve(o.pos - l.nodeSize) : o,
                        ),
                      )
                    : pe
                      ? ee(
                          t,
                          new v.U3(
                            t.state.doc.resolve(e < 0 ? m : m + l.nodeSize),
                          ),
                        )
                      : !1
                  : !1;
              }
            } else return !1;
          else {
            if (i instanceof v.nh && i.node.isInline)
              return ee(t, new v.U3(e > 0 ? i.$to : i.$from));
            {
              let o = Z(t.state, e);
              return o ? ee(t, o) : !1;
            }
          }
        }
        function xe(t) {
          return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
        }
        function Ee(t, e) {
          let n = t.pmViewDesc;
          return (
            n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR")
          );
        }
        function Xe(t, e) {
          return e < 0 ? lt(t) : ut(t);
        }
        function lt(t) {
          let e = t.domSelectionRange(),
            n = e.focusNode,
            i = e.focusOffset;
          if (!n) return;
          let o,
            l,
            u = !1;
          for (
            Ae &&
            n.nodeType == 1 &&
            i < xe(n) &&
            Ee(n.childNodes[i], -1) &&
            (u = !0);
            ;
          )
            if (i > 0) {
              if (n.nodeType != 1) break;
              {
                let m = n.childNodes[i - 1];
                if (Ee(m, -1)) (o = n), (l = --i);
                else if (m.nodeType == 3) (n = m), (i = n.nodeValue.length);
                else break;
              }
            } else {
              if (Rt(n)) break;
              {
                let m = n.previousSibling;
                for (; m && Ee(m, -1); )
                  (o = n.parentNode), (l = ve(m)), (m = m.previousSibling);
                if (m) (n = m), (i = xe(n));
                else {
                  if (((n = n.parentNode), n == t.dom)) break;
                  i = 0;
                }
              }
            }
          u ? Et(t, n, i) : o && Et(t, o, l);
        }
        function ut(t) {
          let e = t.domSelectionRange(),
            n = e.focusNode,
            i = e.focusOffset;
          if (!n) return;
          let o = xe(n),
            l,
            u;
          for (;;)
            if (i < o) {
              if (n.nodeType != 1) break;
              let m = n.childNodes[i];
              if (Ee(m, 1)) (l = n), (u = ++i);
              else break;
            } else {
              if (Rt(n)) break;
              {
                let m = n.nextSibling;
                for (; m && Ee(m, 1); )
                  (l = m.parentNode), (u = ve(m) + 1), (m = m.nextSibling);
                if (m) (n = m), (i = 0), (o = xe(n));
                else {
                  if (((n = n.parentNode), n == t.dom)) break;
                  i = o = 0;
                }
              }
            }
          l && Et(t, l, u);
        }
        function Rt(t) {
          let e = t.pmViewDesc;
          return e && e.node && e.node.isBlock;
        }
        function Lt(t, e) {
          for (; t && e == t.childNodes.length && !K(t); )
            (e = ve(t) + 1), (t = t.parentNode);
          for (; t && e < t.childNodes.length; ) {
            let n = t.childNodes[e];
            if (n.nodeType == 3) return n;
            if (n.nodeType == 1 && n.contentEditable == "false") break;
            (t = n), (e = 0);
          }
        }
        function Gt(t, e) {
          for (; t && !e && !K(t); ) (e = ve(t)), (t = t.parentNode);
          for (; t && e; ) {
            let n = t.childNodes[e - 1];
            if (n.nodeType == 3) return n;
            if (n.nodeType == 1 && n.contentEditable == "false") break;
            (t = n), (e = t.childNodes.length);
          }
        }
        function Et(t, e, n) {
          if (e.nodeType != 3) {
            let l, u;
            (u = Lt(e, n))
              ? ((e = u), (n = 0))
              : (l = Gt(e, n)) && ((e = l), (n = l.nodeValue.length));
          }
          let i = t.domSelection();
          if (Q(i)) {
            let l = document.createRange();
            l.setEnd(e, n),
              l.setStart(e, n),
              i.removeAllRanges(),
              i.addRange(l);
          } else i.extend && i.extend(e, n);
          t.domObserver.setCurSelection();
          let { state: o } = t;
          setTimeout(() => {
            t.state == o && Dt(t);
          }, 50);
        }
        function Vt(t, e) {
          let n = t.state.doc.resolve(e);
          if (!(C || j) && n.parent.inlineContent) {
            let o = t.coordsAtPos(e);
            if (e > n.start()) {
              let l = t.coordsAtPos(e - 1),
                u = (l.top + l.bottom) / 2;
              if (u > o.top && u < o.bottom && Math.abs(l.left - o.left) > 1)
                return l.left < o.left ? "ltr" : "rtl";
            }
            if (e < n.end()) {
              let l = t.coordsAtPos(e + 1),
                u = (l.top + l.bottom) / 2;
              if (u > o.top && u < o.bottom && Math.abs(l.left - o.left) > 1)
                return l.left > o.left ? "ltr" : "rtl";
            }
          }
          return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
        }
        function It(t, e, n) {
          let i = t.state.selection;
          if (
            (i instanceof v.U3 && !i.empty) ||
            n.indexOf("s") > -1 ||
            (B && n.indexOf("m") > -1)
          )
            return !1;
          let { $from: o, $to: l } = i;
          if (
            !o.parent.inlineContent ||
            t.endOfTextblock(e < 0 ? "up" : "down")
          ) {
            let u = Z(t.state, e);
            if (u && u instanceof v.nh) return ee(t, u);
          }
          if (!o.parent.inlineContent) {
            let u = e < 0 ? o : l,
              m = i instanceof v.i5 ? v.LN.near(u, e) : v.LN.findFrom(u, e);
            return m ? ee(t, m) : !1;
          }
          return !1;
        }
        function $t(t, e) {
          if (!(t.state.selection instanceof v.U3)) return !0;
          let { $head: n, $anchor: i, empty: o } = t.state.selection;
          if (!n.sameParent(i)) return !0;
          if (!o) return !1;
          if (t.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
          let l = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
          if (l && !l.isText) {
            let u = t.state.tr;
            return (
              e < 0
                ? u.delete(n.pos - l.nodeSize, n.pos)
                : u.delete(n.pos, n.pos + l.nodeSize),
              t.dispatch(u),
              !0
            );
          }
          return !1;
        }
        function An(t, e, n) {
          t.domObserver.stop(), (e.contentEditable = n), t.domObserver.start();
        }
        function ar(t) {
          if (!T || t.state.selection.$head.parentOffset > 0) return !1;
          let { focusNode: e, focusOffset: n } = t.domSelectionRange();
          if (
            e &&
            e.nodeType == 1 &&
            n == 0 &&
            e.firstChild &&
            e.firstChild.contentEditable == "false"
          ) {
            let i = e.firstChild;
            An(t, i, "true"), setTimeout(() => An(t, i, "false"), 20);
          }
          return !1;
        }
        function cr(t) {
          let e = "";
          return (
            t.ctrlKey && (e += "c"),
            t.metaKey && (e += "m"),
            t.altKey && (e += "a"),
            t.shiftKey && (e += "s"),
            e
          );
        }
        function fr(t, e) {
          let n = e.keyCode,
            i = cr(e);
          if (n == 8 || (B && n == 72 && i == "c"))
            return $t(t, -1) || Xe(t, -1);
          if ((n == 46 && !e.shiftKey) || (B && n == 68 && i == "c"))
            return $t(t, 1) || Xe(t, 1);
          if (n == 13 || n == 27) return !0;
          if (n == 37 || (B && n == 66 && i == "c")) {
            let o =
              n == 37 ? (Vt(t, t.state.selection.from) == "ltr" ? -1 : 1) : -1;
            return he(t, o, i) || Xe(t, o);
          } else if (n == 39 || (B && n == 70 && i == "c")) {
            let o =
              n == 39 ? (Vt(t, t.state.selection.from) == "ltr" ? 1 : -1) : 1;
            return he(t, o, i) || Xe(t, o);
          } else {
            if (n == 38 || (B && n == 80 && i == "c"))
              return It(t, -1, i) || Xe(t, -1);
            if (n == 40 || (B && n == 78 && i == "c"))
              return ar(t) || It(t, 1, i) || Xe(t, 1);
            if (
              i == (B ? "m" : "c") &&
              (n == 66 || n == 73 || n == 89 || n == 90)
            )
              return !0;
          }
          return !1;
        }
        function Rn(t, e) {
          t.someProp("transformCopied", (Se) => {
            e = Se(e, t);
          });
          let n = [],
            { content: i, openStart: o, openEnd: l } = e;
          for (
            ;
            o > 1 && l > 1 && i.childCount == 1 && i.firstChild.childCount == 1;
          ) {
            o--, l--;
            let Se = i.firstChild;
            n.push(
              Se.type.name,
              Se.attrs != Se.type.defaultAttrs ? Se.attrs : null,
            ),
              (i = Se.content);
          }
          let u =
              t.someProp("clipboardSerializer") ||
              se.ZF.fromSchema(t.state.schema),
            m = Vn(),
            M = m.createElement("div");
          M.appendChild(u.serializeFragment(i, { document: m }));
          let D = M.firstChild,
            R,
            ne = 0;
          for (; D && D.nodeType == 1 && (R = Bn[D.nodeName.toLowerCase()]); ) {
            for (let Se = R.length - 1; Se >= 0; Se--) {
              let le = m.createElement(R[Se]);
              for (; M.firstChild; ) le.appendChild(M.firstChild);
              M.appendChild(le), ne++;
            }
            D = M.firstChild;
          }
          D &&
            D.nodeType == 1 &&
            D.setAttribute(
              "data-pm-slice",
              `${o} ${l}${ne ? ` -${ne}` : ""} ${JSON.stringify(n)}`,
            );
          let ue =
            t.someProp("clipboardTextSerializer", (Se) => Se(e, t)) ||
            e.content.textBetween(
              0,
              e.content.size,
              `

`,
            );
          return { dom: M, text: ue, slice: e };
        }
        function In(t, e, n, i, o) {
          let l = o.parent.type.spec.code,
            u,
            m;
          if (!n && !e) return null;
          let M = e && (i || l || !n);
          if (M) {
            if (
              (t.someProp("transformPastedText", (ue) => {
                e = ue(e, l || i, t);
              }),
              l)
            )
              return e
                ? new se.Ji(
                    se.FK.from(
                      t.state.schema.text(
                        e.replace(
                          /\r\n?/g,
                          `
`,
                        ),
                      ),
                    ),
                    0,
                    0,
                  )
                : se.Ji.empty;
            let ne = t.someProp("clipboardTextParser", (ue) => ue(e, o, i, t));
            if (ne) m = ne;
            else {
              let ue = o.marks(),
                { schema: Se } = t.state,
                le = se.ZF.fromSchema(Se);
              (u = document.createElement("div")),
                e.split(/(?:\r\n?|\n)+/).forEach((Ke) => {
                  let Ie = u.appendChild(document.createElement("p"));
                  Ke && Ie.appendChild(le.serializeNode(Se.text(Ke, ue)));
                });
            }
          } else
            t.someProp("transformPastedHTML", (ne) => {
              n = ne(n, t);
            }),
              (u = dr(n)),
              pe && pr(u);
          let D = u && u.querySelector("[data-pm-slice]"),
            R =
              D &&
              /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(
                D.getAttribute("data-pm-slice") || "",
              );
          if (R && R[3])
            for (let ne = +R[3]; ne > 0; ne--) {
              let ue = u.firstChild;
              for (; ue && ue.nodeType != 1; ) ue = ue.nextSibling;
              if (!ue) break;
              u = ue;
            }
          if (
            (m ||
              (m = (
                t.someProp("clipboardParser") ||
                t.someProp("domParser") ||
                se.S4.fromSchema(t.state.schema)
              ).parseSlice(u, {
                preserveWhitespace: !!(M || R),
                context: o,
                ruleFromNode(ue) {
                  return ue.nodeName == "BR" &&
                    !ue.nextSibling &&
                    ue.parentNode &&
                    !hr.test(ue.parentNode.nodeName)
                    ? { ignore: !0 }
                    : null;
                },
              })),
            R)
          )
            m = mr(zn(m, +R[1], +R[2]), R[4]);
          else if (
            ((m = se.Ji.maxOpen(ur(m.content, o), !0)),
            m.openStart || m.openEnd)
          ) {
            let ne = 0,
              ue = 0;
            for (
              let Se = m.content.firstChild;
              ne < m.openStart && !Se.type.spec.isolating;
              ne++, Se = Se.firstChild
            );
            for (
              let Se = m.content.lastChild;
              ue < m.openEnd && !Se.type.spec.isolating;
              ue++, Se = Se.lastChild
            );
            m = zn(m, ne, ue);
          }
          return (
            t.someProp("transformPasted", (ne) => {
              m = ne(m, t);
            }),
            m
          );
        }
        const hr =
          /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
        function ur(t, e) {
          if (t.childCount < 2) return t;
          for (let n = e.depth; n >= 0; n--) {
            let o = e.node(n).contentMatchAt(e.index(n)),
              l,
              u = [];
            if (
              (t.forEach((m) => {
                if (!u) return;
                let M = o.findWrapping(m.type),
                  D;
                if (!M) return (u = null);
                if (
                  (D = u.length && l.length && Pn(M, l, m, u[u.length - 1], 0))
                )
                  u[u.length - 1] = D;
                else {
                  u.length && (u[u.length - 1] = Fn(u[u.length - 1], l.length));
                  let R = vn(m, M);
                  u.push(R), (o = o.matchType(R.type)), (l = M);
                }
              }),
              u)
            )
              return se.FK.from(u);
          }
          return t;
        }
        function vn(t, e, n = 0) {
          for (let i = e.length - 1; i >= n; i--)
            t = e[i].create(null, se.FK.from(t));
          return t;
        }
        function Pn(t, e, n, i, o) {
          if (o < t.length && o < e.length && t[o] == e[o]) {
            let l = Pn(t, e, n, i.lastChild, o + 1);
            if (l) return i.copy(i.content.replaceChild(i.childCount - 1, l));
            if (
              i
                .contentMatchAt(i.childCount)
                .matchType(o == t.length - 1 ? n.type : t[o + 1])
            )
              return i.copy(i.content.append(se.FK.from(vn(n, t, o + 1))));
          }
        }
        function Fn(t, e) {
          if (e == 0) return t;
          let n = t.content.replaceChild(
              t.childCount - 1,
              Fn(t.lastChild, e - 1),
            ),
            i = t.contentMatchAt(t.childCount).fillBefore(se.FK.empty, !0);
          return t.copy(n.append(i));
        }
        function Sn(t, e, n, i, o, l) {
          let u = e < 0 ? t.firstChild : t.lastChild,
            m = u.content;
          return (
            t.childCount > 1 && (l = 0),
            o < i - 1 && (m = Sn(m, e, n, i, o + 1, l)),
            o >= n &&
              (m =
                e < 0
                  ? u
                      .contentMatchAt(0)
                      .fillBefore(m, l <= o)
                      .append(m)
                  : m.append(
                      u
                        .contentMatchAt(u.childCount)
                        .fillBefore(se.FK.empty, !0),
                    )),
            t.replaceChild(e < 0 ? 0 : t.childCount - 1, u.copy(m))
          );
        }
        function zn(t, e, n) {
          return (
            e < t.openStart &&
              (t = new se.Ji(
                Sn(t.content, -1, e, t.openStart, 0, t.openEnd),
                e,
                t.openEnd,
              )),
            n < t.openEnd &&
              (t = new se.Ji(
                Sn(t.content, 1, n, t.openEnd, 0, 0),
                t.openStart,
                n,
              )),
            t
          );
        }
        const Bn = {
          thead: ["table"],
          tbody: ["table"],
          tfoot: ["table"],
          caption: ["table"],
          colgroup: ["table"],
          col: ["table", "colgroup"],
          tr: ["table", "tbody"],
          td: ["table", "tbody", "tr"],
          th: ["table", "tbody", "tr"],
        };
        let Ln = null;
        function Vn() {
          return (
            Ln || (Ln = document.implementation.createHTMLDocument("title"))
          );
        }
        function dr(t) {
          let e = /^(\s*<meta [^>]*>)*/.exec(t);
          e && (t = t.slice(e[0].length));
          let n = Vn().createElement("div"),
            i = /<([a-z][^>\s]+)/i.exec(t),
            o;
          if (
            ((o = i && Bn[i[1].toLowerCase()]) &&
              (t =
                o.map((l) => "<" + l + ">").join("") +
                t +
                o
                  .map((l) => "</" + l + ">")
                  .reverse()
                  .join("")),
            (n.innerHTML = t),
            o)
          )
            for (let l = 0; l < o.length; l++) n = n.querySelector(o[l]) || n;
          return n;
        }
        function pr(t) {
          let e = t.querySelectorAll(
            C ? "span:not([class]):not([style])" : "span.Apple-converted-space",
          );
          for (let n = 0; n < e.length; n++) {
            let i = e[n];
            i.childNodes.length == 1 &&
              i.textContent == "\xA0" &&
              i.parentNode &&
              i.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), i);
          }
        }
        function mr(t, e) {
          if (!t.size) return t;
          let n = t.content.firstChild.type.schema,
            i;
          try {
            i = JSON.parse(e);
          } catch {
            return t;
          }
          let { content: o, openStart: l, openEnd: u } = t;
          for (let m = i.length - 2; m >= 0; m -= 2) {
            let M = n.nodes[i[m]];
            if (!M || M.hasRequiredAttrs()) break;
            (o = se.FK.from(M.create(i[m + 1], o))), l++, u++;
          }
          return new se.Ji(o, l, u);
        }
        const xt = {},
          St = {},
          gr = { touchstart: !0, touchmove: !0 };
        class yr {
          constructor() {
            (this.shiftKey = !1),
              (this.mouseDown = null),
              (this.lastKeyCode = null),
              (this.lastKeyCodeTime = 0),
              (this.lastClick = { time: 0, x: 0, y: 0, type: "" }),
              (this.lastSelectionOrigin = null),
              (this.lastSelectionTime = 0),
              (this.lastIOSEnter = 0),
              (this.lastIOSEnterFallbackTimeout = -1),
              (this.lastFocus = 0),
              (this.lastTouch = 0),
              (this.lastAndroidDelete = 0),
              (this.composing = !1),
              (this.compositionNode = null),
              (this.composingTimeout = -1),
              (this.compositionNodes = []),
              (this.compositionEndedAt = -2e8),
              (this.compositionID = 1),
              (this.compositionPendingChanges = 0),
              (this.domChangeCount = 0),
              (this.eventHandlers = Object.create(null)),
              (this.hideSelectionGuard = null);
          }
        }
        function br(t) {
          for (let e in xt) {
            let n = xt[e];
            t.dom.addEventListener(
              e,
              (t.input.eventHandlers[e] = (i) => {
                Sr(t, i) &&
                  !Cn(t, i) &&
                  (t.editable || !(i.type in St)) &&
                  n(t, i);
              }),
              gr[e] ? { passive: !0 } : void 0,
            );
          }
          T && t.dom.addEventListener("input", () => null), kn(t);
        }
        function vt(t, e) {
          (t.input.lastSelectionOrigin = e),
            (t.input.lastSelectionTime = Date.now());
        }
        function xr(t) {
          t.domObserver.stop();
          for (let e in t.input.eventHandlers)
            t.dom.removeEventListener(e, t.input.eventHandlers[e]);
          clearTimeout(t.input.composingTimeout),
            clearTimeout(t.input.lastIOSEnterFallbackTimeout);
        }
        function kn(t) {
          t.someProp("handleDOMEvents", (e) => {
            for (let n in e)
              t.input.eventHandlers[n] ||
                t.dom.addEventListener(
                  n,
                  (t.input.eventHandlers[n] = (i) => Cn(t, i)),
                );
          });
        }
        function Cn(t, e) {
          return t.someProp("handleDOMEvents", (n) => {
            let i = n[e.type];
            return i ? i(t, e) || e.defaultPrevented : !1;
          });
        }
        function Sr(t, e) {
          if (!e.bubbles) return !0;
          if (e.defaultPrevented) return !1;
          for (let n = e.target; n != t.dom; n = n.parentNode)
            if (
              !n ||
              n.nodeType == 11 ||
              (n.pmViewDesc && n.pmViewDesc.stopEvent(e))
            )
              return !1;
          return !0;
        }
        function kr(t, e) {
          !Cn(t, e) &&
            xt[e.type] &&
            (t.editable || !(e.type in St)) &&
            xt[e.type](t, e);
        }
        (St.keydown = (t, e) => {
          let n = e;
          if (
            ((t.input.shiftKey = n.keyCode == 16 || n.shiftKey),
            !Kn(t, n) &&
              ((t.input.lastKeyCode = n.keyCode),
              (t.input.lastKeyCodeTime = Date.now()),
              !(Y && C && n.keyCode == 13)))
          )
            if (
              (n.keyCode != 229 && t.domObserver.forceFlush(),
              A && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey)
            ) {
              let i = Date.now();
              (t.input.lastIOSEnter = i),
                (t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
                  t.input.lastIOSEnter == i &&
                    (t.someProp("handleKeyDown", (o) => o(t, ce(13, "Enter"))),
                    (t.input.lastIOSEnter = 0));
                }, 200));
            } else
              t.someProp("handleKeyDown", (i) => i(t, n)) || fr(t, n)
                ? n.preventDefault()
                : vt(t, "key");
        }),
          (St.keyup = (t, e) => {
            e.keyCode == 16 && (t.input.shiftKey = !1);
          }),
          (St.keypress = (t, e) => {
            let n = e;
            if (
              Kn(t, n) ||
              !n.charCode ||
              (n.ctrlKey && !n.altKey) ||
              (B && n.metaKey)
            )
              return;
            if (t.someProp("handleKeyPress", (o) => o(t, n))) {
              n.preventDefault();
              return;
            }
            let i = t.state.selection;
            if (!(i instanceof v.U3) || !i.$from.sameParent(i.$to)) {
              let o = String.fromCharCode(n.charCode);
              !/[\r\n]/.test(o) &&
                !t.someProp("handleTextInput", (l) =>
                  l(t, i.$from.pos, i.$to.pos, o),
                ) &&
                t.dispatch(t.state.tr.insertText(o).scrollIntoView()),
                n.preventDefault();
            }
          });
        function cn(t) {
          return { left: t.clientX, top: t.clientY };
        }
        function Cr(t, e) {
          let n = e.x - t.clientX,
            i = e.y - t.clientY;
          return n * n + i * i < 100;
        }
        function wn(t, e, n, i, o) {
          if (i == -1) return !1;
          let l = t.state.doc.resolve(i);
          for (let u = l.depth + 1; u > 0; u--)
            if (
              t.someProp(e, (m) =>
                u > l.depth
                  ? m(t, n, l.nodeAfter, l.before(u), o, !0)
                  : m(t, n, l.node(u), l.before(u), o, !1),
              )
            )
              return !0;
          return !1;
        }
        function Ht(t, e, n) {
          t.focused || t.focus();
          let i = t.state.tr.setSelection(e);
          n == "pointer" && i.setMeta("pointer", !0), t.dispatch(i);
        }
        function wr(t, e) {
          if (e == -1) return !1;
          let n = t.state.doc.resolve(e),
            i = n.nodeAfter;
          return i && i.isAtom && v.nh.isSelectable(i)
            ? (Ht(t, new v.nh(n), "pointer"), !0)
            : !1;
        }
        function Mr(t, e) {
          if (e == -1) return !1;
          let n = t.state.selection,
            i,
            o;
          n instanceof v.nh && (i = n.node);
          let l = t.state.doc.resolve(e);
          for (let u = l.depth + 1; u > 0; u--) {
            let m = u > l.depth ? l.nodeAfter : l.node(u);
            if (v.nh.isSelectable(m)) {
              i &&
              n.$from.depth > 0 &&
              u >= n.$from.depth &&
              l.before(n.$from.depth + 1) == n.$from.pos
                ? (o = l.before(n.$from.depth))
                : (o = l.before(u));
              break;
            }
          }
          return o != null
            ? (Ht(t, v.nh.create(t.state.doc, o), "pointer"), !0)
            : !1;
        }
        function Or(t, e, n, i, o) {
          return (
            wn(t, "handleClickOn", e, n, i) ||
            t.someProp("handleClick", (l) => l(t, e, i)) ||
            (o ? Mr(t, n) : wr(t, n))
          );
        }
        function Nr(t, e, n, i) {
          return (
            wn(t, "handleDoubleClickOn", e, n, i) ||
            t.someProp("handleDoubleClick", (o) => o(t, e, i))
          );
        }
        function Dr(t, e, n, i) {
          return (
            wn(t, "handleTripleClickOn", e, n, i) ||
            t.someProp("handleTripleClick", (o) => o(t, e, i)) ||
            Er(t, n, i)
          );
        }
        function Er(t, e, n) {
          if (n.button != 0) return !1;
          let i = t.state.doc;
          if (e == -1)
            return i.inlineContent
              ? (Ht(t, v.U3.create(i, 0, i.content.size), "pointer"), !0)
              : !1;
          let o = i.resolve(e);
          for (let l = o.depth + 1; l > 0; l--) {
            let u = l > o.depth ? o.nodeAfter : o.node(l),
              m = o.before(l);
            if (u.inlineContent)
              Ht(t, v.U3.create(i, m + 1, m + 1 + u.content.size), "pointer");
            else if (v.nh.isSelectable(u)) Ht(t, v.nh.create(i, m), "pointer");
            else continue;
            return !0;
          }
        }
        function Mn(t) {
          return fn(t);
        }
        const Jn = B ? "metaKey" : "ctrlKey";
        xt.mousedown = (t, e) => {
          let n = e;
          t.input.shiftKey = n.shiftKey;
          let i = Mn(t),
            o = Date.now(),
            l = "singleClick";
          o - t.input.lastClick.time < 500 &&
            Cr(n, t.input.lastClick) &&
            !n[Jn] &&
            (t.input.lastClick.type == "singleClick"
              ? (l = "doubleClick")
              : t.input.lastClick.type == "doubleClick" && (l = "tripleClick")),
            (t.input.lastClick = {
              time: o,
              x: n.clientX,
              y: n.clientY,
              type: l,
            });
          let u = t.posAtCoords(cn(n));
          u &&
            (l == "singleClick"
              ? (t.input.mouseDown && t.input.mouseDown.done(),
                (t.input.mouseDown = new Tr(t, u, n, !!i)))
              : (l == "doubleClick" ? Nr : Dr)(t, u.pos, u.inside, n)
                ? n.preventDefault()
                : vt(t, "pointer"));
        };
        class Tr {
          constructor(e, n, i, o) {
            (this.view = e),
              (this.pos = n),
              (this.event = i),
              (this.flushed = o),
              (this.delayedSelectionSync = !1),
              (this.mightDrag = null),
              (this.startDoc = e.state.doc),
              (this.selectNode = !!i[Jn]),
              (this.allowDefault = i.shiftKey);
            let l, u;
            if (n.inside > -1)
              (l = e.state.doc.nodeAt(n.inside)), (u = n.inside);
            else {
              let R = e.state.doc.resolve(n.pos);
              (l = R.parent), (u = R.depth ? R.before() : 0);
            }
            const m = o ? null : i.target,
              M = m ? e.docView.nearestDesc(m, !0) : null;
            this.target = M ? M.dom : null;
            let { selection: D } = e.state;
            ((i.button == 0 &&
              l.type.spec.draggable &&
              l.type.spec.selectable !== !1) ||
              (D instanceof v.nh && D.from <= u && D.to > u)) &&
              (this.mightDrag = {
                node: l,
                pos: u,
                addAttr: !!(this.target && !this.target.draggable),
                setUneditable: !!(
                  this.target &&
                  Ae &&
                  !this.target.hasAttribute("contentEditable")
                ),
              }),
              this.target &&
                this.mightDrag &&
                (this.mightDrag.addAttr || this.mightDrag.setUneditable) &&
                (this.view.domObserver.stop(),
                this.mightDrag.addAttr && (this.target.draggable = !0),
                this.mightDrag.setUneditable &&
                  setTimeout(() => {
                    this.view.input.mouseDown == this &&
                      this.target.setAttribute("contentEditable", "false");
                  }, 20),
                this.view.domObserver.start()),
              e.root.addEventListener(
                "mouseup",
                (this.up = this.up.bind(this)),
              ),
              e.root.addEventListener(
                "mousemove",
                (this.move = this.move.bind(this)),
              ),
              vt(e, "pointer");
          }
          done() {
            this.view.root.removeEventListener("mouseup", this.up),
              this.view.root.removeEventListener("mousemove", this.move),
              this.mightDrag &&
                this.target &&
                (this.view.domObserver.stop(),
                this.mightDrag.addAttr &&
                  this.target.removeAttribute("draggable"),
                this.mightDrag.setUneditable &&
                  this.target.removeAttribute("contentEditable"),
                this.view.domObserver.start()),
              this.delayedSelectionSync && setTimeout(() => Dt(this.view)),
              (this.view.input.mouseDown = null);
          }
          up(e) {
            if ((this.done(), !this.view.dom.contains(e.target))) return;
            let n = this.pos;
            this.view.state.doc != this.startDoc &&
              (n = this.view.posAtCoords(cn(e))),
              this.updateAllowDefault(e),
              this.allowDefault || !n
                ? vt(this.view, "pointer")
                : Or(this.view, n.pos, n.inside, e, this.selectNode)
                  ? e.preventDefault()
                  : e.button == 0 &&
                      (this.flushed ||
                        (T && this.mightDrag && !this.mightDrag.node.isAtom) ||
                        (C &&
                          !this.view.state.selection.visible &&
                          Math.min(
                            Math.abs(n.pos - this.view.state.selection.from),
                            Math.abs(n.pos - this.view.state.selection.to),
                          ) <= 2))
                    ? (Ht(
                        this.view,
                        v.LN.near(this.view.state.doc.resolve(n.pos)),
                        "pointer",
                      ),
                      e.preventDefault())
                    : vt(this.view, "pointer");
          }
          move(e) {
            this.updateAllowDefault(e),
              vt(this.view, "pointer"),
              e.buttons == 0 && this.done();
          }
          updateAllowDefault(e) {
            !this.allowDefault &&
              (Math.abs(this.event.x - e.clientX) > 4 ||
                Math.abs(this.event.y - e.clientY) > 4) &&
              (this.allowDefault = !0);
          }
        }
        (xt.touchstart = (t) => {
          (t.input.lastTouch = Date.now()), Mn(t), vt(t, "pointer");
        }),
          (xt.touchmove = (t) => {
            (t.input.lastTouch = Date.now()), vt(t, "pointer");
          }),
          (xt.contextmenu = (t) => Mn(t));
        function Kn(t, e) {
          return t.composing
            ? !0
            : T && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500
              ? ((t.input.compositionEndedAt = -2e8), !0)
              : !1;
        }
        const Ar = Y ? 5e3 : -1;
        (St.compositionstart = St.compositionupdate =
          (t) => {
            if (!t.composing) {
              t.domObserver.flush();
              let { state: e } = t,
                n = e.selection.$from;
              if (
                e.selection.empty &&
                (e.storedMarks ||
                  (!n.textOffset &&
                    n.parentOffset &&
                    n.nodeBefore.marks.some(
                      (i) => i.type.spec.inclusive === !1,
                    )))
              )
                (t.markCursor = t.state.storedMarks || n.marks()),
                  fn(t, !0),
                  (t.markCursor = null);
              else if (
                (fn(t),
                Ae &&
                  e.selection.empty &&
                  n.parentOffset &&
                  !n.textOffset &&
                  n.nodeBefore.marks.length)
              ) {
                let i = t.domSelectionRange();
                for (
                  let o = i.focusNode, l = i.focusOffset;
                  o && o.nodeType == 1 && l != 0;
                ) {
                  let u = l < 0 ? o.lastChild : o.childNodes[l - 1];
                  if (!u) break;
                  if (u.nodeType == 3) {
                    t.domSelection().collapse(u, u.nodeValue.length);
                    break;
                  } else (o = u), (l = -1);
                }
              }
              t.input.composing = !0;
            }
            Wn(t, Ar);
          }),
          (St.compositionend = (t, e) => {
            t.composing &&
              ((t.input.composing = !1),
              (t.input.compositionEndedAt = e.timeStamp),
              (t.input.compositionPendingChanges =
                t.domObserver.pendingRecords().length
                  ? t.input.compositionID
                  : 0),
              (t.input.compositionNode = null),
              t.input.compositionPendingChanges &&
                Promise.resolve().then(() => t.domObserver.flush()),
              t.input.compositionID++,
              Wn(t, 20));
          });
        function Wn(t, e) {
          clearTimeout(t.input.composingTimeout),
            e > -1 && (t.input.composingTimeout = setTimeout(() => fn(t), e));
        }
        function _n(t) {
          for (
            t.composing &&
            ((t.input.composing = !1), (t.input.compositionEndedAt = Ir()));
            t.input.compositionNodes.length > 0;
          )
            t.input.compositionNodes.pop().markParentsDirty();
        }
        function Rr(t) {
          let e = t.domSelectionRange();
          if (!e.focusNode) return null;
          let n = Ge(e.focusNode, e.focusOffset),
            i = et(e.focusNode, e.focusOffset);
          if (n && i && n != i) {
            let o = i.pmViewDesc;
            if (!o || !o.isText(i.nodeValue)) return i;
            if (t.input.compositionNode == i) {
              let l = n.pmViewDesc;
              if (!(!l || !l.isText(n.nodeValue))) return i;
            }
          }
          return n || i;
        }
        function Ir() {
          let t = document.createEvent("Event");
          return t.initEvent("event", !0, !0), t.timeStamp;
        }
        function fn(t, e = !1) {
          if (!(Y && t.domObserver.flushingSoon >= 0)) {
            if (
              (t.domObserver.forceFlush(),
              _n(t),
              e || (t.docView && t.docView.dirty))
            ) {
              let n = Qt(t);
              return (
                n && !n.eq(t.state.selection)
                  ? t.dispatch(t.state.tr.setSelection(n))
                  : t.updateState(t.state),
                !0
              );
            }
            return !1;
          }
        }
        function vr(t, e) {
          if (!t.dom.parentNode) return;
          let n = t.dom.parentNode.appendChild(document.createElement("div"));
          n.appendChild(e),
            (n.style.cssText = "position: fixed; left: -10000px; top: 10px");
          let i = getSelection(),
            o = document.createRange();
          o.selectNodeContents(e),
            t.dom.blur(),
            i.removeAllRanges(),
            i.addRange(o),
            setTimeout(() => {
              n.parentNode && n.parentNode.removeChild(n), t.focus();
            }, 50);
        }
        const Yt = (Re && Ve < 15) || (A && Oe < 604);
        xt.copy = St.cut = (t, e) => {
          let n = e,
            i = t.state.selection,
            o = n.type == "cut";
          if (i.empty) return;
          let l = Yt ? null : n.clipboardData,
            u = i.content(),
            { dom: m, text: M } = Rn(t, u);
          l
            ? (n.preventDefault(),
              l.clearData(),
              l.setData("text/html", m.innerHTML),
              l.setData("text/plain", M))
            : vr(t, m),
            o &&
              t.dispatch(
                t.state.tr
                  .deleteSelection()
                  .scrollIntoView()
                  .setMeta("uiEvent", "cut"),
              );
        };
        function Pr(t) {
          return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1
            ? t.content.firstChild
            : null;
        }
        function Fr(t, e) {
          if (!t.dom.parentNode) return;
          let n =
              t.input.shiftKey || t.state.selection.$from.parent.type.spec.code,
            i = t.dom.parentNode.appendChild(
              document.createElement(n ? "textarea" : "div"),
            );
          n || (i.contentEditable = "true"),
            (i.style.cssText = "position: fixed; left: -10000px; top: 10px"),
            i.focus();
          let o = t.input.shiftKey && t.input.lastKeyCode != 45;
          setTimeout(() => {
            t.focus(),
              i.parentNode && i.parentNode.removeChild(i),
              n
                ? Zt(t, i.value, null, o, e)
                : Zt(t, i.textContent, i.innerHTML, o, e);
          }, 50);
        }
        function Zt(t, e, n, i, o) {
          let l = In(t, e, n, i, t.state.selection.$from);
          if (t.someProp("handlePaste", (M) => M(t, o, l || se.Ji.empty)))
            return !0;
          if (!l) return !1;
          let u = Pr(l),
            m = u
              ? t.state.tr.replaceSelectionWith(u, i)
              : t.state.tr.replaceSelection(l);
          return (
            t.dispatch(
              m
                .scrollIntoView()
                .setMeta("paste", !0)
                .setMeta("uiEvent", "paste"),
            ),
            !0
          );
        }
        function Un(t) {
          let e = t.getData("text/plain") || t.getData("Text");
          if (e) return e;
          let n = t.getData("text/uri-list");
          return n ? n.replace(/\r?\n/g, " ") : "";
        }
        St.paste = (t, e) => {
          let n = e;
          if (t.composing && !Y) return;
          let i = Yt ? null : n.clipboardData,
            o = t.input.shiftKey && t.input.lastKeyCode != 45;
          i && Zt(t, Un(i), i.getData("text/html"), o, n)
            ? n.preventDefault()
            : Fr(t, n);
        };
        class $n {
          constructor(e, n, i) {
            (this.slice = e), (this.move = n), (this.node = i);
          }
        }
        const Hn = B ? "altKey" : "ctrlKey";
        (xt.dragstart = (t, e) => {
          let n = e,
            i = t.input.mouseDown;
          if ((i && i.done(), !n.dataTransfer)) return;
          let o = t.state.selection,
            l = o.empty ? null : t.posAtCoords(cn(n)),
            u;
          if (
            !(
              l &&
              l.pos >= o.from &&
              l.pos <= (o instanceof v.nh ? o.to - 1 : o.to)
            )
          ) {
            if (i && i.mightDrag) u = v.nh.create(t.state.doc, i.mightDrag.pos);
            else if (n.target && n.target.nodeType == 1) {
              let ne = t.docView.nearestDesc(n.target, !0);
              ne &&
                ne.node.type.spec.draggable &&
                ne != t.docView &&
                (u = v.nh.create(t.state.doc, ne.posBefore));
            }
          }
          let m = (u || t.state.selection).content(),
            { dom: M, text: D, slice: R } = Rn(t, m);
          n.dataTransfer.clearData(),
            n.dataTransfer.setData(Yt ? "Text" : "text/html", M.innerHTML),
            (n.dataTransfer.effectAllowed = "copyMove"),
            Yt || n.dataTransfer.setData("text/plain", D),
            (t.dragging = new $n(R, !n[Hn], u));
        }),
          (xt.dragend = (t) => {
            let e = t.dragging;
            window.setTimeout(() => {
              t.dragging == e && (t.dragging = null);
            }, 50);
          }),
          (St.dragover = St.dragenter = (t, e) => e.preventDefault()),
          (St.drop = (t, e) => {
            let n = e,
              i = t.dragging;
            if (((t.dragging = null), !n.dataTransfer)) return;
            let o = t.posAtCoords(cn(n));
            if (!o) return;
            let l = t.state.doc.resolve(o.pos),
              u = i && i.slice;
            u
              ? t.someProp("transformPasted", (le) => {
                  u = le(u, t);
                })
              : (u = In(
                  t,
                  Un(n.dataTransfer),
                  Yt ? null : n.dataTransfer.getData("text/html"),
                  !1,
                  l,
                ));
            let m = !!(i && !n[Hn]);
            if (
              t.someProp("handleDrop", (le) => le(t, n, u || se.Ji.empty, m))
            ) {
              n.preventDefault();
              return;
            }
            if (!u) return;
            n.preventDefault();
            let M = u ? (0, Te.Um)(t.state.doc, l.pos, u) : l.pos;
            M == null && (M = l.pos);
            let D = t.state.tr;
            if (m) {
              let { node: le } = i;
              le ? le.replace(D) : D.deleteSelection();
            }
            let R = D.mapping.map(M),
              ne =
                u.openStart == 0 && u.openEnd == 0 && u.content.childCount == 1,
              ue = D.doc;
            if (
              (ne
                ? D.replaceRangeWith(R, R, u.content.firstChild)
                : D.replaceRange(R, R, u),
              D.doc.eq(ue))
            )
              return;
            let Se = D.doc.resolve(R);
            if (
              ne &&
              v.nh.isSelectable(u.content.firstChild) &&
              Se.nodeAfter &&
              Se.nodeAfter.sameMarkup(u.content.firstChild)
            )
              D.setSelection(new v.nh(Se));
            else {
              let le = D.mapping.map(M);
              D.mapping.maps[D.mapping.maps.length - 1].forEach(
                (Ke, Ie, ot, Ct) => (le = Ct),
              ),
                D.setSelection(E(t, Se, D.doc.resolve(le)));
            }
            t.focus(), t.dispatch(D.setMeta("uiEvent", "drop"));
          }),
          (xt.focus = (t) => {
            (t.input.lastFocus = Date.now()),
              t.focused ||
                (t.domObserver.stop(),
                t.dom.classList.add("ProseMirror-focused"),
                t.domObserver.start(),
                (t.focused = !0),
                setTimeout(() => {
                  t.docView &&
                    t.hasFocus() &&
                    !t.domObserver.currentSelection.eq(t.domSelectionRange()) &&
                    Dt(t);
                }, 20));
          }),
          (xt.blur = (t, e) => {
            let n = e;
            t.focused &&
              (t.domObserver.stop(),
              t.dom.classList.remove("ProseMirror-focused"),
              t.domObserver.start(),
              n.relatedTarget &&
                t.dom.contains(n.relatedTarget) &&
                t.domObserver.currentSelection.clear(),
              (t.focused = !1));
          }),
          (xt.beforeinput = (t, e) => {
            if (C && Y && e.inputType == "deleteContentBackward") {
              t.domObserver.flushSoon();
              let { domChangeCount: i } = t.input;
              setTimeout(() => {
                if (
                  t.input.domChangeCount != i ||
                  (t.dom.blur(),
                  t.focus(),
                  t.someProp("handleKeyDown", (l) => l(t, ce(8, "Backspace"))))
                )
                  return;
                let { $cursor: o } = t.state.selection;
                o &&
                  o.pos > 0 &&
                  t.dispatch(
                    t.state.tr.delete(o.pos - 1, o.pos).scrollIntoView(),
                  );
              }, 50);
            }
          });
        for (let t in St) xt[t] = St[t];
        function en(t, e) {
          if (t == e) return !0;
          for (let n in t) if (t[n] !== e[n]) return !1;
          for (let n in e) if (!(n in t)) return !1;
          return !0;
        }
        class hn {
          constructor(e, n) {
            (this.toDOM = e),
              (this.spec = n || Jt),
              (this.side = this.spec.side || 0);
          }
          map(e, n, i, o) {
            let { pos: l, deleted: u } = e.mapResult(
              n.from + o,
              this.side < 0 ? -1 : 1,
            );
            return u ? null : new Mt(l - i, l - i, this);
          }
          valid() {
            return !0;
          }
          eq(e) {
            return (
              this == e ||
              (e instanceof hn &&
                ((this.spec.key && this.spec.key == e.spec.key) ||
                  (this.toDOM == e.toDOM && en(this.spec, e.spec))))
            );
          }
          destroy(e) {
            this.spec.destroy && this.spec.destroy(e);
          }
        }
        class Pt {
          constructor(e, n) {
            (this.attrs = e), (this.spec = n || Jt);
          }
          map(e, n, i, o) {
            let l = e.map(n.from + o, this.spec.inclusiveStart ? -1 : 1) - i,
              u = e.map(n.to + o, this.spec.inclusiveEnd ? 1 : -1) - i;
            return l >= u ? null : new Mt(l, u, this);
          }
          valid(e, n) {
            return n.from < n.to;
          }
          eq(e) {
            return (
              this == e ||
              (e instanceof Pt &&
                en(this.attrs, e.attrs) &&
                en(this.spec, e.spec))
            );
          }
          static is(e) {
            return e.type instanceof Pt;
          }
          destroy() {}
        }
        class On {
          constructor(e, n) {
            (this.attrs = e), (this.spec = n || Jt);
          }
          map(e, n, i, o) {
            let l = e.mapResult(n.from + o, 1);
            if (l.deleted) return null;
            let u = e.mapResult(n.to + o, -1);
            return u.deleted || u.pos <= l.pos
              ? null
              : new Mt(l.pos - i, u.pos - i, this);
          }
          valid(e, n) {
            let { index: i, offset: o } = e.content.findIndex(n.from),
              l;
            return (
              o == n.from && !(l = e.child(i)).isText && o + l.nodeSize == n.to
            );
          }
          eq(e) {
            return (
              this == e ||
              (e instanceof On &&
                en(this.attrs, e.attrs) &&
                en(this.spec, e.spec))
            );
          }
          destroy() {}
        }
        class Mt {
          constructor(e, n, i) {
            (this.from = e), (this.to = n), (this.type = i);
          }
          copy(e, n) {
            return new Mt(e, n, this.type);
          }
          eq(e, n = 0) {
            return (
              this.type.eq(e.type) &&
              this.from + n == e.from &&
              this.to + n == e.to
            );
          }
          map(e, n, i) {
            return this.type.map(e, this, n, i);
          }
          static widget(e, n, i) {
            return new Mt(e, e, new hn(n, i));
          }
          static inline(e, n, i, o) {
            return new Mt(e, n, new Pt(i, o));
          }
          static node(e, n, i, o) {
            return new Mt(e, n, new On(i, o));
          }
          get spec() {
            return this.type.spec;
          }
          get inline() {
            return this.type instanceof Pt;
          }
          get widget() {
            return this.type instanceof hn;
          }
        }
        const jt = [],
          Jt = {};
        class pt {
          constructor(e, n) {
            (this.local = e.length ? e : jt),
              (this.children = n.length ? n : jt);
          }
          static create(e, n) {
            return n.length ? un(n, e, 0, Jt) : yt;
          }
          find(e, n, i) {
            let o = [];
            return this.findInner(e ?? 0, n ?? 1e9, o, 0, i), o;
          }
          findInner(e, n, i, o, l) {
            for (let u = 0; u < this.local.length; u++) {
              let m = this.local[u];
              m.from <= n &&
                m.to >= e &&
                (!l || l(m.spec)) &&
                i.push(m.copy(m.from + o, m.to + o));
            }
            for (let u = 0; u < this.children.length; u += 3)
              if (this.children[u] < n && this.children[u + 1] > e) {
                let m = this.children[u] + 1;
                this.children[u + 2].findInner(e - m, n - m, i, o + m, l);
              }
          }
          map(e, n, i) {
            return this == yt || e.maps.length == 0
              ? this
              : this.mapInner(e, n, 0, 0, i || Jt);
          }
          mapInner(e, n, i, o, l) {
            let u;
            for (let m = 0; m < this.local.length; m++) {
              let M = this.local[m].map(e, i, o);
              M && M.type.valid(n, M)
                ? (u || (u = [])).push(M)
                : l.onRemove && l.onRemove(this.local[m].spec);
            }
            return this.children.length
              ? zr(this.children, u || [], e, n, i, o, l)
              : u
                ? new pt(u.sort(Kt), jt)
                : yt;
          }
          add(e, n) {
            return n.length
              ? this == yt
                ? pt.create(e, n)
                : this.addInner(e, n, 0)
              : this;
          }
          addInner(e, n, i) {
            let o,
              l = 0;
            e.forEach((m, M) => {
              let D = M + i,
                R;
              if ((R = qn(n, m, D))) {
                for (
                  o || (o = this.children.slice());
                  l < o.length && o[l] < M;
                )
                  l += 3;
                o[l] == M
                  ? (o[l + 2] = o[l + 2].addInner(m, R, D + 1))
                  : o.splice(l, 0, M, M + m.nodeSize, un(R, m, D + 1, Jt)),
                  (l += 3);
              }
            });
            let u = jn(l ? Qn(n) : n, -i);
            for (let m = 0; m < u.length; m++)
              u[m].type.valid(e, u[m]) || u.splice(m--, 1);
            return new pt(
              u.length ? this.local.concat(u).sort(Kt) : this.local,
              o || this.children,
            );
          }
          remove(e) {
            return e.length == 0 || this == yt ? this : this.removeInner(e, 0);
          }
          removeInner(e, n) {
            let i = this.children,
              o = this.local;
            for (let l = 0; l < i.length; l += 3) {
              let u,
                m = i[l] + n,
                M = i[l + 1] + n;
              for (let R = 0, ne; R < e.length; R++)
                (ne = e[R]) &&
                  ne.from > m &&
                  ne.to < M &&
                  ((e[R] = null), (u || (u = [])).push(ne));
              if (!u) continue;
              i == this.children && (i = this.children.slice());
              let D = i[l + 2].removeInner(u, m + 1);
              D != yt ? (i[l + 2] = D) : (i.splice(l, 3), (l -= 3));
            }
            if (o.length) {
              for (let l = 0, u; l < e.length; l++)
                if ((u = e[l]))
                  for (let m = 0; m < o.length; m++)
                    o[m].eq(u, n) &&
                      (o == this.local && (o = this.local.slice()),
                      o.splice(m--, 1));
            }
            return i == this.children && o == this.local
              ? this
              : o.length || i.length
                ? new pt(o, i)
                : yt;
          }
          forChild(e, n) {
            if (this == yt) return this;
            if (n.isLeaf) return pt.empty;
            let i, o;
            for (let m = 0; m < this.children.length; m += 3)
              if (this.children[m] >= e) {
                this.children[m] == e && (i = this.children[m + 2]);
                break;
              }
            let l = e + 1,
              u = l + n.content.size;
            for (let m = 0; m < this.local.length; m++) {
              let M = this.local[m];
              if (M.from < u && M.to > l && M.type instanceof Pt) {
                let D = Math.max(l, M.from) - l,
                  R = Math.min(u, M.to) - l;
                D < R && (o || (o = [])).push(M.copy(D, R));
              }
            }
            if (o) {
              let m = new pt(o.sort(Kt), jt);
              return i ? new Ft([m, i]) : m;
            }
            return i || yt;
          }
          eq(e) {
            if (this == e) return !0;
            if (
              !(e instanceof pt) ||
              this.local.length != e.local.length ||
              this.children.length != e.children.length
            )
              return !1;
            for (let n = 0; n < this.local.length; n++)
              if (!this.local[n].eq(e.local[n])) return !1;
            for (let n = 0; n < this.children.length; n += 3)
              if (
                this.children[n] != e.children[n] ||
                this.children[n + 1] != e.children[n + 1] ||
                !this.children[n + 2].eq(e.children[n + 2])
              )
                return !1;
            return !0;
          }
          locals(e) {
            return Nn(this.localsInner(e));
          }
          localsInner(e) {
            if (this == yt) return jt;
            if (e.inlineContent || !this.local.some(Pt.is)) return this.local;
            let n = [];
            for (let i = 0; i < this.local.length; i++)
              this.local[i].type instanceof Pt || n.push(this.local[i]);
            return n;
          }
        }
        (pt.empty = new pt([], [])), (pt.removeOverlap = Nn);
        const yt = pt.empty;
        class Ft {
          constructor(e) {
            this.members = e;
          }
          map(e, n) {
            const i = this.members.map((o) => o.map(e, n, Jt));
            return Ft.from(i);
          }
          forChild(e, n) {
            if (n.isLeaf) return pt.empty;
            let i = [];
            for (let o = 0; o < this.members.length; o++) {
              let l = this.members[o].forChild(e, n);
              l != yt &&
                (l instanceof Ft ? (i = i.concat(l.members)) : i.push(l));
            }
            return Ft.from(i);
          }
          eq(e) {
            if (!(e instanceof Ft) || e.members.length != this.members.length)
              return !1;
            for (let n = 0; n < this.members.length; n++)
              if (!this.members[n].eq(e.members[n])) return !1;
            return !0;
          }
          locals(e) {
            let n,
              i = !0;
            for (let o = 0; o < this.members.length; o++) {
              let l = this.members[o].localsInner(e);
              if (l.length)
                if (!n) n = l;
                else {
                  i && ((n = n.slice()), (i = !1));
                  for (let u = 0; u < l.length; u++) n.push(l[u]);
                }
            }
            return n ? Nn(i ? n : n.sort(Kt)) : jt;
          }
          static from(e) {
            switch (e.length) {
              case 0:
                return yt;
              case 1:
                return e[0];
              default:
                return new Ft(
                  e.every((n) => n instanceof pt)
                    ? e
                    : e.reduce(
                        (n, i) => n.concat(i instanceof pt ? i : i.members),
                        [],
                      ),
                );
            }
          }
        }
        function zr(t, e, n, i, o, l, u) {
          let m = t.slice();
          for (let D = 0, R = l; D < n.maps.length; D++) {
            let ne = 0;
            n.maps[D].forEach((ue, Se, le, Ke) => {
              let Ie = Ke - le - (Se - ue);
              for (let ot = 0; ot < m.length; ot += 3) {
                let Ct = m[ot + 1];
                if (Ct < 0 || ue > Ct + R - ne) continue;
                let tn = m[ot] + R - ne;
                Se >= tn
                  ? (m[ot + 1] = ue <= tn ? -2 : -1)
                  : ue >= R && Ie && ((m[ot] += Ie), (m[ot + 1] += Ie));
              }
              ne += Ie;
            }),
              (R = n.maps[D].map(R, -1));
          }
          let M = !1;
          for (let D = 0; D < m.length; D += 3)
            if (m[D + 1] < 0) {
              if (m[D + 1] == -2) {
                (M = !0), (m[D + 1] = -1);
                continue;
              }
              let R = n.map(t[D] + l),
                ne = R - o;
              if (ne < 0 || ne >= i.content.size) {
                M = !0;
                continue;
              }
              let ue = n.map(t[D + 1] + l, -1),
                Se = ue - o,
                { index: le, offset: Ke } = i.content.findIndex(ne),
                Ie = i.maybeChild(le);
              if (Ie && Ke == ne && Ke + Ie.nodeSize == Se) {
                let ot = m[D + 2].mapInner(n, Ie, R + 1, t[D] + l + 1, u);
                ot != yt
                  ? ((m[D] = ne), (m[D + 1] = Se), (m[D + 2] = ot))
                  : ((m[D + 1] = -2), (M = !0));
              } else M = !0;
            }
          if (M) {
            let D = Br(m, t, e, n, o, l, u),
              R = un(D, i, 0, u);
            e = R.local;
            for (let ne = 0; ne < m.length; ne += 3)
              m[ne + 1] < 0 && (m.splice(ne, 3), (ne -= 3));
            for (let ne = 0, ue = 0; ne < R.children.length; ne += 3) {
              let Se = R.children[ne];
              for (; ue < m.length && m[ue] < Se; ) ue += 3;
              m.splice(
                ue,
                0,
                R.children[ne],
                R.children[ne + 1],
                R.children[ne + 2],
              );
            }
          }
          return new pt(e.sort(Kt), m);
        }
        function jn(t, e) {
          if (!e || !t.length) return t;
          let n = [];
          for (let i = 0; i < t.length; i++) {
            let o = t[i];
            n.push(new Mt(o.from + e, o.to + e, o.type));
          }
          return n;
        }
        function Br(t, e, n, i, o, l, u) {
          function m(M, D) {
            for (let R = 0; R < M.local.length; R++) {
              let ne = M.local[R].map(i, o, D);
              ne ? n.push(ne) : u.onRemove && u.onRemove(M.local[R].spec);
            }
            for (let R = 0; R < M.children.length; R += 3)
              m(M.children[R + 2], M.children[R] + D + 1);
          }
          for (let M = 0; M < t.length; M += 3)
            t[M + 1] == -1 && m(t[M + 2], e[M] + l + 1);
          return n;
        }
        function qn(t, e, n) {
          if (e.isLeaf) return null;
          let i = n + e.nodeSize,
            o = null;
          for (let l = 0, u; l < t.length; l++)
            (u = t[l]) &&
              u.from > n &&
              u.to < i &&
              ((o || (o = [])).push(u), (t[l] = null));
          return o;
        }
        function Qn(t) {
          let e = [];
          for (let n = 0; n < t.length; n++) t[n] != null && e.push(t[n]);
          return e;
        }
        function un(t, e, n, i) {
          let o = [],
            l = !1;
          e.forEach((m, M) => {
            let D = qn(t, m, M + n);
            if (D) {
              l = !0;
              let R = un(D, m, n + M + 1, i);
              R != yt && o.push(M, M + m.nodeSize, R);
            }
          });
          let u = jn(l ? Qn(t) : t, -n).sort(Kt);
          for (let m = 0; m < u.length; m++)
            u[m].type.valid(e, u[m]) ||
              (i.onRemove && i.onRemove(u[m].spec), u.splice(m--, 1));
          return u.length || o.length ? new pt(u, o) : yt;
        }
        function Kt(t, e) {
          return t.from - e.from || t.to - e.to;
        }
        function Nn(t) {
          let e = t;
          for (let n = 0; n < e.length - 1; n++) {
            let i = e[n];
            if (i.from != i.to)
              for (let o = n + 1; o < e.length; o++) {
                let l = e[o];
                if (l.from == i.from) {
                  l.to != i.to &&
                    (e == t && (e = t.slice()),
                    (e[o] = l.copy(l.from, i.to)),
                    Xn(e, o + 1, l.copy(i.to, l.to)));
                  continue;
                } else {
                  l.from < i.to &&
                    (e == t && (e = t.slice()),
                    (e[n] = i.copy(i.from, l.from)),
                    Xn(e, o, i.copy(l.from, i.to)));
                  break;
                }
              }
          }
          return e;
        }
        function Xn(t, e, n) {
          for (; e < t.length && Kt(n, t[e]) > 0; ) e++;
          t.splice(e, 0, n);
        }
        function Dn(t) {
          let e = [];
          return (
            t.someProp("decorations", (n) => {
              let i = n(t.state);
              i && i != yt && e.push(i);
            }),
            t.cursorWrapper &&
              e.push(pt.create(t.state.doc, [t.cursorWrapper.deco])),
            Ft.from(e)
          );
        }
        const Lr = {
            childList: !0,
            characterData: !0,
            characterDataOldValue: !0,
            attributes: !0,
            attributeOldValue: !0,
            subtree: !0,
          },
          Vr = Re && Ve <= 11;
        class Jr {
          constructor() {
            (this.anchorNode = null),
              (this.anchorOffset = 0),
              (this.focusNode = null),
              (this.focusOffset = 0);
          }
          set(e) {
            (this.anchorNode = e.anchorNode),
              (this.anchorOffset = e.anchorOffset),
              (this.focusNode = e.focusNode),
              (this.focusOffset = e.focusOffset);
          }
          clear() {
            this.anchorNode = this.focusNode = null;
          }
          eq(e) {
            return (
              e.anchorNode == this.anchorNode &&
              e.anchorOffset == this.anchorOffset &&
              e.focusNode == this.focusNode &&
              e.focusOffset == this.focusOffset
            );
          }
        }
        class Kr {
          constructor(e, n) {
            (this.view = e),
              (this.handleDOMChange = n),
              (this.queue = []),
              (this.flushingSoon = -1),
              (this.observer = null),
              (this.currentSelection = new Jr()),
              (this.onCharData = null),
              (this.suppressingSelectionUpdates = !1),
              (this.observer =
                window.MutationObserver &&
                new window.MutationObserver((i) => {
                  for (let o = 0; o < i.length; o++) this.queue.push(i[o]);
                  Re &&
                  Ve <= 11 &&
                  i.some(
                    (o) =>
                      (o.type == "childList" && o.removedNodes.length) ||
                      (o.type == "characterData" &&
                        o.oldValue.length > o.target.nodeValue.length),
                  )
                    ? this.flushSoon()
                    : this.flush();
                })),
              Vr &&
                (this.onCharData = (i) => {
                  this.queue.push({
                    target: i.target,
                    type: "characterData",
                    oldValue: i.prevValue,
                  }),
                    this.flushSoon();
                }),
              (this.onSelectionChange = this.onSelectionChange.bind(this));
          }
          flushSoon() {
            this.flushingSoon < 0 &&
              (this.flushingSoon = window.setTimeout(() => {
                (this.flushingSoon = -1), this.flush();
              }, 20));
          }
          forceFlush() {
            this.flushingSoon > -1 &&
              (window.clearTimeout(this.flushingSoon),
              (this.flushingSoon = -1),
              this.flush());
          }
          start() {
            this.observer &&
              (this.observer.takeRecords(),
              this.observer.observe(this.view.dom, Lr)),
              this.onCharData &&
                this.view.dom.addEventListener(
                  "DOMCharacterDataModified",
                  this.onCharData,
                ),
              this.connectSelection();
          }
          stop() {
            if (this.observer) {
              let e = this.observer.takeRecords();
              if (e.length) {
                for (let n = 0; n < e.length; n++) this.queue.push(e[n]);
                window.setTimeout(() => this.flush(), 20);
              }
              this.observer.disconnect();
            }
            this.onCharData &&
              this.view.dom.removeEventListener(
                "DOMCharacterDataModified",
                this.onCharData,
              ),
              this.disconnectSelection();
          }
          connectSelection() {
            this.view.dom.ownerDocument.addEventListener(
              "selectionchange",
              this.onSelectionChange,
            );
          }
          disconnectSelection() {
            this.view.dom.ownerDocument.removeEventListener(
              "selectionchange",
              this.onSelectionChange,
            );
          }
          suppressSelectionUpdates() {
            (this.suppressingSelectionUpdates = !0),
              setTimeout(() => (this.suppressingSelectionUpdates = !1), 50);
          }
          onSelectionChange() {
            if (F(this.view)) {
              if (this.suppressingSelectionUpdates) return Dt(this.view);
              if (Re && Ve <= 11 && !this.view.state.selection.empty) {
                let e = this.view.domSelectionRange();
                if (
                  e.focusNode &&
                  Me(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
                )
                  return this.flushSoon();
              }
              this.flush();
            }
          }
          setCurSelection() {
            this.currentSelection.set(this.view.domSelectionRange());
          }
          ignoreSelectionChange(e) {
            if (!e.focusNode) return !0;
            let n = new Set(),
              i;
            for (let l = e.focusNode; l; l = ge(l)) n.add(l);
            for (let l = e.anchorNode; l; l = ge(l))
              if (n.has(l)) {
                i = l;
                break;
              }
            let o = i && this.view.docView.nearestDesc(i);
            if (
              o &&
              o.ignoreMutation({
                type: "selection",
                target: i.nodeType == 3 ? i.parentNode : i,
              })
            )
              return this.setCurSelection(), !0;
          }
          pendingRecords() {
            if (this.observer)
              for (let e of this.observer.takeRecords()) this.queue.push(e);
            return this.queue;
          }
          flush() {
            let { view: e } = this;
            if (!e.docView || this.flushingSoon > -1) return;
            let n = this.pendingRecords();
            n.length && (this.queue = []);
            let i = e.domSelectionRange(),
              o =
                !this.suppressingSelectionUpdates &&
                !this.currentSelection.eq(i) &&
                F(e) &&
                !this.ignoreSelectionChange(i),
              l = -1,
              u = -1,
              m = !1,
              M = [];
            if (e.editable)
              for (let R = 0; R < n.length; R++) {
                let ne = this.registerMutation(n[R], M);
                ne &&
                  ((l = l < 0 ? ne.from : Math.min(ne.from, l)),
                  (u = u < 0 ? ne.to : Math.max(ne.to, u)),
                  ne.typeOver && (m = !0));
              }
            if (Ae && M.length > 1) {
              let R = M.filter((ne) => ne.nodeName == "BR");
              if (R.length == 2) {
                let ne = R[0],
                  ue = R[1];
                ne.parentNode && ne.parentNode.parentNode == ue.parentNode
                  ? ue.remove()
                  : ne.remove();
              }
            }
            let D = null;
            l < 0 &&
            o &&
            e.input.lastFocus > Date.now() - 200 &&
            Math.max(e.input.lastTouch, e.input.lastClick.time) <
              Date.now() - 300 &&
            Q(i) &&
            (D = Qt(e)) &&
            D.eq(v.LN.near(e.state.doc.resolve(0), 1))
              ? ((e.input.lastFocus = 0),
                Dt(e),
                this.currentSelection.set(i),
                e.scrollToSelection())
              : (l > -1 || o) &&
                (l > -1 && (e.docView.markDirty(l, u), Wr(e)),
                this.handleDOMChange(l, u, m, M),
                e.docView && e.docView.dirty
                  ? e.updateState(e.state)
                  : this.currentSelection.eq(i) || Dt(e),
                this.currentSelection.set(i));
          }
          registerMutation(e, n) {
            if (n.indexOf(e.target) > -1) return null;
            let i = this.view.docView.nearestDesc(e.target);
            if (
              (e.type == "attributes" &&
                (i == this.view.docView ||
                  e.attributeName == "contenteditable" ||
                  (e.attributeName == "style" &&
                    !e.oldValue &&
                    !e.target.getAttribute("style")))) ||
              !i ||
              i.ignoreMutation(e)
            )
              return null;
            if (e.type == "childList") {
              for (let R = 0; R < e.addedNodes.length; R++)
                n.push(e.addedNodes[R]);
              if (
                i.contentDOM &&
                i.contentDOM != i.dom &&
                !i.contentDOM.contains(e.target)
              )
                return { from: i.posBefore, to: i.posAfter };
              let o = e.previousSibling,
                l = e.nextSibling;
              if (Re && Ve <= 11 && e.addedNodes.length)
                for (let R = 0; R < e.addedNodes.length; R++) {
                  let { previousSibling: ne, nextSibling: ue } =
                    e.addedNodes[R];
                  (!ne || Array.prototype.indexOf.call(e.addedNodes, ne) < 0) &&
                    (o = ne),
                    (!ue ||
                      Array.prototype.indexOf.call(e.addedNodes, ue) < 0) &&
                      (l = ue);
                }
              let u = o && o.parentNode == e.target ? ve(o) + 1 : 0,
                m = i.localPosFromDOM(e.target, u, -1),
                M =
                  l && l.parentNode == e.target
                    ? ve(l)
                    : e.target.childNodes.length,
                D = i.localPosFromDOM(e.target, M, 1);
              return { from: m, to: D };
            } else
              return e.type == "attributes"
                ? { from: i.posAtStart - i.border, to: i.posAtEnd + i.border }
                : {
                    from: i.posAtStart,
                    to: i.posAtEnd,
                    typeOver: e.target.nodeValue == e.oldValue,
                  };
          }
        }
        let Gn = new WeakMap(),
          Yn = !1;
        function Wr(t) {
          if (
            !Gn.has(t) &&
            (Gn.set(t, null),
            ["normal", "nowrap", "pre-line"].indexOf(
              getComputedStyle(t.dom).whiteSpace,
            ) !== -1)
          ) {
            if (((t.requiresGeckoHackNode = Ae), Yn)) return;
            console.warn(
              "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
            ),
              (Yn = !0);
          }
        }
        function Zn(t, e) {
          let n = e.startContainer,
            i = e.startOffset,
            o = e.endContainer,
            l = e.endOffset,
            u = t.domAtPos(t.state.selection.anchor);
          return (
            Me(u.node, u.offset, o, l) && ([n, i, o, l] = [o, l, n, i]),
            { anchorNode: n, anchorOffset: i, focusNode: o, focusOffset: l }
          );
        }
        function _r(t, e) {
          if (e.getComposedRanges) {
            let o = e.getComposedRanges(t.root)[0];
            if (o) return Zn(t, o);
          }
          let n;
          function i(o) {
            o.preventDefault(),
              o.stopImmediatePropagation(),
              (n = o.getTargetRanges()[0]);
          }
          return (
            t.dom.addEventListener("beforeinput", i, !0),
            document.execCommand("indent"),
            t.dom.removeEventListener("beforeinput", i, !0),
            n ? Zn(t, n) : null
          );
        }
        function Ur(t, e, n) {
          let {
              node: i,
              fromOffset: o,
              toOffset: l,
              from: u,
              to: m,
            } = t.docView.parseRange(e, n),
            M = t.domSelectionRange(),
            D,
            R = M.anchorNode;
          if (
            (R &&
              t.dom.contains(R.nodeType == 1 ? R : R.parentNode) &&
              ((D = [{ node: R, offset: M.anchorOffset }]),
              Q(M) || D.push({ node: M.focusNode, offset: M.focusOffset })),
            C && t.input.lastKeyCode === 8)
          )
            for (let Ie = l; Ie > o; Ie--) {
              let ot = i.childNodes[Ie - 1],
                Ct = ot.pmViewDesc;
              if (ot.nodeName == "BR" && !Ct) {
                l = Ie;
                break;
              }
              if (!Ct || Ct.size) break;
            }
          let ne = t.state.doc,
            ue = t.someProp("domParser") || se.S4.fromSchema(t.state.schema),
            Se = ne.resolve(u),
            le = null,
            Ke = ue.parse(i, {
              topNode: Se.parent,
              topMatch: Se.parent.contentMatchAt(Se.index()),
              topOpen: !0,
              from: o,
              to: l,
              preserveWhitespace:
                Se.parent.type.whitespace == "pre" ? "full" : !0,
              findPositions: D,
              ruleFromNode: $r,
              context: Se,
            });
          if (D && D[0].pos != null) {
            let Ie = D[0].pos,
              ot = D[1] && D[1].pos;
            ot == null && (ot = Ie), (le = { anchor: Ie + u, head: ot + u });
          }
          return { doc: Ke, sel: le, from: u, to: m };
        }
        function $r(t) {
          let e = t.pmViewDesc;
          if (e) return e.parseRule();
          if (t.nodeName == "BR" && t.parentNode) {
            if (T && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
              let n = document.createElement("div");
              return n.appendChild(document.createElement("li")), { skip: n };
            } else if (
              t.parentNode.lastChild == t ||
              (T && /^(tr|table)$/i.test(t.parentNode.nodeName))
            )
              return { ignore: !0 };
          } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
            return { ignore: !0 };
          return null;
        }
        const Hr =
          /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
        function jr(t, e, n, i, o) {
          let l =
            t.input.compositionPendingChanges ||
            (t.composing ? t.input.compositionID : 0);
          if (((t.input.compositionPendingChanges = 0), e < 0)) {
            let tt =
                t.input.lastSelectionTime > Date.now() - 50
                  ? t.input.lastSelectionOrigin
                  : null,
              Bt = Qt(t, tt);
            if (Bt && !t.state.selection.eq(Bt)) {
              if (
                C &&
                Y &&
                t.input.lastKeyCode === 13 &&
                Date.now() - 100 < t.input.lastKeyCodeTime &&
                t.someProp("handleKeyDown", (ei) => ei(t, ce(13, "Enter")))
              )
                return;
              let pn = t.state.tr.setSelection(Bt);
              tt == "pointer"
                ? pn.setMeta("pointer", !0)
                : tt == "key" && pn.scrollIntoView(),
                l && pn.setMeta("composition", l),
                t.dispatch(pn);
            }
            return;
          }
          let u = t.state.doc.resolve(e),
            m = u.sharedDepth(n);
          (e = u.before(m + 1)), (n = t.state.doc.resolve(n).after(m + 1));
          let M = t.state.selection,
            D = Ur(t, e, n),
            R = t.state.doc,
            ne = R.slice(D.from, D.to),
            ue,
            Se;
          t.input.lastKeyCode === 8 &&
          Date.now() - 100 < t.input.lastKeyCodeTime
            ? ((ue = t.state.selection.to), (Se = "end"))
            : ((ue = t.state.selection.from), (Se = "start")),
            (t.input.lastKeyCode = null);
          let le = Xr(ne.content, D.doc.content, D.from, ue, Se);
          if (
            ((A && t.input.lastIOSEnter > Date.now() - 225) || Y) &&
            o.some((tt) => tt.nodeType == 1 && !Hr.test(tt.nodeName)) &&
            (!le || le.endA >= le.endB) &&
            t.someProp("handleKeyDown", (tt) => tt(t, ce(13, "Enter")))
          ) {
            t.input.lastIOSEnter = 0;
            return;
          }
          if (!le)
            if (
              i &&
              M instanceof v.U3 &&
              !M.empty &&
              M.$head.sameParent(M.$anchor) &&
              !t.composing &&
              !(D.sel && D.sel.anchor != D.sel.head)
            )
              le = { start: M.from, endA: M.to, endB: M.to };
            else {
              if (D.sel) {
                let tt = er(t, t.state.doc, D.sel);
                if (tt && !tt.eq(t.state.selection)) {
                  let Bt = t.state.tr.setSelection(tt);
                  l && Bt.setMeta("composition", l), t.dispatch(Bt);
                }
              }
              return;
            }
          t.input.domChangeCount++,
            t.state.selection.from < t.state.selection.to &&
              le.start == le.endB &&
              t.state.selection instanceof v.U3 &&
              (le.start > t.state.selection.from &&
              le.start <= t.state.selection.from + 2 &&
              t.state.selection.from >= D.from
                ? (le.start = t.state.selection.from)
                : le.endA < t.state.selection.to &&
                  le.endA >= t.state.selection.to - 2 &&
                  t.state.selection.to <= D.to &&
                  ((le.endB += t.state.selection.to - le.endA),
                  (le.endA = t.state.selection.to))),
            Re &&
              Ve <= 11 &&
              le.endB == le.start + 1 &&
              le.endA == le.start &&
              le.start > D.from &&
              D.doc.textBetween(le.start - D.from - 1, le.start - D.from + 1) ==
                " \xA0" &&
              (le.start--, le.endA--, le.endB--);
          let Ke = D.doc.resolveNoCache(le.start - D.from),
            Ie = D.doc.resolveNoCache(le.endB - D.from),
            ot = R.resolve(le.start),
            Ct =
              Ke.sameParent(Ie) &&
              Ke.parent.inlineContent &&
              ot.end() >= le.endA,
            tn;
          if (
            ((A &&
              t.input.lastIOSEnter > Date.now() - 225 &&
              (!Ct ||
                o.some((tt) => tt.nodeName == "DIV" || tt.nodeName == "P"))) ||
              (!Ct &&
                Ke.pos < D.doc.content.size &&
                !Ke.sameParent(Ie) &&
                (tn = v.LN.findFrom(D.doc.resolve(Ke.pos + 1), 1, !0)) &&
                tn.head == Ie.pos)) &&
            t.someProp("handleKeyDown", (tt) => tt(t, ce(13, "Enter")))
          ) {
            t.input.lastIOSEnter = 0;
            return;
          }
          if (
            t.state.selection.anchor > le.start &&
            Qr(R, le.start, le.endA, Ke, Ie) &&
            t.someProp("handleKeyDown", (tt) => tt(t, ce(8, "Backspace")))
          ) {
            Y && C && t.domObserver.suppressSelectionUpdates();
            return;
          }
          C &&
            Y &&
            le.endB == le.start &&
            (t.input.lastAndroidDelete = Date.now()),
            Y &&
              !Ct &&
              Ke.start() != Ie.start() &&
              Ie.parentOffset == 0 &&
              Ke.depth == Ie.depth &&
              D.sel &&
              D.sel.anchor == D.sel.head &&
              D.sel.head == le.endA &&
              ((le.endB -= 2),
              (Ie = D.doc.resolveNoCache(le.endB - D.from)),
              setTimeout(() => {
                t.someProp("handleKeyDown", function (tt) {
                  return tt(t, ce(13, "Enter"));
                });
              }, 20));
          let zt = le.start,
            Wt = le.endA,
            wt,
            Tn,
            dn;
          if (Ct) {
            if (Ke.pos == Ie.pos)
              Re &&
                Ve <= 11 &&
                Ke.parentOffset == 0 &&
                (t.domObserver.suppressSelectionUpdates(),
                setTimeout(() => Dt(t), 20)),
                (wt = t.state.tr.delete(zt, Wt)),
                (Tn = R.resolve(le.start).marksAcross(R.resolve(le.endA)));
            else if (
              le.endA == le.endB &&
              (dn = qr(
                Ke.parent.content.cut(Ke.parentOffset, Ie.parentOffset),
                ot.parent.content.cut(ot.parentOffset, le.endA - ot.start()),
              ))
            )
              (wt = t.state.tr),
                dn.type == "add"
                  ? wt.addMark(zt, Wt, dn.mark)
                  : wt.removeMark(zt, Wt, dn.mark);
            else if (
              Ke.parent.child(Ke.index()).isText &&
              Ke.index() == Ie.index() - (Ie.textOffset ? 0 : 1)
            ) {
              let tt = Ke.parent.textBetween(Ke.parentOffset, Ie.parentOffset);
              if (t.someProp("handleTextInput", (Bt) => Bt(t, zt, Wt, tt)))
                return;
              wt = t.state.tr.insertText(tt, zt, Wt);
            }
          }
          if (
            (wt ||
              (wt = t.state.tr.replace(
                zt,
                Wt,
                D.doc.slice(le.start - D.from, le.endB - D.from),
              )),
            D.sel)
          ) {
            let tt = er(t, wt.doc, D.sel);
            tt &&
              !(
                (C &&
                  Y &&
                  t.composing &&
                  tt.empty &&
                  (le.start != le.endB ||
                    t.input.lastAndroidDelete < Date.now() - 100) &&
                  (tt.head == zt || tt.head == wt.mapping.map(Wt) - 1)) ||
                (Re && tt.empty && tt.head == zt)
              ) &&
              wt.setSelection(tt);
          }
          Tn && wt.ensureMarks(Tn),
            l && wt.setMeta("composition", l),
            t.dispatch(wt.scrollIntoView());
        }
        function er(t, e, n) {
          return Math.max(n.anchor, n.head) > e.content.size
            ? null
            : E(t, e.resolve(n.anchor), e.resolve(n.head));
        }
        function qr(t, e) {
          let n = t.firstChild.marks,
            i = e.firstChild.marks,
            o = n,
            l = i,
            u,
            m,
            M;
          for (let R = 0; R < i.length; R++) o = i[R].removeFromSet(o);
          for (let R = 0; R < n.length; R++) l = n[R].removeFromSet(l);
          if (o.length == 1 && l.length == 0)
            (m = o[0]), (u = "add"), (M = (R) => R.mark(m.addToSet(R.marks)));
          else if (o.length == 0 && l.length == 1)
            (m = l[0]),
              (u = "remove"),
              (M = (R) => R.mark(m.removeFromSet(R.marks)));
          else return null;
          let D = [];
          for (let R = 0; R < e.childCount; R++) D.push(M(e.child(R)));
          if (se.FK.from(D).eq(t)) return { mark: m, type: u };
        }
        function Qr(t, e, n, i, o) {
          if (n - e <= o.pos - i.pos || En(i, !0, !1) < o.pos) return !1;
          let l = t.resolve(e);
          if (!i.parent.isTextblock) {
            let m = l.nodeAfter;
            return m != null && n == e + m.nodeSize;
          }
          if (l.parentOffset < l.parent.content.size || !l.parent.isTextblock)
            return !1;
          let u = t.resolve(En(l, !0, !0));
          return !u.parent.isTextblock || u.pos > n || En(u, !0, !1) < n
            ? !1
            : i.parent.content.cut(i.parentOffset).eq(u.parent.content);
        }
        function En(t, e, n) {
          let i = t.depth,
            o = e ? t.end() : t.pos;
          for (; i > 0 && (e || t.indexAfter(i) == t.node(i).childCount); )
            i--, o++, (e = !1);
          if (n) {
            let l = t.node(i).maybeChild(t.indexAfter(i));
            for (; l && !l.isLeaf; ) (l = l.firstChild), o++;
          }
          return o;
        }
        function Xr(t, e, n, i, o) {
          let l = t.findDiffStart(e, n);
          if (l == null) return null;
          let { a: u, b: m } = t.findDiffEnd(e, n + t.size, n + e.size);
          if (o == "end") {
            let M = Math.max(0, l - Math.min(u, m));
            i -= u + M - l;
          }
          if (u < l && t.size < e.size) {
            let M = i <= l && i >= u ? l - i : 0;
            (l -= M),
              l &&
                l < e.size &&
                tr(e.textBetween(l - 1, l + 1)) &&
                (l += M ? 1 : -1),
              (m = l + (m - u)),
              (u = l);
          } else if (m < l) {
            let M = i <= l && i >= m ? l - i : 0;
            (l -= M),
              l &&
                l < t.size &&
                tr(t.textBetween(l - 1, l + 1)) &&
                (l += M ? 1 : -1),
              (u = l + (u - m)),
              (m = l);
          }
          return { start: l, endA: u, endB: m };
        }
        function tr(t) {
          if (t.length != 2) return !1;
          let e = t.charCodeAt(0),
            n = t.charCodeAt(1);
          return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
        }
        const ti = null,
          ni = null,
          ri = null;
        class Gr {
          constructor(e, n) {
            (this._root = null),
              (this.focused = !1),
              (this.trackWrites = null),
              (this.mounted = !1),
              (this.markCursor = null),
              (this.cursorWrapper = null),
              (this.lastSelectedViewDesc = void 0),
              (this.input = new yr()),
              (this.prevDirectPlugins = []),
              (this.pluginViews = []),
              (this.requiresGeckoHackNode = !1),
              (this.dragging = null),
              (this._props = n),
              (this.state = n.state),
              (this.directPlugins = n.plugins || []),
              this.directPlugins.forEach(or),
              (this.dispatch = this.dispatch.bind(this)),
              (this.dom = (e && e.mount) || document.createElement("div")),
              e &&
                (e.appendChild
                  ? e.appendChild(this.dom)
                  : typeof e == "function"
                    ? e(this.dom)
                    : e.mount && (this.mounted = !0)),
              (this.editable = ir(this)),
              rr(this),
              (this.nodeViews = sr(this)),
              (this.docView = b(
                this.state.doc,
                nr(this),
                Dn(this),
                this.dom,
                this,
              )),
              (this.domObserver = new Kr(this, (i, o, l, u) =>
                jr(this, i, o, l, u),
              )),
              this.domObserver.start(),
              br(this),
              this.updatePluginViews();
          }
          get composing() {
            return this.input.composing;
          }
          get props() {
            if (this._props.state != this.state) {
              let e = this._props;
              this._props = {};
              for (let n in e) this._props[n] = e[n];
              this._props.state = this.state;
            }
            return this._props;
          }
          update(e) {
            e.handleDOMEvents != this._props.handleDOMEvents && kn(this);
            let n = this._props;
            (this._props = e),
              e.plugins &&
                (e.plugins.forEach(or), (this.directPlugins = e.plugins)),
              this.updateStateInner(e.state, n);
          }
          setProps(e) {
            let n = {};
            for (let i in this._props) n[i] = this._props[i];
            n.state = this.state;
            for (let i in e) n[i] = e[i];
            this.update(n);
          }
          updateState(e) {
            this.updateStateInner(e, this._props);
          }
          updateStateInner(e, n) {
            var i;
            let o = this.state,
              l = !1,
              u = !1;
            e.storedMarks && this.composing && (_n(this), (u = !0)),
              (this.state = e);
            let m = o.plugins != e.plugins || this._props.plugins != n.plugins;
            if (
              m ||
              this._props.plugins != n.plugins ||
              this._props.nodeViews != n.nodeViews
            ) {
              let Se = sr(this);
              Zr(Se, this.nodeViews) && ((this.nodeViews = Se), (l = !0));
            }
            (m || n.handleDOMEvents != this._props.handleDOMEvents) && kn(this),
              (this.editable = ir(this)),
              rr(this);
            let M = Dn(this),
              D = nr(this),
              R =
                o.plugins != e.plugins && !o.doc.eq(e.doc)
                  ? "reset"
                  : e.scrollToSelection > o.scrollToSelection
                    ? "to selection"
                    : "preserve",
              ne = l || !this.docView.matchesNode(e.doc, D, M);
            (ne || !e.selection.eq(o.selection)) && (u = !0);
            let ue =
              R == "preserve" &&
              u &&
              this.dom.style.overflowAnchor == null &&
              qe(this);
            if (u) {
              this.domObserver.stop();
              let Se =
                ne &&
                (Re || C) &&
                !this.composing &&
                !o.selection.empty &&
                !e.selection.empty &&
                Yr(o.selection, e.selection);
              if (ne) {
                let le = C
                  ? (this.trackWrites = this.domSelectionRange().focusNode)
                  : null;
                this.composing && (this.input.compositionNode = Rr(this)),
                  (l || !this.docView.update(e.doc, D, M, this)) &&
                    (this.docView.updateOuterDeco(D),
                    this.docView.destroy(),
                    (this.docView = b(e.doc, D, M, this.dom, this))),
                  le && !this.trackWrites && (Se = !0);
              }
              Se ||
              !(
                this.input.mouseDown &&
                this.domObserver.currentSelection.eq(
                  this.domSelectionRange(),
                ) &&
                V(this)
              )
                ? Dt(this, Se)
                : (x(this, e.selection), this.domObserver.setCurSelection()),
                this.domObserver.start();
            }
            this.updatePluginViews(o),
              !((i = this.dragging) === null || i === void 0) &&
                i.node &&
                !o.doc.eq(e.doc) &&
                this.updateDraggedNode(this.dragging, o),
              R == "reset"
                ? (this.dom.scrollTop = 0)
                : R == "to selection"
                  ? this.scrollToSelection()
                  : ue && ft(ue);
          }
          scrollToSelection() {
            let e = this.domSelectionRange().focusNode;
            if (!this.someProp("handleScrollToSelection", (n) => n(this)))
              if (this.state.selection instanceof v.nh) {
                let n = this.docView.domAfterPos(this.state.selection.from);
                n.nodeType == 1 && nt(this, n.getBoundingClientRect(), e);
              } else
                nt(this, this.coordsAtPos(this.state.selection.head, 1), e);
          }
          destroyPluginViews() {
            let e;
            for (; (e = this.pluginViews.pop()); ) e.destroy && e.destroy();
          }
          updatePluginViews(e) {
            if (
              !e ||
              e.plugins != this.state.plugins ||
              this.directPlugins != this.prevDirectPlugins
            ) {
              (this.prevDirectPlugins = this.directPlugins),
                this.destroyPluginViews();
              for (let n = 0; n < this.directPlugins.length; n++) {
                let i = this.directPlugins[n];
                i.spec.view && this.pluginViews.push(i.spec.view(this));
              }
              for (let n = 0; n < this.state.plugins.length; n++) {
                let i = this.state.plugins[n];
                i.spec.view && this.pluginViews.push(i.spec.view(this));
              }
            } else
              for (let n = 0; n < this.pluginViews.length; n++) {
                let i = this.pluginViews[n];
                i.update && i.update(this, e);
              }
          }
          updateDraggedNode(e, n) {
            let i = e.node,
              o = -1;
            if (this.state.doc.nodeAt(i.from) == i.node) o = i.from;
            else {
              let l =
                i.from + (this.state.doc.content.size - n.doc.content.size);
              (l > 0 && this.state.doc.nodeAt(l)) == i.node && (o = l);
            }
            this.dragging = new $n(
              e.slice,
              e.move,
              o < 0 ? void 0 : v.nh.create(this.state.doc, o),
            );
          }
          someProp(e, n) {
            let i = this._props && this._props[e],
              o;
            if (i != null && (o = n ? n(i) : i)) return o;
            for (let u = 0; u < this.directPlugins.length; u++) {
              let m = this.directPlugins[u].props[e];
              if (m != null && (o = n ? n(m) : m)) return o;
            }
            let l = this.state.plugins;
            if (l)
              for (let u = 0; u < l.length; u++) {
                let m = l[u].props[e];
                if (m != null && (o = n ? n(m) : m)) return o;
              }
          }
          hasFocus() {
            if (Re) {
              let e = this.root.activeElement;
              if (e == this.dom) return !0;
              if (!e || !this.dom.contains(e)) return !1;
              for (; e && this.dom != e && this.dom.contains(e); ) {
                if (e.contentEditable == "false") return !1;
                e = e.parentElement;
              }
              return !0;
            }
            return this.root.activeElement == this.dom;
          }
          focus() {
            this.domObserver.stop(),
              this.editable && H(this.dom),
              Dt(this),
              this.domObserver.start();
          }
          get root() {
            let e = this._root;
            if (e == null) {
              for (let n = this.dom.parentNode; n; n = n.parentNode)
                if (n.nodeType == 9 || (n.nodeType == 11 && n.host))
                  return (
                    n.getSelection ||
                      (Object.getPrototypeOf(n).getSelection = () =>
                        n.ownerDocument.getSelection()),
                    (this._root = n)
                  );
            }
            return e || document;
          }
          updateRoot() {
            this._root = null;
          }
          posAtCoords(e) {
            return je(this, e);
          }
          coordsAtPos(e, n = 1) {
            return rt(this, e, n);
          }
          domAtPos(e, n = 0) {
            return this.docView.domFromPos(e, n);
          }
          nodeDOM(e) {
            let n = this.docView.descAt(e);
            return n ? n.nodeDOM : null;
          }
          posAtDOM(e, n, i = -1) {
            let o = this.docView.posFromDOM(e, n, i);
            if (o == null)
              throw new RangeError("DOM position not inside the editor");
            return o;
          }
          endOfTextblock(e, n) {
            return k(this, n || this.state, e);
          }
          pasteHTML(e, n) {
            return Zt(this, "", e, !1, n || new ClipboardEvent("paste"));
          }
          pasteText(e, n) {
            return Zt(this, e, null, !0, n || new ClipboardEvent("paste"));
          }
          destroy() {
            this.docView &&
              (xr(this),
              this.destroyPluginViews(),
              this.mounted
                ? (this.docView.update(this.state.doc, [], Dn(this), this),
                  (this.dom.textContent = ""))
                : this.dom.parentNode &&
                  this.dom.parentNode.removeChild(this.dom),
              this.docView.destroy(),
              (this.docView = null),
              ze());
          }
          get isDestroyed() {
            return this.docView == null;
          }
          dispatchEvent(e) {
            return kr(this, e);
          }
          dispatch(e) {
            let n = this._props.dispatchTransaction;
            n ? n.call(this, e) : this.updateState(this.state.apply(e));
          }
          domSelectionRange() {
            let e = this.domSelection();
            return (
              (T &&
                this.root.nodeType === 11 &&
                _(this.dom.ownerDocument) == this.dom &&
                _r(this, e)) ||
              e
            );
          }
          domSelection() {
            return this.root.getSelection();
          }
        }
        function nr(t) {
          let e = Object.create(null);
          return (
            (e.class = "ProseMirror"),
            (e.contenteditable = String(t.editable)),
            t.someProp("attributes", (n) => {
              if ((typeof n == "function" && (n = n(t.state)), n))
                for (let i in n)
                  i == "class"
                    ? (e.class += " " + n[i])
                    : i == "style"
                      ? (e.style = (e.style ? e.style + ";" : "") + n[i])
                      : !e[i] &&
                        i != "contenteditable" &&
                        i != "nodeName" &&
                        (e[i] = String(n[i]));
            }),
            e.translate || (e.translate = "no"),
            [Mt.node(0, t.state.doc.content.size, e)]
          );
        }
        function rr(t) {
          if (t.markCursor) {
            let e = document.createElement("img");
            (e.className = "ProseMirror-separator"),
              e.setAttribute("mark-placeholder", "true"),
              e.setAttribute("alt", ""),
              (t.cursorWrapper = {
                dom: e,
                deco: Mt.widget(t.state.selection.head, e, {
                  raw: !0,
                  marks: t.markCursor,
                }),
              });
          } else t.cursorWrapper = null;
        }
        function ir(t) {
          return !t.someProp("editable", (e) => e(t.state) === !1);
        }
        function Yr(t, e) {
          let n = Math.min(
            t.$anchor.sharedDepth(t.head),
            e.$anchor.sharedDepth(e.head),
          );
          return t.$anchor.start(n) != e.$anchor.start(n);
        }
        function sr(t) {
          let e = Object.create(null);
          function n(i) {
            for (let o in i)
              Object.prototype.hasOwnProperty.call(e, o) || (e[o] = i[o]);
          }
          return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
        }
        function Zr(t, e) {
          let n = 0,
            i = 0;
          for (let o in t) {
            if (t[o] != e[o]) return !0;
            n++;
          }
          for (let o in e) i++;
          return n != i;
        }
        function or(t) {
          if (
            t.spec.state ||
            t.spec.filterTransaction ||
            t.spec.appendTransaction
          )
            throw new RangeError(
              "Plugins passed directly to the view must not have a state component",
            );
        }
      },
      98724: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, { b6: () => ke, ZS: () => Ve, tN: () => Re });
        var v = 200,
          se = function () {};
        (se.prototype.append = function (A) {
          return A.length
            ? ((A = se.from(A)),
              (!this.length && A) ||
                (A.length < v && this.leafAppend(A)) ||
                (this.length < v && A.leafPrepend(this)) ||
                this.appendInner(A))
            : this;
        }),
          (se.prototype.prepend = function (A) {
            return A.length ? se.from(A).append(this) : this;
          }),
          (se.prototype.appendInner = function (A) {
            return new ve(this, A);
          }),
          (se.prototype.slice = function (A, B) {
            return (
              A === void 0 && (A = 0),
              B === void 0 && (B = this.length),
              A >= B
                ? se.empty
                : this.sliceInner(Math.max(0, A), Math.min(this.length, B))
            );
          }),
          (se.prototype.get = function (A) {
            if (!(A < 0 || A >= this.length)) return this.getInner(A);
          }),
          (se.prototype.forEach = function (A, B, j) {
            B === void 0 && (B = 0),
              j === void 0 && (j = this.length),
              B <= j
                ? this.forEachInner(A, B, j, 0)
                : this.forEachInvertedInner(A, B, j, 0);
          }),
          (se.prototype.map = function (A, B, j) {
            B === void 0 && (B = 0), j === void 0 && (j = this.length);
            var Y = [];
            return (
              this.forEach(
                function (pe, Oe) {
                  return Y.push(A(pe, Oe));
                },
                B,
                j,
              ),
              Y
            );
          }),
          (se.from = function (A) {
            return A instanceof se ? A : A && A.length ? new Te(A) : se.empty;
          });
        var Te = (function (T) {
          function A(j) {
            T.call(this), (this.values = j);
          }
          T && (A.__proto__ = T),
            (A.prototype = Object.create(T && T.prototype)),
            (A.prototype.constructor = A);
          var B = { length: { configurable: !0 }, depth: { configurable: !0 } };
          return (
            (A.prototype.flatten = function () {
              return this.values;
            }),
            (A.prototype.sliceInner = function (Y, pe) {
              return Y == 0 && pe == this.length
                ? this
                : new A(this.values.slice(Y, pe));
            }),
            (A.prototype.getInner = function (Y) {
              return this.values[Y];
            }),
            (A.prototype.forEachInner = function (Y, pe, Oe, De) {
              for (var Le = pe; Le < Oe; Le++)
                if (Y(this.values[Le], De + Le) === !1) return !1;
            }),
            (A.prototype.forEachInvertedInner = function (Y, pe, Oe, De) {
              for (var Le = pe - 1; Le >= Oe; Le--)
                if (Y(this.values[Le], De + Le) === !1) return !1;
            }),
            (A.prototype.leafAppend = function (Y) {
              if (this.length + Y.length <= v)
                return new A(this.values.concat(Y.flatten()));
            }),
            (A.prototype.leafPrepend = function (Y) {
              if (this.length + Y.length <= v)
                return new A(Y.flatten().concat(this.values));
            }),
            (B.length.get = function () {
              return this.values.length;
            }),
            (B.depth.get = function () {
              return 0;
            }),
            Object.defineProperties(A.prototype, B),
            A
          );
        })(se);
        se.empty = new Te([]);
        var ve = (function (T) {
          function A(B, j) {
            T.call(this),
              (this.left = B),
              (this.right = j),
              (this.length = B.length + j.length),
              (this.depth = Math.max(B.depth, j.depth) + 1);
          }
          return (
            T && (A.__proto__ = T),
            (A.prototype = Object.create(T && T.prototype)),
            (A.prototype.constructor = A),
            (A.prototype.flatten = function () {
              return this.left.flatten().concat(this.right.flatten());
            }),
            (A.prototype.getInner = function (j) {
              return j < this.left.length
                ? this.left.get(j)
                : this.right.get(j - this.left.length);
            }),
            (A.prototype.forEachInner = function (j, Y, pe, Oe) {
              var De = this.left.length;
              if (
                (Y < De &&
                  this.left.forEachInner(j, Y, Math.min(pe, De), Oe) === !1) ||
                (pe > De &&
                  this.right.forEachInner(
                    j,
                    Math.max(Y - De, 0),
                    Math.min(this.length, pe) - De,
                    Oe + De,
                  ) === !1)
              )
                return !1;
            }),
            (A.prototype.forEachInvertedInner = function (j, Y, pe, Oe) {
              var De = this.left.length;
              if (
                (Y > De &&
                  this.right.forEachInvertedInner(
                    j,
                    Y - De,
                    Math.max(pe, De) - De,
                    Oe + De,
                  ) === !1) ||
                (pe < De &&
                  this.left.forEachInvertedInner(j, Math.min(Y, De), pe, Oe) ===
                    !1)
              )
                return !1;
            }),
            (A.prototype.sliceInner = function (j, Y) {
              if (j == 0 && Y == this.length) return this;
              var pe = this.left.length;
              return Y <= pe
                ? this.left.slice(j, Y)
                : j >= pe
                  ? this.right.slice(j - pe, Y - pe)
                  : this.left.slice(j, pe).append(this.right.slice(0, Y - pe));
            }),
            (A.prototype.leafAppend = function (j) {
              var Y = this.right.leafAppend(j);
              if (Y) return new A(this.left, Y);
            }),
            (A.prototype.leafPrepend = function (j) {
              var Y = this.left.leafPrepend(j);
              if (Y) return new A(Y, this.right);
            }),
            (A.prototype.appendInner = function (j) {
              return this.left.depth >= Math.max(this.right.depth, j.depth) + 1
                ? new A(this.left, new A(this.right, j))
                : new A(this, j);
            }),
            A
          );
        })(se);
        const ge = se;
        var Ye = Fe(63734),
          _e = Fe(52893);
        const ze = 500;
        class Me {
          constructor(A, B) {
            (this.items = A), (this.eventCount = B);
          }
          popEvent(A, B) {
            if (this.eventCount == 0) return null;
            let j = this.items.length;
            for (; ; j--)
              if (this.items.get(j - 1).selection) {
                --j;
                break;
              }
            let Y, pe;
            B &&
              ((Y = this.remapping(j, this.items.length)),
              (pe = Y.maps.length));
            let Oe = A.tr,
              De,
              Le,
              Qe = [],
              nt = [];
            return (
              this.items.forEach(
                (qe, st) => {
                  if (!qe.step) {
                    Y ||
                      ((Y = this.remapping(j, st + 1)), (pe = Y.maps.length)),
                      pe--,
                      nt.push(qe);
                    return;
                  }
                  if (Y) {
                    nt.push(new Je(qe.map));
                    let ft = qe.step.map(Y.slice(pe)),
                      mt;
                    ft &&
                      Oe.maybeStep(ft).doc &&
                      ((mt = Oe.mapping.maps[Oe.mapping.maps.length - 1]),
                      Qe.push(
                        new Je(mt, void 0, void 0, Qe.length + nt.length),
                      )),
                      pe--,
                      mt && Y.appendMap(mt, pe);
                  } else Oe.maybeStep(qe.step);
                  if (qe.selection)
                    return (
                      (De = Y ? qe.selection.map(Y.slice(pe)) : qe.selection),
                      (Le = new Me(
                        this.items.slice(0, j).append(nt.reverse().concat(Qe)),
                        this.eventCount - 1,
                      )),
                      !1
                    );
                },
                this.items.length,
                0,
              ),
              { remaining: Le, transform: Oe, selection: De }
            );
          }
          addTransform(A, B, j, Y) {
            let pe = [],
              Oe = this.eventCount,
              De = this.items,
              Le = !Y && De.length ? De.get(De.length - 1) : null;
            for (let nt = 0; nt < A.steps.length; nt++) {
              let qe = A.steps[nt].invert(A.docs[nt]),
                st = new Je(A.mapping.maps[nt], qe, B),
                ft;
              (ft = Le && Le.merge(st)) &&
                ((st = ft), nt ? pe.pop() : (De = De.slice(0, De.length - 1))),
                pe.push(st),
                B && (Oe++, (B = void 0)),
                Y || (Le = st);
            }
            let Qe = Oe - j.depth;
            return (
              Qe > Ge && ((De = We(De, Qe)), (Oe -= Qe)),
              new Me(De.append(pe), Oe)
            );
          }
          remapping(A, B) {
            let j = new Ye.X9();
            return (
              this.items.forEach(
                (Y, pe) => {
                  let Oe =
                    Y.mirrorOffset != null && pe - Y.mirrorOffset >= A
                      ? j.maps.length - Y.mirrorOffset
                      : void 0;
                  j.appendMap(Y.map, Oe);
                },
                A,
                B,
              ),
              j
            );
          }
          addMaps(A) {
            return this.eventCount == 0
              ? this
              : new Me(
                  this.items.append(A.map((B) => new Je(B))),
                  this.eventCount,
                );
          }
          rebased(A, B) {
            if (!this.eventCount) return this;
            let j = [],
              Y = Math.max(0, this.items.length - B),
              pe = A.mapping,
              Oe = A.steps.length,
              De = this.eventCount;
            this.items.forEach((st) => {
              st.selection && De--;
            }, Y);
            let Le = B;
            this.items.forEach((st) => {
              let ft = pe.getMirror(--Le);
              if (ft == null) return;
              Oe = Math.min(Oe, ft);
              let mt = pe.maps[ft];
              if (st.step) {
                let $ = A.steps[ft].invert(A.docs[ft]),
                  H = st.selection && st.selection.map(pe.slice(Le + 1, ft));
                H && De++, j.push(new Je(mt, $, H));
              } else j.push(new Je(mt));
            }, Y);
            let Qe = [];
            for (let st = B; st < Oe; st++) Qe.push(new Je(pe.maps[st]));
            let nt = this.items.slice(0, Y).append(Qe).append(j),
              qe = new Me(nt, De);
            return (
              qe.emptyItemCount() > ze &&
                (qe = qe.compress(this.items.length - j.length)),
              qe
            );
          }
          emptyItemCount() {
            let A = 0;
            return (
              this.items.forEach((B) => {
                B.step || A++;
              }),
              A
            );
          }
          compress(A = this.items.length) {
            let B = this.remapping(0, A),
              j = B.maps.length,
              Y = [],
              pe = 0;
            return (
              this.items.forEach(
                (Oe, De) => {
                  if (De >= A) Y.push(Oe), Oe.selection && pe++;
                  else if (Oe.step) {
                    let Le = Oe.step.map(B.slice(j)),
                      Qe = Le && Le.getMap();
                    if ((j--, Qe && B.appendMap(Qe, j), Le)) {
                      let nt = Oe.selection && Oe.selection.map(B.slice(j));
                      nt && pe++;
                      let qe = new Je(Qe.invert(), Le, nt),
                        st,
                        ft = Y.length - 1;
                      (st = Y.length && Y[ft].merge(qe))
                        ? (Y[ft] = st)
                        : Y.push(qe);
                    }
                  } else Oe.map && j--;
                },
                this.items.length,
                0,
              ),
              new Me(ge.from(Y.reverse()), pe)
            );
          }
        }
        Me.empty = new Me(ge.empty, 0);
        function We(T, A) {
          let B;
          return (
            T.forEach((j, Y) => {
              if (j.selection && A-- == 0) return (B = Y), !1;
            }),
            T.slice(B)
          );
        }
        class Je {
          constructor(A, B, j, Y) {
            (this.map = A),
              (this.step = B),
              (this.selection = j),
              (this.mirrorOffset = Y);
          }
          merge(A) {
            if (this.step && A.step && !A.selection) {
              let B = A.step.merge(this.step);
              if (B) return new Je(B.getMap().invert(), B, this.selection);
            }
          }
        }
        class Ne {
          constructor(A, B, j, Y, pe) {
            (this.done = A),
              (this.undone = B),
              (this.prevRanges = j),
              (this.prevTime = Y),
              (this.prevComposition = pe);
          }
        }
        const Ge = 20;
        function et(T, A, B, j) {
          let Y = B.getMeta(X),
            pe;
          if (Y) return Y.historyState;
          B.getMeta(me) && (T = new Ne(T.done, T.undone, null, 0, -1));
          let Oe = B.getMeta("appendedTransaction");
          if (B.steps.length == 0) return T;
          if (Oe && Oe.getMeta(X))
            return Oe.getMeta(X).redo
              ? new Ne(
                  T.done.addTransform(B, void 0, j, U(A)),
                  T.undone,
                  K(B.mapping.maps[B.steps.length - 1]),
                  T.prevTime,
                  T.prevComposition,
                )
              : new Ne(
                  T.done,
                  T.undone.addTransform(B, void 0, j, U(A)),
                  null,
                  T.prevTime,
                  T.prevComposition,
                );
          if (
            B.getMeta("addToHistory") !== !1 &&
            !(Oe && Oe.getMeta("addToHistory") === !1)
          ) {
            let De = B.getMeta("composition"),
              Le =
                T.prevTime == 0 ||
                (!Oe &&
                  T.prevComposition != De &&
                  (T.prevTime < (B.time || 0) - j.newGroupDelay ||
                    !ye(B, T.prevRanges))),
              Qe = Oe
                ? Q(T.prevRanges, B.mapping)
                : K(B.mapping.maps[B.steps.length - 1]);
            return new Ne(
              T.done.addTransform(
                B,
                Le ? A.selection.getBookmark() : void 0,
                j,
                U(A),
              ),
              Me.empty,
              Qe,
              B.time,
              De ?? T.prevComposition,
            );
          } else
            return (pe = B.getMeta("rebased"))
              ? new Ne(
                  T.done.rebased(B, pe),
                  T.undone.rebased(B, pe),
                  Q(T.prevRanges, B.mapping),
                  T.prevTime,
                  T.prevComposition,
                )
              : new Ne(
                  T.done.addMaps(B.mapping.maps),
                  T.undone.addMaps(B.mapping.maps),
                  Q(T.prevRanges, B.mapping),
                  T.prevTime,
                  T.prevComposition,
                );
        }
        function ye(T, A) {
          if (!A) return !1;
          if (!T.docChanged) return !0;
          let B = !1;
          return (
            T.mapping.maps[0].forEach((j, Y) => {
              for (let pe = 0; pe < A.length; pe += 2)
                j <= A[pe + 1] && Y >= A[pe] && (B = !0);
            }),
            B
          );
        }
        function K(T) {
          let A = [];
          return T.forEach((B, j, Y, pe) => A.push(Y, pe)), A;
        }
        function Q(T, A) {
          if (!T) return null;
          let B = [];
          for (let j = 0; j < T.length; j += 2) {
            let Y = A.map(T[j], 1),
              pe = A.map(T[j + 1], -1);
            Y <= pe && B.push(Y, pe);
          }
          return B;
        }
        function ce(T, A, B) {
          let j = U(A),
            Y = X.get(A).spec.config,
            pe = (B ? T.undone : T.done).popEvent(A, j);
          if (!pe) return null;
          let Oe = pe.selection.resolve(pe.transform.doc),
            De = (B ? T.done : T.undone).addTransform(
              pe.transform,
              A.selection.getBookmark(),
              Y,
              j,
            ),
            Le = new Ne(
              B ? De : pe.remaining,
              B ? pe.remaining : De,
              null,
              0,
              -1,
            );
          return pe.transform
            .setSelection(Oe)
            .setMeta(X, { redo: B, historyState: Le });
        }
        let _ = !1,
          G = null;
        function U(T) {
          let A = T.plugins;
          if (G != A) {
            (_ = !1), (G = A);
            for (let B = 0; B < A.length; B++)
              if (A[B].spec.historyPreserveItems) {
                _ = !0;
                break;
              }
          }
          return _;
        }
        function ae(T) {
          return T.setMeta(me, !0);
        }
        const X = new _e.hs("history"),
          me = new _e.hs("closeHistory");
        function ke(T = {}) {
          return (
            (T = {
              depth: T.depth || 100,
              newGroupDelay: T.newGroupDelay || 500,
            }),
            new _e.k_({
              key: X,
              state: {
                init() {
                  return new Ne(Me.empty, Me.empty, null, 0, -1);
                },
                apply(A, B, j) {
                  return et(B, j, A, T);
                },
              },
              config: T,
              props: {
                handleDOMEvents: {
                  beforeinput(A, B) {
                    let j = B.inputType,
                      Y =
                        j == "historyUndo"
                          ? Re
                          : j == "historyRedo"
                            ? Ve
                            : null;
                    return Y
                      ? (B.preventDefault(), Y(A.state, A.dispatch))
                      : !1;
                  },
                },
              },
            })
          );
        }
        function Be(T, A) {
          return (B, j) => {
            let Y = X.getState(B);
            if (!Y || (T ? Y.undone : Y.done).eventCount == 0) return !1;
            if (j) {
              let pe = ce(Y, B, T);
              pe && j(A ? pe.scrollIntoView() : pe);
            }
            return !0;
          };
        }
        const Re = Be(!1, !0),
          Ve = Be(!0, !0),
          Ae = Be(!1, !1),
          de = Be(!0, !1);
        function C(T) {
          let A = X.getState(T);
          return A ? A.done.eventCount : 0;
        }
        function z(T) {
          let A = X.getState(T);
          return A ? A.undone.eventCount : 0;
        }
      },
      79216: (Ot, ht, Fe) => {
        "use strict";
        Fe.d(ht, {
          JJ: () => Q,
          dv: () => ze,
          fV: () => Te,
          sM: () => Ye,
          tG: () => K,
        });
        var v = Fe(52893),
          se = Fe(63734);
        class Te {
          constructor(_, G, U = {}) {
            (this.match = _),
              (this.match = _),
              (this.handler = typeof G == "string" ? ve(G) : G),
              (this.undoable = U.undoable !== !1),
              (this.inCode = U.inCode || !1);
          }
        }
        function ve(ce) {
          return function (_, G, U, ae) {
            let X = ce;
            if (G[1]) {
              let me = G[0].lastIndexOf(G[1]);
              (X += G[0].slice(me + G[1].length)), (U += me);
              let ke = U - ae;
              ke > 0 && ((X = G[0].slice(me - ke, me) + X), (U = ae));
            }
            return _.tr.insertText(X, U, ae);
          };
        }
        const ge = 500;
        function Ye({ rules: ce }) {
          let _ = new v.k_({
            state: {
              init() {
                return null;
              },
              apply(G, U) {
                let ae = G.getMeta(this);
                return ae || (G.selectionSet || G.docChanged ? null : U);
              },
            },
            props: {
              handleTextInput(G, U, ae, X) {
                return _e(G, U, ae, X, ce, _);
              },
              handleDOMEvents: {
                compositionend: (G) => {
                  setTimeout(() => {
                    let { $cursor: U } = G.state.selection;
                    U && _e(G, U.pos, U.pos, "", ce, _);
                  });
                },
              },
            },
            isInputRules: !0,
          });
          return _;
        }
        function _e(ce, _, G, U, ae, X) {
          if (ce.composing) return !1;
          let me = ce.state,
            ke = me.doc.resolve(_),
            Be =
              ke.parent.textBetween(
                Math.max(0, ke.parentOffset - ge),
                ke.parentOffset,
                null,
                "\uFFFC",
              ) + U;
          for (let Re = 0; Re < ae.length; Re++) {
            let Ve = ae[Re];
            if (ke.parent.type.spec.code) {
              if (!Ve.inCode) continue;
            } else if (Ve.inCode === "only") continue;
            let Ae = Ve.match.exec(Be),
              de = Ae && Ve.handler(me, Ae, _ - (Ae[0].length - U.length), G);
            if (de)
              return (
                Ve.undoable &&
                  de.setMeta(X, { transform: de, from: _, to: G, text: U }),
                ce.dispatch(de),
                !0
              );
          }
          return !1;
        }
        const ze = (ce, _) => {
            let G = ce.plugins;
            for (let U = 0; U < G.length; U++) {
              let ae = G[U],
                X;
              if (ae.spec.isInputRules && (X = ae.getState(ce))) {
                if (_) {
                  let me = ce.tr,
                    ke = X.transform;
                  for (let Be = ke.steps.length - 1; Be >= 0; Be--)
                    me.step(ke.steps[Be].invert(ke.docs[Be]));
                  if (X.text) {
                    let Be = me.doc.resolve(X.from).marks();
                    me.replaceWith(X.from, X.to, ce.schema.text(X.text, Be));
                  } else me.delete(X.from, X.to);
                  _(me);
                }
                return !0;
              }
            }
            return !1;
          },
          Me = new Te(/--$/, "\u2014"),
          We = new Te(/\.\.\.$/, "\u2026"),
          Je = new Te(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(")$/, "\u201C"),
          Ne = new Te(/"$/, "\u201D"),
          Ge = new Te(/(?:^|[\s\{\[\(\<'"\u2018\u201C])(')$/, "\u2018"),
          et = new Te(/'$/, "\u2019"),
          ye = [Je, Ne, Ge, et];
        function K(ce, _, G = null, U) {
          return new Te(ce, (ae, X, me, ke) => {
            let Be = G instanceof Function ? G(X) : G,
              Re = ae.tr.delete(me, ke),
              Ve = Re.doc.resolve(me),
              Ae = Ve.blockRange(),
              de = Ae && (0, se.oM)(Ae, _, Be);
            if (!de) return null;
            Re.wrap(Ae, de);
            let C = Re.doc.resolve(me - 1).nodeBefore;
            return (
              C &&
                C.type == _ &&
                (0, se.n9)(Re.doc, me - 1) &&
                (!U || U(X, C)) &&
                Re.join(me - 1),
              Re
            );
          });
        }
        function Q(ce, _, G = null) {
          return new Te(ce, (U, ae, X, me) => {
            let ke = U.doc.resolve(X),
              Be = G instanceof Function ? G(ae) : G;
            return ke
              .node(-1)
              .canReplaceWith(ke.index(-1), ke.indexAfter(-1), _)
              ? U.tr.delete(X, me).setBlockType(X, X, _, Be)
              : null;
          });
        }
      },
    },
  ]);
})();
