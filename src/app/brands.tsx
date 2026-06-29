import Image from 'next/image';

type BrandVariant = 'logos' | 'scouterIcp';

const logos = [
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-1.svg',
    alt: 'Synergy',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-4.svg',
    alt: 'Apex',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-3.svg',
    alt: 'Horizon',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-2.svg',
    alt: 'Catalyst',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-5.svg',
    alt: 'Phoenix',
  },
  {
    src: 'https://alignui.com/images/blocks/brand-social-company-6.svg',
    alt: 'Pulse',
  },
];

const scouterIcpCards = [
  {
    icon: 'seedling',
    label: 'Pre-seed VCs',
    color: '#bde8c8',
  },
  {
    icon: 'user-star',
    label: 'Angel investors',
    color: '#dec3ef',
  },
  {
    icon: 'building-bank',
    label: 'Micro funds',
    color: '#bfd0f7',
  },
  {
    icon: 'briefcase',
    label: 'Family offices',
    color: '#ffc49b',
  },
  {
    icon: 'radar',
    label: 'Scout networks',
    color: '#efb5db',
  },
];

function TablerIcon({ name }: { name: string }) {
  if (name === 'user-star') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
        <path d="M17.8 20.8l-2.4 1.2l.5 -2.7l-2 -1.9l2.8 -.4l1.1 -2.5l1.2 2.5l2.7 .4l-2 1.9l.5 2.7z" />
      </svg>
    );
  }

  if (name === 'building-bank') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M4 10h16" />
        <path d="M5 6l7 -3l7 3" />
        <path d="M6 10v8" />
        <path d="M10 10v8" />
        <path d="M14 10v8" />
        <path d="M18 10v8" />
      </svg>
    );
  }

  if (name === 'briefcase') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 12v.01" />
        <path d="M3 13a20 20 0 0 0 18 0" />
      </svg>
    );
  }

  if (name === 'radar') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13 4a8 8 0 0 1 7 7" />
        <path d="M13 8a4 4 0 0 1 3 3" />
        <path d="M12 20a8 8 0 1 1 0 -16" />
        <path d="M12 12l8 8" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 20c0 -5 2 -9 7 -12" />
      <path d="M9 9c0 -3 2 -5 5 -5c.5 3 -.5 5 -3 6" />
      <path d="M7 20c0 -4 -1.5 -6.5 -5 -8c0 3 1.5 5 5 5" />
      <path d="M12 13c3 0 5 -1.5 6 -4c-3 -.5 -5 .5 -6 4" />
    </svg>
  );
}

export default function Brands({ variant = 'logos' }: { variant?: BrandVariant }) {
  const isScouterIcp = variant === 'scouterIcp';

  return (
    <section className={`brands-section${isScouterIcp ? ' scouter-icp-section' : ''}`}>
      <div className="brands-content">
        <header className="brands-header">
          <div className="brands-badge">
            <span aria-hidden="true" />
            {isScouterIcp ? 'Built for early-stage investors' : 'Brands & Social proof'}
          </div>
          <h2>
            {isScouterIcp
              ? 'Created for the people who invest before anyone else can'
              : 'Chosen by the world&rsquo;s most adaptive brands'}
          </h2>
        </header>

        {isScouterIcp ? (
          <div className="scouter-icp-grid">
            {scouterIcpCards.map((card) => (
              <article className="scouter-icp-card" key={card.label}>
                <span style={{ background: card.color }}>
                  <TablerIcon name={card.icon} />
                </span>
                <strong>{card.label}</strong>
              </article>
            ))}
          </div>
        ) : (
          <div className="brands-grid">
            {logos.map((logo) => (
              <div className="brand-card" key={logo.alt}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={106}
                  height={24}
                />
              </div>
            ))}
          </div>
        )}

        <p className="brands-caption">
          {isScouterIcp ? (
            'Start building trust by showing the people Scouter is made for.'
          ) : (
            <>
              Start building trust by showcasing the partners <br />
              <strong>that power your success.</strong>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
