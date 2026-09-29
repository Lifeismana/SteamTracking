var _ = `_14oRP3y2r-E-`,
  _ = _();
function _(_) {
  let { reportedContentID: _ } = _;
  return _
    ? (0, _.jsx)(_, {
        ..._,
      })
    : (0, _.jsx)(_, {});
}
function _(_) {
  return (0, _.jsx)(`div`, {
    children: (0, _.jsxs)(`table`, {
      children: [
        (0, _.jsx)(`thead`, {
          children: (0, _.jsxs)(`tr`, {
            children: [
              (0, _.jsx)(`th`, {
                children: `Date`,
              }),
              (0, _.jsx)(`th`, {
                children: `Actor`,
              }),
              (0, _.jsx)(`th`, {
                children: `Action`,
              }),
              (0, _.jsx)(`th`, {
                children: `Details`,
              }),
            ],
          }),
        }),
        (0, _.jsx)(`tbody`, {
          children: (0, _.jsx)(`tr`, {
            children: (0, _.jsx)(`td`, {
              colSpan: 4,
              children: _.Localize(`#subjectauditlog_noentries`),
            }),
          }),
        }),
      ],
    }),
  });
}
function _(_) {
  let _ = _(_.reportedContentID),
    _ = _?.data?.entries?.length ?? 0,
    _ = _.data?.entries ?? [];
  return (
    _.sort((_, _) => _.timestamp - _.timestamp),
    (0, _.jsx)(`div`, {
      children:
        _ > 0 &&
        (0, _.jsxs)(`table`, {
          children: [
            (0, _.jsx)(`thead`, {
              children: (0, _.jsxs)(`tr`, {
                children: [
                  (0, _.jsx)(`th`, {
                    children: `Date`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Actor`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Action`,
                  }),
                  (0, _.jsx)(`th`, {
                    children: `Details`,
                  }),
                ],
              }),
            }),
            (0, _.jsxs)(`tbody`, {
              children: [
                _ === void 0 &&
                  (0, _.jsx)(`tr`, {
                    children: (0, _.jsx)(`td`, {
                      colSpan: 4,
                      children: _.Localize(`#subjectauditlog_noentries`),
                    }),
                  }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      _.isLoading &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: (0, _.jsx)(_, {}),
                          }),
                        }),
                      _.isError &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: _.Localize(`#subjectauditlog_error`),
                          }),
                        }),
                      _.isSuccess &&
                        _ === 0 &&
                        (0, _.jsx)(`tr`, {
                          children: (0, _.jsx)(`td`, {
                            colSpan: 4,
                            children: _.Localize(`#subjectauditlog_noentries`),
                          }),
                        }),
                      _.isSuccess &&
                        _ > 0 &&
                        _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              entry: _,
                            },
                            _.timestamp,
                          ),
                        ),
                    ],
                  }),
              ],
            }),
          ],
        }),
    })
  );
}
function _(_) {
  let { entry: _ } = _,
    _ = _(_.actor_steamid);
  return !_.isSuccess || !_.data
    ? null
    : (0, _.jsxs)(`tr`, {
        children: [
          (0, _.jsx)(`td`, {
            children: _(_.timestamp, !1, ``),
          }),
          (0, _.jsxs)(`td`, {
            children: [
              (0, _.jsx)(`a`, {
                href: `${_.COMMUNITY_BASE_URL}profiles/${_.actor_steamid}`,
                children: (0, _.jsx)(`span`, {
                  children: _.data?.public_data?.persona_name,
                }),
              }),
              ` `,
              `(`,
              (0, _.jsx)(`a`, {
                href: `/moderation/activity/${_.actor_steamid}`,
                children: `activity`,
              }),
              `)`,
            ],
          }),
          (0, _.jsxs)(`td`, {
            children: [
              _(_.action),
              _.automated_action &&
                (0, _.jsx)(_.Fragment, {
                  children: `\xA0(Automated)`,
                }),
            ],
          }),
          (0, _.jsx)(`td`, {
            children: (0, _.jsx)(_, {
              eAction: _.action,
              jsonData: _.additional_json_data,
            }),
          }),
        ],
      });
}
function _(_) {
  let { eAction: _, jsonData: _ } = _,
    _ = {};
  switch ((_ && (_ = JSON.parse(_)), _)) {
    case 1:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
    case 2:
      return (0, _.jsxs)(_.Fragment, {
        children: [
          `Reason: `,
          _(_.reason),
          _.resolution !== 1 &&
            _.resolution !== 14 &&
            (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(`br`, {}), `Resolution: `, _(_.resolution)],
            }),
          _.sanctions &&
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(`br`, {}),
                `Sanctions: `,
                _.sanctions.map(_).join(`, `),
              ],
            }),
        ],
      });
    case 4:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
    case 5:
      return (0, _.jsx)(_.Fragment, {
        children: JSON.stringify(_, null, `	`),
      });
    case 6:
      return (0, _.jsxs)(_.Fragment, {
        children: [`New level: `, _(_.level)],
      });
    case 7:
      return (0, _.jsxs)(_.Fragment, {
        children: [`Report ID: `, _.report_id],
      });
    default:
      return null;
  }
}
function _(_) {
  let { subject: _ } = _,
    _ = _ && _.reports && _.reports.length > 0;
  return (0, _.jsx)(`table`, {
    className: _,
    children: (0, _.jsxs)(`tbody`, {
      children: [
        !_ &&
          (0, _.jsx)(`tr`, {
            children: (0, _.jsx)(`td`, {
              colSpan: 4,
              children: _.Localize(`#contentreportslist_noreports`),
            }),
          }),
        _ &&
          _.reports?.map((_) =>
            (0, _.jsx)(
              _,
              {
                report: _,
              },
              _.report_id,
            ),
          ),
      ],
    }),
  });
}
function _(_) {
  let { report: _ } = _,
    _ = _(_.reporter_steamid);
  if (!_.isSuccess || !_.data?.public_data) return null;
  let _ = !!_.time_disputed && _.dispute_resolved === 0,
    _ = _.resolved !== 0 && (!_.time_disputed || _.dispute_resolved !== 0),
    _ = _.time_dispute_resolved !== 0,
    _ = _.resolved === 1;
  return (0, _.jsxs)(`tr`, {
    children: [
      (0, _.jsx)(`td`, {
        children: _(_.time_reported, !1, ``),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          (0, _.jsx)(`a`, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
            children: (0, _.jsx)(_, {
              playerLinkDetails: _.data,
              size: `X-Small`,
              alt: `Reporter`,
            }),
          }),
          `\xA0`,
          (0, _.jsx)(`a`, {
            href: `${_.COMMUNITY_BASE_URL}profiles/${_.reporter_steamid}`,
            children: (0, _.jsx)(`span`, {
              children: _.data.public_data?.persona_name,
            }),
          }),
        ],
      }),
      (0, _.jsx)(`td`, {
        children:
          _.report_reason !== 2 &&
          (0, _.jsx)(`span`, {
            children: _(_.report_reason),
          }),
      }),
      (0, _.jsxs)(`td`, {
        children: [
          _ &&
            !_ &&
            !_ &&
            (0, _.jsx)(`span`, {
              children: _.Localize(
                `#contentreportslist_acquitted_at`,
                _(_.time_resolved, !1, ``),
              ),
            }),
          _ &&
            !_ &&
            !_ &&
            !_ &&
            (0, _.jsx)(`span`, {
              children: _.Localize(
                `#contentreportslist_resolved_at`,
                _(_.time_resolved, !1, ``),
              ),
            }),
          _ &&
            !_ &&
            (0, _.jsx)(`span`, {
              children: _.Localize(
                `#contentreportslist_disputed_at`,
                _(_.time_disputed, !1, ``),
              ),
            }),
          _ &&
            (0, _.jsx)(`span`, {
              children: _.Localize(
                `#contentreportslist_dispute_resolved_at`,
                _(_.time_dispute_resolved, !1, ``),
              ),
            }),
          !_ &&
            (0, _.jsx)(`span`, {
              children: _.report_text,
            }),
          _ &&
            (0, _.jsxs)(`span`, {
              children: [
                (0, _.jsx)(`br`, {}),
                `Original: `,
                _.report_text,
                (0, _.jsx)(`br`, {}),
                `Dispute: `,
                _.dispute_details,
              ],
            }),
        ],
      }),
    ],
  });
}
var _ = _(_(), 1),
  _ = `VWz-fkV5qwY-`,
  _ = `DGGxOZ1t-hA-`;
