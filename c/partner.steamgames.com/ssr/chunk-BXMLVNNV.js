var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { children: _, "flow-children": _, ..._ } = _,
    { gamepadEvents: _ } = _(_);
  _ && (_.layout = _(_)),
    _.onOKButton ||
      ("onClick" in _.props && _.props.onClick && (_.onOKButton = _));
  let { ref: _, node: _ } = _(_);
  _(_, _);
  let _ = _(_, _.props?.ref);
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _.cloneElement(_, {
      ..._.props,
      ref: _,
    }),
  });
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let _ = typeof matchMedia == "function" ? matchMedia : _,
    _ = (0, _.useMemo)(() => _(_), [_, _]),
    [_, _] = (0, _.useState)(_ ? _.matches : !1);
  return (
    (0, _.useEffect)(() => {
      if (!_) return () => {};
      _(_.matches);
      function _(_) {
        _(_.matches);
      }
      return (
        _.addEventListener("change", _),
        () => _.removeEventListener("change", _)
      );
    }, [_]),
    _
  );
}
function _() {
  return null;
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _() {
  let _ = {},
    _ = _(_);
  if (_)
    try {
      let _ = JSON.parse(_);
      _ &&
        typeof _ == "object" &&
        (_(_._, "number") &&
          _._._ > 0 &&
          (_.viewportWidth = {
            value: _._._,
            source: _._._,
          }),
        _(_._, "number") &&
          _._._ > 0 &&
          (_.viewportHeight = {
            value: _._._,
            source: _._._,
          }));
    } catch (_) {
      console.error(`Failed to parse existing client hints cookie: "${_}"`);
    }
  return _;
}
function _(_) {
  let _ = {};
  _.viewportWidth &&
    (_._ = {
      _: _.viewportWidth.value,
      _: _.viewportWidth.source,
    }),
    _.viewportHeight &&
      (_._ = {
        _: _.viewportHeight.value,
        _: _.viewportHeight.source,
      }),
    Object.keys(_).length === 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_, _) {
  if (!_ || typeof _ != "object") return !1;
  let _ = _;
  return typeof _._ != "number" || _._ === void 0
    ? !1
    : typeof _ == "string"
      ? typeof _._ === _
      : _(_._);
}
function _() {
  let _ = _();
  return (
    _.viewportWidth?.source === 2 &&
      (_.viewportWidth.value = window.innerWidth),
    _.viewportHeight?.source === 2 &&
      (_.viewportHeight.value = window.innerHeight),
    _
  );
}
var _ = _(_(), 1);
var _ = (0, _.createContext)({});
function _(_) {
  let [_] = (0, _.useState)(_);
  return (
    (0, _.useEffect)(() => {
      let _ = [];
      if (_.viewportWidth?.source === 2 || _.viewportHeight?.source === 2) {
        let _ = () =>
          _({
            ..._,
            viewportWidth:
              _.viewportWidth?.source === 2
                ? {
                    value: window.innerWidth,
                    source: 2,
                  }
                : _.viewportWidth,
            viewportHeight:
              _.viewportHeight?.source === 2
                ? {
                    value: window.innerHeight,
                    source: 2,
                  }
                : _.viewportHeight,
          });
        document.addEventListener("resize", _),
          _.push(() => document.removeEventListener("resize", _));
      }
      return () => _.forEach((_) => _());
    }, [_]),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = ["initial", "sm", "md", "lg"],
  _ = {
    _: 768,
    _: 940,
    _: 1240,
  },
  _ = (0, _.createContext)({
    ..._,
    _: "lg",
  });
function _(_) {
  let { children: _, breakpoints: _ = {} } = _,
    _ = (0, _.useContext)(_),
    _ = {
      _: _._ ?? _._,
      _: _._ ?? _._,
      _: _._ ?? _._,
    },
    _ = _(_),
    { _: _, _: _, _: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        _: _,
        _: _,
        _: _,
        _: _,
      }),
      [_, _, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { formFactor: _, children: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useMemo)(
      () => ({
        ..._,
        _: _ ?? _._,
      }),
      [_, _],
    );
  return _
    ? (0, _.jsx)(_.Provider, {
        value: _,
        children: _,
      })
    : (0, _.jsx)(_.Fragment, {
        children: _,
      });
}
function _(_) {
  let _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    _ = _(`(min-width: ${_._}px)`),
    [_, _] = (0, _.useState)(!1);
  (0, _.useEffect)(() => _(!0), []);
  let _ = _();
  return _
    ? _
      ? "lg"
      : _
        ? "md"
        : _
          ? "sm"
          : "initial"
    : _.viewportWidth
      ? _.viewportWidth.value >= _._
        ? "lg"
        : _.viewportWidth.value >= _._
          ? "md"
          : _.viewportWidth.value >= _._
            ? "sm"
            : "initial"
      : "lg";
}
function _() {
  return (0, _.useContext)(_)._;
}
var _ = _.reduce((_, _, _) => ((_[_] = _), _), {});
var _ = _.reduce((_, _, _) => ((_[_] = _), _), {});
function _(_, _) {
  if (typeof _ != "object") return _;
  for (let _ = _[_]; _ >= 0; _--) if (_[_] in _) return _[_[_]];
  return _.initial;
}
var _ = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0,
};
function _(_) {
  return !!_[_];
}
function _(_, _, _) {
  let _ = [],
    _ = {},
    _ = {},
    { extracted: _, remaining: _ } = _(_, _);
  for (let _ of _) {
    if (!(_.prop in _)) continue;
    let _ = _[_.prop];
    if (
      _ !== void 0 &&
      (_.responsive && (_ = _(_, _.formFactor)), _ !== void 0)
    ) {
      if (_.className) {
        if (
          !_.cssProperty &&
          !_.dataProperty &&
          typeof _.className == "string" &&
          !_
        )
          continue;
        let _ = typeof _.className == "function" ? _.className(_) : _.className;
        _.push(_);
      }
      if (_.cssProperty)
        if (typeof _.cssProperty == "function") {
          let _ = _.cssProperty(_, _, _.formFactor);
          if (_.length && Array.isArray(_[0]))
            _.forEach(([_, _]) => (_[_] = _));
          else {
            let _ = _;
            _[_[0]] = _[1];
          }
        } else _[_.cssProperty] = _;
      if (_.dataProperty)
        if (typeof _.dataProperty == "function") {
          let [_, _] = _.dataProperty(_);
          _[`data-${_}`] = _;
        } else _[`data-${_.dataProperty}`] = _;
    }
  }
  return (
    "className" in _ && typeof _.className == "string" && _.push(_.className),
    "style" in _ &&
      _.style &&
      typeof _.style == "object" &&
      Object.assign(_, _.style),
    {
      ..._,
      ..._,
      className: _.join(" "),
      style: _,
    }
  );
}
function _(_, _) {
  let _ = {
    remaining: {
      ..._,
    },
    extracted: {},
  };
  for (let _ of _) {
    let _ = _.prop;
    _ in _.remaining &&
      ((_.extracted[_] = _.remaining[_]), delete _.remaining[_]);
  }
  return _;
}
function _(_, _) {
  let _ = _();
  return _(_, _, {
    formFactor: _,
  });
}
function _(_) {
  return _(_) ? `var(--spacing-${_})` : _;
}
function _(_) {
  if (!(_[_.length - 1] == "%")) return `var(--color-${_})`;
  let [_, _] = _.split(" ");
  return `rgb( from ${`var(--color-${_})`} r g b / ${_} )`;
}
function _(_, _) {
  return _.startsWith("text") ? `var(--color-${_}-${_})` : _(_);
}
function _(_) {
  return _.startsWith("text") ? `var(--color-${_})` : _(_);
}
var _ = {};
_(_, {
  AlignSelf: () => _,
  Background: () => _,
  Border: () => _,
  BorderColor: () => _,
  Cursor: () => _,
  Display: () => _,
  Elevation: () => _,
  FlexBasis: () => _,
  FlexGrow: () => _,
  FlexShrink: () => _,
  GridArea: () => _,
  GridColumn: () => _,
  GridColumnEnd: () => _,
  GridColumnStart: () => _,
  GridRow: () => _,
  GridRowEnd: () => _,
  GridRowStart: () => _,
  Height: () => _,
  Inset: () => _,
  JustifySelf: () => _,
  MaxHeight: () => _,
  MaxWidth: () => _,
  MinHeight: () => _,
  MinWidth: () => _,
  Outline: () => _,
  Overflow: () => _,
  Position: () => _,
  "Radius-full": () => _,
  "Radius-lg": () => _,
  "Radius-md": () => _,
  "Radius-none": () => _,
  "Radius-sm": () => _,
  TextAlign: () => _,
  Width: () => _,
  ZIndex: () => _,
  default: () => _,
  "m-0": () => _,
  "m-1": () => _,
  "m-2": () => _,
  "m-3": () => _,
  "m-4": () => _,
  "m-5": () => _,
  "m-6": () => _,
  "m-7": () => _,
  "m-8": () => _,
  "m-9": () => _,
  "mb-0": () => _,
  "mb-1": () => _,
  "mb-2": () => _,
  "mb-3": () => _,
  "mb-4": () => _,
  "mb-5": () => _,
  "mb-6": () => _,
  "mb-7": () => _,
  "mb-8": () => _,
  "mb-9": () => _,
  "me-0": () => _,
  "me-1": () => _,
  "me-2": () => _,
  "me-3": () => _,
  "me-4": () => _,
  "me-5": () => _,
  "me-6": () => _,
  "me-7": () => _,
  "me-8": () => _,
  "me-9": () => _,
  "ml-0": () => _,
  "ml-1": () => _,
  "ml-2": () => _,
  "ml-3": () => _,
  "ml-4": () => _,
  "ml-5": () => _,
  "ml-6": () => _,
  "ml-7": () => _,
  "ml-8": () => _,
  "ml-9": () => _,
  "mr-0": () => _,
  "mr-1": () => _,
  "mr-2": () => _,
  "mr-3": () => _,
  "mr-4": () => _,
  "mr-5": () => _,
  "mr-6": () => _,
  "mr-7": () => _,
  "mr-8": () => _,
  "mr-9": () => _,
  "ms-0": () => _,
  "ms-1": () => _,
  "ms-2": () => _,
  "ms-3": () => _,
  "ms-4": () => _,
  "ms-5": () => _,
  "ms-6": () => _,
  "ms-7": () => _,
  "ms-8": () => _,
  "ms-9": () => _,
  "mt-0": () => _,
  "mt-1": () => _,
  "mt-2": () => _,
  "mt-3": () => _,
  "mt-4": () => _,
  "mt-5": () => _,
  "mt-6": () => _,
  "mt-7": () => _,
  "mt-8": () => _,
  "mt-9": () => _,
  "mx-0": () => _,
  "mx-1": () => _,
  "mx-2": () => _,
  "mx-3": () => _,
  "mx-4": () => _,
  "mx-5": () => _,
  "mx-6": () => _,
  "mx-7": () => _,
  "mx-8": () => _,
  "mx-9": () => _,
  "my-0": () => _,
  "my-1": () => _,
  "my-2": () => _,
  "my-3": () => _,
  "my-4": () => _,
  "my-5": () => _,
  "my-6": () => _,
  "my-7": () => _,
  "my-8": () => _,
  "my-9": () => _,
  "p-0": () => _,
  "p-1": () => _,
  "p-2": () => _,
  "p-3": () => _,
  "p-4": () => _,
  "p-5": () => _,
  "p-6": () => _,
  "p-7": () => _,
  "p-8": () => _,
  "p-9": () => _,
  "pb-0": () => _,
  "pb-1": () => _,
  "pb-2": () => _,
  "pb-3": () => _,
  "pb-4": () => _,
  "pb-5": () => _,
  "pb-6": () => _,
  "pb-7": () => _,
  "pb-8": () => _,
  "pb-9": () => _,
  "pe-0": () => _,
  "pe-1": () => _,
  "pe-2": () => _,
  "pe-3": () => _,
  "pe-4": () => _,
  "pe-5": () => _,
  "pe-6": () => _,
  "pe-7": () => _,
  "pe-8": () => _,
  "pe-9": () => _,
  "pl-0": () => _,
  "pl-1": () => _,
  "pl-2": () => _,
  "pl-3": () => _,
  "pl-4": () => _,
  "pl-5": () => _,
  "pl-6": () => _,
  "pl-7": () => _,
  "pl-8": () => _,
  "pl-9": () => _,
  "pr-0": () => _,
  "pr-1": () => _,
  "pr-2": () => _,
  "pr-3": () => _,
  "pr-4": () => _,
  "pr-5": () => _,
  "pr-6": () => _,
  "pr-7": () => _,
  "pr-8": () => _,
  "pr-9": () => _,
  "ps-0": () => _,
  "ps-1": () => _,
  "ps-2": () => _,
  "ps-3": () => _,
  "ps-4": () => _,
  "ps-5": () => _,
  "ps-6": () => _,
  "ps-7": () => _,
  "ps-8": () => _,
  "ps-9": () => _,
  "pt-0": () => _,
  "pt-1": () => _,
  "pt-2": () => _,
  "pt-3": () => _,
  "pt-4": () => _,
  "pt-5": () => _,
  "pt-6": () => _,
  "pt-7": () => _,
  "pt-8": () => _,
  "pt-9": () => _,
  "px-0": () => _,
  "px-1": () => _,
  "px-2": () => _,
  "px-3": () => _,
  "px-4": () => _,
  "px-5": () => _,
  "px-6": () => _,
  "px-7": () => _,
  "px-8": () => _,
  "px-9": () => _,
  "py-0": () => _,
  "py-1": () => _,
  "py-2": () => _,
  "py-3": () => _,
  "py-4": () => _,
  "py-5": () => _,
  "py-6": () => _,
  "py-7": () => _,
  "py-8": () => _,
  "py-9": () => _,
});
var _ = "cD5fDZ-jT1g-";
var _ = "k3GO3PU6BdI-";
var _ = "IVDwkZAYbnU-";
var _ = "M65285yI30U-";
var _ = "_84n0A1vK1VA-";
var _ = "ynQbvqjMka0-";
var _ = "hXcKn1QHO-c-";
var _ = "fNje6SVrtmA-";
var _ = "Rif4t4rZl-E-";
var _ = "_05cnJzX7Alc-";
var _ = "G15G1x5OqtU-";
var _ = "VesercWhrxM-";
var _ = "AXYwOwdm-sg-";
var _ = "xQ83OZy3LmY-";
var _ = "O288XP0PAJc-";
var _ = "jePaGG74naw-";
var _ = "-Q58LxIKgzo-";
var _ = "rD9-x9tIMM4-";
var _ = "FrWXzxtyVy4-";
var _ = "Yc6E3Nx91Aw-";
var _ = "EQZyG5H9IcY-";
var _ = "_8v2UDyN0WMc-";
var _ = "N3oPAEAfxy8-";
var _ = "N96yYaobbSw-";
var _ = "_39I6pXbSIEc-";
var _ = "VtBXofDAqRs-";
var _ = "wD7l9PLD-b8-";
var _ = "-HEycg2HIps-";
var _ = "R6mxiPUiDK4-";
var _ = "n3CFJnQTxMk-";
var _ = "_8flCfUfaLs8-";
var _ = "J8ZdQ-yEU5o-";
var _ = "SXmRNU-nKEQ-";
var _ = "NUdwAdC0oMQ-";
var _ = "v99bxlgdHKI-";
var _ = "sZHMMS8W6ho-";
var _ = "_9CwukUd1nL0-";
var _ = "yYyVLR03nJs-";
var _ = "_8GW4dd0Q244-";
var _ = "Uc3OsoBqTFc-";
var _ = "WPZe5FWUZqA-";
var _ = "JlZ7Yxmlee4-";
var _ = "U71XV0tiznI-";
var _ = "_6ZnkShZCwQQ-";
var _ = "qz4-0j5eii0-";
var _ = "EqZV-jRaxs0-";
var _ = "_5dETHxmN338-";
var _ = "A7Bqxk3Ta-4-";
var _ = "DvLdzy3b--I-";
var _ = "NSFIY7RIww8-";
var _ = "_9JEXoEL74Xk-";
var _ = "kAl-kvSpQRM-";
var _ = "w--FxC-EhbA-";
var _ = "czYTDqZppFY-";
var _ = "civC56fC9M0-";
var _ = "COlRXQyGQY8-";
var _ = "WQ0rHzTXZ-0-";
var _ = "IYiLuf9re5o-";
var _ = "WbU6CRjPHNQ-";
var _ = "MastOa-iccs-";
var _ = "OWcYiAFfY9I-";
var _ = "gEqFTm2YSHw-";
var _ = "UXsFoXebTvs-";
var _ = "n3vqcg1zM3k-";
var _ = "RnYq1o1Ngtw-";
var _ = "_9ta8MMBJvbw-";
var _ = "-b4m1DOAfWc-";
var _ = "JFkM68zn-Eg-";
var _ = "M3ZEy0RYuZM-";
var _ = "ODnmzhGGInk-";
var _ = "_9oZ4yGyoArk-";
var _ = "htuI5xmcT-A-";
var _ = "DeQ7AQ-oiqM-";
var _ = "nDB00D-j0ws-";
var _ = "_45ZXQVcBz6s-";
var _ = "FZ8llmQ3JOo-";
var _ = "_6wH7BtMHb6k-";
var _ = "_2YgcRMW6fU0-";
var _ = "uD0kF1g6k1I-";
var _ = "M13Y0NEF4nY-";
var _ = "x7aek9AELsc-";
var _ = "-FdN6hT3GOg-";
var _ = "BO39e4j732o-";
var _ = "hFcnhLgdygQ-";
var _ = "VNO68Yy66hI-";
var _ = "Vb88-PSwllI-";
var _ = "Ya2-KaPI68I-";
var _ = "pG2VZrh8R3I-";
var _ = "KJN1DH9J73k-";
var _ = "GB4HXY-Z5Oc-";
var _ = "LLKBsw0Fpk0-";
var _ = "_57M6ApNFamc-";
var _ = "_-4jX74On8NE-";
var _ = "AXepu8oo9RE-";
var _ = "-LpHO9q7i8g-";
var _ = "qdgHaAqLaa0-";
var _ = "pV5tCNoMtbI-";
var _ = "aE8YCNzruGU-";
var _ = "xZWPSQne-6U-";
var _ = "_29CuY444nP4-";
var _ = "gU3ctXGhDpY-";
var _ = "Mm8eps-gSLU-";
var _ = "o7pQ-V4erN0-";
var _ = "gEYubrN31lQ-";
var _ = "_957OoQ-ltZQ-";
var _ = "jrYBTQyyfTk-";
var _ = "_2kJgSUrZT6A-";
var _ = "AJ1s8-YRYn8-";
var _ = "XrLMBnRWcf8-";
var _ = "NtE-F1XIymc-";
var _ = "m6-45owYHQE-";
var _ = "KCiUs6PjCY8-";
var _ = "EzluAHnQq-U-";
var _ = "SFr79GMTc3I-";
var _ = "s16Da19EcGc-";
var _ = "rWB03W-1bvI-";
var _ = "Yfdnw9Ibfng-";
var _ = "_9Mw9xZI-naQ-";
var _ = "itgb-TxyKuM-";
var _ = "zNs1n6g517I-";
var _ = "PTHzqJbosPA-";
var _ = "_8-IGQSOSm-c-";
var _ = "xk3tvu1S3KU-";
var _ = "_2t6LPNplJqk-";
var _ = "MSjglJImAOg-";
var _ = "Ib31k7HnTLs-";
var _ = "h0Clmfm-Xq0-";
var _ = "JiAH6R0q3xA-";
var _ = "BmM1dVUqyj4-";
var _ = "hdsvqHB8e0o-";
var _ = "wU9HOYrmuOk-";
var _ = "JLSthueu4yA-";
var _ = "NAICXgHSTOc-";
var _ = "RSMFlrSIQxc-";
var _ = "qItBpw-QKmE-";
var _ = "oniaHVljHxs-";
var _ = "lFXMHEZb52I-";
var _ = "rDT-VfIeye0-";
var _ = "_04xbo7prCj8-";
var _ = "Od-abF2Xv5E-";
var _ = "BGcyquJmbik-";
var _ = "_7BW8SSywRL4-";
var _ = "oXzBQndv-nI-";
var _ = "o0FgT9Ps0k8-";
var _ = "zPUjQbj92Zc-";
var _ = "ypzQsYv-FIA-";
var _ = "QaldltkhiFA-";
var _ = "v7gLGMyX-Hg-";
var _ = "odgExRsq6iM-";
var _ = "CXGttUI82hg-";
var _ = "_2TLEgGq6VKQ-";
var _ = "zzJAfSdIHGw-";
var _ = "hBhqQbQsMCE-";
var _ = "HuH8AIA8LCI-";
var _ = "sl84JeBsoiQ-";
var _ = "-jdVxEq4bnU-";
var _ = "CnDcstEY1m0-";
var _ = "_6maW9rD6HGk-";
var _ = "_62eH5CFZO68-";
var _ = "_6SsCvYCWCu0-";
var _ = "pFvN84mSFdU-";
var _ = "poUicIyCLDs-";
var _ = "IJ6pCpKRp30-";
var _ = "PK0QQs33KLM-";
var _ = "_6OZtGY-ZF1w-";
var _ = "ijkNGN6Twgo-";
var _ = "_3BxO8p4zfOg-";
var _ = "vXa77YL3E7s-";
var _ = "HaU4riTtQiI-";
var _ = "vDs9kxwyWW8-";
var _ = "qOSkaK9PPAU-";
var _ = "hFlsIFjiIP4-";
var _ = "yKoPaV7wNVY-";
var _ = "ui8lYxytmcE-";
var _ = "_9nGvtoVpSdc-";
var _ = "phv-chHramg-";
var _ = "_0yt57EOhXdw-";
var _ = "ZlUQyhkLy-A-";
var _ = "IuQt27ov4vk-";
var _ = "lFfC49x0MwE-";
var _ = "rT-SsbwEeY8-";
var _ = "_3gV-E6rPceQ-";
var _ = "TP7v5DMqUmQ-";
var _ = "sKzj6gOALZE-";
var _ = "gJSCcWuW-2s-";
var _ = "_3RiaDNMV3ZY-";
var _ = "gAwNJYDeyqY-";
var _ = "RGNh19we3Yo-";
var _ = "qhO1q0--Jxo-";
var _ = "AiVHhxr0g8k-";
var _ = "HmiEjCDqdZs-";
var _ = "_2nMQDdm70Xk-";
var _ = "iELic4-oxnw-";
var _ = "Eap44BqZ3-Y-";
var _ = "lWNIGdpQpu0-";
var _ = "G-NVF2dxX0c-";
var _ = "zstMj4yZycU-";
var _ = "qUnkcQS5syk-";
var _ = "WOb8-hswGw4-";
var _ = "_4qpq-lguLp8-";
var _ = "EY25wcMPP7Y-";
var _ = "-vMtXhOsvLI-";
var _ = "_-9uI-wxUdhU-";
var _ = "ZCOGRQeExOo-";
var _ = "vpiI2bS0S6s-";
var _ = "O86colydcoQ-";
var _ = "qMhP3FEplu8-";
var _ = "_6vV4n--M-JE-";
var _ = "JFSQ3YZWgoA-";
var _ = "kYCFEvSPoH4-";
var _ = "i4-G5sUM9mM-";
var _ = "XX-999vVG6s-";
var _ = "_6NzFyBm-oPo-";
var _ = "FOtlLGklAW4-";
var _ = "sVylyJLhFdw-";
var _ = {
  "m-0": "cD5fDZ-jT1g-",
  "m-1": "k3GO3PU6BdI-",
  "m-2": "IVDwkZAYbnU-",
  "m-3": "M65285yI30U-",
  "m-4": "_84n0A1vK1VA-",
  "m-5": "ynQbvqjMka0-",
  "m-6": "hXcKn1QHO-c-",
  "m-7": "fNje6SVrtmA-",
  "m-8": "Rif4t4rZl-E-",
  "m-9": "_05cnJzX7Alc-",
  "mx-0": "G15G1x5OqtU-",
  "mx-1": "VesercWhrxM-",
  "mx-2": "AXYwOwdm-sg-",
  "mx-3": "xQ83OZy3LmY-",
  "mx-4": "O288XP0PAJc-",
  "mx-5": "jePaGG74naw-",
  "mx-6": "-Q58LxIKgzo-",
  "mx-7": "rD9-x9tIMM4-",
  "mx-8": "FrWXzxtyVy4-",
  "mx-9": "Yc6E3Nx91Aw-",
  "my-0": "EQZyG5H9IcY-",
  "my-1": "_8v2UDyN0WMc-",
  "my-2": "N3oPAEAfxy8-",
  "my-3": "N96yYaobbSw-",
  "my-4": "_39I6pXbSIEc-",
  "my-5": "VtBXofDAqRs-",
  "my-6": "wD7l9PLD-b8-",
  "my-7": "-HEycg2HIps-",
  "my-8": "R6mxiPUiDK4-",
  "my-9": "n3CFJnQTxMk-",
  "mt-0": "_8flCfUfaLs8-",
  "mt-1": "J8ZdQ-yEU5o-",
  "mt-2": "SXmRNU-nKEQ-",
  "mt-3": "NUdwAdC0oMQ-",
  "mt-4": "v99bxlgdHKI-",
  "mt-5": "sZHMMS8W6ho-",
  "mt-6": "_9CwukUd1nL0-",
  "mt-7": "yYyVLR03nJs-",
  "mt-8": "_8GW4dd0Q244-",
  "mt-9": "Uc3OsoBqTFc-",
  "mr-0": "WPZe5FWUZqA-",
  "mr-1": "JlZ7Yxmlee4-",
  "mr-2": "U71XV0tiznI-",
  "mr-3": "_6ZnkShZCwQQ-",
  "mr-4": "qz4-0j5eii0-",
  "mr-5": "EqZV-jRaxs0-",
  "mr-6": "_5dETHxmN338-",
  "mr-7": "A7Bqxk3Ta-4-",
  "mr-8": "DvLdzy3b--I-",
  "mr-9": "NSFIY7RIww8-",
  "mb-0": "_9JEXoEL74Xk-",
  "mb-1": "kAl-kvSpQRM-",
  "mb-2": "w--FxC-EhbA-",
  "mb-3": "czYTDqZppFY-",
  "mb-4": "civC56fC9M0-",
  "mb-5": "COlRXQyGQY8-",
  "mb-6": "WQ0rHzTXZ-0-",
  "mb-7": "IYiLuf9re5o-",
  "mb-8": "WbU6CRjPHNQ-",
  "mb-9": "MastOa-iccs-",
  "ml-0": "OWcYiAFfY9I-",
  "ml-1": "gEqFTm2YSHw-",
  "ml-2": "UXsFoXebTvs-",
  "ml-3": "n3vqcg1zM3k-",
  "ml-4": "RnYq1o1Ngtw-",
  "ml-5": "_9ta8MMBJvbw-",
  "ml-6": "-b4m1DOAfWc-",
  "ml-7": "JFkM68zn-Eg-",
  "ml-8": "M3ZEy0RYuZM-",
  "ml-9": "ODnmzhGGInk-",
  "ms-0": "_9oZ4yGyoArk-",
  "ms-1": "htuI5xmcT-A-",
  "ms-2": "DeQ7AQ-oiqM-",
  "ms-3": "nDB00D-j0ws-",
  "ms-4": "_45ZXQVcBz6s-",
  "ms-5": "FZ8llmQ3JOo-",
  "ms-6": "_6wH7BtMHb6k-",
  "ms-7": "_2YgcRMW6fU0-",
  "ms-8": "uD0kF1g6k1I-",
  "ms-9": "M13Y0NEF4nY-",
  "me-0": "x7aek9AELsc-",
  "me-1": "-FdN6hT3GOg-",
  "me-2": "BO39e4j732o-",
  "me-3": "hFcnhLgdygQ-",
  "me-4": "VNO68Yy66hI-",
  "me-5": "Vb88-PSwllI-",
  "me-6": "Ya2-KaPI68I-",
  "me-7": "pG2VZrh8R3I-",
  "me-8": "KJN1DH9J73k-",
  "me-9": "GB4HXY-Z5Oc-",
  "p-0": "LLKBsw0Fpk0-",
  "p-1": "_57M6ApNFamc-",
  "p-2": "_-4jX74On8NE-",
  "p-3": "AXepu8oo9RE-",
  "p-4": "-LpHO9q7i8g-",
  "p-5": "qdgHaAqLaa0-",
  "p-6": "pV5tCNoMtbI-",
  "p-7": "aE8YCNzruGU-",
  "p-8": "xZWPSQne-6U-",
  "p-9": "_29CuY444nP4-",
  "px-0": "gU3ctXGhDpY-",
  "px-1": "Mm8eps-gSLU-",
  "px-2": "o7pQ-V4erN0-",
  "px-3": "gEYubrN31lQ-",
  "px-4": "_957OoQ-ltZQ-",
  "px-5": "jrYBTQyyfTk-",
  "px-6": "_2kJgSUrZT6A-",
  "px-7": "AJ1s8-YRYn8-",
  "px-8": "XrLMBnRWcf8-",
  "px-9": "NtE-F1XIymc-",
  "py-0": "m6-45owYHQE-",
  "py-1": "KCiUs6PjCY8-",
  "py-2": "EzluAHnQq-U-",
  "py-3": "SFr79GMTc3I-",
  "py-4": "s16Da19EcGc-",
  "py-5": "rWB03W-1bvI-",
  "py-6": "Yfdnw9Ibfng-",
  "py-7": "_9Mw9xZI-naQ-",
  "py-8": "itgb-TxyKuM-",
  "py-9": "zNs1n6g517I-",
  "pt-0": "PTHzqJbosPA-",
  "pt-1": "_8-IGQSOSm-c-",
  "pt-2": "xk3tvu1S3KU-",
  "pt-3": "_2t6LPNplJqk-",
  "pt-4": "MSjglJImAOg-",
  "pt-5": "Ib31k7HnTLs-",
  "pt-6": "h0Clmfm-Xq0-",
  "pt-7": "JiAH6R0q3xA-",
  "pt-8": "BmM1dVUqyj4-",
  "pt-9": "hdsvqHB8e0o-",
  "pr-0": "wU9HOYrmuOk-",
  "pr-1": "JLSthueu4yA-",
  "pr-2": "NAICXgHSTOc-",
  "pr-3": "RSMFlrSIQxc-",
  "pr-4": "qItBpw-QKmE-",
  "pr-5": "oniaHVljHxs-",
  "pr-6": "lFXMHEZb52I-",
  "pr-7": "rDT-VfIeye0-",
  "pr-8": "_04xbo7prCj8-",
  "pr-9": "Od-abF2Xv5E-",
  "pb-0": "BGcyquJmbik-",
  "pb-1": "_7BW8SSywRL4-",
  "pb-2": "oXzBQndv-nI-",
  "pb-3": "o0FgT9Ps0k8-",
  "pb-4": "zPUjQbj92Zc-",
  "pb-5": "ypzQsYv-FIA-",
  "pb-6": "QaldltkhiFA-",
  "pb-7": "v7gLGMyX-Hg-",
  "pb-8": "odgExRsq6iM-",
  "pb-9": "CXGttUI82hg-",
  "pl-0": "_2TLEgGq6VKQ-",
  "pl-1": "zzJAfSdIHGw-",
  "pl-2": "hBhqQbQsMCE-",
  "pl-3": "HuH8AIA8LCI-",
  "pl-4": "sl84JeBsoiQ-",
  "pl-5": "-jdVxEq4bnU-",
  "pl-6": "CnDcstEY1m0-",
  "pl-7": "_6maW9rD6HGk-",
  "pl-8": "_62eH5CFZO68-",
  "pl-9": "_6SsCvYCWCu0-",
  "ps-0": "pFvN84mSFdU-",
  "ps-1": "poUicIyCLDs-",
  "ps-2": "IJ6pCpKRp30-",
  "ps-3": "PK0QQs33KLM-",
  "ps-4": "_6OZtGY-ZF1w-",
  "ps-5": "ijkNGN6Twgo-",
  "ps-6": "_3BxO8p4zfOg-",
  "ps-7": "vXa77YL3E7s-",
  "ps-8": "HaU4riTtQiI-",
  "ps-9": "vDs9kxwyWW8-",
  "pe-0": "qOSkaK9PPAU-",
  "pe-1": "hFlsIFjiIP4-",
  "pe-2": "yKoPaV7wNVY-",
  "pe-3": "ui8lYxytmcE-",
  "pe-4": "_9nGvtoVpSdc-",
  "pe-5": "phv-chHramg-",
  "pe-6": "_0yt57EOhXdw-",
  "pe-7": "ZlUQyhkLy-A-",
  "pe-8": "IuQt27ov4vk-",
  "pe-9": "lFfC49x0MwE-",
  Width: "rT-SsbwEeY8-",
  MaxWidth: "_3gV-E6rPceQ-",
  MinWidth: "TP7v5DMqUmQ-",
  Height: "sKzj6gOALZE-",
  MaxHeight: "gJSCcWuW-2s-",
  MinHeight: "_3RiaDNMV3ZY-",
  FlexBasis: "gAwNJYDeyqY-",
  FlexGrow: "RGNh19we3Yo-",
  FlexShrink: "qhO1q0--Jxo-",
  "Radius-none": "AiVHhxr0g8k-",
  "Radius-sm": "HmiEjCDqdZs-",
  "Radius-md": "_2nMQDdm70Xk-",
  "Radius-lg": "iELic4-oxnw-",
  "Radius-full": "Eap44BqZ3-Y-",
  Cursor: "lWNIGdpQpu0-",
  Position: "G-NVF2dxX0c-",
  Inset: "zstMj4yZycU-",
  GridColumn: "qUnkcQS5syk-",
  GridColumnStart: "WOb8-hswGw4-",
  GridColumnEnd: "_4qpq-lguLp8-",
  GridRow: "EY25wcMPP7Y-",
  GridRowStart: "-vMtXhOsvLI-",
  GridRowEnd: "_-9uI-wxUdhU-",
  GridArea: "ZCOGRQeExOo-",
  Background: "vpiI2bS0S6s-",
  Overflow: "O86colydcoQ-",
  ZIndex: "qMhP3FEplu8-",
  Display: "_6vV4n--M-JE-",
  Elevation: "JFSQ3YZWgoA-",
  Border: "kYCFEvSPoH4-",
  BorderColor: "i4-G5sUM9mM-",
  Outline: "XX-999vVG6s-",
  AlignSelf: "_6NzFyBm-oPo-",
  JustifySelf: "FOtlLGklAW4-",
  TextAlign: "sVylyJLhFdw-",
};
var _ = [
    {
      prop: "margin",
      responsive: !0,
      className: (_) => _[`m-${_}`],
    },
    {
      prop: "marginX",
      responsive: !0,
      className: (_) => _[`mx-${_}`],
    },
    {
      prop: "marginY",
      responsive: !0,
      className: (_) => _[`my-${_}`],
    },
    {
      prop: "marginTop",
      responsive: !0,
      className: (_) => _[`mt-${_}`],
    },
    {
      prop: "marginRight",
      responsive: !0,
      className: (_) => _[`mr-${_}`],
    },
    {
      prop: "marginBottom",
      responsive: !0,
      className: (_) => _[`mb-${_}`],
    },
    {
      prop: "marginLeft",
      responsive: !0,
      className: (_) => _[`ml-${_}`],
    },
    {
      prop: "marginStart",
      responsive: !0,
      className: (_) => _[`ms-${_}`],
    },
    {
      prop: "marginEnd",
      responsive: !0,
      className: (_) => _[`me-${_}`],
    },
  ],
  _ = [
    ..._,
    {
      prop: "padding",
      responsive: !0,
      className: (_) => _[`p-${_}`],
    },
    {
      prop: "paddingX",
      responsive: !0,
      className: (_) => _[`px-${_}`],
    },
    {
      prop: "paddingY",
      responsive: !0,
      className: (_) => _[`py-${_}`],
    },
    {
      prop: "paddingTop",
      responsive: !0,
      className: (_) => _[`pt-${_}`],
    },
    {
      prop: "paddingRight",
      responsive: !0,
      className: (_) => _[`pr-${_}`],
    },
    {
      prop: "paddingBottom",
      responsive: !0,
      className: (_) => _[`pb-${_}`],
    },
    {
      prop: "paddingLeft",
      responsive: !0,
      className: (_) => _[`pl-${_}`],
    },
    {
      prop: "paddingStart",
      responsive: !0,
      className: (_) => _[`ps-${_}`],
    },
    {
      prop: "paddingEnd",
      responsive: !0,
      className: (_) => _[`pe-${_}`],
    },
    {
      prop: "width",
      responsive: !0,
      className: _,
      cssProperty: "--width",
    },
    {
      prop: "minWidth",
      responsive: !0,
      className: _,
      cssProperty: "--min-width",
    },
    {
      prop: "maxWidth",
      responsive: !0,
      className: _,
      cssProperty: "--max-width",
    },
    {
      prop: "height",
      responsive: !0,
      className: _,
      cssProperty: "--height",
    },
    {
      prop: "minHeight",
      responsive: !0,
      className: _,
      cssProperty: "--min-height",
    },
    {
      prop: "maxHeight",
      responsive: !0,
      className: _,
      cssProperty: "--max-height",
    },
    {
      prop: "flexBasis",
      responsive: !0,
      className: _,
      cssProperty: "--flex-basis",
    },
    {
      prop: "flexGrow",
      responsive: !0,
      className: _,
      cssProperty: "--flex-grow",
    },
    {
      prop: "flexShrink",
      responsive: !0,
      className: _,
      cssProperty: "--flex-shrink",
    },
    {
      prop: "radius",
      responsive: !0,
      className: (_) => _[`Radius-${_}`],
    },
    {
      prop: "cursor",
      responsive: !0,
      className: _,
      cssProperty: "--cursor",
    },
    {
      prop: "position",
      responsive: !0,
      className: _,
      cssProperty: "--position",
    },
    {
      prop: "inset",
      responsive: !0,
      className: _,
      cssProperty: (_) => ["--inset", _(_)],
    },
    {
      prop: "gridColumn",
      responsive: !0,
      className: _,
      cssProperty: "--grid-column",
    },
    {
      prop: "gridColumnStart",
      responsive: !0,
      className: _,
      cssProperty: "--grid-column-start",
    },
    {
      prop: "gridColumnEnd",
      responsive: !0,
      className: _,
      cssProperty: "--grid-column-end",
    },
    {
      prop: "gridRow",
      responsive: !0,
      className: _,
      cssProperty: "--grid-row",
    },
    {
      prop: "gridRowStart",
      responsive: !0,
      className: _,
      cssProperty: "--grid-row-start",
    },
    {
      prop: "gridRowEnd",
      responsive: !0,
      className: _,
      cssProperty: "--grid-row-end",
    },
    {
      prop: "gridArea",
      responsive: !0,
      className: _,
      cssProperty: "--grid-area",
    },
    {
      prop: "alignSelf",
      responsive: !0,
      className: _,
      cssProperty: "--align-self",
    },
    {
      prop: "justifySelf",
      responsive: !0,
      className: _,
      cssProperty: "--justify-self",
    },
    {
      prop: "background",
      responsive: !0,
      className: _,
      cssProperty: (_) => ["--background", _(_)],
    },
    {
      prop: "overflow",
      responsive: !0,
      className: _,
      cssProperty: "--overflow",
    },
    {
      prop: "zIndex",
      responsive: !0,
      className: _,
      cssProperty: "--z-index",
    },
    {
      prop: "display",
      responsive: !0,
      className: _,
      cssProperty: "--display",
    },
    {
      prop: "elevation",
      responsive: !0,
      className: _,
      dataProperty: "elevation",
    },
    {
      prop: "border",
      responsive: !0,
      className: _,
      cssProperty: "--border",
    },
    {
      prop: "borderColor",
      responsive: !0,
      className: [_, _].join(" "),
      cssProperty: (_) => ["--border-color", _(_)],
    },
    {
      prop: "outline",
      responsive: !0,
      className: _,
      cssProperty: (_) => ["--outline-color", _(_)],
    },
    {
      prop: "textAlign",
      responsive: !0,
      className: _,
      cssProperty: "--text-align",
    },
  ];
var _ = "_6jM5vEPv3WM-";
var _ = _(_(), 1);
function _(_) {
  let { _: _ = "div", ref: _, ..._ } = _,
    _ = _(
      {
        ..._,
        className: (0, _.default)(_, _.className),
      },
      _,
    );
  return (0, _.jsx)(_, {
    ref: _,
    ..._,
  });
}
function _(_) {
  let { _: _ = "div", ref: _, navProps: _, ..._ } = _,
    _ = _(
      {
        ..._,
        className: (0, _.default)(_, _.className),
      },
      _,
    );
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(_, {
      ref: _,
      ..._,
    }),
  });
}
var _ = _;
function _(_) {
  return _(_, _);
}
var _ = _(_(), 1);
var _ = "_9fpFHkyl3os-";
var _ = "iRapBRRENfU-";
var _ = "WlnQdqsCe5s-";
var _ = "HDXo8DVlUxI-";
var _ = "Y0BqhPMsT9c-";
var _ = "V-LvlBLm8Ec-";
var _ = "fUANDUOQZKI-";
var _ = "z6pKAodZuZk-";
var _ = "oVHBLGiJz-M-";
var _ = _(_(), 1);
function _(_) {
  let { _: _ = "div", ref: _, navRef: _, ..._ } = _,
    _ = _(
      {
        ..._,
        className: (0, _.default)(_.className, _),
      },
      _,
    ),
    _ = !_.disabled && !!_.onClick;
  return (0, _.jsx)(_, {
    focusable: _,
    navRef: _,
    children: (0, _.jsx)(_, {
      ref: _,
      ..._,
    }),
  });
}
var _ = [
  ..._,
  {
    prop: "direction",
    responsive: !0,
    className: _,
    cssProperty: "--direction",
  },
  {
    prop: "justify",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--justify", _(_)],
  },
  {
    prop: "align",
    responsive: !0,
    className: _,
    cssProperty: "--align",
  },
  {
    prop: "gap",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap", `var(--spacing-${_})`],
  },
  {
    prop: "gapX",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap-x", `var(--spacing-${_})`],
  },
  {
    prop: "gapY",
    responsive: !0,
    className: _,
    cssProperty: (_) => ["--gap-y", `var(--spacing-${_})`],
  },
  {
    prop: "wrap",
    responsive: !0,
    className: _,
    cssProperty: "--wrap",
  },
  {
    prop: "inline",
    responsive: !0,
    className: _,
  },
];
function _(_) {
  return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
}
var _ = {};
_(_, {
  ChildContainer: () => _,
  LoadingSpinnerAmin: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Size-4": () => _,
  "Size-5": () => _,
  Spinner: () => _,
  "Variant-bright": () => _,
  "Variant-solid": () => _,
  default: () => _,
});
var _ = "ACrWf5j7E-0-";
var _ = "U22zlbIZu1U-";
var _ = "oxVXOpRmRus-";
var _ = "_3S7Mbdfs6-I-";
var _ = "TZ7XzJAqyQM-";
var _ = "Hk-gANeEZh4-";
var _ = "hUCypSLcrVE-";
var _ = "nP2jrRq8bd4-";
var _ = "S365ReL0Reo-";
var _ = "_0vdvMPYVPfc-";
var _ = {
  Spinner: "ACrWf5j7E-0-",
  LoadingSpinnerAmin: "U22zlbIZu1U-",
  "Size-1": "oxVXOpRmRus-",
  "Size-2": "_3S7Mbdfs6-I-",
  "Size-3": "TZ7XzJAqyQM-",
  "Size-4": "Hk-gANeEZh4-",
  "Size-5": "hUCypSLcrVE-",
  "Variant-solid": "nP2jrRq8bd4-",
  "Variant-bright": "S365ReL0Reo-",
  ChildContainer: "_0vdvMPYVPfc-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
    size: _ = "3",
    loading: _ = !0,
    children: _,
    color: _,
    variant: _,
    ..._
  } = _;
  return _ || !_
    ? (0, _.jsxs)(_, {
        position: "relative",
        ..._,
        width: "fit-content",
        children: [
          (0, _.jsx)("div", {
            "data-visibility": !_,
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              position: "absolute",
              inset: "0",
              justify: "center",
              align: "center",
              children: (0, _.jsx)(_, {
                size: _,
                color: _,
                variant: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: _,
        color: _,
        variant: _,
        ..._,
      });
}
function _(_) {
  let { className: _, color: _, ..._ } = _(_, _);
  return (0, _.jsx)("div", {
    "data-accent-color": _,
    className: (0, _.default)(_, _),
    ..._,
  });
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: "variant",
    className: (_) => _[`Variant-${_}`],
  },
];
var _ = _(_(), 1);
var _ = {};
_(_, {
  Button: () => _,
  Icon: () => _,
  MinWidth: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Variant-default": () => _,
  "Variant-ghost": () => _,
  "Variant-inverted": () => _,
  "Variant-outline": () => _,
  "Variant-vibrant": () => _,
  Width: () => _,
  default: () => _,
});
var _ = "krQEbDRNCFg-";
var _ = "eAUu1dfYhY4-";
var _ = "wM4CKvSeUvQ-";
var _ = "Thio3V0imwc-";
var _ = "BDB70va3s7Q-";
var _ = "_0DdgBbU2bPk-";
var _ = "xgdYv2N2DL0-";
var _ = "_7P8JRbq-SlA-";
var _ = "_00yXGTmxZZc-";
var _ = "WtPsF-bmIEM-";
var _ = "OG8iH-W7xM0-";
var _ = "_2RWLTCLE-0s-";
var _ = {
  Button: "krQEbDRNCFg-",
  "Size-1": "eAUu1dfYhY4-",
  Icon: "wM4CKvSeUvQ-",
  "Size-2": "Thio3V0imwc-",
  "Size-3": "BDB70va3s7Q-",
  "Variant-default": "_0DdgBbU2bPk-",
  "Variant-inverted": "xgdYv2N2DL0-",
  "Variant-outline": "_7P8JRbq-SlA-",
  "Variant-ghost": "_00yXGTmxZZc-",
  "Variant-vibrant": "WtPsF-bmIEM-",
  Width: "OG8iH-W7xM0-",
  MinWidth: "_2RWLTCLE-0s-",
};
var _ = "ykNywW4cg64-";
function _() {
  return _;
}
var _ = _(_(), 1);
function _(_) {
  let {
      variant: _ = "default",
      size: _ = "2",
      minWidth: _ = "fit-content",
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: "bright",
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ && _.IN_GAMEPADUI ? _ : "button";
  return (0, _.jsx)(_, {
    type: "button",
    ..._(
      {
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        color: _,
        className: (0, _.default)(_, _ && _),
        onClick: _,
      },
      _,
    ),
    children: _,
  });
}
function _(_) {
  let {
      variant: _ = "default",
      size: _ = "2",
      minWidth: _ = "fit-content",
      disabled: _,
      icon: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = _ ? _ : void 0,
    _ = _ && _.IN_GAMEPADUI ? _ : "a";
  return (0, _.jsx)(_, {
    ..._(
      {
        onClick: _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && _, _()),
      },
      _,
    ),
  });
}
function _(_) {
  _.preventDefault();
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: "variant",
    className: (_) => _[`Variant-${_}`],
  },
  {
    prop: "color",
    dataProperty: (_) => ["accent-color", `${_}`],
  },
  {
    prop: "width",
    className: _,
    cssProperty: "--width",
    responsive: !0,
  },
  {
    prop: "minWidth",
    className: _,
    cssProperty: "--min-width",
    responsive: !0,
  },
];
var _ = _,
  _ = _;
var _ = _(_(), 1);
var _ = {};
_(_, {
  LineClamp: () => _,
  Text: () => _,
  TextAlign: () => _,
  "TextSize-1": () => _,
  "TextSize-2": () => _,
  "TextSize-3": () => _,
  "TextSize-4": () => _,
  "TextSize-5": () => _,
  "TextSize-6": () => _,
  "TextSize-7": () => _,
  "TextSize-8": () => _,
  "TextSize-9": () => _,
  TextWeight: () => _,
  Truncate: () => _,
  WhiteSpace: () => _,
  default: () => _,
});
var _ = "NI9oaXH36YQ-";
var _ = "KX9eQJSfx5A-";
var _ = "vJx0c3-pUA0-";
var _ = "LB7oRJG7djU-";
var _ = "QbHOJdWEOFk-";
var _ = "U1qtAHnPvEo-";
var _ = "jU8-REjbMVs-";
var _ = "dloY1cYx8hc-";
var _ = "Vqm-cFLf-nw-";
var _ = "WyO2MofYaqg-";
var _ = "cAwo746HChY-";
var _ = "EZ-ocZV850k-";
var _ = "ifBXpA-M7mM-";
var _ = "eHC015acU04-";
var _ = "nJuwSdA6pwU-";
var _ = {
  Text: "NI9oaXH36YQ-",
  Truncate: "KX9eQJSfx5A-",
  "TextSize-1": "vJx0c3-pUA0-",
  "TextSize-2": "LB7oRJG7djU-",
  "TextSize-3": "QbHOJdWEOFk-",
  "TextSize-4": "U1qtAHnPvEo-",
  "TextSize-5": "jU8-REjbMVs-",
  "TextSize-6": "dloY1cYx8hc-",
  "TextSize-7": "Vqm-cFLf-nw-",
  "TextSize-8": "WyO2MofYaqg-",
  "TextSize-9": "cAwo746HChY-",
  TextWeight: "EZ-ocZV850k-",
  TextAlign: "ifBXpA-M7mM-",
  LineClamp: "eHC015acU04-",
  WhiteSpace: "nJuwSdA6pwU-",
};
var _ = _(_(), 1);
function _(_) {
  let { _: _ = "span", ref: _, className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ref: _,
    ..._(
      {
        ..._,
        className: (0, _.default)(_, _),
      },
      _,
    ),
  });
}
var _ = [
    {
      prop: "weight",
      responsive: !0,
      className: _,
      cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
    },
    {
      prop: "align",
      responsive: !0,
      className: _,
      cssProperty: "--text-align",
    },
    {
      prop: "color",
      responsive: !0,
      cssProperty: (_, _, _) => [
        "--text-color",
        _(_, _(_.contrast, _) ?? "body"),
      ],
    },
    {
      prop: "contrast",
      responsive: !0,
      cssProperty: (_, _, _) => [
        "--text-color",
        _(_(_.color, _) ?? "text-body", _),
      ],
    },
    {
      prop: "truncate",
      className: _,
    },
    {
      prop: "lineClamp",
      responsive: !0,
      className: _,
      cssProperty: "--line-clamp",
    },
    {
      prop: "whiteSpace",
      className: _,
      cssProperty: "--white-space",
    },
  ],
  _ = [
    ..._,
    ..._,
    {
      prop: "size",
      responsive: !0,
      className: (_) => _[`TextSize-${_}`],
    },
  ];
var _ = {};
_(_, {
  Color: () => _,
  HitSlop: () => _,
  "IconSize-1": () => _,
  "IconSize-2": () => _,
  "IconSize-3": () => _,
  "IconSize-4": () => _,
  "IconSize-5": () => _,
  "IconSize-6": () => _,
  "IconSize-7": () => _,
  "IconSize-8": () => _,
  "IconSize-9": () => _,
  IconSizeDefault: () => _,
  default: () => _,
});
var _ = "_9zrcVXFMEbM-";
var _ = "WFJk5tr0xtQ-";
var _ = "qImpStzZK8M-";
var _ = "yP22qcC63pM-";
var _ = "RPgYv9kTJyA-";
var _ = "eBuEavARxmo-";
var _ = "fZtylfshoOM-";
var _ = "ZK8m1W7k6-g-";
var _ = "e3e4RMfxvn4-";
var _ = "kbZNX2QJaPk-";
var _ = "_-0E1a53728o-";
var _ = "dFoiuQNGt-c-";
var _ = {
  Color: "_9zrcVXFMEbM-",
  IconSizeDefault: "WFJk5tr0xtQ-",
  "IconSize-1": "qImpStzZK8M-",
  "IconSize-2": "yP22qcC63pM-",
  "IconSize-3": "RPgYv9kTJyA-",
  "IconSize-4": "eBuEavARxmo-",
  "IconSize-5": "fZtylfshoOM-",
  "IconSize-6": "ZK8m1W7k6-g-",
  "IconSize-7": "e3e4RMfxvn4-",
  "IconSize-8": "kbZNX2QJaPk-",
  "IconSize-9": "_-0E1a53728o-",
  HitSlop: "dFoiuQNGt-c-",
};
var _ = _(_(), 1);
function _(_) {
  let { viewBoxSize: _ = 20, ..._ } = _,
    _ = _.size ? void 0 : _;
  return (0, _.jsx)("svg", {
    viewBox: `0 0 ${_} ${_}`,
    ..._(
      {
        className: _,
        ..._,
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`IconSize-${_}`],
  },
  {
    prop: "color",
    className: _,
    cssProperty: (_) => ["--icon-color", _(_)],
  },
  {
    prop: "hitSlop",
    className: _,
    cssProperty: (_) => ["--hit-slop-custom", typeof _ == "string" ? _ : ""],
  },
  _.find(({ prop: _ }) => _ === "cursor"),
];
var _ = _(_(), 1);
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 16,
    children: (0, _.jsx)("path", {
      _: "M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z",
      fill: "currentColor",
    }),
  });
}
var _ = {};
_(_, {
  Checkbox: () => _,
  Disabled: () => _,
  Icon: () => _,
  Root: () => _,
  "Variant-dark": () => _,
  "Variant-light": () => _,
  "Variant-outline": () => _,
  default: () => _,
});
var _ = "V4koQHiHveU-";
var _ = "kSQKQUywwFM-";
var _ = "WQ65XubCb-o-";
var _ = "AXP3oN9L0ow-";
var _ = "odvdvvi2aNY-";
var _ = "ueZFI-S1E78-";
var _ = "EbWPXWfblAU-";
var _ = {
  Root: "V4koQHiHveU-",
  "Variant-light": "kSQKQUywwFM-",
  "Variant-dark": "WQ65XubCb-o-",
  "Variant-outline": "AXP3oN9L0ow-",
  Disabled: "odvdvvi2aNY-",
  Checkbox: "ueZFI-S1E78-",
  Icon: "EbWPXWfblAU-",
};
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let {
      checked: _,
      onChange: _,
      disabled: _,
      children: _,
      ref: _,
      variant: _ = "default",
      color: _,
      ..._
    } = _,
    _ = _ === "indeterminate",
    _ = _ ? _ : _,
    _ = () => {
      _ || (_ && _(_ ? !0 : !_));
    },
    _ = (_) => {
      _ || (_.key === " " && (_(), _.preventDefault(), _.stopPropagation()));
    };
  return (0, _.jsxs)(_, {
    align: "center",
    ref: _,
    role: "checkbox",
    "aria-checked": _ ? "mixed" : _,
    "data-state": _(_),
    className: (0, _.default)(_, _[`Variant-${_}`], _ && _),
    onClick: _,
    tabIndex: 0,
    onKeyDown: _,
    cursor: "default",
    "aria-disabled": _,
    "data-accent-color": _,
    ..._,
    children: [
      (0, _.jsx)("div", {
        className: _,
        children:
          _ &&
          (0, _.jsx)(_, {
            className: _,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  return _ === "indeterminate" ? _ : _ ? "checked" : "unchecked";
}
function _(_) {
  return (0, _.jsx)("svg", {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: (0, _.jsx)("path", {
      _: "M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z",
      fill: "currentColor",
    }),
  });
}
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1),
  _ = _(_(), 1);
function _() {
  return typeof window < "u";
}
function _(_) {
  return _(_) ? (_.nodeName || "").toLowerCase() : "#document";
}
function _(_) {
  var _;
  return (
    (_ == null || (_ = _.ownerDocument) == null ? void 0 : _.defaultView) ||
    window
  );
}
function _(_) {
  var _;
  return (_ = (_(_) ? _.ownerDocument : _.document) || window.document) == null
    ? void 0
    : _.documentElement;
}
function _(_) {
  return _() ? _ instanceof Node || _ instanceof _(_).Node : !1;
}
function _(_) {
  return _() ? _ instanceof Element || _ instanceof _(_).Element : !1;
}
function _(_) {
  return _() ? _ instanceof HTMLElement || _ instanceof _(_).HTMLElement : !1;
}
function _(_) {
  return !_() || typeof ShadowRoot > "u"
    ? !1
    : _ instanceof ShadowRoot || _ instanceof _(_).ShadowRoot;
}
function _(_) {
  let { overflow: _, overflowX: _, overflowY: _, display: _ } = _(_);
  return (
    /auto|scroll|overlay|hidden|clip/.test(_ + _ + _) &&
    !["inline", "contents"].includes(_)
  );
}
function _(_) {
  return ["table", "td", "th"].includes(_(_));
}
function _(_) {
  return [":popover-open", ":modal"].some((_) => {
    try {
      return _.matches(_);
    } catch {
      return !1;
    }
  });
}
function _(_) {
  let _ = _(),
    _ = _(_) ? _(_) : _;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((_) =>
      _[_] ? _[_] !== "none" : !1,
    ) ||
    (_.containerType ? _.containerType !== "normal" : !1) ||
    (!_ && (_.backdropFilter ? _.backdropFilter !== "none" : !1)) ||
    (!_ && (_.filter ? _.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (_) => (_.willChange || "").includes(_),
    ) ||
    ["paint", "layout", "strict", "content"].some((_) =>
      (_.contain || "").includes(_),
    )
  );
}
function _(_) {
  let _ = _(_);
  for (; _(_) && !_(_); ) {
    if (_(_)) return _;
    if (_(_)) return null;
    _ = _(_);
  }
  return null;
}
function _() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function _(_) {
  return ["html", "body", "#document"].includes(_(_));
}
function _(_) {
  return _(_).getComputedStyle(_);
}
function _(_) {
  return _(_)
    ? {
        scrollLeft: _.scrollLeft,
        scrollTop: _.scrollTop,
      }
    : {
        scrollLeft: _.scrollX,
        scrollTop: _.scrollY,
      };
}
function _(_) {
  if (_(_) === "html") return _;
  let _ = _.assignedSlot || _.parentNode || (_(_) && _.host) || _(_);
  return _(_) ? _.host : _;
}
function _(_) {
  let _ = _(_);
  return _(_)
    ? _.ownerDocument
      ? _.ownerDocument.body
      : _.body
    : _(_) && _(_)
      ? _
      : _(_);
}
function _(_, _, _) {
  var _;
  _ === void 0 && (_ = []), _ === void 0 && (_ = !0);
  let _ = _(_),
    _ = _ === ((_ = _.ownerDocument) == null ? void 0 : _.body),
    _ = _(_);
  if (_) {
    let _ = _(_);
    return _.concat(
      _,
      _.visualViewport || [],
      _(_) ? _ : [],
      _ && _ ? _(_) : [],
    );
  }
  return _.concat(_, _(_, [], _));
}
function _(_) {
  return _.parent && Object.getPrototypeOf(_.parent) ? _.frameElement : null;
}
function _(_) {
  let _ = _.activeElement;
  for (
    ;
    ((_ = _) == null || (_ = _.shadowRoot) == null
      ? void 0
      : _.activeElement) != null;
  ) {
    var _;
    _ = _.shadowRoot.activeElement;
  }
  return _;
}
function _(_, _) {
  if (!_ || !_) return !1;
  let _ = _.getRootNode == null ? void 0 : _.getRootNode();
  if (_.contains(_)) return !0;
  if (_ && _(_)) {
    let _ = _;
    for (; _; ) {
      if (_ === _) return !0;
      _ = _.parentNode || _.host;
    }
  }
  return !1;
}
function _() {
  let _ = navigator.userAgentData;
  return _ != null && _.platform ? _.platform : navigator.platform;
}
function _() {
  let _ = navigator.userAgentData;
  return _ && Array.isArray(_.brands)
    ? _.brands
        .map((_) => {
          let { brand: _, version: _ } = _;
          return _ + "/" + _;
        })
        .join(" ")
    : navigator.userAgent;
}
function _(_) {
  return _.mozInputSource === 0 && _.isTrusted
    ? !0
    : _() && _.pointerType
      ? _.type === "click" && _.buttons === 1
      : _.detail === 0 && !_.pointerType;
}
function _(_) {
  return _()
    ? !1
    : (!_() && _.width === 0 && _.height === 0) ||
        (_() &&
          _.width === 1 &&
          _.height === 1 &&
          _.pressure === 0 &&
          _.detail === 0 &&
          _.pointerType === "mouse") ||
        (_.width < 1 &&
          _.height < 1 &&
          _.pressure === 0 &&
          _.detail === 0 &&
          _.pointerType === "touch");
}
function _() {
  return /apple/i.test(navigator.vendor);
}
function _() {
  let _ = /android/i;
  return _.test(_()) || _.test(_());
}
function _() {
  return _().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function _() {
  return _().includes("jsdom/");
}
function _(_, _) {
  let _ = ["mouse", "pen"];
  return _ || _.push("", void 0), _.includes(_);
}
function _(_) {
  return "nativeEvent" in _;
}
function _(_) {
  return _.matches("html,body");
}
function _(_) {
  return _?.ownerDocument || document;
}
function _(_, _) {
  if (_ == null) return !1;
  if ("composedPath" in _) return _.composedPath().includes(_);
  let _ = _;
  return _.target != null && _.contains(_.target);
}
function _(_) {
  return "composedPath" in _ ? _.composedPath()[0] : _.target;
}
var _ =
  "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function _(_) {
  return _(_) && _.matches(_);
}
function _(_) {
  _.preventDefault(), _.stopPropagation();
}
function _(_) {
  return _ ? _.getAttribute("role") === "combobox" && _(_) : !1;
}
var _ = Math.min,
  _ = Math.max,
  _ = Math.round,
  _ = Math.floor,
  _ = (_) => ({
    _: _,
    _: _,
  }),
  _ = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  },
  _ = {
    start: "end",
    end: "start",
  };
function _(_, _, _) {
  return _(_, _(_, _));
}
function _(_, _) {
  return typeof _ == "function" ? _(_) : _;
}
function _(_) {
  return _.split("-")[0];
}
function _(_) {
  return _.split("-")[1];
}
function _(_) {
  return _ === "x" ? "y" : "x";
}
function _(_) {
  return _ === "y" ? "height" : "width";
}
function _(_) {
  return ["top", "bottom"].includes(_(_)) ? "y" : "x";
}
function _(_) {
  return _(_(_));
}
function _(_, _, _) {
  _ === void 0 && (_ = !1);
  let _ = _(_),
    _ = _(_),
    _ = _(_),
    _ =
      _ === "x"
        ? _ === (_ ? "end" : "start")
          ? "right"
          : "left"
        : _ === "start"
          ? "bottom"
          : "top";
  return _.reference[_] > _.floating[_] && (_ = _(_)), [_, _(_)];
}
function _(_) {
  let _ = _(_);
  return [_(_), _, _(_)];
}
function _(_) {
  return _.replace(/start|end/g, (_) => _[_]);
}
function _(_, _, _) {
  let _ = ["left", "right"],
    _ = ["right", "left"],
    _ = ["top", "bottom"],
    _ = ["bottom", "top"];
  switch (_) {
    case "top":
    case "bottom":
      return _ ? (_ ? _ : _) : _ ? _ : _;
    case "left":
    case "right":
      return _ ? _ : _;
    default:
      return [];
  }
}
function _(_, _, _, _) {
  let _ = _(_),
    _ = _(_(_), _ === "start", _);
  return (
    _ && ((_ = _.map((_) => _ + "-" + _)), _ && (_ = _.concat(_.map(_)))), _
  );
}
function _(_) {
  return _.replace(/left|right|bottom|top/g, (_) => _[_]);
}
function _(_) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ..._,
  };
}
function _(_) {
  return typeof _ != "number"
    ? _(_)
    : {
        top: _,
        right: _,
        bottom: _,
        left: _,
      };
}
function _(_) {
  let { _: _, _: _, width: _, height: _ } = _;
  return {
    width: _,
    height: _,
    top: _,
    left: _,
    right: _ + _,
    bottom: _ + _,
    _: _,
    _: _,
  };
}
var _ = _(_(), 1);
var _ = [
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
  _ = _.join(","),
  _ = typeof Element > "u",
  _ = _
    ? function () {}
    : Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector,
  _ =
    !_ && Element.prototype.getRootNode
      ? function (_) {
          var _;
          return _ == null || (_ = _.getRootNode) === null || _ === void 0
            ? void 0
            : _.call(_);
        }
      : function (_) {
          return _?.ownerDocument;
        },
  _ = function _(_, _) {
    var _;
    _ === void 0 && (_ = !0);
    var _ =
        _ == null || (_ = _.getAttribute) === null || _ === void 0
          ? void 0
          : _.call(_, "inert"),
      _ = _ === "" || _ === "true",
      _ = _ || (_ && _ && _(_.parentNode));
    return _;
  },
  _ = function (_) {
    var _,
      _ =
        _ == null || (_ = _.getAttribute) === null || _ === void 0
          ? void 0
          : _.call(_, "contenteditable");
    return _ === "" || _ === "true";
  },
  _ = function (_, _, _) {
    if (_(_)) return [];
    var _ = Array.prototype.slice.apply(_.querySelectorAll(_));
    return _ && _.call(_, _) && _.unshift(_), (_ = _.filter(_)), _;
  },
  _ = function _(_, _, _) {
    for (var _ = [], _ = Array.from(_); _.length; ) {
      var _ = _.shift();
      if (!_(_, !1))
        if (_.tagName === "SLOT") {
          var _ = _.assignedElements(),
            _ = _.length ? _ : _.children,
            _ = _(_, !0, _);
          _.flatten
            ? _.push.apply(_, _)
            : _.push({
                scopeParent: _,
                candidates: _,
              });
        } else {
          var _ = _.call(_, _);
          _ && _.filter(_) && (_ || !_.includes(_)) && _.push(_);
          var _ =
              _.shadowRoot ||
              (typeof _.getShadowRoot == "function" && _.getShadowRoot(_)),
            _ = !_(_, !1) && (!_.shadowRootFilter || _.shadowRootFilter(_));
          if (_ && _) {
            var _ = _(_ === !0 ? _.children : _.children, !0, _);
            _.flatten
              ? _.push.apply(_, _)
              : _.push({
                  scopeParent: _,
                  candidates: _,
                });
          } else _.unshift.apply(_, _.children);
        }
    }
    return _;
  },
  _ = function (_) {
    return !isNaN(parseInt(_.getAttribute("tabindex"), 10));
  },
  _ = function (_) {
    if (!_) throw new Error("No node provided");
    return _.tabIndex < 0 &&
      (/^(AUDIO|VIDEO|DETAILS)$/.test(_.tagName) || _(_)) &&
      !_(_)
      ? 0
      : _.tabIndex;
  },
  _ = function (_, _) {
    var _ = _(_);
    return _ < 0 && _ && !_(_) ? 0 : _;
  },
  _ = function (_, _) {
    return _.tabIndex === _.tabIndex
      ? _.documentOrder - _.documentOrder
      : _.tabIndex - _.tabIndex;
  },
  _ = function (_) {
    return _.tagName === "INPUT";
  },
  _ = function (_) {
    return _(_) && _.type === "hidden";
  },
  _ = function (_) {
    var _ =
      _.tagName === "DETAILS" &&
      Array.prototype.slice.apply(_.children).some(function (_) {
        return _.tagName === "SUMMARY";
      });
    return _;
  },
  _ = function (_, _) {
    for (var _ = 0; _ < _.length; _++)
      if (_[_].checked && _[_].form === _) return _[_];
  },
  _ = function (_) {
    if (!_.name) return !0;
    var _ = _.form || _(_),
      _ = function (_) {
        return _.querySelectorAll('input[type="radio"][name="' + _ + '"]');
      },
      _;
    if (
      typeof window < "u" &&
      typeof window.CSS < "u" &&
      typeof window.CSS.escape == "function"
    )
      _ = _(window.CSS.escape(_.name));
    else
      try {
        _ = _(_.name);
      } catch (_) {
        return (
          console.error(
            "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
            _.message,
          ),
          !1
        );
      }
    var _ = _(_, _.form);
    return !_ || _ === _;
  },
  _ = function (_) {
    return _(_) && _.type === "radio";
  },
  _ = function (_) {
    return _(_) && !_(_);
  },
  _ = function (_) {
    var _,
      _ = _ && _(_),
      _ = (_ = _) === null || _ === void 0 ? void 0 : _.host,
      _ = !1;
    if (_ && _ !== _) {
      var _, _, _;
      for (
        _ = !!(
          ((_ = _) !== null &&
            _ !== void 0 &&
            (_ = _.ownerDocument) !== null &&
            _ !== void 0 &&
            _.contains(_)) ||
          (_ != null &&
            (_ = _.ownerDocument) !== null &&
            _ !== void 0 &&
            _.contains(_))
        );
        !_ && _;
      ) {
        var _, _, _;
        (_ = _(_)),
          (_ = (_ = _) === null || _ === void 0 ? void 0 : _.host),
          (_ = !!(
            (_ = _) !== null &&
            _ !== void 0 &&
            (_ = _.ownerDocument) !== null &&
            _ !== void 0 &&
            _.contains(_)
          ));
      }
    }
    return _;
  },
  _ = function (_) {
    var _ = _.getBoundingClientRect(),
      _ = _.width,
      _ = _.height;
    return _ === 0 && _ === 0;
  },
  _ = function (_, _) {
    var _ = _.displayCheck,
      _ = _.getShadowRoot;
    if (getComputedStyle(_).visibility === "hidden") return !0;
    var _ = _.call(_, "details>summary:first-of-type"),
      _ = _ ? _.parentElement : _;
    if (_.call(_, "details:not([open]) *")) return !0;
    if (!_ || _ === "full" || _ === "legacy-full") {
      if (typeof _ == "function") {
        for (var _ = _; _; ) {
          var _ = _.parentElement,
            _ = _(_);
          if (_ && !_.shadowRoot && _(_) === !0) return _(_);
          _.assignedSlot
            ? (_ = _.assignedSlot)
            : !_ && _ !== _.ownerDocument
              ? (_ = _.host)
              : (_ = _);
        }
        _ = _;
      }
      if (_(_)) return !_.getClientRects().length;
      if (_ !== "legacy-full") return !0;
    } else if (_ === "non-zero-area") return _(_);
    return !1;
  },
  _ = function (_) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(_.tagName))
      for (var _ = _.parentElement; _; ) {
        if (_.tagName === "FIELDSET" && _.disabled) {
          for (var _ = 0; _ < _.children.length; _++) {
            var _ = _.children.item(_);
            if (_.tagName === "LEGEND")
              return _.call(_, "fieldset[disabled] *") ? !0 : !_.contains(_);
          }
          return !0;
        }
        _ = _.parentElement;
      }
    return !1;
  },
  _ = function (_, _) {
    return !(_.disabled || _(_) || _(_) || _(_, _) || _(_) || _(_));
  },
  _ = function (_, _) {
    return !(_(_) || _(_) < 0 || !_(_, _));
  },
  _ = function (_) {
    var _ = parseInt(_.getAttribute("tabindex"), 10);
    return !!(isNaN(_) || _ >= 0);
  },
  _ = function _(_) {
    var _ = [],
      _ = [];
    return (
      _.forEach(function (_, _) {
        var _ = !!_.scopeParent,
          _ = _ ? _.scopeParent : _,
          _ = _(_, _),
          _ = _ ? _(_.candidates) : _;
        _ === 0
          ? _
            ? _.push.apply(_, _)
            : _.push(_)
          : _.push({
              documentOrder: _,
              tabIndex: _,
              item: _,
              isScope: _,
              content: _,
            });
      }),
      _.sort(_)
        .reduce(function (_, _) {
          return _.isScope ? _.push.apply(_, _.content) : _.push(_.content), _;
        }, [])
        .concat(_)
    );
  },
  _ = function (_, _) {
    _ = _ || {};
    var _;
    return (
      _.getShadowRoot
        ? (_ = _([_], _.includeContainer, {
            filter: _.bind(null, _),
            flatten: !1,
            getShadowRoot: _.getShadowRoot,
            shadowRootFilter: _,
          }))
        : (_ = _(_, _.includeContainer, _.bind(null, _))),
      _(_)
    );
  };
var _ = function (_, _) {
  if (((_ = _ || {}), !_)) throw new Error("No node provided");
  return _.call(_, _) === !1 ? !1 : _(_, _);
};
var _ = _(_(), 1);
function _(_, _, _) {
  let { reference: _, floating: _ } = _,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _ === "y",
    _ = _._ + _.width / 2 - _.width / 2,
    _ = _._ + _.height / 2 - _.height / 2,
    _ = _[_] / 2 - _[_] / 2,
    _;
  switch (_) {
    case "top":
      _ = {
        _: _,
        _: _._ - _.height,
      };
      break;
    case "bottom":
      _ = {
        _: _,
        _: _._ + _.height,
      };
      break;
    case "right":
      _ = {
        _: _._ + _.width,
        _: _,
      };
      break;
    case "left":
      _ = {
        _: _._ - _.width,
        _: _,
      };
      break;
    default:
      _ = {
        _: _._,
        _: _._,
      };
  }
  switch (_(_)) {
    case "start":
      _[_] -= _ * (_ && _ ? -1 : 1);
      break;
    case "end":
      _[_] += _ * (_ && _ ? -1 : 1);
      break;
  }
  return _;
}
var _ = async (_, _, _) => {
  let {
      placement: _ = "bottom",
      strategy: _ = "absolute",
      middleware: _ = [],
      platform: _,
    } = _,
    _ = _.filter(Boolean),
    _ = await (_.isRTL == null ? void 0 : _.isRTL(_)),
    _ = await _.getElementRects({
      reference: _,
      floating: _,
      strategy: _,
    }),
    { _: _, _: _ } = _(_, _, _),
    _ = _,
    _ = {},
    _ = 0;
  for (let _ = 0; _ < _.length; _++) {
    let { name: _, _: _ } = _[_],
      {
        _: _,
        _,
        data: _,
        reset: _,
      } = await _({
        _: _,
        _: _,
        initialPlacement: _,
        placement: _,
        strategy: _,
        middlewareData: _,
        rects: _,
        platform: _,
        elements: {
          reference: _,
          floating: _,
        },
      });
    if (
      ((_ = _ ?? _),
      (_ = _ ?? _),
      (_ = {
        ..._,
        [_]: {
          ..._[_],
          ..._,
        },
      }),
      _ && _ <= 50)
    ) {
      _++,
        typeof _ == "object" &&
          (_.placement && (_ = _.placement),
          _.rects &&
            (_ =
              _.rects === !0
                ? await _.getElementRects({
                    reference: _,
                    floating: _,
                    strategy: _,
                  })
                : _.rects),
          ({ _: _, _: _ } = _(_, _, _))),
        (_ = -1);
      continue;
    }
  }
  return {
    _: _,
    _: _,
    placement: _,
    strategy: _,
    middlewareData: _,
  };
};
async function _(_, _) {
  var _;
  _ === void 0 && (_ = {});
  let { _: _, _: _, platform: _, rects: _, elements: _, strategy: _ } = _,
    {
      boundary: _ = "clippingAncestors",
      rootBoundary: _ = "viewport",
      elementContext: _ = "floating",
      altBoundary: _ = !1,
      padding: _ = 0,
    } = _(_, _),
    _ = _(_),
    _ = _[_ ? (_ === "floating" ? "reference" : "floating") : _],
    _ = _(
      await _.getClippingRect({
        element:
          (_ = await (_.isElement == null ? void 0 : _.isElement(_))) == null ||
          _
            ? _
            : _.contextElement ||
              (await (_.getDocumentElement == null
                ? void 0
                : _.getDocumentElement(_.floating))),
        boundary: _,
        rootBoundary: _,
        strategy: _,
      }),
    ),
    _ =
      _ === "floating"
        ? {
            ..._.floating,
            _: _,
            _: _,
          }
        : _.reference,
    _ = await (_.getOffsetParent == null
      ? void 0
      : _.getOffsetParent(_.floating)),
    _ = (await (_.isElement == null ? void 0 : _.isElement(_)))
      ? (await (_.getScale == null ? void 0 : _.getScale(_))) || {
          _: 1,
          _: 1,
        }
      : {
          _: 1,
          _: 1,
        },
    _ = _(
      _.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await _.convertOffsetParentRelativeRectToViewportRelativeRect({
            rect: _,
            offsetParent: _,
            strategy: _,
          })
        : _,
    );
  return {
    top: (_.top - _.top + _.top) / _._,
    bottom: (_.bottom - _.bottom + _.bottom) / _._,
    left: (_.left - _.left + _.left) / _._,
    right: (_.right - _.right + _.right) / _._,
  };
}
var _ = function (_) {
  return (
    _ === void 0 && (_ = {}),
    {
      name: "flip",
      options: _,
      async _(_) {
        var _, _;
        let {
            placement: _,
            middlewareData: _,
            rects: _,
            initialPlacement: _,
            platform: _,
            elements: _,
          } = _,
          {
            mainAxis: _ = !0,
            crossAxis: _ = !0,
            fallbackPlacements: _,
            fallbackStrategy: _ = "bestFit",
            fallbackAxisSideDirection: _ = "none",
            flipAlignment: _ = !0,
            ..._
          } = _(_, _);
        if ((_ = _.arrow) != null && _.alignmentOffset) return {};
        let _ = _(_),
          _ = _(_) === _,
          _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
          _ = _ || (_ || !_ ? [_(_)] : _(_));
        !_ && _ !== "none" && _.push(..._(_, _, _, _));
        let _ = [_, ..._],
          _ = await _(_, _),
          _ = [],
          _ = ((_ = _.flip) == null ? void 0 : _.overflows) || [];
        if ((_ && _.push(_[_]), _)) {
          let _ = _(_, _, _);
          _.push(_[_[0]], _[_[1]]);
        }
        if (
          ((_ = [
            ..._,
            {
              placement: _,
              overflows: _,
            },
          ]),
          !_.every((_) => _ <= 0))
        ) {
          var _, _;
          let _ = (((_ = _.flip) == null ? void 0 : _.index) || 0) + 1,
            _ = _[_];
          if (_)
            return {
              data: {
                index: _,
                overflows: _,
              },
              reset: {
                placement: _,
              },
            };
          let _ =
            (_ = _.filter((_) => _.overflows[0] <= 0).sort(
              (_, _) => _.overflows[1] - _.overflows[1],
            )[0]) == null
              ? void 0
              : _.placement;
          if (!_)
            switch (_) {
              case "bestFit": {
                var _;
                let _ =
                  (_ = _.map((_) => [
                    _.placement,
                    _.overflows.filter((_) => _ > 0).reduce((_, _) => _ + _, 0),
                  ]).sort((_, _) => _[1] - _[1])[0]) == null
                    ? void 0
                    : _[0];
                _ && (_ = _);
                break;
              }
              case "initialPlacement":
                _ = _;
                break;
            }
          if (_ !== _)
            return {
              reset: {
                placement: _,
              },
            };
        }
        return {};
      },
    }
  );
};
async function _(_, _) {
  let { placement: _, platform: _, elements: _ } = _,
    _ = await (_.isRTL == null ? void 0 : _.isRTL(_.floating)),
    _ = _(_),
    _ = _(_),
    _ = _(_) === "y",
    _ = ["left", "top"].includes(_) ? -1 : 1,
    _ = _ && _ ? -1 : 1,
    _ = _(_, _),
    {
      mainAxis: _,
      crossAxis: _,
      alignmentAxis: _,
    } = typeof _ == "number"
      ? {
          mainAxis: _,
          crossAxis: 0,
          alignmentAxis: null,
        }
      : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ..._,
        };
  return (
    _ && typeof _ == "number" && (_ = _ === "end" ? _ * -1 : _),
    _
      ? {
          _: _ * _,
          _: _ * _,
        }
      : {
          _: _ * _,
          _: _ * _,
        }
  );
}
var _ = function (_) {
    return (
      _ === void 0 && (_ = 0),
      {
        name: "offset",
        options: _,
        async _(_) {
          var _, _;
          let { _: _, _: _, placement: _, middlewareData: _ } = _,
            _ = await _(_, _);
          return _ === ((_ = _.offset) == null ? void 0 : _.placement) &&
            (_ = _.arrow) != null &&
            _.alignmentOffset
            ? {}
            : {
                _: _ + _._,
                _: _ + _._,
                data: {
                  ..._,
                  placement: _,
                },
              };
        },
      }
    );
  },
  _ = function (_) {
    return (
      _ === void 0 && (_ = {}),
      {
        name: "shift",
        options: _,
        async _(_) {
          let { _: _, _: _, placement: _ } = _,
            {
              mainAxis: _ = !0,
              crossAxis: _ = !1,
              limiter: _ = {
                _: (_) => {
                  let { _: _, _: _ } = _;
                  return {
                    _: _,
                    _: _,
                  };
                },
              },
              ..._
            } = _(_, _),
            _ = {
              _: _,
              _: _,
            },
            _ = await _(_, _),
            _ = _(_(_)),
            _ = _(_),
            _ = _[_],
            _ = _[_];
          if (_) {
            let _ = _ === "y" ? "top" : "left",
              _ = _ === "y" ? "bottom" : "right",
              _ = _ + _[_],
              _ = _ - _[_];
            _ = _(_, _, _);
          }
          if (_) {
            let _ = _ === "y" ? "top" : "left",
              _ = _ === "y" ? "bottom" : "right",
              _ = _ + _[_],
              _ = _ - _[_];
            _ = _(_, _, _);
          }
          let _ = _._({
            ..._,
            [_]: _,
            [_]: _,
          });
          return {
            ..._,
            data: {
              _: _._ - _,
              _: _._ - _,
            },
          };
        },
      }
    );
  };
var _ = function (_) {
  return (
    _ === void 0 && (_ = {}),
    {
      name: "size",
      options: _,
      async _(_) {
        let { placement: _, rects: _, platform: _, elements: _ } = _,
          { apply: _ = () => {}, ..._ } = _(_, _),
          _ = await _(_, _),
          _ = _(_),
          _ = _(_),
          _ = _(_) === "y",
          { width: _, height: _ } = _.floating,
          _,
          _;
        _ === "top" || _ === "bottom"
          ? ((_ = _),
            (_ =
              _ ===
              ((await (_.isRTL == null ? void 0 : _.isRTL(_.floating)))
                ? "start"
                : "end")
                ? "left"
                : "right"))
          : ((_ = _), (_ = _ === "end" ? "top" : "bottom"));
        let _ = _ - _[_],
          _ = _ - _[_],
          _ = !_.middlewareData.shift,
          _ = _,
          _ = _;
        if (_) {
          let _ = _ - _.left - _.right;
          _ = _ || _ ? _(_, _) : _;
        } else {
          let _ = _ - _.top - _.bottom;
          _ = _ || _ ? _(_, _) : _;
        }
        if (_ && !_) {
          let _ = _(_.left, 0),
            _ = _(_.right, 0),
            _ = _(_.top, 0),
            _ = _(_.bottom, 0);
          _
            ? (_ = _ - 2 * (_ !== 0 || _ !== 0 ? _ + _ : _(_.left, _.right)))
            : (_ = _ - 2 * (_ !== 0 || _ !== 0 ? _ + _ : _(_.top, _.bottom)));
        }
        await _({
          ..._,
          availableWidth: _,
          availableHeight: _,
        });
        let _ = await _.getDimensions(_.floating);
        return _ !== _.width || _ !== _.height
          ? {
              reset: {
                rects: !0,
              },
            }
          : {};
      },
    }
  );
};
function _(_) {
  let _ = _(_),
    _ = parseFloat(_.width) || 0,
    _ = parseFloat(_.height) || 0,
    _ = _(_),
    _ = _ ? _.offsetWidth : _,
    _ = _ ? _.offsetHeight : _,
    _ = _(_) !== _ || _(_) !== _;
  return (
    _ && ((_ = _), (_ = _)),
    {
      width: _,
      height: _,
      _: _,
    }
  );
}
function _(_) {
  return _(_) ? _ : _.contextElement;
}
function _(_) {
  let _ = _(_);
  if (!_(_)) return _(1);
  let _ = _.getBoundingClientRect(),
    { width: _, height: _, _: _ } = _(_),
    _ = (_ ? _(_.width) : _.width) / _,
    _ = (_ ? _(_.height) : _.height) / _;
  return (
    (!_ || !Number.isFinite(_)) && (_ = 1),
    (!_ || !Number.isFinite(_)) && (_ = 1),
    {
      _: _,
      _: _,
    }
  );
}
var _ = _(0);
function _(_) {
  let _ = _(_);
  return !_() || !_.visualViewport
    ? _
    : {
        _: _.visualViewport.offsetLeft,
        _: _.visualViewport.offsetTop,
      };
}
function _(_, _, _) {
  return _ === void 0 && (_ = !1), !_ || (_ && _ !== _(_)) ? !1 : _;
}
function _(_, _, _, _) {
  _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
  let _ = _.getBoundingClientRect(),
    _ = _(_),
    _ = _(1);
  _ && (_ ? _(_) && (_ = _(_)) : (_ = _(_)));
  let _ = _(_, _, _) ? _(_) : _(0),
    _ = (_.left + _._) / _._,
    _ = (_.top + _._) / _._,
    _ = _.width / _._,
    _ = _.height / _._;
  if (_) {
    let _ = _(_),
      _ = _ && _(_) ? _(_) : _,
      _ = _.frameElement;
    for (; _ && _ && _ !== _; ) {
      let _ = _(_),
        _ = _.getBoundingClientRect(),
        _ = _(_),
        _ = _.left + (_.clientLeft + parseFloat(_.paddingLeft)) * _._,
        _ = _.top + (_.clientTop + parseFloat(_.paddingTop)) * _._;
      (_ *= _._),
        (_ *= _._),
        (_ *= _._),
        (_ *= _._),
        (_ += _),
        (_ += _),
        (_ = _(_).frameElement);
    }
  }
  return _({
    width: _,
    height: _,
    _: _,
    _: _,
  });
}
function _(_) {
  let { rect: _, offsetParent: _, strategy: _ } = _,
    _ = _(_),
    _ = _(_);
  if (_ === _) return _;
  let _ = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    _ = _(1),
    _ = _(0);
  if (
    (_ || (!_ && _ !== "fixed")) &&
    ((_(_) !== "body" || _(_)) && (_ = _(_)), _(_))
  ) {
    let _ = _(_);
    (_ = _(_)), (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
  }
  return {
    width: _.width * _._,
    height: _.height * _._,
    _: _._ * _._ - _.scrollLeft * _._ + _._,
    _: _._ * _._ - _.scrollTop * _._ + _._,
  };
}
function _(_) {
  return Array.from(_.getClientRects());
}
function _(_) {
  return _(_(_)).left + _(_).scrollLeft;
}
function _(_) {
  let _ = _(_),
    _ = _(_),
    _ = _.ownerDocument.body,
    _ = _(_.scrollWidth, _.clientWidth, _.scrollWidth, _.clientWidth),
    _ = _(_.scrollHeight, _.clientHeight, _.scrollHeight, _.clientHeight),
    _ = -_.scrollLeft + _(_),
    _ = -_.scrollTop;
  return (
    _(_).direction === "rtl" && (_ += _(_.clientWidth, _.clientWidth) - _),
    {
      width: _,
      height: _,
      _: _,
      _: _,
    }
  );
}
function _(_, _) {
  let _ = _(_),
    _ = _(_),
    _ = _.visualViewport,
    _ = _.clientWidth,
    _ = _.clientHeight,
    _ = 0,
    _ = 0;
  if (_) {
    (_ = _.width), (_ = _.height);
    let _ = _();
    (!_ || (_ && _ === "fixed")) && ((_ = _.offsetLeft), (_ = _.offsetTop));
  }
  return {
    width: _,
    height: _,
    _: _,
    _: _,
  };
}
function _(_, _) {
  let _ = _(_, !0, _ === "fixed"),
    _ = _.top + _.clientTop,
    _ = _.left + _.clientLeft,
    _ = _(_) ? _(_) : _(1),
    _ = _.clientWidth * _._,
    _ = _.clientHeight * _._,
    _ = _ * _._,
    _ = _ * _._;
  return {
    width: _,
    height: _,
    _: _,
    _: _,
  };
}
function _(_, _, _) {
  let _;
  if (_ === "viewport") _ = _(_, _);
  else if (_ === "document") _ = _(_(_));
  else if (_(_)) _ = _(_, _);
  else {
    let _ = _(_);
    _ = {
      ..._,
      _: _._ - _._,
      _: _._ - _._,
    };
  }
  return _(_);
}
function _(_, _) {
  let _ = _(_);
  return _ === _ || !_(_) || _(_) ? !1 : _(_).position === "fixed" || _(_, _);
}
function _(_, _) {
  let _ = _.get(_);
  if (_) return _;
  let _ = _(_, [], !1).filter((_) => _(_) && _(_) !== "body"),
    _ = null,
    _ = _(_).position === "fixed",
    _ = _ ? _(_) : _;
  for (; _(_) && !_(_); ) {
    let _ = _(_),
      _ = _(_);
    !_ && _.position === "fixed" && (_ = null),
      (
        _
          ? !_ && !_
          : (!_ &&
              _.position === "static" &&
              !!_ &&
              ["absolute", "fixed"].includes(_.position)) ||
            (_(_) && !_ && _(_, _))
      )
        ? (_ = _.filter((_) => _ !== _))
        : (_ = _),
      (_ = _(_));
  }
  return _.set(_, _), _;
}
function _(_) {
  let { element: _, boundary: _, rootBoundary: _, strategy: _ } = _,
    _ = [...(_ === "clippingAncestors" ? _(_, this._) : [].concat(_)), _],
    _ = _[0],
    _ = _.reduce(
      (_, _) => {
        let _ = _(_, _, _);
        return (
          (_.top = _(_.top, _.top)),
          (_.right = _(_.right, _.right)),
          (_.bottom = _(_.bottom, _.bottom)),
          (_.left = _(_.left, _.left)),
          _
        );
      },
      _(_, _, _),
    );
  return {
    width: _.right - _.left,
    height: _.bottom - _.top,
    _: _.left,
    _: _.top,
  };
}
function _(_) {
  let { width: _, height: _ } = _(_);
  return {
    width: _,
    height: _,
  };
}
function _(_, _, _) {
  let _ = _(_),
    _ = _(_),
    _ = _ === "fixed",
    _ = _(_, !0, _, _),
    _ = {
      scrollLeft: 0,
      scrollTop: 0,
    },
    _ = _(0);
  if (_ || (!_ && !_))
    if (((_(_) !== "body" || _(_)) && (_ = _(_)), _)) {
      let _ = _(_, !0, _, _);
      (_._ = _._ + _.clientLeft), (_._ = _._ + _.clientTop);
    } else _ && (_._ = _(_));
  return {
    _: _.left + _.scrollLeft - _._,
    _: _.top + _.scrollTop - _._,
    width: _.width,
    height: _.height,
  };
}
function _(_, _) {
  return !_(_) || _(_).position === "fixed" ? null : _ ? _(_) : _.offsetParent;
}
function _(_, _) {
  let _ = _(_);
  if (!_(_)) return _;
  let _ = _(_, _);
  for (; _ && _(_) && _(_).position === "static"; ) _ = _(_, _);
  return _ &&
    (_(_) === "html" ||
      (_(_) === "body" && _(_).position === "static" && !_(_)))
    ? _
    : _ || _(_) || _;
}
var _ = async function (_) {
  let { reference: _, floating: _, strategy: _ } = _,
    _ = this.getOffsetParent || _,
    _ = this.getDimensions;
  return {
    reference: _(_, await _(_), _),
    floating: {
      _: 0,
      _: 0,
      ...(await _(_)),
    },
  };
};
function _(_) {
  return _(_).direction === "rtl";
}
var _ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: _,
  getDocumentElement: _,
  getClippingRect: _,
  getOffsetParent: _,
  getElementRects: _,
  getClientRects: _,
  getDimensions: _,
  getScale: _,
  isElement: _,
  isRTL: _,
};
function _(_, _) {
  let _ = null,
    _,
    _ = _(_);
  function _() {
    clearTimeout(_), _ && _.disconnect(), (_ = null);
  }
  function _(_, _) {
    _ === void 0 && (_ = !1), _ === void 0 && (_ = 1), _();
    let { left: _, top: _, width: _, height: _ } = _.getBoundingClientRect();
    if ((_ || _(), !_ || !_)) return;
    let _ = _(_),
      _ = _(_.clientWidth - (_ + _)),
      _ = _(_.clientHeight - (_ + _)),
      _ = _(_),
      _ = {
        rootMargin: -_ + "px " + -_ + "px " + -_ + "px " + -_ + "px",
        threshold: _(0, _(1, _)) || 1,
      },
      _ = !0;
    function _(_) {
      let _ = _[0].intersectionRatio;
      if (_ !== _) {
        if (!_) return _();
        _
          ? _(!1, _)
          : (_ = setTimeout(() => {
              _(!1, 1e-7);
            }, 100));
      }
      _ = !1;
    }
    try {
      _ = new IntersectionObserver(_, {
        ..._,
        root: _.ownerDocument,
      });
    } catch {
      _ = new IntersectionObserver(_, _);
    }
    _.observe(_);
  }
  return _(!0), _;
}
function _(_, _, _, _) {
  _ === void 0 && (_ = {});
  let {
      ancestorScroll: _ = !0,
      ancestorResize: _ = !0,
      elementResize: _ = typeof ResizeObserver == "function",
      layoutShift: _ = typeof IntersectionObserver == "function",
      animationFrame: _ = !1,
    } = _,
    _ = _(_),
    _ = _ || _ ? [...(_ ? _(_) : []), ..._(_)] : [];
  _.forEach((_) => {
    _ &&
      _.addEventListener("scroll", _, {
        passive: !0,
      }),
      _ && _.addEventListener("resize", _);
  });
  let _ = _ && _ ? _(_, _) : null,
    _ = -1,
    _ = null;
  _ &&
    ((_ = new ResizeObserver((_) => {
      let [_] = _;
      _ &&
        _.target === _ &&
        _ &&
        (_.unobserve(_),
        cancelAnimationFrame(_),
        (_ = requestAnimationFrame(() => {
          _ && _.observe(_);
        }))),
        _();
    })),
    _ && !_ && _.observe(_),
    _.observe(_));
  let _,
    _ = _ ? _(_) : null;
  _ && _();
  function _() {
    let _ = _(_);
    _ &&
      (_._ !== _._ ||
        _._ !== _._ ||
        _.width !== _.width ||
        _.height !== _.height) &&
      _(),
      (_ = _),
      (_ = requestAnimationFrame(_));
  }
  return (
    _(),
    () => {
      _.forEach((_) => {
        _ && _.removeEventListener("scroll", _),
          _ && _.removeEventListener("resize", _);
      }),
        _ && _(),
        _ && _.disconnect(),
        (_ = null),
        _ && cancelAnimationFrame(_);
    }
  );
}
var _ = _,
  _ = _,
  _ = _;
var _ = (_, _, _) => {
  let _ = new Map(),
    _ = {
      platform: _,
      ..._,
    },
    _ = {
      ..._.platform,
      _: _,
    };
  return _(_, _, {
    ..._,
    platform: _,
  });
};
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _(_(), 1),
  _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function _(_, _) {
  if (_ === _) return !0;
  if (typeof _ != typeof _) return !1;
  if (typeof _ == "function" && _.toString() === _.toString()) return !0;
  let _, _, _;
  if (_ && _ && typeof _ == "object") {
    if (Array.isArray(_)) {
      if (((_ = _.length), _ !== _.length)) return !1;
      for (_ = _; _-- !== 0; ) if (!_(_[_], _[_])) return !1;
      return !0;
    }
    if (((_ = Object.keys(_)), (_ = _.length), _ !== Object.keys(_).length))
      return !1;
    for (_ = _; _-- !== 0; ) if (!{}.hasOwnProperty.call(_, _[_])) return !1;
    for (_ = _; _-- !== 0; ) {
      let _ = _[_];
      if (!(_ === "_owner" && _.$$typeof) && !_(_[_], _[_])) return !1;
    }
    return !0;
  }
  return _ !== _ && _ !== _;
}
function _(_) {
  return typeof window > "u"
    ? 1
    : (_.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _(_, _) {
  let _ = _(_);
  return Math.round(_ * _) / _;
}
function _(_) {
  let _ = _.useRef(_);
  return (
    _(() => {
      _.current = _;
    }),
    _
  );
}
function _(_) {
  _ === void 0 && (_ = {});
  let {
      placement: _ = "bottom",
      strategy: _ = "absolute",
      middleware: _ = [],
      platform: _,
      elements: { reference: _, floating: _ } = {},
      transform: _ = !0,
      whileElementsMounted: _,
      open: _,
    } = _,
    [_, _] = _.useState({
      _: 0,
      _: 0,
      strategy: _,
      placement: _,
      middlewareData: {},
      isPositioned: !1,
    }),
    [_, _] = _.useState(_);
  _(_, _) || _(_);
  let [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _.useCallback((_) => {
      _ !== _.current && ((_.current = _), _(_));
    }, []),
    _ = _.useCallback((_) => {
      _ !== _.current && ((_.current = _), _(_));
    }, []),
    _ = _ || _,
    _ = _ || _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(_),
    _ = _ != null,
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _.useCallback(() => {
      if (!_.current || !_.current) return;
      let _ = {
        placement: _,
        strategy: _,
        middleware: _,
      };
      _.current && (_.platform = _.current),
        _(_.current, _.current, _).then((_) => {
          let _ = {
            ..._,
            isPositioned: _.current !== !1,
          };
          _.current &&
            !_(_.current, _) &&
            ((_.current = _),
            _.flushSync(() => {
              _(_);
            }));
        });
    }, [_, _, _, _, _]);
  _(() => {
    _ === !1 &&
      _.current.isPositioned &&
      ((_.current.isPositioned = !1),
      _((_) => ({
        ..._,
        isPositioned: !1,
      })));
  }, [_]);
  let _ = _.useRef(!1);
  _(
    () => (
      (_.current = !0),
      () => {
        _.current = !1;
      }
    ),
    [],
  ),
    _(() => {
      if ((_ && (_.current = _), _ && (_.current = _), _ && _)) {
        if (_.current) return _.current(_, _, _);
        _();
      }
    }, [_, _, _, _, _]);
  let _ = _.useMemo(
      () => ({
        reference: _,
        floating: _,
        setReference: _,
        setFloating: _,
      }),
      [_, _],
    ),
    _ = _.useMemo(
      () => ({
        reference: _,
        floating: _,
      }),
      [_, _],
    ),
    _ = _.useMemo(() => {
      let _ = {
        position: _,
        left: 0,
        top: 0,
      };
      if (!_.floating) return _;
      let _ = _(_.floating, _._),
        _ = _(_.floating, _._);
      return _
        ? {
            ..._,
            transform: "translate(" + _ + "px, " + _ + "px)",
            ...(_(_.floating) >= 1.5 && {
              willChange: "transform",
            }),
          }
        : {
            position: _,
            left: _,
            top: _,
          };
    }, [_, _, _.floating, _._, _._]);
  return _.useMemo(
    () => ({
      ..._,
      update: _,
      refs: _,
      elements: _,
      floatingStyles: _,
    }),
    [_, _, _, _, _],
  );
}
var _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  }),
  _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  });
