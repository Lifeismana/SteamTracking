/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [616],
    {
      8083: (pt, H, B) => {
        B.d(H, {
          ll: () => jt,
          rD: () => zt,
          UU: () => Ft,
          cY: () => Vt,
          iD: () => Ct,
          BN: () => Bt,
          Ej: () => Wt,
        });
        var l = B(58015);
        function W(t, e, o) {
          let { reference: n, floating: i } = t;
          const r = (0, l.TV)(e),
            s = (0, l.Dz)(e),
            c = (0, l.sq)(s),
            f = (0, l.C0)(e),
            g = r === "y",
            p = n.x + n.width / 2 - i.width / 2,
            m = n.y + n.height / 2 - i.height / 2,
            h = n[c] / 2 - i[c] / 2;
          let a;
          switch (f) {
            case "top":
              a = { x: p, y: n.y - i.height };
              break;
            case "bottom":
              a = { x: p, y: n.y + n.height };
              break;
            case "right":
              a = { x: n.x + n.width, y: m };
              break;
            case "left":
              a = { x: n.x - i.width, y: m };
              break;
            default:
              a = { x: n.x, y: n.y };
          }
          const w = (0, l.Sg)(e);
          return (
            w && (a[s] += h * (w === "end" ? 1 : -1) * (o && g ? -1 : 1)), a
          );
        }
        async function E(t, e) {
          var o;
          e === void 0 && (e = {});
          const {
              x: n,
              y: i,
              platform: r,
              rects: s,
              elements: c,
              strategy: f,
            } = t,
            {
              boundary: g = "clippingAncestors",
              rootBoundary: p = "viewport",
              elementContext: m = "floating",
              altBoundary: h = !1,
              padding: a = 0,
            } = (0, l._3)(e, t),
            w = (0, l.nI)(a),
            v = c[h ? (m === "floating" ? "reference" : "floating") : m],
            b = (0, l.B1)(
              await r.getClippingRect({
                element:
                  (o = await (r.isElement == null ? void 0 : r.isElement(v))) ==
                    null || o
                    ? v
                    : v.contextElement ||
                      (await (r.getDocumentElement == null
                        ? void 0
                        : r.getDocumentElement(c.floating))),
                boundary: g,
                rootBoundary: p,
                strategy: f,
              }),
            ),
            O =
              m === "floating"
                ? {
                    x: n,
                    y: i,
                    width: s.floating.width,
                    height: s.floating.height,
                  }
                : s.reference,
            R = await (r.getOffsetParent == null
              ? void 0
              : r.getOffsetParent(c.floating)),
            P = ((await (r.isElement == null ? void 0 : r.isElement(R))) &&
              (await (r.getScale == null ? void 0 : r.getScale(R)))) || {
              x: 1,
              y: 1,
            },
            D = (0, l.B1)(
              r.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await r.convertOffsetParentRelativeRectToViewportRelativeRect(
                    { elements: c, rect: O, offsetParent: R, strategy: f },
                  )
                : O,
            );
          return {
            top: (b.top - D.top + w.top) / P.y,
            bottom: (D.bottom - b.bottom + w.bottom) / P.y,
            left: (b.left - D.left + w.left) / P.x,
            right: (D.right - b.right + w.right) / P.x,
          };
        }
        const T = 50,
          k = async (t, e, o) => {
            const {
                placement: n = "bottom",
                strategy: i = "absolute",
                middleware: r = [],
                platform: s,
              } = o,
              c = s.detectOverflow ? s : { ...s, detectOverflow: E },
              f = await (s.isRTL == null ? void 0 : s.isRTL(e));
            let g = await s.getElementRects({
                reference: t,
                floating: e,
                strategy: i,
              }),
              { x: p, y: m } = W(g, n, f),
              h = n,
              a = 0;
            const w = {};
            for (let x = 0; x < r.length; x++) {
              const v = r[x];
              if (!v) continue;
              const { name: b, fn: O } = v,
                {
                  x: R,
                  y: P,
                  data: D,
                  reset: A,
                } = await O({
                  x: p,
                  y: m,
                  initialPlacement: n,
                  placement: h,
                  strategy: i,
                  middlewareData: w,
                  rects: g,
                  platform: c,
                  elements: { reference: t, floating: e },
                });
              (p = R ?? p),
                (m = P ?? m),
                (w[b] = { ...w[b], ...D }),
                A &&
                  a < T &&
                  (a++,
                  typeof A == "object" &&
                    (A.placement && (h = A.placement),
                    A.rects &&
                      (g =
                        A.rects === !0
                          ? await s.getElementRects({
                              reference: t,
                              floating: e,
                              strategy: i,
                            })
                          : A.rects),
                    ({ x: p, y: m } = W(g, h, f))),
                  (x = -1));
            }
            return { x: p, y: m, placement: h, strategy: i, middlewareData: w };
          },
          V = (t) => ({
            name: "arrow",
            options: t,
            async fn(e) {
              const {
                  x: o,
                  y: n,
                  placement: i,
                  rects: r,
                  platform: s,
                  elements: c,
                  middlewareData: f,
                } = e,
                { element: g, padding: p = 0 } = evaluate(t, e) || {};
              if (g == null) return {};
              const m = getPaddingObject(p),
                h = { x: o, y: n },
                a = getAlignmentAxis(i),
                w = getAxisLength(a),
                x = await s.getDimensions(g),
                v = a === "y",
                b = v ? "top" : "left",
                O = v ? "bottom" : "right",
                R = v ? "clientHeight" : "clientWidth",
                P = r.reference[w] + r.reference[a] - h[a] - r.floating[w],
                D = h[a] - r.reference[a],
                A = await (s.getOffsetParent == null
                  ? void 0
                  : s.getOffsetParent(g));
              let L = A ? A[R] : 0;
              (!L ||
                !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
                (L = c.floating[R] || r.floating[w]);
              const F = P / 2 - D / 2,
                $ = L / 2 - x[w] / 2 - 1,
                S = min(m[b], $),
                I = min(m[O], $),
                et = L - x[w] - I,
                U = L / 2 - x[w] / 2 + F,
                G = clamp(S, U, et),
                gt =
                  !f.arrow &&
                  getAlignment(i) != null &&
                  U !== G &&
                  r.reference[w] / 2 - (U < S ? S : I) - x[w] / 2 < 0,
                nt = gt ? (U < S ? U - S : U - et) : 0;
              return {
                [a]: h[a] + nt,
                data: {
                  [a]: G,
                  centerOffset: U - G - nt,
                  ...(gt && { alignmentOffset: nt }),
                },
                reset: gt,
              };
            },
          });
        function j(t, e, o) {
          return (
            t
              ? [
                  ...o.filter((i) => getAlignment(i) === t),
                  ...o.filter((i) => getAlignment(i) !== t),
                ]
              : o.filter((i) => getSide(i) === i)
          ).filter((i) =>
            t
              ? getAlignment(i) === t ||
                (e ? getOppositeAlignmentPlacement(i) !== i : !1)
              : !0,
          );
        }
        const ot = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                name: "autoPlacement",
                options: t,
                async fn(e) {
                  var o, n, i;
                  const {
                      rects: r,
                      middlewareData: s,
                      placement: c,
                      platform: f,
                      elements: g,
                    } = e,
                    {
                      crossAxis: p = !1,
                      alignment: m,
                      allowedPlacements: h = placements,
                      autoAlignment: a = !0,
                      ...w
                    } = evaluate(t, e),
                    x =
                      m !== void 0 || h === placements ? j(m || null, a, h) : h,
                    v = ((o = s.autoPlacement) == null ? void 0 : o.index) || 0,
                    b = x[v];
                  if (b == null) return {};
                  if (c !== b) return { reset: { placement: x[0] } };
                  const O = await f.detectOverflow(e, w),
                    R = getAlignmentSides(
                      b,
                      r,
                      await (f.isRTL == null ? void 0 : f.isRTL(g.floating)),
                    ),
                    P = [O[getSide(b)], O[R[0]], O[R[1]]],
                    D = [
                      ...(((n = s.autoPlacement) == null
                        ? void 0
                        : n.overflows) || []),
                      { placement: b, overflows: P },
                    ],
                    A = x[v + 1];
                  if (A)
                    return {
                      data: { index: v + 1, overflows: D },
                      reset: { placement: A },
                    };
                  const L = D.map((S) => {
                      const I = getAlignment(S.placement);
                      return [
                        S.placement,
                        I && p
                          ? S.overflows.slice(0, 2).reduce((et, U) => et + U, 0)
                          : S.overflows[0],
                        S.overflows,
                      ];
                    }).sort((S, I) => S[1] - I[1]),
                    $ =
                      ((i = L.filter((S) =>
                        S[2]
                          .slice(0, getAlignment(S[0]) ? 2 : 3)
                          .every((I) => I <= 0),
                      )[0]) == null
                        ? void 0
                        : i[0]) || L[0][0];
                  return $ !== c
                    ? {
                        data: { index: v + 1, overflows: D },
                        reset: { placement: $ },
                      }
                    : {};
                },
              }
            );
          },
          ft = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                name: "flip",
                options: t,
                async fn(e) {
                  var o, n;
                  const {
                      placement: i,
                      middlewareData: r,
                      rects: s,
                      initialPlacement: c,
                      platform: f,
                      elements: g,
                    } = e,
                    {
                      mainAxis: p = !0,
                      crossAxis: m = !0,
                      fallbackPlacements: h,
                      fallbackStrategy: a = "bestFit",
                      fallbackAxisSideDirection: w = "none",
                      flipAlignment: x = !0,
                      ...v
                    } = (0, l._3)(t, e);
                  if ((o = r.arrow) != null && o.alignmentOffset) return {};
                  const b = (0, l.C0)(i),
                    O = (0, l.TV)(c),
                    R = (0, l.C0)(c) === c,
                    P = await (f.isRTL == null ? void 0 : f.isRTL(g.floating)),
                    D = h || (R || !x ? [(0, l.bV)(c)] : (0, l.WJ)(c)),
                    A = w !== "none";
                  !h && A && D.push(...(0, l.lP)(c, x, w, P));
                  const L = [c, ...D],
                    F = await f.detectOverflow(e, v),
                    $ = [];
                  let S = ((n = r.flip) == null ? void 0 : n.overflows) || [];
                  if ((p && $.push(F[b]), m)) {
                    const G = (0, l.w7)(i, s, P);
                    $.push(F[G[0]], F[G[1]]);
                  }
                  if (
                    ((S = [...S, { placement: i, overflows: $ }]),
                    !$.every((G) => G <= 0))
                  ) {
                    var I, et;
                    const G =
                        (((I = r.flip) == null ? void 0 : I.index) || 0) + 1,
                      gt = L[G];
                    if (
                      gt &&
                      (!(m === "alignment" ? O !== (0, l.TV)(gt) : !1) ||
                        S.every((Q) =>
                          (0, l.TV)(Q.placement) === O
                            ? Q.overflows[0] > 0
                            : !0,
                        ))
                    )
                      return {
                        data: { index: G, overflows: S },
                        reset: { placement: gt },
                      };
                    let nt =
                      (et = S.filter((ht) => ht.overflows[0] <= 0).sort(
                        (ht, Q) => ht.overflows[1] - Q.overflows[1],
                      )[0]) == null
                        ? void 0
                        : et.placement;
                    if (!nt)
                      switch (a) {
                        case "bestFit": {
                          var U;
                          const ht =
                            (U = S.filter((Q) => {
                              if (A) {
                                const lt = (0, l.TV)(Q.placement);
                                return lt === O || lt === "y";
                              }
                              return !0;
                            })
                              .map((Q) => [
                                Q.placement,
                                Q.overflows
                                  .filter((lt) => lt > 0)
                                  .reduce((lt, $t) => lt + $t, 0),
                              ])
                              .sort((Q, lt) => Q[1] - lt[1])[0]) == null
                              ? void 0
                              : U[0];
                          ht && (nt = ht);
                          break;
                        }
                        case "initialPlacement":
                          nt = c;
                          break;
                      }
                    if (i !== nt) return { reset: { placement: nt } };
                  }
                  return {};
                },
              }
            );
          };
        function wt(t, e) {
          return {
            top: t.top - e.height,
            right: t.right - e.width,
            bottom: t.bottom - e.height,
            left: t.left - e.width,
          };
        }
        function at(t) {
          return sides.some((e) => t[e] >= 0);
        }
        const yt = function (t) {
          return (
            t === void 0 && (t = {}),
            {
              name: "hide",
              options: t,
              async fn(e) {
                const { rects: o, platform: n } = e,
                  { strategy: i = "referenceHidden", ...r } = evaluate(t, e);
                switch (i) {
                  case "referenceHidden": {
                    const s = await n.detectOverflow(e, {
                        ...r,
                        elementContext: "reference",
                      }),
                      c = wt(s, o.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: c,
                        referenceHidden: at(c),
                      },
                    };
                  }
                  case "escaped": {
                    const s = await n.detectOverflow(e, {
                        ...r,
                        altBoundary: !0,
                      }),
                      c = wt(s, o.floating);
                    return { data: { escapedOffsets: c, escaped: at(c) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        };
        function it(t) {
          const e = min(...t.map((r) => r.left)),
            o = min(...t.map((r) => r.top)),
            n = max(...t.map((r) => r.right)),
            i = max(...t.map((r) => r.bottom));
          return { x: e, y: o, width: n - e, height: i - o };
        }
        function J(t) {
          const e = t.slice().sort((i, r) => i.y - r.y),
            o = [];
          let n = null;
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            !n || r.y - n.y > n.height / 2
              ? o.push([r])
              : o[o.length - 1].push(r),
              (n = r);
          }
          return o.map((i) => rectToClientRect(it(i)));
        }
        const ut = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                name: "inline",
                options: t,
                async fn(e) {
                  const {
                      placement: o,
                      elements: n,
                      rects: i,
                      platform: r,
                      strategy: s,
                    } = e,
                    { padding: c = 2, x: f, y: g } = evaluate(t, e),
                    p = Array.from(
                      (await (r.getClientRects == null
                        ? void 0
                        : r.getClientRects(n.reference))) || [],
                    );
                  if (!p.length) return {};
                  const m = J(p),
                    h = rectToClientRect(it(p)),
                    a = getPaddingObject(c);
                  function w() {
                    if (
                      m.length === 2 &&
                      (m[0].left > m[1].right || m[1].left > m[0].right) &&
                      f != null &&
                      g != null
                    )
                      return (
                        m.find(
                          (v) =>
                            f > v.left - a.left &&
                            f < v.right + a.right &&
                            g > v.top - a.top &&
                            g < v.bottom + a.bottom,
                        ) || h
                      );
                    if (m.length >= 2) {
                      if (getSideAxis(o) === "y") {
                        const A = m[0],
                          L = m[m.length - 1],
                          F = getSide(o) === "top",
                          $ = A.top,
                          S = L.bottom,
                          I = F ? A.left : L.left,
                          et = F ? A.right : L.right;
                        return rectToClientRect({
                          x: I,
                          y: $,
                          width: et - I,
                          height: S - $,
                        });
                      }
                      const v = getSide(o) === "left",
                        b = max(...m.map((A) => A.right)),
                        O = min(...m.map((A) => A.left)),
                        R = m.filter((A) => (v ? A.left === O : A.right === b)),
                        P = R[0].top,
                        D = R[R.length - 1].bottom;
                      return rectToClientRect({
                        x: O,
                        y: P,
                        width: b - O,
                        height: D - P,
                      });
                    }
                    return h;
                  }
                  const x = await r.getElementRects({
                    reference: { getBoundingClientRect: w },
                    floating: n.floating,
                    strategy: s,
                  });
                  return i.reference.x !== x.reference.x ||
                    i.reference.y !== x.reference.y ||
                    i.reference.width !== x.reference.width ||
                    i.reference.height !== x.reference.height
                    ? { reset: { rects: x } }
                    : {};
                },
              }
            );
          },
          rt = new Set(["left", "top"]);
        async function xt(t, e) {
          const { placement: o, platform: n, elements: i } = t,
            r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)),
            s = (0, l.C0)(o),
            c = (0, l.Sg)(o),
            f = (0, l.TV)(o) === "y",
            g = rt.has(s) ? -1 : 1,
            p = r && f ? -1 : 1,
            m = (0, l._3)(e, t);
          let {
            mainAxis: h,
            crossAxis: a,
            alignmentAxis: w,
          } = typeof m == "number"
            ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: m.mainAxis || 0,
                crossAxis: m.crossAxis || 0,
                alignmentAxis: m.alignmentAxis,
              };
          return (
            c && typeof w == "number" && (a = c === "end" ? w * -1 : w),
            f ? { x: a * p, y: h * g } : { x: h * g, y: a * p }
          );
        }
        const vt = function (t) {
            return (
              t === void 0 && (t = 0),
              {
                name: "offset",
                options: t,
                async fn(e) {
                  var o, n;
                  const { x: i, y: r, placement: s, middlewareData: c } = e,
                    f = await xt(e, t);
                  return s ===
                    ((o = c.offset) == null ? void 0 : o.placement) &&
                    (n = c.arrow) != null &&
                    n.alignmentOffset
                    ? {}
                    : { x: i + f.x, y: r + f.y, data: { ...f, placement: s } };
                },
              }
            );
          },
          dt = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                name: "shift",
                options: t,
                async fn(e) {
                  const { x: o, y: n, placement: i, platform: r } = e,
                    {
                      mainAxis: s = !0,
                      crossAxis: c = !1,
                      limiter: f = {
                        fn: (O) => {
                          let { x: R, y: P } = O;
                          return { x: R, y: P };
                        },
                      },
                      ...g
                    } = (0, l._3)(t, e),
                    p = { x: o, y: n },
                    m = await r.detectOverflow(e, g),
                    h = (0, l.TV)(i),
                    a = (0, l.PG)(h);
                  let w = p[a],
                    x = p[h];
                  const v = (O, R) =>
                    (0, l.qE)(
                      R + m[O === "y" ? "top" : "left"],
                      R,
                      R - m[O === "y" ? "bottom" : "right"],
                    );
                  s && (w = v(a, w)), c && (x = v(h, x));
                  const b = f.fn({ ...e, [a]: w, [h]: x });
                  return {
                    ...b,
                    data: {
                      x: b.x - o,
                      y: b.y - n,
                      enabled: { [a]: s, [h]: c },
                    },
                  };
                },
              }
            );
          },
          st = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                options: t,
                fn(e) {
                  var o, n;
                  const {
                      x: i,
                      y: r,
                      placement: s,
                      rects: c,
                      middlewareData: f,
                    } = e,
                    {
                      offset: g = 0,
                      mainAxis: p = !0,
                      crossAxis: m = !0,
                    } = evaluate(t, e),
                    h = { x: i, y: r },
                    a = getSideAxis(s),
                    w = getOppositeAxis(a);
                  let x = h[w],
                    v = h[a];
                  const b = evaluate(g, e),
                    O =
                      typeof b == "number"
                        ? { mainAxis: b, crossAxis: 0 }
                        : {
                            mainAxis: (o = b.mainAxis) != null ? o : 0,
                            crossAxis: (n = b.crossAxis) != null ? n : 0,
                          };
                  if (p) {
                    const D = w === "y" ? "height" : "width",
                      A = c.reference[w] - c.floating[D] + O.mainAxis,
                      L = c.reference[w] + c.reference[D] - O.mainAxis;
                    x < A ? (x = A) : x > L && (x = L);
                  }
                  if (m) {
                    var R, P;
                    const D = w === "y" ? "width" : "height",
                      A = rt.has(getSide(s)),
                      L =
                        c.reference[a] -
                        c.floating[D] +
                        ((A && ((R = f.offset) == null ? void 0 : R[a])) || 0) +
                        (A ? 0 : O.crossAxis),
                      F =
                        c.reference[a] +
                        c.reference[D] +
                        (A
                          ? 0
                          : ((P = f.offset) == null ? void 0 : P[a]) || 0) -
                        (A ? O.crossAxis : 0);
                    v < L ? (v = L) : v > F && (v = F);
                  }
                  return { [w]: x, [a]: v };
                },
              }
            );
          },
          bt = function (t) {
            return (
              t === void 0 && (t = {}),
              {
                name: "size",
                options: t,
                async fn(e) {
                  const {
                      placement: o,
                      rects: n,
                      platform: i,
                      elements: r,
                    } = e,
                    { apply: s = () => {}, ...c } = (0, l._3)(t, e),
                    f = await i.detectOverflow(e, c),
                    g = (0, l.C0)(o),
                    p = (0, l.Sg)(o),
                    m = (0, l.TV)(o) === "y",
                    { width: h, height: a } = n.floating;
                  let w, x;
                  g === "top" || g === "bottom"
                    ? ((w = g),
                      (x =
                        p ===
                        ((await (i.isRTL == null
                          ? void 0
                          : i.isRTL(r.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((x = g), (w = p === "end" ? "top" : "bottom"));
                  const v = a - f.top - f.bottom,
                    b = h - f.left - f.right,
                    O = (0, l.jk)(a - f[w], v),
                    R = (0, l.jk)(h - f[x], b),
                    P = e.middlewareData.shift,
                    D = !P;
                  let A = O,
                    L = R;
                  P != null && P.enabled.x && (L = b),
                    P != null && P.enabled.y && (A = v),
                    D &&
                      !p &&
                      (m
                        ? (L = h - 2 * (0, l.T9)(f.left, f.right))
                        : (A = a - 2 * (0, l.T9)(f.top, f.bottom))),
                    await s({ ...e, availableWidth: L, availableHeight: A });
                  const F = await i.getDimensions(r.floating);
                  return h !== F.width || a !== F.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          };
        var u = B(977);
        function mt(t) {
          const e = (0, u.L9)(t);
          let o = parseFloat(e.width) || 0,
            n = parseFloat(e.height) || 0;
          const i = (0, u.sb)(t),
            r = i ? t.offsetWidth : o,
            s = i ? t.offsetHeight : n,
            c = (0, l.LI)(o) !== r || (0, l.LI)(n) !== s;
          return c && ((o = r), (n = s)), { width: o, height: n, $: c };
        }
        function tt(t) {
          return (0, u.vq)(t) ? t : t.contextElement;
        }
        function Y(t) {
          const e = tt(t);
          if (!(0, u.sb)(e)) return (0, l.Jx)(1);
          const o = e.getBoundingClientRect(),
            { width: n, height: i, $: r } = mt(e);
          let s = (r ? (0, l.LI)(o.width) : o.width) / n,
            c = (r ? (0, l.LI)(o.height) : o.height) / i;
          return (
            (!s || !Number.isFinite(s)) && (s = 1),
            (!c || !Number.isFinite(c)) && (c = 1),
            { x: s, y: c }
          );
        }
        const d = (0, l.Jx)(0);
        function _(t) {
          const e = (0, u.zk)(t);
          return !(0, u.Tc)() || !e.visualViewport
            ? d
            : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
        }
        function Z(t, e, o) {
          return e === void 0 && (e = !1), !!o && e && o === (0, u.zk)(t);
        }
        function N(t, e, o, n) {
          e === void 0 && (e = !1), o === void 0 && (o = !1);
          const i = t.getBoundingClientRect(),
            r = tt(t);
          let s = (0, l.Jx)(1);
          e && (n ? (0, u.vq)(n) && (s = Y(n)) : (s = Y(t)));
          const c = Z(r, o, n) ? _(r) : (0, l.Jx)(0);
          let f = (i.left + c.x) / s.x,
            g = (i.top + c.y) / s.y,
            p = i.width / s.x,
            m = i.height / s.y;
          if (r && n) {
            const h = (0, u.zk)(r),
              a = (0, u.vq)(n) ? (0, u.zk)(n) : n;
            let w = h,
              x = (0, u._m)(w);
            for (; x && a !== w; ) {
              const v = Y(x),
                b = x.getBoundingClientRect(),
                O = (0, u.L9)(x),
                R = b.left + (x.clientLeft + parseFloat(O.paddingLeft)) * v.x,
                P = b.top + (x.clientTop + parseFloat(O.paddingTop)) * v.y;
              (f *= v.x),
                (g *= v.y),
                (p *= v.x),
                (m *= v.y),
                (f += R),
                (g += P),
                (w = (0, u.zk)(x)),
                (x = (0, u._m)(w));
            }
          }
          return (0, l.B1)({ width: p, height: m, x: f, y: g });
        }
        function z(t, e) {
          const o = (0, u.CP)(t).scrollLeft;
          return e ? e.left + o : N((0, u.ep)(t)).left + o;
        }
        function y(t, e) {
          const o = t.getBoundingClientRect(),
            n = o.left + e.scrollLeft - z(t, o),
            i = o.top + e.scrollTop;
          return { x: n, y: i };
        }
        function C(t) {
          let { elements: e, rect: o, offsetParent: n, strategy: i } = t;
          const r = i === "fixed",
            s = (0, u.ep)(n),
            c = e ? (0, u.Tf)(e.floating) : !1;
          if (n === s || (c && r)) return o;
          let f = { scrollLeft: 0, scrollTop: 0 },
            g = (0, l.Jx)(1);
          const p = (0, l.Jx)(0),
            m = (0, u.sb)(n);
          if (
            (m || !r) &&
            (((0, u.mq)(n) !== "body" || (0, u.ZU)(s)) && (f = (0, u.CP)(n)), m)
          ) {
            const a = N(n);
            (g = Y(n)), (p.x = a.x + n.clientLeft), (p.y = a.y + n.clientTop);
          }
          const h = s && !m && !r ? y(s, f) : (0, l.Jx)(0);
          return {
            width: o.width * g.x,
            height: o.height * g.y,
            x: o.x * g.x - f.scrollLeft * g.x + p.x + h.x,
            y: o.y * g.y - f.scrollTop * g.y + p.y + h.y,
          };
        }
        function M(t) {
          return t.getClientRects ? Array.from(t.getClientRects()) : [];
        }
        function X(t) {
          const e = (0, u.CP)(t),
            o = t.ownerDocument.body,
            n = (0, l.T9)(
              t.scrollWidth,
              t.clientWidth,
              o.scrollWidth,
              o.clientWidth,
            ),
            i = (0, l.T9)(
              t.scrollHeight,
              t.clientHeight,
              o.scrollHeight,
              o.clientHeight,
            );
          let r = -e.scrollLeft + z(t);
          const s = -e.scrollTop;
          return (
            (0, u.L9)(o).direction === "rtl" &&
              (r += (0, l.T9)(t.clientWidth, o.clientWidth) - n),
            { width: n, height: i, x: r, y: s }
          );
        }
        const q = 25;
        function K(t, e, o) {
          o === void 0 && (o = "viewport");
          const n = o === "layoutViewport",
            i = (0, u.zk)(t),
            r = (0, u.ep)(t),
            s = i.visualViewport;
          let c = r.clientWidth,
            f = r.clientHeight,
            g = 0,
            p = 0;
          if (s) {
            const h = !(0, u.Tc)() || e === "fixed";
            n
              ? h || ((g = -s.offsetLeft), (p = -s.offsetTop))
              : ((c = s.width),
                (f = s.height),
                h && ((g = s.offsetLeft), (p = s.offsetTop)));
          }
          if (z(r) <= 0) {
            const h = r.ownerDocument,
              a = h.body,
              w = getComputedStyle(a),
              x =
                (h.compatMode === "CSS1Compat" &&
                  parseFloat(w.marginLeft) + parseFloat(w.marginRight)) ||
                0,
              v = Math.abs(r.clientWidth - a.clientWidth - x),
              b =
                getComputedStyle(r).scrollbarGutter === "stable both-edges"
                  ? v / 2
                  : v;
            b <= q && (c -= b);
          }
          return { width: c, height: f, x: g, y: p };
        }
        function ct(t, e) {
          const o = N(t, !0, e === "fixed"),
            n = o.top + t.clientTop,
            i = o.left + t.clientLeft,
            r = Y(t),
            s = t.clientWidth * r.x,
            c = t.clientHeight * r.y,
            f = i * r.x,
            g = n * r.y;
          return { width: s, height: c, x: f, y: g };
        }
        function At(t, e, o) {
          let n;
          if (e === "viewport" || e === "layoutViewport") n = K(t, o, e);
          else if (e === "document") n = X((0, u.ep)(t));
          else if ((0, u.vq)(e)) n = ct(e, o);
          else {
            const i = _(t);
            n = {
              x: e.x - i.x,
              y: e.y - i.y,
              width: e.width,
              height: e.height,
            };
          }
          return (0, l.B1)(n);
        }
        function Tt(t, e) {
          const o = e.get(t);
          if (o) return o;
          let n = (0, u.v9)(t, [], !1).filter(
              (c) => (0, u.vq)(c) && (0, u.mq)(c) !== "body",
            ),
            i = null;
          const r = (0, u.L9)(t).position === "fixed";
          let s = r ? (0, u.$4)(t) : t;
          for (; (0, u.vq)(s) && !(0, u.eu)(s); ) {
            const c = (0, u.L9)(s),
              f = (0, u.sQ)(s),
              g = i ? i.position : r ? "fixed" : "";
            !f &&
            (g === "fixed" || (g === "absolute" && c.position === "static"))
              ? (n = n.filter((m) => m !== s))
              : (i = c),
              (s = (0, u.$4)(s));
          }
          return e.set(t, n), n;
        }
        function St(t) {
          let { element: e, boundary: o, rootBoundary: n, strategy: i } = t;
          const s = [
              ...(o === "clippingAncestors"
                ? (0, u.Tf)(e)
                  ? []
                  : Tt(e, this._c)
                : [].concat(o)),
              n,
            ],
            c = At(e, s[0], i);
          let f = c.top,
            g = c.right,
            p = c.bottom,
            m = c.left;
          for (let h = 1; h < s.length; h++) {
            const a = At(e, s[h], i);
            (f = (0, l.T9)(a.top, f)),
              (g = (0, l.jk)(a.right, g)),
              (p = (0, l.jk)(a.bottom, p)),
              (m = (0, l.T9)(a.left, m));
          }
          return { width: g - m, height: p - f, x: m, y: f };
        }
        function Lt(t) {
          const { width: e, height: o } = mt(t);
          return { width: e, height: o };
        }
        function Et(t, e, o) {
          const n = (0, u.sb)(e),
            i = (0, u.ep)(e),
            r = o === "fixed",
            s = N(t, !0, r, e);
          let c = { scrollLeft: 0, scrollTop: 0 };
          const f = (0, l.Jx)(0);
          if (
            (n || !r) &&
            (((0, u.mq)(e) !== "body" || (0, u.ZU)(i)) && (c = (0, u.CP)(e)), n)
          ) {
            const h = N(e, !0, r, e);
            (f.x = h.x + e.clientLeft), (f.y = h.y + e.clientTop);
          }
          !n && i && (f.x = z(i));
          const g = i && !n && !r ? y(i, c) : (0, l.Jx)(0),
            p = s.left + c.scrollLeft - f.x - g.x,
            m = s.top + c.scrollTop - f.y - g.y;
          return { x: p, y: m, width: s.width, height: s.height };
        }
        function _t(t) {
          return (0, u.L9)(t).position === "static";
        }
        function Ot(t, e) {
          if (!(0, u.sb)(t) || (0, u.L9)(t).position === "fixed") return null;
          if (e) return e(t);
          let o = t.offsetParent;
          return (0, u.ep)(t) === o && (o = o.ownerDocument.body), o;
        }
        function Rt(t, e) {
          const o = (0, u.zk)(t);
          if ((0, u.Tf)(t)) return o;
          if (!(0, u.sb)(t)) {
            let i = (0, u.$4)(t);
            for (; i && !(0, u.eu)(i); ) {
              if ((0, u.vq)(i) && !_t(i)) return i;
              i = (0, u.$4)(i);
            }
            return o;
          }
          let n = Ot(t, e);
          for (; n && (0, u.Lv)(n) && _t(n); ) n = Ot(n, e);
          return n && (0, u.eu)(n) && _t(n) && !(0, u.sQ)(n)
            ? o
            : n || (0, u.gJ)(t) || o;
        }
        const Dt = async function (t) {
          const e = this.getOffsetParent || Rt,
            o = this.getDimensions,
            n = await o(t.floating);
          return {
            reference: Et(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: n.width, height: n.height },
          };
        };
        function kt(t) {
          return (0, u.L9)(t).direction === "rtl";
        }
        const Ct = {
          convertOffsetParentRelativeRectToViewportRelativeRect: C,
          getDocumentElement: u.ep,
          getClippingRect: St,
          getOffsetParent: Rt,
          getElementRects: Dt,
          getClientRects: M,
          getDimensions: Lt,
          getScale: Y,
          isElement: u.vq,
          isRTL: kt,
        };
        function Pt(t, e) {
          return (
            t.x === e.x &&
            t.y === e.y &&
            t.width === e.width &&
            t.height === e.height
          );
        }
        function Mt(t, e, o) {
          let n = null,
            i;
          const r = (0, u.ep)(t);
          function s() {
            var p;
            clearTimeout(i), (p = n) == null || p.disconnect(), (n = null);
          }
          function c(p, m) {
            p === void 0 && (p = !1), m === void 0 && (m = 1), s();
            const h = t.getBoundingClientRect(),
              { left: a, top: w, width: x, height: v } = h;
            if ((p || e(), !x || !v)) return;
            const b = (0, l.RI)(w),
              O = (0, l.RI)(r.clientWidth - (a + x)),
              R = (0, l.RI)(r.clientHeight - (w + v)),
              P = (0, l.RI)(a),
              A = {
                rootMargin: -b + "px " + -O + "px " + -R + "px " + -P + "px",
                threshold: (0, l.T9)(0, (0, l.jk)(1, m)) || 1,
              };
            let L = !0;
            function F($) {
              const S = $[0].intersectionRatio;
              if (!Pt(h, t.getBoundingClientRect())) return c();
              if (S !== m) {
                if (!L) return c();
                S
                  ? c(!1, S)
                  : (i = setTimeout(() => {
                      c(!1, 1e-7);
                    }, 1e3));
              }
              L = !1;
            }
            try {
              n = new IntersectionObserver(F, { ...A, root: r.ownerDocument });
            } catch {
              n = new IntersectionObserver(F, A);
            }
            n.observe(t);
          }
          const f = (0, u.zk)(t),
            g = () => c(o);
          return (
            f.addEventListener("resize", g),
            c(!0),
            () => {
              f.removeEventListener("resize", g), s();
            }
          );
        }
        function jt(t, e, o, n) {
          n === void 0 && (n = {});
          const {
              ancestorScroll: i = !0,
              ancestorResize: r = !0,
              elementResize: s = typeof ResizeObserver == "function",
              layoutShift: c = typeof IntersectionObserver == "function",
              animationFrame: f = !1,
            } = n,
            g = tt(t),
            p =
              i || r
                ? [...(g ? (0, u.v9)(g) : []), ...(e ? (0, u.v9)(e) : [])]
                : [];
          p.forEach((b) => {
            i && b.addEventListener("scroll", o),
              r && b.addEventListener("resize", o);
          });
          const m = g && c ? Mt(g, o, r) : null;
          let h = -1,
            a = null;
          s &&
            ((a = new ResizeObserver((b) => {
              let [O] = b;
              O &&
                O.target === g &&
                a &&
                e &&
                (a.unobserve(e),
                cancelAnimationFrame(h),
                (h = requestAnimationFrame(() => {
                  var R;
                  (R = a) == null || R.observe(e);
                }))),
                o();
            })),
            g && !f && a.observe(g),
            e && a.observe(e));
          let w,
            x = f ? N(t) : null;
          f && v();
          function v() {
            const b = N(t);
            x && !Pt(x, b) && o(), (x = b), (w = requestAnimationFrame(v));
          }
          return (
            o(),
            () => {
              var b;
              p.forEach((O) => {
                i && O.removeEventListener("scroll", o),
                  r && O.removeEventListener("resize", o);
              }),
                m?.(),
                (b = a) == null || b.disconnect(),
                (a = null),
                f && cancelAnimationFrame(w);
            }
          );
        }
        const Nt = null,
          Vt = vt,
          It = null,
          Bt = dt,
          Ft = ft,
          Wt = bt,
          Ht = null,
          qt = null,
          Jt = null,
          Xt = null,
          zt = (t, e, o) => {
            const n = new Map(),
              i = o ?? {},
              r = { ...Ct, ...i.platform, _c: n };
            return k(t, e, { ...i, platform: r });
          };
      },
      977: (pt, H, B) => {
        B.d(H, {
          $4: () => u,
          CP: () => bt,
          L9: () => st,
          Lv: () => wt,
          Ng: () => ot,
          Tc: () => vt,
          Tf: () => at,
          ZU: () => ft,
          _m: () => Y,
          ep: () => T,
          eu: () => dt,
          gJ: () => xt,
          mq: () => W,
          sQ: () => rt,
          sb: () => j,
          v9: () => tt,
          vq: () => V,
          zk: () => E,
        });
        function l() {
          return typeof window < "u";
        }
        function W(d) {
          return k(d) ? (d.nodeName || "").toLowerCase() : "#document";
        }
        function E(d) {
          var _;
          return (
            (d == null || (_ = d.ownerDocument) == null
              ? void 0
              : _.defaultView) || window
          );
        }
        function T(d) {
          var _;
          return (_ =
            (k(d) ? d.ownerDocument : d.document) || window.document) == null
            ? void 0
            : _.documentElement;
        }
        function k(d) {
          return l() ? d instanceof Node || d instanceof E(d).Node : !1;
        }
        function V(d) {
          return l() ? d instanceof Element || d instanceof E(d).Element : !1;
        }
        function j(d) {
          return l()
            ? d instanceof HTMLElement || d instanceof E(d).HTMLElement
            : !1;
        }
        function ot(d) {
          return !l() || typeof ShadowRoot > "u"
            ? !1
            : d instanceof ShadowRoot || d instanceof E(d).ShadowRoot;
        }
        function ft(d) {
          const { overflow: _, overflowX: Z, overflowY: N, display: z } = st(d);
          return (
            /auto|scroll|overlay|hidden|clip/.test(_ + N + Z) &&
            z !== "inline" &&
            z !== "contents"
          );
        }
        function wt(d) {
          return /^(table|td|th)$/.test(W(d));
        }
        function at(d) {
          try {
            if (d.matches(":popover-open")) return !0;
          } catch {}
          try {
            return d.matches(":modal");
          } catch {
            return !1;
          }
        }
        const yt = /transform|translate|scale|rotate|perspective|filter/,
          it = /paint|layout|strict|content/,
          J = (d) => !!d && d !== "none";
        let ut;
        function rt(d) {
          const _ = V(d) ? st(d) : d;
          return (
            J(_.transform) ||
            J(_.translate) ||
            J(_.scale) ||
            J(_.rotate) ||
            J(_.perspective) ||
            (!vt() && (J(_.backdropFilter) || J(_.filter))) ||
            yt.test(_.willChange || "") ||
            it.test(_.contain || "")
          );
        }
        function xt(d) {
          let _ = u(d);
          for (; j(_) && !dt(_); ) {
            if (rt(_)) return _;
            if (at(_)) return null;
            _ = u(_);
          }
          return null;
        }
        function vt() {
          return (
            ut == null &&
              (ut =
                typeof CSS < "u" &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            ut
          );
        }
        function dt(d) {
          return /^(html|body|#document)$/.test(W(d));
        }
        function st(d) {
          return E(d).getComputedStyle(d);
        }
        function bt(d) {
          return V(d)
            ? { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop }
            : { scrollLeft: d.scrollX, scrollTop: d.scrollY };
        }
        function u(d) {
          if (W(d) === "html") return d;
          const _ = d.assignedSlot || d.parentNode || (ot(d) && d.host) || T(d);
          return ot(_) ? _.host : _;
        }
        function mt(d) {
          const _ = u(d);
          return dt(_)
            ? (d.ownerDocument || d).body
            : j(_) && ft(_)
              ? _
              : mt(_);
        }
        function tt(d, _, Z) {
          var N;
          _ === void 0 && (_ = []), Z === void 0 && (Z = !0);
          const z = mt(d),
            y = z === ((N = d.ownerDocument) == null ? void 0 : N.body),
            C = E(z);
          if (y) {
            const M = Y(C);
            return _.concat(
              C,
              C.visualViewport || [],
              ft(z) ? z : [],
              M && Z ? tt(M) : [],
            );
          } else return _.concat(z, tt(z, [], Z));
        }
        function Y(d) {
          return d.parent && Object.getPrototypeOf(d.parent)
            ? d.frameElement
            : null;
        }
      },
      58015: (pt, H, B) => {
        B.d(H, {
          B1: () => z,
          C0: () => yt,
          Dz: () => xt,
          Jx: () => ot,
          LI: () => V,
          PG: () => J,
          RI: () => j,
          Sg: () => it,
          T9: () => k,
          TV: () => rt,
          WJ: () => dt,
          _3: () => at,
          bV: () => _,
          jk: () => T,
          lP: () => d,
          nI: () => N,
          qE: () => wt,
          sq: () => ut,
          w7: () => vt,
        });
        const l = null,
          W = null,
          E = null,
          T = Math.min,
          k = Math.max,
          V = Math.round,
          j = Math.floor,
          ot = (y) => ({ x: y, y }),
          ft = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function wt(y, C, M) {
          return k(y, T(C, M));
        }
        function at(y, C) {
          return typeof y == "function" ? y(C) : y;
        }
        function yt(y) {
          return y.split("-")[0];
        }
        function it(y) {
          return y.split("-")[1];
        }
        function J(y) {
          return y === "x" ? "y" : "x";
        }
        function ut(y) {
          return y === "y" ? "height" : "width";
        }
        function rt(y) {
          const C = y[0];
          return C === "t" || C === "b" ? "y" : "x";
        }
        function xt(y) {
          return J(rt(y));
        }
        function vt(y, C, M) {
          M === void 0 && (M = !1);
          const X = it(y),
            q = xt(y),
            K = ut(q);
          let ct =
            q === "x"
              ? X === (M ? "end" : "start")
                ? "right"
                : "left"
              : X === "start"
                ? "bottom"
                : "top";
          return C.reference[K] > C.floating[K] && (ct = _(ct)), [ct, _(ct)];
        }
        function dt(y) {
          const C = _(y);
          return [st(y), C, st(C)];
        }
        function st(y) {
          return y.includes("start")
            ? y.replace("start", "end")
            : y.replace("end", "start");
        }
        const bt = ["left", "right"],
          u = ["right", "left"],
          mt = ["top", "bottom"],
          tt = ["bottom", "top"];
        function Y(y, C, M) {
          switch (y) {
            case "top":
            case "bottom":
              return M ? (C ? u : bt) : C ? bt : u;
            case "left":
            case "right":
              return C ? mt : tt;
            default:
              return [];
          }
        }
        function d(y, C, M, X) {
          const q = it(y);
          let K = Y(yt(y), M === "start", X);
          return (
            q &&
              ((K = K.map((ct) => ct + "-" + q)),
              C && (K = K.concat(K.map(st)))),
            K
          );
        }
        function _(y) {
          const C = yt(y);
          return ft[C] + y.slice(C.length);
        }
        function Z(y) {
          var C, M, X, q;
          return {
            top: (C = y.top) != null ? C : 0,
            right: (M = y.right) != null ? M : 0,
            bottom: (X = y.bottom) != null ? X : 0,
            left: (q = y.left) != null ? q : 0,
          };
        }
        function N(y) {
          return typeof y != "number"
            ? Z(y)
            : { top: y, right: y, bottom: y, left: y };
        }
        function z(y) {
          const { x: C, y: M, width: X, height: q } = y;
          return {
            width: X,
            height: q,
            top: M,
            left: C,
            right: C + X,
            bottom: M + q,
            x: C,
            y: M,
          };
        }
      },
      55635: (pt, H, B) => {
        B.d(H, { A: () => W });
        var l = B(53144);
        function W(E, T, k) {
          return (
            (T = (0, l.A)(T)) in E
              ? Object.defineProperty(E, T, {
                  value: k,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (E[T] = k),
            E
          );
        }
      },
      54883: (pt, H, B) => {
        B.d(H, { A: () => E });
        var l = B(55635);
        function W(T, k) {
          var V = Object.keys(T);
          if (Object.getOwnPropertySymbols) {
            var j = Object.getOwnPropertySymbols(T);
            k &&
              (j = j.filter(function (ot) {
                return Object.getOwnPropertyDescriptor(T, ot).enumerable;
              })),
              V.push.apply(V, j);
          }
          return V;
        }
        function E(T) {
          for (var k = 1; k < arguments.length; k++) {
            var V = arguments[k] != null ? arguments[k] : {};
            k % 2
              ? W(Object(V), !0).forEach(function (j) {
                  (0, l.A)(T, j, V[j]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    T,
                    Object.getOwnPropertyDescriptors(V),
                  )
                : W(Object(V)).forEach(function (j) {
                    Object.defineProperty(
                      T,
                      j,
                      Object.getOwnPropertyDescriptor(V, j),
                    );
                  });
          }
          return T;
        }
      },
      53144: (pt, H, B) => {
        B.d(H, { A: () => E });
        var l = B(11052);
        function W(T, k) {
          if ((0, l.A)(T) != "object" || !T) return T;
          var V = T[Symbol.toPrimitive];
          if (V !== void 0) {
            var j = V.call(T, k || "default");
            if ((0, l.A)(j) != "object") return j;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (k === "string" ? String : Number)(T);
        }
        function E(T) {
          var k = W(T, "string");
          return (0, l.A)(k) == "symbol" ? k : k + "";
        }
      },
      11052: (pt, H, B) => {
        B.d(H, { A: () => l });
        function l(W) {
          "@babel/helpers - typeof";
          return (
            (l =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (E) {
                    return typeof E;
                  }
                : function (E) {
                    return E &&
                      typeof Symbol == "function" &&
                      E.constructor === Symbol &&
                      E !== Symbol.prototype
                      ? "symbol"
                      : typeof E;
                  }),
            l(W)
          );
        }
      },
    },
  ]);
})();
