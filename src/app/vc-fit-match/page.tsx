import Navigation from '../navigation';
import Link from 'next/link';
import ChatWorkflow from './chat-workflow';
import PersonalAIFooter from './footer';
import HowItWorks02 from './how-it-works-02';
import PersonalIntegrationsStrip from './integrations-strip';
import ViralHeader from './viral-header';

export default function PersonalAIFeaturePage() {
  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="feature-page">
        <ViralHeader />
        <HowItWorks02 />
        <ChatWorkflow />
        <PersonalIntegrationsStrip />
        <section className="gift-duplicate-cta" aria-labelledby="personal-ai-cta-title">
          <div className="gift-duplicate-cta-copy">
            <span>Fit Match</span>
            <h2 id="personal-ai-cta-title">Build a model worth trusting.</h2>
            <p>Turn your own portfolio history into the sharpest founder shortlist your fund has ever had.</p>
            <Link href="#" className="gift-duplicate-cta-action">Book a demo</Link>
          </div>
        </section>
      </main>
      <PersonalAIFooter />
    </>
  );
}