var _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  }),
  _ = (_, _) => ({
    ..._(_),
    options: [_, _],
  });
function _(_) {
  let _ = _.useRef(void 0),
    _ = _.useCallback((_) => {
      let _ = _.map((_) => {
        if (_ != null) {
          if (typeof _ == "function") {
            let _ = _,
              _ = _(_);
            return typeof _ == "function"
              ? _
              : () => {
                  _(null);
                };
          }
          return (
            (_.current = _),
            () => {
              _.current = null;
            }
          );
        }
      });
      return () => {
        _.forEach((_) => _?.());
      };
    }, _);
  return _.useMemo(
    () =>
      _.every((_) => _ == null)
        ? null
        : (_) => {
            _.current && (_.current(), (_.current = void 0)),
              _ != null && (_.current = _(_));
          },
    _,
  );
}
var _ = {
    ..._,
  },
  _ = _.useInsertionEffect,
  _ = _ || ((_) => _());
function _(_) {
  let _ = _.useRef(() => {});
  return (
    _(() => {
      _.current = _;
    }),
    _.useCallback(function () {
      for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
        _[_] = arguments[_];
      return _.current == null ? void 0 : _.current(..._);
    }, [])
  );
}
var _ = "ArrowUp",
  _ = "ArrowDown",
  _ = "ArrowLeft",
  _ = "ArrowRight";
