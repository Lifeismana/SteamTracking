var _ = _(_(), 1);
async function _(_, _) {
  let _ = _.Init(_);
  _.Body().set_context(_(!1)), _.forEach((_) => _.Body().add_packageid(_));
  let _ = await _.GetHardwareItems(_, _);
  return _.BSuccess()
    ? _.Body()
        .details()
        .map((_) => _.toObject())
    : (console.error(`GetHardareDetails failed on packages: ${_.join(`,`)}`),
      null);
}
function _(_) {
  return _(_(_(_()), _));
}
var _ = (function (_) {
  return (
    (_[(_.k_Loading = 0)] = `k_Loading`),
    (_[(_.k_LoadSuccess = 1)] = `k_LoadSuccess`),
    (_[(_.k_LoadFailure = 2)] = `k_LoadFailure`),
    _
  );
})({});
function _(_) {
  let _ = _(_()),
    _ = _({
      queries: _.map((_) => ({
        ..._(_, _),
        enabled: _.length > 0,
      })),
    }),
    _ = _.some((_) => _.isLoading),
    _ = _.some((_) => _.isError || _.data === null),
    _,
    _ = 0;
  return (
    _
      ? ((_ = null), (_ = 2))
      : _
        ? ((_ = void 0), (_ = 0))
        : ((_ = _.map((_) => _.data)), (_ = 1)),
    {
      rgHardwareDetails: _,
      eHardwareLoadingState: _,
    }
  );
}
function _(_, _) {
  return {
    queryKey: _(_),
    queryFn: async () => _.load(_),
    enabled: !!_,
  };
}
function _(_) {
  return [`hardwaredetail`, _];
}
function _(_) {
  return _(`HardwareDetailLoader`, () => _(_));
}
function _(_) {
  return new _.default(async (_) => {
    let _ = await _(_, _),
      _ = new Map();
    return (
      _ &&
        _.forEach((_) => {
          _.packageid && _.set(_.packageid, _);
        }),
      _.map((_) => _.get(_) || null)
    );
  });
}
export { _, _, _, _ };
