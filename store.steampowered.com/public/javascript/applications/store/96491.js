/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [96491],
  {
    55263: (e, i, t) => {
      t.d(i, {
        G6: () => o,
        Gg: () => D,
        Ow: () => I,
        Sq: () => d,
        YM: () => _,
        eR: () => r,
        ik: () => N,
        mZ: () => L,
        t7: () => a,
        zX: () => w,
      });
      var n = t(41735),
        u = t.n(n),
        c = t(90626),
        s = t(37085),
        A = t(95578),
        l = t(84933),
        M = t(16021);
      const d = 1,
        r = 2,
        N = 3;
      function o(e, i, t, n) {
        const A = (0, c.useRef)(void 0),
          o = (0, c.useRef)(void 0),
          a = (0, l.CH)();
        A.current = e;
        const [I, D] = (0, c.useState)(void 0),
          {
            include_assets: L,
            include_release: g,
            include_platforms: w,
            include_all_purchase_options: _,
            include_screenshots: C,
            include_trailers: j,
            include_ratings: y,
            include_tag_count: T,
            include_reviews: z,
            include_basic_info: E,
            include_supported_languages: U,
            include_full_description: m,
            include_included_items: S,
            include_assets_without_overrides: B,
            apply_user_filters: p,
            include_links: k,
            include_extra_details: x,
          } = t;
        if (
          ((0, c.useEffect)(() => {
            const t = {
              include_assets: L,
              include_release: g,
              include_platforms: w,
              include_all_purchase_options: _,
              include_screenshots: C,
              include_trailers: j,
              include_ratings: y,
              include_tag_count: T,
              include_reviews: z,
              include_basic_info: E,
              include_supported_languages: U,
              include_full_description: m,
              include_included_items: S,
              include_assets_without_overrides: B,
              apply_user_filters: p,
              include_links: k,
              include_extra_details: x,
            };
            let c = null;
            return (
              !e ||
                e < 0 ||
                M.A.Get().BHasStoreItem(e, i, t) ||
                (void 0 !== I && n && n == o.current) ||
                (n !== o.current && (D(void 0), (o.current = n)),
                (c = u().CancelToken.source()),
                M.A.Get()
                  .QueueStoreItemRequest(e, i, t)
                  .then((i) => {
                    c?.token.reason || A.current !== e || D(i == s.R), a();
                  })),
              () => c?.cancel("useStoreItemCache: unmounting")
            );
          }, [
            e,
            i,
            n,
            I,
            L,
            g,
            w,
            _,
            C,
            j,
            y,
            T,
            z,
            E,
            U,
            m,
            S,
            B,
            p,
            k,
            x,
            a,
          ]),
          !e)
        )
          return [null, r];
        if (!1 === I) return [void 0, r];
        if (M.A.Get().BIsStoreItemMissing(e, i)) return [void 0, r];
        if (!M.A.Get().BHasStoreItem(e, i, t)) return [void 0, d];
        const b = M.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, i);
        return b ? [b, N] : [null, r];
      }
      function a(e, i, t) {
        return o(e, A.c6.qI, i, t);
      }
      function I(e, i, t) {
        return o(e, A.c6.xO, i, t);
      }
      function D(e, i, t) {
        return o(e, A.c6.RD, i, t);
      }
      function L(e, i, t) {
        const [n, u] = o(e, i, t);
        let c;
        n?.GetStoreItemType() != A.c6.RD ||
          n.GetAssets()?.GetHeaderURL() ||
          1 != n?.GetIncludedAppIDs().length ||
          (c = n.GetIncludedAppIDs()[0]);
        const [s, l] = a(c, t);
        return c && s?.BIsVisible() ? [s, l] : [n, u];
      }
      function g(e, i, t, n) {
        const s = (0, l.CH)(),
          {
            include_assets: A,
            include_release: o,
            include_platforms: a,
            include_all_purchase_options: I,
            include_screenshots: D,
            include_trailers: L,
            include_ratings: g,
            include_tag_count: w,
            include_reviews: _,
            include_basic_info: C,
            include_supported_languages: j,
            include_full_description: y,
            include_included_items: T,
            include_assets_without_overrides: z,
            apply_user_filters: E,
            include_links: U,
            include_extra_details: m,
          } = t;
        if (
          ((0, c.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const t = {
                include_assets: A,
                include_release: o,
                include_platforms: a,
                include_all_purchase_options: I,
                include_screenshots: D,
                include_trailers: L,
                include_ratings: g,
                include_tag_count: w,
                include_reviews: _,
                include_basic_info: C,
                include_supported_languages: j,
                include_full_description: y,
                include_included_items: T,
                include_assets_without_overrides: z,
                apply_user_filters: E,
                include_links: U,
                include_extra_details: m,
              },
              n = e.filter(
                (e) =>
                  !(
                    M.A.Get().BHasStoreItem(e, i, t) ||
                    M.A.Get().BIsStoreItemMissing(e, i)
                  ),
              );
            if (0 == n.length) return;
            const c = u().CancelToken.source(),
              l = n.map((e) => M.A.Get().QueueStoreItemRequest(e, i, t));
            return (
              Promise.all(l).then(() => {
                c.token.reason || s();
              }),
              () => c.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, i, n, s, A, o, a, I, D, L, g, w, _, C, j, y, T, z, E, U, m]),
          !e)
        )
          return r;
        if (
          !e.every(
            (e) =>
              M.A.Get().BHasStoreItem(e, i, t) ||
              M.A.Get().BIsStoreItemMissing(e, i),
          )
        )
          return d;
        return e.every((e) =>
          M.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, i),
        )
          ? N
          : r;
      }
      function w(e, i, t) {
        return g(e, A.c6.qI, i, t);
      }
      function _() {
        c.useEffect(
          () => (
            M.A.Get().SetReturnUnavailableItems(!0),
            () => M.A.Get().SetReturnUnavailableItems(!1)
          ),
          [],
        );
      }
    },
    96715: (e, i, t) => {
      t.d(i, { A: () => n });
      const n =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
    },
    10886: (e, i, t) => {
      t.d(i, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAc9JREFUeNrsmz1Lw1AUhnP8qB+Qkk0pItbVxcX/IM6Cky7iFH+Jk79BwclBB3+AszgUwdVNBxFaCw1E7fW9cAep5pa0NiT3vgdeLjRJm/Ocm/NRiCilAp9tKvDcCIAACIAAsiyEzqAepCqqnvEhzHJSLGVQX7jvSKDPoYO8ADS9BUcAJNBiXgCudUjCJEgABPDLZip2v12obwIXur4DdBK+MeVrHaqJSB2KzKqT2izUgLZd2wH30CF8bFnTusgnlhdUsjmXAFxBe3Au9TEJ3hXpfNkA9M22T4v80TIBuIbzDz73ARe+9wG31pqo1DSWGNqBlgcO16oO4A3b/3XIOafQ8b9PSCWZBh8BYMMSfd3wvEPzrk6DH0OON8Z0vvLDkHAaJAACIICJJJeCy+Aa1Pnj8y+Uwa6lDOpA1S3fewSdjJJIi26EOnC0nTtKInpQalsALfn+CDQJgAA8BYDnP8IS+bwDmuNcXHQVWDURG7QUmf7ZEmV9nysZh7dcGIdbALBpAaD7h6dJDFRshQmAAAiAAAiAAAiAAAiAAAiAAAiAAAjgpyUO+ZmMAuDSIQCZvtj+E4zNuhtU98WJxDgfZ50gfHOUSZAACIAAPLZvAQYAZ32YkpymkAcAAAAASUVORK5CYII=";
    },
    19654: (e, i, t) => {
      t.d(i, { A: () => n });
      const n =
        t.p +
        "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
    },
    3209: (e, i, t) => {
      t.d(i, { A: () => n });
      const n =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABApJREFUeNrsm2tIFUEUx2evRl5ISnugZuULIwoVtIykIIkgowdmERERUh9CqQ/Rh+gFCX4oKCIjyi8VQtETsoLoARViJEokRYlako9Iy4JKfLX9hz2CwXrv7t6ZvbvcPfDjwr3uzJ7/npk5c3ZUVFVlkWw+FuHmCeAJ4AngCeAJ4AkQwRbtgnucBzJALPgNPoJ28FdI6zwTdCDp4DToUvWtF1SDHIPtFUz0m5GLp9noeAw4BYZV43YFxOm05QNF4DmosirADNABMm1wPgE0qdasHWSAKJALKkAr/TYIUq0KcIAa4Y0lS3Q+HjSroVk/+Knz/eFAfQe7sfpxDckU4bYqx2opKsb6UcwIMElnLPLhsECw8xskOc9F9RPFoIaGyX/9B8oDknSWybmgHhQJXOaOSlg634AP4AH4Dm6Bh6DVzDKYE0ThSoqSUJ5+lmqPVUx0D4EioDeIygdBA8gL4UmtsiGROhcoygIJ8AUMBGk8G7wC1SDRws1lSXb+OCjngW5FgFHw0kAnCthF6ekZkGLiBhMlOT4ENoNjoW6GrpvoNAbsBW3gLtgKpgS5ZkCSAD3gpojdYA34ZmGHuQ5cpWtrSZilJNJ46w/3TksxUBbfDS4K6m+ElqdO0A3mg2WSlsFsUQLwMX4DbHLRNr/eqLCBhkAm2EgC7ABPXCRAr9E/DFQQ8YM7FK61FAUJYKELBGgTIUA3fSaDPS6rdBkWIFgm+M6lpb4mUUXRey50fhA0ihLgLBh2mQANlAkKEaCTNhNusvuiEyE/7QmyXCJAhqhJcHy+vtZMo2G0RrP3afTNEB8KBeCpwwUwnbIrJo/I8KxwJzgCUh3mfD/lLH9kRAC3eLCIabW1FWA/bTudYufNOm82AuJAF02KzIFPPw38MHuhz2Qnlxw69iutOG9lDuDDoAVMd5Dzb0EuZYBMZgRw4zV2XuoadYjz/BV5qVXnrQjA7THY7pAU+STTqtKWTQnhpCjPCy6D9DA5/wIUMq3MFhYBxtJkXncvY9pJDrusAywBX0NtSBF0VthHe4Xl9FnK5J0/6qPoaxF146Imo9dUQFkj2flCUc6LFIDvwK7RBDlbYtjzCGsW2Wiop8TyafxvA1ESx3wdKGHa+0oWTgGmgsVgNVjPtBcbMo1PUCdo8yVl2dUTYBY4BOYw7VxeLGWAKbTbUmya6d8z7aVrnVyJ9Q8ORINy0KPab31gn4DDF4YItgz66SmU2RDun0AVuAB+2ZVQGM0DeNivBFtAMZgpcBvLi5j8LfQjJur4q+REiM/2eSRIPiU+aQZzhc+UL/DS9TOmFVtHWBhNVCY4mWmnypJo2IwdjBikp8xTVl5XHGIOM8X7t7kIN08ATwBPAE8ATwBPgAi2fwIMABJGc33swO3GAAAAAElFTkSuQmCC";
    },
  },
]);
