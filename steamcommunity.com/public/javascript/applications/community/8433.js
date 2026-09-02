/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  var te = Object.defineProperty;
  var oe = (g, p, h) =>
    p in g
      ? te(g, p, { enumerable: !0, configurable: !0, writable: !0, value: h })
      : (g[p] = h);
  var F = (g, p, h) => oe(g, typeof p != "symbol" ? p + "" : p, h);
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8433],
    {
      8433: (g, p, h) => {
        h.r(p), h.d(p, { apply: () => ee, isSupported: () => Z });
        var S = class extends Event {
            constructor(t, { oldState: o = "", newState: r = "", ...i } = {}) {
              super(t, i);
              F(this, "oldState");
              F(this, "newState");
              (this.oldState = String(o || "")),
                (this.newState = String(r || ""));
            }
          },
          N = new WeakMap();
        function O(e, t, o) {
          N.set(
            e,
            setTimeout(() => {
              N.has(e) &&
                e.dispatchEvent(
                  new S("toggle", { cancelable: !1, oldState: t, newState: o }),
                );
            }, 0),
          );
        }
        var D = globalThis.ShadowRoot || function () {},
          G = globalThis.HTMLDialogElement || function () {},
          A = new WeakMap(),
          l = new WeakMap(),
          b = new WeakMap();
        function M(e) {
          return b.get(e) || "hidden";
        }
        var k = new WeakMap();
        function K(e) {
          const t = e.popoverTargetElement;
          if (!(t instanceof HTMLElement)) return;
          const o = M(t);
          (e.popoverTargetAction === "show" && o === "showing") ||
            (e.popoverTargetAction === "hide" && o === "hidden") ||
            (o === "showing" ? y(t, !0, !0) : v(t, !1) && (k.set(t, e), H(t)));
        }
        function v(e, t) {
          return !(
            (e.popover !== "auto" && e.popover !== "manual") ||
            !e.isConnected ||
            (t && M(e) !== "showing") ||
            (!t && M(e) !== "hidden") ||
            (e instanceof G && e.hasAttribute("open")) ||
            document.fullscreenElement === e
          );
        }
        function C(e) {
          return e
            ? Array.from(l.get(e.ownerDocument) || []).indexOf(e) + 1
            : 0;
        }
        function Q(e) {
          const t = W(e),
            o = U(e);
          return C(t) > C(o) ? t : o;
        }
        function L(e) {
          const t = l.get(e);
          for (const o of t || [])
            if (!o.isConnected) t.delete(o);
            else return o;
          return null;
        }
        function m(e) {
          return typeof e.getRootNode == "function"
            ? e.getRootNode()
            : e.parentNode
              ? m(e.parentNode)
              : e;
        }
        function W(e) {
          for (; e; ) {
            if (
              e instanceof HTMLElement &&
              e.popover === "auto" &&
              b.get(e) === "showing"
            )
              return e;
            if (
              ((e = e.parentElement || m(e)),
              e instanceof D && (e = e.host),
              e instanceof Document)
            )
              return;
          }
        }
        function U(e) {
          for (; e; ) {
            const t = e.popoverTargetElement;
            if (t instanceof HTMLElement) return t;
            if (
              ((e = e.parentElement || m(e)),
              e instanceof D && (e = e.host),
              e instanceof Document)
            )
              return;
          }
        }
        function $(e) {
          const t = new Map();
          let o = 0;
          const r = e.ownerDocument;
          for (const u of l.get(r) || []) t.set(u, o), (o += 1);
          t.set(e, o), (o += 1);
          let i = null;
          function a(u) {
            const c = W(u);
            if (c === null) return null;
            const n = t.get(c);
            (i === null || t.get(i) < n) && (i = c);
          }
          return a(e == null ? void 0 : e.parentElement), i;
        }
        function J(e) {
          return e.hidden ||
            e instanceof D ||
            ((e instanceof HTMLButtonElement ||
              e instanceof HTMLInputElement ||
              e instanceof HTMLSelectElement ||
              e instanceof HTMLTextAreaElement ||
              e instanceof HTMLOptGroupElement ||
              e instanceof HTMLOptionElement ||
              e instanceof HTMLFieldSetElement) &&
              e.disabled) ||
            (e instanceof HTMLInputElement && e.type === "hidden") ||
            (e instanceof HTMLAnchorElement && e.href === "")
            ? !1
            : typeof e.tabIndex == "number" && e.tabIndex !== -1;
        }
        function X(e) {
          if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
          let t = e;
          t.shadowRoot && (t = t.shadowRoot);
          let o = t.querySelector("[autofocus]");
          if (o) return o;
          {
            const a = t.querySelectorAll("slot");
            for (const u of a) {
              const c = u.assignedElements({ flatten: !0 });
              for (const n of c) {
                if (n.hasAttribute("autofocus")) return n;
                if (((o = n.querySelector("[autofocus]")), o)) return o;
              }
            }
          }
          const r = e.ownerDocument.createTreeWalker(
            t,
            NodeFilter.SHOW_ELEMENT,
          );
          let i = r.currentNode;
          for (; i; ) {
            if (J(i)) return i;
            i = r.nextNode();
          }
        }
        function Y(e) {
          var t;
          (t = X(e)) == null || t.focus();
        }
        var T = new WeakMap();
        function H(e) {
          if (!v(e, !1)) return;
          const t = e.ownerDocument;
          if (
            !e.dispatchEvent(
              new S("beforetoggle", {
                cancelable: !0,
                oldState: "closed",
                newState: "open",
              }),
            ) ||
            !v(e, !1)
          )
            return;
          let o = !1;
          if (e.popover === "auto") {
            const i = e.getAttribute("popover"),
              a = $(e) || t;
            if ((P(a, !1, !0), i !== e.getAttribute("popover") || !v(e, !1)))
              return;
          }
          L(t) || (o = !0), T.delete(e);
          const r = t.activeElement;
          e.classList.add(":popover-open"),
            b.set(e, "showing"),
            A.has(t) || A.set(t, new Set()),
            A.get(t).add(e),
            Y(e),
            e.popover === "auto" &&
              (l.has(t) || l.set(t, new Set()),
              l.get(t).add(e),
              z(k.get(e), !0)),
            o && r && e.popover === "auto" && T.set(e, r),
            O(e, "closed", "open");
        }
        function y(e, t = !1, o = !1) {
          var a, u;
          if (!v(e, !0)) return;
          const r = e.ownerDocument;
          if (
            (e.popover === "auto" && (P(e, t, o), !v(e, !0))) ||
            (z(k.get(e), !1),
            k.delete(e),
            o &&
              (e.dispatchEvent(
                new S("beforetoggle", { oldState: "open", newState: "closed" }),
              ),
              !v(e, !0)))
          )
            return;
          (a = A.get(r)) == null || a.delete(e),
            (u = l.get(r)) == null || u.delete(e),
            e.classList.remove(":popover-open"),
            b.set(e, "hidden"),
            o && O(e, "open", "closed");
          const i = T.get(e);
          i && (T.delete(e), t && i.focus());
        }
        function q(e, t = !1, o = !1) {
          let r = L(e);
          for (; r; ) y(r, t, o), (r = L(e));
        }
        function P(e, t, o) {
          var u;
          const r = e.ownerDocument || e;
          if (e instanceof Document) return q(r, t, o);
          let i = null,
            a = !1;
          for (const c of l.get(r) || [])
            if (c === e) a = !0;
            else if (a) {
              i = c;
              break;
            }
          if (!a) return q(r, t, o);
          for (; i && M(i) === "showing" && (u = l.get(r)) != null && u.size; )
            y(i, t, o);
        }
        var I = new WeakMap();
        function j(e) {
          if (!e.isTrusted) return;
          const t = e.composedPath()[0];
          if (!t) return;
          const o = t.ownerDocument;
          if (!L(o)) return;
          const i = Q(t);
          if (i && e.type === "pointerdown") I.set(o, i);
          else if (e.type === "pointerup") {
            const a = I.get(o) === i;
            I.delete(o), a && P(i || o, !1, !0);
          }
        }
        var R = new WeakMap();
        function z(e, t = !1) {
          if (!e) return;
          R.has(e) || R.set(e, e.getAttribute("aria-expanded"));
          const o = e.popoverTargetElement;
          if (o instanceof HTMLElement && o.popover === "auto")
            e.setAttribute("aria-expanded", String(t));
          else {
            const r = R.get(e);
            r
              ? e.setAttribute("aria-expanded", r)
              : e.removeAttribute("aria-expanded");
          }
        }
        var V = globalThis.ShadowRoot || function () {};
        function Z() {
          return (
            typeof HTMLElement != "undefined" &&
            typeof HTMLElement.prototype == "object" &&
            "popover" in HTMLElement.prototype
          );
        }
        function d(e, t, o) {
          const r = e[t];
          Object.defineProperty(e, t, {
            value(i) {
              return r.call(this, o(i));
            },
          });
        }
        var _ = /(^|[^\\]):popover-open\b/g,
          B = `
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
`,
          w = null;
        function x(e) {
          if (w === null)
            try {
              (w = new CSSStyleSheet()), w.replaceSync(B);
            } catch {
              w = !1;
            }
          if (w === !1) {
            const t = document.createElement("style");
            (t.textContent = B),
              e instanceof Document ? e.head.prepend(t) : e.prepend(t);
          } else e.adoptedStyleSheets = [w, ...e.adoptedStyleSheets];
        }
        function ee() {
          window.ToggleEvent = window.ToggleEvent || S;
          function e(n) {
            return (
              n != null &&
                n.includes(":popover-open") &&
                (n = n.replace(_, "$1.\\:popover-open")),
              n
            );
          }
          d(Document.prototype, "querySelector", e),
            d(Document.prototype, "querySelectorAll", e),
            d(Element.prototype, "querySelector", e),
            d(Element.prototype, "querySelectorAll", e),
            d(Element.prototype, "matches", e),
            d(Element.prototype, "closest", e),
            d(DocumentFragment.prototype, "querySelectorAll", e),
            d(DocumentFragment.prototype, "querySelectorAll", e),
            Object.defineProperties(HTMLElement.prototype, {
              popover: {
                enumerable: !0,
                configurable: !0,
                get() {
                  if (!this.hasAttribute("popover")) return null;
                  const n = (this.getAttribute("popover") || "").toLowerCase();
                  return n === "" || n == "auto" ? "auto" : "manual";
                },
                set(n) {
                  this.setAttribute("popover", n);
                },
              },
              showPopover: {
                enumerable: !0,
                configurable: !0,
                value() {
                  H(this);
                },
              },
              hidePopover: {
                enumerable: !0,
                configurable: !0,
                value() {
                  y(this, !0, !0);
                },
              },
              togglePopover: {
                enumerable: !0,
                configurable: !0,
                value(n) {
                  (b.get(this) === "showing" && n === void 0) || n === !1
                    ? y(this, !0, !0)
                    : (n === void 0 || n === !0) && H(this);
                },
              },
            });
          const t = Element.prototype.attachShadow;
          t &&
            Object.defineProperties(Element.prototype, {
              attachShadow: {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value(n) {
                  const s = t.call(this, n);
                  return x(s), s;
                },
              },
            });
          const o = HTMLElement.prototype.attachInternals;
          o &&
            Object.defineProperties(HTMLElement.prototype, {
              attachInternals: {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value() {
                  const n = o.call(this);
                  return n.shadowRoot && x(n.shadowRoot), n;
                },
              },
            });
          const r = new WeakMap();
          function i(n) {
            Object.defineProperties(n.prototype, {
              popoverTargetElement: {
                enumerable: !0,
                configurable: !0,
                set(s) {
                  if (s === null)
                    this.removeAttribute("popovertarget"), r.delete(this);
                  else if (s instanceof Element)
                    this.setAttribute("popovertarget", ""), r.set(this, s);
                  else
                    throw new TypeError(
                      "popoverTargetElement must be an element or null",
                    );
                },
                get() {
                  if (
                    (this.localName !== "button" &&
                      this.localName !== "input") ||
                    (this.localName === "input" &&
                      this.type !== "reset" &&
                      this.type !== "image" &&
                      this.type !== "button") ||
                    this.disabled ||
                    (this.form && this.type === "submit")
                  )
                    return null;
                  const s = r.get(this);
                  if (s && s.isConnected) return s;
                  if (s && !s.isConnected) return r.delete(this), null;
                  const f = m(this),
                    E = this.getAttribute("popovertarget");
                  return (
                    ((f instanceof Document || f instanceof V) &&
                      E &&
                      f.getElementById(E)) ||
                    null
                  );
                },
              },
              popoverTargetAction: {
                enumerable: !0,
                configurable: !0,
                get() {
                  const s = (
                    this.getAttribute("popovertargetaction") || ""
                  ).toLowerCase();
                  return s === "show" || s === "hide" ? s : "toggle";
                },
                set(s) {
                  this.setAttribute("popovertargetaction", s);
                },
              },
            });
          }
          i(HTMLButtonElement), i(HTMLInputElement);
          const a = (n) => {
              const s = n.composedPath()[0];
              if (!(s instanceof Element) || (s != null && s.shadowRoot))
                return;
              const f = m(s);
              if (!(f instanceof V || f instanceof Document)) return;
              const E = s.closest("[popovertargetaction],[popovertarget]");
              if (E) {
                K(E), n.preventDefault();
                return;
              }
            },
            u = (n) => {
              const s = n.key,
                f = n.target;
              !n.defaultPrevented &&
                f &&
                (s === "Escape" || s === "Esc") &&
                P(f.ownerDocument, !0, !0);
            };
          ((n) => {
            n.addEventListener("click", a),
              n.addEventListener("keydown", u),
              n.addEventListener("pointerdown", j),
              n.addEventListener("pointerup", j);
          })(document),
            x(document);
        }
      },
    },
  ]);
})();
