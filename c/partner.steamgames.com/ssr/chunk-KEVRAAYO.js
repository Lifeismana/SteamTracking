var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(!1);
  return (
    (0, _.useEffect)(() => {
      (0, _.startTransition)(() => _(!0));
    }, []),
    (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    })
  );
}
var _ = (0, _.createContext)(!1);
var _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
  _ =
    "document" in globalThis
      ? document.cookie
          .split(";")
          .find((_) => _.trim().startsWith("timezoneName"))
          ?.split("=")[1]
      : void 0,
  _ = _ && decodeURIComponent(_);
function _() {
  "document" in globalThis &&
    (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
}
_();
function _() {
  return _().languages.map((_) => _(_.strISOCode));
}
function _(_) {
  return _.length == 2 && _.COUNTRY ? `${_}-${_.COUNTRY}` : _;
}
var _ = _(_(), 1);
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.default.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return (
    _.push(_.substr(_)), _.default.createElement(_.default.Fragment, null, ..._)
  );
}
function _(_) {
  return _.toLocaleString(_());
}
function _(_, _, _) {
  let _;
  _ === void 0 || _ === !0 || _ === !1
    ? (_ = {
        weekday: _ ? "long" : "short",
        year: _ ? void 0 : "numeric",
      })
    : (_ = _);
  let _ = new Date(_ * 1e3),
    _ = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      year: "numeric",
      month: "short",
      day: "numeric",
      ..._,
    };
  return _.toLocaleDateString(_(), _);
}
function _(_) {
  let _ = new Date();
  _.setHours(15);
  let _ = _.toLocaleTimeString(_, {
      hour: "numeric",
    }),
    _ = _.toLocaleTimeString(_, {
      hour: "numeric",
      hour12: !1,
    });
  return _ == _;
}
function _(_, _, _) {
  let _ = new Date(_ * 1e3),
    _ = {
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h23",
    },
    _ = {
      hour: "numeric",
      minute: "2-digit",
    },
    _ = _(),
    _ = {
      ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
      ..._,
    };
  return _.toLocaleTimeString(_, _);
}
function _() {
  return _().languages[0];
}
export { _, _, _, _, _, _, _, _, _ };
