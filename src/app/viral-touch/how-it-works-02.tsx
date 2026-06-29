import Link from 'next/link';

const recipients = [
  { name: 'Fintech target', detail: 'Revenue leader · Series B', badge: 'VIP', avatar: 'FT', tone: 'photo-one' },
  { name: 'HR platform buyer', detail: 'People leader · Enterprise', badge: 'Warm', avatar: 'HR', tone: 'photo-two' },
  { name: 'Compliance champion', detail: 'Security team · Mid-market', badge: 'ICP', avatar: 'CC', tone: 'blue' },
  { name: 'Brand advocate', detail: 'Shared launch post', badge: 'Social', avatar: 'BA', tone: 'purple' },
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
            From brand identity to viral moment,
            <span>handled end to end</span>
          </h2>
          <p>
            This isn&apos;t a catalogue pick. Every Viral Touch starts with a creative brief and ends with something nobody has seen before.
          </p>
        </header>

        <div className="viral-finance-grid">
          <article className="viral-finance-card">
            <span className="viral-finance-number">1</span>
            <div className="viral-finance-card-copy">
              <h3>Start with a creative brief</h3>
              <p>Tell us who you&apos;re targeting and what your company does. Your dedicated creative director takes it from there.</p>
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
              <h3>Design your signature concept</h3>
              <p>A fintech sends an oversized debit card. An HR platform sends a CV-shaped box. A compliance firm sends a miniature shield. Your concept, built around your identity.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-payment-panel">
              <div className="viral-payment-person">
                <span className="viral-avatar is-photo-one">JB</span>
                <span>
                  <strong>Creative direction</strong>
                  <small>Concept route selected</small>
                </span>
                <Link href="#">Review</Link>
              </div>

              <div className="viral-method-card">
                <label>Select Viral Touch <i /></label>
                <button type="button">Signature brand object <ChevronDown /></button>
                <small>Built around your identity.</small>
                <div className="viral-bank-row">
                  <span><BuildingIcon /></span>
                  <p>
                    <strong>Concept example</strong>
                    <small>Oversized debit card for a fintech.</small>
                  </p>
                  <Link href="#">Edit</Link>
                </div>
                <button type="button" className="viral-continue-button">Approve concept</button>
              </div>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">3</span>
            <div className="viral-finance-card-copy">
              <h3>Launch and watch it travel</h3>
              <p>We handle production, fulfillment, and delivery. Your prospects photograph it, share it, and talk about it — long after it lands.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-amount-panel">
              <div className="viral-account-card">
                <span><BuildingIcon /></span>
                <p>
                  <strong>Viral Touch delivery</strong>
                  <small>Campaign launches Tuesday</small>
                </p>
                <button type="button"><ChevronDown /></button>
              </div>

              <div className="viral-form-card">
                <label>Campaign Goal <i /></label>
                <div className="viral-input">Create social reach</div>
                <label>Brand Moment<span>*</span><small>(Optional)</small></label>
                <div className="viral-textarea">
                  <span>A signature object people want to share...</span>
                  <em>0/200</em>
                </div>
                <div className="viral-recurring">
                  <i />
                  Track shares
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
