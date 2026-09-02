/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [5557],
    {
      39234: (D, C, u) => {
        u.d(C, { A: () => x });
        function m(o, p) {
          return o.classList
            ? !!p && o.classList.contains(p)
            : (" " + (o.className.baseVal || o.className) + " ").indexOf(
                " " + p + " ",
              ) !== -1;
        }
        function x(o, p) {
          o.classList
            ? o.classList.add(p)
            : m(o, p) ||
              (typeof o.className == "string"
                ? (o.className = o.className + " " + p)
                : o.setAttribute(
                    "class",
                    ((o.className && o.className.baseVal) || "") + " " + p,
                  ));
        }
      },
      16673: (D, C, u) => {
        u.d(C, { A: () => x });
        function m(o, p) {
          return o
            .replace(new RegExp("(^|\\s)" + p + "(?:\\s|$)", "g"), "$1")
            .replace(/\s+/g, " ")
            .replace(/^\s*|\s*$/g, "");
        }
        function x(o, p) {
          o.classList
            ? o.classList.remove(p)
            : typeof o.className == "string"
              ? (o.className = m(o.className, p))
              : o.setAttribute(
                  "class",
                  m((o.className && o.className.baseVal) || "", p),
                );
        }
      },
      80724: (D, C, u) => {
        u.d(C, { A: () => X });
        var m = u(58584),
          x = u(81115),
          o = u(42891),
          p = u(39234),
          U = u(16673),
          T = u(90626),
          O = u(72739);
        const k = { disabled: !1 };
        var M = u(28679),
          P = function (d) {
            return d.scrollTop;
          },
          b = "unmounted",
          g = "exited",
          N = "entering",
          S = "entered",
          _ = "exiting",
          E = (function (v) {
            (0, o.A)(d, v);
            function d(t, s) {
              var e;
              e = v.call(this, t, s) || this;
              var a = s,
                n = a && !a.isMounting ? t.enter : t.appear,
                i;
              return (
                (e.appearStatus = null),
                t.in
                  ? n
                    ? ((i = g), (e.appearStatus = N))
                    : (i = S)
                  : t.unmountOnExit || t.mountOnEnter
                    ? (i = b)
                    : (i = g),
                (e.state = { status: i }),
                (e.nextCallback = null),
                e
              );
            }
            d.getDerivedStateFromProps = function (s, e) {
              var a = s.in;
              return a && e.status === b ? { status: g } : null;
            };
            var l = d.prototype;
            return (
              (l.componentDidMount = function () {
                this.updateStatus(!0, this.appearStatus);
              }),
              (l.componentDidUpdate = function (s) {
                var e = null;
                if (s !== this.props) {
                  var a = this.state.status;
                  this.props.in
                    ? a !== N && a !== S && (e = N)
                    : (a === N || a === S) && (e = _);
                }
                this.updateStatus(!1, e);
              }),
              (l.componentWillUnmount = function () {
                this.cancelNextCallback();
              }),
              (l.getTimeouts = function () {
                var s = this.props.timeout,
                  e,
                  a,
                  n;
                return (
                  (e = a = n = s),
                  s != null &&
                    typeof s != "number" &&
                    ((e = s.exit),
                    (a = s.enter),
                    (n = s.appear !== void 0 ? s.appear : a)),
                  { exit: e, enter: a, appear: n }
                );
              }),
              (l.updateStatus = function (s, e) {
                if ((s === void 0 && (s = !1), e !== null))
                  if ((this.cancelNextCallback(), e === N)) {
                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                      var a = this.props.nodeRef
                        ? this.props.nodeRef.current
                        : O.findDOMNode(this);
                      a && P(a);
                    }
                    this.performEnter(s);
                  } else this.performExit();
                else
                  this.props.unmountOnExit &&
                    this.state.status === g &&
                    this.setState({ status: b });
              }),
              (l.performEnter = function (s) {
                var e = this,
                  a = this.props.enter,
                  n = this.context ? this.context.isMounting : s,
                  i = this.props.nodeRef ? [n] : [O.findDOMNode(this), n],
                  r = i[0],
                  f = i[1],
                  c = this.getTimeouts(),
                  h = n ? c.appear : c.enter;
                if ((!s && !a) || k.disabled) {
                  this.safeSetState({ status: S }, function () {
                    e.props.onEntered(r);
                  });
                  return;
                }
                this.props.onEnter(r, f),
                  this.safeSetState({ status: N }, function () {
                    e.props.onEntering(r, f),
                      e.onTransitionEnd(h, function () {
                        e.safeSetState({ status: S }, function () {
                          e.props.onEntered(r, f);
                        });
                      });
                  });
              }),
              (l.performExit = function () {
                var s = this,
                  e = this.props.exit,
                  a = this.getTimeouts(),
                  n = this.props.nodeRef ? void 0 : O.findDOMNode(this);
                if (!e || k.disabled) {
                  this.safeSetState({ status: g }, function () {
                    s.props.onExited(n);
                  });
                  return;
                }
                this.props.onExit(n),
                  this.safeSetState({ status: _ }, function () {
                    s.props.onExiting(n),
                      s.onTransitionEnd(a.exit, function () {
                        s.safeSetState({ status: g }, function () {
                          s.props.onExited(n);
                        });
                      });
                  });
              }),
              (l.cancelNextCallback = function () {
                this.nextCallback !== null &&
                  (this.nextCallback.cancel(), (this.nextCallback = null));
              }),
              (l.safeSetState = function (s, e) {
                (e = this.setNextCallback(e)), this.setState(s, e);
              }),
              (l.setNextCallback = function (s) {
                var e = this,
                  a = !0;
                return (
                  (this.nextCallback = function (n) {
                    a && ((a = !1), (e.nextCallback = null), s(n));
                  }),
                  (this.nextCallback.cancel = function () {
                    a = !1;
                  }),
                  this.nextCallback
                );
              }),
              (l.onTransitionEnd = function (s, e) {
                this.setNextCallback(e);
                var a = this.props.nodeRef
                    ? this.props.nodeRef.current
                    : O.findDOMNode(this),
                  n = s == null && !this.props.addEndListener;
                if (!a || n) {
                  setTimeout(this.nextCallback, 0);
                  return;
                }
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef
                      ? [this.nextCallback]
                      : [a, this.nextCallback],
                    r = i[0],
                    f = i[1];
                  this.props.addEndListener(r, f);
                }
                s != null && setTimeout(this.nextCallback, s);
              }),
              (l.render = function () {
                var s = this.state.status;
                if (s === b) return null;
                var e = this.props,
                  a = e.children,
                  n = e.in,
                  i = e.mountOnEnter,
                  r = e.unmountOnExit,
                  f = e.appear,
                  c = e.enter,
                  h = e.exit,
                  $ = e.timeout,
                  F = e.addEndListener,
                  V = e.onEnter,
                  B = e.onEntering,
                  K = e.onEntered,
                  j = e.onExit,
                  w = e.onExiting,
                  H = e.onExited,
                  z = e.nodeRef,
                  I = (0, x.A)(e, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]);
                return T.createElement(
                  M.A.Provider,
                  { value: null },
                  typeof a == "function"
                    ? a(s, I)
                    : T.cloneElement(T.Children.only(a), I),
                );
              }),
              d
            );
          })(T.Component);
        (E.contextType = M.A), (E.propTypes = {});
        function A() {}
        (E.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: A,
          onEntering: A,
          onEntered: A,
          onExit: A,
          onExiting: A,
          onExited: A,
        }),
          (E.UNMOUNTED = b),
          (E.EXITED = g),
          (E.ENTERING = N),
          (E.ENTERED = S),
          (E.EXITING = _);
        const G = E;
        var W = function (d, l) {
            return (
              d &&
              l &&
              l.split(" ").forEach(function (t) {
                return (0, p.A)(d, t);
              })
            );
          },
          R = function (d, l) {
            return (
              d &&
              l &&
              l.split(" ").forEach(function (t) {
                return (0, U.A)(d, t);
              })
            );
          },
          L = (function (v) {
            (0, o.A)(d, v);
            function d() {
              for (
                var t, s = arguments.length, e = new Array(s), a = 0;
                a < s;
                a++
              )
                e[a] = arguments[a];
              return (
                (t = v.call.apply(v, [this].concat(e)) || this),
                (t.appliedClasses = { appear: {}, enter: {}, exit: {} }),
                (t.onEnter = function (n, i) {
                  var r = t.resolveArguments(n, i),
                    f = r[0],
                    c = r[1];
                  t.removeClasses(f, "exit"),
                    t.addClass(f, c ? "appear" : "enter", "base"),
                    t.props.onEnter && t.props.onEnter(n, i);
                }),
                (t.onEntering = function (n, i) {
                  var r = t.resolveArguments(n, i),
                    f = r[0],
                    c = r[1],
                    h = c ? "appear" : "enter";
                  t.addClass(f, h, "active"),
                    t.props.onEntering && t.props.onEntering(n, i);
                }),
                (t.onEntered = function (n, i) {
                  var r = t.resolveArguments(n, i),
                    f = r[0],
                    c = r[1],
                    h = c ? "appear" : "enter";
                  t.removeClasses(f, h),
                    t.addClass(f, h, "done"),
                    t.props.onEntered && t.props.onEntered(n, i);
                }),
                (t.onExit = function (n) {
                  var i = t.resolveArguments(n),
                    r = i[0];
                  t.removeClasses(r, "appear"),
                    t.removeClasses(r, "enter"),
                    t.addClass(r, "exit", "base"),
                    t.props.onExit && t.props.onExit(n);
                }),
                (t.onExiting = function (n) {
                  var i = t.resolveArguments(n),
                    r = i[0];
                  t.addClass(r, "exit", "active"),
                    t.props.onExiting && t.props.onExiting(n);
                }),
                (t.onExited = function (n) {
                  var i = t.resolveArguments(n),
                    r = i[0];
                  t.removeClasses(r, "exit"),
                    t.addClass(r, "exit", "done"),
                    t.props.onExited && t.props.onExited(n);
                }),
                (t.resolveArguments = function (n, i) {
                  return t.props.nodeRef
                    ? [t.props.nodeRef.current, n]
                    : [n, i];
                }),
                (t.getClassNames = function (n) {
                  var i = t.props.classNames,
                    r = typeof i == "string",
                    f = r && i ? i + "-" : "",
                    c = r ? "" + f + n : i[n],
                    h = r ? c + "-active" : i[n + "Active"],
                    $ = r ? c + "-done" : i[n + "Done"];
                  return {
                    baseClassName: c,
                    activeClassName: h,
                    doneClassName: $,
                  };
                }),
                t
              );
            }
            var l = d.prototype;
            return (
              (l.addClass = function (s, e, a) {
                var n = this.getClassNames(e)[a + "ClassName"],
                  i = this.getClassNames("enter"),
                  r = i.doneClassName;
                e === "appear" && a === "done" && r && (n += " " + r),
                  a === "active" && s && P(s),
                  n && ((this.appliedClasses[e][a] = n), W(s, n));
              }),
              (l.removeClasses = function (s, e) {
                var a = this.appliedClasses[e],
                  n = a.base,
                  i = a.active,
                  r = a.done;
                (this.appliedClasses[e] = {}),
                  n && R(s, n),
                  i && R(s, i),
                  r && R(s, r);
              }),
              (l.render = function () {
                var s = this.props,
                  e = s.classNames,
                  a = (0, x.A)(s, ["classNames"]);
                return T.createElement(
                  G,
                  (0, m.A)({}, a, {
                    onEnter: this.onEnter,
                    onEntered: this.onEntered,
                    onEntering: this.onEntering,
                    onExit: this.onExit,
                    onExiting: this.onExiting,
                    onExited: this.onExited,
                  }),
                );
              }),
              d
            );
          })(T.Component);
        (L.defaultProps = { classNames: "" }), (L.propTypes = {});
        const X = L;
      },
      28679: (D, C, u) => {
        u.d(C, { A: () => x });
        var m = u(90626);
        const x = m.createContext(null);
      },
    },
  ]);
})();
