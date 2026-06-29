import Link from 'next/link';

const recipients = [
  { name: 'James Brown', detail: 'VP Sales · Fintech', badge: 'ICP', avatar: 'JB', tone: 'photo-one' },
  { name: 'Sophia Williams', detail: 'New CMO · Series B', badge: 'Warm', avatar: 'SW', tone: 'photo-two' },
  { name: 'Emma Wright', detail: 'Hiring revenue team', badge: 'News', avatar: 'EW', tone: 'blue' },
  { name: 'Matthew Johnson', detail: 'Liked competitor post', badge: 'Social', avatar: 'MJ', tone: 'purple' },
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
            From signal to meeting,
            <span>without the guesswork</span>
          </h2>
          <p>
            Stop manually researching prospects. Gently watches your list,
            <span>finds the moment, and tells you exactly what to send and when.</span>
          </p>
        </header>

        <div className="viral-finance-grid">
          <article className="viral-finance-card">
            <span className="viral-finance-number">1</span>
            <div className="viral-finance-card-copy">
              <h3>Upload your target list</h3>
              <p>Add contacts, set your ICP filters and launch your first outreach in minutes.</p>
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
              <button type="button" className="viral-new-recipient">+ Add Prospect</button>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">2</span>
            <div className="viral-finance-card-copy">
              <h3>Let AI find the moment</h3>
              <p>Gently monitors signals — career moves, company news, social activity — and flags who&apos;s ready now.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-payment-panel">
              <div className="viral-payment-person">
                <span className="viral-avatar is-photo-one">JB</span>
                <span>
                  <strong>James Brown</strong>
                  <small>New role detected</small>
                </span>
                <Link href="#">Review</Link>
              </div>

              <div className="viral-method-card">
                <label>Select Personal Touch <i /></label>
                <button type="button">Founder note + gift <ChevronDown /></button>
                <small>AI matched to the signal.</small>
                <div className="viral-bank-row">
                  <span><BuildingIcon /></span>
                  <p>
                    <strong>Suggested message</strong>
                    <small>Congrats on the new revenue role.</small>
                  </p>
                  <Link href="#">Edit</Link>
                </div>
                <button type="button" className="viral-continue-button">Approve touch</button>
              </div>
            </div>
          </article>

          <article className="viral-finance-card">
            <span className="viral-finance-number">3</span>
            <div className="viral-finance-card-copy">
              <h3>Send the perfect touch</h3>
              <p>Approve the AI-suggested gift and note. We handle the rest — fulfillment, delivery, tracking.</p>
              <Link href="#">Learn more <span>↗</span></Link>
            </div>

            <div className="viral-amount-panel">
              <div className="viral-account-card">
                <span><BuildingIcon /></span>
                <p>
                  <strong>Gift delivery</strong>
                  <small>Arrives Tuesday, 10:30 AM</small>
                </p>
                <button type="button"><ChevronDown /></button>
              </div>

              <div className="viral-form-card">
                <label>Meeting Goal <i /></label>
                <div className="viral-input">Book intro call</div>
                <label>Personal Note<span>*</span><small>(Optional)</small></label>
                <div className="viral-textarea">
                  <span>A thoughtful note based on the signal...</span>
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