function _(_, _, _) {
  return Math.floor(_ / _) !== _;
}
function _(_, _) {
  return _ < 0 || _ >= _.current.length;
}
function _(_, _) {
  return _(_, {
    disabledIndices: _,
  });
}
function _(_, _) {
  return _(_, {
    decrement: !0,
    startingIndex: _.current.length,
    disabledIndices: _,
  });
}
function _(_, _) {
  let {
      startingIndex: _ = -1,
      decrement: _ = !1,
      disabledIndices: _,
      amount: _ = 1,
    } = _ === void 0 ? {} : _,
    _ = _.current,
    _ = _;
  do _ += _ ? -_ : _;
  while (_ >= 0 && _ <= _.length - 1 && _(_, _, _));
  return _;
}
function _(_, _) {
  let {
      event: _,
      orientation: _,
      loop: _,
      rtl: _,
      cols: _,
      disabledIndices: _,
      minIndex: _,
      maxIndex: _,
      prevIndex: _,
      stopEvent: _ = !1,
    } = _,
    _ = _;
  if (_.key === _) {
    if ((_ && _(_), _ === -1)) _ = _;
    else if (
      ((_ = _(_, {
        startingIndex: _,
        amount: _,
        decrement: !0,
        disabledIndices: _,
      })),
      _ && (_ - _ < _ || _ < 0))
    ) {
      let _ = _ % _,
        _ = _ % _,
        _ = _ - (_ - _);
      _ === _ ? (_ = _) : (_ = _ > _ ? _ : _ - _);
    }
    _(_, _) && (_ = _);
  }
  if (
    (_.key === _ &&
      (_ && _(_),
      _ === -1
        ? (_ = _)
        : ((_ = _(_, {
            startingIndex: _,
            amount: _,
            disabledIndices: _,
          })),
          _ &&
            _ + _ > _ &&
            (_ = _(_, {
              startingIndex: (_ % _) - _,
              amount: _,
              disabledIndices: _,
            }))),
      _(_, _) && (_ = _)),
    _ === "both")
  ) {
    let _ = _(_ / _);
    _.key === (_ ? _ : _) &&
      (_ && _(_),
      _ % _ !== _ - 1
        ? ((_ = _(_, {
            startingIndex: _,
            disabledIndices: _,
          })),
          _ &&
            _(_, _, _) &&
            (_ = _(_, {
              startingIndex: _ - (_ % _) - 1,
              disabledIndices: _,
            })))
        : _ &&
          (_ = _(_, {
            startingIndex: _ - (_ % _) - 1,
            disabledIndices: _,
          })),
      _(_, _, _) && (_ = _)),
      _.key === (_ ? _ : _) &&
        (_ && _(_),
        _ % _ !== 0
          ? ((_ = _(_, {
              startingIndex: _,
              decrement: !0,
              disabledIndices: _,
            })),
            _ &&
              _(_, _, _) &&
              (_ = _(_, {
                startingIndex: _ + (_ - (_ % _)),
                decrement: !0,
                disabledIndices: _,
              })))
          : _ &&
            (_ = _(_, {
              startingIndex: _ + (_ - (_ % _)),
              decrement: !0,
              disabledIndices: _,
            })),
        _(_, _, _) && (_ = _));
    let _ = _(_ / _) === _;
    _(_, _) &&
      (_ && _
        ? (_ =
            _.key === (_ ? _ : _)
              ? _
              : _(_, {
                  startingIndex: _ - (_ % _) - 1,
                  disabledIndices: _,
                }))
        : (_ = _));
  }
  return _;
}
function _(_, _, _) {
  let _ = [],
    _ = 0;
  return (
    _.forEach((_, _) => {
      let { width: _, height: _ } = _;
      _ > _;
      let _ = !1;
      for (_ && (_ = 0); !_; ) {
        let _ = [];
        for (let _ = 0; _ < _; _++)
          for (let _ = 0; _ < _; _++) _.push(_ + _ + _ * _);
        (_ % _) + _ <= _ && _.every((_) => _[_] == null)
          ? (_.forEach((_) => {
              _[_] = _;
            }),
            (_ = !0))
          : _++;
      }
    }),
    [..._]
  );
}
function _(_, _, _, _, _) {
  if (_ === -1) return -1;
  let _ = _.indexOf(_),
    _ = _[_];
  switch (_) {
    case "tl":
      return _;
    case "tr":
      return _ ? _ + _.width - 1 : _;
    case "bl":
      return _ ? _ + (_.height - 1) * _ : _;
    case "br":
      return _.lastIndexOf(_);
  }
}
function _(_, _) {
  return _.flatMap((_, _) => (_.includes(_) ? [_] : []));
}
function _(_, _, _) {
  if (_) return _.includes(_);
  let _ = _[_];
  return (
    _ == null ||
    _.hasAttribute("disabled") ||
    _.getAttribute("aria-disabled") === "true"
  );
}
var _ = typeof document < "u" ? _.useLayoutEffect : _.useEffect;
function _(_, _) {
  let _ = _.compareDocumentPosition(_);
  return _ & Node.DOCUMENT_POSITION_FOLLOWING ||
    _ & Node.DOCUMENT_POSITION_CONTAINED_BY
    ? -1
    : _ & Node.DOCUMENT_POSITION_PRECEDING ||
        _ & Node.DOCUMENT_POSITION_CONTAINS
      ? 1
      : 0;
}
var _ = _.createContext({
  register: () => {},
  unregister: () => {},
  map: new Map(),
  elementsRef: {
    current: [],
  },
});
function _(_) {
  let { children: _, elementsRef: _, labelsRef: _ } = _,
    [_, _] = _.useState(() => new Set()),
    _ = _.useCallback((_) => {
      _((_) => new Set(_).add(_));
    }, []),
    _ = _.useCallback((_) => {
      _((_) => {
        let _ = new Set(_);
        return _.delete(_), _;
      });
    }, []),
    _ = _.useMemo(() => {
      let _ = new Map();
      return (
        Array.from(_.keys())
          .sort(_)
          .forEach((_, _) => {
            _.set(_, _);
          }),
        _
      );
    }, [_]);
  return (0, _.jsx)(_.Provider, {
    value: _.useMemo(
      () => ({
        register: _,
        unregister: _,
        map: _,
        elementsRef: _,
        labelsRef: _,
      }),
      [_, _, _, _, _],
    ),
    children: _,
  });
}
function _(_) {
  _ === void 0 && (_ = {});
  let { label: _ } = _,
    {
      register: _,
      unregister: _,
      map: _,
      elementsRef: _,
      labelsRef: _,
    } = _.useContext(_),
    [_, _] = _.useState(null),
    _ = _.useRef(null),
    _ = _.useCallback(
      (_) => {
        if (((_.current = _), _ !== null && ((_.current[_] = _), _))) {
          var _;
          let _ = _ !== void 0;
          _.current[_] = _ ? _ : (_ = _?.textContent) != null ? _ : null;
        }
      },
      [_, _, _, _],
    );
  return (
    _(() => {
      let _ = _.current;
      if (_)
        return (
          _(_),
          () => {
            _(_);
          }
        );
    }, [_, _]),
    _(() => {
      let _ = _.current ? _.get(_.current) : null;
      _ != null && _(_);
    }, [_]),
    _.useMemo(
      () => ({
        ref: _,
        index: _ ?? -1,
      }),
      [_, _],
    )
  );
}
var _ = [_, _],
  _ = [_, _],
  _ = [..._, ..._];
