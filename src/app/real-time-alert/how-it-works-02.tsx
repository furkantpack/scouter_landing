import Image from 'next/image';

const stepsData = [
  {
    id: 'step1',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-1.svg',
    alt: 'Target list illustration',
    title: 'Upload your target list',
    description: 'Add founders, set your thesis filters, and launch your first watchlist in minutes.',
  },
  {
    id: 'step2',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-2.svg',
    alt: 'Signal monitoring illustration',
    title: 'Let AI find the moment',
    description: "Scouter monitors signals — job changes, stealth registrations, layoffs, social activity — and flags who's ready right now.",
  },
  {
    id: 'step3',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-3.svg',
    alt: 'Alert delivery illustration',
    title: 'Get the alert, make the move',
    description: 'Approve the AI-surfaced signal and reasoning. We handle the rest — scoring, ranking, delivery to your inbox.',
  },
];

export default function HowItWorks02() {
  return (
    <section className="personal-hiw-section" aria-labelledby="personal-hiw-title">
      <div className="personal-hiw-content">
        <header className="personal-hiw-header">
          <span className="personal-hiw-badge"><i />How it works?</span>
          <h2 id="personal-hiw-title">From signal to meeting, without the guesswork</h2>
          <p>
            Stop manually checking LinkedIn for founder updates. Scouter watches your list,{' '}
            <span>finds the moment, and tells you exactly who to reach and when.</span>
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
