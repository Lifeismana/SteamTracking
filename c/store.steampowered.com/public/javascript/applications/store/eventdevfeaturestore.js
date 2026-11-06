import { _ } from "./rolldown-runtime.js?contenthash=C8f2gWku";
import { _ } from "./libraries.js?contenthash=CNC_iAx3";
import "./ajaxhooks.js?contenthash=DzoC2RB5";
import { _ } from "./moment.js?contenthash=Csw2oUrB";
import { _, _, _, _ } from "./eventtime.js?contenthash=CazMM9P8";
import { _ } from "./main.js?contenthash=BznMolNX";
_();
var _ = _(_()),
  _ = new (class {
    bIncludeFeaturedAsGameSource = !0;
    get nOverrideDateNow() {
      return _();
    }
    set nOverrideDateNow(_) {
      _(_);
    }
    get bRequireAllEventsLoadedInTimeBlock() {
      return !1;
    }
    get bIncludeCurators() {
      return !0;
    }
    GetTimeNowWithOverride() {
      return _();
    }
    GetTimeNowWithOverrideAsDate() {
      return _();
    }
    BHasTimeOverride() {
      return !!_();
    }
    ParseDevOverrides(_) {
      _ &&
        _.length != 0 &&
        new URLSearchParams(_[0] == `?` ? _.substring(1) : _).has(`t`);
    }
  })();
_(`g_EventCalendarDevFeatures`, _);
var _ = Math.floor(new Date().getTime() / 1e3);
function _() {
  return _.nOverrideDateNow ?? _;
}
function _() {
  return _.useMemo(() => _(), []);
}
function _() {
  return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
}
export { _, _, _, _ };