var _ = !1,
  _ = 0,
  _ = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + _++;
function _() {
  let [_, _] = _.useState(() => (_ ? _() : void 0));
  return (
    _(() => {
      _ == null && _(_());
    }, []),
    _.useEffect(() => {
      _ = !0;
    }, []),
    _
  );
}
var _ = _.useId,
  _ = _ || _;
function _() {
  let _ = new Map();
  return {
    emit(_, _) {
      var _;
      (_ = _.get(_)) == null || _.forEach((_) => _(_));
    },
    _(_, _) {
      _.set(_, [...(_.get(_) || []), _]);
    },
    off(_, _) {
      var _;
      _.set(
        _,
        ((_ = _.get(_)) == null ? void 0 : _.filter((_) => _ !== _)) || [],
      );
    },
  };
}
var _ = _.createContext(null),
  _ = _.createContext(null),
  _ = () => {
    var _;
    return ((_ = _.useContext(_)) == null ? void 0 : _._) || null;
  },
  _ = () => _.useContext(_);
function _(_) {
  return "data-floating-ui-" + _;
}
function _(_) {
  _.current !== -1 && (clearTimeout(_.current), (_.current = -1));
}
function _(_) {
  let _ = (0, _.useRef)(_);
  return (
    _(() => {
      _.current = _;
    }),
    _
  );
}
var _ = 0;
function _(_, _) {
  _ === void 0 && (_ = {});
  let { preventScroll: _ = !1, cancelPrevious: _ = !0, sync: _ = !1 } = _;
  _ && cancelAnimationFrame(_);
  let _ = () =>
    _?.focus({
      preventScroll: _,
    });
  _ ? _() : (_ = requestAnimationFrame(_));
}
function _(_, _) {
  var _;
  let _ = [],
    _ = (_ = _.find((_) => _._ === _)) == null ? void 0 : _.parentId;
  for (; _; ) {
    let _ = _.find((_) => _._ === _);
    (_ = _?.parentId), _ && (_ = _.concat(_));
  }
  return _;
}
function _(_, _) {
  let _ = _.filter((_) => {
      var _;
      return _.parentId === _ && ((_ = _.context) == null ? void 0 : _.open);
    }),
    _ = _;
  for (; _.length; )
    (_ = _.filter((_) => {
      var _;
      return (_ = _) == null
        ? void 0
        : _.some((_) => {
            var _;
            return (
              _.parentId === _._ && ((_ = _.context) == null ? void 0 : _.open)
            );
          });
    })),
      (_ = _.concat(_));
  return _;
}
function _(_, _) {
  let _,
    _ = -1;
  function _(_, _) {
    _ > _ && ((_ = _), (_ = _)),
      _(_, _).forEach((_) => {
        _(_._, _ + 1);
      });
  }
  return _(_, 0), _.find((_) => _._ === _);
}
var _ = new WeakMap(),
  _ = new WeakSet(),
  _ = {},
  _ = 0,
  _ = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
  _ = (_) => _ && (_.host || _(_.parentNode)),
  _ = (_, _) =>
    _.map((_) => {
      if (_.contains(_)) return _;
      let _ = _(_);
      return _.contains(_) ? _ : null;
    }).filter((_) => _ != null);
