'use client';

import { useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowRightUpLongLine,
  RiCheckboxCircleFill,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Catch the perfect outreach moment',
  'Score signals based on real career and behavioral data',
  'Stand out by being early, not loud',
  'Measure what actually drives meetings',
];

const faqs = [
  {
    question: 'What signals does Scouter track?',
    answer: 'Job changes, company exits, stealth-mode registrations, layoffs, social media activity, and prior founding history — all monitored automatically.',
  },
  {
    question: 'Can I review before acting on an alert?',
    answer: 'Yes — review the score, signal history, and reasoning before your team reaches out.',
  },
];

function DetailVisual({
  desktopSrc,
  mobileSrc,
  alt,
}: {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
}) {
  return (
    <div className="feature-detail-visual">
      <Image
        src={desktopSrc}
        alt={alt}
        width={1254}
        height={1254}
        className="feature-detail-image feature-detail-image-desktop"
      />
      <Image
        src={mobileSrc}
        alt={alt}
        width={1254}
        height={1254}
        className="feature-detail-image feature-detail-image-mobile"
      />
    </div>
  );
}

export default function FeatureDetails() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="feature-details-wrap">
      <section className="feature-detail-section" aria-labelledby="team-growth-title">
        <DetailVisual
          desktopSrc="/personal-ai-feature-why.png"
          mobileSrc="/personal-ai-feature-why.png"
          alt="Prospect signal dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Why it matters</span>
          <h2 id="team-growth-title">Turn founder signals into booked meetings</h2>
          <p>
            Know exactly when a founder is ready to be approached — and show up with context, not a cold intro.
          </p>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}><RiCheckboxCircleFill />{benefit}</li>
            ))}
          </ul>
          <Link href="#" className="feature-detail-action">
            Book a demo <RiArrowRightUpLongLine />
          </Link>
        </div>
      </section>

      <section className="feature-detail-section feature-detail-reverse" aria-labelledby="productive-hours-title">
        <DetailVisual
          desktopSrc="/personal-ai-feature-tracking.png"
          mobileSrc="/personal-ai-feature-tracking.png"
          alt="Outbound tracking dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Tracking</span>
          <h2 id="productive-hours-title">Know what&apos;s moving, every time</h2>
          <p>
            See which signals triggered the alert, track score history, and measure reply rates and meetings booked — all in one place.
          </p>
          <div className="feature-faqs">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`feature-faq ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                    {faq.question}<RiArrowDownSLine />
                  </button>
                  {isOpen && <p>{faq.answer}</p>}
                </div>
              );
            })}
          </div>
          <Link href="#" className="feature-detail-action">
            Book a demo <RiArrowRightUpLongLine />
          </Link>
        </div>
      </section>
    </div>
  );
}
