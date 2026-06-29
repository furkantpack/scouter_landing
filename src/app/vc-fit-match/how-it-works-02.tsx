import Link from 'next/link';

const recipients = [
  { name: 'Fintech founder', detail: 'Technical · Pre-seed', badge: 'VIP', avatar: 'FT', tone: 'photo-one' },
  { name: 'AI infra founder', detail: 'Ex-Google · Seed', badge: 'Warm', avatar: 'AI', tone: 'photo-two' },
  { name: 'Climate founder', detail: 'Deep tech · Pre-seed', badge: 'ICP', avatar: 'CC', tone: 'blue' },
  { name: 'Backed founder', detail: 'Shared network', badge: 'Network', avatar: 'BA', tone: 'purple' },
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
            From portfolio history to warm match,
            <span>handled end to end</span>
          </h2>
          <p>
            This isn&apos;t a generic list. Every Fit Match starts with your own deal history and ends with founders nobody else is looking at.
          </p>
        </header>

        <div className="viral-finance-grid">
          <article className="viral-finance-card">
            <span className="viral-finance-number">1</span>
            <div className="viral-finance-card-copy">
              <h3>Start with your portfolio</h3>
              <p>Tell us who you&apos;ve backed and what your thesis is. Scouter takes it from there.</p>
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
              <button type="button" className="viral-new-recipient">+ Add Target</button>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">2</span>
            <div className="viral-finance-card-copy">
              <h3>Build your signature fit model</h3>
              <p>A fintech fund sees finance-vertical technical founders. A climate fund sees deep-tech PhDs with grant history. Your model, built around your own thesis.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-payment-panel">
              <div className="viral-payment-person">
                <span className="viral-avatar is-photo-one">JB</span>
                <span>
                  <strong>Fit model</strong>
                  <small>Pattern route selected</small>
                </span>
                <Link href="#">Review</Link>
              </div>

              <div className="viral-method-card">
                <label>Select Fit Match <i /></label>
                <button type="button">Thesis-built scoring object <ChevronDown /></button>
                <small>Built around your portfolio.</small>
                <div className="viral-bank-row">
                  <span><BuildingIcon /></span>
                  <p>
                    <strong>Model example</strong>
                    <small>Technical fintech founders, ex-big tech, pre-seed stage.</small>
                  </p>
                  <Link href="#">Edit</Link>
                </div>
                <button type="button" className="viral-continue-button">Approve model</button>
              </div>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">3</span>
            <div className="viral-finance-card-copy">
              <h3>Launch and watch the matches arrive</h3>
              <p>We handle the scoring, the ranking, and the warm-path mapping. You see who&apos;s worth reaching — and who can make the intro.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-amount-panel">
              <div className="viral-account-card">
                <span><BuildingIcon /></span>
                <p>
                  <strong>Fit Match delivery</strong>
                  <small>Next scan runs Tuesday</small>
                </p>
                <button type="button"><ChevronDown /></button>
              </div>

              <div className="viral-form-card">
                <label>Campaign Goal <i /></label>
                <div className="viral-input">Surface thesis-aligned founders</div>
                <label>Network Note<span>*</span><small>(Optional)</small></label>
                <div className="viral-textarea">
                  <span>A connection path worth using...</span>
                  <em>0/200</em>
                </div>
                <div className="viral-recurring">
                  <i />
                  Track matches
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
