'use client';

import { useEffect, useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowRightUpLongLine,
  RiCloseFill,
  RiFlashlightFill,
  RiLayoutGridLine,
  RiMenu3Fill,
  RiNotification3Line,
  RiPulseFill,
  RiSearchLine,
  RiTaskLine,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const nav = [
  { label: 'Features', menu: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/demo-request' },
];

const quickLinks = [
  { label: 'Founder Score', href: '/founder-score', icon: RiLayoutGridLine },
  { label: 'VC Fit Match', href: '/vc-fit-match', icon: RiPulseFill },
  { label: 'Real-Time Alert', href: '/real-time-alert', icon: RiTaskLine },
];

const toolLinks = [
  { label: 'Founder Success Score', href: '/founder-score' },
  { label: 'VC Fit Matching', href: '/vc-fit-match' },
  { label: 'Real-Time Alerts', href: '/real-time-alert' },
  { label: 'Scouter overview', href: '/' },
];

const supportLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Book a demo', href: '/demo-request' },
  { label: 'Founder intelligence audit', href: '/demo-request' },
];

function Logo() {
  return (
    <svg className="site-logo" width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M14 9.333 10.033 7V2.333L14 0l3.967 2.333V7L14 9.333Z" />
      <path d="m21.933 14-3.966-2.333V7l3.966-2.333L25.9 7v4.667L21.933 14Z" />
      <path d="M17.967 21v-4.667L21.933 14l3.967 2.333V21l-3.967 2.333L17.967 21Z" />
      <path d="M10.033 21 14 18.667 17.967 21v4.667L14 28l-3.967-2.333V21Z" />
      <path d="m6.067 14 3.966 2.333V21l-3.966 2.333L2.1 21v-4.667L6.067 14Z" />
      <path d="m6.067 14 3.966-2.333V7L6.067 4.667 2.1 7v4.667L6.067 14Z" />
    </svg>
  );
}

function MenuLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="mega-text-link">
      {children}
      <RiArrowRightUpLongLine />
    </Link>
  );
}

function MegaMenu() {
  return (
    <div className="mega-menu">
      <section className="mega-quick">
        <div className="mega-mobile-label">Quick access hub</div>
        <div className="mega-intro">
          <span><RiFlashlightFill /></span>
          <div>
            <strong>Scouter feature hub</strong>
            <p>Move from founder signal to investment action.</p>
          </div>
        </div>
        <div className="quick-actions">
          {quickLinks.map(({ label, href, icon: Icon }) => (
            <Link href={href} key={label}>
              <Icon />
              {label}
            </Link>
          ))}
        </div>
        <small>Scouter · Founder intelligence for venture teams</small>
      </section>

      <section className="mega-column">
        <div className="mega-label">Features</div>
        <div className="mega-links">
          {toolLinks.map((link) => <MenuLink href={link.href} key={link.label}>{link.label}</MenuLink>)}
        </div>
      </section>

      <section className="mega-column">
        <div className="mega-label">Plan</div>
        <div className="mega-links">
          {supportLinks.map((link) => <MenuLink href={link.href} key={link.label}>{link.label}</MenuLink>)}
        </div>
      </section>
    </div>
  );
}

type NavigationProps = {
  logoSrc?: string;
  logoAlt?: string;
  homeHref?: string;
};

export default function Navigation({ logoSrc, logoAlt = 'Scouter', homeHref = '/' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <div className="navigation-wrap">
      <header className="site-navigation">
        <div className="navigation-main">
          <Link href={homeHref} className="logo-link" aria-label={`${logoAlt} home`} onClick={closeMenu}>
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={178}
                height={40}
                className="site-logo-image"
                priority
              />
            ) : (
              <Logo />
            )}
          </Link>

          <nav className={`primary-nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Primary">
            <ul>
              {nav.map((item) => (
                <li key={item.label} className={item.menu ? 'has-mega-menu' : ''}>
                  {item.menu ? (
                    <button
                      type="button"
                      className={isSolutionsOpen ? 'solutions-open' : ''}
                      aria-expanded={isSolutionsOpen}
                      onClick={() => setIsSolutionsOpen((open) => !open)}
                    >
                      {item.label}
                      <RiArrowDownSLine />
                    </button>
                  ) : (
                    <Link href={item.href ?? '/'} onClick={closeMenu}>{item.label}</Link>
                  )}
                  {item.menu && (
                    <div className={`mega-menu-shell ${isSolutionsOpen ? 'mobile-mega-open' : ''}`}>
                      <MegaMenu />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="navigation-actions">
          <button type="button" className="icon-button" aria-label="Search"><RiSearchLine /></button>
          <button type="button" className="icon-button" aria-label="Notifications"><RiNotification3Line /></button>
          <div className={`get-started-wrap ${isMenuOpen ? 'action-open' : ''}`}>
            <Link href="/demo-request" className="get-started" onClick={closeMenu}>Get started</Link>
          </div>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <RiCloseFill /> : <RiMenu3Fill />}
        </button>
      </header>
    </div>
  );
}
