(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [53337],
    {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return {
            clanid: _,
            appid: _,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        }
        async function _(_, _, _) {
          const _ = (0, _._)("partnereventpermissions", "application_config");
          if (_(_)) {
            const _ = _.find((_) => _.clanid == _);
            if (_) {
              let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
              return _;
            }
          }
          if (_._.logged_in) {
            const _ = _._.InitFromClanID(_);
            let _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, _._)() == "partnerweb"
              ? (_ = `${_._.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${_}`)
              : (0, _._)() == "store" &&
                (_ = `${_._.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${_}`);
            const _ = await fetch(_, {
              method: "GET",
              credentials: "include",
            });
            if (_.status == 200) {
              const _ = await _.json();
              if (_) {
                let { success: _, warn_msg: _, err_msg: _, ..._ } = _;
                return _;
              }
            }
          }
          return _(_, void 0);
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanid == "number" && typeof _[0].appid == "number"
            : !1;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _));
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            queryFn: async () => await _(_, _, _),
            enabled: !!_,
          };
        }
        function _(_) {
          return ["useEventUserPermissions", _._.accountid, _];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsxs)("a", {
            href: _.strURL,
            className: _._.Box,
            "data-modal-content-sizetofit": !!_.bSizeToFit,
            "data-appid": _.appid,
            "data-publishedfileid": _.publishedfileid,
            children: [
              (0, _.jsx)(_._, {
                strURL: _.strPreviewURL,
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    children: _.strTitle,
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)("span", {
                      className: _._.Type,
                      children: _.strType,
                    }),
                  }),
                  _.author &&
                    (0, _.jsx)(_._, {
                      children: _.author,
                    }),
                  (0, _.jsx)(_._, {
                    children: _.strDescription,
                  }),
                ],
              }),
            ],
          });
        }
      },
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _, _, _)).data ?? void 0;
        }
        function _(_, _, _, _, _) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            _?.GID,
            _,
            _,
            _,
            _,
          ];
        }
        function _(_, _, _, _, _, _, _) {
          return {
            queryKey: _(_, _, _, _, _),
            enabled: _ && !!_.GID,
            queryFn: async () => {
              if (!_) return null;
              let _ = new Array();
              if (!_.BImageNeedScreenshotFallback(_, _)) {
                const _ = await _.ensureQueryData((0, _._)(_, _, _, _, _, _));
                if ((_ && _.push(_), _ != _._.full)) {
                  const _ = await _.ensureQueryData(
                    (0, _._)(_, _, _, _, _, _._.full),
                  );
                  _ && _.push(_);
                }
              }
              if (!_)
                try {
                  const _ = await _.ensureQueryData((0, _._)(_, _, _));
                  _ && _.push(_);
                } catch (_) {
                  if (
                    ((0, _._)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${_?.GID} from clan ${_?.clanSteamID.GetAccountID()}`,
                    ),
                    _.length == 0)
                  )
                    throw _;
                }
              return _;
            },
          };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _ = _._.full, _ = !0) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _, _, _)).data ?? void 0;
        }
        function _(_, _, _, _ = _._.full, _ = !0) {
          return ["useEventImageURLWithFallback", _?.GID, _, _, _, _];
        }
        function _(_, _, _, _, _, _ = _._.full, _ = !0) {
          return {
            queryKey: _(_, _, _, _, _),
            enabled: _ && !!_.GID,
            initialData: () => _(_, _, _, _, _),
            queryFn: async () => {
              if (!_) return null;
              let _ = _(_, _, _, _, _);
              if (_) return _;
              const _ = await _.ensureQueryData(
                (0, _._)(_.clanSteamID.GetAccountID(), _),
              );
              if (_ == "capsule") {
                let _ = _.appid;
                if (
                  !_ &&
                  _ &&
                  ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                )
                  if (_.jsondata?.referenced_appids?.length)
                    _ = _.jsondata.referenced_appids[0];
                  else return _.avatar_full_url;
                const _ = await _.ensureQueryData(
                  (0, _._)(_, {
                    appid: _,
                  }),
                );
                return _
                  ? (0, _._)(_, "main_capsule")
                  : _?.avatar_full_url
                    ? _.avatar_full_url
                    : `${_._.STORE_ITEM_BASE_URL}steam/apps/${_}/header.jpg`;
              }
              return _ == "background" &&
                _ &&
                ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                ? _.creator_page_bg_url
                : await _.ensureQueryData((0, _._)(_, _, _));
            },
          };
        }
        function _(_, _, _, _ = _._.full, _ = !0) {
          if (!_) return;
          const _ = _.GetImageURL(_, _, _);
          if (_ && _.trim().length > 0) return _;
          const _ = _._.GetELanguageFallback(_);
          if (_ != _) {
            const _ = _.GetImageURL(_, _, _);
            if (_ && _.trim().length > 0) return _;
          }
          if (_ == "capsule") {
            let _ = _.GetImageFromBeginningOfDescription(_, Number.MAX_VALUE);
            if (_ && (_ || (0, _._)(_))) return _;
          }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_, _, _)).data ?? void 0;
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            enabled: _ && !!_.GID,
            queryFn: async () => {
              if (!_) return null;
              const _ = await _.ensureQueryData(
                  (0, _._)(
                    _,
                    _.appid
                      ? {
                          appid: _.appid,
                        }
                      : void 0,
                  ),
                ),
                _ = await _.ensureQueryData(
                  (0, _._)(_.clanSteamID.GetAccountID(), _),
                );
              if (_.appid)
                if (_) {
                  if (
                    _.all_ages_screenshots &&
                    _.all_ages_screenshots.length > 0
                  ) {
                    let _ = Number(
                      _.bOldAnnouncement
                        ? _.AnnouncementGID
                        : _.GID == null
                          ? 0
                          : _.GID,
                    );
                    if (_.all_ages_screenshots.length > 1)
                      return (
                        (_ = _ % _.all_ages_screenshots.length),
                        `${_._.STORE_ITEM_BASE_URL}${_.all_ages_screenshots[_].filename}`
                      );
                  }
                } else return "";
              if (
                _.GetEventType() != _.ajI &&
                _ &&
                ((_.is_creator_home && !_.is_ogg) || _.is_curator)
              )
                return _.avatar_full_url;
            },
          };
        }
        function _(_) {
          return ["useFallbackArtworkScreenshot", _?.GID];
        }
      },
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 4147080,
          _ = 2025,
          _ = 1764005400,
          _ = 1764612e3,
          _ = "store/promo/steamawards2025/",
          _ = "#173471",
          _ = "#ee6c5d",
          _ = "#FFFFFF";
        function _(_) {
          return _._.EUNIVERSE != _.wLO ? !0 : _ >= _ && _ < _;
        }
        function _(_, _, _, _) {
          const _ = _(_),
            _ = _(_, _),
            _ = _(_, _);
          if (!(!_.length && !_.length))
            return {
              nomination: _.length
                ? {
                    rgCategories: _,
                    bNominationsLive: _,
                  }
                : void 0,
              vote: _.length
                ? {
                    rgCategories: _,
                    bNominationsLive: _,
                  }
                : void 0,
            };
        }
        function _(_) {
          return _ > 0;
        }
        function _(_, _) {
          const _ = [];
          for (const _ of _.filter(_)) {
            const _ = _.find((_) => _.voteid == _);
            _?.localization?.title &&
              _.push({
                eCategoryID: _,
                strTitle: _.localization.title,
                strDescription: _.localization.award_description ?? "",
                bLaborOfLove: _.flag == _._._,
              });
          }
          return _;
        }
        function _(_) {
          return ["SteamAwards.GetUserNominations", _];
        }
        function _(_) {
          return ["StoreSales.GetUserVotes", _, _];
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(_._.accountid),
            { data: _ } = (0, _._)({
              queryKey: _,
              queryFn: async () => await _.GetMySteamAwardNominations(),
              enabled: !!_._.accountid,
            }),
            { mutate: _ } = (0, _._)({
              mutationFn: async (_) => {
                const _ = await _.NominateForSteamAward(_, _);
                if (_ != _._)
                  throw new Error(`SteamAwards.Nominate failed with ${_}`);
              },
              onMutate: (_) =>
                _.setQueryData(_, (_) => [
                  ...(_ ?? []).filter((_) => _.category_id != _),
                  {
                    category_id: _,
                    appid: _,
                  },
                ]),
              onError: () =>
                _.invalidateQueries({
                  queryKey: _,
                }),
            });
          return {
            unNominatedAppID: _?.find((_) => _.category_id == _)?.appid,
            bAnswered: _ != null || !_._.accountid,
            Nominate: _,
          };
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(_._.accountid),
            { data: _ } = (0, _._)({
              queryKey: _,
              queryFn: async () => await _.GetMySteamAwardVotes(),
              enabled: !!_._.accountid,
            }),
            { mutate: _ } = (0, _._)({
              mutationFn: async (_) => {
                const _ = await _.SetSteamAwardVote(_, _);
                if (_ != _._)
                  throw new Error(`StoreSales.SetVote failed with ${_}`);
              },
              onMutate: (_) =>
                _.setQueryData(_, (_) => [
                  ...(_ ?? []).filter((_) => _.voteid != _),
                  {
                    voteid: _,
                    appid: _,
                  },
                ]),
              onError: () =>
                _.invalidateQueries({
                  queryKey: _,
                }),
            });
          return {
            unVotedAppID: _?.find((_) => _.voteid == _)?.appid,
            bAnswered: _ != null || !_._.accountid,
            Vote: _,
          };
        }
      },
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
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 0,
          _ = 1,
          _ = 2;
        function _(_) {
          return "unknown EBroadcastChatPermission ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastWatchLocation ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastChatBan ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastRestriction ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.permission || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gameid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    client_instance_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    cellid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtmp_token: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    thumbnail_upload: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sysid: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    allow_webrtc: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_upload_token: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_interval_seconds: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    as_rtmp: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    delay_seconds: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtmp_token: {
                      _: 5,
                      _: "0",
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    upload_ip_address: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_replay: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sysid: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_token || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    upload_token: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    upload_address: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_upload_id: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    enable_replay: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    http_address: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_token: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    upload_address: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    http_address: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_upload_id: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_rtmp: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gameid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permission: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_rtmp: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    seconds_delay: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_publisher: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    thumbnail_url: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    update_interval: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_uploading: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    duration: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_replay: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_capturing_vod: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_store_whitelisted: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.thumbnail_url || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    thumbnail_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    update_interval: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    num_viewers: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    duration: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    client_cell: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    watch_location: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_webrtc: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.response || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    response: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    mpd_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_id: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gameid: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permission: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_rtmp: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    seconds_delay: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    viewer_token: {
                      _: 10,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      _: 11,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    heartbeat_interval: {
                      _: 12,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    thumbnail_url: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_webrtc: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    webrtc_session_id: {
                      _: 15,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      _: 16,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    webrtc_turn_server: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_replay: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    duration: {
                      _: 19,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      _: 20,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function _(_) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            _ +
            " )"
          );
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    representation: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    approval_response: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.success || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    success: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.permission || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gameid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_data_config: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    state: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function _(_) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            _ +
            " )"
          );
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_result: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    too_many_poor_uploads: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    num_viewers: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_channel_avatar: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.thumbnail_upload_token || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    thumbnail_upload_token: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_data: {
                      _: 3,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    thumbnail_width: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_height: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_upload_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_upload_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_result: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    client_ip: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_cell: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    view_url_template: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    flair_group_ids: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    message: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    instance_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 4,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    country_code: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.persona_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    persona_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    in_game: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    result: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cooldown_time_seconds: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    flair: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.result || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    result: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    chat_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    flair: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    muted: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.persona_names || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    persona_names: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steam_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steam_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    persona: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    first_segment: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    num_segments: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    clip_description: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    start_time: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    end_time: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_description: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channel_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid_broadcaster: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid_clipmaker: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_description: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_time: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    length_milliseconds: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_path: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_permission || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    update_token: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    broadcast_delay: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    app_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    required_app_id: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcast_chat_permission: {
                      _: 6,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    broadcast_buffer: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    steamid: {
                      _: 8,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chat_rate_limit: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    enable_replay: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_partner_chat_only: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wordban_list: {
                      _: 12,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype._ || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    _: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_permission || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    rtmp_host: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtmp_token: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_delay: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    app_id: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    required_app_id: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcast_chat_permission: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    broadcast_buffer: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    steamid: {
                      _: 9,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chat_rate_limit: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    enable_replay: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_partner_chat_only: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wordban_list: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.row_limit || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    row_limit: {
                      _: 1,
                      _: 100,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_time: {
                      _: 2,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    session_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    upload_stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_result || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    upload_result: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_stopped: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    seconds_uploaded: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    max_viewers: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_x: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_y: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    avg_bandwidth: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_bytes: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_unique_viewers: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_seconds_watched: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_started: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_id: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    local_address: {
                      _: 14,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    remote_address: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    frames_per_second: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_representations: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app_name: {
                      _: 18,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_replay: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    session_id: {
                      _: 20,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    upload_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.viewer_stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    viewer_stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    country_stats: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.time || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    time: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_viewers: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.country_code || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    country_code: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    webrtc_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    started: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    offer: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    resolution_x: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_y: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    fps: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    webrtc_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    answer: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sdp_mid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    sdp_mid: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sdp_mline_index: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    candidate: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    webrtc_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
                      _: 2,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate_generation: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.candidate_generation || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    candidate_generation: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    candidates: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cellid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cellid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.turn_server || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    turn_server: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    turn_server: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    answer: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.BeginBroadcastSession = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.EndBroadcastSession = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.StartBroadcastUpload = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyBroadcastUploadStop = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.WatchBroadcast = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, _._)(_, _),
              {
                ePrivilege: 2,
              },
            );
          }
          _.HeartbeatBroadcast = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, _._)(_, _),
              {
                ePrivilege: 2,
              },
            );
          }
          _.StopWatchingBroadcast = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastThumbnail = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.InviteToBroadcast = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SendBroadcastStateToServer = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyBroadcastSessionHeartbeat = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastChatInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
              },
            );
          }
          _.PostChatMessage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UpdateChatMessageFlair = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
              },
            );
          }
          _.MuteBroadcastChatUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
              },
            );
          }
          _.RemoveUserChatText = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetBroadcastChatUserNames = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.StartBuildClip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBuildClipStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetClipDetails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetClipDetails = _;
          function _(_, _, _) {
            return _.SendMsg("Broadcast.SetRTMPInfo#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.SetRTMPInfo = _;
          function _(_, _, _) {
            return _.SendMsg("Broadcast.GetRTMPInfo#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          _.GetRTMPInfo = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyWebRTCHaveTURNServer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCStartResult = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCStopped = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCSetAnswer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCLookupTURNServer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCAddHostCandidate = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCAddViewerCandidate = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCGetHostCandidates = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastUploadStats = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastViewerStats = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: _,
          }),
            (_.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: _,
            }),
            (_.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: _,
            }),
            (_.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: _,
            }),
            (_.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: _,
            }),
            (_.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: _,
            }),
            (_.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: _,
            }),
            (_.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: _,
            }),
            (_.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: _,
            }),
            (_.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: _,
            }),
            (_.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: _,
            }),
            (_.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: _,
            }),
            (_.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: _,
            });
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19;
        function _(_) {
          return "unknown EProductPageAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProductViewAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProductImpressionFromClientType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETrackedEmailType ( " + _ + " )";
        }
        function _(_) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + _ + " )"
          );
        }
        function _(_) {
          return "unknown EUnifedProductInteractionActions ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.impressions || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    impressions: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_impressions: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var _;
        ((_) => {
          function _(_, _) {
            return _.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ReportProductImpressionsFromClient = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    registration_group_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    registration_session_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guest_count: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    jsondata: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    skip_email: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_UpdateRegistration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.availability || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    availability: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    group_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    session_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guest_count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetAvailability_Response_Session";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.registrations || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    registrations: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    group_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    session_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    guests_registered: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    jsondata: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rt_attendance_marked: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    attendance_count: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guests_attendance: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetRegistrations_Response_Registration";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    accountids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.num_emailed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    num_emailed: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_skipped: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_EmailInvitees_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sessionids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    sessionids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParterMeetSteam_TestFireEmails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rt_oldest_date || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rt_oldest_date: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clan_event_gids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleEventOrganizerInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.info || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    info: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetSaleEventOrganizers_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    partnerids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    partnerid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    realname: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    email: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerEmailAndName";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.info || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    info: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPartnerMeetSteam_GetBatchPartnerEmailAndName_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.UpdateRegistration#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.UpdateRegistration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetAvailability#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetAvailability = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetRegistrations#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetRegistrations = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.EmailInvitees#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 4,
              },
            );
          }
          _.EmailInvitees = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.TestFireEmails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 4,
              },
            );
          }
          _.TestFireEmails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetSaleEventOrganizers#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          }
          _.GetSaleEventOrganizers = _;
          function _(_, _, _) {
            return _.SendMsg(
              "PartnerMeetSteam.GetBatchPartnerEmailAndName#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetBatchPartnerEmailAndName = _;
        })(_ || (_ = {}));
      },
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
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11;
        function _(_) {
          return "unknown ESeason ( " + _ + " )";
        }
        function _(_) {
          return "unknown EUserActionEventType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewPrivacyState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EYearInReviewAccessSource ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_playtime_seconds || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_playtime_seconds: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 20,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_sessions: {
                      _: 21,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_sessions: {
                      _: 22,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_sessions: {
                      _: 23,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_sessions: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_sessions: {
                      _: 25,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_sessions: {
                      _: 26,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 27,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      _: 28,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      _: 29,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      _: 30,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      _: 31,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      _: 32,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      _: 33,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.longest_consecutive_days || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    longest_consecutive_days: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_start: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    streak_games: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_rank || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_rank: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vr_rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    deck_rank: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    controller_rank: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linux_rank: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    mac_rank: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    windows_rank: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    playtime_ranks: {
                      _: 4,
                      _: _,
                    },
                    rtime_first_played: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_game_stats: {
                      _: 6,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    new_this_year: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    demo: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    playtest: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_during_early_access: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_vr: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_deck: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_controller: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_linux: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_mac: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    played_windows: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    total_playtime_percentagex100: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_sessions: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_release_date: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    parent_appid: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rank: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.category || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    category: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rankings: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.overall_ranking || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    overall_ranking: {
                      _: 1,
                      _: _,
                    },
                    vr_ranking: {
                      _: 2,
                      _: _,
                    },
                    deck_ranking: {
                      _: 3,
                      _: _,
                    },
                    controller_ranking: {
                      _: 4,
                      _: _,
                    },
                    linux_ranking: {
                      _: 5,
                      _: _,
                    },
                    mac_ranking: {
                      _: 6,
                      _: _,
                    },
                    windows_ranking: {
                      _: 7,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.tag_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    tag_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    tag_weight: {
                      _: 2,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      _: 3,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.screenshots_shared || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    screenshots_shared: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gifts_sent: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loyalty_reactions: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    written_reviews: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guides_submitted: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_contributions: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    badges_earned: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    friends_added: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    forum_posts: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscriptions: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    guide_subscribers: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    workshop_subscribers: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_pct: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_pct: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_pct: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played_avg: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements_avg: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_streak_avg: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    total_stats: {
                      _: 1,
                      _: _,
                    },
                    games: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    playtime_streak: {
                      _: 3,
                      _: _,
                    },
                    months: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    demos_played: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_rankings: {
                      _: 8,
                      _: _,
                    },
                    playtests_played: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    summary_stats: {
                      _: 10,
                      _: _,
                    },
                    substantial: {
                      _: 11,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tag_stats: {
                      _: 12,
                      _: _,
                    },
                    by_numbers: {
                      _: 13,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_month || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rtime_month: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    stats: {
                      _: 2,
                      _: _,
                    },
                    appid: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    relative_monthly_stats: {
                      _: 5,
                      _: _,
                    },
                    game_summary: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.account_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playtime_stats: {
                      _: 3,
                      _: _,
                    },
                    privacy_state: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.from_dbo || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    from_dbo: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    overall_time_ms: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_load_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    query_execution_ms: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    message_population_ms: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.statid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    statid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    fieldid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievement_name_internal: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtime_unlocked: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    all_time_unlocked_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_more_in_future: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.median_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    median_achievements: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_games: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    median_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.new_releases || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    new_releases: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_releases: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    classic_releases: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recent_cutoff_year: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.games_played || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    games_played: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unlocked_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    force_regenerate: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    access_source: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      _: 5,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    stats: {
                      _: 1,
                      _: _,
                    },
                    performance_stats: {
                      _: 2,
                      _: _,
                    },
                    percentiles: {
                      _: 3,
                      _: _,
                    },
                    distribution: {
                      _: 4,
                      _: _,
                    },
                    previous_year_summary: {
                      _: 5,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.privacy_state || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    privacy_state: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    generated_value: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    total_only: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_achievements || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_achievements: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_achievements: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_rare_achievements: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_games_with_achievements: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apps: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_url || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    image_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    preview_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image_width: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_height: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    visibility: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    spoiler_tag: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.jsondata || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    jsondata: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_account_index: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    last_account_index: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    jsondata: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    return_private: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    privacy_state: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rt_privacy_updated: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    privacy_override: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.friend_shares || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    friend_shares: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    year: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.images || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    images: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.year || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    year: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    month: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    games_played: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top_played_appid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    longest_streak_days: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rt_streak_start: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievements: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    screenshots: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetUserSharingPermissions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearAchievements = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearScreenshots = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetMultipleUserActionData = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          }
          _.GetAllUserActionDataForType = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetFriendsSharedYearInReview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetUserYearInReviewShareImage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetYIRCurrentMonthlySummary = _;
        })(_ || (_ = {}));
      },
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = {
            eLocation: _,
          },
          _ = _.createContext(_);
        function _(_) {
          const { children: _, location: _ } = _;
          return (0, _.jsx)(_.Provider, {
            value: {
              ..._,
              eLocation: _ ?? _,
            },
            children: _,
          });
        }
        function _() {
          return _.useContext(_);
        }
        function _() {
          return _().eLocation == _;
        }
        function _() {
          return _().eLocation == _;
        }
        function _() {
          const _ = _();
          return _.eLocation == _ || _.eLocation == _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const { rgDefIDs: _, strCategory: _, itemClass: _ } = _,
            _ = await _._.QueryRewardItems(_, {
              definitionids: _,
              community_item_classes: _ ? [_] : void 0,
              filter_match_any_category_tags: _ ? [_] : void 0,
            });
          if (!_.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + _.GetEResult(),
            );
          return _.Body().toObject().definitions ?? [];
        }
        let _;
        function _() {
          return (
            _ || (_ = new _._(_._.WEBAPI_BASE_URL)), _.GetServiceTransport()
          );
        }
        async function _(_) {
          return _(_(), _);
        }
        const _ = 3600 * 1e3;
        function _(_) {
          return ["LoyaltyRewardDef", _];
        }
        function _(_, _) {
          return ["LoyaltyRewardDefsByCategoryAndClass", _, _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = await _({
                  rgDefIDs: [_],
                }),
                _ = _.length == 1 ? _[0] : void 0;
              if (!_)
                throw new Error(
                  `Asked for point shop item ${_} and got ${_.length} items back, wanted exactly one.`,
                );
              return _;
            },
            enabled: _ > 0,
            staleTime: _,
            retry: !1,
          };
        }
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () =>
              _({
                strCategory: _,
                itemClass: _,
              }),
            enabled: !!(_ && _),
            staleTime: _,
            retry: !1,
          };
        }
        function _(_) {
          const { data: _ } = (0, _._)(_(_));
          return _;
        }
        function _(_, _) {
          const _ = (0, _._)(),
            { data: _ } = (0, _._)(_(_, _));
          return (
            (0, _.useEffect)(() => {
              _?.forEach((_) => {
                _.defid !== void 0 && _.setQueryData(_(_.defid), _);
              });
            }, [_, _]),
            _
          );
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = await _._.GetCommunityInventory(_, {
            filter_appids: [_],
          });
          if (_.GetEResult() != _._)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                _ +
                " answered " +
                _.GetEResult(),
            );
          return _.Body().toObject().items ?? [];
        }
        let _;
        function _() {
          if (!_) {
            const _ = (0, _._)("read_inventory_token", "application_config");
            _ = _ ? new _._(_._.WEBAPI_BASE_URL, _) : (0, _._)();
          }
          return _.GetServiceTransport();
        }
        async function _(_) {
          return _(_(), _);
        }
        const _ = 3 * 1e3,
          _ = 5 * 1e3,
          _ = 15 * 1e3;
        function _(_) {
          return ["QuestCommunityInventory", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: () => _(_),
            enabled: !!_,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function _(_) {
          const { data: _ } = (0, _._)(_(_));
          return _;
        }
        function _(_, _) {
          const _ = _(_);
          return {
            communityItem: (0, _.useMemo)(
              () => _?.find((_) => _.appid == _ && _.item_type == _),
              [_, _, _],
            ),
            bLoaded: _ != null,
          };
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            mutationFn: (_) => _(_, _.appid, _.fnBHasExpectedItems),
          });
        }
        const _ = new WeakMap();
        function _(_, _, _) {
          if (!_ || _(_.getQueryData(_(_)) ?? [])) return Promise.resolve();
          let _ = _.get(_);
          _ || ((_ = new Map()), _.set(_, _));
          let _ = _.get(_);
          return (
            _ || ((_ = _(_, _, _).finally(() => _?.delete(_))), _.set(_, _)), _
          );
        }
        async function _(_, _, _) {
          const _ = [0, _, _()];
          for (const _ of _) {
            _ > 0 && (await _(_));
            let _;
            try {
              (_ = await _(_)), _.setQueryData(_(_), _);
            } catch (_) {
              console.error(
                "Re-reading the community inventory for app " + _ + " failed",
                _,
              );
            }
            if (_(_ ?? [])) return;
          }
        }
        function _() {
          return _ + Math.floor(Math.random() * (_ - _));
        }
        function _(_) {
          return new Promise((_) => setTimeout(_, _));
        }
        function _(_, _, _) {
          _.setQueryData(_(_), _);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        const _ = {
          bCanClaimNewItem: !1,
          bAlreadyClaimedCurrentItem: !1,
        };
        async function _(_, _) {
          const _ = await _._.CanClaimItem(_, {
            language: _,
          });
          if (_.GetEResult() != _._)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + _.GetEResult(),
            );
          const _ = _.Body().toObject(),
            _ = _.reward_item?.defid ? _.reward_item : void 0;
          return {
            bCanClaimNewItem: !!_.can_claim,
            bAlreadyClaimedCurrentItem: !!_,
            appid: _?.appid,
            community_item_type: _?.community_item_type,
            community_item_class: _?.community_item_class,
            rtNextClaimTime:
              (_.next_claim_time ?? 0) > 0 ? _.next_claim_time : void 0,
          };
        }
        async function _(_, _) {
          const _ = await _._.ClaimItem(_, {
            language: _,
          });
          if (_.GetEResult() == _._) return _(_, _);
          if (_.GetEResult() != _._)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + _.GetEResult(),
            );
          const _ = _.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: _?.appid,
            community_item_type: _?.community_item_type,
            community_item_class: _?.community_item_class,
            rtNextClaimTime:
              (_.Body().next_claim_time() ?? 0) > 0
                ? _.Body().next_claim_time()
                : void 0,
          };
        }
        async function _(_, _) {
          const _ = await _._.ActivateProfileModifierItem(_, {
            communityitemid: _.communityitemid,
            appid: _.appid,
            activate: !0,
          });
          if (_.GetEResult() != _._)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + _.GetEResult(),
            );
          return _.GetEResult();
        }
        async function _(_, _, _, _) {
          return (
            await _._.GetCurrentDefinition(_, {
              sale_def_type: _,
              language: _,
              include_community_item_def: _,
            })
          )
            .Body()
            .toObject();
        }
        async function _(_, _, _, _) {
          return (
            await _._.GetClaimedSaleRewards(_, {
              sale_def_type: _,
              language: _,
              include_community_item_def: _,
            })
          )
            .Body()
            .toObject();
        }
        let _;
        function _() {
          if (!_) {
            const _ = (0, _._)("loyalty_webapi_token", "application_config");
            _ = _ ? new _._(_._.WEBAPI_BASE_URL, _) : (0, _._)();
          }
          return _.GetServiceTransport();
        }
        async function _(_) {
          return _(_(), _);
        }
        async function _(_) {
          return _(_(), _);
        }
        async function _(_) {
          return _(_(), _);
        }
        const _ = 300 * 1e3;
        let _ = !1,
          _ = null;
        const _ = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: _._,
        };
        function _(_) {
          return ["SaleItemCanClaim", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: () => _(_),
            enabled: !_,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function _() {
          const _ = _._.LANGUAGE,
            _ = (0, _._)(),
            { data: _, isLoading: _ } = (0, _._)(_(_)),
            _ = _?.rtNextClaimTime;
          return (
            (0, _.useEffect)(() => {
              let _ = 0;
              if (_) {
                const _ = () => {
                  const _ = _ * 1e3 - Date.now();
                  if (_ <= 0) {
                    _.invalidateQueries({
                      queryKey: _(_),
                    });
                    return;
                  }
                  _ = window.setTimeout(_, _ > _ ? _ / 2 : _);
                };
                _();
              }
              return () => window.clearTimeout(_);
            }, [_, _, _]),
            {
              ...(_ ?? _),
              bLoading: _,
            }
          );
        }
        function _() {
          const _ = (0, _._)(),
            { mutateAsync: _ } = (0, _._)({
              mutationFn: () => {
                if (_) {
                  const _ = _;
                  return (_ = null), Promise.resolve(_);
                }
                return _
                  ? Promise.resolve(_.getQueryData(_(_._.LANGUAGE)) ?? _)
                  : _(_._.LANGUAGE);
              },
              onSuccess: (_) => _.setQueryData(_(_._.LANGUAGE), _),
            });
          return {
            fnClaimItem: (0, _.useCallback)(() => _(), [_]),
          };
        }
        function _() {
          return (0, _._)({
            mutationFn: (_) => _(_),
          });
        }
        function _() {
          const _ = (0, _._)();
          return {
            fnSetClaimState: (0, _.useCallback)(
              (_) => {
                (_ = !0),
                  (_ = _.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ..._,
                      }
                    : null),
                  _.setQueryData(_(_._.LANGUAGE), _);
              },
              [_],
            ),
          };
        }
        function _(_, _, _) {
          return ["SaleRewardsGetDefinition", _, _, _];
        }
        function _(_, _, _, _) {
          return {
            queryKey: _(_, _, _),
            queryFn: () => _(_, _, _, _),
            staleTime: 1 / 0,
          };
        }
        function _(_, _, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _, _));
        }
        function _(_, _, _, _) {
          return ["GetClaimedSaleRewards", _, _, !!_, _];
        }
        function _(_, _, _, _, _) {
          return {
            queryKey: _(_, _, _, _),
            queryFn: () => _(_, _, _, _),
            staleTime: 1 / 0,
          };
        }
        function _(_, _, _, _) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _, _, _, _));
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
          _ = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(_ || {});
        function _(_) {
          const { arrowFill: _, arrowStyle: _, direction: _ } = _;
          switch (_) {
            default:
            case _.k_ECutArrowStyle: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.uMb, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EDoubleArrowStyle: {
              const _ = _ == "right" ? 180 : 0;
              return (0, _.jsx)(_.F2T, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EThickChevron: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.l8x, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EFilledArrow: {
              const _ = _ == "right" ? 90 : 270;
              return (0, _.jsx)(_.V5W, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EPointyArrow:
              return (0, _.jsx)(_.L0X, {
                fill: _ || "white",
                role: "presentation",
                direction: _ || "left",
              });
          }
        }
        function _(_) {
          const {
              bIsActive: _,
              breadcrumbActiveColor: _,
              breadcrumbColor: _,
              breadcrumbStyle: _,
            } = _,
            _ = _ ? _ || "#FFFFFF" : _ || "#606974";
          switch (_) {
            default:
            case _.k_EPillCrumb:
              return (0, _.jsx)(_.IGf, {
                fill: _,
                role: "presentation",
              });
            case _.k_ECircularCrumb:
              return (0, _.jsx)(_.az8, {
                fill: _,
                role: "presentation",
              });
            case _.k_ESquareCrumb:
              return (0, _.jsx)(_.koA, {
                fill: _,
                role: "presentation",
              });
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = 1778623200;
        function _(_, _) {
          let _ = !1;
          return (
            _ && _.GetEventType() == _.ajI
              ? (_ = !0)
              : _ && _ && _.is_creator_home && (_ = _(_, _)),
            _
          );
        }
        function _(_, _) {
          return !!_ && !!_.is_creator_home && (_.createTime ?? 0) > _;
        }
        function _(_) {
          const _ = useClanInfoByAccountID(_.clanSteamID.GetAccountID());
          return _(_, _.data);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { bExpanded: _, setExpanded: _ } = _;
          return (0, _.jsx)(_._, {
            className: _()(_.ExpandRowButton, _ && _.Selected),
            onClick: () => _(!_),
            children: (0, _.jsx)(_.b8_, {
              direction: "down",
            }),
          });
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.k_eLibrary = 1)] = "k_eLibrary"),
            (_[(_.k_eWishlist = 2)] = "k_eWishlist"),
            (_[(_.k_eFollowing = 4)] = "k_eFollowing"),
            (_[(_.k_eRecommended = 8)] = "k_eRecommended"),
            (_[(_.k_eSteam = 16)] = "k_eSteam"),
            (_[(_.k_eRequired = 32)] = "k_eRequired"),
            (_[(_.k_eFeatured = 64)] = "k_eFeatured"),
            (_[(_.k_eCurator = 128)] = "k_eCurator"),
            (_[(_.k_eReposted = 256)] = "k_eReposted"),
            _
          ))(_ || {});
        class _ {
          clanid;
          unique_id;
          event_type;
          appid;
          start_time;
          appInfo;
          clanInfo;
          score;
          GetSource() {
            return this.appInfo
              ? this.appInfo.source
              : (this.clanInfo?.source ?? 0);
          }
          static GetEntityNameForID(_, _) {
            if (_)
              return (
                _._.Get().GetApp(_)?.GetName() ??
                (0, _._)("#EventCalendar_MuteApp_Unknown")
              );
            if (_) {
              const _ = _._.GetClanInfoByClanAccountID(_);
              if (_?.group_name) return _.group_name;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
          static BHasEntityNameForID(_, _) {
            return _
              ? !!_._.Get().GetApp(_)?.GetName()
              : _
                ? !!_._.GetClanInfoByClanAccountID(_)?.group_name
                : !1;
          }
          GetEntityName() {
            return _.GetEntityNameForID(this.appid, this.clanid);
          }
          GetGameCapsule() {
            if (this.appInfo)
              return _._.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetMainCapsuleURL();
            if (this.clanInfo) {
              let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (_) return _.avatar_full_url;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
          GetGameIcon() {
            if (this.appInfo)
              return _._.Get()
                .GetApp(this.appInfo.appid)
                ?.GetAssets()
                ?.GetCommunityIconURL();
            if (this.clanInfo) {
              let _ = _._.GetClanInfoByClanAccountID(this.clanInfo.clanid);
              if (_) return _.avatar_full_url;
            }
            return (0, _._)("#EventCalendar_MuteApp_Unknown");
          }
        }
        class _ {
          appid;
          source;
          playtime;
          last_played;
          wishlist_added;
        }
        class _ {
          clanid;
          source;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        const _ = 20,
          _ = /^.*youtube[^v]+v=(.{11}).*/,
          _ = /^.*youtu\.be\/(.{11}).*/,
          _ = /^.*youtube.*\/embed\/(.{11}).*/,
          _ = /^.*[?&]t=([^&]+)(?:&|$)/,
          _ = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function _(_) {
          return !!_(_);
        }
        function _(_) {
          return (
            _?.length < _ ? void 0 : _.exec(_) || _.exec(_) || _.exec(_)
          )?.[1];
        }
        function _(_) {
          return _.exec(_)?.[1];
        }
        function _(_) {
          const _ = _.exec(_);
          if (!(_?.[1] || _?.[2] || _?.[3] || _?.[4])) return;
          if (_?.[4]) return parseInt(_?.[4]);
          let _ = 0;
          return (
            _?.[1] && (_ += 3600 * parseInt(_[1])),
            _?.[2] && (_ += 60 * parseInt(_[2])),
            _?.[3] && (_ += parseInt(_[3])),
            _
          );
        }
        function _(_) {
          const _ = _(_);
          if (!_) return;
          const _ = _(_),
            _ = _ ? _(_) : void 0;
          return {
            strVideoID: _,
            nStartSeconds: _,
          };
        }
      },
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_clan_event_gid(_);
              const _ = await _._.GetAvailability(_, _);
              return _.BSuccess()
                ? _.Body()
                    .availability()
                    .map((_) => _.toObject())
                : [];
            },
            enabled: (0, _._)() == _,
            staleTime: _._.PerMinute * 10,
          });
        }
        const _ = (_, _) => ["useMeetSteamGetAvailability", _, _];
        function _(_, _, _, _) {
          return (0, _._)({
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_type(_._._),
                _.Body().set_steamid(
                  _._.InitFromAccountID(_).ConvertTo64BitString(),
                ),
                _.Body().set_gid(_);
              const _ = (0, _._)(),
                _ = await _._.GetUserActionData(_.GetServiceTransport(), _),
                _ = _.Body().jsondata();
              return _.BSuccess() && _ ? JSON.parse(_) : {};
            },
            enabled: (0, _._)() == _ && !!_,
          });
        }
        const _ = (_, _, _) => ["useMeetSteamGetRegistrationDetails", _, _, _];
        function _(_) {
          const _ = Intl.DateTimeFormat().resolvedOptions().timeZone;
          return _.location_type === "in_person"
            ? (_.in_person_time_zone ?? _._)
            : _;
        }
        function _(_) {
          return (0, _._)(() => ({
            rtime_start: _.rtime_start,
            rtime_end: _.rtime_end,
            sDisplayTimeZone: _(_),
          }));
        }
        function _(_, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset();
          return new Date((_ + _ * 60) * 1e3);
        }
        function _(_, _) {
          const _ = _(_, _),
            _ = new Date();
          return _.getFullYear() == _.getFullYear() ? (0, _._)(_) : (0, _._)(_);
        }
        function _(_, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset();
          return (0, _._)(_ + _ * 60);
        }
        function _(_, _, _, _) {
          const _ = _().unix(_),
            _ = _().unix(_)._(_).utcOffset() - _.utcOffset(),
            _ = _().unix(_),
            _ = _().unix(_)._(_),
            _ = _.utcOffset() - _.utcOffset();
          return (
            (0, _._)(_ + _ * 60, _ + _ * 60, !0) +
            (_ ? "" : " " + _.format("z"))
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.k_eDiscussions = 0)] = "k_eDiscussions"),
            (_[(_.k_eThumbsUp = 1)] = "k_eThumbsUp"),
            (_[(_.k_eClickThrough = 2)] = "k_eClickThrough"),
            (_[(_.k_eMuted = 3)] = "k_eMuted"),
            (_[(_.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
            (_[(_.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
            (_[(_.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
            (_[(_.k_eReminder_Email = 7)] = "k_eReminder_Email"),
            (_[(_.k_eReminder_CalendarApple = 8)] =
              "k_eReminder_CalendarApple"),
            (_[(_.k_eReminder_CalendarGoogle = 9)] =
              "k_eReminder_CalendarGoogle"),
            (_[(_.k_eReminder_CalendarOutlook = 10)] =
              "k_eReminder_CalendarOutlook"),
            (_[(_.k_eReminder_EmailUnverified = 11)] =
              "k_eReminder_EmailUnverified"),
            (_[(_.k_eReminder_MobilePushMissing = 12)] =
              "k_eReminder_MobilePushMissing"),
            _
          ))(_ || {});
        class _ {
          m_nPastViewedIndex = 0;
          m_nPastViewedDays = 0;
          m_nFutureViewedIndex = 0;
          m_nFutureViewableEvents = 0;
          m_nLastRecordedFilter = 0;
          m_sBrowserID = void 0;
          m_scheduledFilterChange = new _._();
          m_scheduledFutureStats = new _._();
          m_scheduledPastStats = new _._();
          RecordViewedEvent(_, _) {
            const _ = _.GetStoreInitializationTimestamp().getTime() / 1e3;
            this.m_nFutureViewableEvents = 0;
            let _ = 0,
              _,
              _;
            const _ = _.GetCurrentlyLoadedItemsForStats();
            for (const _ of _) {
              const _ = _.start_time > _;
              if ((_.unique_id == _ && ((_ = _), (_ = _)), _))
                this.m_nFutureViewableEvents++;
              else if (_ !== void 0) break;
              _++;
            }
            if (!(_ === void 0 || !_))
              if (_ < this.m_nFutureViewableEvents) {
                const _ = this.m_nFutureViewableEvents - _;
                if (this.m_nFutureViewedIndex < _) {
                  this.m_nFutureViewedIndex = _;
                  const _ = () => {
                    const _ =
                      Math.min(this.m_nFutureViewedIndex, 4095) |
                      (Math.min(this.m_nFutureViewableEvents, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(_), 2047) << 20);
                    _.SendExperimentEventToSteam(_._._, _);
                  };
                  this.m_scheduledFutureStats.Schedule(500, _);
                }
              } else {
                const _ = _ - this.m_nFutureViewableEvents;
                if (this.m_nPastViewedIndex < _) {
                  (this.m_nPastViewedIndex = _),
                    (this.m_nPastViewedDays = Math.floor(
                      (_ - _.start_time) / (24 * 3600),
                    ));
                  const _ = () => {
                    const _ =
                      Math.min(this.m_nPastViewedIndex, 4095) |
                      (Math.min(this.m_nPastViewedDays, 255) << 12) |
                      (Math.min(this.GetTimeSpentOnPageS(_), 2047) << 20);
                    _.SendExperimentEventToSteam(_._._, _);
                  };
                  this.m_scheduledPastStats.Schedule(500, _);
                }
              }
          }
          RecordFilterChangeEvent(_) {
            const _ = () => {
              let _ = 0;
              _.BIsGameSourceAllowed(_._.k_ELibrary) && (_ |= 1),
                _.BIsGameSourceAllowed(_._.k_EWishlist) && (_ |= 2),
                _.BIsGameSourceAllowed(_._.k_EFollowing) && (_ |= 4),
                _.BIsGameSourceAllowed(_._.k_ERecommended) && (_ |= 8),
                _.BIsGameSourceAllowed(_._.k_ESteam) && (_ |= 16),
                _.BIsGameSourceAllowed(_._.k_EFeatured) && (_ |= 32),
                _.BIsGameSourceAllowed(_._.k_ERecent) && (_ |= 64),
                _.BIsEventTypeGroupAllowed(_._.k_ENews) && (_ |= 1024),
                _.BIsEventTypeGroupAllowed(_._.k_EEvents) && (_ |= 2048),
                _.BIsEventTypeGroupAllowed(_._.k_EStreaming) && (_ |= 4096),
                _.BIsEventTypeGroupAllowed(_._.k_EUpdates) && (_ |= 8192),
                _.BIsEventTypeGroupAllowed(_._.k_EReleases) && (_ |= 16384),
                _.BIsEventTypeGroupAllowed(_._.k_ESales) && (_ |= 32768),
                _ != this.m_nLastRecordedFilter &&
                  ((this.m_nLastRecordedFilter = _),
                  this.SendExperimentEventToSteam(_._._, _));
            };
            this.m_scheduledFilterChange.Schedule(1e3, _);
          }
          GetTimeSpentOnPageS(_) {
            const _ = _.GetStoreInitializationTimestamp();
            return Math.max(
              0,
              Math.floor((new Date().getTime() - _.getTime()) / 1e3),
            );
          }
          RecordAppInteractionEvent(_, _) {
            this.SendExperimentEventToSteam(_._._, _);
          }
          SendExperimentEventToSteam(_, _) {
            this.InitBrowserID();
            const _ = _._.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              _ = new URLSearchParams();
            _.append("page_action", "" + _),
              _.append("snr", _._.SNR),
              _.append("uint_data", "" + _),
              _.append("str_data", this.m_sBrowserID ?? ""),
              _().post(_, _);
          }
          InitBrowserID() {
            if (this.m_sBrowserID === void 0)
              if (_._.IN_CLIENT) this.m_sBrowserID = "steam";
              else {
                const _ = navigator.userAgent;
                /iPhone|iPad|iPod/i.test(_) ||
                (/Macintosh/i.test(_) && /Safari/i.test(_))
                  ? (this.m_sBrowserID = "ios")
                  : /Android/i.test(_)
                    ? (this.m_sBrowserID = "android")
                    : (this.m_sBrowserID = "");
              }
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarTrackingStore", _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = ((_) => (
            (_.k_ERecent = "recent"),
            (_.k_ELibrary = "library"),
            (_.k_EWishlist = "wishlist"),
            (_.k_EFollowing = "following"),
            (_.k_ERecommended = "recommended"),
            (_.k_ESteam = "steam"),
            (_.k_EFeatured = "featured"),
            (_.k_ECurator = "curator"),
            _
          ))(_ || {});
        const _ = [
            "library",
            "wishlist",
            "following",
            "recommended",
            "steam",
            "curator",
          ],
          _ = [..._, "featured"],
          _ = ["featured"];
        var _ = ((_) => (
          (_.k_ENews = "news"),
          (_.k_EEvents = "events"),
          (_.k_EStreaming = "streaming"),
          (_.k_EUpdates = "updates"),
          (_.k_EReleases = "releases"),
          (_.k_ESales = "sales"),
          _
        ))(_ || {});
        const _ = [
            "news",
            "events",
            "streaming",
            "updates",
            "releases",
            "sales",
          ],
          _ = new Map([
            ["news", [_.uYK]],
            ["events", [_.L0X, _.I5b, _._, _._, _.hGl, _.WNR, _.pIh, _.izQ]],
            ["streaming", [_.KDJ]],
            ["updates", [_.Fwr, _._, _.zeJ]],
            ["releases", [_.yhO, _.Aqr, _.DEQ, _.f4X, _.zcX]],
            ["sales", [_.HRy, _.C$4, _.LOv, _.HFK]],
          ]),
          _ = 1599202800;
        function _(_) {
          return new Map(_.map((_) => [_, !0]));
        }
        class _ {
          m_mapEventTypeGroupsAllowed = new Map();
          m_mapGameSources = new Map();
          m_bCuratorUnhideOnFollowDialogDismissed = !1;
          m_mapHiddenApps = new Map();
          m_mapHiddenClans = new Map();
          m_bInitializedForUpdatesOnly = !1;
          m_eStorageType = "session";
          m_strStorageKey;
          constructor(_) {
            (0, _._)(this),
              (0, _._)(() => {
                _?.rgHiddenApps &&
                  _.rgHiddenApps.forEach((_) =>
                    this.m_mapHiddenApps.set(_, !0),
                  ),
                  _?.rgHiddenClans &&
                    _.rgHiddenClans.forEach((_) =>
                      this.m_mapHiddenClans.set(_, !0),
                    );
              });
          }
          GetGameSources() {
            return Array.from(this.m_mapGameSources.keys());
          }
          GetStorageObject() {
            return this.m_strStorageKey
              ? this.m_eStorageType === "session"
                ? window.sessionStorage
                : window.localStorage
              : null;
          }
          GetPreferencesStorageKey() {
            return `${this.m_strStorageKey}-event-calendar-prefs`;
          }
          get enabledEventTypeSet() {
            const _ = new Set();
            for (const _ of Array.from(this.m_mapEventTypeGroupsAllowed.keys()))
              _.get(_)?.forEach((_) => _.add(_));
            return _;
          }
          MapClanEventTypeToGroup(_) {
            let _;
            return (
              _.forEach((_, _) => {
                _.indexOf(_) !== -1 && (_ = _);
              }),
              _ || "events"
            );
          }
          InitDefaultCheckboxes(_, _, _) {
            (this.m_bInitializedForUpdatesOnly = _),
              (this.m_mapEventTypeGroupsAllowed = _(_ ? ["updates"] : _));
            const _ = (0, _._)() ? _ : _;
            (this.m_mapGameSources = _(_ ? _ : _)),
              _ && this.m_mapGameSources.set("featured", !0);
          }
          Init(_, _, _, _, _) {
            (this.m_eStorageType = _), (this.m_strStorageKey = _);
            const _ = this.GetStorageObject(),
              _ = _ ? _.getItem(this.GetPreferencesStorageKey()) : null;
            if (_) {
              const _ = JSON.parse(_);
              if (_.rgEventTypeGroupsAllowed && _.rgGameSources) {
                const { rgEventTypeGroupsAllowed: _, rgGameSources: _ } = _;
                (this.m_mapEventTypeGroupsAllowed = _(_)),
                  (this.m_mapGameSources = _(_)),
                  _.bCuratorUnhideOnFollowDismissed !== void 0 &&
                    (this.m_bCuratorUnhideOnFollowDialogDismissed =
                      _.bCuratorUnhideOnFollowDismissed);
                return;
              }
            }
            this.InitDefaultCheckboxes(_, _, _);
          }
          SaveFilterPreferences() {
            const _ = this.GetStorageObject();
            if (!_) return;
            const _ = {
              rgEventTypeGroupsAllowed: Array.from(
                this.m_mapEventTypeGroupsAllowed.keys(),
              ),
              rgGameSources: Array.from(this.m_mapGameSources.keys()),
              bCuratorUnhideOnFollowDismissed:
                this.m_bCuratorUnhideOnFollowDialogDismissed,
            };
            _.setItem(this.GetPreferencesStorageKey(), JSON.stringify(_));
          }
          BCuratorUnhideOnFollowDialogDismissed() {
            return this.m_bCuratorUnhideOnFollowDialogDismissed;
          }
          SetCuratorUnhideOnFollowDialogDismissed(_) {
            (this.m_bCuratorUnhideOnFollowDialogDismissed = _),
              this.SaveFilterPreferences();
          }
          BIsEventTypeGroupAllowed(_) {
            return this.m_mapEventTypeGroupsAllowed.has(_);
          }
          BIsGameSourceAllowed(_) {
            return (_ === "following" && !(0, _._)()) ||
              (_ === "curator" && !(0, _._)())
              ? !1
              : this.m_mapGameSources.has(_);
          }
          SetEventTypeGroupAllowed(_, _) {
            _
              ? this.m_mapEventTypeGroupsAllowed.set(_, !0)
              : this.m_mapEventTypeGroupsAllowed.delete(_),
              this.SaveFilterPreferences(),
              _._.RecordFilterChangeEvent(this);
          }
          SetGameSourceAllowed(_, _) {
            _
              ? (this.m_mapGameSources.set(_, !0),
                _ == "recent"
                  ? this.m_mapGameSources.delete("library")
                  : _ == "library" &&
                    ((0, _._)(
                      !this.m_mapGameSources.has("recent"),
                      "Setting Library although Recent already set - illusion was broken",
                    ),
                    this.m_mapGameSources.delete("recent")))
              : (this.m_mapGameSources.delete(_),
                _ == "recent"
                  ? this.m_mapGameSources.set("library", !0)
                  : _ == "library" && this.m_mapGameSources.delete("recent")),
              this.SaveFilterPreferences(),
              _._.RecordFilterChangeEvent(this);
          }
          BShouldDisplayEvent(_) {
            const _ = _.GetSource(),
              _ = 4320 * 3600,
              _ = !!(
                _.appInfo &&
                _.appInfo.last_played &&
                _.appInfo.last_played + _ >= _._.GetTimeNowWithOverride()
              );
            return (!this.enabledEventTypeSet.has(_.event_type) &&
              !(
                this.m_bInitializedForUpdatesOnly &&
                this.BIsEventTypeGroupAllowed("updates") &&
                _.event_type == _.uYK &&
                _.start_time < _
              )) ||
              this.m_mapHiddenApps.has(_.appid) ||
              this.m_mapHiddenClans.has(_.clanid)
              ? !1
              : _ & _._.k_eRequired || _ & _._.k_eReposted
                ? !0
                : !!(
                    (this.BIsGameSourceAllowed("recent") && _) ||
                    (this.BIsGameSourceAllowed("library") &&
                      _ & _._.k_eLibrary) ||
                    (this.BIsGameSourceAllowed("wishlist") &&
                      _ & _._.k_eWishlist) ||
                    (this.BIsGameSourceAllowed("following") &&
                      _ & _._.k_eFollowing) ||
                    (this.BIsGameSourceAllowed("recommended") &&
                      _ & _._.k_eRecommended) ||
                    (this.BIsGameSourceAllowed("steam") && _ & _._.k_eSteam) ||
                    (this.BIsGameSourceAllowed("featured") &&
                      _ & _._.k_eFeatured) ||
                    (this.BIsGameSourceAllowed("curator") && _ & _._.k_eCurator)
                  );
          }
          BAreAllEventsHidden() {
            return (
              this.m_mapEventTypeGroupsAllowed.size == 0 ||
              this.m_mapGameSources.size == 0
            );
          }
          BAreAnyEventsFiltered(_) {
            const _ = (0, _._)() ? _ : _;
            return (
              (_ ? _ : _).some((_) => !this.BIsGameSourceAllowed(_)) ||
              _.some((_) => !this.BIsEventTypeGroupAllowed(_))
            );
          }
          BIsClanVisible(_) {
            return !this.m_mapHiddenClans.has(_);
          }
          SetClanVisibility(_, _) {
            _
              ? this.m_mapHiddenClans.has(_) && this.m_mapHiddenClans.delete(_)
              : this.m_mapHiddenClans.has(_) ||
                this.m_mapHiddenClans.set(_, !0);
          }
          BIsAppVisible(_) {
            return !this.m_mapHiddenApps.has(_);
          }
          SetAppVisibility(_, _) {
            _
              ? this.m_mapHiddenApps.has(_) && this.m_mapHiddenApps.delete(_)
              : this.m_mapHiddenApps.has(_) || this.m_mapHiddenApps.set(_, !0);
          }
        }
        _([_._], _.prototype, "m_mapEventTypeGroupsAllowed", 2),
          _([_._], _.prototype, "m_mapGameSources", 2),
          _([_._], _.prototype, "m_bCuratorUnhideOnFollowDialogDismissed", 2),
          _([_._], _.prototype, "m_mapHiddenApps", 2),
          _([_._], _.prototype, "m_mapHiddenClans", 2),
          _(
            [
              (0, _._)({
                keepAlive: !0,
                equals: _._.structural,
              }),
            ],
            _.prototype,
            "enabledEventTypeSet",
            1,
          ),
          _([_._], _.prototype, "SetEventTypeGroupAllowed", 1),
          _([_._], _.prototype, "SetGameSourceAllowed", 1);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, _._)();
          }
          set nOverrideDateNow(_) {
            (0, _._)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, _._)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, _._)();
          }
          BHasTimeOverride() {
            return !!(0, _._)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarDevFeatures", _);
        function _(_ = 1) {
          const [_, _] = React.useState(() => _()),
            _ = useCancelTokenSource("useTimeNowWithOverride"),
            _ = React.useCallback(() => {
              _.token.reason || _(_());
            }, []);
          return (
            React.useEffect(() => {
              const _ = 1e3 * _,
                _ = Date.now() % _,
                _ = _ - _,
                _ = window.setTimeout(_, _);
              return () => {
                window.clearTimeout(_);
              };
            }, [_, _, _]),
            _
          );
        }
        const _ = Math.floor(new Date().getTime() / 1e3);
        function _() {
          const _ = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (_ - _) : _;
        }
        function _() {
          return _.nOverrideDateNow ?? _;
        }
        function _() {
          return _.useMemo(() => _(), []);
        }
        function _() {
          return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          registered: !1,
        };
        function _(_) {
          return {
            queryKey: ["sale", "giveawayregistration", _, _._.accountid],
            queryFn: () => _(_),
            enabled: !!_,
            retry: !1,
          };
        }
        function _(_) {
          const { data: _, isError: _ } = (0, _._)(_(_));
          return _ ? _ : _;
        }
        function _() {
          const _ = (0, _._)(),
            { mutateAsync: _ } = (0, _._)({
              mutationFn: _,
              onSuccess: (_, _) => _.setQueryData(_(_).queryKey, _),
            });
          return {
            fnCreateRegistration: _.useCallback(
              async (_) => {
                try {
                  return await _(_);
                } catch (_) {
                  return (
                    console.error(
                      "Registering for giveaway " + _ + " failed",
                      _,
                    ),
                    _
                  );
                }
              },
              [_],
            ),
          };
        }
        const _ = "saleaction/giveawayregistration",
          _ = "saleaction/creategiveawayregistration";
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _ + "?name=" + encodeURIComponent(_),
            _ = await fetch(_, {
              credentials: "include",
            });
          return await _("GetUserGiveawayRegistration", _, _, _);
        }
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _,
            _ = await fetch(_, {
              method: "POST",
              credentials: "include",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                name: _,
              }),
            });
          return await _("UpdateUserGiveawayRegistration", _, _, _);
        }
        async function _(_, _, _, _) {
          if (!_._) throw new Error(_ + " answered " + _.status);
          const _ = await _.json();
          if (_?.success == _._ && _.registration) return _.registration;
          throw new Error(_ + " on " + _ + " answered " + _?.success);
        }
      },
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 2640290,
          _ = 3334340,
          _ = _._,
          _ = 2215130;
        let _;
        function _() {
          return (
            _ || (_ = (0, _._)("steam_awards_config", "application_config")), _
          );
        }
        const _ = _.createContext(null);
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardDefs_${_}`],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_appid(_),
                _.Body().set_language(_._.LANGUAGE),
                (await _._.GetVoteDefinitions(_, _)).Body().toObject()
              );
            },
            initialData: () => _()?.definitions,
            enabled: _ > 0,
          });
        }
        async function _(_) {
          const _ = _._.Init(_._);
          return (
            (await _._.GetUserNominations(_, _)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardNominations_${_._.accountid}`],
            queryFn: () => _(_),
            initialData: () => _()?.user_nominations?.nominations,
            enabled: _._.logged_in,
          });
        }
        function _(_) {
          const _ = _();
          return _.isLoading
            ? {
                bLoadingNominationForCategory: !0,
              }
            : {
                currentNomination: _.data?.find((_) => _.category_id == _),
                bLoadingNominationForCategory: !1,
              };
        }
        function _() {
          return [`SteamAwardBadgeProgress_${_._.accountid}`];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(),
            queryFn: async () => {
              const _ = _._.Init(_.jng);
              return (
                _.Body().set_badgeid(_),
                _.Body().set_steamid(_._.steamid),
                (await _.xtC.GetCommunityBadgeProgress(_, _)).Body().toObject()
              );
            },
            initialData: () => _()?.badge_progress,
            enabled: _._.logged_in,
          });
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardSuggestions_${_}`],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_category_id(_),
                (await _._.GetNominationRecommendations(_, _)).Body().toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function _(_, _) {
          _.setQueryData([`SteamAwardNominations_${_._.accountid}`], _);
        }
        async function _(_, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_category_id(_),
            _.Body().set_source(_),
            _.Body().set_nominated_id(_);
          const _ = await _._.Nominate(_, _);
          return (
            _.BSuccess() ||
              console.warn(`Failed to nominate app: ${_.GetEResult()}`),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _(_, _, _, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: () => _(_, _, _, _),
            onSuccess: ([_, _]) => {
              _ == _._
                ? (_(_, _.nominations),
                  window.setTimeout(
                    () =>
                      _.invalidateQueries({
                        queryKey: _(),
                      }),
                    1e3,
                  ),
                  _ && _())
                : _ && _(_);
            },
            onError: () => {
              _ && _();
            },
          });
        }
        async function _(_, _, _) {
          let _ = {
            _: _._.COUNTRY,
            _: _._.LANGUAGE,
            realm: _._.k_ESteamRealmGlobal,
            origin: self.origin,
            _: "jsonfull",
            term: _.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: _._.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: _._.Get().ExcludedContentDescriptor,
            excluded_apps: _,
          };
          _.release_date_max &&
            (_.release_date_max = new Date(
              _.release_date_max * 1e3,
            ).toISOString()),
            _.release_date_min &&
              (_.release_date_min = new Date(
                _.release_date_min * 1e3,
              ).toISOString()),
            _.flag == _._._ && (_.vrsupport = 1),
            _.flag == _._._ &&
              (_.steam_deck_compat_categories = [_._, _._, _._]);
          const _ = `${_._.STORE_BASE_URL}search/suggest`;
          return (
            (
              await _().get(_, {
                params: _,
                withCredentials: !0,
              })
            ).data ?? []
          );
        }
        function _(_, _, _) {
          return (0, _._)({
            queryKey: [_, _.voteid, _],
            queryFn: () => _(_, _, _),
            staleTime: 1 / 0,
          });
        }
        function _() {
          const _ = _();
          return _.data ? _.data.map((_) => _.appid) : [];
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_generate_new(_);
          const _ = await _._.GetNominationShareLink(_, _);
          return (
            _.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${_.GetEResult()}`,
              ),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`GetNominationShareLink_${_._.accountid}`],
            queryFn: async () => _(_, !1),
            initialData: () => [_._, _()?.share_link],
            staleTime: 1 / 0,
            enabled: _._.logged_in,
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: () => _(_, !0),
            onSuccess: ([_, _]) => {
              _ == _._ &&
                _.setQueryData(
                  [`GetNominationShareLink_${_._.accountid}`],
                  [_, _],
                );
            },
          });
        }
        async function _(_, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_voteid(_),
            _.Body().set_appid(_),
            _.Body().set_sale_appid(_);
          const _ = await _._.SetVote(_, _);
          return (
            _.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${_}): ${_.GetEResult()}`,
              ),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: () => _(_, _, _, _),
            onSuccess: ([_, _]) => {
              _ == _._ &&
                _.setQueryData(
                  [`SteamAwardUserVotes_${_._.accountid}`],
                  _.user_votes,
                );
            },
          });
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_sale_appid(_);
          const _ = await _._.GetUserVotes(_, _);
          return (
            _.BSuccess() ||
              console.warn(`Failed to get votes for user: ${_.GetEResult()}`),
            _.Body().toObject()?.user_votes
          );
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardUserVotes_${_._.accountid}`],
            queryFn: () => _(_, _),
            initialData: () => _()?.user_votes,
            enabled: _._.logged_in,
          });
        }
        function _(_, _) {
          const _ = _(_);
          return (0, _.useMemo)(
            () => _.data?.find((_) => _.voteid == _)?.appid,
            [_, _.data],
          );
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardItemDefs_${_}`],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_appid(_),
                _.Body().set_language(_._.LANGUAGE),
                (await _._.GetCommunityItemDefinitions(_, _)).Body().toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => _()?.item_definitions,
          });
        }
        function _(_, _) {
          const _ = _(_),
            _ = _(_);
          if (!_.data || !_.data) return null;
          const _ = _.data.votes.find((_) => _.voteid == _);
          return _.data.item_definitions?.find(
            (_) => _.item_type == _.item_type,
          );
        }
        function _() {
          return _.useContext(_).yearStyles;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_VODStore;
          m_mapAppToVOD = new Map();
          GetVODForAppID(_) {
            return this.m_mapAppToVOD.get(_);
          }
          async LoadVODForAppID(_, _) {
            if (this.m_mapAppToVOD.has(_)) return this.m_mapAppToVOD.get(_);
            const _ = _._.STORE_BASE_URL + "video/details/" + _ + "/0",
              _ = {};
            try {
              let _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
              if (_ && _.token.reason) return;
              if (
                _ &&
                _.status == 200 &&
                _.data &&
                (_.data.success == _._ || _.data.success == "ready")
              ) {
                let _ = (0, _._)({
                  appid: _,
                  video_url: _.data.video_url,
                  bookmark: _.data.bookmark,
                });
                return (
                  _.data.bookmark
                    ? _._.Get().SetBookmarkForApp(_, _.data.bookmark)
                    : _._.Get().InitializeBookmarkForApp(_),
                  this.m_mapAppToVOD.set(_, _),
                  _
                );
              }
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "CVideoOnDemandStore:LoadVODForAppID: Failed " + _.strErrorMsg,
                _,
              );
            }
          }
          static Get() {
            return (
              _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
              _.s_VODStore
            );
          }
          Init() {}
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown ETrailerConvertState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETrailerConvertTargetType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.video_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    video_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    client_cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.video_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    video_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_ClientGetVideoURL_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.encryption_key || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    encryption_key: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_UnlockedH264_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    opf_settings: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFovasVideo_ClientGetOPFSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playback_position_in_seconds: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_track_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    audio_track_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timedtext_track_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    last_modified: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    hide_from_watch_history: {
                      _: 7,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    hide_from_library: {
                      _: 8,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "VideoBookmark";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bookmarks || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bookmarks: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_SetVideoBookmark_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    updated_since: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bookmarks || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bookmarks: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GetVideoBookmarks_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Video.ClientGetVideoURL#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetVideoURL = _;
          function _(_, _) {
            return _.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetVideoBookmark = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Video.GetVideoBookmarks#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetVideoBookmarks = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          _.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: _,
          };
        })(_ || (_ = {}));
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetOPFSettings = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_VODStore;
          m_transport = null;
          m_mapBookmarks = new Map();
          SetBookmarkForApp(_, _) {
            this.ValidateBookmarkData(_)
              ? this.m_mapBookmarks.set(_, _.fromObject(_))
              : this.InitializeBookmarkForApp(_);
          }
          ValidateBookmarkData(_) {
            const _ = _;
            return typeof _ == "object"
              ? Number.isInteger(_.playback_position_in_seconds) &&
                  Number.isInteger(_.app_id)
              : !1;
          }
          InitializeBookmarkForApp(_) {
            if (!this.m_mapBookmarks.has(_)) {
              let _ = {
                app_id: _,
                playback_position_in_seconds: 0,
                video_track_id: "0",
                audio_track_id: "0",
                timedtext_track_id: "0",
                hide_from_watch_history: !1,
                hide_from_library: !1,
              };
              this.m_mapBookmarks.set(_, new _(_));
            }
          }
          GetBookmarkPlayTimeInSeconds(_) {
            let _ = this.m_mapBookmarks.get(_);
            if (_) {
              let _ = _.playback_position_in_seconds();
              if (Number.isInteger(_)) return _;
            }
            return 0;
          }
          async SendBookMarkedTimeToServer(_, _, _, _, _) {
            if (!_._.logged_in) return;
            if (!this.m_transport) {
              console.warn(
                "CVideoBookmarkStore:SetBookMark no auth token / transport",
              );
              return;
            }
            const _ = _._.Init(_);
            let _ = this.m_mapBookmarks.get(_);
            if (_) {
              let _ = !1;
              _.app_id() != _ && ((_ = !0), _.set_app_id(_)),
                _.playback_position_in_seconds() != _ &&
                  ((_ = !0), _.set_playback_position_in_seconds(_)),
                (_ = _ || "0"),
                _.video_track_id() != _ && (_.set_video_track_id(_), (_ = !0)),
                (_ = _ || "0"),
                _.audio_track_id() != _ && (_.set_audio_track_id(_), (_ = !0)),
                (_ = _ || "0"),
                _ != _.timedtext_track_id() &&
                  (_.set_timedtext_track_id(_), (_ = !0)),
                _ &&
                  (_.Body().add_bookmarks(_),
                  _.SetVideoBookmark(this.m_transport, _));
            }
          }
          static Get() {
            return (
              _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
              _.s_VODStore
            );
          }
          Init() {
            _._.logged_in && this.LoadWatchVideoOAuthToken();
          }
          async LoadWatchVideoOAuthToken() {
            const _ =
                (0, _._)() == "community"
                  ? _._.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                  : _._.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
              _ = {};
            try {
              let _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
              if (
                _ &&
                _.status == 200 &&
                _.data &&
                _.data.success == _._ &&
                _.data.webapi_token
              ) {
                this.m_transport = new _._(
                  _._.WEBAPI_BASE_URL,
                  _.data.webapi_token,
                ).GetServiceTransport();
                return;
              }
            } catch (_) {
              let _ = (0, _._)(_);
              console.error(
                "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                  _.strErrorMsg,
                _,
              );
            }
          }
        }
        class _ {
          m_appid;
          constructor(_) {
            this.m_appid = _;
          }
          async SetBookmark(_, _, _, _) {
            _._.logged_in &&
              _.Get().SendBookMarkedTimeToServer(
                this.m_appid,
                Math.floor(_),
                _,
                _,
                _,
              );
          }
          GetBeginPlaytime() {
            return _._.logged_in
              ? _.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
              : 0;
          }
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            nSlideIndex: _,
            nStartingSlideIndex: _,
            ref: _,
            children: _,
          } = _;
          return _ === void 0
            ? _
            : (0, _.jsx)("div", {
                ref: _ === _ ? _ : void 0,
                children: _,
              });
        }
        function _(_) {
          const {
              padded: _,
              gap: _,
              children: _,
              bLazyRenderChildren: _,
              lazyRenderPlaceholderWidth: _,
              lazyRenderPlaceholderHeight: _,
              startingSlide: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = (0, _._)();
          _.useLayoutEffect(() => {
            !_.current ||
              !_.current ||
              (_.current.scrollLeft +=
                _.current.getBoundingClientRect().left -
                _.current.getBoundingClientRect().left);
          }, [_]);
          const _ = _.Children.map(_, (_, _) =>
              _
                ? (0, _.jsx)(_._, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: _ ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: _,
                    children: (0, _.jsx)(_, {
                      nSlideIndex: _,
                      nStartingSlideIndex: _,
                      ref: _,
                      children: _,
                    }),
                  })
                : (0, _.jsx)(_, {
                    nSlideIndex: _,
                    nStartingSlideIndex: _,
                    ref: _,
                    children: _,
                  }),
            ),
            _ = (0, _.jsx)(_._, {
              "flow-children": "row",
              style: {
                gap: _ ? _ + "px" : void 0,
              },
              className: (0, _._)(
                {
                  SaleSectionCarouselPadding: _,
                },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                _.ScrollSnapCarousel,
                _.className,
              ),
              ref: _,
              children: _,
            });
          return _
            ? (0, _.jsx)(_._, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: _ ?? 1,
                children: _,
              })
            : _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          render() {
            const { showArrows: _, arrowFill: _, arrowStyle: _ } = this.props,
              _ = this.props.visibleSlides,
              _ = this.props.totalSlides,
              _ = this.props.currentSlide;
            if (_ >= _) return null;
            const _ = (100 * _) / _,
              _ = 100 * (1 - Math.min(_ + _, _) / _),
              _ = (50 * _) / _,
              _ = _ + _,
              _ = 100 - _;
            return (0, _.jsxs)("div", {
              className: _.pipScrollerContainer,
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _.pipScrollButton,
                      _.left,
                      _.carouselNavButton,
                    ),
                    children: (0, _.jsx)(_._, {
                      arrowFill: _,
                      arrowStyle: _,
                      direction: "left",
                    }),
                  }),
                (0, _.jsxs)("div", {
                  className: _.pipScroller,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.scrollBackground,
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollForeground,
                      style: {
                        left: _ + "%",
                        right: _ + "%",
                      },
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollNavDiv,
                      style: {
                        left: "0%",
                        width: _ + "%",
                      },
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _.carouselNavButton,
                          _.scrollNavButton,
                        ),
                        style: {
                          color: "red",
                        },
                        children: (0, _.jsx)("div", {}),
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollNavDiv,
                      style: {
                        right: "0%",
                        width: _ + "%",
                      },
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _.carouselNavButton,
                          _.scrollNavButton,
                        ),
                        children: (0, _.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _.pipScrollButton,
                      _.right,
                      _.carouselNavButton,
                    ),
                    children: (0, _.jsx)(_._, {
                      arrowFill: _,
                      arrowStyle: _,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)(_, (_) => ({
          currentSlide: _.currentSlide,
          totalSlides: _.totalSlides,
          visibleSlides: _.visibleSlides,
        }));
        function _(_) {
          const { bForceSimpleCarousel: _, screenIsWide: _, children: _ } = _,
            _ = (0, _._)();
          return (_ || _) && !_
            ? (0, _.jsx)(_, {
                ..._,
                children: _,
              })
            : (0, _.jsx)(_, {
                ..._,
                children: _,
              });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = () => _.Children.count(_.children),
            _ = () => Math.min(_(), _.visibleElements),
            _ = () =>
              _.Children.map(_.children, (_, _) => {
                const _ = _.bLazyRenderChildren
                  ? (0, _.jsx)(_._, {
                      rootMargin: "0px -5px 0px 100%",
                      horizontal: !0,
                      placeholderWidth: _.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: _.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: _,
                      children: _,
                    })
                  : _;
                return (0, _.jsx)(
                  _._,
                  {
                    className: _.innerSlide,
                    index: _,
                    role: "listitem",
                    "aria-label": void 0,
                    children: _,
                  },
                  "slide_" + _,
                );
              }),
            _ = _(),
            _ = _();
          if (!_ || !_) return null;
          const _ = _ < _,
            _ = _.hideArrows || !_,
            _ = !_ || _.hidePips;
          let _ = 4 / 3,
            _ = !0;
          _.slideAspectRatio && ((_ = _.slideAspectRatio), (_ = !1));
          const _ = `items_in_row_${_.visibleElements}`;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            className: (0, _._)(_.carouselBody, _.className, _),
            navKey: _.navKey,
            children: (0, _.jsxs)(_._, {
              visibleSlides: _.visibleElements,
              totalSlides: _(),
              naturalSlideWidth: 100 * _,
              naturalSlideHeight: 100,
              step: _.visibleElements,
              infinite: !_.disableEdgeWrap,
              isIntrinsicHeight: _,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: _.startingSlide,
              children: [
                (0, _.jsx)(_, {
                  bHideArrows: _,
                  bAutoAdvance: _.bAutoAdvance && !_,
                  onSlide: _.onSlide,
                  arrowFill: _.arrowFill,
                  arrowStyle: _.arrowStyle,
                  children: _(),
                }),
                !_ &&
                  (_.useTestScrollbar
                    ? (0, _.jsx)(_, {
                        showArrows: _,
                        carouselStore: null,
                      })
                    : (0, _.jsx)("div", {
                        className: _()({
                          [_.breadcrumbContainer]: !0,
                          [_.breadcrumbContainerTemplate]:
                            _.className?.includes("template-carousel"),
                        }),
                        children: (0, _.jsx)(_, {
                          ..._,
                          nPageSize: _,
                          children: _.children,
                        }),
                      })),
              ],
            }),
          });
        }
        function _(_) {
          const { nPageSize: _ } = _,
            _ = _.useContext(_._),
            [_, _] = _.useState(_.state.currentSlide);
          return (
            _.useEffect(
              () =>
                _.subscribe(() => {
                  _(_.state.currentSlide);
                }),
              [_],
            ),
            (0, _.jsx)(_.Fragment, {
              children: _.Children.map(_.children, (_, _) => {
                if (_ % _ !== 0) return null;
                const _ = _ >= _ && _ < _ + _;
                return (0, _.jsx)(
                  _._,
                  {
                    slide: _,
                    className: _.pip,
                    children: (0, _.jsx)(_._, {
                      ..._,
                      bIsActive: _,
                    }),
                  },
                  _,
                );
              }),
            })
          );
        }
        function _(_) {
          _.current && (window.clearTimeout(_.current), (_.current = null));
        }
        function _(_) {
          const {
              bHideArrows: _,
              bAutoAdvance: _,
              children: _,
              onSlide: _,
              arrowFill: _,
              arrowStyle: _,
            } = _,
            _ = _.useContext(_._),
            _ = _.useRef(_.state.currentSlide),
            [_, _] = _.useState(null),
            [_, _] = _.useState(!!_),
            _ = _.useRef(null),
            _ = _.useRef(null);
          _.useEffect(() => {
            const _ = () => {
              _.current = window.setTimeout(() => {
                if (_.current) {
                  _(_);
                  let _ = 0;
                  _.state.currentSlide + _.state.visibleSlides <
                    _.state.totalSlides &&
                    (_ = Math.min(
                      _.state.currentSlide + _.state.visibleSlides,
                      _.state.totalSlides - _.state.visibleSlides,
                    )),
                    _.setStoreState({
                      currentSlide: _,
                    });
                }
              }, 8e3);
            };
            _ && _();
            const _ = () => {
              const _ = _.current,
                _ = _.state.currentSlide;
              _ && _(_), _(_ > _ ? "Right" : _ < _ ? "Left" : null), _(_);
              const _ = 1e3;
              (_.current = window.setTimeout(() => {
                _.current && (_(null), _(_));
              }, _)),
                (_.current = _),
                _.current ? (_(_), _(!1)) : _ && _();
            };
            return (
              _.subscribe(_),
              () => {
                _.unsubscribe(_), _(_), _(_);
              }
            );
          }, [_, _]);
          const _ = !!_ && "CarouselSliding" + _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.sliderBody, "SliderBody", _),
            children: [
              !_ &&
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _.carouselBtnCtn,
                    _.left,
                    _.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, _._)("#Carousel_Prev"),
                  children: (0, _.jsx)(_._, {
                    arrowFill: _,
                    arrowStyle: _,
                    direction: "left",
                  }),
                }),
              (0, _.jsx)(_._, {
                className: _._.GetScrollableClassname(),
                classNameTray: _.slideTrayCustomize,
                classNameAnimation: _.DisableSliderMotion,
                role: "list",
                children: (0, _.jsx)(_._, {
                  children: _,
                }),
              }),
              !_ &&
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _.carouselBtnCtn,
                    _.right,
                    _.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, _._)("#Carousel_Next"),
                  children: (0, _.jsx)(_._, {
                    arrowFill: _,
                    arrowStyle: _,
                    direction: "right",
                  }),
                }),
            ],
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              appId: _,
              clanId: _,
              strCapsuleUrl: _,
              strGroupTitle: _,
              strExtraBannerGroupStyle: _,
              actions: _,
            } = _,
            _ = _ !== _._,
            _ = _.useMemo(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : {
                      creatorid: _,
                    },
              [_, _],
            ),
            _ = (0, _.jsx)("img", {
              className: _().AppBannerLogo,
              src: _,
            });
          return (0, _._)()
            ? null
            : (0, _.jsxs)("div", {
                className: _().AppBannerCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().AppBannerBackground,
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().AppBannerGroup, _),
                    children: [
                      _
                        ? _
                          ? (0, _.jsx)(_._, {
                              _: _,
                              className: _().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: {
                                  minWidth: "320px",
                                },
                              },
                              children: _,
                            })
                          : (0, _.jsx)(_._, {
                              _: _,
                              hoverClassName: _().AppBannerLogoCtn,
                              children: _,
                            })
                        : (0, _.jsxs)("div", {
                            className: _().AppBannerLogoCtn,
                            children: [_, " "],
                          }),
                      (0, _.jsxs)("div", {
                        className: _().AppBannerTitle,
                        children: [
                          _,
                          (0, _.jsx)("div", {
                            className: _().NewsHubSubTitle,
                            children: (0, _._)("#EventDisplay_NewsHubSubtitle"),
                          }),
                        ],
                      }),
                      _ &&
                        (0, _.jsx)("div", {
                          className: _().AppBannerLinks,
                          children: _,
                        }),
                    ],
                  }),
                ],
              });
        }
        function _(_) {
          const { appid: _, clanAccountID: _ } = _,
            _ = React.useMemo(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = useStoreItemDefaultInfo(_),
            { data: _ } = useStoreItemAssets(_),
            { data: _ } = useClanInfoByAccountID(_ ? void 0 : _),
            { bIsOwned: _ } = useIsStoreItemOwned(_),
            _ = _
              ? _
                ? StoreAssetURL(_, "header")
                : void 0
              : _?.avatar_full_url,
            _ = _ ? _?.name : _?.group_name;
          return jsx(_, {
            appId: _ ?? 0,
            clanId: _,
            strCapsuleUrl: _,
            strGroupTitle: _,
            strExtraBannerGroupStyle: _ ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(_ && !_) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: _,
                      bIsFree: !!_?.is_free,
                      bIsComingSoon: !!_?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: _
                    ? jsx(AppFollowButton, {
                        appid: _,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: _,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          const [_, _] = (0, _.useState)({}),
            _ = (0, _._)("useEventHeaderData");
          return (
            (0, _.useEffect)(() => {
              if (_)
                _._.Get()
                  .QueueAppRequest(_, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const _ = _._.Get().GetApp(_);
                    _ &&
                      !_?.token?.reason &&
                      _({
                        strCapsuleUrl: _.GetAssets().GetHeaderURL(),
                        strGroupTitle: _.GetName(),
                        strStoreURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetStorePageURL(),
                        strCommunityURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetCommunityPageURL(),
                        strForumURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (_) {
                const _ = _._.InitFromClanID(_);
                _._.LoadClanInfoForClanSteamID(_).then((_) => {
                  _?.token?.reason ||
                    _({
                      strCapsuleUrl: _.avatar_full_url,
                      strGroupTitle: _.group_name,
                      strStoreURL:
                        (_._.IN_CLIENT ? "steam://openurl/" : "") +
                        _._.STORE_BASE_URL +
                        "curator/" +
                        _ +
                        "/",
                      strCommunityURL:
                        (_._.IN_CLIENT ? "steam://openurl/" : "") +
                        _._.COMMUNITY_BASE_URL +
                        "gid/" +
                        _.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: _().ClanBanner,
                    });
                });
              }
            }, [_, _?.token?.reason, _]),
            _
          );
        }
        const _ = {};
        function _(_) {
          const { appId: _, clanId: _, bShowRSSFeed: _ } = _,
            { strStoreURL: _, strCommunityURL: _, strForumURL: _ } = _(_, _),
            _ = (0, _._)(),
            _ =
              _._.STORE_BASE_URL +
              "feeds/" +
              (0, _._)() +
              (_ ? "/app/" + _ : "/group/" + _) +
              "/?cc=" +
              _._.COUNTRY +
              "&l=" +
              _._.LANGUAGE,
            _ = _._.Get().GetPartnerEventPermissions(_._.InitFromClanID(_)),
            _ = _ && (_.can_edit || _.support_user),
            _ = _._.Get().BOwnsApp(_),
            _ = (0, _.useMemo)(() => {
              const _ = [];
              return (
                _._.IN_CLIENT &&
                  _ &&
                  _.push({
                    label: (0, _._)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + _,
                  }),
                _.push({
                  label: (0, _._)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, _._)(_),
                }),
                _ ||
                  (_.push({
                    label: (0, _._)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, _._)(_),
                  }),
                  _ &&
                    _.push({
                      label: (0, _._)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, _._)(_),
                    }),
                  _ &&
                    _.push({
                      label: (0, _.jsxs)("div", {
                        className: _().RssRow,
                        children: [
                          (0, _.jsx)(_.ZPc, {}),
                          (0, _._)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: _,
                    })),
                _ &&
                  _.push({
                    label: (0, _._)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, _._)(_, _._.InitFromClanID(_), "admin"),
                  }),
                _
              );
            }, [_, _, _, _, _, _, _, _, _, _]);
          return (0, _.jsx)(_._, {
            strDefaultLabel: (0, _._)("#EventDisplay_LinksDropDown_ExtraShort"),
            strClassName: _().AppBannerLinkDD,
            strDropDownButtonClassName: _().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: _().AppBannerLinkDDContainer,
            contextMenuPositionOptions: {
              bMatchWidth: !1,
            },
            arrowClassName: _().DDButtonArrow,
            rgOptions: _,
            onChange: (_, _, _) => (0, _._)(_, _.data),
          });
        }
        const _ = (0, _._)((_) => {
          const { appId: _, clanId: _ } = _,
            {
              strCapsuleUrl: _,
              strGroupTitle: _,
              strExtraBannerGroupStyle: _,
            } = _(_, _),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : {
                      creatorid: _,
                    },
              [_, _],
            ),
            { data: _ } = (0, _._)(_),
            _ = _._.Get().BOwnsApp(_);
          return (0, _.jsx)(_, {
            appId: _,
            clanId: _,
            strCapsuleUrl: _,
            strGroupTitle: _,
            strExtraBannerGroupStyle: _,
            actions: (0, _.jsxs)(_.Fragment, {
              children: [
                !!(!_ && _) &&
                  (0, _.jsx)("div", {
                    className: _().HeaderWishlistButton,
                    children: (0, _.jsx)(_._, {
                      appid: _,
                      bIsFree: !!_?.is_free,
                      bIsComingSoon: !!_?.is_coming_soon,
                      className: (0, _._)(
                        _().ActionButton,
                        _().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, _.jsx)("div", {
                  className: _().HeaderFollowButton,
                  children: _
                    ? (0, _.jsx)(_._, {
                        appid: _,
                        className: _().HeaderButtonDark,
                      })
                    : (0, _.jsx)(_._, {
                        clanAccountID: _,
                        className: _().HeaderButtonDark,
                      }),
                }),
                (0, _.jsx)(_, {
                  ..._,
                }),
              ],
            }),
          });
        });
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
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = class _ {
            m_isLoading = !1;
            m_existingRegistrations = new Map();
            m_selections = new Map();
            m_transport;
            m_userAccountID;
            m_clanAccountID;
            m_gidClanEvent;
            static s_Singleton;
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
            constructor() {
              (0, _._)(this);
            }
            Init(_, _, _, _) {
              (this.m_transport = _),
                (this.m_userAccountID = _),
                (this.m_clanAccountID = _),
                (this.m_gidClanEvent = _);
            }
            async Load() {
              if (this.m_isLoading || this.m_clanAccountID != (0, _._)())
                return;
              const _ = _._.Init(_._),
                _ = _._.InitFromAccountID(this.m_userAccountID);
              _.Body().set_clan_event_gid(this.m_gidClanEvent),
                _.Body().set_steamid(_.ConvertTo64BitString()),
                this.m_existingRegistrations.clear(),
                this.m_selections.clear(),
                (this.m_isLoading = !0);
              const _ = await _._.GetRegistrations(this.m_transport, _);
              (this.m_isLoading = !1),
                _.BSuccess() &&
                  (0, _._)(() => {
                    _.Body()
                      .registrations()
                      .forEach((_) => {
                        const _ = _.toObject(),
                          _ = {
                            ..._,
                            regmodel: _.jsondata
                              ? JSON.parse(_.jsondata)
                              : void 0,
                          };
                        _.group_id === void 0 ||
                          _.session_id === void 0 ||
                          (this.m_existingRegistrations.set(_.group_id, _),
                          this.m_selections.set(_.group_id, _.session_id));
                      });
                  });
            }
            SetSelection(_, _) {
              _ !== void 0 &&
                (_ !== void 0 && _ > 0
                  ? this.m_selections.set(_, _)
                  : this.m_selections.delete(_));
            }
            BIsLoading() {
              return this.m_isLoading;
            }
            GetSelectedGroups() {
              return Array.from(this.m_selections.keys());
            }
            GetSelection(_) {
              return _ === void 0 ? void 0 : this.m_selections.get(_);
            }
            GetRegistrationStatus(_, _) {
              if (_ === void 0 || _ === void 0) return _;
              const _ = this.m_existingRegistrations.get(_)?.session_id == _,
                _ = this.m_selections.get(_) == _;
              return _ && _ ? _ : !_ && _ ? _ : _ && !_ ? _ : _;
            }
            BIsRegisteredForDifferentSessionInGroup(_, _) {
              if (_ === void 0 || _ === void 0) return !1;
              const _ = !!this.m_existingRegistrations.get(_),
                _ = this.m_selections.get(_) == _,
                _ =
                  this.m_existingRegistrations.get(_)?.session_id ==
                  this.m_selections.get(_);
              return _ && !_ && _;
            }
            BGetRegistrationSessionID(_) {
              return _ === void 0
                ? void 0
                : this.m_existingRegistrations.get(_)?.session_id;
            }
            BHaveSelectionsChanged() {
              return this.m_selections.size == 0 &&
                this.m_existingRegistrations.size == 0
                ? !1
                : this.m_selections.size != this.m_existingRegistrations.size ||
                    !Array.from(this.m_selections.entries()).every(
                      (_) =>
                        this.m_existingRegistrations.get(_[0])?.session_id ==
                        _[1],
                    );
            }
            BIsAddingOrChangingSelections() {
              return Array.from(this.m_selections.entries()).some((_) => {
                const _ = this.m_existingRegistrations.get(_[0]);
                return !_ || _.session_id != _[1];
              });
            }
            BHasAlreadyRegistered() {
              return this.m_existingRegistrations.size > 0;
            }
            BHasSomeRegistration() {
              return this.m_existingRegistrations.size > 0;
            }
            async Save(_) {
              const _ = [];
              _ = Object.fromEntries(
                Object.entries(_).filter(
                  ([_]) => !_.startsWith("registration_emailed_"),
                ),
              );
              for (const [_, _] of this.m_selections) {
                const _ = _._.Init(_._);
                _.Body().set_clan_event_gid(this.m_gidClanEvent),
                  _.Body().set_steamid(
                    _._.InitFromAccountID(
                      this.m_userAccountID,
                    ).ConvertTo64BitString(),
                  ),
                  _.Body().set_registration_group_id(_),
                  _.Body().set_registration_session_id(_),
                  _.Body().set_guest_count(_.guests_registered ?? 1),
                  _.Body().set_jsondata(JSON.stringify(_)),
                  _.push(_);
              }
              for (const _ of this.m_existingRegistrations.keys()) {
                if (this.m_selections.has(_)) continue;
                const _ = _._.Init(_._);
                _.Body().set_clan_event_gid(this.m_gidClanEvent),
                  _.Body().set_steamid(
                    _._.InitFromAccountID(
                      this.m_userAccountID,
                    ).ConvertTo64BitString(),
                  ),
                  _.Body().set_registration_group_id(_),
                  _.Body().set_registration_session_id(0),
                  _.Body().set_guest_count(0),
                  _.Body().set_jsondata(JSON.stringify({})),
                  _.push(_);
              }
              let _ = !0;
              for (let _ = 0; _ < _.length; _++) {
                const _ = _[_],
                  _ = _ == _.length - 1;
                _.Body().set_skip_email(!_);
                const _ = await _._.UpdateRegistration(this.m_transport, _);
                _ = _ && _.BSuccess();
              }
              return await this.Load(), _;
            }
          };
        _([_._], _.prototype, "m_isLoading", 2),
          _([_._], _.prototype, "m_existingRegistrations", 2),
          _([_._], _.prototype, "m_selections", 2),
          _([_._.bound], _.prototype, "SetSelection", 1);
        let _ = _;
        function _(_, _, _, _) {
          _.useEffect(() => {
            (async () => (_.Get().Init(_, _, _, _), await _.Get().Load()))();
          }, [_, _, _, _]);
        }
        function _() {
          return (0, _._)(() => _.Get().BIsLoading());
        }
        function _(_) {
          return useObserver(() => _.Get().GetSelection(_));
        }
        function _() {
          return (0, _._)(() => _.Get().BHaveSelectionsChanged());
        }
        function _(_, _) {
          return useObserver(() =>
            _.filter((_) =>
              _.sessions.some(
                (_) => _.Get().GetRegistrationStatus(_.group_id, _._) == _,
              ),
            )
              .map((_) => _.group_id)
              .filter((_) => _ !== void 0),
          );
        }
        function _(_, _) {
          return (0, _._)(() =>
            _.filter((_) =>
              _.sessions.some(
                (_) => _.Get().GetRegistrationStatus(_.group_id, _._) == _,
              ),
            )
              .filter((_) => !!_.ask_registration_question)
              .map((_) => _.group_id)
              .filter((_) => _ !== void 0),
          );
        }
        function _() {
          return (0, _._)(() => _.Get().BHasSomeRegistration());
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              eventModel: _,
              fnConfirm: _,
              fnHideModal: _,
              nMaxPerTeam: _,
              bAddingOrChangingSessions: _,
              transport: _,
            } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _] = _.useState({}),
            [_, _] = _.useState(!1),
            _ = _.useCallback(
              (_) => {
                _({
                  ..._,
                  ..._,
                });
              },
              [_],
            ),
            _ = (0, _._)(
              _,
              _.clanSteamID.GetAccountID(),
              _.GID ?? "",
              _._.accountid,
            ),
            {
              sUserAccountEmail: _,
              sUserAccountRealName: _,
              rgPartners: _,
            } = _.useMemo(
              () => ({
                sUserAccountRealName: (0, _._)(
                  "realname",
                  "application_config",
                ),
                sUserAccountEmail: (0, _._)("email", "application_config"),
                rgPartners: (0, _._)("partners", "application_config") ?? [],
              }),
              [],
            ),
            [_, _] = _.useState(void 0),
            [_, _] = _.useState(void 0),
            _ = _.useMemo(() => {
              const _ = [];
              return (
                _ == null &&
                  _.push({
                    data: void 0,
                    label: (0, _._)("#MeetSteam_ChoosePartner"),
                  }),
                _.push(
                  ..._.map((_, _) => ({
                    data: _.partnerid,
                    label: _.partner_name,
                  })),
                ),
                _.push({
                  data: 0,
                  label: (0, _._)("#MeetSteam_ChoosePartnerOther"),
                }),
                _
              );
            }, [_, _]);
          _.useEffect(() => {
            if (!_.isSuccess) return;
            const _ = _.find((_) => _.partnerid == _.data.partner_id),
              _ = _.data.partner_id === 0 ? 0 : _?.partnerid;
            _(_), _(_), _(_.data);
          }, [_.isSuccess, _.data, _]);
          const _ = _?.length > 0,
            _ = !_ || _ != null,
            _ = _ && _ === 0;
          _.useEffect(() => {
            if (_ == _ || (_(_), !_ || !_)) return;
            let _;
            const _ = _.find((_) => _.partnerid == _);
            _ || !_
              ? (_ = {
                  name: _?.length > 0 ? _ : void 0,
                  email_override: _?.length > 0 ? _ : void 0,
                  partner_id: 0,
                })
              : (_ = {
                  name:
                    _.partneruserrealname?.length > 0
                      ? _.partneruserrealname
                      : void 0,
                  company: _.partner_name?.length > 0 ? _.partner_name : void 0,
                  email_override:
                    _.partneruseremail?.length > 0
                      ? _.partneruseremail
                      : void 0,
                  partner_id: _.partnerid,
                }),
              Object.values(_).some((_) => _ != null) && _(_(_));
          }, [_, _, _, _, _, _, _, _, _]);
          const _ = _.isLoading || _,
            _ = _
              ? (0, _._)(
                  "#MeetSteam_Register_title",
                  _.GetNameWithFallback(_) ?? "",
                )
              : (0, _._)("#MeetSteam_Unregister_title"),
            _ =
              !_ ||
              (_ &&
                !!_.name &&
                (!_.guest_names || _.guest_names.every((_) => _.length > 0)) &&
                !!_.email_override &&
                !!_.company);
          return (0, _.jsxs)(_._, {
            active: !0,
            children: [
              _ &&
                (0, _.jsx)(_._, {
                  "aria-label": _ ? (0, _._)("#Saving") : (0, _._)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, _.jsx)(_._, {
                    size: "medium",
                    position: "center",
                    string: _ ? (0, _._)("#Saving") : (0, _._)("#Loading"),
                  }),
                }),
              !_ &&
                (0, _.jsx)(_._, {
                  strTitle: _,
                  onCancel: _,
                  bOKDisabled: !_,
                  onOK: async () => {
                    _(!0), await _(_), _(!1), _.refetch(), _();
                  },
                  children:
                    _ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("div", {
                          children: (0, _._)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, _.jsx)("br", {}),
                        _ &&
                          (0, _.jsx)(_._, {
                            label: (0, _._)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, _._)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: _,
                            selectedOption: _,
                            onChange: (_) => _(_.data),
                          }),
                        _ &&
                          (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)(_._, {
                                type: "text",
                                label: (0, _._)("#MeetSteam_Reg_Name"),
                                value: _.name || "",
                                onChange: (_) =>
                                  _({
                                    name: _.currentTarget.value,
                                  }),
                              }),
                              (0, _.jsx)(_._, {
                                type: "text",
                                label: (0, _._)("#MeetSteam_Reg_Email"),
                                value: _.email_override || "",
                                mustBeEmail: !0,
                                onChange: (_) =>
                                  _({
                                    email_override: _.currentTarget.value,
                                  }),
                              }),
                              (0, _.jsx)(_._, {
                                type: "text",
                                label: (0, _._)("#MeetSteam_Reg_Company"),
                                value: _.company || "",
                                onChange: (_) =>
                                  _({
                                    company: _.currentTarget.value,
                                  }),
                              }),
                              (0, _.jsx)(_._, {
                                type: "text",
                                label: (0, _._)("#MeetSteam_Reg_Game"),
                                value: _.game || "",
                                onChange: (_) =>
                                  _({
                                    game: _.currentTarget.value,
                                  }),
                              }),
                              _ > 0 &&
                                (0, _.jsx)(_._, {
                                  label: (0, _._)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, _._)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({
                                    length: _ + 1,
                                  }).map((_, _) => ({
                                    data: _,
                                    label: _,
                                  })),
                                  selectedOption:
                                    (_.guests_registered ?? 1) - 1,
                                  onChange: (_) => {
                                    const _ = _.guest_names ?? [];
                                    _({
                                      guests_registered: _.data + 1,
                                      guest_names:
                                        _.length > _.data
                                          ? _.slice(0, _.data)
                                          : _._(_, _.data, ""),
                                    });
                                  },
                                }),
                              (_.guests_registered ?? 0) > 1 &&
                                (0, _.jsxs)("div", {
                                  children: [
                                    (0, _.jsx)("div", {
                                      children: (0, _._)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, _.jsx)("br", {}),
                                    (_.guest_names ?? []).map((_, _) =>
                                      (0, _.jsx)(
                                        _._,
                                        {
                                          type: "text",
                                          label: (0, _._)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: _,
                                          onChange: (_) => {
                                            const _ = [
                                              ...(_.guest_names ?? []),
                                            ];
                                            (_[_] = _.currentTarget.value),
                                              _({
                                                guest_names: _,
                                              });
                                          },
                                        },
                                        "guesname_" + _,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, _.jsx)(_, {
                                eventModel: _,
                                oReg: _,
                                fnUpdateRegistration: _,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function _(_) {
          return Object.fromEntries(
            Object.entries(_).filter(([_, _]) => _ !== void 0),
          );
        }
        function _(_) {
          const { eventModel: _, oReg: _, fnUpdateRegistration: _ } = _,
            _ = _(_.jsondata.meet_steam_groups ?? [], _);
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h3", {
                    children: (0, _._)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#MeetSteam_Reg_Question_desc"),
                  }),
                  _.map((_) => {
                    const _ = _.jsondata.meet_steam_groups?.find(
                      (_) => _.group_id == _,
                    );
                    return _
                      ? (0, _.jsx)(
                          _,
                          {
                            groupInfo: _,
                            oReg: _,
                            fnUpdateText: (_) => {
                              let _ = _.pre_event_partner_questions
                                  ? [..._.pre_event_partner_questions]
                                  : [],
                                _ = _.findIndex((_) => _.group_id == _);
                              _ < 0
                                ? _.push({
                                    group_id: _,
                                    question: _,
                                  })
                                : (_[_] = {
                                    group_id: _,
                                    question: _,
                                  }),
                                _({
                                  pre_event_partner_questions: _,
                                });
                            },
                          },
                          "groupquestion" + _,
                        )
                      : null;
                  }),
                ],
              });
        }
        function _(_) {
          const { fnUpdateText: _, groupInfo: _, oReg: _ } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _] = (0, _._)(() => [
              _.localized_session_title?.[_] ||
                _.localized_session_title?.[_.Bhc] ||
                "",
              _.pre_event_partner_questions?.find(
                (_) => _.group_id == _.group_id,
              )?.question || "",
            ]);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_._, {
                children: _,
              }),
              (0, _.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, _.jsx)("textarea", {
                  value: _,
                  className: (0, _._)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, _._)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (_) => _(_.currentTarget.value),
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = "America/Los_Angeles";
        function _(_) {
          const _ = _.context.event,
            _ = _.context.showErrorInfo,
            _ = (0, _._)(_.args, "group_id"),
            _ = Number.parseInt(_),
            _ = (0, _._)(() => _(_, _));
          return !_ || !_
            ? _
              ? (0, _.jsxs)("div", {
                  children: ["Failed to find session group id ", _],
                })
              : null
            : _.clanSteamID.GetAccountID() != (0, _._)()
              ? _
                ? (0, _.jsx)("div", {
                    children: "Only support on special group",
                  })
                : null
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      eventModel: _,
                    }),
                    (0, _.jsx)(_, {
                      groupData: _,
                      eventModel: _,
                    }),
                    (0, _.jsx)(_, {
                      eventModel: _,
                    }),
                  ],
                });
        }
        function _(_) {
          const { eventModel: _ } = _;
          return _()
            ? (0, _.jsx)(_, {
                eventModel: _,
                accountID: _._.accountid,
              })
            : null;
        }
        function _(_) {
          const { eventModel: _, accountID: _ } = _,
            _ = _(_.GID ?? "", _),
            _ = "qr-code-display-marker",
            { refIsFirst: _, bIsFirst: _ } = _(_);
          return (0, _.jsx)("div", {
            ref: _,
            className: (0, _._)(_),
            children:
              !!(_ && _) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    children: (0, _._)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                  }),
                ],
              }),
          });
        }
        function _(_, _) {
          return (0, _._)({
            queryKey: ["useMeetSteamQRCode", _, _],
            queryFn: async () => {
              const _ = _._.STORE_BASE_URL + "meetsteam/attendance_qrcode",
                _ = {
                  gid: _,
                  accountid: _,
                };
              return (
                await _().get(_, {
                  params: _,
                  withCredentials: !0,
                })
              ).data;
            },
          }).data?.qrcode;
        }
        function _() {
          const _ = (0, _._)("promotion_operation_token", "application_config");
          return (
            (0, _._)(
              !!_ || !_._.accountid,
              "require promotion_operation_token",
            ),
            _.useMemo(
              () => new _._(_._.WEBAPI_BASE_URL, _).GetServiceTransport(),
              [_],
            )
          );
        }
        function _() {
          const [_] = (0, _.useState)(() =>
            Number.parseInt(
              (0, _._)("meet_steam_visibility_id", "application_config"),
            ),
          );
          return _;
        }
        function _(_) {
          const { groupData: _, eventModel: _ } = _,
            _ = _(),
            _ = (0, _._)(),
            _ = _(),
            _ = _(),
            _ = (0, _._)(_, _.clanSteamID.GetAccountID(), _.GID ?? ""),
            _ = (0, _.useMemo)(
              () =>
                _?.sessions?.sort(
                  (_, _) => (_.rtime_start ?? 0) - (_.rtime_start ?? 0),
                ),
              [_?.sessions],
            ),
            _ = _(),
            _ = (0, _._)(() =>
              _?.reduce(
                (_, _) =>
                  _.set(
                    _._ ?? 0,
                    _.Get().GetRegistrationStatus(_.group_id, _._),
                  ),
                new Map(),
              ),
            ),
            _ = (0, _._)(
              _,
              _.clanSteamID.GetAccountID(),
              _.GID ?? "",
              _._.accountid,
            ),
            _ = _.isSuccess && !!_.data.allow_registration_if_full;
          if (!_.isSuccess)
            return (0, _.jsx)("div", {
              children: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (_ && _._.accountid)
            return (0, _.jsx)(_._, {
              size: "medium",
              position: "center",
              string: (0, _._)("#Loading"),
            });
          const _ = (_) => {
              const _ = _.Get().GetSelection(_.group_id) == _;
              _.Get().SetSelection(_.group_id, _ ? void 0 : _);
            },
            _ = _.group_visibility_tokens ?? [],
            _ = _ !== null && _.includes(_);
          return _.length > 0 && !_ && !_
            ? null
            : (0, _.jsx)(_, {
                groupData: _,
                children: _?.map((_, _) => {
                  const _ = _.data.find(
                      (_) => _.group_id === _.group_id && _.session_id === _._,
                    ),
                    _ = _?.get(_._ ?? 0),
                    _ = _ + 1 < _.length;
                  return (0, _.jsxs)(
                    _.Fragment,
                    {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().SessionColumnCtn,
                          children: (0, _.jsx)(_, {
                            sessionData: _,
                            onClick: () => _(() => _(_._)),
                            nGuestReservations: _?.guest_count || 0,
                            eRegistrationStatus: _,
                            bAllowedToRegisterIfFull: _,
                          }),
                        }),
                        _ && (0, _.jsx)(_, {}),
                      ],
                    },
                    "timecol_" + _.group_id + "_" + _._,
                  );
                }),
              });
        }
        function _(_) {
          const { groupData: _, children: _ } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _._.GetWithFallback(_?.localized_session_title, _),
            _ = _._.GetWithFallback(_?.localized_session_description, _),
            _ = _._.GetWithFallback(_?.localized_intended_audience, _),
            _ = _._.GetWithFallback(_?.localized_sesssion_faq, _),
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(!1);
          return _
            ? (0, _.jsxs)("div", {
                className: (0, _._)({
                  [_().Ctn]: !0,
                  [_().CtnRegistered]: !1,
                  [_().VisibilityOverride]:
                    _ && (_.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _().SessionTitle,
                      children: _,
                    }),
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _().SessionDesc,
                      children: _,
                    }),
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _().SessionAudience,
                      children: (0, _._)(
                        "#MeetSteam_Session_Audience",
                        _ ?? "",
                      ),
                    }),
                  (0, _.jsx)("div", {
                    className: _().SessionOptions,
                    children: _,
                  }),
                  !!_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().ExpanderRow,
                          children: [
                            (0, _.jsx)(_._, {
                              bExpanded: _,
                              setExpanded: _,
                            }),
                            (0, _.jsx)("div", {
                              children: (0, _._)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        _ &&
                          (0, _.jsx)("div", {
                            className: _().FAQDisplay,
                            children: (0, _.jsx)(_._, {
                              text: _ ?? "",
                            }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function _(_, _, _, _) {
          const _ = _ || (_ === _ && _ > 0) || _ === _ || _ === _ || _ === _;
          let _ = null,
            _ = null;
          return (
            _ == _
              ? ((_ = (0, _._)("#MeetSteam_Registered")), (_ = _().Registered))
              : _ == _
                ? ((_ = (0, _._)("#MeetSteam_Registering")),
                  (_ = _().Registering))
                : _ == _
                  ? ((_ = (0, _._)("#MeetSteam_Unegistering")),
                    (_ = _().Unregistering))
                  : _ &&
                    ((_ = (0, _._)("#MeetSteam_Already")),
                    (_ = _().RegisteredElsewhere)),
            {
              bEnabled: _,
              strStatusClass: _,
              strStatusToken: _,
            }
          );
        }
        function _(_) {
          const {
              sessionData: _,
              onClick: _,
              nGuestReservations: _,
              eRegistrationStatus: _ = _,
              bAllowedToRegisterIfFull: _,
            } = _,
            _ = (0, _._)(() => _.max_capacity ?? 0),
            _ = Math.max(0, _ - (_ || 0)),
            {
              strStatusClass: _,
              strStatusToken: _,
              bEnabled: _,
            } = _(_, _, !!_),
            { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = (0, _._)(_),
            _ = (0, _._)(_ ?? 0, _),
            _ = (0, _._)(_ ?? 0, _ ?? 0, _);
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().SessionInstance, _),
              children: [
                (0, _.jsx)("div", {
                  className: _().StatusText,
                  children: (0, _.jsx)("span", {
                    children: _,
                  }),
                }),
                (0, _.jsxs)("button", {
                  className: (0, _._)(_().Button, _().Background),
                  disabled: !_,
                  onClick: _,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().Title,
                      children: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().TimeFrame,
                      children: _,
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  nAvailableSpace: _,
                  bAllowedToRegisterIfFull: _,
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { nAvailableSpace: _, bAllowedToRegisterIfFull: _ } = _;
          return (0, _.jsx)(_.Fragment, {
            children:
              _ ||
              (0, _.jsxs)(_.Fragment, {
                children: [
                  " ",
                  _ < 1
                    ? (0, _.jsx)("div", {
                        className: _().SoldOut,
                        children: (0, _._)("#MeetSteam_SoldOut"),
                      })
                    : (0, _.jsx)("div", {
                        className: _().MaxSize,
                        children: (0, _._)(
                          "#MeetSteam_Spot",
                          _.toLocaleString((0, _._)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _().InstanceDivider,
            children: "\u25C6",
          });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = "complete-registration-marker",
            { refIsLast: _, bIsLast: _ } = _(_),
            _ = _(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1);
          _(_, _._.accountid, _.clanSteamID.GetAccountID(), _.GID ?? "");
          const _ = (0, _._)(_, _.clanSteamID.GetAccountID(), _.GID ?? ""),
            [_, _, _] = (0, _._)(),
            _ = _(),
            _ = async (_) => {
              _(!0), (await _.Get().Save(_)) || _(), _.refetch(), _(!1);
            },
            _ = _(),
            _ = _ || _,
            _ = _(),
            _ = (0, _._)(() => _.Get().BIsAddingOrChangingSelections()),
            _ = (0, _._)(() => _.Get().BHasAlreadyRegistered()),
            _ = (0, _._)(() =>
              _.Get()
                .GetSelectedGroups()
                .reduce((_, _) => {
                  const _ = _(_, _),
                    _ = _.Get().GetSelection(_?.group_id),
                    _ = _?.sessions?.find((_) => _._ == _)?.max_per_team ?? 0;
                  return Math.max(_, _);
                }, 1),
            );
          return (
            _(_),
            (0, _.jsxs)("div", {
              ref: _,
              className: (0, _._)(
                _,
                _().CompleteRegistrationCtn,
                _ && _ && _().Visible,
              ),
              children: [
                (0, _.jsx)("p", {
                  children: _
                    ? (0, _._)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, _._)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      !_ &&
                        (0, _.jsx)(_._, {
                          disabled: !_,
                          onClick: () => _(() => _(!0)),
                          children: _
                            ? (0, _._)("#MeetSteam_UpdateRegistration")
                            : (0, _._)("#MeetSteam_CompleteRegistration"),
                        }),
                      _ &&
                        (0, _.jsx)(_._, {
                          size: "small",
                          position: "center",
                          string: (0, _._)("#Saving"),
                        }),
                      _ &&
                        (0, _.jsx)(_, {
                          eventModel: _,
                          fnConfirm: _,
                          fnHideModal: () => _(!1),
                          nMaxPerTeam: _,
                          bAddingOrChangingSessions: _,
                          transport: _,
                        }),
                      _ &&
                        (0, _.jsx)(_._, {
                          active: !0,
                          children: (0, _.jsx)(_._, {
                            strTitle: (0, _._)("#Error_Generic"),
                            strDescription: (0, _._)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: _,
                          }),
                        }),
                    ],
                  }),
              ],
            })
          );
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              const _ = document.querySelectorAll("." + _);
              _.current && _.length > 0 && _(_[_.length - 1] === _.current);
            }, [_]),
            {
              refIsLast: _,
              bIsLast: _,
            }
          );
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              const _ = document.querySelectorAll("." + _);
              _.current && _.length > 0 && _(_[0] === _.current);
            }, [_]),
            {
              refIsFirst: _,
              bIsFirst: _,
            }
          );
        }
        function _(_, _) {
          return (_?.jsondata?.meet_steam_groups || [])?.find(
            (_) => _.group_id == _,
          );
        }
        function _(_, _) {
          return (_?.jsondata?.meet_steam_schedules || [])?.find(
            (_) => _.schedule_id == _,
          );
        }
        function _() {
          return _._.Get().BIsUserLoggedIn()
            ? (_) => _()
            : () =>
                (0, _._)(
                  (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                    strDescription: (0, _._)(
                      "#EventDisplay_Share_NotLoggedIn_Description",
                    ),
                    strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                    onOK: () => (0, _._)(),
                  }),
                  window,
                );
        }
        function _(_) {
          _.useEffect(() => {
            if (_)
              return (
                (window.onbeforeunload = () =>
                  (0, _._)("#EventEditor_UnsavedChanges")),
                () => {
                  window.onbeforeunload = () => {};
                }
              );
          }, [_]);
        }
        function _(_) {
          const _ = _.context.event,
            _ = _.context.showErrorInfo,
            _ = (0, _._)(_.args, "schedule_id"),
            _ = Number.parseInt(_),
            _ = (0, _._)(() => _(_, _));
          return !_ || !_
            ? _
              ? (0, _.jsxs)("div", {
                  children: ["Failed to find session schedule id ", _],
                })
              : null
            : _.clanSteamID.GetAccountID() != (0, _._)()
              ? _
                ? (0, _.jsx)("div", {
                    children: "Only support on special group",
                  })
                : null
              : (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_, {
                      scheduleData: _,
                      eventModel: _,
                    }),
                    (0, _.jsx)(_, {
                      eventModel: _,
                    }),
                  ],
                });
        }
        function _(_) {
          const { eventModel: _ } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(_, _.clanSteamID.GetAccountID(), _.GID ?? ""),
            _ = (0, _._)(
              _,
              _.clanSteamID.GetAccountID(),
              _.GID ?? "",
              _._.accountid,
            );
          if (!_.isSuccess)
            return (0, _.jsx)("div", {
              children: (0, _._)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (_ && _._.accountid)
            return (0, _.jsx)(_._, {
              size: "medium",
              position: "center",
              string: (0, _._)("#Loading"),
            });
          const _ = (_, _) => {
            const _ = _.Get().GetSelection(_) == _;
            _.Get().SetSelection(_, _ ? void 0 : _);
          };
          return (0, _.jsx)(_, {
            ..._,
            fnOnClick: _,
            rgAvailability: _?.data,
            bAllowedToRegisterIfFull: _?.data?.allow_registration_if_full,
          });
        }
        function _(_) {
          const {
              eventModel: _,
              scheduleData: _,
              bAllowedToRegisterIfFull: _,
              fnOnClick: _,
              rgAvailability: _,
            } = _,
            _ = (0, _._)(),
            _ = _(),
            [_, _, _] = (0, _._)(() => [
              _.jsondata.meet_steam_groups,
              _.in_person_time_zone ?? _,
              _.location_type,
            ]),
            [_, _, _] = (0, _.useMemo)(() => {
              if (!_) return [new Map(), new Map(), new Array()];
              const _ = new Map(),
                _ = new Map();
              for (const _ of _) {
                const _ = _.group_visibility_tokens ?? [],
                  _ = _ !== null && _.includes(_);
                if (!(_.length > 0 && !_ && !_))
                  for (const _ of _.sessions) {
                    const _ = (
                      _ == "in_person"
                        ? _()
                            .unix(_.rtime_start ?? 0)
                            ._(_)
                        : _().unix(_.rtime_start ?? 0)
                    ).format("YYYY-MM-DD");
                    let _ = _.get(_);
                    _ || ((_ = []), _.set(_, _)),
                      _.push({
                        group: _,
                        session: _,
                      });
                  }
              }
              for (const _ of _.session_breaks || []) {
                const _ = (
                  _ == "in_person"
                    ? _()
                        .unix(_.rtime_start ?? 0)
                        ._(_)
                    : _().unix(_.rtime_start ?? 0)
                ).format("YYYY-MM-DD");
                let _ = _.get(_);
                _ || ((_ = []), _.set(_, _)), _.push(_);
              }
              for (const _ of _.values())
                _.sort(
                  (_, _) =>
                    (_.session.rtime_start ?? 0) - (_.session.rtime_start ?? 0),
                );
              return [_, _, Array.from(_.keys()).sort()];
            }, [_, _, _, _, _, _.session_breaks]);
          return _
            ? (0, _.jsx)(_.Fragment, {
                children: _.map((_) => {
                  const _ = _.get(_);
                  return (0, _.jsx)(
                    "div",
                    {
                      className: _().SingleDayCtn,
                      children: (0, _.jsx)(_, {
                        scheduleData: _,
                        bAllowedToRegisterIfFull: !!_,
                        fnOnClick: _,
                        rgDayGroupSessions: _ ?? [],
                        rgBreakSessions: _.get(_) || [],
                        rgAvailability: _ ?? [],
                      }),
                    },
                    "day_" + _,
                  );
                }),
              })
            : (0, _.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function _(_) {
          const {
              scheduleData: _,
              rgDayGroupSessions: _,
              rgBreakSessions: _,
              bAllowedToRegisterIfFull: _,
              fnOnClick: _,
              rgAvailability: _,
            } = _,
            _ = (0, _.useMemo)(() => {
              const _ = [];
              for (const _ of _)
                _.length == 0 ||
                _[_.length - 1][0].session.rtime_start != _.session.rtime_start
                  ? _.push([_])
                  : _[_.length - 1].push(_);
              return _;
            }, [_]),
            { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_[0].session),
            _ = (0, _._)(_ ?? 0, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("h2", {
                className: _().ScheduleTopDate,
                children: _,
              }),
              _.filter(
                (_) => (_.rtime_end ?? 0) <= (_[0][0].session.rtime_start ?? 0),
              ).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    scheduleData: _,
                    breakSession: _,
                  },
                  `breaks_${_.schedule_id}_${_.break_id}`,
                ),
              ),
              _.map((_, _) => {
                let _ = [];
                if (_ + 1 < _.length) {
                  const _ = _[0].session.rtime_start ?? 0,
                    _ = _[_ + 1][0].session.rtime_end ?? 0;
                  _ = _.filter(
                    (_) => _ < (_.rtime_start ?? 0) && (_.rtime_end ?? 0) < _,
                  );
                }
                return (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)(_, {
                        bAllowedToRegisterIfFull: _,
                        fnOnClick: _,
                        scheduleData: _,
                        rgSlotSessions: _,
                        rgAvailability: _,
                      }),
                      _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            scheduleData: _,
                            breakSession: _,
                          },
                          `breaks_${_.schedule_id}_${_.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + _[0].session.rtime_start,
                );
              }),
              _.filter(
                (_) =>
                  (_.rtime_start ?? 0) >=
                  (_[_.length - 1][0].session.rtime_end ?? 0),
              ).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    scheduleData: _,
                    breakSession: _,
                  },
                  `breaks_${_.schedule_id}_${_.break_id}`,
                ),
              ),
            ],
          });
        }
        function _(_) {
          const { scheduleData: _, breakSession: _ } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)(
              () =>
                _.localized_break_description?.[_] ||
                _.localized_break_description?.[_.Bhc] ||
                "",
            ),
            _ = (0, _._)(() => ({
              rtime_start: _.rtime_start,
              rtime_end: _.rtime_end,
              location_type: _.location_type,
              in_person_time_zone: _.in_person_time_zone,
            }));
          return (0, _.jsxs)("div", {
            className: _().ScheduleRow,
            children: [
              (0, _.jsx)(_, {
                session: _,
              }),
              (0, _.jsx)("div", {
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
            scheduleData: _,
            rgSlotSessions: _,
            bAllowedToRegisterIfFull: _,
            fnOnClick: _,
            rgAvailability: _,
          } = _;
          return (0, _.jsxs)("div", {
            className: _().ScheduleRow,
            children: [
              (0, _.jsx)(_, {
                session: _[0].session,
              }),
              (0, _.jsx)("div", {
                className: _().ScheduleSessionsColumn,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      bAllowedToRegisterIfFull: _,
                      fnOnClick: _,
                      session: _,
                      rgAvailability: _,
                    },
                    `entry_${_.group.group_id}_${_.session._}`,
                  ),
                ),
              }),
            ],
          });
        }
        function _(_) {
          const { session: _ } = _,
            { sDisplayTimeZone: _, rtime_start: _, rtime_end: _ } = (0, _._)(_),
            _ = (0, _._)(_ ?? 0, _),
            _ = (0, _._)(_ ?? 0, _ ?? 0, _);
          return (0, _.jsxs)("div", {
            className: _().ScheduleTimeColumn,
            children: [
              (0, _.jsx)("div", {
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _().Timezone,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
              session: _,
              bAllowedToRegisterIfFull: _,
              fnOnClick: _,
              rgAvailability: _,
            } = _,
            _ = (0, _.sfN)(_._.LANGUAGE),
            [_, _, _, _] = (0, _._)(() => [
              _.group.localized_session_title?.[_] ||
                _.group.localized_session_description?.[_.Bhc] ||
                "",
              _.group.localized_intended_audience?.[_] ||
                _.group.localized_intended_audience?.[_.Bhc] ||
                "",
              _.group.localized_sesssion_faq?.[_] ||
                _.group.localized_intended_audience?.[_.Bhc] ||
                "",
              _.group.localized_session_description?.[_] ||
                _.group.localized_intended_audience?.[_.Bhc] ||
                "",
            ]),
            [_, _, _] = (0, _._)(!1),
            [_, _, _] = (0, _._)(() => [
              _.Get().GetRegistrationStatus(_.group.group_id, _.session._),
              _.Get().BIsRegisteredForDifferentSessionInGroup(
                _.group.group_id,
                _.session._,
              ),
              _.Get().BGetRegistrationSessionID(_.group.group_id),
            ]),
            _ = _?.find(
              (_) =>
                _.group_id === _.group.group_id && _.session_id === _.session._,
            )?.guest_count,
            _ = Math.max(0, (_.session.max_capacity ?? 0) - (_ || 0)),
            {
              strStatusClass: _,
              strStatusToken: _,
              bEnabled: _,
            } = _(_, _, _, _),
            _ =
              _ && _
                ? _.group.sessions.find((_) => _._ == _)?.rtime_start
                : void 0;
          return (0, _.jsx)(_._, {
            toolTipContent: _
              ? (0, _._)("#MeetSteam_AlreadyReg", (0, _._)(_), (0, _._)(_))
              : void 0,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().SessionInstance, _),
              children: [
                (0, _.jsx)("div", {
                  className: _().StatusText,
                  children: (0, _.jsx)("span", {
                    children: _,
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _().Background,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().SessionTitle,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().SessionAudience,
                        children: (0, _._)("#MeetSteam_Session_Audience", _),
                      }),
                    (0, _.jsx)("div", {
                      className: _().SessionInfoLink,
                      onClick: _,
                      children: (0, _._)("#MeetSteam_Session_Details"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().ScheduleActionRow,
                      children: (0, _.jsx)(_._, {
                        onClick: () => {
                          _ && _(_.group.group_id, _.session._);
                        },
                        disabled: !_,
                        children: (0, _._)(
                          _ == _ ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  nAvailableSpace: _,
                  bAllowedToRegisterIfFull: _,
                }),
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsxs)(_._, {
                    strTitle: _,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: _,
                    children: [
                      (0, _.jsx)("div", {
                        children: _,
                      }),
                      (0, _.jsx)("div", {
                        children: _,
                      }),
                      !!_ &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              children: (0, _._)("#MeetSteam_FAQ"),
                            }),
                            (0, _.jsx)(_._, {
                              text: _,
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function _(_) {
          return _ ? _.test(_.trim()) : !1;
        }
        function _(_, _) {
          return _(_) ? _ : _;
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              _.s_EventRepost ||
                ((_.s_EventRepost = new _()), _.s_EventRepost.Initialize()),
              _.s_EventRepost
            );
          }
          static ValidateRepostData(_) {
            const _ = _;
            return _ &&
              _.repost_clan_account_ids &&
              Array.isArray(_.repost_clan_account_ids) &&
              _.repost_clan_account_ids.length > 0
              ? typeof _.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let _ = (0, _._)("repostcontrols", "application_config");
              _.ValidateRepostData(_) &&
                _.repost_clan_account_ids.forEach((_) =>
                  this.m_mapClanReposted.add(_),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(_, _, _) {
            if (this.m_mapSourceEventGIDToPostedClans.has(_))
              return this.m_mapSourceEventGIDToPostedClans.get(_);
            const _ = _._.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              _ = {
                sessionid: (0, _._)(),
                source_clan_accountid: _.GetAccountID(),
                source_event_gid: _,
              };
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _?.token,
              });
              if (_?.data?.success == _._)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    _,
                    _.data.repost_clan_accountid || [],
                  ),
                  _.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  _?.data?.success +
                  " and msg: " +
                  _?.data?.msg,
              );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "GetRepostClanAccountID: fail repost with " + _.strErrorMsg,
                _,
              );
            }
            return new Array();
          }
          async RepostEvent(_, _, _, _, _) {
            const _ = _._.STORE_BASE_URL + "events/ajaxrepostevent",
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("source_clan_accountid", "" + _.GetAccountID()),
              _.append("source_event_gid", "" + _),
              _.append("repost_clan_accountid", "" + _.GetAccountID()),
              _.append("add", "" + _);
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
                cancelToken: _?.token,
              });
              if (_?.data?.success == _._ && _.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(_) ||
                  this.m_mapSourceEventGIDToPostedClans.set(_, []);
                const _ = this.m_mapSourceEventGIDToPostedClans
                  .get(_)
                  .findIndex((_) => _.GetAccountID() == _);
                return (
                  _ && _ == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(_)
                        .push(_.GetAccountID())
                    : !_ &&
                      _ !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans.get(_).splice(_, 1),
                  _.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    _?.data?.success +
                    " and msg: " +
                    _?.data?.msg,
                );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "RepostEvent: fail repost with " + _.strErrorMsg,
                _,
              );
            }
            return null;
          }
        };
        _([_._], _.prototype, "m_mapClanReposted", 2);
        let _ = _;
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { eventModel: _ } = _,
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => (
              _ &&
                (async () => {
                  const _ = _().CancelToken.source();
                  _.current = _.cancel;
                  const _ = _.Get().LoadClansAlreadyRepostedTo(
                    _.clanSteamID,
                    _.GID,
                    _,
                  );
                  _.then((_) => {
                    const _ = new Set();
                    _.forEach((_) => _.add(_)), _(_);
                  });
                  let _ = new Array();
                  _.push(_),
                    _.Get()
                      .GetRepostClanAccountID()
                      .forEach((_) => {
                        const _ = _._.InitFromClanID(_);
                        _.push(_._.LoadClanInfoForClanSteamID(_));
                      }),
                    await Promise.all(_),
                    _(!1);
                })(),
              () => _.current && _.current()
            ),
            [_, _.GID, _.clanSteamID],
          );
          const _ = new Array();
          return (
            _.Get()
              .GetRepostClanAccountID()
              .forEach((_) => {
                const _ = _._.GetClanInfoByClanAccountID(_);
                if (_ && _ != _.clanSteamID.GetAccountID()) {
                  const _ = _.has(_),
                    _ = _.has(_) || (_ && !_.has(_));
                  _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        label: _
                          ? (0, _._)(
                              "#EventRepost_Dialog_Existing",
                              _.group_name,
                            )
                          : _.group_name,
                        checked: _,
                        disabled: _ !== null,
                        onChange: (_) => {
                          _.has(_)
                            ? (_ ? _.delete(_) : _.add(_), _(new Set(_)))
                            : (_ ? _.add(_) : _.delete(_), _(new Set(_)));
                        },
                      },
                      "checkbox" + _,
                    ),
                  );
                }
              }),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                onEscKeypress: () => _.closeModal && _.closeModal(),
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#EventRepost_Dialog_Title"),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_._, {
                          children: (0, _._)("#EventRepost_Dialog_Desc"),
                        }),
                        _
                          ? (0, _.jsx)(_._, {
                              string: (0, _._)("#Loading"),
                            })
                          : (0, _.jsx)("div", {
                              children: _,
                            }),
                        !!(_.size || _.size) &&
                          (0, _.jsxs)("div", {
                            children: [
                              (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, _.jsxs)("ul", {
                                children: [
                                  !!_.size &&
                                    (0, _.jsx)("li", {
                                      children: (0, _._)(
                                        "#EventRepost_Dialog_Action_Add",
                                        _.size,
                                      ),
                                    }),
                                  !!_.size &&
                                    (0, _.jsx)("li", {
                                      children: (0, _._)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        _.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onCancel: () => _.closeModal && _.closeModal(),
                        strOKText: (0, _._)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (_.size == 0 && _.size == 0) ||
                          _ !== null ||
                          _ !== null,
                        onOK: async () => {
                          _.current && _.current();
                          const _ = _().CancelToken.source();
                          _.current = _.cancel;
                          const _ = _.size + _.size;
                          let _ = 1;
                          _((0, _._)("#EventRepost_Dialog_Progress", _, _));
                          for (const _ of Array.from(_)) {
                            const _ = _._.InitFromClanID(_);
                            if (
                              await _.Get().RepostEvent(
                                _.clanSteamID,
                                _.GID,
                                _,
                                !0,
                                _,
                              )
                            )
                              _(
                                (0, _._)(
                                  "#EventRepost_Dialog_Progress",
                                  ++_,
                                  _,
                                ),
                              );
                            else {
                              _((0, _._)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const _ of Array.from(_)) {
                            const _ = _._.InitFromClanID(_);
                            if (
                              await _.Get().RepostEvent(
                                _.clanSteamID,
                                _.GID,
                                _,
                                !1,
                                _,
                              )
                            )
                              _(
                                (0, _._)(
                                  "#EventRepost_Dialog_Progress",
                                  ++_,
                                  _,
                                ),
                              );
                            else {
                              _((0, _._)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          _((0, _._)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            nVoteCount: _,
            nCommentCount: _,
            myVote: _,
            onVote: _,
            strDiscussionURL: _,
            onDiscussionUnavailable: _,
            bShowDiscussion: _,
            repost: _,
            share: _,
          } = _;
          return (0, _.jsxs)(_._, {
            className: _().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, _.jsxs)("div", {
                className: _().InnerContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().VoteContainer,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().VoteCount,
                        children: [
                          (0, _.jsx)(_.bfp, {
                            className: _().VoteUpStaticIcon,
                          }),
                          (0, _._)(_),
                        ],
                      }),
                      (0, _.jsxs)(_._, {
                        focusable: !0,
                        className: (0, _._)(
                          _().Button,
                          _().Icon,
                          _().DiscussionButton,
                          _ == "up" ? _().VoteButtonSelected : "",
                        ),
                        onActivate: () => _("up"),
                        children: [
                          (0, _.jsx)(_.bfp, {
                            className:
                              _ == "up"
                                ? _().VoteUpSelectedIcon
                                : _().VoteUpIcon,
                          }),
                          (0, _.jsx)("span", {
                            className: _().DiscussionButtonText,
                            children: (0, _._)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        focusable: !0,
                        className: (0, _._)(
                          _().Button,
                          _().Icon,
                          _().DiscussionButton,
                          _ == "down" ? _().VoteButtonSelected : "",
                        ),
                        onActivate: () => _("down"),
                        "aria-label": (0, _._)("#Button_RateDown"),
                        children: (0, _.jsx)(_.bfp, {
                          className:
                            _ == "down"
                              ? _().VoteDownSelectedIcon
                              : _().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      commentCount: _,
                      discussionURL: _,
                      gotoDiscussion: _,
                    }),
                  _,
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().ShareContainer,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const { commentCount: _, discussionURL: _, gotoDiscussion: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().DiscussContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _().DiscussionCount,
                children: [(0, _.jsx)(_.ROZ, {}), (0, _._)(_)],
              }),
              _ &&
                (0, _.jsx)(_._, {
                  href: (0, _._)(_),
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().Button,
                      _().Icon,
                      _().DiscussionButton,
                    ),
                    children: [
                      (0, _.jsx)(_.ROZ, {}),
                      (0, _.jsx)("span", {
                        className: _().DiscussionButtonText,
                        children: (0, _._)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !_ &&
                (0, _.jsxs)(_._, {
                  focusable: !0,
                  onActivate: _,
                  className: (0, _._)(
                    _().Button,
                    _().Icon,
                    _().DiscussionButton,
                  ),
                  children: [
                    (0, _.jsx)(_.ROZ, {}),
                    (0, _.jsx)("span", {
                      className: _().DiscussionButtonText,
                      children: (0, _._)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        const _ = _.lazy(() =>
          Promise.all([
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
            __webpack_require__._("chunkid"),
          ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
        );
        function _(_, _) {
          return _.BIsUserLoggedIn()
            ? _.GetPartnerEventPermissions(_.clanSteamID).limited_user
              ? ((0, _._)((0, _.jsx)(_._, {}), window), !1)
              : !0
            : (_._.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, _._)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                      onOK: () => (0, _._)(),
                    }),
                    window,
                  ),
              !1);
        }
        function _(_) {
          const [_, _] = _.useState(() =>
              _._.Get().BHasMyVote(_)
                ? _(_._.Get().GetPreviouslyLoadedVote(_))
                : void 0,
            ),
            [_, _] = _.useState(() => !!_._.Get().BHasMyVote(_)),
            _ = _.useRef(_),
            _ = _.GID;
          _.useEffect(() => {
            const _ = _.current || !_._.Get().BIsUserLoggedIn();
            if (((_.current = !1), _)) return;
            const _ = _().CancelToken.source();
            return (
              _._.Get()
                .LoadMyVote(_, _)
                .then((_) => {
                  _(_(_)), _(!0);
                })
                .catch((_) => {
                  const _ = (0, _._)(_);
                  console.error("EventDiscussionWidget = " + _.strErrorMsg);
                }),
              () => _.cancel("EventDiscussionWidget is being unmounted")
            );
          }, [_]);
          const _ = _.useCallback(
            (_) => {
              _(_, _._.Get()) &&
                (_ == _ ||
                  _ == null ||
                  !_ ||
                  (_._.Get()
                    .Vote(_, _ === "up", _().CancelToken.source())
                    .catch((_) => {
                      const _ = (0, _._)(_);
                      console.error(
                        "EventDiscussionWidget.OnVote" +
                          _ +
                          " " +
                          _.strErrorMsg,
                        _,
                      );
                    }),
                  _(_)));
            },
            [_, _, _],
          );
          return {
            myVote: _,
            Vote: _,
          };
        }
        function _(_) {
          let _;
          return _ === !0 ? (_ = "up") : _ === !1 && (_ = "down"), _;
        }
        function _(_) {
          const { eventModel: _, emoticonStore: _, partnerEventStore: _ } = _,
            _ = (0, _._)(),
            { myVote: _, Vote: _ } = _(_),
            [, _] = (0, _._)(_.clanSteamID.GetAccountID()),
            _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_._, {
                  strDescription: (0, _._)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, _._)(_),
              );
            },
            _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_, {
                  eventModel: _,
                }),
                (0, _._)(_),
              );
            },
            [_, _, _, _] = (0, _._)(() => [
              (0, _._)(_.nVotesUp - _.nVotesDown, 0, Number.MAX_SAFE_INTEGER),
              (0, _._)(_.GetForumTopicURL(_?.vanity_url)),
              _.BIsUnlistedEvent(),
              _.nCommentCount,
            ]),
            _ = (0, _._)(),
            _ = _._.logged_in && _.Get().BCanRepostPartnerEvent();
          return (0, _.jsx)(_, {
            nVoteCount: _,
            nCommentCount: _,
            myVote: _,
            onVote: _,
            strDiscussionURL: _,
            onDiscussionUnavailable: _,
            bShowDiscussion: !_ && !_,
            repost:
              _ &&
              (0, _.jsx)("div", {
                className: _().VoteContainer,
                children: (0, _.jsx)(_._, {
                  focusable: !0,
                  className: (0, _._)(
                    _().Button,
                    _().Icon,
                    _().DiscussionButton,
                    _ == "down" ? _().VoteButtonSelected : "",
                  ),
                  onActivate: _,
                  children: (0, _._)("#EventRepost_Dialog_Title"),
                }),
              }),
            share:
              !_ &&
              (0, _.jsx)(_, {
                eventModel: _,
                emoticonStore: _,
                partnerEventStore: _,
              }),
          });
        }
        function _(_) {
          const { eventModel: _, emoticonStore: _, partnerEventStore: _ } = _,
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_.Suspense, {
                  fallback: null,
                  children: (0, _.jsx)(_._, {
                    active: !0,
                    children: (0, _.jsx)(_, {
                      closeModal: _,
                      eventLink: _,
                      sharePageUrls: _,
                      appid: _.appid,
                      emoticonStore: _,
                      partnerEventStore: _,
                    }),
                  }),
                }),
              (0, _.jsxs)(_._, {
                focusable: !0,
                className: (0, _._)(_().Button, _().Icon, _().DiscussionButton),
                onActivate: _,
                children: [
                  (0, _.jsx)(_.SYj, {
                    className: _().ShareIcon,
                  }),
                  (0, _.jsx)("span", {
                    className: _().DiscussionButtonText,
                    children: (0, _._)("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
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
          _ = __webpack_require__("chunkid");
        function _() {
          return React.useMemo(
            () => ({
              style: {
                defaultValue: null,
                fnReadValue: (_) => _.attrs.style || null,
                fnRenderEditor: (_, _) =>
                  jsx(_, {
                    value: _,
                    setValue: _,
                  }),
              },
              buttoncolor: {
                defaultValue: null,
                fnReadValue: (_) => _.attrs.buttoncolor || null,
                fnRenderEditor: (_, _) =>
                  jsx(_, {
                    value: _,
                    setValue: _,
                  }),
              },
            }),
            [],
          );
        }
        function _(_) {
          const { value: _, setValue: _ } = _;
          return jsxs(Dialog.LabelGroup, {
            label: Localize("#EventEditor_InsertLink_Style"),
            children: [
              jsx(Dialog.RoundCheckboxField, {
                checked: _ == null,
                onChange: (_) => _ && _(null),
                label: Localize("#EventEditor_InsertLink_Style_Default"),
              }),
              jsx(Dialog.RoundCheckboxField, {
                checked: _ == "pill",
                onChange: (_) => _ && _("pill"),
                label: Localize("#EventEditor_InsertLink_Style_Pill"),
              }),
            ],
          });
        }
        function _(_) {
          const { value: _, setValue: _ } = _;
          return jsxs(Fragment, {
            children: [
              jsx(Dialog.Label, {
                children: Localize("#EventEditor_InsertLink_ButtonColor"),
              }),
              jsx("input", {
                type: "color",
                value: _ || "#3691fa",
                onChange: (_) => _(_?.currentTarget?.value),
              }),
            ],
          });
        }
        function _(_) {
          switch (_) {
            case "button":
              return (0, _._)(_.LinkButton, "LinkButton");
            case "pill":
              return (0, _._)(_.LinkPill, "LinkPill");
            default:
              return (0, _._)(_.Link, "Link");
          }
        }
        function _(_, _, _) {
          let _ = "";
          return (
            _ == "button" && _ && (_ += `background-color: ${_};`),
            _ == "pill" && _ && (_ += `color: ${_};`),
            _.length == 0 ? void 0 : _
          );
        }
        function _(_, _, _) {
          let _;
          return (
            (_ == "button" || _ == "pill") &&
              _ &&
              (_ = {
                backgroundColor: _,
              }),
            (_ == "button" || _ == "pill") &&
              _ &&
              (_ = {
                ...(_ ?? {}),
                color: _,
              }),
            _
          );
        }
        function _(_) {
          let _ = (0, _._)((0, _._)(_.args) || (0, _._)(_.args, "href"));
          const _ = (0, _._)(_.args, "style"),
            _ = (0, _._)(_.args, "id"),
            _ = (0, _._)(
              (0, _._)(_.args, "buttoncolor") || (0, _._)(_.args, "bgcolor"),
              void 0,
            ),
            _ = (0, _._)(
              (0, _._)(_.args, "labelcolor") || (0, _._)(_.args, "color"),
              void 0,
            ),
            _ = _(_),
            _ = _.context.event,
            _ = (0, _._)(_, _.language, _?.rtime32_last_modified);
          if (_ === void 0 || _ == null) return _.children || "";
          typeof _ == "string" ? (_ = _) : (_ = _[1]);
          const _ = _(_, _, _);
          return typeof _ == "string" && _.length > 0 && _[0] == "#"
            ? (0, _.jsx)(_._, {
                className: _,
                href: _,
                style: _,
                children: _.children,
              })
            : _ == "steam://settings/account"
              ? (0, _.jsx)(_._, {
                  className: _,
                  href: "steam://settings/account",
                  children: _.children,
                })
              : (0, _.jsx)(_._, {
                  className: _,
                  url: _,
                  event: _.context.event,
                  _: _,
                  style: _,
                  children: _.children,
                });
        }
        function _(_) {
          const _ = (0, _._)(_.args, "href"),
            _ = (0, _._)(_);
          return _
            ? _.fnBBComponent(_, {
                event: _.context.event,
                partnerEventStore: _._,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_._),
            _ =
              String((0, _._)(_.args, "autoadvance")).toLowerCase() === "true";
          return (0, _.jsx)(_._, {
            hideArrows: !_,
            hidePips: _,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: _,
            bAutoAdvance: _,
            className: _().ScreenshotCarousel,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { strURL: _, children: _ } = _;
          return (
            typeof _ == "string"
              ? !(0, _._)(_)
              : _.some((_) => !(0, _._)(_))
          )
            ? (0, _.jsx)(_, {
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _._)()
            ? (0, _.jsx)(_.Fragment, {
                children: _,
              })
            : (0, _.jsx)("div", {
                className: _().ImageBlocked,
                children: (0, _._)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                [
                  "url",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "dynamiclink",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "h1",
                  {
                    Constructor: _._(_._, _.Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: _._(_._, _.Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: _._(_._, _.Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  {
                    Constructor: _._(_._, _.BlockQuote),
                    autocloses: !1,
                  },
                ],
                [
                  "list",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: _._,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: _._,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "img",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "previewyoutube",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "looping_media",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "video",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "youtubeorvideo",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "trailer",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "speaker",
                  {
                    Constructor: _,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                [
                  "docimg",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "carousel",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        function _(_) {
          const { showErrorInfo: _, event: _ } = _.context;
          let _ = (0, _._)(_.args, "src") || _.children?.toString();
          _ || (_ = (0, _._)(_.args));
          const _ = (0, _._)(_.args, "style") === "inline",
            _ = (0, _._)(_, _.language, _?.rtime32_last_modified);
          if (_ == null) return null;
          if (typeof _ == "string") {
            _ = _;
            let _;
            return (
              (_ = !(0, _._)(_)),
              _?.BHasTag("auto_rssfeed") && (_ = !1),
              _
                ? (0, _.jsx)(_._, {
                    className: (0, _._)({
                      [_().Image_Inline]: _,
                    }),
                    src: _,
                    crossOrigin: _ ? "anonymous" : void 0,
                  })
                : ((_ = (0, _._)(_)),
                  (0, _.jsx)(_, {
                    strURL: _,
                    children: (0, _.jsx)(_._, {
                      className: (0, _._)({
                        [_().Image_Inline]: _,
                      }),
                      src: _,
                      crossOrigin: _ ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, _.jsx)(_, {
              strURL: _,
              children: (0, _.jsx)(_._, {
                rgSources: _,
              }),
            });
        }
        function _(_) {
          const _ = (0, _._)(_.args);
          if (_ == null || _ == null || _.length == 0) return "";
          const _ = _.children?.toString(),
            _ = new Array();
          return (
            _.push(
              `${_._.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${_._.LANGUAGE}/${_}`,
            ),
            _._.LANGUAGE != "english" &&
              _.push(
                `${_._.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${_}`,
              ),
            (0, _.jsx)(_._, {
              rgSources: _,
              alt: _,
            })
          );
        }
        function _(_) {
          const _ = _(_.args, "appid", _.context.event?.appid ?? 0),
            _ = _(_.args, "trailerid", 0);
          let _ =
            (0, _._)(_.args, "style")?.toLocaleLowerCase() ??
            _._.k_TrailerAsFull;
          _ = Object.values(_._).includes(_) ? _ : _._.k_TrailerAsFull;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white"),
            _ = (0, _._)(_.args);
          return (0, _.jsx)(_._, {
            appid: _,
            trailerBaseID: _,
            bIsPreviewMode: _.context.showErrorInfo,
            embedStyle: _,
            color: _,
            bgcolor: _,
            children: _.children,
            subtitles: _.rgVideoTracks,
          });
        }
        function _(_) {
          const _ = (0, _._)(_.args, "name"),
            _ = (0, _._)(_.args, "title"),
            _ = (0, _._)(_.args, "company"),
            _ = (0, _._)(_.args, "photo");
          return _.context.bShowShortSpeakerInfo
            ? (0, _.jsx)(_._, {
                name: _,
                title: _,
                company: _,
                photo: _,
                bio: _.children,
              })
            : (0, _.jsx)(_._, {
                name: _,
                title: _,
                company: _,
                photo: _,
                bio: _.children,
              });
        }
        function _(_, _, _) {
          const _ = (0, _._)(_, _);
          return _ === void 0 || _ == null ? _ : Number.parseInt(_);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _._ {
          m_LinkFilter = _._;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(_, _, _, _) {
            super(_),
              (this.m_parentNode = _),
              (this.m_mapHostToComponent = _),
              (this.m_globalStoreLink = _);
          }
          AppendText(_, _ = !1) {
            let _ = _;
            if (
              (_ || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let _ = this.m_LinkFilter.exec(_);
              for (; _; ) {
                if (_.index > 0) {
                  let _ = _.input.substring(0, _.index);
                  super.AppendText(_, _);
                }
                let _ = _[0],
                  _ = !1;
                if (this.m_mapHostToComponent) {
                  for (let _ = 0; _ < this.m_mapHostToComponent.length; ++_)
                    if (this.m_mapHostToComponent[_].urlRegExp.exec(_)) {
                      (_ = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[_].fnBBComponent(
                            _,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                _ || super.AppendNode((0, _._)(_)),
                  (_ = _.input.substring(_.index + _.length)),
                  (_ = this.m_LinkFilter.exec(_));
              }
            }
            _.length > 0 && super.AppendText(_, _);
          }
        }
        const _ = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class _ extends _._ {
          m_EmoteRegex = new RegExp(_);
          AppendText(_, _ = !1) {
            let _ = _;
            if (_.length >= 3) {
              let _ = this.m_EmoteRegex.exec(_);
              for (; _; ) {
                if (_.index > 0) {
                  let _ = _.input.substring(0, _.index);
                  super.AppendText(_, _);
                }
                let _ = _[1];
                super.AppendNode(
                  _.createElement(
                    _._,
                    {
                      emoticon: _,
                    },
                    [],
                  ),
                ),
                  (_ = _.input.substring(_.index + _.length + 2)),
                  (_ = this.m_EmoteRegex.exec(_));
              }
            }
            _.length > 0 && super.AppendText(_, _);
          }
        }
        class _ extends _._ {
          m_parentNode = void 0;
          constructor(_, _) {
            super(_), (this.m_parentNode = _);
          }
          AppendText(_, _ = !1) {
            let _ = _;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              (_ = (0, _._)(_)),
              super.AppendText(_, _);
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_._.entries()),
                ...Array.from((0, _._)().entries()),
              ])),
            _
          );
        }
        const _ = _.createContext(null);
        function _() {
          return _.useContext(_) ?? _();
        }
        function _(_) {
          const _ = _(),
            _ = _.useMemo(
              () =>
                new Map([
                  ...Array.from(_.entries()),
                  ...Array.from(_.dictionary.entries()),
                ]),
              [_, _.dictionary],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _.children,
          });
        }
        function _(_) {
          const {
              text: _,
              partnerEventStore: _,
              languageOverride: _,
              event: _,
              showErrorInfo: _,
              bShowShortSpeakerInfo: _,
            } = _,
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) =>
                new _(
                  new _(
                    new _(new _._(new _._()), _, _, {
                      partnerEventStore: _,
                      event: _,
                    }),
                  ),
                  _,
                ),
              [_, _, _],
            ),
            _ = _();
          return _.useMemo(
            () => new _._(_, _, _ || _._.LANGUAGE),
            [_, _, _],
          ).ParseBBCode(_, {
            showErrorInfo: _,
            event: _,
            bShowShortSpeakerInfo: _,
          });
        }
        function _(_) {
          const {
              strTag: _,
              args: _,
              rawargs: _,
              language: _ = PchLanguageToELanguage(Config.LANGUAGE),
              children: _,
              ..._
            } = _,
            _ = _().get(_);
          return _
            ? jsx(_.Constructor, {
                context: _,
                tagname: _,
                args: _,
                language: _,
                children: _,
                rawargs: _,
              })
            : jsxs(Fragment, {
                children: [`[${_}]`, _, `[/${_}]`],
              });
        }
      },
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          _ =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i;
        function _(_) {
          if (!_ || (_.GetEventType() != _.ajI && _.GetEventType() != _.HRy))
            return !1;
          const _ = _._.GetClanInfoByClanAccountID(
            _.clanSteamID.GetAccountID(),
          );
          return !(!_._.GetCreatorHome(_.clanSteamID) || !_ || !(0, _._)(_, _));
        }
        function _(_, _) {
          const _ = _._.GetCreatorHome(_.clanSteamID)?.GetAppIDList() ?? [];
          return (
            _.length > 0 && _.filter((_) => _.includes(_)).length === _.length
          );
        }
        function _(_, _, _) {
          if ((0, _._)(_)) {
            let _ = new RegExp(_).exec(_);
            if (_ && _.length > 2) {
              let _, _, _, _;
              _[1] == "gid"
                ? (_ = new _._(_[2]))
                : _[1] == "group"
                  ? (_ = _._.InitFromClanID(Number.parseInt(_[2])))
                  : _[1] == "groups"
                    ? (_ = _[2])
                    : isNaN(+_[2])
                      ? (_ = _[2])
                      : ((_ = Number(_[2])),
                        (_ = !_ || (_(_.event) && _(_.event, [_])) ? _ : 0));
              const _ = _[3];
              if (
                ((_ !== void 0 && _ > 0) ||
                  _ !== void 0 ||
                  _ !== void 0 ||
                  _ !== void 0) &&
                _ != null &&
                _.length > 0
              )
                return (0, _.jsx)(_._, {
                  appid: _,
                  clanSteamID: _,
                  strVanity: _,
                  strGroupVanity: _,
                  eventGID: _,
                  strURL: _,
                });
            }
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          return _(_, _, _);
        }
        function _(_, _) {
          return _(_, _, _);
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = [
                {
                  urlRegExp: new RegExp(_),
                  fnBBComponent: _,
                },
                {
                  urlRegExp: new RegExp(_),
                  fnBBComponent: _,
                },
              ]),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        let _ = class extends _.Component {
          state = {
            bLoading: this.props.announcementGID
              ? !_._.BHasClanAnnouncementGID(this.props.announcementGID)
              : !_._.BHasClanAnnouncementGID(this.props.eventGID ?? ""),
            bFailedLoad: !1,
          };
          m_cancelSignal = _().CancelToken.source();
          componentDidMount() {
            this.HandleLoadEventInfo();
          }
          async HandleLoadEventInfo() {
            const {
              appid: _,
              strVanity: _,
              announcementGID: _,
              eventGID: _,
              strGroupVanity: _,
            } = this.props;
            let _ = this.props.clanSteamID;
            try {
              if (this.state.bLoading) {
                if (_ !== void 0) {
                  const _ = await _._.LoadOGGClanInfoForIdentifier(_);
                  if (!_) {
                    this.setState({
                      bFailedLoad: !0,
                    });
                    return;
                  }
                  _ = _.clanSteamID;
                } else if (_ !== void 0) {
                  const _ = await _._.LoadOGGClanInfoForGroupVanity(_);
                  if (!_) {
                    this.setState({
                      bFailedLoad: !0,
                    });
                    return;
                  }
                  _ = _.clanSteamID;
                }
                const _ = await _._.LoadPartnerEventGeneric(_, _, _, _, 0);
                if (!_) {
                  this.setState({
                    bFailedLoad: !0,
                  });
                  return;
                }
                await _._.Get().QueueAppRequest(_.appid, {
                  include_assets: !0,
                  include_basic_info: !0,
                  include_release: !0,
                }),
                  this.setState({
                    bFailedLoad: !1,
                    bLoading: !1,
                  });
              }
            } catch (_) {
              this.HandleError(_);
            }
          }
          HandleError(_) {
            let _ = (0, _._)(_);
            const {
              eventGID: _,
              announcementGID: _,
              strGroupVanity: _,
              strVanity: _,
            } = this.props;
            console.error(
              "EventSnippet hit error on announceGID " +
                _ +
                " eventGID " +
                _ +
                " strVanity " +
                _ +
                " strGroupVanity " +
                _ +
                " error: " +
                _.strErrorMsg,
            ),
              this.setState({
                bFailedLoad: !0,
              });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel("component unmounted");
          }
          render() {
            const {
              appid: _,
              announcementGID: _,
              eventGID: _,
              strURL: _,
              fnFilterImageURLsForKnownFailures: _,
              fnImageFailureCallback: _,
            } = this.props;
            if (this.state.bFailedLoad) return (0, _._)(_);
            if (this.state.bLoading) return (0, _.jsx)(_._, {});
            let _ =
              _ !== void 0
                ? _._.GetClanEventFromAnnouncementGID(_)
                : _._.GetClanEventModel(_ ?? "");
            if (_ == null) return (0, _._)(_);
            const _ = (0, _.sfN)(_._.LANGUAGE);
            let _ = _.GetNameWithFallback(_),
              _ = _.GetSubTitleWithSummaryFallback(_),
              _ = _._.Get()
                .GetApp(_ ?? 0)
                ?.GetName(),
              _ = (0, _._)(_.GetStartTimeAndDateUnixSeconds());
            return (0, _.jsxs)(_._, {
              eventModel: _,
              route: _._.k_eView,
              className: _._.Box,
              "data-modal-content-sizetofit": !0,
              "data-appid": _,
              children: [
                (0, _.jsx)(_, {
                  ...this.props,
                  event: _,
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _._)(
                          _.type == _.uYK
                            ? "#EventDisplay_Share_Announcement"
                            : "#EventDisplay_Share_Event",
                          _ ?? "",
                        ),
                        (0, _.jsx)(_._, {
                          children: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)("div", {
                        className: _._.Type,
                        children: _,
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      children: _,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        function _(_) {
          const {
            event: _,
            fnFilterImageURLsForKnownFailures: _,
            fnImageFailureCallback: _,
          } = _;
          let _ = (0, _.sfN)(_._.LANGUAGE),
            _ = (0, _._)(_, "capsule", _, _._.capsule_main) ?? [];
          return (
            _ && _ && (_ = _(_)),
            (0, _.jsx)(_._, {
              className: _._.Preview,
              rgSources: _ ?? [],
              onIncrementalError: (_, _, _) => _ && _(_),
            })
          );
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
          _ = __webpack_require__("chunkid");
        const _ = _.createContext(void 0);
        function _(_) {
          return (0, _.jsx)(_.Provider, {
            value: _.linkWidgets,
            children: _.children,
          });
        }
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          const _ = _();
          return _.useMemo(() => _?.find((_) => !!_.urlRegExp.exec(_)), [_, _]);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _._,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7;
        class _ {
          constructor() {
            (0, _._)(this);
          }
          exportFn = void 0;
          file = void 0;
          dataURL = void 0;
          uploadFileName = "";
          displayFileName = void 0;
          sha1 = "";
          hmac = "";
          timestamp = 0;
          imageWidth = 0;
          imageHeight = 0;
          fileInfo = void 0;
          uploadInfo = void 0;
          eUploadState = _;
          uploadProgress = 0;
          strErrorDescription = void 0;
        }
        _([_._], _.prototype, "file", 2),
          _([_._], _.prototype, "dataURL", 2),
          _([_._], _.prototype, "imageWidth", 2),
          _([_._], _.prototype, "imageHeight", 2),
          _([_._], _.prototype, "eUploadState", 2),
          _([_._], _.prototype, "uploadProgress", 2),
          _([_._], _.prototype, "strErrorDescription", 2);
        class _ {
          m_Callbacks;
          m_fileUploadProps = new _();
          m_onComplete;
          constructor(_) {
            (0, _._)(this), (this.m_Callbacks = _);
          }
          get file_upload_props() {
            return this.m_fileUploadProps;
          }
          get file_upload_data_url() {
            return this.m_fileUploadProps.dataURL;
          }
          get file() {
            return this.m_fileUploadProps.file;
          }
          LogFileUploadMessage(_) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(_);
          }
          SetUploadFileError(_, _) {
            (this.m_fileUploadProps.eUploadState = _),
              (this.m_fileUploadProps.strErrorDescription = _),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(_, _ = {}) {
            const { displayFilename: _, info: _, onComplete: _ } = _;
            (this.m_fileUploadProps.eUploadState = _),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = _),
              (this.m_fileUploadProps.fileInfo = _),
              this.SetFileToUpload(_),
              (this.m_fileUploadProps.displayFileName = _);
          }
          async SetImageFileToUpload(_, _ = {}) {
            const { processor: _ = _, info: _ } = _;
            if (!_) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = _;
            const _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
            if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                _,
                (0, _._)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  _,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let _ = [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
                "webp",
                "avif",
              ],
              _ = _.name.split(".").pop()?.toLowerCase() ?? "";
            if (_.indexOf(_) == -1) {
              let _ = _ || _;
              this.SetUploadFileError(
                _,
                (0, _._)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  _,
                ),
              );
              return;
            }
            const _ = await _(_);
            this.SetFileToUpload(_.file),
              (this.m_fileUploadProps.imageHeight = _.height),
              (this.m_fileUploadProps.imageWidth = _.width);
          }
          async SetOtherFileToUpload(_, _ = {}) {
            if (!_) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = _.info;
            const _ = this.m_Callbacks.GetFileNameOverride?.() ?? _.name;
            if (_.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                _,
                (0, _._)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  _,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let _ = ["zip"],
              _ = _.name.split(".").pop()?.toLowerCase() ?? "";
            if (_.indexOf(_) == -1) {
              let _ = _ || _;
              this.SetUploadFileError(
                _,
                (0, _._)("#Chat_Settings_Error_FileTypeNotZip", _),
              );
              return;
            }
            this.SetFileToUpload(_);
          }
          SetFileToUpload(_) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !_)
            ) {
              this.m_fileUploadProps.eUploadState = _;
              return;
            }
            let _ = "";
            if (typeof _ == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = _);
            else {
              (this.m_fileUploadProps.file = _),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                _ = URL.createObjectURL(_);
              } catch (_) {
                console.error(`Failed to created object URL from file: ${_}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = _;
            let _ = "";
            for (; _.length < 40; )
              _ += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = _),
              (this.m_fileUploadProps.sha1 = _),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(_) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = _;
              const { eResult: _, file: _ } =
                await this.m_fileUploadProps.exportFn((_) => {
                  (0, _._)(() => {
                    this.m_fileUploadProps.uploadProgress = _ * 0.5;
                  });
                });
              if (_ != _._ || !_)
                return (
                  this.SetUploadFileError(
                    _,
                    (0, _._)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = _),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + _.name);
            }
            let _ = this.m_fileUploadProps.file;
            if (!_)
              throw (
                ((0, _._)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = _),
              (this.m_fileUploadProps.uploadInfo = _);
            let _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("l", _._.LANGUAGE),
              _.append("file_size", _.size.toString()),
              _.append("file_name", this.m_fileUploadProps.uploadFileName),
              _.append("file_sha", this.m_fileUploadProps.sha1),
              _.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              _.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              _.append("file_type", _.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  _,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let _ = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${_._.LANGUAGE}`,
                  {
                    method: "POST",
                    body: _,
                    credentials: "include",
                  },
                ),
                _;
              try {
                _ = await _.json();
              } catch {}
              if (!_._) {
                let _ = "";
                throw (
                  ((0, _._)(() => {
                    (this.m_fileUploadProps.eUploadState = _),
                      this.LogFileUploadMessage(_),
                      _?.message
                        ? (_ = _?.message)
                        : (_ = (0, _._)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, _._)(
                        "#Chat_Upload_ErrorStart",
                        _,
                      ));
                  }),
                  _)
                );
              }
              if (!_ || !_.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = _.timestamp),
                (this.m_fileUploadProps.hmac = _.hmac),
                this.DoFileUpload(_.result, _)
              );
            } catch (_) {
              let _ = _ || (0, _._)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, _._)(() => {
                  (this.m_fileUploadProps.eUploadState = _),
                    (this.m_fileUploadProps.strErrorDescription = (0, _._)(
                      "#Chat_Upload_ErrorStart",
                      _,
                    ));
                }),
                _)
              );
            }
          }
          async DoFileUpload(_, _) {
            let _ = _.use_https ? "https://" : "http://";
            _ += _.url_host + _.url_path;
            const _ = {};
            for (const _ of _.request_headers)
              _.name == "Content-Length" ||
                _.name == "Host" ||
                (_[_.name] = _.value);
            let _ = {
              onUploadProgress: (_) => {
                const _ = !!this.m_fileUploadProps.exportFn,
                  _ = _ ? 50 : 0,
                  _ = _ ? 50 : 100,
                  _ = _ + (_.loaded / _.total) * _;
                _ > this.m_fileUploadProps.uploadProgress &&
                  (0, _._)(() => {
                    this.m_fileUploadProps.uploadProgress = _;
                  });
              },
              headers: _,
              transformRequest: [(_) => _],
            };
            try {
              return (
                await _().put(_, _, _), this.CommitFileUpload(!0, _.ugcid, _)
              );
            } catch (_) {
              throw (
                (this.LogFileUploadMessage(_.response),
                (0, _._)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, _._)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = _),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, _.ugcid, _),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(_, _, _) {
            let _ = this.m_fileUploadProps.sha1,
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("l", _._.LANGUAGE),
              _.append("file_name", this.m_fileUploadProps.uploadFileName),
              _.append("file_sha", _),
              _.append("success", _ ? "1" : "0"),
              _.append("ugcid", _),
              _.append("file_type", _.type),
              _.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              _.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              _.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              _.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                _,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let _ = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: _,
                credentials: "include",
              });
              return (
                _
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = _),
                    this.m_onComplete && this.m_onComplete(_._, _.size))
                  : ((this.m_fileUploadProps.eUploadState = _),
                    this.m_onComplete && this.m_onComplete(_._, _.size)),
                _
              );
            } catch (_) {
              if (!_) return;
              let _ = "";
              throw (
                ((0, _._)(() => {
                  if (
                    (this.LogFileUploadMessage(_),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = _),
                    _.response)
                  ) {
                    let _ = _.response.data,
                      _ = _.response.status,
                      _ = _ && _.success;
                    _.message
                      ? (_ = _.message)
                      : (_ = (0, _._)("#Chat_Settings_Error_ServerError"));
                  } else _ = (0, _._)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${_}`),
                    this.m_onComplete && this.m_onComplete(_._, _.size);
                }),
                _)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != _ &&
              this.m_fileUploadProps.eUploadState != _ &&
              this.m_fileUploadProps.eUploadState != _) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        _([_._], _.prototype, "SetUploadFileError", 1),
          _([_._], _.prototype, "StartFileExportToUpload", 1),
          _([_._], _.prototype, "SetImageFileToUpload", 1),
          _([_._], _.prototype, "SetOtherFileToUpload", 1),
          _([_._], _.prototype, "SetFileToUpload", 1),
          _([_._], _.prototype, "RetryFileUpload", 1),
          _([_._], _.prototype, "BeginFileUpload", 1),
          _([_._], _.prototype, "DoFileUpload", 1),
          _([_._], _.prototype, "CommitFileUpload", 1),
          _([_._], _.prototype, "ClearFileUploadError", 1),
          _([_._], _.prototype, "Reset", 1);
        function _(_) {
          return new Promise((_) => {
            let _ = new FileReader();
            (_.onload = () => {
              let _ = _,
                _ = _.result,
                _ = _(_),
                _ = new Blob([_], {
                  type: _.type,
                });
              if (_) {
                let _ = _;
                (_.lastModifiedDate = new Date(_.lastModified)),
                  (_.name = _.name),
                  (_ = _);
              }
              if (_.type.indexOf("image") == 0) {
                let _ = new Image();
                (_.src = URL.createObjectURL(_)),
                  (_.onload = (_) => {
                    _({
                      file: _,
                      width: _.width,
                      height: _.height,
                    });
                  });
              } else
                _({
                  file: _,
                  width: 0,
                  height: 0,
                });
            }),
              _.readAsArrayBuffer(_);
          });
        }
        function _(_) {
          let _ = new DataView(_),
            _ = 0,
            _ = 0,
            _ = [],
            _ = 0;
          if (_.getUint16(_) == 65496) {
            _ += 2;
            let _ = _.getUint16(_);
            for (_ += 2; _ < _.byteLength && _ < 131072; ) {
              if (_ == 65505)
                (_[_] = {
                  recess: _,
                  offset: _ - 2,
                }),
                  (_ = _ + _.getUint16(_)),
                  _++;
              else if (_ == 65498) break;
              (_ += _.getUint16(_)), (_ = _.getUint16(_)), (_ += 2);
            }
            let _ = _.byteLength - _;
            if (
              (_.forEach((_) => {
                _ += _.offset - _.recess;
              }),
              _ === _.byteLength)
            )
              return _;
            const _ = new Uint8Array(_);
            if (_.length > 0) {
              let _ = 0;
              _.forEach((_) => {
                let _ = _.offset - _.recess;
                _.set(new Uint8Array(_.slice(_.recess, _.offset)), _), (_ += _);
              }),
                _.set(new Uint8Array(_.slice(_)), _);
            }
            return _.buffer;
          }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = (_) => {
            const _ = (0, _.useRef)(null),
              [_, _] = (0, _.useState)(_._.Get().GetVODForAppID(_.appid)),
              [_, _] = (0, _.useState)(!_._.Get().GetVODForAppID(_.appid));
            return (
              (0, _.useEffect)(() => () => {
                _.current?.("VODPlayer: unmounting");
              }),
              (0, _.useEffect)(() => {
                let _ = _;
                if (
                  (_ &&
                    _.appid != _.appid &&
                    (_ = _._.Get().GetVODForAppID(_.appid)),
                  !_)
                ) {
                  const _ = async () => {
                    _.current && _.current();
                    const _ = _().CancelToken.source();
                    (_.current = _.cancel),
                      (_ = await _._.Get().LoadVODForAppID(_.appid)),
                      _.token.reason || _(_),
                      _(!1);
                  };
                  _(!0), _();
                }
                _ != _ && _(_);
              }, [_.appid, _]),
              !_ && _.bPreviewMode
                ? (0, _.jsx)("div", {
                    children: (0, _._)(
                      _ ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                      _.appid,
                    ),
                  })
                : (0, _.jsx)("div", {
                    className: _.BroadcastCtn,
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_.Suspense, {
                        fallback: null,
                        children: (0, _.jsx)(_, {
                          nAppIDVOD: _.appid,
                          watchLocation: _._._,
                          bStartPaused: !0,
                        }),
                      }),
                    }),
                  })
            );
          };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { fileUploadManager: _ } = _,
            _ = (0, _.useRef)(null);
          return (0, _.jsxs)("div", {
            className: _.Ctn,
            children: [
              (0, _.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: {
                  display: "none",
                },
                name: "fileupload",
                ref: _,
                onChange: (_) => {
                  const _ = _.currentTarget.files;
                  _?.length &&
                    (_.SetImageFileToUpload(_[0]),
                    (_.currentTarget.value = ""));
                },
              }),
              (0, _.jsx)(_._, {
                type: "button",
                title: (0, _._)("#Button_Upload"),
                onOKActionDescription: (0, _._)("#Button_Upload"),
                onClick: () => _.current?.click(),
                children: (0, _.jsx)(_.xv8, {}),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { fileUploadManager: _ } = _,
            _ = (0, _._)(() => _.file_upload_props.eUploadState);
          return _ == _
            ? (0, _.jsx)(_, {
                fileUploadManager: _,
              })
            : _ == _ || _ == _ || _ == _
              ? (0, _.jsx)(_, {
                  fileUploadManager: _,
                })
              : _ != _
                ? (0, _.jsx)(_, {
                    fileUploadManager: _,
                  })
                : null;
        }
        function _(_) {
          const { fileUploadManager: _ } = _,
            _ = _.file;
          return _
            ? (0, _.jsxs)("div", {
                className: _.UploadPreviewContainer,
                children: [
                  _.type.indexOf("image") != -1 &&
                    (0, _.jsx)("img", {
                      className: _.UploadPreview,
                      src: _.file_upload_data_url,
                    }),
                  _.type.indexOf("video") != -1 && (0, _.jsx)(_.CeX, {}),
                  (0, _.jsxs)("div", {
                    className: _.FileUploadFileName,
                    children: ["'", _.name, "'"],
                  }),
                  (0, _.jsx)("div", {
                    className: _.FileUploadCancel,
                    onClick: () => _.Reset(),
                    children: (0, _.jsx)(_.sED, {}),
                  }),
                  (0, _.jsx)(_._, {
                    className: _.FileUploadBtn,
                    onClick: async () => {
                      await _.BeginFileUpload(), _.Reset();
                    },
                    children: (0, _._)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { fileUploadManager: _ } = _,
            [_, _, _] = (0, _._)(() => [
              _.file_upload_props.file,
              _.file_upload_props.displayFileName,
              _.file_upload_props.uploadProgress,
            ]),
            _ = _ ? (0, _._)("#Uploading_Item", _ ?? "") : "",
            _ = {
              width: _ + "%",
            };
          return (0, _.jsxs)("div", {
            className: _.FileUploadProgressContainer,
            children: [
              (0, _.jsx)("div", {
                className: _.FileUploadProgressName,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, _.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { fileUploadManager: _ } = _,
            [_, _, _] = (0, _._)(() => [
              _.file_upload_props.strErrorDescription,
              _.file_upload_props.displayFileName,
              _.file_upload_props.eUploadState,
            ]),
            _ = _ ? (0, _._)("#Uploading_Item", _) : "",
            _ = _ || (0, _._)("#Chat_Upload_ErrorCloud");
          return (0, _.jsxs)("div", {
            className: _.FileUploadProgressContainer,
            children: [
              (0, _.jsx)("div", {
                className: _.FileUploadProgressName,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _.FileUploadErrorDescription,
                children: _,
              }),
              (0, _.jsx)("div", {
                className: _.FileUploadActions,
                children: (0, _.jsxs)(_._, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    _ == _ &&
                      (0, _.jsx)(_._, {
                        onClick: async () => {
                          await _.RetryFileUpload(), _.Reset();
                        },
                        children: (0, _._)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, _.jsx)(_._, {
                      onClick: () => _.ClearFileUploadError(),
                      children: (0, _._)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new Map([
          [
            "remindme",
            {
              Constructor: _,
              autocloses: !1,
            },
          ],
        ]);
        function _(_) {
          const { event: _, showErrorInfo: _ } = _.context,
            _ = (0, _._)(_.args);
          if (_)
            return (0, _.jsx)(_._, {
              eventGID: _,
              bPreviewMode: _,
            });
          if (_) {
            const _ = (0, _.sfN)(_._.LANGUAGE);
            return (0, _.jsx)(_._, {
              eventModel: _,
              lang: _,
            });
          } else return null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = _(_, _);
          return (0, _.useMemo)(() => {
            const _ = _.results.find((_) => _ == _.unique_id);
            return {
              bLoading: _.bLoading,
              success: _.success,
              userPollData: _,
              error_message: _.error_message,
              userPollSubmitData: _.userPollSubmitData,
            };
          }, [_, _]);
        }
        function _(_, _) {
          const _ = (0, _._)({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = await (
                await fetch(_(_, _, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return _(_);
            },
            placeholderData: {
              results: [],
              success: _._,
              bLoading: !0,
              userPollSubmitData: {
                user_poll_option_votes: [],
              },
            },
          });
          return _.data
            ? _.data
            : {
                results: [],
                success: _._,
                bLoading: !0,
                userPollSubmitData: {
                  user_poll_option_votes: [],
                },
              };
        }
        function _(_, _) {
          const _ = (0, _._)();
          return (0, _._)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              _.GetAccountID(),
              _,
            ],
            mutationFn: async (_) => {
              const _ = {
                  votes: _.votes,
                },
                _ = await fetch(_(_, _, !0), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(_),
                  credentials: "include",
                });
              if (!_._) throw new Error(`Server returned ${_.status}`);
              return await _.json();
            },
            onSuccess: (_, _) => {
              if (_.success == _._) _.setQueryData(_(_, _), () => _(_));
              else {
                const _ = _.getQueryData(_(_, _));
                if (_) {
                  const _ = {
                    ..._,
                    success: _.success,
                    error_message: _.error_message,
                  };
                  _.setQueryData(_(_, _), () => _);
                }
              }
            },
          });
        }
        function _(_) {
          return {
            ..._,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: _.results
                .map((_) => _.voted_option_id)
                .reduce((_, _) => _.concat(_), []),
            },
          };
        }
        function _(_, _) {
          return ["usePartnerEventUserPoll", _.ConvertTo64BitString(), _];
        }
        function _(_, _, _) {
          return `${_._.COMMUNITY_BASE_URL}partnerevents/${_.ConvertTo64BitString()}/userpoll/${_}/${_ ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${(0, _._)()}`;
        }
        const _ = 1440 * 60;
        function _(_, _) {
          let _ = 0;
          return (
            _.poll_end_time
              ? (_ = _.poll_end_time)
              : (_ =
                  (_.rtime32_visibility_start ?? _.rtime32_start_time ?? 0) +
                  (_.poll_end_days_since_start || _)),
            _
          );
        }
        function _(_, _) {
          return _(_, _) < Math.floor(Date.now() / 1e3);
        }
        var _ = __webpack_require__("chunkid");
        const _ = null;
        function _(_) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${_.ConvertTo64BitString()}`;
        }
        var _ = ((_) => (
            (_.k_EPollResult_NotVisible = "not_visible"),
            (_.k_EPollResult_Visible_After_Vote = "after_vote"),
            (_.k_EPollResult_Visible_After_End = "after_end"),
            (_.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (_.k_EPollResult_Visible_On_Demand = "on_demand"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.k_EPollVoter_AnyUser = "any_user"),
            (_.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (_.k_EPollVoter_MinPlayTime = "min_play_time"),
            (_.k_EPollVoter_MemberOfGroup = "member_of_group"),
            _
          ))(_ || {}),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.context.event,
            _ = _.context.showErrorInfo,
            _ = (0, _._)(_.args, "poll_id"),
            _ = Number.parseInt(_),
            _ = (0, _._)(() => _(_, _));
          if (!_ || !_)
            return _
              ? (0, _.jsx)("div", {
                  className: _.ErrorStylesWithIcon,
                  children: (0, _._)("#UserPolls_Editor_FailToFindModel", _),
                })
              : null;
          const _ = (0, _.sfN)(_._.LANGUAGE);
          return (0, _.jsx)(_._, {
            children: (0, _.jsx)(_, {
              userPollDef: _,
              lang: _,
              eventModel: _,
            }),
          });
        }
        function _(_, _) {
          return (
            (_?.jsondata?.user_polls || [])?.find((_) => _.poll_id == _) || null
          );
        }
        function _(_) {
          const { eventModel: _, userPollDef: _, lang: _ } = _,
            { userPollData: _, ..._ } = _(
              _.clanSteamID,
              _.GID || "0",
              _.poll_id,
            ),
            _ = !!(_.error_message && _.error_message?.length > 0),
            _ = _(_.clanSteamID, _.GID || "0"),
            [_, _] = (0, _.useState)(void 0),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = _?.option_results && _?.option_results.length > 0,
            _ = ((_ && _.voted_option_id?.length) || 0) > 0;
          return (
            (0, _.useEffect)(() => {
              !_ &&
                _.results_visibility_settings != _.k_EPollResult_NotVisible &&
                _ &&
                (_(
                  {
                    rtime32_visibility_start:
                      _.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
                  },
                  _,
                ) ||
                  _) &&
                _(!0);
            }, [_, _, _, _, _]),
            (0, _.jsxs)(_, {
              ..._,
              children: [
                _.options?.map((_) => {
                  const _ = _?.option_results.find(
                      (_) => _.unique_id == _.option_id,
                    ),
                    _ =
                      _?.voted_option_id.includes(_.option_id || 0) ||
                      _ === _.option_id;
                  return (0, _.jsx)(
                    _,
                    {
                      lang: _,
                      pollOptionDef: _,
                      bSelected: _,
                      nPercentage: _ ? _?.percent : void 0,
                      onClick: () => _(_.option_id),
                      bDisableSelection:
                        _.bLoading || !_?.vote_permitted || _ || _ || _,
                    },
                    "polloption" + _.option_id,
                  );
                }),
                !!_ &&
                  (0, _.jsx)(_._, {
                    onClick: async () => {
                      if (
                        !_.userPollSubmitData.user_poll_option_votes.includes(_)
                      ) {
                        _(!0);
                        const _ = {
                          user_poll_option_votes: [
                            ..._.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        _.user_poll_option_votes.push(_),
                          await _.mutateAsync({
                            votes: _,
                          }),
                          _(void 0),
                          _(!1);
                      }
                    },
                    children: (0, _._)("#Button_Submit"),
                  }),
                (_ || _.bLoading) &&
                  (0, _.jsx)(_._, {
                    size: "small",
                    position: "center",
                    string: _.bLoading ? (0, _._)("#Loading") : void 0,
                  }),
                _ &&
                  !_ &&
                  !_ &&
                  (0, _.jsx)("a", {
                    href: "#",
                    onClick: (_) => {
                      _.preventDefault(), _(!0);
                    },
                    children: (0, _._)("#UserPolls_JustSeeResults"),
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _.ErrorStylesWithIcon,
                    children: _.error_message,
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { userPollDef: _, lang: _, eventModel: _, children: _ } = _,
            _ = (0, _._)(),
            [_, _] = (0, _._)(() => [
              _._.GetWithFallback(_.localized_poll_description, _),
              _.user_poll_background,
            ]);
          let _;
          const _ = _.clanSteamID.GetAccountID();
          _ &&
            (_ = {
              backgroundImage: `url('${(0, _._)(_, _)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const _ = (0, _.useMemo)(() => _._.InitFromClanID(_), [_]),
            { userPollData: _ } = _(_, _.GID || "0", _.poll_id),
            _ = _(
              {
                rtime32_visibility_start:
                  _.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: _.GetStartTimeAndDateUnixSeconds(),
              },
              _,
            );
          return (0, _.jsx)("div", {
            className: _().PollBackground,
            style: _,
            children: (0, _.jsxs)("div", {
              className: _().PollContainer,
              children: [
                (0, _.jsx)("div", {
                  className: _().PollQuestion,
                  children: _,
                }),
                (0, _.jsx)("div", {
                  className: _().PollOptions,
                  children: _,
                }),
                (0, _.jsxs)("div", {
                  className: _().PollStatus,
                  children: [
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#UserPolls_status_N_Votes",
                        (0, _._)(_?.total_votes || 0),
                      ),
                    }),
                    _?.display_message
                      ? (0, _.jsx)("div", {
                          children: _?.display_message,
                        })
                      : (0, _.jsx)("div", {
                          children: (0, _._)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, _._)(_ - _),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          const {
              pollOptionDef: _,
              onClick: _,
              lang: _,
              bDisableSelection: _,
              bSelected: _,
              nPercentage: _,
            } = _,
            [_] = (0, _._)(() => [_._.GetWithFallback(_.localized_option, _)]),
            _ = Math.round((_ ?? 0) * 100);
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().PollOption]: !0,
              [_().Selected]: _,
              [_().Disabled]: _,
            }),
            onClick: _ ? void 0 : _,
            children: [
              (0, _.jsx)("div", {
                className: _().BackgroundBar,
              }),
              (0, _.jsx)("div", {
                className: _().ForegroundBar,
                style: {
                  width: `${_}%`,
                },
              }),
              (0, _.jsxs)("div", {
                className: _().ContentRow,
                children: [
                  (0, _.jsx)("div", {
                    className: _().PollVoteIcon,
                  }),
                  _ !== void 0 &&
                    (0, _.jsxs)("div", {
                      className: _().PctText,
                      children: [_, "%"],
                    }),
                  (0, _.jsx)("span", {
                    className: _().OptionText,
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_.entries()),
                [
                  "vod",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "giveawayeligible",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "claimitem",
                  {
                    Constructor: _,
                    autocloses: !0,
                  },
                ],
                [
                  "packagepurchaseable",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "actiondialog",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "uploadfilebutton",
                  {
                    Constructor: _,
                    autocloses: !0,
                  },
                ],
                [
                  "meetsteamsessiongroup",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "meetsteamscheduleview",
                  {
                    Constructor: _._,
                    autocloses: !1,
                  },
                ],
                [
                  "userpolls",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(_().entries()),
              ])),
            _
          );
        }
        function _(_) {
          const _ = (0, _._)(_.args, "appid", 0);
          return (0, _.jsx)(_, {
            appid: _,
            bPreviewMode: !!_.context.showErrorInfo,
          });
        }
        function _(_) {
          const _ = (0, _._)(_.args, "name"),
            _ =
              ((0, _._)(_.args, "visible") || "false").toLowerCase() === "true",
            _ = (0, _._)(_);
          return _
            ? !_ || !_.registered
              ? null
              : (_.eligible && _) || (!_.eligible && !_)
                ? _.children
                : null
            : _.context.showErrorInfo
              ? (0, _.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        function _(_) {
          const _ = !!_.context.showErrorInfo,
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          if (!_._.logged_in)
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  onClick: _,
                  className: "CSSClaimItemLoginButton",
                  children: (0, _._)("#Sale_ClaimableReward_Login"),
                }),
                _,
              ],
            });
          const _ = (0, _._)(_.args, "type");
          let _;
          if (_)
            switch (_) {
              case "profilemodifier":
                _ = _._;
                break;
              case "sticker":
                _ = _._;
                break;
            }
          return (0, _.jsx)(_._, {
            bPreviewMode: _,
            rewardType: _,
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args, "id")) || 0,
            _ =
              ((0, _._)(_.args, "visible") || "false").toLowerCase() === "true",
            _ = _.context.showErrorInfo,
            [_, _] = (0, _._)(_, {});
          if (!_ || _ == _._)
            return !_ && _
              ? (0, _.jsx)("div", {
                  children: "Error: PackageID Not Set",
                })
              : null;
          let _ = !1;
          return (
            _._.Get().BHasStoreItem(_, _._._)
              ? (_ = !!_?.GetBestPurchaseOption())
              : (_ =
                  !_._.Get().BIsPackageUnavailableDueToCountryRestriction(_)),
            (!_ && !_) || (_ && _) ? _.children : null
          );
        }
        function _(_) {
          if (_ === "GameAwardDrop2022") {
            const _ = (0, _._)(_),
              _ = (0, _._)();
            return _
              ? _.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: _.eligible,
                    bFailedState: !_.eligible,
                    fnAction: _.eligible
                      ? void 0
                      : async () => {
                          await _.fnCreateRegistration(_);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await _.fnCreateRegistration(_);
                    },
                  }
              : {
                  bInitialState: !0,
                };
          }
          return {
            bInitialState: !0,
          };
        }
        function _(_) {
          const _ = (0, _._)(_.args, "action"),
            _ = (0, _._)(_.args, "initialToken"),
            _ = (0, _._)(_.args, "successToken"),
            _ = (0, _._)(_.args, "failToken"),
            _ = _(_),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          return !_ || !_ || !_ || !_
            ? _.context.showErrorInfo
              ? (0, _.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !_._.logged_in && _ != "test" && _ != "nologinrequired"
              ? (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      className: "CSSActionDialogButton",
                      onClick: _,
                      children: (0, _._)("#Login_SignIn"),
                    }),
                    _,
                  ],
                })
              : (0, _.jsxs)(_._, {
                  className: "CSSActionDialogButton",
                  onClick: (_) => {
                    (0, _._)(
                      (0, _.jsx)(_, {
                        strAction: _,
                        strInitialToken: _,
                        strSuccessToken: _,
                        strFailToken: _,
                        children: _.children,
                      }),
                      (0, _._)(_) ?? window,
                    );
                  },
                  children: [
                    !!_.bInitialState && (0, _._)(_),
                    !!_.bSuccessState && (0, _._)(_),
                    !!_.bFailedState && (0, _._)(_),
                  ],
                });
        }
        function _(_) {
          const {
              strAction: _,
              children: _,
              closeModal: _,
              strInitialToken: _,
              strSuccessToken: _,
              strFailToken: _,
            } = _,
            _ = _(_),
            [_, _] = _.useState(!!_.fnAction),
            _ = _.useRef(!1);
          _.useEffect(() => {
            !_.fnAction ||
              _.current ||
              ((_.current = !0), _(!0), _.fnAction().finally(() => _(!1)));
          }, [_]);
          const _ = _.useId();
          return (0, _.jsxs)(_._, {
            bDisableBackgroundDismiss: !0,
            closeModal: _,
            onCancel: _,
            className: "CSSActionDialogDialog",
            "aria-labelledby": _,
            children: [
              (0, _.jsxs)(_._, {
                _: _,
                children: [
                  !!_.bInitialState && (0, _._)(_),
                  !!_.bSuccessState && (0, _._)(_),
                  !!_.bFailedState && (0, _._)(_),
                ],
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  children: _
                    ? (0, _.jsx)(_._, {
                        size: "medium",
                        position: "center",
                        string: (0, _._)("#Loading"),
                      })
                    : _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { showErrorInfo: _, event: _ } = _.context,
            _ = _?.clanSteamID.GetAccountID() ?? 0,
            [_] = _.useState(new _(_(_)));
          return _ == _._ ||
            _ == _._ ||
            (_._.EUNIVERSE == _._ && _ == _._) ||
            (_._.EUNIVERSE == _.wLO && _ == _._)
            ? (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_, {
                    fileUploadManager: _,
                  }),
                  (0, _.jsx)(_, {
                    fileUploadManager: _,
                  }),
                ],
              })
            : _
              ? (0, _.jsx)("div", {
                  children: (0, _._)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function _(_) {
          return {
            PopulateBeginFileUploadFormData: (_) => {
              _.append("clan_account_id", "" + _);
            },
            PopulateCommitFileUploadFormData: (_) => {
              _.append("clan_account_id", "" + _);
            },
            GetBeginFileUploadURL: () =>
              _._.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              _._.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (_) => {
              console.log("UploadFileButton: ", _);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { sharedFileID: _ } = _,
            _ = (0, _._)("SharedFileSnippet"),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(() => ({
              sharedfileid: _,
              title: (0, _._)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: _._.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=" + _,
            }));
          (0, _.useEffect)(() => {
            (async () => {
              try {
                const _ = await _._.LoadSharedFileDynamicData([_], _);
                if (!_.token.reason && _.length > 0) {
                  const _ = _[0];
                  (0, _._)(_.url) &&
                    (_.url =
                      _._.COMMUNITY_BASE_URL +
                      "sharedfiles/filedetails/?id=" +
                      _.url),
                    _(_),
                    console.log(_[0]),
                    _(!0);
                }
              } catch (_) {
                const _ = (0, _._)(_);
                console.error("SharedFileSnippet: " + _.strErrorMsg, _);
              }
            })();
          }, [_, _]);
          let _ = _.personnaname !== void 0 && _.personnaname.length > 0;
          return (0, _.jsx)(_._, {
            strURL: _.url,
            strTitle: _.title,
            strPreviewURL: _.previewurl,
            strType: _.type,
            strDescription: _.description,
            author:
              _ &&
              (0, _._)(
                "#EventEditor_Author",
                (0, _.jsx)(_._, {
                  children: _.personnaname,
                }),
              ),
            publishedfileid: _,
            appid: _.appid,
            bSizeToFit: _.bSizeToFit,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        let _ = class extends _.Component {
          state = {
            bSummaryMode: !0,
            bLoadedMetaData: !1,
          };
          async componentDidMount() {
            let _ =
              "https://sketchfab.com/oembed?url=https://sketchfab.com/models/" +
              this.props.modelID;
            try {
              let _ = await _().get(_);
              this.setState({
                bLoadedMetaData: !0,
                data: _.data,
              });
            } catch (_) {
              this.setState({
                bError: !0,
              }),
                console.error(
                  "SketchFabEmbed failed to load: " + (0, _._)(_).strErrorMsg,
                );
            }
          }
          OnSketchFabClick() {
            this.state.bLoadedMetaData &&
              this.setState({
                bSummaryMode: !1,
              });
          }
          render() {
            const { modelID: _ } = this.props,
              { data: _ } = this.state;
            return this.state.bError
              ? (0, _.jsxs)("div", {
                  className: _().dynamiclink_box,
                  onClick: this.OnSketchFabClick,
                  children: [
                    (0, _.jsx)("span", {
                      children: _,
                    }),
                    (0, _.jsx)("span", {
                      children: (0, _._)(
                        "#EventDisplay_SketchFab_Error_Network",
                      ),
                    }),
                  ],
                })
              : this.state.bSummaryMode
                ? (0, _.jsx)("div", {
                    className: _().dynamiclink_box,
                    onClick: this.OnSketchFabClick,
                    children:
                      this.state.bLoadedMetaData && _
                        ? (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("img", {
                                className: _().dynamiclink_preview,
                                src: _.thumbnail_url,
                              }),
                              (0, _.jsx)("img", {
                                className: _().sketchfab_play_overlay_image,
                              }),
                              (0, _.jsxs)("div", {
                                className: _().dynamiclink_content,
                                children: [
                                  (0, _.jsxs)("div", {
                                    className: _().dynamiclink_name,
                                    children: [
                                      (0, _.jsx)("span", {
                                        className: _().dynamiclink_type,
                                        children: (0, _._)(
                                          "#EventDisplay_Sketchfab",
                                        ),
                                      }),
                                      (0, _.jsxs)("div", {
                                        children: [_.title, "\xA0"],
                                      }),
                                    ],
                                  }),
                                  (0, _.jsx)("div", {
                                    className: _().dynamiclink_author,
                                    children: _.author_name,
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, _.jsx)(_._, {
                            size: "medium",
                          }),
                  })
                : (0, _.jsx)("div", {
                    className: _().sketchfabmodelembedded,
                    children: (0, _.jsx)("iframe", {
                      className: _().sketchfabmodelembedded,
                      src:
                        "https://sketchfab.com/models/" +
                        this.props.modelID +
                        "/embed?autostart=1",
                      frameBorder: 0,
                      allowFullScreen: !0,
                    }),
                  });
          }
        };
        _([_._], _.prototype, "OnSketchFabClick", 1), (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { defid: _, url: _ } = _,
            _ = (0, _._)(_);
          if (!_ || !_.community_item_data) return null;
          const _ = _.appid,
            _ = _.community_item_data.item_image_large,
            _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
          return (0, _.jsx)("div", {
            className: _().Ctn,
            children: (0, _.jsx)(_._, {
              toolTipContent: _.community_item_data.item_description,
              children: (0, _.jsx)("img", {
                src: _,
                alt: _.community_item_data.item_title,
              }),
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i,
          _ = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          _ = /sketchfab.com\/(?:models\/(?:[^\/\s]+-)?)([a-z0-9]{32})/i,
          _ = /twitter\.com\/(\w+)(\/?)$/i,
          _ = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          _ = /twitch\.tv\/(\w+)(\/?)$/i,
          _ =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i,
          _ =
            /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        let _ = null;
        function _() {
          return (
            _ == null &&
              ((0, _._)()
                ? (_ = [
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _._,
                    },
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _._,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                  ])
                : (_ = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(
                        /community.+sharedfiles\/filedetails\/\?id=\d+/i,
                      ),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _._,
                    },
                    {
                      urlRegExp: new RegExp(_._),
                      fnBBComponent: _._,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                    {
                      urlRegExp: new RegExp(_),
                      fnBBComponent: _,
                    },
                  ])),
            _
          );
        }
        function _(_) {
          return _().find((_) => !!_.urlRegExp.exec(_));
        }
        function _(_) {
          return React.useMemo(() => _(_), [_]);
        }
        function _(_, _) {
          if ((0, _._)()) return null;
          const _ = (0, _._)(_);
          return _?.strVideoID !== void 0
            ? (0, _.jsx)(_._, {
                videoID: _.strVideoID,
                nStartSeconds: _.nStartSeconds,
                classNameAlign: "",
                classNameSize: _().sizeFull,
                bShowVideoImmediately: !1,
              })
            : (0, _._)(_, _?.event);
        }
        function _(_, _) {
          if ((0, _._)()) return null;
          const _ = new RegExp(_).exec(_);
          if (_ && _.length > 1) {
            const _ = _[1];
            if (_?.length > 0) {
              let _ =
                "https://medal.tv/clip/" +
                _ +
                "/?autoplay=0&donate=0" +
                (_ && _.event ? "&steamappid=" + _.event.appid : "");
              return (0, _.jsx)("iframe", {
                className: _.MedalTVWidget,
                src: _,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          let _ = new RegExp(_).exec(_);
          if (_ && _.length > 1) {
            let _ = _[1];
            if (_ && _.length > 1)
              return (0, _.jsx)(_, {
                modelID: _,
              });
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          const _ = _.split("?");
          let _;
          if (_.length == 2) {
            const _ = new URLSearchParams(_[1]);
            _.has("id") && (_ = _.get("id") ?? void 0);
          }
          return _ !== void 0
            ? (0, _.jsx)(_, {
                sharedFileID: _,
              })
            : (0, _._)(_, _?.event);
        }
        function _(_, _) {
          const _ = (0, _._)(_);
          return _
            ? (0, _.jsx)(_, {
                eventModel: _?.event,
                inputID: _._,
                inputType: _.strItemType,
                fallbackUrl: _,
              })
            : (0, _._)(_, _?.event);
        }
        function _(_) {
          const { inputID: _, inputType: _, eventModel: _, fallbackUrl: _ } = _,
            _ = (0, _._)(_, _),
            { data: _ } = (0, _._)(_);
          let _;
          if (!_ || !(0, _._)(_)) _ = !0;
          else if (_) {
            const _ = _.appid ? [_.appid] : (_.included_appids ?? []);
            _ = (0, _._)(_, _);
          }
          return _ === void 0
            ? null
            : _
              ? (0, _.jsx)(_._, {
                  _: _,
                  inputType: _,
                  bApplyUserContentPref: !0,
                })
              : (0, _._)(_, _);
        }
        function _(_, _) {
          if ((0, _._)(_)) {
            const _ = new RegExp(_).exec(_);
            if (_ && _.length > 1) {
              const _ = Number(_[1]);
              if (_ > 0)
                return (0, _.jsx)("div", {
                  className: (0, _._)(_.LoyaltyRewardCtn),
                  children: (0, _.jsx)(_, {
                    defid: _,
                    url: _,
                  }),
                });
            }
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          if ((0, _._)(_)) {
            let _ = new RegExp(_).exec(_);
            if (_ && _.length > 2) {
              let _, _, _, _;
              _[1] == "gid"
                ? (_ = new _._(_[2]))
                : _[1] == "groups"
                  ? (_ = _[2])
                  : isNaN(+_[2])
                    ? (_ = _[2])
                    : ((_ = Number(_[2])),
                      (_ =
                        !_ || ((0, _._)(_.event) && (0, _._)(_.event, [_]))
                          ? _
                          : 0));
              const _ = _[3];
              if (
                ((_ !== void 0 && _ > 0) ||
                  _ !== void 0 ||
                  _ !== void 0 ||
                  _ !== void 0) &&
                _ != null &&
                _.length > 0
              )
                return (0, _.jsx)(_._, {
                  appid: _,
                  clanSteamID: _,
                  strVanity: _,
                  strGroupVanity: _,
                  announcementGID: _,
                  strURL: _,
                });
            }
          }
          return (0, _._)(_, _?.event);
        }
        function _(_, _) {
          return (0, _._)() ? null : _(_, (0, _.jsx)(_.KKS, {}), "@", _);
        }
        function _(_, _) {
          return (0, _._)() ? null : _(_, (0, _.jsx)(_.KKS, {}), "#", _);
        }
        function _(_, _) {
          return (0, _._)() ? null : _(_, (0, _.jsx)(_.qcc, {}), void 0, _);
        }
        function _(_, _) {
          return _(_, (0, _.jsx)(_.Qte, {}), void 0, _);
        }
        function _(_, _, _, _) {
          let _;
          const _ = _.endsWith("/") ? _.length - 1 : _.length,
            _ = _.lastIndexOf("/", _ - 1);
          _ != -1 && _ + 1 < _.length && (_ = _.substring(_ + 1, _)),
            _ && _ && (_ = _ + _);
          const _ = (0, _._)(_, _?.event, _ ?? _);
          return (0, _.jsxs)("div", {
            className: _.SocialLink,
            children: [
              (0, _.jsx)("div", {
                className: _.SocialIcon,
                children: _,
              }),
              _,
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)(_, {
            children: (0, _.jsx)(_._, {
              ..._,
            }),
          });
        }
        function _(_) {
          return jsx(_, {
            children: jsx(EventBBDisplayElement, {
              ..._,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            dictionary: _(),
            children: (0, _.jsx)(_._, {
              linkWidgets: _(),
              children: _.children,
            }),
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          _ = ["store.steampowered.com", "store.steamchina.com"],
          _ = ["steampowered.com", "steamcommunity.com"],
          _ = ["steamchina.com"],
          _ = ["steam.dev", "valve.org"];
        function _(_, _) {
          return _.some((_) => _ == _ || _.endsWith(`.${_}`));
        }
        function _(_) {
          const _ = (0, _._)(_).toLocaleLowerCase(),
            _ = (0, _._)(_._.STORE_BASE_URL).toLocaleLowerCase(),
            _ = (0, _._)(_._.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return _ == _ || _ == _
            ? !0
            : _.includes(_)
              ? _(_, _(_, _) ? _ : _)
              : _(_, [..._, ..._, ..._]);
        }
        function _(_) {
          if (_(_)) return _(_);
        }
        function _(_) {
          const _ = new RegExp(_).exec(_);
          if (!_ || _.length <= 2) return;
          const _ = _[1].toLowerCase(),
            _ = Number(_[2]);
          if (!(!(_ > 0) || !(0, _._)(_)))
            return {
              _: _,
              strItemType: _,
              storeItemKey:
                _ == "sub"
                  ? {
                      packageid: _,
                    }
                  : _ == "bundle"
                    ? {
                        bundleid: _,
                      }
                    : {
                        appid: _,
                      },
            };
        }
        function _(_) {
          const _ = [],
            _ = new Set();
          for (const _ of _.matchAll(new RegExp(_, "gi"))) {
            const _ = _(_[0]);
            _ &&
              !_.has(`${_.strItemType}/${_._}`) &&
              (_.add(`${_.strItemType}/${_._}`), _.push(_));
          }
          return _;
        }
        function _(_, _) {
          const _ = _(_);
          return _
            ? jsx(StoreCapsuleForEventDescription, {
                _: _._,
                inputType: _.strItemType,
                bApplyUserContentPref: !0,
              })
            : LinkFilter(_, _?.event);
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = [
                {
                  urlRegExp: new RegExp(_),
                  fnBBComponent: _,
                },
              ]),
            _
          );
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { inputType: _, _: _, bApplyUserContentPref: _ } = _,
            _ = _ == "bundle" ? "bundle" : _ == "sub" ? "sub" : "game",
            _ = (0, _._)(_, _),
            { data: _ } = (0, _._)(_),
            { data: _, isPending: _ } = (0, _._)(_ ? _ : void 0);
          if (!_) return null;
          if (_) {
            if (_) return null;
            if (_?.filter_failure == _._._ || _?.filter_failure == _._._) {
              let _ = "#StoreCapsule_App_Excluded";
              switch (_) {
                case "sub":
                  _ = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  _ = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, _.jsx)("div", {
                className: (0, _._)(
                  _.AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, _._)(
                  _,
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, _.jsx)("div", {
            className: (0, _._)(_.AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, _.jsx)(_._, {
              _: _,
              type: _,
              bShowDemoButton: _.type == _._._,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, _.jsx)(_._, {
              ..._,
            }),
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (
            (_.bHasVerifiedEmail && _.bFollowsByEmail) ||
            (_.bHasPushNotification && _.bFollowsByPush)
          );
        }
        function _(_) {
          const {
              eventModel: _,
              rtNow: _,
              notifyState: _,
              bOnlyShowIcon: _,
              renderPanel: _,
              onRequestSignIn: _,
              bSignedIn: _,
              onTrack: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = _.useCallback(() => {
              _.current?.Hide(), _(!1);
            }, []),
            _ = () => {
              const _ = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, _._)(
                  _.ReminderDialog,
                  _.ReminderOptions,
                  _.contextMenu,
                ),
              };
              (_.current = (0, _._)(_(_), _.current, _)),
                _.current.SetOnHideCallback(_),
                _(!0),
                _?.("opened");
            },
            _ = (_) => {
              if (!_) {
                _?.();
                return;
              }
              _ ? _() : _(), _.stopPropagation(), _.preventDefault();
            },
            _ = _ && !_,
            _ = _(_);
          return (_.startTime !== void 0 && _.startTime < _) ||
            _.BIsUnlistedEvent()
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)({
                  [_.ReminderCheckBox]: !0,
                  [_().ReminderCtn]: !0,
                  [_.IconMode]: _,
                  [_.TextMode]: !_,
                  ReminderSet: _,
                  RemindMeWidget: !0,
                }),
                onClick: _,
                ref: _,
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.RemindCheck,
                      children: (0, _.jsx)(_.Jlk, {}),
                    }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.RemindBell,
                      children: (0, _.jsx)(_.IrQ, {}),
                    }),
                  (0, _.jsx)("div", {
                    className: _.ReminderDefault,
                    children: (0, _._)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, _.jsx)("div", {
                    className: _.ReminderOptions,
                  }),
                ],
              });
        }
        function _(_) {
          const {
              eventModel: _,
              lang: _,
              rtNow: _,
              notifyState: _,
              bShowStartTime: _,
              bExpandLeft: _,
              bOnlyShowIcon: _,
              strCalendarEventTitle: _,
              onChangeNotify: _,
              onTrack: _,
              fnHidePanel: _,
            } = _,
            [_, _] = _.useState(!1),
            _ = async (_, _) => {
              if (!(!_.GID || _.GID == _.kFb)) {
                _(!0);
                try {
                  await _(_, _),
                    _ && _?.(_ == "email" ? "notify-email" : "notify-push");
                } catch (_) {
                  (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)(
                        "#EventDisplay_Reminder_FollowEvent_Error",
                      ),
                      strDescription: (0, _._)(
                        "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                      ),
                      children: _ instanceof Error ? _.message : String(_),
                    }),
                    window,
                  );
                }
                _(!1);
              }
            },
            _ = _.jsondata.bSaleEnabled
              ? _._.k_eStoreSalePage
              : _._.k_eStoreView,
            _ = (0, _._)(_, _, "forceAbsolute"),
            _ = () => {
              let _ = _.GetSubTitleWithLanguageFallback(_);
              _ = _
                ? `${_}


`
                : "";
              const _ = _.GetSummaryWithFallback(_);
              return `${_}${_}

${_}`;
            },
            _ = () => {
              const _ = encodeURIComponent(_),
                _ = encodeURIComponent(_()),
                _ = _.GetStartTimeAndDateUnixSeconds(),
                _ = _(_),
                _ = _.GetEndTimeAndDateUnixSeconds() || _ + _._.PerHour,
                _ = _(_),
                _ =
                  (_._.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${_}&details=${_}&dates=${_}/${_}`;
              return (0, _._)(_);
            },
            _ = (_) => {
              const _ = _.appid
                  ? "app/" + _.appid
                  : "group/" + _.clanSteamID.GetAccountID(),
                _ = "l=" + (0, _.LgB)(_);
              return `${_._.STORE_BASE_URL}${(0, _._)()}/download/${_}/${_}/${_.GID}?${_}`;
            },
            {
              bHasVerifiedEmail: _,
              bHasPushNotification: _,
              bFollowsByEmail: _,
              bFollowsByPush: _,
            } = _,
            _ = !1,
            _ = _ && _.GetStartTimeAndDateUnixSeconds();
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _.ReminderCheckBox,
                  _ ? _.IconMode : _.TextMode,
                  "RemindMeWidget",
                ),
                onClick: _,
                children: [
                  _(_) &&
                    (0, _.jsx)("div", {
                      className: _.RemindCheck,
                      children: (0, _.jsx)(_.Jlk, {}),
                    }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.RemindBell,
                      children: (0, _.jsx)(_.IrQ, {}),
                    }),
                  (0, _.jsx)("div", {
                    className: _.ReminderDefault,
                    children: (0, _._)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, _.jsx)("div", {
                    className: _.ReminderOpennedOptions,
                  }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _.FlexColumnContainer,
                  _.ReminderBackground,
                  _ && _.ReminderExpandsLeft,
                ),
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      className: _.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.FullStartTime,
                      children: (0, _._)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, _._)(
                          _,
                          (0, _._)(new Date(_ * 1e3), new Date(_ * 1e3)),
                        ),
                        (0, _._)(_, !0),
                      ),
                    }),
                  (0, _.jsx)("div", {
                    className: _.ReminderOptionsHeader,
                    children: (0, _._)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_.ReminderOption, !_ && _.Unverified),
                    children: [
                      (0, _.jsx)(_._, {
                        className: _.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, _._)(
                          _
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, _.jsx)(_._, {
                          label: (0, _._)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !_,
                          checked: _,
                          onChange: (_) => _(_, "email"),
                        }),
                      }),
                      !_ &&
                        (0, _.jsx)("div", {
                          className: _.FlexColumnContainer,
                          children: (0, _.jsx)("a", {
                            href: _._.STORE_BASE_URL + "account/",
                            target: _._.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => _?.("email-unverified"),
                            children: (0, _._)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_.ReminderOption, !_ && _.Unverified),
                    children: [
                      (0, _.jsx)(_._, {
                        className: _.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, _._)(
                          _
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, _.jsx)(_._, {
                          label: (0, _._)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !_,
                          checked: _,
                          onChange: (_) => _(_, "push"),
                        }),
                      }),
                      !_ &&
                        (0, _.jsx)("div", {
                          className: _.FlexColumnContainer,
                          children: (0, _.jsx)("a", {
                            href: _._.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: _._.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => _?.("push-missing"),
                            children: (0, _._)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: _.ReminderOptionsHeader,
                        children: (0, _._)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, _.jsxs)("div", {
                        className: _.ReminderCalendarOptions,
                        children: [
                          (0, _.jsx)("a", {
                            className: _.ReminderOption,
                            href: _("ics"),
                            onClick: () => _?.("calendar-apple"),
                            children: (0, _._)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, _.jsx)("a", {
                            className: _.ReminderOption,
                            target: _._.IN_CLIENT ? void 0 : "_blank",
                            href: _(),
                            onClick: () => _?.("calendar-google"),
                            children: (0, _._)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, _.jsx)("a", {
                            className: _.ReminderOption,
                            href: _("outlook"),
                            onClick: () => _?.("calendar-outlook"),
                            children: (0, _._)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(_.ReminderSettings, _.ReminderOption),
                      children: (0, _._)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          return new Date(_ * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "notificationaction/usercontactmethods";
        async function _() {
          const _ = _._.STORE_BASE_URL + _,
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return await _.json();
        }
        const _ = {
          bHasValidatedEmail: !1,
          bHasPushNotification: !1,
        };
        function _() {
          const { data: _ } = (0, _._)(_());
          return _ ?? _;
        }
        function _(_) {
          return ["useUserContactMethods", _];
        }
        function _() {
          return {
            queryKey: _(_._.accountid),
            queryFn: _,
            enabled: !!_._.logged_in,
            initialData: () => {
              const _ = (0, _._)("notificationstore", "application_config");
              return _(_) ? _(_) : void 0;
            },
          };
        }
        function _(_) {
          return {
            bHasValidatedEmail: !!_.email_validated,
            bHasPushNotification: (_.mobile_device_count ?? 0) > 0,
          };
        }
        function _(_) {
          const _ = _;
          return (
            !!_ &&
            typeof _ == "object" &&
            typeof _.mobile_device_count == "number"
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)((0, _._)(_, _, _)),
            _ = _(),
            _ = _(_, _);
          return {
            bHasVerifiedEmail: _.bHasValidatedEmail,
            bHasPushNotification: _.bHasPushNotification,
            bFollowsByEmail: (_ & _._.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (_ & _._.k_ENotifyFlagByPush) != 0,
          };
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_, _, _);
          return async (_, _) => {
            if (!_) return;
            const _ = _.getQueryData(_.queryKey),
              _ =
                _ == "email"
                  ? _._.k_ENotifyFlagByEmail
                  : _._.k_ENotifyFlagByPush,
              _ = _(_, _),
              _ = _ ? _ | _ : _ & ~_;
            await _(_, _, _),
              await _.invalidateQueries({
                queryKey: _.queryKey,
              });
          };
        }
        function _(_, _) {
          const _ = _ ? (_?.event_followed?.indexOf(_) ?? -1) : -1;
          return _ == -1 ? 0 : (_?.event_followed_flags?.[_] ?? 0);
        }
        async function _(_, _, _) {
          const _ = _ == 0,
            _ = `${`${_._.STORE_BASE_URL}events/`}${_ ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            _ = new URLSearchParams();
          _.append("sessionid", (0, _._)()),
            _.append("ignore", "false"),
            _.append("gid", _),
            _.append("notification_flag", "" + _),
            _.append("clan_accountid", "" + _);
          const _ = await fetch(_, {
            method: "POST",
            body: _,
            credentials: "include",
          });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
            const {
                eventModel: _,
                lang: _,
                bShowStartTime: _,
                bExpandLeft: _,
                bOnlyShowIcon: _,
              } = _,
              _ = _(_.clanSteamID.GetAccountID(), _.GID);
            _.useEffect(() => {
              !_.appid &&
                _.clanSteamID &&
                _._.LoadClanInfoForClanSteamID(_.clanSteamID);
            }, [_]);
            const _ = _._.Get().BIsUserLoggedIn(),
              _ = () => {
                (0, _._)(
                  (0, _.jsx)(_._, {
                    strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                    strDescription: (0, _._)(
                      "#EventDisplay_Share_NotLoggedIn_Description",
                    ),
                    strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                    onOK: () => (0, _._)(),
                  }),
                  window,
                );
              };
            return (0, _.jsx)(_, {
              eventModel: _,
              rtNow: (0, _._)(),
              notifyState: _,
              bOnlyShowIcon: _,
              bSignedIn: _ || _._.IN_CLIENT,
              onRequestSignIn: _,
              onTrack: (_) => _(_, _),
              renderPanel: (_) =>
                (0, _.jsx)(_, {
                  eventModel: _,
                  lang: _,
                  bShowStartTime: _,
                  bExpandLeft: _,
                  bOnlyShowIcon: _,
                  fnHidePanel: _,
                }),
            });
          }),
          _ = (0, _._)((_) => {
            const {
                eventModel: _,
                lang: _,
                bShowStartTime: _,
                bExpandLeft: _,
                bOnlyShowIcon: _,
                fnHidePanel: _,
              } = _,
              _ = _.clanSteamID.GetAccountID(),
              _ = _(_, _.GID),
              _ = _(_, _.GID);
            return (0, _.jsx)(_, {
              eventModel: _,
              lang: _,
              rtNow: (0, _._)(),
              notifyState: _,
              bShowStartTime: _,
              bExpandLeft: _,
              bOnlyShowIcon: _,
              strCalendarEventTitle: _(_, _),
              onChangeNotify: _,
              onTrack: (_) => _(_, _),
              fnHidePanel: _,
            });
          });
        function _(_, _) {
          const _ = _.GetNameWithFallback(_) ?? "";
          return _._.BHasEntityNameForID(_.appid, _.clanSteamID.GetAccountID())
            ? `${_._.GetEntityNameForID(_.appid, _.clanSteamID.GetAccountID())}: ${_}`
            : _;
        }
        function _(_, _) {
          const _ = {
            opened: _._.k_eReminder_Opened,
            "notify-email": _._.k_eReminder_Email,
            "notify-push": _._.k_eReminder_MobilePush,
            "email-unverified": _._.k_eReminder_EmailUnverified,
            "push-missing": _._.k_eReminder_MobilePushMissing,
            "calendar-apple": _._.k_eReminder_CalendarApple,
            "calendar-google": _._.k_eReminder_CalendarGoogle,
            "calendar-outlook": _._.k_eReminder_CalendarOutlook,
          };
          _._.RecordAppInteractionEvent(_.appid, _[_]);
        }
        function _(_) {
          const { bPreviewMode: _, eventGID: _, ..._ } = _,
            _ = (0, _._)(_);
          if (!_)
            return _
              ? (0, _.jsx)("div", {
                  className: _.ErrorDiv,
                  children: (0, _._)(
                    "#EventDidplay_Reminder_EventNotVisible",
                    _,
                  ),
                })
              : null;
          const _ = (0, _.sfN)(_._.LANGUAGE);
          return (0, _.jsx)(_, {
            lang: _,
            ..._,
            eventModel: _,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext(void 0);
        function _(_) {
          const [_, _] = React.useState(_.rtServerNow),
            _ = !!_.bHoldSeed;
          return (
            React.useEffect(() => {
              _ || _(void 0);
            }, [_]),
            jsx(_.Provider, {
              value: _,
              children: _.children,
            })
          );
        }
        function _() {
          return _.useContext(_) ?? (0, _._)();
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_.k_TrailerAsButton = "button"),
            (_.k_TrailerAsPill = "pill"),
            (_.k_TrailerAsFull = "full"),
            (_.k_TrailerAsPoster = "poster"),
            (_.k_TrailerAsMicro = "micro"),
            _
          ))(_ || {});
        const _ = {
          include_trailers: !0,
          include_assets: !0,
        };
        function _(_) {
          const {
              embedStyle: _,
              appid: _,
              color: _,
              bgcolor: _,
              children: _,
              trailerBaseID: _,
              subtitles: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useMemo)(
              () => ({
                appid: _,
              }),
              [_],
            );
          switch (_) {
            case "button":
            case "pill":
              return (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)({
                      [_().Pill]: _ == "pill",
                      [_().Button]: _ == "button",
                    }),
                    onClick: () => _(!0),
                    style: {
                      color: _,
                      backgroundColor: _,
                    },
                    children: [
                      (0, _.jsx)(_.jGG, {}),
                      _ || (0, _._)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    _: _,
                    bShowModal: _,
                    trailerBaseID: _,
                    hideModal: () => _(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, _.jsx)(_, {
                ..._,
              });
          }
        }
        function _(_) {
          const { appid: _, trailerBaseID: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _] = (0, _.useState)(() =>
              !_ || !_ ? (0, _._)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(
              () => (_ ? _.find((_) => _.trailer_base_id === _) : null),
              [_, _],
            );
          return (
            (0, _.useEffect)(() => {
              _?.unvailable_for_country_restriction &&
                _((0, _._)("#TrailerPlayer_CouldNotLoad", _, _)),
                _ &&
                  !_ &&
                  _(
                    (0, _._)(
                      "#TrailerPlayer_CouldNotLoad",
                      _.appid,
                      _.trailerBaseID,
                    ),
                  );
            }, [
              _,
              _.appid,
              _.trailerBaseID,
              _?.unvailable_for_country_restriction,
              _,
              _,
              _,
            ]),
            _
              ? _.bIsPreviewMode
                ? (0, _.jsx)("div", {
                    className: _().ErrorDiv,
                    children: _,
                  })
                : null
              : _
                ? (0, _.jsx)(_, {
                    trailerToPlay: _,
                  })
                : (0, _.jsx)(_._, {
                    string: (0, _._)("#Loading"),
                    size: "small",
                  })
          );
        }
        function _(_) {
          const { trailerToPlay: _ } = _,
            {
              rgDashTrailers: _,
              rgHlsTrailers: _,
              strCaptionManufest: _,
            } = (0, _.useMemo)(() => {
              const { rgDashTrailers: _, rgHlsTrailers: _ } = (0, _._)(_),
                _ = (0, _._)(_);
              return {
                rgDashTrailers: _,
                rgHlsTrailers: _,
                strCaptionManufest: _,
              };
            }, [_]);
          return _?.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().VideoPopupContainers,
                children: (0, _.jsx)(_._, {
                  dashManifests: _ || [],
                  hlsManifest: (_.length > 0 && _?.[0]) || "",
                  screenshot: (0, _._)(_),
                  altText: _.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: _,
                }),
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            EventDisplaySteamAwardNomination: () => _,
            UserEligibleToNominateOrVote: () => _,
            WinterSaleSteamAwardVoteWrapper: () => _,
            default: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return `${_._.MEDIA_CDN_URL}${_._}${_}`;
        }
        function _(_) {
          const {
              strMainTitle: _,
              subtitle: _,
              headerText: _,
              headerContent: _,
              children: _,
              footer: _,
            } = _,
            _ = {
              backgroundColor: _._,
              backgroundImage: `url( ${_("header_notrophy.webp")} )`,
              color: _._,
            };
          return (0, _.jsxs)("div", {
            style: _,
            className: (0, _._)(_().SteamAwardContainer, _().PartnerEventFont),
            children: [
              (0, _.jsxs)("div", {
                className: _().SteamAwardHeader,
                children: [
                  (0, _.jsx)("img", {
                    className: _().SteamAwardHeaderImage,
                    src: _("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SteamAwardMainCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().SteamAwardMainTitle,
                        children: _,
                      }),
                      _,
                      (0, _.jsx)("div", {
                        className: _().SteamAwardHeaderText,
                        children: _,
                      }),
                      _,
                    ],
                  }),
                ],
              }),
              _,
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().SteamAwardLinkToNominationPage,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          return `${_._.STORE_BASE_URL}steamawards/${_ ? "nominations/" : ""}`;
        }
        function _() {
          return (0, _.jsx)(_._, {
            className: _().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: _._.Localize("#Loading"),
          });
        }
        function _(_) {
          const { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            [_, _, _] = (0, _._)();
          return {
            elDialogElement: (0, _.jsxs)(_.Fragment, {
              children: [
                _,
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    bVote: _,
                    closeModal: _,
                  }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              _._.logged_in ? (_._.is_limited ? (_(), !1) : !0) : (_(), !1),
          };
        }
        function _(_) {
          const { bVote: _, closeModal: _ } = _;
          return (0, _.jsx)(_._, {
            strTitle: _._.Localize("#Informational_Message"),
            onCancel: _,
            onOK: _,
            bAlertDialog: !0,
            children: (0, _.jsx)("div", {
              children: _._.LocalizeReact(
                _
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, _.jsx)("a", {
                  href: `${_._.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: _._.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: _._.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function _(_) {
          const {
              strLocTokenInfix: _,
              unCurrentAppID: _,
              unNewAppID: _,
              fnOnConfirm: _,
              closeModal: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _ ? (0, _._)(_, "small_capsule") : void 0,
            _ = _ ? (0, _._)(_, "small_capsule") : void 0;
          return (0, _.jsx)(_._, {
            modalClassName: _().SteamAwardConflictModal,
            strTitle: _._.Localize(
              _ == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: _,
            onOK: _,
            onCancel: _,
            children: (0, _.jsxs)("div", {
              className: _().ConflictBody,
              children: [
                _._.LocalizeReact(
                  _ == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, _.jsx)("span", {
                    className: _().SteamAwardModalGameTitle,
                    children: _?.name,
                  }),
                  (0, _.jsx)("span", {
                    className: _().SteamAwardModalGameTitle,
                    children: _?.name,
                  }),
                ),
                _ && _
                  ? (0, _.jsxs)("div", {
                      className: _().NominationSwitchCtn,
                      children: [
                        (0, _.jsx)("img", {
                          src: _,
                          alt: "",
                        }),
                        "\u2192",
                        (0, _.jsx)("img", {
                          src: _,
                          alt: "",
                        }),
                      ],
                    })
                  : (0, _.jsx)(_._, {
                      size: "small",
                      position: "center",
                      string: _._.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { unAppID: _, widget: _, actions: _, bNominationsOpen: _ } = _,
            _ = _.rgCategories[0],
            { data: _ } = (0, _._)({
              appid: _,
            }),
            {
              unNominatedAppID: _,
              bAnswered: _,
              Nominate: _,
            } = (0, _._)(_.eCategoryID, _),
            { elDialogElement: _, BCanTakeAction: _ } = _(!1),
            [_, _, _] = (0, _._)();
          if (!_.bNominationsLive) return null;
          if (!_) return (0, _.jsx)(_, {});
          const _ = (0, _._)(_(!0)),
            _ = _ == _,
            _ = _.rgCategories.length == 1,
            _ = _ && !_.bLaborOfLove,
            _ = (_) => {
              if (!(!_ || !_())) {
                if (_ && _ != _) {
                  _();
                  return;
                }
                _(_);
              }
            };
          return (0, _.jsxs)(_, {
            strMainTitle: _._.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, _.jsxs)("div", {
              className: _().SteamAwardSubTitle,
              children: [
                _
                  ? _._.Localize("#SteamAwards_EventCallToAction")
                  : _._.Localize("#SteamAwards_EventVotingDateTeaser", _._),
                _ &&
                  (0, _.jsxs)("a", {
                    href: _,
                    className: _().SteamAwardLearnMore,
                    children: [
                      "(",
                      _._.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: _
              ? _
                ? _._.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    _?.name ?? "",
                  )
                : (0, _.jsx)("a", {
                    className: _().LinkText,
                    href: _,
                    children: _._.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      _?.name ?? "",
                    ),
                  })
              : _._.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              _ &&
              (0, _.jsx)("a", {
                href: _,
                children: _._.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(_ && (_ || _)) &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().SteamAwardNominationWidget,
                    _().SteamAwardVoteWidget,
                  ),
                  children: (0, _.jsxs)("div", {
                    className: _().NominateCtn,
                    children: [
                      (0, _.jsx)("div", {
                        style: {
                          background: _._,
                        },
                        className: (0, _._)(
                          _().SteamAwardNominateButton,
                          _ && _().Nominated,
                        ),
                        children: (0, _.jsx)(_._, {
                          controlled: !0,
                          className: (0, _._)(
                            _().SteamAwardVoteCheckBox,
                            _ && _().Nominated,
                          ),
                          checked: _,
                          onChange: _,
                          disabled: _,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, _.jsx)("div", {
                            className: _().SteamAwardCategoryTitle,
                            children: _._.Localize(
                              _
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              _.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _().SteamAwardCategoryDesc,
                        children: _.strDescription,
                      }),
                    ],
                  }),
                }),
              _,
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: _,
                  unNewAppID: _,
                  fnOnConfirm: () => _(_),
                  closeModal: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              unAppID: _,
              widget: _,
              actions: _,
              bVotesOpen: _,
              bHideCategoryDescriptions: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(_(!1));
          return (0, _.jsx)(_, {
            strMainTitle: _._.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: _
              ? _._.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  _?.name ?? "",
                )
              : (0, _.jsx)("a", {
                  href: _,
                  className: _().LinkText,
                  children: _._.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, _.jsx)("div", {
              className: _().AwardCategoriesCtn,
              children: _.rgCategories.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    unAppID: _,
                    category: _,
                    actions: _,
                    bVotesOpen: _,
                    bHideDescription: _,
                  },
                  _.eCategoryID,
                ),
              ),
            }),
            footer: (0, _.jsx)("a", {
              href: _,
              children: _._.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function _(_) {
          const {
              unAppID: _,
              category: _,
              actions: _,
              bVotesOpen: _,
              bHideDescription: _,
            } = _,
            {
              unVotedAppID: _,
              bAnswered: _,
              Vote: _,
            } = (0, _._)(_.eCategoryID, _),
            { elDialogElement: _, BCanTakeAction: _ } = _(!0),
            [_, _, _] = (0, _._)(),
            _ = _ == _;
          if (!_ && !_) return null;
          const _ = () => {
            if (!(!_ || !_())) {
              if (_ && _ != _) {
                _();
                return;
              }
              _(_);
            }
          };
          return (0, _.jsxs)("div", {
            style: {
              backgroundColor: _._,
            },
            className: _().SteamAwardVoteWidget,
            children: [
              (0, _.jsxs)("div", {
                className: _().SteamAwardVoteButtonArea,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().SteamAwardCategoryTitle,
                      _().VotingTitle,
                    ),
                    children: _.strTitle,
                  }),
                  !_ &&
                    (0, _.jsx)("div", {
                      className: _().SteamAwardCategoryDesc,
                      children: _.strDescription,
                    }),
                  _
                    ? (0, _.jsx)("button", {
                        className: _().SteamAwardVoteButtonSubmitted,
                        children: (0, _.jsx)("span", {
                          className: _().SteamAwardVoteButtonText,
                          children: _._.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, _.jsx)("button", {
                        className: _().SteamAwardVoteButton,
                        onClick: _,
                        children: (0, _.jsx)("span", {
                          className: _().SteamAwardVoteButtonText,
                          children: _._.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              _,
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: _,
                  unNewAppID: _,
                  fnOnConfirm: () => _(_),
                  closeModal: _,
                }),
              }),
            ],
          });
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _._.logged_in
            ? _._.is_limited
              ? ((0, _._)(
                  (0, _.jsx)(_._, {
                    strTokenOverride: _
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, _._)(
                (0, _.jsx)(_._, {
                  strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, _._)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                  onOK: _._,
                }),
                window,
              ),
              !1);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, _._)(_),
              NominateForSteamAward: async (_, _) => {
                if (_) return _._;
                const [_] = await (0, _._)(_, _, _, _._._);
                return _;
              },
              GetMySteamAwardVotes: () => (0, _._)(_, _._),
              SetSteamAwardVote: async (_, _) => {
                if (_) return _._;
                const [_] = await (0, _._)(_, _, _, _._);
                return _;
              },
            }),
            [_, _],
          );
        }
        const _ = [];
        function _(_, _, _) {
          const _ = _.some(_._) || _.some(_._),
            _ = (0, _._)(_ ? _._ : void 0);
          return _
            ? _.data
              ? {
                  widgets: (0, _._)(_.data.votes ?? [], _, _, _),
                  bLoading: !1,
                }
              : {
                  bLoading: !0,
                }
            : {
                bLoading: !1,
              };
        }
        function _(_, _) {
          return _
            ? {
                ..._,
                bNominationsLive: !0,
              }
            : _;
        }
        function _(_) {
          return !!_ && _._.EUNIVERSE == _.wLO;
        }
        function _(_) {
          const { event: _, previewMode: _ } = _,
            [_, _] = (0, _._)(() => [_.GetSteamAwardCategory(), _.appid]),
            _ = (0, _._)(),
            { widgets: _, bLoading: _ } = _([_], _, _),
            _ = _(_(_));
          if (_) return (0, _.jsx)(_, {});
          if (!_?.nomination) return null;
          const _ =
            _.BIsEventActionEnabled(_) ||
            _ < _.GetStartTimeAndDateUnixSeconds();
          return (0, _.jsx)(_, {
            unAppID: _,
            actions: _,
            widget: _(_.nomination, !!_),
            bNominationsOpen: _,
          });
        }
        function _(_) {
          const {
              appID: _,
              voteCategories: _,
              bIsEventActionEnabled: _,
              previewMode: _,
              bRenderFromStorePage: _,
            } = _,
            _ = (0, _._)(),
            { widgets: _, bLoading: _ } = _(_, _ ?? _, _),
            _ = _(_(_));
          return _
            ? (0, _.jsx)(_, {})
            : _?.vote
              ? (0, _.jsx)(_, {
                  unAppID: _,
                  widget: _.vote,
                  actions: _,
                  bVotesOpen: _ || !!_,
                  bHideCategoryDescriptions: _,
                })
              : null;
        }
        function _(_) {
          const _ = (0, _._)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return _
            ? (0, _.jsx)(_, {
                appID: _.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: _,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${_.appID}`,
              ),
              null);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { event: _, nOverrideStartTime: _, nOverrideEndTime: _ } = _,
            _ = _.stylesmodule
              ? {
                  ..._(),
                  ..._.stylesmodule,
                }
              : _(),
            [_, _, _] = (0, _._)(() => [
              _ ||
                (_.bOldAnnouncement
                  ? _.postTime
                  : _.GetStartTimeAndDateUnixSeconds()),
              _ || _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            _ = !(0, _._)(_);
          return (0, _.jsx)("div", {
            className: _.EventDetailTimeInfo,
            children: (0, _.jsx)(_._, {
              startDateAndTime: _,
              endDateAndTime: _,
              bHideEndTime: _,
              stylesmodule: _,
            }),
          });
        }
        function _(_) {
          const { _: _, event: _, dateRangeLayout: _ = "horizontal" } = _,
            [_, _, _] = (0, _._)(() => [
              _.GetStartTimeAndDateUnixSeconds(),
              _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            _ = {};
          return (
            _ == "vertical" &&
              (_.ShortDateRange = _().VerticalLocalDateAndTime),
            (0, _.jsx)("div", {
              _: _,
              className: _().EventDetailTimeInfo,
              children: (0, _.jsx)(_._, {
                startDateAndTime: _,
                endDateAndTime: _,
                bHideEndTime: !(0, _._)(_),
                stylesmodule: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { event: _ } = _,
            _ = (0, _._)(() => _.jsondata?.referenced_appids || []),
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  appid: _,
                }),
              ),
              combine: (_) => ({
                bLoaded: _.every((_) => !_.isPending),
                data: _.map((_) => _.data),
              }),
            });
          if (!_.length || !_.bLoaded) return null;
          const _ = _.data
              .flatMap((_) =>
                _?.store_url_path && _?.name
                  ? [`[url="${(0, _._)(_)}"]${_.name}[/url]`]
                  : [],
              )
              .join((0, _._)("#EventDisplay_ReferencedApps_Joiner")),
            _ = (0, _._)("#EventDisplay_ReferencedApps", _.length, _);
          return (0, _.jsx)("div", {
            className: _().ReferencedApps,
            children: (0, _.jsx)(_._, {
              text: _,
              event: _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            { bLoading: _ } = _,
            { className: _, bPreviewMode: _, rewardType: _ } = _;
          return (0, _.jsx)(_._, {
            className: (0, _._)("CSSClaimItemButton", _),
            onClick: (_) => {
              _.bCanClaimNewItem
                ? (0, _._)(
                    (0, _.jsx)(_, {
                      rewardType: _,
                    }),
                    (0, _._)(_) ?? window,
                  )
                : _ &&
                  ((0, _._)(
                    (0, _.jsx)(_, {
                      rewardType: _,
                    }),
                    (0, _._)(_) ?? window,
                  ),
                  console.log(
                    "Show dialog for debugging, since already claimed: ",
                    (0, _._)(_),
                  ));
            },
            disabled: _,
            children: _
              ? (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                  size: "small",
                })
              : (0, _.jsx)(_, {
                  claimState: _,
                }),
          });
        }
        function _(_) {
          const { claimState: _, strButtonOverride: _, rewardType: _ } = _;
          if (_.bAlreadyClaimedCurrentItem)
            return (0, _.jsxs)("div", {
              className: (0, _._)(_.CheckMark, "CSSClaimedState"),
              children: [
                (0, _.jsx)(_.Jlk, {}),
                (0, _.jsxs)("span", {
                  children: [
                    " ",
                    _ || (0, _._)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let _ = (0, _._)("#Sale_ClaimableReward_generic");
          switch (_?.community_item_class || _) {
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_sticker");
              break;
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_profilemodifier");
              break;
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, _.jsx)("span", {
            className: "CSSUnclaimedState",
            children: _,
          });
        }
        function _(_) {
          const { closeModal: _, rewardType: _ } = _,
            { fnClaimItem: _ } = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = _.useState(null);
          _.useEffect(() => {
            _.bLoading ||
              (_.fnSetLoading(!0),
              _()
                .then((_) => {
                  if (
                    (_(_), console.log("claim response", (0, _._)(_)), _.appid)
                  ) {
                    let _ = (0, _._)("#Sale_ClaimableReward_completed_generic");
                    const _ = _?.community_item_class || _;
                    switch (_) {
                      case _._:
                        _ = (0, _._)("#Sale_ClaimableReward_completed_sticker");
                        break;
                      case _._:
                        _ = (0, _._)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case _._:
                        _ = (0, _._)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    _.fnSetStrSuccess("   "),
                      _.fnSetElSuccess(
                        (0, _.jsxs)("div", {
                          className: _.DialogCtn,
                          children: [
                            (0, _.jsx)("span", {
                              children: _,
                            }),
                            (0, _.jsx)(_, {
                              appid: _.appid,
                              community_item_type: _.community_item_type,
                              rewardType: _,
                            }),
                          ],
                        }),
                      );
                  } else
                    _.fnSetStrError((0, _._)("#Sale_ClaimableReward_Busy"));
                })
                .catch((_) =>
                  _.fnSetStrError((0, _._)("#Sale_ClaimableReward_Busy")),
                ));
          }, [_?.community_item_class, _, _, _]);
          let _ = (0, _._)("#Sale_ClaimableReward_generic");
          switch (_?.community_item_class || _) {
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_sticker");
              break;
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_profilemodifier");
              break;
            case _._:
              _ = (0, _._)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, _.jsx)(_._, {
            state: _,
            strDialogTitle: _,
            closeModal: _,
          });
        }
        function _(_) {
          const { appid: _, community_item_type: _, rewardType: _ } = _;
          return !_ || !_
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    appid: _,
                    community_item_type: _,
                  }),
                  _ == _._ &&
                    (0, _.jsx)(_, {
                      appid: _,
                      community_item_type: _,
                    }),
                ],
              });
        }
        function _(_) {
          const { appid: _, community_item_type: _ } = _,
            _ = (0, _._)(_),
            { mutate: _, isSuccess: _ } = (0, _._)();
          if (!_) return null;
          const _ = _.find((_) => _.item_type == _);
          return _
            ? (0, _.jsxs)("div", {
                className: _.EquipCtn,
                children: [
                  _
                    ? (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, _.jsx)(_._, {
                        onClick: () => _(_),
                        children: (0, _._)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, _.jsx)(_._, {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}`,
                    children: (0, _._)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_._, {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/edit/goldenprofile`,
                    children: (0, _._)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    href: `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}`,
                    children: (0, _._)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "minigamev2/itemdefs",
          _ = "appid",
          _ = "editor";
        function _() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            _._.STORE_BASE_URL
            ? _._.STORE_BASE_URL
            : _._.COMMUNITY_BASE_URL;
        }
        async function _(_, _) {
          if (!_) return [];
          const _ = new URLSearchParams({
            [_]: String(_),
            _: _._.LANGUAGE,
          });
          _ && _.set(_, "1");
          const _ = `${_()}${_}?${_}`,
            _ = await fetch(_, {
              credentials: _ ? "include" : "same-origin",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          const _ = await _.json();
          if (_?.success == _._ && _.item_definitions)
            return _.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              _ +
              " answered " +
              _?.success,
          );
        }
        function _(_, _) {
          return ["MinigameCommunityItemDefs", _, !!_];
        }
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () => _(_, _),
            enabled: !!_,
            retry: !1,
          };
        }
        function _(_, _) {
          const { data: _ } = (0, _._)(_(_, _));
          return _;
        }
        function _(_, _, _) {
          const _ = _(_, _);
          return (0, _.useMemo)(
            () =>
              _?.find(
                (_) => (_ || _.active) && _.appid == _ && _.item_type == _,
              ),
            [_, _, _, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            appid: _,
            item_image_small: _,
            item_image_large: _,
            item_movie_mp4: _,
            item_movie_webm: _,
            item_title: _,
          } = _;
          if (_ && _) {
            const _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
              _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`,
              _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_}`;
            return (0, _.jsx)(_.Fragment, {
              children: (0, _.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: _,
                playsInline: !0,
                className: _.videoClassName,
                children: [
                  (0, _.jsx)("source", {
                    src: _,
                    type: "video/webm",
                  }),
                  !_._.IN_CLIENT &&
                    (0, _.jsx)("source", {
                      src: _,
                      type: "video/mp4",
                    }),
                ],
              }),
            });
          } else {
            const _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_ || _}`;
            return (0, _.jsx)("img", {
              className: _.className,
              src: _,
              alt: _,
            });
          }
        }
        function _(_) {
          const { appid: _, community_item_type: _, bForEdit: _ } = _,
            _ = _(_, _, _),
            _ =
              _ && !_.active
                ? (0, _.jsx)("div", {
                    className: _.WarningStylesBackground,
                    children: (0, _._)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_, {
                    ..._,
                  }),
                  _,
                ],
              })
            : (0, _.jsx)(_._, {
                size: "small",
                string: (0, _._)("#Loading"),
              });
        }
        function _(_) {
          const { section: _, rewardDef: _, language: _ } = _,
            _ = _(_.appid ?? 0, _.community_item_type ?? 0),
            [_] = (0, _._)(() => [!!_.rewards?.show_reward_item_name]);
          let _;
          switch (_.community_class) {
            case _._:
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case _._:
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case _._:
              _ = `${_._.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, _.jsxs)("a", {
            href: _,
            children: [
              (0, _.jsx)(_, {
                appid: _.appid ?? 0,
                community_item_type: _.community_item_type ?? 0,
              }),
              !!_ &&
                (0, _.jsx)("span", {
                  children: _?.item_name,
                }),
            ],
          });
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { gidEvent: _ } = _,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsx)(_, {
                event: _,
                lang: (0, _.sfN)(_._.LANGUAGE),
                href: (0, _._)((0, _._)(_) ?? ""),
              })
            : null;
        }
        function _(_) {
          const { event: _, lang: _, href: _ } = _,
            [_, _] = (0, _.useMemo)(() => {
              const _ = _.jsondata.localized_sale_product_banner,
                _ = _.jsondata.localized_sale_product_mobile_banner;
              if (_?.length && _?.length) {
                const _ = _._.GetWithFallback(_, _),
                  _ = _._.GetWithFallback(_, _);
                if (_?.length && _?.length)
                  return [
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  ];
              }
              return [void 0, void 0];
            }, [_, _]);
          return !_?.length || !_?.length
            ? null
            : (0, _.jsxs)("a", {
                href: _,
                className: _.Link,
                children: [
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Big),
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Mobile),
                  }),
                ],
              });
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          switch (_) {
            case "discord_server":
              return _._._;
            case "youtube":
              return _._._;
            case "facebook":
              return _._._;
            case "twitter":
              return _._._;
            case "twitch":
              return _._._;
            case "reddit":
              return _._._;
            case "instagram":
              return _._._;
            case "tumblr":
              return _._._;
            case "qq":
              return _._._;
            case "qqlink":
              return _._._;
            case "qqchannel":
              return _._._;
            case "bilibili":
              return _._._;
            case "weibo":
              return _._._;
            case "wechat":
              return _._._;
            case "tieba":
              return _._._;
            case "tiktok":
              return _._._;
            case "douyin":
              return _._._;
            case "bluesky":
              return _._._;
            case "mastodon":
              return _._._;
            case "threads":
              return _._._;
            case "vk":
              return _._._;
            case "telegram":
              return _._._;
            case "linkedin":
              return _._._;
            case "rednote":
              return _._._;
          }
          return _._._;
        }
        function _(_) {
          switch (_) {
            case EStoreLinkType.k_EStoreLinkType_Discord:
              return "discord_server";
            case EStoreLinkType.k_EStoreLinkType_YouTube:
              return "youtube";
            case EStoreLinkType.k_EStoreLinkType_Facebook:
              return "facebook";
            case EStoreLinkType.k_EStoreLinkType_Twitter:
              return "twitter";
            case EStoreLinkType.k_EStoreLinkType_Twitch:
              return "twitch";
            case EStoreLinkType.k_EStoreLinkType_Reddit:
              return "reddit";
            case EStoreLinkType.k_EStoreLinkType_Instagram:
              return "instagram";
            case EStoreLinkType.k_EStoreLinkType_Tumblr:
              return "tumblr";
            case EStoreLinkType.k_EStoreLinkType_QQ:
              return "qq";
            case EStoreLinkType.k_EStoreLinkType_QQLink:
              return "qqlink";
            case EStoreLinkType.k_EStoreLinkType_Bilibili:
              return "bilibili";
            case EStoreLinkType.k_EStoreLinkType_Weibo:
              return "weibo";
            case EStoreLinkType.k_EStoreLinkType_WeChat:
              return "wechat";
            case EStoreLinkType.k_EStoreLinkType_Tieba:
              return "tieba";
            case EStoreLinkType.k_EStoreLinkType_Tiktok:
              return "tiktok";
            case EStoreLinkType.k_EStoreLinkType_Douyin:
              return "douyin";
            case EStoreLinkType.k_EStoreLinkType_Bluesky:
              return "bluesky";
            case EStoreLinkType.k_EStoreLinkType_Mastodon:
              return "mastodon";
            case EStoreLinkType.k_EStoreLinkType_Threads:
              return "threads";
            case EStoreLinkType.k_EStoreLinkType_VK:
              return "vk";
            case EStoreLinkType.k_EStoreLinkType_Telegram:
              return "telegram";
            case EStoreLinkType.k_EStoreLinkType_LinkedIn:
              return "linkedin";
          }
          return "unknown social media type";
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _;
          return (0, _.jsx)("div", {
            className: _().AppSocialLinksCtn,
            children: (0, _.jsx)(_, {
              appid: _,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: (0, _._)("#EventDisplay_SocialTitle"),
                  }),
                  (0, _.jsx)(_, {
                    _: "" + _,
                    rgSocialMedia: _,
                  }),
                ],
              });
        }
        function _(_) {
          return (0, _.useMemo)(
            () =>
              _
                ? _.map((_) => {
                    const _ = {
                      link_type: _(_.type),
                    };
                    return (
                      _.link_type == _._._ || _.link_type == _._._
                        ? (_.text = _.link)
                        : (_.url = _.link),
                      _
                    );
                  })
                : [],
            [_],
          );
        }
        function _(_) {
          const { gidClanEvent: _, rgSocial: _, bIsCreatorHomeEvent: _ } = _,
            _ = _(_);
          return !_ || _.length == 0
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().EventEditorTextTitle,
                      "EventEditorTextTitle",
                    ),
                    children: _
                      ? (0, _._)("#EventDisplay_Sale_SocialTitle_Dev")
                      : (0, _._)("#EventDisplay_Sale_SocialTitle"),
                  }),
                  (0, _.jsx)(_, {
                    _: _,
                    rgSocialMedia: _,
                  }),
                ],
              });
        }
        const _ = [_._._, _._._, _._._, _._._, _._._, _._._, _._._];
        function _(_) {
          const { _: _, rgSocialMedia: _, className: _ } = _,
            _ = _._.EREALM === _._.k_ESteamRealmChina;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().AppSocialLinks, _),
            children: _.filter(
              (_) => !_ || _.includes(_.link_type || _._._),
            ).map((_) =>
              _.url
                ? (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_link_" + _ + "_" + _.link_type,
                  )
                : (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_text_" + _ + "_" + _.link_type + "_" + _.text,
                  ),
            ),
          });
        }
        function _(_) {
          const { social: _ } = _;
          return _.url
            ? (0, _.jsx)("a", {
                href: (0, _._)(_.url, !0),
                target: _._.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, _.jsx)(_._, {
                  toolTipContent: _.url,
                  children: (0, _.jsx)(_, {
                    social: _,
                  }),
                }),
              })
            : null;
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().AppSocialLinkWithText,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _.text,
                children: (0, _.jsx)(_, {
                  social: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().AppSocialText,
                children: _.text,
              }),
            ],
          });
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsx)(_, {
            linkType: _.link_type || _._._,
            className: _().AppSocialLinkIcon,
          });
        }
        function _(_) {
          const { linkType: _, ..._ } = _;
          switch (_) {
            case _._._:
              return (0, _.jsx)(_.agV, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.ZnA, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_._, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.ofN, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.Bki, {
                ..._,
              });
            case _._._:
            case _._._:
            case _._._:
              return (0, _.jsx)(_.$vK, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.OSJ, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.nm_, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.tIO, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.Vt2, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.Vgk, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.VSd, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.ccb, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.rNt, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.g$j, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.BQz, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.jdP, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.bKN, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.sDU, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.MbF, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.emH, {
                ..._,
              });
            case _._._:
              return (0, _.jsx)(_.Yoo, {
                ..._,
              });
            case _._._:
            case _._._:
              return "invalid social media type";
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return !_ || _.startsWith("https://") || _.startsWith("http://")
            ? _
            : `${_._.CLAN_CDN_ASSET_URL}images/clan/${_}/${_}`;
        }
        function _(_, _, _) {
          return !_ || IsHttpOrHttps(_) ? _ : `${_}images/clan/${_}/${_}`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = useState(!1);
          return (
            useEffect(() => {
              startTransition(() => _(!0));
            }, []),
            jsx(_.Provider, {
              value: _,
              children: _.children,
            })
          );
        }
        const _ = (0, _.createContext)(!1);
        function _() {
          return (0, _.useContext)(_);
        }
        const _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _ =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((_) => _.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          _ = _ && decodeURIComponent(_);
        function _() {
          return _() ? _ : (_ ?? _);
        }
        function _() {
          "document" in globalThis &&
            (document.cookie = `timezoneName=${_};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        _();
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          const _ = _ ?? _()._.guess(),
            _ = _().unix(_)._(_),
            _ = (0, _._)();
          return _ && _.locale(_), _.format("LT");
        }
        function _(_, _, _) {
          const _ = _ ?? _()._.guess(),
            _ = _().unix(_)._(_),
            _ = (0, _._)();
          return (
            _ && _.locale(_),
            (0, _.jsxs)(_.Fragment, {
              children: [
                _.format("LT"),
                _
                  ? (0, _.jsx)(_._, {
                      toolTipContent: _.format("Z") + ", " + _,
                      children: (0, _.jsxs)("span", {
                        children: ["\xA0", _.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function _(_, _, _) {
          return (0, _._)(_, {
            weekday: "short",
            year: _ ? void 0 : "numeric",
            timeZone: _,
          });
        }
        function _(_, _, _, _) {
          return _().unix(_)._(_).isSame(_().unix(_)._(_), _);
        }
        const _ = (0, _._)((_) => {
            const {
                dateAndTime: _,
                bSingleLine: _,
                bOnlyTime: _,
                bOnlyDate: _,
              } = _,
              _ = _(),
              _ = !_ && !!_,
              _ = !_ && !!_,
              _ = _ && _(_, _),
              _ = _.stylesmodule
                ? {
                    ..._(),
                    ..._.stylesmodule,
                  }
                : _();
            return _
              ? (0, _.jsxs)("span", {
                  className: _ || _ ? _.DateAndTimeInline : _.DateAndTime,
                  children: [
                    _ && _,
                    _ && _
                      ? (0, _.jsx)("span", {
                          children: "\xA0",
                        })
                      : void 0,
                    !!(_ && _) && _(_, _, _),
                  ],
                })
              : (0, _.jsxs)("div", {
                  className: _.DateAndTime,
                  children: [
                    _ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("div", {
                            className: _.LocalizedDate,
                            children: _,
                          }),
                          " ",
                          (0, _.jsx)("span", {
                            className: _._,
                            children: (0, _._)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, _.jsx)("div", {
                      className: _.LocalizedTime,
                      children: !!(_ && _) && _(_, _, _),
                    }),
                  ],
                });
          }),
          _ = (_) => {
            const _ = (0, _.jsx)("div", {
              className: _.stylesmodule?.DateToolTip,
              children: (0, _.jsx)(_, {
                dateAndTime: _.rtFullDate,
                bSingleLine: !0,
                stylesmodule: _.stylesmodule,
              }),
            });
            return (0, _.jsx)(_._, {
              toolTipContent: _,
              direction: "top",
              className: _.className,
              bTopmost: !0,
              children: _.children,
            });
          },
          _ = (0, _._)((_) => {
            const { startDateAndTime: _, endDateAndTime: _ = 0 } = _,
              _ = _.stylesmodule
                ? {
                    ..._(),
                    ..._.stylesmodule,
                  }
                : _(),
              _ = _(),
              _ = (0, _._)(),
              _ =
                _.bHideEndTime ||
                _.endDateAndTime == null ||
                _.endDateAndTime < 1;
            if (_ == null || _ == 0)
              return (0, _.jsxs)("div", {
                className: _.DateAndTime,
                children: [
                  (0, _.jsx)("span", {
                    className: _.RightSideTitles,
                    children: (0, _._)("#EventDisplay_TimeRange"),
                  }),
                  (0, _._)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if (_)
              return (0, _.jsxs)("div", {
                className: _.StartDate,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.RightSideTitles,
                    children: [
                      (0, _._)(
                        _ < _
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, _.jsx)(_, {
                    stylesmodule: _,
                    dateAndTime: _,
                  }),
                ],
              });
            const _ = _ <= _ && _ <= _,
              _ = _(_, _, _, "day");
            return (0, _.jsxs)("div", {
              className: _.MultiDateAndTime,
              children: [
                (0, _.jsxs)("div", {
                  className: _.StartDate,
                  children: [
                    (0, _.jsx)("span", {
                      className: _.RightSideTitles,
                      children: (0, _._)(
                        _ >= _
                          ? "#EventDisplay_TimeBeginsOn"
                          : _ >= _
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      stylesmodule: _,
                      bSingleLine: !0,
                      dateAndTime: _,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.EndDate,
                  children: [
                    (0, _.jsx)("span", {
                      className: _.RightSideTitles,
                      children: (0, _._)(
                        _ < _
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, _.jsx)(_, {
                      stylesmodule: _,
                      bSingleLine: !0,
                      bOnlyTime: _,
                      dateAndTime: _,
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)("span", {
                    className: _.ActiveEvent,
                    children: (0, _.jsx)("span", {
                      className: (0, _._)(
                        _.RightSideTitles,
                        _.ActiveEventCallOut,
                      ),
                      children: (0, _._)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          _ = (0, _._)((_) => {
            const {
                startDateAndTime: _,
                endDateAndTime: _,
                bHideEndTime: _,
              } = _,
              _ = _.stylesmodule
                ? {
                    ..._(),
                    ..._.stylesmodule,
                  }
                : _(),
              _ = _(),
              _ = (0, _._)();
            if (_ == null || _ == 0)
              return (0, _.jsxs)("div", {
                className: _.DateAndTime,
                children: [
                  (0, _.jsx)("span", {
                    className: _.RightSideTitles,
                    children: (0, _._)("#EventDisplay_TimeRange"),
                  }),
                  (0, _._)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const _ = _(_, _, _, "year"),
              _ = (0, _.jsx)("div", {
                className: _.ShortDateAndTime,
                children: _(_, _, _),
              });
            let _ = (0, _.jsxs)(_, {
              rtFullDate: _,
              stylesmodule: _,
              children: [
                (0, _.jsx)("div", {
                  className: _.RightSideTitles,
                  children: (0, _._)(
                    _ < _
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                _,
              ],
            });
            if (
              (_ < _ &&
                _ < _ + _._.PerWeek &&
                (_ = (0, _.jsx)(_, {
                  rtFullDate: _,
                  stylesmodule: _,
                  children: (0, _.jsx)("div", {
                    className: _.RightSideTitles,
                    children: (0, _._)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      _,
                      (0, _.jsxs)("div", {
                        className: _.ShortDateAndTime,
                        children: [_(_, !1, _), " "],
                      }),
                    ),
                  }),
                })),
              _ || _ == null || _ < 1)
            )
              return _;
            const _ = _ <= _ && _ <= _;
            _ &&
              (_ = (0, _.jsx)(_, {
                rtFullDate: _,
                className: _.ActiveEvent,
                stylesmodule: _,
                children: (0, _.jsx)("span", {
                  className: _.ActiveEventCallOut,
                  children: (0, _._)("#Time_Now"),
                }),
              }));
            let _ = null;
            const _ = _ ? _ - _ : _ - _;
            if (_ <= _._.PerDay) {
              const _ = (0, _.jsx)("div", {
                className: _.ShortDateAndTime,
                children: (0, _._)(_, !0),
              });
              _ < _
                ? (_ = (0, _.jsxs)("div", {
                    className: _.RightSideTitles,
                    children: [(0, _._)("#EventDisplay_TimeEndsOn_Ran"), _],
                  }))
                : (_ = (0, _.jsx)("div", {
                    className: _.RightSideTitles,
                    children: (0, _._)(
                      _
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      _,
                    ),
                  }));
            } else {
              const _ = _(_, _, _, "year");
              _ = (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _.RightSideTitles,
                    children: (0, _._)(
                      _ < _
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _.ShortDateAndTime,
                    children: _(_, _, _),
                  }),
                ],
              });
            }
            const _ = (0, _.jsx)(_, {
              rtFullDate: _,
              stylesmodule: _,
              children: _,
            });
            return (0, _.jsxs)("div", {
              className: _.ShortDateRange,
              children: [_, _],
            });
          });
        function _(_, _, _) {
          const _ = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            _ = new Date(_ * 1e3),
            _ = new Date(_ * 1e3),
            _ = _.getFullYear() == _.getFullYear(),
            _ = _.getFullYear() == _.getFullYear(),
            _ = _.getFullYear() == _.getFullYear(),
            _ = _ && _.getMonth() == _.getMonth(),
            _ = _ && _.getDate() == _.getDate(),
            _ = {
              day: "numeric",
              month: _ ?? "long",
              year: _ ? void 0 : "numeric",
            },
            _ = _.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              _,
            );
          if (_) return _;
          {
            const _ = {
                day: "numeric",
                month: _ && _ ? void 0 : (_ ?? "long"),
                year: _ ? void 0 : "numeric",
              },
              _ = _.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                _,
              );
            return _ + " - " + _;
          }
        }
        function _(_) {
          const {
            rtStartDate: _,
            rtEndDate: _,
            strMonthFormat: _,
            className: _,
          } = _;
          return jsxs("div", {
            className: _,
            children: [_(_, _, _), " "],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          carouselNavButton: "_13rGo4vexAbY9-CP7FsLOg",
          carouselBtnCtn: "_3zfZ9tkIrSDZdSTv8mvZ3-",
          left: "S8IHdovT5T2iEVg_97xve",
          right: "Cq59o5WQ49zTvvFY56QYS",
          carouselBody: "_3a31O8XB_8lD-yov8FB9-9",
          sliderBody: "_2M3SnYGvMvplWUC8yGhowo",
          slideTrayCustomize: "_2VUpHDtxN8lR1LDahY_cI2",
          breadcrumbContainer: "_3HjnEmKg66o82ah74EIvmq",
          breadcrumbContainerTemplate: "_3dMffY_iRZXHjZmXN9aLej",
          pip: "_3Byg6Wc4TX36gkUptUIk72",
          pipList: "LY1m24ODS7AFRuzclt0Sl",
          pipScrollerContainer: "_3SyN-YtXsML6ado0q-Gdve",
          pipScrollButton: "qE43Jfzl0qJX_a6XrMgSr",
          scrollNavDiv: "_95I5gwXXMBghRg-4uNQLr",
          scrollNavButton: "_1cpdoEGU0uiIWbGIU_qMbZ",
          pipScroller: "EMd4F6A8qdMk-l6os415A",
          scrollBackground: "WUHeTNYGQDQQg_jQe-78W",
          scrollForeground: "PQzkJfi8IxzjcFEDG-yv-",
          pipContainer: "_3TKX37FakYHikXh3Wtg2BU",
          pipNumber: "_1u4YJiW1cdufpC_wssM8Us",
          innerSlide: "_3Cc2bMRML2lEkSyi2IAZ9G",
          DisableSliderMotion: "_3J8-bW87K3pb8EpRNYq0JG",
          BackgroundAnimation: "_25VCY5c_WxOmDf5rM9ytzl",
          "ItemFocusAnim-darkerGrey-nocolor": "_3Wd6R5ArXmgfz1dMwANtD7",
          "ItemFocusAnim-darkerGrey": "_2mepLvzcUGS8PS7_cO5A4C",
          "ItemFocusAnim-darkGreySettings": "KiXqOP4sNGGqLzPFjAa3D",
          "ItemFocusAnim-darkGrey": "_3NRkgxBrOQc_fQX1HvTkk3",
          "ItemFocusAnim-grey": "SAxIC6YdDjzPzIqw_aS4s",
          "ItemFocusAnim-translucent-white-10": "_-1Vlo_3w2uf9fF1-AU1F4",
          "ItemFocusAnim-translucent-white-20": "_7B6-9HPzoer1QOmgjEAWS",
          "ItemFocusAnimBorder-darkGrey": "GRKCpstf6SP8ly-oMKYX3",
          "ItemFocusAnim-green": "_2cBvKmN3c2ILRdjHTpBZUQ",
          focusAnimation: "_3eJJYrpdNOdlU26_C9wlMp",
          hoverAnimation: "BiWwdgbiMRC3pAc-R3rqS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1xGaMOW4aakB5uwqOCT3nI",
        };
      },
      chunkid: (module) => {
        module.exports = {
          UploadPreviewContainer: "CCBFyy2uP4GNSQGfe2T1L",
          SVGIcon_Video: "_2Fs53eUCdV8xsO83Jc40DH",
          UploadPreview: "_1cXUbzBtV9qFc_63x_j2F2",
          FileUploadFileName: "_21dZgGfG0xtybuVTE6nCv0",
          FileUploadCancel: "rFDt7lDfNBv3BUjppBm9i",
          SVGIcon_X_Line: "_1H7hrp21ukrcZyCAzv9Oc1",
          FileUploadBtn: "_2FFH3ZhSGGItb8Z61CSGfe",
          FileUploadProgressContainer: "_1UobbffXVmx8rwsOHYeNb5",
          FileUploadProgressBarContainer: "tFbvGbecHSHr8P3EdINV-",
          FileUploadProgressName: "_288RbRaiLR6h9q5sWoD2eC",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          _: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "ZXluexXJ1Y_muqBcBgGU-",
          VisibilityOverride: "_1y7PCc5LUAg1_6yIpshcZa",
          CtnRegistered: "_3PeTrgTLLyRMIUb_pRn4rO",
          SessionTitle: "_3vGq3WcmmGaYbbqYkD9Ysp",
          SessionDesc: "_24r8E1kKzw_9iIVhmvEZ3T",
          SessionAudience: "_3DgrT27j0qIz8_26rX4hOc",
          SessionInfoLink: "_1KBfuvwvcwNpnVAMW0JxlH",
          SessionOptions: "_3KAHxFNUEscoxtvBzwWKvs",
          InstanceDivider: "_2IUfDPL02-oni7NXCV_ipu",
          SessionColumnCtn: "iUmtJvs3v_bmv-tu43tpL",
          SessionInstance: "_1igTM-TlnNkIhWxl95pTyB",
          Background: "_3k-Bve67pUbtbb7heNH--5",
          Button: "_2qgSQSN_hv-UncznBRb42v",
          Title: "_3iF42Uos8JELw32j386Kco",
          TimeFrame: "_3HLk01gOqM10DYThBCLuUx",
          MaxSize: "_3REuR3WLDb6JDzZpI2VkUz",
          SoldOut: "dndEdZn2hpJTIu4zpYoYG",
          Max: "_1-LTOHwZqSK67eUyq4qscx",
          Day: "_2Zkbwdhs4WPVI1ZyUHtHUG",
          Time: "_8oQG_Wbl2-Eamq1WKMAoo",
          Registering: "td3x9QaINc75mi2ppkGoF",
          Registered: "_1D1F4nOnNKanKGRqRk3pWr",
          RegisteredElsewhere: "_2jcdQDeozlBYhg3waCH-Dr",
          Unregistering: "twKyIz0VYgtl76vlWI0Xn",
          StatusText: "_33Gk1SfpMTUWDOWksSxEtX",
          CompleteRegistrationCtn: "_6ykmNnOs_SfkGOYurJogH",
          Visible: "_3WTs5L7ce_Du4_KNac_sXd",
          "confirm-panel-intro": "_1zMMdC3loRunAeI72QvaDX",
          ExpanderRow: "_3y3yND3p_J6RNdjtcaEBMA",
          FAQDisplay: "_2Sh_QTT9mWNhPZHHqdj1gN",
          SingleDayCtn: "_2Oiew_rwCOmnTk99m8bzBP",
          ScheduleTopDate: "_1-WKvbi_KTTmHoHJWC0BfO",
          ScheduleRow: "_3LI8YqHLQvj-FrIQyGTC30",
          ScheduleTimeColumn: "_1vNsS_XmyjaIia8mzWvz1X",
          Timezone: "D97ZIJASf3O_ddSVa2zzC",
          ScheduleSessionsColumn: "_2rvBPfiuqnVUSz34DmNK-r",
          ScheduleActionRow: "_16ZAklYwJzKFzKBVMTqx7y",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PollBackground: "_1id2J6OtlRj0Ppiuep3ha",
          PollContainer: "_3yFlyjtNdLP96hRQ92y9we",
          PollQuestion: "_2ImZrvyKjXKlnNM6h_7qHT",
          PollOptions: "_1-_aGrJzdFf8uYUfDKEn30",
          PollOption: "_3hNd0q0tYO12nPDCPsT8sm",
          Selected: "_3Nv8BLF6dRk932f5NhyNIH",
          PollVoteIcon: "ziFphpM2Ie-orQ5ezpQqT",
          Disabled: "_1bO8azG0-IqxQ3AQbWtCxx",
          ContentRow: "_3Yb8eVHtZWf1AWt7VV3P-z",
          BackgroundBar: "_30b_e8W4Z94Lwn8x2U9TYH",
          ForegroundBar: "_3PFkx8XNigPW6CoYfHH5Yi",
          PctText: "_1RNbjKcBRtD4pseH6hyggg",
          OptionText: "_1qUCIT-7ueBBoNjoCvGfbP",
          PollStatus: "_3NDl2Pml7Uvse14r9SWJTD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          sketchfab_play_overlay_image: "j_bDCIOMLFNOKaIFJzk2_",
          sketchfabmodelembedded: "_1hkVJ0EfOR3lTom2cDAN4w",
          dynamiclink_box: "_2OrALNR-dII7L3YP3pXWBG",
          dynamiclink_preview: "_3__9JYEkVlbq76JT_4TByA",
          dynamiclink_content: "_2ocugWm5DDJzRPwAxIsCtq",
          dynamiclink_name: "_3a1nw-REuLvtrUfFX3lonG",
          dynamiclink_type: "_31hqFGM_Of2_4xkXfb8TtV",
          dynamiclink_author: "_13lYjZu0VIgol2-cHgw8vK",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppSummaryWidgetCtn: "_1-2t1NI3qbO2JgWmCss7AW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          FlexColumnContainer: "_15ufNax9QUSW3N7J3t5TmY",
          FullStartTime: "_1YLHWZHuAxRYOyv0nq0a3Z",
          ReminderDialog: "_3YUEYUcuh0PTxYsV6Fecqq",
          ReminderOptions: "_1Tp8K4gynWBOBpC9tS_xXV",
          ReminderBackground: "TNf9_B9OYDQXSleTS1gAS",
          ReminderExpandsLeft: "_38Xly-p-GTyBu1lVv1KF79",
          ReminderOption: "_26nnhy-kEQVG1EJvwt-YOG",
          Unverified: "_1dcmAZnqCMpEs3PXIajJIN",
          CheckboxWrapper: "_1xuKEdr0rNMBRK_vYraObm",
          ReminderCheckBox: "vPo2jxLA9iAVrt49Ic3c1",
          IconMode: "_1YjsRp8XbwoXVWYYvWD7iv",
          RemindBell: "_3-_M2IUSKHovaZaejfEH3E",
          RemindCheck: "_2qaPrk1hI1cvMDPYnXO-kj",
          ReminderDefault: "_19p2Qdr48bduJICtjBoXVv",
          TextMode: "_553rCUt4qxX8_S5jBNMrv",
          ReminderCheck: "_3fMhCIg2SQlEWyw9rHKGCe",
          ReminderOpennedOptions: "vBuhkIZJzVjB-gDKqhho8",
          ReminderOptionsHeader: "_2oOZCpUHJOjdt7D5zkx0Ed",
          ReminderCalendarOptions: "VO6FStOkQjIXr-aZW1JBx",
          ReminderSettings: "_2Pn59J0keCBE-RnAuaUUVx",
          ReminderNotes: "_3qE0wUvpzn1HTPrT3R_wOv",
          RpcThrobber: "_3F3aByA4Tw1mRbNiiVtXP-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Pill: "_861OI3fFcj_3yxoWXG_5_",
          Button: "_1cZtQ0Bp-yHfF7HnFoKeQa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ImageBlocked: "_1q2rpNyMVSrPH9vV02Dtrp",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_2L6sVk9vOgKcXO6DgZHpJ9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
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
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          StartDate: "_1Maw_Rw6sOKYC1KkOI1xM",
          EndDate: "vjGzCo2ZaJr6KcbuTta8L",
          MultiDateAndTime: "hrpa5B__OlJvPDvHQM_d-",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          DateAndTime: "_3Sy57gZmUNuNdOI8qtPQVs",
          NoDateAndTime: "_3lh2YoTQ3RiHxrfuO3CVjL",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          _: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
          VerticalLocalDateAndTime: "_1mp7jCbQZOXCcY5CmAu7xm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ReferencedApps: "_1bfuawEqNMIto67VTkwdbE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CheckMark: "_2RwDkHMoOnosJANzYXpE",
          DialogCtn: "_1un0dZktOVEKH7zzpSTtoF",
          EquipCtn: "_1zUv_m9l3wknw_k_rwz0uy",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Link: "-HlDBB290kjpl61uUmRed",
          Banner: "_2bT8irkKNnA5sxFG3MUXzH",
          Big: "sGy-bB7uqEt4Hoe7U5iA1",
          Mobile: "mhii5hgMCQvO2tXOUdWPQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppSocialLinksCtn: "_1wKUEA0cYqeUELXMe3Tp6T",
          AppSocialLinks: "YMmXzjieZthpAehitId4M",
          AppSocialLinkIcon: "OlwlyAPTdpJ7OieZmqzhc",
          AppSocialLinkWithText: "_3BKcmMK-HSkKmQqRCx9HdA",
          AppSocialText: "bJf5nxr6o9SG4mWXm7qz-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BroadcastCtn: "_3HRa-mVPX65qnntN2DS0xc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DateAndTime: "_2V6GLdiU4guy4ND3n4Usgg",
          DateAndTimeInline: "HZ6b2d4r4EFnT_1BeU5vo",
          _: "Fn5EUtWkwSAw_gbbiySKN",
          ActiveEvent: "rT7EkJjqw27KBB7HxAAWk",
          ActiveEventCallOut: "_2pJftSRjT_UngZZ4BJimwg",
          RightSideTitles: "_4LAnPYKRPeF-QDReu_VGm",
          DateToolTip: "_2E5LHvnVEF3dSVV3wrDflm",
          ShortDateAndTime: "MBkkhT4wei3tWetnWbiqn",
          ShortDateRange: "_3CN6I3krBRNzD7kCuKQ_w7",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
    },
  ]);
})();
