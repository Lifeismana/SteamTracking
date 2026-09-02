/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [2421],
    {
      8083: (fn, Wt, $e) => {
        $e.d(Wt, {
          ll: () => Bt,
          rD: () => dn,
          UU: () => _t,
          cY: () => en,
          iD: () => Ut,
          BN: () => Xt,
          Ej: () => wn,
        });
        var c = $e(58015);
        function Oe(u, f, d) {
          let { reference: p, floating: y } = u;
          const R = (0, c.TV)(f),
            I = (0, c.Dz)(f),
            C = (0, c.sq)(I),
            T = (0, c.C0)(f),
            F = R === "y",
            H = p.x + p.width / 2 - y.width / 2,
            S = p.y + p.height / 2 - y.height / 2,
            z = p[C] / 2 - y[C] / 2;
          let M;
          switch (T) {
            case "top":
              M = { x: H, y: p.y - y.height };
              break;
            case "bottom":
              M = { x: H, y: p.y + p.height };
              break;
            case "right":
              M = { x: p.x + p.width, y: S };
              break;
            case "left":
              M = { x: p.x - y.width, y: S };
              break;
            default:
              M = { x: p.x, y: p.y };
          }
          const q = (0, c.Sg)(f);
          return (
            q && (M[I] += z * (q === "end" ? 1 : -1) * (d && F ? -1 : 1)), M
          );
        }
        async function oe(u, f) {
          var d;
          f === void 0 && (f = {});
          const {
              x: p,
              y,
              platform: R,
              rects: I,
              elements: C,
              strategy: T,
            } = u,
            {
              boundary: F = "clippingAncestors",
              rootBoundary: H = "viewport",
              elementContext: S = "floating",
              altBoundary: z = !1,
              padding: M = 0,
            } = (0, c._3)(f, u),
            q = (0, c.nI)(M),
            Z = C[z ? (S === "floating" ? "reference" : "floating") : S],
            O = (0, c.B1)(
              await R.getClippingRect({
                element:
                  (d = await (R.isElement == null ? void 0 : R.isElement(Z))) ==
                    null || d
                    ? Z
                    : Z.contextElement ||
                      (await (R.getDocumentElement == null
                        ? void 0
                        : R.getDocumentElement(C.floating))),
                boundary: F,
                rootBoundary: H,
                strategy: T,
              }),
            ),
            de =
              S === "floating"
                ? {
                    x: p,
                    y,
                    width: I.floating.width,
                    height: I.floating.height,
                  }
                : I.reference,
            xe = await (R.getOffsetParent == null
              ? void 0
              : R.getOffsetParent(C.floating)),
            ye = ((await (R.isElement == null ? void 0 : R.isElement(xe))) &&
              (await (R.getScale == null ? void 0 : R.getScale(xe)))) || {
              x: 1,
              y: 1,
            },
            Ae = (0, c.B1)(
              R.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await R.convertOffsetParentRelativeRectToViewportRelativeRect(
                    { elements: C, rect: de, offsetParent: xe, strategy: T },
                  )
                : de,
            );
          return {
            top: (O.top - Ae.top + q.top) / ye.y,
            bottom: (Ae.bottom - O.bottom + q.bottom) / ye.y,
            left: (O.left - Ae.left + q.left) / ye.x,
            right: (Ae.right - O.right + q.right) / ye.x,
          };
        }
        const Fe = 50,
          Ie = async (u, f, d) => {
            const {
                placement: p = "bottom",
                strategy: y = "absolute",
                middleware: R = [],
                platform: I,
              } = d,
              C = I.detectOverflow ? I : { ...I, detectOverflow: oe },
              T = await (I.isRTL == null ? void 0 : I.isRTL(f));
            let F = await I.getElementRects({
                reference: u,
                floating: f,
                strategy: y,
              }),
              { x: H, y: S } = Oe(F, p, T),
              z = p,
              M = 0;
            const q = {};
            for (let J = 0; J < R.length; J++) {
              const Z = R[J];
              if (!Z) continue;
              const { name: O, fn: de } = Z,
                {
                  x: xe,
                  y: ye,
                  data: Ae,
                  reset: le,
                } = await de({
                  x: H,
                  y: S,
                  initialPlacement: p,
                  placement: z,
                  strategy: y,
                  middlewareData: q,
                  rects: F,
                  platform: C,
                  elements: { reference: u, floating: f },
                });
              (H = xe != null ? xe : H),
                (S = ye != null ? ye : S),
                (q[O] = { ...q[O], ...Ae }),
                le &&
                  M < Fe &&
                  (M++,
                  typeof le == "object" &&
                    (le.placement && (z = le.placement),
                    le.rects &&
                      (F =
                        le.rects === !0
                          ? await I.getElementRects({
                              reference: u,
                              floating: f,
                              strategy: y,
                            })
                          : le.rects),
                    ({ x: H, y: S } = Oe(F, z, T))),
                  (J = -1));
            }
            return { x: H, y: S, placement: z, strategy: y, middlewareData: q };
          },
          vt = (u) => ({
            name: "arrow",
            options: u,
            async fn(f) {
              const {
                  x: d,
                  y: p,
                  placement: y,
                  rects: R,
                  platform: I,
                  elements: C,
                  middlewareData: T,
                } = f,
                { element: F, padding: H = 0 } = evaluate(u, f) || {};
              if (F == null) return {};
              const S = getPaddingObject(H),
                z = { x: d, y: p },
                M = getAlignmentAxis(y),
                q = getAxisLength(M),
                J = await I.getDimensions(F),
                Z = M === "y",
                O = Z ? "top" : "left",
                de = Z ? "bottom" : "right",
                xe = Z ? "clientHeight" : "clientWidth",
                ye = R.reference[q] + R.reference[M] - z[M] - R.floating[q],
                Ae = z[M] - R.reference[M],
                le = await (I.getOffsetParent == null
                  ? void 0
                  : I.getOffsetParent(F));
              let Me = le ? le[xe] : 0;
              (!Me ||
                !(await (I.isElement == null ? void 0 : I.isElement(le)))) &&
                (Me = C.floating[xe] || R.floating[q]);
              const Ye = ye / 2 - Ae / 2,
                Ze = Me / 2 - J[q] / 2 - 1,
                Te = min(S[O], Ze),
                it = min(S[de], Ze),
                Ft = Me - J[q] - it,
                st = Me / 2 - J[q] / 2 + Ye,
                mt = clamp(Te, st, Ft),
                Nt =
                  !T.arrow &&
                  getAlignment(y) != null &&
                  st !== mt &&
                  R.reference[q] / 2 - (st < Te ? Te : it) - J[q] / 2 < 0,
                Ot = Nt ? (st < Te ? st - Te : st - Ft) : 0;
              return {
                [M]: z[M] + Ot,
                data: {
                  [M]: mt,
                  centerOffset: st - mt - Ot,
                  ...(Nt && { alignmentOffset: Ot }),
                },
                reset: Nt,
              };
            },
          });
        function ut(u, f, d) {
          return (
            u
              ? [
                  ...d.filter((y) => getAlignment(y) === u),
                  ...d.filter((y) => getAlignment(y) !== u),
                ]
              : d.filter((y) => getSide(y) === y)
          ).filter((y) =>
            u
              ? getAlignment(y) === u ||
                (f ? getOppositeAlignmentPlacement(y) !== y : !1)
              : !0,
          );
        }
        const at = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                name: "autoPlacement",
                options: u,
                async fn(f) {
                  var d, p, y;
                  const {
                      rects: R,
                      middlewareData: I,
                      placement: C,
                      platform: T,
                      elements: F,
                    } = f,
                    {
                      crossAxis: H = !1,
                      alignment: S,
                      allowedPlacements: z = placements,
                      autoAlignment: M = !0,
                      ...q
                    } = evaluate(u, f),
                    J =
                      S !== void 0 || z === placements
                        ? ut(S || null, M, z)
                        : z,
                    Z = ((d = I.autoPlacement) == null ? void 0 : d.index) || 0,
                    O = J[Z];
                  if (O == null) return {};
                  if (C !== O) return { reset: { placement: J[0] } };
                  const de = await T.detectOverflow(f, q),
                    xe = getAlignmentSides(
                      O,
                      R,
                      await (T.isRTL == null ? void 0 : T.isRTL(F.floating)),
                    ),
                    ye = [de[getSide(O)], de[xe[0]], de[xe[1]]],
                    Ae = [
                      ...(((p = I.autoPlacement) == null
                        ? void 0
                        : p.overflows) || []),
                      { placement: O, overflows: ye },
                    ],
                    le = J[Z + 1];
                  if (le)
                    return {
                      data: { index: Z + 1, overflows: Ae },
                      reset: { placement: le },
                    };
                  const Me = Ae.map((Te) => {
                      const it = getAlignment(Te.placement);
                      return [
                        Te.placement,
                        it && H
                          ? Te.overflows
                              .slice(0, 2)
                              .reduce((Ft, st) => Ft + st, 0)
                          : Te.overflows[0],
                        Te.overflows,
                      ];
                    }).sort((Te, it) => Te[1] - it[1]),
                    Ze =
                      ((y = Me.filter((Te) =>
                        Te[2]
                          .slice(0, getAlignment(Te[0]) ? 2 : 3)
                          .every((it) => it <= 0),
                      )[0]) == null
                        ? void 0
                        : y[0]) || Me[0][0];
                  return Ze !== C
                    ? {
                        data: { index: Z + 1, overflows: Ae },
                        reset: { placement: Ze },
                      }
                    : {};
                },
              }
            );
          },
          ft = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                name: "flip",
                options: u,
                async fn(f) {
                  var d, p;
                  const {
                      placement: y,
                      middlewareData: R,
                      rects: I,
                      initialPlacement: C,
                      platform: T,
                      elements: F,
                    } = f,
                    {
                      mainAxis: H = !0,
                      crossAxis: S = !0,
                      fallbackPlacements: z,
                      fallbackStrategy: M = "bestFit",
                      fallbackAxisSideDirection: q = "none",
                      flipAlignment: J = !0,
                      ...Z
                    } = (0, c._3)(u, f);
                  if ((d = R.arrow) != null && d.alignmentOffset) return {};
                  const O = (0, c.C0)(y),
                    de = (0, c.TV)(C),
                    xe = (0, c.C0)(C) === C,
                    ye = await (T.isRTL == null ? void 0 : T.isRTL(F.floating)),
                    Ae = z || (xe || !J ? [(0, c.bV)(C)] : (0, c.WJ)(C)),
                    le = q !== "none";
                  !z && le && Ae.push(...(0, c.lP)(C, J, q, ye));
                  const Me = [C, ...Ae],
                    Ye = await T.detectOverflow(f, Z),
                    Ze = [];
                  let Te = ((p = R.flip) == null ? void 0 : p.overflows) || [];
                  if ((H && Ze.push(Ye[O]), S)) {
                    const mt = (0, c.w7)(y, I, ye);
                    Ze.push(Ye[mt[0]], Ye[mt[1]]);
                  }
                  if (
                    ((Te = [...Te, { placement: y, overflows: Ze }]),
                    !Ze.every((mt) => mt <= 0))
                  ) {
                    var it, Ft;
                    const mt =
                        (((it = R.flip) == null ? void 0 : it.index) || 0) + 1,
                      Nt = Me[mt];
                    if (
                      Nt &&
                      (!(S === "alignment" ? de !== (0, c.TV)(Nt) : !1) ||
                        Te.every((ot) =>
                          (0, c.TV)(ot.placement) === de
                            ? ot.overflows[0] > 0
                            : !0,
                        ))
                    )
                      return {
                        data: { index: mt, overflows: Te },
                        reset: { placement: Nt },
                      };
                    let Ot =
                      (Ft = Te.filter((jt) => jt.overflows[0] <= 0).sort(
                        (jt, ot) => jt.overflows[1] - ot.overflows[1],
                      )[0]) == null
                        ? void 0
                        : Ft.placement;
                    if (!Ot)
                      switch (M) {
                        case "bestFit": {
                          var st;
                          const jt =
                            (st = Te.filter((ot) => {
                              if (le) {
                                const gt = (0, c.TV)(ot.placement);
                                return gt === de || gt === "y";
                              }
                              return !0;
                            })
                              .map((ot) => [
                                ot.placement,
                                ot.overflows
                                  .filter((gt) => gt > 0)
                                  .reduce((gt, Ln) => gt + Ln, 0),
                              ])
                              .sort((ot, gt) => ot[1] - gt[1])[0]) == null
                              ? void 0
                              : st[0];
                          jt && (Ot = jt);
                          break;
                        }
                        case "initialPlacement":
                          Ot = C;
                          break;
                      }
                    if (y !== Ot) return { reset: { placement: Ot } };
                  }
                  return {};
                },
              }
            );
          };
        function Rt(u, f) {
          return {
            top: u.top - f.height,
            right: u.right - f.width,
            bottom: u.bottom - f.height,
            left: u.left - f.width,
          };
        }
        function dt(u) {
          return sides.some((f) => u[f] >= 0);
        }
        const At = function (u) {
          return (
            u === void 0 && (u = {}),
            {
              name: "hide",
              options: u,
              async fn(f) {
                const { rects: d, platform: p } = f,
                  { strategy: y = "referenceHidden", ...R } = evaluate(u, f);
                switch (y) {
                  case "referenceHidden": {
                    const I = await p.detectOverflow(f, {
                        ...R,
                        elementContext: "reference",
                      }),
                      C = Rt(I, d.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: C,
                        referenceHidden: dt(C),
                      },
                    };
                  }
                  case "escaped": {
                    const I = await p.detectOverflow(f, {
                        ...R,
                        altBoundary: !0,
                      }),
                      C = Rt(I, d.floating);
                    return { data: { escapedOffsets: C, escaped: dt(C) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        };
        function wt(u) {
          const f = min(...u.map((R) => R.left)),
            d = min(...u.map((R) => R.top)),
            p = max(...u.map((R) => R.right)),
            y = max(...u.map((R) => R.bottom));
          return { x: f, y: d, width: p - f, height: y - d };
        }
        function He(u) {
          const f = u.slice().sort((y, R) => y.y - R.y),
            d = [];
          let p = null;
          for (let y = 0; y < f.length; y++) {
            const R = f[y];
            !p || R.y - p.y > p.height / 2
              ? d.push([R])
              : d[d.length - 1].push(R),
              (p = R);
          }
          return d.map((y) => rectToClientRect(wt(y)));
        }
        const Et = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                name: "inline",
                options: u,
                async fn(f) {
                  const {
                      placement: d,
                      elements: p,
                      rects: y,
                      platform: R,
                      strategy: I,
                    } = f,
                    { padding: C = 2, x: T, y: F } = evaluate(u, f),
                    H = Array.from(
                      (await (R.getClientRects == null
                        ? void 0
                        : R.getClientRects(p.reference))) || [],
                    );
                  if (!H.length) return {};
                  const S = He(H),
                    z = rectToClientRect(wt(H)),
                    M = getPaddingObject(C);
                  function q() {
                    if (
                      S.length === 2 &&
                      (S[0].left > S[1].right || S[1].left > S[0].right) &&
                      T != null &&
                      F != null
                    )
                      return (
                        S.find(
                          (Z) =>
                            T > Z.left - M.left &&
                            T < Z.right + M.right &&
                            F > Z.top - M.top &&
                            F < Z.bottom + M.bottom,
                        ) || z
                      );
                    if (S.length >= 2) {
                      if (getSideAxis(d) === "y") {
                        const le = S[0],
                          Me = S[S.length - 1],
                          Ye = getSide(d) === "top",
                          Ze = le.top,
                          Te = Me.bottom,
                          it = Ye ? le.left : Me.left,
                          Ft = Ye ? le.right : Me.right;
                        return rectToClientRect({
                          x: it,
                          y: Ze,
                          width: Ft - it,
                          height: Te - Ze,
                        });
                      }
                      const Z = getSide(d) === "left",
                        O = max(...S.map((le) => le.right)),
                        de = min(...S.map((le) => le.left)),
                        xe = S.filter((le) =>
                          Z ? le.left === de : le.right === O,
                        ),
                        ye = xe[0].top,
                        Ae = xe[xe.length - 1].bottom;
                      return rectToClientRect({
                        x: de,
                        y: ye,
                        width: O - de,
                        height: Ae - ye,
                      });
                    }
                    return z;
                  }
                  const J = await R.getElementRects({
                    reference: { getBoundingClientRect: q },
                    floating: p.floating,
                    strategy: I,
                  });
                  return y.reference.x !== J.reference.x ||
                    y.reference.y !== J.reference.y ||
                    y.reference.width !== J.reference.width ||
                    y.reference.height !== J.reference.height
                    ? { reset: { rects: J } }
                    : {};
                },
              }
            );
          },
          It = new Set(["left", "top"]);
        async function _e(u, f) {
          const { placement: d, platform: p, elements: y } = u,
            R = await (p.isRTL == null ? void 0 : p.isRTL(y.floating)),
            I = (0, c.C0)(d),
            C = (0, c.Sg)(d),
            T = (0, c.TV)(d) === "y",
            F = It.has(I) ? -1 : 1,
            H = R && T ? -1 : 1,
            S = (0, c._3)(f, u);
          let {
            mainAxis: z,
            crossAxis: M,
            alignmentAxis: q,
          } = typeof S == "number"
            ? { mainAxis: S, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: S.mainAxis || 0,
                crossAxis: S.crossAxis || 0,
                alignmentAxis: S.alignmentAxis,
              };
          return (
            C && typeof q == "number" && (M = C === "end" ? q * -1 : q),
            T ? { x: M * H, y: z * F } : { x: z * F, y: M * H }
          );
        }
        const Ct = function (u) {
            return (
              u === void 0 && (u = 0),
              {
                name: "offset",
                options: u,
                async fn(f) {
                  var d, p;
                  const { x: y, y: R, placement: I, middlewareData: C } = f,
                    T = await _e(f, u);
                  return I ===
                    ((d = C.offset) == null ? void 0 : d.placement) &&
                    (p = C.arrow) != null &&
                    p.alignmentOffset
                    ? {}
                    : { x: y + T.x, y: R + T.y, data: { ...T, placement: I } };
                },
              }
            );
          },
          Ge = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                name: "shift",
                options: u,
                async fn(f) {
                  const { x: d, y: p, placement: y, platform: R } = f,
                    {
                      mainAxis: I = !0,
                      crossAxis: C = !1,
                      limiter: T = {
                        fn: (de) => {
                          let { x: xe, y: ye } = de;
                          return { x: xe, y: ye };
                        },
                      },
                      ...F
                    } = (0, c._3)(u, f),
                    H = { x: d, y: p },
                    S = await R.detectOverflow(f, F),
                    z = (0, c.TV)(y),
                    M = (0, c.PG)(z);
                  let q = H[M],
                    J = H[z];
                  const Z = (de, xe) =>
                    (0, c.qE)(
                      xe + S[de === "y" ? "top" : "left"],
                      xe,
                      xe - S[de === "y" ? "bottom" : "right"],
                    );
                  I && (q = Z(M, q)), C && (J = Z(z, J));
                  const O = T.fn({ ...f, [M]: q, [z]: J });
                  return {
                    ...O,
                    data: {
                      x: O.x - d,
                      y: O.y - p,
                      enabled: { [M]: I, [z]: C },
                    },
                  };
                },
              }
            );
          },
          j = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                options: u,
                fn(f) {
                  var d, p;
                  const {
                      x: y,
                      y: R,
                      placement: I,
                      rects: C,
                      middlewareData: T,
                    } = f,
                    {
                      offset: F = 0,
                      mainAxis: H = !0,
                      crossAxis: S = !0,
                    } = evaluate(u, f),
                    z = { x: y, y: R },
                    M = getSideAxis(I),
                    q = getOppositeAxis(M);
                  let J = z[q],
                    Z = z[M];
                  const O = evaluate(F, f),
                    de =
                      typeof O == "number"
                        ? { mainAxis: O, crossAxis: 0 }
                        : {
                            mainAxis: (d = O.mainAxis) != null ? d : 0,
                            crossAxis: (p = O.crossAxis) != null ? p : 0,
                          };
                  if (H) {
                    const Ae = q === "y" ? "height" : "width",
                      le = C.reference[q] - C.floating[Ae] + de.mainAxis,
                      Me = C.reference[q] + C.reference[Ae] - de.mainAxis;
                    J < le ? (J = le) : J > Me && (J = Me);
                  }
                  if (S) {
                    var xe, ye;
                    const Ae = q === "y" ? "width" : "height",
                      le = It.has(getSide(I)),
                      Me =
                        C.reference[M] -
                        C.floating[Ae] +
                        ((le && ((xe = T.offset) == null ? void 0 : xe[M])) ||
                          0) +
                        (le ? 0 : de.crossAxis),
                      Ye =
                        C.reference[M] +
                        C.reference[Ae] +
                        (le
                          ? 0
                          : ((ye = T.offset) == null ? void 0 : ye[M]) || 0) -
                        (le ? de.crossAxis : 0);
                    Z < Me ? (Z = Me) : Z > Ye && (Z = Ye);
                  }
                  return { [q]: J, [M]: Z };
                },
              }
            );
          },
          re = function (u) {
            return (
              u === void 0 && (u = {}),
              {
                name: "size",
                options: u,
                async fn(f) {
                  const {
                      placement: d,
                      rects: p,
                      platform: y,
                      elements: R,
                    } = f,
                    { apply: I = () => {}, ...C } = (0, c._3)(u, f),
                    T = await y.detectOverflow(f, C),
                    F = (0, c.C0)(d),
                    H = (0, c.Sg)(d),
                    S = (0, c.TV)(d) === "y",
                    { width: z, height: M } = p.floating;
                  let q, J;
                  F === "top" || F === "bottom"
                    ? ((q = F),
                      (J =
                        H ===
                        ((await (y.isRTL == null
                          ? void 0
                          : y.isRTL(R.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((J = F), (q = H === "end" ? "top" : "bottom"));
                  const Z = M - T.top - T.bottom,
                    O = z - T.left - T.right,
                    de = (0, c.jk)(M - T[q], Z),
                    xe = (0, c.jk)(z - T[J], O),
                    ye = f.middlewareData.shift,
                    Ae = !ye;
                  let le = de,
                    Me = xe;
                  ye != null && ye.enabled.x && (Me = O),
                    ye != null && ye.enabled.y && (le = Z),
                    Ae &&
                      !H &&
                      (S
                        ? (Me = z - 2 * (0, c.T9)(T.left, T.right))
                        : (le = M - 2 * (0, c.T9)(T.top, T.bottom))),
                    await I({ ...f, availableWidth: Me, availableHeight: le });
                  const Ye = await y.getDimensions(R.floating);
                  return z !== Ye.width || M !== Ye.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          };
        var E = $e(977);
        function Ce(u) {
          const f = (0, E.L9)(u);
          let d = parseFloat(f.width) || 0,
            p = parseFloat(f.height) || 0;
          const y = (0, E.sb)(u),
            R = y ? u.offsetWidth : d,
            I = y ? u.offsetHeight : p,
            C = (0, c.LI)(d) !== R || (0, c.LI)(p) !== I;
          return C && ((d = R), (p = I)), { width: d, height: p, $: C };
        }
        function Ne(u) {
          return (0, E.vq)(u) ? u : u.contextElement;
        }
        function ke(u) {
          const f = Ne(u);
          if (!(0, E.sb)(f)) return (0, c.Jx)(1);
          const d = f.getBoundingClientRect(),
            { width: p, height: y, $: R } = Ce(f);
          let I = (R ? (0, c.LI)(d.width) : d.width) / p,
            C = (R ? (0, c.LI)(d.height) : d.height) / y;
          return (
            (!I || !Number.isFinite(I)) && (I = 1),
            (!C || !Number.isFinite(C)) && (C = 1),
            { x: I, y: C }
          );
        }
        const k = (0, c.Jx)(0);
        function U(u) {
          const f = (0, E.zk)(u);
          return !(0, E.Tc)() || !f.visualViewport
            ? k
            : { x: f.visualViewport.offsetLeft, y: f.visualViewport.offsetTop };
        }
        function nt(u, f, d) {
          return f === void 0 && (f = !1), !!d && f && d === (0, E.zk)(u);
        }
        function Le(u, f, d, p) {
          f === void 0 && (f = !1), d === void 0 && (d = !1);
          const y = u.getBoundingClientRect(),
            R = Ne(u);
          let I = (0, c.Jx)(1);
          f && (p ? (0, E.vq)(p) && (I = ke(p)) : (I = ke(u)));
          const C = nt(R, d, p) ? U(R) : (0, c.Jx)(0);
          let T = (y.left + C.x) / I.x,
            F = (y.top + C.y) / I.y,
            H = y.width / I.x,
            S = y.height / I.y;
          if (R && p) {
            const z = (0, E.zk)(R),
              M = (0, E.vq)(p) ? (0, E.zk)(p) : p;
            let q = z,
              J = (0, E._m)(q);
            for (; J && M !== q; ) {
              const Z = ke(J),
                O = J.getBoundingClientRect(),
                de = (0, E.L9)(J),
                xe = O.left + (J.clientLeft + parseFloat(de.paddingLeft)) * Z.x,
                ye = O.top + (J.clientTop + parseFloat(de.paddingTop)) * Z.y;
              (T *= Z.x),
                (F *= Z.y),
                (H *= Z.x),
                (S *= Z.y),
                (T += xe),
                (F += ye),
                (q = (0, E.zk)(J)),
                (J = (0, E._m)(q));
            }
          }
          return (0, c.B1)({ width: H, height: S, x: T, y: F });
        }
        function Pe(u, f) {
          const d = (0, E.CP)(u).scrollLeft;
          return f ? f.left + d : Le((0, E.ep)(u)).left + d;
        }
        function $(u, f) {
          const d = u.getBoundingClientRect(),
            p = d.left + f.scrollLeft - Pe(u, d),
            y = d.top + f.scrollTop;
          return { x: p, y };
        }
        function he(u) {
          let { elements: f, rect: d, offsetParent: p, strategy: y } = u;
          const R = y === "fixed",
            I = (0, E.ep)(p),
            C = f ? (0, E.Tf)(f.floating) : !1;
          if (p === I || (C && R)) return d;
          let T = { scrollLeft: 0, scrollTop: 0 },
            F = (0, c.Jx)(1);
          const H = (0, c.Jx)(0),
            S = (0, E.sb)(p);
          if (
            (S || !R) &&
            (((0, E.mq)(p) !== "body" || (0, E.ZU)(I)) && (T = (0, E.CP)(p)), S)
          ) {
            const M = Le(p);
            (F = ke(p)), (H.x = M.x + p.clientLeft), (H.y = M.y + p.clientTop);
          }
          const z = I && !S && !R ? $(I, T) : (0, c.Jx)(0);
          return {
            width: d.width * F.x,
            height: d.height * F.y,
            x: d.x * F.x - T.scrollLeft * F.x + H.x + z.x,
            y: d.y * F.y - T.scrollTop * F.y + H.y + z.y,
          };
        }
        function De(u) {
          return u.getClientRects ? Array.from(u.getClientRects()) : [];
        }
        function Qe(u) {
          const f = (0, E.CP)(u),
            d = u.ownerDocument.body,
            p = (0, c.T9)(
              u.scrollWidth,
              u.clientWidth,
              d.scrollWidth,
              d.clientWidth,
            ),
            y = (0, c.T9)(
              u.scrollHeight,
              u.clientHeight,
              d.scrollHeight,
              d.clientHeight,
            );
          let R = -f.scrollLeft + Pe(u);
          const I = -f.scrollTop;
          return (
            (0, E.L9)(d).direction === "rtl" &&
              (R += (0, c.T9)(u.clientWidth, d.clientWidth) - p),
            { width: p, height: y, x: R, y: I }
          );
        }
        const Je = 25;
        function rt(u, f, d) {
          d === void 0 && (d = "viewport");
          const p = d === "layoutViewport",
            y = (0, E.zk)(u),
            R = (0, E.ep)(u),
            I = y.visualViewport;
          let C = R.clientWidth,
            T = R.clientHeight,
            F = 0,
            H = 0;
          if (I) {
            const z = !(0, E.Tc)() || f === "fixed";
            p
              ? z || ((F = -I.offsetLeft), (H = -I.offsetTop))
              : ((C = I.width),
                (T = I.height),
                z && ((F = I.offsetLeft), (H = I.offsetTop)));
          }
          if (Pe(R) <= 0) {
            const z = R.ownerDocument,
              M = z.body,
              q = getComputedStyle(M),
              J =
                (z.compatMode === "CSS1Compat" &&
                  parseFloat(q.marginLeft) + parseFloat(q.marginRight)) ||
                0,
              Z = Math.abs(R.clientWidth - M.clientWidth - J),
              O =
                getComputedStyle(R).scrollbarGutter === "stable both-edges"
                  ? Z / 2
                  : Z;
            O <= Je && (C -= O);
          }
          return { width: C, height: T, x: F, y: H };
        }
        function bt(u, f) {
          const d = Le(u, !0, f === "fixed"),
            p = d.top + u.clientTop,
            y = d.left + u.clientLeft,
            R = ke(u),
            I = u.clientWidth * R.x,
            C = u.clientHeight * R.y,
            T = y * R.x,
            F = p * R.y;
          return { width: I, height: C, x: T, y: F };
        }
        function Ht(u, f, d) {
          let p;
          if (f === "viewport" || f === "layoutViewport") p = rt(u, d, f);
          else if (f === "document") p = Qe((0, E.ep)(u));
          else if ((0, E.vq)(f)) p = bt(f, d);
          else {
            const y = U(u);
            p = {
              x: f.x - y.x,
              y: f.y - y.y,
              width: f.width,
              height: f.height,
            };
          }
          return (0, c.B1)(p);
        }
        function qt(u, f) {
          const d = f.get(u);
          if (d) return d;
          let p = (0, E.v9)(u, [], !1).filter(
              (C) => (0, E.vq)(C) && (0, E.mq)(C) !== "body",
            ),
            y = null;
          const R = (0, E.L9)(u).position === "fixed";
          let I = R ? (0, E.$4)(u) : u;
          for (; (0, E.vq)(I) && !(0, E.eu)(I); ) {
            const C = (0, E.L9)(I),
              T = (0, E.sQ)(I),
              F = y ? y.position : R ? "fixed" : "";
            !T &&
            (F === "fixed" || (F === "absolute" && C.position === "static"))
              ? (p = p.filter((S) => S !== I))
              : (y = C),
              (I = (0, E.$4)(I));
          }
          return f.set(u, p), p;
        }
        function St(u) {
          let { element: f, boundary: d, rootBoundary: p, strategy: y } = u;
          const I = [
              ...(d === "clippingAncestors"
                ? (0, E.Tf)(f)
                  ? []
                  : qt(f, this._c)
                : [].concat(d)),
              p,
            ],
            C = Ht(f, I[0], y);
          let T = C.top,
            F = C.right,
            H = C.bottom,
            S = C.left;
          for (let z = 1; z < I.length; z++) {
            const M = Ht(f, I[z], y);
            (T = (0, c.T9)(M.top, T)),
              (F = (0, c.jk)(M.right, F)),
              (H = (0, c.jk)(M.bottom, H)),
              (S = (0, c.T9)(M.left, S));
          }
          return { width: F - S, height: H - T, x: S, y: T };
        }
        function Tt(u) {
          const { width: f, height: d } = Ce(u);
          return { width: f, height: d };
        }
        function Mt(u, f, d) {
          const p = (0, E.sb)(f),
            y = (0, E.ep)(f),
            R = d === "fixed",
            I = Le(u, !0, R, f);
          let C = { scrollLeft: 0, scrollTop: 0 };
          const T = (0, c.Jx)(0);
          if (
            (p || !R) &&
            (((0, E.mq)(f) !== "body" || (0, E.ZU)(y)) && (C = (0, E.CP)(f)), p)
          ) {
            const z = Le(f, !0, R, f);
            (T.x = z.x + f.clientLeft), (T.y = z.y + f.clientTop);
          }
          !p && y && (T.x = Pe(y));
          const F = y && !p && !R ? $(y, C) : (0, c.Jx)(0),
            H = I.left + C.scrollLeft - T.x - F.x,
            S = I.top + C.scrollTop - T.y - F.y;
          return { x: H, y: S, width: I.width, height: I.height };
        }
        function xt(u) {
          return (0, E.L9)(u).position === "static";
        }
        function Kt(u, f) {
          if (!(0, E.sb)(u) || (0, E.L9)(u).position === "fixed") return null;
          if (f) return f(u);
          let d = u.offsetParent;
          return (0, E.ep)(u) === d && (d = d.ownerDocument.body), d;
        }
        function Qt(u, f) {
          const d = (0, E.zk)(u);
          if ((0, E.Tf)(u)) return d;
          if (!(0, E.sb)(u)) {
            let y = (0, E.$4)(u);
            for (; y && !(0, E.eu)(y); ) {
              if ((0, E.vq)(y) && !xt(y)) return y;
              y = (0, E.$4)(y);
            }
            return d;
          }
          let p = Kt(u, f);
          for (; p && (0, E.Lv)(p) && xt(p); ) p = Kt(p, f);
          return p && (0, E.eu)(p) && xt(p) && !(0, E.sQ)(p)
            ? d
            : p || (0, E.gJ)(u) || d;
        }
        const Yt = async function (u) {
          const f = this.getOffsetParent || Qt,
            d = this.getDimensions,
            p = await d(u.floating);
          return {
            reference: Mt(u.reference, await f(u.floating), u.strategy),
            floating: { x: 0, y: 0, width: p.width, height: p.height },
          };
        };
        function Vt(u) {
          return (0, E.L9)(u).direction === "rtl";
        }
        const Ut = {
          convertOffsetParentRelativeRectToViewportRelativeRect: he,
          getDocumentElement: E.ep,
          getClippingRect: St,
          getOffsetParent: Qt,
          getElementRects: Yt,
          getClientRects: De,
          getDimensions: Tt,
          getScale: ke,
          isElement: E.vq,
          isRTL: Vt,
        };
        function kt(u, f) {
          return (
            u.x === f.x &&
            u.y === f.y &&
            u.width === f.width &&
            u.height === f.height
          );
        }
        function Lt(u, f, d) {
          let p = null,
            y;
          const R = (0, E.ep)(u);
          function I() {
            var H;
            clearTimeout(y), (H = p) == null || H.disconnect(), (p = null);
          }
          function C(H, S) {
            H === void 0 && (H = !1), S === void 0 && (S = 1), I();
            const z = u.getBoundingClientRect(),
              { left: M, top: q, width: J, height: Z } = z;
            if ((H || f(), !J || !Z)) return;
            const O = (0, c.RI)(q),
              de = (0, c.RI)(R.clientWidth - (M + J)),
              xe = (0, c.RI)(R.clientHeight - (q + Z)),
              ye = (0, c.RI)(M),
              le = {
                rootMargin: -O + "px " + -de + "px " + -xe + "px " + -ye + "px",
                threshold: (0, c.T9)(0, (0, c.jk)(1, S)) || 1,
              };
            let Me = !0;
            function Ye(Ze) {
              const Te = Ze[0].intersectionRatio;
              if (!kt(z, u.getBoundingClientRect())) return C();
              if (Te !== S) {
                if (!Me) return C();
                Te
                  ? C(!1, Te)
                  : (y = setTimeout(() => {
                      C(!1, 1e-7);
                    }, 1e3));
              }
              Me = !1;
            }
            try {
              p = new IntersectionObserver(Ye, {
                ...le,
                root: R.ownerDocument,
              });
            } catch {
              p = new IntersectionObserver(Ye, le);
            }
            p.observe(u);
          }
          const T = (0, E.zk)(u),
            F = () => C(d);
          return (
            T.addEventListener("resize", F),
            C(!0),
            () => {
              T.removeEventListener("resize", F), I();
            }
          );
        }
        function Bt(u, f, d, p) {
          p === void 0 && (p = {});
          const {
              ancestorScroll: y = !0,
              ancestorResize: R = !0,
              elementResize: I = typeof ResizeObserver == "function",
              layoutShift: C = typeof IntersectionObserver == "function",
              animationFrame: T = !1,
            } = p,
            F = Ne(u),
            H =
              y || R
                ? [...(F ? (0, E.v9)(F) : []), ...(f ? (0, E.v9)(f) : [])]
                : [];
          H.forEach((O) => {
            y && O.addEventListener("scroll", d),
              R && O.addEventListener("resize", d);
          });
          const S = F && C ? Lt(F, d, R) : null;
          let z = -1,
            M = null;
          I &&
            ((M = new ResizeObserver((O) => {
              let [de] = O;
              de &&
                de.target === F &&
                M &&
                f &&
                (M.unobserve(f),
                cancelAnimationFrame(z),
                (z = requestAnimationFrame(() => {
                  var xe;
                  (xe = M) == null || xe.observe(f);
                }))),
                d();
            })),
            F && !T && M.observe(F),
            f && M.observe(f));
          let q,
            J = T ? Le(u) : null;
          T && Z();
          function Z() {
            const O = Le(u);
            J && !kt(J, O) && d(), (J = O), (q = requestAnimationFrame(Z));
          }
          return (
            d(),
            () => {
              var O;
              H.forEach((de) => {
                y && de.removeEventListener("scroll", d),
                  R && de.removeEventListener("resize", d);
              }),
                S == null || S(),
                (O = M) == null || O.disconnect(),
                (M = null),
                T && cancelAnimationFrame(q);
            }
          );
        }
        const Dt = null,
          en = Ct,
          qe = null,
          Xt = Ge,
          _t = ft,
          wn = re,
          pr = null,
          hr = null,
          Mn = null,
          kn = null,
          dn = (u, f, d) => {
            const p = new Map(),
              y = d != null ? d : {},
              R = { ...Ut, ...y.platform, _c: p };
            return Ie(u, f, { ...y, platform: R });
          };
      },
      94621: (fn, Wt, $e) => {
        $e.d(Wt, {
          BN: () => At,
          Ej: () => Et,
          UU: () => He,
          cY: () => dt,
          we: () => ft,
        });
        var c = $e(8083),
          Oe = $e(90626),
          oe = $e(72739),
          Fe =
            typeof document != "undefined" ? Oe.useLayoutEffect : Oe.useEffect;
        function Ie(j, re) {
          if (j === re) return !0;
          if (typeof j != typeof re) return !1;
          if (typeof j == "function" && j.toString() === re.toString())
            return !0;
          let E, Ce, Ne;
          if (j && re && typeof j == "object") {
            if (Array.isArray(j)) {
              if (((E = j.length), E !== re.length)) return !1;
              for (Ce = E; Ce-- !== 0; ) if (!Ie(j[Ce], re[Ce])) return !1;
              return !0;
            }
            if (
              ((Ne = Object.keys(j)),
              (E = Ne.length),
              E !== Object.keys(re).length)
            )
              return !1;
            for (Ce = E; Ce-- !== 0; )
              if (!{}.hasOwnProperty.call(re, Ne[Ce])) return !1;
            for (Ce = E; Ce-- !== 0; ) {
              const ke = Ne[Ce];
              if (!(ke === "_owner" && j.$$typeof) && !Ie(j[ke], re[ke]))
                return !1;
            }
            return !0;
          }
          return j !== j && re !== re;
        }
        function vt(j) {
          return typeof window == "undefined"
            ? 1
            : (j.ownerDocument.defaultView || window).devicePixelRatio || 1;
        }
        function ut(j, re) {
          const E = vt(j);
          return Math.round(re * E) / E;
        }
        function at(j) {
          const re = Oe.useRef(j);
          return (
            Fe(() => {
              re.current = j;
            }),
            re
          );
        }
        function ft(j) {
          j === void 0 && (j = {});
          const {
              placement: re = "bottom",
              strategy: E = "absolute",
              middleware: Ce = [],
              platform: Ne,
              elements: { reference: ke, floating: k } = {},
              transform: U = !0,
              whileElementsMounted: nt,
              open: Le,
            } = j,
            [Pe, $] = Oe.useState({
              x: 0,
              y: 0,
              strategy: E,
              placement: re,
              middlewareData: {},
              isPositioned: !1,
            }),
            [he, De] = Oe.useState(Ce);
          Ie(he, Ce) || De(Ce);
          const [Qe, Je] = Oe.useState(null),
            [rt, bt] = Oe.useState(null),
            Ht = Oe.useCallback((qe) => {
              qe !== Mt.current && ((Mt.current = qe), Je(qe));
            }, []),
            qt = Oe.useCallback((qe) => {
              qe !== xt.current && ((xt.current = qe), bt(qe));
            }, []),
            St = ke || Qe,
            Tt = k || rt,
            Mt = Oe.useRef(null),
            xt = Oe.useRef(null),
            Kt = Oe.useRef(Pe),
            Qt = nt != null,
            Yt = at(nt),
            Vt = at(Ne),
            Ut = at(Le),
            kt = Oe.useCallback(() => {
              if (!Mt.current || !xt.current) return;
              const qe = { placement: re, strategy: E, middleware: he };
              Vt.current && (qe.platform = Vt.current),
                (0, c.rD)(Mt.current, xt.current, qe).then((Xt) => {
                  const _t = { ...Xt, isPositioned: Ut.current !== !1 };
                  Lt.current &&
                    !Ie(Kt.current, _t) &&
                    ((Kt.current = _t),
                    oe.flushSync(() => {
                      $(_t);
                    }));
                });
            }, [he, re, E, Vt, Ut]);
          Fe(() => {
            Le === !1 &&
              Kt.current.isPositioned &&
              ((Kt.current.isPositioned = !1),
              $((qe) => ({ ...qe, isPositioned: !1 })));
          }, [Le]);
          const Lt = Oe.useRef(!1);
          Fe(
            () => (
              (Lt.current = !0),
              () => {
                Lt.current = !1;
              }
            ),
            [],
          ),
            Fe(() => {
              if (
                (St && (Mt.current = St), Tt && (xt.current = Tt), St && Tt)
              ) {
                if (Yt.current) return Yt.current(St, Tt, kt);
                kt();
              }
            }, [St, Tt, kt, Yt, Qt]);
          const Bt = Oe.useMemo(
              () => ({
                reference: Mt,
                floating: xt,
                setReference: Ht,
                setFloating: qt,
              }),
              [Ht, qt],
            ),
            Dt = Oe.useMemo(() => ({ reference: St, floating: Tt }), [St, Tt]),
            en = Oe.useMemo(() => {
              const qe = { position: E, left: 0, top: 0 };
              if (!Dt.floating) return qe;
              const Xt = ut(Dt.floating, Pe.x),
                _t = ut(Dt.floating, Pe.y);
              return U
                ? {
                    ...qe,
                    transform: "translate(" + Xt + "px, " + _t + "px)",
                    ...(vt(Dt.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: E, left: Xt, top: _t };
            }, [E, U, Dt.floating, Pe.x, Pe.y]);
          return Oe.useMemo(
            () => ({
              ...Pe,
              update: kt,
              refs: Bt,
              elements: Dt,
              floatingStyles: en,
            }),
            [Pe, kt, Bt, Dt, en],
          );
        }
        const Rt = (j) => {
            function re(E) {
              return {}.hasOwnProperty.call(E, "current");
            }
            return {
              name: "arrow",
              options: j,
              fn(E) {
                const { element: Ce, padding: Ne } =
                  typeof j == "function" ? j(E) : j;
                return Ce && re(Ce)
                  ? Ce.current != null
                    ? arrow$2({ element: Ce.current, padding: Ne }).fn(E)
                    : {}
                  : Ce
                    ? arrow$2({ element: Ce, padding: Ne }).fn(E)
                    : {};
              },
            };
          },
          dt = (j, re) => ({ ...(0, c.cY)(j), options: [j, re] }),
          At = (j, re) => ({ ...(0, c.BN)(j), options: [j, re] }),
          wt = (j, re) => ({ ...limitShift$1(j), options: [j, re] }),
          He = (j, re) => ({ ...(0, c.UU)(j), options: [j, re] }),
          Et = (j, re) => ({ ...(0, c.Ej)(j), options: [j, re] }),
          It = (j, re) => ({ ...autoPlacement$1(j), options: [j, re] }),
          _e = (j, re) => ({ ...hide$1(j), options: [j, re] }),
          Ct = (j, re) => ({ ...inline$1(j), options: [j, re] }),
          Ge = (j, re) => ({ ...Rt(j), options: [j, re] });
      },
      73788: (fn, Wt, $e) => {
        $e.d(Wt, {
          s3: () => Or,
          ph: () => ye,
          iB: () => qr,
          kp: () => Pr,
          s9: () => Lr,
          we: () => _r,
          iQ: () => Fr,
          Mk: () => vr,
          bv: () => Nr,
          rm: () => Ae,
          C1: () => Kr,
          SV: () => kn,
          It: () => Br,
          lY: () => zr,
        });
        var c = $e(90626),
          Oe = $e.t(c, 2),
          oe = $e(977);
        function Fe(t) {
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
        function Ie(t, e) {
          if (!t || !e) return !1;
          const n = e.getRootNode == null ? void 0 : e.getRootNode();
          if (t.contains(e)) return !0;
          if (n && (0, oe.Ng)(n)) {
            let r = e;
            for (; r; ) {
              if (t === r) return !0;
              r = r.parentNode || r.host;
            }
          }
          return !1;
        }
        function vt() {
          const t = navigator.userAgentData;
          return t != null && t.platform ? t.platform : navigator.platform;
        }
        function ut() {
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
        function at(t) {
          return t.mozInputSource === 0 && t.isTrusted
            ? !0
            : dt() && t.pointerType
              ? t.type === "click" && t.buttons === 1
              : t.detail === 0 && !t.pointerType;
        }
        function ft(t) {
          return wt()
            ? !1
            : (!dt() && t.width === 0 && t.height === 0) ||
                (dt() &&
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
        function Rt() {
          return /apple/i.test(navigator.vendor);
        }
        function dt() {
          const t = /android/i;
          return t.test(vt()) || t.test(ut());
        }
        function At() {
          return (
            vt().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
          );
        }
        function wt() {
          return ut().includes("jsdom/");
        }
        function He(t, e) {
          const n = ["mouse", "pen"];
          return e || n.push("", void 0), n.includes(t);
        }
        function Et(t) {
          return "nativeEvent" in t;
        }
        function It(t) {
          return t.matches("html,body");
        }
        function _e(t) {
          return (t == null ? void 0 : t.ownerDocument) || document;
        }
        function Ct(t, e) {
          if (e == null) return !1;
          if ("composedPath" in t) return t.composedPath().includes(e);
          const n = t;
          return n.target != null && e.contains(n.target);
        }
        function Ge(t) {
          return "composedPath" in t ? t.composedPath()[0] : t.target;
        }
        const j =
          "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
        function re(t) {
          return (0, oe.sb)(t) && t.matches(j);
        }
        function E(t) {
          t.preventDefault(), t.stopPropagation();
        }
        function Ce(t) {
          return t ? t.getAttribute("role") === "combobox" && re(t) : !1;
        }
        var Ne = $e(58015),
          ke = $e(7850); /*!
         * tabbable 6.2.0
         * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
         */
        var k = [
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
          U = k.join(","),
          nt = typeof Element == "undefined",
          Le = nt
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
          Pe =
            !nt && Element.prototype.getRootNode
              ? function (t) {
                  var e;
                  return t == null ||
                    (e = t.getRootNode) === null ||
                    e === void 0
                    ? void 0
                    : e.call(t);
                }
              : function (t) {
                  return t == null ? void 0 : t.ownerDocument;
                },
          $ = function t(e, n) {
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
          he = function (e) {
            var n,
              r =
                e == null || (n = e.getAttribute) === null || n === void 0
                  ? void 0
                  : n.call(e, "contenteditable");
            return r === "" || r === "true";
          },
          De = function (e, n, r) {
            if ($(e)) return [];
            var o = Array.prototype.slice.apply(e.querySelectorAll(U));
            return n && Le.call(e, U) && o.unshift(e), (o = o.filter(r)), o;
          },
          Qe = function t(e, n, r) {
            for (var o = [], s = Array.from(e); s.length; ) {
              var i = s.shift();
              if (!$(i, !1))
                if (i.tagName === "SLOT") {
                  var l = i.assignedElements(),
                    v = l.length ? l : i.children,
                    a = t(v, !0, r);
                  r.flatten
                    ? o.push.apply(o, a)
                    : o.push({ scopeParent: i, candidates: a });
                } else {
                  var g = Le.call(i, U);
                  g && r.filter(i) && (n || !e.includes(i)) && o.push(i);
                  var w =
                      i.shadowRoot ||
                      (typeof r.getShadowRoot == "function" &&
                        r.getShadowRoot(i)),
                    b =
                      !$(w, !1) &&
                      (!r.shadowRootFilter || r.shadowRootFilter(i));
                  if (w && b) {
                    var m = t(w === !0 ? i.children : w.children, !0, r);
                    r.flatten
                      ? o.push.apply(o, m)
                      : o.push({ scopeParent: i, candidates: m });
                  } else s.unshift.apply(s, i.children);
                }
            }
            return o;
          },
          Je = function (e) {
            return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
          },
          rt = function (e) {
            if (!e) throw new Error("No node provided");
            return e.tabIndex < 0 &&
              (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || he(e)) &&
              !Je(e)
              ? 0
              : e.tabIndex;
          },
          bt = function (e, n) {
            var r = rt(e);
            return r < 0 && n && !Je(e) ? 0 : r;
          },
          Ht = function (e, n) {
            return e.tabIndex === n.tabIndex
              ? e.documentOrder - n.documentOrder
              : e.tabIndex - n.tabIndex;
          },
          qt = function (e) {
            return e.tagName === "INPUT";
          },
          St = function (e) {
            return qt(e) && e.type === "hidden";
          },
          Tt = function (e) {
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
          xt = function (e) {
            if (!e.name) return !0;
            var n = e.form || Pe(e),
              r = function (l) {
                return n.querySelectorAll(
                  'input[type="radio"][name="' + l + '"]',
                );
              },
              o;
            if (
              typeof window != "undefined" &&
              typeof window.CSS != "undefined" &&
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
          Kt = function (e) {
            return qt(e) && e.type === "radio";
          },
          Qt = function (e) {
            return Kt(e) && !xt(e);
          },
          Yt = function (e) {
            var n,
              r = e && Pe(e),
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
                var a, g, w;
                (r = Pe(o)),
                  (o = (a = r) === null || a === void 0 ? void 0 : a.host),
                  (s = !!(
                    (g = o) !== null &&
                    g !== void 0 &&
                    (w = g.ownerDocument) !== null &&
                    w !== void 0 &&
                    w.contains(o)
                  ));
              }
            }
            return s;
          },
          Vt = function (e) {
            var n = e.getBoundingClientRect(),
              r = n.width,
              o = n.height;
            return r === 0 && o === 0;
          },
          Ut = function (e, n) {
            var r = n.displayCheck,
              o = n.getShadowRoot;
            if (getComputedStyle(e).visibility === "hidden") return !0;
            var s = Le.call(e, "details>summary:first-of-type"),
              i = s ? e.parentElement : e;
            if (Le.call(i, "details:not([open]) *")) return !0;
            if (!r || r === "full" || r === "legacy-full") {
              if (typeof o == "function") {
                for (var l = e; e; ) {
                  var v = e.parentElement,
                    a = Pe(e);
                  if (v && !v.shadowRoot && o(v) === !0) return Vt(e);
                  e.assignedSlot
                    ? (e = e.assignedSlot)
                    : !v && a !== e.ownerDocument
                      ? (e = a.host)
                      : (e = v);
                }
                e = l;
              }
              if (Yt(e)) return !e.getClientRects().length;
              if (r !== "legacy-full") return !0;
            } else if (r === "non-zero-area") return Vt(e);
            return !1;
          },
          kt = function (e) {
            if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
              for (var n = e.parentElement; n; ) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                  for (var r = 0; r < n.children.length; r++) {
                    var o = n.children.item(r);
                    if (o.tagName === "LEGEND")
                      return Le.call(n, "fieldset[disabled] *")
                        ? !0
                        : !o.contains(e);
                  }
                  return !0;
                }
                n = n.parentElement;
              }
            return !1;
          },
          Lt = function (e, n) {
            return !(n.disabled || $(n) || St(n) || Ut(n, e) || Tt(n) || kt(n));
          },
          Bt = function (e, n) {
            return !(Qt(n) || rt(n) < 0 || !Lt(e, n));
          },
          Dt = function (e) {
            var n = parseInt(e.getAttribute("tabindex"), 10);
            return !!(isNaN(n) || n >= 0);
          },
          en = function t(e) {
            var n = [],
              r = [];
            return (
              e.forEach(function (o, s) {
                var i = !!o.scopeParent,
                  l = i ? o.scopeParent : o,
                  v = bt(l, i),
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
                .sort(Ht)
                .reduce(function (o, s) {
                  return (
                    s.isScope ? o.push.apply(o, s.content) : o.push(s.content),
                    o
                  );
                }, [])
                .concat(n)
            );
          },
          qe = function (e, n) {
            n = n || {};
            var r;
            return (
              n.getShadowRoot
                ? (r = Qe([e], n.includeContainer, {
                    filter: Bt.bind(null, n),
                    flatten: !1,
                    getShadowRoot: n.getShadowRoot,
                    shadowRootFilter: Dt,
                  }))
                : (r = De(e, n.includeContainer, Bt.bind(null, n))),
              en(r)
            );
          },
          Xt = function (e, n) {
            n = n || {};
            var r;
            return (
              n.getShadowRoot
                ? (r = Qe([e], n.includeContainer, {
                    filter: Lt.bind(null, n),
                    flatten: !0,
                    getShadowRoot: n.getShadowRoot,
                  }))
                : (r = De(e, n.includeContainer, Lt.bind(null, n))),
              r
            );
          },
          _t = function (e, n) {
            if (((n = n || {}), !e)) throw new Error("No node provided");
            return Le.call(e, U) === !1 ? !1 : Bt(n, e);
          },
          wn = null,
          pr = function (e, n) {
            if (((n = n || {}), !e)) throw new Error("No node provided");
            return Le.call(e, wn) === !1 ? !1 : Lt(n, e);
          },
          hr = $e(72739),
          Mn = $e(94621);
        function kn(t) {
          const e = c.useRef(void 0),
            n = c.useCallback((r) => {
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
                o.forEach((s) => (s == null ? void 0 : s()));
              };
            }, t);
          return c.useMemo(
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
        const dn = { ...Oe },
          f = dn.useInsertionEffect || ((t) => t());
        function d(t) {
          const e = c.useRef(() => {});
          return (
            f(() => {
              e.current = t;
            }),
            c.useCallback(function () {
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
        const p = "ArrowUp",
          y = "ArrowDown",
          R = "ArrowLeft",
          I = "ArrowRight";
        function C(t, e, n) {
          return Math.floor(t / e) !== n;
        }
        function T(t, e) {
          return e < 0 || e >= t.current.length;
        }
        function F(t, e) {
          return S(t, { disabledIndices: e });
        }
        function H(t, e) {
          return S(t, {
            decrement: !0,
            startingIndex: t.current.length,
            disabledIndices: e,
          });
        }
        function S(t, e) {
          let {
            startingIndex: n = -1,
            decrement: r = !1,
            disabledIndices: o,
            amount: s = 1,
          } = e === void 0 ? {} : e;
          const i = t.current;
          let l = n;
          do l += r ? -s : s;
          while (l >= 0 && l <= i.length - 1 && Z(i, l, o));
          return l;
        }
        function z(t, e) {
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
              stopEvent: w = !1,
            } = e,
            b = g;
          if (n.key === p) {
            if ((w && E(n), g === -1)) b = a;
            else if (
              ((b = S(t, {
                startingIndex: b,
                amount: i,
                decrement: !0,
                disabledIndices: l,
              })),
              o && (g - i < v || b < 0))
            ) {
              const m = g % i,
                x = a % i,
                h = a - (x - m);
              x === m ? (b = a) : (b = x > m ? h : h - i);
            }
            T(t, b) && (b = g);
          }
          if (
            (n.key === y &&
              (w && E(n),
              g === -1
                ? (b = v)
                : ((b = S(t, {
                    startingIndex: g,
                    amount: i,
                    disabledIndices: l,
                  })),
                  o &&
                    g + i > a &&
                    (b = S(t, {
                      startingIndex: (g % i) - i,
                      amount: i,
                      disabledIndices: l,
                    }))),
              T(t, b) && (b = g)),
            r === "both")
          ) {
            const m = (0, Ne.RI)(g / i);
            n.key === (s ? R : I) &&
              (w && E(n),
              g % i !== i - 1
                ? ((b = S(t, { startingIndex: g, disabledIndices: l })),
                  o &&
                    C(b, i, m) &&
                    (b = S(t, {
                      startingIndex: g - (g % i) - 1,
                      disabledIndices: l,
                    })))
                : o &&
                  (b = S(t, {
                    startingIndex: g - (g % i) - 1,
                    disabledIndices: l,
                  })),
              C(b, i, m) && (b = g)),
              n.key === (s ? I : R) &&
                (w && E(n),
                g % i !== 0
                  ? ((b = S(t, {
                      startingIndex: g,
                      decrement: !0,
                      disabledIndices: l,
                    })),
                    o &&
                      C(b, i, m) &&
                      (b = S(t, {
                        startingIndex: g + (i - (g % i)),
                        decrement: !0,
                        disabledIndices: l,
                      })))
                  : o &&
                    (b = S(t, {
                      startingIndex: g + (i - (g % i)),
                      decrement: !0,
                      disabledIndices: l,
                    })),
                C(b, i, m) && (b = g));
            const x = (0, Ne.RI)(a / i) === m;
            T(t, b) &&
              (o && x
                ? (b =
                    n.key === (s ? I : R)
                      ? a
                      : S(t, {
                          startingIndex: g - (g % i) - 1,
                          disabledIndices: l,
                        }))
                : (b = g));
          }
          return b;
        }
        function M(t, e, n) {
          const r = [];
          let o = 0;
          return (
            t.forEach((s, i) => {
              let { width: l, height: v } = s;
              l > e;
              let a = !1;
              for (n && (o = 0); !a; ) {
                const g = [];
                for (let w = 0; w < l; w++)
                  for (let b = 0; b < v; b++) g.push(o + w + b * e);
                (o % e) + l <= e && g.every((w) => r[w] == null)
                  ? (g.forEach((w) => {
                      r[w] = i;
                    }),
                    (a = !0))
                  : o++;
              }
            }),
            [...r]
          );
        }
        function q(t, e, n, r, o) {
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
        function J(t, e) {
          return e.flatMap((n, r) => (t.includes(n) ? [r] : []));
        }
        function Z(t, e, n) {
          if (n) return n.includes(e);
          const r = t[e];
          return (
            r == null ||
            r.hasAttribute("disabled") ||
            r.getAttribute("aria-disabled") === "true"
          );
        }
        var O =
          typeof document != "undefined" ? c.useLayoutEffect : c.useEffect;
        function de(t, e) {
          const n = t.compareDocumentPosition(e);
          return n & Node.DOCUMENT_POSITION_FOLLOWING ||
            n & Node.DOCUMENT_POSITION_CONTAINED_BY
            ? -1
            : n & Node.DOCUMENT_POSITION_PRECEDING ||
                n & Node.DOCUMENT_POSITION_CONTAINS
              ? 1
              : 0;
        }
        const xe = c.createContext({
          register: () => {},
          unregister: () => {},
          map: new Map(),
          elementsRef: { current: [] },
        });
        function ye(t) {
          const { children: e, elementsRef: n, labelsRef: r } = t,
            [o, s] = c.useState(() => new Set()),
            i = c.useCallback((a) => {
              s((g) => new Set(g).add(a));
            }, []),
            l = c.useCallback((a) => {
              s((g) => {
                const w = new Set(g);
                return w.delete(a), w;
              });
            }, []),
            v = c.useMemo(() => {
              const a = new Map();
              return (
                Array.from(o.keys())
                  .sort(de)
                  .forEach((w, b) => {
                    a.set(w, b);
                  }),
                a
              );
            }, [o]);
          return (0, ke.jsx)(xe.Provider, {
            value: c.useMemo(
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
        function Ae(t) {
          t === void 0 && (t = {});
          const { label: e } = t,
            {
              register: n,
              unregister: r,
              map: o,
              elementsRef: s,
              labelsRef: i,
            } = c.useContext(xe),
            [l, v] = c.useState(null),
            a = c.useRef(null),
            g = c.useCallback(
              (w) => {
                if (((a.current = w), l !== null && ((s.current[l] = w), i))) {
                  var b;
                  const m = e !== void 0;
                  i.current[l] = m
                    ? e
                    : (b = w == null ? void 0 : w.textContent) != null
                      ? b
                      : null;
                }
              },
              [l, s, i, e],
            );
          return (
            O(() => {
              const w = a.current;
              if (w)
                return (
                  n(w),
                  () => {
                    r(w);
                  }
                );
            }, [n, r]),
            O(() => {
              const w = a.current ? o.get(a.current) : null;
              w != null && v(w);
            }, [o]),
            c.useMemo(() => ({ ref: g, index: l == null ? -1 : l }), [l, g])
          );
        }
        function le(t, e) {
          return typeof t == "function"
            ? t(e)
            : t
              ? React.cloneElement(t, e)
              : jsx("div", { ...e });
        }
        const Me = c.createContext({ activeIndex: 0, onNavigate: () => {} }),
          Ye = [R, I],
          Ze = [p, y],
          Te = [...Ye, ...Ze],
          it = null,
          Ft = null;
        let st = !1,
          mt = 0;
        const Nt = () =>
          "floating-ui-" + Math.random().toString(36).slice(2, 6) + mt++;
        function Ot() {
          const [t, e] = c.useState(() => (st ? Nt() : void 0));
          return (
            O(() => {
              t == null && e(Nt());
            }, []),
            c.useEffect(() => {
              st = !0;
            }, []),
            t
          );
        }
        const ot = dn.useId || Ot;
        let gt;
        function Ln() {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          const o = "Floating UI: " + n.join(" ");
          if (!((t = gt) != null && t.has(o))) {
            var s;
            (s = gt) == null || s.add(o), console.warn(o);
          }
        }
        function Xr() {
          for (var t, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          const o = "Floating UI: " + n.join(" ");
          if (!((t = gt) != null && t.has(o))) {
            var s;
            (s = gt) == null || s.add(o), console.error(o);
          }
        }
        const Gr = null;
        function Dn() {
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
        const _n = c.createContext(null),
          Fn = c.createContext(null),
          tn = () => {
            var t;
            return ((t = c.useContext(_n)) == null ? void 0 : t.id) || null;
          },
          nn = () => c.useContext(Fn);
        function Jr(t) {
          const e = ot(),
            n = nn(),
            r = tn(),
            o = t || r;
          return (
            O(() => {
              if (!e) return;
              const s = { id: e, parentId: o };
              return (
                n == null || n.addNode(s),
                () => {
                  n == null || n.removeNode(s);
                }
              );
            }, [n, e, o]),
            e
          );
        }
        function Zr(t) {
          const { children: e, id: n } = t,
            r = tn();
          return jsx(_n.Provider, {
            value: React.useMemo(() => ({ id: n, parentId: r }), [n, r]),
            children: e,
          });
        }
        function Qr(t) {
          const { children: e } = t,
            n = React.useRef([]),
            r = React.useCallback((i) => {
              n.current = [...n.current, i];
            }, []),
            o = React.useCallback((i) => {
              n.current = n.current.filter((l) => l !== i);
            }, []),
            s = React.useState(() => Dn())[0];
          return jsx(Fn.Provider, {
            value: React.useMemo(
              () => ({ nodesRef: n, addNode: r, removeNode: o, events: s }),
              [r, o, s],
            ),
            children: e,
          });
        }
        function rn(t) {
          return "data-floating-ui-" + t;
        }
        function lt(t) {
          t.current !== -1 && (clearTimeout(t.current), (t.current = -1));
        }
        function et(t) {
          const e = (0, c.useRef)(t);
          return (
            O(() => {
              e.current = t;
            }),
            e
          );
        }
        const Nn = rn("safe-polygon");
        function mn(t, e, n) {
          return n && !He(n)
            ? 0
            : typeof t == "number"
              ? t
              : t == null
                ? void 0
                : t[e];
        }
        function vr(t, e) {
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
              restMs: w = 0,
              move: b = !0,
            } = e,
            m = nn(),
            x = tn(),
            h = et(a),
            W = et(v),
            P = et(n),
            _ = c.useRef(),
            D = c.useRef(-1),
            ie = c.useRef(),
            pe = c.useRef(-1),
            ne = c.useRef(!0),
            ve = c.useRef(!1),
            Re = c.useRef(() => {}),
            ue = c.useRef(!1),
            se = c.useCallback(() => {
              var B;
              const Y = (B = o.current.openEvent) == null ? void 0 : B.type;
              return (
                (Y == null ? void 0 : Y.includes("mouse")) && Y !== "mousedown"
              );
            }, [o]);
          c.useEffect(() => {
            if (!l) return;
            function B(Y) {
              let { open: N } = Y;
              N || (lt(D), lt(pe), (ne.current = !0), (ue.current = !1));
            }
            return (
              s.on("openchange", B),
              () => {
                s.off("openchange", B);
              }
            );
          }, [l, s]),
            c.useEffect(() => {
              if (!l || !h.current || !n) return;
              function B(N) {
                se() && r(!1, N, "hover");
              }
              const Y = _e(i.floating).documentElement;
              return (
                Y.addEventListener("mouseleave", B),
                () => {
                  Y.removeEventListener("mouseleave", B);
                }
              );
            }, [i.floating, n, r, l, h, se]);
          const we = c.useCallback(
              function (B, Y, N) {
                Y === void 0 && (Y = !0), N === void 0 && (N = "hover");
                const L = mn(W.current, "close", _.current);
                L && !ie.current
                  ? (lt(D),
                    (D.current = window.setTimeout(() => r(!1, B, N), L)))
                  : Y && (lt(D), r(!1, B, N));
              },
              [W, r],
            ),
            te = d(() => {
              Re.current(), (ie.current = void 0);
            }),
            A = d(() => {
              if (ve.current) {
                const B = _e(i.floating).body;
                (B.style.pointerEvents = ""),
                  B.removeAttribute(Nn),
                  (ve.current = !1);
              }
            }),
            K = d(() =>
              o.current.openEvent
                ? ["click", "mousedown"].includes(o.current.openEvent.type)
                : !1,
            );
          c.useEffect(() => {
            if (!l) return;
            function B(X) {
              if (
                (lt(D),
                (ne.current = !1),
                (g && !He(_.current)) || (w > 0 && !mn(W.current, "open")))
              )
                return;
              const be = mn(W.current, "open", _.current);
              be
                ? (D.current = window.setTimeout(() => {
                    P.current || r(!0, X, "hover");
                  }, be))
                : n || r(!0, X, "hover");
            }
            function Y(X) {
              if (K()) return;
              Re.current();
              const be = _e(i.floating);
              if (
                (lt(pe),
                (ue.current = !1),
                h.current && o.current.floatingContext)
              ) {
                n || lt(D),
                  (ie.current = h.current({
                    ...o.current.floatingContext,
                    tree: m,
                    x: X.clientX,
                    y: X.clientY,
                    onClose() {
                      A(), te(), K() || we(X, !0, "safe-polygon");
                    },
                  }));
                const Ue = ie.current;
                be.addEventListener("mousemove", Ue),
                  (Re.current = () => {
                    be.removeEventListener("mousemove", Ue);
                  });
                return;
              }
              (_.current !== "touch" || !Ie(i.floating, X.relatedTarget)) &&
                we(X);
            }
            function N(X) {
              K() ||
                (o.current.floatingContext &&
                  (h.current == null ||
                    h.current({
                      ...o.current.floatingContext,
                      tree: m,
                      x: X.clientX,
                      y: X.clientY,
                      onClose() {
                        A(), te(), K() || we(X);
                      },
                    })(X)));
            }
            if ((0, oe.vq)(i.domReference)) {
              var L;
              const X = i.domReference;
              return (
                n && X.addEventListener("mouseleave", N),
                (L = i.floating) == null || L.addEventListener("mouseleave", N),
                b && X.addEventListener("mousemove", B, { once: !0 }),
                X.addEventListener("mouseenter", B),
                X.addEventListener("mouseleave", Y),
                () => {
                  var be;
                  n && X.removeEventListener("mouseleave", N),
                    (be = i.floating) == null ||
                      be.removeEventListener("mouseleave", N),
                    b && X.removeEventListener("mousemove", B),
                    X.removeEventListener("mouseenter", B),
                    X.removeEventListener("mouseleave", Y);
                }
              );
            }
          }, [i, l, t, g, w, b, we, te, A, r, n, P, m, W, h, o, K]),
            O(() => {
              var B;
              if (
                l &&
                n &&
                (B = h.current) != null &&
                B.__options.blockPointerEvents &&
                se()
              ) {
                ve.current = !0;
                const N = i.floating;
                if ((0, oe.vq)(i.domReference) && N) {
                  var Y;
                  const L = _e(i.floating).body;
                  L.setAttribute(Nn, "");
                  const X = i.domReference,
                    be =
                      m == null ||
                      (Y = m.nodesRef.current.find((We) => We.id === x)) ==
                        null ||
                      (Y = Y.context) == null
                        ? void 0
                        : Y.elements.floating;
                  return (
                    be && (be.style.pointerEvents = ""),
                    (L.style.pointerEvents = "none"),
                    (X.style.pointerEvents = "auto"),
                    (N.style.pointerEvents = "auto"),
                    () => {
                      (L.style.pointerEvents = ""),
                        (X.style.pointerEvents = ""),
                        (N.style.pointerEvents = "");
                    }
                  );
                }
              }
            }, [l, n, x, i, m, h, se]),
            O(() => {
              n || ((_.current = void 0), (ue.current = !1), te(), A());
            }, [n, te, A]),
            c.useEffect(
              () => () => {
                te(), lt(D), lt(pe), A();
              },
              [l, i.domReference, te, A],
            );
          const Q = c.useMemo(() => {
              function B(Y) {
                _.current = Y.pointerType;
              }
              return {
                onPointerDown: B,
                onPointerEnter: B,
                onMouseMove(Y) {
                  const { nativeEvent: N } = Y;
                  function L() {
                    !ne.current && !P.current && r(!0, N, "hover");
                  }
                  (g && !He(_.current)) ||
                    n ||
                    w === 0 ||
                    (ue.current && Y.movementX ** 2 + Y.movementY ** 2 < 2) ||
                    (lt(pe),
                    _.current === "touch"
                      ? L()
                      : ((ue.current = !0),
                        (pe.current = window.setTimeout(L, w))));
                },
              };
            }, [g, r, n, P, w]),
            V = c.useMemo(
              () => ({
                onMouseEnter() {
                  lt(D);
                },
                onMouseLeave(B) {
                  K() || we(B.nativeEvent, !1);
                },
              }),
              [we, K],
            );
          return c.useMemo(
            () => (l ? { reference: Q, floating: V } : {}),
            [l, Q, V],
          );
        }
        const En = () => {},
          Wn = c.createContext({
            delay: 0,
            initialDelay: 0,
            timeoutMs: 0,
            currentId: null,
            setCurrentId: En,
            setState: En,
            isInstantPhase: !1,
          }),
          br = () => React.useContext(Wn);
        function eo(t) {
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
            O(() => {
              o.currentId
                ? i.current === null
                  ? (i.current = o.currentId)
                  : o.isInstantPhase || s({ isInstantPhase: !0 })
                : (o.isInstantPhase && s({ isInstantPhase: !1 }),
                  (i.current = null));
            }, [o.currentId, o.isInstantPhase]),
            jsx(Wn.Provider, {
              value: React.useMemo(
                () => ({ ...o, setState: s, setCurrentId: l }),
                [o, l],
              ),
              children: e,
            })
          );
        }
        function to(t, e) {
          e === void 0 && (e = {});
          const { open: n, onOpenChange: r, floatingId: o } = t,
            { id: s, enabled: i = !0 } = e,
            l = s != null ? s : o,
            v = br(),
            {
              currentId: a,
              setCurrentId: g,
              initialDelay: w,
              setState: b,
              timeoutMs: m,
            } = v;
          return (
            O(() => {
              i &&
                a &&
                (b({ delay: { open: 1, close: mn(w, "close") } }),
                a !== l && r(!1));
            }, [i, l, r, b, a, w]),
            O(() => {
              function x() {
                r(!1), b({ delay: w, currentId: null });
              }
              if (i && a && !n && a === l) {
                if (m) {
                  const h = window.setTimeout(x, m);
                  return () => {
                    clearTimeout(h);
                  };
                }
                x();
              }
            }, [i, n, b, a, l, r, w, m]),
            O(() => {
              i && (g === En || !n || g(l));
            }, [i, n, g, l]),
            v
          );
        }
        let Kn = 0;
        function Gt(t, e) {
          e === void 0 && (e = {});
          const {
            preventScroll: n = !1,
            cancelPrevious: r = !0,
            sync: o = !1,
          } = e;
          r && cancelAnimationFrame(Kn);
          const s = () => (t == null ? void 0 : t.focus({ preventScroll: n }));
          o ? s() : (Kn = requestAnimationFrame(s));
        }
        function Vn(t, e) {
          var n;
          let r = [],
            o = (n = t.find((s) => s.id === e)) == null ? void 0 : n.parentId;
          for (; o; ) {
            const s = t.find((i) => i.id === o);
            (o = s == null ? void 0 : s.parentId), s && (r = r.concat(s));
          }
          return r;
        }
        function Jt(t, e) {
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
        function xr(t, e) {
          let n,
            r = -1;
          function o(s, i) {
            i > r && ((n = s), (r = i)),
              Jt(t, s).forEach((v) => {
                o(v.id, i + 1);
              });
          }
          return o(e, 0), t.find((s) => s.id === n);
        }
        let on = new WeakMap(),
          gn = new WeakSet(),
          pn = {},
          In = 0;
        const yr = () =>
            typeof HTMLElement != "undefined" &&
            "inert" in HTMLElement.prototype,
          Bn = (t) => t && (t.host || Bn(t.parentNode)),
          Rr = (t, e) =>
            e
              .map((n) => {
                if (t.contains(n)) return n;
                const r = Bn(n);
                return t.contains(r) ? r : null;
              })
              .filter((n) => n != null);
        function wr(t, e, n, r) {
          const o = "data-floating-ui-inert",
            s = r ? "inert" : n ? "aria-hidden" : null,
            i = Rr(e, t),
            l = new Set(),
            v = new Set(i),
            a = [];
          pn[o] || (pn[o] = new WeakMap());
          const g = pn[o];
          i.forEach(w), b(e), l.clear();
          function w(m) {
            !m || l.has(m) || (l.add(m), m.parentNode && w(m.parentNode));
          }
          function b(m) {
            !m ||
              v.has(m) ||
              [].forEach.call(m.children, (x) => {
                if ((0, oe.mq)(x) !== "script")
                  if (l.has(x)) b(x);
                  else {
                    const h = s ? x.getAttribute(s) : null,
                      W = h !== null && h !== "false",
                      P = on.get(x) || 0,
                      _ = s ? P + 1 : P,
                      D = (g.get(x) || 0) + 1;
                    on.set(x, _),
                      g.set(x, D),
                      a.push(x),
                      _ === 1 && W && gn.add(x),
                      D === 1 && x.setAttribute(o, ""),
                      !W && s && x.setAttribute(s, "true");
                  }
              });
          }
          return (
            In++,
            () => {
              a.forEach((m) => {
                const x = on.get(m) || 0,
                  h = s ? x - 1 : x,
                  W = (g.get(m) || 0) - 1;
                on.set(m, h),
                  g.set(m, W),
                  h || (!gn.has(m) && s && m.removeAttribute(s), gn.delete(m)),
                  W || m.removeAttribute(o);
              }),
                In--,
                In ||
                  ((on = new WeakMap()),
                  (on = new WeakMap()),
                  (gn = new WeakSet()),
                  (pn = {}));
            }
          );
        }
        function jn(t, e, n) {
          e === void 0 && (e = !1), n === void 0 && (n = !1);
          const r = _e(t[0]).body;
          return wr(
            t.concat(Array.from(r.querySelectorAll("[aria-live]"))),
            r,
            e,
            n,
          );
        }
        const hn = () => ({
          getShadowRoot: !0,
          displayCheck:
            typeof ResizeObserver == "function" &&
            ResizeObserver.toString().includes("[native code]")
              ? "full"
              : "none",
        });
        function $n(t, e) {
          const n = qe(t, hn());
          e === "prev" && n.reverse();
          const r = n.indexOf(Fe(_e(t)));
          return n.slice(r + 1)[0];
        }
        function zn() {
          return $n(document.body, "next");
        }
        function Hn() {
          return $n(document.body, "prev");
        }
        function ln(t, e) {
          const n = e || t.currentTarget,
            r = t.relatedTarget;
          return !r || !Ie(n, r);
        }
        function Er(t) {
          tabbable(t, hn()).forEach((n) => {
            (n.dataset.tabindex = n.getAttribute("tabindex") || ""),
              n.setAttribute("tabindex", "-1");
          });
        }
        function qn(t) {
          t.querySelectorAll("[data-tabindex]").forEach((n) => {
            const r = n.dataset.tabindex;
            delete n.dataset.tabindex,
              r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex");
          });
        }
        const vn = {
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
          bn = c.forwardRef(function (e, n) {
            const [r, o] = c.useState();
            O(() => {
              Rt() && o("button");
            }, []);
            const s = {
              ref: n,
              tabIndex: 0,
              role: r,
              "aria-hidden": r ? void 0 : !0,
              [rn("focus-guard")]: "",
              style: vn,
            };
            return (0, ke.jsx)("span", { ...e, ...s });
          }),
          Yn = c.createContext(null),
          Un = null;
        function Ir(t) {
          t === void 0 && (t = {});
          const { id: e, root: n } = t,
            r = ot(),
            o = Xn(),
            [s, i] = React.useState(null),
            l = React.useRef(null);
          return (
            O(
              () => () => {
                s == null || s.remove(),
                  queueMicrotask(() => {
                    l.current = null;
                  });
              },
              [s],
            ),
            O(() => {
              if (!r || l.current) return;
              const v = e ? document.getElementById(e) : null;
              if (!v) return;
              const a = document.createElement("div");
              (a.id = r),
                a.setAttribute(Un, ""),
                v.appendChild(a),
                (l.current = a),
                i(a);
            }, [e, r]),
            O(() => {
              if (n === null || !r || l.current) return;
              let v = n || (o == null ? void 0 : o.portalNode);
              v && !isElement(v) && (v = v.current), (v = v || document.body);
              let a = null;
              e &&
                ((a = document.createElement("div")),
                (a.id = e),
                v.appendChild(a));
              const g = document.createElement("div");
              (g.id = r),
                g.setAttribute(Un, ""),
                (v = a || v),
                v.appendChild(g),
                (l.current = g),
                i(g);
            }, [e, n, r, o]),
            s
          );
        }
        function no(t) {
          const { children: e, id: n, root: r, preserveTabOrder: o = !0 } = t,
            s = Ir({ id: n, root: r }),
            [i, l] = React.useState(null),
            v = React.useRef(null),
            a = React.useRef(null),
            g = React.useRef(null),
            w = React.useRef(null),
            b = i == null ? void 0 : i.modal,
            m = i == null ? void 0 : i.open,
            x = !!i && !i.modal && i.open && o && !!(r || s);
          return (
            React.useEffect(() => {
              if (!s || !o || b) return;
              function h(W) {
                s && ln(W) && (W.type === "focusin" ? qn : Er)(s);
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
              s && (m || qn(s));
            }, [m, s]),
            jsxs(Yn.Provider, {
              value: React.useMemo(
                () => ({
                  preserveTabOrder: o,
                  beforeOutsideRef: v,
                  afterOutsideRef: a,
                  beforeInsideRef: g,
                  afterInsideRef: w,
                  portalNode: s,
                  setFocusManagerState: l,
                }),
                [o, s],
              ),
              children: [
                x &&
                  s &&
                  jsx(bn, {
                    "data-type": "outside",
                    ref: v,
                    onFocus: (h) => {
                      if (ln(h, s)) {
                        var W;
                        (W = g.current) == null || W.focus();
                      } else {
                        const P = Hn() || (i == null ? void 0 : i.domReference);
                        P == null || P.focus();
                      }
                    },
                  }),
                x && s && jsx("span", { "aria-owns": s.id, style: vn }),
                s && ReactDOM.createPortal(e, s),
                x &&
                  s &&
                  jsx(bn, {
                    "data-type": "outside",
                    ref: a,
                    onFocus: (h) => {
                      if (ln(h, s)) {
                        var W;
                        (W = w.current) == null || W.focus();
                      } else {
                        const P = zn() || (i == null ? void 0 : i.domReference);
                        P == null || P.focus(),
                          i != null &&
                            i.closeOnFocusOut &&
                            (i == null ||
                              i.onOpenChange(!1, h.nativeEvent, "focus-out"));
                      }
                    },
                  }),
              ],
            })
          );
        }
        const Xn = () => c.useContext(Yn),
          Cn = "data-floating-ui-focusable";
        function Sn(t) {
          return t
            ? t.hasAttribute(Cn)
              ? t
              : t.querySelector("[" + Cn + "]") || t
            : null;
        }
        function Gn(t) {
          return c.useMemo(
            () => (e) => {
              t.forEach((n) => {
                n && (n.current = e);
              });
            },
            t,
          );
        }
        const Jn = 20;
        let Zt = [];
        function Cr(t) {
          (Zt = Zt.filter((e) => e.isConnected)),
            t &&
              (0, oe.mq)(t) !== "body" &&
              (Zt.push(t), Zt.length > Jn && (Zt = Zt.slice(-Jn)));
        }
        function Zn() {
          return Zt.slice()
            .reverse()
            .find((t) => t.isConnected);
        }
        function Sr(t) {
          const e = hn();
          return _t(t, e) ? t : qe(t, e)[0] || t;
        }
        const Tr = c.forwardRef(function (e, n) {
          return (0, ke.jsx)("button", {
            ...e,
            type: "button",
            ref: n,
            tabIndex: -1,
            style: vn,
          });
        });
        function Or(t) {
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
              closeOnFocusOut: w = !0,
              outsideElementsInert: b = !1,
            } = t,
            {
              open: m,
              onOpenChange: x,
              events: h,
              dataRef: W,
              elements: { domReference: P, floating: _ },
            } = e,
            D = d(() => {
              var ee;
              return (ee = W.current.floatingContext) == null
                ? void 0
                : ee.nodeId;
            }),
            ie = typeof i == "number" && i < 0,
            pe = Ce(P) && ie,
            ne = yr(),
            ve = ne ? s : !0,
            Re = !ve || (ne && b),
            ue = et(o),
            se = et(i),
            we = et(l),
            te = nn(),
            A = Xn(),
            K = c.useRef(null),
            Q = c.useRef(null),
            V = c.useRef(!1),
            B = c.useRef(!1),
            Y = c.useRef(-1),
            N = A != null,
            L = Sn(_),
            X = d(function (ee) {
              return ee === void 0 && (ee = L), ee ? qe(ee, hn()) : [];
            }),
            be = d((ee) => {
              const me = X(ee);
              return ue.current
                .map((ce) =>
                  P && ce === "reference" ? P : L && ce === "floating" ? L : me,
                )
                .filter(Boolean)
                .flat();
            });
          c.useEffect(() => {
            if (r || !a) return;
            function ee(ce) {
              if (ce.key === "Tab") {
                Ie(L, Fe(_e(L))) && X().length === 0 && !pe && E(ce);
                const ge = be(),
                  Ve = Ge(ce);
                ue.current[0] === "reference" &&
                  Ve === P &&
                  (E(ce), ce.shiftKey ? Gt(ge[ge.length - 1]) : Gt(ge[1])),
                  ue.current[1] === "floating" &&
                    Ve === L &&
                    ce.shiftKey &&
                    (E(ce), Gt(ge[0]));
              }
            }
            const me = _e(L);
            return (
              me.addEventListener("keydown", ee),
              () => {
                me.removeEventListener("keydown", ee);
              }
            );
          }, [r, P, L, a, ue, pe, X, be]),
            c.useEffect(() => {
              if (r || !_) return;
              function ee(me) {
                const ce = Ge(me),
                  Ve = X().indexOf(ce);
                Ve !== -1 && (Y.current = Ve);
              }
              return (
                _.addEventListener("focusin", ee),
                () => {
                  _.removeEventListener("focusin", ee);
                }
              );
            }, [r, _, X]),
            c.useEffect(() => {
              if (r || !w) return;
              function ee() {
                (B.current = !0),
                  setTimeout(() => {
                    B.current = !1;
                  });
              }
              function me(ce) {
                const ge = ce.relatedTarget;
                queueMicrotask(() => {
                  const Ve = D(),
                    ze = !(
                      Ie(P, ge) ||
                      Ie(_, ge) ||
                      Ie(ge, _) ||
                      Ie(A == null ? void 0 : A.portalNode, ge) ||
                      (ge != null && ge.hasAttribute(rn("focus-guard"))) ||
                      (te &&
                        (Jt(te.nodesRef.current, Ve).find((Be) => {
                          var je, ht;
                          return (
                            Ie(
                              (je = Be.context) == null
                                ? void 0
                                : je.elements.floating,
                              ge,
                            ) ||
                            Ie(
                              (ht = Be.context) == null
                                ? void 0
                                : ht.elements.domReference,
                              ge,
                            )
                          );
                        }) ||
                          Vn(te.nodesRef.current, Ve).find((Be) => {
                            var je, ht, yt;
                            return (
                              [
                                (je = Be.context) == null
                                  ? void 0
                                  : je.elements.floating,
                                Sn(
                                  (ht = Be.context) == null
                                    ? void 0
                                    : ht.elements.floating,
                                ),
                              ].includes(ge) ||
                              ((yt = Be.context) == null
                                ? void 0
                                : yt.elements.domReference) === ge
                            );
                          })))
                    );
                  if (v && ze && Fe(_e(L)) === _e(L).body) {
                    (0, oe.sb)(L) && L.focus();
                    const Be = Y.current,
                      je = X(),
                      ht = je[Be] || je[je.length - 1] || L;
                    (0, oe.sb)(ht) && ht.focus();
                  }
                  (pe || !a) &&
                    ge &&
                    ze &&
                    !B.current &&
                    ge !== Zn() &&
                    ((V.current = !0), x(!1, ce, "focus-out"));
                });
              }
              if (_ && (0, oe.sb)(P))
                return (
                  P.addEventListener("focusout", me),
                  P.addEventListener("pointerdown", ee),
                  _.addEventListener("focusout", me),
                  () => {
                    P.removeEventListener("focusout", me),
                      P.removeEventListener("pointerdown", ee),
                      _.removeEventListener("focusout", me);
                  }
                );
            }, [r, P, _, L, a, te, A, x, w, v, X, pe, D]);
          const We = c.useRef(null),
            Ue = c.useRef(null),
            pt = Gn([We, A == null ? void 0 : A.beforeInsideRef]),
            Xe = Gn([Ue, A == null ? void 0 : A.afterInsideRef]);
          c.useEffect(() => {
            var ee;
            if (r || !_) return;
            const me = Array.from(
                (A == null || (ee = A.portalNode) == null
                  ? void 0
                  : ee.querySelectorAll("[" + rn("portal") + "]")) || [],
              ),
              ce =
                te && !a
                  ? Vn(te == null ? void 0 : te.nodesRef.current, D()).map(
                      (ze) => {
                        var Be;
                        return (Be = ze.context) == null
                          ? void 0
                          : Be.elements.floating;
                      },
                    )
                  : [],
              ge = [
                _,
                ...me,
                ...ce,
                K.current,
                Q.current,
                We.current,
                Ue.current,
                A == null ? void 0 : A.beforeOutsideRef.current,
                A == null ? void 0 : A.afterOutsideRef.current,
                ue.current.includes("reference") || pe ? P : null,
              ].filter((ze) => ze != null),
              Ve = a || pe ? jn(ge, !Re, Re) : jn(ge);
            return () => {
              Ve();
            };
          }, [r, P, _, a, ue, A, pe, ve, Re, te, D]),
            O(() => {
              if (r || !(0, oe.sb)(L)) return;
              const ee = _e(L),
                me = Fe(ee);
              queueMicrotask(() => {
                const ce = be(L),
                  ge = se.current,
                  Ve = (typeof ge == "number" ? ce[ge] : ge.current) || L,
                  ze = Ie(L, me);
                !ie && !ze && m && Gt(Ve, { preventScroll: Ve === L });
              });
            }, [r, m, L, ie, be, se]),
            O(() => {
              if (r || !L) return;
              let ee = !1,
                me = !1;
              const ce = _e(L),
                ge = Fe(ce);
              let ze = W.current.openEvent;
              Cr(ge);
              function Be(yt) {
                let { open: ae, reason: Se, event: G, nested: fe } = yt;
                if (
                  (ae && (ze = G),
                  Se === "escape-key" && (me = !0),
                  ["hover", "safe-polygon"].includes(Se) &&
                    G.type === "mouseleave" &&
                    (V.current = !0),
                  Se === "outside-press")
                )
                  if (fe) (V.current = !1), (ee = !0);
                  else if (at(G) || ft(G)) V.current = !1;
                  else {
                    let tt = !1;
                    document.createElement("div").focus({
                      get preventScroll() {
                        return (tt = !0), !1;
                      },
                    }),
                      tt ? ((V.current = !1), (ee = !0)) : (V.current = !0);
                  }
              }
              h.on("openchange", Be);
              const je = ce.createElement("span");
              je.setAttribute("tabindex", "-1"),
                je.setAttribute("aria-hidden", "true"),
                Object.assign(je.style, vn),
                N && P && P.insertAdjacentElement("afterend", je);
              function ht() {
                return typeof we.current == "boolean"
                  ? me && P
                    ? P
                    : Zn() || je
                  : we.current.current || je;
              }
              return () => {
                h.off("openchange", Be);
                const yt = Fe(ce),
                  ae =
                    Ie(_, yt) ||
                    (te &&
                      Jt(te.nodesRef.current, D()).some((G) => {
                        var fe;
                        return Ie(
                          (fe = G.context) == null
                            ? void 0
                            : fe.elements.floating,
                          yt,
                        );
                      }));
                (ae || (ze && ["click", "mousedown"].includes(ze.type))) &&
                  (me = !0);
                const Se = ht();
                queueMicrotask(() => {
                  const G = Sr(Se);
                  we.current &&
                    !V.current &&
                    (0, oe.sb)(G) &&
                    (!(G !== yt && yt !== ce.body) || ae) &&
                    G.focus({ preventScroll: ee }),
                    je.remove();
                });
              };
            }, [r, _, L, we, W, h, te, N, P, D]),
            c.useEffect(() => {
              queueMicrotask(() => {
                V.current = !1;
              });
            }, [r]),
            O(() => {
              if (!r && A)
                return (
                  A.setFocusManagerState({
                    modal: a,
                    closeOnFocusOut: w,
                    open: m,
                    onOpenChange: x,
                    domReference: P,
                  }),
                  () => {
                    A.setFocusManagerState(null);
                  }
                );
            }, [r, A, a, m, x, w, P]),
            O(() => {
              if (r || !L || typeof MutationObserver != "function" || ie)
                return;
              const ee = () => {
                const ce = L.getAttribute("tabindex"),
                  ge = X(),
                  Ve = Fe(_e(_)),
                  ze = ge.indexOf(Ve);
                ze !== -1 && (Y.current = ze),
                  ue.current.includes("floating") ||
                  (Ve !== P && ge.length === 0)
                    ? ce !== "0" && L.setAttribute("tabindex", "0")
                    : ce !== "-1" && L.setAttribute("tabindex", "-1");
              };
              ee();
              const me = new MutationObserver(ee);
              return (
                me.observe(L, { childList: !0, subtree: !0, attributes: !0 }),
                () => {
                  me.disconnect();
                }
              );
            }, [r, _, L, P, ue, X, ie]);
          function Ke(ee) {
            return r || !g || !a
              ? null
              : (0, ke.jsx)(Tr, {
                  ref: ee === "start" ? K : Q,
                  onClick: (me) => x(!1, me.nativeEvent),
                  children: typeof g == "string" ? g : "Dismiss",
                });
          }
          const Ee = !r && ve && (a ? !pe : !0) && (N || a);
          return (0, ke.jsxs)(ke.Fragment, {
            children: [
              Ee &&
                (0, ke.jsx)(bn, {
                  "data-type": "inside",
                  ref: pt,
                  onFocus: (ee) => {
                    if (a) {
                      const ce = be();
                      Gt(o[0] === "reference" ? ce[0] : ce[ce.length - 1]);
                    } else if (A != null && A.preserveTabOrder && A.portalNode)
                      if (((V.current = !1), ln(ee, A.portalNode))) {
                        const ce = zn() || P;
                        ce == null || ce.focus();
                      } else {
                        var me;
                        (me = A.beforeOutsideRef.current) == null || me.focus();
                      }
                  },
                }),
              !pe && Ke("start"),
              n,
              Ke("end"),
              Ee &&
                (0, ke.jsx)(bn, {
                  "data-type": "inside",
                  ref: Xe,
                  onFocus: (ee) => {
                    if (a) Gt(be()[0]);
                    else if (A != null && A.preserveTabOrder && A.portalNode)
                      if ((w && (V.current = !0), ln(ee, A.portalNode))) {
                        const ce = Hn() || P;
                        ce == null || ce.focus();
                      } else {
                        var me;
                        (me = A.afterOutsideRef.current) == null || me.focus();
                      }
                  },
                }),
            ],
          });
        }
        let ro = 0;
        function oo() {
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
        let io = () => {};
        const so = null;
        function Qn(t) {
          return (0, oe.sb)(t.target) && t.target.tagName === "BUTTON";
        }
        function er(t) {
          return re(t);
        }
        function Pr(t, e) {
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
              stickIfOpen: w = !0,
            } = e,
            b = c.useRef(),
            m = c.useRef(!1),
            x = c.useMemo(
              () => ({
                onPointerDown(h) {
                  b.current = h.pointerType;
                },
                onMouseDown(h) {
                  const W = b.current;
                  h.button === 0 &&
                    l !== "click" &&
                    ((He(W, !0) && a) ||
                      (n &&
                      v &&
                      (!(o.current.openEvent && w) ||
                        o.current.openEvent.type === "mousedown")
                        ? r(!1, h.nativeEvent, "click")
                        : (h.preventDefault(), r(!0, h.nativeEvent, "click"))));
                },
                onClick(h) {
                  const W = b.current;
                  if (l === "mousedown" && b.current) {
                    b.current = void 0;
                    return;
                  }
                  (He(W, !0) && a) ||
                    (n &&
                    v &&
                    (!(o.current.openEvent && w) ||
                      o.current.openEvent.type === "click")
                      ? r(!1, h.nativeEvent, "click")
                      : r(!0, h.nativeEvent, "click"));
                },
                onKeyDown(h) {
                  (b.current = void 0),
                    !(h.defaultPrevented || !g || Qn(h)) &&
                      (h.key === " " &&
                        !er(s) &&
                        (h.preventDefault(), (m.current = !0)),
                      h.key === "Enter" &&
                        r(!(n && v), h.nativeEvent, "click"));
                },
                onKeyUp(h) {
                  h.defaultPrevented ||
                    !g ||
                    Qn(h) ||
                    er(s) ||
                    (h.key === " " &&
                      m.current &&
                      ((m.current = !1), r(!(n && v), h.nativeEvent, "click")));
                },
              }),
              [o, s, l, a, g, r, n, w, v],
            );
          return c.useMemo(() => (i ? { reference: x } : {}), [i, x]);
        }
        function Ar(t, e) {
          let n = null,
            r = null,
            o = !1;
          return {
            contextElement: t || void 0,
            getBoundingClientRect() {
              var s;
              const i = (t == null ? void 0 : t.getBoundingClientRect()) || {
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
                w = i.height,
                b = i.x,
                m = i.y;
              return (
                n == null && e.x && l && (n = i.x - e.x),
                r == null && e.y && v && (r = i.y - e.y),
                (b -= n || 0),
                (m -= r || 0),
                (g = 0),
                (w = 0),
                !o || a
                  ? ((g = e.axis === "y" ? i.width : 0),
                    (w = e.axis === "x" ? i.height : 0),
                    (b = l && e.x != null ? e.x : b),
                    (m = v && e.y != null ? e.y : m))
                  : o &&
                    !a &&
                    ((w = e.axis === "x" ? i.height : w),
                    (g = e.axis === "y" ? i.width : g)),
                (o = !0),
                {
                  width: g,
                  height: w,
                  x: b,
                  y: m,
                  top: m,
                  right: b + g,
                  bottom: m + w,
                  left: b,
                }
              );
            },
          };
        }
        function tr(t) {
          return t != null && t.clientX != null;
        }
        function co(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              dataRef: r,
              elements: { floating: o, domReference: s },
              refs: i,
            } = t,
            { enabled: l = !0, axis: v = "both", x: a = null, y: g = null } = e,
            w = React.useRef(!1),
            b = React.useRef(null),
            [m, x] = React.useState(),
            [h, W] = React.useState([]),
            P = d((ne, ve) => {
              w.current ||
                (r.current.openEvent && !tr(r.current.openEvent)) ||
                i.setPositionReference(
                  Ar(s, { x: ne, y: ve, axis: v, dataRef: r, pointerType: m }),
                );
            }),
            _ = d((ne) => {
              a != null ||
                g != null ||
                (n ? b.current || W([]) : P(ne.clientX, ne.clientY));
            }),
            D = isMouseLikePointerType(m) ? o : n,
            ie = React.useCallback(() => {
              if (!D || !l || a != null || g != null) return;
              const ne = getWindow(o);
              function ve(Re) {
                const ue = getTarget(Re);
                contains(o, ue)
                  ? (ne.removeEventListener("mousemove", ve),
                    (b.current = null))
                  : P(Re.clientX, Re.clientY);
              }
              if (!r.current.openEvent || tr(r.current.openEvent)) {
                ne.addEventListener("mousemove", ve);
                const Re = () => {
                  ne.removeEventListener("mousemove", ve), (b.current = null);
                };
                return (b.current = Re), Re;
              }
              i.setPositionReference(s);
            }, [D, l, a, g, o, r, i, s, P]);
          React.useEffect(() => ie(), [ie, h]),
            React.useEffect(() => {
              l && !o && (w.current = !1);
            }, [l, o]),
            React.useEffect(() => {
              !l && n && (w.current = !0);
            }, [l, n]),
            O(() => {
              l && (a != null || g != null) && ((w.current = !1), P(a, g));
            }, [l, a, g, P]);
          const pe = React.useMemo(() => {
            function ne(ve) {
              let { pointerType: Re } = ve;
              x(Re);
            }
            return {
              onPointerDown: ne,
              onPointerEnter: ne,
              onMouseMove: _,
              onMouseEnter: _,
            };
          }, [_]);
          return React.useMemo(() => (l ? { reference: pe } : {}), [l, pe]);
        }
        const Mr = {
            pointerdown: "onPointerDown",
            mousedown: "onMouseDown",
            click: "onClick",
          },
          kr = {
            pointerdown: "onPointerDownCapture",
            mousedown: "onMouseDownCapture",
            click: "onClickCapture",
          },
          nr = (t) => {
            var e, n;
            return {
              escapeKey:
                typeof t == "boolean"
                  ? t
                  : (e = t == null ? void 0 : t.escapeKey) != null
                    ? e
                    : !1,
              outsidePress:
                typeof t == "boolean"
                  ? t
                  : (n = t == null ? void 0 : t.outsidePress) != null
                    ? n
                    : !0,
            };
          };
        function Lr(t, e) {
          e === void 0 && (e = {});
          const { open: n, onOpenChange: r, elements: o, dataRef: s } = t,
            {
              enabled: i = !0,
              escapeKey: l = !0,
              outsidePress: v = !0,
              outsidePressEvent: a = "pointerdown",
              referencePress: g = !1,
              referencePressEvent: w = "pointerdown",
              ancestorScroll: b = !1,
              bubbles: m,
              capture: x,
            } = e,
            h = nn(),
            W = d(typeof v == "function" ? v : () => !1),
            P = typeof v == "function" ? W : v,
            _ = c.useRef(!1),
            D = c.useRef(!1),
            { escapeKey: ie, outsidePress: pe } = nr(m),
            { escapeKey: ne, outsidePress: ve } = nr(x),
            Re = c.useRef(!1),
            ue = d((Q) => {
              var V;
              if (!n || !i || !l || Q.key !== "Escape" || Re.current) return;
              const B =
                  (V = s.current.floatingContext) == null ? void 0 : V.nodeId,
                Y = h ? Jt(h.nodesRef.current, B) : [];
              if (!ie && (Q.stopPropagation(), Y.length > 0)) {
                let N = !0;
                if (
                  (Y.forEach((L) => {
                    var X;
                    if (
                      (X = L.context) != null &&
                      X.open &&
                      !L.context.dataRef.current.__escapeKeyBubbles
                    ) {
                      N = !1;
                      return;
                    }
                  }),
                  !N)
                )
                  return;
              }
              r(!1, Et(Q) ? Q.nativeEvent : Q, "escape-key");
            }),
            se = d((Q) => {
              var V;
              const B = () => {
                var Y;
                ue(Q),
                  (Y = Ge(Q)) == null || Y.removeEventListener("keydown", B);
              };
              (V = Ge(Q)) == null || V.addEventListener("keydown", B);
            }),
            we = d((Q) => {
              var V;
              const B = _.current;
              _.current = !1;
              const Y = D.current;
              if (
                ((D.current = !1),
                (a === "click" && Y) || B || (typeof P == "function" && !P(Q)))
              )
                return;
              const N = Ge(Q),
                L = "[" + rn("inert") + "]",
                X = _e(o.floating).querySelectorAll(L);
              let be = (0, oe.vq)(N) ? N : null;
              for (; be && !(0, oe.eu)(be); ) {
                const Xe = (0, oe.$4)(be);
                if ((0, oe.eu)(Xe) || !(0, oe.vq)(Xe)) break;
                be = Xe;
              }
              if (
                X.length &&
                (0, oe.vq)(N) &&
                !It(N) &&
                !Ie(N, o.floating) &&
                Array.from(X).every((Xe) => !Ie(be, Xe))
              )
                return;
              if ((0, oe.sb)(N) && K) {
                const Xe = (0, oe.eu)(N),
                  Ke = (0, oe.L9)(N),
                  Ee = /auto|scroll/,
                  ee = Xe || Ee.test(Ke.overflowX),
                  me = Xe || Ee.test(Ke.overflowY),
                  ce = ee && N.clientWidth > 0 && N.scrollWidth > N.clientWidth,
                  ge =
                    me && N.clientHeight > 0 && N.scrollHeight > N.clientHeight,
                  Ve = Ke.direction === "rtl",
                  ze =
                    ge &&
                    (Ve
                      ? Q.offsetX <= N.offsetWidth - N.clientWidth
                      : Q.offsetX > N.clientWidth),
                  Be = ce && Q.offsetY > N.clientHeight;
                if (ze || Be) return;
              }
              const We =
                  (V = s.current.floatingContext) == null ? void 0 : V.nodeId,
                Ue =
                  h &&
                  Jt(h.nodesRef.current, We).some((Xe) => {
                    var Ke;
                    return Ct(
                      Q,
                      (Ke = Xe.context) == null ? void 0 : Ke.elements.floating,
                    );
                  });
              if (Ct(Q, o.floating) || Ct(Q, o.domReference) || Ue) return;
              const pt = h ? Jt(h.nodesRef.current, We) : [];
              if (pt.length > 0) {
                let Xe = !0;
                if (
                  (pt.forEach((Ke) => {
                    var Ee;
                    if (
                      (Ee = Ke.context) != null &&
                      Ee.open &&
                      !Ke.context.dataRef.current.__outsidePressBubbles
                    ) {
                      Xe = !1;
                      return;
                    }
                  }),
                  !Xe)
                )
                  return;
              }
              r(!1, Q, "outside-press");
            }),
            te = d((Q) => {
              var V;
              const B = () => {
                var Y;
                we(Q), (Y = Ge(Q)) == null || Y.removeEventListener(a, B);
              };
              (V = Ge(Q)) == null || V.addEventListener(a, B);
            });
          c.useEffect(() => {
            if (!n || !i) return;
            (s.current.__escapeKeyBubbles = ie),
              (s.current.__outsidePressBubbles = pe);
            let Q = -1;
            function V(X) {
              r(!1, X, "ancestor-scroll");
            }
            function B() {
              window.clearTimeout(Q), (Re.current = !0);
            }
            function Y() {
              Q = window.setTimeout(
                () => {
                  Re.current = !1;
                },
                (0, oe.Tc)() ? 5 : 0,
              );
            }
            const N = _e(o.floating);
            l &&
              (N.addEventListener("keydown", ne ? se : ue, ne),
              N.addEventListener("compositionstart", B),
              N.addEventListener("compositionend", Y)),
              P && N.addEventListener(a, ve ? te : we, ve);
            let L = [];
            return (
              b &&
                ((0, oe.vq)(o.domReference) && (L = (0, oe.v9)(o.domReference)),
                (0, oe.vq)(o.floating) &&
                  (L = L.concat((0, oe.v9)(o.floating))),
                !(0, oe.vq)(o.reference) &&
                  o.reference &&
                  o.reference.contextElement &&
                  (L = L.concat((0, oe.v9)(o.reference.contextElement)))),
              (L = L.filter((X) => {
                var be;
                return (
                  X !==
                  ((be = N.defaultView) == null ? void 0 : be.visualViewport)
                );
              })),
              L.forEach((X) => {
                X.addEventListener("scroll", V, { passive: !0 });
              }),
              () => {
                l &&
                  (N.removeEventListener("keydown", ne ? se : ue, ne),
                  N.removeEventListener("compositionstart", B),
                  N.removeEventListener("compositionend", Y)),
                  P && N.removeEventListener(a, ve ? te : we, ve),
                  L.forEach((X) => {
                    X.removeEventListener("scroll", V);
                  }),
                  window.clearTimeout(Q);
              }
            );
          }, [s, o, l, P, a, n, r, b, i, ie, pe, ue, ne, se, we, ve, te]),
            c.useEffect(() => {
              _.current = !1;
            }, [P, a]);
          const A = c.useMemo(
              () => ({
                onKeyDown: ue,
                ...(g && {
                  [Mr[w]]: (Q) => {
                    r(!1, Q.nativeEvent, "reference-press");
                  },
                  ...(w !== "click" && {
                    onClick(Q) {
                      r(!1, Q.nativeEvent, "reference-press");
                    },
                  }),
                }),
              }),
              [ue, r, g, w],
            ),
            K = c.useMemo(
              () => ({
                onKeyDown: ue,
                onMouseDown() {
                  D.current = !0;
                },
                onMouseUp() {
                  D.current = !0;
                },
                [kr[a]]: () => {
                  _.current = !0;
                },
              }),
              [ue, a],
            );
          return c.useMemo(
            () => (i ? { reference: A, floating: K } : {}),
            [i, A, K],
          );
        }
        function Dr(t) {
          const { open: e = !1, onOpenChange: n, elements: r } = t,
            o = ot(),
            s = c.useRef({}),
            [i] = c.useState(() => Dn()),
            l = tn() != null,
            [v, a] = c.useState(r.reference),
            g = d((m, x, h) => {
              (s.current.openEvent = m ? x : void 0),
                i.emit("openchange", {
                  open: m,
                  event: x,
                  reason: h,
                  nested: l,
                }),
                n == null || n(m, x, h);
            }),
            w = c.useMemo(() => ({ setPositionReference: a }), []),
            b = c.useMemo(
              () => ({
                reference: v || r.reference || null,
                floating: r.floating || null,
                domReference: r.reference,
              }),
              [v, r.reference, r.floating],
            );
          return c.useMemo(
            () => ({
              dataRef: s,
              open: e,
              onOpenChange: g,
              elements: b,
              events: i,
              floatingId: o,
              refs: w,
            }),
            [e, g, b, i, o, w],
          );
        }
        function _r(t) {
          t === void 0 && (t = {});
          const { nodeId: e } = t,
            n = Dr({
              ...t,
              elements: { reference: null, floating: null, ...t.elements },
            }),
            r = t.rootContext || n,
            o = r.elements,
            [s, i] = c.useState(null),
            [l, v] = c.useState(null),
            g = (o == null ? void 0 : o.domReference) || s,
            w = c.useRef(null),
            b = nn();
          O(() => {
            g && (w.current = g);
          }, [g]);
          const m = (0, Mn.we)({
              ...t,
              elements: { ...o, ...(l && { reference: l }) },
            }),
            x = c.useCallback(
              (D) => {
                const ie = (0, oe.vq)(D)
                  ? {
                      getBoundingClientRect: () => D.getBoundingClientRect(),
                      contextElement: D,
                    }
                  : D;
                v(ie), m.refs.setReference(ie);
              },
              [m.refs],
            ),
            h = c.useCallback(
              (D) => {
                ((0, oe.vq)(D) || D === null) && ((w.current = D), i(D)),
                  ((0, oe.vq)(m.refs.reference.current) ||
                    m.refs.reference.current === null ||
                    (D !== null && !(0, oe.vq)(D))) &&
                    m.refs.setReference(D);
              },
              [m.refs],
            ),
            W = c.useMemo(
              () => ({
                ...m.refs,
                setReference: h,
                setPositionReference: x,
                domReference: w,
              }),
              [m.refs, h, x],
            ),
            P = c.useMemo(
              () => ({ ...m.elements, domReference: g }),
              [m.elements, g],
            ),
            _ = c.useMemo(
              () => ({ ...m, ...r, refs: W, elements: P, nodeId: e }),
              [m, W, P, e, r],
            );
          return (
            O(() => {
              r.dataRef.current.floatingContext = _;
              const D =
                b == null
                  ? void 0
                  : b.nodesRef.current.find((ie) => ie.id === e);
              D && (D.context = _);
            }),
            c.useMemo(
              () => ({ ...m, context: _, refs: W, elements: P }),
              [m, W, P, _],
            )
          );
        }
        function Fr(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              onOpenChange: r,
              events: o,
              dataRef: s,
              elements: i,
            } = t,
            { enabled: l = !0, visibleOnly: v = !0 } = e,
            a = c.useRef(!1),
            g = c.useRef(-1),
            w = c.useRef(!0);
          c.useEffect(() => {
            if (!l) return;
            const m = (0, oe.zk)(i.domReference);
            function x() {
              !n &&
                (0, oe.sb)(i.domReference) &&
                i.domReference === Fe(_e(i.domReference)) &&
                (a.current = !0);
            }
            function h() {
              w.current = !0;
            }
            return (
              m.addEventListener("blur", x),
              m.addEventListener("keydown", h, !0),
              () => {
                m.removeEventListener("blur", x),
                  m.removeEventListener("keydown", h, !0);
              }
            );
          }, [i.domReference, n, l]),
            c.useEffect(() => {
              if (!l) return;
              function m(x) {
                let { reason: h } = x;
                (h === "reference-press" || h === "escape-key") &&
                  (a.current = !0);
              }
              return (
                o.on("openchange", m),
                () => {
                  o.off("openchange", m);
                }
              );
            }, [o, l]),
            c.useEffect(
              () => () => {
                lt(g);
              },
              [],
            );
          const b = c.useMemo(
            () => ({
              onPointerDown(m) {
                ft(m.nativeEvent) || (w.current = !1);
              },
              onMouseLeave() {
                a.current = !1;
              },
              onFocus(m) {
                if (a.current) return;
                const x = Ge(m.nativeEvent);
                if (v && (0, oe.vq)(x))
                  try {
                    if (Rt() && At()) throw Error();
                    if (!x.matches(":focus-visible")) return;
                  } catch {
                    if (!w.current && !re(x)) return;
                  }
                r(!0, m.nativeEvent, "focus");
              },
              onBlur(m) {
                a.current = !1;
                const x = m.relatedTarget,
                  h = m.nativeEvent,
                  W =
                    (0, oe.vq)(x) &&
                    x.hasAttribute(rn("focus-guard")) &&
                    x.getAttribute("data-type") === "outside";
                g.current = window.setTimeout(() => {
                  var P;
                  const _ = Fe(
                    i.domReference ? i.domReference.ownerDocument : document,
                  );
                  (!x && _ === i.domReference) ||
                    Ie(
                      (P = s.current.floatingContext) == null
                        ? void 0
                        : P.refs.floating.current,
                      _,
                    ) ||
                    Ie(i.domReference, _) ||
                    W ||
                    r(!1, h, "focus");
                });
              },
            }),
            [s, i.domReference, r, v],
          );
          return c.useMemo(() => (l ? { reference: b } : {}), [l, b]);
        }
        const rr = "active",
          or = "selected";
        function Tn(t, e, n) {
          const r = new Map(),
            o = n === "item";
          let s = t;
          if (o && t) {
            const { [rr]: i, [or]: l, ...v } = t;
            s = v;
          }
          return {
            ...(n === "floating" && { tabIndex: -1, [Cn]: "" }),
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
                      if (!(o && [rr, or].includes(a)))
                        if (a.indexOf("on") === 0) {
                          if (
                            (r.has(a) || r.set(a, []), typeof g == "function")
                          ) {
                            var w;
                            (w = r.get(a)) == null || w.push(g),
                              (i[a] = function () {
                                for (
                                  var b,
                                    m = arguments.length,
                                    x = new Array(m),
                                    h = 0;
                                  h < m;
                                  h++
                                )
                                  x[h] = arguments[h];
                                return (b = r.get(a)) == null
                                  ? void 0
                                  : b
                                      .map((W) => W(...x))
                                      .find((W) => W !== void 0);
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
        function Nr(t) {
          t === void 0 && (t = []);
          const e = t.map((l) => (l == null ? void 0 : l.reference)),
            n = t.map((l) => (l == null ? void 0 : l.floating)),
            r = t.map((l) => (l == null ? void 0 : l.item)),
            o = c.useCallback((l) => Tn(l, t, "reference"), e),
            s = c.useCallback((l) => Tn(l, t, "floating"), n),
            i = c.useCallback((l) => Tn(l, t, "item"), r);
          return c.useMemo(
            () => ({
              getReferenceProps: o,
              getFloatingProps: s,
              getItemProps: i,
            }),
            [o, s, i],
          );
        }
        const Wr = "Escape";
        function xn(t, e, n) {
          switch (t) {
            case "vertical":
              return e;
            case "horizontal":
              return n;
            default:
              return e || n;
          }
        }
        function On(t, e) {
          return xn(e, t === p || t === y, t === R || t === I);
        }
        function Pn(t, e, n) {
          return (
            xn(e, t === y, n ? t === R : t === I) ||
            t === "Enter" ||
            t === " " ||
            t === ""
          );
        }
        function ir(t, e, n) {
          return xn(e, n ? t === R : t === I, t === y);
        }
        function sr(t, e, n, r) {
          const o = n ? t === I : t === R,
            s = t === p;
          return e === "both" || (e === "horizontal" && r && r > 1)
            ? t === Wr
            : xn(e, o, s);
        }
        function Kr(t, e) {
          const { open: n, onOpenChange: r, elements: o } = t,
            {
              listRef: s,
              activeIndex: i,
              onNavigate: l = () => {},
              enabled: v = !0,
              selectedIndex: a = null,
              allowEscape: g = !1,
              loop: w = !1,
              nested: b = !1,
              rtl: m = !1,
              virtual: x = !1,
              focusItemOnOpen: h = "auto",
              focusItemOnHover: W = !0,
              openOnArrowKeyDown: P = !0,
              disabledIndices: _ = void 0,
              orientation: D = "vertical",
              cols: ie = 1,
              scrollItemIntoView: pe = !0,
              virtualItemRef: ne,
              itemSizes: ve,
              dense: Re = !1,
            } = e,
            ue = Sn(o.floating),
            se = et(ue),
            we = tn(),
            te = nn();
          O(() => {
            t.dataRef.current.orientation = D;
          }, [t, D]);
          const A = d(() => {
              l(V.current === -1 ? null : V.current);
            }),
            K = Ce(o.domReference),
            Q = c.useRef(h),
            V = c.useRef(a != null ? a : -1),
            B = c.useRef(null),
            Y = c.useRef(!0),
            N = c.useRef(A),
            L = c.useRef(!!o.floating),
            X = c.useRef(n),
            be = c.useRef(!1),
            We = c.useRef(!1),
            Ue = et(_),
            pt = et(n),
            Xe = et(pe),
            Ke = et(a),
            [Ee, ee] = c.useState(),
            [me, ce] = c.useState(),
            ge = d(() => {
              function ae(fe) {
                x
                  ? (ee(fe.id),
                    te == null || te.events.emit("virtualfocus", fe),
                    ne && (ne.current = fe))
                  : Gt(fe, { sync: be.current, preventScroll: !0 });
              }
              const Se = s.current[V.current];
              Se && ae(Se),
                (be.current ? (fe) => fe() : requestAnimationFrame)(() => {
                  const fe = s.current[V.current] || Se;
                  if (!fe) return;
                  Se || ae(fe);
                  const tt = Xe.current;
                  tt &&
                    ze &&
                    (We.current || !Y.current) &&
                    (fe.scrollIntoView == null ||
                      fe.scrollIntoView(
                        typeof tt == "boolean"
                          ? { block: "nearest", inline: "nearest" }
                          : tt,
                      ));
                });
            });
          O(() => {
            v &&
              (n && o.floating
                ? Q.current &&
                  a != null &&
                  ((We.current = !0), (V.current = a), A())
                : L.current && ((V.current = -1), N.current()));
          }, [v, n, o.floating, a, A]),
            O(() => {
              if (v && n && o.floating)
                if (i == null) {
                  if (((be.current = !1), Ke.current != null)) return;
                  if (
                    (L.current && ((V.current = -1), ge()),
                    (!X.current || !L.current) &&
                      Q.current &&
                      (B.current != null ||
                        (Q.current === !0 && B.current == null)))
                  ) {
                    let ae = 0;
                    const Se = () => {
                      s.current[0] == null
                        ? (ae < 2 &&
                            (ae ? requestAnimationFrame : queueMicrotask)(Se),
                          ae++)
                        : ((V.current =
                            B.current == null || Pn(B.current, D, m) || b
                              ? F(s, Ue.current)
                              : H(s, Ue.current)),
                          (B.current = null),
                          A());
                    };
                    Se();
                  }
                } else T(s, i) || ((V.current = i), ge(), (We.current = !1));
            }, [v, n, o.floating, i, Ke, b, s, D, m, A, ge, Ue]),
            O(() => {
              var ae;
              if (!v || o.floating || !te || x || !L.current) return;
              const Se = te.nodesRef.current,
                G =
                  (ae = Se.find((ct) => ct.id === we)) == null ||
                  (ae = ae.context) == null
                    ? void 0
                    : ae.elements.floating,
                fe = Fe(_e(o.floating)),
                tt = Se.some(
                  (ct) => ct.context && Ie(ct.context.elements.floating, fe),
                );
              G && !tt && Y.current && G.focus({ preventScroll: !0 });
            }, [v, o.floating, te, we, x]),
            O(() => {
              if (!v || !te || !x || we) return;
              function ae(Se) {
                ce(Se.id), ne && (ne.current = Se);
              }
              return (
                te.events.on("virtualfocus", ae),
                () => {
                  te.events.off("virtualfocus", ae);
                }
              );
            }, [v, te, x, we, ne]),
            O(() => {
              (N.current = A), (X.current = n), (L.current = !!o.floating);
            }),
            O(() => {
              n || (B.current = null);
            }, [n]);
          const Ve = i != null,
            ze = c.useMemo(() => {
              function ae(G) {
                if (!n) return;
                const fe = s.current.indexOf(G);
                fe !== -1 && V.current !== fe && ((V.current = fe), A());
              }
              return {
                onFocus(G) {
                  let { currentTarget: fe } = G;
                  (be.current = !0), ae(fe);
                },
                onClick: (G) => {
                  let { currentTarget: fe } = G;
                  return fe.focus({ preventScroll: !0 });
                },
                ...(W && {
                  onMouseMove(G) {
                    let { currentTarget: fe } = G;
                    (be.current = !0), (We.current = !1), ae(fe);
                  },
                  onPointerLeave(G) {
                    let { pointerType: fe } = G;
                    if (
                      !(!Y.current || fe === "touch") &&
                      ((be.current = !0), (V.current = -1), A(), !x)
                    ) {
                      var tt;
                      (tt = se.current) == null ||
                        tt.focus({ preventScroll: !0 });
                    }
                  },
                }),
              };
            }, [n, se, W, s, A, x]),
            Be = d((ae) => {
              if (
                ((Y.current = !1),
                (be.current = !0),
                ae.which === 229 ||
                  (!pt.current && ae.currentTarget === se.current))
              )
                return;
              if (b && sr(ae.key, D, m, ie)) {
                E(ae),
                  r(!1, ae.nativeEvent, "list-navigation"),
                  (0, oe.sb)(o.domReference) &&
                    (x
                      ? te == null ||
                        te.events.emit("virtualfocus", o.domReference)
                      : o.domReference.focus());
                return;
              }
              const Se = V.current,
                G = F(s, _),
                fe = H(s, _);
              if (
                (K ||
                  (ae.key === "Home" && (E(ae), (V.current = G), A()),
                  ae.key === "End" && (E(ae), (V.current = fe), A())),
                ie > 1)
              ) {
                const tt =
                    ve ||
                    Array.from({ length: s.current.length }, () => ({
                      width: 1,
                      height: 1,
                    })),
                  ct = M(tt, ie, Re),
                  An = ct.findIndex((Pt) => Pt != null && !Z(s.current, Pt, _)),
                  yn = ct.reduce(
                    (Pt, $t, an) =>
                      $t != null && !Z(s.current, $t, _) ? an : Pt,
                    -1,
                  ),
                  un =
                    ct[
                      z(
                        {
                          current: ct.map((Pt) =>
                            Pt != null ? s.current[Pt] : null,
                          ),
                        },
                        {
                          event: ae,
                          orientation: D,
                          loop: w,
                          rtl: m,
                          cols: ie,
                          disabledIndices: J(
                            [
                              ...(_ ||
                                s.current.map((Pt, $t) =>
                                  Z(s.current, $t) ? $t : void 0,
                                )),
                              void 0,
                            ],
                            ct,
                          ),
                          minIndex: An,
                          maxIndex: yn,
                          prevIndex: q(
                            V.current > fe ? G : V.current,
                            tt,
                            ct,
                            ie,
                            ae.key === y
                              ? "bl"
                              : ae.key === (m ? R : I)
                                ? "tr"
                                : "tl",
                          ),
                          stopEvent: !0,
                        },
                      )
                    ];
                if ((un != null && ((V.current = un), A()), D === "both"))
                  return;
              }
              if (On(ae.key, D)) {
                if (
                  (E(ae),
                  n &&
                    !x &&
                    Fe(ae.currentTarget.ownerDocument) === ae.currentTarget)
                ) {
                  (V.current = Pn(ae.key, D, m) ? G : fe), A();
                  return;
                }
                Pn(ae.key, D, m)
                  ? w
                    ? (V.current =
                        Se >= fe
                          ? g && Se !== s.current.length
                            ? -1
                            : G
                          : S(s, { startingIndex: Se, disabledIndices: _ }))
                    : (V.current = Math.min(
                        fe,
                        S(s, { startingIndex: Se, disabledIndices: _ }),
                      ))
                  : w
                    ? (V.current =
                        Se <= G
                          ? g && Se !== -1
                            ? s.current.length
                            : fe
                          : S(s, {
                              startingIndex: Se,
                              decrement: !0,
                              disabledIndices: _,
                            }))
                    : (V.current = Math.max(
                        G,
                        S(s, {
                          startingIndex: Se,
                          decrement: !0,
                          disabledIndices: _,
                        }),
                      )),
                  T(s, V.current) && (V.current = -1),
                  A();
              }
            }),
            je = c.useMemo(
              () => x && n && Ve && { "aria-activedescendant": me || Ee },
              [x, n, Ve, me, Ee],
            ),
            ht = c.useMemo(
              () => ({
                "aria-orientation": D === "both" ? void 0 : D,
                ...(K ? {} : je),
                onKeyDown: Be,
                onPointerMove() {
                  Y.current = !0;
                },
              }),
              [je, Be, D, K],
            ),
            yt = c.useMemo(() => {
              function ae(G) {
                h === "auto" && at(G.nativeEvent) && (Q.current = !0);
              }
              function Se(G) {
                (Q.current = h),
                  h === "auto" && ft(G.nativeEvent) && (Q.current = !0);
              }
              return {
                ...je,
                onKeyDown(G) {
                  var fe;
                  Y.current = !1;
                  const tt = G.key.startsWith("Arrow"),
                    ct = ["Home", "End"].includes(G.key),
                    An = tt || ct,
                    yn =
                      te == null ||
                      (fe = te.nodesRef.current.find((cn) => cn.id === we)) ==
                        null ||
                      (fe = fe.context) == null ||
                      (fe = fe.dataRef) == null
                        ? void 0
                        : fe.current.orientation,
                    un = ir(G.key, D, m),
                    Pt = sr(G.key, D, m, ie),
                    $t = ir(G.key, yn, m),
                    an = On(G.key, D),
                    Yr =
                      (b ? $t : an) || G.key === "Enter" || G.key.trim() === "";
                  if (x && n) {
                    const cn =
                        te == null
                          ? void 0
                          : te.nodesRef.current.find(
                              (Rn) => Rn.parentId == null,
                            ),
                      zt = te && cn ? xr(te.nodesRef.current, cn.id) : null;
                    if (An && zt && ne) {
                      const Rn = new KeyboardEvent("keydown", {
                        key: G.key,
                        bubbles: !0,
                      });
                      if (un || Pt) {
                        var ar, fr;
                        const Ur =
                            ((ar = zt.context) == null
                              ? void 0
                              : ar.elements.domReference) === G.currentTarget,
                          mr =
                            Pt && !Ur
                              ? (fr = zt.context) == null
                                ? void 0
                                : fr.elements.domReference
                              : un
                                ? s.current.find(
                                    (gr) =>
                                      (gr == null ? void 0 : gr.id) === Ee,
                                  )
                                : null;
                        mr && (E(G), mr.dispatchEvent(Rn), ce(void 0));
                      }
                      if (
                        (an || ct) &&
                        zt.context &&
                        zt.context.open &&
                        zt.parentId &&
                        G.currentTarget !== zt.context.elements.domReference
                      ) {
                        var dr;
                        E(G),
                          (dr = zt.context.elements.domReference) == null ||
                            dr.dispatchEvent(Rn);
                        return;
                      }
                    }
                    return Be(G);
                  }
                  if (!(!n && !P && tt)) {
                    if (Yr) {
                      const cn = On(G.key, yn);
                      B.current = b && cn ? null : G.key;
                    }
                    if (b) {
                      $t &&
                        (E(G),
                        n
                          ? ((V.current = F(s, Ue.current)), A())
                          : r(!0, G.nativeEvent, "list-navigation"));
                      return;
                    }
                    an &&
                      (a != null && (V.current = a),
                      E(G),
                      !n && P ? r(!0, G.nativeEvent, "list-navigation") : Be(G),
                      n && A());
                  }
                },
                onFocus() {
                  n && !x && ((V.current = -1), A());
                },
                onPointerDown: Se,
                onPointerEnter: Se,
                onMouseDown: ae,
                onClick: ae,
              };
            }, [
              Ee,
              je,
              ie,
              Be,
              Ue,
              h,
              s,
              b,
              A,
              r,
              n,
              P,
              D,
              we,
              m,
              a,
              te,
              x,
              ne,
            ]);
          return c.useMemo(
            () => (v ? { reference: yt, floating: ht, item: ze } : {}),
            [v, yt, ht, ze],
          );
        }
        const Vr = new Map([
          ["select", "listbox"],
          ["combobox", "listbox"],
          ["label", !1],
        ]);
        function Br(t, e) {
          var n;
          e === void 0 && (e = {});
          const { open: r, floatingId: o } = t,
            { enabled: s = !0, role: i = "dialog" } = e,
            l = (n = Vr.get(i)) != null ? n : i,
            v = ot(),
            g = tn() != null,
            w = c.useMemo(
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
            b = c.useMemo(() => {
              const x = { id: o, ...(l && { role: l }) };
              return l === "tooltip" || i === "label"
                ? x
                : { ...x, ...(l === "menu" && { "aria-labelledby": v }) };
            }, [l, o, v, i]),
            m = c.useCallback(
              (x) => {
                let { active: h, selected: W } = x;
                const P = { role: "option", ...(h && { id: o + "-option" }) };
                switch (i) {
                  case "select":
                    return { ...P, "aria-selected": h && W };
                  case "combobox":
                    return { ...P, ...(h && { "aria-selected": !0 }) };
                }
                return {};
              },
              [o, i],
            );
          return c.useMemo(
            () => (s ? { reference: w, floating: b, item: m } : {}),
            [s, w, b, m],
          );
        }
        const cr = (t) =>
          t.replace(
            /[A-Z]+(?![a-z])|[A-Z]/g,
            (e, n) => (n ? "-" : "") + e.toLowerCase(),
          );
        function sn(t, e) {
          return typeof t == "function" ? t(e) : t;
        }
        function jr(t, e) {
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
        function $r(t, e) {
          e === void 0 && (e = {});
          const {
              open: n,
              elements: { floating: r },
            } = t,
            { duration: o = 250 } = e,
            i = (typeof o == "number" ? o : o.close) || 0,
            [l, v] = React.useState("unmounted"),
            a = jr(n, i);
          return (
            !a && l === "close" && v("unmounted"),
            O(() => {
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
        function lo(t, e) {
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
            w = (g ? i : i.open) || 0,
            b = (g ? i : i.close) || 0,
            [m, x] = React.useState(() => ({ ...sn(s, a), ...sn(n, a) })),
            { isMounted: h, status: W } = $r(t, { duration: i }),
            P = et(n),
            _ = et(r),
            D = et(o),
            ie = et(s);
          return (
            O(() => {
              const pe = sn(P.current, a),
                ne = sn(D.current, a),
                ve = sn(ie.current, a),
                Re =
                  sn(_.current, a) ||
                  Object.keys(pe).reduce((ue, se) => ((ue[se] = ""), ue), {});
              if (
                (W === "initial" &&
                  x((ue) => ({
                    transitionProperty: ue.transitionProperty,
                    ...ve,
                    ...pe,
                  })),
                W === "open" &&
                  x({
                    transitionProperty: Object.keys(Re).map(cr).join(","),
                    transitionDuration: w + "ms",
                    ...ve,
                    ...Re,
                  }),
                W === "close")
              ) {
                const ue = ne || pe;
                x({
                  transitionProperty: Object.keys(ue).map(cr).join(","),
                  transitionDuration: b + "ms",
                  ...ve,
                  ...ue,
                });
              }
            }, [b, D, P, _, ie, w, W, a]),
            { isMounted: h, styles: m }
          );
        }
        function zr(t, e) {
          var n;
          const { open: r, dataRef: o } = t,
            {
              listRef: s,
              activeIndex: i,
              onMatch: l,
              onTypingChange: v,
              enabled: a = !0,
              findMatch: g = null,
              resetMs: w = 750,
              ignoreKeys: b = [],
              selectedIndex: m = null,
            } = e,
            x = c.useRef(-1),
            h = c.useRef(""),
            W = c.useRef((n = m != null ? m : i) != null ? n : -1),
            P = c.useRef(null),
            _ = d(l),
            D = d(v),
            ie = et(g),
            pe = et(b);
          O(() => {
            r && (lt(x), (P.current = null), (h.current = ""));
          }, [r]),
            O(() => {
              if (r && h.current === "") {
                var se;
                W.current = (se = m != null ? m : i) != null ? se : -1;
              }
            }, [r, m, i]);
          const ne = d((se) => {
              se
                ? o.current.typing || ((o.current.typing = se), D(se))
                : o.current.typing && ((o.current.typing = se), D(se));
            }),
            ve = d((se) => {
              function we(V, B, Y) {
                const N = ie.current
                  ? ie.current(B, Y)
                  : B.find(
                      (L) =>
                        (L == null
                          ? void 0
                          : L.toLocaleLowerCase().indexOf(
                              Y.toLocaleLowerCase(),
                            )) === 0,
                    );
                return N ? V.indexOf(N) : -1;
              }
              const te = s.current;
              if (
                (h.current.length > 0 &&
                  h.current[0] !== " " &&
                  (we(te, te, h.current) === -1
                    ? ne(!1)
                    : se.key === " " && E(se)),
                te == null ||
                  pe.current.includes(se.key) ||
                  se.key.length !== 1 ||
                  se.ctrlKey ||
                  se.metaKey ||
                  se.altKey)
              )
                return;
              r && se.key !== " " && (E(se), ne(!0)),
                te.every((V) => {
                  var B, Y;
                  return V
                    ? ((B = V[0]) == null ? void 0 : B.toLocaleLowerCase()) !==
                        ((Y = V[1]) == null ? void 0 : Y.toLocaleLowerCase())
                    : !0;
                }) &&
                  h.current === se.key &&
                  ((h.current = ""), (W.current = P.current)),
                (h.current += se.key),
                lt(x),
                (x.current = window.setTimeout(() => {
                  (h.current = ""), (W.current = P.current), ne(!1);
                }, w));
              const K = W.current,
                Q = we(
                  te,
                  [...te.slice((K || 0) + 1), ...te.slice(0, (K || 0) + 1)],
                  h.current,
                );
              Q !== -1
                ? (_(Q), (P.current = Q))
                : se.key !== " " && ((h.current = ""), ne(!1));
            }),
            Re = c.useMemo(() => ({ onKeyDown: ve }), [ve]),
            ue = c.useMemo(
              () => ({
                onKeyDown: ve,
                onKeyUp(se) {
                  se.key === " " && ne(!1);
                },
              }),
              [ve, ne],
            );
          return c.useMemo(
            () => (a ? { reference: Re, floating: ue } : {}),
            [a, Re, ue],
          );
        }
        function lr(t, e) {
          return {
            ...t,
            rects: { ...t.rects, floating: { ...t.rects.floating, height: e } },
          };
        }
        const uo = (t) => ({
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
                rects: w,
                elements: { floating: b },
              } = e,
              m = n.current[i],
              x = (a == null ? void 0 : a.current) || b,
              h = b.clientTop || x.clientTop,
              W = b.clientTop !== 0,
              P = x.clientTop !== 0,
              _ = b === x;
            if (!m) return {};
            const D = {
                ...e,
                ...(await offset(
                  -m.offsetTop -
                    b.clientTop -
                    w.reference.height / 2 -
                    m.offsetHeight / 2 -
                    s,
                ).fn(e)),
              },
              ie = await detectOverflow(
                lr(D, x.scrollHeight + h + b.clientTop),
                g,
              ),
              pe = await detectOverflow(D, {
                ...g,
                elementContext: "reference",
              }),
              ne = max(0, ie.top),
              ve = D.y + ne,
              se = (x.scrollHeight > x.clientHeight ? (we) => we : round)(
                max(
                  0,
                  x.scrollHeight +
                    ((W && _) || P ? h * 2 : 0) -
                    ne -
                    max(0, ie.bottom),
                ),
              );
            if (((x.style.maxHeight = se + "px"), (x.scrollTop = ne), o)) {
              const we =
                x.offsetHeight <
                  m.offsetHeight * min(l, n.current.length) - 1 ||
                pe.top >= -v ||
                pe.bottom >= -v;
              ReactDOM.flushSync(() => o(we));
            }
            return (
              r &&
                (r.current = await detectOverflow(
                  lr({ ...D, y: ve }, x.offsetHeight + h + b.clientTop),
                  g,
                )),
              { y: ve }
            );
          },
        });
        function ao(t, e) {
          const { open: n, elements: r } = t,
            { enabled: o = !0, overflowRef: s, scrollRef: i, onChange: l } = e,
            v = d(l),
            a = React.useRef(!1),
            g = React.useRef(null),
            w = React.useRef(null);
          React.useEffect(() => {
            if (!o) return;
            function m(h) {
              if (h.ctrlKey || !x || s.current == null) return;
              const W = h.deltaY,
                P = s.current.top >= -0.5,
                _ = s.current.bottom >= -0.5,
                D = x.scrollHeight - x.clientHeight,
                ie = W < 0 ? -1 : 1,
                pe = W < 0 ? "max" : "min";
              x.scrollHeight <= x.clientHeight ||
                ((!P && W > 0) || (!_ && W < 0)
                  ? (h.preventDefault(),
                    ReactDOM.flushSync(() => {
                      v((ne) => ne + Math[pe](W, D * ie));
                    }))
                  : /firefox/i.test(getUserAgent()) && (x.scrollTop += W));
            }
            const x = (i == null ? void 0 : i.current) || r.floating;
            if (n && x)
              return (
                x.addEventListener("wheel", m),
                requestAnimationFrame(() => {
                  (g.current = x.scrollTop),
                    s.current != null && (w.current = { ...s.current });
                }),
                () => {
                  (g.current = null),
                    (w.current = null),
                    x.removeEventListener("wheel", m);
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
                const m = (i == null ? void 0 : i.current) || r.floating;
                if (!(!s.current || !m || !a.current)) {
                  if (g.current !== null) {
                    const x = m.scrollTop - g.current;
                    ((s.current.bottom < -0.5 && x < -1) ||
                      (s.current.top < -0.5 && x > 1)) &&
                      ReactDOM.flushSync(() => v((h) => h + x));
                  }
                  requestAnimationFrame(() => {
                    g.current = m.scrollTop;
                  });
                }
              },
            }),
            [r.floating, v, s, i],
          );
          return React.useMemo(() => (o ? { floating: b } : {}), [o, b]);
        }
        function ur(t, e) {
          const [n, r] = t;
          let o = !1;
          const s = e.length;
          for (let i = 0, l = s - 1; i < s; l = i++) {
            const [v, a] = e[i] || [0, 0],
              [g, w] = e[l] || [0, 0];
            a >= r != w >= r &&
              n <= ((g - v) * (r - a)) / (w - a) + v &&
              (o = !o);
          }
          return o;
        }
        function Hr(t, e) {
          return (
            t[0] >= e.x &&
            t[0] <= e.x + e.width &&
            t[1] >= e.y &&
            t[1] <= e.y + e.height
          );
        }
        function qr(t) {
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
          function a(w, b) {
            const m = performance.now(),
              x = m - v;
            if (i === null || l === null || x === 0)
              return (i = w), (l = b), (v = m), null;
            const h = w - i,
              W = b - l,
              _ = Math.sqrt(h * h + W * W) / x;
            return (i = w), (l = b), (v = m), _;
          }
          const g = (w) => {
            let {
              x: b,
              y: m,
              placement: x,
              elements: h,
              onClose: W,
              nodeId: P,
              tree: _,
            } = w;
            return function (ie) {
              function pe() {
                clearTimeout(o), W();
              }
              if (
                (clearTimeout(o),
                !h.domReference ||
                  !h.floating ||
                  x == null ||
                  b == null ||
                  m == null)
              )
                return;
              const { clientX: ne, clientY: ve } = ie,
                Re = [ne, ve],
                ue = Ge(ie),
                se = ie.type === "mouseleave",
                we = Ie(h.floating, ue),
                te = Ie(h.domReference, ue),
                A = h.domReference.getBoundingClientRect(),
                K = h.floating.getBoundingClientRect(),
                Q = x.split("-")[0],
                V = b > K.right - K.width / 2,
                B = m > K.bottom - K.height / 2,
                Y = Hr(Re, A),
                N = K.width > A.width,
                L = K.height > A.height,
                X = (N ? A : K).left,
                be = (N ? A : K).right,
                We = (L ? A : K).top,
                Ue = (L ? A : K).bottom;
              if (we && ((s = !0), !se)) return;
              if ((te && (s = !1), te && !se)) {
                s = !0;
                return;
              }
              if (
                (se &&
                  (0, oe.vq)(ie.relatedTarget) &&
                  Ie(h.floating, ie.relatedTarget)) ||
                (_ &&
                  Jt(_.nodesRef.current, P).some((Ke) => {
                    let { context: Ee } = Ke;
                    return Ee == null ? void 0 : Ee.open;
                  }))
              )
                return;
              if (
                (Q === "top" && m >= A.bottom - 1) ||
                (Q === "bottom" && m <= A.top + 1) ||
                (Q === "left" && b >= A.right - 1) ||
                (Q === "right" && b <= A.left + 1)
              )
                return pe();
              let pt = [];
              switch (Q) {
                case "top":
                  pt = [
                    [X, A.top + 1],
                    [X, K.bottom - 1],
                    [be, K.bottom - 1],
                    [be, A.top + 1],
                  ];
                  break;
                case "bottom":
                  pt = [
                    [X, K.top + 1],
                    [X, A.bottom - 1],
                    [be, A.bottom - 1],
                    [be, K.top + 1],
                  ];
                  break;
                case "left":
                  pt = [
                    [K.right - 1, Ue],
                    [K.right - 1, We],
                    [A.left + 1, We],
                    [A.left + 1, Ue],
                  ];
                  break;
                case "right":
                  pt = [
                    [A.right - 1, Ue],
                    [A.right - 1, We],
                    [K.left + 1, We],
                    [K.left + 1, Ue],
                  ];
                  break;
              }
              function Xe(Ke) {
                let [Ee, ee] = Ke;
                switch (Q) {
                  case "top": {
                    const me = [
                        N ? Ee + e / 2 : V ? Ee + e * 4 : Ee - e * 4,
                        ee + e + 1,
                      ],
                      ce = [
                        N ? Ee - e / 2 : V ? Ee + e * 4 : Ee - e * 4,
                        ee + e + 1,
                      ],
                      ge = [
                        [K.left, V || N ? K.bottom - e : K.top],
                        [
                          K.right,
                          V ? (N ? K.bottom - e : K.top) : K.bottom - e,
                        ],
                      ];
                    return [me, ce, ...ge];
                  }
                  case "bottom": {
                    const me = [
                        N ? Ee + e / 2 : V ? Ee + e * 4 : Ee - e * 4,
                        ee - e,
                      ],
                      ce = [
                        N ? Ee - e / 2 : V ? Ee + e * 4 : Ee - e * 4,
                        ee - e,
                      ],
                      ge = [
                        [K.left, V || N ? K.top + e : K.bottom],
                        [K.right, V ? (N ? K.top + e : K.bottom) : K.top + e],
                      ];
                    return [me, ce, ...ge];
                  }
                  case "left": {
                    const me = [
                        Ee + e + 1,
                        L ? ee + e / 2 : B ? ee + e * 4 : ee - e * 4,
                      ],
                      ce = [
                        Ee + e + 1,
                        L ? ee - e / 2 : B ? ee + e * 4 : ee - e * 4,
                      ];
                    return [
                      ...[
                        [B || L ? K.right - e : K.left, K.top],
                        [
                          B ? (L ? K.right - e : K.left) : K.right - e,
                          K.bottom,
                        ],
                      ],
                      me,
                      ce,
                    ];
                  }
                  case "right": {
                    const me = [
                        Ee - e,
                        L ? ee + e / 2 : B ? ee + e * 4 : ee - e * 4,
                      ],
                      ce = [
                        Ee - e,
                        L ? ee - e / 2 : B ? ee + e * 4 : ee - e * 4,
                      ],
                      ge = [
                        [B || L ? K.left + e : K.right, K.top],
                        [B ? (L ? K.left + e : K.right) : K.left + e, K.bottom],
                      ];
                    return [me, ce, ...ge];
                  }
                }
              }
              if (!ur([ne, ve], pt)) {
                if (s && !Y) return pe();
                if (!se && r) {
                  const Ke = a(ie.clientX, ie.clientY);
                  if (Ke !== null && Ke < 0.1) return pe();
                }
                ur([ne, ve], Xe([b, m]))
                  ? !s && r && (o = window.setTimeout(pe, 40))
                  : pe();
              }
            };
          };
          return (g.__options = { blockPointerEvents: n }), g;
        }
      },
      977: (fn, Wt, $e) => {
        $e.d(Wt, {
          $4: () => E,
          CP: () => re,
          L9: () => j,
          Lv: () => Rt,
          Ng: () => at,
          Tc: () => Ct,
          Tf: () => dt,
          ZU: () => ft,
          _m: () => ke,
          ep: () => Fe,
          eu: () => Ge,
          gJ: () => _e,
          mq: () => Oe,
          sQ: () => It,
          sb: () => ut,
          v9: () => Ne,
          vq: () => vt,
          zk: () => oe,
        });
        function c() {
          return typeof window != "undefined";
        }
        function Oe(k) {
          return Ie(k) ? (k.nodeName || "").toLowerCase() : "#document";
        }
        function oe(k) {
          var U;
          return (
            (k == null || (U = k.ownerDocument) == null
              ? void 0
              : U.defaultView) || window
          );
        }
        function Fe(k) {
          var U;
          return (U =
            (Ie(k) ? k.ownerDocument : k.document) || window.document) == null
            ? void 0
            : U.documentElement;
        }
        function Ie(k) {
          return c() ? k instanceof Node || k instanceof oe(k).Node : !1;
        }
        function vt(k) {
          return c() ? k instanceof Element || k instanceof oe(k).Element : !1;
        }
        function ut(k) {
          return c()
            ? k instanceof HTMLElement || k instanceof oe(k).HTMLElement
            : !1;
        }
        function at(k) {
          return !c() || typeof ShadowRoot == "undefined"
            ? !1
            : k instanceof ShadowRoot || k instanceof oe(k).ShadowRoot;
        }
        function ft(k) {
          const {
            overflow: U,
            overflowX: nt,
            overflowY: Le,
            display: Pe,
          } = j(k);
          return (
            /auto|scroll|overlay|hidden|clip/.test(U + Le + nt) &&
            Pe !== "inline" &&
            Pe !== "contents"
          );
        }
        function Rt(k) {
          return /^(table|td|th)$/.test(Oe(k));
        }
        function dt(k) {
          try {
            if (k.matches(":popover-open")) return !0;
          } catch {}
          try {
            return k.matches(":modal");
          } catch {
            return !1;
          }
        }
        const At = /transform|translate|scale|rotate|perspective|filter/,
          wt = /paint|layout|strict|content/,
          He = (k) => !!k && k !== "none";
        let Et;
        function It(k) {
          const U = vt(k) ? j(k) : k;
          return (
            He(U.transform) ||
            He(U.translate) ||
            He(U.scale) ||
            He(U.rotate) ||
            He(U.perspective) ||
            (!Ct() && (He(U.backdropFilter) || He(U.filter))) ||
            At.test(U.willChange || "") ||
            wt.test(U.contain || "")
          );
        }
        function _e(k) {
          let U = E(k);
          for (; ut(U) && !Ge(U); ) {
            if (It(U)) return U;
            if (dt(U)) return null;
            U = E(U);
          }
          return null;
        }
        function Ct() {
          return (
            Et == null &&
              (Et =
                typeof CSS != "undefined" &&
                CSS.supports &&
                CSS.supports("-webkit-backdrop-filter", "none")),
            Et
          );
        }
        function Ge(k) {
          return /^(html|body|#document)$/.test(Oe(k));
        }
        function j(k) {
          return oe(k).getComputedStyle(k);
        }
        function re(k) {
          return vt(k)
            ? { scrollLeft: k.scrollLeft, scrollTop: k.scrollTop }
            : { scrollLeft: k.scrollX, scrollTop: k.scrollY };
        }
        function E(k) {
          if (Oe(k) === "html") return k;
          const U =
            k.assignedSlot || k.parentNode || (at(k) && k.host) || Fe(k);
          return at(U) ? U.host : U;
        }
        function Ce(k) {
          const U = E(k);
          return Ge(U)
            ? (k.ownerDocument || k).body
            : ut(U) && ft(U)
              ? U
              : Ce(U);
        }
        function Ne(k, U, nt) {
          var Le;
          U === void 0 && (U = []), nt === void 0 && (nt = !0);
          const Pe = Ce(k),
            $ = Pe === ((Le = k.ownerDocument) == null ? void 0 : Le.body),
            he = oe(Pe);
          if ($) {
            const De = ke(he);
            return U.concat(
              he,
              he.visualViewport || [],
              ft(Pe) ? Pe : [],
              De && nt ? Ne(De) : [],
            );
          } else return U.concat(Pe, Ne(Pe, [], nt));
        }
        function ke(k) {
          return k.parent && Object.getPrototypeOf(k.parent)
            ? k.frameElement
            : null;
        }
      },
      58015: (fn, Wt, $e) => {
        $e.d(Wt, {
          B1: () => Pe,
          C0: () => At,
          Dz: () => _e,
          Jx: () => at,
          LI: () => vt,
          PG: () => He,
          RI: () => ut,
          Sg: () => wt,
          T9: () => Ie,
          TV: () => It,
          WJ: () => Ge,
          _3: () => dt,
          bV: () => U,
          jk: () => Fe,
          lP: () => k,
          nI: () => Le,
          qE: () => Rt,
          sq: () => Et,
          w7: () => Ct,
        });
        const c = null,
          Oe = null,
          oe = null,
          Fe = Math.min,
          Ie = Math.max,
          vt = Math.round,
          ut = Math.floor,
          at = ($) => ({ x: $, y: $ }),
          ft = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function Rt($, he, De) {
          return Ie($, Fe(he, De));
        }
        function dt($, he) {
          return typeof $ == "function" ? $(he) : $;
        }
        function At($) {
          return $.split("-")[0];
        }
        function wt($) {
          return $.split("-")[1];
        }
        function He($) {
          return $ === "x" ? "y" : "x";
        }
        function Et($) {
          return $ === "y" ? "height" : "width";
        }
        function It($) {
          const he = $[0];
          return he === "t" || he === "b" ? "y" : "x";
        }
        function _e($) {
          return He(It($));
        }
        function Ct($, he, De) {
          De === void 0 && (De = !1);
          const Qe = wt($),
            Je = _e($),
            rt = Et(Je);
          let bt =
            Je === "x"
              ? Qe === (De ? "end" : "start")
                ? "right"
                : "left"
              : Qe === "start"
                ? "bottom"
                : "top";
          return (
            he.reference[rt] > he.floating[rt] && (bt = U(bt)), [bt, U(bt)]
          );
        }
        function Ge($) {
          const he = U($);
          return [j($), he, j(he)];
        }
        function j($) {
          return $.includes("start")
            ? $.replace("start", "end")
            : $.replace("end", "start");
        }
        const re = ["left", "right"],
          E = ["right", "left"],
          Ce = ["top", "bottom"],
          Ne = ["bottom", "top"];
        function ke($, he, De) {
          switch ($) {
            case "top":
            case "bottom":
              return De ? (he ? E : re) : he ? re : E;
            case "left":
            case "right":
              return he ? Ce : Ne;
            default:
              return [];
          }
        }
        function k($, he, De, Qe) {
          const Je = wt($);
          let rt = ke(At($), De === "start", Qe);
          return (
            Je &&
              ((rt = rt.map((bt) => bt + "-" + Je)),
              he && (rt = rt.concat(rt.map(j)))),
            rt
          );
        }
        function U($) {
          const he = At($);
          return ft[he] + $.slice(he.length);
        }
        function nt($) {
          var he, De, Qe, Je;
          return {
            top: (he = $.top) != null ? he : 0,
            right: (De = $.right) != null ? De : 0,
            bottom: (Qe = $.bottom) != null ? Qe : 0,
            left: (Je = $.left) != null ? Je : 0,
          };
        }
        function Le($) {
          return typeof $ != "number"
            ? nt($)
            : { top: $, right: $, bottom: $, left: $ };
        }
        function Pe($) {
          const { x: he, y: De, width: Qe, height: Je } = $;
          return {
            width: Qe,
            height: Je,
            top: De,
            left: he,
            right: he + Qe,
            bottom: De + Je,
            x: he,
            y: De,
          };
        }
      },
    },
  ]);
})();
