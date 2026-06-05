export function VaultaPreview() {
  return (
    <div className="mock-vaulta">
      <div className="mock-vaulta__sidebar">
        <div className="mock-vaulta__logo">V</div>
        {['Overview', 'Approvals', 'Ledger', 'Audit'].map((item) => (
          <div
            key={item}
            className={`mock-vaulta__nav ${item === 'Overview' ? 'mock-vaulta__nav--active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mock-vaulta__main">
        <div className="mock-vaulta__topbar">
          <span>Treasury overview</span>
          <span className="mock-vaulta__pill">Live</span>
        </div>
        <div className="mock-vaulta__metrics">
          {[
            { label: 'Total liquidity', value: '$24.8M' },
            { label: 'Pending approvals', value: '12' },
            { label: 'Reconciled', value: '99.2%' },
          ].map((m) => (
            <div key={m.label} className="mock-vaulta__metric">
              <span className="mock-vaulta__metric-label">{m.label}</span>
              <span className="mock-vaulta__metric-value">{m.value}</span>
            </div>
          ))}
        </div>
        <div className="mock-vaulta__grid">
          <div className="mock-vaulta__chart">
            <div className="mock-vaulta__bars">
              {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="mock-vaulta__queue">
            <p className="mock-vaulta__queue-title">Approval queue</p>
            {['Wire transfer · $120K', 'Vendor payout · $48K', 'FX settlement · $2.1M'].map(
              (row) => (
                <div key={row} className="mock-vaulta__queue-row">
                  <span>{row}</span>
                  <span className="mock-vaulta__status">Review</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
