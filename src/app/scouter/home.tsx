import {
  RiArrowRightLine,
  RiRocket2Fill,
  RiSearchLine,
} from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import Brands from '../brands';
import EnterpriseScale from '../enterprise-scale';
import Navigation from '../navigation';
import FloatingPrompt from '../duplicate/floating-prompt';
import IndustryScout, { type IndustryScoutItem } from '../duplicate/industry-scout';
import ScrollFeatureCards, { type ScrollFeatureCard } from '../duplicate/scroll-feature-cards';
import GiftWorkflowsFooter from './footer';
import HowItWorks02 from './how-it-works-02';
import SwitchBanner from './switch-banner';
import PerformanceMetrics from './performance-metrics';

const scouterFeatureCards: ScrollFeatureCard[] = [
  {
    title: 'AI-native scoring',
    description: 'A scoring engine built for founder signal from the ground up - not a company database with a filter on top.',
    tone: 'blue',
    videoSrc: '/scouter/ai-native-scoring.mp4',
  },
  {
    title: 'Real-time monitoring',
    description: "Watch career moves and signals as they happen - not weeks later in someone else's update.",
    tone: 'lilac',
    videoSrc: '/scouter/real-time-monitoring.mp4',
  },
  {
    title: 'Connected context',
    description: "Keep every founder's history, score, and connection path close, current, and easy to act on.",
    tone: 'peach',
    videoSrc: '/scouter/connected-context.mp4',
  },
  {
    title: 'Automated alerts',
    description: 'Turn scattered signals into a system that surfaces the right founder - on its own, before the round.',
    tone: 'mint',
    videoSrc: '/scouter/automated-alerts.mp4',
  },
];

const scouterSignalTabs: IndustryScoutItem[] = [
  {
    name: 'Big tech alumni',
    tone: 'mint',
    task: 'senior-exit detector',
    action: 'flags engineering leaders leaving FAANG-tier companies',
    person: 'Aylin Demir',
    role: 'engineering leader, ex-FAANG',
    company: 'Lumen Robotics',
    deadline: 'within 48 hours of departure.',
    timing: 'within 48 hours of departure',
    founderCount: 41,
    labels: ['Robotics', '2 mo build'],
    image: '/team/emma-wright.png',
  },
  {
    name: 'Top university grads',
    tone: 'blue',
    task: 'technical-founder filter',
    action: 'surfaces STEM grads from top-ranked schools building in your thesis vertical',
    person: 'Kwame Osei',
    role: 'technical founder, STEM grad',
    company: 'Driftwell',
    deadline: 'before they post a job listing.',
    timing: 'before they post a job listing',
    founderCount: 28,
    labels: ['Health AI', 'Top STEM'],
    image: '/team/james-turner.png',
  },
  {
    name: 'Serial founders',
    tone: 'lilac',
    task: 'repeat-builder tracker',
    action: 'flags founders starting a new company within 18 months of their last exit',
    person: 'Lena Brandt',
    role: 'serial founder, recent exit',
    company: 'Northfield AI',
    deadline: 'the week they register the entity.',
    timing: 'the week they register the entity',
    founderCount: 17,
    labels: ['Enterprise', '18 mo'],
    image: '/team/emma-wright.png',
  },
  {
    name: 'Prior exits',
    tone: 'peach',
    task: 'prior-exit detector',
    action: 'flags second-time founders the moment they file',
    person: 'Marcus Webb',
    role: 'second-time founder, ex-Stripe',
    company: 'Anchor Robotics',
    deadline: 'before the round opens.',
    timing: 'before the round opens',
    founderCount: 23,
    labels: ['Deep tech', 'Exit verified'],
    image: '/team/james-turner.png',
  },
  {
    name: 'Stealth filings',
    tone: 'cyan',
    task: 'stealth-mode scout',
    action: 'surfaces new Delaware filings with no public site or team page yet',
    person: 'Priya Nair',
    role: 'stealth founder, new filing',
    company: 'Stillwater Capital',
    deadline: 'the day the entity appears.',
    timing: 'the day the entity appears',
    founderCount: 36,
    labels: ['Stealth', 'DE filing'],
    image: '/team/emma-wright.png',
  },
  {
    name: 'Layoff lists',
    tone: 'yellow',
    task: 'layoff-to-founder bridge',
    action: "flags senior people from recent layoff rounds who haven't taken a new job in 60+ days",
    person: 'Tomas Reyes',
    role: 'senior operator, recent layoff',
    company: 'Birchline Ventures',
    deadline: "while they're still deciding.",
    timing: "while they're still deciding",
    founderCount: 54,
    labels: ['Infra', '60+ days'],
    image: '/team/james-turner.png',
  },
];

const scouterHeroPills = [
  { label: 'stealth mode', className: 'scouter-hero-pill-stealth', icon: RiSearchLine },
  { label: 'before anyone else', className: 'scouter-hero-pill-early', icon: RiRocket2Fill },
];

