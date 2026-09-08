(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [9129],
  {
    91645: (n) => {
      n.exports = {
        IconContainer: "_6f_B5nDywKxTeX2mN82H",
        ButtonContainer: "_1ShXayKQrFaUxECMORaNmM",
        InfoContainer: "_20mER4KVFt1wYBaOFlnjvL",
        IconImg: "RP1UpBcTVectpTel7p6iH",
        ReactionCount: "_18GX_0BWySenzVNaYO4IsZ",
        IconList: "_2cI0LExX5UtjoTq7F6CTwY",
      };
    },
    3909: (n, e, t) => {
      "use strict";
      t.r(e), t.d(e, { AwardIcon: () => p, AwardIconList: () => I });
      var o = t(62540),
        c = t(63696),
        s = t(28017),
        a = t(98995),
        i = t(91645),
        r = t.n(i),
        l = t(46108),
        u = t(90765);
      function p(n) {
        const { reaction: e } = n,
          t = (0, s.KL)(e.reaction_type);
        if (!t) return null;
        const c = (0, l.Yp)(
          "#RewardsReaction_Tooltip",
          e.count || 0,
          t.localized_title,
        );
        return (0, o.jsxs)(a.he, {
          className: (0, u.A)(r().InfoContainer, r().IconContainer),
          toolTipContent: c,
          children: [
            (0, o.jsx)("img", {
              className: r().IconImg,
              src: (0, s.eU)(e.reaction_type, !1),
            }),
            e.count &&
              (0, o.jsx)("div", {
                className: r().ReactionCount,
                children: e.count,
              }),
          ],
        });
      }
      class I extends c.PureComponent {
        render() {
          let n = [];
          for (const e of this.props.reactions)
            n.push((0, o.jsx)(p, { reaction: e }, e.reaction_type));
          return (0, o.jsx)("div", { className: r().IconList, children: n });
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-hotfix-steamui/build/client/steamui/sourcemaps/awardicon.js.map