function _(_) {
  let { reportedContentID: _, onClose: _ } = _,
    [_, _] = (0, _.useState)(10),
    _ = _(_),
    [_, _] = (0, _.useState)(``);
  return (0, _.jsxs)(_, {
    className: _,
    children: [
      (0, _.jsx)(_, {
        children: _.Localize(`#moderation_escalation_description`),
      }),
      (0, _.jsxs)(`select`, {
        className: _,
        value: _,
        onChange: (_) => _(parseInt(_.target.value)),
        children: [
          (0, _.jsx)(`option`, {
            value: 0,
            children: _.Localize(`#moderation_escalationlevel_any`),
          }),
          (0, _.jsx)(`option`, {
            value: 1,
            children: _.Localize(`#moderation_escalationlevel_supervisor`),
          }),
          (0, _.jsx)(`option`, {
            value: 10,
            children: _.Localize(`#moderation_escalationlevel_valve`),
          }),
        ],
      }),
      (0, _.jsx)(`label`, {
        children: _.Localize(`#moderation_escalation_escalationnote`),
      }),
      (0, _.jsx)(_, {
        onTextChange: _,
        value: _,
      }),
      (0, _.jsxs)(_, {
        direction: `row`,
        justify: `end`,
        gap: `2`,
        marginTop: `2`,
        children: [
          (0, _.jsx)(_, {
            color: `dull`,
            onClick: _,
            children: _.Localize(`#moderation_cancel`),
          }),
          (0, _.jsx)(_, {
            onClick: async () => {
              await _.mutateAsync({
                eNewLevel: _,
                strNote: _,
              }),
                _();
            },
            loading: _.isPending,
            children: _.Localize(`#moderation_escalation_escalate`),
          }),
        ],
      }),
    ],
  });
}
export { _, _, _ };
