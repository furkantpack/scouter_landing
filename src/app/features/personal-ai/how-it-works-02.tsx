import Image from 'next/image';

const stepsData = [
  {
    id: 'step1',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-1.svg',
    alt: 'Target list illustration',
    title: 'Upload your target list',
    description: 'Add contacts, set your ICP filters and launch your first outreach in minutes.',
  },
  {
    id: 'step2',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-2.svg',
    alt: 'Signal monitoring illustration',
    title: 'Let AI find the moment',
    description: "Gently monitors signals — career moves, company news, social activity — and flags who's ready now.",
  },
  {
    id: 'step3',
    image: 'https://alignui.com/images/blocks/how-it-works-2-image-3.svg',
    alt: 'Personal touch illustration',
    title: 'Send the perfect touch',
    description: 'Approve the AI-suggested gift and note. We handle the rest — fulfillment, delivery, tracking.',
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
            Stop manually researching prospects. Gently watches your list,{' '}
            <span>finds the moment, and tells you exactly what to send and when.</span>
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
