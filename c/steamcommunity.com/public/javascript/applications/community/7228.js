(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [7228],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.module(module_exports),
          __webpack_require__.module(module_exports, {
            default: () => _,
          });
        var module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__("chunkid"),
          module = __webpack_require__.module(_),
          module = __webpack_require__("chunkid");
        function _(_) {
          const {
              rgPackageTuples: _,
              rgHardwareDetails: _,
              selectedProduct: _,
            } = _,
            [_, _, _, _, _] = (0, _._)(() => [
              _ == null ? void 0 : _.some((_) => _.collection_time_active),
              _ == null
                ? void 0
                : _.some(
                    (_) =>
                      _.collection_time_active &&
                      _.collection_time_active < _._.NOW,
                  ),
              _.length,
              _ == null ? void 0 : _.find((_) => (0, _._)(_.reservation_state)),
              _ == null
                ? void 0
                : _.find(
                    (_) =>
                      !!_.packageid &&
                      _.packageid ===
                        (_ == null ? void 0 : _.reservation_package),
                  ),
            ]),
            _ = (0, _._)(_ == null ? void 0 : _.packageid),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _ && (0, _._)(_.reservation_state);
          if (_) {
            if (_ && _)
              return (0, _.jsx)("div", {
                className: _().Message,
                children: _._.Localize("#Reservation_InPool"),
              });
            if (!_)
              return (0, _.jsx)("div", {
                className: _().Message,
                children: _
                  ? _._.Localize("#Reservation_InPool_NoDate", _)
                  : _._.Localize("#Reserationn_NoListJoined", _),
              });
          }
          const _ = (0, _._)(_, _),
            _ = _ == null ? void 0 : _.name;
          if (_) {
            if (_ && _)
              return (0, _.jsx)("div", {
                className: _().Message,
                children: _._.Localize(
                  "#Reservation_In_Waitlist_WithName_NoDate",
                  _,
                ),
              });
            if (!_)
              return (0, _.jsx)("div", {
                className: _().Message,
                children: _._.Localize("#Reservation_Pool_Closed"),
              });
          }
          return _ && _
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
      chunkid: (module) => {
        module.exports = {
          Message: "_3HjyI3Ki1r4_VdBwvJgaQb",
        };
      },
    },
  ]);
})();