function _(_, _, _, _) {
  let _ = "data-floating-ui-inert",
    _ = _ ? "inert" : _ ? "aria-hidden" : null,
    _ = _(_, _),
    _ = new Set(),
    _ = new Set(_),
    _ = [];
  _[_] || (_[_] = new WeakMap());
  let _ = _[_];
  _.forEach(_), _(_), _.clear();
  function _(_) {
    !_ || _.has(_) || (_.add(_), _.parentNode && _(_.parentNode));
  }
  function _(_) {
    !_ ||
      _.has(_) ||
      [].forEach.call(_.children, (_) => {
        if (_(_) !== "script")
          if (_.has(_)) _(_);
          else {
            let _ = _ ? _.getAttribute(_) : null,
              _ = _ !== null && _ !== "false",
              _ = _.get(_) || 0,
              _ = _ ? _ + 1 : _,
              _ = (_.get(_) || 0) + 1;
            _.set(_, _),
              _.set(_, _),
              _.push(_),
              _ === 1 && _ && _.add(_),
              _ === 1 && _.setAttribute(_, ""),
              !_ && _ && _.setAttribute(_, "true");
          }
      });
  }
  return (
    _++,
    () => {
      _.forEach((_) => {
        let _ = _.get(_) || 0,
          _ = _ ? _ - 1 : _,
          _ = (_.get(_) || 0) - 1;
        _.set(_, _),
          _.set(_, _),
          _ || (!_.has(_) && _ && _.removeAttribute(_), _.delete(_)),
          _ || _.removeAttribute(_);
      }),
        _--,
        _ ||
          ((_ = new WeakMap()),
          (_ = new WeakMap()),
          (_ = new WeakSet()),
          (_ = {}));
    }
  );
}
function _(_, _, _) {
  _ === void 0 && (_ = !1), _ === void 0 && (_ = !1);
  let _ = _(_[0]).body;
  return _(_.concat(Array.from(_.querySelectorAll("[aria-live]"))), _, _, _);
}
var _ = () => ({
  getShadowRoot: !0,
  displayCheck:
    typeof ResizeObserver == "function" &&
    ResizeObserver.toString().includes("[native code]")
      ? "full"
      : "none",
});
function _(_, _) {
  let _ = _(_, _());
  _ === "prev" && _.reverse();
  let _ = _.indexOf(_(_(_)));
  return _.slice(_ + 1)[0];
}
function _() {
  return _(document.body, "next");
}
function _() {
  return _(document.body, "prev");
}
function _(_, _) {
  let _ = _ || _.currentTarget,
    _ = _.relatedTarget;
  return !_ || !_(_, _);
}
function _(_) {
  _(_, _()).forEach((_) => {
    (_.dataset.tabindex = _.getAttribute("tabindex") || ""),
      _.setAttribute("tabindex", "-1");
  });
}
function _(_) {
  _.querySelectorAll("[data-tabindex]").forEach((_) => {
    let _ = _.dataset.tabindex;
    delete _.dataset.tabindex,
      _ ? _.setAttribute("tabindex", _) : _.removeAttribute("tabindex");
  });
}
var _ = {
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
  _ = _.forwardRef(function (_, _) {
    let [_, _] = _.useState();
    _(() => {
      _() && _("button");
    }, []);
    let _ = {
      ref: _,
      tabIndex: 0,
      role: _,
      "aria-hidden": _ ? void 0 : !0,
      [_("focus-guard")]: "",
      style: _,
    };
    return (0, _.jsx)("span", {
      ..._,
      ..._,
    });
  }),
  _ = _.createContext(null),
  _ = _("portal");
function _(_) {
  _ === void 0 && (_ = {});
  let { _: _, root: _ } = _,
    _ = _(),
    _ = _(),
    [_, _] = _.useState(null),
    _ = _.useRef(null);
  return (
    _(
      () => () => {
        _?.remove(),
          queueMicrotask(() => {
            _.current = null;
          });
      },
      [_],
    ),
    _(() => {
      if (!_ || _.current) return;
      let _ = _ ? document.getElementById(_) : null;
      if (!_) return;
      let _ = document.createElement("div");
      (_._ = _), _.setAttribute(_, ""), _.appendChild(_), (_.current = _), _(_);
    }, [_, _]),
    _(() => {
      if (_ === null || !_ || _.current) return;
      let _ = _ || _?.portalNode;
      _ && !_(_) && (_ = _.current), (_ = _ || document.body);
      let _ = null;
      _ && ((_ = document.createElement("div")), (_._ = _), _.appendChild(_));
      let _ = document.createElement("div");
      (_._ = _),
        _.setAttribute(_, ""),
        (_ = _ || _),
        _.appendChild(_),
        (_.current = _),
        _(_);
    }, [_, _, _, _]),
    _
  );
}
function _(_) {
  let { children: _, _: _, root: _, preserveTabOrder: _ = !0 } = _,
    _ = _({
      _: _,
      root: _,
    }),
    [_, _] = _.useState(null),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _?.modal,
    _ = _?.open,
    _ = !!_ && !_.modal && _.open && _ && !!(_ || _);
  return (
    _.useEffect(() => {
      if (!_ || !_ || _) return;
      function _(_) {
        _ && _(_) && (_.type === "focusin" ? _ : _)(_);
      }
      return (
        _.addEventListener("focusin", _, !0),
        _.addEventListener("focusout", _, !0),
        () => {
          _.removeEventListener("focusin", _, !0),
            _.removeEventListener("focusout", _, !0);
        }
      );
    }, [_, _, _]),
    _.useEffect(() => {
      _ && (_ || _(_));
    }, [_, _]),
    (0, _.jsxs)(_.Provider, {
      value: _.useMemo(
        () => ({
          preserveTabOrder: _,
          beforeOutsideRef: _,
          afterOutsideRef: _,
          beforeInsideRef: _,
          afterInsideRef: _,
          portalNode: _,
          setFocusManagerState: _,
        }),
        [_, _],
      ),
      children: [
        _ &&
          _ &&
          (0, _.jsx)(_, {
            "data-type": "outside",
            ref: _,
            onFocus: (_) => {
              if (_(_, _)) {
                var _;
                (_ = _.current) == null || _.focus();
              } else {
                let _ = _() || _?.domReference;
                _?.focus();
              }
            },
          }),
        _ &&
          _ &&
          (0, _.jsx)("span", {
            "aria-owns": _._,
            style: _,
          }),
        _ && _.createPortal(_, _),
        _ &&
          _ &&
          (0, _.jsx)(_, {
            "data-type": "outside",
            ref: _,
            onFocus: (_) => {
              if (_(_, _)) {
                var _;
                (_ = _.current) == null || _.focus();
              } else {
                let _ = _() || _?.domReference;
                _?.focus(),
                  _?.closeOnFocusOut &&
                    _?.onOpenChange(!1, _.nativeEvent, "focus-out");
              }
            },
          }),
      ],
    })
  );
}
var _ = () => _.useContext(_),
  _ = "data-floating-ui-focusable";
function _(_) {
  return _
    ? _.hasAttribute(_)
      ? _
      : _.querySelector("[" + _ + "]") || _
    : null;
}
function _(_) {
  return _.useMemo(
    () => (_) => {
      _.forEach((_) => {
        _ && (_.current = _);
      });
    },
    _,
  );
}
var _ = 20,
  _ = [];
function _(_) {
  (_ = _.filter((_) => _.isConnected)),
    _ && _(_) !== "body" && (_.push(_), _.length > _ && (_ = _.slice(-_)));
}
function _() {
  return _.slice()
    .reverse()
    .find((_) => _.isConnected);
}
function _(_) {
  let _ = _();
  return _(_, _) ? _ : _(_, _)[0] || _;
}
var _ = _.forwardRef(function (_, _) {
  return (0, _.jsx)("button", {
    ..._,
    type: "button",
    ref: _,
    tabIndex: -1,
    style: _,
  });
});
function _(_) {
  let {
      context: _,
      children: _,
      disabled: _ = !1,
      order: _ = ["content"],
      guards: _ = !0,
      initialFocus: _ = 0,
      returnFocus: _ = !0,
      restoreFocus: _ = !1,
      modal: _ = !0,
      visuallyHiddenDismiss: _ = !1,
      closeOnFocusOut: _ = !0,
      outsideElementsInert: _ = !1,
    } = _,
    {
      open: _,
      onOpenChange: _,
      events: _,
      dataRef: _,
      elements: { domReference: _, floating: _ },
    } = _,
    _ = _(() => {
      var _;
      return (_ = _.current.floatingContext) == null ? void 0 : _.nodeId;
    }),
    _ = typeof _ == "number" && _ < 0,
    _ = _(_) && _,
    _ = _(),
    _ = _ ? _ : !0,
    _ = !_ || (_ && _),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(),
    _ = _(),
    _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    _ = _.useRef(-1),
    _ = _ != null,
    _ = _(_),
    _ = _(function (_) {
      return _ === void 0 && (_ = _), _ ? _(_, _()) : [];
    }),
    _ = _((_) => {
      let _ = _(_);
      return _.current
        .map((_) =>
          _ && _ === "reference" ? _ : _ && _ === "floating" ? _ : _,
        )
        .filter(Boolean)
        .flat();
    });
  _.useEffect(() => {
    if (_ || !_) return;
    function _(_) {
      if (_.key === "Tab") {
        _(_, _(_(_))) && _().length === 0 && !_ && _(_);
        let _ = _(),
          _ = _(_);
        _.current[0] === "reference" &&
          _ === _ &&
          (_(_), _.shiftKey ? _(_[_.length - 1]) : _(_[1])),
          _.current[1] === "floating" &&
            _ === _ &&
            _.shiftKey &&
            (_(_), _(_[0]));
      }
    }
    let _ = _(_);
    return (
      _.addEventListener("keydown", _),
      () => {
        _.removeEventListener("keydown", _);
      }
    );
  }, [_, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      if (_ || !_) return;
      function _(_) {
        let _ = _(_),
          _ = _().indexOf(_);
        _ !== -1 && (_.current = _);
      }
      return (
        _.addEventListener("focusin", _),
        () => {
          _.removeEventListener("focusin", _);
        }
      );
    }, [_, _, _]),
    _.useEffect(() => {
      if (_ || !_) return;
      function _() {
        (_.current = !0),
          setTimeout(() => {
            _.current = !1;
          });
      }
      function _(_) {
        let _ = _.relatedTarget;
        queueMicrotask(() => {
          let _ = _(),
            _ = !(
              _(_, _) ||
              _(_, _) ||
              _(_, _) ||
              _(_?.portalNode, _) ||
              (_ != null && _.hasAttribute(_("focus-guard"))) ||
              (_ &&
                (_(_.nodesRef.current, _).find((_) => {
                  var _, _;
                  return (
                    _(
                      (_ = _.context) == null ? void 0 : _.elements.floating,
                      _,
                    ) ||
                    _(
                      (_ = _.context) == null
                        ? void 0
                        : _.elements.domReference,
                      _,
                    )
                  );
                }) ||
                  _(_.nodesRef.current, _).find((_) => {
                    var _, _, _;
                    return (
                      [
                        (_ = _.context) == null ? void 0 : _.elements.floating,
                        _(
                          (_ = _.context) == null
                            ? void 0
                            : _.elements.floating,
                        ),
                      ].includes(_) ||
                      ((_ = _.context) == null
                        ? void 0
                        : _.elements.domReference) === _
                    );
                  })))
            );
          if (_ && _ && _(_(_)) === _(_).body) {
            _(_) && _.focus();
            let _ = _.current,
              _ = _(),
              _ = _[_] || _[_.length - 1] || _;
            _(_) && _.focus();
          }
          (_ || !_) &&
            _ &&
            _ &&
            !_.current &&
            _ !== _() &&
            ((_.current = !0), _(!1, _, "focus-out"));
        });
      }
      if (_ && _(_))
        return (
          _.addEventListener("focusout", _),
          _.addEventListener("pointerdown", _),
          _.addEventListener("focusout", _),
          () => {
            _.removeEventListener("focusout", _),
              _.removeEventListener("pointerdown", _),
              _.removeEventListener("focusout", _);
          }
        );
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _]);
  let _ = _.useRef(null),
    _ = _.useRef(null),
    _ = _([_, _?.beforeInsideRef]),
    _ = _([_, _?.afterInsideRef]);
  _.useEffect(() => {
    var _;
    if (_ || !_) return;
    let _ = Array.from(
        (_ == null || (_ = _.portalNode) == null
          ? void 0
          : _.querySelectorAll("[" + _("portal") + "]")) || [],
      ),
      _ =
        _ && !_
          ? _(_?.nodesRef.current, _()).map((_) => {
              var _;
              return (_ = _.context) == null ? void 0 : _.elements.floating;
            })
          : [],
      _ = [
        _,
        ..._,
        ..._,
        _.current,
        _.current,
        _.current,
        _.current,
        _?.beforeOutsideRef.current,
        _?.afterOutsideRef.current,
        _.current.includes("reference") || _ ? _ : null,
      ].filter((_) => _ != null),
      _ = _ || _ ? _(_, !_, _) : _(_);
    return () => {
      _();
    };
  }, [_, _, _, _, _, _, _, _, _, _, _]),
    _(() => {
      if (_ || !_(_)) return;
      let _ = _(_),
        _ = _(_);
      queueMicrotask(() => {
        let _ = _(_),
          _ = _.current,
          _ = (typeof _ == "number" ? _[_] : _.current) || _,
          _ = _(_, _);
        !_ &&
          !_ &&
          _ &&
          _(_, {
            preventScroll: _ === _,
          });
      });
    }, [_, _, _, _, _, _]),
    _(() => {
      if (_ || !_) return;
      let _ = !1,
        _ = !1,
        _ = _(_),
        _ = _(_),
        _ = _.current.openEvent;
      _(_);
      function _(_) {
        let { open: _, reason: _, event: _, nested: _ } = _;
        if (
          (_ && (_ = _),
          _ === "escape-key" && (_ = !0),
          ["hover", "safe-polygon"].includes(_) &&
            _.type === "mouseleave" &&
            (_.current = !0),
          _ === "outside-press")
        )
          if (_) (_.current = !1), (_ = !0);
          else if (_(_) || _(_)) _.current = !1;
          else {
            let _ = !1;
            document.createElement("div").focus({
              get preventScroll() {
                return (_ = !0), !1;
              },
            }),
              _ ? ((_.current = !1), (_ = !0)) : (_.current = !0);
          }
      }
      _._("openchange", _);
      let _ = _.createElement("span");
      _.setAttribute("tabindex", "-1"),
        _.setAttribute("aria-hidden", "true"),
        Object.assign(_.style, _),
        _ && _ && _.insertAdjacentElement("afterend", _);
      function _() {
        return typeof _.current == "boolean"
          ? _ && _
            ? _
            : _() || _
          : _.current.current || _;
      }
      return () => {
        _.off("openchange", _);
        let _ = _(_),
          _ =
            _(_, _) ||
            (_ &&
              _(_.nodesRef.current, _()).some((_) => {
                var _;
                return _(
                  (_ = _.context) == null ? void 0 : _.elements.floating,
                  _,
                );
              }));
        (_ || (_ && ["click", "mousedown"].includes(_.type))) && (_ = !0);
        let _ = _();
        queueMicrotask(() => {
          let _ = _(_);
          _.current &&
            !_.current &&
            _(_) &&
            (!(_ !== _ && _ !== _.body) || _) &&
            _.focus({
              preventScroll: _,
            }),
            _.remove();
        });
      };
    }, [_, _, _, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      queueMicrotask(() => {
        _.current = !1;
      });
    }, [_]),
    _(() => {
      if (!_ && _)
        return (
          _.setFocusManagerState({
            modal: _,
            closeOnFocusOut: _,
            open: _,
            onOpenChange: _,
            domReference: _,
          }),
          () => {
            _.setFocusManagerState(null);
          }
        );
    }, [_, _, _, _, _, _, _]),
    _(() => {
      if (_ || !_ || typeof MutationObserver != "function" || _) return;
      let _ = () => {
        let _ = _.getAttribute("tabindex"),
          _ = _(),
          _ = _(_(_)),
          _ = _.indexOf(_);
        _ !== -1 && (_.current = _),
          _.current.includes("floating") || (_ !== _ && _.length === 0)
            ? _ !== "0" && _.setAttribute("tabindex", "0")
            : _ !== "-1" && _.setAttribute("tabindex", "-1");
      };
      _();
      let _ = new MutationObserver(_);
      return (
        _.observe(_, {
          childList: !0,
          subtree: !0,
          attributes: !0,
        }),
        () => {
          _.disconnect();
        }
      );
    }, [_, _, _, _, _, _, _]);
  function _(_) {
    return _ || !_ || !_
      ? null
      : (0, _.jsx)(_, {
          ref: _ === "start" ? _ : _,
          onClick: (_) => _(!1, _.nativeEvent),
          children: typeof _ == "string" ? _ : "Dismiss",
        });
  }
  let _ = !_ && _ && (_ ? !_ : !0) && (_ || _);
  return (0, _.jsxs)(_.Fragment, {
    children: [
      _ &&
        (0, _.jsx)(_, {
          "data-type": "inside",
          ref: _,
          onFocus: (_) => {
            if (_) {
              let _ = _();
              _(_[0] === "reference" ? _[0] : _[_.length - 1]);
            } else if (_ != null && _.preserveTabOrder && _.portalNode)
              if (((_.current = !1), _(_, _.portalNode))) {
                let _ = _() || _;
                _?.focus();
              } else {
                var _;
                (_ = _.beforeOutsideRef.current) == null || _.focus();
              }
          },
        }),
      !_ && _("start"),
      _,
      _("end"),
      _ &&
        (0, _.jsx)(_, {
          "data-type": "inside",
          ref: _,
          onFocus: (_) => {
            if (_) _(_()[0]);
            else if (_ != null && _.preserveTabOrder && _.portalNode)
              if ((_ && (_.current = !0), _(_, _.portalNode))) {
                let _ = _() || _;
                _?.focus();
              } else {
                var _;
                (_ = _.afterOutsideRef.current) == null || _.focus();
              }
          },
        }),
    ],
  });
}
function _(_) {
  return _(_.target) && _.target.tagName === "BUTTON";
}
function _(_) {
  return _(_);
}
function _(_, _) {
  _ === void 0 && (_ = {});
  let {
      open: _,
      onOpenChange: _,
      dataRef: _,
      elements: { domReference: _ },
    } = _,
    {
      enabled: _ = !0,
      event: _ = "click",
      toggle: _ = !0,
      ignoreMouse: _ = !1,
      keyboardHandlers: _ = !0,
      stickIfOpen: _ = !0,
    } = _,
    _ = _.useRef(),
    _ = _.useRef(!1),
    _ = _.useMemo(
      () => ({
        onPointerDown(_) {
          _.current = _.pointerType;
        },
        onMouseDown(_) {
          let _ = _.current;
          _.button === 0 &&
            _ !== "click" &&
            ((_(_, !0) && _) ||
              (_ &&
              _ &&
              (!(_.current.openEvent && _) ||
                _.current.openEvent.type === "mousedown")
                ? _(!1, _.nativeEvent, "click")
                : (_.preventDefault(), _(!0, _.nativeEvent, "click"))));
        },
        onClick(_) {
          let _ = _.current;
          if (_ === "mousedown" && _.current) {
            _.current = void 0;
            return;
          }
          (_(_, !0) && _) ||
            (_ &&
            _ &&
            (!(_.current.openEvent && _) ||
              _.current.openEvent.type === "click")
              ? _(!1, _.nativeEvent, "click")
              : _(!0, _.nativeEvent, "click"));
        },
        onKeyDown(_) {
          (_.current = void 0),
            !(_.defaultPrevented || !_ || _(_)) &&
              (_.key === " " && !_(_) && (_.preventDefault(), (_.current = !0)),
              _.key === "Enter" && _(!(_ && _), _.nativeEvent, "click"));
        },
        onKeyUp(_) {
          _.defaultPrevented ||
            !_ ||
            _(_) ||
            _(_) ||
            (_.key === " " &&
              _.current &&
              ((_.current = !1), _(!(_ && _), _.nativeEvent, "click")));
        },
      }),
      [_, _, _, _, _, _, _, _, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
          }
        : {},
    [_, _],
  );
}
var _ = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick",
  },
  _ = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture",
  },
  _ = (_) => {
    var _, _;
    return {
      escapeKey:
        typeof _ == "boolean" ? _ : (_ = _?.escapeKey) != null ? _ : !1,
      outsidePress:
        typeof _ == "boolean" ? _ : (_ = _?.outsidePress) != null ? _ : !0,
    };
  };
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, onOpenChange: _, elements: _, dataRef: _ } = _,
    {
      enabled: _ = !0,
      escapeKey: _ = !0,
      outsidePress: _ = !0,
      outsidePressEvent: _ = "pointerdown",
      referencePress: _ = !1,
      referencePressEvent: _ = "pointerdown",
      ancestorScroll: _ = !1,
      bubbles: _,
      capture: _,
    } = _,
    _ = _(),
    _ = _(typeof _ == "function" ? _ : () => !1),
    _ = typeof _ == "function" ? _ : _,
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    { escapeKey: _, outsidePress: _ } = _(_),
    { escapeKey: _, outsidePress: _ } = _(_),
    _ = _.useRef(!1),
    _ = _((_) => {
      var _;
      if (!_ || !_ || !_ || _.key !== "Escape" || _.current) return;
      let _ = (_ = _.current.floatingContext) == null ? void 0 : _.nodeId,
        _ = _ ? _(_.nodesRef.current, _) : [];
      if (!_ && (_.stopPropagation(), _.length > 0)) {
        let _ = !0;
        if (
          (_.forEach((_) => {
            var _;
            if (
              (_ = _.context) != null &&
              _.open &&
              !_.context.dataRef.current.__escapeKeyBubbles
            ) {
              _ = !1;
              return;
            }
          }),
          !_)
        )
          return;
      }
      _(!1, _(_) ? _.nativeEvent : _, "escape-key");
    }),
    _ = _((_) => {
      var _;
      let _ = () => {
        var _;
        _(_), (_ = _(_)) == null || _.removeEventListener("keydown", _);
      };
      (_ = _(_)) == null || _.addEventListener("keydown", _);
    }),
    _ = _((_) => {
      var _;
      let _ = _.current;
      _.current = !1;
      let _ = _.current;
      if (
        ((_.current = !1),
        (_ === "click" && _) || _ || (typeof _ == "function" && !_(_)))
      )
        return;
      let _ = _(_),
        _ = "[" + _("inert") + "]",
        _ = _(_.floating).querySelectorAll(_),
        _ = _(_) ? _ : null;
      for (; _ && !_(_); ) {
        let _ = _(_);
        if (_(_) || !_(_)) break;
        _ = _;
      }
      if (
        _.length &&
        _(_) &&
        !_(_) &&
        !_(_, _.floating) &&
        Array.from(_).every((_) => !_(_, _))
      )
        return;
      if (_(_) && _) {
        let _ = _(_),
          _ = _(_),
          _ = /auto|scroll/,
          _ = _ || _.test(_.overflowX),
          _ = _ || _.test(_.overflowY),
          _ = _ && _.clientWidth > 0 && _.scrollWidth > _.clientWidth,
          _ = _ && _.clientHeight > 0 && _.scrollHeight > _.clientHeight,
          _ = _.direction === "rtl",
          _ =
            _ &&
            (_
              ? _.offsetX <= _.offsetWidth - _.clientWidth
              : _.offsetX > _.clientWidth),
          _ = _ && _.offsetY > _.clientHeight;
        if (_ || _) return;
      }
      let _ = (_ = _.current.floatingContext) == null ? void 0 : _.nodeId,
        _ =
          _ &&
          _(_.nodesRef.current, _).some((_) => {
            var _;
            return _(_, (_ = _.context) == null ? void 0 : _.elements.floating);
          });
      if (_(_, _.floating) || _(_, _.domReference) || _) return;
      let _ = _ ? _(_.nodesRef.current, _) : [];
      if (_.length > 0) {
        let _ = !0;
        if (
          (_.forEach((_) => {
            var _;
            if (
              (_ = _.context) != null &&
              _.open &&
              !_.context.dataRef.current.__outsidePressBubbles
            ) {
              _ = !1;
              return;
            }
          }),
          !_)
        )
          return;
      }
      _(!1, _, "outside-press");
    }),
    _ = _((_) => {
      var _;
      let _ = () => {
        var _;
        _(_), (_ = _(_)) == null || _.removeEventListener(_, _);
      };
      (_ = _(_)) == null || _.addEventListener(_, _);
    });
  _.useEffect(() => {
    if (!_ || !_) return;
    (_.current.__escapeKeyBubbles = _), (_.current.__outsidePressBubbles = _);
    let _ = -1;
    function _(_) {
      _(!1, _, "ancestor-scroll");
    }
    function _() {
      window.clearTimeout(_), (_.current = !0);
    }
    function _() {
      _ = window.setTimeout(
        () => {
          _.current = !1;
        },
        _() ? 5 : 0,
      );
    }
    let _ = _(_.floating);
    _ &&
      (_.addEventListener("keydown", _ ? _ : _, _),
      _.addEventListener("compositionstart", _),
      _.addEventListener("compositionend", _)),
      _ && _.addEventListener(_, _ ? _ : _, _);
    let _ = [];
    return (
      _ &&
        (_(_.domReference) && (_ = _(_.domReference)),
        _(_.floating) && (_ = _.concat(_(_.floating))),
        !_(_.reference) &&
          _.reference &&
          _.reference.contextElement &&
          (_ = _.concat(_(_.reference.contextElement)))),
      (_ = _.filter((_) => {
        var _;
        return _ !== ((_ = _.defaultView) == null ? void 0 : _.visualViewport);
      })),
      _.forEach((_) => {
        _.addEventListener("scroll", _, {
          passive: !0,
        });
      }),
      () => {
        _ &&
          (_.removeEventListener("keydown", _ ? _ : _, _),
          _.removeEventListener("compositionstart", _),
          _.removeEventListener("compositionend", _)),
          _ && _.removeEventListener(_, _ ? _ : _, _),
          _.forEach((_) => {
            _.removeEventListener("scroll", _);
          }),
          window.clearTimeout(_);
      }
    );
  }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]),
    _.useEffect(() => {
      _.current = !1;
    }, [_, _]);
  let _ = _.useMemo(
      () => ({
        onKeyDown: _,
        ...(_ && {
          [_[_]]: (_) => {
            _(!1, _.nativeEvent, "reference-press");
          },
          ...(_ !== "click" && {
            onClick(_) {
              _(!1, _.nativeEvent, "reference-press");
            },
          }),
        }),
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
        onMouseDown() {
          _.current = !0;
        },
        onMouseUp() {
          _.current = !0;
        },
        [_[_]]: () => {
          _.current = !0;
        },
      }),
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
          }
        : {},
    [_, _, _],
  );
}
function _(_) {
  let { open: _ = !1, onOpenChange: _, elements: _ } = _,
    _ = _(),
    _ = _.useRef({}),
    [_] = _.useState(() => _()),
    _ = _() != null,
    [_, _] = _.useState(_.reference),
    _ = _((_, _, _) => {
      (_.current.openEvent = _ ? _ : void 0),
        _.emit("openchange", {
          open: _,
          event: _,
          reason: _,
          nested: _,
        }),
        _?.(_, _, _);
    }),
    _ = _.useMemo(
      () => ({
        setPositionReference: _,
      }),
      [],
    ),
    _ = _.useMemo(
      () => ({
        reference: _ || _.reference || null,
        floating: _.floating || null,
        domReference: _.reference,
      }),
      [_, _.reference, _.floating],
    );
  return _.useMemo(
    () => ({
      dataRef: _,
      open: _,
      onOpenChange: _,
      elements: _,
      events: _,
      floatingId: _,
      refs: _,
    }),
    [_, _, _, _, _, _],
  );
}
function _(_) {
  _ === void 0 && (_ = {});
  let { nodeId: _ } = _,
    _ = _({
      ..._,
      elements: {
        reference: null,
        floating: null,
        ..._.elements,
      },
    }),
    _ = _.rootContext || _,
    _ = _.elements,
    [_, _] = _.useState(null),
    [_, _] = _.useState(null),
    _ = _?.domReference || _,
    _ = _.useRef(null),
    _ = _();
  _(() => {
    _ && (_.current = _);
  }, [_]);
  let _ = _({
      ..._,
      elements: {
        ..._,
        ...(_ && {
          reference: _,
        }),
      },
    }),
    _ = _.useCallback(
      (_) => {
        let _ = _(_)
          ? {
              getBoundingClientRect: () => _.getBoundingClientRect(),
              contextElement: _,
            }
          : _;
        _(_), _.refs.setReference(_);
      },
      [_.refs],
    ),
    _ = _.useCallback(
      (_) => {
        (_(_) || _ === null) && ((_.current = _), _(_)),
          (_(_.refs.reference.current) ||
            _.refs.reference.current === null ||
            (_ !== null && !_(_))) &&
            _.refs.setReference(_);
      },
      [_.refs],
    ),
    _ = _.useMemo(
      () => ({
        ..._.refs,
        setReference: _,
        setPositionReference: _,
        domReference: _,
      }),
      [_.refs, _, _],
    ),
    _ = _.useMemo(
      () => ({
        ..._.elements,
        domReference: _,
      }),
      [_.elements, _],
    ),
    _ = _.useMemo(
      () => ({
        ..._,
        ..._,
        refs: _,
        elements: _,
        nodeId: _,
      }),
      [_, _, _, _, _],
    );
  return (
    _(() => {
      _.dataRef.current.floatingContext = _;
      let _ = _?.nodesRef.current.find((_) => _._ === _);
      _ && (_.context = _);
    }),
    _.useMemo(
      () => ({
        ..._,
        context: _,
        refs: _,
        elements: _,
      }),
      [_, _, _, _],
    )
  );
}
function _(_, _) {
  _ === void 0 && (_ = {});
  let { open: _, onOpenChange: _, events: _, dataRef: _, elements: _ } = _,
    { enabled: _ = !0, visibleOnly: _ = !0 } = _,
    _ = _.useRef(!1),
    _ = _.useRef(-1),
    _ = _.useRef(!0);
  _.useEffect(() => {
    if (!_) return;
    let _ = _(_.domReference);
    function _() {
      !_ &&
        _(_.domReference) &&
        _.domReference === _(_(_.domReference)) &&
        (_.current = !0);
    }
    function _() {
      _.current = !0;
    }
    return (
      _.addEventListener("blur", _),
      _.addEventListener("keydown", _, !0),
      () => {
        _.removeEventListener("blur", _),
          _.removeEventListener("keydown", _, !0);
      }
    );
  }, [_.domReference, _, _]),
    _.useEffect(() => {
      if (!_) return;
      function _(_) {
        let { reason: _ } = _;
        (_ === "reference-press" || _ === "escape-key") && (_.current = !0);
      }
      return (
        _._("openchange", _),
        () => {
          _.off("openchange", _);
        }
      );
    }, [_, _]),
    _.useEffect(
      () => () => {
        _(_);
      },
      [],
    );
  let _ = _.useMemo(
    () => ({
      onPointerDown(_) {
        _(_.nativeEvent) || (_.current = !1);
      },
      onMouseLeave() {
        _.current = !1;
      },
      onFocus(_) {
        if (_.current) return;
        let _ = _(_.nativeEvent);
        if (_ && _(_))
          try {
            if (_() && _()) throw Error();
            if (!_.matches(":focus-visible")) return;
          } catch {
            if (!_.current && !_(_)) return;
          }
        _(!0, _.nativeEvent, "focus");
      },
      onBlur(_) {
        _.current = !1;
        let _ = _.relatedTarget,
          _ = _.nativeEvent,
          _ =
            _(_) &&
            _.hasAttribute(_("focus-guard")) &&
            _.getAttribute("data-type") === "outside";
        _.current = window.setTimeout(() => {
          var _;
          let _ = _(_.domReference ? _.domReference.ownerDocument : document);
          (!_ && _ === _.domReference) ||
            _(
              (_ = _.current.floatingContext) == null
                ? void 0
                : _.refs.floating.current,
              _,
            ) ||
            _(_.domReference, _) ||
            _ ||
            _(!1, _, "focus");
        });
      },
    }),
    [_, _.domReference, _, _],
  );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
          }
        : {},
    [_, _],
  );
}
var _ = "active",
  _ = "selected";
