import {
  RiArrowRightUpLine,
  RiArrowRightUpLongLine,
  RiBuilding2Line,
  RiCheckLine,
  RiCloseLine,
  RiCustomerServiceFill,
  RiInformationFill,
  RiRocket2Line,
  RiUser3Line,
} from '@remixicon/react';
import Link from 'next/link';
import Navigation from '../navigation';
import ScouterFooter from '../scouter/footer';

const comparisonRows = [
  {
    label: 'Founder watchlists',
    personal: 'Up to 250 founders',
    startup: 'Up to 2,500 founders',
    enterprise: 'Custom founder universe',
  },
  {
    label: 'Signal monitoring',
    personal: 'Career moves and exits',
    startup: 'Career, exits, layoffs, filings',
    enterprise: 'Custom sources and priority feeds',
  },
  {
    label: 'AI founder scoring',
    personal: 'Standard success score',
    startup: 'Thesis-tuned scoring',
    enterprise: 'Custom scoring model',
  },
  {
    label: 'Context and history',
    personal: 'Founder profiles',
    startup: 'Profiles, score history, notes',
    enterprise: 'Full CRM and data warehouse sync',
  },
  {
    label: 'Alerts',
    personal: 'Weekly digest',
    startup: 'Real-time alerts',
    enterprise: 'Real-time alerts and routing',
  },
  {
    label: 'Warm intro paths',
    personal: 'Basic path discovery',
    startup: 'Team and portfolio paths',
    enterprise: 'Partner network mapping',
  },
  {
    label: 'Support',
    personal: 'Email support',
    startup: 'Shared onboarding',
    enterprise: 'Dedicated success team',
  },
];

const faqSections = [
  {
    title: 'Account',
    description: 'Manage your account with ease.',
    items: [
      {
        id: 'account-1',
        question: 'How do I change my email address?',
        answer:
          "Go to your account settings, click on 'Personal Info,' and update your email address. A verification link will be sent to your new email to confirm the change.",
      },
      {
        id: 'account-2',
        question: 'Can I update my payment details online?',
        answer:
          'Yes, you can update your payment method anytime from the Billing section in your account settings. We support all major credit cards and bank transfers.',
      },
      {
        id: 'account-3',
        question: 'What should I do if I forget my password?',
        answer:
          "Click the 'Forgot Password' link on the login page and enter your registered email. You'll receive a reset link within minutes to create a new password.",
      },
    ],
  },
  {
    title: 'Payments',
    description: 'Get answers to payment questions.',
    items: [
      {
        id: 'payment-1',
        question: 'How long does it take to process a payment?',
        answer:
          'Most payments are processed instantly. Bank transfers may take 1-3 business days depending on your financial institution and region.',
      },
      {
        id: 'payment-2',
        question: 'Are refunds handled automatically?',
        answer:
          'Refunds are reviewed and processed within 5-7 business days. Once approved, the amount will be credited back to your original payment method.',
      },
    ],
  },
  {
    title: 'Support',
    description: "We're here to help anytime.",
    items: [
      {
        id: 'support-1',
        question: 'How can I contact customer support?',
        answer:
          'You can reach our support team via live chat, email at hello@alignui.com, or by submitting a request through the Help Center.',
      },
      {
        id: 'support-2',
        question: 'Do you provide weekend assistance?',
        answer:
          'We use bank-level encryption, two-factor authentication, and comply with major global standards such as PSD2, GDPR, and SOC 2.\n\nYour financial data is encrypted both at rest and in transit, and our systems are monitored 24/7 for unusual activity. We also undergo regular third-party audits to ensure the highest level of security and compliance.',
      },
      {
        id: 'support-3',
        question: 'Is live chat support available?',
        answer:
          'Yes, live chat is available 24/7 for all users. Premium plan members also get priority routing to senior support agents.',
      },
      {
        id: 'support-4',
        question: 'Where can I find detailed guides?',
        answer:
          'Visit our Knowledge Base for step-by-step guides, video tutorials, and best practices covering every feature of the platform.',
      },
    ],
    action: {
      text: 'Looking for something else?',
      email: 'hello@alignui.com',
    },
  },
] as const;

function PlanFeature({ children }: { children: React.ReactNode }) {
  return <li><RiCheckLine />{children}</li>;
}

