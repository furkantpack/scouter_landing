'use client';

import { useState } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Navigation from '../navigation';
import {
  RiArrowRightUpLongLine,
  RiBuilding4Line,
  RiCloseLine,
  RiMailLine,
  RiMapPinTimeLine,
  RiShieldCheckLine,
  RiSparkling2Line,
} from '@remixicon/react';

const collageCards = [
  {
    image: '/scouter-feature2/feature2-image-1.png',
    text: 'Founder fit, scored early.',
    className: 'demo-collage-wide',
  },
];

export default function DemoRequestPage() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="demo-request-page">
        <section className="demo-request-shell" aria-labelledby="demo-request-title">
          <div className="demo-request-left">
            <div className="demo-collage" aria-label="Gently outreach previews">
              {collageCards.map((card) => (
                <figure className={`demo-collage-card ${card.className}`} key={card.text}>
                  <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 520px" />
                  <figcaption>{card.text}</figcaption>
                </figure>
              ))}
            </div>

            <div className="demo-contact-note">
              <p><strong>Book 20 minutes</strong> and we&apos;ll show you how Scouter finds high-signal founders before the round, scores the opportunity, and gives your team the context to move first.</p>
              <div>
                <span><RiMailLine /> hello@scouter.so</span>
                <i />
                <span><RiMapPinTimeLine /> 30 min founder intelligence demo</span>
              </div>
            </div>
          </div>

          <form className="demo-request-form">
            <span className="demo-request-kicker">Book a Demo</span>
            <h1 id="demo-request-title">See founder signals before everyone else</h1>
            <p>Share your fund name and work email. We&apos;ll show how Scouter turns stealth signals into an investable shortlist.</p>

            <div className="demo-field-grid">
              <label className="demo-field">
                <span>Fund or company name</span>
                <div>
                  <RiBuilding4Line />
                  <input type="text" placeholder="Enter fund or company name..." />
                </div>
              </label>

              <label className="demo-field">
                <span>Work email</span>
                <div>
                  <RiMailLine />
                  <input type="email" placeholder="Enter work email..." />
                </div>
              </label>
            </div>

            <label className="demo-consent">
              <input type="checkbox" defaultChecked />
              <span><RiShieldCheckLine /> I agree to be contacted about my demo.</span>
            </label>

            <button className="demo-submit" type="button" onClick={() => setIsCalendlyOpen(true)}>
              Book a meeting
              <RiArrowRightUpLongLine />
            </button>

            <small className="demo-form-footnote">
              <RiSparkling2Line />
              We will send a calendar invite with the founder intelligence audit agenda.
            </small>
          </form>
        </section>
      </main>

      {isCalendlyOpen && (
        <div className="demo-calendly-modal" role="dialog" aria-modal="true" aria-label="Book a meeting">
          <button className="demo-calendly-backdrop" type="button" aria-label="Close modal" onClick={() => setIsCalendlyOpen(false)} />
          <div className="demo-calendly-dialog">
            <button className="demo-calendly-close" type="button" aria-label="Close modal" onClick={() => setIsCalendlyOpen(false)}>
              <RiCloseLine />
            </button>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/furkantpack/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" async />
          </div>
        </div>
      )}
    </>
  );
}
