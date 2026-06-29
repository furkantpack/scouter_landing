'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  "Build a fit model unique to your fund's history",
  'Connect every match directly to your past investments',
  'Surface founders that travel through your own network',
  'Work with your portfolio data from day one',
];

function ListDotIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 15C3.35775 15 0 11.6423 0 7.5C0 3.35775 3.35775 0 7.5 0C11.6423 0 15 3.35775 15 7.5C15 11.6423 11.6423 15 7.5 15ZM6.75225 10.5L12.0548 5.19675L10.9943 4.13625L6.75225 8.379L4.6305 6.25725L3.57 7.31775L6.75225 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ViralHeader() {
  return (
    <header className="feature-header feature-align-header">
      <div className="feature-align-grid">
        <div className="feature-align-visual">
          <Image
            src="/scouter-feature2/feature2-image-1.png"
            alt="Signal intelligence dashboard"
            width={498}
            height={500}
            className="feature-align-image feature-align-image-desktop"
            priority
          />
          <Image
            src="/scouter-feature2/feature2-image-1.png"
            alt="Signal intelligence dashboard"
            width={342}
            height={386}
            className="feature-align-image feature-align-image-mobile"
            priority
          />
        </div>

        <div className="feature-align-copy">
          <span className="feature-align-badge">Scouter — VC Fit Matching</span>
          <h1>Turn your portfolio history into your sharpest sourcing edge</h1>
          <p>
            Go beyond a generic shortlist — surface the exact founders who match your thesis, your stage, and the people you already know.
          </p>
          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>
                <ListDotIcon />
                {benefit}
              </li>
            ))}
          </ul>
          <Link href="#" className="feature-align-action">
            Book a demo
            <RiArrowRightUpLongLine />
          </Link>
        </div>
      </div>
    </header>
  );
}
