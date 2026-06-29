import { RiArrowRightUpLine, RiBarChartFill } from '@remixicon/react';
import Link from 'next/link';

const metrics = [
  {
    value: '37%',
    label: <>Average ownership lost<br />by waiting 12 months</>,
    greyBars: 2,
    blueBars: 6,
    className: 'performance-metric-one',
  },
  {
    value: '$43.75M',
    label: <>Additional valuation paid<br />at Series A vs. pre-seed</>,
    greyBars: 3,
    blueBars: 9,
    className: 'performance-metric-two',
  },
  {
    value: '84%',
    label: <>Seed-stage founders<br />never reach Series A</>,
    greyBars: 5,
    blueBars: 14,
    className: 'performance-metric-three',
  },
  {
    value: '1,000+',
    label: <>Startups stranded between<br />seed and Series A each year</>,
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
            <h2 id="performance-metrics-title">Trusted by investors<br />who stopped waiting</h2>
            <p>AI-assisted early profiling can identify breakout founders before traction, before any check, and before the market catches up.</p>
            <Link href="#">Stop discovering late <RiArrowRightUpLine /></Link>
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
          <span>Stop discovering founders after everyone else already has.</span>
          <Link href="#">Start earlier <RiArrowRightUpLine /></Link>
        </footer>
      </div>
    </section>
  );
}
