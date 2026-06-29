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
  'Never miss a funding, award, or expansion signal',
  'Coordinate multi-contact sends across one account',
  'Show up with context, not just a cold intro',
  'Measure account engagement and meeting conversion',
];

const faqs = [
  {
    question: 'What company signals does Gently track?',
    answer: 'Funding rounds, award wins, new office openings, executive hires, product launches, and major press coverage — monitored automatically across your entire target list.',
  },
  {
    question: 'Can I send to multiple contacts at the same company?',
    answer: 'Yes — Gently coordinates delivery to multiple stakeholders at the same account, with personalized notes for each recipient.',
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
          desktopSrc="/team-touch-feature-why.png"
          mobileSrc="/team-touch-feature-why.png"
          alt="Account signal dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Why it matters</span>
          <h2 id="team-growth-title">Turn account signals into open doors</h2>
          <p>
            Know the exact moment a target company is most receptive — and show up as the team that was paying attention.
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
          desktopSrc="/team-touch-feature-tracking.png"
          mobileSrc="/team-touch-feature-tracking.png"
          alt="Account tracking dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Tracking</span>
          <h2 id="productive-hours-title">Know which accounts are moving, in real time</h2>
          <p>
            See every signal that triggered a send, track delivery across the team, and measure which company moments actually open doors.
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
