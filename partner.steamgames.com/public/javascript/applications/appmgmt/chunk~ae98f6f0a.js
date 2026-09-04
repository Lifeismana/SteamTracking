/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [6672],
    {
      50974: (E, P, e) => {
        "use strict";
        e.d(P, {
          GU: () => h,
          Kd: () => C,
          WN: () => u,
          bv: () => p,
          mW: () => f,
          wv: () => o,
          yT: () => i,
        });
        const v = 4145017,
          n = 35143931,
          h = 39049601,
          p = 41316928,
          w = 45784768,
          d = 4397053,
          C = 4,
          f = 20,
          o = 45559995,
          i = 45902273,
          u = [v, n, h, C, p];
      },
      39414: (E, P, e) => {
        "use strict";
        e.d(P, { O: () => v, S: () => h });
        const v =
            /((?:(?:https?:)|(?:www[.,])|(?:[!#-;=?-Z\\\^-~]+[\.,](?:(?:[a-zA-Z]{2,4}[\.?]*[\/\\\?#])|(?:(?:biz|com|gallery|in|name|net|online|org|tech|trade|xyz)(?=\W|$)))))(?:[^ː\s"<>\[\]]*[^\s"<>\[\],.ː:])?)/,
          n = /^(steam|ftp|https?):\/\//;
        function h(p) {
          return n.test(p) ? p : "https://" + p;
        }
      },
      74107: (E, P, e) => {
        "use strict";
        e.d(P, { F5: () => p });
        var v = e(31275);
        const n = {};
        (n.arabic = () => e.e(2940).then(e.t.bind(e, 22940, 19))),
          (n.brazilian = () => e.e(9990).then(e.t.bind(e, 59990, 19))),
          (n.bulgarian = () => e.e(8573).then(e.t.bind(e, 38573, 19))),
          (n.czech = () => e.e(975).then(e.t.bind(e, 40975, 19))),
          (n.danish = () => e.e(8721).then(e.t.bind(e, 38721, 19))),
          (n.dutch = () => e.e(354).then(e.t.bind(e, 354, 19))),
          (n.english = () => e.e(9768).then(e.t.bind(e, 49768, 19))),
          (n.finnish = () => e.e(2931).then(e.t.bind(e, 12931, 19))),
          (n.french = () => e.e(6064).then(e.t.bind(e, 6064, 19))),
          (n.german = () => e.e(2942).then(e.t.bind(e, 62942, 19))),
          (n.greek = () => e.e(3924).then(e.t.bind(e, 13924, 19))),
          (n.hungarian = () => e.e(9441).then(e.t.bind(e, 99441, 19))),
          (n.indonesian = () => e.e(2584).then(e.t.bind(e, 42584, 19))),
          (n.italian = () => e.e(5307).then(e.t.bind(e, 97688, 19))),
          (n.japanese = () => e.e(5407).then(e.t.bind(e, 5407, 19))),
          (n.koreana = () => e.e(5815).then(e.t.bind(e, 65815, 19))),
          (n.latam = () => e.e(4287).then(e.t.bind(e, 44287, 19))),
          (n.malay = () => e.e(8160).then(e.t.bind(e, 58160, 19))),
          (n.norwegian = () => e.e(3648).then(e.t.bind(e, 33648, 19))),
          (n.polish = () => e.e(2649).then(e.t.bind(e, 22649, 19))),
          (n.portuguese = () => e.e(3629).then(e.t.bind(e, 23629, 19))),
          (n.romanian = () => e.e(1555).then(e.t.bind(e, 81555, 19))),
          (n.russian = () => e.e(1809).then(e.t.bind(e, 11809, 19))),
          (n.schinese = () => e.e(9004).then(e.t.bind(e, 79004, 19))),
          (n.spanish = () => e.e(7760).then(e.t.bind(e, 97760, 19))),
          (n.swedish = () => e.e(6881).then(e.t.bind(e, 86881, 19))),
          (n.tchinese = () => e.e(8183).then(e.t.bind(e, 28183, 19))),
          (n.thai = () => e.e(950).then(e.t.bind(e, 10950, 19))),
          (n.turkish = () => e.e(2568).then(e.t.bind(e, 22568, 19))),
          (n.ukrainian = () => e.e(7038).then(e.t.bind(e, 17038, 19))),
          (n.vietnamese = () => e.e(2327).then(e.t.bind(e, 62327, 19)));
        async function h(C) {
          if (n[C]) return n[C]();
        }
        const p = (0, v.l)(h);
        async function w() {
          return Promise.all([p.Ready()]);
        }
        function d() {
          return useLocalizationReady(p);
        }
      },
      25294: (E, P, e) => {
        "use strict";
        e.d(P, { R: () => C, A: () => d });
        var v = e(39414);
        const h = JSON.parse(
          '{"unknown":0,"store.steampowered.com":1,"steamcommunity.com":2,"global":3,"default":4,"application":5,"subscription":6,"search":7,"cart":8,"app":9,"global-nav":10,"global-account":11,"storemenu":12,"search-suggestion":13,"about":14,"suggest":15,"dlc":16,"storemenu-recommendedtags":17,"creator":18,"footer-genre-dropdown":20,"footer-category-dropdown":21,"footer-about-dropdown":22,"footer-help-dropdown":23,"footer-publisher-catalogs":24,"wishlist":25,"stats":26,"spotlight":40,"message":41,"marketing-message":42,"daily-deal":43,"footer":44,"header":45,"name":46,"more-details":47,"notification":48,"category":49,"steamdeck":50,"login":60,"prompt":61,"join-steam":62,"successful-login":63,"successful-joinsteam":64,"recommendations":70,"categories":71,"hardware":72,"waystoplay":73,"specialsections":74,"more":75,"big-category-link":76,"small-category-link":77,"package-purchase-recommendations":78,"popular":79,"recent":80,"main-cluster":100,"featured-win-games":101,"featured-mac-games":102,"tab-NewReleases":103,"tab-TopSellers":104,"tab-ComingSoon":105,"tab-Discounts":106,"smallcap-videos":107,"smallcap-demos":108,"home-headlines":109,"community-activity":110,"home-underten":111,"home-specials":112,"home-partners":113,"home-steam-install":114,"community-activity-recentlyplayed":115,"community-activity-recentlybought":116,"promo-banner":117,"promo-takeover":118,"featured-linux-games":119,"updated-games":120,"featured-updated-games":121,"discovery-queue":122,"new-on-steam":123,"curated-app":124,"home-gutter":125,"upcoming-queue":126,"home-specials-under10":127,"main-cluster-recommended":128,"main-cluster-topseller":129,"main-cluster-newonsteam":130,"recommended-spotlight":131,"hardware-promo":132,"popular-new-on-steam":133,"main-cluster-recommended-byfriends":134,"main-cluster-recommended-bycurators":135,"main-cluster-recenttopseller":136,"home-under10":137,"friends-trending":138,"spotlight-specials":139,"curator-recommended":140,"best-selling-vr":141,"creator-recommendations":142,"live-broadcast":143,"main-cluster-followed-creator":144,"tab-PopularNewReleases":145,"home-big-blue-buttons":146,"home-banner":147,"top-new-releases":148,"curated-main-app":149,"search-results":150,"query":151,"search-share":152,"genre":200,"large-cluster":201,"find-more":202,"friend-activity":203,"specials":2300,"breadcrumbs":205,"freestuff":220,"demos":1900,"tab-NewDemos":222,"tab-TopDemos":223,"browse-demos":224,"videos":100002,"popular-videos":226,"tab-NewVideos":227,"browse":230,"mac":231,"under10":232,"under5":233,"publisher":234,"publishers":235,"publisher-listing":236,"tag":237,"gettaggames":238,"explore":239,"browse-tags":240,"tags":241,"content-hub-carousel":242,"Action":250,"Adventure":251,"Strategy":252,"RPG":253,"Indie":254,"Massively Multiplayer":255,"Casual":256,"Family":257,"Simulation":258,"Racing":259,"Sports":260,"recommended":300,"recommendation-main":301,"friend-recommendations":302,"recommended-friendplaytime":303,"recommended-recentlyviewed":304,"recommended-morerecentlyviewed":305,"recommended-genrehighlights":306,"morelike":307,"morelike-mainitem":308,"friendactivity.js":309,"friendactivity-wishlist-spotlight":310,"friendactivity-purchases":311,"friendactivity-playedandwanted":312,"byafriend":313,"friend-recommendation":314,"ajaxgetfriendactivity":315,"recommend-franchise":316,"more-from-franchise":317,"wishlist-capsule":318,"game-highlights":400,"recommend-game":401,"view-own-recommendation":402,"game-purchase":403,"game-purchase-guide":404,"game-purchase-dlc":405,"game-friend-recommendations":406,"game-add-to-wishlist":407,"game-details":408,"game-highlight-tags":409,"game-tags-dialog":410,"game-tags-yours":411,"bundle-component-preview":412,"dlc-parent-app-link":413,"similar-recent-apps":414,"demo-parent-app-link":415,"package-purchase":420,"package-contents":421,"package-details":422,"category-list":423,"bundle":430,"bundle-contents":431,"cart-remove-item":500,"cart-items":501,"cart-continue-shopping":502,"cart-purchase":503,"checkout-logo-abandon":504,"checkout-success":505,"checkout":506,"gift":507,"self":508,"checkout-complete-return":509,"checkout-complete-logo":510,"purchaserequest":511,"display":512,"initial":513,"gifts":514,"upsell-recommended":520,"upsell-specials":521,"external-site":550,"facebook":551,"twitter":552,"referral":553,"summersale":600,"prizebooth":610,"activity-game-link":611,"activity-game-discount":612,"prize-info":613,"promotion":614,"sale":615,"sale-item":616,"sale-dailydeals":617,"sale-publishers":618,"sale-genres":619,"email":620,"cart-icon":621,"sale-category-links":622,"sale-notification-callout":623,"sale-yesterdaydeals":624,"sale-flashsales":625,"sale-fromyourwishlist":626,"closed-beta-access":627,"sale-tag-bucket":628,"sale-hero":629,"sale-franchises":630,"sale-dlcforyou":631,"sale-recommended-by-steam-labs":632,"sale-recommended-by-deep-dive":633,"sale-dailydeals-tier2":634,"sale-deep-discounts":635,"sale-deck-mostplayed":636,"home-chart-deckmostplayed":637,"home-deck-banner":638,"sale-tag-bucket-top":639,"sale-dailydeals-none":640,"sale-dailydeals-tags":641,"sale-dailydeals-ir":642,"sale-dailydeals-tier2-none":645,"sale-dailydeals-tier2-tags":646,"sale-dailydeals-tier2-ir":647,"sale-hero-none":650,"sale-hero-tags":651,"sale-hero-ir":652,"autumnsale":660,"wintersale":661,"yearinreview":662,"springsale":663,"mobileapp":700,"summary":701,"mobilestorefront":702,"home":703,"winter2012-today-square":800,"winter2012-today-square-button":801,"winter2012-hires":802,"winter2012-hires-button":803,"winter2012-yesterday-square":804,"winter2012-yesterday-square-button":805,"winter2012-flash":806,"winter2012-flash-button":807,"winter2012-pack":808,"winter2012-pack-button":809,"winter2012-topsellers":810,"winter2012-topsellers-button":811,"winter2012-vote-winner":812,"winter2012-vote-winner-button":821,"winter2012-vote-option-voting":813,"winter2012-vote-option-voted":814,"winter2012-nav":815,"winter2012-500-callout":816,"winter2012-500-callout-button":820,"winter2012-featured":817,"winter2012-lower-nav":822,"winter2012-vote-option-vote-results":823,"fall2014-48":850,"fall2014-24":851,"fall2014-TopSellers":852,"fall2014-Upcoming":853,"fall2014-Under10":854,"fall2014-Under5":855,"fall2014-PopularNewReleases":856,"fall2014-specials-more":857,"fall2014-recommend-wishlist":858,"fall2014-recommend-contentforyourgames":859,"renderspecials":860,"recommend":861,"recommended-ranked-played":862,"redeem-wallet-complete-return":900,"redeem-wallet-complete-return-app":901,"updated":1000,"curators":1050,"curatorrecommendations":1051,"ajaxgetcuratorrecommendations":1052,"curatorscombinedrecommendations":1053,"ajaxgetcombinedrecommendations":1054,"curatorlist":1055,"curator":1056,"curatorfeaturedlist":1057,"curator_featured_list":1057,"mycuratorsreviewing":1058,"creatorfeaturedrecs":1059,"new_dlc":1060,"browse-dlc":1061,"curatorlistcapsule":1062,"widget":1100,"appvisibilitystats":1101,"render":1200,"recommendationfeed-single-friends":1210,"recommendationfeed-single-curators":1211,"recommendationfeed-single-recent":1212,"recommendationfeed-single-wishlist":1213,"recommendationfeed-single-played":1214,"recommendationfeed-two":1250,"recommendationfeed-four":1251,"winter2014-featured":1300,"winter2014-yesterday":1301,"winter2014-flash":1302,"winter2014-flash2":1303,"winter2014-vote":1304,"winter2014-specials-more":1305,"winter2014-recommend-wishlist":1306,"winter2014-frontpage-wishlist":1307,"winter2014-TopSellers":1308,"winter2014-Upcoming":1309,"winter2014-Under10":1310,"winter2014-Under5":1311,"winter2014-PopularNewReleases":1312,"winter2017-FeaturedBanner":1313,"summer2018-standardview-curated":1314,"summer2018-standardview-recommend-basic":1315,"summer2018-standardview-recommend-neural":1316,"summer2018-mergedview-curated":1317,"summer2018-mergedview-recommend-neural":1318,"summer2018-salien-giveaway":1319,"summer2018-creator-recommend":1320,"summer2018-live-stream":1321,"sale-vr":1322,"sale-moddable":1323,"discovery-queue-0":1324,"wishlist-onsale":1400,"wishlist-newrelease":1401,"greenlight-newrelease":1402,"sales-event-enhanced":1403,"creator-newrelease":1404,"generic-onsale":1405,"topsellers-onsale":1406,"recommended-onsale":1407,"demo-newrelease":1408,"Free to Play":1420,"tab-mostplayednewreleases":1421,"tab-mostplayed":1422,"tab-comingsoon":1423,"tab-discounts":1424,"tab-ConcurrentUsers":1454,"vr":1453,"hub-vr-recommended":1455,"hub-vr-specials":1459,"hub-vr-featured":1463,"hub-vr-takeover":1467,"games":1452,"hub-games-recommended":1456,"hub-games-specials":1460,"hub-games-featured":1464,"hub-games-takeover":1468,"software":1451,"hub-software-recommended":1457,"hub-software-specials":1461,"hub-software-featured":1465,"hub-software-takeover":1469,"hub-videos-recommended":1458,"hub-videos-specials":1462,"hub-videos-featured":1466,"hub-videos-takeover":1470,"macos":1480,"hub-macos-recommended":1481,"hub-macos-specials":1482,"hub-macos-featured":1483,"hub-macos-takeover":1484,"linux":1490,"hub-linux-recommended":1491,"hub-linux-specials":1492,"hub-linux-featured":1493,"hub-linux-takeover":1494,"controller":1500,"hub-controller-recommended":1501,"hub-controller-specials":1502,"hub-controller-featured":1503,"hub-controller-takeover":1504,"freetoplay":1510,"hub-freetoplay-recommended":1511,"hub-freetoplay-specials":1512,"hub-freetoplay-featured":1513,"hub-freetoplay-takeover":1514,"earlyaccess":1520,"hub-earlyaccess-recommended":1521,"hub-earlyaccess-specials":1522,"hub-earlyaccess-featured":1523,"hub-earlyaccess-takeover":1524,"pccafe":1530,"hub-pccafe-recommended":1531,"hub-pccafe-specials":1532,"hub-pccafe-featured":1533,"hub-pccafe-takeover":1534,"remoteplayphone":1540,"hub-remoteplayphone-recommended":1541,"hub-remoteplayphone-specials":1542,"hub-remoteplayphone-featured":1543,"hub-remoteplayphone-takeover":1544,"remoteplaytablet":1550,"hub-remoteplaytablet-recommended":1551,"hub-remoteplaytablet-specials":1552,"hub-remoteplaytablet-featured":1553,"hub-remoteplaytablet-takeover":1554,"remoteplaytv":1560,"hub-remoteplaytv-recommended":1561,"hub-remoteplaytv-specials":1562,"hub-remoteplaytv-featured":1563,"hub-remoteplaytv-takeover":1564,"remoteplaytogether":1570,"hub-remoteplaytogether-recommended":1571,"hub-remoteplaytogether-specials":1572,"hub-remoteplaytogether-featured":1573,"hub-remoteplaytogether-takeover":1574,"remote-play-about":1580,"remoteplay":1581,"turnbasedrpg":1582,"arcaderhythm":1583,"greatondeck":1584,"remoteplaylanding":1585,"fightingmartialarts":1586,"actionfps":1587,"hackandslash":1588,"actionrunjump":1589,"shmup":1590,"adventure":1591,"action":1592,"adventurerpg":1593,"hiddenobject":1594,"metroidvania":1595,"puzzlematching":1596,"storyrich":1597,"visualnovel":1598,"casual":1559,"querypaginated":1600,"n_section":1601,"rpgjrpg":1602,"rpgpartybased":1603,"roguelikeroguelite":1604,"rpgaction":1605,"rpg":1606,"rpgstrategytactics":1607,"rpgturnbased":1608,"simulation":1609,"simbuildingautomation":1610,"simdating":1611,"simfarmingcrafting":1612,"simhobbysim":1613,"simlife":1614,"simphysicssandbox":1615,"simspaceflight":1616,"strategy":1617,"strategycardboard":1618,"strategycitiessettlements":1619,"soundtracks":1620,"hub-soundtracks-recommended":1621,"hub-soundtracks-specials":1622,"hub-soundtracks-featured":1623,"hub-soundtracks-takeover":1624,"strategygrand4x":1625,"strategymilitary":1626,"strategyrealtime":1627,"towerdefense":1628,"strategyturnbased":1629,"sportsandracing":1630,"sports":1631,"sportsfishinghunting":1632,"sportsindividual":1633,"racing":1634,"racingsim":1635,"sportssim":1636,"sportsteam":1637,"anime":1638,"horror":1639,"mysterydetective":1640,"explorationopenworld":1641,"sciencefiction":1642,"space":1643,"survival":1644,"multiplayercoop":1645,"multiplayerlan":1646,"multiplayerlocalparty":1647,"multiplayermmo":1648,"multiplayer":1649,"multiplayeronlinecompetitive":1650,"singleplayer":1651,"upcoming":1700,"comingsoon-recommendedcomingsoon":1701,"comingsoon-popularwishlist":1702,"comingsoon-newdlc":1703,"comingsoon-followedcreator":1704,"comingsoon-mywishlist":1705,"comingsoon-largecap":1706,"tab-PopularUpcoming":1707,"tab-AllUpcoming":1708,"in-library-game-event-update":1800,"on-wishlist-game-event-update":1801,"in-library-game-remind-me":1802,"hub-demos-recommended":1901,"hub-demos-specials":1902,"hub-demos-featured":1903,"hub-demos-takeover":1904,"creator-home-product-page":2000,"franchise-home-link":2001,"ajaxgetappinfoforcap":2100,"partner-events":2101,"library-partner-events":2102,"store-partner-events":2103,"steamtv-partner-events":2104,"community-partner-events":2105,"partnerweb-partner-events":2106,"store-calendar-partner-events":2107,"events":2108,"subscriptions":2109,"ea":2110,"subscriptionplansea":2111,"download_event":2112,"reminder":2113,"steamtv":2200,"hub-specials-recommended":2301,"hub-specials-specials":2302,"hub-specials-featured":2303,"hub-specials-takeover":2304,"recommender":2400,"recommended-by-steam-labs":2401,"labs":2500,"automaticshow":2501,"microtrailers":2502,"now-playing":2503,"deepdive":2504,"game-add-to-wishlist-deepdive":2505,"dbdetailsmulti":2506,"dbgetlinkparam":2507,"recommended-by-deep-dive":2508,"recommended-by-deep-dive-carousel":2509,"recommended-by-deep-dive-carousel_default":2510,"recommended-by-deep-dive-carousel_cluster_recent":2511,"recommended-by-deep-dive-carousel_cluster_games":2512,"recommended-by-deep-dive-carousel_cluster_playtime":2513,"recommended-by-deep-dive-carousel-default":2514,"recommended-by-deep-dive-carousel-cluster-recent":2515,"recommended-by-deep-dive-carousel-cluster-games":2516,"recommended-by-deep-dive-carousel-cluster-playtime":2517,"trendingreviews":2600,"ajaxgetrecentreviews":2601,"community-recommendations":2602,"lunarnewyear2020":2700,"lunarnewyear":2701,"lunarnewyearmarket":2702,"steam-logo":2750,"sale-banner":2751,"sale-button-top":2752,"sale-button-bottom":2753,"wishlist-button-bottom":2754,"footer-steam-logo":2755,"steamclient":5000,"library":5100,"friendsui":5200,"friendcontextmenu":5201,"nextfest":6000,"topsellers":7000,"steamcharts":7001,"weeklytopsellers":7002,"topchartlist":7003,"overview":7004,"mostplayed":7005,"salesmartdailyactiveuserdemo":7006,"salesmartmostplayeddemo":7007,"salesmartdecktopplayed":7008,"salesmartcategory":7009,"vrhardwarelanding":7010,"monthlytopreleases":7011,"bestofyear":7012,"apphome":100000,"images":100001,"allnews":100003,"news":100004,"announcements":100005,"discussions":100006,"reporteddiscussions":100007,"tradingforum":100008,"guides":100009,"reviews":100010,"positivereviews":100011,"negativereviews":100012,"workshop":100013,"broadcasts":100014,"eventcomments":100015,"sharedfiles":100100,"filedetails":100101,"screenshot":100102,"workshopitem":100103,"mtxitem":100104,"collection":100105,"guide":100106,"integratedguide":100107,"merch":100108,"artwork":100109,"video":100110,"topicsearch":100201,"singletopic":100202,"profiles":100300,"review":100301,"profileshowcase":100302,"broadcast":100400,"watch":100401,"friendactivityfeed":100500,"announcement":100501,"curatorreview":100502,"friendpurchase":100503,"workshopitempublished":100504,"artworkpublished":100505,"screenshotpublished":100506,"guidepublished":100507,"collectionpublished":100508,"itemfavorited":100509,"userreviewpublished":100510,"partner.steamgames.com":100600,"help.steampowered.com":100601,"salecreatorhome":100700,"saleitembrowse":100701,"salefacetbrowse":100702,"salesection":100703,"saletabsection":100704,"salebroadcast":100705,"salecuratorrec":100706,"saleeventsched":100707,"salesubscription":100708,"saleitemsearch":100709,"salesmartwishlist":100710,"salesmartir":100711,"salesmartdlc":100712,"salesmarttagrec":100713,"salebrowsetopwishlisted":100714,"salebrowsetrendingwishlisted":100715,"salebrowsepopularcomingsoon":100716,"salebrowsemostplayeddemo":100717,"salebrowsedailyactiveuserdemo":100718,"salebrowseplayednowdemo":100719,"salebrowserecentlyreleased":100720,"salebrowsepopularpurchased":100721,"salebrowsepopularpurchaseddiscounted":100722,"salebrowsediscounted":100723,"salebrowseprice":100724,"salebrowsenewandtrending":100725,"salebrowsetopsellers":100726,"salebrowsetoprated":100727,"discoveryqueue2022":100728,"saleeventsection":100729,"salesectionlinks":100730,"salesectionrewards":100731,"salesectiontext":100732,"salesectioneventschedule":100733,"salesmartpersonalizedcarousel":100734,"promo-takeunder":100735,"salesmartwr":100736,"salesmartwishlist_allsale":100737,"salesmartir_allsale":100738,"autopopulatetag":100739,"autopopulatecategory":100740,"salesmartrecentevents":100741,"seasonpassproductpage":100742,"itemcollections":100743,"crosspromotesalepage":100744,"mm-auto-render":100745,"salequiz":100746,"templatemediacontent":100747,"templatefaq":100748,"templatetechspec":100749,"topnewreleases":100750,"newreleases":100751,"salebrowsetrendingfree":100752,"trendingfree":100753,"reactroot":100754,"bundlelist":100755,"verifiedprogram":100756,"trailercarousel":100757,"personalcalendar-lastmonth":100800,"personalcalendar-lastweek":100801,"personalcalendar-calendar":100802,"personalcalendar-homepage":100803,"greatonframe":100804}',
        );
        var p = e(50974);
        function w(f) {
          return f in h;
        }
        class d {
          static InstrumentLink(o, i, u = null) {
            const g = d.GetSNRLinkParam(i, u),
              s = d.GetCuratorClanIDParam(i);
            return d.AddNavParamToURL(o, g, s);
          }
          static ParseSNR(o) {
            const i = o.split("_") || [];
            return {
              domain: d.DecodeEventComponent(i[0]),
              controller: d.DecodeEventComponent(i[1]),
              method: d.DecodeEventComponent(i[2]),
              submethod: d.DecodeEventComponent(i[3]),
              feature: d.DecodeEventComponent(i[4]),
              depth: i[5] ? Number(i[5]) : void 0,
            };
          }
          static GetSNRLinkParam(o, i = null) {
            let u = d.ComputeLinkPrefix(
              o.domain,
              o.controller,
              o.method,
              o.submethod,
            );
            i = i ?? o.depth ?? null;
            const g = d.EncodeEventComponent(o.feature);
            return g && ((u += "_" + g), i && (u += "_" + i)), u;
          }
          static GetCuratorClanIDParam(o) {
            return o.curator_clanid ?? null;
          }
          static AddNavParamToURL(o, i, u) {
            if (!o || o.length == 0) return o;
            try {
              const g = new URL((0, v.S)(o)),
                s = new URLSearchParams(g.search);
              return (
                s.set("snr", encodeURIComponent(i ?? "")),
                u &&
                  !p.WN.includes(u) &&
                  s.set("curator_clanid", encodeURIComponent(u ?? "")),
                g.origin + g.pathname + "?" + s.toString() + g.hash
              );
            } catch (g) {
              return console.error(o, g), o;
            }
          }
          static ComputeLinkPrefix(o, i, u, g) {
            let s = "";
            return (
              (s += d.EncodeEventComponent(o)),
              (s += "_"),
              (s += d.EncodeEventComponent(i)),
              (s += "_"),
              (s += d.EncodeEventComponent(u)),
              (s += "_"),
              (s += d.EncodeEventComponent(g)),
              s
            );
          }
          static EncodeEventComponent(o) {
            return o
              ? w(o)
                ? "" + h[o]
                : (o.match(/^[0-9]+$/) || (o = o.replace(/^[0-9]+/, "")),
                  o.replace(/[^a-zA-Z0-9\- ]+/g, ""))
              : "";
          }
          static DecodeEventComponent(o) {
            const i = o && parseInt(o);
            if (i && h) {
              for (const u in h) if (h[u] == i) return u;
            }
            return d.SanitizeEventComponent(o);
          }
          static SanitizeEventComponent(o) {
            return !o || !o.match(/^[a-zA-Z0-9\-.]*$/) ? "" : o;
          }
        }
        function C(f) {
          return {
            ...f,
            domain: d.SanitizeEventComponent(f.domain),
            controller: d.SanitizeEventComponent(f.controller),
            method: d.SanitizeEventComponent(f.method),
            submethod: d.SanitizeEventComponent(f.submethod),
            feature: d.SanitizeEventComponent(f.feature),
            depth: f.depth || 0,
          };
        }
      },
      72865: (E, P, e) => {
        "use strict";
        e.d(P, {
          Gd: () => u,
          aL: () => s,
          bV: () => l,
          n9: () => i,
          nn: () => C,
          ru: () => b,
        });
        var v = e(7850),
          n = e(90626),
          h = e(25294),
          p = e(72609);
        const w = n.createContext({}),
          d = n.createContext(void 0);
        function C(a) {
          const { children: t, ...r } = a,
            m = i(),
            y = n.useMemo(
              () => ({ ...m, ...r }),
              [
                m,
                r.domain,
                r.controller,
                r.method,
                r.submethod,
                r.feature,
                r.depth,
                r.curator_clanid,
              ],
            );
          return (0, v.jsx)(w.Provider, { value: y, children: t });
        }
        function f(a) {
          const { uiData: t, children: r } = a,
            m = React.useMemo(
              () => ({
                domain: t.domain,
                controller: t.controller,
                method: t.method,
                submethod: t.submethod,
                feature: t.feature,
                depth: t.depth,
                curator_clanid: t?.curator_data?.clanid,
              }),
              [
                t.domain,
                t.controller,
                t.method,
                t.submethod,
                t.feature,
                t.depth,
                t?.curator_data?.clanid,
              ],
            );
          return jsx(d.Provider, { value: m, children: r });
        }
        function o() {
          const a = React.useContext(d),
            t = i();
          return a || t;
        }
        function i() {
          return n.useContext(w);
        }
        function u(a, t) {
          return g(i(), a, t);
        }
        function g(a, t, r) {
          return {
            ...a,
            feature: t || a.feature,
            depth: r || a.depth,
            countrycode: p.TS.COUNTRY,
            is_client: p.TS.IN_CLIENT,
          };
        }
        function s(a, t, r) {
          const m = i();
          return n.useMemo(() => a && l(m, a, t, r), [a, m, t, r]);
        }
        function b(a, t) {
          const r = i();
          return n.useMemo(
            () => h.A.GetSNRLinkParam({ ...r, feature: a || r.feature }, t),
            [r, a, t],
          );
        }
        function l(a, t, r, m) {
          const y = h.A.GetSNRLinkParam({ ...a, feature: r || a.feature }, m),
            R = h.A.GetCuratorClanIDParam(a);
          return h.A.AddNavParamToURL(t, y, R);
        }
        function c(a) {
          const { href: t, ...r } = a,
            m = s(t);
          return jsx("a", { ...r, href: m });
        }
      },
      95535: (E, P, e) => {
        "use strict";
        e.d(P, { Pm: () => u, d$: () => g, tB: () => i });
        var v = e(7850),
          n = e(43434),
          h = e(83482),
          p = e(71421),
          w = e(53113),
          d = e(3166),
          C = e(24660);
        function f(s) {
          if (!s) return;
          let b = s?.jsondata?.read_more_link
            ? (0, w.wm)(s.jsondata.read_more_link).toLocaleLowerCase()
            : void 0;
          if (b) return [b];
        }
        function o(s, b) {
          return (0, n.p)(s, f(b));
        }
        function i(s, b) {
          return s
            ? ((0, n.p)(s)
                ? o(s, b)
                  ? (s =
                      (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                      (0, n.E)(s))
                  : (s =
                      (d.TS.IN_CLIENT ? "steam://openurl_external/" : "") + s)
                : (s = (0, w.NT)(s)),
              s)
            : "";
        }
        function u(s, b, l) {
          let c = s;
          return (
            c.toLowerCase().startsWith("http") || (c = "http://" + c),
            (0, v.jsx)(g, { url: c, event: b, children: l || s })
          );
        }
        const g = (s) => {
          const { url: b, event: l, className: c, style: a } = s;
          let t = (0, h.OZ)(b);
          t = i(t, l);
          let r;
          (0, n.p)(t) && (r = "noopener nofollow");
          const m =
            typeof s.children == "string" &&
            s.children.length > 0 &&
            b &&
            !b.startsWith("steam://")
              ? (0, w.Qz)(b)
              : void 0;
          return (0, v.jsx)(p.Gq, {
            toolTipContent: m,
            direction: "top",
            children: (0, v.jsx)(C.Ii, {
              className: c,
              href: t,
              rel: r,
              id: s.id,
              style: a,
              children: s.children,
            }),
          });
        };
      },
      83482: (E, P, e) => {
        "use strict";
        e.d(P, {
          Ay: () => l,
          It: () => u,
          L3: () => g,
          OZ: () => o,
          k2: () => f,
          wJ: () => i,
        });
        var v = e(72865),
          n = e(25294),
          h = e(71742),
          p = e(53113),
          w = e(98609),
          d = e(90626),
          C = e(39414);
        function f(c, a = "", t = null) {
          return l.InstrumentLink(c, a, t);
        }
        function o(c, a, t) {
          const r = (0, v.n9)();
          return d.useMemo(() => {
            const m = (0, p.wm)(c).toLowerCase(),
              y = (0, p.wm)(w.TS.COMMUNITY_BASE_URL).toLowerCase(),
              R = (0, p.wm)(w.TS.STORE_BASE_URL).toLowerCase();
            return m === y || m === R ? (0, v.bV)(r, c, a, t) : c;
          }, [r, c, a, t]);
        }
        function i(c, a, t = null) {
          const r = g(a, t),
            m = a ? n.A.GetCuratorClanIDParam(a) : null;
          return n.A.AddNavParamToURL(c, r, m);
        }
        function u(c, a, t, r = null) {
          const m = i(c, a, r);
          if (t && Object.keys(t).length > 0)
            try {
              const y = new URL((0, C.S)(m)),
                R = new URLSearchParams(y.search);
              return (
                Object.entries(t).forEach(([L, T]) => {
                  R.set(L, encodeURIComponent(T ?? ""));
                }),
                y.origin + y.pathname + "?" + R.toString() + y.hash
              );
            } catch {}
          return m;
        }
        function g(c, a = null) {
          return c?.domain ? l.GetLinkParam(c, a) : w.TS.SNR;
        }
        function s(c, a = "", t = null) {
          const r = `${Config.STORE_BASE_URL}app/${c}`;
          return f(r, a, t);
        }
        function b(c, a = "") {
          const t = `${Config.STORE_BASE_URL}dlc/${c}`;
          return f(t, a);
        }
        class l {
          static sm_strDomain;
          static sm_strController;
          static sm_strMethod;
          static sm_strSubmethod;
          static sm_strComputedLinkPrefix;
          static SetNavEventParams(a, t, r = null, m = null) {
            (l.sm_strDomain = a),
              (l.sm_strController = t),
              (l.sm_strMethod = r),
              (l.sm_strSubmethod = m),
              (l.sm_strComputedLinkPrefix = null);
          }
          static GetDefaultParams() {
            let a = { domain: l.sm_strDomain, controller: l.sm_strController };
            return (
              l.sm_strMethod && (a.method = l.sm_strMethod),
              l.sm_strSubmethod && (a.submethod = l.sm_strSubmethod),
              a
            );
          }
          static InstrumentLink(a, t, r = null) {
            const m = l.GetLinkParam(t, r),
              y = typeof t != "string" ? n.A.GetCuratorClanIDParam(t) : null;
            return n.A.AddNavParamToURL(a, m, y);
          }
          static GetLinkParam(a, t = null) {
            let r;
            if (typeof a != "string") {
              if (a.domain) return n.A.GetSNRLinkParam(a, t);
              r = a.feature || "";
            }
            let m;
            if (!l.sm_strComputedLinkPrefix && !l.ComputeStaticLinkPrefix())
              return null;
            m = l.sm_strComputedLinkPrefix;
            let y = n.A.EncodeEventComponent(r);
            return y && ((m += "_" + y), t && (m += "_" + t)), m;
          }
          static ComputeStaticLinkPrefix() {
            return l.sm_strDomain
              ? ((l.sm_strComputedLinkPrefix = n.A.ComputeLinkPrefix(
                  l.sm_strDomain,
                  l.sm_strController,
                  l.sm_strMethod,
                  l.sm_strSubmethod,
                )),
                !0)
              : ((0, h.wT)(
                  !1,
                  "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
                ),
                !1);
          }
        }
      },
      45737: (E) => {
        E.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
    },
  ]);
})();
