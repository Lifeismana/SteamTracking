function _(_) {
  return _(
    `#Hardware_ShippingEstimate_Range`,
    _.estimated_delivery_soonest_business_days ?? 0,
    _.estimated_delivery_latest_business_days ?? 0,
  );
}
export { _ };
