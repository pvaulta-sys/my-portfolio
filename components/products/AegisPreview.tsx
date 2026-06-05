export function AegisPreview() {
  return (
    <div className="mock-aegis">
      <div className="mock-aegis__terminal">
        <p className="mock-aegis__prompt">
          <span className="mock-aegis__user">aegis</span>@ops:~$ scan --target api.prod
        </p>
        <p className="mock-aegis__line mock-aegis__line--muted">→ Resolving endpoints… OK</p>
        <p className="mock-aegis__line">→ Policy check… 0 critical</p>
        <p className="mock-aegis__line mock-aegis__line--success">→ Assessment complete · report #8821</p>
        <p className="mock-aegis__prompt">
          <span className="mock-aegis__user">aegis</span>@ops:~$<span className="mock-aegis__cursor" />
        </p>
      </div>
      <div className="mock-aegis__dash">
        <div className="mock-aegis__dash-head">
          <span>Security operations</span>
          <span className="mock-aegis__live">Operational</span>
        </div>
        <div className="mock-aegis__cards">
          {[
            { label: 'Active scans', value: '4' },
            { label: 'Findings', value: '23' },
            { label: 'Automations', value: '12' },
          ].map((c) => (
            <div key={c.label} className="mock-aegis__card">
              <span>{c.label}</span>
              <strong>{c.value}</strong>
            </div>
          ))}
        </div>
        <div className="mock-aegis__feed">
          {['Workflow: perimeter audit', 'CLI: asset discovery', 'Dashboard: team handoff'].map(
            (row) => (
              <div key={row} className="mock-aegis__feed-row">
                {row}
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