export default function PricingPage() {
  return (
    <>
      <Navigation logoSrc="/scouter/scouter-logo-new.png" logoAlt="Scouter" homeHref="/" />
      <main className="pricing-page">
        <header className="pricing-main-heading">
          <div>
            <span>Built for early-stage investors</span>
            <h1>Choose the Scouter workflow that matches how your team finds founders</h1>
          </div>
          <div className="pricing-main-settings">
            <p>Plans are shaped around sourcing volume, signal depth, team workflows, and how much of your partner network Scouter should map.</p>
            <div className="pricing-main-billing">
              <span aria-hidden="true"><i /></span>
              <strong>No public pricing.</strong> Every package starts with a founder intelligence audit.
            </div>
          </div>
        </header>

        <section className="pricing-table" aria-label="Scouter packages">
          <aside className="pricing-label-column">
            <div className="pricing-addon">
              <span className="pricing-switch"><i /></span>
              <strong>Partner with Scouter</strong>
              <p>Build a founder discovery system around your thesis, portfolio, and partner network.</p>
              <Link href="/demo-request">Explore partnership <RiArrowRightUpLine /></Link>
            </div>
            <ul>
              {comparisonRows.map((row) => (
                <li key={row.label}>{row.label}<RiInformationFill /></li>
              ))}
            </ul>
          </aside>

          <article className="pricing-plan">
            <div className="pricing-plan-top">
              <RiUser3Line className="pricing-plan-icon" />
              <h2>Scout</h2>
              <p>For solo angels, scout programs, and small funds starting with a focused founder list.</p>
            </div>
            <Link href="/demo-request" className="pricing-credit-button">Book a demo <RiArrowRightUpLine /></Link>
            <ul>{comparisonRows.map((row) => <PlanFeature key={row.label}>{row.personal}</PlanFeature>)}</ul>
          </article>

          <article className="pricing-plan pricing-plan-featured">
            <span className="pricing-popular">MOST USED</span>
            <div className="pricing-plan-top">
              <RiRocket2Line className="pricing-plan-icon" />
              <h2>Fund</h2>
              <p>For VC teams that need real-time signals, thesis-fit scoring, and coordinated outreach.</p>
            </div>
            <Link href="/demo-request" className="pricing-credit-button">Book a demo <RiArrowRightUpLine /></Link>
            <ul>{comparisonRows.map((row) => <PlanFeature key={row.label}>{row.startup}</PlanFeature>)}</ul>
          </article>

          <article className="pricing-plan">
            <div className="pricing-plan-top">
              <RiBuilding2Line className="pricing-plan-icon" />
              <h2>Platform</h2>
              <p>For multi-partner firms and venture platforms that want Scouter embedded into their data stack.</p>
            </div>
            <Link href="/demo-request" className="pricing-credit-button">Talk to us <RiArrowRightUpLine /></Link>
            <ul>{comparisonRows.map((row) => <PlanFeature key={row.label}>{row.enterprise}</PlanFeature>)}</ul>
          </article>
        </section>

        <section className="pricing-faq-section" aria-labelledby="pricing-faq-title">
          <div className="pricing-faq-heading-shell">
            <div className="pricing-faq-heading">
              <div>
                <span>FAQ guide</span>
                <h2 id="pricing-faq-title">Get quick answers to common questions</h2>
              </div>
              <p>Find solutions, explore resources, and resolve issues faster.</p>
            </div>
          </div>

          <div className="pricing-faq-list">
            {faqSections.map((section, sectionIndex) => {
              const isLast = sectionIndex === faqSections.length - 1;
              return (
                <div className={`pricing-faq-row ${isLast ? 'pricing-faq-row-last' : ''}`} key={section.title}>
                  <div className="pricing-faq-meta">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>

                  <div className="pricing-faq-items">
                    {section.items.map((item) => (
                      <details className="pricing-faq-item" key={item.id}>
                        <summary>
                          <span>{item.question}</span>
                          <RiCloseLine />
                        </summary>
                        <div>
                          {item.answer.split('\n\n').map((paragraph, i) => (
                            <p key={i} className={i > 0 ? 'pricing-faq-paragraph-spaced' : ''}>{paragraph}</p>
                          ))}
                        </div>
                      </details>
                    ))}

                    {'action' in section && section.action && (
                      <div className="pricing-faq-action">
                        <RiCustomerServiceFill />
                        <span>{section.action.text}</span>
                        <a href={`mailto:${section.action.email}`}>{section.action.email}</a>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pricing-align-cta" aria-label="Reach out today">
          <div className="pricing-align-cta-shell">
            <div className="pricing-align-cta-hero">
              <img
                src="https://alignui.com/images/blocks/footer-6-text-mobile.svg"
                alt="Reach out today"
                width={331}
                height={157}
                className="pricing-align-cta-text pricing-align-cta-text-mobile"
              />
              <img
                src="https://alignui.com/images/blocks/footer-6-text.svg"
                alt="Reach out today"
                width={1210}
                height={169}
                className="pricing-align-cta-text pricing-align-cta-text-desktop"
              />
              <Link href="/demo-request" className="pricing-align-cta-call">
                Schedule a call
                <RiArrowRightUpLongLine />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <ScouterFooter />
    </>
  );
}
