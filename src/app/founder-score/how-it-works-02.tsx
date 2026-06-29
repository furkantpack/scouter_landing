import Image from 'next/image';

const stepsData = [
  {
    id: 'step1',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-1.svg',
    alt: 'Target profiles illustration',
    title: 'Upload your target profiles',
    description: 'Add sectors, backgrounds, or a custom prompt — launch your first scan in minutes.',
  },
  {
    id: 'step2',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-2.svg',
    alt: 'AI founder signal illustration',
    title: 'Let AI detect the signal',
    description: "Scouter monitors job changes, company exits, stealth registrations, layoffs, and prior founding history — scored against VCBench-style success patterns to flag who's high-potential right now.",
  },
  {
    id: 'step3',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-3.svg',
    alt: 'Founder score reasoning illustration',
    title: 'Get the score and the reasoning',
    description: 'Approve the AI-surfaced score and see exactly which signals triggered it. No waiting, no manual verification.',
  },
];

export default function HowItWorks02() {
  return (
    <section className="personal-hiw-section" aria-labelledby="personal-hiw-title">
      <div className="personal-hiw-content">
        <header className="personal-hiw-header">
          <span className="personal-hiw-badge"><i />How it works?</span>
          <h2 id="personal-hiw-title">From founder signal to investment decision, without the manual research</h2>
          <p>
            Stop checking LinkedIn for career changes.{' '}
            <span>Scouter quietly watches every profile on your list and tells you the moment to move.</span>
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
