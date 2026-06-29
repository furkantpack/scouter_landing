import Image from 'next/image';

const stepsData = [
  {
    id: 'step1',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-1.svg',
    alt: 'Target accounts illustration',
    title: 'Upload your target accounts',
    description: 'Add companies, set your filters and launch your first account-based campaign in minutes.',
  },
  {
    id: 'step2',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-2.svg',
    alt: 'AI account signal illustration',
    title: 'Let AI detect the moment',
    description: 'Gently monitors funding news, award announcements, new office openings, and executive hires — and flags which accounts are hot right now.',
  },
  {
    id: 'step3',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-3.svg',
    alt: 'Coordinated team delivery illustration',
    title: 'Reach the whole team at once',
    description: 'Approve the AI-suggested package and message. We coordinate delivery across multiple contacts at the same account.',
  },
];

export default function HowItWorks02() {
  return (
    <section className="personal-hiw-section" aria-labelledby="personal-hiw-title">
      <div className="personal-hiw-content">
        <header className="personal-hiw-header">
          <span className="personal-hiw-badge"><i />How it works?</span>
          <h2 id="personal-hiw-title">From company signal to account opening, without the manual research</h2>
          <p>
            Stop checking TechCrunch and LinkedIn for news about your accounts.{' '}
            <span>Gently watches every company on your list and tells you the moment to move.</span>
          </p>
        </header>

        <div className="personal-hiw-steps">
          {stepsData.map((step) => (
            <article className="personal-hiw-step" key={step.id}>
              <Image src={step.image} alt={step.alt} width={64} height={64} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
