'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  'Detect the right moment automatically',
  'Personalize every touch with AI',
  'Send without leaving the platform',
  'Track replies and meetings booked',
];

type FeatureHeaderProps = {
  badgeText?: string;
  badgeLogo?: {
    src: string;
    alt: string;
  };
  title?: string;
  description?: string;
  benefits?: string[];
  actionLabel?: string;
};

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

export default function FeatureHeader({
  badgeText,
  badgeLogo = {
    src: '/brand/gently-personal-logo.png',
    alt: 'Gently Personal',
  },
  title = 'Turn cold signals into warm conversations',
  description = 'Monitor every prospect on your list, catch the perfect moment, and send a personalized physical touch that gets you the meeting.',
  benefits: benefitItems = benefits,
  actionLabel = 'Book a demo',
}: FeatureHeaderProps) {
  return (
    <header className="feature-header feature-align-header">
      <div className="feature-align-grid">
        <div className="feature-align-visual">
          <Image
            src="/personal-ai-header.png"
            alt="AI-powered outbound signal dashboard"
            width={1405}
            height={1119}
            className="feature-align-image feature-align-image-desktop"
            priority
          />
          <Image
            src="/personal-ai-header.png"
            alt="AI-powered outbound signal dashboard"
            width={1405}
            height={1119}
            className="feature-align-image feature-align-image-mobile"
            priority
          />
        </div>

        <div className="feature-align-copy">
          <span className="feature-align-badge feature-personal-brand">
            {badgeText ? (
              badgeText
            ) : (
              <Image
                src={badgeLogo.src}
                alt={badgeLogo.alt}
                width={2172}
                height={724}
                className="feature-personal-brand-image"
              />
            )}
          </span>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            {benefitItems.map((benefit) => (
              <li key={benefit}>
                <ListDotIcon />
                {benefit}
              </li>
            ))}
          </ul>
          <Link href="#" className="feature-align-action">
            {actionLabel}
            <RiArrowRightUpLongLine />
          </Link>
        </div>
      </div>
    </header>
  );
}
