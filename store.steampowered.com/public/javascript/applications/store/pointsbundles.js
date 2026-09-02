/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68685],
    {
      92908: (i, m, e) => {
        "use strict";
        e.r(m), e.d(m, { default: () => x });
        var n = e(7850),
          P = e(92757),
          A = e(58732),
          E = e(49288),
          l = e(75844),
          u = e(37939),
          D = e(36636),
          d = e(78175),
          O = e(23903),
          c = e(18210),
          B = e(19386),
          M = e(30992),
          I = e(62389),
          R = e(32819),
          _ = e(26590),
          g = e.n(_),
          C = e(36707),
          y = e(96986);
        const x = (0, l.PA)((r) => {
            const { bundleid: s } = r.match.params,
              t = parseInt(s),
              o = (0, n.jsx)(P.rd, { to: A.B.LoyaltyStore() });
            if (isNaN(t)) return o;
            const [a] = u.DZ.Get().GetRewardDefinitions(t);
            return a
              ? a.type !== E.kT.Mj && a.type !== E.kT.Wy
                ? o
                : (0, n.jsx)(T, { bundle: a })
              : null;
          }),
          T = (0, l.PA)((r) => {
            const { bundle: s } = r,
              t = u.DZ.Get().GetBundleOfferForUser(s),
              o = (a) => (0, d.U$)(a, s);
            return (0, n.jsx)(D.jy, {
              children: (0, n.jsxs)(O.az, {
                paddingY: "xlarge",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [
                  (0, n.jsx)(f, { bundle: s, offer: t }),
                  t.point_cost === 0
                    ? (0, n.jsx)(h, { className: _.PrimaryRedeemButton })
                    : (0, n.jsx)(d.gs, {
                        cost: t.point_cost,
                        discount: t.discount,
                        originalCost: t.original_point_cost,
                        className: _.PrimaryRedeemButton,
                        onClick: o,
                      }),
                  (0, n.jsx)(v, { offer: t }),
                ],
              }),
            });
          }),
          f = (0, l.PA)(({ bundle: r, offer: s }) => {
            const t = (0, B.g)(r),
              o = (0, c.we)("#RewardBundle_OfferDescription", s.discount);
            return (0, n.jsx)(O.az, {
              paddingBottom: "xlarge",
              children: (0, n.jsx)(D.Ch, { title: t, subtitle: o }),
            });
          }),
          h = ({ className: r }) =>
            (0, n.jsxs)("div", {
              className: (0, C.A)(r, _.AlreadyOwned),
              children: [
                (0, n.jsx)(y.wK, { className: _.CheckmarkCircle }),
                (0, n.jsx)("span", {
                  className: _.AlreadyOwnedText,
                  children: (0, c.we)("#Redeem_BundleItemOwned"),
                }),
              ],
            }),
          v = (0, l.PA)((r) => {
            const { offer: s } = r;
            return (0, n.jsx)(M.Gq, {
              title: (0, c.we)("#RewardBundle_BundleContentsSection_Title"),
              children: (0, n.jsx)(I.n, {
                getItems: (t, o) => ({
                  rewards: s.items.slice(t, o),
                  bLoadingMore: !1,
                  cTotalMatching: s.items.length,
                  cMaxToReturn: s.items.length,
                }),
                renderItem: (t) =>
                  (0, n.jsx)(
                    R.Fo,
                    {
                      definition: t,
                      purchaseable: !1,
                      onClick: (o) => (0, d.iZ)(o, t),
                    },
                    t.defid,
                  ),
              }),
            });
          });
      },
      26590: (i) => {
        i.exports = {
          "duration-app-launch": "800ms",
          Discount: "_3f4n8BFj3ADB61_06XxXfH",
          ShellHeader: "kOC36pdxn9Y3RbFW9Pe4k",
          ShellHeaderFlex: "_3Bs_x4ZJUDXcmcyBIijrY7",
          RewardsPointsCount: "_1XPtbpsI-RZd1JlAozJWI0",
          ShellHeaderBrandName: "_2fDrebx2asA6sXZwEpyywx",
          Shell: "_2ZfecHo99JCqJlsQwW-w_T",
          ShellScrollParent: "_1Qkju8DkEDxfJrSRSvE60X",
          SvgOverrideColor: "_29EuRXgJWKVF34WrLKbeKZ",
          ItemHoverZIndex: "_3gUO3mSjDbNfpuoquiKUX1",
          ActionButton: "_1YLE2s8b1gx2r4hkbxPUis",
          Icon: "_1QoZDC36mteVbqJk1wDSZn",
          PrimaryRedeemButton: "_2nL0cu9XFkFybVcp4CGFCO",
          CheckmarkCircle: "_2UpnBAYN6126aTJs1u2ojE",
          AlreadyOwned: "_3KGvDFZrr40lqc2M9wEJfI",
          AlreadyOwnedText: "_1E4uc1RzsRkpvfk6DwwdMp",
          BackgroundAnimation: "_2oXEvfMhDhEcaBr5PRy7d7",
          "ItemFocusAnim-darkerGrey-nocolor": "_16nKUyCgdygsMvgtHYnA_I",
          "ItemFocusAnim-darkerGrey": "_3S9V6HG-yV7cLmXIn7O8AO",
          "ItemFocusAnim-darkGreySettings": "_33WcxDSoXyTOyaJarLRYDB",
          "ItemFocusAnim-darkGrey": "VeFWruyg6ctHtRkiUXTkH",
          "ItemFocusAnim-grey": "_24duhYi8RTD4Eew8C3KB_c",
          "ItemFocusAnim-translucent-white-10": "_3lteHrpkDJZkvRG_ffVoBy",
          "ItemFocusAnim-translucent-white-20": "v8CraP-E2KxdVAq6wGT0o",
          "ItemFocusAnimBorder-darkGrey": "iqxTSvpBHG-X4nrFpTG_e",
          "ItemFocusAnim-green": "k6RsOokSW4Y-O6xRYzO5L",
          focusAnimation: "_1HtLqGQcw7MLMLzHPkaLbY",
          hoverAnimation: "_3RXdvlkokeeB5ZMO_q5ehk",
        };
      },
    },
  ]);
})();
