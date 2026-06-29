import FeatureHeader from '../components/feature-header';
import Navigation from '../navigation';
import Link from 'next/link';
import ChatWorkflow from './chat-workflow';
import PersonalAIFooter from './footer';
import HowItWorks02 from './how-it-works-02';

export default function PersonalAIFeaturePage() {
  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="feature-page">
        <FeatureHeader
          badgeText="Real-Time Alert"
          title="Turn cold signals into warm conversations with founders"
          description="Monitor every founder on your list, catch the perfect moment, and get an alert the instant they're ready to talk."
          benefits={[
            'Detect the right moment automatically',
            'Score every signal with AI as it happens',
            'Get notified without leaving the platform',
            'Track outreach and meetings booked',
          ]}
        />
        <HowItWorks02 />
        <ChatWorkflow />
        <section className="gift-duplicate-cta" aria-labelledby="personal-ai-cta-title">
          <div className="gift-duplicate-cta-copy">
            <span>Scouter alerts</span>
            <h2 id="personal-ai-cta-title">Make every signal<br />a moment you didn&apos;t miss.</h2>
            <p>Turn scattered founder activity into a sourcing workflow built around your team.</p>
            <Link href="#" className="gift-duplicate-cta-action">Get started</Link>
          </div>
        </section>
      </main>
      <PersonalAIFooter />
    </>
  );
}
