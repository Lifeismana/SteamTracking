/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkHelp = self.webpackChunkHelp || []).push([
  [7767],
  {
    33559: (e, t, n) => {
      n.d(t, {
        BN: () => s,
        Ej: () => a,
        UU: () => c,
        cY: () => l,
        rD: () => i,
      });
      var r = n(58015);
      function o(e, t, n) {
        let { reference: o, floating: i } = e;
        const u = (0, r.TV)(t),
          c = (0, r.Dz)(t),
          l = (0, r.sq)(c),
          s = (0, r.C0)(t),
          a = "y" === u,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[l] / 2 - i[l] / 2;
        let v;
        switch (s) {
          case "top":
            v = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            v = { x: f, y: o.y + o.height };
            break;
          case "right":
            v = { x: o.x + o.width, y: d };
            break;
          case "left":
            v = { x: o.x - i.width, y: d };
            break;
          default:
            v = { x: o.x, y: o.y };
        }
        switch ((0, r.Sg)(t)) {
          case "start":
            v[c] -= p * (n && a ? -1 : 1);
            break;
          case "end":
            v[c] += p * (n && a ? -1 : 1);
        }
        return v;
      }
      const i = async (e, t, n) => {
        const {
            placement: r = "bottom",
            strategy: i = "absolute",
            middleware: u = [],
            platform: c,
          } = n,
          l = u.filter(Boolean),
          s = await (null == c.isRTL ? void 0 : c.isRTL(t));
        let a = await c.getElementRects({
            reference: e,
            floating: t,
            strategy: i,
          }),
          { x: f, y: d } = o(a, r, s),
          p = r,
          v = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          const { name: u, fn: g } = l[n],
            {
              x: h,
              y,
              data: b,
              reset: w,
            } = await g({
              x: f,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: i,
              middlewareData: v,
              rects: a,
              platform: c,
              elements: { reference: e, floating: t },
            });
          (f = null != h ? h : f),
            (d = null != y ? y : d),
            (v = { ...v, [u]: { ...v[u], ...b } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (p = w.placement),
                w.rects &&
                  (a =
                    !0 === w.rects
                      ? await c.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: i,
                        })
                      : w.rects),
                ({ x: f, y: d } = o(a, p, s))),
              (n = -1));
        }
        return { x: f, y: d, placement: p, strategy: i, middlewareData: v };
      };
      async function u(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
            x: o,
            y: i,
            platform: u,
            rects: c,
            elements: l,
            strategy: s,
          } = e,
          {
            boundary: a = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = (0, r._3)(t, e),
          m = (0, r.nI)(v),
          g = l[p ? ("floating" === d ? "reference" : "floating") : d],
          h = (0, r.B1)(
            await u.getClippingRect({
              element:
                null ==
                  (n = await (null == u.isElement ? void 0 : u.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == u.getDocumentElement
                      ? void 0
                      : u.getDocumentElement(l.floating))),
              boundary: a,
              rootBoundary: f,
              strategy: s,
            }),
          ),
          y = "floating" === d ? { ...c.floating, x: o, y: i } : c.reference,
          b = await (null == u.getOffsetParent
            ? void 0
            : u.getOffsetParent(l.floating)),
          w = ((await (null == u.isElement ? void 0 : u.isElement(b))) &&
            (await (null == u.getScale ? void 0 : u.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          x = (0, r.B1)(
            u.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: y,
                  offsetParent: b,
                  strategy: s,
                })
              : y,
          );
        return {
          top: (h.top - x.top + m.top) / w.y,
          bottom: (x.bottom - h.bottom + m.bottom) / w.y,
          left: (h.left - x.left + m.left) / w.x,
          right: (x.right - h.right + m.right) / w.x,
        };
      }
      const c = function (e) {
        return (
          void 0 === e && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var n, o;
              const {
                  placement: i,
                  middlewareData: c,
                  rects: l,
                  initialPlacement: s,
                  platform: a,
                  elements: f,
                } = t,
                {
                  mainAxis: d = !0,
                  crossAxis: p = !0,
                  fallbackPlacements: v,
                  fallbackStrategy: m = "bestFit",
                  fallbackAxisSideDirection: g = "none",
                  flipAlignment: h = !0,
                  ...y
                } = (0, r._3)(e, t);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const b = (0, r.C0)(i),
                w = (0, r.C0)(s) === s,
                x = await (null == a.isRTL ? void 0 : a.isRTL(f.floating)),
                E = v || (w || !h ? [(0, r.bV)(s)] : (0, r.WJ)(s));
              v || "none" === g || E.push(...(0, r.lP)(s, h, g, x));
              const R = [s, ...E],
                L = await u(t, y),
                k = [];
              let C = (null == (o = c.flip) ? void 0 : o.overflows) || [];
              if ((d && k.push(L[b]), p)) {
                const e = (0, r.w7)(i, l, x);
                k.push(L[e[0]], L[e[1]]);
              }
              if (
                ((C = [...C, { placement: i, overflows: k }]),
                !k.every((e) => e <= 0))
              ) {
                var T, S;
                const e = ((null == (T = c.flip) ? void 0 : T.index) || 0) + 1,
                  t = R[e];
                if (t)
                  return {
                    data: { index: e, overflows: C },
                    reset: { placement: t },
                  };
                let n =
                  null ==
                  (S = C.filter((e) => e.overflows[0] <= 0).sort(
                    (e, t) => e.overflows[1] - t.overflows[1],
                  )[0])
                    ? void 0
                    : S.placement;
                if (!n)
                  switch (m) {
                    case "bestFit": {
                      var A;
                      const e =
                        null ==
                        (A = C.map((e) => [
                          e.placement,
                          e.overflows
                            .filter((e) => e > 0)
                            .reduce((e, t) => e + t, 0),
                        ]).sort((e, t) => e[1] - t[1])[0])
                          ? void 0
                          : A[0];
                      e && (n = e);
                      break;
                    }
                    case "initialPlacement":
                      n = s;
                  }
                if (i !== n) return { reset: { placement: n } };
              }
              return {};
            },
          }
        );
      };
      const l = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                var n, o;
                const { x: i, y: u, placement: c, middlewareData: l } = t,
                  s = await (async function (e, t) {
                    const { placement: n, platform: o, elements: i } = e,
                      u = await (null == o.isRTL
                        ? void 0
                        : o.isRTL(i.floating)),
                      c = (0, r.C0)(n),
                      l = (0, r.Sg)(n),
                      s = "y" === (0, r.TV)(n),
                      a = ["left", "top"].includes(c) ? -1 : 1,
                      f = u && s ? -1 : 1,
                      d = (0, r._3)(t, e);
                    let {
                      mainAxis: p,
                      crossAxis: v,
                      alignmentAxis: m,
                    } = "number" == typeof d
                      ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
                      : {
                          mainAxis: 0,
                          crossAxis: 0,
                          alignmentAxis: null,
                          ...d,
                        };
                    return (
                      l &&
                        "number" == typeof m &&
                        (v = "end" === l ? -1 * m : m),
                      s ? { x: v * f, y: p * a } : { x: p * a, y: v * f }
                    );
                  })(t, e);
                return c === (null == (n = l.offset) ? void 0 : n.placement) &&
                  null != (o = l.arrow) &&
                  o.alignmentOffset
                  ? {}
                  : { x: i + s.x, y: u + s.y, data: { ...s, placement: c } };
              },
            }
          );
        },
        s = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                const { x: n, y: o, placement: i } = t,
                  {
                    mainAxis: c = !0,
                    crossAxis: l = !1,
                    limiter: s = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...a
                  } = (0, r._3)(e, t),
                  f = { x: n, y: o },
                  d = await u(t, a),
                  p = (0, r.TV)((0, r.C0)(i)),
                  v = (0, r.PG)(p);
                let m = f[v],
                  g = f[p];
                if (c) {
                  const e = "y" === v ? "bottom" : "right",
                    t = m + d["y" === v ? "top" : "left"],
                    n = m - d[e];
                  m = (0, r.qE)(t, m, n);
                }
                if (l) {
                  const e = "y" === p ? "bottom" : "right",
                    t = g + d["y" === p ? "top" : "left"],
                    n = g - d[e];
                  g = (0, r.qE)(t, g, n);
                }
                const h = s.fn({ ...t, [v]: m, [p]: g });
                return { ...h, data: { x: h.x - n, y: h.y - o } };
              },
            }
          );
        },
        a = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                const { placement: n, rects: o, platform: i, elements: c } = t,
                  { apply: l = () => {}, ...s } = (0, r._3)(e, t),
                  a = await u(t, s),
                  f = (0, r.C0)(n),
                  d = (0, r.Sg)(n),
                  p = "y" === (0, r.TV)(n),
                  { width: v, height: m } = o.floating;
                let g, h;
                "top" === f || "bottom" === f
                  ? ((g = f),
                    (h =
                      d ===
                      ((await (null == i.isRTL ? void 0 : i.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((h = f), (g = "end" === d ? "top" : "bottom"));
                const y = m - a[g],
                  b = v - a[h],
                  w = !t.middlewareData.shift;
                let x = y,
                  E = b;
                if (p) {
                  const e = v - a.left - a.right;
                  E = d || w ? (0, r.jk)(b, e) : e;
                } else {
                  const e = m - a.top - a.bottom;
                  x = d || w ? (0, r.jk)(y, e) : e;
                }
                if (w && !d) {
                  const e = (0, r.T9)(a.left, 0),
                    t = (0, r.T9)(a.right, 0),
                    n = (0, r.T9)(a.top, 0),
                    o = (0, r.T9)(a.bottom, 0);
                  p
                    ? (E =
                        v -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, r.T9)(a.left, a.right)))
                    : (x =
                        m -
                        2 *
                          (0 !== n || 0 !== o
                            ? n + o
                            : (0, r.T9)(a.top, a.bottom)));
                }
                await l({ ...t, availableWidth: E, availableHeight: x });
                const R = await i.getDimensions(c.floating);
                return v !== R.width || m !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    28505: (e, t, n) => {
      n.d(t, {
        BN: () => w,
        Ej: () => E,
        UU: () => x,
        ll: () => b,
        rD: () => R,
      });
      var r = n(58015),
        o = n(33559),
        i = n(977);
      function u(e) {
        const t = (0, i.L9)(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const u = (0, i.sb)(e),
          c = u ? e.offsetWidth : n,
          l = u ? e.offsetHeight : o,
          s = (0, r.LI)(n) !== c || (0, r.LI)(o) !== l;
        return s && ((n = c), (o = l)), { width: n, height: o, $: s };
      }
      function c(e) {
        return (0, i.vq)(e) ? e : e.contextElement;
      }
      function l(e) {
        const t = c(e);
        if (!(0, i.sb)(t)) return (0, r.Jx)(1);
        const n = t.getBoundingClientRect(),
          { width: o, height: l, $: s } = u(t);
        let a = (s ? (0, r.LI)(n.width) : n.width) / o,
          f = (s ? (0, r.LI)(n.height) : n.height) / l;
        return (
          (a && Number.isFinite(a)) || (a = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: a, y: f }
        );
      }
      const s = (0, r.Jx)(0);
      function a(e) {
        const t = (0, i.zk)(e);
        return (0, i.Tc)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : s;
      }
      function f(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const u = e.getBoundingClientRect(),
          s = c(e);
        let f = (0, r.Jx)(1);
        t && (o ? (0, i.vq)(o) && (f = l(o)) : (f = l(e)));
        const d = (function (e, t, n) {
          return (
            void 0 === t && (t = !1), !(!n || (t && n !== (0, i.zk)(e))) && t
          );
        })(s, n, o)
          ? a(s)
          : (0, r.Jx)(0);
        let p = (u.left + d.x) / f.x,
          v = (u.top + d.y) / f.y,
          m = u.width / f.x,
          g = u.height / f.y;
        if (s) {
          const e = (0, i.zk)(s),
            t = o && (0, i.vq)(o) ? (0, i.zk)(o) : o;
          let n = e.frameElement;
          for (; n && o && t !== e; ) {
            const e = l(n),
              t = n.getBoundingClientRect(),
              r = (0, i.L9)(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (p *= e.x),
              (v *= e.y),
              (m *= e.x),
              (g *= e.y),
              (p += o),
              (v += u),
              (n = (0, i.zk)(n).frameElement);
          }
        }
        return (0, r.B1)({ width: m, height: g, x: p, y: v });
      }
      function d(e) {
        return f((0, i.ep)(e)).left + (0, i.CP)(e).scrollLeft;
      }
      function p(e, t, n) {
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            const n = (0, i.zk)(e),
              r = (0, i.ep)(e),
              o = n.visualViewport;
            let u = r.clientWidth,
              c = r.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (u = o.width), (c = o.height);
              const e = (0, i.Tc)();
              (!e || (e && "fixed" === t)) &&
                ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: u, height: c, x: l, y: s };
          })(e, n);
        else if ("document" === t)
          o = (function (e) {
            const t = (0, i.ep)(e),
              n = (0, i.CP)(e),
              o = e.ownerDocument.body,
              u = (0, r.T9)(
                t.scrollWidth,
                t.clientWidth,
                o.scrollWidth,
                o.clientWidth,
              ),
              c = (0, r.T9)(
                t.scrollHeight,
                t.clientHeight,
                o.scrollHeight,
                o.clientHeight,
              );
            let l = -n.scrollLeft + d(e);
            const s = -n.scrollTop;
            return (
              "rtl" === (0, i.L9)(o).direction &&
                (l += (0, r.T9)(t.clientWidth, o.clientWidth) - u),
              { width: u, height: c, x: l, y: s }
            );
          })((0, i.ep)(e));
        else if ((0, i.vq)(t))
          o = (function (e, t) {
            const n = f(e, !0, "fixed" === t),
              o = n.top + e.clientTop,
              u = n.left + e.clientLeft,
              c = (0, i.sb)(e) ? l(e) : (0, r.Jx)(1);
            return {
              width: e.clientWidth * c.x,
              height: e.clientHeight * c.y,
              x: u * c.x,
              y: o * c.y,
            };
          })(t, n);
        else {
          const n = a(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.B1)(o);
      }
      function v(e, t) {
        const n = (0, i.$4)(e);
        return (
          !(n === t || !(0, i.vq)(n) || (0, i.eu)(n)) &&
          ("fixed" === (0, i.L9)(n).position || v(n, t))
        );
      }
      function m(e, t, n) {
        const o = (0, i.sb)(t),
          u = (0, i.ep)(t),
          c = "fixed" === n,
          l = f(e, !0, c, t);
        let s = { scrollLeft: 0, scrollTop: 0 };
        const a = (0, r.Jx)(0);
        if (o || (!o && !c))
          if (
            (("body" !== (0, i.mq)(t) || (0, i.ZU)(u)) && (s = (0, i.CP)(t)), o)
          ) {
            const e = f(t, !0, c, t);
            (a.x = e.x + t.clientLeft), (a.y = e.y + t.clientTop);
          } else u && (a.x = d(u));
        return {
          x: l.left + s.scrollLeft - a.x,
          y: l.top + s.scrollTop - a.y,
          width: l.width,
          height: l.height,
        };
      }
      function g(e, t) {
        return (0, i.sb)(e) && "fixed" !== (0, i.L9)(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function h(e, t) {
        const n = (0, i.zk)(e);
        if (!(0, i.sb)(e)) return n;
        let r = g(e, t);
        for (; r && (0, i.Lv)(r) && "static" === (0, i.L9)(r).position; )
          r = g(r, t);
        return r &&
          ("html" === (0, i.mq)(r) ||
            ("body" === (0, i.mq)(r) &&
              "static" === (0, i.L9)(r).position &&
              !(0, i.sQ)(r)))
          ? n
          : r || (0, i.gJ)(e) || n;
      }
      const y = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          let { rect: t, offsetParent: n, strategy: o } = e;
          const u = (0, i.sb)(n),
            c = (0, i.ep)(n);
          if (n === c) return t;
          let s = { scrollLeft: 0, scrollTop: 0 },
            a = (0, r.Jx)(1);
          const d = (0, r.Jx)(0);
          if (
            (u || (!u && "fixed" !== o)) &&
            (("body" !== (0, i.mq)(n) || (0, i.ZU)(c)) && (s = (0, i.CP)(n)),
            (0, i.sb)(n))
          ) {
            const e = f(n);
            (a = l(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
          }
          return {
            width: t.width * a.x,
            height: t.height * a.y,
            x: t.x * a.x - s.scrollLeft * a.x + d.x,
            y: t.y * a.y - s.scrollTop * a.y + d.y,
          };
        },
        getDocumentElement: i.ep,
        getClippingRect: function (e) {
          let { element: t, boundary: n, rootBoundary: o, strategy: u } = e;
          const c = [
              ...("clippingAncestors" === n
                ? (function (e, t) {
                    const n = t.get(e);
                    if (n) return n;
                    let r = (0, i.v9)(e, [], !1).filter(
                        (e) => (0, i.vq)(e) && "body" !== (0, i.mq)(e),
                      ),
                      o = null;
                    const u = "fixed" === (0, i.L9)(e).position;
                    let c = u ? (0, i.$4)(e) : e;
                    for (; (0, i.vq)(c) && !(0, i.eu)(c); ) {
                      const t = (0, i.L9)(c),
                        n = (0, i.sQ)(c);
                      n || "fixed" !== t.position || (o = null),
                        (
                          u
                            ? !n && !o
                            : (!n &&
                                "static" === t.position &&
                                o &&
                                ["absolute", "fixed"].includes(o.position)) ||
                              ((0, i.ZU)(c) && !n && v(e, c))
                        )
                          ? (r = r.filter((e) => e !== c))
                          : (o = t),
                        (c = (0, i.$4)(c));
                    }
                    return t.set(e, r), r;
                  })(t, this._c)
                : [].concat(n)),
              o,
            ],
            l = c[0],
            s = c.reduce(
              (e, n) => {
                const o = p(t, n, u);
                return (
                  (e.top = (0, r.T9)(o.top, e.top)),
                  (e.right = (0, r.jk)(o.right, e.right)),
                  (e.bottom = (0, r.jk)(o.bottom, e.bottom)),
                  (e.left = (0, r.T9)(o.left, e.left)),
                  e
                );
              },
              p(t, l, u),
            );
          return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top,
          };
        },
        getOffsetParent: h,
        getElementRects: async function (e) {
          let { reference: t, floating: n, strategy: r } = e;
          const o = this.getOffsetParent || h,
            i = this.getDimensions;
          return {
            reference: m(t, await o(n), r),
            floating: { x: 0, y: 0, ...(await i(n)) },
          };
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          const { width: t, height: n } = u(e);
          return { width: t, height: n };
        },
        getScale: l,
        isElement: i.vq,
        isRTL: function (e) {
          return "rtl" === (0, i.L9)(e).direction;
        },
      };
      function b(e, t, n, o) {
        void 0 === o && (o = {});
        const {
            ancestorScroll: u = !0,
            ancestorResize: l = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: a = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = o,
          p = c(e),
          v = u || l ? [...(p ? (0, i.v9)(p) : []), ...(0, i.v9)(t)] : [];
        v.forEach((e) => {
          u && e.addEventListener("scroll", n, { passive: !0 }),
            l && e.addEventListener("resize", n);
        });
        const m =
          p && a
            ? (function (e, t) {
                let n,
                  o = null;
                const u = (0, i.ep)(e);
                function c() {
                  clearTimeout(n), o && o.disconnect(), (o = null);
                }
                return (
                  (function i(l, s) {
                    void 0 === l && (l = !1), void 0 === s && (s = 1), c();
                    const {
                      left: a,
                      top: f,
                      width: d,
                      height: p,
                    } = e.getBoundingClientRect();
                    if ((l || t(), !d || !p)) return;
                    const v = {
                      rootMargin:
                        -(0, r.RI)(f) +
                        "px " +
                        -(0, r.RI)(u.clientWidth - (a + d)) +
                        "px " +
                        -(0, r.RI)(u.clientHeight - (f + p)) +
                        "px " +
                        -(0, r.RI)(a) +
                        "px",
                      threshold: (0, r.T9)(0, (0, r.jk)(1, s)) || 1,
                    };
                    let m = !0;
                    function g(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== s) {
                        if (!m) return i();
                        t
                          ? i(!1, t)
                          : (n = setTimeout(() => {
                              i(!1, 1e-7);
                            }, 100));
                      }
                      m = !1;
                    }
                    try {
                      o = new IntersectionObserver(g, {
                        ...v,
                        root: u.ownerDocument,
                      });
                    } catch (e) {
                      o = new IntersectionObserver(g, v);
                    }
                    o.observe(e);
                  })(!0),
                  c
                );
              })(p, n)
            : null;
        let g,
          h = -1,
          y = null;
        s &&
          ((y = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === p &&
              y &&
              (y.unobserve(t),
              cancelAnimationFrame(h),
              (h = requestAnimationFrame(() => {
                y && y.observe(t);
              }))),
              n();
          })),
          p && !d && y.observe(p),
          y.observe(t));
        let b = d ? f(e) : null;
        return (
          d &&
            (function t() {
              const r = f(e);
              !b ||
                (r.x === b.x &&
                  r.y === b.y &&
                  r.width === b.width &&
                  r.height === b.height) ||
                n();
              (b = r), (g = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            v.forEach((e) => {
              u && e.removeEventListener("scroll", n),
                l && e.removeEventListener("resize", n);
            }),
              m && m(),
              y && y.disconnect(),
              (y = null),
              d && cancelAnimationFrame(g);
          }
        );
      }
      const w = o.BN,
        x = o.UU,
        E = o.Ej,
        R = (e, t, n) => {
          const r = new Map(),
            i = { platform: y, ...n },
            u = { ...i.platform, _c: r };
          return (0, o.rD)(e, t, { ...i, platform: u });
        };
    },
    94621: (e, t, n) => {
      n.d(t, {
        BN: () => v,
        Ej: () => g,
        UU: () => m,
        cY: () => p,
        we: () => d,
      });
      var r = n(28505),
        o = n(33559),
        i = n(90626),
        u = n(72739),
        c = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      function l(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; 0 !== r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
          }
          if (
            ((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)
          )
            return !1;
          for (r = n; 0 !== r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--; ) {
            const n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function s(e) {
        if ("undefined" == typeof window) return 1;
        return (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function a(e, t) {
        const n = s(e);
        return Math.round(t * n) / n;
      }
      function f(e) {
        const t = i.useRef(e);
        return (
          c(() => {
            t.current = e;
          }),
          t
        );
      }
      function d(e) {
        void 0 === e && (e = {});
        const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: d,
            elements: { reference: p, floating: v } = {},
            transform: m = !0,
            whileElementsMounted: g,
            open: h,
          } = e,
          [y, b] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, x] = i.useState(o);
        l(w, o) || x(o);
        const [E, R] = i.useState(null),
          [L, k] = i.useState(null),
          C = i.useCallback((e) => {
            e !== P.current && ((P.current = e), R(e));
          }, []),
          T = i.useCallback((e) => {
            e !== M.current && ((M.current = e), k(e));
          }, []),
          S = p || E,
          A = v || L,
          P = i.useRef(null),
          M = i.useRef(null),
          O = i.useRef(y),
          D = null != g,
          I = f(g),
          q = f(d),
          N = f(h),
          F = i.useCallback(() => {
            if (!P.current || !M.current) return;
            const e = { placement: t, strategy: n, middleware: w };
            q.current && (e.platform = q.current),
              (0, r.rD)(P.current, M.current, e).then((e) => {
                const t = { ...e, isPositioned: !1 !== N.current };
                B.current &&
                  !l(O.current, t) &&
                  ((O.current = t),
                  u.flushSync(() => {
                    b(t);
                  }));
              });
          }, [w, t, n, q, N]);
        c(() => {
          !1 === h &&
            O.current.isPositioned &&
            ((O.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [h]);
        const B = i.useRef(!1);
        c(
          () => (
            (B.current = !0),
            () => {
              B.current = !1;
            }
          ),
          [],
        ),
          c(() => {
            if ((S && (P.current = S), A && (M.current = A), S && A)) {
              if (I.current) return I.current(S, A, F);
              F();
            }
          }, [S, A, F, I, D]);
        const j = i.useMemo(
            () => ({
              reference: P,
              floating: M,
              setReference: C,
              setFloating: T,
            }),
            [C, T],
          ),
          W = i.useMemo(() => ({ reference: S, floating: A }), [S, A]),
          U = i.useMemo(() => {
            const e = { position: n, left: 0, top: 0 };
            if (!W.floating) return e;
            const t = a(W.floating, y.x),
              r = a(W.floating, y.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(s(W.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, W.floating, y.x, y.y]);
        return i.useMemo(
          () => ({ ...y, update: F, refs: j, elements: W, floatingStyles: U }),
          [y, F, j, W, U],
        );
      }
      const p = (e, t) => ({ ...(0, o.cY)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] });
    },
    73788: (e, t, n) => {
      n.d(t, {
        s3: () => Ye,
        XF: () => je,
        iB: () => st,
        kp: () => Qe,
        s9: () => tt,
        we: () => nt,
        iQ: () => rt,
        Mk: () => me,
        bv: () => ct,
        SV: () => V,
      });
      var r = n(90626),
        o = n.t(r, 2),
        i = n(977);
      function u(e) {
        let t = e.activeElement;
        for (
          ;
          null !=
          (null == (n = t) || null == (n = n.shadowRoot)
            ? void 0
            : n.activeElement);
        ) {
          var n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function c(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, i.Ng)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function l() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function s() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map((e) => {
                let { brand: t, version: n } = e;
                return t + "/" + n;
              })
              .join(" ")
          : navigator.userAgent;
      }
      function a(e) {
        return (
          !s().includes("jsdom/") &&
          ((!d() && 0 === e.width && 0 === e.height) ||
            (d() &&
              1 === e.width &&
              1 === e.height &&
              0 === e.pressure &&
              0 === e.detail &&
              "mouse" === e.pointerType) ||
            (e.width < 1 &&
              e.height < 1 &&
              0 === e.pressure &&
              0 === e.detail &&
              "touch" === e.pointerType))
        );
      }
      function f() {
        return /apple/i.test(navigator.vendor);
      }
      function d() {
        const e = /android/i;
        return e.test(l()) || e.test(s());
      }
      function p(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function v(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function m(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target);
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      const h =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function y(e) {
        return (0, i.sb)(e) && e.matches(h);
      }
      function b(e) {
        e.preventDefault(), e.stopPropagation();
      }
      var w = n(7850),
        x = [
          "input:not([inert])",
          "select:not([inert])",
          "textarea:not([inert])",
          "a[href]:not([inert])",
          "button:not([inert])",
          "[tabindex]:not(slot):not([inert])",
          "audio[controls]:not([inert])",
          "video[controls]:not([inert])",
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          "details>summary:first-of-type:not([inert])",
          "details:not([inert])",
        ],
        E = x.join(","),
        R = "undefined" == typeof Element,
        L = R
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        k =
          !R && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        C = function e(t, n) {
          var r;
          void 0 === n && (n = !0);
          var o =
            null == t || null === (r = t.getAttribute) || void 0 === r
              ? void 0
              : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        T = function (e, t, n) {
          if (C(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(E));
          return t && L.call(e, E) && r.unshift(e), (r = r.filter(n));
        },
        S = function e(t, n, r) {
          for (var o = [], i = Array.from(t); i.length; ) {
            var u = i.shift();
            if (!C(u, !1))
              if ("SLOT" === u.tagName) {
                var c = u.assignedElements(),
                  l = e(c.length ? c : u.children, !0, r);
                r.flatten
                  ? o.push.apply(o, l)
                  : o.push({ scopeParent: u, candidates: l });
              } else {
                L.call(u, E) &&
                  r.filter(u) &&
                  (n || !t.includes(u)) &&
                  o.push(u);
                var s =
                    u.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(u)),
                  a =
                    !C(s, !1) && (!r.shadowRootFilter || r.shadowRootFilter(u));
                if (s && a) {
                  var f = e(!0 === s ? u.children : s.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: u, candidates: f });
                } else i.unshift.apply(i, u.children);
              }
          }
          return o;
        },
        A = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        P = function (e) {
          if (!e) throw new Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  n =
                    null == e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, "contenteditable");
                return "" === n || "true" === n;
              })(e)) &&
            !A(e)
            ? 0
            : e.tabIndex;
        },
        M = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        O = function (e) {
          return "INPUT" === e.tagName;
        },
        D = function (e) {
          return (
            (function (e) {
              return O(e) && "radio" === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                n = e.form || k(e),
                r = function (e) {
                  return n.querySelectorAll(
                    'input[type="radio"][name="' + e + '"]',
                  );
                };
              if (
                "undefined" != typeof window &&
                void 0 !== window.CSS &&
                "function" == typeof window.CSS.escape
              )
                t = r(window.CSS.escape(e.name));
              else
                try {
                  t = r(e.name);
                } catch (e) {
                  return (
                    console.error(
                      "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                      e.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, t) {
                for (var n = 0; n < e.length; n++)
                  if (e[n].checked && e[n].form === t) return e[n];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        I = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        q = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = L.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (L.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return I(e);
          } else {
            if ("function" == typeof r) {
              for (var i = e; e; ) {
                var u = e.parentElement,
                  c = k(e);
                if (u && !u.shadowRoot && !0 === r(u)) return I(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : u || c === e.ownerDocument
                    ? u
                    : c.host;
              }
              e = i;
            }
            if (
              (function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = e && k(e),
                  u = null === (t = i) || void 0 === t ? void 0 : t.host,
                  c = !1;
                if (i && i !== e)
                  for (
                    c = !!(
                      (null !== (n = u) &&
                        void 0 !== n &&
                        null !== (r = n.ownerDocument) &&
                        void 0 !== r &&
                        r.contains(u)) ||
                      (null != e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !c && u;
                  ) {
                    var l, s, a;
                    c = !(
                      null ===
                        (s = u =
                          null === (l = i = k(u)) || void 0 === l
                            ? void 0
                            : l.host) ||
                      void 0 === s ||
                      null === (a = s.ownerDocument) ||
                      void 0 === a ||
                      !a.contains(u)
                    );
                  }
                return c;
              })(e)
            )
              return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        N = function (e, t) {
          return !(
            t.disabled ||
            C(t) ||
            (function (e) {
              return O(e) && "hidden" === e.type;
            })(t) ||
            q(t, e) ||
            (function (e) {
              return (
                "DETAILS" === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ("FIELDSET" === t.tagName && t.disabled) {
                    for (var n = 0; n < t.children.length; n++) {
                      var r = t.children.item(n);
                      if ("LEGEND" === r.tagName)
                        return (
                          !!L.call(t, "fieldset[disabled] *") || !r.contains(e)
                        );
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        F = function (e, t) {
          return !(D(t) || P(t) < 0 || !N(e, t));
        },
        B = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!(isNaN(t) || t >= 0);
        },
        j = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var i = !!t.scopeParent,
                u = i ? t.scopeParent : t,
                c = (function (e, t) {
                  var n = P(e);
                  return n < 0 && t && !A(e) ? 0 : n;
                })(u, i),
                l = i ? e(t.candidates) : u;
              0 === c
                ? i
                  ? n.push.apply(n, l)
                  : n.push(u)
                : r.push({
                    documentOrder: o,
                    tabIndex: c,
                    item: t,
                    isScope: i,
                    content: l,
                  });
            }),
            r
              .sort(M)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        W = function (e, t) {
          var n;
          return (
            (n = (t = t || {}).getShadowRoot
              ? S([e], t.includeContainer, {
                  filter: F.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: B,
                })
              : T(e, t.includeContainer, F.bind(null, t))),
            j(n)
          );
        },
        U = function (e, t) {
          if (((t = t || {}), !e)) throw new Error("No node provided");
          return !1 !== L.call(e, E) && F(t, e);
        },
        z = n(72739),
        H = n(94621);
      function V(e) {
        const t = r.useRef(void 0),
          n = r.useCallback((t) => {
            const n = e.map((e) => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r
                    ? r
                    : () => {
                        n(null);
                      };
                }
                return (
                  (e.current = t),
                  () => {
                    e.current = null;
                  }
                );
              }
            });
            return () => {
              n.forEach((e) => (null == e ? void 0 : e()));
            };
          }, e);
        return r.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = n(e));
                },
          e,
        );
      }
      const _ = { ...o },
        J = _.useInsertionEffect || ((e) => e());
      function K(e) {
        const t = r.useRef(() => {
          0;
        });
        return (
          J(() => {
            t.current = e;
          }),
          r.useCallback(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      const Y = "ArrowUp",
        X = "ArrowDown",
        $ = "ArrowLeft",
        Q = "ArrowRight";
      var Z = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
      const G = [$, Q],
        ee = [Y, X];
      let te = !1,
        ne = 0;
      const re = () =>
        "floating-ui-" + Math.random().toString(36).slice(2, 6) + ne++;
      const oe =
        _.useId ||
        function () {
          const [e, t] = r.useState(() => (te ? re() : void 0));
          return (
            Z(() => {
              null == e && t(re());
            }, []),
            r.useEffect(() => {
              te = !0;
            }, []),
            e
          );
        };
      function ie() {
        const e = new Map();
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
          },
          on(t, n) {
            e.set(t, [...(e.get(t) || []), n]);
          },
          off(t, n) {
            var r;
            e.set(
              t,
              (null == (r = e.get(t)) ? void 0 : r.filter((e) => e !== n)) ||
                [],
            );
          },
        };
      }
      const ue = r.createContext(null),
        ce = r.createContext(null),
        le = () => {
          var e;
          return (null == (e = r.useContext(ue)) ? void 0 : e.id) || null;
        },
        se = () => r.useContext(ce);
      function ae(e) {
        return "data-floating-ui-" + e;
      }
      function fe(e) {
        -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
      }
      function de(e) {
        const t = (0, r.useRef)(e);
        return (
          Z(() => {
            t.current = e;
          }),
          t
        );
      }
      const pe = ae("safe-polygon");
      function ve(e, t, n) {
        return n && !p(n)
          ? 0
          : "number" == typeof e
            ? e
            : null == e
              ? void 0
              : e[t];
      }
      function me(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: u,
            events: l,
            elements: s,
          } = e,
          {
            enabled: a = !0,
            delay: f = 0,
            handleClose: d = null,
            mouseOnly: m = !1,
            restMs: g = 0,
            move: h = !0,
          } = t,
          y = se(),
          b = le(),
          w = de(d),
          x = de(f),
          E = de(n),
          R = r.useRef(),
          L = r.useRef(-1),
          k = r.useRef(),
          C = r.useRef(-1),
          T = r.useRef(!0),
          S = r.useRef(!1),
          A = r.useRef(() => {}),
          P = r.useRef(!1),
          M = r.useCallback(() => {
            var e;
            const t = null == (e = u.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [u]);
        r.useEffect(() => {
          if (a)
            return (
              l.on("openchange", e),
              () => {
                l.off("openchange", e);
              }
            );
          function e(e) {
            let { open: t } = e;
            t || (fe(L), fe(C), (T.current = !0), (P.current = !1));
          }
        }, [a, l]),
          r.useEffect(() => {
            if (!a) return;
            if (!w.current) return;
            if (!n) return;
            function e(e) {
              M() && o(!1, e, "hover");
            }
            const t = v(s.floating).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [s.floating, n, o, a, w, M]);
        const O = r.useCallback(
            function (e, t, n) {
              void 0 === t && (t = !0), void 0 === n && (n = "hover");
              const r = ve(x.current, "close", R.current);
              r && !k.current
                ? (fe(L), (L.current = window.setTimeout(() => o(!1, e, n), r)))
                : t && (fe(L), o(!1, e, n));
            },
            [x, o],
          ),
          D = K(() => {
            A.current(), (k.current = void 0);
          }),
          I = K(() => {
            if (S.current) {
              const e = v(s.floating).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(pe),
                (S.current = !1);
            }
          }),
          q = K(
            () =>
              !!u.current.openEvent &&
              ["click", "mousedown"].includes(u.current.openEvent.type),
          );
        r.useEffect(() => {
          if (a && (0, i.vq)(s.domReference)) {
            var e;
            const o = s.domReference;
            return (
              n && o.addEventListener("mouseleave", l),
              null == (e = s.floating) || e.addEventListener("mouseleave", l),
              h && o.addEventListener("mousemove", t, { once: !0 }),
              o.addEventListener("mouseenter", t),
              o.addEventListener("mouseleave", r),
              () => {
                var e;
                n && o.removeEventListener("mouseleave", l),
                  null == (e = s.floating) ||
                    e.removeEventListener("mouseleave", l),
                  h && o.removeEventListener("mousemove", t),
                  o.removeEventListener("mouseenter", t),
                  o.removeEventListener("mouseleave", r);
              }
            );
          }
          function t(e) {
            if (
              (fe(L),
              (T.current = !1),
              (m && !p(R.current)) || (g > 0 && !ve(x.current, "open")))
            )
              return;
            const t = ve(x.current, "open", R.current);
            t
              ? (L.current = window.setTimeout(() => {
                  E.current || o(!0, e, "hover");
                }, t))
              : n || o(!0, e, "hover");
          }
          function r(e) {
            if (q()) return;
            A.current();
            const t = v(s.floating);
            if (
              (fe(C), (P.current = !1), w.current && u.current.floatingContext)
            ) {
              n || fe(L),
                (k.current = w.current({
                  ...u.current.floatingContext,
                  tree: y,
                  x: e.clientX,
                  y: e.clientY,
                  onClose() {
                    I(), D(), q() || O(e, !0, "safe-polygon");
                  },
                }));
              const r = k.current;
              return (
                t.addEventListener("mousemove", r),
                void (A.current = () => {
                  t.removeEventListener("mousemove", r);
                })
              );
            }
            ("touch" !== R.current || !c(s.floating, e.relatedTarget)) && O(e);
          }
          function l(e) {
            q() ||
              (u.current.floatingContext &&
                (null == w.current ||
                  w.current({
                    ...u.current.floatingContext,
                    tree: y,
                    x: e.clientX,
                    y: e.clientY,
                    onClose() {
                      I(), D(), q() || O(e);
                    },
                  })(e)));
          }
        }, [s, a, e, m, g, h, O, D, I, o, n, E, y, x, w, u, q]),
          Z(() => {
            var e;
            if (
              a &&
              n &&
              null != (e = w.current) &&
              e.__options.blockPointerEvents &&
              M()
            ) {
              S.current = !0;
              const e = s.floating;
              if ((0, i.vq)(s.domReference) && e) {
                var t;
                const n = v(s.floating).body;
                n.setAttribute(pe, "");
                const r = s.domReference,
                  o =
                    null == y ||
                    null == (t = y.nodesRef.current.find((e) => e.id === b)) ||
                    null == (t = t.context)
                      ? void 0
                      : t.elements.floating;
                return (
                  o && (o.style.pointerEvents = ""),
                  (n.style.pointerEvents = "none"),
                  (r.style.pointerEvents = "auto"),
                  (e.style.pointerEvents = "auto"),
                  () => {
                    (n.style.pointerEvents = ""),
                      (r.style.pointerEvents = ""),
                      (e.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [a, n, b, s, y, w, M]),
          Z(() => {
            n || ((R.current = void 0), (P.current = !1), D(), I());
          }, [n, D, I]),
          r.useEffect(
            () => () => {
              D(), fe(L), fe(C), I();
            },
            [a, s.domReference, D, I],
          );
        const N = r.useMemo(() => {
            function e(e) {
              R.current = e.pointerType;
            }
            return {
              onPointerDown: e,
              onPointerEnter: e,
              onMouseMove(e) {
                const { nativeEvent: t } = e;
                function r() {
                  T.current || E.current || o(!0, t, "hover");
                }
                (m && !p(R.current)) ||
                  n ||
                  0 === g ||
                  (P.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                  (fe(C),
                  "touch" === R.current
                    ? r()
                    : ((P.current = !0),
                      (C.current = window.setTimeout(r, g))));
              },
            };
          }, [m, o, n, E, g]),
          F = r.useMemo(
            () => ({
              onMouseEnter() {
                fe(L);
              },
              onMouseLeave(e) {
                q() || O(e.nativeEvent, !1);
              },
            }),
            [O, q],
          );
        return r.useMemo(
          () => (a ? { reference: N, floating: F } : {}),
          [a, N, F],
        );
      }
      let ge = 0;
      function he(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1,
        } = t;
        r && cancelAnimationFrame(ge);
        const i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? i() : (ge = requestAnimationFrame(i));
      }
      function ye(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
        for (; o; ) {
          const t = e.find((e) => e.id === o);
          (o = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
        }
        return r;
      }
      function be(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let we = new WeakMap(),
        xe = new WeakSet(),
        Ee = {},
        Re = 0;
      const Le = () =>
          "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype,
        ke = (e) => e && (e.host || ke(e.parentNode)),
        Ce = (e, t) =>
          t
            .map((t) => {
              if (e.contains(t)) return t;
              const n = ke(t);
              return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
      function Te(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = v(e[0]).body;
        return (function (e, t, n, r) {
          const o = "data-floating-ui-inert",
            u = r ? "inert" : n ? "aria-hidden" : null,
            c = Ce(t, e),
            l = new Set(),
            s = new Set(c),
            a = [];
          Ee[o] || (Ee[o] = new WeakMap());
          const f = Ee[o];
          return (
            c.forEach(function e(t) {
              t && !l.has(t) && (l.add(t), t.parentNode && e(t.parentNode));
            }),
            (function e(t) {
              t &&
                !s.has(t) &&
                [].forEach.call(t.children, (t) => {
                  if ("script" !== (0, i.mq)(t))
                    if (l.has(t)) e(t);
                    else {
                      const e = u ? t.getAttribute(u) : null,
                        n = null !== e && "false" !== e,
                        r = we.get(t) || 0,
                        i = u ? r + 1 : r,
                        c = (f.get(t) || 0) + 1;
                      we.set(t, i),
                        f.set(t, c),
                        a.push(t),
                        1 === i && n && xe.add(t),
                        1 === c && t.setAttribute(o, ""),
                        !n && u && t.setAttribute(u, "true");
                    }
                });
            })(t),
            l.clear(),
            Re++,
            () => {
              a.forEach((e) => {
                const t = we.get(e) || 0,
                  n = u ? t - 1 : t,
                  r = (f.get(e) || 0) - 1;
                we.set(e, n),
                  f.set(e, r),
                  n || (!xe.has(e) && u && e.removeAttribute(u), xe.delete(e)),
                  r || e.removeAttribute(o);
              }),
                Re--,
                Re ||
                  ((we = new WeakMap()),
                  (we = new WeakMap()),
                  (xe = new WeakSet()),
                  (Ee = {}));
            }
          );
        })(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n);
      }
      const Se = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function Ae(e, t) {
        const n = W(e, Se());
        "prev" === t && n.reverse();
        const r = n.indexOf(u(v(e)));
        return n.slice(r + 1)[0];
      }
      function Pe() {
        return Ae(document.body, "next");
      }
      function Me() {
        return Ae(document.body, "prev");
      }
      function Oe(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !c(n, r);
      }
      function De(e) {
        W(e, Se()).forEach((e) => {
          (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
            e.setAttribute("tabindex", "-1");
        });
      }
      function Ie(e) {
        e.querySelectorAll("[data-tabindex]").forEach((e) => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
        });
      }
      const qe = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0,
        },
        Ne = r.forwardRef(function (e, t) {
          const [n, o] = r.useState();
          Z(() => {
            f() && o("button");
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [ae("focus-guard")]: "",
            style: qe,
          };
          return (0, w.jsx)("span", { ...e, ...i });
        }),
        Fe = r.createContext(null),
        Be = ae("portal");
      function je(e) {
        const { children: t, id: n, root: o, preserveTabOrder: u = !0 } = e,
          c = (function (e) {
            void 0 === e && (e = {});
            const { id: t, root: n } = e,
              o = oe(),
              u = We(),
              [c, l] = r.useState(null),
              s = r.useRef(null);
            return (
              Z(
                () => () => {
                  null == c || c.remove(),
                    queueMicrotask(() => {
                      s.current = null;
                    });
                },
                [c],
              ),
              Z(() => {
                if (!o) return;
                if (s.current) return;
                const e = t ? document.getElementById(t) : null;
                if (!e) return;
                const n = document.createElement("div");
                (n.id = o),
                  n.setAttribute(Be, ""),
                  e.appendChild(n),
                  (s.current = n),
                  l(n);
              }, [t, o]),
              Z(() => {
                if (null === n) return;
                if (!o) return;
                if (s.current) return;
                let e = n || (null == u ? void 0 : u.portalNode);
                e && !(0, i.vq)(e) && (e = e.current), (e = e || document.body);
                let r = null;
                t &&
                  ((r = document.createElement("div")),
                  (r.id = t),
                  e.appendChild(r));
                const c = document.createElement("div");
                (c.id = o),
                  c.setAttribute(Be, ""),
                  (e = r || e),
                  e.appendChild(c),
                  (s.current = c),
                  l(c);
              }, [t, n, o, u]),
              c
            );
          })({ id: n, root: o }),
          [l, s] = r.useState(null),
          a = r.useRef(null),
          f = r.useRef(null),
          d = r.useRef(null),
          p = r.useRef(null),
          v = null == l ? void 0 : l.modal,
          m = null == l ? void 0 : l.open,
          g = !!l && !l.modal && l.open && u && !(!o && !c);
        return (
          r.useEffect(() => {
            if (c && u && !v)
              return (
                c.addEventListener("focusin", e, !0),
                c.addEventListener("focusout", e, !0),
                () => {
                  c.removeEventListener("focusin", e, !0),
                    c.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              if (c && Oe(e)) {
                ("focusin" === e.type ? Ie : De)(c);
              }
            }
          }, [c, u, v]),
          r.useEffect(() => {
            c && (m || Ie(c));
          }, [m, c]),
          (0, w.jsxs)(Fe.Provider, {
            value: r.useMemo(
              () => ({
                preserveTabOrder: u,
                beforeOutsideRef: a,
                afterOutsideRef: f,
                beforeInsideRef: d,
                afterInsideRef: p,
                portalNode: c,
                setFocusManagerState: s,
              }),
              [u, c],
            ),
            children: [
              g &&
                c &&
                (0, w.jsx)(Ne, {
                  "data-type": "outside",
                  ref: a,
                  onFocus: (e) => {
                    if (Oe(e, c)) {
                      var t;
                      null == (t = d.current) || t.focus();
                    } else {
                      const e = Me() || (null == l ? void 0 : l.domReference);
                      null == e || e.focus();
                    }
                  },
                }),
              g && c && (0, w.jsx)("span", { "aria-owns": c.id, style: qe }),
              c && z.createPortal(t, c),
              g &&
                c &&
                (0, w.jsx)(Ne, {
                  "data-type": "outside",
                  ref: f,
                  onFocus: (e) => {
                    if (Oe(e, c)) {
                      var t;
                      null == (t = p.current) || t.focus();
                    } else {
                      const t = Pe() || (null == l ? void 0 : l.domReference);
                      null == t || t.focus(),
                        (null == l ? void 0 : l.closeOnFocusOut) &&
                          (null == l ||
                            l.onOpenChange(!1, e.nativeEvent, "focus-out"));
                    }
                  },
                }),
            ],
          })
        );
      }
      const We = () => r.useContext(Fe),
        Ue = "data-floating-ui-focusable";
      function ze(e) {
        return e
          ? e.hasAttribute(Ue)
            ? e
            : e.querySelector("[" + Ue + "]") || e
          : null;
      }
      function He(e) {
        return r.useMemo(
          () => (t) => {
            e.forEach((e) => {
              e && (e.current = t);
            });
          },
          e,
        );
      }
      const Ve = 20;
      let _e = [];
      function Je() {
        return _e
          .slice()
          .reverse()
          .find((e) => e.isConnected);
      }
      const Ke = r.forwardRef(function (e, t) {
        return (0, w.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: qe,
        });
      });
      function Ye(e) {
        const {
            context: t,
            children: n,
            disabled: o = !1,
            order: l = ["content"],
            guards: s = !0,
            initialFocus: f = 0,
            returnFocus: p = !0,
            restoreFocus: m = !1,
            modal: h = !0,
            visuallyHiddenDismiss: x = !1,
            closeOnFocusOut: E = !0,
            outsideElementsInert: R = !1,
          } = e,
          {
            open: L,
            onOpenChange: k,
            events: C,
            dataRef: T,
            elements: { domReference: S, floating: A },
          } = t,
          P = K(() => {
            var e;
            return null == (e = T.current.floatingContext) ? void 0 : e.nodeId;
          }),
          M = "number" == typeof f && f < 0,
          O = !!(D = S) && "combobox" === D.getAttribute("role") && y(D) && M;
        var D;
        const I = Le(),
          q = !I || s,
          N = !q || (I && R),
          F = de(l),
          B = de(f),
          j = de(p),
          z = se(),
          H = We(),
          V = r.useRef(null),
          _ = r.useRef(null),
          J = r.useRef(!1),
          Y = r.useRef(!1),
          X = r.useRef(-1),
          $ = null != H,
          Q = ze(A),
          G = K(function (e) {
            return void 0 === e && (e = Q), e ? W(e, Se()) : [];
          }),
          ee = K((e) => {
            const t = G(e);
            return F.current
              .map((e) =>
                S && "reference" === e ? S : Q && "floating" === e ? Q : t,
              )
              .filter(Boolean)
              .flat();
          });
        r.useEffect(() => {
          if (o) return;
          if (!h) return;
          function e(e) {
            if ("Tab" === e.key) {
              c(Q, u(v(Q))) && 0 === G().length && !O && b(e);
              const t = ee(),
                n = g(e);
              "reference" === F.current[0] &&
                n === S &&
                (b(e), e.shiftKey ? he(t[t.length - 1]) : he(t[1])),
                "floating" === F.current[1] &&
                  n === Q &&
                  e.shiftKey &&
                  (b(e), he(t[0]));
            }
          }
          const t = v(Q);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [o, S, Q, h, F, O, G, ee]),
          r.useEffect(() => {
            if (!o && A)
              return (
                A.addEventListener("focusin", e),
                () => {
                  A.removeEventListener("focusin", e);
                }
              );
            function e(e) {
              const t = g(e),
                n = G().indexOf(t);
              -1 !== n && (X.current = n);
            }
          }, [o, A, G]),
          r.useEffect(() => {
            if (!o && E)
              return A && (0, i.sb)(S)
                ? (S.addEventListener("focusout", t),
                  S.addEventListener("pointerdown", e),
                  A.addEventListener("focusout", t),
                  () => {
                    S.removeEventListener("focusout", t),
                      S.removeEventListener("pointerdown", e),
                      A.removeEventListener("focusout", t);
                  })
                : void 0;
            function e() {
              (Y.current = !0),
                setTimeout(() => {
                  Y.current = !1;
                });
            }
            function t(e) {
              const t = e.relatedTarget;
              queueMicrotask(() => {
                const n = P(),
                  r = !(
                    c(S, t) ||
                    c(A, t) ||
                    c(t, A) ||
                    c(null == H ? void 0 : H.portalNode, t) ||
                    (null != t && t.hasAttribute(ae("focus-guard"))) ||
                    (z &&
                      (be(z.nodesRef.current, n).find((e) => {
                        var n, r;
                        return (
                          c(
                            null == (n = e.context)
                              ? void 0
                              : n.elements.floating,
                            t,
                          ) ||
                          c(
                            null == (r = e.context)
                              ? void 0
                              : r.elements.domReference,
                            t,
                          )
                        );
                      }) ||
                        ye(z.nodesRef.current, n).find((e) => {
                          var n, r, o;
                          return (
                            [
                              null == (n = e.context)
                                ? void 0
                                : n.elements.floating,
                              ze(
                                null == (r = e.context)
                                  ? void 0
                                  : r.elements.floating,
                              ),
                            ].includes(t) ||
                            (null == (o = e.context)
                              ? void 0
                              : o.elements.domReference) === t
                          );
                        })))
                  );
                if (m && r && u(v(Q)) === v(Q).body) {
                  (0, i.sb)(Q) && Q.focus();
                  const e = X.current,
                    t = G(),
                    n = t[e] || t[t.length - 1] || Q;
                  (0, i.sb)(n) && n.focus();
                }
                (!O && h) ||
                  !t ||
                  !r ||
                  Y.current ||
                  t === Je() ||
                  ((J.current = !0), k(!1, e, "focus-out"));
              });
            }
          }, [o, S, A, Q, h, z, H, k, E, m, G, O, P]);
        const te = r.useRef(null),
          ne = r.useRef(null),
          re = He([te, null == H ? void 0 : H.beforeInsideRef]),
          oe = He([ne, null == H ? void 0 : H.afterInsideRef]);
        function ie(e) {
          return !o && x && h
            ? (0, w.jsx)(Ke, {
                ref: "start" === e ? V : _,
                onClick: (e) => k(!1, e.nativeEvent),
                children: "string" == typeof x ? x : "Dismiss",
              })
            : null;
        }
        r.useEffect(() => {
          var e;
          if (o) return;
          if (!A) return;
          const t = Array.from(
              (null == H || null == (e = H.portalNode)
                ? void 0
                : e.querySelectorAll("[" + ae("portal") + "]")) || [],
            ),
            n =
              z && !h
                ? ye(null == z ? void 0 : z.nodesRef.current, P()).map((e) => {
                    var t;
                    return null == (t = e.context)
                      ? void 0
                      : t.elements.floating;
                  })
                : [],
            r = [
              A,
              ...t,
              ...n,
              V.current,
              _.current,
              te.current,
              ne.current,
              null == H ? void 0 : H.beforeOutsideRef.current,
              null == H ? void 0 : H.afterOutsideRef.current,
              F.current.includes("reference") || O ? S : null,
            ].filter((e) => null != e),
            i = h || O ? Te(r, !N, N) : Te(r);
          return () => {
            i();
          };
        }, [o, S, A, h, F, H, O, q, N, z, P]),
          Z(() => {
            if (o || !(0, i.sb)(Q)) return;
            const e = u(v(Q));
            queueMicrotask(() => {
              const t = ee(Q),
                n = B.current,
                r = ("number" == typeof n ? t[n] : n.current) || Q,
                o = c(Q, e);
              M || o || !L || he(r, { preventScroll: r === Q });
            });
          }, [o, L, Q, M, ee, B]),
          Z(() => {
            if (o || !Q) return;
            let e = !1,
              t = !1;
            const n = v(Q),
              r = u(n);
            let l = T.current.openEvent;
            function s(n) {
              let { open: r, reason: o, event: i, nested: u } = n;
              if (
                (r && (l = i),
                "escape-key" === o && (t = !0),
                ["hover", "safe-polygon"].includes(o) &&
                  "mouseleave" === i.type &&
                  (J.current = !0),
                "outside-press" === o)
              )
                if (u) (J.current = !1), (e = !0);
                else if (
                  (function (e) {
                    return (
                      !(0 !== e.mozInputSource || !e.isTrusted) ||
                      (d() && e.pointerType
                        ? "click" === e.type && 1 === e.buttons
                        : 0 === e.detail && !e.pointerType)
                    );
                  })(i) ||
                  a(i)
                )
                  J.current = !1;
                else {
                  let t = !1;
                  document.createElement("div").focus({
                    get preventScroll() {
                      return (t = !0), !1;
                    },
                  }),
                    t ? ((J.current = !1), (e = !0)) : (J.current = !0);
                }
            }
            !(function (e) {
              (_e = _e.filter((e) => e.isConnected)),
                e &&
                  "body" !== (0, i.mq)(e) &&
                  (_e.push(e), _e.length > Ve && (_e = _e.slice(-Ve)));
            })(r),
              C.on("openchange", s);
            const f = n.createElement("span");
            return (
              f.setAttribute("tabindex", "-1"),
              f.setAttribute("aria-hidden", "true"),
              Object.assign(f.style, qe),
              $ && S && S.insertAdjacentElement("afterend", f),
              () => {
                C.off("openchange", s);
                const r = u(n),
                  o =
                    c(A, r) ||
                    (z &&
                      be(z.nodesRef.current, P()).some((e) => {
                        var t;
                        return c(
                          null == (t = e.context)
                            ? void 0
                            : t.elements.floating,
                          r,
                        );
                      }));
                (o || (l && ["click", "mousedown"].includes(l.type))) &&
                  (t = !0);
                const a =
                  "boolean" == typeof j.current
                    ? t && S
                      ? S
                      : Je() || f
                    : j.current.current || f;
                queueMicrotask(() => {
                  const t = (function (e) {
                    const t = Se();
                    return U(e, t) ? e : W(e, t)[0] || e;
                  })(a);
                  j.current &&
                    !J.current &&
                    (0, i.sb)(t) &&
                    (t === r || r === n.body || o) &&
                    t.focus({ preventScroll: e }),
                    f.remove();
                });
              }
            );
          }, [o, A, Q, j, T, C, z, $, S, P]),
          r.useEffect(() => {
            queueMicrotask(() => {
              J.current = !1;
            });
          }, [o]),
          Z(() => {
            if (!o && H)
              return (
                H.setFocusManagerState({
                  modal: h,
                  closeOnFocusOut: E,
                  open: L,
                  onOpenChange: k,
                  domReference: S,
                }),
                () => {
                  H.setFocusManagerState(null);
                }
              );
          }, [o, H, h, L, k, E, S]),
          Z(() => {
            if (o) return;
            if (!Q) return;
            if ("function" != typeof MutationObserver) return;
            if (M) return;
            const e = () => {
              const e = Q.getAttribute("tabindex"),
                t = G(),
                n = u(v(A)),
                r = t.indexOf(n);
              -1 !== r && (X.current = r),
                F.current.includes("floating") || (n !== S && 0 === t.length)
                  ? "0" !== e && Q.setAttribute("tabindex", "0")
                  : "-1" !== e && Q.setAttribute("tabindex", "-1");
            };
            e();
            const t = new MutationObserver(e);
            return (
              t.observe(Q, { childList: !0, subtree: !0, attributes: !0 }),
              () => {
                t.disconnect();
              }
            );
          }, [o, A, Q, S, F, G, M]);
        const ue = !o && q && (!h || !O) && ($ || h);
        return (0, w.jsxs)(w.Fragment, {
          children: [
            ue &&
              (0, w.jsx)(Ne, {
                "data-type": "inside",
                ref: re,
                onFocus: (e) => {
                  if (h) {
                    const e = ee();
                    he("reference" === l[0] ? e[0] : e[e.length - 1]);
                  } else if (null != H && H.preserveTabOrder && H.portalNode)
                    if (((J.current = !1), Oe(e, H.portalNode))) {
                      const e = Pe() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = H.beforeOutsideRef.current) || t.focus();
                    }
                },
              }),
            !O && ie("start"),
            n,
            ie("end"),
            ue &&
              (0, w.jsx)(Ne, {
                "data-type": "inside",
                ref: oe,
                onFocus: (e) => {
                  if (h) he(ee()[0]);
                  else if (null != H && H.preserveTabOrder && H.portalNode)
                    if ((E && (J.current = !0), Oe(e, H.portalNode))) {
                      const e = Me() || S;
                      null == e || e.focus();
                    } else {
                      var t;
                      null == (t = H.afterOutsideRef.current) || t.focus();
                    }
                },
              }),
          ],
        });
      }
      function Xe(e) {
        return (0, i.sb)(e.target) && "BUTTON" === e.target.tagName;
      }
      function $e(e) {
        return y(e);
      }
      function Qe(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            dataRef: i,
            elements: { domReference: u },
          } = e,
          {
            enabled: c = !0,
            event: l = "click",
            toggle: s = !0,
            ignoreMouse: a = !1,
            keyboardHandlers: f = !0,
            stickIfOpen: d = !0,
          } = t,
          v = r.useRef(),
          m = r.useRef(!1),
          g = r.useMemo(
            () => ({
              onPointerDown(e) {
                v.current = e.pointerType;
              },
              onMouseDown(e) {
                const t = v.current;
                0 === e.button &&
                  "click" !== l &&
                  ((p(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "mousedown" !== i.current.openEvent.type)
                      ? (e.preventDefault(), o(!0, e.nativeEvent, "click"))
                      : o(!1, e.nativeEvent, "click")));
              },
              onClick(e) {
                const t = v.current;
                "mousedown" === l && v.current
                  ? (v.current = void 0)
                  : (p(t, !0) && a) ||
                    (!n ||
                    !s ||
                    (i.current.openEvent &&
                      d &&
                      "click" !== i.current.openEvent.type)
                      ? o(!0, e.nativeEvent, "click")
                      : o(!1, e.nativeEvent, "click"));
              },
              onKeyDown(e) {
                (v.current = void 0),
                  e.defaultPrevented ||
                    !f ||
                    Xe(e) ||
                    (" " !== e.key ||
                      $e(u) ||
                      (e.preventDefault(), (m.current = !0)),
                    "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"));
              },
              onKeyUp(e) {
                e.defaultPrevented ||
                  !f ||
                  Xe(e) ||
                  $e(u) ||
                  (" " === e.key &&
                    m.current &&
                    ((m.current = !1), o(!n || !s, e.nativeEvent, "click")));
              },
            }),
            [i, u, l, a, f, o, n, d, s],
          );
        return r.useMemo(() => (c ? { reference: g } : {}), [c, g]);
      }
      const Ze = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        Ge = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        et = (e) => {
          var t, n;
          return {
            escapeKey:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function tt(e, t) {
        void 0 === t && (t = {});
        const { open: n, onOpenChange: o, elements: u, dataRef: l } = e,
          {
            enabled: s = !0,
            escapeKey: a = !0,
            outsidePress: f = !0,
            outsidePressEvent: d = "pointerdown",
            referencePress: p = !1,
            referencePressEvent: h = "pointerdown",
            ancestorScroll: y = !1,
            bubbles: b,
            capture: w,
          } = t,
          x = se(),
          E = K("function" == typeof f ? f : () => !1),
          R = "function" == typeof f ? E : f,
          L = r.useRef(!1),
          k = r.useRef(!1),
          { escapeKey: C, outsidePress: T } = et(b),
          { escapeKey: S, outsidePress: A } = et(w),
          P = r.useRef(!1),
          M = K((e) => {
            var t;
            if (!n || !s || !a || "Escape" !== e.key) return;
            if (P.current) return;
            const r =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              i = x ? be(x.nodesRef.current, r) : [];
            if (!C && (e.stopPropagation(), i.length > 0)) {
              let e = !0;
              if (
                (i.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__escapeKeyBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(
              !1,
              (function (e) {
                return "nativeEvent" in e;
              })(e)
                ? e.nativeEvent
                : e,
              "escape-key",
            );
          }),
          O = K((e) => {
            var t;
            const n = () => {
              var t;
              M(e), null == (t = g(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = g(e)) || t.addEventListener("keydown", n);
          }),
          D = K((e) => {
            var t;
            const n = L.current;
            L.current = !1;
            const r = k.current;
            if (((k.current = !1), "click" === d && r)) return;
            if (n) return;
            if ("function" == typeof R && !R(e)) return;
            const s = g(e),
              a = "[" + ae("inert") + "]",
              f = v(u.floating).querySelectorAll(a);
            let p = (0, i.vq)(s) ? s : null;
            for (; p && !(0, i.eu)(p); ) {
              const e = (0, i.$4)(p);
              if ((0, i.eu)(e) || !(0, i.vq)(e)) break;
              p = e;
            }
            if (
              f.length &&
              (0, i.vq)(s) &&
              !s.matches("html,body") &&
              !c(s, u.floating) &&
              Array.from(f).every((e) => !c(p, e))
            )
              return;
            if ((0, i.sb)(s) && N) {
              const t = (0, i.eu)(s),
                n = (0, i.L9)(s),
                r = /auto|scroll/,
                o = t || r.test(n.overflowX),
                u = t || r.test(n.overflowY),
                c = o && s.clientWidth > 0 && s.scrollWidth > s.clientWidth,
                l = u && s.clientHeight > 0 && s.scrollHeight > s.clientHeight,
                a = "rtl" === n.direction,
                f =
                  l &&
                  (a
                    ? e.offsetX <= s.offsetWidth - s.clientWidth
                    : e.offsetX > s.clientWidth),
                d = c && e.offsetY > s.clientHeight;
              if (f || d) return;
            }
            const h =
                null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
              y =
                x &&
                be(x.nodesRef.current, h).some((t) => {
                  var n;
                  return m(
                    e,
                    null == (n = t.context) ? void 0 : n.elements.floating,
                  );
                });
            if (m(e, u.floating) || m(e, u.domReference) || y) return;
            const b = x ? be(x.nodesRef.current, h) : [];
            if (b.length > 0) {
              let e = !0;
              if (
                (b.forEach((t) => {
                  var n;
                  null == (n = t.context) ||
                    !n.open ||
                    t.context.dataRef.current.__outsidePressBubbles ||
                    (e = !1);
                }),
                !e)
              )
                return;
            }
            o(!1, e, "outside-press");
          }),
          I = K((e) => {
            var t;
            const n = () => {
              var t;
              D(e), null == (t = g(e)) || t.removeEventListener(d, n);
            };
            null == (t = g(e)) || t.addEventListener(d, n);
          });
        r.useEffect(() => {
          if (!n || !s) return;
          (l.current.__escapeKeyBubbles = C),
            (l.current.__outsidePressBubbles = T);
          let e = -1;
          function t(e) {
            o(!1, e, "ancestor-scroll");
          }
          function r() {
            window.clearTimeout(e), (P.current = !0);
          }
          function c() {
            e = window.setTimeout(
              () => {
                P.current = !1;
              },
              (0, i.Tc)() ? 5 : 0,
            );
          }
          const f = v(u.floating);
          a &&
            (f.addEventListener("keydown", S ? O : M, S),
            f.addEventListener("compositionstart", r),
            f.addEventListener("compositionend", c)),
            R && f.addEventListener(d, A ? I : D, A);
          let p = [];
          return (
            y &&
              ((0, i.vq)(u.domReference) && (p = (0, i.v9)(u.domReference)),
              (0, i.vq)(u.floating) && (p = p.concat((0, i.v9)(u.floating))),
              !(0, i.vq)(u.reference) &&
                u.reference &&
                u.reference.contextElement &&
                (p = p.concat((0, i.v9)(u.reference.contextElement)))),
            (p = p.filter((e) => {
              var t;
              return (
                e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
              );
            })),
            p.forEach((e) => {
              e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
              a &&
                (f.removeEventListener("keydown", S ? O : M, S),
                f.removeEventListener("compositionstart", r),
                f.removeEventListener("compositionend", c)),
                R && f.removeEventListener(d, A ? I : D, A),
                p.forEach((e) => {
                  e.removeEventListener("scroll", t);
                }),
                window.clearTimeout(e);
            }
          );
        }, [l, u, a, R, d, n, o, y, s, C, T, M, S, O, D, A, I]),
          r.useEffect(() => {
            L.current = !1;
          }, [R, d]);
        const q = r.useMemo(
            () => ({
              onKeyDown: M,
              ...(p && {
                [Ze[h]]: (e) => {
                  o(!1, e.nativeEvent, "reference-press");
                },
                ...("click" !== h && {
                  onClick(e) {
                    o(!1, e.nativeEvent, "reference-press");
                  },
                }),
              }),
            }),
            [M, o, p, h],
          ),
          N = r.useMemo(
            () => ({
              onKeyDown: M,
              onMouseDown() {
                k.current = !0;
              },
              onMouseUp() {
                k.current = !0;
              },
              [Ge[d]]: () => {
                L.current = !0;
              },
            }),
            [M, d],
          );
        return r.useMemo(
          () => (s ? { reference: q, floating: N } : {}),
          [s, q, N],
        );
      }
      function nt(e) {
        void 0 === e && (e = {});
        const { nodeId: t } = e,
          n = (function (e) {
            const { open: t = !1, onOpenChange: n, elements: o } = e,
              i = oe(),
              u = r.useRef({}),
              [c] = r.useState(() => ie()),
              l = null != le(),
              [s, a] = r.useState(o.reference),
              f = K((e, t, r) => {
                (u.current.openEvent = e ? t : void 0),
                  c.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: l,
                  }),
                  null == n || n(e, t, r);
              }),
              d = r.useMemo(() => ({ setPositionReference: a }), []),
              p = r.useMemo(
                () => ({
                  reference: s || o.reference || null,
                  floating: o.floating || null,
                  domReference: o.reference,
                }),
                [s, o.reference, o.floating],
              );
            return r.useMemo(
              () => ({
                dataRef: u,
                open: t,
                onOpenChange: f,
                elements: p,
                events: c,
                floatingId: i,
                refs: d,
              }),
              [t, f, p, c, i, d],
            );
          })({
            ...e,
            elements: { reference: null, floating: null, ...e.elements },
          }),
          o = e.rootContext || n,
          u = o.elements,
          [c, l] = r.useState(null),
          [s, a] = r.useState(null),
          f = (null == u ? void 0 : u.domReference) || c,
          d = r.useRef(null),
          p = se();
        Z(() => {
          f && (d.current = f);
        }, [f]);
        const v = (0, H.we)({
            ...e,
            elements: { ...u, ...(s && { reference: s }) },
          }),
          m = r.useCallback(
            (e) => {
              const t = (0, i.vq)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              a(t), v.refs.setReference(t);
            },
            [v.refs],
          ),
          g = r.useCallback(
            (e) => {
              ((0, i.vq)(e) || null === e) && ((d.current = e), l(e)),
                ((0, i.vq)(v.refs.reference.current) ||
                  null === v.refs.reference.current ||
                  (null !== e && !(0, i.vq)(e))) &&
                  v.refs.setReference(e);
            },
            [v.refs],
          ),
          h = r.useMemo(
            () => ({
              ...v.refs,
              setReference: g,
              setPositionReference: m,
              domReference: d,
            }),
            [v.refs, g, m],
          ),
          y = r.useMemo(
            () => ({ ...v.elements, domReference: f }),
            [v.elements, f],
          ),
          b = r.useMemo(
            () => ({ ...v, ...o, refs: h, elements: y, nodeId: t }),
            [v, h, y, t, o],
          );
        return (
          Z(() => {
            o.dataRef.current.floatingContext = b;
            const e =
              null == p ? void 0 : p.nodesRef.current.find((e) => e.id === t);
            e && (e.context = b);
          }),
          r.useMemo(
            () => ({ ...v, context: b, refs: h, elements: y }),
            [v, h, y, b],
          )
        );
      }
      function rt(e, t) {
        void 0 === t && (t = {});
        const {
            open: n,
            onOpenChange: o,
            events: s,
            dataRef: d,
            elements: p,
          } = e,
          { enabled: m = !0, visibleOnly: h = !0 } = t,
          b = r.useRef(!1),
          w = r.useRef(-1),
          x = r.useRef(!0);
        r.useEffect(() => {
          if (!m) return;
          const e = (0, i.zk)(p.domReference);
          function t() {
            !n &&
              (0, i.sb)(p.domReference) &&
              p.domReference === u(v(p.domReference)) &&
              (b.current = !0);
          }
          function r() {
            x.current = !0;
          }
          return (
            e.addEventListener("blur", t),
            e.addEventListener("keydown", r, !0),
            () => {
              e.removeEventListener("blur", t),
                e.removeEventListener("keydown", r, !0);
            }
          );
        }, [p.domReference, n, m]),
          r.useEffect(() => {
            if (m)
              return (
                s.on("openchange", e),
                () => {
                  s.off("openchange", e);
                }
              );
            function e(e) {
              let { reason: t } = e;
              ("reference-press" !== t && "escape-key" !== t) ||
                (b.current = !0);
            }
          }, [s, m]),
          r.useEffect(
            () => () => {
              fe(w);
            },
            [],
          );
        const E = r.useMemo(
          () => ({
            onPointerDown(e) {
              a(e.nativeEvent) || (x.current = !1);
            },
            onMouseLeave() {
              b.current = !1;
            },
            onFocus(e) {
              if (b.current) return;
              const t = g(e.nativeEvent);
              if (h && (0, i.vq)(t))
                try {
                  if (
                    f() &&
                    l().toLowerCase().startsWith("mac") &&
                    !navigator.maxTouchPoints
                  )
                    throw Error();
                  if (!t.matches(":focus-visible")) return;
                } catch (e) {
                  if (!x.current && !y(t)) return;
                }
              o(!0, e.nativeEvent, "focus");
            },
            onBlur(e) {
              b.current = !1;
              const t = e.relatedTarget,
                n = e.nativeEvent,
                r =
                  (0, i.vq)(t) &&
                  t.hasAttribute(ae("focus-guard")) &&
                  "outside" === t.getAttribute("data-type");
              w.current = window.setTimeout(() => {
                var e;
                const i = u(
                  p.domReference ? p.domReference.ownerDocument : document,
                );
                (t || i !== p.domReference) &&
                  (c(
                    null == (e = d.current.floatingContext)
                      ? void 0
                      : e.refs.floating.current,
                    i,
                  ) ||
                    c(p.domReference, i) ||
                    r ||
                    o(!1, n, "focus"));
              });
            },
          }),
          [d, p.domReference, o, h],
        );
        return r.useMemo(() => (m ? { reference: E } : {}), [m, E]);
      }
      const ot = "active",
        it = "selected";
      function ut(e, t, n) {
        const r = new Map(),
          o = "item" === n;
        let i = e;
        if (o && e) {
          const { [ot]: t, [it]: n, ...r } = e;
          i = r;
        }
        return {
          ...("floating" === n && { tabIndex: -1, [Ue]: "" }),
          ...i,
          ...t
            .map((t) => {
              const r = t ? t[n] : null;
              return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
              (e, t) =>
                t
                  ? (Object.entries(t).forEach((t) => {
                      let [n, i] = t;
                      var u;
                      (o && [ot, it].includes(n)) ||
                        (0 === n.indexOf("on")
                          ? (r.has(n) || r.set(n, []),
                            "function" == typeof i &&
                              (null == (u = r.get(n)) || u.push(i),
                              (e[n] = function () {
                                for (
                                  var e,
                                    t = arguments.length,
                                    o = new Array(t),
                                    i = 0;
                                  i < t;
                                  i++
                                )
                                  o[i] = arguments[i];
                                return null == (e = r.get(n))
                                  ? void 0
                                  : e
                                      .map((e) => e(...o))
                                      .find((e) => void 0 !== e);
                              })))
                          : (e[n] = i));
                    }),
                    e)
                  : e,
              {},
            ),
        };
      }
      function ct(e) {
        void 0 === e && (e = []);
        const t = e.map((e) => (null == e ? void 0 : e.reference)),
          n = e.map((e) => (null == e ? void 0 : e.floating)),
          o = e.map((e) => (null == e ? void 0 : e.item)),
          i = r.useCallback((t) => ut(t, e, "reference"), t),
          u = r.useCallback((t) => ut(t, e, "floating"), n),
          c = r.useCallback((t) => ut(t, e, "item"), o);
        return r.useMemo(
          () => ({
            getReferenceProps: i,
            getFloatingProps: u,
            getItemProps: c,
          }),
          [i, u, c],
        );
      }
      function lt(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, u = i - 1; e < i; u = e++) {
          const [i, c] = t[e] || [0, 0],
            [l, s] = t[u] || [0, 0];
          c >= r != s >= r &&
            n <= ((l - i) * (r - c)) / (s - c) + i &&
            (o = !o);
        }
        return o;
      }
      function st(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = 0.5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0,
        } = e;
        let o,
          u = !1,
          l = null,
          s = null,
          a = performance.now();
        const f = (e) => {
          let {
            x: n,
            y: f,
            placement: d,
            elements: p,
            onClose: v,
            nodeId: m,
            tree: h,
          } = e;
          return function (e) {
            function y() {
              clearTimeout(o), v();
            }
            if (
              (clearTimeout(o),
              !p.domReference ||
                !p.floating ||
                null == d ||
                null == n ||
                null == f)
            )
              return;
            const { clientX: b, clientY: w } = e,
              x = [b, w],
              E = g(e),
              R = "mouseleave" === e.type,
              L = c(p.floating, E),
              k = c(p.domReference, E),
              C = p.domReference.getBoundingClientRect(),
              T = p.floating.getBoundingClientRect(),
              S = d.split("-")[0],
              A = n > T.right - T.width / 2,
              P = f > T.bottom - T.height / 2,
              M = (function (e, t) {
                return (
                  e[0] >= t.x &&
                  e[0] <= t.x + t.width &&
                  e[1] >= t.y &&
                  e[1] <= t.y + t.height
                );
              })(x, C),
              O = T.width > C.width,
              D = T.height > C.height,
              I = (O ? C : T).left,
              q = (O ? C : T).right,
              N = (D ? C : T).top,
              F = (D ? C : T).bottom;
            if (L && ((u = !0), !R)) return;
            if ((k && (u = !1), k && !R)) return void (u = !0);
            if (
              R &&
              (0, i.vq)(e.relatedTarget) &&
              c(p.floating, e.relatedTarget)
            )
              return;
            if (
              h &&
              be(h.nodesRef.current, m).some((e) => {
                let { context: t } = e;
                return null == t ? void 0 : t.open;
              })
            )
              return;
            if (
              ("top" === S && f >= C.bottom - 1) ||
              ("bottom" === S && f <= C.top + 1) ||
              ("left" === S && n >= C.right - 1) ||
              ("right" === S && n <= C.left + 1)
            )
              return y();
            let B = [];
            switch (S) {
              case "top":
                B = [
                  [I, C.top + 1],
                  [I, T.bottom - 1],
                  [q, T.bottom - 1],
                  [q, C.top + 1],
                ];
                break;
              case "bottom":
                B = [
                  [I, T.top + 1],
                  [I, C.bottom - 1],
                  [q, C.bottom - 1],
                  [q, T.top + 1],
                ];
                break;
              case "left":
                B = [
                  [T.right - 1, F],
                  [T.right - 1, N],
                  [C.left + 1, N],
                  [C.left + 1, F],
                ];
                break;
              case "right":
                B = [
                  [C.right - 1, F],
                  [C.right - 1, N],
                  [T.left + 1, N],
                  [T.left + 1, F],
                ];
            }
            if (!lt([b, w], B)) {
              if (u && !M) return y();
              if (!R && r) {
                const t = (function (e, t) {
                  const n = performance.now(),
                    r = n - a;
                  if (null === l || null === s || 0 === r)
                    return (l = e), (s = t), (a = n), null;
                  const o = e - l,
                    i = t - s,
                    u = Math.sqrt(o * o + i * i);
                  return (l = e), (s = t), (a = n), u / r;
                })(e.clientX, e.clientY);
                if (null !== t && t < 0.1) return y();
              }
              lt(
                [b, w],
                (function (e) {
                  let [n, r] = e;
                  switch (S) {
                    case "top":
                      return [
                        [O ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        [O ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                        ...[
                          [T.left, A || O ? T.bottom - t : T.top],
                          [
                            T.right,
                            A ? (O ? T.bottom - t : T.top) : T.bottom - t,
                          ],
                        ],
                      ];
                    case "bottom":
                      return [
                        [O ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        [O ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                        ...[
                          [T.left, A || O ? T.top + t : T.bottom],
                          [T.right, A ? (O ? T.top + t : T.bottom) : T.top + t],
                        ],
                      ];
                    case "left": {
                      const e = [
                          n + t + 1,
                          D ? r + t / 2 : P ? r + 4 * t : r - 4 * t,
                        ],
                        o = [
                          n + t + 1,
                          D ? r - t / 2 : P ? r + 4 * t : r - 4 * t,
                        ];
                      return [
                        ...[
                          [P || D ? T.right - t : T.left, T.top],
                          [
                            P ? (D ? T.right - t : T.left) : T.right - t,
                            T.bottom,
                          ],
                        ],
                        e,
                        o,
                      ];
                    }
                    case "right":
                      return [
                        [n - t, D ? r + t / 2 : P ? r + 4 * t : r - 4 * t],
                        [n - t, D ? r - t / 2 : P ? r + 4 * t : r - 4 * t],
                        ...[
                          [P || D ? T.left + t : T.right, T.top],
                          [
                            P ? (D ? T.left + t : T.right) : T.left + t,
                            T.bottom,
                          ],
                        ],
                      ];
                  }
                })([n, f]),
              )
                ? !u && r && (o = window.setTimeout(y, 40))
                : y();
            }
          };
        };
        return (f.__options = { blockPointerEvents: n }), f;
      }
    },
    977: (e, t, n) => {
      function r() {
        return "undefined" != typeof window;
      }
      function o(e) {
        return c(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function i(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function u(e) {
        var t;
        return null ==
          (t = (c(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function c(e) {
        return !!r() && (e instanceof Node || e instanceof i(e).Node);
      }
      function l(e) {
        return !!r() && (e instanceof Element || e instanceof i(e).Element);
      }
      function s(e) {
        return (
          !!r() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
        );
      }
      function a(e) {
        return (
          !(!r() || "undefined" == typeof ShadowRoot) &&
          (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
        );
      }
      function f(e) {
        const { overflow: t, overflowX: n, overflowY: r, display: o } = y(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function d(e) {
        return ["table", "td", "th"].includes(o(e));
      }
      function p(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function v(e) {
        const t = g(),
          n = l(e) ? y(e) : e;
        return (
          ["transform", "translate", "scale", "rotate", "perspective"].some(
            (e) => !!n[e] && "none" !== n[e],
          ) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          [
            "transform",
            "translate",
            "scale",
            "rotate",
            "perspective",
            "filter",
          ].some((e) => (n.willChange || "").includes(e)) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e),
          )
        );
      }
      function m(e) {
        let t = w(e);
        for (; s(t) && !h(t); ) {
          if (v(t)) return t;
          if (p(t)) return null;
          t = w(t);
        }
        return null;
      }
      function g() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function h(e) {
        return ["html", "body", "#document"].includes(o(e));
      }
      function y(e) {
        return i(e).getComputedStyle(e);
      }
      function b(e) {
        return l(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function w(e) {
        if ("html" === o(e)) return e;
        const t = e.assignedSlot || e.parentNode || (a(e) && e.host) || u(e);
        return a(t) ? t.host : t;
      }
      function x(e) {
        const t = w(e);
        return h(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : s(t) && f(t)
            ? t
            : x(t);
      }
      function E(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = x(e),
          u = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          c = i(o);
        if (u) {
          const e = (function (e) {
            return e.parent && Object.getPrototypeOf(e.parent)
              ? e.frameElement
              : null;
          })(c);
          return t.concat(
            c,
            c.visualViewport || [],
            f(o) ? o : [],
            e && n ? E(e) : [],
          );
        }
        return t.concat(o, E(o, [], n));
      }
      n.d(t, {
        $4: () => w,
        CP: () => b,
        L9: () => y,
        Lv: () => d,
        Ng: () => a,
        Tc: () => g,
        ZU: () => f,
        ep: () => u,
        eu: () => h,
        gJ: () => m,
        mq: () => o,
        sQ: () => v,
        sb: () => s,
        v9: () => E,
        vq: () => l,
        zk: () => i,
      });
    },
    58015: (e, t, n) => {
      n.d(t, {
        B1: () => L,
        C0: () => d,
        Dz: () => h,
        Jx: () => c,
        LI: () => i,
        PG: () => v,
        RI: () => u,
        Sg: () => p,
        T9: () => o,
        TV: () => g,
        WJ: () => b,
        _3: () => f,
        bV: () => E,
        jk: () => r,
        lP: () => x,
        nI: () => R,
        qE: () => a,
        sq: () => m,
        w7: () => y,
      });
      const r = Math.min,
        o = Math.max,
        i = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        l = { left: "right", right: "left", bottom: "top", top: "bottom" },
        s = { start: "end", end: "start" };
      function a(e, t, n) {
        return o(e, r(t, n));
      }
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split("-")[0];
      }
      function p(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function g(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x";
      }
      function h(e) {
        return v(g(e));
      }
      function y(e, t, n) {
        void 0 === n && (n = !1);
        const r = p(e),
          o = h(e),
          i = m(o);
        let u =
          "x" === o
            ? r === (n ? "end" : "start")
              ? "right"
              : "left"
            : "start" === r
              ? "bottom"
              : "top";
        return t.reference[i] > t.floating[i] && (u = E(u)), [u, E(u)];
      }
      function b(e) {
        const t = E(e);
        return [w(e), t, w(t)];
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => s[e]);
      }
      function x(e, t, n, r) {
        const o = p(e);
        let i = (function (e, t, n) {
          const r = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            u = ["bottom", "top"];
          switch (e) {
            case "top":
            case "bottom":
              return n ? (t ? o : r) : t ? r : o;
            case "left":
            case "right":
              return t ? i : u;
            default:
              return [];
          }
        })(d(e), "start" === n, r);
        return (
          o && ((i = i.map((e) => e + "-" + o)), t && (i = i.concat(i.map(w)))),
          i
        );
      }
      function E(e) {
        return e.replace(/left|right|bottom|top/g, (e) => l[e]);
      }
      function R(e) {
        return "number" != typeof e
          ? (function (e) {
              return { top: 0, right: 0, bottom: 0, left: 0, ...e };
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function L(e) {
        const { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
    },
  },
]);
