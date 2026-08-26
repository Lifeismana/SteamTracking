function _(_) {
  return _
    ? DOMParser
      ? new DOMParser().parseFromString(_, `text/html`).documentElement
          .textContent
      : _
    : ``;
}
function _(_, _ = ``) {
  return _.replace(/\bhttps?:\/\/\S+/gi, _);
}
function _(_, _, _ = !0) {
  let _ = _.trim();
  if (((_ = _.replace(_ ? /\s+/g : /[ \t]+/g, ` `)), _.length > _)) {
    _ = _.substring(0, _);
    let _ = _.replace(/^(.*([.!?])) .*$/, `$1`),
      _ = _.length;
    (_ < _ * 0.6 || _ == _) && (_ = _.replace(/ [^ ]*$/, `...`)),
      (_ = _ ? _.replace(/(\r\n|\n|\r)/gm, ``) : _);
  }
  return _;
}
function _(_) {
  return atob(_.replace(/-/g, `+`).replace(/_/g, `/`));
}
export { _, _, _, _ };
