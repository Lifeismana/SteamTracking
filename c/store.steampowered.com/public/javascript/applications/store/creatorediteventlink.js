(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [73687],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_.k_eView = "view"),
            (_.k_eViewWebSiteHub = "websitehub"),
            (_.k_eCommunityView = "communityview"),
            (_.k_eCommunityEdit = "edit"),
            (_.k_eCommunityEditBroadcast = "editBroadcast"),
            (_.k_eCommunityAdminPage = "admin"),
            (_.k_eCommunityPublish = "publish"),
            (_.k_eCommunityMigrate = "migrate"),
            (_.k_eCommunityPreview = "preview"),
            (_.k_eCommunityPreviewSale = "previewsale"),
            (_.k_eCommunityAnnouncementHub = "community_announcehub"),
            (_.k_eStoreView = "storeview"),
            (_.k_eStoreNewsHub = "newshub"),
            (_.k_eStoreOwnerPage = "store"),
            (_.k_eStoreSalePage = "sale"),
            (_.k_eStoreUsersNewsHub = "usernewshub"),
            _
          ))(_ || {});
        const _ =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function _(_) {
          return _.match(_)?.[1];
        }
        function _(_, _) {
          if (!_) return !1;
          const _ = !0,
            _ = _(window.location.href),
            _ = _ && _ == "news",
            _ = _.GetEventType() == _.ajI,
            _ = !1,
            _ = _.appid ? "games" : "groups",
            _ =
              _ &&
              _ == _ &&
              ((_.appid && _.appid === _._.APPID) ||
                (!_.appid &&
                  _.clanSteamID.GetAccountID() === _._.CLANACCOUNTID));
          switch (_) {
            case "view":
              return _ || (_ && !_());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return _;
            case "admin":
              return _ ? !1 : _;
            case "websitehub":
              return _ || _;
            case "storeview":
              return _ && !_();
            case "newshub":
            case "store":
            case "usernewshub":
              return _;
            case "sale":
              return !1;
            default:
              return (0, _._)(!1, "Unknown route specified for link: " + _), !1;
          }
        }
        function _(_) {
          const _ =
            _._.COMMUNITY_BASE_URL +
            "gid/" +
            _.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            _.AnnouncementGID;
          return {
            strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: _ + "?site=twitter",
            strRedditUrl: _ + "?site=reddit",
          };
        }
        function _(_) {
          return _(_, "sale", "absolute");
        }
        function _(_, _) {
          return _(_, _, "sale", "absolute");
        }
        function _(_) {
          return _(_, "storeview", "absolute");
        }
        function _(_, _) {
          return _(_, _, "storeview", "absolute");
        }
        function _(_, _, _) {
          if (_)
            return (
              (_ ? "/games/" + _._.VANITY_ID : "/groups/" + _._.VANITY_ID) + "/"
            );
          const _ = _ ? "ogg/" + _ : "gid/" + _.ConvertTo64BitString();
          return _._.COMMUNITY_BASE_URL + _ + "/";
        }
        function _() {
          return "news";
        }
        function _() {
          return !1;
        }
        function _(_, _, _) {
          const { data: _ } = (0, _._)(
            _?.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
          );
          if (_) return _(_, _, _, _);
        }
        function _(_, _, _, _) {
          const _ = _ === "relative",
            _ = !1,
            _ = _ ? "/" : _._.STORE_BASE_URL,
            _ = _(_.appid, _.clanSteamID, _);
          _ === "view"
            ? (_ = _ ? "communityview" : "storeview")
            : _ === "websitehub" &&
              (_ = _ ? "community_announcehub" : "newshub");
          const _ = _.GID ? _.GID : "",
            _ = _.AnnouncementGID ? _.AnnouncementGID : "",
            _ =
              _.BIsOGGEvent() &&
              _.appid &&
              _ &&
              _.BHasSaleUpdateLandingPageVanity(),
            _ = _.GetEventType() == _.ajI;
          switch (_) {
            case "publish":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/publish/" + _ + "?tab=publishing")
              );
            case "edit":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/edit/" + _)
              );
            case "editBroadcast":
              return (
                _ +
                (_.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + _
                  : "partnerevents/edit/" + _) +
                "?tab=broadcast"
              );
            case "migrate":
              return _ + "partnerevents/migrate_announcement/" + _;
            case "preview":
              return _
                ? _ + "partnerevents/previewsale/" + _
                : _ +
                    (_.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + _
                      : "partnerevents/preview/" + _);
            case "previewsale":
              return _ + "partnerevents/previewsale/" + _;
            case "admin":
              return _
                ? `${_}curator/${_.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : _ + "partnerevents";
            case "community_announcehub":
              return _ + "announcements";
            case "newshub": {
              const _ = _.appid
                ? `app/${_.appid}`
                : `group/${_.clanSteamID.GetAccountID()}`;
              return _ + `${_()}/${_}`;
            }
            case "store":
              return (
                _ +
                (_.appid
                  ? "app/" + _.appid
                  : "curator/" + _.clanSteamID.GetAccountID())
              );
            case "sale":
              return _.jsondata.bSaleEnabled
                ? _.clanSteamID.GetAccountID() == _._
                  ? `${_}charts/topnewreleases/${_.jsondata.sale_vanity_id}`
                  : _.clanSteamID.GetAccountID() == _._
                    ? `${_}charts/bestofyear/${_.jsondata.sale_vanity_id}`
                    : _
                      ? `${(0, _._)(_)}/${_.GetSaleUpdateLandingPageVanity()}`
                      : _
                        ? `${_}curator/${_.clanSteamID.GetAccountID()}`
                        : _ +
                          (_.jsondata
                            .sale_vanity_id_valve_approved_for_sale_subpath
                            ? "sale/"
                            : "curator/" +
                              _.clanSteamID.GetAccountID() +
                              "/sale/") +
                          _.jsondata.sale_vanity_id
                : _;
            case "communityview":
              return _ + "announcements/detail/" + _;
            case "storeview": {
              if (_.clanSteamID.GetAccountID() == (0, _._)())
                return `${_._.STORE_BASE_URL}meetsteam/${_}`;
              if (_)
                return `${(0, _._)(_)}/${_.GetSaleUpdateLandingPageVanity()}`;
              if (_) return `${_}curator/${_.clanSteamID.GetAccountID()}`;
              {
                const _ = _.appid
                    ? `app/${_.appid}`
                    : `group/${_.clanSteamID.GetAccountID()}`,
                  _ = _() ? "view_v2" : "view",
                  _ = _.bOldAnnouncement ? `old_view/${_}` : `${_}/${_}`;
                return `${_}${_()}/${_}/${_}`;
              }
            }
            case "usernewshub":
              return `${_}${_()}/`;
            default:
              return (0, _._)(!1, "Unknown route specified for link"), "";
          }
        }
        function _(_, _, _) {
          const _ = _ === "forceAbsolute" || !_(_, _);
          return _(_, _, _ ? "absolute" : "relative");
        }
        function _(_, _, _, _) {
          const _ = _ === "forceAbsolute" || !_(_, _);
          return _(_, _, _, _ ? "absolute" : "relative");
        }
        function _(_) {
          const { eventModel: _, route: _, bPopup: _ = !0 } = _,
            _ = _(_, _),
            _ = _(_, _, _ ? "relative" : "absolute");
          return (
            _.useEffect(() => {
              _ && (_ ? window.open(_) : window.location.assign(_));
            }, [_, _]),
            _ && _
              ? (0, _.jsx)(_._, {
                  push: !0,
                  _: _,
                })
              : null
          );
        }
        function _(_, _, _) {
          const _ = _(_, _, !1);
          return _ === "admin" ? _ + "partnerevents" : "";
        }
        function _(_) {
          const { eventModel: _, preferredFocus: _ } = _,
            { bCanUseLink: _ } = _.useContext(_._),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _ && _(_.route, _),
            _ = _(_, _.route, _ ? "relative" : "absolute"),
            _ = !_ && _ ? (0, _._)(_) : _,
            _ = _ || !_ ? _ : (0, _._)(_, _),
            _ = _(_, "websitehub", "absolute"),
            _ =
              _.route != "websitehub"
                ? _._.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            _ = _.useCallback(() => {
              _ && window.location.assign(_);
            }, [_]);
          return _
            ? _
              ? (0, _.jsx)(_._, {
                  style: _.style,
                  className: _.className,
                  href: _.createHref({
                    pathname: _,
                  }),
                  onClick: (_) => {
                    _ && (_.onClick?.(_), _.push(_), _.preventDefault());
                  },
                  onOptionsActionDescription: _,
                  onOptionsButton: _ ? _ : void 0,
                  preferredFocus: _,
                  children: _.children,
                })
              : (0, _.jsx)(_._, {
                  href: _,
                  style: _.style,
                  className: _.className,
                  onClick: _.onClick,
                  preferredFocus: _,
                  onOptionsActionDescription: _,
                  onOptionsButton: _ ? _ : void 0,
                  children: _.children,
                })
            : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192,
          _ = 16384,
          _ = 32768,
          _ = 65536,
          _ = 1073741824,
          _ = null;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        function _(_) {
          return _
            ? !!(
                _.related_items &&
                _.related_items.standalone_demo_appid &&
                _.related_items.standalone_demo_appid.length > 0 &&
                _.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function _(_) {
          return !_ || !_.related_items?.standalone_demo_appid
            ? []
            : _.related_items?.standalone_demo_appid;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !1) {
          if (_)
            return _ && (0, _._)(_)
              ? `${_._.STORE_BASE_URL}app/${((0, _._))(_)[0]}`
              : `${_._.STORE_BASE_URL}${_.store_url_path}`;
        }
        function _() {
          window.location.href = `${_._.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = 120;
        class _ {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(_) {
            this.m_unAppID = _;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, _);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == _._ || this.apptype == _._;
          }
          BuildAppURL(_, _) {
            return _
              ? _._.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : (0, _._)(_);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != _._
              ? ((this.m_bInitialized = !0),
                (this.m_strName = _.display_name()),
                (this.m_strIconURL = _.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = _.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(_) {
            try {
              (this.m_strName = _.strName),
                (this.m_strIconURL = _.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
                (this.m_eAppType = _.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, _._)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class _ {}
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = ".jpg";
          (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
            _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.substr(0, 2) + "/")),
            (_ += _),
            _ && _ != "small" && (_ += "_" + _),
            (_ += _),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(() => !!_),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null);
          return {
            bLoading: _,
            bError: _,
            bSuccess: _,
            strError: _,
            strSuccess: _,
            elSuccess: _,
            elError: _,
            strThrobber: _,
            fnSetLoading: _,
            fnSetError: _,
            fnSetSuccess: _,
            fnSetStrError: _,
            fnSetStrSuccess: _,
            fnSetElSuccess: _,
            fnSetElError: _,
            fnSetThrobber: _,
          };
        }
        function _(_, _) {
          _ != k_EResultOK ? _.fnSetError(!0) : _.fnSetSuccess(!0);
        }
        function _(_) {
          const {
              strDialogTitle: _,
              state: _,
              closeModal: _,
              strThrobber: _,
            } = _,
            {
              bLoading: _,
              bError: _,
              bSuccess: _,
              strError: _,
              strSuccess: _,
              elSuccess: _,
              elError: _,
              strThrobber: _,
            } = _;
          return _ || _ || _
            ? (0, _.jsxs)(_._, {
                strTitle: _,
                bAlertDialog: !0,
                closeModal: _,
                className: _.SuccessErrorDialog,
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _.ErrorStylesWithIcon,
                      children:
                        _ || (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!_ && _,
                ],
              })
            : _ || _ || _
              ? (0, _.jsx)(_._, {
                  strTitle: _,
                  strDescription: _ || (0, _._)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: _,
                  className: _.SuccessErrorDialog,
                  children: (0, _.jsx)(_.Fragment, {
                    children: !!_ && _,
                  }),
                })
              : (0, _.jsx)(_._, {
                  strTitle: _,
                  className: _.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, _.jsx)(_._, {
                    string: _ || _ || (0, _._)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = () => (_._.EUNIVERSE === _._ ? 2581 : 45267781);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _,
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { labelledBy: _ } = _ || {},
            [_, _] = _.useState(void 0),
            _ = _.useMemo(
              () => ({
                setHeaderId: _,
              }),
              [],
            );
          return {
            headerId: _ || _,
            context: _,
          };
        }
        function _(_) {
          const {
              active: _,
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _({
              labelledBy: _["aria-labelledby"],
            });
          return (0, _.jsx)(_._.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: (0, _.jsx)(_._, {
                  role: "dialog",
                  "aria-labelledby": _,
                  className: _,
                  ..._,
                  children: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          const {
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: _,
            children: jsx(PopupWindow, {
              ..._,
              onDismiss: _,
              children: jsx(ModalPosition, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": _,
                  "aria-label": _.strTitle,
                  className: _,
                  children: _,
                }),
              }),
            }),
          });
        }
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)("div", {
              className: _,
              children: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = React.useMemo(() => _(), []);
          return jsx(DialogOverlay, {
            ..._,
            DialogWrapper: _,
          });
        }
        function _() {
          return function (_) {
            const { className: _, active: _, children: _, modalKey: _ } = _,
              _ = React.useRef(void 0);
            return (
              useActivateNavTree(_, _, !0),
              jsx(FocusNavigationRoot, {
                className: _,
                navTreeRef: _,
                modal: !0,
                enabled: _,
                navID: `ModalDialogOverlay_${_}`,
                children: _,
              })
            );
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { popup: _, className: _, ..._ } = _,
            _ = (0, _._)(_),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              const _ = _.current;
              if (_ && (0, _._)(_, "Window.SetResizeGrip")) {
                let _ = 0,
                  _ = 0;
                const _ = _.getBoundingClientRect(),
                  _ = _.ownerDocument.defaultView;
                _ &&
                  _ &&
                  !_ &&
                  ((_ = Math.ceil(_.innerWidth - _.left)),
                  (_ = Math.ceil(_.innerHeight - _.top))),
                  _.SteamClient.Window.SetResizeGrip(_, _);
              }
              return () => {
                (0, _._)(_, "Window.SetResizeGrip") &&
                  _.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [_, _]),
            _
              ? null
              : (0, _.jsx)("div", {
                  className: (0, _._)("window_resize_grip", _),
                  ref: _,
                  ..._,
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const _ = (0, _._)().ownerWindow,
            _ = (0, _._)(),
            [_, _] = _.useState(() =>
              _ ||
              (_.onlyPopoutIfNeeded === !0 &&
                _.popupHeight < _.innerHeight * 0.9 &&
                _.popupWidth < _.innerWidth * 0.9 &&
                _.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return _ === "inline"
            ? (0, _.jsx)(_._, {
                active: !0,
                children: _.children,
              })
            : _ === "popout"
              ? (0, _.jsx)(_, {
                  ..._,
                })
              : null;
        }
        function _(_) {
          const {
              popup: _,
              children: _,
              bFitToContent: _,
              className: _,
              ..._
            } = _,
            _ = _.useCallback(
              (_) => {
                const _ = Math.ceil(_.borderBoxSize[0].inlineSize),
                  _ = Math.ceil(_.borderBoxSize[0].blockSize);
                _?.SteamClient.Window.ResizeTo(_, _, !0);
              },
              [_],
            ),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: (0, _._)("PopupFullWindow", _ && "FitToContent", _),
            ref: _ ? _ : void 0,
            ..._,
            children: _,
          });
        }
        function _(_) {
          const {
              strName: _,
              strTitle: _,
              popupWidth: _,
              popupHeight: _,
              browserType: _,
              onDismiss: _,
              bFitToContent: _,
              refPopup: _,
              children: _,
              titleBarClassName: _,
              saveDimensionsKey: _,
            } = _,
            _ = (0, _._)()?.ownerWindow,
            _ = (0, _._)(),
            _ = {
              ...(0, _._)(_),
              onClose: _,
            };
          let _ = 0;
          _.resizable && (_ |= _._.Resizable),
            (_.minWidth || _.minHeight) &&
              (_ |= _._.ApplyBrowserScaleToDimensions),
            _.fullscreen && (_ |= _._.FullScreen);
          const _ = "PopupWindow_" + (_ ? `${_}_` : "") + _.useId(),
            { popup: _, element: _ } = (0, _._)(
              _,
              {
                title: _,
                dimensions: {
                  width: _,
                  height: _,
                },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: _,
                minWidth: _.minWidth,
                minHeight: _.minHeight,
                replace_existing_popup: !0,
                center_on_window: _?.BCenterPopupsOnWindow() ? _ : void 0,
                eCreationFlags: _,
                target_browser: _?.GetBrowserInfo(),
              },
              _,
            );
          if (
            (_.useEffect(
              () => ((0, _._)(_, _), () => (0, _._)(_, void 0)),
              [_, _],
            ),
            _.useEffect(() => {
              _ && (_.document.title = _ ?? _);
            }, [_, _, _]),
            !_)
          )
            return null;
          const _ = _.modal ?? _.onlyPopoutIfNeeded,
            _ = !_.resizable;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  popup: _,
                }),
              _.createPortal(
                (0, _.jsxs)(_._, {
                  ownerWindow: _,
                  children: [
                    (0, _.jsxs)(_, {
                      popup: _,
                      bFitToContent: _,
                      onContextMenu: _._,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _,
                          hideMin: _,
                          hideMax: _,
                          popup: _,
                          hideActions: !_,
                        }),
                        (0, _.jsx)(_._, {
                          bCenterPopupsOnWindow: _?.BCenterPopupsOnWindow(),
                          browserInfo: _?.GetBrowserInfo(),
                          children: _,
                        }),
                      ],
                    }),
                    _.resizable &&
                      !_ &&
                      (0, _.jsx)(_, {
                        popup: _,
                      }),
                  ],
                }),
                _,
              ),
            ],
          });
        }
        function _(_) {
          const { popup: _ } = _,
            _ = _.useCallback(() => {
              _?.SteamClient.Window.BringToFront();
            }, [_]);
          return (
            _.useEffect(_, [_]),
            (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: _,
              }),
            })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.useRef(_().CancelToken.source());
          return (
            _.useEffect(() => {
              const _ = _.current;
              return () => _.cancel(_ ? `${_}: unmounting` : "unmounting");
            }, [_]),
            _.current
          );
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { clanAccountID: _ } = _,
            _ = (0, _._)(() => new _._(_, _._.EUNIVERSE, _.P3F, 0)),
            { bIsFetching: _, rgEventModels: _, fnRefetch: _ } = _(_),
            _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/create?type=creatorhome`,
            _ = () => window.location.assign(_),
            { creatorHome: _, isFetching: _, refetch: _ } = (0, _._)(_),
            _ = _?.GetLinkedEventGID(),
            _ = _ && _?.some((_) => _ == _.GID),
            _ = _ || _,
            _ = () => {
              _(), _();
            },
            _ = _.useMemo(
              () => [...(_ ?? [])].sort((_, _) => _.startTime - _.startTime),
              [_],
            ),
            _ = _.filter((_) => _ && _ == _.GID),
            _ = _.filter((_) => !_ || _ != _.GID);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#CreatorHome_EventLink_Create_ttip"),
                style: {
                  width: "25%",
                },
                children: (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _._)("#CreatorHome_EventLink_Create"),
                }),
              }),
              (0, _.jsx)("h4", {
                children: (0, _._)("#CreatorHome_EventLink_Title"),
              }),
              (0, _.jsx)("p", {
                children: (0, _._)("#CreatorHome_EventLink_Desc"),
              }),
              (0, _.jsx)("br", {}),
              (0, _.jsxs)("div", {
                className: _().ListsCtn,
                children: [
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("h5", {
                          children: (0, _._)(
                            "#CreatorHome_EventLink_ActiveListTitle",
                          ),
                        }),
                        (0, _.jsx)("p", {
                          children: (0, _._)(
                            "#CreatorHome_EventLink_BasicActive",
                          ),
                        }),
                      ],
                    }),
                  _ && (0, _.jsx)(_._, {}),
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _.length > 0 &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("h5", {
                                children: (0, _._)(
                                  "#CreatorHome_EventLink_ActiveListTitle",
                                ),
                              }),
                              (0, _.jsx)("div", {
                                className: _().EntryList,
                                children: _.map((_) =>
                                  (0, _.jsx)(
                                    _,
                                    {
                                      creatorHome: _,
                                      clanSteamID: _,
                                      eventModel: _,
                                      refetch: _,
                                    },
                                    _.GID,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        _.length > 0 &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("h5", {
                                children: (0, _._)(
                                  "#CreatorHome_EventLink_InactiveListTitle",
                                ),
                              }),
                              (0, _.jsx)("div", {
                                className: _().EntryList,
                                children: _.map((_) =>
                                  (0, _.jsx)(
                                    _,
                                    {
                                      creatorHome: _,
                                      clanSteamID: _,
                                      eventModel: _,
                                      refetch: _,
                                    },
                                    _.GID,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
            data: _,
            isFetching: _,
            refetch: _,
          } = (0, _._)({
            queryKey: ["DraftAndHiddenPartnerEvents", _.ConvertTo64BitString()],
            queryFn: async () => {
              const _ =
                  _._.STORE_BASE_URL +
                  "/curator/" +
                  _.GetAccountID() +
                  "/admin/ajaxgetcreatorhomeevents",
                _ = {
                  _: _._.LANGUAGE,
                },
                _ = await _()
                  .get(_, {
                    params: _,
                  })
                  .catch(() => {}),
                _ = new Array();
              return (
                _.push(
                  ..._.data.creatorhome_event_gids.map((_) =>
                    _._.LoadHiddenPartnerEvent(_, _),
                  ),
                ),
                await Promise.all(_)
              );
            },
          });
          return {
            bIsFetching: _,
            rgEventModels: _,
            fnRefetch: _,
          };
        }
        function _(_) {
          const {
              clanSteamID: _,
              creatorHome: _,
              eventModel: _,
              refetch: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = _(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = _(),
            _ = _?.GetLinkedEventGID(),
            _ = _ && _ == _.GID,
            _ = !_ && _.BIsVisibleEvent(),
            _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/partnerevents/clone/${_.GID}?redir=${window.location.href}`,
            _ = () => window.location.assign(_);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                active: _,
                mutateAsync: () =>
                  _.mutateAsync({
                    clanSteamID: _,
                    gid: _.GID,
                  }),
                onClose: (_) => {
                  _(!1), _ && _();
                },
                strTitle: (0, _._)("#Button_Delete"),
                strDescription: (0, _._)(
                  "#CreatorHome_EventLink_Delete_Dialog_Desc",
                ),
                strError: (0, _._)(
                  "#CreatorHome_EventLink_Delete_Dialog_Error",
                ),
              }),
              (0, _.jsx)(_, {
                active: _,
                mutateAsync: () =>
                  _.mutateAsync({
                    clanSteamID: _,
                    gid: _.GID,
                  }),
                onClose: (_) => {
                  _(!1), _ && _();
                },
                strTitle: (0, _._)("#CreatorHome_EventLink_Select"),
                strDescription: (0, _._)(
                  "#CreatorHome_EventLink_Select_Dialog_Desc",
                ),
                strError: (0, _._)(
                  "#CreatorHome_EventLink_Select_Dialog_Error",
                ),
              }),
              (0, _.jsx)(_, {
                active: _,
                mutateAsync: () =>
                  _.mutateAsync({
                    clanSteamID: _,
                    gid: "0",
                  }),
                onClose: (_) => {
                  _(!1), _ && _();
                },
                strTitle: (0, _._)("#CreatorHome_EventLink_Clear"),
                strDescription: (0, _._)(
                  "#CreatorHome_EventLink_Clear_Dialog_Desc",
                ),
                strError: (0, _._)("#CreatorHome_EventLink_Clear_Dialog_Error"),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().Entry, _ && _().Active),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().HeaderRow,
                    children: [
                      (0, _.jsx)("span", {
                        className: _().Label,
                        children: _.GetNameWithFallback(
                          (0, _.sfN)(_._.LANGUAGE),
                        ),
                      }),
                      !_.BIsVisibleEvent() &&
                        (0, _.jsxs)("span", {
                          className: _().UnpublishedState,
                          children: [
                            (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#CreatorHome_EventLink_Unpublished",
                              ),
                            }),
                            (0, _.jsx)(_._, {
                              tooltip: (0, _._)(
                                "#CreatorHome_EventLink_Unpublished_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      _.BIsVisibleEvent() &&
                        !_ &&
                        (0, _.jsxs)("span", {
                          className: _().PublishedAndNotSelectedState,
                          children: [
                            (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected",
                              ),
                            }),
                            (0, _.jsx)(_._, {
                              tooltip: (0, _._)(
                                "#CreatorHome_EventLink_PublishedAndNotSelected_ttip",
                              ),
                              small: !0,
                            }),
                          ],
                        }),
                      _
                        ? (0, _.jsx)(_, {
                            eventModel: _,
                            label: (0, _._)("#CreatorHome_EventLink_Select"),
                            icon: (0, _.jsx)(_.FEq, {}),
                            onClick: () => _(!0),
                            tooltip: (0, _._)(
                              "#CreatorHome_EventLink_Select_ttip",
                            ),
                          })
                        : !_ &&
                          (0, _.jsxs)("div", {
                            className: _().MustPublish,
                            children: [
                              (0, _._)("#CreatorHome_EventLink_MustPublish"),
                              (0, _.jsx)(_._, {
                                tooltip: (0, _._)(
                                  "#CreatorHome_EventLink_MustPublish_ttip",
                                ),
                                small: !0,
                              }),
                            ],
                          }),
                      _ &&
                        (0, _.jsx)(_, {
                          eventModel: _,
                          label: (0, _._)("#CreatorHome_EventLink_Clear"),
                          icon: (0, _.jsx)(_.FEq, {
                            filled: !0,
                          }),
                          onClick: () => _(!0),
                          tooltip: (0, _._)(
                            "#CreatorHome_EventLink_Clear_ttip",
                          ),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().ActionsRow,
                    children: [
                      (0, _.jsx)(_, {
                        eventModel: _,
                        label: (0, _._)("#Button_Edit"),
                        icon: (0, _.jsx)(_.ffu, {}),
                        route: _._.k_eCommunityEdit,
                      }),
                      (0, _.jsx)(_, {
                        eventModel: _,
                        label: (0, _._)("#Button_Preview"),
                        icon: (0, _.jsx)(_.Exy, {}),
                        route: _._.k_eCommunityPreviewSale,
                      }),
                      (0, _.jsx)(_, {
                        eventModel: _,
                        label: (0, _._)("#Button_Clone"),
                        icon: (0, _.jsx)(_.rI_, {}),
                        onClick: _,
                      }),
                      !_ &&
                        (0, _.jsx)(_, {
                          eventModel: _,
                          label: (0, _._)("#Button_Delete"),
                          icon: (0, _.jsx)(_.lMJ, {}),
                          onClick: () => _(!0),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              active: _,
              mutateAsync: _,
              onClose: _,
              strTitle: _,
              strDescription: _,
              strError: _,
            } = _,
            _ = (0, _._)();
          if (_)
            return _.bLoading
              ? (0, _.jsx)(_._, {
                  active: !0,
                  children: (0, _.jsx)(_._, {
                    state: _,
                    strDialogTitle: _,
                  }),
                })
              : (0, _.jsx)(_._, {
                  active: !0,
                  children: (0, _.jsx)(_._, {
                    strTitle: _,
                    strDescription: _,
                    onCancel: () => _(!1),
                    bOKDisabled: _.bLoading,
                    onOK: async () => {
                      _.fnSetLoading(!0);
                      try {
                        (await _()) ? _(!0) : _.fnSetElError(_);
                      } catch {
                        _.fnSetElError(_);
                      }
                    },
                  }),
                });
        }
        function _() {
          return (0, _._)({
            mutationFn: async (_) => {
              const _ =
                  _._.STORE_BASE_URL +
                  "/curator/" +
                  _.clanSteamID.GetAccountID() +
                  "/admin/ajaxselectcreatorhome",
                _ = new FormData();
              return (
                _.append("sessionid", (0, _._)()),
                _.append("gid", _.gid),
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _() {
          return (0, _._)({
            mutationFn: async (_) => {
              const _ =
                  _._.STORE_BASE_URL +
                  "/curator/" +
                  _.clanSteamID.GetAccountID() +
                  "/admin/ajaxdeletecreatorhomeevent",
                _ = new FormData();
              return (
                _.append("sessionid", (0, _._)()),
                _.append("gid", _.gid),
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              );
            },
          });
        }
        function _(_) {
          const {
            eventModel: _,
            label: _,
            tooltip: _,
            icon: _,
            route: _,
            onClick: _,
          } = _;
          (0, _._)(_ || _, "Must specify route or onClick");
          const _ =
            _ ||
            (() => {
              const _ = _ ? (0, _._)(_, null, _, "absolute") : void 0;
              window.location.assign(_);
            });
          return (0, _.jsxs)("div", {
            className: _().ManageButton,
            onClick: _,
            children: [
              (0, _.jsx)("div", {
                className: _().SVGIcon,
                children: _,
              }),
              _,
              _ &&
                (0, _.jsx)(_._, {
                  tooltip: _,
                  small: !0,
                }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ListsCtn: "tBftQdkNwMsCS3Jnef1UH",
          EntryList: "_2XXQSmtLL-udq2lLiHeB6Q",
          Entry: "_1Cd1TJ4SgK5DkDNbI-USUL",
          Active: "bYXdHZaVexq93H1xDBGqm",
          Label: "dI3ijAItl10LuKeR9XCdK",
          UnpublishedState: "_1tt9jL7Dj8I6_LezFi2Zgv",
          PublishedAndNotSelectedState: "_2XhRaA3elALg0OQnynUZu4",
          SelectedSVG: "_3Niy5UbG2M3zTi6wUY2jda",
          HeaderRow: "_2PLSeE9RayjVbZKYqcszIq",
          ManageButton: "_2F5-HSU7JNjiVuDm_h_I4D",
          MustPublish: "oUfRC_JxvbarFSmiUwBCn",
          ActionsRow: "_27NYV-vucABpZz6K_oGGgu",
          SVGIcon: "_3jIkQOyf1K28G5lxJiiDkV",
        };
      },
    },
  ]);
})();
