import {
  RiArrowRightUpLongLine,
  RiCustomerServiceLine,
  RiMap2Line,
} from '@remixicon/react';
import Link from 'next/link';

const contactInfo = [
  { icon: RiCustomerServiceLine, text: '123-456-7890' },
  { icon: RiMap2Line, text: '123 Sakura Street, New York City, NY, USA' },
];

const footerLinks = [
  { label: 'Works', href: '/' },
  { label: 'Services', href: '/features/personal-ai' },
  { label: 'About', href: '/' },
];

export default function DuplicateTwoFooter() {
  return (
    <footer className="duplicate-two-footer">
      <div className="duplicate-two-footer-shell">
        <div className="duplicate-two-footer-hero">
          <p>HAVE SOMETHING IN MIND?</p>
          <h2>
            Reach out
            <span>today</span>
          </h2>
          <Link href="/" className="duplicate-two-footer-call">
            Schedule a call
            <RiArrowRightUpLongLine />
          </Link>
        </div>

        <div className="duplicate-two-footer-divider" />

        <div className="duplicate-two-footer-info">
          <div className="duplicate-two-footer-contact">
            <strong>Catalyst</strong>
            {contactInfo.map(({ icon: Icon, text }) => (
              <div key={text}>
                <Icon />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <nav className="duplicate-two-footer-links" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
                <RiArrowRightUpLongLine />
              </Link>
            ))}
          </nav>
        </div>

        <div className="duplicate-two-footer-divider" />

        <div className="duplicate-two-footer-bottom">
          <span>2026 Catalyst © All rights reserved.</span>
          <Link href="#top">Back to top</Link>
        </div>
      </div>
    </footer>
  );
}
