/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [34004],
    {
      8059: (ye, Ge, _) => {
        "use strict";
        _.d(Ge, {
          FU: () => Oe,
          eF: () => Pe,
          gf: () => P,
          wI: () => E,
          yp: () => N,
        });
        var n = _(14947),
          De = _(41735),
          ge = _.n(De),
          l = _(35038),
          b = _(27066),
          $ = _(72604),
          ke = _(99412),
          M = _(94354),
          Ee = _(3166),
          Ce = _(6740),
          ie = _(71944),
          j = _(64434),
          Q = Object.defineProperty,
          Fe = Object.getOwnPropertyDescriptor,
          ae = (w, L, A, C) => {
            for (
              var B = C > 1 ? void 0 : C ? Fe(L, A) : L, y = w.length - 1, R;
              y >= 0;
              y--
            )
              (R = w[y]) && (B = (C ? R(L, A, B) : R(B)) || B);
            return C && B && Q(L, A, B), B;
          },
          Pe = ((w) => (
            (w[(w.None = 0)] = "None"),
            (w[(w.Generic = 1)] = "Generic"),
            (w[(w.Expired = 2)] = "Expired"),
            (w[(w.Network = 3)] = "Network"),
            (w[(w.MoveAuthenticator = 4)] = "MoveAuthenticator"),
            (w[(w.RateLimitExceeded = 5)] = "RateLimitExceeded"),
            (w[(w.AnonymousLogin = 6)] = "AnonymousLogin"),
            w
          ))(Pe || {});
        function Oe(w) {
          const {
            shared_secret: L,
            identity_secret: A,
            secret_1: C,
            status: B,
            uri: y,
            server_time: R,
            ...te
          } = w;
          return {
            shared_secret: ie.iI(L),
            identity_secret: ie.iI(A),
            secret_1: ie.iI(C),
            ...te,
          };
        }
        var E = ((w) => (
          (w[(w.k_Success = 0)] = "k_Success"),
          (w[(w.k_PrimaryDomainFail = 1)] = "k_PrimaryDomainFail"),
          (w[(w.k_SecondaryDomainFail = 2)] = "k_SecondaryDomainFail"),
          w
        ))(E || {});
        class P {
          m_transport;
          m_strClientID;
          m_msPollInterval;
          m_activeTimerID;
          m_rgRequestID;
          m_strTokenToRevoke;
          m_strChallengeURL = void 0;
          m_onShowAgreement;
          m_bRemoteInteraction = !1;
          m_onCompleteCallback;
          m_eFailureState = 0;
          m_strExtendedErrorMessage = "";
          m_onDeviceDetailsCallback;
          constructor(L, A, C, B) {
            (0, n.Gn)(this),
              (this.m_transport = L),
              (this.m_onCompleteCallback = A),
              (this.m_onDeviceDetailsCallback = C),
              (this.m_onShowAgreement = B);
          }
          StartPolling(L = !0) {
            this.m_activeTimerID != null && this.StopPolling(),
              L
                ? this.PollForUpdate()
                : (this.m_activeTimerID = window.setTimeout(
                    this.PollForUpdate,
                    this.m_msPollInterval,
                  ));
          }
          StopPolling() {
            window.clearTimeout(this.m_activeTimerID),
              (this.m_activeTimerID = void 0);
          }
          async PollForUpdate() {
            try {
              const L = l.w.Init(Ce.Ev);
              L.SetEMsg(M.Kec),
                L.Body().set_client_id(this.m_strClientID),
                L.Body().set_request_id(this.m_rgRequestID),
                this.m_strTokenToRevoke &&
                  L.Body().set_token_to_revoke(this.m_strTokenToRevoke);
              const A = await Ce.kX.PollAuthSessionStatus(this.m_transport, L),
                C = A.GetEResult();
              if (C !== $.R) {
                if (C === $.zi) {
                  const Se = A.Hdr().transport_error();
                  if (
                    ((0, j.ZI)(
                      `Failed to poll auth session. Result ${C}. Transport Error: ${Se}`,
                    ),
                    Se === ke.MhR || Se === ke.VrD)
                  )
                    return (
                      this.m_transport.MakeReady(), this.StartPolling(!1), $.R
                    );
                }
                if (C === $.Qo || C === $.ob) this.m_eFailureState = 2;
                else if (C === $.h_) this.m_eFailureState = 5;
                else if (C == $.oH) {
                  if (this.m_onShowAgreement)
                    this.m_onShowAgreement(A.Body().agreement_session_url());
                  else {
                    const Se = A.Body().agreement_session_url(),
                      Xe = document.location.href;
                    window.location.href = `${Se}&redir=${encodeURIComponent(Xe)}`;
                  }
                  return this.m_onCompleteCallback({ bSuccess: !1 }), C;
                } else
                  (0, j.ZI)(`Failed to poll auth session. Result: ${C}`),
                    (this.m_eFailureState = 1);
                return this.m_onCompleteCallback({ bSuccess: !1 }), C;
              }
              const {
                new_challenge_url: B,
                new_client_id: y,
                refresh_token: R,
                access_token: te,
                account_name: Le,
                had_remote_interaction: fe,
                new_guard_data: Ae,
              } = A.Body().toObject();
              return (
                (this.m_bRemoteInteraction = !!fe),
                R
                  ? (this.m_onCompleteCallback({
                      bSuccess: !0,
                      strRefreshToken: R,
                      strAccessToken: te,
                      strAccountName: Le,
                      strNewGuardData: Ae,
                    }),
                    C)
                  : (B && (this.m_strChallengeURL = B),
                    y && (this.m_strClientID = y),
                    this.StartPolling(!1),
                    C)
              );
            } catch (L) {
              return (
                (0, j.ZI)(`Failed to poll auth session. ${L}`),
                (this.m_eFailureState = 1),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                $.zi
              );
            }
          }
          SetTokenToRevoke(L) {
            this.m_strTokenToRevoke = L;
          }
          GetFailureState() {
            return this.m_eFailureState;
          }
          GetExtendedErrorMessage() {
            return this.m_strExtendedErrorMessage;
          }
          BHadRemoteInteraction() {
            return this.m_bRemoteInteraction;
          }
          async GetDeviceDetails() {
            const L = await this.m_onDeviceDetailsCallback();
            return Ce.tS.fromObject(L);
          }
        }
        ae([n.sH], P.prototype, "m_strChallengeURL", 2),
          ae([n.sH], P.prototype, "m_bRemoteInteraction", 2),
          ae([n.sH], P.prototype, "m_eFailureState", 2),
          ae([n.sH], P.prototype, "m_strExtendedErrorMessage", 2),
          ae([b.o], P.prototype, "PollForUpdate", 1),
          ae([b.o], P.prototype, "SetTokenToRevoke", 1);
        function N(w) {
          const L = new FormData();
          L.append("nonce", w), L.append("sessionid", (0, Ee.KC)());
          let A = new URL(document.location.href);
          const C = new URLSearchParams(A.search);
          C.has("need_password") &&
            (C.delete("need_password"), (A.search = C.toString())),
            L.append("redir", A.toString());
          const B = `${Ee.TS.LOGIN_BASE_URL}jwt/finalizelogin`;
          return ge()
            .post(B, L, { withCredentials: !0 })
            .then(
              (y) => {
                const { data: R } = y;
                if (
                  !R ||
                  !R.transfer_info ||
                  !R.steamID ||
                  !Array.isArray(R.transfer_info)
                )
                  return (
                    (0, j.ZI)(
                      "Result of finalizelogin does not match expectations!",
                    ),
                    1
                  );
                const {
                  transfer_info: te,
                  steamID: Le,
                  primary_domain: fe,
                } = R;
                return Promise.all(
                  te.map(({ url: Ae, params: Se }) =>
                    q(Ae, { ...Se, steamID: Le }),
                  ),
                ).then(
                  (Ae) => W(Ae, fe),
                  () => 2,
                );
              },
              () => (
                (0, j.ZI)("Failed to finalize login. Initial call failed."), 1
              ),
            );
        }
        function W(w, L) {
          let A = 0;
          return (
            w.forEach((C) => {
              C.bSuccess ||
                (L && C.domain.toLowerCase() === L.toLowerCase()
                  ? (A = 1)
                  : A == 0 && (A = 2));
            }),
            A
          );
        }
        async function q(w, L) {
          const A = new URL(w);
          let C = !0;
          try {
            const B = new FormData();
            Object.keys(L).forEach((R) => B.append(R, L[R]));
            const y = await ge().post(w, B, {
              withCredentials: !0,
              timeout: 1e4,
            });
            y.status !== 200
              ? ((0, j.ZI)(
                  `Transfer login to ${A.host} failed with status code: ${y.status}`,
                ),
                (C = !1))
              : y.data.result !== $.R &&
                ((0, j.ZI)(
                  `Transfer login to ${A.host} failed with result: ${y.data.result}`,
                ),
                (C = !1));
          } catch (B) {
            (0, j.ZI)(`Transfer login to ${A.host} failed: "${B}"`), (C = !1);
          }
          return { bSuccess: C, domain: A.host };
        }
      },
      64434: (ye, Ge, _) => {
        "use strict";
        _.d(Ge, {
          Cr: () => j,
          Ok: () => Q,
          P8: () => ae,
          ZC: () => Oe,
          ZI: () => Ee,
          tG: () => $,
          tH: () => M,
        });
        var n = _(41735),
          De = _.n(n),
          ge = _(57589);
        const l = _(80407).A,
          b = new ge.wd("Login"),
          $ = b.Info,
          ke = b.Debug,
          M = b.Warning,
          Ee = b.Error;
        function Ce(E, P) {
          return E.endsWith("/") || (E += "/"), `${E}login/${P}/`;
        }
        function ie() {
          let E = new FormData();
          return E.append("donotcache", new Date().getTime().toString()), E;
        }
        async function j(E) {
          let P = ie(),
            N = Ce(E, "refreshcaptcha"),
            W = "";
          try {
            let q = { "Content-Type": "multipart/form-data" },
              w = await De().post(N, P, { headers: q });
            if (w.status != 200) return !1;
            W = w.data.gid;
          } catch {
            return !1;
          }
          return W;
        }
        function Q(E, P) {
          return Ce(E, "rendercaptcha") + `?gid=${P}`;
        }
        async function Fe(E, P) {
          let N = ie();
          N.append("username", P);
          let W = Ce(E, "getrsakey"),
            q;
          try {
            let w = { "Content-Type": "multipart/form-data" },
              L = await De().post(W, N, { headers: w });
            if (L.status != 200)
              return (
                console.log("GetRSAKey failure: "), console.log(L.status), null
              );
            let A = L.data;
            if (
              !A ||
              !A.success ||
              !A.publickey_mod ||
              !A.publickey_exp ||
              !A.timestamp
            )
              return console.log("GetRSAKey failure: "), console.log(A), null;
            q = A;
          } catch (w) {
            return console.log("GetRSAKey exception: "), console.log(w), null;
          }
          return q;
        }
        function ae(E, P) {
          let N = l.getPublicKey(P.publickey_mod, P.publickey_exp),
            W = l.encrypt(E, N);
          return W === !1 ? null : W;
        }
        async function Pe(E, P, N, W) {
          const q = ae(N.strPassword, W);
          if (!q) return null;
          let w = ie();
          w.append("password", q),
            w.append("username", N.strUserName),
            w.append("twofactorcode", N.strTwoFactorCode || ""),
            w.append("emailauth", N.strEmailAuthCode || ""),
            w.append("loginfriendlyname", ""),
            w.append("captchagid", N.gidCaptcha || ""),
            w.append("captcha_text", N.strCaptchaText || ""),
            w.append("emailsteamid", N.emailSteamID || ""),
            w.append("rsatimestamp", W.timestamp),
            w.append("remember_login", N.bRememberLogin ? "true" : "false");
          let L = {};
          P &&
            (w.append("oauth_client_id", P),
            w.append("mobile_chat_client", "true"));
          let A = Ce(E, "dologin"),
            C;
          try {
            L.headers = { "Content-Type": "multipart/form-data" };
            let B = await De().post(A, w, L);
            if (B.status != 200) return null;
            let y = B.data;
            if (!y) return null;
            y.oauth && (y.oauth = JSON.parse(y.oauth)), (C = y);
          } catch {
            return null;
          }
          return C;
        }
        async function Oe(E, P, N) {
          if (
            ((N = Object.assign({}, N)),
            N.strUserName &&
              (N.strUserName = N.strUserName.replace(/[^\x00-\x7F]/g, "")),
            !N.strPassword ||
              N.strPassword.match(/[^\x00-\x7F]/) ||
              !N.strUserName)
          )
            return null;
          let W = await Fe(E, N.strUserName);
          return W
            ? await Pe(E, P, N, W)
            : (console.error(`Failed to get RSA key from ${E}`), null);
        }
      },
      34004: (ye, Ge, _) => {
        "use strict";
        _.d(Ge, {
          P5: () => it,
          sW: () => rt,
          YN: () => es,
          Fn: () => qt,
          Mk: () => us,
          kt: () => be,
        });
        var n = _(7850),
          De = _(32093),
          ge = _(99412),
          l = _(72604),
          b = _(6740),
          $ = _(41735),
          ke = _.n($),
          M = _(90626),
          Ee = _(92757);
        const Ce =
          _.p +
          "images/applications/store/login_mobile_auth.png?v=valveisgoodatcaching";
        var ie = _(71568),
          j = _(64434),
          Q = _(87883),
          Fe = _(25792),
          ae = _(179),
          Pe = _(24660),
          Oe = _(19298),
          E = _(36707),
          P = _(32224),
          N = _.n(P);
        function W(r) {
          const {
            length: o,
            value: a,
            onChange: u,
            onPaste: g,
            tone: m,
            autoFocus: c,
            disabled: f,
            loading: T,
            backupCode: H,
            allowCharacter: k,
          } = r;
          (0, M.useEffect)(() => {
            c && Y();
          }, []);
          const G = (0, M.useRef)([]),
            z = () => u(G.current.map((x) => x.value)),
            U = (x) => {
              const I = x.target.value;
              if (I && k && !k(I)) return;
              const V = x.target.nextElementSibling;
              x.target.value && V && V.focus(), z();
            },
            he = (x) => {
              G.current.findIndex((I) => !!I.value) === -1
                ? G.current[0]?.select()
                : x.target.select();
            },
            Y = () => {
              const x = G.current.find((I) => !I.value);
              x ? x.focus() : G.current[G.current.length - 1].focus();
            },
            de = (x) => {
              const I = x.target;
              if (x.key === "Backspace" || x.key === "Delete") {
                const V =
                  x.key === "Backspace"
                    ? I.previousElementSibling
                    : I.nextElementSibling;
                I.value === "" &&
                  V &&
                  ((V.value = ""), V.focus(), x.preventDefault(), z());
              } else if (
                x.key === "ArrowLeft" ||
                x.key === "ArrowRight" ||
                x.key === "ArrowUp" ||
                x.key === "ArrowDown"
              ) {
                const V =
                  x.key === "ArrowLeft" || x.key === "ArrowUp"
                    ? I.previousElementSibling
                    : I.nextElementSibling;
                V && (V.focus(), x.preventDefault());
              }
            },
            D = (x) => {
              const I = x.clipboardData.getData("Text");
              let V = x.target,
                Z = 0;
              for (; V && Z < I.length; )
                V.focus(),
                  (V.value = I.charAt(Z)),
                  (V = V.nextElementSibling),
                  Z++;
              z(), x.preventDefault(), g && g();
            },
            X = [];
          for (let x = 0; x < o; x++)
            X.push(
              (0, n.jsx)(
                Pe.BA,
                {
                  noFocusRing: !0,
                  type: "text",
                  maxLength: 1,
                  ref: (I) => {
                    G.current[x] = I;
                  },
                  onChange: U,
                  onFocus: he,
                  onClick: (I) => I.stopPropagation(),
                  onKeyDown: de,
                  onPaste: D,
                  value: a[x] ? a[x][0] : "",
                  autoComplete: "none",
                  autoFocus: x === 0 && c,
                  disabled: f || T,
                  className: N().Input,
                },
                x,
              ),
            );
          return (0, n.jsxs)(Oe.Z, {
            className: (0, E.A)(
              N().SegmentedCharacterInput,
              m === "danger" && N().Danger,
              f && N().Disabled,
              H && N().BackupCode,
            ),
            onClick: Y,
            children: [
              T &&
                (0, n.jsx)("div", {
                  className: N().Loading,
                  children: (0, n.jsx)(be, { size: "small" }),
                }),
              X,
            ],
          });
        }
        var q = _(36118),
          w = _(54212),
          L = _(85599),
          A = _(71421),
          C = _(18210),
          B = _(30096),
          y = _(3166),
          R = _(8059),
          te = _(14947),
          Le = _(94354),
          fe = _(35038),
          Ae = _(65946),
          Se = _(95039),
          Xe = _(3685),
          le = _(44787),
          Et = Object.defineProperty,
          Lt = Object.getOwnPropertyDescriptor,
          se = (r, o, a, u) => {
            for (
              var g = u > 1 ? void 0 : u ? Lt(o, a) : o, m = r.length - 1, c;
              m >= 0;
              m--
            )
              (c = r[m]) && (g = (u ? c(o, a, g) : c(g)) || g);
            return u && g && Et(o, a, g), g;
          };
        const At = 2,
          Me = 0,
          Je = 1,
          ve = 2,
          Ie = 3,
          Be = 4,
          me = 5,
          Ne = 6,
          $e = 7,
          Qe = 8,
          Mt = 9,
          He = 10,
          Ve = 11,
          qe = 12,
          We = 13,
          ut = 14,
          et = 15,
          ht = 16;
        class J extends R.gf {
          m_eStatus = Me;
          m_steamid;
          m_strAccountName;
          m_strConfirmationAssociatedMessage = "";
          m_bUsingCodeOverride = !1;
          m_strWeakAuthToken = "";
          m_weakAuthWebInterface;
          m_onGetMachineAuth;
          m_replacementAuthenticator;
          m_strErrorReference = "";
          m_onLoginComplete;
          constructor(o) {
            super(
              o.transport,
              (a) => this.onAuthComplete(a),
              o.onDeviceDetails,
              o.onShowAgreement,
            ),
              (0, te.Gn)(this),
              (this.m_onLoginComplete = o.onComplete),
              (this.m_onGetMachineAuth = o.onGetMachineAuth);
          }
          async Start(o, a, u) {
            if (this.m_eStatus !== Me && this.m_eStatus !== ve)
              return (
                (0, j.ZI)(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.Ze
              );
            const g = o.replace(/[^\x00-\x7F]/g, ""),
              m = a.replace(/[^\x00-\x7F]/g, "").slice(0, 64);
            if (!g.length || !m.length) return l.nO;
            if (
              ((this.m_eStatus = Je),
              (this.m_bUsingCodeOverride = !1),
              o == "anonymous")
            )
              return (
                this.SetFailureState(R.eF.AnonymousLogin, K.EResult(l.FK)), l.FK
              );
            try {
              const c = await It(this.m_transport, g);
              if (!c)
                return (
                  (0, j.ZI)(
                    "Cannot start auth session without a valid RSA key",
                  ),
                  this.SetFailureState(R.eF.Network, K.EResult(l.Sq)),
                  l.Sq
                );
              const f = (0, j.P8)(m, c),
                T = fe.w.Init(b.iP);
              T.SetEMsg(Le.Kec),
                T.Body().set_account_name(g),
                T.Body().set_encrypted_password(f),
                T.Body().set_encryption_timestamp(c.timestamp),
                T.Body().set_remember_login(!!u),
                T.Body().set_persistence(u ? Se.nW : Se.fH),
                T.Body().set_website_id(y.TS.WEBSITE_ID);
              try {
                T.Body().set_device_details(await this.GetDeviceDetails());
              } catch (k) {
                (0, j.ZI)("Failed to GetDeviceDetails"), (0, j.ZI)(k);
              }
              if (
                (T.Body().set_language((0, ge.sfN)(y.TS.LANGUAGE)),
                this.m_onGetMachineAuth != null)
              ) {
                const k = await this.m_onGetMachineAuth(g);
                k.eresult == l.R && T.Body().set_guard_data(k.data);
              }
              await this.m_transport.MakeReady();
              const H = await b.kX.BeginAuthSessionViaCredentials(
                this.m_transport,
                T,
              );
              return (
                H.DEBUG_LogToConsole(),
                (0, te.h5)(async () => {
                  const k = H.GetEResult(),
                    G = H.Hdr().transport_error();
                  if (k !== l.R)
                    switch (k) {
                      case l.Um:
                        return (this.m_eStatus = ve), k;
                      case l.Sq:
                      case l.a_:
                        return (
                          this.SetFailureState(R.eF.Network, K.EResult(l.Sq)), k
                        );
                      case l.h_:
                        return (
                          this.SetFailureState(
                            R.eF.RateLimitExceeded,
                            K.EResult(k),
                          ),
                          k
                        );
                      case l.oH:
                        if (this.m_onShowAgreement)
                          this.m_onShowAgreement(
                            H.Body().agreement_session_url(),
                          );
                        else {
                          const I = H.Body().agreement_session_url(),
                            V = document.location.href;
                          window.location.href = `${I}&redir=${encodeURIComponent(V)}`;
                        }
                        return (
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          (this.m_eStatus = Me),
                          k
                        );
                      case l.uN:
                      default:
                        return (
                          (0, j.ZI)(
                            `Failed to start auth session. Result: ${k} Transport: ${G}`,
                          ),
                          this.SetFailureState(
                            R.eF.Generic,
                            K.EResult(k),
                            H.Body().extended_error_message(),
                          ),
                          this.m_onCompleteCallback({ bSuccess: !1 }),
                          k
                        );
                    }
                  this.m_strAccountName = o;
                  const {
                    client_id: z,
                    request_id: U,
                    interval: he,
                    allowed_confirmations: Y,
                    steamid: de,
                    weak_token: D,
                  } = H.Body().toObject();
                  if (
                    ((this.m_msPollInterval = he * 1e3),
                    (this.m_strClientID = z),
                    (this.m_rgRequestID = U),
                    (this.m_steamid = de),
                    (this.m_strWeakAuthToken = D),
                    Y.find(({ confirmation_type: I }) => I === b.TY.ig))
                  ) {
                    const I = new FormData();
                    I.append("clientid", z),
                      I.append("steamid", this.m_steamid);
                    const V = `${y.TS.LOGIN_BASE_URL}jwt/checkdevice/${this.m_steamid}`;
                    try {
                      if (
                        (
                          await ke().post(V, I, {
                            headers: { "Content-Type": "multipart/form-data" },
                            withCredentials: !0,
                          })
                        ).data.result == l.R
                      )
                        return (
                          (this.m_eStatus = Be), this.StartPolling(!0), l.R
                        );
                    } catch (Z) {
                      if (
                        ((0, j.tG)(
                          `checkdevice ajax to ${V} failed: ${Z.message}`,
                        ),
                        Z instanceof $.AxiosError)
                      ) {
                        const pe = Z;
                        return pe.response
                          ? (this.SetFailureState(
                              R.eF.Network,
                              K.AjaxFailureWithCode(pe.response.status),
                            ),
                            l.Sq)
                          : (this.SetFailureState(
                              R.eF.Network,
                              K.AjaxFailureNoCode(),
                            ),
                            l.Sq);
                      }
                      return (
                        this.SetFailureState(R.eF.Network, K.EResult(l.eH)),
                        l.eH
                      );
                    }
                  }
                  const X = jt(Y.map(({ confirmation_type: I }) => I)),
                    x = Y.find(({ confirmation_type: I }) => I === X);
                  switch (
                    (x &&
                      x.associated_message &&
                      (this.m_strConfirmationAssociatedMessage =
                        x.associated_message),
                    X)
                  ) {
                    case b.TY.WM:
                      return (this.m_eStatus = We), this.StartPolling(), k;
                    case b.TY.Xs:
                      this.m_eStatus = Ie;
                      break;
                    case b.TY.$Y:
                      (this.m_eStatus = Be), this.StartPolling(!1);
                      break;
                    case b.TY.bH:
                      (this.m_eStatus = me), this.StartPolling(!1);
                      break;
                    case b.TY.x0:
                      (this.m_eStatus = Ne), this.StartPolling(!1);
                      break;
                  }
                  return k;
                })
              );
            } catch (c) {
              return (
                (0, j.ZI)(
                  `Failed to start auth session. Exception: ${JSON.stringify(c)}`,
                ),
                (0, j.tG)(c),
                this.SetFailureState(R.eF.Generic, K.FailedToStart()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = ht);
          }
          GetStatus() {
            return this.m_eStatus;
          }
          GetConfirmationAssociatedMessage() {
            return this.m_strConfirmationAssociatedMessage;
          }
          GetAccountName() {
            return this.m_strAccountName;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetReplacementAuthenticator() {
            return this.m_replacementAuthenticator;
          }
          GetErrorReference() {
            return this.m_strErrorReference;
          }
          async SendSteamGuardCode(o, a = !0) {
            if (o.length == 0) {
              switch (this.m_eStatus) {
                case He:
                  this.m_eStatus = Ie;
                  break;
                case Ve:
                  this.m_eStatus = me;
                  break;
                case me:
                case Ie:
                  break;
                default:
                  throw new Error("Attempted to clear code in invalid state");
              }
              return Promise.resolve(l.R);
            }
            try {
              await this.m_transport.MakeReady();
              const u = this.m_eStatus === Ie || this.m_eStatus === He,
                g = fe.w.Init(b.Qc);
              g.SetEMsg(Le.Kec),
                g.Body().set_client_id(this.m_strClientID),
                g.Body().set_steamid(this.m_steamid),
                g.Body().set_code(o),
                g.Body().set_code_type(u ? b.TY.Xs : b.TY.bH);
              const m = await b.kX.UpdateAuthSessionWithSteamGuardCode(
                  this.m_transport,
                  g,
                ),
                c = m.GetEResult();
              if (c !== l.R) {
                if (!a)
                  return (
                    (0, j.ZI)(
                      `Failed to automatically update session with local SG info. Result ${c}. Transport ${m.Hdr().transport_error()}`,
                    ),
                    c
                  );
                switch (c) {
                  case l.QR:
                  case l.b7:
                    return (this.m_eStatus = u ? He : Ve), c;
                  case l.ob:
                    return (
                      this.SetFailureState(R.eF.Expired, K.EResult(c)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                  case l.h_:
                    return (
                      this.SetFailureState(
                        R.eF.RateLimitExceeded,
                        K.EResult(c),
                      ),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                  case l.oH:
                    if (this.m_onShowAgreement)
                      this.m_onShowAgreement(m.Body().agreement_session_url());
                    else {
                      const f = m.Body().agreement_session_url(),
                        T = document.location.href;
                      window.location.href = `${f}&redir=${encodeURIComponent(T)}`;
                    }
                    return (
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      (this.m_eStatus = Me),
                      c
                    );
                  default:
                    return (
                      (0, j.ZI)(
                        `Failed to update auth session with SG code. Result: ${c}`,
                      ),
                      this.SetFailureState(R.eF.Generic, K.EResult(c)),
                      this.m_onCompleteCallback({ bSuccess: !1 }),
                      c
                    );
                }
              }
              return (this.m_eStatus = We), this.StartPolling(), c;
            } catch (u) {
              return (
                (0, j.ZI)(`Failed to update auth session with SG code. ${u}`),
                this.SetFailureState(R.eF.Generic, K.FailedToAddCode()),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          UseCodeOverride() {
            switch (this.m_eStatus) {
              case Ne:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = me);
                return;
              case Be:
                (this.m_bUsingCodeOverride = !0), (this.m_eStatus = Ie);
                return;
              default:
                (0, j.ZI)(
                  `Don't know how to UseCodeOverride from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          CantAccessCode() {
            this.m_eStatus = $e;
          }
          async StartMoveAuthenticator() {
            this.m_weakAuthWebInterface = new Xe.D(
              y.TS.WEBAPI_BASE_URL,
              this.m_strWeakAuthToken,
            );
            try {
              const o = fe.w.Init(le.ot),
                a = await le.fz.RemoveAuthenticatorViaChallengeStart(
                  this.m_weakAuthWebInterface.GetServiceTransport(),
                  o,
                );
              l.R != a.GetEResult()
                ? (a.DEBUG_LogToConsole(),
                  (0, j.ZI)(
                    "An unexpected error occured while adding an authenticator",
                    a.GetEResult(),
                  ),
                  this.SetFailureState(
                    R.eF.MoveAuthenticator,
                    K.EResult(a.GetEResult()),
                  ))
                : (this.m_eStatus = Qe);
            } catch (o) {
              (0, j.ZI)(
                "An unexpected error occured while moving an authenticator",
                o,
              ),
                this.SetFailureState(R.eF.MoveAuthenticator, K.EResult(l.zi));
            }
          }
          async ResendMoveCode() {
            const o = fe.w.Init(le.ot),
              a = await le.fz.RemoveAuthenticatorViaChallengeStart(
                this.m_weakAuthWebInterface.GetServiceTransport(),
                o,
              );
            l.R != a.GetEResult() &&
              (a.DEBUG_LogToConsole(),
              (0, j.ZI)(
                "An unexpected error occured while adding an authenticator",
                a.GetEResult(),
              )),
              (this.m_eStatus = Qe);
          }
          async FinishMoveAuthenticator(o) {
            const a = fe.w.Init(le.bv);
            a.Body().set_sms_code(o),
              a.Body().set_generate_new_token(!0),
              a.Body().set_version(At);
            const u = await le.fz.RemoveAuthenticatorViaChallengeContinue(
              this.m_weakAuthWebInterface.GetServiceTransport(),
              a,
            );
            l.c3 == u.GetEResult()
              ? (this.m_eStatus = qe)
              : u.Body().success()
                ? (u.DEBUG_LogToConsole(),
                  (this.m_replacementAuthenticator = (0, R.FU)(
                    u.Body().replacement_token().toObject(),
                  )),
                  (this.m_eStatus = Mt),
                  (this.m_bUsingCodeOverride = !1))
                : (u.DEBUG_LogToConsole(),
                  (0, j.ZI)(
                    "Error when calling RemoveAuthenticatorViaChallengeContinue",
                    u.GetEResult(),
                  ),
                  this.SetFailureState(
                    R.eF.MoveAuthenticator,
                    K.EResult(u.GetEResult()),
                  ));
          }
          FinishMoveRecovery() {
            this.m_eStatus = me;
          }
          BCanGoBack() {
            switch (this.m_eStatus) {
              case me:
              case Ve:
              case Ie:
              case He:
              case Ne:
              case Be:
              case $e:
              case Qe:
              case qe:
                return !0;
              default:
                return !1;
            }
          }
          GoBack() {
            switch (this.m_eStatus) {
              case Ne:
              case Be:
                this.m_eStatus = Me;
                break;
              case me:
              case Ve:
                this.m_eStatus = this.m_bUsingCodeOverride ? Ne : Me;
                break;
              case $e:
              case Qe:
              case qe:
                this.m_eStatus = (this.m_bUsingCodeOverride, me);
                break;
              case Ie:
              case He:
                this.m_eStatus = this.m_bUsingCodeOverride ? Be : Me;
                break;
              default:
                (0, j.ZI)(
                  `Don't know how to GoBack from login session status ${this.m_eStatus}`,
                );
                return;
            }
          }
          SetFailureState(o, a, u = "") {
            (this.m_eStatus = et),
              (this.m_eFailureState = o),
              (this.m_strErrorReference = a),
              (this.m_strExtendedErrorMessage = u);
          }
          onAuthComplete = (o) => {
            this.m_eStatus = o.bSuccess ? ut : et;
            let a;
            o.bSuccess
              ? (a = {
                  ...o,
                  strAccountName: this.m_strAccountName,
                  steamid: this.m_steamid,
                })
              : (a = { bSuccess: !1 }),
              this.m_onLoginComplete && this.m_onLoginComplete(a);
          };
          SetOnLoginComplete(o) {
            this.m_onLoginComplete = o;
          }
        }
        se([te.sH], J.prototype, "m_eStatus", 2),
          se([te.sH], J.prototype, "m_strErrorReference", 2),
          se([B.oI], J.prototype, "Start", 1),
          se([B.oI], J.prototype, "SendSteamGuardCode", 1),
          se([B.oI], J.prototype, "UseCodeOverride", 1),
          se([B.oI], J.prototype, "CantAccessCode", 1),
          se([B.oI], J.prototype, "StartMoveAuthenticator", 1),
          se([B.oI], J.prototype, "ResendMoveCode", 1),
          se([B.oI], J.prototype, "FinishMoveAuthenticator", 1),
          se([B.oI], J.prototype, "FinishMoveRecovery", 1),
          se([B.oI], J.prototype, "GoBack", 1),
          se([te.XI], J.prototype, "SetFailureState", 1),
          se([B.oI], J.prototype, "SetOnLoginComplete", 1);
        async function It(r, o) {
          const a = fe.w.Init(b.qu);
          a.Body().set_account_name(o), a.SetEMsg(Le.Kec);
          try {
            await r.MakeReady();
            const u = await b.kX.GetPasswordRSAPublicKey(r, a);
            if ((u.DEBUG_LogToConsole(), u.GetEResult() !== l.R))
              return (
                (0, j.ZI)(
                  `Failed to get RSA key with EResult: ${u.GetEResult()}`,
                ),
                null
              );
            const {
              publickey_exp: g,
              publickey_mod: m,
              timestamp: c,
            } = u.Body().toObject();
            return !g || !m || !c
              ? ((0, j.ZI)(
                  `Missing expected field in RSA Key: ${JSON.stringify({ publickey_exp: g, publickey_mod: m, timestamp: c })}`,
                ),
                null)
              : { publickey_exp: g, publickey_mod: m, timestamp: c };
          } catch (u) {
            return (
              (0, j.ZI)(`Failed to get RSA key: ${JSON.stringify(u)}`), null
            );
          }
        }
        const dt = [
          b.TY.x0,
          b.TY.bH,
          b.TY.Xs,
          b.TY.WM,
          b.TY.oP,
          b.TY.$Y,
        ].reduce((r, o, a) => ((r[o] = a), r), {});
        function jt(r) {
          let o = r[0] || b.TY.oP;
          return r.length > 1 && (o = r.sort((a, u) => dt[a] - dt[u])[0]), o;
        }
        function Dt(r) {
          const [o, a] = (0, M.useState)(new J(r));
          return (
            (0, M.useEffect)(() => {
              o?.SetOnLoginComplete(r.onComplete);
            }, [o, r.onComplete]),
            (0, Ae.q3)(() => ({
              strAccountName: o.GetAccountName(),
              steamid: o.GetSteamID(),
              eFailureState: o.GetFailureState(),
              strExtendedErrorMessage: o.GetExtendedErrorMessage(),
              strErrorReference: o.GetErrorReference(),
              strConfirmationAssociatedMessage:
                o.GetConfirmationAssociatedMessage(),
              eStatus: o.GetStatus(),
              bCanGoBack: o.BCanGoBack(),
              start: o.Start,
              addCode: o.SendSteamGuardCode,
              useCodeOverride: o.UseCodeOverride,
              cantAccessCode: o.CantAccessCode,
              startMoveAuthenticator: o.StartMoveAuthenticator,
              resendMoveCode: o.ResendMoveCode,
              finishMoveAuthenticator: o.FinishMoveAuthenticator,
              finishMoveRecovery: o.FinishMoveRecovery,
              replacementAuthenticator: o.GetReplacementAuthenticator(),
              reset: () => a(new J(r)),
              goBack: o.GoBack,
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        function tt(r) {
          return r ? 7 : 5;
        }
        function ft(r, o) {
          return /[23456789BCDFGHJKMNPQRTVWXY]*/g.test(r) && r.length <= tt(o);
        }
        function mt(r, o) {
          return ft(r, o) && r.length === tt(o);
        }
        const K = {
          EResult: (r) => `e${r}`,
          FailedToStart: () => "c-fts",
          FailedToAddCode: () => "c-ftac",
          AjaxFailureNoCode: () => "af",
          AjaxFailureWithCode: (r) => `af-${r}`,
        };
        var st = Object.defineProperty,
          kt = Object.getOwnPropertyDescriptor,
          pt = (r, o, a, u) => {
            for (
              var g = u > 1 ? void 0 : u ? kt(o, a) : o, m = r.length - 1, c;
              m >= 0;
              m--
            )
              (c = r[m]) && (g = (u ? c(o, a, g) : c(g)) || g);
            return u && g && st(o, a, g), g;
          };
        const ze = 0,
          nt = 1,
          gt = 2,
          Ct = 3,
          St = 4,
          Bt = 5;
        class ot extends R.gf {
          m_eStatus = ze;
          constructor(o) {
            super(
              o.transport,
              (a) => {
                (this.m_eStatus = a.bSuccess ? Ct : St), o.onComplete(a);
              },
              o.onDeviceDetails,
            ),
              (0, te.Gn)(this);
          }
          async Start() {
            if (this.m_eStatus !== ze)
              return (
                console.error(
                  "Cannot start an already started auth session. Create a new session instance.",
                ),
                l.zi
              );
            this.m_eStatus = nt;
            try {
              await this.m_transport.MakeReady();
              const o = fe.w.Init(b.R9);
              o.SetEMsg(Le.Kec);
              try {
                o.Body().set_device_details(await this.GetDeviceDetails());
              } catch (H) {
                console.error("Failed to GetDeviceDetails"), console.log(H);
              }
              o.Body().set_website_id(y.TS.WEBSITE_ID);
              const a = await b.kX.BeginAuthSessionViaQR(this.m_transport, o),
                u = a.GetEResult(),
                g = a.Hdr().transport_error();
              if (u !== l.R)
                return (
                  console.error(
                    `Failed to start auth session. Result: ${u} Transport: ${g}`,
                  ),
                  (this.m_eFailureState = R.eF.Generic),
                  this.m_onCompleteCallback({ bSuccess: !1 }),
                  u
                );
              const {
                client_id: m,
                challenge_url: c,
                interval: f,
                request_id: T,
              } = a.Body().toObject();
              return (
                (this.m_strClientID = m),
                (this.m_strChallengeURL = c),
                (this.m_msPollInterval = f * 1e3),
                (this.m_rgRequestID = T),
                (this.m_eStatus = gt),
                this.StartPolling(!1),
                u
              );
            } catch (o) {
              return (
                console.error(
                  `Failed to start auth session: ${JSON.stringify(o)}`,
                ),
                (this.m_eFailureState = R.eF.Generic),
                this.m_onCompleteCallback({ bSuccess: !1 }),
                l.zi
              );
            }
          }
          Stop() {
            this.StopPolling(), (this.m_eStatus = Bt);
          }
          GetChallengeURL() {
            return this.m_strChallengeURL;
          }
          GetClientID() {
            return this.m_strClientID;
          }
          GetStatus() {
            return this.m_eStatus;
          }
        }
        pt([te.sH], ot.prototype, "m_eStatus", 2);
        function Nt(r) {
          const [o, a] = (0, M.useState)(new ot(r));
          return (
            (0, M.useEffect)(
              () => (
                o.Start(),
                () => {
                  o.Stop();
                }
              ),
              [o],
            ),
            (0, Ae.q3)(() => ({
              strChallengeURL: o.GetChallengeURL(),
              strClientID: o.GetClientID(),
              eFailureState: o.GetFailureState(),
              eStatus: o.GetStatus(),
              bHadRemoteInteraction: o.BHadRemoteInteraction(),
              reset: () => a(new ot(r)),
              setTokenToRevoke: o.SetTokenToRevoke,
            }))
          );
        }
        var Ht = _(77661),
          p = _.n(Ht),
          Vt = _(56589),
          Ft = _.n(Vt),
          Pt = _(71742),
          Gt = _(5804),
          vt = _.n(Gt),
          _t = ((r) => (
            (r[(r.L = 1)] = "L"),
            (r[(r.M = 0)] = "M"),
            (r[(r.Q = 3)] = "Q"),
            (r[(r.H = 2)] = "H"),
            r
          ))(_t || {});
        function Ot(r, o, a) {
          const u = r.length,
            g = r[0].length,
            m = (u + 2) * g,
            c = new Uint8Array(40 + m);
          let f = 0;
          (c[f++] = 71),
            (c[f++] = 73),
            (c[f++] = 70),
            (c[f++] = 56),
            (c[f++] = 57),
            (c[f++] = 97),
            (c[f++] = u),
            (c[f++] = 0),
            (c[f++] = g),
            (c[f++] = 0),
            (0, Pt.wT)(
              o != "transparent" || a != "transparent",
              "Trying to use transparent for both colors in QR",
            ),
            (c[f++] = 161),
            (c[f++] = 0),
            (c[f++] = 0),
            o == "transparent"
              ? ((c[f++] = 0), (c[f++] = 0), (c[f++] = 0))
              : ((c[f++] = o[0]), (c[f++] = o[1]), (c[f++] = o[2])),
            a == "transparent"
              ? ((c[f++] = 0), (c[f++] = 0), (c[f++] = 0))
              : ((c[f++] = a[0]), (c[f++] = a[1]), (c[f++] = a[2])),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (c[f++] = 255),
            (o == "transparent" || a == "transparent") &&
              ((c[f++] = 33),
              (c[f++] = 249),
              (c[f++] = 4),
              (c[f++] = 1),
              (c[f++] = 0),
              (c[f++] = 0),
              (c[f++] = o == "transparent" ? 0 : 1),
              (c[f++] = 0)),
            (c[f++] = 44),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = 0),
            (c[f++] = u),
            (c[f++] = 0),
            (c[f++] = g),
            (c[f++] = 0),
            (c[f++] = 0);
          const T = 7;
          c[f++] = T;
          for (let H = 0; H < r.length; H++) {
            (c[f++] = u + 1), (c[f++] = 2 ** T);
            for (let k = 0; k < r.length; k++) c[f++] = r[H][k] ? 0 : 1;
          }
          return (
            (c[f++] = 1), (c[f++] = 2 ** T + 1), (c[f++] = 0), (c[f++] = 59), c
          );
        }
        function Ut(
          r,
          {
            activeBitColor: o = [33, 35, 40],
            inactiveBitColor: a = [255, 255, 255],
            borderWidth: u = 3,
          } = {},
          g = {},
        ) {
          const m = Ft()(r, g).modules;
          if (!m) return null;
          let c = [];
          for (let f = 0; f < u; f++) c.push(Array(m.length + u * 2).fill(!1));
          for (let f = 0; f < m.length; f++)
            c.push([
              ...Array.from({ length: u }, () => !1),
              ...m[f],
              ...Array.from({ length: u }, () => !1),
            ]);
          for (let f = 0; f < u; f++) c.push(Array(m.length + u * 2).fill(!1));
          return Ot(c, o, a);
        }
        function Zt(r) {
          let {
            quality: o = 0,
            children: a,
            className: u,
            activeBitColor: g = [33, 35, 40],
            inactiveBitColor: m = [255, 255, 255],
            borderWidth: c = 3,
            typeNumber: f = 6,
          } = r;
          const T = Qt(a, {
            typeNumber: f,
            errorCorrectLevel: o,
            activeBitColor: g,
            inactiveBitColor: m,
            borderWidth: c,
          });
          if (!T) return null;
          const H = new Blob([T], { type: "image/gif" }),
            k = URL.createObjectURL(H),
            G = `rgb(${m[0]}, ${m[1]}, ${m[2]})`;
          return (0, n.jsx)("div", {
            className: (0, E.A)(vt().QRBits, u),
            style: { "--qr-bright-color": G },
            children: (0, n.jsx)("img", {
              className: vt().QRImg,
              src: k,
              alt: "",
            }),
          });
        }
        function Qt(r, o) {
          const {
            typeNumber: a,
            errorCorrectLevel: u,
            activeBitColor: g,
            inactiveBitColor: m,
            borderWidth: c,
          } = o;
          return (0, M.useMemo)(
            () =>
              Ut(
                r,
                { activeBitColor: g, inactiveBitColor: m, borderWidth: c },
                { typeNumber: a, errorCorrectLevel: u },
              ),
            [r, a, u, g, m, c],
          );
        }
        var Wt = _(5522),
          ne = _.n(Wt),
          zt = _(16412);
        function Kt(r) {
          const {
              transport: o,
              onComplete: a,
              onStatusChange: u,
              platform: g,
              styling: m = "default",
              activeBitValue: c = 255,
            } = r,
            f = y.TS.IN_STEAMUI ? rt : it,
            {
              eStatus: T,
              strChallengeURL: H,
              strClientID: k,
              bHadRemoteInteraction: G,
              reset: z,
              setTokenToRevoke: U,
            } = Nt({ transport: o, onComplete: a, onDeviceDetails: f });
          (0, M.useEffect)(() => u && u(T), [u, T]);
          const he = T === gt ? H : y.TS.STORE_BASE_URL,
            Y = T === ze || T === nt || G,
            de = T === St,
            D = T === Ct,
            X = D
              ? (0, n.jsx)(Jt, {})
              : de
                ? (0, n.jsx)(Yt, { reset: z })
                : Y
                  ? (0, n.jsx)(bt, { size: "small" })
                  : null,
            x = Y || de || D;
          (0, M.useEffect)(() => {
            r.refreshInfo?.login_token_id && U(r.refreshInfo.login_token_id);
          }, [r.refreshInfo, U]);
          const I = y.TS.EUNIVERSE !== ge.wLO,
            V = `rgb(${c}, ${c}, ${c})`;
          return (0, n.jsx)("div", {
            className: ne().Column,
            children: (0, n.jsxs)("div", {
              style: { position: "relative" },
              children: [
                (0, n.jsx)(Zt, {
                  borderWidth: 0,
                  activeBitColor: [21, 23, 28],
                  inactiveBitColor: I ? [c, 0, c] : [c, c, c],
                  quality: Ue(he),
                  className: (0, E.A)(
                    ne().LoginQR,
                    m == "deck" && ne().QRLoginDeck,
                    m == "vr" && ne().QRLoginVR,
                    x && ne().Blur,
                    I && ne().NonPublic,
                  ),
                  children: he,
                }),
                x &&
                  (0, n.jsx)("div", {
                    className: ne().Overlay,
                    children: (0, n.jsx)("div", {
                      className: ne().Box,
                      style: { "--qr-bright-color": V },
                      children: X,
                    }),
                  }),
              ],
            }),
          });
        }
        function Ue(r) {
          return r.length <= 90 ? _t.Q : void 0;
        }
        function bt(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, E.A)(
              ne().Loading,
              o == "small" && ne().Small,
              (o == "medium" || !o) && ne().Medium,
              o == "large" && ne().Large,
            ),
          });
        }
        function Yt(r) {
          return (0, n.jsx)(zt.$n, {
            onClick: r.reset,
            className: ne().QRFailure,
            children: (0, n.jsx)(Xt, {}),
          });
        }
        function Xt(r) {
          return (0, n.jsxs)("svg", {
            version: "1.1",
            id: "Layer_2",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "40px", height: "40px", cursor: "pointer" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: [
              (0, n.jsx)("path", {
                fill: "none",
                stroke: "#fff",
                strokeWidth: "30",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                d: "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
              }),
              (0, n.jsx)("polygon", {
                points: "147.639,108.361 245.755,10.166 245.834,108.361",
                fill: "#fff",
              }),
            ],
          });
        }
        function Jt() {
          return (0, n.jsx)("svg", {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            style: { width: "45px", height: "45px" },
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
            children: (0, n.jsx)("polyline", {
              fill: "none",
              stroke: "#fff",
              strokeWidth: "24",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              points: "49.5,147.75 95,210.75 206.5,45.25 ",
            }),
          });
        }
        var $t = _(72609);
        const wt = (0, M.createContext)(!1),
          _e = () => (0, M.useContext)(wt);
        function qt() {
          return (0, n.jsx)("div", {
            className: p().Login,
            children: (0, n.jsx)(ct, {
              reset: () => window.location.reload(),
              failure: R.eF.Generic,
            }),
          });
        }
        function es(r) {
          const o = Bs(r.redirectUrl),
            a = (u) => {
              const { strRefreshToken: g } = u;
              (0, R.yp)(g).then(
                (m) => r.onComplete(m),
                () => r.onComplete(R.wI.k_PrimaryDomainFail),
              );
            };
          return o
            ? null
            : (0, n.jsx)(ts, {
                ...r,
                creationRedirectUrl: r.redirectUrl,
                onSuccess: a,
                embedded: r.theme === "modal",
              });
        }
        function ts(r) {
          const { embedded: o, children: a, ...u } = r;
          return (0, n.jsx)(Fe.tH, {
            children: (0, n.jsx)(wt.Provider, {
              value: o ?? !1,
              children: (0, n.jsxs)("div", {
                className: p().Login,
                children: [(0, n.jsx)(is, { ...u }), a],
              }),
            }),
          });
        }
        function ms(r) {
          switch (r) {
            case k_EUniverseDev:
              return "dev";
            case k_EUniverseBeta:
              return "beta";
            case k_EUniversePublic:
              return "public";
            default:
              return "unknown";
          }
        }
        function ss(r) {
          if ((0, Q.q)()) return null;
          const { variant: o } = r;
          return typeof o == "function"
            ? (0, n.jsx)(we, {
                onClick: o,
                children: (0, C.we)("#Login_Help_SignIn"),
              })
            : (0, n.jsx)(we, {
                href: `${y.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                children: (0, C.we)("#Login_Help_SignIn"),
              });
        }
        function ns(r) {
          const { variant: o, redirectUrl: a } = r;
          if (typeof o == "function")
            return (0, n.jsx)(we, {
              inline: !0,
              onClick: o,
              children: (0, C.we)("#Login_CreateAccount"),
            });
          {
            const u = a ? `?redir=${encodeURIComponent(a)}` : "";
            switch (o ?? "normal") {
              default:
              case "normal":
                return (0, n.jsx)(we, {
                  inline: !0,
                  href: `${y.TS.STORE_BASE_URL}join/${u}`,
                  children: (0, C.we)("#Login_CreateAccount"),
                });
              case "partner":
                return (0, n.jsx)(we, {
                  inline: !0,
                  href: `${y.TS.PARTNER_BASE_URL}${u}`,
                  children: (0, C.we)("#Login_CreateSteamworksAccount"),
                });
              case "none":
                return null;
            }
          }
        }
        function os(r) {
          const { launcherType: o, variant: a, redirectUrl: u } = r;
          if (o === ge.A2g || a == "none") return null;
          const g = o !== void 0;
          let m;
          switch (a ?? "normal") {
            default:
            case "normal":
              m = "#Login_NoSteamAccount";
              break;
            case "partner":
              m = "#Login_NoSteamworksAccount";
              break;
          }
          return (0, n.jsxs)("div", {
            className: (0, E.A)(p().AccountCreation, g && p().InClient),
            children: [
              (0, n.jsx)("span", {
                className: p().AccountCreationPrompt,
                children: (0, C.we)(m),
              }),
              (0, n.jsx)(ns, { variant: a, redirectUrl: u }),
            ],
          });
        }
        async function rt() {
          const [r, o, a, u] = await Promise.all([
            SteamClient.System.GetOSType(),
            SteamClient.System.GetSystemInfo(),
            SteamClient?.Auth?.GetLocalHostname?.() ?? "",
            SteamClient?.Auth?.GetMachineID?.() ?? void 0,
          ]);
          return {
            os_type: r,
            device_friendly_name: a,
            machine_id: u,
            platform_type: b.SS.w0,
            gaming_device_type: o.eGamingDeviceType,
          };
        }
        async function it() {
          return {
            device_friendly_name: window.navigator.userAgent,
            platform_type: b.SS.tS,
          };
        }
        function ee(r) {
          const {
              onSuccess: o,
              secureComputer: a = !0,
              isProbablySharedPC: u = !1,
            } = r,
            g = (0, M.useCallback)(
              (x) => {
                if (x.bSuccess) {
                  const {
                    strRefreshToken: I,
                    strAccessToken: V,
                    strAccountName: Z,
                    strNewGuardData: pe,
                  } = x;
                  o({
                    strRefreshToken: I,
                    strAccessToken: V,
                    strAccountName: Z,
                    strNewGuardData: pe,
                  });
                }
              },
              [o],
            ),
            m = Dt({
              transport: r.transport,
              onComplete: g,
              onDeviceDetails: r.onDeviceDetails,
              onGetMachineAuth: r.onGetMachineAuth,
              onShowAgreement: r.onShowAgreement,
            }),
            [c, f] = (0, M.useState)(ze),
            T = "Login_RememberMeSetting",
            [H, k] = (0, M.useState)(
              r.refreshInfo?.account_name ?? r.defaultAccountName ?? "",
            ),
            [G, z] = (0, M.useState)(""),
            [U, he] = (0, M.useState)(
              a && !u && localStorage?.getItem(T) != "0",
            ),
            Y = !(m.eStatus === Me || m.eStatus === Je || m.eStatus === ve),
            de = () => (!H || !G ? Promise.resolve(l.nO) : m.start(H, G, U)),
            D = () => {
              (0, j.tG)(`Logging in offline with username ${H}`),
                SteamClient.User.SetLoginCredentials(H, G, U),
                SteamClient.User.StartOffline(!0);
            };
          return (
            (0, M.useEffect)(() => {
              r.refreshInfo?.login_token_id &&
                m.setTokenToRevoke(r.refreshInfo.login_token_id);
            }, [r.refreshInfo, m]),
            {
              password: m,
              onComplete: g,
              eQRStatus: c,
              onQRStatusChange: f,
              strAccountName: H,
              onAccountNameChange: k,
              strPassword: G,
              onPasswordChange: z,
              bRememberMe: U,
              onRememberMeChange: (x) => {
                he(x), localStorage?.setItem(T, x ? "1" : "0");
              },
              onPasswordSubmit: de,
              bInPasswordFlow: Y,
              onTryOffline: D,
            }
          );
        }
        function rs() {
          const r =
            window?.location && (0, ae.f3)(window.location, "need_password");
          return r !== void 0 && r !== "false" && r !== "0";
        }
        function is(r) {
          const {
              transport: o,
              onSuccess: a,
              platform: u,
              autoFocus: g,
              refreshInfo: m,
              renderSuccess: c = () => (0, n.jsx)(ks, {}),
              lastResult: f,
              joinLinkVariant: T,
              defaultAccountName: H,
              secureComputer: k = !0,
              isProbablySharedPC: G = !1,
              onShowAgreement: z,
              creationRedirectUrl: U,
            } = r,
            he = y.TS.IN_STEAMUI ? rt : it,
            Y = y.TS.IN_STEAMUI
              ? (Z) => SteamClient.Auth.GetSteamGuardData(Z)
              : null,
            de = rs(),
            D = ee({
              transport: o,
              platform: u,
              onSuccess: a,
              refreshInfo: m,
              onDeviceDetails: he,
              onGetMachineAuth: Y,
              defaultAccountName: H,
              secureComputer: k,
              isProbablySharedPC: G,
              onShowAgreement: z,
            }),
            X = _e(),
            x = (0, M.useId)();
          if (f != null && f != l.R)
            return (0, n.jsx)("div", {
              className: p().Login,
              children: (0, n.jsx)(ct, {
                reset: () => window.location.reload(),
                failure: R.eF.Generic,
                errorReference: f.toString(),
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              }),
            });
          const I = !(0, y.Y2)();
          if (!D.bInPasswordFlow) {
            const Z = (0, n.jsxs)("div", {
              className: (0, E.A)(p().SideBySide, X && p().Embedded),
              children: [
                (0, n.jsx)(as, {
                  strAccountName: D.strAccountName,
                  onAccountNameChange: D.onAccountNameChange,
                  strPassword: D.strPassword,
                  onPasswordChange: D.onPasswordChange,
                  bRememberMe: D.bRememberMe,
                  onRememberMeChange: D.onRememberMeChange,
                  onSubmit: D.onPasswordSubmit,
                  status: D.password.eStatus,
                  autoFocus: g,
                  secureComputer: k,
                  refreshInfo: r.refreshInfo,
                }),
                I &&
                  (0, n.jsx)(cs, {
                    transport: o,
                    onQRStatusChange: D.onQRStatusChange,
                    onComplete: D.onComplete,
                    platform: u,
                    refreshInfo: m,
                  }),
              ],
            });
            if (X) {
              const je = y.TS.IN_STEAMUI,
                Te = je ? y.TS.LAUNCHER_TYPE : void 0;
              return (0, n.jsxs)(Re, {
                className: (0, E.A)(p().EmbeddedRoot, je && p().InClient),
                children: [
                  !je && !1,
                  !r.refreshInfo &&
                    (0, n.jsx)(ds, {
                      realm: y.TS.EREALM,
                      launcherType: Te,
                      className: p().HeaderLogo,
                      onBack: r.onBack,
                    }),
                  (0, n.jsx)(yt, { refreshInfo: m }),
                  Z,
                  (0, n.jsxs)("div", {
                    className: (0, E.A)(
                      p().EmbeddedRootFooter,
                      je && p().InClient,
                    ),
                    children: [
                      (0, n.jsx)(ss, { variant: r.helpLinkVariant }),
                      (0, n.jsx)(os, {
                        launcherType: Te,
                        variant: T,
                        redirectUrl: U,
                      }),
                    ],
                  }),
                ],
              });
            }
            const pe = (0, n.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                margin: "8px 16px",
              },
              children: [
                !1,
                (0, n.jsx)("h2", {
                  className: p().PrimaryHeader,
                  id: x,
                  children: r.refreshInfo
                    ? (0, C.we)("#Login_RefreshSignIn")
                    : (0, C.we)("#Login_SignInTitle"),
                }),
                (0, n.jsx)(yt, { refreshInfo: r.refreshInfo }),
              ],
            });
            return (0, n.jsxs)(Ze, {
              title: pe,
              titleId: x,
              children: [de && (0, n.jsx)(at, {}), Z],
            });
          }
          const V = D.password.eStatus;
          switch (V) {
            case We:
              return r.renderLoading
                ? (0, n.jsx)(n.Fragment, { children: r.renderLoading() })
                : (0, n.jsx)(Ye, {});
            case me:
            case Ve:
            case Ie:
            case He:
              const Z = V === me || V === Ve;
              return (0, n.jsx)(ws, {
                type: Z ? "mobile" : "email",
                onSubmitCode: D.password.addCode,
                status: V,
                associatedLabel: D.password.strConfirmationAssociatedMessage,
                accountName: D.password.strAccountName,
                onBack: D.password.goBack,
                onCodeHelp: r.onCodeHelp,
              });
            case Ne:
            case Be:
              const pe = V === Ne;
              return (0, n.jsx)(Ls, {
                type: pe ? "mobile" : "email",
                accountName: D.password.strAccountName,
                onUseCodeOverride: D.password.useCodeOverride,
                onCodeHelp: r.onCodeHelp,
              });
            case ht:
              return (0, n.jsx)(bs, { reset: D.password.reset });
            case et:
              return (0, n.jsx)(ct, {
                reset: D.password.reset,
                failure: D.password.eFailureState,
                onRequestOffline: D.onTryOffline,
                errorReference: D.password.strErrorReference,
                extendedErrorMessage: D.password.strExtendedErrorMessage,
              });
            case ut:
              return (0, n.jsx)(Ze, { compact: !0, children: c() });
            default:
              return (
                (0, j.ZI)(`Unknown Phase: ${V}`),
                (0, n.jsx)(ct, {
                  reset: D.password.reset,
                  failure: R.eF.Generic,
                  onRequestOffline: D.onTryOffline,
                  errorReference: D.password.strErrorReference,
                  extendedErrorMessage: D.password.strExtendedErrorMessage,
                })
              );
          }
        }
        function yt(r) {
          if (!r.refreshInfo) return null;
          let o;
          switch (r.refreshInfo?.reason ?? l.zi) {
            case l.zi:
            case l.Vr:
            default:
              o = "#Login_RefreshReason_Generic";
              break;
            case l.KH:
              o = "#Login_RefreshReason_LoggedInElsewhere";
              break;
            case l.CF:
              o = "#Login_RefreshReason_LogonSessionReplaced";
              break;
            case l.Um:
              o = "#Login_RefreshReason_InvalidPassword";
              break;
            case l.fY:
              o = "#Login_RefreshReason_Revoked";
              break;
            case l.ob:
              o = "#Login_RefreshReason_Expired";
              break;
            case l.cr:
              o = "#Login_RefreshReason_PasswordRequiredToKickSession";
              break;
            case l.uN:
              o = "#Login_RefreshReason_AccountDisabled";
              break;
            case l.sG:
              o = "#Login_RefreshReason_ParentalControlRestricted";
              break;
            case l.h_:
              o = "#Login_RefreshReason_RateLimitExceeded";
              break;
          }
          return (0, n.jsxs)("div", {
            className: p().RefreshReasonContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().RefreshTitle,
                children: (0, C.we)("#Login_RefreshSignIn"),
              }),
              (0, n.jsx)("div", {
                className: p().RefreshReason,
                children: (0, C.we)(o),
              }),
            ],
          });
        }
        function at() {
          return (0, n.jsx)("div", {
            className: p().ConfirmCredntialsNag,
            children: (0, C.we)("#Login_ConfirmCredentials"),
          });
        }
        function as(r) {
          const {
              onSubmit: o,
              status: a,
              autoFocus: u,
              refreshInfo: g,
              strAccountName: m,
              onAccountNameChange: c,
              strPassword: f,
              onPasswordChange: T,
              bRememberMe: H,
              onRememberMeChange: k,
              secureComputer: G = !0,
            } = r,
            [z, U] = (0, M.useState)(!1),
            he = _e(),
            Y = Hs(),
            de = () => {
              o().then(() => {
                Y() && U(!1);
              });
            },
            D = a === Je || a === We,
            X = a === ve && !z,
            x = X
              ? (0, n.jsx)(re, {
                  children: (0, C.we)("#Login_CheckCredentials"),
                })
              : (0, n.jsx)(re, { children: "\xA0" }),
            I = u && !m,
            V = u && !!m,
            Z = !!r.refreshInfo,
            pe = (0, M.useId)(),
            je = (0, M.useId)();
          return (0, n.jsxs)(Ss, {
            onSubmit: de,
            className: p().LoginForm,
            children: [
              (0, n.jsx)(h, {
                tone: X ? "danger" : void 0,
                label: (0, n.jsx)(d, {
                  highlight: !0,
                  inputId: pe,
                  children: (0, C.we)("#Login_SignIn_WithAccountName"),
                }),
                value: m,
                onChange: (Te) => {
                  U(!0), c(Te);
                },
                autoFocus: I,
                disabled: Z,
                id: pe,
              }),
              (0, n.jsx)(h, {
                tone: X ? "danger" : void 0,
                label: (0, n.jsx)(d, {
                  inputId: je,
                  children: (0, C.we)("#Login_Password"),
                }),
                value: f,
                onChange: (Te) => {
                  U(!0), T(Te);
                },
                type: "password",
                autoFocus: V,
                id: je,
              }),
              G
                ? (0, n.jsx)(A.he, {
                    toolTipContent: "#Login_RememberMe_Tooltip",
                    direction: "bottom",
                    children: (0, n.jsx)(F, {
                      label: (0, C.we)("#Login_RememberMe_Short"),
                      value: H,
                      onChange: k,
                    }),
                  })
                : (0, n.jsx)("div", {
                    className: p().InsecureComputer,
                    children: (0, C.we)("#Login_InsecureComputer"),
                  }),
              (0, n.jsx)(ce, { loading: D, refreshLogin: Z }),
              x,
              !he &&
                (0, n.jsx)(we, {
                  href: `${y.TS.HELP_BASE_URL}wizard/HelpWithLogin?redir=${encodeURIComponent(document.location.href)}`,
                  align: "center",
                  children: (0, C.we)("#Login_Help_SignIn"),
                }),
            ],
          });
        }
        const ls = 700;
        function cs(r) {
          const o = (0, ie.R7)(),
            a = () => o.ownerWindow.screen.width < ls,
            [u, g] = (0, M.useState)(a());
          return (
            (0, B.l6)(o.ownerWindow, "resize", () => {
              g(a());
            }),
            (0, n.jsx)("div", {
              className: p().QRSection,
              children: u ? (0, n.jsx)(e, { ...r }) : (0, n.jsx)(hs, { ...r }),
            })
          );
        }
        function us(r) {
          const o =
            y.TS.STORE_BASE_URL +
            "join/?guest=1&purchaseType=gift&checkout=1&redir=" +
            encodeURIComponent(r.redirectURL);
          return (0, n.jsx)("div", {
            className: p().GuestLayout,
            children: (0, n.jsx)(Ze, {
              compact: !0,
              children: (0, n.jsxs)("div", {
                className: p().GuestContainer,
                children: [
                  (0, n.jsx)("div", {
                    className: p().GuestText,
                    children: (0, C.oW)(
                      "#Login_Guest",
                      (0, n.jsx)("a", {
                        href: `${o}`,
                        style: { textDecoration: "underline" },
                      }),
                    ),
                  }),
                  (0, n.jsx)("a", {
                    className: p().GuestLink,
                    href: `${o}`,
                    children: (0, n.jsx)("button", {
                      className: p().GuestButton,
                      children: (0, C.we)("#Login_GuestContinue"),
                    }),
                  }),
                ],
              }),
            }),
          });
        }
        function hs(r) {
          return (0, n.jsx)(s, { ...r });
        }
        function e(r) {
          const [o, a] = (0, M.useState)(!1);
          return o
            ? (0, n.jsx)(s, { ...r, bShowHideButton: !0, setShowQR: a })
            : (0, n.jsx)(t, { setShowQR: a });
        }
        function t(r) {
          return (0, n.jsxs)("div", {
            className: p().MessagingContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().MessagingTag,
                children: (0, C.we)("#Login_MobileFlow_New"),
              }),
              (0, n.jsx)("div", {
                className: p().MessagingSubtitle,
                children: (0, n.jsx)("div", {
                  className: p().MessagingSubtitle,
                  children: (0, C.we)("#Login_MobileFlow_SignIn_ScanQR"),
                }),
              }),
              (0, n.jsx)("div", {
                className: p().MessagingButton,
                onClick: () => r.setShowQR(!0),
                children: (0, C.we)("#Login_MobileFlow_ShowMeQR_Button"),
              }),
              (0, n.jsx)("a", {
                href: `${y.TS.STORE_BASE_URL}mobile`,
                className: p().MessagingLink,
                children: (0, C.we)("#Login_JoinBeta_Button"),
              }),
            ],
          });
        }
        function s(r) {
          const {
            onQRStatusChange: o,
            transport: a,
            onComplete: u,
            platform: g,
            refreshInfo: m,
            bShowHideButton: c = !1,
            setShowQR: f,
          } = r;
          return (0, n.jsxs)("div", {
            className: p().QRCodeContainer,
            children: [
              (0, n.jsx)(d, {
                highlight: !0,
                children: (0, C.we)("#Login_SignIn_OrWithQRCode"),
              }),
              (0, n.jsx)("div", {
                className: p().QR,
                children: (0, n.jsx)(Kt, {
                  onStatusChange: o,
                  transport: a,
                  onComplete: u,
                  platform: g,
                  refreshInfo: m,
                }),
              }),
              c &&
                f &&
                (0, n.jsx)("div", {
                  className: p().QRHideLink,
                  onClick: () => f(!1),
                  children: (0, C.we)("#Button_Hide"),
                }),
              (0, n.jsx)("div", {
                className: p().UseMobileAppForQR,
                children: (0, C.oW)(
                  "#Login_UseMobileAppForQR_Inline",
                  (0, n.jsx)(we, {
                    href: `${y.TS.STORE_BASE_URL}mobile`,
                    align: "center",
                  }),
                ),
              }),
            ],
          });
        }
        function i() {
          const r = "bShowLoginQR",
            [o, a] = useState(localStorage?.getItem(r) === "1"),
            u = useCallback((g) => {
              a(g),
                g ? localStorage?.setItem(r, "1") : localStorage?.removeItem(r);
            }, []);
          return [o, u];
        }
        function h(r) {
          const { label: o, error: a, tone: u, autoFocus: g, id: m, ...c } = r,
            f = u ?? (a ? "danger" : void 0);
          return (0, n.jsxs)("div", {
            className: p().TextField,
            children: [
              typeof o == "string"
                ? (0, n.jsx)(d, { inputId: m, children: o })
                : o,
              a && (0, n.jsx)(v, { type: "error", children: a }),
              (0, n.jsx)(S, { autoFocus: g, tone: f, id: m, ...c }),
            ],
          });
        }
        function d(r) {
          const { children: o, inputId: a, highlight: u } = r;
          return (0, n.jsx)("label", {
            className: (0, E.A)(p().FieldLabel, u && p().Highlight),
            htmlFor: a,
            children: o,
          });
        }
        function S(r) {
          const {
            value: o,
            onChange: a,
            type: u = "text",
            tone: g,
            className: m,
            autoFocus: c,
            disabled: f,
            id: T,
          } = r;
          return (0, n.jsx)("input", {
            value: o,
            type: u,
            autoFocus: c,
            onChange: (H) => a(H.target.value),
            className: (0, E.A)(p().TextInput, g === "danger" && p().Danger, m),
            disabled: f,
            id: T,
          });
        }
        function v(r) {
          const { children: o, type: a } = r;
          return (0, n.jsx)("div", {
            className: (0, E.A)(p().FieldHint, a === "error" && p().Error),
            children: o,
          });
        }
        function F(r) {
          const { label: o, onChange: a, value: u } = r;
          let g = () => {
            a && a(!u);
          };
          const m = (0, M.useId)();
          return (0, n.jsxs)("div", {
            className: p().CheckboxField,
            onClick: g,
            onKeyPress: (c) => {
              c.key == " " && (g(), c.preventDefault());
            },
            children: [
              (0, n.jsx)(O, { labelledBy: m, value: u }),
              (0, n.jsx)("label", {
                id: m,
                className: p().CheckboxFieldLabel,
                children: o,
              }),
            ],
          });
        }
        function O(r) {
          const { value: o, labelledBy: a } = r;
          return (0, n.jsx)("div", {
            tabIndex: 0,
            className: p().Checkbox,
            "aria-labelledby": a,
            role: "checkbox",
            "aria-checked": o,
            children:
              o &&
              (0, n.jsx)("div", {
                className: p().Check,
                children: (0, n.jsx)(q.Jlk, { strokeWidth: 35 }),
              }),
          });
        }
        function ce(r) {
          const { refreshLogin: o, ...a } = r;
          return o &&
            "SteamClient" in globalThis &&
            "User" in SteamClient &&
            "StartShutdown" in SteamClient.User
            ? (0, n.jsx)(xe, {})
            : (0, n.jsx)(oe, { ...a });
        }
        function oe(r) {
          return (0, n.jsx)("div", {
            className: p().SignInButtonContainer,
            children: (0, n.jsx)(Ke, {
              ...r,
              children: (0, C.we)("#Login_SignIn"),
            }),
          });
        }
        function xe() {
          const r = () => SteamClient.User.StartShutdown(!0);
          return (0, n.jsxs)("div", {
            className: p().RefreshButtonContainer,
            children: [
              (0, n.jsx)("button", {
                className: p().SubmitButton,
                type: "submit",
                children: (0, C.we)("#Login_SignIn"),
              }),
              (0, n.jsx)("button", {
                className: p().RefreshQuitButton,
                onClick: r,
                children: (0, C.we)("#Login_ExitSteam"),
              }),
            ],
          });
        }
        function Ke(r) {
          return (0, n.jsx)(ue, { type: "submit", ...r });
        }
        function ue(r) {
          const {
              className: o,
              loading: a,
              disabled: u,
              children: g,
              ...m
            } = r,
            c = u || a;
          return (0, n.jsxs)("button", {
            className: (0, E.A)(p().SubmitButton, a && p().Loading, o),
            disabled: c,
            ...m,
            children: [
              g,
              a &&
                (0, n.jsx)("div", {
                  className: p().LoadingContainer,
                  children: (0, n.jsx)(be, { size: "small" }),
                }),
            ],
          });
        }
        function re(r) {
          const o = r.children || "\xA0";
          return (0, n.jsx)("div", { className: p().FormError, children: o });
        }
        function Ye() {
          return (0, n.jsx)(Ze, {
            compact: !0,
            children: (0, n.jsxs)(Re, {
              alignItems: "center",
              className: (0, E.A)(
                p().WaitingForTokenContainer,
                y.TS.IN_STEAMUI && p().Client,
              ),
              children: [
                (0, n.jsx)(L.t, { size: "xlarge" }),
                (0, n.jsx)("div", {
                  className: (0, E.A)(p().Description),
                  children: (0, C.we)(
                    y.TS.IN_STEAMUI
                      ? "#Login_ConnectingToSteam"
                      : "#Login_LoadingAccountInfo",
                  ),
                }),
              ],
            }),
          });
        }
        function be(r) {
          const { size: o } = r;
          return (0, n.jsx)("div", {
            className: (0, E.A)(
              p().LoadingSpinner,
              o == "small" && p().Small,
              (o == "medium" || !o) && p().Medium,
              o == "large" && p().Large,
            ),
          });
        }
        function lt(r) {
          return (0, n.jsx)("div", {
            className: p().OfferOffline,
            children: (0, n.jsx)("button", {
              className: p().OfferOfflineButton,
              onClick: r.onRequestOffline,
              children: (0, C.we)("#Login_GoOffline_Button"),
            }),
          });
        }
        function ct(r) {
          const {
              reset: o,
              failure: a,
              onRequestOffline: u,
              errorReference: g,
              extendedErrorMessage: m,
            } = r,
            { title: c, description: f } = _s(a, m),
            T = y.TS.IN_STEAMUI && a == R.eF.Network;
          return (0, n.jsxs)(Ze, {
            compact: !0,
            children: [
              (0, n.jsxs)(Re, {
                alignItems: "center",
                gap: 12,
                children: [
                  (0, n.jsx)("div", {
                    className: p().FailureTitle,
                    children: c,
                  }),
                  (0, n.jsx)("div", {
                    className: p().FailureDescription,
                    children: f,
                  }),
                  T &&
                    (0, n.jsx)("div", {
                      className: p().FailureDescription,
                      children: (0, C.we)("#Login_GoOffline_Description"),
                    }),
                  (0, n.jsxs)(xt, {
                    className: p().FailureButtons,
                    children: [
                      (0, n.jsx)(ue, {
                        className: p().TryAgainButton,
                        onClick: o,
                        children: (0, C.we)("#Button_Retry"),
                      }),
                      T && u && (0, n.jsx)(lt, { onRequestOffline: u }),
                    ],
                  }),
                ],
              }),
              g &&
                (0, n.jsx)("div", {
                  className: p().MutedErrorReference,
                  children: (0, C.we)("#Login_Error_Reference", g),
                }),
            ],
          });
        }
        function _s(r, o = "") {
          let a = { title: "", description: "" };
          switch (r) {
            case R.eF.None:
              return { title: "", description: "" };
            case R.eF.Expired:
              a = {
                title: (0, C.we)("#Login_Error_Expired_Title"),
                description: (0, C.we)("#Login_Error_Expired_Description"),
              };
              break;
            case R.eF.Network:
              a = {
                title: (0, C.we)("#Login_Error_Network_Title"),
                description: (0, C.we)("#Login_Error_Network_Description"),
              };
              break;
            case R.eF.MoveAuthenticator:
              a = {
                title: (0, C.we)("#Error_Generic"),
                description: (0, C.we)(
                  "#Login_Error_MoveAuthenticator_Description",
                ),
              };
              break;
            case R.eF.RateLimitExceeded:
              a = {
                title: (0, C.we)("#Login_Error_RateLimit_Title"),
                description: (0, C.we)("#Login_Error_RateLimit_Description"),
              };
              break;
            case R.eF.AnonymousLogin:
              a = {
                title: (0, C.we)("#Login_Error_Anonymous_Title"),
                description: (0, C.we)("#Login_Error_Anonymous_Description"),
              };
              break;
            case R.eF.Generic:
            default:
              a = {
                title: (0, C.we)("#Error_Generic"),
                description: (0, C.we)("#Login_Error_Default_Description"),
              };
              break;
          }
          return o && (a.description = o), a;
        }
        function bs(r) {
          const { reset: o } = r;
          return (0, n.jsx)(ct, { reset: o, failure: R.eF.Generic });
        }
        function ws(r) {
          const {
              type: o,
              onSubmitCode: a,
              status: u,
              accountName: g,
              associatedLabel: m,
              onBack: c,
            } = r,
            [f, T] = (0, M.useState)([]),
            [H, k] = (0, M.useState)(!1),
            [G, z] = (0, M.useState)(!1),
            [U, he] = (0, M.useState)(!1),
            [Y, de] = (0, M.useState)(0),
            D = o === "mobile",
            X = f.join(""),
            x = mt(X, U),
            I = (Tt) => {
              z(!0),
                a(Tt).then(() => {
                  k(!1), z(!1);
                });
            },
            V = (Tt) => {
              H || k(!0), T(Tt);
              const vs = Tt.join("");
              mt(vs, U) && I(vs);
            },
            Z = () => {
              x && I(X);
            },
            pe = () => {
              he(!U), T([]), a(""), de(Y + 1);
            },
            je = !H && (u === Ve || u === He);
          let Te, Rt;
          return (
            U
              ? o === "mobile"
                ? ((Rt = (0, n.jsx)(gs, {})), (Te = "#Login_UseMobileCode"))
                : ((Rt = (0, n.jsx)(gs, {})), (Te = "#Login_UseEmailCode"))
              : ((Rt =
                  o === "mobile"
                    ? (0, n.jsx)(ys, {})
                    : (0, n.jsx)(xs, { emailAddress: m })),
                (Te = "#Login_UseBackupCode")),
            (0, n.jsx)(Ze, {
              title: (0, n.jsx)(ds, {}),
              compact: !0,
              children: (0, n.jsx)(Ss, {
                onSubmit: Z,
                children: (0, n.jsxs)(Re, {
                  alignItems: "center",
                  gap: 14,
                  children: [
                    (0, n.jsx)(Cs, { type: o, accountName: g }),
                    (0, n.jsxs)("div", {
                      className: p().ConfirmationEntryContainer,
                      children: [
                        (0, n.jsxs)(Re, {
                          alignItems: "center",
                          gap: 2,
                          children: [
                            je &&
                              (0, n.jsx)(re, {
                                children: (0, C.we)(
                                  "#Login_IncorrectSteamGuard",
                                ),
                              }),
                            (0, n.jsx)(
                              As,
                              {
                                value: f,
                                onChange: V,
                                tone: je ? "danger" : void 0,
                                loading: G,
                                backupCode: U,
                              },
                              Y,
                            ),
                          ],
                        }),
                        Rt,
                      ],
                    }),
                    D &&
                      (0, n.jsx)(we, {
                        onClick: pe,
                        align: "center",
                        children: (0, C.we)(Te),
                      }),
                    (0, n.jsx)(ps, { type: o, onCodeHelp: r.onCodeHelp }),
                  ],
                }),
              }),
            })
          );
        }
        function ps(r) {
          if ((0, Q.q)()) return null;
          let o, a;
          return (
            r.type === "mobile"
              ? ((o = `${y.TS.HELP_BASE_URL}wizard/HelpWithLoginInfo?lost=8&issueid=402`),
                (a = (0, C.we)("#Login_Help_AccessMobileApp")))
              : ((o = `${y.TS.HELP_BASE_URL}wizard/HelpWithSteamGuardCode`),
                (a = (0, C.we)("#Login_Help_AccessEmail"))),
            r.onCodeHelp
              ? (0, n.jsx)(we, {
                  onClick: () => r.onCodeHelp(o),
                  align: "center",
                  children: a,
                })
              : (0, n.jsx)(we, { href: o, align: "center", children: a })
          );
        }
        function gs() {
          return (0, n.jsx)(xt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterBackupCodeContainer,
            children: (0, n.jsxs)(Re, {
              children: [
                (0, n.jsx)("div", {
                  className: p().EnterCodeFromMobile,
                  children: (0, C.we)("#Login_EnterBackupCode"),
                }),
                (0, n.jsx)("div", {
                  className: p().Label,
                  children: (0, C.we)("#Login_EnterBackupCodeDescription"),
                }),
              ],
            }),
          });
        }
        function ys() {
          return (0, n.jsxs)(xt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromMobileContainer,
            children: [
              (0, n.jsx)("div", {
                className: p().EnterCodeFromMobile,
                children: (0, C.we)("#Login_EnterMobileCode"),
              }),
              (0, n.jsx)(Ts, { className: p().AwaitingMobileConfIcon }),
            ],
          });
        }
        function xs(r) {
          return (0, n.jsxs)(xt, {
            justifyContent: "space-evenly",
            alignItems: "center",
            className: p().EnterCodeFromEmailContainer,
            children: [
              (0, n.jsx)(Ms, {
                align: "center",
                spacing: 6,
                children: (0, n.jsx)("div", {
                  className: p().EnterCodeFromEmail,
                  children: (0, C.PP)(
                    "#Login_EnterEmailCode",
                    (0, n.jsx)("span", {
                      className: p().EnterCodeEmailAddress,
                      children: r.emailAddress,
                    }),
                  ),
                }),
              }),
              (0, n.jsx)(Es, { className: p().AwaitingEmailConfIcon }),
            ],
          });
        }
        function Cs(r) {
          const { accountName: o, type: a } = r,
            u =
              a === "mobile"
                ? (0, C.we)("#Login_MobileProtectingAccount")
                : (0, C.we)("#Login_EmailProtectingAccount"),
            g = _e();
          return (0, n.jsxs)("div", {
            className: p().ProtectingAccount,
            children: [
              (0, n.jsx)("div", {
                className: p().Label,
                children: (0, C.PP)(
                  "#Login_ActiveAccountName",
                  (0, n.jsx)("span", {
                    className: p().AccountName,
                    children: o,
                  }),
                ),
              }),
              !g &&
                (0, n.jsx)("div", { className: p().Description, children: u }),
            ],
          });
        }
        function Rs() {
          return (0, n.jsx)(Re, {
            alignItems: "center",
            children: (0, n.jsxs)("div", {
              className: p().ConfirmationContainer,
              children: [
                (0, n.jsx)("img", { src: (0, $t.YJ)(Ce) }),
                (0, n.jsx)("div", {
                  className: p().AwaitingMobileConfText,
                  children: (0, C.oW)("#Login_AwaitingMobileConfirmation"),
                }),
              ],
            }),
          });
        }
        function Ts(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 33 49",
            fill: "currentColor",
            className: r.className,
            children: [
              (0, n.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28 47.1106C29.1046 47.1106 30 46.2151 30 45.1106L30 3.72705C30 2.62248 29.1046 1.72705 28 1.72705L5 1.72705C3.89544 1.72705 3 2.62248 3 3.72705L3 45.1106C3 46.2151 3.89543 47.1106 5 47.1106L28 47.1106ZM5.68119 5.82741L27.3188 5.82741L27.3188 42.7772H5.68119L5.68119 5.82741ZM20.9999 44.944C20.9999 45.3429 20.6766 45.6662 20.2777 45.6662L12.7221 45.6662C12.3233 45.6662 11.9999 45.3429 11.9999 44.944C11.9999 44.5451 12.3233 44.2218 12.7221 44.2218H20.2777C20.6766 44.2218 20.9999 44.5451 20.9999 44.944ZM17.2778 4.44406C17.6767 4.44406 18 4.12071 18 3.72184C18 3.32296 17.6767 2.99962 17.2778 2.99962L15.7222 2.99962C15.3233 2.99962 15 3.32296 15 3.72184C15 4.12071 15.3233 4.44406 15.7222 4.44406L17.2778 4.44406Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M22.2456 22.4164C22.2456 21.6666 22.8127 21.0002 23.6228 21.0002C24.3519 21.0002 25 21.6666 25 22.4164C25 23.1661 24.3519 23.8325 23.6228 23.8325C22.8937 23.8325 22.2456 23.1661 22.2456 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M18.6812 22.4164C18.6812 21.6666 19.2483 21.0002 20.0584 21.0002C20.8685 21.0002 21.5166 21.6666 21.4355 22.4164C21.4355 23.1661 20.8685 23.8325 20.0584 23.8325C19.3293 23.8325 18.6812 23.1661 18.6812 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M15.1977 22.4164C15.1977 21.6666 15.7648 21.0002 16.5749 21.0002C17.304 21.0002 17.9521 21.6666 17.9521 22.4164C17.9521 23.1661 17.385 23.8325 16.5749 23.8325C15.8458 23.8325 15.1977 23.1661 15.1977 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M11.7143 22.4164C11.7143 21.6666 12.2814 21.0002 13.0915 21.0002C13.8206 21.0002 14.4686 21.6666 14.4686 22.4164C14.4686 23.1661 13.9016 23.8325 13.0915 23.8325C12.3624 23.8325 11.7143 23.1661 11.7143 22.4164Z",
              }),
              (0, n.jsx)("path", {
                fill: "currentColor",
                d: "M8.14983 22.4164C8.14983 21.6666 8.7169 21.0002 9.527 21.0002C10.3371 21.0002 10.9852 21.6666 10.9042 22.4164C10.9042 23.1661 10.3371 23.8325 9.527 23.8325C8.79791 23.8325 8.14983 23.1661 8.14983 22.4164Z",
              }),
            ],
          });
        }
        function Es(r) {
          return (0, n.jsx)("svg", {
            viewBox: "0 0 58 56",
            fill: "none",
            className: r.className,
            children: (0, n.jsx)("path", {
              d: "M57.9352 24.5887C57.8463 24.233 57.8463 23.8774 57.6684 23.5217C57.4017 22.8993 57.046 22.4547 56.5125 22.0101L49.577 16.4083V10.9844C49.577 8.85041 47.8876 7.16098 45.7536 7.16098H38.1956L31.5269 1.73706C30.1042 0.581137 28.0591 0.581137 26.6364 1.73706L19.9677 7.16098H12.4097C10.2757 7.16098 8.58631 8.93932 8.58631 10.9844V16.4083L1.56188 22.0101C1.02838 22.3658 0.672713 22.8993 0.405962 23.5217V23.6106C0.228128 24.1441 0.050293 24.5887 0.050293 25.1222V52.1529C0.050293 53.2199 0.494878 54.1091 1.1173 54.8204C1.82863 55.5318 2.80672 55.8874 3.7848 55.8874H54.0228C55.0898 55.8874 55.979 55.4428 56.6903 54.8204C57.4017 54.1091 57.7573 53.131 57.7573 52.1529V25.1222C57.9352 24.8554 57.9352 24.7665 57.9352 24.5887ZM49.577 19.7872L54.7342 23.9663L49.577 28.9456V19.7872ZM28.148 3.60431C28.4148 3.42648 28.6815 3.24864 28.9483 3.24864C29.3039 3.24864 29.5707 3.33756 29.7485 3.60431L34.0165 7.07207H23.9689L28.148 3.60431ZM10.9871 10.9844C10.9871 10.2731 11.5206 9.73958 12.2319 9.73958H45.6646C46.376 9.73958 46.9095 10.362 46.9095 10.9844V31.4353L46.8206 31.5242L40.2407 37.9262H17.6558L11.076 31.5242L10.9871 31.4353V10.9844ZM8.40848 19.7872V28.9456L3.34022 23.9663L8.40848 19.7872ZM2.62888 51.6194V26.9005L15.2551 39.26L2.62888 51.6194ZM4.49614 53.3088L17.6558 40.5048H40.2407L53.4004 53.3088H4.49614ZM55.3566 51.6194L42.6415 39.1711L55.2677 26.8116V51.6194H55.3566ZM29.0372 35.3476C30.5488 35.3476 31.9715 35.0809 33.3941 34.5474C34.0165 34.2806 34.3722 33.4804 34.1055 32.858C33.8387 32.2355 33.0385 31.8799 32.416 32.1466C31.349 32.5912 30.1931 32.769 29.0372 32.769C27.3478 32.769 25.7473 32.3245 24.4135 31.5242C21.746 29.9237 20.0566 27.0784 20.0566 23.7884C20.0566 18.8091 24.0579 14.8078 29.0372 14.8078C34.0165 14.8078 38.0178 18.8091 38.0178 23.7884V24.4109C38.0178 25.4779 37.2175 26.367 36.0616 26.367C34.9946 26.367 34.1055 25.4779 34.1055 24.4109V23.7884C34.1055 20.9431 31.7936 18.6313 28.9483 18.6313C26.1029 18.6313 23.7911 20.9431 23.7911 23.7884C23.7911 26.6338 26.1029 28.9456 28.9483 28.9456C30.3709 28.9456 31.7047 28.3232 32.5939 27.434C33.3941 28.4121 34.639 28.9456 35.9727 28.9456C38.4624 28.9456 40.5075 26.9894 40.5075 24.4109V23.7884C40.5075 17.3864 35.2614 12.2292 28.9483 12.2292C22.6352 12.2292 17.3891 17.4753 17.3891 23.7884C17.3891 26.7227 18.545 29.4791 20.3233 31.5242C22.5463 33.925 25.5694 35.3476 29.0372 35.3476ZM29.0372 26.367C27.6145 26.367 26.4586 25.2111 26.4586 23.7884C26.4586 22.3658 27.6145 21.2098 29.0372 21.2098C30.4599 21.2098 31.6158 22.3658 31.6158 23.7884C31.5269 25.2111 30.371 26.367 29.0372 26.367Z",
              fill: "#1A99FF",
            }),
          });
        }
        function Vs(r) {
          const [o, a] = useSvgId();
          return jsxs("svg", {
            className: r.className,
            width: "34",
            height: "52",
            viewBox: "0 0 34 52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.993001 3.2C0.993001 2.0799 0.993001 1.51984 1.21099 1.09202C1.40273 0.715695 1.7087 0.409734 2.08502 0.217987C2.51284 0 3.0729 0 4.193 0H29.793C30.9131 0 31.4732 0 31.901 0.217987C32.2773 0.409734 32.5833 0.715695 32.775 1.09202C32.993 1.51984 32.993 2.0799 32.993 3.2V48.8C32.993 49.9201 32.993 50.4802 32.775 50.908C32.5833 51.2843 32.2773 51.5903 31.901 51.782C31.4732 52 30.9131 52 29.793 52H4.193C3.0729 52 2.51284 52 2.08502 51.782C1.7087 51.5903 1.40273 51.2843 1.21099 50.908C0.993001 50.4802 0.993001 49.9201 0.993001 48.8V3.2ZM33 19.2967C33 19.1328 33.1328 19 33.2967 19C33.4606 19 33.5934 19.1328 33.5934 19.2967V25.8924C33.5934 26.0563 33.4606 26.1891 33.2967 26.1891C33.1328 26.1891 33 26.0563 33 25.8924V19.2967ZM0.690255 12.8531C0.854118 12.8531 0.986956 12.986 0.986956 13.1498V14.735C0.986956 14.8988 0.854118 15.0317 0.690255 15.0317C0.526392 15.0317 0.393555 14.8988 0.393555 14.735V13.1498C0.393555 12.986 0.526392 12.8531 0.690255 12.8531ZM0.986956 23.8975C0.986956 23.7337 0.854118 23.6008 0.690255 23.6008C0.526392 23.6008 0.393555 23.7337 0.393555 23.8975V27.8064C0.393555 27.9703 0.526392 28.1031 0.690255 28.1031C0.854118 28.1031 0.986956 27.9703 0.986956 27.8064V23.8975ZM0.690255 17.3557C0.854118 17.3557 0.986956 17.4886 0.986956 17.6524V21.5613C0.986956 21.7252 0.854118 21.858 0.690255 21.858C0.526392 21.858 0.393555 21.7252 0.393555 21.5613V17.6524C0.393555 17.4886 0.526392 17.3557 0.690255 17.3557Z",
                fill: r.phoneOutlineColor ?? "currentColor",
              }),
              jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.10899 2.54601C3 2.75992 3 3.03995 3 3.6V48.4C3 48.9601 3 49.2401 3.10899 49.454C3.20487 49.6422 3.35785 49.7951 3.54601 49.891C3.75992 50 4.03995 50 4.6 50H29.4C29.9601 50 30.2401 50 30.454 49.891C30.6422 49.7951 30.7951 49.6422 30.891 49.454C31 49.2401 31 48.9601 31 48.4V3.6C31 3.03995 31 2.75992 30.891 2.54601C30.7951 2.35785 30.6422 2.20487 30.454 2.10899C30.2401 2 29.9601 2 29.4 2H23C22.9469 2 22.8965 2.0232 22.8562 2.06277C22.7957 2.12213 22.7857 2.22585 22.7855 2.32129C22.7839 3.09871 22.7694 3.51909 22.6437 3.85908C22.4867 4.28385 22.2109 4.63059 21.8671 4.82458C21.5561 5 21.1565 5 20.3571 5H13.6429C12.8435 5 12.4439 5 12.1329 4.82458C11.7891 4.63059 11.5133 4.28385 11.3563 3.85908C11.2306 3.51909 11.2161 3.09871 11.2145 2.32129C11.2143 2.22585 11.2043 2.12213 11.1438 2.06277C11.1035 2.0232 11.0531 2 11 2H4.6C4.03995 2 3.75992 2 3.54601 2.10899C3.35785 2.20487 3.20487 2.35785 3.10899 2.54601Z",
                fill: r.backgroundColor ?? "currentColor",
              }),
              jsx("g", {
                clipPath: a,
                children: jsx("path", {
                  d: "M24.3333 17.6667H22.5V19.5H24.3333V17.6667ZM26.1667 15.8333V21.3333H20.6667V15.8333H26.1667V15.8333ZM27.0833 26.8333H25.25C24.3333 26.8333 24.3333 26.8333 24.3333 27.75V31.4167C24.3333 32.3335 24.3333 32.3335 25.25 32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167V27.75C28 26.8333 28 26.8333 27.0833 26.8333ZM21.5833 26.8333C20.6665 26.8333 20.6665 26.8333 20.6665 27.75C20.6665 28.6667 20.6665 28.6667 21.5833 28.6667C22.5 28.6667 22.5 28.6667 22.5 27.75C22.5 26.8333 22.5 26.8333 21.5833 26.8333ZM27.0833 34.1667C26.1665 34.1667 26.1665 34.1667 26.1665 35.0835C26.1665 36.0002 26.1665 36.0002 27.0833 36.0002C28 36 28 36 28 35.0833C28 34.1667 28 34.1667 27.0833 34.1667ZM16.0833 23.1667C15.1665 23.1667 15.1665 23.1667 15.1665 24.0835C15.1665 25.0002 15.1665 25.0002 16.0833 25.0002C17 25.0002 17 25 17 24.0833C17 23.1665 17 23.1667 16.0833 23.1667ZM11.5 17.6667H9.66674V19.5H11.5V17.6667ZM13.3333 15.8333V21.3333H7.83326V15.8333H13.3333V15.8333ZM14.25 14H6.91674C6 14 6 14 6 14.9167V24.0835C6 25 6 25 6.91674 25C7.83348 25 7.83348 25 7.83348 24.0833V23.1665H14.25C15.1667 23.1665 15.1667 23.1665 15.1667 22.2498V19.5H16.0835C17 19.5 17 19.5 17 18.5833C17 17.6665 17 17.6665 16.0833 17.6665H15.1665V14.9165C15.1667 14 15.1667 14 14.25 14ZM27.0833 30.5H23.4167C22.5 30.5 22.5 30.5 22.5 31.4167V34.1667H21.5833C20.6665 34.1667 20.6665 34.1667 20.6665 35.0835C20.6665 36.0002 20.6665 36.0002 21.5833 36.0002H23.4165C24.3333 36.0002 24.3333 36.0002 24.3333 35.0835V32.3335H27.0833C28 32.3335 28 32.3335 28 31.4167C28 30.5 28 30.5 27.0833 30.5ZM19.75 30.5C18.8333 30.5 18.8333 30.5 18.8333 31.4167C18.8333 32.3335 18.8333 32.3335 19.75 32.3335C20.6667 32.3335 20.6667 32.3335 20.6667 31.4167C20.6667 30.5 20.6667 30.5 19.75 30.5ZM10.5833 25C9.66652 25 9.66652 25 9.66652 25.9167V26.8335H6.91652C6 26.8333 6 26.8333 6 27.75V35.0833C6 36 6 36 6.91674 36H14.25C15.1667 36 15.1667 36 15.1667 35.0833V34.1665H17V35.0833C17 36 17 36 17.9167 36C18.8335 36 18.8335 36 18.8335 35.0833V33.25C18.8335 32.3333 18.8335 32.3333 17.9167 32.3333H15.1667V30.5H17.9167C18.8335 30.5 18.8335 30.5 18.8335 29.5833C18.8335 28.6665 18.8335 28.6665 17.9167 28.6665H15.1667V27.75C15.1667 26.8333 15.1667 26.8333 14.25 26.8333H11.5V25.9165C11.5 25 11.5 25 10.5833 25ZM13.3333 28.6667V34.1667H7.83326V28.6667H13.3333ZM11.5 30.5H9.66674V32.3333H11.5V30.5ZM27.0833 14H17.9167C17 14 17 14 17 14.9167C17 15.8335 17 15.8335 17.9167 15.8335H18.8335V22.25C18.8335 23.1667 18.8335 23.1667 19.7502 23.1667H20.667V24.0835C20.667 25.0002 20.667 25.0002 21.5837 25.0002C22.5 25 22.5 25 22.5 24.0833V23.1665H24.3333V27.75C24.3333 28.6667 24.3333 28.6667 25.25 28.6667C26.1667 28.6667 26.1667 28.6667 26.1667 27.75V23.1667H27.0835C28.0002 23.1667 28.0002 23.1667 28.0002 22.25V14.9167C28 14 28 14 27.0833 14Z",
                  fill: r.qrCodeColor ?? "currentColor",
                }),
              }),
              jsx("defs", {
                children: jsx("clipPath", {
                  id: o,
                  children: jsx("rect", {
                    width: "22",
                    height: "22",
                    fill: "currentColor",
                    transform: "translate(6 14)",
                  }),
                }),
              }),
            ],
          });
        }
        function Fs(r) {
          return jsxs("svg", {
            className: r.className,
            viewBox: "0 0 25 25",
            fill: "none",
            children: [
              jsx("path", {
                d: "M5.77051 0H0V5.76795H5.77051V0ZM4.83807 4.83871H0.929121V0.929245H4.83807V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 1.69238H1.63916V4.07523H4.02169V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 0H7.69141V1.92155H9.6127V0Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 9.61475H0V11.5396V13.4612H1.92129V11.5396V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M5.77031 9.61475H3.8457V11.5363H5.77031V9.61475Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M3.84268 7.69238H1.92139V9.61393H3.84268V7.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M21.1535 9.61436V7.69282H19.2289H17.3076V9.61436H19.2289V11.5392H21.1535V13.4608H19.2289H17.3076V11.5392V9.61436H15.383V7.69282H17.3076V5.76795V3.84641H15.383V1.92155H17.3076V0H15.383H13.4617H11.5371V1.92155H13.4617V3.84641V5.76795H11.5371V7.69282H13.4617V9.61436V11.5392H11.5371V13.4608H13.4617V15.3856V17.3072H11.5371V19.232H13.4617V21.1536V23.0785H11.5371V25H13.4617H15.383H17.3076V23.0785H15.383V21.1536H17.3076V19.232V17.3072H15.383V15.3856H17.3076H19.2289V17.3072H21.1535V15.3856H23.0748V17.3072H24.9994V15.3856V13.4608H23.0748V11.5392H24.9994V9.61436H23.0748H21.1535Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 0V5.76795H25.0005V0H19.23ZM24.068 4.83871H20.1591V0.929245H24.068V4.83871Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 1.69238H20.8716V4.07523H23.2541V1.69238Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M0 24.9999H5.77051V19.2319H0V24.9999ZM0.929121 20.1612H4.83807V24.0706H0.929121V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M4.02169 20.9248H1.63916V23.3076H4.02169V20.9248Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M11.5378 19.2319H9.61319V17.307H11.5378V15.3855V13.4606H9.61319V11.5391H11.5378V9.6142H9.61319V7.69266V5.7678H11.5378V3.84625V1.92139H9.61319V3.84625H7.6919V5.7678V7.69266H5.7706V9.6142H7.6919V11.5391H5.7706V13.4606H7.6919V15.3855H5.7706V13.4606H3.846H1.92139V15.3855H3.846V17.307H5.7706H7.6919V19.2319V21.1534H9.61319V23.0783H11.5378V21.1534V19.2319Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M9.6127 23.0786H7.69141V25.0002H9.6127V23.0786Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M1.92129 15.3853H0V17.3068H1.92129V15.3853Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M19.23 24.9999H25.0005V19.2319H19.23V24.9999ZM20.1591 20.1612H24.068V24.0706H20.1591V20.1612Z",
                fill: "currentColor",
              }),
              jsx("path", {
                d: "M23.2541 20.9248H20.8716V23.3076H23.2541V20.9248Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function Ls(r) {
          const { type: o, accountName: a, onUseCodeOverride: u } = r,
            g = _e(),
            m = (0, n.jsx)(ps, { type: "mobile", onCodeHelp: r.onCodeHelp }),
            c = g
              ? (0, n.jsx)("div", {
                  style: { paddingBottom: "20px" },
                  children: (0, n.jsx)(we, {
                    align: "center",
                    onClick: u,
                    children: (0, C.we)("#Login_EnterCodeInstead"),
                  }),
                })
              : (0, n.jsx)("div", {
                  className: p().EnterCodeInsteadLink,
                  children: (0, n.jsx)(we, {
                    align: "center",
                    onClick: u,
                    children: (0, C.we)("#Login_EnterCodeInstead"),
                  }),
                });
          return (0, n.jsx)(Ze, {
            title: (0, n.jsx)(ds, {}),
            compact: !0,
            children: (0, n.jsxs)(Re, {
              gap: y.TS.IN_STEAMUI ? 24 : 40,
              children: [
                (0, n.jsx)(Cs, { type: o, accountName: a }),
                (0, n.jsx)(Rs, {}),
                (0, n.jsxs)("div", {
                  className: p().LinkContainer,
                  children: [c, m],
                }),
              ],
            }),
          });
        }
        function we(r) {
          const { children: o, align: a, inline: u } = r,
            g = (0, E.A)(p().TextLink, a === "center" && p().TextAlignCenter);
          if ("href" in r) {
            const m = y.TS.IN_STEAMUI
              ? `steam://openurl_external/${r.href}`
              : r.href;
            return (0, n.jsx)("a", { className: g, href: m, children: o });
          } else {
            const m = u ? "span" : "div";
            return (0, n.jsx)(m, {
              className: g,
              onClick: r.onClick,
              children: o,
            });
          }
        }
        function Ss(r) {
          const { onSubmit: o, children: a, className: u } = r,
            g = (m) => (m.preventDefault(), o(), !1);
          return (0, n.jsx)("form", { onSubmit: g, className: u, children: a });
        }
        function Ps(r) {
          const { align: o, ...a } = r;
          return jsx("div", {
            className: classnames(styles.Text, o === "center" && styles.Center),
            ...a,
          });
        }
        function Re(r) {
          const {
              alignItems: o,
              justifyContent: a,
              gap: u,
              className: g,
              ariaLabelledBy: m,
              children: c,
            } = r,
            f = (0, E.A)(
              p().FlexCol,
              o === "center" && p().AlignItemsCenter,
              a === "center" && p().JustifyContentCenter,
              g,
            ),
            T = u ? { gap: typeof u == "number" ? `${u}px` : u } : void 0;
          return (0, n.jsx)("section", {
            className: f,
            style: T,
            "aria-labelledby": m,
            children: c,
          });
        }
        function xt(r) {
          const {
              children: o,
              justifyContent: a,
              alignItems: u,
              className: g,
            } = r,
            m = {
              display: "flex",
              flexDirection: "row",
              justifyContent: a,
              alignItems: u,
            };
          return (0, n.jsx)("div", { style: m, className: g, children: o });
        }
        function As(r) {
          const { onChange: o, backupCode: a = !1, ...u } = r,
            g = (m) => {
              m = m.map((f) => f.toUpperCase());
              const c = m.join("").trim();
              ft(c, a) && o(m);
            };
          return (0, n.jsx)(W, {
            length: tt(a),
            backupCode: a,
            onChange: g,
            autoFocus: !0,
            ...u,
            allowCharacter: (m) => /\w/g.test(m),
          });
        }
        function Ms(r) {
          const { children: o, spacing: a = 0, align: u } = r;
          return (0, n.jsx)(Re, {
            alignItems: u,
            children: M.Children.map(o, (g, m) =>
              g
                ? (0, n.jsx)("div", {
                    style: m > 0 ? { paddingTop: `${a}px` } : void 0,
                    children: g,
                  })
                : null,
            )?.filter(Boolean),
          });
        }
        function Ze(r) {
          const { title: o, titleId: a, children: u, compact: g } = r,
            m = _e(),
            c = (0, M.useId)();
          return (0, n.jsxs)(Re, {
            gap: y.TS.IN_STEAMUI ? 0 : 32,
            className: (0, E.A)(
              p().StandardLayout,
              m && p().Embedded,
              g && p().Compact,
              y.TS.IN_STEAMUI && "IN_CLIENT",
            ),
            ariaLabelledBy: a ?? c,
            children: [
              typeof o == "string"
                ? (0, n.jsx)("div", {
                    className: p().PrimaryHeader,
                    id: a ?? c,
                    children: o,
                  })
                : o,
              (0, n.jsx)("div", { className: p().FormContainer, children: u }),
            ],
          });
        }
        function ds(r) {
          const {
            realm: o = y.TS.EREALM,
            launcherType: a = y.TS.IN_STEAMUI ? y.TS.LAUNCHER_TYPE : void 0,
            className: u = p().HeaderLogo,
          } = r;
          return a === ge.A2g
            ? (0, n.jsx)("div", { className: u })
            : (0, n.jsxs)("div", {
                className: p().LogoContainer,
                children: [
                  (0, n.jsx)(Is, { onBack: r.onBack }),
                  o !== De.TU.k_ESteamRealmChina
                    ? (0, n.jsx)(js, { className: u })
                    : (0, n.jsx)(Ds, { className: u }),
                  " ",
                ],
              });
        }
        function Is(r) {
          return r.onBack
            ? (0, n.jsx)("div", {
                className: p().BackArrowContainer,
                onClick: r.onBack,
                children: (0, n.jsx)(q.Q38, { className: p().BackArrow }),
              })
            : null;
        }
        function js(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 153 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: r.className,
            children: [
              (0, n.jsx)("path", {
                d: "M22.9891 0C10.8429 0 0.93833 9.30396 0 21.1548L12.3547 26.2486C13.3973 25.5209 14.6484 25.1051 16.0037 25.1051C16.108 25.1051 16.2644 25.1051 16.3687 25.1051L21.8944 17.2045C21.8944 17.1525 21.8944 17.1525 21.8944 17.1006C21.8944 12.3186 25.8041 8.42034 30.6 8.42034C35.3959 8.42034 39.3056 12.3186 39.3056 17.1006C39.3056 21.8825 35.3959 25.7808 30.6 25.7808C30.5479 25.7808 30.4436 25.7808 30.3915 25.7808L22.5721 31.3424C22.5721 31.4463 22.5721 31.5503 22.5721 31.6542C22.5721 35.2407 19.6528 38.1514 16.0559 38.1514C12.876 38.1514 10.2695 35.9164 9.64395 32.9017L0.781942 29.2633C3.5448 38.9311 12.4068 46 22.9891 46C35.7087 46 46.0303 35.7085 46.0303 23.026C46.0303 10.2915 35.7087 0 22.9891 0Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M14.44 34.8766L11.625 33.7331C12.1463 34.7726 12.9804 35.6562 14.1272 36.124C16.6294 37.1636 19.4966 35.9681 20.5391 33.4732C21.0604 32.2777 21.0604 30.9263 20.5391 29.7308C20.0178 28.5353 19.0795 27.5997 17.8805 27.08C16.6816 26.5602 15.3783 26.6122 14.2836 27.028L17.2029 28.2235C19.0274 29.0031 19.9136 31.0822 19.1316 32.9014C18.4018 34.7726 16.2645 35.6562 14.44 34.8766Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M36.3857 17.0488C36.3857 13.8782 33.7793 11.2793 30.5994 11.2793C27.4195 11.2793 24.813 13.8782 24.813 17.0488C24.813 20.2194 27.4195 22.8703 30.5994 22.8703C33.7793 22.8703 36.3857 20.2714 36.3857 17.0488ZM26.2205 17.0488C26.2205 14.6578 28.1493 12.6827 30.5994 12.6827C32.9973 12.6827 34.9782 14.6058 34.9782 17.0488C34.9782 19.4397 33.0495 21.3629 30.5994 21.3629C28.2014 21.4149 26.2205 19.4397 26.2205 17.0488Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M70.6879 15.7489L69.1241 18.4517C67.9251 17.6201 66.3091 17.1003 64.9016 17.1003C63.2856 17.1003 62.2951 17.776 62.2951 18.9715C62.2951 20.4269 64.0675 20.7387 66.674 21.6743C69.489 22.6619 71.105 23.8574 71.105 26.4043C71.105 29.9387 68.3421 31.9139 64.3282 31.9139C62.3994 31.9139 60.0014 31.3941 58.229 30.3026L59.3759 27.2879C60.8355 28.0675 62.6079 28.5353 64.1718 28.5353C66.3091 28.5353 67.2995 27.7557 67.2995 26.6122C67.2995 25.3127 65.7878 24.8969 63.2856 24.0653C60.4706 23.1297 58.5418 21.8822 58.5418 19.0235C58.5418 15.8009 61.1483 13.9297 64.8494 13.9297C67.4038 14.0336 69.489 14.8653 70.6879 15.7489Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M82.7305 17.4643V31.6542H79.0815V17.4643H73.8164V14.3457H87.9956V17.4643H82.7305Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M95.6574 17.4124V21.3107H102.643V24.4293H95.6574V28.4836H103.737V31.6022H92.0083V14.3457H103.737V17.4643H95.6574V17.4124Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M111.87 28.2756L110.723 31.6542H106.917L113.434 14.3457H117.083L123.755 31.6542H119.793L118.594 28.2756H111.87ZM115.258 18.4519L112.912 25.3649H117.708L115.258 18.4519Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M142.47 21.0508L137.726 31.1864H135.693L131.001 21.1547V31.7062H127.509V14.3457H131.001L136.84 26.8723L142.47 14.3457H145.963V31.6542H142.47V21.0508Z",
                fill: "#E0E1E6",
              }),
              (0, n.jsx)("path", {
                d: "M153 16.5288C153 18.0361 151.905 18.9197 150.602 18.9197C149.299 18.9197 148.204 17.9841 148.204 16.5288C148.204 15.0214 149.351 14.1378 150.602 14.1378C151.853 14.0858 153 15.0214 153 16.5288ZM148.569 16.5288C148.569 17.7762 149.455 18.5559 150.55 18.5559C151.645 18.5559 152.531 17.7762 152.531 16.5288C152.531 15.2813 151.645 14.5016 150.55 14.5016C149.455 14.5016 148.569 15.2813 148.569 16.5288ZM150.602 15.2813C151.228 15.2813 151.436 15.5932 151.436 15.957C151.436 16.2689 151.228 16.4768 151.019 16.6327L151.593 17.6723H151.123L150.654 16.7367H150.133V17.6723H149.768V15.2813H150.602ZM150.185 16.3728H150.602C150.863 16.3728 151.019 16.2169 151.019 16.009C151.019 15.8011 150.915 15.6451 150.602 15.6451H150.185V16.3728Z",
                fill: "#E0E1E6",
              }),
            ],
          });
        }
        function Ds(r) {
          return (0, n.jsxs)("svg", {
            viewBox: "0 0 232.73 46.07",
            xmlns: "http://www.w3.org/2000/svg",
            className: r.className,
            fill: "#E0E1E6",
            children: [
              (0, n.jsxs)("g", {
                stroke: "null",
                id: "svg_2",
                children: [
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_3",
                    d: "m21.73862,4.25158c-10.07896,0 -18.33997,7.77507 -19.12529,17.65445l10.28722,4.25199c0.87209,-0.59441 1.92641,-0.94585 3.05883,-0.94585c0.09979,0 0.20392,0.00434 0.30371,0.00868l4.57306,-6.62964c0,-0.03037 0,-0.06074 0,-0.09545c0,-3.99167 3.2454,-7.23707 7.23707,-7.23707c3.99167,0 7.23707,3.2454 7.23707,7.23707c0,3.99167 -3.2454,7.23707 -7.23707,7.23707c-0.0564,0 -0.10847,0 -0.16487,-0.00434l-6.52551,4.65984c0.00434,0.08678 0.00868,0.16921 0.00868,0.25599c0,2.99809 -2.43839,5.43214 -5.43214,5.43214c-2.62929,0 -4.82905,-1.87869 -5.32801,-4.36046l-7.35855,-3.04148c2.27785,8.05709 9.67979,13.96216 18.4658,13.96216c10.59961,0 19.19471,-8.5951 19.19471,-19.19471c0,-10.59527 -8.5951,-19.19037 -19.19471,-19.19037",
                  }),
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_4",
                    d: "m14.64039,33.37339l-2.35595,-0.97622c0.41652,0.86775 1.1411,1.59667 2.09996,2.00017c2.07393,0.86341 4.46459,-0.12149 5.33235,-2.19542c0.41652,-1.00226 0.42086,-2.11298 0.00434,-3.11957c-0.41652,-1.00659 -1.1975,-1.79191 -2.19976,-2.21277c-0.99792,-0.41652 -2.06525,-0.39917 -3.00677,-0.04773l2.43405,1.00659c1.53159,0.6378 2.25182,2.395 1.61836,3.92659c-0.6378,1.53592 -2.395,2.25616 -3.92659,1.61836",
                  }),
                  (0, n.jsx)("path", {
                    stroke: "null",
                    id: "svg_5",
                    d: "m32.89793,18.49576c0,-2.65966 -2.16505,-4.82471 -4.82471,-4.82471c-2.65966,0 -4.82471,2.16505 -4.82471,4.82471c0,2.65966 2.16505,4.82037 4.82471,4.82037c2.65966,0.00434 4.82471,-2.16071 4.82471,-4.82037m-8.4389,-0.00434c0,-2.00017 1.6227,-3.62287 3.62287,-3.62287c2.00017,0 3.62287,1.6227 3.62287,3.62287c0,2.00017 -1.6227,3.62287 -3.62287,3.62287c-2.00017,0 -3.62287,-1.6227 -3.62287,-3.62287",
                  }),
                ],
              }),
              (0, n.jsx)("path", {
                stroke: "null",
                id: "svg_6",
                d: "m46.71333,8.08293c0,2.23529 -1.67014,3.62707 -3.5849,3.62707c-1.91476,0 -3.60177,-1.39178 -3.60177,-3.62707c0,-2.23529 1.68701,-3.6102 3.60177,-3.6102c1.91476,-0.00844 3.5849,1.37491 3.5849,3.6102m-6.64682,0c0,1.90632 1.39178,3.1041 3.05349,3.1041c1.66171,0 3.04505,-1.19778 3.04505,-3.1041c0,-1.91476 -1.38335,-3.09566 -3.04505,-3.09566c-1.65327,0 -3.05349,1.18934 -3.05349,3.09566m3.09566,-1.84728c0.95316,0 1.23152,0.49767 1.23152,1.01221c0,0.48923 -0.29523,0.8182 -0.64106,0.9869l0.83507,1.57736l-0.63263,0l-0.71698,-1.40865l-0.76759,0l0,1.40865l-0.52297,0l0,-3.56803l1.21465,0l0,-0.00844zm-0.69167,1.67858l0.65793,0c0.43019,0 0.70011,-0.27836 0.70011,-0.61576c0,-0.3374 -0.17714,-0.56515 -0.69167,-0.56515l-0.66637,0l0,1.18091z",
              }),
              (0, n.jsxs)("g", {
                id: "svg_7",
                children: [
                  (0, n.jsx)("path", {
                    id: "svg_8",
                    d: "m77.46999,20.31667c-2.27,6.12 -7.24,10.13 -13.11,12.2c-0.54,-1.12 -1.7,-2.9 -2.65,-3.76c3.6,-1.03 6.95,-3.06 9.14,-5.63l-7.24,0l0,-3.89l10.05,0l0.79,-0.12l3.02,1.2zm-15.02,20.43c1.7,-1.57 3.39,-4.01 4.47,-6l4.22,2.11c-1.2,2.03 -2.73,4.55 -4.34,6.29l-4.35,-2.4zm8.57,-29.9l-8.23,0l0,-4.26l8.23,0l0,-2.28l5.01,0l0,2.28l10.42,0l0,-2.28l5.01,0l0,2.28l8.15,0l0,4.26l-8.15,0l0,2.15l-5.01,0l0,-2.15l-10.42,0l0,2.15l-5.01,0l0,-2.15zm-2.57,19.85l24.53,0l0,4.1l-24.53,0l0,-4.1zm28.71,-9.8c-1.86,1.45 -3.85,2.81 -5.59,3.81c2.52,1.24 5.46,2.19 8.48,2.77c-1.03,0.95 -2.4,2.9 -3.1,4.14c-5.29,-1.41 -10.05,-4.14 -13.44,-7.82l0,1.99c0,2.03 -0.33,2.94 -1.78,3.52c-1.32,0.54 -3.14,0.58 -5.46,0.58c-0.25,-1.2 -0.87,-2.69 -1.41,-3.76c1.37,0.08 2.85,0.08 3.27,0.08c0.46,-0.04 0.62,-0.12 0.62,-0.58l0,-5.83c1.41,-0.62 2.85,-1.45 4.26,-2.32l-14.23,0l0,-3.72l19.28,0l0.99,-0.25l2.98,2.52c-1.9,1.49 -4.18,3.06 -6.58,4.38c0.7,0.79 1.57,1.53 2.52,2.23c1.78,-1.28 3.97,-3.06 5.25,-4.38l3.94,2.64zm-19.11,14.89c0.7,1.99 1.24,4.63 1.28,6.29l-4.88,0.75c0.04,-1.66 -0.37,-4.34 -0.95,-6.41l4.55,-0.63zm8.65,-0.54c1.16,1.86 2.27,4.3 2.61,6l-4.51,1.41c-0.29,-1.65 -1.28,-4.22 -2.36,-6.12l4.26,-1.29zm8.39,-0.54c1.86,1.82 4.05,4.38 5.09,6.21l-4.43,2.07c-0.91,-1.78 -2.98,-4.47 -4.8,-6.37l4.14,-1.91z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_9",
                    d: "m110.14999,23.78667c-1.57,-1.12 -4.84,-2.9 -7.16,-4.09l2.61,-3.64c2.23,0.91 5.58,2.56 7.32,3.64l-2.77,4.09zm-5.79,15.14c2.03,-3.06 4.92,-8.07 7.16,-12.74l3.72,3.19c-1.94,4.22 -4.34,8.81 -6.58,12.74l-4.3,-3.19zm8.02,-26.02c-1.49,-1.28 -4.67,-3.14 -6.95,-4.38l2.73,-3.56c2.23,1.03 5.46,2.73 7.07,3.93l-2.85,4.01zm7.62,2.15c-0.91,1.32 -1.86,2.48 -2.81,3.52c-0.91,-0.87 -2.85,-2.36 -3.93,-3.02c2.98,-2.69 5.63,-6.99 7.07,-11.34l4.72,1.28c-0.41,0.99 -0.83,2.03 -1.32,3.06l18.08,0l0,4.22l-20.31,0c-0.46,0.74 -0.91,1.45 -1.41,2.15l17.95,0l0,3.97l-18.04,0l0,-3.84zm17.33,6.17c-0.08,10.05 -0.04,17.13 1.41,17.13c0.5,0 0.66,-2.23 0.7,-5.29c0.83,1.08 1.99,2.32 2.9,3.06c-0.33,4.67 -1.12,6.83 -3.97,6.87c-4.96,-0.04 -5.63,-6.87 -5.79,-17.5l-16.59,0l0,-4.3l19.28,0l0,0.04l2.06,0l0,-0.01z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_10",
                    d: "m182.70999,29.24667l-16.26,0l0,13.65l-5.13,0l0,-13.65l-16.09,0l0,-5.01l16.09,0l0,-12.53l-13.94,0l0,-4.88l32.93,0l0,4.88l-13.86,0l0,12.53l16.26,0l0,5.01zm-28.3,-16.21c1.37,2.65 2.85,6.12 3.31,8.44l-4.8,1.49c-0.41,-2.19 -1.7,-5.83 -3.02,-8.6l4.51,-1.33zm15.35,8.6c1.32,-2.4 2.81,-6.04 3.6,-8.73l5.25,1.32c-1.49,3.19 -3.19,6.54 -4.55,8.65l-4.3,-1.24z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_11",
                    d: "m212.48999,8.06667c3.81,3.56 8.73,8.65 10.88,12.12l-4.18,3.02c-0.54,-0.91 -1.28,-1.99 -2.15,-3.14c-21.97,1.08 -24.9,1.16 -27.09,1.9c-0.25,-0.99 -1.03,-3.43 -1.61,-4.72c1.08,-0.29 2.07,-1.08 3.43,-2.4c1.45,-1.28 5.96,-6.29 8.77,-11.25l4.96,2.11c-2.61,3.85 -5.87,7.53 -9.02,10.55l16.96,-0.54c-1.61,-1.82 -3.27,-3.56 -4.8,-5.09l3.85,-2.56zm-21.18,16.63l27.88,0l0,18.12l-5.29,0l0,-2.07l-17.54,0l0,2.11l-5.05,0l0,-18.16zm5.04,4.72l0,6.62l17.54,0l0,-6.62l-17.54,0z",
                  }),
                ],
              }),
              (0, n.jsxs)("g", {
                id: "svg_12",
                children: [
                  (0, n.jsx)("path", {
                    id: "svg_13",
                    d: "m224.05999,2.64667l-1.2,0l0,-0.43l2.92,0l0,0.43l-1.21,0l0,3.52l-0.52,0l0,-3.52l0.01,0z",
                  }),
                  (0, n.jsx)("path", {
                    id: "svg_14",
                    d: "m229.54999,4.42667c-0.03,-0.55 -0.06,-1.21 -0.06,-1.71l-0.02,0c-0.13,0.46 -0.3,0.96 -0.5,1.5l-0.7,1.92l-0.39,0l-0.64,-1.88c-0.19,-0.56 -0.35,-1.07 -0.46,-1.54l-0.01,0c-0.01,0.49 -0.04,1.15 -0.08,1.75l-0.11,1.69l-0.49,0l0.28,-3.95l0.65,0l0.67,1.91c0.16,0.49 0.3,0.92 0.4,1.33l0.02,0c0.1,-0.4 0.24,-0.83 0.42,-1.33l0.7,-1.91l0.65,0l0.25,3.95l-0.5,0l-0.08,-1.73z",
                  }),
                ],
              }),
            ],
          });
        }
        function ks() {
          return (0, n.jsx)(Re, {
            alignItems: "center",
            justifyContent: "center",
            children: (0, n.jsx)(L.t, {}),
          });
        }
        function Bs(r) {
          const o = (0, M.useRef)(r);
          o.current = r;
          const [a, u] = (0, M.useState)(!0),
            g = (0, Ee.zy)();
          return (
            (0, M.useEffect)(() => {
              if (new URLSearchParams(g.search).get("need_password")) {
                u(!1);
                return;
              }
              if (!o.current) {
                u(!1);
                return;
              }
              Ns(o.current)
                .then((c) => {
                  u(c);
                })
                .catch((c) => {
                  (0, j.tH)("PerformRefresh exception", c), u(!1);
                });
            }, [o, g.search]),
            a
          );
        }
        async function Ns(r) {
          const o = new FormData();
          o.append("redir", r);
          const a = `${y.TS.LOGIN_BASE_URL}jwt/ajaxrefresh`,
            u = await ke().post(a, o, { timeout: 1e4, withCredentials: !0 });
          if (u.status !== 200 || !u?.data?.success) return !1;
          const { success: g, login_url: m, error: c, ...f } = u.data,
            T = new FormData();
          Object.entries(f).forEach(([G, z]) => T.append(G, z));
          const H = await ke().post(m, T),
            k = H.status === 200 && H.data.result === l.R;
          return k && window.location.assign(r), k;
        }
        function Hs() {
          const r = (0, M.useRef)(!0);
          return (
            (0, M.useEffect)(
              () => () => {
                r.current = !1;
              },
              [r],
            ),
            (0, M.useCallback)(() => r.current, [r])
          );
        }
      },
      77661: (ye) => {
        ye.exports = {
          Login: "lat0M-V5X4uYd6Mpm1DJ1",
          SideBySide: "ZHRZ8czyqs7NaNmv65ARI",
          GuestContainer: "_3Sfbz5IM9d2jNMdOV2aFal",
          GuestLayout: "_1r_sYgW1VktkbK33MvFdMx",
          StandardLayout: "_2EuR68sQbA8eP01DlIfu6O",
          Embedded: "_2R_n2M6thAvA4On2yeR_Jd",
          GuestText: "_2gE59p3vz8NzTRZIejilUN",
          GuestLink: "_3zcmXq9FSDuc9eFPT7yj1A",
          ConfirmCredntialsNag: "_2oMvaF46xYOE6Guy0xjCAl",
          QRSection: "_3wSeH3OorL-tMzwXL55smN",
          MessagingContainer: "mFCQSE5-57z0lcZgUiE9K",
          MessagingTag: "_2vrvETim46niDklOy_kH33",
          MessagingSubtitleCtn: "_1SepN-HT3pk6WedgBgXLeB",
          MessagingIcon: "_1IIkZxuQobioLQwfUK5TcH",
          MessagingSubtitle: "_14ZzKYkQD-qXL4aLAaupwp",
          MessagingButton: "_3k-6J60Y5_Cs3sqk7SgbQU",
          MessagingLink: "_1kBrGj8mpIJs7FywIdPpik",
          ScanQRButton: "_3wGxEd3F_T8M0LIA0M9o-g",
          QRIcon: "_27u_PDLDTJ3mTS-4_TmJKk",
          QRCodeContainer: "_3ToZQDL9M9IP5o2tIhKLxH",
          QR: "_35Q-UW9L8wv2fkImoWScgQ",
          QRHideLink: "_1MIDAnpFm2LhRX7Rvb3wlY",
          HideButton: "_1kEk5_KBniai5Q7TYGCH1S",
          UseMobileAppForQR: "_3pxTSyPhDmjNqXUYDIITS-",
          InClient: "_1VAFgEYpKJDwl9aI8W5ctY",
          TextField: "_3BkiHun-mminuTO-Y-zXke",
          TextInput: "_2GBWeup5cttgbTw8FM3tfx",
          Danger: "_16BUa8w2l6LPH1otvXnwAR",
          LoginForm: "_2v60tM463fW0V7GDe92E5f",
          FieldLabel: "XrYgea66b38RASmbI3PJo",
          Highlight: "_12zBmIktqPpcwJXItTb8f9",
          CheckboxField: "_1Qku5jMXBi5-wawzqY1kzG",
          CheckboxFieldLabel: "_10bGilozn2bfCfiPfANMhC",
          Checkbox: "LBS7IDpob52Sb4ZoKobh0",
          Check: "_28MB9LhS2kVTalIp0NHDv4",
          RefreshButtonContainer: "_1Y8X98of8RkwP6ga9F92LD",
          SignInButtonContainer: "_16fbihk6Bi9CXuksG7_tLt",
          RefreshQuitButton: "_9Ig1o0jVRia2uf_FKR3rs",
          OfferOfflineButton: "_2Z68vjdOnUDA2ULQG41JVV",
          TryAgainButton: "_25eT23F0cV5lmT3tXAIA56",
          GuestButton: "_3t6QgWQmijDfZziPq3q3aQ",
          SubmitButton: "DjSvCZoKKfoNSmarsEcTS",
          Loading: "_2NVQcOnbtdGIu9O-mB9-YE",
          LoadingContainer: "_3AseUd328DeQNUMkwlq8MV",
          Text: "_1zFEayEDjKnMPSCnM-lzqE",
          Center: "_2jDjxzENzZfyd-mEASaFdZ",
          TextLink: "_1K431RbY14lkaFW6-XgSsC",
          FormError: "_1W_6HXiG4JJ0By1qN_0fGZ",
          TextAlignCenter: "_2FyQDUS2uHbW1fzoFK2jLx",
          FlexCol: "_1NOsG2PAO2rRBb8glCFM_6",
          AlignItemsCenter: "_2QHQ1DkwVuPafY7Yr1Df6w",
          JustifyContentCenter: "_2tsIiF5suAf1CC2JA9djst",
          ProtectingAccount: "_3JBYGcszFcaSNXHHSR3kCV",
          Label: "_1hKgiFuFaVR_Sq1Gj_gCnd",
          AccountName: "_31Vq4lzNWs4WikXVr9J4hz",
          Description: "_2o5mE8JpPFOyJ0HwX_y0y7",
          ConfirmationContainer: "_3zQ9hnkyXJEv7nN0oBU56M",
          AwaitingMobileConfText: "_2WgwHabhUV3cP6dHQPybw8",
          ConfirmationEntryContainer: "_3huyZ7Eoy2bX4PbCnH3p5w",
          AwaitingMobileConfIcon: "_3WvDpj9Ng6SQliygcVqlJU",
          AwaitingEmailConfIcon: "_3qdu3-d2Nbudcqe-VBrC8r",
          LinkContainer: "_3yz6xIaXDcStXAUzK4pWgE",
          EnterCodeInsteadLink: "_2YsaRupK3XuabHMh9_BfZP",
          EnterBackupCodeContainer: "DdK_Fpa32ezl3qzyYJ85d",
          EnterCodeFromMobileContainer: "_2Io_Jc8M4cRHn9cU4vHcqW",
          EnterCodeFromEmailContainer: "_1YQZI88vD5NCUw4u35tB0m",
          EnterCodeFromMobile: "_1rEWOv1g1uTXNhoWiJLQZs",
          EnterCodeFromEmail: "_3aMbj3PT-p1yxEt98UM56K",
          EnterCodeEmailAddress: "_3BKzb-aGSLOjp5jsQ8wwXK",
          CodeInputFieldContainer: "_3FIQqsD10Zd2yrvusqjP_P",
          CodeInputField: "_1gZuGaPQVYkRx3GH4wzBN3",
          SegmentContainer: "_8gteGheBcDqzR7sDIhoDN",
          Segment: "_3l55OgBEuGxUa2TRX_q6X2",
          RefreshTitle: "_3yMMwjOGjHdmMrJbYQyst3",
          RefreshReason: "_1b-mLIbA7lNlcrNICBrLu6",
          InsecureComputer: "_3onX-q5mCgAQyvYp-RXyQy",
          PrimaryHeader: "g5L61o-ZrHHmwLEugLjLI",
          FormContainer: "_3XCnc4SuTz8V8-jXVwkt_s",
          Compact: "_3FB9Kwzf1SnNWl8p2Mypu7",
          HeaderLogo: "_3v6WnuVNx1rJx0x_1AAyPp",
          LogoContainer: "_14exBrSFDthVqeknXgFh4X",
          BackArrowContainer: "_2Jkgs1ZwjavbwnJy76UgUm",
          BackArrow: "_3NHpq7ZDgg4uYEzUF9RxaQ",
          EmbeddedRoot: "_2v9dClMg2Lmn8UVv6GUeJt",
          RefreshReasonContainer: "_1kQPdUAn_5omUN8oZo_4ds",
          Universe: "yQUZitCk5gaktq9hh0r4J",
          EmbeddedRootFooter: "_27aItUQsVlk-hSm7K9UCJt",
          AccountCreation: "_3oenaAqi9EDn5VBmQS596K",
          AccountCreationPrompt: "_3dwSWEGgHCaDxQqEDOqTtN",
          FailureTitle: "_1A8Mk6QeC0d7bvHDJIoW7o",
          FailureDescription: "_3H-JHTYIWOo9uVrF0SXAX0",
          FailureButtons: "Vf2Dk5xgRdq6KGJAuoz3A",
          OfferOffline: "_2gqhnP9l70A6UQqREWHYY3",
          LoadingSpinner: "_1VLukpV8qjL4BULw7Zob_l",
          LoadAmin: "_14OTBjueEGnvcmdIsMqE2w",
          Small: "WYrJyNEVnjgAnMVZgvPeg",
          Medium: "CQ9fAVYxF10LejsSBLSz4",
          Large: "_1EIKWuekEw7VTF9EjNPV5j",
          MutedErrorReference: "J_2Q0Mk09u8np24KfSwHR",
          WaitingForTokenContainer: "_1h8nX6TBOG2MHjtSFDK79v",
          Client: "_3NSipG33PSv9wRw5VRHJGv",
        };
      },
      5522: (ye) => {
        ye.exports = {
          LoginQR: "xlEVpBeYO1h2tOqErt9fj",
          NonPublic: "_39rmYMz2NhzK3kuX7QQoz8",
          QRLoginDeck: "J3DO-HZVloRroBWQ4LcSK",
          QRLoginVR: "_1Drp2pvGZ46_F0XaPI7EM1",
          Blur: "_1rteFtfW8qmD6imQgrH-XM",
          Overlay: "_464mFQmvIW2e9TQypXX7W",
          Box: "_2ltn2BK4fnrPEGzNwxx6bx",
          Column: "_2u8B99t9Tx_uGgP58AcGYT",
          Loading: "_3jObIZzYUBbiU1dYHigzC_",
          LoadAmin: "_3GMW9g9sRiQQcPyKloXOxy",
          Small: "_3YZnIGSA-eyWBOOTC_4ODZ",
          Medium: "rYn6LhErVIdynPax7oCwy",
          Large: "_16VPM09Kxqdhwe3sCkvTOm",
        };
      },
      5804: (ye) => {
        ye.exports = {
          QRBits: "_3BALYLTpJdiDaC7JKmeeFJ",
          QRImg: "_5S5WqZhvbmRD1cHQT8P-l",
          Bit: "_1YVDTFYSTDWouyIbRs_hN_",
          Active: "_1zNnNw2BDhrN6ML6YxBYJE",
        };
      },
      32224: (ye) => {
        ye.exports = {
          SegmentedCharacterInput: "_1gzkmmy_XA39rp9MtxJfZJ",
          Disabled: "_4WrcvilhO29CHFM0pqglW",
          Danger: "_3lEvxoIfUV21o8WAfErUcA",
          BackupCode: "V5oAzFppoOFufB8_pY9sK",
          Loading: "_3khV2wP4icszbiR8o7sw37",
          Input: "_3xcXqLVteTNHmk-gh9W65d",
        };
      },
      80407: (ye, Ge, _) => {
        "use strict";
        _.d(Ge, { A: () => hs });
        var n,
          De = 0xdeadbeefcafe,
          ge = (De & 16777215) == 15715070;
        function l(e, t, s) {
          e != null &&
            (typeof e == "number"
              ? this.fromNumber(e, t, s)
              : t == null && typeof e != "string"
                ? this.fromString(e, 256)
                : this.fromString(e, t));
        }
        function b() {
          return new l(null);
        }
        function $(e, t, s, i, h, d) {
          for (; --d >= 0; ) {
            var S = t * this[e++] + s[i] + h;
            (h = Math.floor(S / 67108864)), (s[i++] = S & 67108863);
          }
          return h;
        }
        function ke(e, t, s, i, h, d) {
          for (var S = t & 32767, v = t >> 15; --d >= 0; ) {
            var F = this[e] & 32767,
              O = this[e++] >> 15,
              ce = v * F + O * S;
            (F = S * F + ((ce & 32767) << 15) + s[i] + (h & 1073741823)),
              (h = (F >>> 30) + (ce >>> 15) + v * O + (h >>> 30)),
              (s[i++] = F & 1073741823);
          }
          return h;
        }
        function M(e, t, s, i, h, d) {
          for (var S = t & 16383, v = t >> 14; --d >= 0; ) {
            var F = this[e] & 16383,
              O = this[e++] >> 14,
              ce = v * F + O * S;
            (F = S * F + ((ce & 16383) << 14) + s[i] + h),
              (h = (F >> 28) + (ce >> 14) + v * O),
              (s[i++] = F & 268435455);
          }
          return h;
        }
        ge && navigator.appName == "Microsoft Internet Explorer"
          ? ((l.prototype.am = ke), (n = 30))
          : ge && navigator.appName != "Netscape"
            ? ((l.prototype.am = $), (n = 26))
            : ((l.prototype.am = M), (n = 28)),
          (l.prototype.DB = n),
          (l.prototype.DM = (1 << n) - 1),
          (l.prototype.DV = 1 << n);
        var Ee = 52;
        (l.prototype.FV = Math.pow(2, Ee)),
          (l.prototype.F1 = Ee - n),
          (l.prototype.F2 = 2 * n - Ee);
        var Ce = "0123456789abcdefghijklmnopqrstuvwxyz",
          ie = new Array(),
          j,
          Q;
        for (j = 48, Q = 0; Q <= 9; ++Q) ie[j++] = Q;
        for (j = 97, Q = 10; Q < 36; ++Q) ie[j++] = Q;
        for (j = 65, Q = 10; Q < 36; ++Q) ie[j++] = Q;
        function Fe(e) {
          return Ce.charAt(e);
        }
        function ae(e, t) {
          var s = ie[e.charCodeAt(t)];
          return s ?? -1;
        }
        function Pe(e) {
          for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
          (e.t = this.t), (e.s = this.s);
        }
        function Oe(e) {
          (this.t = 1),
            (this.s = e < 0 ? -1 : 0),
            e > 0 ? (this[0] = e) : e < -1 ? (this[0] = e + DV) : (this.t = 0);
        }
        function E(e) {
          var t = b();
          return t.fromInt(e), t;
        }
        function P(e, t) {
          var s;
          if (t == 16) s = 4;
          else if (t == 8) s = 3;
          else if (t == 256) s = 8;
          else if (t == 2) s = 1;
          else if (t == 32) s = 5;
          else if (t == 4) s = 2;
          else {
            this.fromRadix(e, t);
            return;
          }
          (this.t = 0), (this.s = 0);
          for (var i = e.length, h = !1, d = 0; --i >= 0; ) {
            var S = s == 8 ? e[i] & 255 : ae(e, i);
            if (S < 0) {
              e.charAt(i) == "-" && (h = !0);
              continue;
            }
            (h = !1),
              d == 0
                ? (this[this.t++] = S)
                : d + s > this.DB
                  ? ((this[this.t - 1] |=
                      (S & ((1 << (this.DB - d)) - 1)) << d),
                    (this[this.t++] = S >> (this.DB - d)))
                  : (this[this.t - 1] |= S << d),
              (d += s),
              d >= this.DB && (d -= this.DB);
          }
          s == 8 &&
            (e[0] & 128) != 0 &&
            ((this.s = -1),
            d > 0 && (this[this.t - 1] |= ((1 << (this.DB - d)) - 1) << d)),
            this.clamp(),
            h && l.ZERO.subTo(this, this);
        }
        function N() {
          for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; )
            --this.t;
        }
        function W(e) {
          if (this.s < 0) return "-" + this.negate().toString(e);
          var t;
          if (e == 16) t = 4;
          else if (e == 8) t = 3;
          else if (e == 2) t = 1;
          else if (e == 32) t = 5;
          else if (e == 4) t = 2;
          else return this.toRadix(e);
          var s = (1 << t) - 1,
            i,
            h = !1,
            d = "",
            S = this.t,
            v = this.DB - ((S * this.DB) % t);
          if (S-- > 0)
            for (
              v < this.DB && (i = this[S] >> v) > 0 && ((h = !0), (d = Fe(i)));
              S >= 0;
            )
              v < t
                ? ((i = (this[S] & ((1 << v) - 1)) << (t - v)),
                  (i |= this[--S] >> (v += this.DB - t)))
                : ((i = (this[S] >> (v -= t)) & s),
                  v <= 0 && ((v += this.DB), --S)),
                i > 0 && (h = !0),
                h && (d += Fe(i));
          return h ? d : "0";
        }
        function q() {
          var e = b();
          return l.ZERO.subTo(this, e), e;
        }
        function w() {
          return this.s < 0 ? this.negate() : this;
        }
        function L(e) {
          var t = this.s - e.s;
          if (t != 0) return t;
          var s = this.t;
          if (((t = s - e.t), t != 0)) return t;
          for (; --s >= 0; ) if ((t = this[s] - e[s]) != 0) return t;
          return 0;
        }
        function A(e) {
          var t = 1,
            s;
          return (
            (s = e >>> 16) != 0 && ((e = s), (t += 16)),
            (s = e >> 8) != 0 && ((e = s), (t += 8)),
            (s = e >> 4) != 0 && ((e = s), (t += 4)),
            (s = e >> 2) != 0 && ((e = s), (t += 2)),
            (s = e >> 1) != 0 && ((e = s), (t += 1)),
            t
          );
        }
        function C() {
          return this.t <= 0
            ? 0
            : this.DB * (this.t - 1) + A(this[this.t - 1] ^ (this.s & this.DM));
        }
        function B(e, t) {
          var s;
          for (s = this.t - 1; s >= 0; --s) t[s + e] = this[s];
          for (s = e - 1; s >= 0; --s) t[s] = 0;
          (t.t = this.t + e), (t.s = this.s);
        }
        function y(e, t) {
          for (var s = e; s < this.t; ++s) t[s - e] = this[s];
          (t.t = Math.max(this.t - e, 0)), (t.s = this.s);
        }
        function R(e, t) {
          var s = e % this.DB,
            i = this.DB - s,
            h = (1 << i) - 1,
            d = Math.floor(e / this.DB),
            S = (this.s << s) & this.DM,
            v;
          for (v = this.t - 1; v >= 0; --v)
            (t[v + d + 1] = (this[v] >> i) | S), (S = (this[v] & h) << s);
          for (v = d - 1; v >= 0; --v) t[v] = 0;
          (t[d] = S), (t.t = this.t + d + 1), (t.s = this.s), t.clamp();
        }
        function te(e, t) {
          t.s = this.s;
          var s = Math.floor(e / this.DB);
          if (s >= this.t) {
            t.t = 0;
            return;
          }
          var i = e % this.DB,
            h = this.DB - i,
            d = (1 << i) - 1;
          t[0] = this[s] >> i;
          for (var S = s + 1; S < this.t; ++S)
            (t[S - s - 1] |= (this[S] & d) << h), (t[S - s] = this[S] >> i);
          i > 0 && (t[this.t - s - 1] |= (this.s & d) << h),
            (t.t = this.t - s),
            t.clamp();
        }
        function Le(e, t) {
          for (var s = 0, i = 0, h = Math.min(e.t, this.t); s < h; )
            (i += this[s] - e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i -= e.s; s < this.t; )
              (i += this[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; s < e.t; )
              (i -= e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i -= e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i < -1 ? (t[s++] = this.DV + i) : i > 0 && (t[s++] = i),
            (t.t = s),
            t.clamp();
        }
        function fe(e, t) {
          var s = this.abs(),
            i = e.abs(),
            h = s.t;
          for (t.t = h + i.t; --h >= 0; ) t[h] = 0;
          for (h = 0; h < i.t; ++h) t[h + s.t] = s.am(0, i[h], t, h, 0, s.t);
          (t.s = 0), t.clamp(), this.s != e.s && l.ZERO.subTo(t, t);
        }
        function Ae(e) {
          for (var t = this.abs(), s = (e.t = 2 * t.t); --s >= 0; ) e[s] = 0;
          for (s = 0; s < t.t - 1; ++s) {
            var i = t.am(s, t[s], e, 2 * s, 0, 1);
            (e[s + t.t] += t.am(
              s + 1,
              2 * t[s],
              e,
              2 * s + 1,
              i,
              t.t - s - 1,
            )) >= t.DV && ((e[s + t.t] -= t.DV), (e[s + t.t + 1] = 1));
          }
          e.t > 0 && (e[e.t - 1] += t.am(s, t[s], e, 2 * s, 0, 1)),
            (e.s = 0),
            e.clamp();
        }
        function Se(e, t, s) {
          var i = e.abs();
          if (!(i.t <= 0)) {
            var h = this.abs();
            if (h.t < i.t) {
              t?.fromInt(0), s != null && this.copyTo(s);
              return;
            }
            s == null && (s = b());
            var d = b(),
              S = this.s,
              v = e.s,
              F = this.DB - A(i[i.t - 1]);
            F > 0
              ? (i.lShiftTo(F, d), h.lShiftTo(F, s))
              : (i.copyTo(d), h.copyTo(s));
            var O = d.t,
              ce = d[O - 1];
            if (ce != 0) {
              var oe = ce * (1 << this.F1) + (O > 1 ? d[O - 2] >> this.F2 : 0),
                xe = this.FV / oe,
                Ke = (1 << this.F1) / oe,
                ue = 1 << this.F2,
                re = s.t,
                Ye = re - O,
                be = t ?? b();
              for (
                d.dlShiftTo(Ye, be),
                  s.compareTo(be) >= 0 && ((s[s.t++] = 1), s.subTo(be, s)),
                  l.ONE.dlShiftTo(O, be),
                  be.subTo(d, d);
                d.t < O;
              )
                d[d.t++] = 0;
              for (; --Ye >= 0; ) {
                var lt =
                  s[--re] == ce
                    ? this.DM
                    : Math.floor(s[re] * xe + (s[re - 1] + ue) * Ke);
                if ((s[re] += d.am(0, lt, s, Ye, 0, O)) < lt)
                  for (d.dlShiftTo(Ye, be), s.subTo(be, s); s[re] < --lt; )
                    s.subTo(be, s);
              }
              t != null && (s.drShiftTo(O, t), S != v && l.ZERO.subTo(t, t)),
                (s.t = O),
                s.clamp(),
                F > 0 && s.rShiftTo(F, s),
                S < 0 && l.ZERO.subTo(s, s);
            }
          }
        }
        function Xe(e) {
          var t = b();
          return (
            this.abs().divRemTo(e, null, t),
            this.s < 0 && t.compareTo(l.ZERO) > 0 && e.subTo(t, t),
            t
          );
        }
        function le(e) {
          this.m = e;
        }
        function Et(e) {
          return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }
        function Lt(e) {
          return e;
        }
        function se(e) {
          e.divRemTo(this.m, null, e);
        }
        function At(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        function Me(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        (le.prototype.convert = Et),
          (le.prototype.revert = Lt),
          (le.prototype.reduce = se),
          (le.prototype.mulTo = At),
          (le.prototype.sqrTo = Me);
        function Je() {
          if (this.t < 1) return 0;
          var e = this[0];
          if ((e & 1) == 0) return 0;
          var t = e & 3;
          return (
            (t = (t * (2 - (e & 15) * t)) & 15),
            (t = (t * (2 - (e & 255) * t)) & 255),
            (t = (t * (2 - (((e & 65535) * t) & 65535))) & 65535),
            (t = (t * (2 - ((e * t) % this.DV))) % this.DV),
            t > 0 ? this.DV - t : -t
          );
        }
        function ve(e) {
          (this.m = e),
            (this.mp = e.invDigit()),
            (this.mpl = this.mp & 32767),
            (this.mph = this.mp >> 15),
            (this.um = (1 << (e.DB - 15)) - 1),
            (this.mt2 = 2 * e.t);
        }
        function Ie(e) {
          var t = b();
          return (
            e.abs().dlShiftTo(this.m.t, t),
            t.divRemTo(this.m, null, t),
            e.s < 0 && t.compareTo(l.ZERO) > 0 && this.m.subTo(t, t),
            t
          );
        }
        function Be(e) {
          var t = b();
          return e.copyTo(t), this.reduce(t), t;
        }
        function me(e) {
          for (; e.t <= this.mt2; ) e[e.t++] = 0;
          for (var t = 0; t < this.m.t; ++t) {
            var s = e[t] & 32767,
              i =
                (s * this.mpl +
                  (((s * this.mph + (e[t] >> 15) * this.mpl) & this.um) <<
                    15)) &
                e.DM;
            for (
              s = t + this.m.t, e[s] += this.m.am(0, i, e, t, 0, this.m.t);
              e[s] >= e.DV;
            )
              (e[s] -= e.DV), e[++s]++;
          }
          e.clamp(),
            e.drShiftTo(this.m.t, e),
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }
        function Ne(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function $e(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (ve.prototype.convert = Ie),
          (ve.prototype.revert = Be),
          (ve.prototype.reduce = me),
          (ve.prototype.mulTo = $e),
          (ve.prototype.sqrTo = Ne);
        function Qe() {
          return (this.t > 0 ? this[0] & 1 : this.s) == 0;
        }
        function Mt(e, t) {
          if (e > 4294967295 || e < 1) return l.ONE;
          var s = b(),
            i = b(),
            h = t.convert(this),
            d = A(e) - 1;
          for (h.copyTo(s); --d >= 0; )
            if ((t.sqrTo(s, i), (e & (1 << d)) > 0)) t.mulTo(i, h, s);
            else {
              var S = s;
              (s = i), (i = S);
            }
          return t.revert(s);
        }
        function He(e, t) {
          var s;
          return (
            e < 256 || t.isEven() ? (s = new le(t)) : (s = new ve(t)),
            this.exp(e, s)
          );
        }
        (l.prototype.copyTo = Pe),
          (l.prototype.fromInt = Oe),
          (l.prototype.fromString = P),
          (l.prototype.clamp = N),
          (l.prototype.dlShiftTo = B),
          (l.prototype.drShiftTo = y),
          (l.prototype.lShiftTo = R),
          (l.prototype.rShiftTo = te),
          (l.prototype.subTo = Le),
          (l.prototype.multiplyTo = fe),
          (l.prototype.squareTo = Ae),
          (l.prototype.divRemTo = Se),
          (l.prototype.invDigit = Je),
          (l.prototype.isEven = Qe),
          (l.prototype.exp = Mt),
          (l.prototype.toString = W),
          (l.prototype.negate = q),
          (l.prototype.abs = w),
          (l.prototype.compareTo = L),
          (l.prototype.bitLength = C),
          (l.prototype.mod = Xe),
          (l.prototype.modPowInt = He),
          (l.ZERO = E(0)),
          (l.ONE = E(1));
        function Ve() {
          var e = b();
          return this.copyTo(e), e;
        }
        function qe() {
          if (this.s < 0) {
            if (this.t == 1) return this[0] - this.DV;
            if (this.t == 0) return -1;
          } else {
            if (this.t == 1) return this[0];
            if (this.t == 0) return 0;
          }
          return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        }
        function We() {
          return this.t == 0 ? this.s : (this[0] << 24) >> 24;
        }
        function ut() {
          return this.t == 0 ? this.s : (this[0] << 16) >> 16;
        }
        function et(e) {
          return Math.floor((Math.LN2 * this.DB) / Math.log(e));
        }
        function ht() {
          return this.s < 0
            ? -1
            : this.t <= 0 || (this.t == 1 && this[0] <= 0)
              ? 0
              : 1;
        }
        function J(e) {
          if ((e == null && (e = 10), this.signum() == 0 || e < 2 || e > 36))
            return "0";
          var t = this.chunkSize(e),
            s = Math.pow(e, t),
            i = E(s),
            h = b(),
            d = b(),
            S = "";
          for (this.divRemTo(i, h, d); h.signum() > 0; )
            (S = (s + d.intValue()).toString(e).substr(1) + S),
              h.divRemTo(i, h, d);
          return d.intValue().toString(e) + S;
        }
        function It(e, t) {
          this.fromInt(0), t == null && (t = 10);
          for (
            var s = this.chunkSize(t),
              i = Math.pow(t, s),
              h = !1,
              d = 0,
              S = 0,
              v = 0;
            v < e.length;
            ++v
          ) {
            var F = ae(e, v);
            if (F < 0) {
              e.charAt(v) == "-" && this.signum() == 0 && (h = !0);
              continue;
            }
            (S = t * S + F),
              ++d >= s &&
                (this.dMultiply(i), this.dAddOffset(S, 0), (d = 0), (S = 0));
          }
          d > 0 && (this.dMultiply(Math.pow(t, d)), this.dAddOffset(S, 0)),
            h && l.ZERO.subTo(this, this);
        }
        function fs(e, t, s) {
          if (typeof t == "number")
            if (e < 2) this.fromInt(1);
            else
              for (
                this.fromNumber(e, s),
                  this.testBit(e - 1) ||
                    this.bitwiseTo(l.ONE.shiftLeft(e - 1), st, this),
                  this.isEven() && this.dAddOffset(1, 0);
                !this.isProbablePrime(t);
              )
                this.dAddOffset(2, 0),
                  this.bitLength() > e &&
                    this.subTo(l.ONE.shiftLeft(e - 1), this);
          else {
            var i = new Array(),
              h = e & 7;
            (i.length = (e >> 3) + 1),
              t.nextBytes(i),
              h > 0 ? (i[0] &= (1 << h) - 1) : (i[0] = 0),
              this.fromString(i, 256);
          }
        }
        function dt() {
          var e = this.t,
            t = new Array();
          t[0] = this.s;
          var s = this.DB - ((e * this.DB) % 8),
            i,
            h = 0;
          if (e-- > 0)
            for (
              s < this.DB &&
              (i = this[e] >> s) != (this.s & this.DM) >> s &&
              (t[h++] = i | (this.s << (this.DB - s)));
              e >= 0;
            )
              s < 8
                ? ((i = (this[e] & ((1 << s) - 1)) << (8 - s)),
                  (i |= this[--e] >> (s += this.DB - 8)))
                : ((i = (this[e] >> (s -= 8)) & 255),
                  s <= 0 && ((s += this.DB), --e)),
                (i & 128) != 0 && (i |= -256),
                h == 0 && (this.s & 128) != (i & 128) && ++h,
                (h > 0 || i != this.s) && (t[h++] = i);
          return t;
        }
        function jt(e) {
          return this.compareTo(e) == 0;
        }
        function Dt(e) {
          return this.compareTo(e) < 0 ? this : e;
        }
        function tt(e) {
          return this.compareTo(e) > 0 ? this : e;
        }
        function ft(e, t, s) {
          var i,
            h,
            d = Math.min(e.t, this.t);
          for (i = 0; i < d; ++i) s[i] = t(this[i], e[i]);
          if (e.t < this.t) {
            for (h = e.s & this.DM, i = d; i < this.t; ++i)
              s[i] = t(this[i], h);
            s.t = this.t;
          } else {
            for (h = this.s & this.DM, i = d; i < e.t; ++i) s[i] = t(h, e[i]);
            s.t = e.t;
          }
          (s.s = t(this.s, e.s)), s.clamp();
        }
        function mt(e, t) {
          return e & t;
        }
        function K(e) {
          var t = b();
          return this.bitwiseTo(e, mt, t), t;
        }
        function st(e, t) {
          return e | t;
        }
        function kt(e) {
          var t = b();
          return this.bitwiseTo(e, st, t), t;
        }
        function pt(e, t) {
          return e ^ t;
        }
        function ze(e) {
          var t = b();
          return this.bitwiseTo(e, pt, t), t;
        }
        function nt(e, t) {
          return e & ~t;
        }
        function gt(e) {
          var t = b();
          return this.bitwiseTo(e, nt, t), t;
        }
        function Ct() {
          for (var e = b(), t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
          return (e.t = this.t), (e.s = ~this.s), e;
        }
        function St(e) {
          var t = b();
          return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t;
        }
        function Bt(e) {
          var t = b();
          return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t;
        }
        function ot(e) {
          if (e == 0) return -1;
          var t = 0;
          return (
            (e & 65535) == 0 && ((e >>= 16), (t += 16)),
            (e & 255) == 0 && ((e >>= 8), (t += 8)),
            (e & 15) == 0 && ((e >>= 4), (t += 4)),
            (e & 3) == 0 && ((e >>= 2), (t += 2)),
            (e & 1) == 0 && ++t,
            t
          );
        }
        function Nt() {
          for (var e = 0; e < this.t; ++e)
            if (this[e] != 0) return e * this.DB + ot(this[e]);
          return this.s < 0 ? this.t * this.DB : -1;
        }
        function Ht(e) {
          for (var t = 0; e != 0; ) (e &= e - 1), ++t;
          return t;
        }
        function p() {
          for (var e = 0, t = this.s & this.DM, s = 0; s < this.t; ++s)
            e += Ht(this[s] ^ t);
          return e;
        }
        function Vt(e) {
          var t = Math.floor(e / this.DB);
          return t >= this.t
            ? this.s != 0
            : (this[t] & (1 << (e % this.DB))) != 0;
        }
        function Ft(e, t) {
          var s = l.ONE.shiftLeft(e);
          return this.bitwiseTo(s, t, s), s;
        }
        function Pt(e) {
          return this.changeBit(e, st);
        }
        function Gt(e) {
          return this.changeBit(e, nt);
        }
        function vt(e) {
          return this.changeBit(e, pt);
        }
        function _t(e, t) {
          for (var s = 0, i = 0, h = Math.min(e.t, this.t); s < h; )
            (i += this[s] + e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
          if (e.t < this.t) {
            for (i += e.s; s < this.t; )
              (i += this[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += this.s;
          } else {
            for (i += this.s; s < e.t; )
              (i += e[s]), (t[s++] = i & this.DM), (i >>= this.DB);
            i += e.s;
          }
          (t.s = i < 0 ? -1 : 0),
            i > 0 ? (t[s++] = i) : i < -1 && (t[s++] = this.DV + i),
            (t.t = s),
            t.clamp();
        }
        function Ot(e) {
          var t = b();
          return this.addTo(e, t), t;
        }
        function Ut(e) {
          var t = b();
          return this.subTo(e, t), t;
        }
        function Zt(e) {
          var t = b();
          return this.multiplyTo(e, t), t;
        }
        function Qt(e) {
          var t = b();
          return this.divRemTo(e, t, null), t;
        }
        function Wt(e) {
          var t = b();
          return this.divRemTo(e, null, t), t;
        }
        function ne(e) {
          var t = b(),
            s = b();
          return this.divRemTo(e, t, s), new Array(t, s);
        }
        function zt(e) {
          (this[this.t] = this.am(0, e - 1, this, 0, 0, this.t)),
            ++this.t,
            this.clamp();
        }
        function Kt(e, t) {
          for (; this.t <= t; ) this[this.t++] = 0;
          for (this[t] += e; this[t] >= this.DV; )
            (this[t] -= this.DV),
              ++t >= this.t && (this[this.t++] = 0),
              ++this[t];
        }
        function Ue() {}
        function bt(e) {
          return e;
        }
        function Yt(e, t, s) {
          e.multiplyTo(t, s);
        }
        function Xt(e, t) {
          e.squareTo(t);
        }
        (Ue.prototype.convert = bt),
          (Ue.prototype.revert = bt),
          (Ue.prototype.mulTo = Yt),
          (Ue.prototype.sqrTo = Xt);
        function Jt(e) {
          return this.exp(e, new Ue());
        }
        function $t(e, t, s) {
          var i = Math.min(this.t + e.t, t);
          for (s.s = 0, s.t = i; i > 0; ) s[--i] = 0;
          var h;
          for (h = s.t - this.t; i < h; ++i)
            s[i + this.t] = this.am(0, e[i], s, i, 0, this.t);
          for (h = Math.min(e.t, t); i < h; ++i)
            this.am(0, e[i], s, i, 0, t - i);
          s.clamp();
        }
        function wt(e, t, s) {
          --t;
          var i = (s.t = this.t + e.t - t);
          for (s.s = 0; --i >= 0; ) s[i] = 0;
          for (i = Math.max(t - this.t, 0); i < e.t; ++i)
            s[this.t + i - t] = this.am(t - i, e[i], s, 0, 0, this.t + i - t);
          s.clamp(), s.drShiftTo(1, s);
        }
        function _e(e) {
          (this.r2 = b()),
            (this.q3 = b()),
            l.ONE.dlShiftTo(2 * e.t, this.r2),
            (this.mu = this.r2.divide(e)),
            (this.m = e);
        }
        function qt(e) {
          if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
          if (e.compareTo(this.m) < 0) return e;
          var t = b();
          return e.copyTo(t), this.reduce(t), t;
        }
        function es(e) {
          return e;
        }
        function ts(e) {
          for (
            e.drShiftTo(this.m.t - 1, this.r2),
              e.t > this.m.t + 1 && ((e.t = this.m.t + 1), e.clamp()),
              this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
              this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            e.compareTo(this.r2) < 0;
          )
            e.dAddOffset(1, this.m.t + 1);
          for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; )
            e.subTo(this.m, e);
        }
        function ms(e, t) {
          e.squareTo(t), this.reduce(t);
        }
        function ss(e, t, s) {
          e.multiplyTo(t, s), this.reduce(s);
        }
        (_e.prototype.convert = qt),
          (_e.prototype.revert = es),
          (_e.prototype.reduce = ts),
          (_e.prototype.mulTo = ss),
          (_e.prototype.sqrTo = ms);
        function ns(e, t) {
          var s = e.bitLength(),
            i,
            h = E(1),
            d;
          if (s <= 0) return h;
          s < 18
            ? (i = 1)
            : s < 48
              ? (i = 3)
              : s < 144
                ? (i = 4)
                : s < 768
                  ? (i = 5)
                  : (i = 6),
            s < 8
              ? (d = new le(t))
              : t.isEven()
                ? (d = new _e(t))
                : (d = new ve(t));
          var S = new Array(),
            v = 3,
            F = i - 1,
            O = (1 << i) - 1;
          if (((S[1] = d.convert(this)), i > 1)) {
            var ce = b();
            for (d.sqrTo(S[1], ce); v <= O; )
              (S[v] = b()), d.mulTo(ce, S[v - 2], S[v]), (v += 2);
          }
          var oe = e.t - 1,
            xe,
            Ke = !0,
            ue = b(),
            re;
          for (s = A(e[oe]) - 1; oe >= 0; ) {
            for (
              s >= F
                ? (xe = (e[oe] >> (s - F)) & O)
                : ((xe = (e[oe] & ((1 << (s + 1)) - 1)) << (F - s)),
                  oe > 0 && (xe |= e[oe - 1] >> (this.DB + s - F))),
                v = i;
              (xe & 1) == 0;
            )
              (xe >>= 1), --v;
            if (((s -= v) < 0 && ((s += this.DB), --oe), Ke))
              S[xe].copyTo(h), (Ke = !1);
            else {
              for (; v > 1; ) d.sqrTo(h, ue), d.sqrTo(ue, h), (v -= 2);
              v > 0 ? d.sqrTo(h, ue) : ((re = h), (h = ue), (ue = re)),
                d.mulTo(ue, S[xe], h);
            }
            for (; oe >= 0 && (e[oe] & (1 << s)) == 0; )
              d.sqrTo(h, ue),
                (re = h),
                (h = ue),
                (ue = re),
                --s < 0 && ((s = this.DB - 1), --oe);
          }
          return d.revert(h);
        }
        function os(e) {
          var t = this.s < 0 ? this.negate() : this.clone(),
            s = e.s < 0 ? e.negate() : e.clone();
          if (t.compareTo(s) < 0) {
            var i = t;
            (t = s), (s = i);
          }
          var h = t.getLowestSetBit(),
            d = s.getLowestSetBit();
          if (d < 0) return t;
          for (
            h < d && (d = h), d > 0 && (t.rShiftTo(d, t), s.rShiftTo(d, s));
            t.signum() > 0;
          )
            (h = t.getLowestSetBit()) > 0 && t.rShiftTo(h, t),
              (h = s.getLowestSetBit()) > 0 && s.rShiftTo(h, s),
              t.compareTo(s) >= 0
                ? (t.subTo(s, t), t.rShiftTo(1, t))
                : (s.subTo(t, s), s.rShiftTo(1, s));
          return d > 0 && s.lShiftTo(d, s), s;
        }
        function rt(e) {
          if (e <= 0) return 0;
          var t = this.DV % e,
            s = this.s < 0 ? e - 1 : 0;
          if (this.t > 0)
            if (t == 0) s = this[0] % e;
            else
              for (var i = this.t - 1; i >= 0; --i) s = (t * s + this[i]) % e;
          return s;
        }
        function it(e) {
          var t = e.isEven();
          if ((this.isEven() && t) || e.signum() == 0) return l.ZERO;
          for (
            var s = e.clone(),
              i = this.clone(),
              h = E(1),
              d = E(0),
              S = E(0),
              v = E(1);
            s.signum() != 0;
          ) {
            for (; s.isEven(); )
              s.rShiftTo(1, s),
                t
                  ? ((!h.isEven() || !d.isEven()) &&
                      (h.addTo(this, h), d.subTo(e, d)),
                    h.rShiftTo(1, h))
                  : d.isEven() || d.subTo(e, d),
                d.rShiftTo(1, d);
            for (; i.isEven(); )
              i.rShiftTo(1, i),
                t
                  ? ((!S.isEven() || !v.isEven()) &&
                      (S.addTo(this, S), v.subTo(e, v)),
                    S.rShiftTo(1, S))
                  : v.isEven() || v.subTo(e, v),
                v.rShiftTo(1, v);
            s.compareTo(i) >= 0
              ? (s.subTo(i, s), t && h.subTo(S, h), d.subTo(v, d))
              : (i.subTo(s, i), t && S.subTo(h, S), v.subTo(d, v));
          }
          if (i.compareTo(l.ONE) != 0) return l.ZERO;
          if (v.compareTo(e) >= 0) return v.subtract(e);
          if (v.signum() < 0) v.addTo(e, v);
          else return v;
          return v.signum() < 0 ? v.add(e) : v;
        }
        var ee = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
            67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
            139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
            211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277,
            281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359,
            367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439,
            443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
          ],
          rs = (1 << 26) / ee[ee.length - 1];
        function is(e) {
          var t,
            s = this.abs();
          if (s.t == 1 && s[0] <= ee[ee.length - 1]) {
            for (t = 0; t < ee.length; ++t) if (s[0] == ee[t]) return !0;
            return !1;
          }
          if (s.isEven()) return !1;
          for (t = 1; t < ee.length; ) {
            for (var i = ee[t], h = t + 1; h < ee.length && i < rs; )
              i *= ee[h++];
            for (i = s.modInt(i); t < h; ) if (i % ee[t++] == 0) return !1;
          }
          return s.millerRabin(e);
        }
        function yt(e) {
          var t = this.subtract(l.ONE),
            s = t.getLowestSetBit();
          if (s <= 0) return !1;
          var i = t.shiftRight(s);
          (e = (e + 1) >> 1), e > ee.length && (e = ee.length);
          for (var h = b(), d = 0; d < e; ++d) {
            h.fromInt(ee[d]);
            var S = h.modPow(i, this);
            if (S.compareTo(l.ONE) != 0 && S.compareTo(t) != 0) {
              for (var v = 1; v++ < s && S.compareTo(t) != 0; )
                if (((S = S.modPowInt(2, this)), S.compareTo(l.ONE) == 0))
                  return !1;
              if (S.compareTo(t) != 0) return !1;
            }
          }
          return !0;
        }
        (l.prototype.chunkSize = et),
          (l.prototype.toRadix = J),
          (l.prototype.fromRadix = It),
          (l.prototype.fromNumber = fs),
          (l.prototype.bitwiseTo = ft),
          (l.prototype.changeBit = Ft),
          (l.prototype.addTo = _t),
          (l.prototype.dMultiply = zt),
          (l.prototype.dAddOffset = Kt),
          (l.prototype.multiplyLowerTo = $t),
          (l.prototype.multiplyUpperTo = wt),
          (l.prototype.modInt = rt),
          (l.prototype.millerRabin = yt),
          (l.prototype.clone = Ve),
          (l.prototype.intValue = qe),
          (l.prototype.byteValue = We),
          (l.prototype.shortValue = ut),
          (l.prototype.signum = ht),
          (l.prototype.toByteArray = dt),
          (l.prototype.equals = jt),
          (l.prototype.min = Dt),
          (l.prototype.max = tt),
          (l.prototype.and = K),
          (l.prototype.or = kt),
          (l.prototype.xor = ze),
          (l.prototype.andNot = gt),
          (l.prototype.not = Ct),
          (l.prototype.shiftLeft = St),
          (l.prototype.shiftRight = Bt),
          (l.prototype.getLowestSetBit = Nt),
          (l.prototype.bitCount = p),
          (l.prototype.testBit = Vt),
          (l.prototype.setBit = Pt),
          (l.prototype.clearBit = Gt),
          (l.prototype.flipBit = vt),
          (l.prototype.add = Ot),
          (l.prototype.subtract = Ut),
          (l.prototype.multiply = Zt),
          (l.prototype.divide = Qt),
          (l.prototype.remainder = Wt),
          (l.prototype.divideAndRemainder = ne),
          (l.prototype.modPow = ns),
          (l.prototype.modInverse = it),
          (l.prototype.pow = Jt),
          (l.prototype.gcd = os),
          (l.prototype.isProbablePrime = is);
        const at = l;
        var as = function (e, t) {
            (this.modulus = new at(e, 16)),
              (this.encryptionExponent = new at(t, 16));
          },
          ls = {
            base64:
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function (e) {
              if (!e) return !1;
              var t = "",
                s,
                i,
                h,
                d,
                S,
                v,
                F,
                O = 0;
              do
                (s = e.charCodeAt(O++)),
                  (i = e.charCodeAt(O++)),
                  (h = e.charCodeAt(O++)),
                  (d = s >> 2),
                  (S = ((s & 3) << 4) | (i >> 4)),
                  (v = ((i & 15) << 2) | (h >> 6)),
                  (F = h & 63),
                  isNaN(i) ? (v = F = 64) : isNaN(h) && (F = 64),
                  (t +=
                    this.base64.charAt(d) +
                    this.base64.charAt(S) +
                    this.base64.charAt(v) +
                    this.base64.charAt(F));
              while (O < e.length);
              return t;
            },
            decode: function (e) {
              if (!e) return !1;
              e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
              var t = "",
                s,
                i,
                h,
                d,
                S = 0;
              do
                (s = this.base64.indexOf(e.charAt(S++))),
                  (i = this.base64.indexOf(e.charAt(S++))),
                  (h = this.base64.indexOf(e.charAt(S++))),
                  (d = this.base64.indexOf(e.charAt(S++))),
                  (t += String.fromCharCode((s << 2) | (i >> 4))),
                  h != 64 &&
                    (t += String.fromCharCode(((i & 15) << 4) | (h >> 2))),
                  d != 64 && (t += String.fromCharCode(((h & 3) << 6) | d));
              while (S < e.length);
              return t;
            },
          },
          cs = {
            hex: "0123456789abcdef",
            encode: function (e) {
              if (!e) return !1;
              var t = "",
                s,
                i = 0;
              do
                (s = e.charCodeAt(i++)),
                  (t +=
                    this.hex.charAt((s >> 4) & 15) + this.hex.charAt(s & 15));
              while (i < e.length);
              return t;
            },
            decode: function (e) {
              if (!e) return !1;
              e = e.replace(/[^0-9abcdef]/g, "");
              var t = "",
                s = 0;
              do
                t += String.fromCharCode(
                  ((this.hex.indexOf(e.charAt(s++)) << 4) & 240) |
                    (this.hex.indexOf(e.charAt(s++)) & 15),
                );
              while (s < e.length);
              return t;
            },
          },
          us = {
            getPublicKey: function (e, t) {
              return new as(e, t);
            },
            encrypt: function (e, t) {
              return !t ||
                ((e = this.pkcs1pad2(e, (t.modulus.bitLength() + 7) >> 3)),
                !e) ||
                ((e = e.modPowInt(t.encryptionExponent, t.modulus)), !e)
                ? !1
                : ((e = e.toString(16)),
                  (e.length & 1) == 1 && (e = "0" + e),
                  ls.encode(cs.decode(e)));
            },
            pkcs1pad2: function (e, t) {
              if (t < e.length + 11) return null;
              for (var s = [], i = e.length - 1; i >= 0 && t > 0; )
                s[--t] = e.charCodeAt(i--);
              for (s[--t] = 0; t > 2; )
                s[--t] = Math.floor(Math.random() * 254) + 1;
              return (s[--t] = 2), (s[--t] = 0), new at(s);
            },
          };
        const hs = us;
      },
    },
  ]);
})();