function _(_, _, _) {
  let _ = new Map(),
    _ = _ === "item",
    _ = _;
  if (_ && _) {
    let { [_]: _, [_]: _, ..._ } = _;
    _ = _;
  }
  return {
    ...(_ === "floating" && {
      tabIndex: -1,
      [_]: "",
    }),
    ..._,
    ..._.map((_) => {
      let _ = _ ? _[_] : null;
      return typeof _ == "function" ? (_ ? _(_) : null) : _;
    })
      .concat(_)
      .reduce(
        (_, _) => (
          _ &&
            Object.entries(_).forEach((_) => {
              let [_, _] = _;
              if (!(_ && [_, _].includes(_)))
                if (_.indexOf("on") === 0) {
                  if ((_.has(_) || _.set(_, []), typeof _ == "function")) {
                    var _;
                    (_ = _.get(_)) == null || _.push(_),
                      (_[_] = function () {
                        for (
                          var _, _ = arguments.length, _ = new Array(_), _ = 0;
                          _ < _;
                          _++
                        )
                          _[_] = arguments[_];
                        return (_ = _.get(_)) == null
                          ? void 0
                          : _.map((_) => _(..._)).find((_) => _ !== void 0);
                      });
                  }
                } else _[_] = _;
            }),
          _
        ),
        {},
      ),
  };
}
function _(_) {
  _ === void 0 && (_ = []);
  let _ = _.map((_) => _?.reference),
    _ = _.map((_) => _?.floating),
    _ = _.map((_) => _?.item),
    _ = _.useCallback((_) => _(_, _, "reference"), _),
    _ = _.useCallback((_) => _(_, _, "floating"), _),
    _ = _.useCallback((_) => _(_, _, "item"), _);
  return _.useMemo(
    () => ({
      getReferenceProps: _,
      getFloatingProps: _,
      getItemProps: _,
    }),
    [_, _, _],
  );
}
var _ = "Escape";
function _(_, _, _) {
  switch (_) {
    case "vertical":
      return _;
    case "horizontal":
      return _;
    default:
      return _ || _;
  }
}
function _(_, _) {
  return _(_, _ === _ || _ === _, _ === _ || _ === _);
}
function _(_, _, _) {
  return (
    _(_, _ === _, _ ? _ === _ : _ === _) ||
    _ === "Enter" ||
    _ === " " ||
    _ === ""
  );
}
function _(_, _, _) {
  return _(_, _ ? _ === _ : _ === _, _ === _);
}
function _(_, _, _, _) {
  let _ = _ ? _ === _ : _ === _,
    _ = _ === _;
  return _ === "both" || (_ === "horizontal" && _ && _ > 1)
    ? _ === _
    : _(_, _, _);
}
function _(_, _) {
  let { open: _, onOpenChange: _, elements: _ } = _,
    {
      listRef: _,
      activeIndex: _,
      onNavigate: _ = () => {},
      enabled: _ = !0,
      selectedIndex: _ = null,
      allowEscape: _ = !1,
      loop: _ = !1,
      nested: _ = !1,
      rtl: _ = !1,
      virtual: _ = !1,
      focusItemOnOpen: _ = "auto",
      focusItemOnHover: _ = !0,
      openOnArrowKeyDown: _ = !0,
      disabledIndices: _ = void 0,
      orientation: _ = "vertical",
      cols: _ = 1,
      scrollItemIntoView: _ = !0,
      virtualItemRef: _,
      itemSizes: _,
      dense: _ = !1,
    } = _,
    _ = _(_.floating),
    _ = _(_),
    _ = _(),
    _ = _();
  _(() => {
    _.dataRef.current.orientation = _;
  }, [_, _]);
  let _ = _(() => {
      _(_.current === -1 ? null : _.current);
    }),
    _ = _(_.domReference),
    _ = _.useRef(_),
    _ = _.useRef(_ ?? -1),
    _ = _.useRef(null),
    _ = _.useRef(!0),
    _ = _.useRef(_),
    _ = _.useRef(!!_.floating),
    _ = _.useRef(_),
    _ = _.useRef(!1),
    _ = _.useRef(!1),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    [_, _] = _.useState(),
    [_, _] = _.useState(),
    _ = _(() => {
      function _(_) {
        _
          ? (_(_._), _?.events.emit("virtualfocus", _), _ && (_.current = _))
          : _(_, {
              sync: _.current,
              preventScroll: !0,
            });
      }
      let _ = _.current[_.current];
      _ && _(_),
        (_.current ? (_) => _() : requestAnimationFrame)(() => {
          let _ = _.current[_.current] || _;
          if (!_) return;
          _ || _(_);
          let _ = _.current;
          _ &&
            _ &&
            (_.current || !_.current) &&
            (_.scrollIntoView == null ||
              _.scrollIntoView(
                typeof _ == "boolean"
                  ? {
                      block: "nearest",
                      inline: "nearest",
                    }
                  : _,
              ));
        });
    });
  _(() => {
    _ &&
      (_ && _.floating
        ? _.current && _ != null && ((_.current = !0), (_.current = _), _())
        : _.current && ((_.current = -1), _.current()));
  }, [_, _, _.floating, _, _]),
    _(() => {
      if (_ && _ && _.floating)
        if (_ == null) {
          if (((_.current = !1), _.current != null)) return;
          if (
            (_.current && ((_.current = -1), _()),
            (!_.current || !_.current) &&
              _.current &&
              (_.current != null || (_.current === !0 && _.current == null)))
          ) {
            let _ = 0,
              _ = () => {
                _.current[0] == null
                  ? (_ < 2 && (_ ? requestAnimationFrame : queueMicrotask)(_),
                    _++)
                  : ((_.current =
                      _.current == null || _(_.current, _, _) || _
                        ? _(_, _.current)
                        : _(_, _.current)),
                    (_.current = null),
                    _());
              };
            _();
          }
        } else _(_, _) || ((_.current = _), _(), (_.current = !1));
    }, [_, _, _.floating, _, _, _, _, _, _, _, _, _]),
    _(() => {
      var _;
      if (!_ || _.floating || !_ || _ || !_.current) return;
      let _ = _.nodesRef.current,
        _ =
          (_ = _.find((_) => _._ === _)) == null || (_ = _.context) == null
            ? void 0
            : _.elements.floating,
        _ = _(_(_.floating)),
        _ = _.some((_) => _.context && _(_.context.elements.floating, _));
      _ &&
        !_ &&
        _.current &&
        _.focus({
          preventScroll: !0,
        });
    }, [_, _.floating, _, _, _]),
    _(() => {
      if (!_ || !_ || !_ || _) return;
      function _(_) {
        _(_._), _ && (_.current = _);
      }
      return (
        _.events._("virtualfocus", _),
        () => {
          _.events.off("virtualfocus", _);
        }
      );
    }, [_, _, _, _, _]),
    _(() => {
      (_.current = _), (_.current = _), (_.current = !!_.floating);
    }),
    _(() => {
      _ || (_.current = null);
    }, [_]);
  let _ = _ != null,
    _ = _.useMemo(() => {
      function _(_) {
        if (!_) return;
        let _ = _.current.indexOf(_);
        _ !== -1 && _.current !== _ && ((_.current = _), _());
      }
      return {
        onFocus(_) {
          let { currentTarget: _ } = _;
          (_.current = !0), _(_);
        },
        onClick: (_) => {
          let { currentTarget: _ } = _;
          return _.focus({
            preventScroll: !0,
          });
        },
        ...(_ && {
          onMouseMove(_) {
            let { currentTarget: _ } = _;
            (_.current = !0), (_.current = !1), _(_);
          },
          onPointerLeave(_) {
            let { pointerType: _ } = _;
            if (
              !(!_.current || _ === "touch") &&
              ((_.current = !0), (_.current = -1), _(), !_)
            ) {
              var _;
              (_ = _.current) == null ||
                _.focus({
                  preventScroll: !0,
                });
            }
          },
        }),
      };
    }, [_, _, _, _, _, _]),
    _ = _((_) => {
      if (
        ((_.current = !1),
        (_.current = !0),
        _.which === 229 || (!_.current && _.currentTarget === _.current))
      )
        return;
      if (_ && _(_.key, _, _, _)) {
        _(_),
          _(!1, _.nativeEvent, "list-navigation"),
          _(_.domReference) &&
            (_
              ? _?.events.emit("virtualfocus", _.domReference)
              : _.domReference.focus());
        return;
      }
      let _ = _.current,
        _ = _(_, _),
        _ = _(_, _);
      if (
        (_ ||
          (_.key === "Home" && (_(_), (_.current = _), _()),
          _.key === "End" && (_(_), (_.current = _), _())),
        _ > 1)
      ) {
        let _ =
            _ ||
            Array.from(
              {
                length: _.current.length,
              },
              () => ({
                width: 1,
                height: 1,
              }),
            ),
          _ = _(_, _, _),
          _ = _.findIndex((_) => _ != null && !_(_.current, _, _)),
          _ = _.reduce(
            (_, _, _) => (_ != null && !_(_.current, _, _) ? _ : _),
            -1,
          ),
          _ =
            _[
              _(
                {
                  current: _.map((_) => (_ != null ? _.current[_] : null)),
                },
                {
                  event: _,
                  orientation: _,
                  loop: _,
                  rtl: _,
                  cols: _,
                  disabledIndices: _(
                    [
                      ...(_ ||
                        _.current.map((_, _) =>
                          _(_.current, _) ? _ : void 0,
                        )),
                      void 0,
                    ],
                    _,
                  ),
                  minIndex: _,
                  maxIndex: _,
                  prevIndex: _(
                    _.current > _ ? _ : _.current,
                    _,
                    _,
                    _,
                    _.key === _ ? "bl" : _.key === (_ ? _ : _) ? "tr" : "tl",
                  ),
                  stopEvent: !0,
                },
              )
            ];
        if ((_ != null && ((_.current = _), _()), _ === "both")) return;
      }
      if (_(_.key, _)) {
        if (
          (_(_),
          _ && !_ && _(_.currentTarget.ownerDocument) === _.currentTarget)
        ) {
          (_.current = _(_.key, _, _) ? _ : _), _();
          return;
        }
        _(_.key, _, _)
          ? _
            ? (_.current =
                _ >= _
                  ? _ && _ !== _.current.length
                    ? -1
                    : _
                  : _(_, {
                      startingIndex: _,
                      disabledIndices: _,
                    }))
            : (_.current = Math.min(
                _,
                _(_, {
                  startingIndex: _,
                  disabledIndices: _,
                }),
              ))
          : _
            ? (_.current =
                _ <= _
                  ? _ && _ !== -1
                    ? _.current.length
                    : _
                  : _(_, {
                      startingIndex: _,
                      decrement: !0,
                      disabledIndices: _,
                    }))
            : (_.current = Math.max(
                _,
                _(_, {
                  startingIndex: _,
                  decrement: !0,
                  disabledIndices: _,
                }),
              )),
          _(_, _.current) && (_.current = -1),
          _();
      }
    }),
    _ = _.useMemo(
      () =>
        _ &&
        _ &&
        _ && {
          "aria-activedescendant": _ || _,
        },
      [_, _, _, _, _],
    ),
    _ = _.useMemo(
      () => ({
        "aria-orientation": _ === "both" ? void 0 : _,
        ...(_ ? {} : _),
        onKeyDown: _,
        onPointerMove() {
          _.current = !0;
        },
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => {
      function _(_) {
        _ === "auto" && _(_.nativeEvent) && (_.current = !0);
      }
      function _(_) {
        (_.current = _), _ === "auto" && _(_.nativeEvent) && (_.current = !0);
      }
      return {
        ..._,
        onKeyDown(_) {
          var _;
          _.current = !1;
          let _ = _.key.startsWith("Arrow"),
            _ = ["Home", "End"].includes(_.key),
            _ = _ || _,
            _ =
              _ == null ||
              (_ = _.nodesRef.current.find((_) => _._ === _)) == null ||
              (_ = _.context) == null ||
              (_ = _.dataRef) == null
                ? void 0
                : _.current.orientation,
            _ = _(_.key, _, _),
            _ = _(_.key, _, _, _),
            _ = _(_.key, _, _),
            _ = _(_.key, _),
            _ = (_ ? _ : _) || _.key === "Enter" || _.key.trim() === "";
          if (_ && _) {
            let _ = _?.nodesRef.current.find((_) => _.parentId == null),
              _ = _ && _ ? _(_.nodesRef.current, _._) : null;
            if (_ && _ && _) {
              let _ = new KeyboardEvent("keydown", {
                key: _.key,
                bubbles: !0,
              });
              if (_ || _) {
                var _, _;
                let _ =
                    ((_ = _.context) == null
                      ? void 0
                      : _.elements.domReference) === _.currentTarget,
                  _ =
                    _ && !_
                      ? (_ = _.context) == null
                        ? void 0
                        : _.elements.domReference
                      : _
                        ? _.current.find((_) => _?._ === _)
                        : null;
                _ && (_(_), _.dispatchEvent(_), _(void 0));
              }
              if (
                (_ || _) &&
                _.context &&
                _.context.open &&
                _.parentId &&
                _.currentTarget !== _.context.elements.domReference
              ) {
                var _;
                _(_),
                  (_ = _.context.elements.domReference) == null ||
                    _.dispatchEvent(_);
                return;
              }
            }
            return _(_);
          }
          if (!(!_ && !_ && _)) {
            if (_) {
              let _ = _(_.key, _);
              _.current = _ && _ ? null : _.key;
            }
            if (_) {
              _ &&
                (_(_),
                _
                  ? ((_.current = _(_, _.current)), _())
                  : _(!0, _.nativeEvent, "list-navigation"));
              return;
            }
            _ &&
              (_ != null && (_.current = _),
              _(_),
              !_ && _ ? _(!0, _.nativeEvent, "list-navigation") : _(_),
              _ && _());
          }
        },
        onFocus() {
          _ && !_ && ((_.current = -1), _());
        },
        onPointerDown: _,
        onPointerEnter: _,
        onMouseDown: _,
        onClick: _,
      };
    }, [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _]);
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
            item: _,
          }
        : {},
    [_, _, _, _],
  );
}
var _ = new Map([
  ["select", "listbox"],
  ["combobox", "listbox"],
  ["label", !1],
]);
function _(_, _) {
  var _;
  _ === void 0 && (_ = {});
  let { open: _, floatingId: _ } = _,
    { enabled: _ = !0, role: _ = "dialog" } = _,
    _ = (_ = _.get(_)) != null ? _ : _,
    _ = _(),
    _ = _() != null,
    _ = _.useMemo(
      () =>
        _ === "tooltip" || _ === "label"
          ? {
              ["aria-" + (_ === "label" ? "labelledby" : "describedby")]: _
                ? _
                : void 0,
            }
          : {
              "aria-expanded": _ ? "true" : "false",
              "aria-haspopup": _ === "alertdialog" ? "dialog" : _,
              "aria-controls": _ ? _ : void 0,
              ...(_ === "listbox" && {
                role: "combobox",
              }),
              ...(_ === "menu" && {
                _: _,
              }),
              ...(_ === "menu" &&
                _ && {
                  role: "menuitem",
                }),
              ...(_ === "select" && {
                "aria-autocomplete": "none",
              }),
              ...(_ === "combobox" && {
                "aria-autocomplete": "list",
              }),
            },
      [_, _, _, _, _, _],
    ),
    _ = _.useMemo(() => {
      let _ = {
        _: _,
        ...(_ && {
          role: _,
        }),
      };
      return _ === "tooltip" || _ === "label"
        ? _
        : {
            ..._,
            ...(_ === "menu" && {
              "aria-labelledby": _,
            }),
          };
    }, [_, _, _, _]),
    _ = _.useCallback(
      (_) => {
        let { active: _, selected: _ } = _,
          _ = {
            role: "option",
            ...(_ && {
              _: _ + "-option",
            }),
          };
        switch (_) {
          case "select":
            return {
              ..._,
              "aria-selected": _ && _,
            };
          case "combobox":
            return {
              ..._,
              ...(_ && {
                "aria-selected": !0,
              }),
            };
        }
        return {};
      },
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
            item: _,
          }
        : {},
    [_, _, _, _],
  );
}
function _(_, _) {
  var _;
  let { open: _, dataRef: _ } = _,
    {
      listRef: _,
      activeIndex: _,
      onMatch: _,
      onTypingChange: _,
      enabled: _ = !0,
      findMatch: _ = null,
      resetMs: _ = 750,
      ignoreKeys: _ = [],
      selectedIndex: _ = null,
    } = _,
    _ = _.useRef(-1),
    _ = _.useRef(""),
    _ = _.useRef((_ = _ ?? _) != null ? _ : -1),
    _ = _.useRef(null),
    _ = _(_),
    _ = _(_),
    _ = _(_),
    _ = _(_);
  _(() => {
    _ && (_(_), (_.current = null), (_.current = ""));
  }, [_]),
    _(() => {
      if (_ && _.current === "") {
        var _;
        _.current = (_ = _ ?? _) != null ? _ : -1;
      }
    }, [_, _, _]);
  let _ = _((_) => {
      _
        ? _.current.typing || ((_.current.typing = _), _(_))
        : _.current.typing && ((_.current.typing = _), _(_));
    }),
    _ = _((_) => {
      function _(_, _, _) {
        let _ = _.current
          ? _.current(_, _)
          : _.find(
              (_) =>
                _?.toLocaleLowerCase().indexOf(_.toLocaleLowerCase()) === 0,
            );
        return _ ? _.indexOf(_) : -1;
      }
      let _ = _.current;
      if (
        (_.current.length > 0 &&
          _.current[0] !== " " &&
          (_(_, _, _.current) === -1 ? _(!1) : _.key === " " && _(_)),
        _ == null ||
          _.current.includes(_.key) ||
          _.key.length !== 1 ||
          _.ctrlKey ||
          _.metaKey ||
          _.altKey)
      )
        return;
      _ && _.key !== " " && (_(_), _(!0)),
        _.every((_) => {
          var _, _;
          return _
            ? ((_ = _[0]) == null ? void 0 : _.toLocaleLowerCase()) !==
                ((_ = _[1]) == null ? void 0 : _.toLocaleLowerCase())
            : !0;
        }) &&
          _.current === _.key &&
          ((_.current = ""), (_.current = _.current)),
        (_.current += _.key),
        _(_),
        (_.current = window.setTimeout(() => {
          (_.current = ""), (_.current = _.current), _(!1);
        }, _));
      let _ = _.current,
        _ = _(
          _,
          [..._.slice((_ || 0) + 1), ..._.slice(0, (_ || 0) + 1)],
          _.current,
        );
      _ !== -1
        ? (_(_), (_.current = _))
        : _.key !== " " && ((_.current = ""), _(!1));
    }),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
      }),
      [_],
    ),
    _ = _.useMemo(
      () => ({
        onKeyDown: _,
        onKeyUp(_) {
          _.key === " " && _(!1);
        },
      }),
      [_, _],
    );
  return _.useMemo(
    () =>
      _
        ? {
            reference: _,
            floating: _,
          }
        : {},
    [_, _, _],
  );
}
var _ = _(_(), 1);
function _(_, _, _) {
  return typeof _ == "function" ? _(_, _) : _.default.cloneElement(_, _);
}
function _(_, _, _, _) {
  return _(_ || _, _, _);
}
var _ = "GVTLyNN3x-4-";
var _ = "wmrAq4UPe1Q-";
var _ = _(_(), 1);
function _(_) {
  let { render: _, ..._ } = _;
  return _(
    _,
    (0, _.jsx)(_, {
      radius: "sm",
      background: "dull-8",
      className: _,
    }),
    {
      role: "listbox",
      ..._,
    },
  );
}
function _(_) {
  let {
    selected: _,
    focused: _,
    label: _ = null,
    render: _,
    disabled: _,
    ..._
  } = _;
  return _(
    _,
    (0, _.jsx)(_, {
      navProps: {
        focusable: !0,
      },
      "data-selected": _ ? "true" : "false",
      "data-focused": _ ? "true" : void 0,
      "aria-disabled": _,
      className: _,
      paddingY: "2",
      paddingX: "3",
    }),
    {
      role: "option",
      ..._,
    },
    {
      selected: _,
      focused: _,
      disabled: _,
    },
  );
}
var _ = Object.assign(_, {
  Option: _,
});
var _ = _(_(), 1);
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 12,
    children: (0, _.jsx)("path", {
      _: "M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z",
      fill: "currentColor",
    }),
  });
}
var _ = _(_(), 1),
  _ = (0, _.createContext)({}),
  _ = (0, _.createContext)(() => {});
