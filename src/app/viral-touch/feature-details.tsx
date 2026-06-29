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
  'Create a signature physical concept unique to your brand',
  'Generate organic social reach from a single send',
  'Build brand recall that no email sequence can match',
  'Measure shares, replies, and meetings from every campaign',
];

const faqs = [
  {
    question: 'How long does a Viral Touch project take?',
    answer: 'From creative brief to first delivery, most projects are completed in 2 to 3 weeks. Your dedicated creative director manages the full timeline.',
  },
  {
    question: 'Is there a minimum order quantity?',
    answer: 'Viral Touch projects start at a minimum run of 25 units. Your creative director will recommend the right volume based on your target list and campaign goals.',
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
          desktopSrc="https://alignui.com/images/blocks/features-02.png"
          mobileSrc="https://alignui.com/images/blocks/features-02-mobile.png"
          alt="Prospect signal dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Why it matters</span>
          <h2 id="team-growth-title">Turn one send into a hundred impressions</h2>
          <p>
            When the right person receives the right object at the right moment, they don&apos;t just reply — they post it, share it, and become your most authentic brand ambassador.
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
          desktopSrc="https://alignui.com/images/blocks/features-03.png"
          mobileSrc="https://alignui.com/images/blocks/features-03-mobile.png"
          alt="Viral Touch campaign tracking dashboard"
        />
        <div className="feature-detail-copy">
          <span className="feature-detail-badge"><i />Tracking</span>
          <h2 id="productive-hours-title">Know how far your moment traveled</h2>
          <p>
            Track delivery, monitor social mentions, and measure how many meetings and pipeline opportunities each Viral Touch campaign generated.
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
