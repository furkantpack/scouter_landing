import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiRocket2Fill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Scouter overview', href: '/' },
      { label: 'Founder Success Score', href: '/founder-score' },
      { label: 'VC Fit Matching', href: '/vc-fit-match' },
      { label: 'Real-Time Alerts', href: '/real-time-alert' },
    ],
  },
  {
    title: 'Use cases',
    links: [
      { label: 'Founder sourcing', href: '/' },
      { label: 'Diligence workflows', href: '/founder-score' },
      { label: 'Warm intros', href: '/vc-fit-match' },
      { label: 'Portfolio tracking', href: '/real-time-alert' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Book a demo', href: '/demo-request' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/demo-request' },
    ],
  },
];

export default function GiftWorkflowsFooter() {
  return (
    <footer className="gift-duplicate-footer">
      <div className="gift-duplicate-footer-inner">
        <div className="gift-footer-main">
          <Link href="/" className="gift-footer-brand">
            <Image src="/scouter/scouter-logo-new.png" alt="Scouter" width={178} height={40} className="gift-footer-logo-image" />
          </Link>

          <div className="gift-footer-columns">
            {footerColumns.map((column) => (
              <section key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}
              </section>
            ))}
          </div>

          <Link href="/demo-request" className="gift-footer-app-store" aria-label="Book a Scouter demo">
            <RiRocket2Fill />
            <span><small>Founder signal</small><b>Book demo</b></span>
          </Link>
        </div>

        <div className="gift-footer-art">
          <Image
            src="/scouter/scouter-footer-art.png"
            alt="A landscape representing founder signals becoming an investment workflow"
            width={1672}
            height={941}
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="gift-footer-bottom">
            <div className="gift-footer-socials">
              <Link href="#" aria-label="Facebook"><RiFacebookCircleFill /></Link>
              <Link href="#" aria-label="Instagram"><RiInstagramFill /></Link>
              <Link href="#" aria-label="X"><RiTwitterXLine /></Link>
            </div>
            <small>2026 Scouter © Founder intelligence for venture teams.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