const scouterEnterpriseContent = {
  badge: 'Carta, BLS, and Crunchbase cohort data',
  title: (
    <>
      The cost of discovering<br />
      a founder late
    </>
  ),
  cards: {
    uptime: {
      title: 'Every month you wait, you pay more for less',
      body: (
        <>
          Pre-seed valuations rise about 2% per month. A $1M check can mean 20%
          ownership at Month 0, 6.25% at Month 12, and 2% by Month 24.
          Same check. Same founder. 10x less equity.
        </>
      ),
      status: 'Carta cohort tracking',
      value: '2023-2025',
      periodStart: '$5M pre-seed',
      periodEnd: '$49M Series A',
      visualImage: '/scouter/enterprise/late-discovery-1.png',
    },
    speed: {
      title: 'Every month you wait, the door gets narrower',
      body: (
        <>
          Seed-to-Series A conversion has been cut in half: 30.6% for the 2018
          cohort, 15.4% for 2022, and about 16% for 2024.
        </>
      ),
      metrics: [
        { value: '30.6%', label: '2018 seed cohort reached Series A' },
        { value: '15.4%', label: '2022 cohort reached Series A' },
        { value: '16%', label: '2024 cohort and falling' },
      ],
      visualImage: '/scouter/enterprise/late-discovery-2.png',
    },
    admin: {
      title: 'Every month you wait, your founder moves closer to death',
      body: (
        <>
          BLS data shows 20% of startups are gone by Month 12, 30% by Month 24,
          and 50% by Month 60. Tech startups fail faster: 63% within 5 years.
        </>
      ),
      visualImage: '/scouter/enterprise/late-discovery-3.png',
      chips: {
        session: 'Month 12: 20% gone',
        ip: 'Month 24: 30% gone',
        user: '1.7% / month',
        auth: <>Founder<br />survival</>,
        permissions: 'BLS data',
        audit: '63% tech failure',
      },
    },
  },
};

export default function GiftWorkflowsDuplicatePage() {
  const [stealthPill, earlyPill] = scouterHeroPills;
  const StealthIcon = stealthPill.icon;
  const EarlyIcon = earlyPill.icon;

  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="gift-workflows-page scouter-page">
        <header className="scouter-crm-hero">
          <div className="scouter-hero-card">
            <Image
              src="/scouter/scouter-hero-corner-focused.png"
              alt=""
              width={720}
              height={720}
              className="scouter-hero-corner-image"
              aria-hidden="true"
              priority
            />
            <div className="scouter-hero-copy">
              <h1>
                <span className="scouter-hero-line">
                  Discover founders in{' '}
                  <span className={`scouter-hero-pill ${stealthPill.className}`}>
                    <StealthIcon />
                    {stealthPill.label}
                  </span>
                </span>{' '}
                <span className="scouter-hero-line">
                  <span className={`scouter-hero-pill ${earlyPill.className}`}>
                    <EarlyIcon />
                    {earlyPill.label}
                  </span>{' '}
                  knows they exist.
                </span>
              </h1>
              <p className="scouter-hero-description">
                We find great founders the moment they decide to build.
                <span>Meet your next investment on day one - before the deck, before the round, before anyone else.</span>
              </p>
              <Link href="#" className="scouter-try-button">
                Book a demo
                <RiArrowRightLine />
              </Link>
            </div>
          </div>
        </header>
        <Brands variant="scouterIcp" />
        <section className="scouter-signal-intro" aria-labelledby="scouter-signal-intro-title">
          <div className="scouter-signal-intro-inner">
            <div className="brands-badge">
              <span aria-hidden="true" />
              Built for early-stage investors
            </div>
            <h2 id="scouter-signal-intro-title">
              One system that watches, scores, and acts on every founder signal
            </h2>
            <p>
              Scouter monitors career moves, exits, and stealth signals the moment they happen,
              scores every founder against real success patterns, keeps the full context close at
              hand, and alerts you before anyone else even knows there&apos;s a round to chase.
            </p>
          </div>
        </section>
        <ScrollFeatureCards cards={scouterFeatureCards} />
        <IndustryScout industries={scouterSignalTabs} />
        <EnterpriseScale content={scouterEnterpriseContent} />
        <PerformanceMetrics />
        <SwitchBanner />
        <HowItWorks02 />
        <section className="gift-duplicate-cta" aria-labelledby="gift-duplicate-cta-title">
          <div className="gift-duplicate-cta-copy">
            <span>Scouter scoring</span>
            <h2 id="gift-duplicate-cta-title">Make every signal<br />count.</h2>
            <p>Turn scattered career data into an investment workflow built around your team.</p>
            <Link href="#" className="gift-duplicate-cta-action">Get started</Link>
          </div>
        </section>
        <GiftWorkflowsFooter />
      </main>
      <FloatingPrompt />
    </>
  );
}
