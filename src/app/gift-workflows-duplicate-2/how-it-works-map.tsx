import Image from 'next/image';

const steps = [
  { number: '01', label: 'Spot the right moment', className: 'journey-map-note-one' },
  { number: '02', label: 'Make it personal', className: 'journey-map-note-two' },
  { number: '03', label: 'Send and track', className: 'journey-map-note-three' },
];

export default function HowItWorksMap() {
  return (
    <section className="journey-map-section" aria-labelledby="journey-map-title">
      <div className="journey-map-content">
        <header className="journey-map-header">
          <span className="how-journey-badge"><i />How it works</span>
          <h2 id="journey-map-title">One thoughtful journey,<br />from signal to delivery.</h2>
        </header>

        <div className="journey-map-scroll">
          <div className="journey-map-canvas">
            <Image
              src="/how-it-works-journey-map.png"
              alt="A three-step gifting journey from discovering the right moment, through personalizing a gift, to delivery and tracking."
              width={1891}
              height={831}
              loading="eager"
              unoptimized
              className="journey-map-image"
            />
            {steps.map((step) => (
              <div className={`journey-map-note ${step.className}`} key={step.number}>
                <span>{step.number}</span>
                <strong>{step.label}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
