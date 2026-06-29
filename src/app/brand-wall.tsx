import { RiArrowUpLine, RiChatSmile2Fill } from '@remixicon/react';
import Link from 'next/link';

const brands = [
  { name: 'Coralogix', tone: 'mint', story: true },
  { name: 'NetApp', tone: 'black' },
  { name: 'WIZ', tone: 'blue', story: true },
  { name: 'lyft', tone: 'pink', story: true },
  { name: 'tenable', tone: 'navy', story: true },
  { name: 'SiriusXM', tone: 'royal', story: true },
  { name: 'elastic', tone: 'multi' },
  { name: 'JUST EAT', tone: 'orange', story: true },
  { name: 'Own', tone: 'ring' },
  { name: 'DEMANDBASE', tone: 'navy', story: true },
  { name: 'riskified', tone: 'dark' },
  { name: 'VILLAGE ROADSHOW', tone: 'black' },
  { name: 'Holland & Barrett', tone: 'green', story: true },
  { name: 'FORTER', tone: 'royal', story: true },
  { name: 'The New York Times', tone: 'black' },
  { name: 'CCC', tone: 'sky' },
  { name: 'bazaarvoice', tone: 'navy' },
  { name: 'WINDWARD', tone: 'slate' },
];

export default function BrandWall() {
  return (
    <section className="brand-wall-section">
      <div className="brand-wall-visual" aria-hidden="true" />

      <div className="brand-wall-content">
        <div className="brand-wall-grid">
          {brands.map((brand) => (
            <div className="brand-wall-item" key={brand.name}>
              <div className={`brand-wordmark brand-tone-${brand.tone}`}>
                <span className="brand-symbol" aria-hidden="true" />
                <span>{brand.name}</span>
              </div>
              {brand.story && (
                <span className="brand-story" aria-label={`${brand.name} customer story`}>
                  <RiChatSmile2Fill />
                </span>
              )}
            </div>
          ))}
        </div>

        <Link href="/" className="brand-wall-more">View more</Link>
        <Link href="#top" className="brand-wall-top" aria-label="Back to top">
          <RiArrowUpLine />
        </Link>
      </div>
    </section>
  );
}
