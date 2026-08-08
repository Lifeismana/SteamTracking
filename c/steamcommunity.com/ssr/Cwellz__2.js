var _ = _(_(), 1),
  _ = `K0V2SQSqdng-`,
  _ = _();
function _(_) {
  return (0, _.jsx)(`span`, {
    className: _,
    children: _.children,
  });
}
var _ = `lyWzllKSmIk-`,
  _ = `UaL62AQUKkY-`,
  _ = `jpTV7MUPh78-`,
  _ = {
    table: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
    _: {
      Constructor: _,
      autocloses: !1,
      skipInternalNewline: !0,
      skipFollowingNewline: !0,
    },
  };
function _(_) {
  let _ = _(_.args, `noborder`),
    _ = _(_.args, `equalcells`),
    _ = _(_.args, `colwidth`);
  return (0, _.jsxs)(`table`, {
    className: _(_, `BB_Table`, _ && `_5W82LoeXbQY-`, _ && `kzYJe9usRrQ-`),
    children: [
      _ &&
        (0, _.jsx)(`colgroup`, {
          children: _.split(`,`).map((_, _) =>
            (0, _.jsx)(
              _,
              {
                width: _,
              },
              _,
            ),
          ),
        }),
      (0, _.jsx)(`tbody`, {
        children: _.children,
      }),
    ],
  });
}
function _(_) {
  let { width: _ } = _,
    _;
  return (
    _ &&
      parseInt(_) > 0 &&
      (_ = {
        width: `${_}px`,
      }),
    (0, _.jsx)(`col`, {
      style: _,
    })
  );
}
function _(_) {
  return (0, _.jsx)(`tr`, {
    className: _(_, `BB_TableRow`),
    children: _.children,
  });
}
function _(_, _) {
  let _ = _(_.args, `width`),
    _ =
      _?.length == 0
        ? void 0
        : {
            width: _,
          },
    _ = _(_.args, `colspan`),
    _ = _(_.args, `rowspan`),
    _ = {};
  return (
    _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
    _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
    (0, _.jsx)(_, {
      className: _(_, _ == `td` && `BB_TableData`),
      ..._,
      style: _,
      children: _.children,
    })
  );
}
function _(_) {
  return _(`th`, _);
}
function _(_) {
  return _(`td`, _);
}
var _ = `SPnl2bpY6rA-`;
function _(_) {
  let _ = _(_.args) ?? _?.children?.toString();
  return _
    ? (0, _.jsx)(_, {
        className: _,
        src: _,
        alt: _,
      })
    : null;
}
function _(_) {
  return null;
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = (_) => new _(new _());
    return new _(
      {
        ..._,
        ..._,
        ..._,
        ..._,
        img: {
          Constructor: _.include_images ? _ : _,
          autocloses: !0,
        },
        url: {
          Constructor: _,
        },
        spoiler: {
          Constructor: _,
        },
      },
      _,
      _.LANGUAGE,
    );
  }, [_]);
}
function _(_) {
  return (0, _.useMemo)(() => {
    let _ = (_) => new _(new _());
    return new _(
      {
        ..._,
        ..._,
        ..._,
        url: {
          Constructor: _,
        },
      },
      _,
      _.LANGUAGE,
    );
  }, []);
}
export { _, _ };
