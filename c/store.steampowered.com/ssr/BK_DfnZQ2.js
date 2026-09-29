function _(_) {
  return () => (
    (_ = (_ * 1664525 + 1013904223) % 4294967296), (_ >>> 0) / 4294967296
  );
}
function _() {
  return Math.floor(Math.random() * 4294967296);
}
function _() {
  let _ = _(),
    { storeBrowseContext: _ } = _({
      include_assets: !0,
    });
  return _({
    ..._(_, _),
    select: (_) => _.total_items_on_sale,
  });
}
async function _(_, _, _, _, _) {
  let _ = _.Init(_);
  _.Body().set_steamid(_.steamid),
    _(_, _),
    _ !== void 0 && _.Body().set_sort_order(_),
    _ && (_(_, _.data_request), _.Body().set_page_size(_.item_count)),
    _.Body().filters(!0).set_min_discount_percent(_);
  let _ = await _.GetWishlistSortedFiltered(_, _);
  if (!_.BSuccess())
    throw `Error from WishlistService.GetWishlistSortedFiltered: ${_.GetErrorMessage()}`;
  return (
    _ &&
      _.Body()
        .items()
        .forEach((_) => {
          let _ = _.store_item(!1);
          _ && _.cacheStoreItemData(_, _.data_request);
        }),
    _.Body().items()
  );
}
async function _(_, _, _) {
  let _ = await _(_, _, 10, _ ? 5 : void 0, _);
  return {
    appids: _ ? _.slice(0, _.item_count).map((_) => _.appid()) : [],
    total_items_on_sale: _.length,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`AccountWishlistAppsOnSale`, _ ?? 0, _.country],
    queryFn: async () =>
      _
        ? (await _(_, _, 1, 0))
            .map((_) => _.appid())
            .filter((_) => _ !== void 0)
        : [],
    staleTime: 600 * 1e3,
  };
}
function _(_, _, _) {
  return {
    queryKey: [`GetWishlistItemsOnSale`],
    queryFn: () => _(_, _, _),
    staleTime: 900 * 1e3,
    enabled: _.logged_in,
  };
}
export { _, _, _, _ };
