import { RiArrowRightUpLine, RiBarChartFill } from '@remixicon/react';
import Link from 'next/link';

const metrics = [
  {
    value: '12%',
    label: <>Reduced processing<br />time globally</>,
    greyBars: 2,
    blueBars: 1,
    className: 'performance-metric-one',
  },
  {
    value: '200B',
    label: <>Capital flow managed<br />with precision</>,
    greyBars: 3,
    blueBars: 5,
    className: 'performance-metric-two',
  },
  {
    value: '18M',
    label: <>Transactions finalized<br />globally daily</>,
    greyBars: 5,
    blueBars: 8,
    className: 'performance-metric-three',
  },
  {
    value: '600+',
    label: <>Financial institutions<br />onboarded</>,
    greyBars: 4,
    blueBars: 17,
    className: 'performance-metric-four',
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="performance-metrics-section" aria-labelledby="performance-metrics-title">
      <div className="performance-metrics-shell">
        <div className="performance-metrics-layout">
          <header className="performance-metrics-intro">
            <span><RiBarChartFill />Performance metrics</span>
            <h2 id="performance-metrics-title">Trusted by global banking<br />and finance leaders</h2>
            <p>Achieve faster processing times while keeping<br />every transaction secure and compliant.</p>
            <Link href="#">Explore the full demo <RiArrowRightUpLine /></Link>
          </header>

          {metrics.map((metric) => (
            <article className={`performance-metric ${metric.className}`} key={metric.value}>
              <div className="performance-metric-copy">
                <strong>{metric.value}</strong>
                <p>{metric.label}</p>
              </div>
              <div className="performance-bar-stack" aria-hidden="true">
                {Array.from({ length: metric.greyBars }, (_, index) => <i className="is-muted" key={`grey-${index}`} />)}
                {Array.from({ length: metric.blueBars }, (_, index) => <i key={`blue-${index}`} />)}
              </div>
            </article>
          ))}
        </div>

        <footer className="performance-metrics-footer">
          <span>Optimize payment operations today</span>
          <Link href="#">Explore the full demo <RiArrowRightUpLine /></Link>
        </footer>
      </div>
    </section>
  );
}
