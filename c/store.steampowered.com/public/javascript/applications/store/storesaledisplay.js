import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _, _ } from "./libraries.js?contenthash=CNC_iAx3";
import { _, _ } from "./salesectionfactory.js?contenthash=2CVoea60";
import { _ } from "./partnerevent.js?contenthash=CvQHnTcq";
import { _ } from "./partnersaledisplay.js?contenthash=DkeEjamz";
import { _, _ } from "./eventinitialization.js?contenthash=wz_nobsH";
import { _ } from "./throbber.js?contenthash=Dip9pbhW";
import { _ } from "./partnereventstore.js?contenthash=CV5m4Ocg";
import { _, _, _, _, _, _, _, _ } from "./main.js?contenthash=BznMolNX";
var _ = _(_()),
  _ = _();
function _(_) {
  let { eventModel: _ } = _;
  return (0, _.jsx)(_, {
    bSalePage: !0,
    children: (0, _.jsx)(_, {
      ..._,
      overrideEventModel: _,
    }),
  });
}
function _(_) {
  let { promotionName: _, language: _, overrideEventModel: _ } = _,
    [_, _] = _.useState(
      _ ?? _.GetClanEventFromAnnouncementGID(_.ANNOUNCEMENT_GID),
    );
  _.useEffect(() => {
    if (!_ && _?.AnnouncementGID != _.ANNOUNCEMENT_GID) {
      let _ = new _(_.CLANSTEAMID);
      _.LoadPartnerEventFromAnnoucementGIDAndClanSteamID(
        _,
        _.ANNOUNCEMENT_GID,
        null,
      ).then(_);
    }
  }, [_, _]);
  let _ = _() ?? _,
    _ = _();
  if ((_(1500), !_))
    return (0, _.jsx)(`div`, {
      className: _,
      style: {
        height: `500px`,
      },
      children: (0, _.jsx)(_, {
        size: `medium`,
        string: _(`#Loading`),
      }),
    });
  let _ =
    (_.visibility_state !== _.k_EEventStateVisible &&
      _.visibility_state !== _.k_EEventStateUnlisted) ||
    _;
  return (0, _.jsx)(_, {
    eventModel: _,
    children: (0, _.jsx)(_, {
      children: (0, _.jsx)(_, {
        curator_clanid: _?.clanSteamID?.GetAccountID(),
        children: (0, _.jsx)(_, {
          promotionName: _,
          language: _,
          eventModel: _,
          bIsPreview: _,
        }),
      }),
    }),
  });
}
function _(_) {
  let { eventModel: _, children: _ } = _,
    _ = _.GetContentHubType() == `adultonly`;
  return (0, _.jsx)(_, {
    eAdultOnlyMediaBehavior: _ ? `allowed` : `masked`,
    children: _,
  });
}
export { _ as default };
