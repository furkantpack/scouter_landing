import Link from 'next/link';

const recipients = [
  { name: 'James Brown', detail: 'Ex-Stripe, building stealth', badge: 'ICP', avatar: 'JB', tone: 'photo-one' },
  { name: 'Sophia Williams', detail: 'New CTO, Series A exit', badge: 'Warm', avatar: 'SW', tone: 'photo-two' },
  { name: 'Emma Wright', detail: 'Layoff list, ex-Meta', badge: 'News', avatar: 'EW', tone: 'blue' },
  { name: 'Matthew Johnson', detail: 'Filed new entity, DE', badge: 'Stealth', avatar: 'MJ', tone: 'purple' },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.75 10.25 12 5.9l7.25 4.35" />
      <path d="M6.75 10.25v7.25M10.25 10.25v7.25M13.75 10.25v7.25M17.25 10.25v7.25" />
      <path d="M5.5 18.5h13M7.5 20.75h9" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m6.5 8 3.5 3.5L13.5 8" />
    </svg>
  );
}

export default function HowItWorks02() {
  return (
    <section className="viral-finance-section" aria-labelledby="viral-finance-title">
      <div className="viral-finance-inner">
        <header className="viral-finance-header">
          <span className="viral-finance-badge">
            <i />
            How it works?
          </span>
          <h2 id="viral-finance-title">
            From signal to investment decision,
            <span>without the manual research</span>
          </h2>
          <p>
            Stop manually checking LinkedIn for career changes. Scouter watches your target profiles,
            <span>finds the moment, and tells you exactly who&apos;s worth backing and why.</span>
          </p>
        </header>

        <div className="viral-finance-grid">
          <article className="viral-finance-card">
            <span className="viral-finance-number">1</span>
            <div className="viral-finance-card-copy">
              <h3>Upload your target list</h3>
              <p>Add founders, set your thesis filters, and launch your first scan in minutes.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-recipient-panel">
              {recipients.map((recipient, index) => (
                <div className="viral-recipient-row" key={recipient.name}>
                  <span className={`viral-avatar is-${recipient.tone}`}>{recipient.avatar}</span>
                  <span>
                    <strong>{recipient.name}</strong>
                    <small>{recipient.detail}</small>
                  </span>
                  <em>{recipient.badge}</em>
                  {index === 0 ? <b aria-hidden="true" /> : null}
                </div>
              ))}
              <button type="button" className="viral-new-recipient">+ Add founder</button>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">2</span>
            <div className="viral-finance-card-copy">
              <h3>Let AI find the moment</h3>
              <p>Scouter monitors signals - career moves, stealth filings, exits, layoffs - and flags who&apos;s ready right now.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-payment-panel">
              <div className="viral-payment-person">
                <span className="viral-avatar is-photo-one">JB</span>
                <span>
                  <strong>James Brown</strong>
                  <small>New entity filed</small>
                </span>
                <Link href="#">Review</Link>
              </div>

              <div className="viral-method-card">
                <label>Select founder score <i /></label>
                <button type="button">Background + behavioral + timing <ChevronDown /></button>
                <small>AI matched to the signal.</small>
                <div className="viral-bank-row">
                  <span><BuildingIcon /></span>
                  <p>
                    <strong>Suggested reasoning</strong>
                    <small>Second exit on record. Left a director role 9 days ago.</small>
                  </p>
                  <Link href="#">Edit</Link>
                </div>
                <button type="button" className="viral-continue-button">Approve score</button>
              </div>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">3</span>
            <div className="viral-finance-card-copy">
              <h3>Get the alert, make the move</h3>
              <p>Approve the AI-surfaced score and reasoning. We handle the rest - ranking, delivery, tracking.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-amount-panel">
              <div className="viral-account-card">
                <span><BuildingIcon /></span>
                <p>
                  <strong>Alert delivery</strong>
                  <small>Sent Tuesday, 10:30 AM</small>
                </p>
                <button type="button"><ChevronDown /></button>
              </div>

              <div className="viral-form-card">
                <label>Meeting goal <i /></label>
                <div className="viral-input">Book founder intro</div>
                <label>Founder note<span>*</span><small>(optional)</small></label>
                <div className="viral-textarea">
                  <span>A reasoned note based on the signal...</span>
                  <em>0/200</em>
                </div>
                <div className="viral-recurring">
                  <i />
                  Track replies
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
