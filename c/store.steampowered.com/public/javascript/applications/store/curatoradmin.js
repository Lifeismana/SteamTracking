import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _, _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _ } from "./main.js?contenthash=BznMolNX";
import { _, _ } from "./managerss.js?contenthash=D-WAZvOB";
var _ = _(_()),
  _ = _(),
  _ = class extends _.Component {
    state = {
      bIsLoading: !0,
    };
    componentDidMount() {
      _.Get(),
        this.setState({
          bIsLoading: !1,
        });
    }
    render() {
      return this.state.bIsLoading
        ? null
        : (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              children: [
                (0, _.jsx)(_, {
                  exact: !0,
                  path: `/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss`,
                  component: _,
                }),
                (0, _.jsx)(_, {
                  children: !1,
                }),
              ],
            }),
          });
    }
  };
export { _ as default };
