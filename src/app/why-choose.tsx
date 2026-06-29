import Link from 'next/link';

const benefits = [
  {
    title: 'Expert-led templates',
    description:
      'Build with presentation systems crafted by specialists who understand strategy, storytelling, and visual clarity.',
  },
  {
    title: 'Deep customization',
    description:
      'Shape every layout, color, and component around your brand without losing the structure that makes the story work.',
  },
  {
    title: 'AI-powered workflows',
    description:
      'Move from a first idea to a polished deck faster with intelligent tools designed for modern creative teams.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-content">
        <div className="why-main">
          <div className="why-intro">
            <span className="why-eyebrow">Why choose us</span>
            <h2>Elevate your creative expertise</h2>
            <p>
              Yesterday&rsquo;s presentation problems are already behind you. The
              real challenge is turning your next idea into a clear, memorable
              story. Our templates, integrations, and AI workflows give your
              team the structure and flexibility to create work that moves
              faster and lands stronger.
            </p>
          </div>

          <div className="why-benefits">
            {benefits.map((benefit) => (
              <article className="why-benefit" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="why-cta">
          <h3>Need help getting your manager&rsquo;s approval?</h3>
          <p>Use our ready-to-send email to make the case for upgrading your team&rsquo;s creative workflow.</p>
          <Link href="/">Help me get approval</Link>
        </div>
      </div>
    </section>
  );
}
