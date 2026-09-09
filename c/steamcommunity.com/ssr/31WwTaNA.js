var _ = class extends Error {
    eResult;
    constructor(_, _) {
      super(_ ? `EResult ${_}: ${_}` : `EResult ${_}`), (this.eResult = _);
    }
  },
  _ = class extends Error {
    action;
    status;
    constructor(_, _) {
      super(`Action ${_} return HTTP ${_}`),
        (this.action = _),
        (this.status = _);
    }
  };
export { _, _ };
