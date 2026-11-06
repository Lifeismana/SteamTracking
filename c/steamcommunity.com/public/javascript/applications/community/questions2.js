import "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _, _, _ } from "./libraries.js?contenthash=BSMOk6Fq";
import { _, _ } from "./main.js?contenthash=DniUHuiT";
import { _, _ } from "./questions.js?contenthash=DZZC0IkC";
_();
var _ = _(),
  _ = {
    Dashboard: (_) => `/questions/${_}/dashboard`,
    FullPageView: (_, _) => `/questions/${_}/view/${_}`,
  };
function _(_) {
  return (0, _.jsxs)(_, {
    children: [
      (0, _.jsx)(_, {
        path: _.Dashboard(`:vanity_str`),
        render: (_) =>
          (0, _.jsx)(_, {
            config: {
              "qanda-root": () => {
                let { vanity_str: _ } = _.match.params;
                return (0, _.jsx)(_, {
                  vanity_str: _,
                });
              },
            },
          }),
      }),
      (0, _.jsx)(_, {
        path: _.FullPageView(`:vanity_str`, `:session_gid`),
        render: (_) =>
          (0, _.jsx)(_, {
            config: {
              "qanda-root": () => {
                let { vanity_str: _, session_gid: _ } = _.match.params;
                return (0, _.jsx)(_, {
                  gidSession: _,
                });
              },
            },
          }),
      }),
      (0, _.jsx)(_, {
        component: _,
      }),
    ],
  });
}
export { _ as QAndARoutes, _ as default };