function _(_) {
  let [_, _] = (0, _.useState)({});
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    }),
  });
}
function _() {
  return (0, _.useContext)(_);
}
var _ = _(_(), 1),
  _ = (0, _.createContext)(null);
function _(_) {
  let { gutter: _ = 0, placement: _ } = _,
    _ = [],
    _ = _ && typeof _ == "object";
  return (
    _ && _.offset
      ? _.push(_(_.offset))
      : (!_ || _.offset === void 0) && _.push(_(2)),
    _ && _.flip ? _.push(_(_.flip)) : (!_ || _.flip === void 0) && _.push(_()),
    _ && _.shift
      ? _.push(_(_.shift))
      : (!_ || _.shift === void 0) && _.push(_()),
    _.push(
      _({
        apply: (_) => {
          let { rects: _, elements: _, availableHeight: _ } = _,
            _ = {
              boxSizing: "border-box",
              zIndex: "1",
            };
          switch ((_.scroll && (_.overflowY = "auto"), _.width)) {
            case "target": {
              _.width = `${_.reference.width}px`;
              break;
            }
            case "content": {
              _.width = `${_.floating.width}px`;
              break;
            }
            case "dropdown": {
              let _ = _.reference.width;
              _.floating.width > _ && _ < 200 && (_ = _.floating.width),
                (_.width = `${_}px`);
            }
          }
          typeof _.width == "function" &&
            (_.width = _.width({
              unContentWidth: _.floating.width,
              unTargetWidth: _.reference.width,
            }));
          let _ = typeof _ == "number" ? `${_}px` : `var(--spacing-${_})`;
          typeof _.maxHeight == "function"
            ? (_.maxHeight = _.maxHeight({
                unAvailableHeight: _,
                gutter: _,
              }))
            : typeof _.maxHeight == "number"
              ? (_.maxHeight = `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`)
              : typeof _ == "number"
                ? (_.maxHeight = `${_ - _}px`)
                : (_.maxHeight = `calc( ${_}px - var(--spacing-${_}) )`),
            Object.assign(_.floating.style, _),
            _.floating.style.setProperty("--popover-max-height", _.maxHeight);
        },
      }),
    ),
    _
  );
}
var _ = _(_(), 1),
  _ = (0, _.createContext)(null);
