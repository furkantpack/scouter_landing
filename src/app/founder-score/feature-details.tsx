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
  'Never miss a career move, exit, or stealth signal',
  'Benchmark every profile against past success patterns',
  'Show up with a reasoned score, not just a name on a list',
  'Measure scoring accuracy and hit rate over time',
];

const faqs = [
  {
    question: 'What signals does Scouter track?',
    answer: 'Job changes, major company exits, stealth-mode registrations, layoff data, prior founding history, and social activity — monitored automatically across your entire target list.',
  },
  {
    question: 'Can I customize scoring to my own thesis?',
    answer: 'Yes — Scouter can personalize scoring against the founder patterns, sectors, backgrounds, and signals that matter most to your thesis.',
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
          <h2 id="team-growth-title">Turn founder signals into investment opportunities</h2>
          <p>
            Catch a founder not at their most visible moment — but at their most ready one.
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
          desktopSrc="/scouter-feature1/feature1-image-3.png"
          mobileSrc="/scouter-feature1/feature1-image-3.png"
          alt="Account tracking dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Tracking</span>
          <h2 id="productive-hours-title">Know which profiles are moving, in real time</h2>
          <p>
            See every signal that triggered a score, track score history, and measure which founder signals actually convert.
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
