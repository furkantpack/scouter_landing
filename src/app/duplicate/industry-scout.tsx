'use client';

import { useEffect, useState } from 'react';

export type IndustryScoutItem = {
  name: string;
  tone: 'rose' | 'blue' | 'mint' | 'peach' | 'yellow' | 'cyan' | 'lilac' | 'pink' | 'green';
  task: string;
  action: string;
  person: string;
  role: string;
  company: string;
  deadline: string;
  timing?: string;
  founderCount?: number;
  labels?: string[];
  image: string;
};

const defaultIndustries = [
  {
    name: 'Retail',
    tone: 'rose',
    task: 'customer moment scout',
    action: 'finds high-intent shoppers before they leave',
    person: 'Olivia Harris',
    role: 'Customer Experience Lead',
    company: 'Shopify',
    deadline: 'before Friday.',
    image: '/team/emma-wright.png',
  },
  {
    name: 'Technology',
    tone: 'blue',
    task: 'product signal scout',
    action: 'turns feature requests into a ranked roadmap',
    person: 'Ethan Cole',
    role: 'VP of Product',
    company: 'Linear',
    deadline: 'for the next sprint.',
    image: '/team/james-turner.png',
  },
  {
    name: 'Finance',
    tone: 'mint',
    task: 'risk review scout',
    action: 'flags unusual activity and prepares the evidence',
    person: 'Maya Lewis',
    role: 'Risk Operations Director',
    company: 'Stripe',
    deadline: 'before the audit.',
    image: '/team/emma-wright.png',
  },
  {
    name: 'Real Estate',
    tone: 'peach',
    task: 'market analyst',
    action: 'compares listing prices in target neighborhoods',
    person: 'Alex Morgan',
    role: 'Head of Acquisitions',
    company: 'Compass',
    deadline: 'next Monday.',
    image: '/team/james-turner.png',
  },
  {
    name: 'Manufacturing',
    tone: 'yellow',
    task: 'production scout',
    action: 'spots bottlenecks before they slow the line',
    person: 'Daniel Kim',
    role: 'Operations Manager',
    company: 'Siemens',
    deadline: 'before shift change.',
    image: '/team/james-turner.png',
  },
  {
    name: 'Logistics',
    tone: 'cyan',
    task: 'route planning scout',
    action: 'reroutes delayed shipments around live exceptions',
    person: 'Sofia Reyes',
    role: 'Logistics Director',
    company: 'Flexport',
    deadline: 'in real time.',
    image: '/team/emma-wright.png',
  },
  {
    name: 'Media & Entertainment',
    tone: 'lilac',
    task: 'audience insight scout',
    action: 'surfaces the stories your audience wants next',
    person: 'Noah Williams',
    role: 'Content Strategy Lead',
    company: 'Spotify',
    deadline: 'for this week.',
    image: '/team/james-turner.png',
  },
  {
    name: 'Hospitality',
    tone: 'pink',
    task: 'guest experience scout',
    action: 'personalizes every stay from arrival to checkout',
    person: 'Emily Carter',
    role: 'Guest Experience Director',
    company: 'Marriott',
    deadline: 'before check-in.',
    image: '/team/emma-wright.png',
  },
  {
    name: 'E-commerce',
    tone: 'green',
    task: 'growth opportunity scout',
    action: 'builds the next best offer for every customer',
    person: 'Lucas Martin',
    role: 'Growth Lead',
    company: 'Klaviyo',
    deadline: 'for the next campaign.',
    image: '/team/james-turner.png',
  },
] satisfies IndustryScoutItem[];

type IndustryScoutProps = {
  industries?: IndustryScoutItem[];
};

function SignalLabelIcon({ index }: { index: number }) {
  if (index === 1) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 7v5l3 2" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 9.75 8.6 4 9l4.4 3.8L7 18.5l5-3 5 3-1.4-5.7L20 9l-5.75-.4L12 3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19V8.5L12 4l8 4.5V19" />
      <path d="M8 19v-7h8v7" />
      <path d="M10 9h4" />
    </svg>
  );
}

export default function IndustryScout({ industries = defaultIndustries }: IndustryScoutProps) {
  const [activeIndex, setActiveIndex] = useState(3);
  const active = industries[activeIndex];
  const timing = active.timing ?? active.deadline;
  const labels = active.labels ?? [active.name, active.company, active.deadline.replace(/\.$/, '')];
  const founderCount = active.founderCount ?? 12;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, industries.length]);

  return (
    <section className={`industry-scout industry-scout-${active.tone}`}>
      <div className="industry-scout-heading">
        <span>SCOUT FOR EVERY TEAM</span>
        <h2>Built across industries</h2>
        <p>
          From fast-moving teams to highly regulated environments, Scout helps organizations build systems
          that match how their industry operates.
        </p>
      </div>

      <div className="industry-scout-shell">
        <nav className="industry-tabs" aria-label="Industries">
          {industries.map((industry, index) => (
            <button
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              aria-pressed={index === activeIndex}
              key={industry.name}
              onClick={() => setActiveIndex(index)}
            >
              <span>{industry.name}</span>
              {index === activeIndex && <i aria-hidden="true" />}
            </button>
          ))}
        </nav>

        <div className="industry-scout-stage" key={active.name}>
          <div className="industry-action-copy">
            <span className="industry-eyebrow">NEXT ACTION</span>
            <p>
              Create <strong className="industry-highlight-task">{active.task}</strong>
            </p>
            <p>
              that <strong className="industry-highlight-action">{active.action}</strong>
            </p>
            <p><strong className="industry-highlight-time">{timing}</strong></p>
          </div>

          <div className="industry-contact-card">
            <div className="industry-founder-count">
              <strong>{founderCount}</strong>
              <span>potential founders found</span>
            </div>
            <div className="industry-label-cloud" aria-label={`${active.name} signal labels`}>
              {labels.map((label, index) => (
                <span className={`industry-label-chip industry-label-chip-${(index % 3) + 1}`} key={label}>
                  <i><SignalLabelIcon index={index} /></i>
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="industry-scout-controls">
            <button type="button" className="industry-scout-button">
              <span className="industry-scout-button-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32">
                  <path d="M22.9 8.2A10 10 0 1 0 26 15.5" />
                  <path d="M25.7 4.6l1.1 3.2 3.2 1.1-3.2 1.1-1.1 3.2-1.1-3.2-3.2-1.1 3.2-1.1 1.1-3.2Z" />
                </svg>
              </span>
              Find a founder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
