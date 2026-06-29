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
  "Build a fit model unique to your fund's history",
  'Generate matches ranked by thesis alignment, not keywords',
  'Build warm-path intros that no cold email can match',
  'Measure match accuracy, intro success, and meetings booked',
];

const faqs = [
  {
    question: 'How long does a Fit Match setup take?',
    answer: 'From portfolio upload to first matches, most setups are completed in minutes. Your model improves as you label more founders.',
  },
  {
    question: 'Is there a minimum portfolio size?',
    answer: 'No fixed minimum. Scouter can start with your current portfolio, thesis notes, and partner feedback, then improve as more founder labels are added.',
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
        width={498}
        height={500}
        className="feature-detail-image feature-detail-image-desktop"
      />
      <Image
        src={mobileSrc}
        alt={alt}
        width={342}
        height={386}
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
          desktopSrc="/scouter-feature2/feature2-image-2.png"
          mobileSrc="/scouter-feature2/feature2-image-2.png"
          alt="Prospect signal dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Why it matters</span>
          <h2 id="team-growth-title">Turn one thesis into a hundred relevant founders</h2>
          <p>
            When the right founder matches the right thesis at the right stage, you don&apos;t just see a name — you see exactly how close you already are to them.
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
          desktopSrc="/scouter-feature2/feature2-image-3.png"
          mobileSrc="/scouter-feature2/feature2-image-3.png"
          alt="Fit Match campaign tracking dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Tracking</span>
          <h2 id="productive-hours-title">Know how close you already are</h2>
          <p>
            Track every match, monitor connection paths, and measure how many intros and meetings each Fit Match campaign generated.
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
