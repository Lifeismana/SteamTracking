import { _, _ } from "./mobx.esm.js?contenthash=CQiZDS-T";
import { _, _ } from "./promotionoperationowner.js?contenthash=DRb6m5ZI";
import { _, _ } from "./react-router.js?contenthash=C8paMHEZ";
import { _, _ } from "./react-router-dom.js?contenthash=C5N9ARHv";
import { _ } from "./unknownroute.js?contenthash=CtgV9GMi";
_();
var _ = _(),
  _ = {
    NextFestRecapListPartner: (_) => `/nextfest/${_}`,
    NextFestRecapList: () => `/nextfest`,
    NextFestRecap: (_, _) => `/nextfest/${_}/${_}`,
  };
function _(_) {
  return (0, _.jsx)(_, {
    basename: _() + `recap/`,
    children: (0, _.jsxs)(_, {
      children: [
        (0, _.jsx)(_, {
          path: _.NextFestRecap(`:postfix`, `:partnerid(\\d+)`),
          render: (_) =>
            (0, _.jsx)(_, {
              pagePostFix: _.match.params.postfix,
              nPartnerID: Number.parseInt(_.match.params.partnerid),
            }),
        }),
        (0, _.jsx)(_, {
          path: _.NextFestRecapListPartner(`:partnerid(\\d+)`),
          render: (_) =>
            (0, _.jsx)(_, {
              nPartnerID: Number.parseInt(_.match.params.partnerid),
            }),
        }),
        (0, _.jsx)(_, {
          path: _.NextFestRecapList(),
          render: (_) =>
            (0, _.jsx)(_, {
              nPartnerID: void 0,
            }),
        }),
        (0, _.jsx)(_, {
          component: _,
        }),
      ],
    }),
  });
}
export { _ as RecapHubRoutes, _ as default };
