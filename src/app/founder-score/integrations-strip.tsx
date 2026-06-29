import { RiArrowRightUpLongLine } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';

const integrations = [
  ['Dropbox', 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg'],
  ['Monday', 'https://alignui.com/images/blocks/integrations-logo-monday.svg'],
  ['ClickUp', 'https://alignui.com/images/blocks/integrations-logo-clickup.svg'],
  ['Slack', 'https://alignui.com/images/blocks/integrations-logo-slack.svg'],
  ['Zoom', 'https://alignui.com/images/blocks/integrations-logo-zoom.svg'],
  ['Linear', 'https://alignui.com/images/blocks/integrations-logo-linear.svg'],
  ['Envato', 'https://alignui.com/images/blocks/integrations-logo-envato.svg'],
  ['Notion', 'https://alignui.com/images/blocks/integrations-logo-notion.svg'],
  ['Workspace', 'https://alignui.com/images/blocks/integrations-logo-2.svg'],
  ['Dropbox', 'https://alignui.com/images/blocks/integrations-logo-dropbox.svg'],
  ['Slack', 'https://alignui.com/images/blocks/integrations-logo-slack.svg'],
  ['ClickUp', 'https://alignui.com/images/blocks/integrations-logo-clickup.svg'],
];

export default function PersonalIntegrationsStrip() {
  return (
    <section className="personal-integrations-strip" aria-labelledby="personal-integrations-title">
      <header className="personal-integrations-strip-header">
        <span className="personal-integrations-strip-badge"><i />Apps &amp; Integrations</span>
        <h2 id="personal-integrations-title">Seamless integrations, sharper deal flow</h2>
      </header>

      <div className="personal-integrations-strip-scroll" aria-label="Available integrations">
        <div className="personal-integrations-strip-track">
          {integrations.map(([name, src], index) => (
            <div className="personal-integration-tile" key={`${name}-${index}`}>
              <Image src={src} alt={name} width={58} height={58} loading="eager" />
            </div>
          ))}
        </div>
      </div>

      <div className="personal-integrations-strip-footer">
        <p>No extra cost, no limits — integrations that grow<br />with your sourcing workflow.</p>
        <Link href="#">Explore all integrations <RiArrowRightUpLongLine /></Link>
      </div>
    </section>
  );
}
