/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [76077],
    {
      22932: (ah, Es, Cs) => {
        Cs.d(Es, { fE: () => eh });
        function J(n, t, r, e, o) {
          return Mn(
            t,
            ((i, a) => {
              const c = i[a];
              if (c === void 0) throw new TypeError(ko(a));
              return c;
            })(n, t),
            r,
            e,
            o,
          );
        }
        function Mn(n, t, r, e, o, i) {
          const a = Jt(t, r, e);
          if (o && t !== a) throw new RangeError(Oc(n, t, r, e, i));
          return a;
        }
        function U(n) {
          return n !== null && /object|function/.test(typeof n);
        }
        function nn(n, t = Map) {
          const r = new t();
          return (e, ...o) => {
            if (r.has(e)) return r.get(e);
            const i = n(e, ...o);
            return r.set(e, i), i;
          };
        }
        function Wt(n) {
          return pt({ name: n }, 1);
        }
        function pt(n, t) {
          return bn((r) => ({ value: r, configurable: 1, writable: !t }), n);
        }
        function Rs(n) {
          return bn((t) => ({ get: t, configurable: 1 }), n);
        }
        function ve(n) {
          return { [Symbol.toStringTag]: { value: n, configurable: 1 } };
        }
        function gt(n, t) {
          const r = {};
          let e = n.length;
          for (const o of t) r[n[--e]] = o;
          return r;
        }
        function bn(n, t, r) {
          const e = {};
          for (const o in t) e[o] = n(t[o], o, r);
          return e;
        }
        function br(n, t, r) {
          const e = {};
          for (let o = 0; o < t.length; o++) {
            const i = t[o];
            e[i] = n(i, o, r);
          }
          return e;
        }
        function Si(n, t, r) {
          const e = {};
          for (let o = 0; o < n.length; o++) e[t[o]] = r[n[o]];
          return e;
        }
        function tn(n, t) {
          const r = Object.create(null);
          for (const e of n) r[e] = t[e];
          return r;
        }
        function Yi(n, t) {
          for (const r of t) if (r in n) return 1;
          return 0;
        }
        function ji(n, t, r) {
          for (const e of n) if (t[e] !== r[e]) return 0;
          return 1;
        }
        function Pi(n, t, r) {
          const e = { ...r };
          for (let o = 0; o < t; o++) e[n[o]] = 0;
          return e;
        }
        function O(n, ...t) {
          return (...r) => n(...t, ...r);
        }
        function ch(n) {
          return n;
        }
        function Me() {}
        function Fi(n) {
          return n[0].toUpperCase() + n.substring(1);
        }
        function qt(n) {
          return n.slice().sort();
        }
        function Or(n, t) {
          return String(t).padStart(n, "0");
        }
        function Pn(n, t) {
          return Math.sign(n - t);
        }
        function Jt(n, t, r) {
          return Math.min(Math.max(n, t), r);
        }
        function On(n, t) {
          return [Math.floor(n / t), zt(n, t)];
        }
        function zt(n, t) {
          return ((n % t) + t) % t;
        }
        function Fn(n, t) {
          return [Ir(n, t), be(n, t)];
        }
        function Ir(n, t) {
          return Math.trunc(n / t) || 0;
        }
        function be(n, t) {
          return n % t || 0;
        }
        function Tr(n) {
          return Math.abs(n % 1) === 0.5;
        }
        function Zi(n, t, r) {
          let e = 0,
            o = 0;
          for (let c = 0; c <= t; c++) {
            const u = n[r[c]],
              s = wn[c],
              f = E / s,
              [l, d] = Fn(u, f);
            (e += d * s), (o += l);
          }
          const [i, a] = Fn(e, E);
          return [o + i, a];
        }
        function Nr(n, t, r) {
          const e = {};
          for (let o = t; o >= 0; o--) {
            const i = wn[o];
            (e[r[o]] = Ir(n, i)), (n = be(n, i));
          }
          return e;
        }
        function Ss(n) {
          if (n !== void 0) return k(n);
        }
        function Ys(n) {
          if (n !== void 0) return In(n);
        }
        function ki(n) {
          if (n !== void 0) return Oe(n);
        }
        function In(n) {
          return $i(Oe(n));
        }
        function Oe(n) {
          return Ui(Kf(n));
        }
        function Bi(n, t) {
          if (t == null) throw new RangeError(ko(n));
          return t;
        }
        function wt(n) {
          if (!U(n)) throw new TypeError(Of);
          return n;
        }
        function Ie(n, t, r = n) {
          if (typeof t !== n) throw new TypeError(An(r, t));
          return t;
        }
        function Ui(n, t = "number") {
          if (!Number.isInteger(n)) throw new RangeError(gf(t, n));
          return n || 0;
        }
        function $i(n, t = "number") {
          if (n <= 0) throw new RangeError(wf(t, n));
          return n;
        }
        function Te(n) {
          if (typeof n == "symbol") throw new TypeError(bf);
          return String(n);
        }
        function Dr(n, t) {
          return U(n) ? String(n) : k(n, t);
        }
        function Er(n) {
          if (typeof n == "string") return BigInt(n);
          if (typeof n != "bigint") throw new TypeError(Mf(n));
          return n;
        }
        function xi(n, t = "number") {
          if (typeof n == "bigint") throw new TypeError(vf(t));
          if (((n = Number(n)), !Number.isFinite(n)))
            throw new RangeError(yf(t, n));
          return n;
        }
        function $(n, t) {
          return Math.trunc(xi(n, t)) || 0;
        }
        function Cr(n, t) {
          return Ui(xi(n, t), t);
        }
        function Li(n, t) {
          return $i($(n, t), t);
        }
        function Ne(n, t) {
          let [r, e] = Fn(t, E),
            o = n + r;
          const i = Math.sign(o);
          return i && i === -Math.sign(e) && ((o -= i), (e += i * E)), [o, e];
        }
        function yt(n, t, r = 1) {
          return Ne(n[0] + t[0] * r, n[1] + t[1] * r);
        }
        function nt(n, t) {
          return Ne(n[0], n[1] + t);
        }
        function dn(n, t) {
          return yt(t, n, -1);
        }
        function rn(n, t) {
          return Pn(n[0], t[0]) || Pn(n[1], t[1]);
        }
        function _i(n, t, r) {
          return rn(n, t) === -1 || rn(n, r) === 1;
        }
        function Rr(n, t = 1) {
          const r = BigInt(E / t);
          return [Number(n / r), Number(n % r) * t];
        }
        function Ht(n, t = 1) {
          const r = E / t,
            [e, o] = Fn(n, r);
          return [e, o * t];
        }
        function Ai(n, t = 1) {
          const [r, e] = n,
            o = Math.floor(e / t),
            i = E / t;
          return BigInt(r) * BigInt(i) + BigInt(o);
        }
        function hn(n, t = 1, r) {
          const [e, o] = n,
            [i, a] = Fn(o, t);
          return e * (E / t) + (i + (r ? a / t : 0));
        }
        function js(n) {
          return n[0] + n[1] / E;
        }
        function De(n, t, r = On) {
          const [e, o] = n,
            [i, a] = r(o, t);
          return [e * (E / t) + i, a];
        }
        function Ee(n) {
          return (
            J(n, "isoYear", fr, ur, 1),
            n.isoYear === fr
              ? J(n, "isoMonth", 4, 12, 1)
              : n.isoYear === ur && J(n, "isoMonth", 1, 9, 1),
            n
          );
        }
        function an(n) {
          return x({ ...n, ...K, isoHour: 12 }), n;
        }
        function x(n) {
          const t = J(n, "isoYear", fr, ur, 1),
            r = t === fr ? 1 : t === ur ? -1 : 0;
          return (
            r &&
              en(
                P({
                  ...n,
                  isoDay: n.isoDay + r,
                  isoNanosecond: n.isoNanosecond - r,
                }),
              ),
            n
          );
        }
        function en(n) {
          if (!n || _i(n, el, rl)) throw new RangeError(Wn);
          return n;
        }
        function Zn(n) {
          return Zi(n, 5, fn)[1];
        }
        function Sr(n) {
          const [t, r] = On(n, E);
          return [Nr(r, 5, fn), t];
        }
        function Wi(n) {
          return qi(n)[0];
        }
        function qi(n) {
          return De(n, un);
        }
        function L(n) {
          return tt(
            n.isoYear,
            n.isoMonth,
            n.isoDay,
            n.isoHour,
            n.isoMinute,
            n.isoSecond,
            n.isoMillisecond,
          );
        }
        function P(n) {
          const t = L(n);
          if (t !== void 0) {
            const [r, e] = Fn(t, V);
            return [
              r,
              e * En + (n.isoMicrosecond || 0) * ht + (n.isoNanosecond || 0),
            ];
          }
        }
        function Ce(n, t) {
          const [r, e] = Sr(Zn(n) - t);
          return en(P({ ...n, isoDay: n.isoDay + e, ...r }));
        }
        function Yr(...n) {
          return tt(...n) / Sc;
        }
        function tt(...n) {
          const [t, r] = Ji(...n),
            e = t.valueOf();
          if (!isNaN(e)) return e - r * V;
        }
        function Ji(n, t = 1, r = 1, e = 0, o = 0, i = 0, a = 0) {
          const c = n === fr ? 1 : n === ur ? -1 : 0,
            u = new Date();
          return (
            u.setUTCHours(e, o, i, a), u.setUTCFullYear(n, t - 1, r + c), [u, c]
          );
        }
        function vt(n, t) {
          let [r, e] = nt(n, t);
          e < 0 && ((e += E), (r -= 1));
          const [o, i] = On(e, En),
            [a, c] = On(i, ht);
          return jr(r * V + o, a, c);
        }
        function jr(n, t = 0, r = 0) {
          const e = Math.ceil(Math.max(0, Math.abs(n) - ni) / V) * Math.sign(n),
            o = new Date(n - e * V);
          return gt(fe, [
            o.getUTCFullYear(),
            o.getUTCMonth() + 1,
            o.getUTCDate() + e,
            o.getUTCHours(),
            o.getUTCMinutes(),
            o.getUTCSeconds(),
            o.getUTCMilliseconds(),
            t,
            r,
          ]);
        }
        function Re(n, t) {
          if (t < -ni) throw new RangeError(Wn);
          const r = n.formatToParts(t),
            e = {};
          for (const o of r) e[o.type] = o.value;
          return e;
        }
        function zi(n) {
          return n.isoDay;
        }
        function Tn(n) {
          return [n.isoYear, n.isoMonth, n.isoDay];
        }
        function Pr(n, t) {
          return [t, 0];
        }
        function Se(n, t) {
          if (!t) return [Sn, n];
        }
        function Ye(n, t, r) {
          return { isoYear: n, isoMonth: t, isoDay: r };
        }
        function Ps() {
          return 7;
        }
        function Gt() {
          return zn;
        }
        function Vt(n, t) {
          switch (t) {
            case 2:
              return Fr(n) ? 29 : 28;
            case 4:
            case 6:
            case 9:
            case 11:
              return 30;
          }
          return 31;
        }
        function je(n) {
          return Fr(n) ? 366 : 365;
        }
        function Fr(n) {
          return n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
        }
        function Hi(n) {
          const [t, r] = Ji(n.isoYear, n.isoMonth, n.isoDay);
          return zt(t.getUTCDay() - r, 7) || 7;
        }
        function Gi(n) {
          return this.id === Ft
            ? (({ isoYear: t }) =>
                t < 1 ? ["gregory-inverse", 1 - t] : ["gregory", t])(n)
            : this.id === qn
              ? al(n)
              : [];
        }
        function Fs(n) {
          const t = L(n);
          if (t < il) {
            const { isoYear: i } = n;
            return i < 1 ? ["japanese-inverse", 1 - i] : ["japanese", i];
          }
          const r = Re(hi(qn), t),
            { era: e, eraYear: o } = ic(r, qn);
          return [e, o];
        }
        function Zr(n) {
          return rt(n), Mt(n, 1), n;
        }
        function rt(n) {
          return Ki(n, 1), n;
        }
        function Vi(n) {
          return ji(Ko, n, Ki(n));
        }
        function Ki(n, t) {
          const { isoYear: r } = n,
            e = J(n, "isoMonth", 1, Gt(), t);
          return {
            isoYear: r,
            isoMonth: e,
            isoDay: J(n, "isoDay", 1, Vt(r, e), t),
          };
        }
        function Mt(n, t) {
          return gt(fn, [
            J(n, "isoHour", 0, 23, t),
            J(n, "isoMinute", 0, 59, t),
            J(n, "isoSecond", 0, 59, t),
            J(n, "isoMillisecond", 0, 999, t),
            J(n, "isoMicrosecond", 0, 999, t),
            J(n, "isoNanosecond", 0, 999, t),
          ]);
        }
        function I(n) {
          return n === void 0 ? 0 : Jc(wt(n));
        }
        function kr(n, t = 0) {
          n = mn(n);
          const r = zc(n),
            e = gl(n, t);
          return [Jc(n), e, r];
        }
        function bt(n, t, r, e = 9, o = 0, i = 4) {
          t = mn(t);
          let a = qc(t, e, o),
            c = Ur(t),
            u = Zt(t, i);
          const s = dr(t, e, o, 1);
          return (
            a == null ? (a = Math.max(r, s)) : ra(a, s),
            (c = $r(c, s, 1)),
            n && (u = ((f) => (f < 4 ? (f + 2) % 4 : f))(u)),
            [a, s, c, u]
          );
        }
        function Br(n, t = 6, r) {
          let e = Ur((n = Kt(n, le)));
          const o = Zt(n, 7);
          let i = dr(n, t);
          return (i = Bi(le, i)), (e = $r(e, i, void 0, r)), [i, e, o];
        }
        function Xi(n, t, r) {
          let e = Ur((t = Kt(t, _c)));
          const o = Zt(t, 7);
          return (e = $r(e, n, r)), [e, o];
        }
        function sh(n, t) {
          return t !== void 0 ? Xi(n, t, 1) : [];
        }
        function uh(n, t) {
          return t !== void 0 ? Xi(n, t) : [1, 7];
        }
        function Pe(n) {
          return oi(mn(n));
        }
        function Qi(n, t) {
          return Fe(mn(n), t);
        }
        function Zs(n) {
          const t = Kt(n, ei),
            r = kn(ei, ml, t, 0);
          if (!r) throw new RangeError(An(ei, r));
          return r;
        }
        function Fe(n, t = 4) {
          const r = ta(n);
          return [Zt(n, 4), ...na(dr(n, t), r)];
        }
        function na(n, t) {
          return n != null
            ? [wn[n], n < 4 ? 9 - 3 * n : -1]
            : [t === void 0 ? 1 : 10 ** (9 - t), t];
        }
        function Ur(n) {
          const t = n[lr];
          return t === void 0 ? 1 : $(t, lr);
        }
        function $r(n, t, r, e) {
          const o = e ? E : wn[t + 1];
          if (o) {
            const i = wn[t];
            if (o % ((n = Mn(lr, n, 1, o / i - (e ? 0 : 1), 1)) * i))
              throw new RangeError(An(lr, n));
          } else n = Mn(lr, n, 1, r ? 10 ** 9 : 1, 1);
          return n;
        }
        function ta(n) {
          let t = n[ri];
          if (t !== void 0) {
            if (typeof t != "number") {
              if (Te(t) === "auto") return;
              throw new RangeError(An(ri, t));
            }
            t = Mn(ri, Math.floor(t), 0, 9, 1);
          }
          return t;
        }
        function mn(n) {
          return n === void 0 ? {} : wt(n);
        }
        function Kt(n, t) {
          return typeof n == "string" ? { [t]: n } : wt(n);
        }
        function xr(n) {
          return { overflow: cl[n] };
        }
        function Ze(n, t, r = 9, e = 0, o) {
          let i = t[n];
          if (i === void 0) return o ? e : void 0;
          if (((i = Te(i)), i === "auto")) return o ? e : null;
          let a = xo[i];
          if ((a === void 0 && (a = nl[i]), a === void 0))
            throw new RangeError(Tc(n, i, xo));
          return Mn(n, a, e, r, 1, Lo), a;
        }
        function kn(n, t, r, e = 0) {
          const o = r[n];
          if (o === void 0) return e;
          const i = Te(o),
            a = t[i];
          if (a === void 0) throw new RangeError(Tc(n, i, t));
          return a;
        }
        function ra(n, t) {
          if (t > n) throw new RangeError(Af);
        }
        function cn(n) {
          return { branding: si, epochNanoseconds: n };
        }
        function z(n, t, r) {
          return {
            branding: Hn,
            calendar: r,
            timeZone: t,
            epochNanoseconds: n,
          };
        }
        function H(n, t = n.calendar) {
          return { branding: kt, calendar: t, ...tn(Lc, n) };
        }
        function Nn(n, t = n.calendar) {
          return { branding: hr, calendar: t, ...tn(Xo, n) };
        }
        function Ot(n, t = n.calendar) {
          return { branding: ii, calendar: t, ...tn(Xo, n) };
        }
        function Lr(n, t = n.calendar) {
          return { branding: ai, calendar: t, ...tn(Xo, n) };
        }
        function pn(n) {
          return { branding: ci, ...tn(xc, n) };
        }
        function S(n) {
          return { branding: ui, sign: $n(n), ...tn(Ho, n) };
        }
        function fh(n) {
          return Wi(n.epochNanoseconds);
        }
        function ke(n) {
          return De(n.epochNanoseconds, En)[0];
        }
        function lh(n) {
          return Ai(n.epochNanoseconds, ht);
        }
        function ks(n) {
          return Ai(n.epochNanoseconds);
        }
        function ea(n) {
          return n.epochNanoseconds;
        }
        function Bs(n, t, r, e, o) {
          const i = ct(e),
            [a, c] = ((M, v) => {
              const T = v((M = Kt(M, ti))[Ac]);
              let D = pl(M);
              return (D = Bi(ti, D)), [D, T];
            })(o, n),
            u = Math.max(a, i);
          if (!c && nr(u, c)) return oa(e, a);
          if (!c) throw new RangeError(ce);
          if (!e.sign) return 0;
          const [s, f, l] = Gr(t, r, c),
            d = eo(l),
            h = Vr(l),
            m = oo(l),
            p = h(f, s, e);
          Nt(c) || (x(s), x(p));
          const g = m(f, s, p, a);
          return nr(a, c) ? oa(g, a) : Us(g, d(p), a, f, s, d, h);
        }
        function Us(n, t, r, e, o, i, a) {
          const c = $n(n),
            [u, s] = Be(e, Vo(r, n), r, c, o, i, a),
            f = Ue(t, u, s);
          return n[N[r]] + f * c;
        }
        function oa(n, t) {
          return hn(F(n), wn[t], 1);
        }
        function Be(n, t, r, e, o, i, a) {
          const c = N[r],
            u = { ...t, [c]: t[c] + e },
            s = a(n, o, t),
            f = a(n, o, u);
          return [i(s), i(f)];
        }
        function Ue(n, t, r) {
          const e = hn(dn(t, r));
          if (!e) throw new RangeError(jt);
          return hn(dn(t, n)) / e;
        }
        function $s(n, t) {
          const [r, e, o] = Br(t, 5, 1);
          return cn(Wr(n.epochNanoseconds, r, e, o, 1));
        }
        function xs(n, t, r) {
          let { epochNanoseconds: e, timeZone: o, calendar: i } = t;
          const [a, c, u] = Br(r);
          if (a === 0 && c === 1) return t;
          const s = n(o);
          if (a === 6) e = Js(ca, s, t, u);
          else {
            const f = s.N(e);
            e = ot(s, ia(vt(e, f), a, c, u), f, 2, 0, 1);
          }
          return z(e, o, i);
        }
        function Ls(n, t) {
          return H(ia(n, ...Br(t)), n.calendar);
        }
        function _s(n, t) {
          const [r, e, o] = Br(t, 5);
          var i;
          return pn(((i = o), $e(n, Xt(r, e), i)[0]));
        }
        function As(n, t) {
          const r = n(t.timeZone),
            e = A(t, r),
            [o, i] = ca(e),
            a = hn(dn(Un(r, o), Un(r, i)), ue, 1);
          if (a <= 0) throw new RangeError(jt);
          return a;
        }
        function Ws(n, t) {
          const { timeZone: r, calendar: e } = t;
          return z(qs(sa, n(r), t), r, e);
        }
        function qs(n, t, r) {
          return Un(t, n(A(r, t)));
        }
        function Js(n, t, r, e) {
          const o = A(r, t),
            [i, a] = n(o),
            c = r.epochNanoseconds,
            u = Un(t, i),
            s = Un(t, a);
          if (_i(c, u, s)) throw new RangeError(jt);
          return ua(Ue(c, u, s), e) ? s : u;
        }
        function ia(n, t, r, e) {
          return aa(n, Xt(t, r), e);
        }
        function aa(n, t, r) {
          const [e, o] = $e(n, t, r);
          return x({ ...it(n, o), ...e });
        }
        function $e(n, t, r) {
          return Sr(Bn(Zn(n), t, r));
        }
        function _r(n) {
          return Bn(n, se, 7);
        }
        function Xt(n, t) {
          return wn[n] * t;
        }
        function ca(n) {
          const t = sa(n);
          return [t, it(t, 1)];
        }
        function sa(n) {
          return tl(6, n);
        }
        function zs(n, t, r) {
          const e = Math.min(ct(n), 6);
          return Dt(qr(F(n, e), t, r), e);
        }
        function Ar(n, t, r, e, o, i, a, c, u, s) {
          if (e === 0 && o === 1) return n;
          const f = nr(e, c) ? (Nt(c) && e < 6 && r >= 6 ? Gs : Hs) : Vs;
          let [l, d, h] = f(n, t, r, e, o, i, a, c, u, s);
          return (
            h &&
              e !== 7 &&
              (l = ((m, p, g, M, v, T, D, R) => {
                const j = $n(m);
                for (let Q = M + 1; Q <= g; Q++) {
                  if (Q === 7 && g !== 7) continue;
                  const ln = Vo(Q, m);
                  ln[N[Q]] += j;
                  const B = hn(dn(D(R(v, T, ln)), p));
                  if (B && Math.sign(B) !== j) break;
                  m = ln;
                }
                return m;
              })(l, d, r, Math.max(6, e), a, c, u, s)),
            l
          );
        }
        function Wr(n, t, r, e, o) {
          return t === 6 ? [Bn(js(n), r, e), 0] : qr(n, Xt(t, r), e, o);
        }
        function qr(n, t, r, e) {
          let [o, i] = n;
          e && i < 0 && ((i += E), (o -= 1));
          const [a, c] = On(Bn(i, t, r), E);
          return Ne(o + a, c);
        }
        function Bn(n, t, r) {
          return ua(n / t, r) * t;
        }
        function ua(n, t) {
          return vl[t](n);
        }
        function Hs(n, t, r, e, o, i) {
          const a = $n(n),
            c = F(n),
            u = Wr(c, e, o, i),
            s = dn(c, u),
            f = Math.sign(u[0] - c[0]) === a,
            l = Dt(u, Math.min(r, 6));
          return [{ ...n, ...l }, yt(t, s), f];
        }
        function Gs(n, t, r, e, o, i, a, c, u, s) {
          const f = $n(n) || 1,
            l = hn(F(n, 5)),
            d = Xt(e, o);
          let h = Bn(l, d, i);
          const [m, p] = Be(a, { ...n, ...Go }, 6, f, c, u, s),
            g = h - hn(dn(m, p));
          let M = 0;
          g && Math.sign(g) !== f
            ? (t = nt(m, h))
            : ((M += f), (h = Bn(g, d, i)), (t = nt(p, h)));
          const v = Kr(h);
          return [{ ...n, ...v, days: n.days + M }, t, !!M];
        }
        function Vs(n, t, r, e, o, i, a, c, u, s) {
          const f = $n(n),
            l = N[e],
            d = Vo(e, n);
          e === 7 && (n = { ...n, weeks: n.weeks + Math.trunc(n.days / 7) });
          const h = Ir(n[l], o) * o;
          d[l] = h;
          const [m, p] = Be(a, d, e, o * f, c, u, s),
            g = h + Ue(t, m, p) * f * o,
            M = Bn(g, o, i),
            v = Math.sign(M - g) === f;
          return (d[l] = M), [d, v ? p : m, v];
        }
        function Le(n, t, r, e) {
          const [o, i, a, c] = ((s) => {
              const f = Fe((s = mn(s)));
              return [s.timeZone, ...f];
            })(e),
            u = o !== void 0;
          return ((s, f, l, d, h, m) => {
            l = qr(l, h, d, 1);
            const p = f.N(l);
            return Ve(vt(l, p), m) + (s ? It(_r(p)) : "Z");
          })(u, t(u ? n(o) : mt), r.epochNanoseconds, i, a, c);
        }
        function Ae(n, t, r) {
          const [e, o, i, a, c, u] = ((s) => {
            s = mn(s);
            const f = oi(s),
              l = ta(s),
              d = yl(s),
              h = Zt(s, 4),
              m = dr(s, 4);
            return [f, wl(s), d, h, ...na(m, l)];
          })(r);
          return ((s, f, l, d, h, m, p, g, M, v) => {
            d = qr(d, M, g, 1);
            const T = s(l).N(d);
            return (
              Ve(vt(d, T), v) +
              It(_r(T), p) +
              ((D, R) => (R !== 1 ? "[" + (R === 2 ? "!" : "") + D + "]" : ""))(
                l,
                m,
              ) +
              Xe(f, h)
            );
          })(n, t.calendar, t.timeZone, t.epochNanoseconds, e, o, i, a, c, u);
        }
        function We(n, t) {
          const [r, e, o, i] = ((s) => ((s = mn(s)), [oi(s), ...Fe(s)]))(t);
          return (
            (a = n.calendar), (c = r), (u = i), Ve(aa(n, o, e), u) + Xe(a, c)
          );
          var a, c, u;
        }
        function qe(n, t) {
          return (r = n.calendar), (e = n), (o = Pe(t)), zr(e) + Xe(r, o);
          var r, e, o;
        }
        function Je(n, t) {
          return fa(n.calendar, da, n, Pe(t));
        }
        function ze(n, t) {
          return fa(n.calendar, Ks, n, Pe(t));
        }
        function He(n, t) {
          const [r, e, o] = Qi(t);
          return (i = o), ha($e(n, e, r)[0], i);
          var i;
        }
        function Jr(n, t) {
          const [r, e, o] = Qi(t, 3);
          return (
            e > 1 && at((n = { ...n, ...zs(n, e, r) })),
            ((i, a) => {
              const { sign: c } = i,
                u = c === -1 ? _(i) : i,
                { hours: s, minutes: f } = u,
                [l, d] = De(F(u, 3), un, Fn);
              Da(l);
              const h = Qe(d, a),
                m = a >= 0 || !c || h;
              return (
                (c < 0 ? "-" : "") +
                "P" +
                la({
                  Y: et(u.years),
                  M: et(u.months),
                  W: et(u.weeks),
                  D: et(u.days),
                }) +
                (s || f || l || m
                  ? "T" + la({ H: et(s), M: et(f), S: et(l, m) + h })
                  : "")
              );
            })(n, o)
          );
        }
        function fa(n, t, r, e) {
          const o = e > 1 || (e === 0 && n !== b);
          return e === 1
            ? n === b
              ? t(r)
              : zr(r)
            : o
              ? zr(r) + ma(n, e === 2)
              : t(r);
        }
        function la(n) {
          const t = [];
          for (const r in n) {
            const e = n[r];
            e && t.push(e, r);
          }
          return t.join("");
        }
        function Ve(n, t) {
          return zr(n) + "T" + ha(n, t);
        }
        function zr(n) {
          return da(n) + "-" + sn(n.isoDay);
        }
        function da(n) {
          const { isoYear: t } = n;
          return (
            (t < 0 || t > 9999 ? pa(t) + Or(6, Math.abs(t)) : Or(4, t)) +
            "-" +
            sn(n.isoMonth)
          );
        }
        function Ks(n) {
          return sn(n.isoMonth) + "-" + sn(n.isoDay);
        }
        function ha(n, t) {
          const r = [sn(n.isoHour), sn(n.isoMinute)];
          return (
            t !== -1 &&
              r.push(
                sn(n.isoSecond) +
                  ((e, o, i, a) => Qe(e * En + o * ht + i, a))(
                    n.isoMillisecond,
                    n.isoMicrosecond,
                    n.isoNanosecond,
                    t,
                  ),
              ),
            r.join(":")
          );
        }
        function It(n, t = 0) {
          if (t === 1) return "";
          const [r, e] = On(Math.abs(n), ue),
            [o, i] = On(e, se),
            [a, c] = On(i, un);
          return (
            pa(n) + sn(r) + ":" + sn(o) + (a || c ? ":" + sn(a) + Qe(c) : "")
          );
        }
        function Xe(n, t) {
          return t !== 1 && (t > 1 || (t === 0 && n !== b))
            ? ma(n, t === 2)
            : "";
        }
        function ma(n, t) {
          return "[" + (t ? "!" : "") + "u-ca=" + n + "]";
        }
        function Qe(n, t) {
          let r = Or(9, n);
          return (
            (r = t === void 0 ? r.replace(Ol, "") : r.slice(0, t)),
            r ? "." + r : ""
          );
        }
        function pa(n) {
          return n < 0 ? "-" : "+";
        }
        function et(n, t) {
          return n || t ? n.toLocaleString("fullwide", { useGrouping: 0 }) : "";
        }
        function Xs(n, t) {
          const { epochNanoseconds: r } = n,
            e = (t.N ? t : t(n.timeZone)).N(r),
            o = vt(r, e);
          return { calendar: n.calendar, ...o, offsetNanoseconds: e };
        }
        function dh(n, t) {
          const r = A(t, n);
          return {
            calendar: t.calendar,
            ...tn(Lc, r),
            offset: It(r.offsetNanoseconds),
            timeZone: t.timeZone,
          };
        }
        function ot(n, t, r, e = 0, o = 0, i, a) {
          if (r !== void 0 && e === 1 && (e === 1 || a)) return Ce(t, r);
          const c = n.v(t);
          if (r !== void 0 && e !== 3) {
            const u = ((s, f, l, d) => {
              const h = P(f);
              d && (l = _r(l));
              for (const m of s) {
                let p = hn(dn(m, h));
                if ((d && (p = _r(p)), p === l)) return m;
              }
            })(c, t, r, i);
            if (u !== void 0) return u;
            if (e === 0) throw new RangeError(Bf);
          }
          return a ? P(t) : Tt(n, t, o, c);
        }
        function Tt(n, t, r = 0, e = n.v(t)) {
          if (e.length === 1) return e[0];
          if (r === 1) throw new RangeError(Uf);
          if (e.length) return e[r === 3 ? 1 : 0];
          const o = P(t),
            i = ((c, u) => {
              const s = c.N(nt(u, -E));
              return ((f) => {
                if (f > E) throw new RangeError(kf);
                return f;
              })(c.N(nt(u, E)) - s);
            })(n, o),
            a = i * (r === 2 ? -1 : 1);
          return (e = n.v(vt(o, a)))[r === 2 ? 0 : e.length - 1];
        }
        function Un(n, t) {
          const r = n.v(t);
          if (r.length) return r[0];
          const e = nt(P(t), -E);
          return n.l(e, 1);
        }
        function ga(n, t, r) {
          return cn(
            en(
              yt(
                t.epochNanoseconds,
                ((e) => {
                  if (Ea(e)) throw new RangeError(Lf);
                  return F(e, 5);
                })(n ? _(r) : r),
              ),
            ),
          );
        }
        function wa(n, t, r, e, o, i = Object.create(null)) {
          const a = t(e.timeZone),
            c = n(e.calendar);
          return { ...e, ...no(a, c, e, r ? _(o) : o, i) };
        }
        function ya(n, t, r, e, o = Object.create(null)) {
          const { calendar: i } = r;
          return H(to(n(i), r, t ? _(e) : e, o), i);
        }
        function va(n, t, r, e, o) {
          const { calendar: i } = r;
          return Nn(Hr(n(i), r, t ? _(e) : e, o), i);
        }
        function Ma(n, t, r, e, o) {
          const i = r.calendar,
            a = n(i);
          let c = an(Qt(a, r));
          t && (e = io(e)),
            e.sign < 0 && ((c = a.P(c, { ...Z, months: 1 })), (c = it(c, -1)));
          const u = a.P(c, e, o);
          return Ot(Qt(a, u), i);
        }
        function ba(n, t, r) {
          return pn(Oa(t, n ? _(r) : r)[0]);
        }
        function no(n, t, r, e, o) {
          const i = F(e, 5);
          let a = r.epochNanoseconds;
          if (Ea(e)) {
            const c = A(r, n);
            a = yt(Tt(n, { ...Hr(t, c, { ...e, ...Go }, o), ...tn(fn, c) }), i);
          } else (a = yt(a, i)), I(o);
          return { epochNanoseconds: en(a) };
        }
        function to(n, t, r, e) {
          const [o, i] = Oa(t, r);
          return x({ ...Hr(n, t, { ...r, ...Go, days: r.days + i }, e), ...o });
        }
        function Hr(n, t, r, e) {
          if (r.years || r.months || r.weeks) return n.P(t, r, e);
          I(e);
          const o = r.days + F(r, 5)[0];
          return o ? an(it(t, o)) : t;
        }
        function Qt(n, t, r = 1) {
          return it(t, r - n.day(t));
        }
        function Oa(n, t) {
          const [r, e] = F(t, 5),
            [o, i] = Sr(Zn(n) + e);
          return [o, r + i];
        }
        function ro(n, t, r) {
          const e = I(r);
          let o,
            { years: i, months: a, weeks: c, days: u } = t;
          if (((u += F(t, 5)[0]), i || a)) o = Qs(this, n, i, a, e);
          else {
            if (!c && !u) return n;
            o = L(n);
          }
          if (o === void 0) throw new RangeError(Wn);
          return (o += (7 * c + u) * V), an(jr(o));
        }
        function Qs(n, t, r, e, o) {
          let [i, a, c] = n.u(t);
          if (r) {
            const [u, s] = n.m(i, a);
            (i += r),
              (a = re(u, s, n.F(i))),
              (a = Mn("month", a, 1, n.O(i), o));
          }
          return (
            e && ([i, a] = n.p(i, a, e)),
            (c = Mn("day", c, 1, n.B(i, a), o)),
            n.M(i, a, c)
          );
        }
        function Ia(n, t, r) {
          return (
            (n += Ir(r, zn)),
            (t += be(r, zn)) < 1
              ? (n--, (t += zn))
              : t > zn && (n++, (t -= zn)),
            [n, t]
          );
        }
        function Ta(n, t, r) {
          if (r) {
            if (((t += r), !Number.isSafeInteger(t))) throw new RangeError(Wn);
            if (r < 0) for (; t < 1; ) t += ut.call(this, --n);
            else {
              let e;
              for (; t > (e = ut.call(this, n)); ) (t -= e), n++;
            }
          }
          return [n, t];
        }
        function it(n, t) {
          return t ? { ...n, ...jr(L(n) + t * V) } : n;
        }
        function Gr(n, t, r) {
          const e = n(r.calendar);
          return Nt(r) ? [r, e, t(r.timeZone)] : [{ ...r, ...K }, e];
        }
        function eo(n) {
          return n ? ea : P;
        }
        function Vr(n) {
          return n ? O(no, n) : to;
        }
        function oo(n) {
          return n ? O(Iu, n) : Tu;
        }
        function Nt(n) {
          return n && n.epochNanoseconds;
        }
        function nr(n, t) {
          return n <= 6 - (Nt(t) ? 1 : 0);
        }
        function Na(n, t, r, e, o, i, a) {
          const c = n(mn(a).relativeTo),
            u = Math.max(ct(o), ct(i));
          if (nr(u, c))
            return S(
              at(
                ((p, g, M, v) => {
                  const T = yt(F(p), F(g), v ? -1 : 1);
                  if (!Number.isFinite(T[0])) throw new RangeError(Wn);
                  return { ...Z, ...Dt(T, M) };
                })(o, i, u, e),
              ),
            );
          if (!c) throw new RangeError(ce);
          e && (i = _(i));
          const [s, f, l] = Gr(t, r, c),
            d = Vr(l),
            h = oo(l),
            m = d(f, s, o);
          return S(h(f, s, d(f, m, i), u));
        }
        function nu(n, t, r, e, o) {
          const i = ct(e),
            [a, c, u, s, f] = ((j, Q, ln) => {
              j = Kt(j, le);
              let B = qc(j);
              const Mr = ln(j[Ac]);
              let At = Ur(j);
              const ih = Zt(j, 7);
              let jn = dr(j);
              if (B === void 0 && jn === void 0) throw new RangeError(_f);
              if (
                (jn == null && (jn = 0),
                B == null && (B = Math.max(jn, Q)),
                ra(B, jn),
                (At = $r(At, jn, 1)),
                At > 1 && jn > 5 && B !== jn)
              )
                throw new RangeError(
                  "For calendar units with roundingIncrement > 1, use largestUnit = smallestUnit",
                );
              return [B, jn, At, ih, Mr];
            })(o, i, n),
            l = Math.max(i, a);
          if (!f && l <= 6)
            return S(
              at(
                ((j, Q, ln, B, Mr) => {
                  const At = Wr(F(j), ln, B, Mr);
                  return { ...Z, ...Dt(At, Q) };
                })(e, a, c, u, s),
              ),
            );
          if (!Nt(f) && !e.sign) return e;
          if (!f) throw new RangeError(ce);
          const [d, h, m] = Gr(t, r, f),
            p = eo(m),
            g = Vr(m),
            M = oo(m),
            v = g(h, d, e);
          Nt(f) || (x(d), x(v));
          let T = M(h, d, v, a);
          const D = e.sign,
            R = $n(T);
          if (D && R && D !== R) throw new RangeError(jt);
          return (T = Ar(T, p(v), a, c, u, s, h, d, p, g)), S(T);
        }
        function tu(n) {
          return n.sign === -1 ? io(n) : n;
        }
        function io(n) {
          return S(_(n));
        }
        function _(n) {
          const t = {};
          for (const r of N) t[r] = -1 * n[r] || 0;
          return t;
        }
        function ru(n) {
          return !n.sign;
        }
        function $n(n, t = N) {
          let r = 0;
          for (const e of t) {
            const o = Math.sign(n[e]);
            if (o) {
              if (r && r !== o) throw new RangeError(xf);
              r = o;
            }
          }
          return r;
        }
        function at(n) {
          for (const t of Qf) Mn(t, n[t], -Hc, Hc, 1);
          return Da(hn(F(n), un)), n;
        }
        function Da(n) {
          if (!Number.isSafeInteger(n)) throw new RangeError($f);
        }
        function F(n, t = 6) {
          return Zi(n, t, N);
        }
        function Dt(n, t = 6) {
          const [r, e] = n,
            o = Nr(e, t, N);
          if (((o[N[t]] += r * (E / wn[t])), !Number.isFinite(o[N[t]])))
            throw new RangeError(Wn);
          return o;
        }
        function Kr(n, t = 5) {
          return Nr(n, t, N);
        }
        function Ea(n) {
          return !!$n(n, $c);
        }
        function ct(n) {
          let t = 9;
          for (; t > 0 && !n[N[t]]; t--);
          return t;
        }
        function eu(n, t) {
          return [n, t];
        }
        function Ca(n) {
          const t = Math.floor(n / de) * de;
          return [t, t + de];
        }
        function ou(n) {
          const t = xn((n = Dr(n)));
          if (!t) throw new RangeError(G(n));
          let r;
          if (t.C) r = 0;
          else {
            if (!t.offset) throw new RangeError(G(n));
            r = st(t.offset);
          }
          return t.timeZone && fo(t.timeZone, 1), cn(Ce(Zr(t), r));
        }
        function iu(n) {
          const t = xn(k(n));
          if (!t) throw new RangeError(G(n));
          if (t.timeZone) return Ra(t, t.offset ? st(t.offset) : void 0);
          if (t.C) throw new RangeError(G(n));
          return Ya(t);
        }
        function au(n, t) {
          const r = xn(k(n));
          if (!r || !r.timeZone) throw new RangeError(G(n));
          const { offset: e } = r,
            o = e ? st(e) : void 0,
            [, i, a] = kr(t);
          return Ra(r, o, i, a);
        }
        function st(n) {
          const t = fo(n);
          if (t === void 0) throw new RangeError(G(n));
          return t;
        }
        function cu(n) {
          const t = xn(k(n));
          if (!t || t.C) throw new RangeError(G(n));
          return H(Sa(t));
        }
        function ao(n, t, r) {
          let e = xn(k(n));
          if (!e || e.C) throw new RangeError(G(n));
          return (
            t
              ? e.calendar === b &&
                (e =
                  e.isoYear === -271821 && e.isoMonth === 4
                    ? { ...e, isoDay: 20, ...K }
                    : { ...e, isoDay: 1, ...K })
              : r && e.calendar === b && (e = { ...e, isoYear: Sn }),
            Nn(e.k ? Sa(e) : Ya(e))
          );
        }
        function su(n, t) {
          const r = so(k(t));
          if (r) return co(r), Ot(Ee(rt(r)));
          const e = ao(t, 1);
          return Ot(Qt(n(e.calendar), e));
        }
        function co(n) {
          if (n.calendar !== b) throw new RangeError(Dn(n.calendar));
        }
        function uu(n, t) {
          const r = uo(k(t));
          if (r) return co(r), Lr(rt(r));
          const e = ao(t, 0, 1),
            { calendar: o } = e,
            i = n(o),
            [a, c, u] = i.u(e),
            [s, f] = i.m(a, c),
            [l, d] = i.R(s, f, u);
          return Lr(an(i.U(l, d, u)), o);
        }
        function fu(n) {
          let t,
            r = ((e) => {
              const o = Rl.exec(e);
              return o ? (Xr(o[10]), Fa(o)) : void 0;
            })(k(n));
          if (!r) {
            if (((r = xn(n)), !r)) throw new RangeError(G(n));
            if (!r.k) throw new RangeError(G(n));
            if (r.C) throw new RangeError(Dn("Z"));
            co(r);
          }
          if ((t = so(n)) && Vi(t)) throw new RangeError(G(n));
          if ((t = uo(n)) && Vi(t)) throw new RangeError(G(n));
          return pn(Mt(r, 1));
        }
        function lu(n) {
          const t = ((r) => {
            const e = jl.exec(r);
            return e
              ? ((o) => {
                  function i(f, l, d) {
                    let h = 0,
                      m = 0;
                    if ((d && ([h, u] = On(u, wn[d])), f !== void 0)) {
                      if (c) throw new RangeError(Dn(f));
                      (m = ((p) => {
                        const g = parseInt(p);
                        if (!Number.isFinite(g)) throw new RangeError(Dn(p));
                        return g;
                      })(f)),
                        (a = 1),
                        l && ((u = lo(l) * (wn[d] / un)), (c = 1));
                    }
                    return h + m;
                  }
                  let a = 0,
                    c = 0,
                    u = 0,
                    s = {
                      ...gt(N, [
                        i(o[2]),
                        i(o[3]),
                        i(o[4]),
                        i(o[5]),
                        i(o[6], o[7], 5),
                        i(o[8], o[9], 4),
                        i(o[10], o[11], 3),
                      ]),
                      ...Nr(u, 2, N),
                    };
                  if (!a) throw new RangeError(Ic(N));
                  return ho(o[1]) < 0 && (s = _(s)), s;
                })(e)
              : void 0;
          })(k(n));
          if (!t) throw new RangeError(G(n));
          return S(at(t));
        }
        function du(n) {
          const t = xn(n) || so(n) || uo(n);
          return t ? t.calendar : n;
        }
        function hu(n) {
          const t = xn(n);
          return (t && (t.timeZone || (t.C && mt) || t.offset)) || n;
        }
        function Ra(n, t, r = 0, e = 0) {
          const o = mo(n.timeZone),
            i = y(o);
          let a;
          return (
            Zr(n),
            (a = n.k ? ot(i, n, t, r, e, !i.j, n.C) : Un(i, n)),
            z(a, o, oe(n.calendar))
          );
        }
        function Sa(n) {
          return ja(x(Zr(n)));
        }
        function Ya(n) {
          return ja(an(rt(n)));
        }
        function ja(n) {
          return { ...n, calendar: oe(n.calendar) };
        }
        function xn(n) {
          const t = Cl.exec(n);
          return t
            ? ((r) => {
                const e = r[10],
                  o = (e || "").toUpperCase() === "Z";
                return {
                  isoYear: Pa(r),
                  isoMonth: parseInt(r[4]),
                  isoDay: parseInt(r[5]),
                  ...Fa(r.slice(5)),
                  ...Xr(r[16]),
                  k: !!r[6],
                  C: o,
                  offset: o ? void 0 : e,
                };
              })(t)
            : void 0;
        }
        function so(n) {
          const t = Dl.exec(n);
          return t
            ? ((r) => ({
                isoYear: Pa(r),
                isoMonth: parseInt(r[4]),
                isoDay: 1,
                ...Xr(r[5]),
              }))(t)
            : void 0;
        }
        function uo(n) {
          const t = El.exec(n);
          return t
            ? ((r) => ({
                isoYear: Sn,
                isoMonth: parseInt(r[1]),
                isoDay: parseInt(r[2]),
                ...Xr(r[3]),
              }))(t)
            : void 0;
        }
        function fo(n, t) {
          const r = Sl.exec(n);
          return r
            ? ((e, o) => {
                const i = e[4] || e[5];
                if (o && i) throw new RangeError(Dn(i));
                return ((a) => {
                  if (Math.abs(a) >= E) throw new RangeError(Zf);
                  return a;
                })(
                  (Ct(e[2]) * ue +
                    Ct(e[3]) * se +
                    Ct(e[4]) * un +
                    lo(e[5] || "")) *
                    ho(e[1]),
                );
              })(r, t)
            : void 0;
        }
        function Pa(n) {
          const t = ho(n[1]),
            r = parseInt(n[2] || n[3]);
          if (t < 0 && !r) throw new RangeError(Dn(-0));
          return t * r;
        }
        function Fa(n) {
          const t = Ct(n[3]);
          return {
            ...Sr(lo(n[4] || ""))[0],
            isoHour: Ct(n[1]),
            isoMinute: Ct(n[2]),
            isoSecond: t === 60 ? 59 : t,
          };
        }
        function Xr(n) {
          let t, r;
          const e = [];
          if (
            (n.replace(Yl, (o, i, a) => {
              const c = !!i,
                [u, s] = a.split("=").reverse();
              if (s) {
                if (s === "u-ca") e.push(u), t || (t = c);
                else if (c || /[A-Z]/.test(s)) throw new RangeError(Dn(o));
              } else {
                if (r) throw new RangeError(Dn(o));
                r = u;
              }
              return "";
            }),
            e.length > 1 && t)
          )
            throw new RangeError(Dn(n));
          return { timeZone: r, calendar: e[0] || b };
        }
        function lo(n) {
          return parseInt(n.padEnd(9, "0"));
        }
        function Et(n) {
          return new RegExp(`^${n}$`, "i");
        }
        function ho(n) {
          return n && n !== "+" ? -1 : 1;
        }
        function Ct(n) {
          return n === void 0 ? 0 : parseInt(n);
        }
        function mu(n) {
          return mo(k(n));
        }
        function mo(n) {
          const t = po(n);
          return typeof t == "number"
            ? It(t)
            : t
              ? ((r) => {
                  if (Zl.test(r)) throw new RangeError(Ec(r));
                  if (Fl.test(r)) throw new RangeError(Ff);
                  return r
                    .toLowerCase()
                    .split("/")
                    .map((e, o) =>
                      (e.length <= 3 || /\d/.test(e)) && !/etc|yap/.test(e)
                        ? e.toUpperCase()
                        : e.replace(/baja|dumont|[a-z]+/g, (i, a) =>
                            (i.length <= 2 && !o) || i === "in" || i === "chat"
                              ? i.toUpperCase()
                              : i.length > 2 || !a
                                ? Fi(i).replace(
                                    /island|noronha|murdo|rivadavia|urville/,
                                    Fi,
                                  )
                                : i,
                          ),
                    )
                    .join("/");
                })(n)
              : mt;
        }
        function Za(n) {
          const t = po(n);
          return typeof t == "number"
            ? t
            : t
              ? t.resolvedOptions().timeZone
              : mt;
        }
        function po(n) {
          const t = fo((n = n.toUpperCase()), 1);
          return t !== void 0 ? t : n !== mt ? Pl(n) : void 0;
        }
        function ka(n, t) {
          return rn(n.epochNanoseconds, t.epochNanoseconds);
        }
        function Ba(n, t) {
          return rn(n.epochNanoseconds, t.epochNanoseconds);
        }
        function pu(n, t, r, e, o, i) {
          const a = n(mn(i).relativeTo),
            c = Math.max(ct(e), ct(o));
          if (ji(N, e, o)) return 0;
          if (nr(c, a)) return rn(F(e), F(o));
          if (!a) throw new RangeError(ce);
          const [u, s, f] = Gr(t, r, a),
            l = eo(f),
            d = Vr(f);
          return rn(l(d(s, u, e)), l(d(s, u, o)));
        }
        function Ua(n, t) {
          return Rt(n, t) || go(n, t);
        }
        function Rt(n, t) {
          return Pn(L(n), L(t));
        }
        function go(n, t) {
          return Pn(Zn(n), Zn(t));
        }
        function gu(n, t) {
          return !ka(n, t);
        }
        function wu(n, t) {
          return (
            !Ba(n, t) &&
            !!$a(n.timeZone, t.timeZone) &&
            n.calendar === t.calendar
          );
        }
        function yu(n, t) {
          return !Ua(n, t) && n.calendar === t.calendar;
        }
        function vu(n, t) {
          return !Rt(n, t) && n.calendar === t.calendar;
        }
        function Mu(n, t) {
          return !Rt(n, t) && n.calendar === t.calendar;
        }
        function bu(n, t) {
          return !Rt(n, t) && n.calendar === t.calendar;
        }
        function Ou(n, t) {
          return !go(n, t);
        }
        function $a(n, t) {
          if (n === t) return 1;
          try {
            return Za(n) === Za(t);
          } catch {}
        }
        function xa(n, t, r, e) {
          const o = bt(n, e, 3, 5),
            i = Qr(t.epochNanoseconds, r.epochNanoseconds, ...o);
          return S(n ? _(i) : i);
        }
        function La(n, t, r, e, o, i) {
          const a = te(e.calendar, o.calendar),
            [c, u, s, f] = bt(r, i, 5),
            l = e.epochNanoseconds,
            d = o.epochNanoseconds,
            h = rn(d, l);
          let m;
          if (h)
            if (c < 6) m = Qr(l, d, c, u, s, f);
            else {
              const p = t(Du(e.timeZone, o.timeZone)),
                g = n(a);
              (m = za(g, p, e, o, h, c, i)),
                (m = Ar(m, d, c, u, s, f, g, e, ea, O(no, p)));
            }
          else m = Z;
          return S(r ? _(m) : m);
        }
        function _a(n, t, r, e, o) {
          const i = te(r.calendar, e.calendar),
            [a, c, u, s] = bt(t, o, 6),
            f = P(r),
            l = P(e),
            d = rn(l, f);
          let h;
          if (d)
            if (a <= 6) h = Qr(f, l, a, c, u, s);
            else {
              const m = n(i);
              (h = Ha(m, r, e, d, a, o)),
                (h = Ar(h, l, a, c, u, s, m, r, P, to));
            }
          else h = Z;
          return S(t ? _(h) : h);
        }
        function Aa(n, t, r, e, o) {
          const i = te(r.calendar, e.calendar);
          return qa(t, () => n(i), r, e, ...bt(t, o, 6, 9, 6));
        }
        function Wa(n, t, r, e, o) {
          const i = te(r.calendar, e.calendar),
            a = bt(t, o, 9, 9, 8),
            c = n(i),
            u = Qt(c, r),
            s = Qt(c, e);
          return u.isoYear === s.isoYear &&
            u.isoMonth === s.isoMonth &&
            u.isoDay === s.isoDay
            ? S(Z)
            : qa(t, () => c, an(u), an(s), ...a, 8);
        }
        function qa(n, t, r, e, o, i, a, c, u = 6) {
          const s = P(r),
            f = P(e);
          if (s === void 0 || f === void 0) throw new RangeError(Wn);
          let l;
          if (rn(f, s))
            if (o === 6) l = Qr(s, f, o, i, a, c);
            else {
              const d = t();
              (l = d.h(r, e, o)),
                (i === u && a === 1) || (l = Ar(l, f, o, i, a, c, d, r, P, Hr));
            }
          else l = Z;
          return S(n ? _(l) : l);
        }
        function Ja(n, t, r, e) {
          const [o, i, a, c] = bt(n, e, 5, 5),
            u = Bn(wo(t, r), Xt(i, a), c),
            s = { ...Z, ...Kr(u, o) };
          return S(n ? _(s) : s);
        }
        function Iu(n, t, r, e, o, i) {
          const a = rn(e.epochNanoseconds, r.epochNanoseconds);
          return a
            ? o < 6
              ? Ga(r.epochNanoseconds, e.epochNanoseconds, o)
              : za(t, n, r, e, a, o, i)
            : Z;
        }
        function Tu(n, t, r, e, o) {
          const i = P(t),
            a = P(r),
            c = rn(a, i);
          return c ? (e <= 6 ? Ga(i, a, e) : Ha(n, t, r, c, e, o)) : Z;
        }
        function za(n, t, r, e, o, i, a) {
          const [c, u, s] = Nu(t, r, e, o);
          var f, l;
          return {
            ...(i === 6
              ? ((f = c), (l = u), { ...Z, days: Va(f, l) })
              : n.h(c, u, i, a)),
            ...Kr(s),
          };
        }
        function Ha(n, t, r, e, o, i) {
          const [a, c, u] = ((s, f, l) => {
            let d = f,
              h = wo(s, f);
            return (
              Math.sign(h) === -l && ((d = it(f, -l)), (h += E * l)), [s, d, h]
            );
          })(t, r, e);
          return { ...n.h(a, c, o, i), ...Kr(u) };
        }
        function Nu(n, t, r, e) {
          function o() {
            return (
              (l = { ...it(c, s++ * -e), ...a }),
              (d = Tt(n, l)),
              rn(u, d) === -e
            );
          }
          const i = A(t, n),
            a = tn(fn, i),
            c = A(r, n),
            u = r.epochNanoseconds;
          let s = 0;
          const f = wo(i, c);
          let l, d;
          if ((Math.sign(f) === -e && s++, o() && (e === -1 || o())))
            throw new RangeError(jt);
          const h = hn(dn(d, u));
          return [i, l, h];
        }
        function Qr(n, t, r, e, o, i) {
          return { ...Z, ...Dt(Wr(dn(n, t), e, o, i), r) };
        }
        function Ga(n, t, r) {
          return { ...Z, ...Dt(dn(n, t), r) };
        }
        function Va(n, t) {
          return ne(L(n), L(t));
        }
        function ne(n, t) {
          return Math.trunc((t - n) / V);
        }
        function wo(n, t) {
          return Zn(t) - Zn(n);
        }
        function Ka(n, t, r) {
          if (r <= 7) {
            let u = 0,
              s = Va({ ...n, ...K }, { ...t, ...K });
            return r === 7 && ([u, s] = Fn(s, 7)), { ...Z, weeks: u, days: s };
          }
          const e = this.u(n),
            o = this.u(t);
          let [i, a, c] = ((u, s, f, l, d, h, m) => {
            let p = d - s,
              g = h - f,
              M = m - l;
            if (p || g) {
              const v = Math.sign(p || g);
              let T = u.B(d, h),
                D = 0;
              if (Math.sign(M) === -v) {
                const R = T;
                ([d, h] = u.p(d, h, -v)),
                  (p = d - s),
                  (g = h - f),
                  (T = u.B(d, h)),
                  (D = v < 0 ? -R : T);
              }
              if (((M = m - Math.min(l, T) + D), p)) {
                const [R, j] = u.m(s, f),
                  [Q, ln] = u.m(d, h);
                if (
                  ((g = Q - R || Number(ln) - Number(j)), Math.sign(g) === -v)
                ) {
                  const B = v < 0 && -u.O(d);
                  (p = (d -= v) - s),
                    (g = h - re(R, j, u.F(d)) + (B || u.O(d)));
                }
              }
            }
            return [p, g, M];
          })(this, ...e, ...o);
          return (
            r === 8 && ((a += this.q(i, e[0])), (i = 0)),
            { ...Z, years: i, months: a, days: c }
          );
        }
        function Xa(n) {
          return n * zn;
        }
        function Qa(n, t) {
          const r = t + n,
            e = Math.sign(n),
            o = e < 0 ? -1 : 0;
          let i = 0;
          for (let a = t; a !== r; a += e) i += ut.call(this, a + o);
          return i;
        }
        function te(n, t) {
          if (n !== t) throw new RangeError(Uo);
          return n;
        }
        function Du(n, t) {
          if (!$a(n, t)) throw new RangeError(Cc);
          return n;
        }
        function nc(n) {
          return this.I(n)[0];
        }
        function tc(n) {
          return this.I(n)[1];
        }
        function yo(n) {
          const [t] = this.u(n);
          return this.L(t);
        }
        function vo(n) {
          const [t] = this.u(n);
          return this.O(t);
        }
        function Mo(n) {
          const [t, r] = this.u(n);
          return this.B(t, r);
        }
        function bo(n) {
          const [t] = this.u(n);
          return this.G(t);
        }
        function Oo(n) {
          const [t] = this.u(n);
          return ne(this.M(t), L(n)) + 1;
        }
        function Io(n) {
          const t = kl.exec(n);
          if (!t) throw new RangeError(jf(n));
          return [parseInt(t[1]), !!t[2]];
        }
        function tr(n, t) {
          return "M" + sn(n) + (t ? "L" : "");
        }
        function re(n, t, r) {
          return n + (t || (r && n >= r) ? 1 : 0);
        }
        function To(n, t) {
          return n - (t && n >= t ? 1 : 0);
        }
        function rc(n, t) {
          return (t + n) * (Math.sign(t) || 1) || 0;
        }
        function No(n) {
          return Bc[oc(n)];
        }
        function ec(n) {
          return Gf[oc(n)];
        }
        function oc(n) {
          return ft(n.id || b);
        }
        function Eu(n) {
          function t(o) {
            return ((i, a) => ({
              ...ic(i, a),
              V: i.month,
              day: parseInt(i.day),
            }))(Re(r, o), e);
          }
          const r = hi(n),
            e = ft(n);
          return { id: n, _: Cu(t), J: Ru(t) };
        }
        function Cu(n) {
          return nn((t) => {
            const r = L(t);
            return n(r);
          }, WeakMap);
        }
        function Ru(n) {
          const t = n(0).year - ol;
          return nn((r) => {
            let e,
              o = tt(r - t),
              i = 0;
            const a = [],
              c = [];
            do o += 400 * V;
            while ((e = n(o)).year <= r);
            do
              if (
                ((o += (1 - e.day) * V),
                e.year === r && (a.push(o), c.push(e.V)),
                (o -= V),
                ++i > 100 || o < -ni)
              )
                throw new RangeError(jt);
            while ((e = n(o)).year >= r);
            return { K: a.reverse(), X: Rc(c.reverse()) };
          });
        }
        function ic(n, t) {
          let r,
            e,
            o = ac(n);
          if (n.era) {
            const i = Bc[t],
              a = Uc[t] || {};
            i !== void 0 &&
              ((r =
                t === "islamic"
                  ? "ah"
                  : n.era
                      .normalize("NFD")
                      .toLowerCase()
                      .replace(/[^a-z0-9]/g, "")),
              r === "bc" || r === "b"
                ? (r = "bce")
                : r === "ad" || r === "a"
                  ? (r = "ce")
                  : r === "beforeroc" && (r = "broc"),
              (r = a[r] || r),
              (e = o),
              (o = rc(e, i[r] || 0)));
          }
          return { era: r, eraYear: e, year: o };
        }
        function ac(n) {
          return parseInt(n.relatedYear || n.year);
        }
        function cc(n) {
          return this._(n).day;
        }
        function gn(n) {
          const { year: t, V: r, day: e } = this._(n),
            { X: o } = this.J(t);
          return [t, o[r] + 1, e];
        }
        function Do(n, t, r) {
          return jr(St.call(this, n, t, r));
        }
        function St(n, t = 1, r = 1) {
          return this.J(n).K[t - 1] + (r - 1) * V;
        }
        function ee(n, t) {
          const r = Yt.call(this, n);
          return [To(t, r), r === t];
        }
        function Yt(n) {
          const t = fc(this, n),
            r = fc(this, n - 1),
            e = t.length;
          if (e > r.length) {
            const o = ec(this);
            if (o < 0) return -o;
            for (let i = 0; i < e; i++) if (t[i] !== r[i]) return i + 1;
          }
        }
        function sc(n) {
          const t = rr.call(this, n);
          return t > rr.call(this, n - 1) && t > rr.call(this, n + 1);
        }
        function rr(n) {
          return ne(St.call(this, n), St.call(this, n + 1));
        }
        function er(n, t) {
          const { K: r } = this.J(n);
          let e = t + 1,
            o = r;
          return (
            e > r.length && ((e = 1), (o = this.J(n + 1).K)),
            ne(r[t - 1], o[e - 1])
          );
        }
        function ut(n) {
          return this.J(n).K.length;
        }
        function uc(n) {
          const t = this._(n);
          return [t.era, t.eraYear];
        }
        function Eo(n, t, r) {
          const e =
            this.id && ft(this.id) === "chinese"
              ? ((s, f, l) => {
                  if (f)
                    switch (s) {
                      case 1:
                        return 1651;
                      case 2:
                        return l < 30 ? 1947 : 1765;
                      case 3:
                        return l < 30 ? 1966 : 1955;
                      case 4:
                        return l < 30 ? 1963 : 1944;
                      case 5:
                        return l < 30 ? 1971 : 1952;
                      case 6:
                        return l < 30 ? 1960 : 1941;
                      case 7:
                        return l < 30 ? 1968 : 1938;
                      case 8:
                        return l < 30 ? 1957 : 1718;
                      case 9:
                        return 1832;
                      case 10:
                        return 1870;
                      case 11:
                        return 1814;
                      case 12:
                        return 1890;
                    }
                  return 1972;
                })(n, t, r)
              : Sn;
          let [o, i, a] = gn.call(this, {
            isoYear: e,
            isoMonth: zn,
            isoDay: 31,
          });
          const c = Yt.call(this, o),
            u = i === c;
          (Pn(n, To(i, c)) || Pn(Number(t), Number(u)) || Pn(r, a)) === 1 &&
            o--;
          for (let s = 0; s < 100; s++) {
            const f = o - s,
              l = Yt.call(this, f),
              d = re(n, t, l);
            if (t === (d === l) && r <= er.call(this, f, d)) return [f, d];
          }
        }
        function fc(n, t) {
          return Object.keys(n.J(t).X);
        }
        function or(n) {
          return oe(k(n));
        }
        function oe(n) {
          if ((n = n.toLowerCase()) !== b && n !== Ft) {
            const t = hi(n).resolvedOptions().calendar;
            if (ft(n) !== ft(t)) throw new RangeError(Dc(n));
            return t;
          }
          return n;
        }
        function ft(n) {
          return n === "islamicc" && (n = "islamic"), n.split("-")[0];
        }
        function lc(n, t) {
          return (r) =>
            r === b
              ? n
              : r === Ft || r === qn
                ? Object.assign(Object.create(n), { id: r })
                : Object.assign(Object.create(t), Bl(r));
        }
        function Su(n, t, r, e) {
          const o = Ln(r, e, Rn, [], Pc);
          if (o.timeZone !== void 0) {
            const i = r.ee(o),
              a = ir(o),
              c = n(o.timeZone);
            return {
              epochNanoseconds: ot(
                t(c),
                { ...i, ...a },
                o.offset !== void 0 ? st(o.offset) : void 0,
              ),
              timeZone: c,
            };
          }
          return { ...r.ee(o), ...K };
        }
        function Yu(n, t, r, e, o, i) {
          const a = Ln(r, o, Rn, Yc, Pc),
            c = n(a.timeZone),
            [u, s, f] = kr(i),
            l = r.ee(a, xr(u)),
            d = ir(a, u);
          return z(
            ot(
              t(c),
              { ...l, ...d },
              a.offset !== void 0 ? st(a.offset) : void 0,
              s,
              f,
            ),
            c,
            e,
          );
        }
        function ju(n, t, r) {
          const e = Ln(n, t, Rn, [], Cn),
            o = I(r);
          return H(x({ ...n.ee(e, xr(o)), ...ir(e, o) }));
        }
        function Pu(n, t, r, e = []) {
          const o = Ln(n, t, Rn, e);
          return n.ee(o, r);
        }
        function Fu(n, t, r, e) {
          const o = Ln(n, t, zo, e);
          return n.ne(o, r);
        }
        function Zu(n, t, r, e) {
          const o = Ln(n, r, Rn, sr);
          return (
            t &&
              o.month !== void 0 &&
              o.monthCode === void 0 &&
              o.year === void 0 &&
              (o.year = Sn),
            n.te(o, e)
          );
        }
        function ku(n, t) {
          return pn(ir(on(n, _o, [], 1), I(t)));
        }
        function Bu(n) {
          const t = on(n, Ho);
          return S(at({ ...Z, ...t }));
        }
        function Ln(n, t, r, e = [], o = []) {
          return on(t, [...n.fields(r), ...o].sort(), e);
        }
        function on(n, t, r, e = !r) {
          const o = {};
          let i,
            a = 0;
          for (const c of t) {
            if (c === i) throw new RangeError(Tf(c));
            if (c === "constructor" || c === "__proto__")
              throw new RangeError(If(c));
            let u = n[c];
            if (u !== void 0) (a = 1), ls[c] && (u = ls[c](u, c)), (o[c] = u);
            else if (r) {
              if (r.includes(c)) throw new TypeError(ko(c));
              o[c] = kc[c];
            }
            i = c;
          }
          if (e && !a) throw new TypeError(Ic(t));
          return o;
        }
        function ir(n, t) {
          return Mt(mi({ ...kc, ...n }), t);
        }
        function Uu(n, t, r, e, o) {
          const { calendar: i, timeZone: a } = r,
            c = n(i),
            u = t(a),
            s = [...c.fields(Rn), ...jc].sort(),
            f = ((M) => {
              const v = A(M, y),
                T = It(v.offsetNanoseconds),
                D = pe(M.calendar),
                [R, j, Q] = D.u(v),
                [ln, B] = D.m(R, j),
                Mr = tr(ln, B);
              return { ...ld(v), year: R, monthCode: Mr, day: Q, offset: T };
            })(r),
            l = on(e, s),
            d = c.oe(f, l),
            h = { ...f, ...l },
            [m, p, g] = kr(o, 2);
          return z(
            ot(u, { ...c.ee(d, xr(m)), ...Mt(mi(h), m) }, st(h.offset), p, g),
            a,
            i,
          );
        }
        function $u(n, t, r, e) {
          const o = n(t.calendar),
            i = [...o.fields(Rn), ...Cn].sort(),
            a = {
              ...gc((c = t)),
              hour: c.isoHour,
              minute: c.isoMinute,
              second: c.isoSecond,
              millisecond: c.isoMillisecond,
              microsecond: c.isoMicrosecond,
              nanosecond: c.isoNanosecond,
            };
          var c;
          const u = on(r, i),
            s = I(e),
            f = o.oe(a, u),
            l = { ...a, ...u };
          return H(x({ ...o.ee(f, xr(s)), ...Mt(mi(l), s) }));
        }
        function xu(n, t, r, e) {
          const o = n(t.calendar),
            i = o.fields(Rn).sort(),
            a = gc(t),
            c = on(r, i),
            u = o.oe(a, c);
          return o.ee(u, e);
        }
        function Lu(n, t, r, e) {
          const o = n(t.calendar),
            i = o.fields(zo).sort(),
            a = ((s) => {
              const f = pe(s.calendar),
                [l, d] = f.u(s),
                [h, m] = f.m(l, d);
              return { year: l, monthCode: tr(h, m) };
            })(t),
            c = on(r, i),
            u = o.oe(a, c);
          return o.ne(u, e);
        }
        function _u(n, t, r, e) {
          const o = n(t.calendar),
            i = o.fields(Rn).sort(),
            a = ((s) => {
              const f = pe(s.calendar),
                [l, d, h] = f.u(s),
                [m, p] = f.m(l, d);
              return { monthCode: tr(m, p), day: h };
            })(t),
            c = on(r, i),
            u = o.oe(a, c);
          return o.te(u, e);
        }
        function Au(n, t, r) {
          return pn(
            ((e, o, i) => ir({ ...tn(_o, e), ...on(o, _o) }, I(i)))(n, t, r),
          );
        }
        function Wu(n, t) {
          return S(((r = n), (e = t), at({ ...r, ...on(e, Ho) })));
          var r, e;
        }
        function Co(n, t) {
          const r = Ln(n, t, Zc);
          return n.te(r);
        }
        function Ro(n, t, r) {
          const e = Ln(n, t, Fc);
          return n.ne(e, r);
        }
        function dc(n, t, r, e, o) {
          (t = tn((r = n.fields(r)), t)), (e = on(e, (o = n.fields(o)), []));
          let i = n.oe(t, e);
          return (i = on(i, [...r, ...o].sort(), [])), n.ee(i);
        }
        function hc(n, t) {
          const r = I(t),
            e = So(this, n),
            o = ae(this, n, e, r),
            i = Yo(this, n, o, e, r);
          return Nn(an(this.U(e, o, i)), this.id || b);
        }
        function mc(n, t) {
          const r = I(t),
            e = So(this, n),
            o = ae(this, n, e, r);
          return Ot(Ee(this.U(e, o, 1)), this.id || b);
        }
        function pc(n, t) {
          const r = I(t);
          let e,
            o,
            i,
            a =
              n.eraYear !== void 0 || n.year !== void 0 ? So(this, n) : void 0;
          const c = !this.id;
          if ((a === void 0 && c && (a = Sn), a !== void 0)) {
            const l = ae(this, n, a, r);
            e = Yo(this, n, l, a, r);
            const d = this.F(a);
            (o = To(l, d)), (i = l === d);
          } else {
            if (n.monthCode === void 0) throw new TypeError(Nc);
            if (
              (([o, i] = Io(n.monthCode)),
              this.id && this.id !== Ft && this.id !== qn)
            )
              if (this.id && ft(this.id) === "coptic" && r === 0) {
                const l = i || o !== 13 ? 30 : 6;
                (e = n.day), (e = Jt(e, 1, l));
              } else if (this.id && ft(this.id) === "chinese" && r === 0) {
                const l =
                  !i || (o !== 1 && o !== 9 && o !== 10 && o !== 11 && o !== 12)
                    ? 30
                    : 29;
                (e = n.day), (e = Jt(e, 1, l));
              } else e = n.day;
            else e = Yo(this, n, ae(this, n, Sn, r), Sn, r);
          }
          const u = this.R(o, i, e);
          if (!u) throw new RangeError("Cannot guess year");
          const [s, f] = u;
          return Lr(an(this.U(s, f, e)), this.id || b);
        }
        function ie(n) {
          return No(this) && n.includes("year") ? [...n, ...Ao] : n;
        }
        function lt(n, t) {
          const r = Object.assign(Object.create(null), n);
          return (
            jo(r, t, Jo),
            No(this) && (jo(r, t, zf), this.id === qn && jo(r, t, Hf, Ao)),
            r
          );
        }
        function So(n, t) {
          const r = No(n),
            e = Uc[n.id || ""] || {};
          let { era: o, eraYear: i, year: a } = t;
          if (o !== void 0 || i !== void 0) {
            if (o === void 0 || i === void 0) throw new TypeError(Cf);
            if (!r) throw new RangeError(Ef);
            const c = r[e[o] || o];
            if (c === void 0) throw new RangeError(Sf(o));
            const u = rc(i, c);
            if (a !== void 0 && a !== u) throw new RangeError(Rf);
            a = u;
          } else if (a === void 0) throw new TypeError(Yf(r));
          return a;
        }
        function ae(n, t, r, e) {
          let { month: o, monthCode: i } = t;
          if (i !== void 0) {
            const a = ((c, u, s, f) => {
              const l = c.F(s),
                [d, h] = Io(u);
              let m = re(d, h, l);
              if (h) {
                const p = ec(c);
                if (p === void 0) throw new RangeError(cr);
                if (p > 0) {
                  if (m > p) throw new RangeError(cr);
                  if (l === void 0) {
                    if (f === 1) throw new RangeError(cr);
                    m--;
                  }
                } else {
                  if (m !== -p) throw new RangeError(cr);
                  if (l === void 0 && f === 1) throw new RangeError(cr);
                }
              }
              return m;
            })(n, i, r, e);
            if (o !== void 0 && o !== a) throw new RangeError(Pf);
            (o = a), (e = 1);
          } else if (o === void 0) throw new TypeError(Nc);
          return Mn("month", o, 1, n.O(r), e);
        }
        function Yo(n, t, r, e, o) {
          return J(t, "day", 1, n.B(e, r), o);
        }
        function jo(n, t, r, e) {
          let o = 0;
          const i = [];
          for (const a of r) t[a] !== void 0 ? (o = 1) : i.push(a);
          if ((Object.assign(n, t), o)) for (const a of e || i) delete n[a];
        }
        function gc(n) {
          const t = pe(n.calendar),
            [r, e, o] = t.u(n),
            [i, a] = t.m(r, e);
          return { year: r, monthCode: tr(i, a), day: o };
        }
        function qu(n) {
          return cn(en(Rr(Er(n))));
        }
        function Ju(n, t, r, e, o = b) {
          return z(en(Rr(Er(r))), t(e), n(o));
        }
        function zu(
          n,
          t,
          r,
          e,
          o = 0,
          i = 0,
          a = 0,
          c = 0,
          u = 0,
          s = 0,
          f = b,
        ) {
          return H(x(Zr(bn($, gt(fe, [t, r, e, o, i, a, c, u, s])))), n(f));
        }
        function Hu(n, t, r, e, o = b) {
          return Nn(
            an(rt(bn($, { isoYear: t, isoMonth: r, isoDay: e }))),
            n(o),
          );
        }
        function Gu(n, t, r, e = b, o = 1) {
          const i = $(t),
            a = $(r),
            c = n(e);
          return Ot(Ee(rt({ isoYear: i, isoMonth: a, isoDay: $(o) })), c);
        }
        function Vu(n, t, r, e = b, o = Sn) {
          const i = $(t),
            a = $(r),
            c = n(e);
          return Lr(an(rt({ isoYear: $(o), isoMonth: i, isoDay: a })), c);
        }
        function Ku(n = 0, t = 0, r = 0, e = 0, o = 0, i = 0) {
          return pn(Mt(bn($, gt(fn, [n, t, r, e, o, i])), 1));
        }
        function Xu(
          n = 0,
          t = 0,
          r = 0,
          e = 0,
          o = 0,
          i = 0,
          a = 0,
          c = 0,
          u = 0,
          s = 0,
        ) {
          return S(at(bn(Cr, gt(N, [n, t, r, e, o, i, a, c, u, s]))));
        }
        function Qu(n, t, r = b) {
          return z(n.epochNanoseconds, t, r);
        }
        function nf(n) {
          return cn(n.epochNanoseconds);
        }
        function wc(n, t) {
          return H(A(t, n));
        }
        function yc(n, t) {
          return Nn(A(t, n));
        }
        function hh(n, t, r) {
          return Ro(n(t.calendar), r);
        }
        function mh(n, t, r) {
          return Co(n(t.calendar), r);
        }
        function vc(n, t) {
          return pn(A(t, n));
        }
        function tf(n, t, r, e) {
          const o = ((i, a, c, u) => {
            const s = ((f) => zc(mn(f)))(u);
            return Tt(i(a), c, s);
          })(n, r, t, e);
          return z(en(o), r, t.calendar);
        }
        function ph(n, t, r) {
          const e = n(t.calendar);
          return Ot({ ...t, ...Ro(e, r) });
        }
        function gh(n, t, r) {
          return Co(n(t.calendar), r);
        }
        function rf(n, t, r, e, o) {
          const i = n(o.timeZone),
            a = o.plainTime,
            c = a !== void 0 ? t(a) : void 0,
            u = r(i);
          let s;
          return (
            (s = c ? Tt(u, { ...e, ...c }) : Un(u, { ...e, ...K })),
            z(s, i, e.calendar)
          );
        }
        function ef(n, t = K) {
          return H(x({ ...n, ...t }));
        }
        function of(n, t, r) {
          return Ro(n(t.calendar), r);
        }
        function af(n, t, r) {
          return Co(n(t.calendar), r);
        }
        function cf(n, t, r, e) {
          return ((o, i, a) => dc(o, i, Fc, wt(a), sr))(n(t.calendar), r, e);
        }
        function sf(n, t, r, e) {
          return ((o, i, a) => dc(o, i, Zc, wt(a), Wo))(n(t.calendar), r, e);
        }
        function wh(n, t, r, e, o) {
          const i = wt(o),
            a = t(i.re),
            c = n(i.timeZone);
          return z(Tt(r(c), { ...a, ...e }), c, a.calendar);
        }
        function yh(n, t) {
          return H(x({ ...n, ...t }));
        }
        function vh(n) {
          return cn(en(Ht(Cr(n), un)));
        }
        function uf(n) {
          return cn(en(Ht(Cr(n), En)));
        }
        function Mh(n) {
          return cn(en(Rr(Er(n), ht)));
        }
        function ff(n) {
          return cn(en(Rr(Er(n))));
        }
        function dt(n, t, r) {
          const e = new Set(r);
          return (o, i) => {
            const a = r && Yi(o, r);
            if (
              !Yi(
                (o = ((c, u) => {
                  const s = {};
                  for (const f in u) c.has(f) || (s[f] = u[f]);
                  return s;
                })(e, o)),
                n,
              )
            ) {
              if (i && a) throw new TypeError("Invalid formatting options");
              o = { ...t, ...o };
            }
            return (
              r &&
                ((o.timeZone = mt),
                ["full", "long"].includes(o.ie) && (o.ie = "medium")),
              o
            );
          };
        }
        function _n(n, t = Mc, r = 0) {
          const [e, , , o] = n;
          return (i, a = Sd, ...c) => {
            const u = t(o && o(...c), i, a, e, r),
              s = u.resolvedOptions();
            return [u, ...df(n, s, c)];
          };
        }
        function Mc(n, t, r, e, o) {
          if (((r = e(r, o)), n)) {
            if (r.timeZone !== void 0) throw new TypeError(qf);
            r.timeZone = n;
          }
          return new Jn(t, r);
        }
        function lf() {
          return (
            new Jn(void 0, { calendar: b }).resolvedOptions().calendar === b
          );
        }
        function df(n, t, r) {
          const [, e, o] = n;
          return r.map(
            (i) => (
              i.calendar &&
                ((a, c, u) => {
                  if ((u || a !== b) && a !== c) throw new RangeError(Uo);
                })(i.calendar, t.calendar, o),
              e(i, t)
            ),
          );
        }
        function hf(n, t, r) {
          const e = t.timeZone,
            o = n(e),
            i = { ...A(t, o), ...(r || K) };
          let a;
          return (
            (a = r ? ot(o, i, i.offsetNanoseconds, 2) : Un(o, i)),
            z(a, e, t.calendar)
          );
        }
        function bh(n, t, r) {
          const e = t.timeZone,
            o = n(e),
            i = { ...A(t, o), ...r },
            a = bc(t.calendar, r.calendar);
          return z(ot(o, i, i.offsetNanoseconds, 2), e, a);
        }
        function mf(n, t = K) {
          return H(x({ ...n, ...t }));
        }
        function Oh(n, t) {
          return H({ ...n, ...t }, bc(n.calendar, t.calendar));
        }
        function Po(n, t) {
          return { ...n, calendar: t };
        }
        function pf(n, t) {
          return { ...n, timeZone: t };
        }
        function bc(n, t) {
          if (n === t) return n;
          if (n === t || n === b) return t;
          if (t === b) return n;
          throw new RangeError(Uo);
        }
        function Fo(n) {
          const t = Zo();
          return vt(t, n.N(t));
        }
        function Zo() {
          return Ht(Date.now(), En);
        }
        function ar() {
          return new Jn().resolvedOptions().timeZone;
        }
        const gf = (n, t) => `Non-integer ${n}: ${t}`,
          wf = (n, t) => `Non-positive ${n}: ${t}`,
          yf = (n, t) => `Non-finite ${n}: ${t}`,
          vf = (n) => `Cannot convert bigint to ${n}`,
          Mf = (n) => `Invalid bigint: ${n}`,
          bf = "Cannot convert Symbol to string",
          Of = "Invalid object",
          Oc = (n, t, r, e, o) =>
            o
              ? Oc(n, o[t], o[r], o[e])
              : An(n, t) + `; must be between ${r}-${e}`,
          An = (n, t) => `Invalid ${n}: ${t}`,
          ko = (n) => `Missing ${n}`,
          If = (n) => `Invalid field ${n}`,
          Tf = (n) => `Duplicate field ${n}`,
          Ic = (n) => "No valid fields: " + n.join(),
          Nf = "Invalid bag",
          Tc = (n, t, r) => An(n, t) + "; must be " + Object.keys(r).join(),
          Df = "Cannot use valueOf",
          Bo = "Invalid calling context",
          Ef = "Forbidden era/eraYear",
          Cf = "Mismatching era/eraYear",
          Rf = "Mismatching year/eraYear",
          Sf = (n) => `Invalid era: ${n}`,
          Yf = (n) => "Missing year" + (n ? "/era/eraYear" : ""),
          jf = (n) => `Invalid monthCode: ${n}`,
          Pf = "Mismatching month/monthCode",
          Nc = "Missing month/monthCode",
          cr = "Invalid leap month",
          jt = "Invalid protocol results",
          Dc = (n) => An("Calendar", n),
          Uo = "Mismatching Calendars",
          Ih = "Calendar week operations forbidden",
          Ec = (n) => An("TimeZone", n),
          Cc = "Mismatching TimeZones",
          Ff = "Forbidden ICU TimeZone",
          Zf = "Out-of-bounds offset",
          kf = "Out-of-bounds TimeZone gap",
          Bf = "Invalid TimeZone offset",
          Uf = "Ambiguous offset",
          Wn = "Out-of-bounds date",
          $f = "Out-of-bounds duration",
          xf = "Cannot mix duration signs",
          ce = "Missing relativeTo",
          Lf = "Cannot use large units",
          _f = "Required smallestUnit or largestUnit",
          Af = "smallestUnit > largestUnit",
          G = (n) => `Cannot parse: ${n}`,
          Dn = (n) => `Invalid substring: ${n}`,
          Wf = (n) => `Cannot format ${n}`,
          $o = "Mismatching types for formatting",
          qf = "Cannot specify TimeZone",
          Rc = O(br, (n, t) => t),
          Pt = O(br, (n, t, r) => r),
          sn = O(Or, 2),
          xo = {
            nanosecond: 0,
            microsecond: 1,
            millisecond: 2,
            second: 3,
            minute: 4,
            hour: 5,
            day: 6,
            week: 7,
            month: 8,
            year: 9,
          },
          Lo = Object.keys(xo),
          V = 864e5,
          Sc = 1e3,
          ht = 1e3,
          En = 1e6,
          un = 1e9,
          se = 6e10,
          ue = 36e11,
          E = 864e11,
          wn = [1, ht, En, un, se, ue, E],
          Cn = Lo.slice(0, 6),
          _o = qt(Cn),
          Jf = ["offset"],
          Yc = ["timeZone"],
          jc = Cn.concat(Jf),
          Pc = jc.concat(Yc),
          Ao = ["era", "eraYear"],
          zf = Ao.concat(["year"]),
          Wo = ["year"],
          qo = ["monthCode"],
          Jo = ["month"].concat(qo),
          sr = ["day"],
          zo = Jo.concat(Wo),
          Fc = qo.concat(Wo),
          Rn = sr.concat(zo),
          Hf = sr.concat(Jo),
          Zc = sr.concat(qo),
          kc = Pt(Cn, 0),
          b = "iso8601",
          Ft = "gregory",
          qn = "japanese",
          Bc = {
            [Ft]: { "gregory-inverse": -1, gregory: 0 },
            [qn]: {
              "japanese-inverse": -1,
              japanese: 0,
              meiji: 1867,
              taisho: 1911,
              showa: 1925,
              heisei: 1988,
              reiwa: 2018,
            },
            ethiopic: { ethioaa: 0, ethiopic: 5500 },
            coptic: { "coptic-inverse": -1, coptic: 0 },
            roc: { "roc-inverse": -1, roc: 0 },
            buddhist: { be: 0 },
            islamic: { ah: 0 },
            indian: { saka: 0 },
            persian: { ap: 0 },
          },
          Uc = {
            [Ft]: { bce: "gregory-inverse", ce: "gregory" },
            [qn]: { bce: "japanese-inverse", ce: "japanese" },
            ethiopic: { era0: "ethioaa", era1: "ethiopic" },
            coptic: { era0: "coptic-inverse", era1: "coptic" },
            roc: { broc: "roc-inverse", minguo: "roc" },
          },
          Gf = { chinese: 13, dangi: 13, hebrew: -6 },
          k = O(Ie, "string"),
          Vf = O(Ie, "boolean"),
          Kf = O(Ie, "number"),
          N = Lo.map((n) => n + "s"),
          Ho = qt(N),
          Xf = N.slice(0, 6),
          $c = N.slice(6),
          Qf = $c.slice(1),
          nl = Rc(N),
          Z = Pt(N, 0),
          Go = Pt(Xf, 0),
          Vo = O(Pi, N),
          fn = [
            "isoNanosecond",
            "isoMicrosecond",
            "isoMillisecond",
            "isoSecond",
            "isoMinute",
            "isoHour",
          ],
          Ko = ["isoDay", "isoMonth", "isoYear"],
          fe = fn.concat(Ko),
          Xo = qt(Ko),
          xc = qt(fn),
          Lc = qt(fe),
          K = Pt(xc, 0),
          tl = O(Pi, fe),
          Qo = 1e8,
          ni = Qo * V,
          rl = [Qo, 0],
          el = [-Qo, 0],
          ur = 275760,
          fr = -271821,
          Jn = Intl.DateTimeFormat,
          ol = 1970,
          Sn = 1972,
          zn = 12,
          il = tt(1868, 9, 8),
          al = nn(Fs, WeakMap),
          le = "smallestUnit",
          ti = "unit",
          _c = "roundingMode",
          lr = "roundingIncrement",
          ri = "fractionalSecondDigits",
          Ac = "relativeTo",
          ei = "direction",
          Wc = { constrain: 0, reject: 1 },
          cl = Object.keys(Wc),
          sl = { compatible: 0, reject: 1, earlier: 2, later: 3 },
          ul = { reject: 0, use: 1, prefer: 2, ignore: 3 },
          fl = { auto: 0, never: 1, critical: 2, always: 3 },
          ll = { auto: 0, never: 1, critical: 2 },
          dl = { auto: 0, never: 1 },
          hl = {
            floor: 0,
            halfFloor: 1,
            ceil: 2,
            halfCeil: 3,
            trunc: 4,
            halfTrunc: 5,
            expand: 6,
            halfExpand: 7,
            halfEven: 8,
          },
          ml = { previous: -1, next: 1 },
          dr = O(Ze, le),
          qc = O(Ze, "largestUnit"),
          pl = O(Ze, ti),
          Jc = O(kn, "overflow", Wc),
          zc = O(kn, "disambiguation", sl),
          gl = O(kn, "offset", ul),
          oi = O(kn, "calendarName", fl),
          wl = O(kn, "timeZoneName", ll),
          yl = O(kn, "offset", dl),
          Zt = O(kn, _c, hl),
          ii = "PlainYearMonth",
          ai = "PlainMonthDay",
          hr = "PlainDate",
          kt = "PlainDateTime",
          ci = "PlainTime",
          Hn = "ZonedDateTime",
          si = "Instant",
          ui = "Duration",
          vl = [
            Math.floor,
            (n) => (Tr(n) ? Math.floor(n) : Math.round(n)),
            Math.ceil,
            (n) => (Tr(n) ? Math.ceil(n) : Math.round(n)),
            Math.trunc,
            (n) => (Tr(n) ? Math.trunc(n) || 0 : Math.round(n)),
            (n) => (n < 0 ? Math.floor(n) : Math.ceil(n)),
            (n) => Math.sign(n) * Math.round(Math.abs(n)) || 0,
            (n) => (Tr(n) ? (n = Math.trunc(n) || 0) + (n % 2) : Math.round(n)),
          ],
          mt = "UTC",
          de = 5184e3,
          Ml = Yr(1847),
          bl = Yr(
            (() => {
              const n = new Date();
              return (n.getTime() === 0 ? 2040 : n.getUTCFullYear()) + 10;
            })(),
          ),
          Ol = /0+$/,
          A = nn(Xs, WeakMap),
          Hc = 2 ** 32 - 1,
          y = nn((n) => {
            const t = po(n);
            return typeof t == "object" ? new Tl(t) : new Il(t || 0);
          });
        class Il {
          constructor(t) {
            this.j = t;
          }
          N() {
            return this.j;
          }
          v(t) {
            return (
              ((r) => {
                const e = P({ ...r, ...K });
                if (!e || Math.abs(e[0]) > 1e8) throw new RangeError(Wn);
              })(t),
              [Ce(t, this.j)]
            );
          }
          l() {}
        }
        class Tl {
          constructor(t) {
            this.ae = ((r) => {
              function e(s) {
                const f = Jt(s, c, u),
                  [l, d] = Ca(f),
                  h = i(l),
                  m = i(d);
                return h === m ? h : o(a(l, d), h, m, s);
              }
              function o(s, f, l, d) {
                let h, m;
                for (
                  ;
                  (d === void 0 ||
                    (h = d < s[0] ? f : d >= s[1] ? l : void 0) === void 0) &&
                  (m = s[1] - s[0]);
                ) {
                  const p = s[0] + Math.floor(m / 2);
                  r(p) === l ? (s[1] = p) : (s[0] = p + 1);
                }
                return h;
              }
              const i = nn(r),
                a = nn(eu);
              let c = Ml,
                u = bl;
              return {
                se(s) {
                  const f = e(s - 86400),
                    l = e(s + 86400),
                    d = s - f,
                    h = s - l;
                  if (f === l) return [d];
                  const m = e(d);
                  return m === e(h) ? [s - m] : f > l ? [d, h] : [];
                },
                ue: e,
                l(s, f) {
                  const l = Jt(s, c, u);
                  let [d, h] = Ca(l);
                  const m = de * f,
                    p =
                      f < 0
                        ? () => h > c || ((c = l), 0)
                        : () => d < u || ((u = l), 0);
                  for (; p(); ) {
                    const g = i(d),
                      M = i(h);
                    if (g !== M) {
                      const v = a(d, h);
                      o(v, g, M);
                      const T = v[0];
                      if ((Pn(T, s) || 1) === f) return T;
                    }
                    (d += m), (h += m);
                  }
                },
              };
            })(
              ((r) => (e) => {
                const o = Re(r, e * Sc);
                return (
                  Yr(
                    ac(o),
                    parseInt(o.month),
                    parseInt(o.day),
                    parseInt(o.hour),
                    parseInt(o.minute),
                    parseInt(o.second),
                  ) - e
                );
              })(t),
            );
          }
          N(t) {
            return this.ae.ue(Wi(t)) * un;
          }
          v(t) {
            const [r, e] = [
              Yr(
                (o = t).isoYear,
                o.isoMonth,
                o.isoDay,
                o.isoHour,
                o.isoMinute,
                o.isoSecond,
              ),
              o.isoMillisecond * En + o.isoMicrosecond * ht + o.isoNanosecond,
            ];
            var o;
            return this.ae.se(r).map((i) => en(nt(Ht(i, un), e)));
          }
          l(t, r) {
            const [e, o] = qi(t),
              i = this.ae.l(e + (r > 0 || o ? 1 : 0), r);
            if (i !== void 0) return Ht(i, un);
          }
        }
        const fi = "([+-])",
          he = "(?:[.,](\\d{1,9}))?",
          Gc = `(?:(?:${fi}(\\d{6}))|(\\d{4}))-?(\\d{2})`,
          li = "(\\d{2})(?::?(\\d{2})(?::?(\\d{2})" + he + ")?)?",
          di = fi + li,
          Nl = Gc + "-?(\\d{2})(?:[T ]" + li + "(Z|" + di + ")?)?",
          Vc = "\\[(!?)([^\\]]*)\\]",
          me = `((?:${Vc}){0,9})`,
          Dl = Et(Gc + me),
          El = Et("(?:--)?(\\d{2})-?(\\d{2})" + me),
          Cl = Et(Nl + me),
          Rl = Et("T?" + li + "(?:" + di + ")?" + me),
          Sl = Et(di),
          Yl = new RegExp(Vc, "g"),
          jl = Et(
            `${fi}?P(\\d+Y)?(\\d+M)?(\\d+W)?(\\d+D)?(?:T(?:(\\d+)${he}H)?(?:(\\d+)${he}M)?(?:(\\d+)${he}S)?)?`,
          ),
          Pl = nn(
            (n) =>
              new Jn("en", {
                calendar: b,
                timeZone: n,
                era: "short",
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: 0,
              }),
          ),
          Fl =
            /^(AC|AE|AG|AR|AS|BE|BS|CA|CN|CS|CT|EA|EC|IE|IS|JS|MI|NE|NS|PL|PN|PR|PS|SS|VS)T$/,
          Zl = /[^\w\/:+-]+/,
          kl = /^M(\d{2})(L?)$/,
          Bl = nn(Eu),
          hi = nn(
            (n) =>
              new Jn("en", {
                calendar: n,
                timeZone: mt,
                era: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour12: 0,
              }),
          ),
          Kc = { ne: mc, fields: ie },
          Xc = { ee: hc, fields: ie },
          Qc = { te: pc, fields: ie },
          ns = { P: ro },
          ts = { P: ro, h: Ka },
          rs = {
            P: ro,
            h: Ka,
            ee: hc,
            ne: mc,
            te: pc,
            fields: ie,
            oe: lt,
            inLeapYear: yo,
            monthsInYear: vo,
            daysInMonth: Mo,
            daysInYear: bo,
            dayOfYear: Oo,
            era(n) {
              return this.$(n)[0];
            },
            eraYear(n) {
              return this.$(n)[1];
            },
            monthCode(n) {
              const [t, r] = this.u(n),
                [e, o] = this.m(t, r);
              return tr(e, o);
            },
            dayOfWeek: Hi,
            daysInWeek: Ps,
          },
          es = { F: Me, O: Gt, U: Ye },
          Ul = Object.assign({}, es, { B: Vt }),
          os = Object.assign({}, Ul, { R: Se }),
          $l = Object.assign({}, Kc, es),
          xl = Object.assign({}, Xc, os),
          Ll = Object.assign({}, Qc, os),
          Th = Object.assign({}, $l, { oe: lt }),
          Nh = Object.assign({}, xl, { oe: lt }),
          Dh = Object.assign({}, Ll, { oe: lt }),
          _l = { u: Tn, M: tt, p: Ia },
          is = Object.assign({}, _l, { m: Pr, O: Gt, B: Vt, F: Me }),
          Al = Object.assign({}, ns, is),
          Wl = Object.assign({}, ts, is, { q: Xa }),
          as = { day: zi },
          Eh = Object.assign({}, Al, as),
          Ch = Object.assign({}, Wl, as),
          ql = { u: Tn, $: Gi, m: Pr },
          Rh = { inLeapYear: yo, u: Tn, L: Fr },
          Sh = { monthsInYear: vo, u: Tn, O: Gt },
          Yh = { daysInMonth: Mo, u: Tn, B: Vt },
          jh = { daysInYear: bo, u: Tn, G: je },
          Jl = { dayOfYear: Oo, u: Tn, M: tt },
          zl = Object.assign({}, Jl, {
            weekOfYear: nc,
            yearOfWeek: tc,
            I(n) {
              function t(h) {
                return (7 - h < e ? 7 : 0) - h;
              }
              function r(h) {
                const m = je(d + h),
                  p = h || 1,
                  g = t(zt(u + m * p, 7));
                return (f = (m + (g - s) * p) / 7);
              }
              const e = this.id ? 1 : 4,
                o = Hi(n),
                i = this.dayOfYear(n),
                a = zt(o - 1, 7),
                c = i - 1,
                u = zt(a - c, 7),
                s = t(u);
              let f,
                l = Math.floor((c - s) / 7) + 1,
                d = n.isoYear;
              return (
                l ? l > r(0) && ((l = 1), d++) : ((l = r(-1)), d--), [l, d, f]
              );
            },
          }),
          Ph = { u: Tn, m: Pr, R: Se, U: Ye },
          Hl = Object.assign({}, rs, zl, {
            u: Tn,
            $: Gi,
            m: Pr,
            R: Se,
            L: Fr,
            F: Me,
            O: Gt,
            q: Xa,
            B: Vt,
            G: je,
            U: Ye,
            M: tt,
            p: Ia,
            year(n) {
              return n.isoYear;
            },
            month(n) {
              return n.isoMonth;
            },
            day: zi,
          }),
          cs = { F: Yt, O: ut, U: Do },
          ss = Object.assign({}, cs, { B: er }),
          Gl = Object.assign({}, ss, { R: Eo }),
          Vl = Object.assign({}, Kc, cs),
          Kl = Object.assign({}, Xc, ss),
          Xl = Object.assign({}, Qc, Gl),
          Fh = Object.assign({}, Vl, { oe: lt }),
          Zh = Object.assign({}, Kl, { oe: lt }),
          kh = Object.assign({}, Xl, { oe: lt }),
          Ql = { u: gn, M: St, p: Ta },
          us = Object.assign({}, Ql, { m: ee, O: ut, B: er, F: Yt }),
          nd = Object.assign({}, ns, us),
          td = Object.assign({}, ts, us, { q: Qa }),
          fs = { day: cc },
          Bh = Object.assign({}, nd, fs),
          Uh = Object.assign({}, td, fs),
          rd = { u: gn, $: uc, m: ee },
          $h = { inLeapYear: yo, u: gn, L: sc },
          xh = { monthsInYear: vo, u: gn, O: ut },
          Lh = { daysInMonth: Mo, u: gn, B: er },
          _h = { daysInYear: bo, u: gn, G: rr },
          ed = { dayOfYear: Oo, u: gn, M: St },
          od = {
            I() {
              return [];
            },
          },
          id = Object.assign({}, ed, od, { weekOfYear: nc, yearOfWeek: tc }),
          Ah = { u: gn, m: ee, R: Eo, U: Do },
          ad = Object.assign({}, rs, id, {
            u: gn,
            $: uc,
            m: ee,
            R: Eo,
            L: sc,
            F: Yt,
            O: ut,
            q: Qa,
            B: er,
            G: rr,
            U: Do,
            M: St,
            p: Ta,
            year(n) {
              return this._(n).year;
            },
            month(n) {
              const { year: t, V: r } = this._(n),
                { X: e } = this.J(t);
              return e[r] + 1;
            },
            day: cc,
          }),
          Wh = null,
          qh = null,
          Jh = null,
          zh = null,
          Hh = null,
          Gh = null,
          Vh = null,
          Kh = null,
          Xh = null,
          Qh = null,
          nm = null,
          tm = null,
          pe = lc(ql, rd),
          rm = null,
          em = null,
          om = null,
          im = null,
          am = null,
          cm = null,
          sm = null,
          w = lc(Hl, ad),
          cd = {
            era: Dr,
            eraYear: $,
            year: $,
            month: Li,
            monthCode(n) {
              const t = Dr(n);
              return Io(t), t;
            },
            day: Li,
          },
          sd = Pt(Cn, $),
          ud = Pt(N, Cr),
          fd = {
            offset(n) {
              const t = Dr(n);
              return st(t), t;
            },
          },
          ls = Object.assign({}, cd, sd, ud, fd),
          mi = O(Si, Cn, fn),
          ld = O(Si, fn, Cn),
          Gn = "numeric",
          mr = ["timeZoneName"],
          ds = { month: Gn, day: Gn },
          pi = { year: Gn, month: Gn },
          gi = Object.assign({}, pi, { day: Gn }),
          wi = { hour: Gn, minute: Gn, second: Gn },
          yi = Object.assign({}, gi, wi),
          dd = Object.assign({}, yi, { timeZoneName: "short" }),
          hd = Object.keys(pi),
          md = Object.keys(ds),
          pd = Object.keys(gi),
          gd = Object.keys(wi),
          vi = ["dateStyle"],
          wd = hd.concat(vi),
          yd = md.concat(vi),
          Mi = pd.concat(vi, ["weekday"]),
          pr = gd.concat(["dayPeriod", "timeStyle", "fractionalSecondDigits"]),
          bi = Mi.concat(pr),
          vd = mr.concat(pr),
          Md = mr.concat(Mi),
          bd = mr.concat(["day", "weekday"], pr),
          Od = mr.concat(["year", "weekday"], pr),
          Id = dt(bi, yi),
          Td = dt(bi, dd),
          Nd = dt(bi, yi, mr),
          Dd = dt(Mi, gi, vd),
          Ed = dt(pr, wi, Md),
          Cd = dt(wd, pi, bd),
          Rd = dt(yd, ds, Od),
          Sd = {},
          hs = lf(),
          ms = [Id, ke],
          Yd = [
            Td,
            ke,
            0,
            (n, t) => {
              const r = n.timeZone;
              if (t && t.timeZone !== r) throw new RangeError(Cc);
              return r;
            },
          ],
          ps = [Nd, L],
          gs = [Dd, L],
          ws = [Ed, (n) => Zn(n) / En],
          ys = [Cd, L, hs],
          vs = [Rd, L, hs];
        function Vn(n, t, r, e, o, i) {
          function a(...s) {
            if (!(this instanceof a)) throw new TypeError(Bo);
            {
              const f = t(...s);
              Is(this, f), Oi(this, f, i);
            }
          }
          function c(s, f) {
            return Object.defineProperties(function (...l) {
              return s.call(this, u(this), ...l);
            }, Wt(f));
          }
          function u(s) {
            const f = W(s);
            if (!f || f.branding !== n) throw new TypeError(Bo);
            return f;
          }
          return (
            Object.defineProperties(a.prototype, {
              ...Rs(bn(c, r)),
              ...pt(bn(c, e)),
              ...ve("Temporal." + n),
            }),
            Object.defineProperties(a, { ...pt(o), ...Wt(n) }),
            [
              a,
              (s) => {
                const f = Object.create(a.prototype);
                return Is(f, s), Oi(f, s, i), f;
              },
              u,
            ]
          );
        }
        function Bt(n) {
          if (W(n) || n.calendar !== void 0 || n.timeZone !== void 0)
            throw new TypeError(Nf);
          return n;
        }
        function Oi(n, t, r) {
          Oi.name === "dbg" &&
            Object.defineProperty(n, "o", {
              value: r(t),
              writable: 0,
              enumerable: 0,
              configurable: 0,
            });
        }
        function gr(n) {
          return Ms(n) || b;
        }
        function Ms(n) {
          const { calendar: t } = n;
          if (t !== void 0) return ge(t);
        }
        function ge(n) {
          if (U(n)) {
            const { calendar: t } = W(n) || {};
            if (!t) throw new TypeError(Dc(n));
            return t;
          }
          return ((t) => oe(du(k(t))))(n);
        }
        function Ii(n) {
          const t = {};
          for (const r in n)
            t[r] = (e) => {
              const { calendar: o } = e;
              return w(o)[r](e);
            };
          return t;
        }
        function Kn() {
          throw new TypeError(Df);
        }
        function X(n) {
          if (U(n)) {
            const { timeZone: t } = W(n) || {};
            if (!t) throw new TypeError(Ec(n));
            return t;
          }
          return ((t) => mo(hu(k(t))))(n);
        }
        function Y(n) {
          if (U(n)) {
            const t = W(n);
            return t && t.branding === ui ? t : Bu(n);
          }
          return lu(n);
        }
        function wr(n) {
          if (n !== void 0) {
            if (U(n)) {
              const t = W(n) || {};
              switch (t.branding) {
                case Hn:
                case hr:
                  return t;
                case kt:
                  return Nn(t);
              }
              const r = gr(n);
              return { ...Su(X, y, w(r), n), calendar: r };
            }
            return iu(n);
          }
        }
        function Xn(n, t) {
          if (U(n)) {
            const e = W(n) || {};
            switch (e.branding) {
              case ci:
                return I(t), e;
              case kt:
                return I(t), pn(e);
              case Hn:
                return I(t), vc(y, e);
            }
            return ku(n, t);
          }
          const r = fu(n);
          return I(t), r;
        }
        function Ti(n) {
          return n === void 0 ? void 0 : Xn(n);
        }
        function Ut(n, t) {
          if (U(n)) {
            const e = W(n) || {};
            switch (e.branding) {
              case kt:
                return I(t), e;
              case hr:
                return I(t), H({ ...e, ...K });
              case Hn:
                return I(t), wc(y, e);
            }
            return ju(w(gr(n)), n, t);
          }
          const r = cu(n);
          return I(t), r;
        }
        function bs(n, t) {
          if (U(n)) {
            const e = W(n);
            if (e && e.branding === ai) return I(t), e;
            const o = Ms(n);
            return Zu(w(o || b), !o, n, t);
          }
          const r = uu(w, n);
          return I(t), r;
        }
        function $t(n, t) {
          if (U(n)) {
            const e = W(n);
            return e && e.branding === ii ? (I(t), e) : Fu(w(gr(n)), n, t);
          }
          const r = su(w, n);
          return I(t), r;
        }
        function xt(n, t) {
          if (U(n)) {
            const e = W(n) || {};
            switch (e.branding) {
              case hr:
                return I(t), e;
              case kt:
                return I(t), Nn(e);
              case Hn:
                return I(t), yc(y, e);
            }
            return Pu(w(gr(n)), n, t);
          }
          const r = ao(n);
          return I(t), r;
        }
        function Lt(n, t) {
          if (U(n)) {
            const r = W(n);
            if (r && r.branding === Hn) return kr(t), r;
            const e = gr(n);
            return Yu(X, y, w(e), e, n, t);
          }
          return au(n, t);
        }
        function Os(n) {
          return bn((t) => (r) => t(Ni(r)), n);
        }
        function Ni(n) {
          return A(n, y);
        }
        function _t(n) {
          if (U(n)) {
            const t = W(n);
            if (t)
              switch (t.branding) {
                case si:
                  return t;
                case Hn:
                  return cn(t.epochNanoseconds);
              }
          }
          return ou(n);
        }
        function um() {
          const n = Date.prototype.valueOf.call(this);
          return Yn(xe(Ge(_e(n), Ke)));
        }
        function jd() {
          function n(i, a) {
            return new t(i, a);
          }
          function t(i, a = Object.create(null)) {
            ye.set(
              this,
              ((c, u) => {
                const s = new Jn(c, u),
                  f = s.resolvedOptions(),
                  l = f.locale,
                  d = tn(Object.keys(u), f),
                  h = nn(Zd),
                  m = (p, ...g) => {
                    if (p) {
                      if (g.length !== 2) throw new TypeError($o);
                      for (const D of g)
                        if (D === void 0) throw new TypeError($o);
                    }
                    p || g[0] !== void 0 || (g = []);
                    const M = g.map((D) => W(D) || Number(D));
                    let v,
                      T = 0;
                    for (const D of M) {
                      const R = typeof D == "object" ? D.branding : void 0;
                      if (T++ && R !== v) throw new TypeError($o);
                      v = R;
                    }
                    return v ? h(v)(l, d, ...M) : [s, ...M];
                  };
                return (m.i = s), m;
              })(i, a),
            );
          }
          const r = Jn.prototype,
            e = Object.getOwnPropertyDescriptors(r),
            o = Object.getOwnPropertyDescriptors(Jn);
          for (const i in e) {
            const a = e[i],
              c = i.startsWith("format") && Pd(i);
            typeof a.value == "function"
              ? (a.value = i === "constructor" ? n : c || Fd(i))
              : c &&
                ((a.get = function () {
                  if (!ye.has(this)) throw new TypeError(Bo);
                  return (...u) => c.apply(this, u);
                }),
                Object.defineProperties(a.get, Wt(`get ${i}`)));
          }
          return (
            (o.prototype.value = t.prototype = Object.create({}, e)),
            Object.defineProperties(n, o),
            n
          );
        }
        function Pd(n) {
          return Object.defineProperties(function (...t) {
            const r = ye.get(this),
              [e, ...o] = r(n.includes("Range"), ...t);
            return e[n](...o);
          }, Wt(n));
        }
        function Fd(n) {
          return Object.defineProperties(function (...t) {
            return ye.get(this).i[n](...t);
          }, Wt(n));
        }
        function Zd(n) {
          const t = Ld[n];
          if (!t) throw new TypeError(Wf(n));
          return _n(t, nn(Mc), 1);
        }
        const we = new WeakMap(),
          W = we.get.bind(we),
          Is = we.set.bind(we),
          Ts = {
            era: Ss,
            eraYear: ki,
            year: Oe,
            month: In,
            daysInMonth: In,
            daysInYear: In,
            inLeapYear: Vf,
            monthsInYear: In,
          },
          Di = { monthCode: k },
          Ns = { day: In },
          kd = {
            dayOfWeek: In,
            dayOfYear: In,
            weekOfYear: Ys,
            yearOfWeek: ki,
            daysInWeek: In,
          },
          Ei = Ii(Object.assign({}, Ts, Di, Ns, kd)),
          Bd = Ii({ ...Ts, ...Di }),
          Ud = Ii({ ...Di, ...Ns }),
          yr = { calendarId: (n) => n.calendar },
          $d = br((n) => (t) => t[n], N.concat("sign")),
          Ci = br((n, t) => (r) => r[fn[t]], Cn),
          Ds = { epochMilliseconds: ke, epochNanoseconds: ks },
          [xd, C, fm] = Vn(
            ui,
            Xu,
            { ...$d, blank: ru },
            {
              with: (n, t) => C(Wu(n, t)),
              negated: (n) => C(io(n)),
              abs: (n) => C(tu(n)),
              add: (n, t, r) => C(Na(wr, w, y, 0, n, Y(t), r)),
              subtract: (n, t, r) => C(Na(wr, w, y, 1, n, Y(t), r)),
              round: (n, t) => C(nu(wr, w, y, n, t)),
              total: (n, t) => Bs(wr, w, y, n, t),
              toLocaleString(n, t, r) {
                return Intl.DurationFormat
                  ? new Intl.DurationFormat(t, r).format(this)
                  : Jr(n);
              },
              toString: Jr,
              toJSON: (n) => Jr(n),
              valueOf: Kn,
            },
            {
              from: (n) => C(Y(n)),
              compare: (n, t, r) => pu(wr, w, y, Y(n), Y(t), r),
            },
            Jr,
          ),
          Ld = {
            Instant: ms,
            PlainDateTime: ps,
            PlainDate: gs,
            PlainTime: ws,
            PlainYearMonth: ys,
            PlainMonthDay: vs,
          },
          _d = _n(ms),
          Ad = _n(Yd),
          Wd = _n(ps),
          qd = _n(gs),
          Jd = _n(ws),
          zd = _n(ys),
          Hd = _n(vs),
          [Gd, Qn] = Vn(
            ci,
            Ku,
            Ci,
            {
              with(n, t, r) {
                return Qn(Au(this, Bt(t), r));
              },
              add: (n, t) => Qn(ba(0, n, Y(t))),
              subtract: (n, t) => Qn(ba(1, n, Y(t))),
              until: (n, t, r) => C(Ja(0, n, Xn(t), r)),
              since: (n, t, r) => C(Ja(1, n, Xn(t), r)),
              round: (n, t) => Qn(_s(n, t)),
              equals: (n, t) => Ou(n, Xn(t)),
              toLocaleString(n, t, r) {
                const [e, o] = Jd(t, r, n);
                return e.format(o);
              },
              toString: He,
              toJSON: (n) => He(n),
              valueOf: Kn,
            },
            {
              from: (n, t) => Qn(Xn(n, t)),
              compare: (n, t) => go(Xn(n), Xn(t)),
            },
            He,
          ),
          [Vd, yn] = Vn(
            kt,
            O(zu, or),
            { ...yr, ...Ei, ...Ci },
            {
              with: (n, t, r) => yn($u(w, n, Bt(t), r)),
              withCalendar: (n, t) => yn(Po(n, ge(t))),
              withPlainTime: (n, t) => yn(mf(n, Ti(t))),
              add: (n, t, r) => yn(ya(w, 0, n, Y(t), r)),
              subtract: (n, t, r) => yn(ya(w, 1, n, Y(t), r)),
              until: (n, t, r) => C(_a(w, 0, n, Ut(t), r)),
              since: (n, t, r) => C(_a(w, 1, n, Ut(t), r)),
              round: (n, t) => yn(Ls(n, t)),
              equals: (n, t) => yu(n, Ut(t)),
              toZonedDateTime: (n, t, r) => q(tf(y, n, X(t), r)),
              toPlainDate: (n) => vn(Nn(n)),
              toPlainTime: (n) => Qn(pn(n)),
              toLocaleString(n, t, r) {
                const [e, o] = Wd(t, r, n);
                return e.format(o);
              },
              toString: We,
              toJSON: (n) => We(n),
              valueOf: Kn,
            },
            {
              from: (n, t) => yn(Ut(n, t)),
              compare: (n, t) => Ua(Ut(n), Ut(t)),
            },
            We,
          ),
          [Kd, Ri, lm] = Vn(
            ai,
            O(Vu, or),
            { ...yr, ...Ud },
            {
              with: (n, t, r) => Ri(_u(w, n, Bt(t), r)),
              equals: (n, t) => bu(n, bs(t)),
              toPlainDate(n, t) {
                return vn(sf(w, n, this, t));
              },
              toLocaleString(n, t, r) {
                const [e, o] = Hd(t, r, n);
                return e.format(o);
              },
              toString: ze,
              toJSON: (n) => ze(n),
              valueOf: Kn,
            },
            { from: (n, t) => Ri(bs(n, t)) },
            ze,
          ),
          [Xd, vr, dm] = Vn(
            ii,
            O(Gu, or),
            { ...yr, ...Bd },
            {
              with: (n, t, r) => vr(Lu(w, n, Bt(t), r)),
              add: (n, t, r) => vr(Ma(w, 0, n, Y(t), r)),
              subtract: (n, t, r) => vr(Ma(w, 1, n, Y(t), r)),
              until: (n, t, r) => C(Wa(w, 0, n, $t(t), r)),
              since: (n, t, r) => C(Wa(w, 1, n, $t(t), r)),
              equals: (n, t) => Mu(n, $t(t)),
              toPlainDate(n, t) {
                return vn(cf(w, n, this, t));
              },
              toLocaleString(n, t, r) {
                const [e, o] = zd(t, r, n);
                return e.format(o);
              },
              toString: Je,
              toJSON: (n) => Je(n),
              valueOf: Kn,
            },
            {
              from: (n, t) => vr($t(n, t)),
              compare: (n, t) => Rt($t(n), $t(t)),
            },
            Je,
          ),
          [Qd, vn, hm] = Vn(
            hr,
            O(Hu, or),
            { ...yr, ...Ei },
            {
              with: (n, t, r) => vn(xu(w, n, Bt(t), r)),
              withCalendar: (n, t) => vn(Po(n, ge(t))),
              add: (n, t, r) => vn(va(w, 0, n, Y(t), r)),
              subtract: (n, t, r) => vn(va(w, 1, n, Y(t), r)),
              until: (n, t, r) => C(Aa(w, 0, n, xt(t), r)),
              since: (n, t, r) => C(Aa(w, 1, n, xt(t), r)),
              equals: (n, t) => vu(n, xt(t)),
              toZonedDateTime(n, t) {
                const r = U(t) ? t : { timeZone: t };
                return q(rf(X, Xn, y, n, r));
              },
              toPlainDateTime: (n, t) => yn(ef(n, Ti(t))),
              toPlainYearMonth(n) {
                return vr(of(w, n, this));
              },
              toPlainMonthDay(n) {
                return Ri(af(w, n, this));
              },
              toLocaleString(n, t, r) {
                const [e, o] = qd(t, r, n);
                return e.format(o);
              },
              toString: qe,
              toJSON: (n) => qe(n),
              valueOf: Kn,
            },
            {
              from: (n, t) => vn(xt(n, t)),
              compare: (n, t) => Rt(xt(n), xt(t)),
            },
            qe,
          ),
          [nh, q] = Vn(
            Hn,
            O(Ju, or, mu),
            {
              ...Ds,
              ...yr,
              ...Os(Ei),
              ...Os(Ci),
              offset: (n) => It(Ni(n).offsetNanoseconds),
              offsetNanoseconds: (n) => Ni(n).offsetNanoseconds,
              timeZoneId: (n) => n.timeZone,
              hoursInDay: (n) => As(y, n),
            },
            {
              with: (n, t, r) => q(Uu(w, y, n, Bt(t), r)),
              withCalendar: (n, t) => q(Po(n, ge(t))),
              withTimeZone: (n, t) => q(pf(n, X(t))),
              withPlainTime: (n, t) => q(hf(y, n, Ti(t))),
              add: (n, t, r) => q(wa(w, y, 0, n, Y(t), r)),
              subtract: (n, t, r) => q(wa(w, y, 1, n, Y(t), r)),
              until: (n, t, r) => C(S(La(w, y, 0, n, Lt(t), r))),
              since: (n, t, r) => C(S(La(w, y, 1, n, Lt(t), r))),
              round: (n, t) => q(xs(y, n, t)),
              startOfDay: (n) => q(Ws(y, n)),
              equals: (n, t) => wu(n, Lt(t)),
              toInstant: (n) => Yn(nf(n)),
              toPlainDateTime: (n) => yn(wc(y, n)),
              toPlainDate: (n) => vn(yc(y, n)),
              toPlainTime: (n) => Qn(vc(y, n)),
              toLocaleString(n, t, r = {}) {
                const [e, o] = Ad(t, r, n);
                return e.format(o);
              },
              toString: (n, t) => Ae(y, n, t),
              toJSON: (n) => Ae(y, n),
              valueOf: Kn,
              getTimeZoneTransition(n, t) {
                const { timeZone: r, epochNanoseconds: e } = n,
                  o = Zs(t),
                  i = y(r).l(e, o);
                return i ? q({ ...n, epochNanoseconds: i }) : null;
              },
            },
            {
              from: (n, t) => q(Lt(n, t)),
              compare: (n, t) => Ba(Lt(n), Lt(t)),
            },
            (n) => Ae(y, n),
          ),
          [th, Yn, mm] = Vn(
            si,
            qu,
            Ds,
            {
              add: (n, t) => Yn(ga(0, n, Y(t))),
              subtract: (n, t) => Yn(ga(1, n, Y(t))),
              until: (n, t, r) => C(xa(0, n, _t(t), r)),
              since: (n, t, r) => C(xa(1, n, _t(t), r)),
              round: (n, t) => Yn($s(n, t)),
              equals: (n, t) => gu(n, _t(t)),
              toZonedDateTimeISO: (n, t) => q(Qu(n, X(t))),
              toLocaleString(n, t, r) {
                const [e, o] = _d(t, r, n);
                return e.format(o);
              },
              toString: (n, t) => Le(X, y, n, t),
              toJSON: (n) => Le(X, y, n),
              valueOf: Kn,
            },
            {
              from: (n) => Yn(_t(n)),
              fromEpochMilliseconds: (n) => Yn(uf(n)),
              fromEpochNanoseconds: (n) => Yn(ff(n)),
              compare: (n, t) => ka(_t(n), _t(t)),
            },
            (n) => Le(X, y, n),
          ),
          rh = Object.defineProperties(
            {},
            {
              ...ve("Temporal.Now"),
              ...pt({
                timeZoneId: () => ar(),
                instant: () => Yn(cn(Zo())),
                zonedDateTimeISO: (n = ar()) => q(z(Zo(), X(n), b)),
                plainDateTimeISO: (n = ar()) => yn(H(Fo(y(X(n))), b)),
                plainDateISO: (n = ar()) => vn(Nn(Fo(y(X(n))), b)),
                plainTimeISO: (n = ar()) => Qn(pn(Fo(y(X(n))))),
              }),
            },
          ),
          eh = Object.defineProperties(
            {},
            {
              ...ve("Temporal"),
              ...pt({
                PlainYearMonth: Xd,
                PlainMonthDay: Kd,
                PlainDate: Qd,
                PlainTime: Gd,
                PlainDateTime: Vd,
                ZonedDateTime: nh,
                Instant: th,
                Duration: xd,
                Now: rh,
              }),
            },
          ),
          oh = jd(),
          ye = new WeakMap(),
          pm = Object.defineProperties(
            Object.create(Intl),
            pt({ DateTimeFormat: oh }),
          );
      },
    },
  ]);
})();
