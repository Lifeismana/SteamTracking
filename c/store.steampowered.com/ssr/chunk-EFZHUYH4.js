function _(_ = _.k_EStoreDiscoveryQueueTypeNew, _ = void 0) {
  let _ = _();
  return _(_(_, _, !1, _));
}
function _(_, _, _ = !1, _ = void 0) {
  return {
    queryKey: ["DiscoveryQueue", _, _],
    queryFn: () => _(_, _, _, _),
    enabled: _.logged_in,
  };
}
async function _(_, _, _ = !1, _ = void 0) {
  let _ = _.Init(_);
  _.Body().set_queue_type(_),
    _.Body().set_country_code(_.COUNTRY),
    _.Body().set_rebuild_queue(_),
    _.Body().set_rebuild_queue_if_stale(!0),
    (_?.nSaleTagID || _?.strContentHubType || _?.nCreatorClanAccountId) &&
      _.Body().set_store_page_filter(_(_, !0));
  let _ = await _.GetDiscoveryQueue(_, _);
  if (!_.BSuccess())
    throw `Error loading discovery queue: ${_.GetErrorMessage()}`;
  return _.Body().toObject();
}
function _(_, _) {
  if (
    _ &&
    (_?.strContentHubType == "newreleases" ||
      _?.strContentHubType == "upcoming")
  )
    return;
  let _ = _?.nSaleTagID,
    _ = _?.strContentHubType,
    _ = _?.strContentHubCategory,
    _ = _?.nContentHubTagID,
    _ = _?.bDiscountsOnly,
    _ = _?.bPrioritizeDiscounts,
    _ = _?.strOptInName,
    _ = _?.nOptInTagID,
    _ = _?.nPruneTagID,
    _ = _?.bOptInOnly,
    _ = _?.nCreatorClanAccountId,
    _ = new _();
  if (_ || _) {
    let _ = new _();
    _.set_sale_tagid(_), _.set_creator_clan_account_id(_), _.set_sale_filter(_);
  } else if (_) {
    let _ = new _();
    if (
      (_.set_hub_type(_),
      _ === "category"
        ? _.set_hub_category(_)
        : _ === "tags" && _.set_hub_tagid(_),
      _
        ? _.set_discount_filter(_.k_EContentHubDiscountFilterType_DiscountsOnly)
        : _ &&
          _.set_discount_filter(
            _.k_EContentHubDiscountFilterType_PrioritizeDiscounts,
          ),
      _)
    ) {
      let _ = new _();
      _.set_name(_),
        _.set_optin_tagid(_),
        _.set_prune_tagid(_),
        _.set_optin_only(_),
        _.set_optin(_);
    }
    _.set_content_hub_filter(_);
  }
  return _;
}
var _ = _(_());
var _ = _.createContext({
  showDiscoveryQueue: (_) =>
    (window.location.href = `${_.STORE_BASE_URL}explore/next/${_}`),
  hideDiscoveryQueue: () => {},
  bQueueVisible: !1,
});
function _(_, _) {
  let { showDiscoveryQueue: _, ..._ } = _.useContext(_),
    _ = _.useCallback(() => _(_, _), [_, _, _]);
  return {
    ..._,
    showDiscoveryQueue: _,
  };
}
export { _, _, _, _ };
