import {
  RiAppleFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXLine,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const footerColumns = [
  {
    title: 'Solutions',
    links: ['Spend management', 'Approval automation', 'Treasury ops', 'Team collaboration'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Terms of service', 'Privacy policy', 'Cookie settings'],
  },
];

function SolarisMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <path d="M9.13 7.883 7.26 4.767 9.13 1.65h3.74l1.87 3.117H11L9.13 7.883Z" />
      <path d="m18.48 11-1.87-3.117h-3.74l1.87-3.116h3.74l1.87 3.116L18.48 11Z" />
      <path d="M14.74 17.233h3.74l1.87-3.116L18.48 11h-3.74l1.87 3.117-1.87 3.116Z" />
      <path d="M7.26 17.233H11l1.87-3.116 1.87 3.116-1.87 3.117H9.13l-1.87-3.117Z" />
      <path d="M3.52 11h3.74L5.39 7.883l1.87-3.116H3.52L1.65 7.883 3.52 11Z" />
      <path d="m3.52 11-1.87 3.117 1.87 3.116h3.74l1.87-3.116H5.39L3.52 11Z" />
    </svg>
  );
}

export default function GiftWorkflowsFooter() {
  return (
    <footer className="gift-duplicate-footer">
      <div className="gift-duplicate-footer-inner">
        <div className="gift-footer-main">
          <Link href="/gift-workflows-duplicate-2" className="gift-footer-brand">
            <SolarisMark />
            <span>Solaris <small>™</small></span>
          </Link>

          <div className="gift-footer-columns">
            {footerColumns.map((column) => (
              <section key={column.title}>
                <h3>{column.title}</h3>
                {column.links.map((label) => <Link href="#" key={label}>{label}</Link>)}
              </section>
            ))}
          </div>

          <Link href="#" className="gift-footer-app-store" aria-label="Download on the App Store">
            <RiAppleFill />
            <span><small>Download on the</small><b>App Store</b></span>
          </Link>
        </div>

        <div className="gift-footer-art">
          <Image
            src="/gift-footer-landscape.png"
            alt="A gift connecting dark and bright worlds"
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
            <small>2025 AlignUI © All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
