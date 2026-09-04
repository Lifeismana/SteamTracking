/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkHelp = self.webpackChunkHelp || []).push([
    [7767],
    {
      8889: (Pn, qt, Je) => {
        Je.d(qt, {
          ll: () => kn,
          rD: () => wn,
          UU: () => qn,
          cY: () => Hn,
          iD: () => yn,
          BN: () => zn,
          Ej: () => Dn,
        });
        const E = null,
          _e = null,
          le = null,
          Me = Math.min,
          be = Math.max,
          ct = Math.round,
          lt = Math.floor,
          qe = (c) => ({ x: c, y: c }),
          Pt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Kt(c, u, d) {
          return be(c, Me(u, d));
        }
        function ut(c, u) {
          return typeof c == "function" ? c(u) : c;
        }
        function dt(c) {
          return c.split("-")[0];
        }
        function At(c) {
          return c.split("-")[1];
        }
        function Ge(c) {
          return c === "x" ? "y" : "x";
        }
        function _t(c) {
          return c === "y" ? "height" : "width";
        }
        function nt(c) {
          const u = c[0];
          return u === "t" || u === "b" ? "y" : "x";
        }
        function Fe(c) {
          return Ge(nt(c));
        }
        function Dt(c, u, d) {
          d === void 0 && (d = !1);
          const m = At(c),
            p = Fe(c),
            R = _t(p);
          let w =
            p === "x"
              ? m === (d ? "end" : "start")
                ? "right"
                : "left"
              : m === "start"
                ? "bottom"
                : "top";
          return u.reference[R] > u.floating[R] && (w = te(w)), [w, te(w)];
        }
        function et(c) {
          const u = te(c);
          return [$(c), u, $(u)];
        }
        function $(c) {
          return c.includes("start")
            ? c.replace("start", "end")
            : c.replace("end", "start");
        }
        const ie = ["left", "right"],
          xe = ["right", "left"],
          Pe = ["top", "bottom"],
          Le = ["bottom", "top"];
        function ht(c, u, d) {
          switch (c) {
            case "top":
            case "bottom":
              return d ? (u ? xe : ie) : u ? ie : xe;
            case "left":
            case "right":
              return u ? Pe : Le;
            default:
              return [];
          }
        }
        function T(c, u, d, m) {
          const p = At(c);
          let R = ht(dt(c), d === "start", m);
          return (
            p &&
              ((R = R.map((w) => w + "-" + p)), u && (R = R.concat(R.map($)))),
            R
          );
        }
        function te(c) {
          const u = dt(c);
          return Pt[u] + c.slice(u.length);
        }
        function Ue(c) {
          var u, d, m, p;
          return {
            top: (u = c.top) != null ? u : 0,
            right: (d = c.right) != null ? d : 0,
            bottom: (m = c.bottom) != null ? m : 0,
            left: (p = c.left) != null ? p : 0,
          };
        }
        function rt(c) {
          return typeof c != "number"
            ? Ue(c)
            : { top: c, right: c, bottom: c, left: c };
        }
        function Ae(c) {
          const { x: u, y: d, width: m, height: p } = c;
          return {
            width: m,
            height: p,
            top: d,
            left: u,
            right: u + m,
            bottom: d + p,
            x: u,
            y: d,
          };
        }
        function Ft(c, u, d) {
          let { reference: m, floating: p } = c;
          const R = nt(u),
            w = Fe(u),
            I = _t(w),
            P = dt(u),
            D = R === "y",
            j = m.x + m.width / 2 - p.width / 2,
            M = m.y + m.height / 2 - p.height / 2,
            B = m[I] / 2 - p[I] / 2;
          let C;
          switch (P) {
            case "top":
              C = { x: j, y: m.y - p.height };
              break;
            case "bottom":
              C = { x: j, y: m.y + m.height };
              break;
            case "right":
              C = { x: m.x + m.width, y: M };
              break;
            case "left":
              C = { x: m.x - p.width, y: M };
              break;
            default:
              C = { x: m.x, y: m.y };
          }
          const H = At(u);
          return (
            H && (C[w] += B * (H === "end" ? 1 : -1) * (d && D ? -1 : 1)), C
          );
        }
        async function vt(c, u) {
          var d;
          u === void 0 && (u = {});
          const {
              x: m,
              y: p,
              platform: R,
              rects: w,
              elements: I,
              strategy: P,
            } = c,
            {
              boundary: D = "clippingAncestors",
              rootBoundary: j = "viewport",
              elementContext: M = "floating",
              altBoundary: B = !1,
              padding: C = 0,
            } = ut(u, c),
            H = rt(C),
            ne = I[B ? (M === "floating" ? "reference" : "floating") : M],
            q = Ae(
              await R.getClippingRect({
                element:
                  (d = await (R.isElement == null
                    ? void 0
                    : R.isElement(ne))) == null || d
                    ? ne
                    : ne.contextElement ||
                      (await (R.getDocumentElement == null
                        ? void 0
                        : R.getDocumentElement(I.floating))),
                boundary: D,
                rootBoundary: j,
                strategy: P,
              }),
            ),
            J =
              M === "floating"
                ? {
                    x: m,
                    y: p,
                    width: w.floating.width,
                    height: w.floating.height,
                  }
                : w.reference,
            ee = await (R.getOffsetParent == null
              ? void 0
              : R.getOffsetParent(I.floating)),
            ye = ((await (R.isElement == null ? void 0 : R.isElement(ee))) &&
              (await (R.getScale == null ? void 0 : R.getScale(ee)))) || {
              x: 1,
              y: 1,
            },
            Se = Ae(
              R.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await R.convertOffsetParentRelativeRectToViewportRelativeRect(
                    { elements: I, rect: J, offsetParent: ee, strategy: P },
                  )
                : J,
            );
          return {
            top: (q.top - Se.top + H.top) / ye.y,
            bottom: (Se.bottom - q.bottom + H.bottom) / ye.y,
            left: (q.left - Se.left + H.left) / ye.x,
            right: (Se.right - q.right + H.right) / ye.x,
          };
        }
        const Nt = 50,
          en = async (c, u, d) => {
            const {
                placement: m = "bottom",
                strategy: p = "absolute",
                middleware: R = [],
                platform: w,
              } = d,
              I = w.detectOverflow ? w : { ...w, detectOverflow: vt },
              P = await (w.isRTL == null ? void 0 : w.isRTL(u));
            let D = await w.getElementRects({
                reference: c,
                floating: u,
                strategy: p,
              }),
              { x: j, y: M } = Ft(D, m, P),
              B = m,
              C = 0;
            const H = {};
            for (let Z = 0; Z < R.length; Z++) {
              const ne = R[Z];
              if (!ne) continue;
              const { name: q, fn: J } = ne,
                {
                  x: ee,
                  y: ye,
                  data: Se,
                  reset: ue,
                } = await J({
                  x: j,
                  y: M,
                  initialPlacement: m,
                  placement: B,
                  strategy: p,
                  middlewareData: H,
                  rects: D,
                  platform: I,
                  elements: { reference: c, floating: u },
                });
              (j = ee ?? j),
                (M = ye ?? M),
                (H[q] = { ...H[q], ...Se }),
                ue &&
                  C < Nt &&
                  (C++,
                  typeof ue == "object" &&
                    (ue.placement && (B = ue.placement),
                    ue.rects &&
                      (D =
                        ue.rects === !0
                          ? await w.getElementRects({
                              reference: c,
                              floating: u,
                              strategy: p,
                            })
                          : ue.rects),
                    ({ x: j, y: M } = Ft(D, B, P))),
                  (Z = -1));
            }
            return { x: j, y: M, placement: B, strategy: p, middlewareData: H };
          },
          an = (c) => ({
            name: "arrow",
            options: c,
            async fn(u) {
              const {
                  x: d,
                  y: m,
                  placement: p,
                  rects: R,
                  platform: w,
                  elements: I,
                  middlewareData: P,
                } = u,
                { element: D, padding: j = 0 } = evaluate(c, u) || {};
              if (D == null) return {};
              const M = getPaddingObject(j),
                B = { x: d, y: m },
                C = getAlignmentAxis(p),
                H = getAxisLength(C),
                Z = await w.getDimensions(D),
                ne = C === "y",
                q = ne ? "top" : "left",
                J = ne ? "bottom" : "right",
                ee = ne ? "clientHeight" : "clientWidth",
                ye = R.reference[H] + R.reference[C] - B[C] - R.floating[H],
                Se = B[C] - R.reference[C],
                ue = await (w.getOffsetParent == null
                  ? void 0
                  : w.getOffsetParent(D));
              let Oe = ue ? ue[ee] : 0;
              (!Oe ||
                !(await (w.isElement == null ? void 0 : w.isElement(ue)))) &&
                (Oe = I.floating[ee] || R.floating[H]);
              const $e = ye / 2 - Se / 2,
                Ze = Oe / 2 - Z[H] / 2 - 1,
                Te = min(M[q], Ze),
                ot = min(M[J], Ze),
                yt = Oe - Z[H] - ot,
                He = Oe / 2 - Z[H] / 2 + $e,
                at = clamp(Te, He, yt),
                it =
                  !P.arrow &&
                  getAlignment(p) != null &&
                  He !== at &&
                  R.reference[H] / 2 - (He < Te ? Te : ot) - Z[H] / 2 < 0,
                Ot = it ? (He < Te ? He - Te : He - yt) : 0;
              return {
                [C]: B[C] + Ot,
                data: {
                  [C]: at,
                  centerOffset: He - at - Ot,
                  ...(it && { alignmentOffset: Ot }),
                },
                reset: it,
              };
            },
          });
        function fn(c, u, d) {
          return (
            c
              ? [
                  ...d.filter((p) => getAlignment(p) === c),
                  ...d.filter((p) => getAlignment(p) !== c),
                ]
              : d.filter((p) => getSide(p) === p)
          ).filter((p) =>
            c
              ? getAlignment(p) === c ||
                (u ? getOppositeAlignmentPlacement(p) !== p : !1)
              : !0,
          );
        }
        const vn = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                name: "autoPlacement",
                options: c,
                async fn(u) {
                  var d, m, p;
                  const {
                      rects: R,
                      middlewareData: w,
                      placement: I,
                      platform: P,
                      elements: D,
                    } = u,
                    {
                      crossAxis: j = !1,
                      alignment: M,
                      allowedPlacements: B = placements,
                      autoAlignment: C = !0,
                      ...H
                    } = evaluate(c, u),
                    Z =
                      M !== void 0 || B === placements
                        ? fn(M || null, C, B)
                        : B,
                    ne =
                      ((d = w.autoPlacement) == null ? void 0 : d.index) || 0,
                    q = Z[ne];
                  if (q == null) return {};
                  if (I !== q) return { reset: { placement: Z[0] } };
                  const J = await P.detectOverflow(u, H),
                    ee = getAlignmentSides(
                      q,
                      R,
                      await (P.isRTL == null ? void 0 : P.isRTL(D.floating)),
                    ),
                    ye = [J[getSide(q)], J[ee[0]], J[ee[1]]],
                    Se = [
                      ...(((m = w.autoPlacement) == null
                        ? void 0
                        : m.overflows) || []),
                      { placement: q, overflows: ye },
                    ],
                    ue = Z[ne + 1];
                  if (ue)
                    return {
                      data: { index: ne + 1, overflows: Se },
                      reset: { placement: ue },
                    };
                  const Oe = Se.map((Te) => {
                      const ot = getAlignment(Te.placement);
                      return [
                        Te.placement,
                        ot && j
                          ? Te.overflows
                              .slice(0, 2)
                              .reduce((yt, He) => yt + He, 0)
                          : Te.overflows[0],
                        Te.overflows,
                      ];
                    }).sort((Te, ot) => Te[1] - ot[1]),
                    Ze =
                      ((p = Oe.filter((Te) =>
                        Te[2]
                          .slice(0, getAlignment(Te[0]) ? 2 : 3)
                          .every((ot) => ot <= 0),
                      )[0]) == null
                        ? void 0
                        : p[0]) || Oe[0][0];
                  return Ze !== I
                    ? {
                        data: { index: ne + 1, overflows: Se },
                        reset: { placement: Ze },
                      }
                    : {};
                },
              }
            );
          },
          Ut = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                name: "flip",
                options: c,
                async fn(u) {
                  var d, m;
                  const {
                      placement: p,
                      middlewareData: R,
                      rects: w,
                      initialPlacement: I,
                      platform: P,
                      elements: D,
                    } = u,
                    {
                      mainAxis: j = !0,
                      crossAxis: M = !0,
                      fallbackPlacements: B,
                      fallbackStrategy: C = "bestFit",
                      fallbackAxisSideDirection: H = "none",
                      flipAlignment: Z = !0,
                      ...ne
                    } = ut(c, u);
                  if ((d = R.arrow) != null && d.alignmentOffset) return {};
                  const q = dt(p),
                    J = nt(I),
                    ee = dt(I) === I,
                    ye = await (P.isRTL == null ? void 0 : P.isRTL(D.floating)),
                    Se = B || (ee || !Z ? [te(I)] : et(I)),
                    ue = H !== "none";
                  !B && ue && Se.push(...T(I, Z, H, ye));
                  const Oe = [I, ...Se],
                    $e = await P.detectOverflow(u, ne),
                    Ze = [];
                  let Te = ((m = R.flip) == null ? void 0 : m.overflows) || [];
                  if ((j && Ze.push($e[q]), M)) {
                    const at = Dt(p, w, ye);
                    Ze.push($e[at[0]], $e[at[1]]);
                  }
                  if (
                    ((Te = [...Te, { placement: p, overflows: Ze }]),
                    !Ze.every((at) => at <= 0))
                  ) {
                    var ot, yt;
                    const at =
                        (((ot = R.flip) == null ? void 0 : ot.index) || 0) + 1,
                      it = Oe[at];
                    if (
                      it &&
                      (!(M === "alignment" ? J !== nt(it) : !1) ||
                        Te.every((tt) =>
                          nt(tt.placement) === J ? tt.overflows[0] > 0 : !0,
                        ))
                    )
                      return {
                        data: { index: at, overflows: Te },
                        reset: { placement: it },
                      };
                    let Ot =
                      (yt = Te.filter((ft) => ft.overflows[0] <= 0).sort(
                        (ft, tt) => ft.overflows[1] - tt.overflows[1],
                      )[0]) == null
                        ? void 0
                        : yt.placement;
                    if (!Ot)
                      switch (C) {
                        case "bestFit": {
                          var He;
                          const ft =
                            (He = Te.filter((tt) => {
                              if (ue) {
                                const mt = nt(tt.placement);
                                return mt === J || mt === "y";
                              }
                              return !0;
                            })
                              .map((tt) => [
                                tt.placement,
                                tt.overflows
                                  .filter((mt) => mt > 0)
                                  .reduce((mt, mn) => mt + mn, 0),
                              ])
                              .sort((tt, mt) => tt[1] - mt[1])[0]) == null
                              ? void 0
                              : He[0];
                          ft && (Ot = ft);
                          break;
                        }
                        case "initialPlacement":
                          Ot = I;
                          break;
                      }
                    if (p !== Ot) return { reset: { placement: Ot } };
                  }
                  return {};
                },
              }
            );
          };
        function Yt(c, u) {
          return {
            top: c.top - u.height,
            right: c.right - u.width,
            bottom: c.bottom - u.height,
            left: c.left - u.width,
          };
        }
        function bt(c) {
          return sides.some((u) => c[u] >= 0);
        }
        const Mt = function (c) {
          return (
            c === void 0 && (c = {}),
            {
              name: "hide",
              options: c,
              async fn(u) {
                const { rects: d, platform: m } = u,
                  { strategy: p = "referenceHidden", ...R } = evaluate(c, u);
                switch (p) {
                  case "referenceHidden": {
                    const w = await m.detectOverflow(u, {
                        ...R,
                        elementContext: "reference",
                      }),
                      I = Yt(w, d.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: I,
                        referenceHidden: bt(I),
                      },
                    };
                  }
                  case "escaped": {
                    const w = await m.detectOverflow(u, {
                        ...R,
                        altBoundary: !0,
                      }),
                      I = Yt(w, d.floating);
                    return { data: { escapedOffsets: I, escaped: bt(I) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        };
        function Et(c) {
          const u = min(...c.map((R) => R.left)),
            d = min(...c.map((R) => R.top)),
            m = max(...c.map((R) => R.right)),
            p = max(...c.map((R) => R.bottom));
          return { x: u, y: d, width: m - u, height: p - d };
        }
        function kt(c) {
          const u = c.slice().sort((p, R) => p.y - R.y),
            d = [];
          let m = null;
          for (let p = 0; p < u.length; p++) {
            const R = u[p];
            !m || R.y - m.y > m.height / 2
              ? d.push([R])
              : d[d.length - 1].push(R),
              (m = R);
          }
          return d.map((p) => rectToClientRect(Et(p)));
        }
        const Xt = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                name: "inline",
                options: c,
                async fn(u) {
                  const {
                      placement: d,
                      elements: m,
                      rects: p,
                      platform: R,
                      strategy: w,
                    } = u,
                    { padding: I = 2, x: P, y: D } = evaluate(c, u),
                    j = Array.from(
                      (await (R.getClientRects == null
                        ? void 0
                        : R.getClientRects(m.reference))) || [],
                    );
                  if (!j.length) return {};
                  const M = kt(j),
                    B = rectToClientRect(Et(j)),
                    C = getPaddingObject(I);
                  function H() {
                    if (
                      M.length === 2 &&
                      (M[0].left > M[1].right || M[1].left > M[0].right) &&
                      P != null &&
                      D != null
                    )
                      return (
                        M.find(
                          (ne) =>
                            P > ne.left - C.left &&
                            P < ne.right + C.right &&
                            D > ne.top - C.top &&
                            D < ne.bottom + C.bottom,
                        ) || B
                      );
                    if (M.length >= 2) {
                      if (getSideAxis(d) === "y") {
                        const ue = M[0],
                          Oe = M[M.length - 1],
                          $e = getSide(d) === "top",
                          Ze = ue.top,
                          Te = Oe.bottom,
                          ot = $e ? ue.left : Oe.left,
                          yt = $e ? ue.right : Oe.right;
                        return rectToClientRect({
                          x: ot,
                          y: Ze,
                          width: yt - ot,
                          height: Te - Ze,
                        });
                      }
                      const ne = getSide(d) === "left",
                        q = max(...M.map((ue) => ue.right)),
                        J = min(...M.map((ue) => ue.left)),
                        ee = M.filter((ue) =>
                          ne ? ue.left === J : ue.right === q,
                        ),
                        ye = ee[0].top,
                        Se = ee[ee.length - 1].bottom;
                      return rectToClientRect({
                        x: J,
                        y: ye,
                        width: q - J,
                        height: Se - ye,
                      });
                    }
                    return B;
                  }
                  const Z = await R.getElementRects({
                    reference: { getBoundingClientRect: H },
                    floating: m.floating,
                    strategy: w,
                  });
                  return p.reference.x !== Z.reference.x ||
                    p.reference.y !== Z.reference.y ||
                    p.reference.width !== Z.reference.width ||
                    p.reference.height !== Z.reference.height
                    ? { reset: { rects: Z } }
                    : {};
                },
              }
            );
          },
          tn = new Set(["left", "top"]);
        async function Bt(c, u) {
          const { placement: d, platform: m, elements: p } = c,
            R = await (m.isRTL == null ? void 0 : m.isRTL(p.floating)),
            w = dt(d),
            I = At(d),
            P = nt(d) === "y",
            D = tn.has(w) ? -1 : 1,
            j = R && P ? -1 : 1,
            M = ut(u, c);
          let {
            mainAxis: B,
            crossAxis: C,
            alignmentAxis: H,
          } = typeof M == "number"
            ? { mainAxis: M, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: M.mainAxis || 0,
                crossAxis: M.crossAxis || 0,
                alignmentAxis: M.alignmentAxis,
              };
          return (
            I && typeof H == "number" && (C = I === "end" ? H * -1 : H),
            P ? { x: C * j, y: B * D } : { x: B * D, y: C * j }
          );
        }
        const Gt = function (c) {
            return (
              c === void 0 && (c = 0),
              {
                name: "offset",
                options: c,
                async fn(u) {
                  var d, m;
                  const { x: p, y: R, placement: w, middlewareData: I } = u,
                    P = await Bt(u, c);
                  return w ===
                    ((d = I.offset) == null ? void 0 : d.placement) &&
                    (m = I.arrow) != null &&
                    m.alignmentOffset
                    ? {}
                    : { x: p + P.x, y: R + P.y, data: { ...P, placement: w } };
                },
              }
            );
          },
          nn = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                name: "shift",
                options: c,
                async fn(u) {
                  const { x: d, y: m, placement: p, platform: R } = u,
                    {
                      mainAxis: w = !0,
                      crossAxis: I = !1,
                      limiter: P = {
                        fn: (J) => {
                          let { x: ee, y: ye } = J;
                          return { x: ee, y: ye };
                        },
                      },
                      ...D
                    } = ut(c, u),
                    j = { x: d, y: m },
                    M = await R.detectOverflow(u, D),
                    B = nt(p),
                    C = Ge(B);
                  let H = j[C],
                    Z = j[B];
                  const ne = (J, ee) =>
                    Kt(
                      ee + M[J === "y" ? "top" : "left"],
                      ee,
                      ee - M[J === "y" ? "bottom" : "right"],
                    );
                  w && (H = ne(C, H)), I && (Z = ne(B, Z));
                  const q = P.fn({ ...u, [C]: H, [B]: Z });
                  return {
                    ...q,
                    data: {
                      x: q.x - d,
                      y: q.y - m,
                      enabled: { [C]: w, [B]: I },
                    },
                  };
                },
              }
            );
          },
          It = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                options: c,
                fn(u) {
                  var d, m;
                  const {
                      x: p,
                      y: R,
                      placement: w,
                      rects: I,
                      middlewareData: P,
                    } = u,
                    {
                      offset: D = 0,
                      mainAxis: j = !0,
                      crossAxis: M = !0,
                    } = evaluate(c, u),
                    B = { x: p, y: R },
                    C = getSideAxis(w),
                    H = getOppositeAxis(C);
                  let Z = B[H],
                    ne = B[C];
                  const q = evaluate(D, u),
                    J =
                      typeof q == "number"
                        ? { mainAxis: q, crossAxis: 0 }
                        : {
                            mainAxis: (d = q.mainAxis) != null ? d : 0,
                            crossAxis: (m = q.crossAxis) != null ? m : 0,
                          };
                  if (j) {
                    const Se = H === "y" ? "height" : "width",
                      ue = I.reference[H] - I.floating[Se] + J.mainAxis,
                      Oe = I.reference[H] + I.reference[Se] - J.mainAxis;
                    Z < ue ? (Z = ue) : Z > Oe && (Z = Oe);
                  }
                  if (M) {
                    var ee, ye;
                    const Se = H === "y" ? "width" : "height",
                      ue = tn.has(getSide(w)),
                      Oe =
                        I.reference[C] -
                        I.floating[Se] +
                        ((ue && ((ee = P.offset) == null ? void 0 : ee[C])) ||
                          0) +
                        (ue ? 0 : J.crossAxis),
                      $e =
                        I.reference[C] +
                        I.reference[Se] +
                        (ue
                          ? 0
                          : ((ye = P.offset) == null ? void 0 : ye[C]) || 0) -
                        (ue ? J.crossAxis : 0);
                    ne < Oe ? (ne = Oe) : ne > $e && (ne = $e);
                  }
                  return { [H]: Z, [C]: ne };
                },
              }
            );
          },
          Wt = function (c) {
            return (
              c === void 0 && (c = {}),
              {
                name: "size",
                options: c,
                async fn(u) {
                  const {
                      placement: d,
                      rects: m,
                      platform: p,
                      elements: R,
                    } = u,
                    { apply: w = () => {}, ...I } = ut(c, u),
                    P = await p.detectOverflow(u, I),
                    D = dt(d),
                    j = At(d),
                    M = nt(d) === "y",
                    { width: B, height: C } = m.floating;
                  let H, Z;
                  D === "top" || D === "bottom"
                    ? ((H = D),
                      (Z =
                        j ===
                        ((await (p.isRTL == null
                          ? void 0
                          : p.isRTL(R.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((Z = D), (H = j === "end" ? "top" : "bottom"));
                  const ne = C - P.top - P.bottom,
                    q = B - P.left - P.right,
                    J = Me(C - P[H], ne),
                    ee = Me(B - P[Z], q),
                    ye = u.middlewareData.shift,
                    Se = !ye;
                  let ue = J,
                    Oe = ee;
                  ye != null && ye.enabled.x && (Oe = q),
                    ye != null && ye.enabled.y && (ue = ne),
                    Se &&
                      !j &&
                      (M
                        ? (Oe = B - 2 * be(P.left, P.right))
                        : (ue = C - 2 * be(P.top, P.bottom))),
                    await w({ ...u, availableWidth: Oe, availableHeight: ue });
                  const $e = await p.getDimensions(R.floating);
                  return B !== $e.width || C !== $e.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          };
        var K = Je(977);
        function xt(c) {
          const u = (0, K.L9)(c);
          let d = parseFloat(u.width) || 0,
            m = parseFloat(u.height) || 0;
          const p = (0, K.sb)(c),
            R = p ? c.offsetWidth : d,
            w = p ? c.offsetHeight : m,
            I = ct(d) !== R || ct(m) !== w;
          return I && ((d = R), (m = w)), { width: d, height: m, $: I };
        }
        function Lt(c) {
          return (0, K.vq)(c) ? c : c.contextElement;
        }
        function De(c) {
          const u = Lt(c);
          if (!(0, K.sb)(u)) return qe(1);
          const d = u.getBoundingClientRect(),
            { width: m, height: p, $: R } = xt(u);
          let w = (R ? ct(d.width) : d.width) / m,
            I = (R ? ct(d.height) : d.height) / p;
          return (
            (!w || !Number.isFinite(w)) && (w = 1),
            (!I || !Number.isFinite(I)) && (I = 1),
            { x: w, y: I }
          );
        }
        const Vt = qe(0);
        function Ct(c) {
          const u = (0, K.zk)(c);
          return !(0, K.Tc)() || !u.visualViewport
            ? Vt
            : { x: u.visualViewport.offsetLeft, y: u.visualViewport.offsetTop };
        }
        function $n(c, u, d) {
          return u === void 0 && (u = !1), !!d && u && d === (0, K.zk)(c);
        }
        function $t(c, u, d, m) {
          u === void 0 && (u = !1), d === void 0 && (d = !1);
          const p = c.getBoundingClientRect(),
            R = Lt(c);
          let w = qe(1);
          u && (m ? (0, K.vq)(m) && (w = De(m)) : (w = De(c)));
          const I = $n(R, d, m) ? Ct(R) : qe(0);
          let P = (p.left + I.x) / w.x,
            D = (p.top + I.y) / w.y,
            j = p.width / w.x,
            M = p.height / w.y;
          if (R && m) {
            const B = (0, K.zk)(R),
              C = (0, K.vq)(m) ? (0, K.zk)(m) : m;
            let H = B,
              Z = (0, K._m)(H);
            for (; Z && C !== H; ) {
              const ne = De(Z),
                q = Z.getBoundingClientRect(),
                J = (0, K.L9)(Z),
                ee = q.left + (Z.clientLeft + parseFloat(J.paddingLeft)) * ne.x,
                ye = q.top + (Z.clientTop + parseFloat(J.paddingTop)) * ne.y;
              (P *= ne.x),
                (D *= ne.y),
                (j *= ne.x),
                (M *= ne.y),
                (P += ee),
                (D += ye),
                (H = (0, K.zk)(Z)),
                (Z = (0, K._m)(H));
            }
          }
          return Ae({ width: j, height: M, x: P, y: D });
        }
        function rn(c, u) {
          const d = (0, K.CP)(c).scrollLeft;
          return u ? u.left + d : $t((0, K.ep)(c)).left + d;
        }
        function bn(c, u) {
          const d = c.getBoundingClientRect(),
            m = d.left + u.scrollLeft - rn(c, d),
            p = d.top + u.scrollTop;
          return { x: m, y: p };
        }
        function xn(c) {
          let { elements: u, rect: d, offsetParent: m, strategy: p } = c;
          const R = p === "fixed",
            w = (0, K.ep)(m),
            I = u ? (0, K.Tf)(u.floating) : !1;
          if (m === w || (I && R)) return d;
          let P = { scrollLeft: 0, scrollTop: 0 },
            D = qe(1);
          const j = qe(0),
            M = (0, K.sb)(m);
          if (
            (M || !R) &&
            (((0, K.mq)(m) !== "body" || (0, K.ZU)(w)) && (P = (0, K.CP)(m)), M)
          ) {
            const C = $t(m);
            (D = De(m)), (j.x = C.x + m.clientLeft), (j.y = C.y + m.clientTop);
          }
          const B = w && !M && !R ? bn(w, P) : qe(0);
          return {
            width: d.width * D.x,
            height: d.height * D.y,
            x: d.x * D.x - P.scrollLeft * D.x + j.x + B.x,
            y: d.y * D.y - P.scrollTop * D.y + j.y + B.y,
          };
        }
        function jn(c) {
          return c.getClientRects ? Array.from(c.getClientRects()) : [];
        }
        function An(c) {
          const u = (0, K.CP)(c),
            d = c.ownerDocument.body,
            m = be(c.scrollWidth, c.clientWidth, d.scrollWidth, d.clientWidth),
            p = be(
              c.scrollHeight,
              c.clientHeight,
              d.scrollHeight,
              d.clientHeight,
            );
          let R = -u.scrollLeft + rn(c);
          const w = -u.scrollTop;
          return (
            (0, K.L9)(d).direction === "rtl" &&
              (R += be(c.clientWidth, d.clientWidth) - m),
            { width: m, height: p, x: R, y: w }
          );
        }
        const ke = 25;
        function on(c, u, d) {
          d === void 0 && (d = "viewport");
          const m = d === "layoutViewport",
            p = (0, K.zk)(c),
            R = (0, K.ep)(c),
            w = p.visualViewport;
          let I = R.clientWidth,
            P = R.clientHeight,
            D = 0,
            j = 0;
          if (w) {
            const B = !(0, K.Tc)() || u === "fixed";
            m
              ? B || ((D = -w.offsetLeft), (j = -w.offsetTop))
              : ((I = w.width),
                (P = w.height),
                B && ((D = w.offsetLeft), (j = w.offsetTop)));
          }
          if (rn(R) <= 0) {
            const B = R.ownerDocument,
              C = B.body,
              H = getComputedStyle(C),
              Z =
                (B.compatMode === "CSS1Compat" &&
                  parseFloat(H.marginLeft) + parseFloat(H.marginRight)) ||
                0,
              ne = Math.abs(R.clientWidth - C.clientWidth - Z),
              q =
                getComputedStyle(R).scrollbarGutter === "stable both-edges"
                  ? ne / 2
                  : ne;
            q <= ke && (I -= q);
          }
          return { width: I, height: P, x: D, y: j };
        }
        function jt(c, u) {
          const d = $t(c, !0, u === "fixed"),
            m = d.top + c.clientTop,
            p = d.left + c.clientLeft,
            R = De(c),
            w = c.clientWidth * R.x,
            I = c.clientHeight * R.y,
            P = p * R.x,
            D = m * R.y;
          return { width: w, height: I, x: P, y: D };
        }
        function Rt(c, u, d) {
          let m;
          if (u === "viewport" || u === "layoutViewport") m = on(c, d, u);
          else if (u === "document") m = An((0, K.ep)(c));
          else if ((0, K.vq)(u)) m = jt(u, d);
          else {
            const p = Ct(c);
            m = {
              x: u.x - p.x,
              y: u.y - p.y,
              width: u.width,
              height: u.height,
            };
          }
          return Ae(m);
        }
        function St(c, u) {
          const d = u.get(c);
          if (d) return d;
          let m = (0, K.v9)(c, [], !1).filter(
              (I) => (0, K.vq)(I) && (0, K.mq)(I) !== "body",
            ),
            p = null;
          const R = (0, K.L9)(c).position === "fixed";
          let w = R ? (0, K.$4)(c) : c;
          for (; (0, K.vq)(w) && !(0, K.eu)(w); ) {
            const I = (0, K.L9)(w),
              P = (0, K.sQ)(w),
              D = p ? p.position : R ? "fixed" : "";
            !P &&
            (D === "fixed" || (D === "absolute" && I.position === "static"))
              ? (m = m.filter((M) => M !== w))
              : (p = I),
              (w = (0, K.$4)(w));
          }
          return u.set(c, m), m;
        }
        function sn(c) {
          let { element: u, boundary: d, rootBoundary: m, strategy: p } = c;
          const w = [
              ...(d === "clippingAncestors"
                ? (0, K.Tf)(u)
                  ? []
                  : St(u, this._c)
                : [].concat(d)),
              m,
            ],
            I = Rt(u, w[0], p);
          let P = I.top,
            D = I.right,
            j = I.bottom,
            M = I.left;
          for (let B = 1; B < w.length; B++) {
            const C = Rt(u, w[B], p);
            (P = be(C.top, P)),
              (D = Me(C.right, D)),
              (j = Me(C.bottom, j)),
              (M = be(C.left, M));
          }
          return { width: D - M, height: j - P, x: M, y: P };
        }
        function Zt(c) {
          const { width: u, height: d } = xt(c);
          return { width: u, height: d };
        }
        function dn(c, u, d) {
          const m = (0, K.sb)(u),
            p = (0, K.ep)(u),
            R = d === "fixed",
            w = $t(c, !0, R, u);
          let I = { scrollLeft: 0, scrollTop: 0 };
          const P = qe(0);
          if (
            (m || !R) &&
            (((0, K.mq)(u) !== "body" || (0, K.ZU)(p)) && (I = (0, K.CP)(u)), m)
          ) {
            const B = $t(u, !0, R, u);
            (P.x = B.x + u.clientLeft), (P.y = B.y + u.clientTop);
          }
          !m && p && (P.x = rn(p));
          const D = p && !m && !R ? bn(p, I) : qe(0),
            j = w.left + I.scrollLeft - P.x - D.x,
            M = w.top + I.scrollTop - P.y - D.y;
          return { x: j, y: M, width: w.width, height: w.height };
        }
        function cn(c) {
          return (0, K.L9)(c).position === "static";
        }
        function Ye(c, u) {
          if (!(0, K.sb)(c) || (0, K.L9)(c).position === "fixed") return null;
          if (u) return u(c);
          let d = c.offsetParent;
          return (0, K.ep)(c) === d && (d = d.ownerDocument.body), d;
        }
        function Rn(c, u) {
          const d = (0, K.zk)(c);
          if ((0, K.Tf)(c)) return d;
          if (!(0, K.sb)(c)) {
            let p = (0, K.$4)(c);
            for (; p && !(0, K.eu)(p); ) {
              if ((0, K.vq)(p) && !cn(p)) return p;
              p = (0, K.$4)(p);
            }
            return d;
          }
          let m = Ye(c, u);
          for (; m && (0, K.Lv)(m) && cn(m); ) m = Ye(m, u);
          return m && (0, K.eu)(m) && cn(m) && !(0, K.sQ)(m)
            ? d
            : m || (0, K.gJ)(c) || d;
        }
        const _n = async function (c) {
          const u = this.getOffsetParent || Rn,
            d = this.getDimensions,
            m = await d(c.floating);
          return {
            reference: dn(c.reference, await u(c.floating), c.strategy),
            floating: { x: 0, y: 0, width: m.width, height: m.height },
          };
        };
        function Mn(c) {
          return (0, K.L9)(c).direction === "rtl";
        }
        const yn = {
          convertOffsetParentRelativeRectToViewportRelativeRect: xn,
          getDocumentElement: K.ep,
          getClippingRect: sn,
          getOffsetParent: Rn,
          getElementRects: _n,
          getClientRects: jn,
          getDimensions: Zt,
          getScale: De,
          isElement: K.vq,
          isRTL: Mn,
        };
        function Jt(c, u) {
          return (
            c.x === u.x &&
            c.y === u.y &&
            c.width === u.width &&
            c.height === u.height
          );
        }
        function Re(c, u, d) {
          let m = null,
            p;
          const R = (0, K.ep)(c);
          function w() {
            var j;
            clearTimeout(p), (j = m) == null || j.disconnect(), (m = null);
          }
          function I(j, M) {
            j === void 0 && (j = !1), M === void 0 && (M = 1), w();
            const B = c.getBoundingClientRect(),
              { left: C, top: H, width: Z, height: ne } = B;
            if ((j || u(), !Z || !ne)) return;
            const q = lt(H),
              J = lt(R.clientWidth - (C + Z)),
              ee = lt(R.clientHeight - (H + ne)),
              ye = lt(C),
              ue = {
                rootMargin: -q + "px " + -J + "px " + -ee + "px " + -ye + "px",
                threshold: be(0, Me(1, M)) || 1,
              };
            let Oe = !0;
            function $e(Ze) {
              const Te = Ze[0].intersectionRatio;
              if (!Jt(B, c.getBoundingClientRect())) return I();
              if (Te !== M) {
                if (!Oe) return I();
                Te
                  ? I(!1, Te)
                  : (p = setTimeout(() => {
                      I(!1, 1e-7);
                    }, 1e3));
              }
              Oe = !1;
            }
            try {
              m = new IntersectionObserver($e, {
                ...ue,
                root: R.ownerDocument,
              });
            } catch {
              m = new IntersectionObserver($e, ue);
            }
            m.observe(c);
          }
          const P = (0, K.zk)(c),
            D = () => I(d);
          return (
            P.addEventListener("resize", D),
            I(!0),
            () => {
              P.removeEventListener("resize", D), w();
            }
          );
        }
        function kn(c, u, d, m) {
          m === void 0 && (m = {});
          const {
              ancestorScroll: p = !0,
              ancestorResize: R = !0,
              elementResize: w = typeof ResizeObserver == "function",
              layoutShift: I = typeof IntersectionObserver == "function",
              animationFrame: P = !1,
            } = m,
            D = Lt(c),
            j =
              p || R
                ? [...(D ? (0, K.v9)(D) : []), ...(u ? (0, K.v9)(u) : [])]
                : [];
          j.forEach((q) => {
            p && q.addEventListener("scroll", d),
              R && q.addEventListener("resize", d);
          });
          const M = D && I ? Re(D, d, R) : null;
          let B = -1,
            C = null;
          w &&
            ((C = new ResizeObserver((q) => {
              let [J] = q;
              J &&
                J.target === D &&
                C &&
                u &&
                (C.unobserve(u),
                cancelAnimationFrame(B),
                (B = requestAnimationFrame(() => {
                  var ee;
                  (ee = C) == null || ee.observe(u);
                }))),
                d();
            })),
            D && !P && C.observe(D),
            u && C.observe(u));
          let H,
            Z = P ? $t(c) : null;
          P && ne();
          function ne() {
            const q = $t(c);
            Z && !Jt(Z, q) && d(), (Z = q), (H = requestAnimationFrame(ne));
          }
          return (
            d(),
            () => {
              var q;
              j.forEach((J) => {
                p && J.removeEventListener("scroll", d),
                  R && J.removeEventListener("resize", d);
              }),
                M?.(),
                (q = C) == null || q.disconnect(),
                (C = null),
                P && cancelAnimationFrame(H);
            }
          );
        }
        const Ln = null,
          Hn = Gt,
          wr = null,
          zn = nn,
          qn = Ut,
          Dn = Wt,
          Un = null,
          Er = null,
          Ir = null,
          Cr = null,
          wn = (c, u, d) => {
            const m = new Map(),
              p = d ?? {},
              R = { ...yn, ...p.platform, _c: m };
            return en(c, u, { ...p, platform: R });
          };
      },
      4621: (Pn, qt, Je) => {
        Je.d(qt, {
          BN: () => dt,
          Ej: () => _t,
          UU: () => Ge,
          cY: () => ut,
          we: () => Pt,
        });
        var E = Je(8889),
          _e = Je(626),
          le = Je(2739),
          Me = typeof document < "u" ? _e.useLayoutEffect : _e.useEffect;
        function be($, ie) {
          if ($ === ie) return !0;
          if (typeof $ != typeof ie) return !1;
          if (typeof $ == "function" && $.toString() === ie.toString())
            return !0;
          let xe, Pe, Le;
          if ($ && ie && typeof $ == "object") {
            if (Array.isArray($)) {
              if (((xe = $.length), xe !== ie.length)) return !1;
              for (Pe = xe; Pe-- !== 0; ) if (!be($[Pe], ie[Pe])) return !1;
              return !0;
            }
            if (
              ((Le = Object.keys($)),
              (xe = Le.length),
              xe !== Object.keys(ie).length)
            )
              return !1;
            for (Pe = xe; Pe-- !== 0; )
              if (!{}.hasOwnProperty.call(ie, Le[Pe])) return !1;
            for (Pe = xe; Pe-- !== 0; ) {
              const ht = Le[Pe];
              if (!(ht === "_owner" && $.$$typeof) && !be($[ht], ie[ht]))
                return !1;
            }
            return !0;
          }
          return $ !== $ && ie !== ie;
        }
        function ct($) {
          return typeof window > "u"
            ? 1
            : ($.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function lt($, ie) {
          const xe = ct($);
          return Math.round(ie * xe) / xe;
        }
        function qe($) {
          const ie = _e.useRef($);
          return (
            Me(() => {
              ie.current = $;
            }),
            ie
          );
        }
        function Pt($) {
          $ === void 0 && ($ = {});
          const {
              placement: ie = "bottom",
              strategy: xe = "absolute",
              middleware: Pe = [],
              platform: Le,
              elements: { reference: ht, floating: T } = {},
              transform: te = !0,
              whileElementsMounted: Ue,
              open: rt,
            } = $,
            [Ae, Ft] = _e.useState({
              x: 0,
              y: 0,
              strategy: xe,
              placement: ie,
              middlewareData: {},
              isPositioned: !1,
            }),
            [vt, Nt] = _e.useState(Pe);
          be(vt, Pe) || Nt(Pe);
          const [en, an] = _e.useState(null),
            [fn, vn] = _e.useState(null),
            Ut = _e.useCallback((De) => {
              De !== Et.current && ((Et.current = De), an(De));
            }, []),
            Yt = _e.useCallback((De) => {
              De !== kt.current && ((kt.current = De), vn(De));
            }, []),
            bt = ht || en,
            Mt = T || fn,
            Et = _e.useRef(null),
            kt = _e.useRef(null),
            Xt = _e.useRef(Ae),
            tn = Ue != null,
            Bt = qe(Ue),
            Gt = qe(Le),
            nn = qe(rt),
            It = _e.useCallback(() => {
              if (!Et.current || !kt.current) return;
              const De = { placement: ie, strategy: xe, middleware: vt };
              Gt.current && (De.platform = Gt.current),
                (0, E.rD)(Et.current, kt.current, De).then((Vt) => {
                  const Ct = { ...Vt, isPositioned: nn.current !== !1 };
                  Wt.current &&
                    !be(Xt.current, Ct) &&
                    ((Xt.current = Ct),
                    le.flushSync(() => {
                      Ft(Ct);
                    }));
                });
            }, [vt, ie, xe, Gt, nn]);
          Me(() => {
            rt === !1 &&
              Xt.current.isPositioned &&
              ((Xt.current.isPositioned = !1),
              Ft((De) => ({ ...De, isPositioned: !1 })));
          }, [rt]);
          const Wt = _e.useRef(!1);
          Me(
            () => (
              (Wt.current = !0),
              () => {
                Wt.current = !1;
              }
            ),
            [],
          ),
            Me(() => {
              if (
                (bt && (Et.current = bt), Mt && (kt.current = Mt), bt && Mt)
              ) {
                if (Bt.current) return Bt.current(bt, Mt, It);
                It();
              }
            }, [bt, Mt, It, Bt, tn]);
          const K = _e.useMemo(
              () => ({
                reference: Et,
                floating: kt,
                setReference: Ut,
                setFloating: Yt,
              }),
              [Ut, Yt],
            ),
            xt = _e.useMemo(() => ({ reference: bt, floating: Mt }), [bt, Mt]),
            Lt = _e.useMemo(() => {
              const De = { position: xe, left: 0, top: 0 };
              if (!xt.floating) return De;
              const Vt = lt(xt.floating, Ae.x),
                Ct = lt(xt.floating, Ae.y);
              return te
                ? {
                    ...De,
                    transform: "translate(" + Vt + "px, " + Ct + "px)",
                    ...(ct(xt.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: xe, left: Vt, top: Ct };
            }, [xe, te, xt.floating, Ae.x, Ae.y]);
          return _e.useMemo(
            () => ({
              ...Ae,
              update: It,
              refs: K,
              elements: xt,
              floatingStyles: Lt,
            }),
            [Ae, It, K, xt, Lt],
          );
        }
        const Kt = ($) => {
            function ie(xe) {
              return {}.hasOwnProperty.call(xe, "current");
            }
            return {
              name: "arrow",
              options: $,
              fn(xe) {
                const { element: Pe, padding: Le } =
                  typeof $ == "function" ? $(xe) : $;
                return Pe && ie(Pe)
                  ? Pe.current != null
                    ? arrow$2({ element: Pe.current, padding: Le }).fn(xe)
                    : {}
                  : Pe
                    ? arrow$2({ element: Pe, padding: Le }).fn(xe)
                    : {};
              },
            };
          },
          ut = ($, ie) => ({ ...(0, E.cY)($), options: [$, ie] }),
          dt = ($, ie) => ({ ...(0, E.BN)($), options: [$, ie] }),
          At = ($, ie) => ({ ...limitShift$1($), options: [$, ie] }),
          Ge = ($, ie) => ({ ...(0, E.UU)($), options: [$, ie] }),
          _t = ($, ie) => ({ ...(0, E.Ej)($), options: [$, ie] }),
          nt = ($, ie) => ({ ...autoPlacement$1($), options: [$, ie] }),
          Fe = ($, ie) => ({ ...hide$1($), options: [$, ie] }),
          Dt = ($, ie) => ({ ...inline$1($), options: [$, ie] }),
          et = ($, ie) => ({ ...Kt($), options: [$, ie] });
      },
      3788: (Pn, qt, Je) => {
        Je.d(qt, {
          s3: () => Lr,
          iB: () => Xr,
          kp: () => Dr,
          s9: () => Kr,
          we: () => Vr,
          iQ: () => $r,
          Mk: () => ue,
          bv: () => jr,
          SV: () => bn,
        });
        var E = Je(626),
          _e = Je.t(E, 2),
          le = Je(977);
        function Me(t) {
          let e = t.activeElement;
          for (
            ;
            ((n = e) == null || (n = n.shadowRoot) == null
              ? void 0
              : n.activeElement) != null;
          ) {
            var n;
            e = e.shadowRoot.activeElement;
          }
          return e;
        }
        function be(t, e) {
          if (!t || !e) return !1;
          const n = e.getRootNode == null ? void 0 : e.getRootNode();
          if (t.contains(e)) return !0;
          if (n && (0, le.Ng)(n)) {
            let r = e;
            for (; r; ) {
              if (t === r) return !0;
              r = r.parentNode || r.host;
            }
          }
          return !1;
        }
        function ct() {
          const t = navigator.userAgentData;
          return t != null && t.platform ? t.platform : navigator.platform;
        }
        function lt() {
          const t = navigator.userAgentData;
          return t && Array.isArray(t.brands)
            ? t.brands
                .map((e) => {
                  let { brand: n, version: r } = e;
                  return n + "/" + r;
                })
                .join(" ")
            : navigator.userAgent;
        }
        function qe(t) {
          return t.mozInputSource === 0 && t.isTrusted
            ? !0
            : ut() && t.pointerType
              ? t.type === "click" && t.buttons === 1
              : t.detail === 0 && !t.pointerType;
        }
        function Pt(t) {
          return At()
            ? !1
            : (!ut() && t.width === 0 && t.height === 0) ||
                (ut() &&
                  t.width === 1 &&
                  t.height === 1 &&
                  t.pressure === 0 &&
                  t.detail === 0 &&
                  t.pointerType === "mouse") ||
                (t.width < 1 &&
                  t.height < 1 &&
                  t.pressure === 0 &&
                  t.detail === 0 &&
                  t.pointerType === "touch");
        }
        function Kt() {
          return /apple/i.test(navigator.vendor);
        }
        function ut() {
          const t = /android/i;
          return t.test(ct()) || t.test(lt());
        }
        function dt() {
          return (
            ct().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
          );
        }
        function At() {
          return lt().includes("jsdom/");
        }
        function Ge(t, e) {
          const n = ["mouse", "pen"];
          return e || n.push("", void 0), n.includes(t);
        }
        function _t(t) {
          return "nativeEvent" in t;
        }
        function nt(t) {
          return t.matches("html,body");
        }
        function Fe(t) {
          return t?.ownerDocument || document;
        }
        function Dt(t, e) {
          if (e == null) return !1;
          if ("composedPath" in t) return t.composedPath().includes(e);
          const n = t;
          return n.target != null && e.contains(n.target);
        }
        function et(t) {
          return "composedPath" in t ? t.composedPath()[0] : t.target;
        }
        const $ =
          "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
        function ie(t) {
          return (0, le.sb)(t) && t.matches($);
        }
        function xe(t) {
          t.preventDefault(), t.stopPropagation();
        }
        function Pe(t) {
          return t ? t.getAttribute("role") === "combobox" && ie(t) : !1;
        }
        var Le = Je(7850); /*!
         * tabbable 6.2.0
         * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
         */
        var ht = [
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
          T = ht.join(","),
          te = typeof Element > "u",
          Ue = te
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
          rt =
            !te && Element.prototype.getRootNode
              ? function (t) {
                  var e;
                  return t == null ||
                    (e = t.getRootNode) === null ||
                    e === void 0
                    ? void 0
                    : e.call(t);
                }
              : function (t) {
                  return t?.ownerDocument;
                },
          Ae = function t(e, n) {
            var r;
            n === void 0 && (n = !0);
            var o =
                e == null || (r = e.getAttribute) === null || r === void 0
                  ? void 0
                  : r.call(e, "inert"),
              s = o === "" || o === "true",
              i = s || (n && e && t(e.parentNode));
            return i;
          },
          Ft = function (e) {
            var n,
              r =
                e == null || (n = e.getAttribute) === null || n === void 0
                  ? void 0
                  : n.call(e, "contenteditable");
            return r === "" || r === "true";
          },
          vt = function (e, n, r) {
            if (Ae(e)) return [];
            var o = Array.prototype.slice.apply(e.querySelectorAll(T));
            return n && Ue.call(e, T) && o.unshift(e), (o = o.filter(r)), o;
          },
          Nt = function t(e, n, r) {
            for (var o = [], s = Array.from(e); s.length; ) {
              var i = s.shift();
              if (!Ae(i, !1))
                if (i.tagName === "SLOT") {
                  var l = i.assignedElements(),
                    v = l.length ? l : i.children,
                    a = t(v, !0, r);
                  r.flatten
                    ? o.push.apply(o, a)
                    : o.push({ scopeParent: i, candidates: a });
                } else {
                  var g = Ue.call(i, T);
                  g && r.filter(i) && (n || !e.includes(i)) && o.push(i);
                  var y =
                      i.shadowRoot ||
                      (typeof r.getShadowRoot == "function" &&
                        r.getShadowRoot(i)),
                    b =
                      !Ae(y, !1) &&
                      (!r.shadowRootFilter || r.shadowRootFilter(i));
                  if (y && b) {
                    var f = t(y === !0 ? i.children : y.children, !0, r);
                    r.flatten
                      ? o.push.apply(o, f)
                      : o.push({ scopeParent: i, candidates: f });
                  } else s.unshift.apply(s, i.children);
                }
            }
            return o;
          },
          en = function (e) {
            return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
          },
          an = function (e) {
            if (!e) throw new Error("No node provided");
            return e.tabIndex < 0 &&
              (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Ft(e)) &&
              !en(e)
              ? 0
              : e.tabIndex;
          },
          fn = function (e, n) {
            var r = an(e);
            return r < 0 && n && !en(e) ? 0 : r;
          },
          vn = function (e, n) {
            return e.tabIndex === n.tabIndex
              ? e.documentOrder - n.documentOrder
              : e.tabIndex - n.tabIndex;
          },
          Ut = function (e) {
            return e.tagName === "INPUT";
          },
          Yt = function (e) {
            return Ut(e) && e.type === "hidden";
          },
          bt = function (e) {
            var n =
              e.tagName === "DETAILS" &&
              Array.prototype.slice.apply(e.children).some(function (r) {
                return r.tagName === "SUMMARY";
              });
            return n;
          },
          Mt = function (e, n) {
            for (var r = 0; r < e.length; r++)
              if (e[r].checked && e[r].form === n) return e[r];
          },
          Et = function (e) {
            if (!e.name) return !0;
            var n = e.form || rt(e),
              r = function (l) {
                return n.querySelectorAll(
                  'input[type="radio"][name="' + l + '"]',
                );
              },
              o;
            if (
              typeof window < "u" &&
              typeof window.CSS < "u" &&
              typeof window.CSS.escape == "function"
            )
              o = r(window.CSS.escape(e.name));
            else
              try {
                o = r(e.name);
              } catch (i) {
                return (
                  console.error(
                    "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                    i.message,
                  ),
                  !1
                );
              }
            var s = Mt(o, e.form);
            return !s || s === e;
          },
          kt = function (e) {
            return Ut(e) && e.type === "radio";
          },
          Xt = function (e) {
            return kt(e) && !Et(e);
          },
          tn = function (e) {
            var n,
              r = e && rt(e),
              o = (n = r) === null || n === void 0 ? void 0 : n.host,
              s = !1;
            if (r && r !== e) {
              var i, l, v;
              for (
                s = !!(
                  ((i = o) !== null &&
                    i !== void 0 &&
                    (l = i.ownerDocument) !== null &&
                    l !== void 0 &&
                    l.contains(o)) ||
                  (e != null &&
                    (v = e.ownerDocument) !== null &&
                    v !== void 0 &&
                    v.contains(e))
                );
                !s && o;
              ) {
                var a, g, y;
                (r = rt(o)),
                  (o = (a = r) === null || a === void 0 ? void 0 : a.host),
                  (s = !!(
                    (g = o) !== null &&
                    g !== void 0 &&
                    (y = g.ownerDocument) !== null &&
                    y !== void 0 &&
                    y.contains(o)
                  ));
              }
            }
            return s;
          },
          Bt = function (e) {
            var n = e.getBoundingClientRect(),
              r = n.width,
              o = n.height;
            return r === 0 && o === 0;
          },
          Gt = function (e, n) {
            var r = n.displayCheck,
              o = n.getShadowRoot;
            if (getComputedStyle(e).visibility === "hidden") return !0;
            var s = Ue.call(e, "details>summary:first-of-type"),
              i = s ? e.parentElement : e;
            if (Ue.call(i, "details:not([open]) *")) return !0;
            if (!r || r === "full" || r === "legacy-full") {
              if (typeof o == "function") {
                for (var l = e; e; ) {
                  var v = e.parentElement,
                    a = rt(e);
                  if (v && !v.shadowRoot && o(v) === !0) return Bt(e);
                  e.assignedSlot
                    ? (e = e.assignedSlot)
                    : !v && a !== e.ownerDocument
                      ? (e = a.host)
                      : (e = v);
                }
                e = l;
              }
              if (tn(e)) return !e.getClientRects().length;
              if (r !== "legacy-full") return !0;
            } else if (r === "non-zero-area") return Bt(e);
            return !1;
          },
          nn = function (e) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
              for (var n = e.parentElement; n; ) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                  for (var r = 0; r < n.children.length; r++) {
                    var o = n.children.item(r);
                    if (o.tagName === "LEGEND")
                      return Ue.call(n, "fieldset[disabled] *")
                        ? !0
                        : !o.contains(e);
                  }
                  return !0;
                }
                n = n.parentElement;
              }
            return !1;
          },
          It = function (e, n) {
            return !(
              n.disabled ||
              Ae(n) ||
              Yt(n) ||
              Gt(n, e) ||
              bt(n) ||
              nn(n)
            );
          },
          Wt = function (e, n) {
            return !(Xt(n) || an(n) < 0 || !It(e, n));
          },
          K = function (e) {
            var n = parseInt(e.getAttribute("tabindex"), 10);
            return !!(isNaN(n) || n >= 0);
          },
          xt = function t(e) {
            var n = [],
              r = [];
            return (
              e.forEach(function (o, s) {
                var i = !!o.scopeParent,
                  l = i ? o.scopeParent : o,
                  v = fn(l, i),
                  a = i ? t(o.candidates) : l;
                v === 0
                  ? i
                    ? n.push.apply(n, a)
                    : n.push(l)
                  : r.push({
                      documentOrder: s,
                      tabIndex: v,
                      item: o,
                      isScope: i,
                      content: a,
                    });
              }),
              r
                .sort(vn)
                .reduce(function (o, s) {
                  return (
                    s.isScope ? o.push.apply(o, s.content) : o.push(s.content),
                    o
                  );
                }, [])
                .concat(n)
            );
          },
          Lt = function (e, n) {
            n = n || {};
            var r;
            return (
              n.getShadowRoot
                ? (r = Nt([e], n.includeContainer, {
                    filter: Wt.bind(null, n),
                    flatten: !1,
                    getShadowRoot: n.getShadowRoot,
                    shadowRootFilter: K,
                  }))
                : (r = vt(e, n.includeContainer, Wt.bind(null, n))),
              xt(r)
            );
          },
          De = function (e, n) {
            n = n || {};
            var r;
            return (
              n.getShadowRoot
                ? (r = Nt([e], n.includeContainer, {
                    filter: It.bind(null, n),
                    flatten: !0,
                    getShadowRoot: n.getShadowRoot,
                  }))
                : (r = vt(e, n.includeContainer, It.bind(null, n))),
              r
            );
          },
          Vt = function (e, n) {
            if (((n = n || {}), !e)) throw new Error("No node provided");
            return Ue.call(e, T) === !1 ? !1 : Wt(n, e);
          },
          Ct = null,
          $n = function (e, n) {
            if (((n = n || {}), !e)) throw new Error("No node provided");
            return Ue.call(e, Ct) === !1 ? !1 : It(n, e);
          },
          $t = Je(2739),
          rn = Je(4621);
        function bn(t) {
          const e = E.useRef(void 0),
            n = E.useCallback((r) => {
              const o = t.map((s) => {
                if (s != null) {
                  if (typeof s == "function") {
                    const i = s,
                      l = i(r);
                    return typeof l == "function"
                      ? l
                      : () => {
                          i(null);
                        };
                  }
                  return (
                    (s.current = r),
                    () => {
                      s.current = null;
                    }
                  );
                }
              });
              return () => {
                o.forEach((s) => s?.());
              };
            }, t);
          return E.useMemo(
            () =>
              t.every((r) => r == null)
                ? null
                : (r) => {
                    e.current && (e.current(), (e.current = void 0)),
                      r != null && (e.current = n(r));
                  },
            t,
          );
        }
        const xn = { ..._e },
          An = xn.useInsertionEffect || ((t) => t());
        function ke(t) {
          const e = E.useRef(() => {});
          return (
            An(() => {
              e.current = t;
            }),
            E.useCallback(function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              return e.current == null ? void 0 : e.current(...r);
            }, [])
          );
        }
        const on = "ArrowUp",
          jt = "ArrowDown",
          Rt = "ArrowLeft",
          St = "ArrowRight";
        function sn(t, e, n) {
          return Math.floor(t / e) !== n;
        }
        function Zt(t, e) {
          return e < 0 || e >= t.current.length;
        }
        function dn(t, e) {
          return Ye(t, { disabledIndices: e });
        }
        function cn(t, e) {
          return Ye(t, {
            decrement: !0,
            startingIndex: t.current.length,
            disabledIndices: e,
          });
        }
        function Ye(t, e) {
          let {
            startingIndex: n = -1,
            decrement: r = !1,
            disabledIndices: o,
            amount: s = 1,
          } = e === void 0 ? {} : e;
          const i = t.current;
          let l = n;
          do l += r ? -s : s;
          while (l >= 0 && l <= i.length - 1 && Jt(i, l, o));
          return l;
        }
        function Rn(t, e) {
          let {
              event: n,
              orientation: r,
              loop: o,
              rtl: s,
              cols: i,
              disabledIndices: l,
              minIndex: v,
              maxIndex: a,
              prevIndex: g,
              stopEvent: y = !1,
            } = e,
            b = g;
          if (n.key === on) {
            if ((y && stopEvent(n), g === -1)) b = a;
            else if (
              ((b = Ye(t, {
                startingIndex: b,
                amount: i,
                decrement: !0,
                disabledIndices: l,
              })),
              o && (g - i < v || b < 0))
            ) {
              const f = g % i,
                x = a % i,
                h = a - (x - f);
              x === f ? (b = a) : (b = x > f ? h : h - i);
            }
            Zt(t, b) && (b = g);
          }
          if (
            (n.key === jt &&
              (y && stopEvent(n),
              g === -1
                ? (b = v)
                : ((b = Ye(t, {
                    startingIndex: g,
                    amount: i,
                    disabledIndices: l,
                  })),
                  o &&
                    g + i > a &&
                    (b = Ye(t, {
                      startingIndex: (g % i) - i,
                      amount: i,
                      disabledIndices: l,
                    }))),
              Zt(t, b) && (b = g)),
            r === "both")
          ) {
            const f = floor(g / i);
            n.key === (s ? Rt : St) &&
              (y && stopEvent(n),
              g % i !== i - 1
                ? ((b = Ye(t, { startingIndex: g, disabledIndices: l })),
                  o &&
                    sn(b, i, f) &&
                    (b = Ye(t, {
                      startingIndex: g - (g % i) - 1,
                      disabledIndices: l,
                    })))
                : o &&
                  (b = Ye(t, {
                    startingIndex: g - (g % i) - 1,
                    disabledIndices: l,
                  })),
              sn(b, i, f) && (b = g)),
              n.key === (s ? St : Rt) &&
                (y && stopEvent(n),
                g % i !== 0
                  ? ((b = Ye(t, {
                      startingIndex: g,
                      decrement: !0,
                      disabledIndices: l,
                    })),
                    o &&
                      sn(b, i, f) &&
                      (b = Ye(t, {
                        startingIndex: g + (i - (g % i)),
                        decrement: !0,
                        disabledIndices: l,
                      })))
                  : o &&
                    (b = Ye(t, {
                      startingIndex: g + (i - (g % i)),
                      decrement: !0,
                      disabledIndices: l,
                    })),
                sn(b, i, f) && (b = g));
            const x = floor(a / i) === f;
            Zt(t, b) &&
              (o && x
                ? (b =
                    n.key === (s ? St : Rt)
                      ? a
                      : Ye(t, {
                          startingIndex: g - (g % i) - 1,
                          disabledIndices: l,
                        }))
                : (b = g));
          }
          return b;
        }
        function _n(t, e, n) {
          const r = [];
          let o = 0;
          return (
            t.forEach((s, i) => {
              let { width: l, height: v } = s;
              l > e;
              let a = !1;
              for (n && (o = 0); !a; ) {
                const g = [];
                for (let y = 0; y < l; y++)
                  for (let b = 0; b < v; b++) g.push(o + y + b * e);
                (o % e) + l <= e && g.every((y) => r[y] == null)
                  ? (g.forEach((y) => {
                      r[y] = i;
                    }),
                    (a = !0))
                  : o++;
              }
            }),
            [...r]
          );
        }
        function Mn(t, e, n, r, o) {
          if (t === -1) return -1;
          const s = n.indexOf(t),
            i = e[t];
          switch (o) {
            case "tl":
              return s;
            case "tr":
              return i ? s + i.width - 1 : s;
            case "bl":
              return i ? s + (i.height - 1) * r : s;
            case "br":
              return n.lastIndexOf(t);
          }
        }
        function yn(t, e) {
          return e.flatMap((n, r) => (t.includes(n) ? [r] : []));
        }
        function Jt(t, e, n) {
          if (n) return n.includes(e);
          const r = t[e];
          return (
            r == null ||
            r.hasAttribute("disabled") ||
            r.getAttribute("aria-disabled") === "true"
          );
        }
        var Re = typeof document < "u" ? E.useLayoutEffect : E.useEffect;
        function kn(t, e) {
          const n = t.compareDocumentPosition(e);
          return n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
            ? -1
            : n & Node.DOCUMENT_POSITION_PRECEDING ||
                n & Node.DOCUMENT_POSITION_CONTAINS
              ? 1
              : 0;
        }
        const Ln = E.createContext({
          register: () => {},
          unregister: () => {},
          map: new Map(),
          elementsRef: { current: [] },
        });
        function Hn(t) {
          const { children: e, elementsRef: n, labelsRef: r } = t,
            [o, s] = React.useState(() => new Set()),
            i = React.useCallback((a) => {
              s((g) => new Set(g).add(a));
            }, []),
            l = React.useCallback((a) => {
              s((g) => {
                const y = new Set(g);
                return y.delete(a), y;
              });
            }, []),
            v = React.useMemo(() => {
              const a = new Map();
              return (
                Array.from(o.keys())
                  .sort(kn)
                  .forEach((y, b) => {
                    a.set(y, b);
                  }),
                a
              );
            }, [o]);
          return jsx(Ln.Provider, {
            value: React.useMemo(
              () => ({
                register: i,
                unregister: l,
                map: v,
                elementsRef: n,
                labelsRef: r,
              }),
              [i, l, v, n, r],
            ),
            children: e,
          });
        }
        function wr(t) {
          t === void 0 && (t = {});
          const { label: e } = t,
            {
              register: n,
              unregister: r,
              map: o,
              elementsRef: s,
              labelsRef: i,
            } = React.useContext(Ln),
            [l, v] = React.useState(null),
            a = React.useRef(null),
            g = React.useCallback(
              (y) => {
                if (((a.current = y), l !== null && ((s.current[l] = y), i))) {
                  var b;
                  const f = e !== void 0;
                  i.current[l] = f
                    ? e
                    : (b = y?.textContent) != null
                      ? b
                      : null;
                }
              },
              [l, s, i, e],
            );
          return (
            Re(() => {
              const y = a.current;
              if (y)
                return (
                  n(y),
                  () => {
                    r(y);
                  }
                );
            }, [n, r]),
            Re(() => {
              const y = a.current ? o.get(a.current) : null;
              y != null && v(y);
            }, [o]),
            React.useMemo(() => ({ ref: g, index: l ?? -1 }), [l, g])
          );
        }
        function zn(t, e) {
          return typeof t == "function"
            ? t(e)
            : t
              ? React.cloneElement(t, e)
              : jsx("div", { ...e });
        }
        const qn = E.createContext({ activeIndex: 0, onNavigate: () => {} }),
          Dn = [Rt, St],
          Un = [on, jt],
          Er = [...Dn, ...Un],
          Ir = null,
          Cr = null;
        let wn = !1,
          c = 0;
        const u = () =>
          "floating-ui-" + Math.random().toString(36).slice(2, 6) + c++;
        function d() {
          const [t, e] = E.useState(() => (wn ? u() : void 0));
          return (
            Re(() => {
              t == null && e(u());
            }, []),
            E.useEffect(() => {
              wn = !0;
            }, []),
            t
          );
        }
        const p = xn.useId || d;
        let R;
        function w() {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          const o = "Floating UI: " + n.join(" ");
          if (!((t = R) != null && t.has(o))) {
            var s;
            (s = R) == null || s.add(o), console.warn(o);
          }
        }
        function I() {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          const o = "Floating UI: " + n.join(" ");
          if (!((t = R) != null && t.has(o))) {
            var s;
            (s = R) == null || s.add(o), console.error(o);
          }
        }
        const P = null;
        function D() {
          const t = new Map();
          return {
            emit(e, n) {
              var r;
              (r = t.get(e)) == null || r.forEach((o) => o(n));
            },
            on(e, n) {
              t.set(e, [...(t.get(e) || []), n]);
            },
            off(e, n) {
              var r;
              t.set(
                e,
                ((r = t.get(e)) == null ? void 0 : r.filter((o) => o !== n)) ||
                  [],
              );
            },
          };
        }
        const j = E.createContext(null),
          M = E.createContext(null),
          B = () => {
            var t;
            return ((t = E.useContext(j)) == null ? void 0 : t.id) || null;
          },
          C = () => E.useContext(M);
        function H(t) {
          const e = p(),
            n = C(),
            r = B(),
            o = t || r;
          return (
            Re(() => {
              if (!e) return;
              const s = { id: e, parentId: o };
              return (
                n?.addNode(s),
                () => {
                  n?.removeNode(s);
                }
              );
            }, [n, e, o]),
            e
          );
        }
        function Z(t) {
          const { children: e, id: n } = t,
            r = B();
          return jsx(j.Provider, {
            value: React.useMemo(() => ({ id: n, parentId: r }), [n, r]),
            children: e,
          });
        }
        function ne(t) {
          const { children: e } = t,
            n = React.useRef([]),
            r = React.useCallback((i) => {
              n.current = [...n.current, i];
            }, []),
            o = React.useCallback((i) => {
              n.current = n.current.filter((l) => l !== i);
            }, []),
            s = React.useState(() => D())[0];
          return jsx(M.Provider, {
            value: React.useMemo(
              () => ({ nodesRef: n, addNode: r, removeNode: o, events: s }),
              [r, o, s],
            ),
            children: e,
          });
        }
        function q(t) {
          return "data-floating-ui-" + t;
        }
        function J(t) {
          t.current !== -1 && (clearTimeout(t.current), (t.current = -1));
        }
        function ee(t) {
          const e = (0, E.useRef)(t);
          return (
            Re(() => {
              e.current = t;
            }),
            e
          );
        }
        const ye = q("safe-polygon");
        function Se(t, e, n) {
          return n && !Ge(n) ? 0 : typeof t == "number" ? t : t?.[e];
        }
        function ue(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              onOpenChange: r,
              dataRef: o,
              events: s,
              elements: i,
            } = t,
            {
              enabled: l = !0,
              delay: v = 0,
              handleClose: a = null,
              mouseOnly: g = !1,
              restMs: y = 0,
              move: b = !0,
            } = e,
            f = C(),
            x = B(),
            h = ee(a),
            F = ee(v),
            S = ee(n),
            k = E.useRef(),
            _ = E.useRef(-1),
            oe = E.useRef(),
            pe = E.useRef(-1),
            re = E.useRef(!0),
            he = E.useRef(!1),
            we = E.useRef(() => {}),
            ae = E.useRef(!1),
            se = E.useCallback(() => {
              var V;
              const z = (V = o.current.openEvent) == null ? void 0 : V.type;
              return z?.includes("mouse") && z !== "mousedown";
            }, [o]);
          E.useEffect(() => {
            if (!l) return;
            function V(z) {
              let { open: L } = z;
              L || (J(_), J(pe), (re.current = !0), (ae.current = !1));
            }
            return (
              s.on("openchange", V),
              () => {
                s.off("openchange", V);
              }
            );
          }, [l, s]),
            E.useEffect(() => {
              if (!l || !h.current || !n) return;
              function V(L) {
                se() && r(!1, L, "hover");
              }
              const z = Fe(i.floating).documentElement;
              return (
                z.addEventListener("mouseleave", V),
                () => {
                  z.removeEventListener("mouseleave", V);
                }
              );
            }, [i.floating, n, r, l, h, se]);
          const Ee = E.useCallback(
              function (V, z, L) {
                z === void 0 && (z = !0), L === void 0 && (L = "hover");
                const A = Se(F.current, "close", k.current);
                A && !oe.current
                  ? (J(_),
                    (_.current = window.setTimeout(() => r(!1, V, L), A)))
                  : z && (J(_), r(!1, V, L));
              },
              [F, r],
            ),
            Q = ke(() => {
              we.current(), (oe.current = void 0);
            }),
            O = ke(() => {
              if (he.current) {
                const V = Fe(i.floating).body;
                (V.style.pointerEvents = ""),
                  V.removeAttribute(ye),
                  (he.current = !1);
              }
            }),
            N = ke(() =>
              o.current.openEvent
                ? ["click", "mousedown"].includes(o.current.openEvent.type)
                : !1,
            );
          E.useEffect(() => {
            if (!l) return;
            function V(U) {
              if (
                (J(_),
                (re.current = !1),
                (g && !Ge(k.current)) || (y > 0 && !Se(F.current, "open")))
              )
                return;
              const ve = Se(F.current, "open", k.current);
              ve
                ? (_.current = window.setTimeout(() => {
                    S.current || r(!0, U, "hover");
                  }, ve))
                : n || r(!0, U, "hover");
            }
            function z(U) {
              if (N()) return;
              we.current();
              const ve = Fe(i.floating);
              if (
                (J(pe),
                (ae.current = !1),
                h.current && o.current.floatingContext)
              ) {
                n || J(_),
                  (oe.current = h.current({
                    ...o.current.floatingContext,
                    tree: f,
                    x: U.clientX,
                    y: U.clientY,
                    onClose() {
                      O(), Q(), N() || Ee(U, !0, "safe-polygon");
                    },
                  }));
                const ze = oe.current;
                ve.addEventListener("mousemove", ze),
                  (we.current = () => {
                    ve.removeEventListener("mousemove", ze);
                  });
                return;
              }
              (k.current !== "touch" || !be(i.floating, U.relatedTarget)) &&
                Ee(U);
            }
            function L(U) {
              N() ||
                (o.current.floatingContext &&
                  (h.current == null ||
                    h.current({
                      ...o.current.floatingContext,
                      tree: f,
                      x: U.clientX,
                      y: U.clientY,
                      onClose() {
                        O(), Q(), N() || Ee(U);
                      },
                    })(U)));
            }
            if ((0, le.vq)(i.domReference)) {
              var A;
              const U = i.domReference;
              return (
                n && U.addEventListener("mouseleave", L),
                (A = i.floating) == null || A.addEventListener("mouseleave", L),
                b && U.addEventListener("mousemove", V, { once: !0 }),
                U.addEventListener("mouseenter", V),
                U.addEventListener("mouseleave", z),
                () => {
                  var ve;
                  n && U.removeEventListener("mouseleave", L),
                    (ve = i.floating) == null ||
                      ve.removeEventListener("mouseleave", L),
                    b && U.removeEventListener("mousemove", V),
                    U.removeEventListener("mouseenter", V),
                    U.removeEventListener("mouseleave", z);
                }
              );
            }
          }, [i, l, t, g, y, b, Ee, Q, O, r, n, S, f, F, h, o, N]),
            Re(() => {
              var V;
              if (
                l &&
                n &&
                (V = h.current) != null &&
                V.__options.blockPointerEvents &&
                se()
              ) {
                he.current = !0;
                const L = i.floating;
                if ((0, le.vq)(i.domReference) && L) {
                  var z;
                  const A = Fe(i.floating).body;
                  A.setAttribute(ye, "");
                  const U = i.domReference,
                    ve =
                      f == null ||
                      (z = f.nodesRef.current.find((Ne) => Ne.id === x)) ==
                        null ||
                      (z = z.context) == null
                        ? void 0
                        : z.elements.floating;
                  return (
                    ve && (ve.style.pointerEvents = ""),
                    (A.style.pointerEvents = "none"),
                    (U.style.pointerEvents = "auto"),
                    (L.style.pointerEvents = "auto"),
                    () => {
                      (A.style.pointerEvents = ""),
                        (U.style.pointerEvents = ""),
                        (L.style.pointerEvents = "");
                    }
                  );
                }
              }
            }, [l, n, x, i, f, h, se]),
            Re(() => {
              n || ((k.current = void 0), (ae.current = !1), Q(), O());
            }, [n, Q, O]),
            E.useEffect(
              () => () => {
                Q(), J(_), J(pe), O();
              },
              [l, i.domReference, Q, O],
            );
          const X = E.useMemo(() => {
              function V(z) {
                k.current = z.pointerType;
              }
              return {
                onPointerDown: V,
                onPointerEnter: V,
                onMouseMove(z) {
                  const { nativeEvent: L } = z;
                  function A() {
                    !re.current && !S.current && r(!0, L, "hover");
                  }
                  (g && !Ge(k.current)) ||
                    n ||
                    y === 0 ||
                    (ae.current && z.movementX ** 2 + z.movementY ** 2 < 2) ||
                    (J(pe),
                    k.current === "touch"
                      ? A()
                      : ((ae.current = !0),
                        (pe.current = window.setTimeout(A, y))));
                },
              };
            }, [g, r, n, S, y]),
            W = E.useMemo(
              () => ({
                onMouseEnter() {
                  J(_);
                },
                onMouseLeave(V) {
                  N() || Ee(V.nativeEvent, !1);
                },
              }),
              [Ee, N],
            );
          return E.useMemo(
            () => (l ? { reference: X, floating: W } : {}),
            [l, X, W],
          );
        }
        const Oe = () => {},
          $e = E.createContext({
            delay: 0,
            initialDelay: 0,
            timeoutMs: 0,
            currentId: null,
            setCurrentId: Oe,
            setState: Oe,
            isInstantPhase: !1,
          }),
          Ze = () => React.useContext($e);
        function Te(t) {
          const { children: e, delay: n, timeoutMs: r = 0 } = t,
            [o, s] = React.useReducer((v, a) => ({ ...v, ...a }), {
              delay: n,
              timeoutMs: r,
              initialDelay: n,
              currentId: null,
              isInstantPhase: !1,
            }),
            i = React.useRef(null),
            l = React.useCallback((v) => {
              s({ currentId: v });
            }, []);
          return (
            Re(() => {
              o.currentId
                ? i.current === null
                  ? (i.current = o.currentId)
                  : o.isInstantPhase || s({ isInstantPhase: !0 })
                : (o.isInstantPhase && s({ isInstantPhase: !1 }),
                  (i.current = null));
            }, [o.currentId, o.isInstantPhase]),
            jsx($e.Provider, {
              value: React.useMemo(
                () => ({ ...o, setState: s, setCurrentId: l }),
                [o, l],
              ),
              children: e,
            })
          );
        }
        function ot(t, e) {
          e === void 0 && (e = {});
          const { open: n, onOpenChange: r, floatingId: o } = t,
            { id: s, enabled: i = !0 } = e,
            l = s ?? o,
            v = Ze(),
            {
              currentId: a,
              setCurrentId: g,
              initialDelay: y,
              setState: b,
              timeoutMs: f,
            } = v;
          return (
            Re(() => {
              i &&
                a &&
                (b({ delay: { open: 1, close: Se(y, "close") } }),
                a !== l && r(!1));
            }, [i, l, r, b, a, y]),
            Re(() => {
              function x() {
                r(!1), b({ delay: y, currentId: null });
              }
              if (i && a && !n && a === l) {
                if (f) {
                  const h = window.setTimeout(x, f);
                  return () => {
                    clearTimeout(h);
                  };
                }
                x();
              }
            }, [i, n, b, a, l, r, y, f]),
            Re(() => {
              i && (g === Oe || !n || g(l));
            }, [i, n, g, l]),
            v
          );
        }
        let yt = 0;
        function He(t, e) {
          e === void 0 && (e = {});
          const {
            preventScroll: n = !1,
            cancelPrevious: r = !0,
            sync: o = !1,
          } = e;
          r && cancelAnimationFrame(yt);
          const s = () => t?.focus({ preventScroll: n });
          o ? s() : (yt = requestAnimationFrame(s));
        }
        function at(t, e) {
          var n;
          let r = [],
            o = (n = t.find((s) => s.id === e)) == null ? void 0 : n.parentId;
          for (; o; ) {
            const s = t.find((i) => i.id === o);
            (o = s?.parentId), s && (r = r.concat(s));
          }
          return r;
        }
        function it(t, e) {
          let n = t.filter((o) => {
              var s;
              return (
                o.parentId === e && ((s = o.context) == null ? void 0 : s.open)
              );
            }),
            r = n;
          for (; r.length; )
            (r = t.filter((o) => {
              var s;
              return (s = r) == null
                ? void 0
                : s.some((i) => {
                    var l;
                    return (
                      o.parentId === i.id &&
                      ((l = o.context) == null ? void 0 : l.open)
                    );
                  });
            })),
              (n = n.concat(r));
          return n;
        }
        function Ot(t, e) {
          let n,
            r = -1;
          function o(s, i) {
            i > r && ((n = s), (r = i)),
              it(t, s).forEach((v) => {
                o(v.id, i + 1);
              });
          }
          return o(e, 0), t.find((s) => s.id === n);
        }
        let ft = new WeakMap(),
          tt = new WeakSet(),
          mt = {},
          mn = 0;
        const Sr = () =>
            typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
          Yn = (t) => t && (t.host || Yn(t.parentNode)),
          Or = (t, e) =>
            e
              .map((n) => {
                if (t.contains(n)) return n;
                const r = Yn(n);
                return t.contains(r) ? r : null;
              })
              .filter((n) => n != null);
        function Tr(t, e, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            i = Or(e, t),
            l = new Set(),
            v = new Set(i),
            a = [];
          mt[o] || (mt[o] = new WeakMap());
          const g = mt[o];
          i.forEach(y), b(e), l.clear();
          function y(f) {
            !f || l.has(f) || (l.add(f), f.parentNode && y(f.parentNode));
          }
          function b(f) {
            !f ||
              v.has(f) ||
              [].forEach.call(f.children, (x) => {
                if ((0, le.mq)(x) !== "script")
                  if (l.has(x)) b(x);
                  else {
                    const h = s ? x.getAttribute(s) : null,
                      F = h !== null && h !== "false",
                      S = ft.get(x) || 0,
                      k = s ? S + 1 : S,
                      _ = (g.get(x) || 0) + 1;
                    ft.set(x, k),
                      g.set(x, _),
                      a.push(x),
                      k === 1 && F && tt.add(x),
                      _ === 1 && x.setAttribute(o, ""),
                      !F && s && x.setAttribute(s, "true");
                  }
              });
          }
          return (
            mn++,
            () => {
              a.forEach((f) => {
                const x = ft.get(f) || 0,
                  h = s ? x - 1 : x,
                  F = (g.get(f) || 0) - 1;
                ft.set(f, h),
                  g.set(f, F),
                  h || (!tt.has(f) && s && f.removeAttribute(s), tt.delete(f)),
                  F || f.removeAttribute(o);
              }),
                mn--,
                mn ||
                  ((ft = new WeakMap()),
                  (ft = new WeakMap()),
                  (tt = new WeakSet()),
                  (mt = {}));
            }
          );
        }
        function Xn(t, e, n) {
          e === void 0 && (e = !1), n === void 0 && (n = !1);
          const r = Fe(t[0]).body;
          return Tr(
            t.concat(Array.from(r.querySelectorAll("[aria-live]"))),
            r,
            e,
            n,
          );
        }
        const En = () => ({
          getShadowRoot: !0,
          displayCheck:
            typeof ResizeObserver == "function" &&
            ResizeObserver.toString().includes("[native code]")
              ? "full"
              : "none",
        });
        function Gn(t, e) {
          const n = Lt(t, En());
          e === "prev" && n.reverse();
          const r = n.indexOf(Me(Fe(t)));
          return n.slice(r + 1)[0];
        }
        function Zn() {
          return Gn(document.body, "next");
        }
        function Jn() {
          return Gn(document.body, "prev");
        }
        function gn(t, e) {
          const n = e || t.currentTarget,
            r = t.relatedTarget;
          return !r || !be(n, r);
        }
        function Pr(t) {
          tabbable(t, En()).forEach((n) => {
            (n.dataset.tabindex = n.getAttribute("tabindex") || ""),
              n.setAttribute("tabindex", "-1");
          });
        }
        function Qn(t) {
          t.querySelectorAll("[data-tabindex]").forEach((n) => {
            const r = n.dataset.tabindex;
            delete n.dataset.tabindex,
              r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
          });
        }
        const In = {
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
          Cn = E.forwardRef(function (e, n) {
            const [r, o] = E.useState();
            Re(() => {
              Kt() && o("button");
            }, []);
            const s = {
              ref: n,
              tabIndex: 0,
              role: r,
              "aria-hidden": r ? void 0 : !0,
              [q("focus-guard")]: "",
              style: In,
            };
            return (0, Le.jsx)("span", { ...e, ...s });
          }),
          er = E.createContext(null),
          tr = null;
        function Ar(t) {
          t === void 0 && (t = {});
          const { id: e, root: n } = t,
            r = p(),
            o = nr(),
            [s, i] = React.useState(null),
            l = React.useRef(null);
          return (
            Re(
              () => () => {
                s?.remove(),
                  queueMicrotask(() => {
                    l.current = null;
                  });
              },
              [s],
            ),
            Re(() => {
              if (!r || l.current) return;
              const v = e ? document.getElementById(e) : null;
              if (!v) return;
              const a = document.createElement("div");
              (a.id = r),
                a.setAttribute(tr, ""),
                v.appendChild(a),
                (l.current = a),
                i(a);
            }, [e, r]),
            Re(() => {
              if (n === null || !r || l.current) return;
              let v = n || o?.portalNode;
              v && !isElement(v) && (v = v.current), (v = v || document.body);
              let a = null;
              e &&
                ((a = document.createElement("div")),
                (a.id = e),
                v.appendChild(a));
              const g = document.createElement("div");
              (g.id = r),
                g.setAttribute(tr, ""),
                (v = a || v),
                v.appendChild(g),
                (l.current = g),
                i(g);
            }, [e, n, r, o]),
            s
          );
        }
        function Jr(t) {
          const { children: e, id: n, root: r, preserveTabOrder: o = !0 } = t,
            s = Ar({ id: n, root: r }),
            [i, l] = React.useState(null),
            v = React.useRef(null),
            a = React.useRef(null),
            g = React.useRef(null),
            y = React.useRef(null),
            b = i?.modal,
            f = i?.open,
            x = !!i && !i.modal && i.open && o && !!(r || s);
          return (
            React.useEffect(() => {
              if (!s || !o || b) return;
              function h(F) {
                s && gn(F) && (F.type === "focusin" ? Qn : Pr)(s);
              }
              return (
                s.addEventListener("focusin", h, !0),
                s.addEventListener("focusout", h, !0),
                () => {
                  s.removeEventListener("focusin", h, !0),
                    s.removeEventListener("focusout", h, !0);
                }
              );
            }, [s, o, b]),
            React.useEffect(() => {
              s && (f || Qn(s));
            }, [f, s]),
            jsxs(er.Provider, {
              value: React.useMemo(
                () => ({
                  preserveTabOrder: o,
                  beforeOutsideRef: v,
                  afterOutsideRef: a,
                  beforeInsideRef: g,
                  afterInsideRef: y,
                  portalNode: s,
                  setFocusManagerState: l,
                }),
                [o, s],
              ),
              children: [
                x &&
                  s &&
                  jsx(Cn, {
                    "data-type": "outside",
                    ref: v,
                    onFocus: (h) => {
                      if (gn(h, s)) {
                        var F;
                        (F = g.current) == null || F.focus();
                      } else {
                        const S = Jn() || i?.domReference;
                        S?.focus();
                      }
                    },
                  }),
                x && s && jsx("span", { "aria-owns": s.id, style: In }),
                s && ReactDOM.createPortal(e, s),
                x &&
                  s &&
                  jsx(Cn, {
                    "data-type": "outside",
                    ref: a,
                    onFocus: (h) => {
                      if (gn(h, s)) {
                        var F;
                        (F = y.current) == null || F.focus();
                      } else {
                        const S = Zn() || i?.domReference;
                        S?.focus(),
                          i?.closeOnFocusOut &&
                            i?.onOpenChange(!1, h.nativeEvent, "focus-out");
                      }
                    },
                  }),
              ],
            })
          );
        }
        const nr = () => E.useContext(er),
          Fn = "data-floating-ui-focusable";
        function Nn(t) {
          return t
            ? t.hasAttribute(Fn)
              ? t
              : t.querySelector("[" + Fn + "]") || t
            : null;
        }
        function rr(t) {
          return E.useMemo(
            () => (e) => {
              t.forEach((n) => {
                n && (n.current = e);
              });
            },
            t,
          );
        }
        const or = 20;
        let Qt = [];
        function _r(t) {
          (Qt = Qt.filter((e) => e.isConnected)),
            t &&
              (0, le.mq)(t) !== "body" &&
              (Qt.push(t), Qt.length > or && (Qt = Qt.slice(-or)));
        }
        function ir() {
          return Qt.slice()
            .reverse()
            .find((t) => t.isConnected);
        }
        function Mr(t) {
          const e = En();
          return Vt(t, e) ? t : Lt(t, e)[0] || t;
        }
        const kr = E.forwardRef(function (e, n) {
          return (0, Le.jsx)("button", {
            ...e,
            type: "button",
            ref: n,
            tabIndex: -1,
            style: In,
          });
        });
        function Lr(t) {
          const {
              context: e,
              children: n,
              disabled: r = !1,
              order: o = ["content"],
              guards: s = !0,
              initialFocus: i = 0,
              returnFocus: l = !0,
              restoreFocus: v = !1,
              modal: a = !0,
              visuallyHiddenDismiss: g = !1,
              closeOnFocusOut: y = !0,
              outsideElementsInert: b = !1,
            } = t,
            {
              open: f,
              onOpenChange: x,
              events: h,
              dataRef: F,
              elements: { domReference: S, floating: k },
            } = e,
            _ = ke(() => {
              var G;
              return (G = F.current.floatingContext) == null
                ? void 0
                : G.nodeId;
            }),
            oe = typeof i == "number" && i < 0,
            pe = Pe(S) && oe,
            re = Sr(),
            he = re ? s : !0,
            we = !he || (re && b),
            ae = ee(o),
            se = ee(i),
            Ee = ee(l),
            Q = C(),
            O = nr(),
            N = E.useRef(null),
            X = E.useRef(null),
            W = E.useRef(!1),
            V = E.useRef(!1),
            z = E.useRef(-1),
            L = O != null,
            A = Nn(k),
            U = ke(function (G) {
              return G === void 0 && (G = A), G ? Lt(G, En()) : [];
            }),
            ve = ke((G) => {
              const me = U(G);
              return ae.current
                .map((ce) =>
                  S && ce === "reference" ? S : A && ce === "floating" ? A : me,
                )
                .filter(Boolean)
                .flat();
            });
          E.useEffect(() => {
            if (r || !a) return;
            function G(ce) {
              if (ce.key === "Tab") {
                be(A, Me(Fe(A))) && U().length === 0 && !pe && xe(ce);
                const ge = ve(),
                  Ke = et(ce);
                ae.current[0] === "reference" &&
                  Ke === S &&
                  (xe(ce), ce.shiftKey ? He(ge[ge.length - 1]) : He(ge[1])),
                  ae.current[1] === "floating" &&
                    Ke === A &&
                    ce.shiftKey &&
                    (xe(ce), He(ge[0]));
              }
            }
            const me = Fe(A);
            return (
              me.addEventListener("keydown", G),
              () => {
                me.removeEventListener("keydown", G);
              }
            );
          }, [r, S, A, a, ae, pe, U, ve]),
            E.useEffect(() => {
              if (r || !k) return;
              function G(me) {
                const ce = et(me),
                  Ke = U().indexOf(ce);
                Ke !== -1 && (z.current = Ke);
              }
              return (
                k.addEventListener("focusin", G),
                () => {
                  k.removeEventListener("focusin", G);
                }
              );
            }, [r, k, U]),
            E.useEffect(() => {
              if (r || !y) return;
              function G() {
                (V.current = !0),
                  setTimeout(() => {
                    V.current = !1;
                  });
              }
              function me(ce) {
                const ge = ce.relatedTarget;
                queueMicrotask(() => {
                  const Ke = _(),
                    je = !(
                      be(S, ge) ||
                      be(k, ge) ||
                      be(ge, k) ||
                      be(O?.portalNode, ge) ||
                      (ge != null && ge.hasAttribute(q("focus-guard"))) ||
                      (Q &&
                        (it(Q.nodesRef.current, Ke).find((Be) => {
                          var Ve, pt;
                          return (
                            be(
                              (Ve = Be.context) == null
                                ? void 0
                                : Ve.elements.floating,
                              ge,
                            ) ||
                            be(
                              (pt = Be.context) == null
                                ? void 0
                                : pt.elements.domReference,
                              ge,
                            )
                          );
                        }) ||
                          at(Q.nodesRef.current, Ke).find((Be) => {
                            var Ve, pt, wt;
                            return (
                              [
                                (Ve = Be.context) == null
                                  ? void 0
                                  : Ve.elements.floating,
                                Nn(
                                  (pt = Be.context) == null
                                    ? void 0
                                    : pt.elements.floating,
                                ),
                              ].includes(ge) ||
                              ((wt = Be.context) == null
                                ? void 0
                                : wt.elements.domReference) === ge
                            );
                          })))
                    );
                  if (v && je && Me(Fe(A)) === Fe(A).body) {
                    (0, le.sb)(A) && A.focus();
                    const Be = z.current,
                      Ve = U(),
                      pt = Ve[Be] || Ve[Ve.length - 1] || A;
                    (0, le.sb)(pt) && pt.focus();
                  }
                  (pe || !a) &&
                    ge &&
                    je &&
                    !V.current &&
                    ge !== ir() &&
                    ((W.current = !0), x(!1, ce, "focus-out"));
                });
              }
              if (k && (0, le.sb)(S))
                return (
                  S.addEventListener("focusout", me),
                  S.addEventListener("pointerdown", G),
                  k.addEventListener("focusout", me),
                  () => {
                    S.removeEventListener("focusout", me),
                      S.removeEventListener("pointerdown", G),
                      k.removeEventListener("focusout", me);
                  }
                );
            }, [r, S, k, A, a, Q, O, x, y, v, U, pe, _]);
          const Ne = E.useRef(null),
            ze = E.useRef(null),
            gt = rr([Ne, O?.beforeInsideRef]),
            Xe = rr([ze, O?.afterInsideRef]);
          E.useEffect(() => {
            var G;
            if (r || !k) return;
            const me = Array.from(
                (O == null || (G = O.portalNode) == null
                  ? void 0
                  : G.querySelectorAll("[" + q("portal") + "]")) || [],
              ),
              ce =
                Q && !a
                  ? at(Q?.nodesRef.current, _()).map((je) => {
                      var Be;
                      return (Be = je.context) == null
                        ? void 0
                        : Be.elements.floating;
                    })
                  : [],
              ge = [
                k,
                ...me,
                ...ce,
                N.current,
                X.current,
                Ne.current,
                ze.current,
                O?.beforeOutsideRef.current,
                O?.afterOutsideRef.current,
                ae.current.includes("reference") || pe ? S : null,
              ].filter((je) => je != null),
              Ke = a || pe ? Xn(ge, !we, we) : Xn(ge);
            return () => {
              Ke();
            };
          }, [r, S, k, a, ae, O, pe, he, we, Q, _]),
            Re(() => {
              if (r || !(0, le.sb)(A)) return;
              const G = Fe(A),
                me = Me(G);
              queueMicrotask(() => {
                const ce = ve(A),
                  ge = se.current,
                  Ke = (typeof ge == "number" ? ce[ge] : ge.current) || A,
                  je = be(A, me);
                !oe && !je && f && He(Ke, { preventScroll: Ke === A });
              });
            }, [r, f, A, oe, ve, se]),
            Re(() => {
              if (r || !A) return;
              let G = !1,
                me = !1;
              const ce = Fe(A),
                ge = Me(ce);
              let je = F.current.openEvent;
              _r(ge);
              function Be(wt) {
                let { open: fe, reason: Ce, event: Y, nested: de } = wt;
                if (
                  (fe && (je = Y),
                  Ce === "escape-key" && (me = !0),
                  ["hover", "safe-polygon"].includes(Ce) &&
                    Y.type === "mouseleave" &&
                    (W.current = !0),
                  Ce === "outside-press")
                )
                  if (de) (W.current = !1), (G = !0);
                  else if (qe(Y) || Pt(Y)) W.current = !1;
                  else {
                    let Qe = !1;
                    document.createElement("div").focus({
                      get preventScroll() {
                        return (Qe = !0), !1;
                      },
                    }),
                      Qe ? ((W.current = !1), (G = !0)) : (W.current = !0);
                  }
              }
              h.on("openchange", Be);
              const Ve = ce.createElement("span");
              Ve.setAttribute("tabindex", "-1"),
                Ve.setAttribute("aria-hidden", "true"),
                Object.assign(Ve.style, In),
                L && S && S.insertAdjacentElement("afterend", Ve);
              function pt() {
                return typeof Ee.current == "boolean"
                  ? me && S
                    ? S
                    : ir() || Ve
                  : Ee.current.current || Ve;
              }
              return () => {
                h.off("openchange", Be);
                const wt = Me(ce),
                  fe =
                    be(k, wt) ||
                    (Q &&
                      it(Q.nodesRef.current, _()).some((Y) => {
                        var de;
                        return be(
                          (de = Y.context) == null
                            ? void 0
                            : de.elements.floating,
                          wt,
                        );
                      }));
                (fe || (je && ["click", "mousedown"].includes(je.type))) &&
                  (me = !0);
                const Ce = pt();
                queueMicrotask(() => {
                  const Y = Mr(Ce);
                  Ee.current &&
                    !W.current &&
                    (0, le.sb)(Y) &&
                    (!(Y !== wt && wt !== ce.body) || fe) &&
                    Y.focus({ preventScroll: G }),
                    Ve.remove();
                });
              };
            }, [r, k, A, Ee, F, h, Q, L, S, _]),
            E.useEffect(() => {
              queueMicrotask(() => {
                W.current = !1;
              });
            }, [r]),
            Re(() => {
              if (!r && O)
                return (
                  O.setFocusManagerState({
                    modal: a,
                    closeOnFocusOut: y,
                    open: f,
                    onOpenChange: x,
                    domReference: S,
                  }),
                  () => {
                    O.setFocusManagerState(null);
                  }
                );
            }, [r, O, a, f, x, y, S]),
            Re(() => {
              if (r || !A || typeof MutationObserver != "function" || oe)
                return;
              const G = () => {
                const ce = A.getAttribute("tabindex"),
                  ge = U(),
                  Ke = Me(Fe(k)),
                  je = ge.indexOf(Ke);
                je !== -1 && (z.current = je),
                  ae.current.includes("floating") ||
                  (Ke !== S && ge.length === 0)
                    ? ce !== "0" && A.setAttribute("tabindex", "0")
                    : ce !== "-1" && A.setAttribute("tabindex", "-1");
              };
              G();
              const me = new MutationObserver(G);
              return (
                me.observe(A, { childList: !0, subtree: !0, attributes: !0 }),
                () => {
                  me.disconnect();
                }
              );
            }, [r, k, A, S, ae, U, oe]);
          function We(G) {
            return r || !g || !a
              ? null
              : (0, Le.jsx)(kr, {
                  ref: G === "start" ? N : X,
                  onClick: (me) => x(!1, me.nativeEvent),
                  children: typeof g == "string" ? g : "Dismiss",
                });
          }
          const Ie = !r && he && (a ? !pe : !0) && (L || a);
          return (0, Le.jsxs)(Le.Fragment, {
            children: [
              Ie &&
                (0, Le.jsx)(Cn, {
                  "data-type": "inside",
                  ref: gt,
                  onFocus: (G) => {
                    if (a) {
                      const ce = ve();
                      He(o[0] === "reference" ? ce[0] : ce[ce.length - 1]);
                    } else if (O != null && O.preserveTabOrder && O.portalNode)
                      if (((W.current = !1), gn(G, O.portalNode))) {
                        const ce = Zn() || S;
                        ce?.focus();
                      } else {
                        var me;
                        (me = O.beforeOutsideRef.current) == null || me.focus();
                      }
                  },
                }),
              !pe && We("start"),
              n,
              We("end"),
              Ie &&
                (0, Le.jsx)(Cn, {
                  "data-type": "inside",
                  ref: Xe,
                  onFocus: (G) => {
                    if (a) He(ve()[0]);
                    else if (O != null && O.preserveTabOrder && O.portalNode)
                      if ((y && (W.current = !0), gn(G, O.portalNode))) {
                        const ce = Jn() || S;
                        ce?.focus();
                      } else {
                        var me;
                        (me = O.afterOutsideRef.current) == null || me.focus();
                      }
                  },
                }),
            ],
          });
        }
        let Qr = 0;
        function eo() {
          const t = /iP(hone|ad|od)|iOS/.test(getPlatform()),
            e = document.body.style,
            r =
              Math.round(
                document.documentElement.getBoundingClientRect().left,
              ) + document.documentElement.scrollLeft
                ? "paddingLeft"
                : "paddingRight",
            o = window.innerWidth - document.documentElement.clientWidth,
            s = e.left ? parseFloat(e.left) : window.scrollX,
            i = e.top ? parseFloat(e.top) : window.scrollY;
          if (((e.overflow = "hidden"), o && (e[r] = o + "px"), t)) {
            var l, v;
            const a =
                ((l = window.visualViewport) == null ? void 0 : l.offsetLeft) ||
                0,
              g =
                ((v = window.visualViewport) == null ? void 0 : v.offsetTop) ||
                0;
            Object.assign(e, {
              position: "fixed",
              top: -(i - Math.floor(g)) + "px",
              left: -(s - Math.floor(a)) + "px",
              right: "0",
            });
          }
          return () => {
            Object.assign(e, { overflow: "", [r]: "" }),
              t &&
                (Object.assign(e, {
                  position: "",
                  top: "",
                  left: "",
                  right: "",
                }),
                window.scrollTo(s, i));
          };
        }
        let to = () => {};
        const no = null;
        function sr(t) {
          return (0, le.sb)(t.target) && t.target.tagName === "BUTTON";
        }
        function cr(t) {
          return ie(t);
        }
        function Dr(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              onOpenChange: r,
              dataRef: o,
              elements: { domReference: s },
            } = t,
            {
              enabled: i = !0,
              event: l = "click",
              toggle: v = !0,
              ignoreMouse: a = !1,
              keyboardHandlers: g = !0,
              stickIfOpen: y = !0,
            } = e,
            b = E.useRef(),
            f = E.useRef(!1),
            x = E.useMemo(
              () => ({
                onPointerDown(h) {
                  b.current = h.pointerType;
                },
                onMouseDown(h) {
                  const F = b.current;
                  h.button === 0 &&
                    l !== "click" &&
                    ((Ge(F, !0) && a) ||
                      (n &&
                      v &&
                      (!(o.current.openEvent && y) ||
                        o.current.openEvent.type === "mousedown")
                        ? r(!1, h.nativeEvent, "click")
                        : (h.preventDefault(), r(!0, h.nativeEvent, "click"))));
                },
                onClick(h) {
                  const F = b.current;
                  if (l === "mousedown" && b.current) {
                    b.current = void 0;
                    return;
                  }
                  (Ge(F, !0) && a) ||
                    (n &&
                    v &&
                    (!(o.current.openEvent && y) ||
                      o.current.openEvent.type === "click")
                      ? r(!1, h.nativeEvent, "click")
                      : r(!0, h.nativeEvent, "click"));
                },
                onKeyDown(h) {
                  (b.current = void 0),
                    !(h.defaultPrevented || !g || sr(h)) &&
                      (h.key === " " &&
                        !cr(s) &&
                        (h.preventDefault(), (f.current = !0)),
                      h.key === "Enter" &&
                        r(!(n && v), h.nativeEvent, "click"));
                },
                onKeyUp(h) {
                  h.defaultPrevented ||
                    !g ||
                    sr(h) ||
                    cr(s) ||
                    (h.key === " " &&
                      f.current &&
                      ((f.current = !1), r(!(n && v), h.nativeEvent, "click")));
                },
              }),
              [o, s, l, a, g, r, n, y, v],
            );
          return E.useMemo(() => (i ? { reference: x } : {}), [i, x]);
        }
        function Fr(t, e) {
          let n = null,
            r = null,
            o = !1;
          return {
            contextElement: t || void 0,
            getBoundingClientRect() {
              var s;
              const i = t?.getBoundingClientRect() || {
                  width: 0,
                  height: 0,
                  x: 0,
                  y: 0,
                },
                l = e.axis === "x" || e.axis === "both",
                v = e.axis === "y" || e.axis === "both",
                a =
                  ["mouseenter", "mousemove"].includes(
                    ((s = e.dataRef.current.openEvent) == null
                      ? void 0
                      : s.type) || "",
                  ) && e.pointerType !== "touch";
              let g = i.width,
                y = i.height,
                b = i.x,
                f = i.y;
              return (
                n == null && e.x && l && (n = i.x - e.x),
                r == null && e.y && v && (r = i.y - e.y),
                (b -= n || 0),
                (f -= r || 0),
                (g = 0),
                (y = 0),
                !o || a
                  ? ((g = e.axis === "y" ? i.width : 0),
                    (y = e.axis === "x" ? i.height : 0),
                    (b = l && e.x != null ? e.x : b),
                    (f = v && e.y != null ? e.y : f))
                  : o &&
                    !a &&
                    ((y = e.axis === "x" ? i.height : y),
                    (g = e.axis === "y" ? i.width : g)),
                (o = !0),
                {
                  width: g,
                  height: y,
                  x: b,
                  y: f,
                  top: f,
                  right: b + g,
                  bottom: f + y,
                  left: b,
                }
              );
            },
          };
        }
        function lr(t) {
          return t != null && t.clientX != null;
        }
        function ro(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              dataRef: r,
              elements: { floating: o, domReference: s },
              refs: i,
            } = t,
            { enabled: l = !0, axis: v = "both", x: a = null, y: g = null } = e,
            y = React.useRef(!1),
            b = React.useRef(null),
            [f, x] = React.useState(),
            [h, F] = React.useState([]),
            S = ke((re, he) => {
              y.current ||
                (r.current.openEvent && !lr(r.current.openEvent)) ||
                i.setPositionReference(
                  Fr(s, { x: re, y: he, axis: v, dataRef: r, pointerType: f }),
                );
            }),
            k = ke((re) => {
              a != null ||
                g != null ||
                (n ? b.current || F([]) : S(re.clientX, re.clientY));
            }),
            _ = isMouseLikePointerType(f) ? o : n,
            oe = React.useCallback(() => {
              if (!_ || !l || a != null || g != null) return;
              const re = getWindow(o);
              function he(we) {
                const ae = getTarget(we);
                contains(o, ae)
                  ? (re.removeEventListener("mousemove", he),
                    (b.current = null))
                  : S(we.clientX, we.clientY);
              }
              if (!r.current.openEvent || lr(r.current.openEvent)) {
                re.addEventListener("mousemove", he);
                const we = () => {
                  re.removeEventListener("mousemove", he), (b.current = null);
                };
                return (b.current = we), we;
              }
              i.setPositionReference(s);
            }, [_, l, a, g, o, r, i, s, S]);
          React.useEffect(() => oe(), [oe, h]),
            React.useEffect(() => {
              l && !o && (y.current = !1);
            }, [l, o]),
            React.useEffect(() => {
              !l && n && (y.current = !0);
            }, [l, n]),
            Re(() => {
              l && (a != null || g != null) && ((y.current = !1), S(a, g));
            }, [l, a, g, S]);
          const pe = React.useMemo(() => {
            function re(he) {
              let { pointerType: we } = he;
              x(we);
            }
            return {
              onPointerDown: re,
              onPointerEnter: re,
              onMouseMove: k,
              onMouseEnter: k,
            };
          }, [k]);
          return React.useMemo(() => (l ? { reference: pe } : {}), [l, pe]);
        }
        const Nr = {
            pointerdown: "onPointerDown",
            mousedown: "onMouseDown",
            click: "onClick",
          },
          Wr = {
            pointerdown: "onPointerDownCapture",
            mousedown: "onMouseDownCapture",
            click: "onClickCapture",
          },
          ur = (t) => {
            var e, n;
            return {
              escapeKey:
                typeof t == "boolean" ? t : (e = t?.escapeKey) != null ? e : !1,
              outsidePress:
                typeof t == "boolean"
                  ? t
                  : (n = t?.outsidePress) != null
                    ? n
                    : !0,
            };
          };
        function Kr(t, e) {
          e === void 0 && (e = {});
          const { open: n, onOpenChange: r, elements: o, dataRef: s } = t,
            {
              enabled: i = !0,
              escapeKey: l = !0,
              outsidePress: v = !0,
              outsidePressEvent: a = "pointerdown",
              referencePress: g = !1,
              referencePressEvent: y = "pointerdown",
              ancestorScroll: b = !1,
              bubbles: f,
              capture: x,
            } = e,
            h = C(),
            F = ke(typeof v == "function" ? v : () => !1),
            S = typeof v == "function" ? F : v,
            k = E.useRef(!1),
            _ = E.useRef(!1),
            { escapeKey: oe, outsidePress: pe } = ur(f),
            { escapeKey: re, outsidePress: he } = ur(x),
            we = E.useRef(!1),
            ae = ke((X) => {
              var W;
              if (!n || !i || !l || X.key !== "Escape" || we.current) return;
              const V =
                  (W = s.current.floatingContext) == null ? void 0 : W.nodeId,
                z = h ? it(h.nodesRef.current, V) : [];
              if (!oe && (X.stopPropagation(), z.length > 0)) {
                let L = !0;
                if (
                  (z.forEach((A) => {
                    var U;
                    if (
                      (U = A.context) != null &&
                      U.open &&
                      !A.context.dataRef.current.__escapeKeyBubbles
                    ) {
                      L = !1;
                      return;
                    }
                  }),
                  !L)
                )
                  return;
              }
              r(!1, _t(X) ? X.nativeEvent : X, "escape-key");
            }),
            se = ke((X) => {
              var W;
              const V = () => {
                var z;
                ae(X),
                  (z = et(X)) == null || z.removeEventListener("keydown", V);
              };
              (W = et(X)) == null || W.addEventListener("keydown", V);
            }),
            Ee = ke((X) => {
              var W;
              const V = k.current;
              k.current = !1;
              const z = _.current;
              if (
                ((_.current = !1),
                (a === "click" && z) || V || (typeof S == "function" && !S(X)))
              )
                return;
              const L = et(X),
                A = "[" + q("inert") + "]",
                U = Fe(o.floating).querySelectorAll(A);
              let ve = (0, le.vq)(L) ? L : null;
              for (; ve && !(0, le.eu)(ve); ) {
                const Xe = (0, le.$4)(ve);
                if ((0, le.eu)(Xe) || !(0, le.vq)(Xe)) break;
                ve = Xe;
              }
              if (
                U.length &&
                (0, le.vq)(L) &&
                !nt(L) &&
                !be(L, o.floating) &&
                Array.from(U).every((Xe) => !be(ve, Xe))
              )
                return;
              if ((0, le.sb)(L) && N) {
                const Xe = (0, le.eu)(L),
                  We = (0, le.L9)(L),
                  Ie = /auto|scroll/,
                  G = Xe || Ie.test(We.overflowX),
                  me = Xe || Ie.test(We.overflowY),
                  ce = G && L.clientWidth > 0 && L.scrollWidth > L.clientWidth,
                  ge =
                    me && L.clientHeight > 0 && L.scrollHeight > L.clientHeight,
                  Ke = We.direction === "rtl",
                  je =
                    ge &&
                    (Ke
                      ? X.offsetX <= L.offsetWidth - L.clientWidth
                      : X.offsetX > L.clientWidth),
                  Be = ce && X.offsetY > L.clientHeight;
                if (je || Be) return;
              }
              const Ne =
                  (W = s.current.floatingContext) == null ? void 0 : W.nodeId,
                ze =
                  h &&
                  it(h.nodesRef.current, Ne).some((Xe) => {
                    var We;
                    return Dt(
                      X,
                      (We = Xe.context) == null ? void 0 : We.elements.floating,
                    );
                  });
              if (Dt(X, o.floating) || Dt(X, o.domReference) || ze) return;
              const gt = h ? it(h.nodesRef.current, Ne) : [];
              if (gt.length > 0) {
                let Xe = !0;
                if (
                  (gt.forEach((We) => {
                    var Ie;
                    if (
                      (Ie = We.context) != null &&
                      Ie.open &&
                      !We.context.dataRef.current.__outsidePressBubbles
                    ) {
                      Xe = !1;
                      return;
                    }
                  }),
                  !Xe)
                )
                  return;
              }
              r(!1, X, "outside-press");
            }),
            Q = ke((X) => {
              var W;
              const V = () => {
                var z;
                Ee(X), (z = et(X)) == null || z.removeEventListener(a, V);
              };
              (W = et(X)) == null || W.addEventListener(a, V);
            });
          E.useEffect(() => {
            if (!n || !i) return;
            (s.current.__escapeKeyBubbles = oe),
              (s.current.__outsidePressBubbles = pe);
            let X = -1;
            function W(U) {
              r(!1, U, "ancestor-scroll");
            }
            function V() {
              window.clearTimeout(X), (we.current = !0);
            }
            function z() {
              X = window.setTimeout(
                () => {
                  we.current = !1;
                },
                (0, le.Tc)() ? 5 : 0,
              );
            }
            const L = Fe(o.floating);
            l &&
              (L.addEventListener("keydown", re ? se : ae, re),
              L.addEventListener("compositionstart", V),
              L.addEventListener("compositionend", z)),
              S && L.addEventListener(a, he ? Q : Ee, he);
            let A = [];
            return (
              b &&
                ((0, le.vq)(o.domReference) && (A = (0, le.v9)(o.domReference)),
                (0, le.vq)(o.floating) &&
                  (A = A.concat((0, le.v9)(o.floating))),
                !(0, le.vq)(o.reference) &&
                  o.reference &&
                  o.reference.contextElement &&
                  (A = A.concat((0, le.v9)(o.reference.contextElement)))),
              (A = A.filter((U) => {
                var ve;
                return (
                  U !==
                  ((ve = L.defaultView) == null ? void 0 : ve.visualViewport)
                );
              })),
              A.forEach((U) => {
                U.addEventListener("scroll", W, { passive: !0 });
              }),
              () => {
                l &&
                  (L.removeEventListener("keydown", re ? se : ae, re),
                  L.removeEventListener("compositionstart", V),
                  L.removeEventListener("compositionend", z)),
                  S && L.removeEventListener(a, he ? Q : Ee, he),
                  A.forEach((U) => {
                    U.removeEventListener("scroll", W);
                  }),
                  window.clearTimeout(X);
              }
            );
          }, [s, o, l, S, a, n, r, b, i, oe, pe, ae, re, se, Ee, he, Q]),
            E.useEffect(() => {
              k.current = !1;
            }, [S, a]);
          const O = E.useMemo(
              () => ({
                onKeyDown: ae,
                ...(g && {
                  [Nr[y]]: (X) => {
                    r(!1, X.nativeEvent, "reference-press");
                  },
                  ...(y !== "click" && {
                    onClick(X) {
                      r(!1, X.nativeEvent, "reference-press");
                    },
                  }),
                }),
              }),
              [ae, r, g, y],
            ),
            N = E.useMemo(
              () => ({
                onKeyDown: ae,
                onMouseDown() {
                  _.current = !0;
                },
                onMouseUp() {
                  _.current = !0;
                },
                [Wr[a]]: () => {
                  k.current = !0;
                },
              }),
              [ae, a],
            );
          return E.useMemo(
            () => (i ? { reference: O, floating: N } : {}),
            [i, O, N],
          );
        }
        function Br(t) {
          const { open: e = !1, onOpenChange: n, elements: r } = t,
            o = p(),
            s = E.useRef({}),
            [i] = E.useState(() => D()),
            l = B() != null,
            [v, a] = E.useState(r.reference),
            g = ke((f, x, h) => {
              (s.current.openEvent = f ? x : void 0),
                i.emit("openchange", {
                  open: f,
                  event: x,
                  reason: h,
                  nested: l,
                }),
                n?.(f, x, h);
            }),
            y = E.useMemo(() => ({ setPositionReference: a }), []),
            b = E.useMemo(
              () => ({
                reference: v || r.reference || null,
                floating: r.floating || null,
                domReference: r.reference,
              }),
              [v, r.reference, r.floating],
            );
          return E.useMemo(
            () => ({
              dataRef: s,
              open: e,
              onOpenChange: g,
              elements: b,
              events: i,
              floatingId: o,
              refs: y,
            }),
            [e, g, b, i, o, y],
          );
        }
        function Vr(t) {
          t === void 0 && (t = {});
          const { nodeId: e } = t,
            n = Br({
              ...t,
              elements: { reference: null, floating: null, ...t.elements },
            }),
            r = t.rootContext || n,
            o = r.elements,
            [s, i] = E.useState(null),
            [l, v] = E.useState(null),
            g = o?.domReference || s,
            y = E.useRef(null),
            b = C();
          Re(() => {
            g && (y.current = g);
          }, [g]);
          const f = (0, rn.we)({
              ...t,
              elements: { ...o, ...(l && { reference: l }) },
            }),
            x = E.useCallback(
              (_) => {
                const oe = (0, le.vq)(_)
                  ? {
                      getBoundingClientRect: () => _.getBoundingClientRect(),
                      contextElement: _,
                    }
                  : _;
                v(oe), f.refs.setReference(oe);
              },
              [f.refs],
            ),
            h = E.useCallback(
              (_) => {
                ((0, le.vq)(_) || _ === null) && ((y.current = _), i(_)),
                  ((0, le.vq)(f.refs.reference.current) ||
                    f.refs.reference.current === null ||
                    (_ !== null && !(0, le.vq)(_))) &&
                    f.refs.setReference(_);
              },
              [f.refs],
            ),
            F = E.useMemo(
              () => ({
                ...f.refs,
                setReference: h,
                setPositionReference: x,
                domReference: y,
              }),
              [f.refs, h, x],
            ),
            S = E.useMemo(
              () => ({ ...f.elements, domReference: g }),
              [f.elements, g],
            ),
            k = E.useMemo(
              () => ({ ...f, ...r, refs: F, elements: S, nodeId: e }),
              [f, F, S, e, r],
            );
          return (
            Re(() => {
              r.dataRef.current.floatingContext = k;
              const _ = b?.nodesRef.current.find((oe) => oe.id === e);
              _ && (_.context = k);
            }),
            E.useMemo(
              () => ({ ...f, context: k, refs: F, elements: S }),
              [f, F, S, k],
            )
          );
        }
        function $r(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              onOpenChange: r,
              events: o,
              dataRef: s,
              elements: i,
            } = t,
            { enabled: l = !0, visibleOnly: v = !0 } = e,
            a = E.useRef(!1),
            g = E.useRef(-1),
            y = E.useRef(!0);
          E.useEffect(() => {
            if (!l) return;
            const f = (0, le.zk)(i.domReference);
            function x() {
              !n &&
                (0, le.sb)(i.domReference) &&
                i.domReference === Me(Fe(i.domReference)) &&
                (a.current = !0);
            }
            function h() {
              y.current = !0;
            }
            return (
              f.addEventListener("blur", x),
              f.addEventListener("keydown", h, !0),
              () => {
                f.removeEventListener("blur", x),
                  f.removeEventListener("keydown", h, !0);
              }
            );
          }, [i.domReference, n, l]),
            E.useEffect(() => {
              if (!l) return;
              function f(x) {
                let { reason: h } = x;
                (h === "reference-press" || h === "escape-key") &&
                  (a.current = !0);
              }
              return (
                o.on("openchange", f),
                () => {
                  o.off("openchange", f);
                }
              );
            }, [o, l]),
            E.useEffect(
              () => () => {
                J(g);
              },
              [],
            );
          const b = E.useMemo(
            () => ({
              onPointerDown(f) {
                Pt(f.nativeEvent) || (y.current = !1);
              },
              onMouseLeave() {
                a.current = !1;
              },
              onFocus(f) {
                if (a.current) return;
                const x = et(f.nativeEvent);
                if (v && (0, le.vq)(x))
                  try {
                    if (Kt() && dt()) throw Error();
                    if (!x.matches(":focus-visible")) return;
                  } catch {
                    if (!y.current && !ie(x)) return;
                  }
                r(!0, f.nativeEvent, "focus");
              },
              onBlur(f) {
                a.current = !1;
                const x = f.relatedTarget,
                  h = f.nativeEvent,
                  F =
                    (0, le.vq)(x) &&
                    x.hasAttribute(q("focus-guard")) &&
                    x.getAttribute("data-type") === "outside";
                g.current = window.setTimeout(() => {
                  var S;
                  const k = Me(
                    i.domReference ? i.domReference.ownerDocument : document,
                  );
                  (!x && k === i.domReference) ||
                    be(
                      (S = s.current.floatingContext) == null
                        ? void 0
                        : S.refs.floating.current,
                      k,
                    ) ||
                    be(i.domReference, k) ||
                    F ||
                    r(!1, h, "focus");
                });
              },
            }),
            [s, i.domReference, r, v],
          );
          return E.useMemo(() => (l ? { reference: b } : {}), [l, b]);
        }
        const ar = "active",
          fr = "selected";
        function Wn(t, e, n) {
          const r = new Map(),
            o = n === "item";
          let s = t;
          if (o && t) {
            const { [ar]: i, [fr]: l, ...v } = t;
            s = v;
          }
          return {
            ...(n === "floating" && { tabIndex: -1, [Fn]: "" }),
            ...s,
            ...e
              .map((i) => {
                const l = i ? i[n] : null;
                return typeof l == "function" ? (t ? l(t) : null) : l;
              })
              .concat(t)
              .reduce(
                (i, l) => (
                  l &&
                    Object.entries(l).forEach((v) => {
                      let [a, g] = v;
                      if (!(o && [ar, fr].includes(a)))
                        if (a.indexOf("on") === 0) {
                          if (
                            (r.has(a) || r.set(a, []), typeof g == "function")
                          ) {
                            var y;
                            (y = r.get(a)) == null || y.push(g),
                              (i[a] = function () {
                                for (
                                  var b,
                                    f = arguments.length,
                                    x = new Array(f),
                                    h = 0;
                                  h < f;
                                  h++
                                )
                                  x[h] = arguments[h];
                                return (b = r.get(a)) == null
                                  ? void 0
                                  : b
                                      .map((F) => F(...x))
                                      .find((F) => F !== void 0);
                              });
                          }
                        } else i[a] = g;
                    }),
                  i
                ),
                {},
              ),
          };
        }
        function jr(t) {
          t === void 0 && (t = []);
          const e = t.map((l) => l?.reference),
            n = t.map((l) => l?.floating),
            r = t.map((l) => l?.item),
            o = E.useCallback((l) => Wn(l, t, "reference"), e),
            s = E.useCallback((l) => Wn(l, t, "floating"), n),
            i = E.useCallback((l) => Wn(l, t, "item"), r);
          return E.useMemo(
            () => ({
              getReferenceProps: o,
              getFloatingProps: s,
              getItemProps: i,
            }),
            [o, s, i],
          );
        }
        const Hr = "Escape";
        function Sn(t, e, n) {
          switch (t) {
            case "vertical":
              return e;
            case "horizontal":
              return n;
            default:
              return e || n;
          }
        }
        function Kn(t, e) {
          return Sn(e, t === on || t === jt, t === Rt || t === St);
        }
        function Bn(t, e, n) {
          return (
            Sn(e, t === jt, n ? t === Rt : t === St) ||
            t === "Enter" ||
            t === " " ||
            t === ""
          );
        }
        function dr(t, e, n) {
          return Sn(e, n ? t === Rt : t === St, t === jt);
        }
        function mr(t, e, n, r) {
          const o = n ? t === St : t === Rt,
            s = t === on;
          return e === "both" || (e === "horizontal" && r && r > 1)
            ? t === Hr
            : Sn(e, o, s);
        }
        function oo(t, e) {
          const { open: n, onOpenChange: r, elements: o } = t,
            {
              listRef: s,
              activeIndex: i,
              onNavigate: l = () => {},
              enabled: v = !0,
              selectedIndex: a = null,
              allowEscape: g = !1,
              loop: y = !1,
              nested: b = !1,
              rtl: f = !1,
              virtual: x = !1,
              focusItemOnOpen: h = "auto",
              focusItemOnHover: F = !0,
              openOnArrowKeyDown: S = !0,
              disabledIndices: k = void 0,
              orientation: _ = "vertical",
              cols: oe = 1,
              scrollItemIntoView: pe = !0,
              virtualItemRef: re,
              itemSizes: he,
              dense: we = !1,
            } = e,
            ae = Nn(o.floating),
            se = ee(ae),
            Ee = B(),
            Q = C();
          Re(() => {
            t.dataRef.current.orientation = _;
          }, [t, _]);
          const O = ke(() => {
              l(W.current === -1 ? null : W.current);
            }),
            N = isTypeableCombobox(o.domReference),
            X = React.useRef(h),
            W = React.useRef(a ?? -1),
            V = React.useRef(null),
            z = React.useRef(!0),
            L = React.useRef(O),
            A = React.useRef(!!o.floating),
            U = React.useRef(n),
            ve = React.useRef(!1),
            Ne = React.useRef(!1),
            ze = ee(k),
            gt = ee(n),
            Xe = ee(pe),
            We = ee(a),
            [Ie, G] = React.useState(),
            [me, ce] = React.useState(),
            ge = ke(() => {
              function fe(de) {
                x
                  ? (G(de.id),
                    Q?.events.emit("virtualfocus", de),
                    re && (re.current = de))
                  : He(de, { sync: ve.current, preventScroll: !0 });
              }
              const Ce = s.current[W.current];
              Ce && fe(Ce),
                (ve.current ? (de) => de() : requestAnimationFrame)(() => {
                  const de = s.current[W.current] || Ce;
                  if (!de) return;
                  Ce || fe(de);
                  const Qe = Xe.current;
                  Qe &&
                    je &&
                    (Ne.current || !z.current) &&
                    (de.scrollIntoView == null ||
                      de.scrollIntoView(
                        typeof Qe == "boolean"
                          ? { block: "nearest", inline: "nearest" }
                          : Qe,
                      ));
                });
            });
          Re(() => {
            v &&
              (n && o.floating
                ? X.current &&
                  a != null &&
                  ((Ne.current = !0), (W.current = a), O())
                : A.current && ((W.current = -1), L.current()));
          }, [v, n, o.floating, a, O]),
            Re(() => {
              if (v && n && o.floating)
                if (i == null) {
                  if (((ve.current = !1), We.current != null)) return;
                  if (
                    (A.current && ((W.current = -1), ge()),
                    (!U.current || !A.current) &&
                      X.current &&
                      (V.current != null ||
                        (X.current === !0 && V.current == null)))
                  ) {
                    let fe = 0;
                    const Ce = () => {
                      s.current[0] == null
                        ? (fe < 2 &&
                            (fe ? requestAnimationFrame : queueMicrotask)(Ce),
                          fe++)
                        : ((W.current =
                            V.current == null || Bn(V.current, _, f) || b
                              ? dn(s, ze.current)
                              : cn(s, ze.current)),
                          (V.current = null),
                          O());
                    };
                    Ce();
                  }
                } else Zt(s, i) || ((W.current = i), ge(), (Ne.current = !1));
            }, [v, n, o.floating, i, We, b, s, _, f, O, ge, ze]),
            Re(() => {
              var fe;
              if (!v || o.floating || !Q || x || !A.current) return;
              const Ce = Q.nodesRef.current,
                Y =
                  (fe = Ce.find((st) => st.id === Ee)) == null ||
                  (fe = fe.context) == null
                    ? void 0
                    : fe.elements.floating,
                de = activeElement(getDocument(o.floating)),
                Qe = Ce.some(
                  (st) =>
                    st.context && contains(st.context.elements.floating, de),
                );
              Y && !Qe && z.current && Y.focus({ preventScroll: !0 });
            }, [v, o.floating, Q, Ee, x]),
            Re(() => {
              if (!v || !Q || !x || Ee) return;
              function fe(Ce) {
                ce(Ce.id), re && (re.current = Ce);
              }
              return (
                Q.events.on("virtualfocus", fe),
                () => {
                  Q.events.off("virtualfocus", fe);
                }
              );
            }, [v, Q, x, Ee, re]),
            Re(() => {
              (L.current = O), (U.current = n), (A.current = !!o.floating);
            }),
            Re(() => {
              n || (V.current = null);
            }, [n]);
          const Ke = i != null,
            je = React.useMemo(() => {
              function fe(Y) {
                if (!n) return;
                const de = s.current.indexOf(Y);
                de !== -1 && W.current !== de && ((W.current = de), O());
              }
              return {
                onFocus(Y) {
                  let { currentTarget: de } = Y;
                  (ve.current = !0), fe(de);
                },
                onClick: (Y) => {
                  let { currentTarget: de } = Y;
                  return de.focus({ preventScroll: !0 });
                },
                ...(F && {
                  onMouseMove(Y) {
                    let { currentTarget: de } = Y;
                    (ve.current = !0), (Ne.current = !1), fe(de);
                  },
                  onPointerLeave(Y) {
                    let { pointerType: de } = Y;
                    if (
                      !(!z.current || de === "touch") &&
                      ((ve.current = !0), (W.current = -1), O(), !x)
                    ) {
                      var Qe;
                      (Qe = se.current) == null ||
                        Qe.focus({ preventScroll: !0 });
                    }
                  },
                }),
              };
            }, [n, se, F, s, O, x]),
            Be = ke((fe) => {
              if (
                ((z.current = !1),
                (ve.current = !0),
                fe.which === 229 ||
                  (!gt.current && fe.currentTarget === se.current))
              )
                return;
              if (b && mr(fe.key, _, f, oe)) {
                stopEvent(fe),
                  r(!1, fe.nativeEvent, "list-navigation"),
                  isHTMLElement(o.domReference) &&
                    (x
                      ? Q?.events.emit("virtualfocus", o.domReference)
                      : o.domReference.focus());
                return;
              }
              const Ce = W.current,
                Y = dn(s, k),
                de = cn(s, k);
              if (
                (N ||
                  (fe.key === "Home" && (stopEvent(fe), (W.current = Y), O()),
                  fe.key === "End" && (stopEvent(fe), (W.current = de), O())),
                oe > 1)
              ) {
                const Qe =
                    he ||
                    Array.from({ length: s.current.length }, () => ({
                      width: 1,
                      height: 1,
                    })),
                  st = _n(Qe, oe, we),
                  Vn = st.findIndex(
                    (Tt) => Tt != null && !Jt(s.current, Tt, k),
                  ),
                  On = st.reduce(
                    (Tt, Ht, hn) =>
                      Ht != null && !Jt(s.current, Ht, k) ? hn : Tt,
                    -1,
                  ),
                  pn =
                    st[
                      Rn(
                        {
                          current: st.map((Tt) =>
                            Tt != null ? s.current[Tt] : null,
                          ),
                        },
                        {
                          event: fe,
                          orientation: _,
                          loop: y,
                          rtl: f,
                          cols: oe,
                          disabledIndices: yn(
                            [
                              ...(k ||
                                s.current.map((Tt, Ht) =>
                                  Jt(s.current, Ht) ? Ht : void 0,
                                )),
                              void 0,
                            ],
                            st,
                          ),
                          minIndex: Vn,
                          maxIndex: On,
                          prevIndex: Mn(
                            W.current > de ? Y : W.current,
                            Qe,
                            st,
                            oe,
                            fe.key === jt
                              ? "bl"
                              : fe.key === (f ? Rt : St)
                                ? "tr"
                                : "tl",
                          ),
                          stopEvent: !0,
                        },
                      )
                    ];
                if ((pn != null && ((W.current = pn), O()), _ === "both"))
                  return;
              }
              if (Kn(fe.key, _)) {
                if (
                  (stopEvent(fe),
                  n &&
                    !x &&
                    activeElement(fe.currentTarget.ownerDocument) ===
                      fe.currentTarget)
                ) {
                  (W.current = Bn(fe.key, _, f) ? Y : de), O();
                  return;
                }
                Bn(fe.key, _, f)
                  ? y
                    ? (W.current =
                        Ce >= de
                          ? g && Ce !== s.current.length
                            ? -1
                            : Y
                          : Ye(s, { startingIndex: Ce, disabledIndices: k }))
                    : (W.current = Math.min(
                        de,
                        Ye(s, { startingIndex: Ce, disabledIndices: k }),
                      ))
                  : y
                    ? (W.current =
                        Ce <= Y
                          ? g && Ce !== -1
                            ? s.current.length
                            : de
                          : Ye(s, {
                              startingIndex: Ce,
                              decrement: !0,
                              disabledIndices: k,
                            }))
                    : (W.current = Math.max(
                        Y,
                        Ye(s, {
                          startingIndex: Ce,
                          decrement: !0,
                          disabledIndices: k,
                        }),
                      )),
                  Zt(s, W.current) && (W.current = -1),
                  O();
              }
            }),
            Ve = React.useMemo(
              () => x && n && Ke && { "aria-activedescendant": me || Ie },
              [x, n, Ke, me, Ie],
            ),
            pt = React.useMemo(
              () => ({
                "aria-orientation": _ === "both" ? void 0 : _,
                ...(N ? {} : Ve),
                onKeyDown: Be,
                onPointerMove() {
                  z.current = !0;
                },
              }),
              [Ve, Be, _, N],
            ),
            wt = React.useMemo(() => {
              function fe(Y) {
                h === "auto" &&
                  isVirtualClick(Y.nativeEvent) &&
                  (X.current = !0);
              }
              function Ce(Y) {
                (X.current = h),
                  h === "auto" &&
                    isVirtualPointerEvent(Y.nativeEvent) &&
                    (X.current = !0);
              }
              return {
                ...Ve,
                onKeyDown(Y) {
                  var de;
                  z.current = !1;
                  const Qe = Y.key.startsWith("Arrow"),
                    st = ["Home", "End"].includes(Y.key),
                    Vn = Qe || st,
                    On =
                      Q == null ||
                      (de = Q.nodesRef.current.find((un) => un.id === Ee)) ==
                        null ||
                      (de = de.context) == null ||
                      (de = de.dataRef) == null
                        ? void 0
                        : de.current.orientation,
                    pn = dr(Y.key, _, f),
                    Tt = mr(Y.key, _, f, oe),
                    Ht = dr(Y.key, On, f),
                    hn = Kn(Y.key, _),
                    Gr =
                      (b ? Ht : hn) || Y.key === "Enter" || Y.key.trim() === "";
                  if (x && n) {
                    const un = Q?.nodesRef.current.find(
                        (Tn) => Tn.parentId == null,
                      ),
                      zt = Q && un ? Ot(Q.nodesRef.current, un.id) : null;
                    if (Vn && zt && re) {
                      const Tn = new KeyboardEvent("keydown", {
                        key: Y.key,
                        bubbles: !0,
                      });
                      if (pn || Tt) {
                        var vr, br;
                        const Zr =
                            ((vr = zt.context) == null
                              ? void 0
                              : vr.elements.domReference) === Y.currentTarget,
                          Rr =
                            Tt && !Zr
                              ? (br = zt.context) == null
                                ? void 0
                                : br.elements.domReference
                              : pn
                                ? s.current.find((yr) => yr?.id === Ie)
                                : null;
                        Rr && (stopEvent(Y), Rr.dispatchEvent(Tn), ce(void 0));
                      }
                      if (
                        (hn || st) &&
                        zt.context &&
                        zt.context.open &&
                        zt.parentId &&
                        Y.currentTarget !== zt.context.elements.domReference
                      ) {
                        var xr;
                        stopEvent(Y),
                          (xr = zt.context.elements.domReference) == null ||
                            xr.dispatchEvent(Tn);
                        return;
                      }
                    }
                    return Be(Y);
                  }
                  if (!(!n && !S && Qe)) {
                    if (Gr) {
                      const un = Kn(Y.key, On);
                      V.current = b && un ? null : Y.key;
                    }
                    if (b) {
                      Ht &&
                        (stopEvent(Y),
                        n
                          ? ((W.current = dn(s, ze.current)), O())
                          : r(!0, Y.nativeEvent, "list-navigation"));
                      return;
                    }
                    hn &&
                      (a != null && (W.current = a),
                      stopEvent(Y),
                      !n && S ? r(!0, Y.nativeEvent, "list-navigation") : Be(Y),
                      n && O());
                  }
                },
                onFocus() {
                  n && !x && ((W.current = -1), O());
                },
                onPointerDown: Ce,
                onPointerEnter: Ce,
                onMouseDown: fe,
                onClick: fe,
              };
            }, [
              Ie,
              Ve,
              oe,
              Be,
              ze,
              h,
              s,
              b,
              O,
              r,
              n,
              S,
              _,
              Ee,
              f,
              a,
              Q,
              x,
              re,
            ]);
          return React.useMemo(
            () => (v ? { reference: wt, floating: pt, item: je } : {}),
            [v, wt, pt, je],
          );
        }
        const zr = new Map([
          ["select", "listbox"],
          ["combobox", "listbox"],
          ["label", !1],
        ]);
        function io(t, e) {
          var n;
          e === void 0 && (e = {});
          const { open: r, floatingId: o } = t,
            { enabled: s = !0, role: i = "dialog" } = e,
            l = (n = zr.get(i)) != null ? n : i,
            v = p(),
            g = B() != null,
            y = React.useMemo(
              () =>
                l === "tooltip" || i === "label"
                  ? {
                      ["aria-" +
                        (i === "label" ? "labelledby" : "describedby")]: r
                        ? o
                        : void 0,
                    }
                  : {
                      "aria-expanded": r ? "true" : "false",
                      "aria-haspopup": l === "alertdialog" ? "dialog" : l,
                      "aria-controls": r ? o : void 0,
                      ...(l === "listbox" && { role: "combobox" }),
                      ...(l === "menu" && { id: v }),
                      ...(l === "menu" && g && { role: "menuitem" }),
                      ...(i === "select" && { "aria-autocomplete": "none" }),
                      ...(i === "combobox" && { "aria-autocomplete": "list" }),
                    },
              [l, o, g, r, v, i],
            ),
            b = React.useMemo(() => {
              const x = { id: o, ...(l && { role: l }) };
              return l === "tooltip" || i === "label"
                ? x
                : { ...x, ...(l === "menu" && { "aria-labelledby": v }) };
            }, [l, o, v, i]),
            f = React.useCallback(
              (x) => {
                let { active: h, selected: F } = x;
                const S = { role: "option", ...(h && { id: o + "-option" }) };
                switch (i) {
                  case "select":
                    return { ...S, "aria-selected": h && F };
                  case "combobox":
                    return { ...S, ...(h && { "aria-selected": !0 }) };
                }
                return {};
              },
              [o, i],
            );
          return React.useMemo(
            () => (s ? { reference: y, floating: b, item: f } : {}),
            [s, y, b, f],
          );
        }
        const gr = (t) =>
          t.replace(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            (e, n) => (n ? "-" : "") + e.toLowerCase(),
          );
        function ln(t, e) {
          return typeof t == "function" ? t(e) : t;
        }
        function qr(t, e) {
          const [n, r] = React.useState(t);
          return (
            t && !n && r(!0),
            React.useEffect(() => {
              if (!t && n) {
                const o = setTimeout(() => r(!1), e);
                return () => clearTimeout(o);
              }
            }, [t, n, e]),
            n
          );
        }
        function Ur(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              elements: { floating: r },
            } = t,
            { duration: o = 250 } = e,
            i = (typeof o == "number" ? o : o.close) || 0,
            [l, v] = React.useState("unmounted"),
            a = qr(n, i);
          return (
            !a && l === "close" && v("unmounted"),
            Re(() => {
              if (r) {
                if (n) {
                  v("initial");
                  const g = requestAnimationFrame(() => {
                    v("open");
                  });
                  return () => {
                    cancelAnimationFrame(g);
                  };
                }
                v("close");
              }
            }, [n, r]),
            { isMounted: a, status: l }
          );
        }
        function so(t, e) {
          e === void 0 && (e = {});
          const {
              initial: n = { opacity: 0 },
              open: r,
              close: o,
              common: s,
              duration: i = 250,
            } = e,
            l = t.placement,
            v = l.split("-")[0],
            a = React.useMemo(() => ({ side: v, placement: l }), [v, l]),
            g = typeof i == "number",
            y = (g ? i : i.open) || 0,
            b = (g ? i : i.close) || 0,
            [f, x] = React.useState(() => ({ ...ln(s, a), ...ln(n, a) })),
            { isMounted: h, status: F } = Ur(t, { duration: i }),
            S = ee(n),
            k = ee(r),
            _ = ee(o),
            oe = ee(s);
          return (
            Re(() => {
              const pe = ln(S.current, a),
                re = ln(_.current, a),
                he = ln(oe.current, a),
                we =
                  ln(k.current, a) ||
                  Object.keys(pe).reduce((ae, se) => ((ae[se] = ""), ae), {});
              if (
                (F === "initial" &&
                  x((ae) => ({
                    transitionProperty: ae.transitionProperty,
                    ...he,
                    ...pe,
                  })),
                F === "open" &&
                  x({
                    transitionProperty: Object.keys(we).map(gr).join(","),
                    transitionDuration: y + "ms",
                    ...he,
                    ...we,
                  }),
                F === "close")
              ) {
                const ae = re || pe;
                x({
                  transitionProperty: Object.keys(ae).map(gr).join(","),
                  transitionDuration: b + "ms",
                  ...he,
                  ...ae,
                });
              }
            }, [b, _, S, k, oe, y, F, a]),
            { isMounted: h, styles: f }
          );
        }
        function co(t, e) {
          var n;
          const { open: r, dataRef: o } = t,
            {
              listRef: s,
              activeIndex: i,
              onMatch: l,
              onTypingChange: v,
              enabled: a = !0,
              findMatch: g = null,
              resetMs: y = 750,
              ignoreKeys: b = [],
              selectedIndex: f = null,
            } = e,
            x = React.useRef(-1),
            h = React.useRef(""),
            F = React.useRef((n = f ?? i) != null ? n : -1),
            S = React.useRef(null),
            k = ke(l),
            _ = ke(v),
            oe = ee(g),
            pe = ee(b);
          Re(() => {
            r && (J(x), (S.current = null), (h.current = ""));
          }, [r]),
            Re(() => {
              if (r && h.current === "") {
                var se;
                F.current = (se = f ?? i) != null ? se : -1;
              }
            }, [r, f, i]);
          const re = ke((se) => {
              se
                ? o.current.typing || ((o.current.typing = se), _(se))
                : o.current.typing && ((o.current.typing = se), _(se));
            }),
            he = ke((se) => {
              function Ee(W, V, z) {
                const L = oe.current
                  ? oe.current(V, z)
                  : V.find(
                      (A) =>
                        A?.toLocaleLowerCase().indexOf(
                          z.toLocaleLowerCase(),
                        ) === 0,
                    );
                return L ? W.indexOf(L) : -1;
              }
              const Q = s.current;
              if (
                (h.current.length > 0 &&
                  h.current[0] !== " " &&
                  (Ee(Q, Q, h.current) === -1
                    ? re(!1)
                    : se.key === " " && stopEvent(se)),
                Q == null ||
                  pe.current.includes(se.key) ||
                  se.key.length !== 1 ||
                  se.ctrlKey ||
                  se.metaKey ||
                  se.altKey)
              )
                return;
              r && se.key !== " " && (stopEvent(se), re(!0)),
                Q.every((W) => {
                  var V, z;
                  return W
                    ? ((V = W[0]) == null ? void 0 : V.toLocaleLowerCase()) !==
                        ((z = W[1]) == null ? void 0 : z.toLocaleLowerCase())
                    : !0;
                }) &&
                  h.current === se.key &&
                  ((h.current = ""), (F.current = S.current)),
                (h.current += se.key),
                J(x),
                (x.current = window.setTimeout(() => {
                  (h.current = ""), (F.current = S.current), re(!1);
                }, y));
              const N = F.current,
                X = Ee(
                  Q,
                  [...Q.slice((N || 0) + 1), ...Q.slice(0, (N || 0) + 1)],
                  h.current,
                );
              X !== -1
                ? (k(X), (S.current = X))
                : se.key !== " " && ((h.current = ""), re(!1));
            }),
            we = React.useMemo(() => ({ onKeyDown: he }), [he]),
            ae = React.useMemo(
              () => ({
                onKeyDown: he,
                onKeyUp(se) {
                  se.key === " " && re(!1);
                },
              }),
              [he, re],
            );
          return React.useMemo(
            () => (a ? { reference: we, floating: ae } : {}),
            [a, we, ae],
          );
        }
        function pr(t, e) {
          return {
            ...t,
            rects: { ...t.rects, floating: { ...t.rects.floating, height: e } },
          };
        }
        const lo = (t) => ({
          name: "inner",
          options: t,
          async fn(e) {
            const {
                listRef: n,
                overflowRef: r,
                onFallbackChange: o,
                offset: s = 0,
                index: i = 0,
                minItemsVisible: l = 4,
                referenceOverflowThreshold: v = 0,
                scrollRef: a,
                ...g
              } = evaluate(t, e),
              {
                rects: y,
                elements: { floating: b },
              } = e,
              f = n.current[i],
              x = a?.current || b,
              h = b.clientTop || x.clientTop,
              F = b.clientTop !== 0,
              S = x.clientTop !== 0,
              k = b === x;
            if (!f) return {};
            const _ = {
                ...e,
                ...(await offset(
                  -f.offsetTop -
                    b.clientTop -
                    y.reference.height / 2 -
                    f.offsetHeight / 2 -
                    s,
                ).fn(e)),
              },
              oe = await detectOverflow(
                pr(_, x.scrollHeight + h + b.clientTop),
                g,
              ),
              pe = await detectOverflow(_, {
                ...g,
                elementContext: "reference",
              }),
              re = max(0, oe.top),
              he = _.y + re,
              se = (x.scrollHeight > x.clientHeight ? (Ee) => Ee : round)(
                max(
                  0,
                  x.scrollHeight +
                    ((F && k) || S ? h * 2 : 0) -
                    re -
                    max(0, oe.bottom),
                ),
              );
            if (((x.style.maxHeight = se + "px"), (x.scrollTop = re), o)) {
              const Ee =
                x.offsetHeight <
                  f.offsetHeight * min(l, n.current.length) - 1 ||
                pe.top >= -v ||
                pe.bottom >= -v;
              ReactDOM.flushSync(() => o(Ee));
            }
            return (
              r &&
                (r.current = await detectOverflow(
                  pr({ ..._, y: he }, x.offsetHeight + h + b.clientTop),
                  g,
                )),
              { y: he }
            );
          },
        });
        function uo(t, e) {
          const { open: n, elements: r } = t,
            { enabled: o = !0, overflowRef: s, scrollRef: i, onChange: l } = e,
            v = ke(l),
            a = React.useRef(!1),
            g = React.useRef(null),
            y = React.useRef(null);
          React.useEffect(() => {
            if (!o) return;
            function f(h) {
              if (h.ctrlKey || !x || s.current == null) return;
              const F = h.deltaY,
                S = s.current.top >= -0.5,
                k = s.current.bottom >= -0.5,
                _ = x.scrollHeight - x.clientHeight,
                oe = F < 0 ? -1 : 1,
                pe = F < 0 ? "max" : "min";
              x.scrollHeight <= x.clientHeight ||
                ((!S && F > 0) || (!k && F < 0)
                  ? (h.preventDefault(),
                    ReactDOM.flushSync(() => {
                      v((re) => re + Math[pe](F, _ * oe));
                    }))
                  : /firefox/i.test(getUserAgent()) && (x.scrollTop += F));
            }
            const x = i?.current || r.floating;
            if (n && x)
              return (
                x.addEventListener("wheel", f),
                requestAnimationFrame(() => {
                  (g.current = x.scrollTop),
                    s.current != null && (y.current = { ...s.current });
                }),
                () => {
                  (g.current = null),
                    (y.current = null),
                    x.removeEventListener("wheel", f);
                }
              );
          }, [o, n, r.floating, s, i, v]);
          const b = React.useMemo(
            () => ({
              onKeyDown() {
                a.current = !0;
              },
              onWheel() {
                a.current = !1;
              },
              onPointerMove() {
                a.current = !1;
              },
              onScroll() {
                const f = i?.current || r.floating;
                if (!(!s.current || !f || !a.current)) {
                  if (g.current !== null) {
                    const x = f.scrollTop - g.current;
                    ((s.current.bottom < -0.5 && x < -1) ||
                      (s.current.top < -0.5 && x > 1)) &&
                      ReactDOM.flushSync(() => v((h) => h + x));
                  }
                  requestAnimationFrame(() => {
                    g.current = f.scrollTop;
                  });
                }
              },
            }),
            [r.floating, v, s, i],
          );
          return React.useMemo(() => (o ? { floating: b } : {}), [o, b]);
        }
        function hr(t, e) {
          const [n, r] = t;
          let o = !1;
          const s = e.length;
          for (let i = 0, l = s - 1; i < s; l = i++) {
            const [v, a] = e[i] || [0, 0],
              [g, y] = e[l] || [0, 0];
            a >= r != y >= r &&
              n <= ((g - v) * (r - a)) / (y - a) + v &&
              (o = !o);
          }
          return o;
        }
        function Yr(t, e) {
          return (
            t[0] >= e.x &&
            t[0] <= e.x + e.width &&
            t[1] >= e.y &&
            t[1] <= e.y + e.height
          );
        }
        function Xr(t) {
          t === void 0 && (t = {});
          const {
            buffer: e = 0.5,
            blockPointerEvents: n = !1,
            requireIntent: r = !0,
          } = t;
          let o,
            s = !1,
            i = null,
            l = null,
            v = performance.now();
          function a(y, b) {
            const f = performance.now(),
              x = f - v;
            if (i === null || l === null || x === 0)
              return (i = y), (l = b), (v = f), null;
            const h = y - i,
              F = b - l,
              k = Math.sqrt(h * h + F * F) / x;
            return (i = y), (l = b), (v = f), k;
          }
          const g = (y) => {
            let {
              x: b,
              y: f,
              placement: x,
              elements: h,
              onClose: F,
              nodeId: S,
              tree: k,
            } = y;
            return function (oe) {
              function pe() {
                clearTimeout(o), F();
              }
              if (
                (clearTimeout(o),
                !h.domReference ||
                  !h.floating ||
                  x == null ||
                  b == null ||
                  f == null)
              )
                return;
              const { clientX: re, clientY: he } = oe,
                we = [re, he],
                ae = et(oe),
                se = oe.type === "mouseleave",
                Ee = be(h.floating, ae),
                Q = be(h.domReference, ae),
                O = h.domReference.getBoundingClientRect(),
                N = h.floating.getBoundingClientRect(),
                X = x.split("-")[0],
                W = b > N.right - N.width / 2,
                V = f > N.bottom - N.height / 2,
                z = Yr(we, O),
                L = N.width > O.width,
                A = N.height > O.height,
                U = (L ? O : N).left,
                ve = (L ? O : N).right,
                Ne = (A ? O : N).top,
                ze = (A ? O : N).bottom;
              if (Ee && ((s = !0), !se)) return;
              if ((Q && (s = !1), Q && !se)) {
                s = !0;
                return;
              }
              if (
                (se &&
                  (0, le.vq)(oe.relatedTarget) &&
                  be(h.floating, oe.relatedTarget)) ||
                (k &&
                  it(k.nodesRef.current, S).some((We) => {
                    let { context: Ie } = We;
                    return Ie?.open;
                  }))
              )
                return;
              if (
                (X === "top" && f >= O.bottom - 1) ||
                (X === "bottom" && f <= O.top + 1) ||
                (X === "left" && b >= O.right - 1) ||
                (X === "right" && b <= O.left + 1)
              )
                return pe();
              let gt = [];
              switch (X) {
                case "top":
                  gt = [
                    [U, O.top + 1],
                    [U, N.bottom - 1],
                    [ve, N.bottom - 1],
                    [ve, O.top + 1],
                  ];
                  break;
                case "bottom":
                  gt = [
                    [U, N.top + 1],
                    [U, O.bottom - 1],
                    [ve, O.bottom - 1],
                    [ve, N.top + 1],
                  ];
                  break;
                case "left":
                  gt = [
                    [N.right - 1, ze],
                    [N.right - 1, Ne],
                    [O.left + 1, Ne],
                    [O.left + 1, ze],
                  ];
                  break;
                case "right":
                  gt = [
                    [O.right - 1, ze],
                    [O.right - 1, Ne],
                    [N.left + 1, Ne],
                    [N.left + 1, ze],
                  ];
                  break;
              }
              function Xe(We) {
                let [Ie, G] = We;
                switch (X) {
                  case "top": {
                    const me = [
                        L ? Ie + e / 2 : W ? Ie + e * 4 : Ie - e * 4,
                        G + e + 1,
                      ],
                      ce = [
                        L ? Ie - e / 2 : W ? Ie + e * 4 : Ie - e * 4,
                        G + e + 1,
                      ],
                      ge = [
                        [N.left, W || L ? N.bottom - e : N.top],
                        [
                          N.right,
                          W ? (L ? N.bottom - e : N.top) : N.bottom - e,
                        ],
                      ];
                    return [me, ce, ...ge];
                  }
                  case "bottom": {
                    const me = [
                        L ? Ie + e / 2 : W ? Ie + e * 4 : Ie - e * 4,
                        G - e,
                      ],
                      ce = [
                        L ? Ie - e / 2 : W ? Ie + e * 4 : Ie - e * 4,
                        G - e,
                      ],
                      ge = [
                        [N.left, W || L ? N.top + e : N.bottom],
                        [N.right, W ? (L ? N.top + e : N.bottom) : N.top + e],
                      ];
                    return [me, ce, ...ge];
                  }
                  case "left": {
                    const me = [
                        Ie + e + 1,
                        A ? G + e / 2 : V ? G + e * 4 : G - e * 4,
                      ],
                      ce = [
                        Ie + e + 1,
                        A ? G - e / 2 : V ? G + e * 4 : G - e * 4,
                      ];
                    return [
                      ...[
                        [V || A ? N.right - e : N.left, N.top],
                        [
                          V ? (A ? N.right - e : N.left) : N.right - e,
                          N.bottom,
                        ],
                      ],
                      me,
                      ce,
                    ];
                  }
                  case "right": {
                    const me = [
                        Ie - e,
                        A ? G + e / 2 : V ? G + e * 4 : G - e * 4,
                      ],
                      ce = [Ie - e, A ? G - e / 2 : V ? G + e * 4 : G - e * 4],
                      ge = [
                        [V || A ? N.left + e : N.right, N.top],
                        [V ? (A ? N.left + e : N.right) : N.left + e, N.bottom],
                      ];
                    return [me, ce, ...ge];
                  }
                }
              }
              if (!hr([re, he], gt)) {
                if (s && !z) return pe();
                if (!se && r) {
                  const We = a(oe.clientX, oe.clientY);
                  if (We !== null && We < 0.1) return pe();
                }
                hr([re, he], Xe([b, f]))
                  ? !s && r && (o = window.setTimeout(pe, 40))
                  : pe();
              }
            };
          };
          return (g.__options = { blockPointerEvents: n }), g;
        }
      },
      977: (Pn, qt, Je) => {
        Je.d(qt, {
          $4: () => xe,
          CP: () => ie,
          L9: () => $,
          Lv: () => Kt,
          Ng: () => qe,
          Tc: () => Dt,
          Tf: () => ut,
          ZU: () => Pt,
          _m: () => ht,
          ep: () => Me,
          eu: () => et,
          gJ: () => Fe,
          mq: () => _e,
          sQ: () => nt,
          sb: () => lt,
          v9: () => Le,
          vq: () => ct,
          zk: () => le,
        });
        function E() {
          return typeof window < "u";
        }
        function _e(T) {
          return be(T) ? (T.nodeName || "").toLowerCase() : "#document";
        }
        function le(T) {
          var te;
          return (
            (T == null || (te = T.ownerDocument) == null
              ? void 0
              : te.defaultView) || window
          );
        }
        function Me(T) {
          var te;
          return (te =
            (be(T) ? T.ownerDocument : T.document) || window.document) == null
            ? void 0
            : te.documentElement;
        }
        function be(T) {
          return E() ? T instanceof Node || T instanceof le(T).Node : !1;
        }
        function ct(T) {
          return E() ? T instanceof Element || T instanceof le(T).Element : !1;
        }
        function lt(T) {
          return E()
            ? T instanceof HTMLElement || T instanceof le(T).HTMLElement
            : !1;
        }
        function qe(T) {
          return !E() || typeof ShadowRoot > "u"
            ? !1
            : T instanceof ShadowRoot || T instanceof le(T).ShadowRoot;
        }
        function Pt(T) {
          const {
            overflow: te,
            overflowX: Ue,
            overflowY: rt,
            display: Ae,
          } = $(T);
          return (
            /auto|scroll|overlay|hidden|clip/.test(te + rt + Ue) &&
            Ae !== "inline" &&
            Ae !== "contents"
          );
        }
        function Kt(T) {
          return /^(table|td|th)$/.test(_e(T));
        }
        function ut(T) {
          try {
            if (T.matches(":popover-open")) return !0;
          } catch {}
          try {
            return T.matches(":modal");
          } catch {
            return !1;
          }
        }
        const dt = /transform|translate|scale|rotate|perspective|filter/,
          At = /paint|layout|strict|content/,
          Ge = (T) => !!T && T !== "none";
        let _t;
        function nt(T) {
          const te = ct(T) ? $(T) : T;
          return (
            Ge(te.transform) ||
            Ge(te.translate) ||
            Ge(te.scale) ||
            Ge(te.rotate) ||
            Ge(te.perspective) ||
            (!Dt() && (Ge(te.backdropFilter) || Ge(te.filter))) ||
            dt.test(te.willChange || "") ||
            At.test(te.contain || "")
          );
        }
        function Fe(T) {
          let te = xe(T);
          for (; lt(te) && !et(te); ) {
            if (nt(te)) return te;
            if (ut(te)) return null;
            te = xe(te);
          }
          return null;
        }
        function Dt() {
          return (
            _t == null &&
              (_t =
                typeof CSS < "u" &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            _t
          );
        }
        function et(T) {
          return /^(html|body|#document)$/.test(_e(T));
        }
        function $(T) {
          return le(T).getComputedStyle(T);
        }
        function ie(T) {
          return ct(T)
            ? { scrollLeft: T.scrollLeft, scrollTop: T.scrollTop }
            : { scrollLeft: T.scrollX, scrollTop: T.scrollY };
        }
        function xe(T) {
          if (_e(T) === "html") return T;
          const te =
            T.assignedSlot || T.parentNode || (qe(T) && T.host) || Me(T);
          return qe(te) ? te.host : te;
        }
        function Pe(T) {
          const te = xe(T);
          return et(te)
            ? (T.ownerDocument || T).body
            : lt(te) && Pt(te)
              ? te
              : Pe(te);
        }
        function Le(T, te, Ue) {
          var rt;
          te === void 0 && (te = []), Ue === void 0 && (Ue = !0);
          const Ae = Pe(T),
            Ft = Ae === ((rt = T.ownerDocument) == null ? void 0 : rt.body),
            vt = le(Ae);
          if (Ft) {
            const Nt = ht(vt);
            return te.concat(
              vt,
              vt.visualViewport || [],
              Pt(Ae) ? Ae : [],
              Nt && Ue ? Le(Nt) : [],
            );
          } else return te.concat(Ae, Le(Ae, [], Ue));
        }
        function ht(T) {
          return T.parent && Object.getPrototypeOf(T.parent)
            ? T.frameElement
            : null;
        }
      },
    },
  ]);
})();
