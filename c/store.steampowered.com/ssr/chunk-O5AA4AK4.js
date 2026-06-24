var _ = class _ {
  m_ulSteamID;
  constructor(_ = 0, _, _, _) {
    _ instanceof _
      ? (this.m_ulSteamID = _.m_ulSteamID)
      : typeof _ == "string"
        ? (this.m_ulSteamID = _.fromString(_, !0))
        : _ && _ && _ !== void 0
          ? this.SetFromComponents(_ ?? 0, _, _, _)
          : _
            ? (this.m_ulSteamID = _.fromNumber(_, !0))
            : (this.m_ulSteamID = _.UZERO);
  }
  static InitFromAccountID(_) {
    return new _(Number(_), _.EUNIVERSE, _, _);
  }
  static InitFromClanID(_) {
    return new _(Number(_), _.EUNIVERSE, _, 0);
  }
  GetAccountID() {
    return this.m_ulSteamID.getLowBitsUnsigned();
  }
  GetInstance() {
    return this.m_ulSteamID.getHighBitsUnsigned() & 1048575;
  }
  GetAccountType() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
  }
  GetUniverse() {
    return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
  }
  ConvertTo64BitString() {
    return this.m_ulSteamID.toString();
  }
  Render() {
    switch (this.GetAccountType()) {
      case _:
        return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case _:
        return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case _:
        return (
          "[A:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case _:
        return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case _:
        return (
          "[M:" +
          this.GetUniverse() +
          ":" +
          this.GetAccountID() +
          ":" +
          this.GetInstance() +
          "]"
        );
      case _:
        return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      case _:
        return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
      default:
        return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
    }
  }
  static InitFromString(_) {
    let _ = new _();
    try {
      let [_, _, _, _, _] =
          _.match(/\[([I|g|A|G|M|P|C|U]):(\d+):(\d+):?(\d+)?\]/) || [],
        _ = Number(_),
        _ = Number(_),
        _ = _ ? Number(_) : 1;
      switch (_) {
        case "I":
          _.SetFromComponents(_, _, _, _);
        case "g":
          _.SetFromComponents(_, 0, _, _);
        case "A":
          _.SetFromComponents(_, _, _, _);
        case "G":
          _.SetFromComponents(_, _, _, _);
        case "M":
          _.SetFromComponents(_, _, _, _);
        case "P":
          _.SetFromComponents(_, _, _, _);
        case "C":
          _.SetFromComponents(_, _, _, _);
        case "U":
          _.SetFromComponents(_, _, _, _);
      }
    } catch {}
    return _;
  }
  BIsValid() {
    let _ = this.GetAccountType();
    if (_ <= _ || _ >= _) return !1;
    let _ = this.GetUniverse();
    if (_ <= _ || _ >= _) return !1;
    if (_ == _) {
      if (this.GetAccountID() == 0 || this.GetInstance() > _) return !1;
    } else if (_ == _) {
      if (this.GetAccountID() == 0 || this.GetInstance() != 0) return !1;
    } else if (_ == _ && this.GetAccountID() == 0) return !1;
    return !0;
  }
  BIsIndividualAccount() {
    return this.GetAccountType() == _;
  }
  BIsClanAccount() {
    return this.GetAccountType() == _;
  }
  SetAccountID(_) {
    this.m_ulSteamID = new _(_, this.m_ulSteamID.getHighBitsUnsigned(), !0);
  }
  SetInstance(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      _,
      this.GetAccountType(),
      this.GetUniverse(),
    );
  }
  SetAccountType(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      _,
      this.GetUniverse(),
    );
  }
  SetUniverse(_) {
    this.SetFromComponents(
      this.GetAccountID(),
      this.GetInstance(),
      this.GetAccountType(),
      _,
    );
  }
  SetFromComponents(_, _, _, _) {
    let _ = ((_ & 255) << 24) + ((_ & 15) << 20) + (_ & 1048575),
      _ = _ & 4294967295;
    this.m_ulSteamID = new _(_, _, !0);
  }
};
export { _ };
