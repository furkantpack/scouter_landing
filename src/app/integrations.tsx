import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const logos = [
  { name: 'Envato', src: 'https://alignui.com/images/blocks/integrations-logo-envato.svg', className: 'integration-envato' },
  { name: 'Notion', src: 'https://alignui.com/images/blocks/integrations-logo-notion.svg', className: 'integration-notion' },
  { name: 'Linear', src: 'https://alignui.com/images/blocks/integrations-logo-linear.svg', className: 'integration-linear' },
  { name: 'Dropbox', src: 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg', className: 'integration-dropbox' },
  { name: 'Monday', src: 'https://alignui.com/images/blocks/integrations-logo-monday.svg', className: 'integration-monday' },
  { name: 'ClickUp', src: 'https://alignui.com/images/blocks/integrations-logo-clickup.svg', className: 'integration-clickup' },
  { name: 'Zoom', src: 'https://alignui.com/images/blocks/integrations-logo-zoom.svg', className: 'integration-zoom' },
];

export default function Integrations() {
  return (
    <section className="integrations-section">
      <div className="integrations-content">
        <header className="integrations-header">
          <div className="integrations-heading">
            <div className="integrations-badge"><span aria-hidden="true" />Apps &amp; Integrations</div>
            <h2>Smart integrations for better workflows</h2>
          </div>
          <div className="integrations-description">
            <p>
              Connect your favorite apps to boost productivity and keep
              <br className="desktop-break" /> <strong>every workflow in sync.</strong>
            </p>
            <Link href="/">
              Explore all integrations
              <RiArrowRightUpLongLine />
            </Link>
          </div>
        </header>

        <div className="integration-map" aria-label="Supported integrations">
          <div className="integration-orbit integration-orbit-outer">
            <div className="integration-orbit-spinner" />
          </div>
          <div className="integration-orbit integration-orbit-inner">
            <div className="integration-orbit-spinner integration-orbit-spinner-fast" />
          </div>

          {logos.map((logo) => (
            <div className={`integration-logo ${logo.className}`} key={logo.name}>
              <Image src={logo.src} alt={logo.name} width={40} height={40} />
            </div>
          ))}

          <div className="integration-logo integration-brand">
            <Image
              src="https://alignui.com/images/blocks/integrations-logo-2.svg"
              alt="Brand"
              width={56}
              height={56}
            />
          </div>
        </div>

        <p className="integrations-caption">
          No hidden costs, no limits, just seamless integrations
          <br className="desktop-break" /> that grow with you
        </p>
      </div>
    </section>
  );
}
