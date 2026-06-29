'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Detect company-level signals automatically',
  'Reach entire teams with one coordinated send',
  'Personalize by company context and culture',
  'Track engagement across the full account',
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

export default function TeamTouchHeader() {
  return (
    <header className="feature-header feature-align-header">
      <div className="feature-align-grid">
        <div className="feature-align-visual">
          <Image
            src="/team-touch-header.png"
            alt="Account signal intelligence dashboard"
            width={1296}
            height={1214}
            className="feature-align-image feature-align-image-desktop"
            priority
          />
          <Image
            src="/team-touch-header.png"
            alt="Account signal intelligence dashboard"
            width={1296}
            height={1214}
            className="feature-align-image feature-align-image-mobile"
            priority
          />
        </div>

        <div className="feature-align-copy">
          <span className="feature-align-badge feature-personal-brand">
            <Image
              src="/brand/gently-personal-logo.png"
              alt="Gently"
              width={2172}
              height={724}
              className="feature-personal-brand-image"
            />
          </span>
          <h1>Turn company moments into pipeline opportunities</h1>
          <p>
            Monitor your target accounts for funding rounds, award wins, and major milestones — then reach the whole team with a perfectly timed, meaningful touch.
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