function _(_) {
  let { children: _, state: _ } = _;
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { children: _ } = _,
    _ = _.Children.only(_),
    _ = (0, _.useContext)(_),
    _ = _([_?.floating.refs.setReference, _?.props.ref]);
  if (!_) return null;
  if (!_)
    return (
      console.error(
        "<PopoverListAnchor> must be a child of <PopoverListRoot>.",
      ),
      null
    );
  let { ref: _, ..._ } = _.props;
  return (0, _.cloneElement)(_, {
    ref: _,
    ..._.getReferenceProps(_),
  });
}
function _(_) {
  let { children: _, render: _, ref: _ } = _,
    _ = (0, _.useContext)(_),
    _ = _([_, _?.floating.refs.setFloating]),
    _ = _();
  return _
    ? _.open
      ? (0, _.jsx)(_, {
          root: _?.targetElement,
          children: (0, _.jsx)(_, {
            state: _,
            children: (0, _.jsx)(_, {
              ref: _,
              style: _.floating.floatingStyles,
              ..._.getFloatingProps(),
              render: _,
              children: (0, _.jsx)(_, {
                elementsRef: _.elementsRef,
                labelsRef: _.labelsRef,
                children: _,
              }),
            }),
          }),
        })
      : null
    : (console.error(
        "<PopoverListPositioner> must be a child of <PopoverListRoot>.",
      ),
      null);
}
function _(_) {
  return _.IN_GAMEPADUI
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {
        ..._,
      });
}
function _(_) {
  let { state: _, children: _ } = _,
    _ = () => _.floating.context.onOpenChange(!1),
    _ = _.default.useRef(void 0);
  return (
    _(_, !!_.current, !1),
    (0, _.jsx)(_, {
      navID: "PopoverList",
      onCancelButton: _,
      modal: !0,
      navTreeRef: _,
      children: _,
    })
  );
}
function _(_) {
  let { state: _, children: _ } = _;
  return (0, _.jsx)(_, {
    context: _.floating.context,
    initialFocus: _.initialFocus,
    returnFocus: !1,
    children: _,
  });
}
function _(_) {
  let {
      children: _,
      label: _,
      selected: _,
      onSelect: _,
      ref: _,
      disabled: _,
      ..._
    } = _,
    _ = (0, _.useContext)(_),
    { ref: _, index: _ } = _({
      label: _,
    }),
    _ = _([_, _]);
  if (!_)
    return (
      console.error("<PopoverListItem> must be a child of <PopoverListRoot>."),
      null
    );
  let _ = _ === _.activeIndex,
    _ = _ === _.selectedIndex || !!_;
  return (0, _.jsx)(_.Option, {
    ref: _,
    selected: _,
    focused: _,
    role: "option",
    tabIndex: 0,
    ..._.getItemProps({
      onClick: _ ? void 0 : _,
      onKeyDown: (_) => {
        !_ &&
          (_.key === "Enter" || (_.key === " " && !_.typingRef.current)) &&
          (_(_), _.preventDefault(), _.stopPropagation());
      },
      active: _,
      selected: _,
      disabled: _,
      ..._,
    }),
    children: _,
  });
}
function _(_) {
  let {
      open: _,
      onOpenChange: _,
      activeIndex: _,
      setActiveIndex: _,
      selectedIndex: _,
      setSelectedIndex: _,
      interactions: _ = {},
      role: _,
      placement: _,
    } = _,
    _ = _,
    _ = _({
      open: _,
      onOpenChange: _,
      middleware: _(_),
      whileElementsMounted: _,
      placement: _ && typeof _ == "object" ? _.initial : _,
    }),
    _ = _(_.context, {
      enabled: !!_.click,
    }),
    _ = _(_.context, {
      enabled: !!_.focus,
    }),
    _ = _(_.context),
    _ = (0, _.useRef)([]),
    _ = _(_.context, {
      listRef: _,
      activeIndex: _,
      selectedIndex: _,
      onNavigate: _,
      virtual: !!_.virtualItemFocus,
      loop: !0,
      focusItemOnOpen: !1,
    }),
    _ = (0, _.useRef)([]),
    _ = (0, _.useRef)(!1),
    _ = _(_.context, {
      enabled: !!_.typeahead,
      listRef: _,
      activeIndex: _,
      selectedIndex: _,
      onMatch: _ ? _ : _,
      onTypingChange: (_) => (_.current = _),
    }),
    _ = _(_.context, {
      role: _,
    }),
    {
      getFloatingProps: _,
      getReferenceProps: _,
      getItemProps: _,
    } = _([_, _, _, _, _, _]);
  return {
    floating: _,
    getFloatingProps: _,
    getReferenceProps: _,
    getItemProps: _,
    open: _,
    activeIndex: _,
    selectedIndex: _,
    setSelectedIndex: _,
    elementsRef: _,
    labelsRef: _,
    typingRef: _,
    initialFocus: _.virtualItemFocus ? -1 : void 0,
  };
}
var _ = {
  Root: _,
  Anchor: _,
  Positioner: _,
  Item: _,
};
var _ = _(_(), 1);
var _ = {};
_(_, {
  Clickable: () => _,
  ControlBox: () => _,
  Disabled: () => _,
  Focusable: () => _,
  Hoverable: () => _,
  "Size-1": () => _,
  "Size-2": () => _,
  "Size-3": () => _,
  "Variant-default": () => _,
  "Variant-dim": () => _,
  "Variant-highlight": () => _,
  "Variant-inset": () => _,
  "Variant-inset-focus": () => _,
  "Variant-inset-glass": () => _,
  "Variant-underline": () => _,
  default: () => _,
});
var _ = "MfFMsIuDiWQ-";
var _ = "_7wsyxeN-f2g-";
var _ = "_6FH0jMPoxT0-";
var _ = "OyNo1p0TpyU-";
var _ = "eWU2vcvOOE0-";
var _ = "wMjymeJSTfY-";
var _ = "W338F6BdZXE-";
var _ = "rH8tyh8NUII-";
var _ = "ZW65UCg4kxs-";
var _ = "bG2NtC5tCTc-";
var _ = "eVF7fbj4R8w-";
var _ = "H69XtSaDens-";
var _ = "jObSrBSaPBM-";
var _ = "LUF0vPBWoU8-";
var _ = "tcHFAQleIx8-";
var _ = {
  "Variant-default": "MfFMsIuDiWQ-",
  "Size-3": "_7wsyxeN-f2g-",
  "Variant-inset": "_6FH0jMPoxT0-",
  "Variant-inset-focus": "OyNo1p0TpyU-",
  Focusable: "eWU2vcvOOE0-",
  "Variant-inset-glass": "wMjymeJSTfY-",
  "Variant-underline": "W338F6BdZXE-",
  "Variant-dim": "rH8tyh8NUII-",
  "Variant-highlight": "ZW65UCg4kxs-",
  ControlBox: "bG2NtC5tCTc-",
  Hoverable: "eVF7fbj4R8w-",
  Clickable: "H69XtSaDens-",
  Disabled: "jObSrBSaPBM-",
  "Size-1": "LUF0vPBWoU8-",
  "Size-2": "tcHFAQleIx8-",
};
var _ = _(_(), 1);
function _(_) {
  let { children: _, beforeContent: _, afterContent: _, hasValue: _, ..._ } = _,
    _ = _(_);
  return (0, _.jsxs)(_, {
    ..._,
    align: "center",
    "data-has-value": !!_,
    children: [
      _ &&
        (0, _.jsx)(_, {
          paddingRight: "2",
          children: _,
        }),
      (0, _.jsx)(_, {
        flexGrow: "1",
        minWidth: "0",
        children: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          paddingLeft: "2",
          children: _,
        }),
    ],
  });
}
function _(_) {
  let {
    variant: _ = "default",
    size: _ = "2",
    radius: _,
    focusable: _ = !0,
    hoverable: _ = !0,
    clickable: _ = !0,
    disabled: _,
    className: _,
    ..._
  } = _;
  return _(
    {
      ..._,
      radius: _ === "underline" ? "none" : _,
      className: (0, _.default)(
        _,
        _ && !_ && _,
        _ && !_ && _,
        _ && !_ && _,
        _ && _,
        _[`Variant-${_}`],
        _[`Size-${_}`],
        _,
      ),
    },
    _,
  );
}
var _ = _(_(), 1),
  _ = {
    _: "rotate( 180, 10, 10 )",
    left: "rotate( 90, 10, 10 )",
    right: "rotate( 270, 10, 10 )",
  };
function _(_) {
  let { direction: _ = "down" } = _,
    _ = _[_];
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)("path", {
      transform: _,
      _: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
      fill: "currentColor",
    }),
  });
}
var _ = _(_(), 1);
function _(_) {
  let {
      children: _,
      state: _,
      placement: _ = "bottom-end",
      popoverWidth: _ = "dropdown",
      popoverMaxHeight: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(
      () =>
        _.rgOptions.findIndex((_) =>
          _.multiselect ? _.selectedValue.includes(_) : _ === _.selectedValue,
        ),
      [_.selectedValue, _.rgOptions, _.multiselect],
    ),
    _ = (0, _.useRef)(null),
    _ = {
      ..._,
      ..._,
      focusedValue: _,
      onFocusChange: _,
      refPopover: _,
      setOpen: (_) => {
        _ && _(_.multiselect ? _.selectedValue[0] : _.selectedValue),
          _.setOpen(_);
      },
      focusedIndex: _,
      onFocusedIndexChange: _,
    },
    _ = _({
      open: _.bOpen,
      onOpenChange: _.setOpen,
      width: _,
      maxHeight: _,
      placement: _,
      selectedIndex: _,
      setSelectedIndex: (_) => _.onItemSelectionChange(_.rgOptions[_]),
      activeIndex: _,
      setActiveIndex: _,
      gutter: "4",
      interactions: {
        click: !0,
        typeahead: !0,
      },
      role: "select",
      scroll: !0,
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Root, {
      state: _,
      children: _,
    }),
  });
}
function _(_) {
  let { refPopover: _ } = _("<Select.Options>");
  return (0, _.jsx)(_.Positioner, {
    ref: _,
    children: _.children,
  });
}
function _(_) {
  let { value: _, children: _, disabled: _, ..._ } = _,
    {
      onItemSelectionChange: _,
      multiselect: _,
      selectedValue: _,
      maxSelected: _,
    } = _("<SelectTrigger>"),
    _ = typeof _ == "string" ? _ : void 0,
    _ = !1,
    _ = !1;
  _
    ? ((_ = Array.isArray(_) && _.includes(_)),
      (_ = !!_ && Array.isArray(_) && _.length >= _))
    : (_ = _ === _);
  let _ = _ || (_ && !_);
  return (0, _.jsxs)(_.Item, {
    label: _,
    onSelect: () => _(_),
    selected: _,
    disabled: _,
    ..._,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          gap: "2",
          align: "center",
          children: [
            (0, _.jsx)(_, {
              checked: _,
              variant: "dark",
            }),
            _,
          ],
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { children: _, render: _ } = _,
    {
      bOpen: _,
      setOpen: _,
      selectedValue: _,
      variant: _,
      size: _,
      radius: _,
      rgOptions: _,
      multiselect: _,
      onClear: _,
      focusedValue: _,
      onFocusChange: _,
      onSelectionChange: _,
      clearable: _,
      focusedIndex: _,
      onItemSelectionChange: _,
      onFocusedIndexChange: _,
      refPopover: _,
      placeholder: _,
      maxSelected: _,
      ..._
    } = _("<SelectTrigger>"),
    _ = {
      tabIndex: 0,
      role: "combobox",
      onClick: () => _(!_),
      children: _,
    },
    _ = _ ? Array.isArray(_) && _.length > 0 : !!_,
    _ = (0, _.jsx)(_, {
      afterContent:
        _ && _
          ? (0, _.jsx)(_, {
              onClick: _,
              cursor: "pointer",
              hitSlop: !0,
            })
          : (0, _.jsx)(_, {}),
      variant: _,
      size: _,
      radius: _,
      hasValue: _,
      tabIndex: 0,
      cursor: "pointer",
      ..._,
    }),
    _ = _(_, _, _, void 0);
  return (0, _.jsx)(_.Anchor, {
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    weight: "medium",
    truncate: !0,
    contrast: "title",
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: "description",
    truncate: !0,
    children: _.children,
  });
}
function _(_) {
  return _(_, !1);
}
function _(_, _) {
  let { onSelectionChange: _, selectedValue: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(
      (_) => {
        _(_), _ || _(!1);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_ ? [] : null), _.stopPropagation(), _.preventDefault();
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        if (!_) _(_);
        else {
          let _ = _,
            _ = _.indexOf(_);
          if (_ === -1) _(_.concat(_));
          else return _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      [_, _, _],
    );
  return {
    onSelectionChange: _,
    onItemSelectionChange: _,
    onClear: _,
    bOpen: _,
    setOpen: _,
    multiselect: _,
    selectedValue: _,
    ..._,
  };
}
var _ = {
  Root: _,
  Option: _,
  Options: _,
  Trigger: _,
  Value: _,
  Placeholder: _,
};
function _(_) {
  return typeof _ == "string"
    ? _
    : typeof _ == "number"
      ? _.toString()
      : (console.error(
          "Could not use default option labeler on Select option value. Custom labeler requried",
          _,
        ),
        "");
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
    }),
    _ = _ != null,
    _ = _ ? _(_) : "";
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _);
function _(_) {
  return _(_, !0);
}
var _ = _;
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      maxSelected: _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
      maxSelected: _,
    }),
    _ = Array.isArray(_) && _.length > 0,
    _ = "";
  if (_) {
    let _ = _.map((_) => _(_));
    "ListFormat" in Intl
      ? (_ = new Intl.ListFormat(_().strISOCode).format(_))
      : (_ = _.join(", "));
  }
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _ || console.error(`${_} must be used within a <Select>!`), _;
}
var _ = _(_(), 1);
var _ = "bKfeCtgC7vw-";
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let {
      accentColor: _,
      dullColor: _,
      bodyTextColor: _,
      children: _,
      breakpoints: _,
    } = _,
    _ = {
      display: "contents",
    },
    _;
  typeof _ == "string" ? (_ = _) : _ && _(_, "accent", _);
  let _;
  typeof _ == "string" ? (_ = _) : _ && _(_, "dull", _);
  let _;
  typeof _ == "string" ? (_ = _) : _ && _(_, _);
  let _ = (0, _.jsx)("div", {
    "data-accent-color": _,
    "data-dull-color": _,
    "data-body-text-color": _,
    style: _,
    children: (0, _.jsx)("div", {
      style: {
        display: "contents",
        color: "var(--color-text-body-body)",
      },
      children: _,
    }),
  });
  return _
    ? (0, _.jsx)(_, {
        breakpoints: _,
        children: _,
      })
    : _;
}
function _(_, _, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-${_}-${_}`] = _;
}
function _(_, _) {
  for (let [_, _] of Object.entries(_)) _[`--color-text-body-${_}`] = _;
}
var _ = _(_(), 1),
  _ = _.default.memo(function (_) {
    let {
        defaultTextSize: _,
        accentColor: _ = "blue",
        dullColor: _ = "greyneutral",
        bodyTextColor: _ = "text-light",
        breakpoints: _,
        children: _,
        zoo: _,
      } = _,
      _;
    return (
      _ &&
        (_ = {
          "--default-font-size": `var(--text-size-${_})`,
          "--default-line-height": `var(--line-height-${_})`,
          "--default-letter-spacing": `var(--letter-spacing-${_})`,
        }),
      (0, _.jsx)(_, {
        children: (0, _.jsx)(_, {
          breakpoints: _,
          children: (0, _.jsx)(_, {
            children: (0, _.jsx)("div", {
              className: (0, _.default)(_, "noOpinionatedGlobalStyles"),
              style: _,
              children: (0, _.jsxs)(_, {
                accentColor: _,
                dullColor: _,
                bodyTextColor: _,
                children: [_, !1],
              }),
            }),
          }),
        }),
      })
    );
  });
function _(_) {
  let { children: _ } = _,
    { formFactorOverride: _ } = _();
  return (0, _.jsx)(_, {
    formFactor: _,
    children: _,
  });
}
var _ = "yUMMNEb00QQ-";
var _ = "_5CcRUbFwtyM-";
var _ = _(_(), 1);
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsx)(_, {
    className: _,
    ..._,
    children: (0, _.jsx)("div", {
      className: _,
      children: _.children,
    }),
  });
}
var _ = {};
_(_, {
  Heading: () => _,
  "HeadingSize-1": () => _,
  "HeadingSize-2": () => _,
  "HeadingSize-3": () => _,
  "HeadingSize-4": () => _,
  "HeadingSize-5": () => _,
  "HeadingSize-6": () => _,
  "HeadingSize-7": () => _,
  "HeadingSize-8": () => _,
  "HeadingSize-9": () => _,
  default: () => _,
});
var _ = "YSx27r8UVdU-";
var _ = "_7Ek-aKJIN8w-";
var _ = "SRBiKn09hiM-";
var _ = "Yjqebr8Xl-I-";
var _ = "Qk5gUMBPRbw-";
var _ = "_6txkg--ndn0-";
var _ = "jTZ-n4nnJGM-";
var _ = "ggtnOIsDA3I-";
var _ = "nuq2Wi-uWdM-";
var _ = "PlYOLTK4lfE-";
var _ = {
  Heading: "YSx27r8UVdU-",
  "HeadingSize-1": "_7Ek-aKJIN8w-",
  "HeadingSize-2": "SRBiKn09hiM-",
  "HeadingSize-3": "Yjqebr8Xl-I-",
  "HeadingSize-4": "Qk5gUMBPRbw-",
  "HeadingSize-5": "_6txkg--ndn0-",
  "HeadingSize-6": "jTZ-n4nnJGM-",
  "HeadingSize-7": "ggtnOIsDA3I-",
  "HeadingSize-8": "nuq2Wi-uWdM-",
  "HeadingSize-9": "PlYOLTK4lfE-",
};
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_) {
  let { depth: _ } = (0, _.useContext)(_);
  return (0, _.jsx)(_.Provider, {
    value: {
      depth: _ + 1,
    },
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
var _ = _.default.createContext({
  depth: 0,
});
function _() {
  return (0, _.useContext)(_).depth;
}
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let { level: _ = "auto", className: _, color: _ } = _,
    _ = _(),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._(
      {
        ..._,
        className: (0, _.default)(_(), _, _),
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  ..._,
  {
    prop: "size",
    responsive: !0,
    className: (_) => _[`HeadingSize-${_}`],
  },
];
function _(_, _) {
  if (_ === "auto" && _ === 0) return "h1";
  let _ = _ === "auto" ? _.toString() : _;
  return /^[1-6]$/.test(_)
    ? "h" + _
    : _ === "auto"
      ? (console.error('<Section> nesting has exceeded "h6" for headings.'),
        "h6")
      : (console.error(`Attempt to render invalid heading level, "${_}".`),
        "h1");
}
var _ = _(_(), 1),
  _ = _(_(), 1);
var _ = "ZDCM41VT-K8-";
function _() {
  return _;
}
var _ = _(_(), 1);
function _(_) {
  let { extracted: _, remaining: _ } = _(_),
    {
      value: _,
      onTextChange: _,
      onTextClear: _,
      clearable: _,
      onChange: _,
      radius: _,
      variant: _,
      size: _,
      beforeContent: _,
      afterContent: _,
      inputRef: _,
      ref: _,
      disabled: _,
      gamepadFocusable: _ = !0,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = {
      ..._,
      variant: _,
      size: _,
      radius: _,
      beforeContent: _,
      afterContent:
        _ && _
          ? (0, _.jsx)(_, {
              onClick: () => {
                _(""), _ && _();
              },
              cursor: "pointer",
              hitSlop: !0,
            })
          : _,
      ref: _,
      disabled: _,
    },
    _ = (0, _.useRef)(null),
    _ = (_) => {
      _.current && _.target !== _.current && _.current.focus();
    },
    _ = _ && _.IN_GAMEPADUI ? _ : "input";
  return (0, _.jsx)(_, {
    cursor: "text",
    ..._,
    onClick: _,
    children: (0, _.jsx)(_, {
      ref: _(_, _),
      type: "text",
      "aria-disabled": _,
      readOnly: _,
      className: (0, _.default)(_(), _()),
      value: _ || "",
      onChange: _,
      ..._,
    }),
  });
}
var _ = _(_(), 1);
var _ = "_2I7QbE12pvc-";
var _ = "t-Dp22MdUb4-";
var _ = _(_(), 1);
function _(_) {
  let { value: _, onValueChange: _, options: _, getOptionLabel: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    value: _,
    onValueChange: _,
    ..._,
    children: _.map((_) => {
      let _ = _ ? _(_) : _;
      return (0, _.jsx)(
        _.Option,
        {
          value: _,
          children: _,
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { value: _, onValueChange: _, render: _, ..._ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)((_, _) => {
      if (!_.current) return;
      let _ = [..._.current.querySelectorAll("[data-radio-id]")];
      if (_.length !== 0)
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (!_.dataset.radioId) continue;
          if (_.dataset.radioId === _) {
            let _ = (_ + _ + _.length) % _.length,
              _ = _[_];
            _.click(), _.focus();
          }
        }
    }, []),
    _ = (0, _.useCallback)((_) => _(_, 1), [_]),
    _ = (0, _.useCallback)((_) => _(_, -1), [_]),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        onSelectNext: _,
        onSelectPrev: _,
      }),
      [_, _, _, _],
    ),
    _ = {
      role: "radiogroup",
      ref: _,
      ..._,
    },
    _ = (0, _.jsx)(_, {
      direction: "column",
      gap: "2",
      role: "radiogroup",
      ..._,
    }),
    _ = _(_, _, _);
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { value: _, ref: _, children: _, render: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useId)();
  if (!_)
    return (
      console.error(
        "<RadioGroup.Option> must be rendered within a <RadioGroup.Root>",
      ),
      null
    );
  let { value: _, onValueChange: _, onSelectNext: _, onSelectPrev: _ } = _,
    _ = _ === _,
    _ = () => {
      _ || _(_);
    };
  return _(
    _,
    (0, _.jsx)(_, {}),
    {
      role: "radio",
      "aria-checked": _,
      "data-radio-id": _,
      onClick: _,
      onKeyDown: (_) => {
        switch (_.key) {
          case " ": {
            _(), _.preventDefault(), _.stopPropagation();
            break;
          }
          case "ArrowRight":
          case "ArrowDown": {
            _(_), _.preventDefault(), _.stopPropagation();
            break;
          }
          case "ArrowLeft":
          case "ArrowUp": {
            _(_), _.preventDefault(), _.stopPropagation();
            break;
          }
        }
      },
      tabIndex: _ ? 0 : -1,
      ref: _,
      children: _,
    },
    {
      bSelected: _,
    },
  );
}
function _(_) {
  let { children: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: "default",
    gap: "2",
    className: _,
    ..._,
    children: [
      (0, _.jsx)("div", {
        className: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
    Root: _,
    Option: _,
  }),
  _ = (0, _.createContext)(null);
var _ = _(_(), 1),
  _ = _(_(), 1);
function _(_) {
  let {
      rows: _ = 3,
      resize: _ = "none",
      ref: _,
      value: _,
      onTextChange: _,
      onChange: _,
      disabled: _,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = _({
      ..._,
      className: (0, _.default)(_(), _()),
      style: {
        resize: _,
      },
      cursor: "text",
      disabled: _,
    });
  return (0, _.jsx)("textarea", {
    ref: _,
    ..._,
    value: _ || "",
    onChange: _,
    rows: _,
    readOnly: _,
    "aria-disabled": _,
  });
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
