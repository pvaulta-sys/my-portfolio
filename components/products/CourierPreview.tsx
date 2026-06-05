export function CourierPreview() {
  const timeline = [
    { time: '14:22', event: 'Picked up · Lagos hub', done: true },
    { time: '16:05', event: 'In transit · En route ABV', done: true },
    { time: '18:40', event: 'Out for delivery', done: false, active: true },
    { time: '—', event: 'Delivered', done: false },
  ];

  return (
    <div className="mock-courier">
      <div className="mock-courier__header">
        <div>
          <p className="mock-courier__label">Shipment #CX-88421</p>
          <p className="mock-courier__title">Lagos → Abuja · Express</p>
        </div>
        <span className="mock-courier__badge">In transit</span>
      </div>
      <div className="mock-courier__body">
        <div className="mock-courier__map">
          <div className="mock-courier__route" />
          <div className="mock-courier__pin mock-courier__pin--a" />
          <div className="mock-courier__pin mock-courier__pin--b" />
          <div className="mock-courier__vehicle" />
        </div>
        <div className="mock-courier__panel">
          <p className="mock-courier__panel-title">Tracking timeline</p>
          <ul className="mock-courier__timeline">
            {timeline.map((step) => (
              <li
                key={step.event}
                className={`mock-courier__step ${step.done ? 'mock-courier__step--done' : ''} ${step.active ? 'mock-courier__step--active' : ''}`}
              >
                <span className="mock-courier__dot" />
                <div>
                  <span className="mock-courier__time">{step.time}</span>
                  <span className="mock-courier__event">{step.event}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="mock-courier__stats">
            <div>
              <span>ETA</span>
              <strong>2h 14m</strong>
            </div>
            <div>
              <span>Stops</span>
              <strong>3 / 5</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
