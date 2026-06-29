import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Spot the right moment',
    description: 'Gently watches the signals that matter and turns milestones into timely gifting opportunities.',
    image: '/how-it-works-spot-the-moment.png',
    imageWidth: 1380,
    imageHeight: 1140,
  },
  {
    number: '02',
    title: 'Make it personal',
    description: 'Choose a thoughtful gift and tailor every detail to the person, occasion, and relationship.',
    image: '/how-it-works-make-it-personal.png',
    imageWidth: 1402,
    imageHeight: 1122,
  },
  {
    number: '03',
    title: 'Send and track',
    description: 'Launch the workflow once and follow every delivery from approval through arrival.',
    image: '/how-it-works-send-and-track.png',
    imageWidth: 1402,
    imageHeight: 1122,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-journey-section" aria-labelledby="how-journey-title">
      <div className="how-journey-content">
        <header className="how-journey-header">
          <span className="how-journey-badge"><i />How it works</span>
          <h2 id="how-journey-title">From the right moment<br />to a lasting impression.</h2>
          <p>A simple journey that keeps every gift thoughtful, timely, and effortless.</p>
        </header>

        <div className="how-journey-grid">
          {steps.map((step) => (
            <article className="enterprise-card how-journey-card" key={step.number}>
              <Image
                src={step.image}
                alt={`${step.number}. ${step.title}. ${step.description}`}
                width={step.imageWidth}
                height={step.imageHeight}
                loading="eager"
                className="how-journey-card-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
