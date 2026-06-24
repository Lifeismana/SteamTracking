(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2987],
  {
    chunkid: (module) => {
      module.exports = {
        Message: "_3HjyI3Ki1r4_VdBwvJgaQb",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            rgPackageTuples: _,
            rgHardwareDetails: _,
            selectedProduct: _,
          } = _,
          [_, _, _, _] = (0, _._)(() => [
            null == _
              ? void 0
              : __webpack_require__.some((_) => _.collection_time_active),
            null == _
              ? void 0
              : __webpack_require__.some(
                  (_) =>
                    _.collection_time_active &&
                    _.collection_time_active < _._.NOW,
                ),
            _.length,
            null == _
              ? void 0
              : __webpack_require__.find((_) => (0, _._)(_.reservation_state)),
          ]),
          _ = (0, _._)(null == _ ? void 0 : _.packageid),
          { data: _ } = (0, _._)(_);
        if (!_) return null;
        if (_)
          return _
            ? (0, _.jsx)("div", {
                className: _().Message,
                children: _
                  ? _._.Localize("#Reservation_InPool_NoDate")
                  : _._.Localize("#Reservation_Pool_Closed"),
              })
            : (0, _.jsx)("div", {
                className: _().Message,
                children: _
                  ? _._.Localize("#Reservation_InPool_NoDate", _)
                  : _._.Localize("#Reserationn_NoListJoined", _),
              });
        const _ = _ && (0, _._)(_.reservation_state),
          _ =
            (_ && (null == _ ? void 0 : _.position_is_waitlist)) ||
            (!_ && (null == _ ? void 0 : _.position_is_waitlist)),
          _ = null == _ ? void 0 : _.name;
        return _ && _ && _
          ? (0, _.jsx)("div", {
              className: _().Message,
              children: _._.Localize(
                "#Reservation_In_Waitlist_WithName_NoDate",
                _,
              ),
            })
          : _ && _
            ? (0, _.jsx)("div", {
                className: _().Message,
                children: _._.Localize(
                  "#Reservation_OnRegularReserveForModel",
                  _,
                ),
              })
            : null;
      }
    },
  },
]);
