import type { CSSProperties } from 'react';

type ScrollFeatureTone = 'blue' | 'lilac' | 'peach' | 'mint';

export type ScrollFeatureCard = {
  title: string;
  description: string;
  tone: ScrollFeatureTone;
  videoSrc?: string;
};

const defaultCards = [
  {
    title: 'AI-native workspace',
    description: 'A workspace built for AI from the ground up - not an afterthought.',
    tone: 'blue',
  },
  {
    title: 'Real-time collaboration',
    description: 'Work and build together - not across docs and tickets.',
    tone: 'lilac',
  },
  {
    title: 'Connected knowledge',
    description: 'Keep the context your team needs close, current, and easy to use.',
    tone: 'peach',
  },
  {
    title: 'Automated workflows',
    description: 'Turn repeatable work into reliable systems that move on their own.',
    tone: 'mint',
  },
] satisfies ScrollFeatureCard[];

type ScrollFeatureCardsProps = {
  cards?: ScrollFeatureCard[];
};

export default function ScrollFeatureCards({ cards = defaultCards }: ScrollFeatureCardsProps) {
  return (
    <section className="scroll-feature-section" aria-label="Product features">
      <div className="scroll-feature-stack">
        {cards.map((card, index) => (
          <article
            className={`scroll-feature-card scroll-feature-${card.tone}`}
            key={card.title}
            style={{ '--card-index': index } as CSSProperties}
          >
            <h2 className="scroll-feature-tab">{card.title}</h2>
            <p>{card.description}</p>
            <div className="scroll-feature-media" aria-hidden="true">
              {card.videoSrc ? (
                <video autoPlay loop muted playsInline preload="metadata">
                  <source src={card.videoSrc} type="video/mp4" />
                </video>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
