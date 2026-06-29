import Navigation from '../navigation';
import Link from 'next/link';
import ChatWorkflow from './chat-workflow';
import PersonalAIFooter from './footer';
import HowItWorks02 from './how-it-works-02';
import PersonalIntegrationsStrip from './integrations-strip';
import TeamTouchHeader from './team-touch-header';
import CustomerStories from '../scouter/customer-stories';

export default function PersonalAIFeaturePage() {
  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="feature-page">
        <TeamTouchHeader />
        <CustomerStories />
        <HowItWorks02 />
        <ChatWorkflow />
        <PersonalIntegrationsStrip />
        <section className="gift-duplicate-cta" aria-labelledby="personal-ai-cta-title">
          <div className="gift-duplicate-cta-copy">
            <span>Scouter scoring</span>
            <h2 id="personal-ai-cta-title">Turn every signal into a meaningful decision.</h2>
            <p>Turn scattered career data into an investment workflow built around your team.</p>
            <Link href="#" className="gift-duplicate-cta-action">Get started</Link>
          </div>
        </section>
      </main>
      <PersonalAIFooter />
    </>
  );
}
