import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Lead time gained',
    value: '3x',
    description: 'Earlier than',
    descriptionSpan: 'database-driven sourcing',
  },
  {
    label: 'Sent with precision',
    value: '1 alert',
    description: 'Per founder, per moment',
    descriptionSpan: 'never batched, never noise',
  },
  {
    label: 'Signals monitored',
    value: '15+',
    description: 'Per founder, across',
    descriptionSpan: 'career, registry & social',
  },
  {
    label: 'AI-scored',
    value: '100%',
    description: 'Every signal, ranked',
    descriptionSpan: 'and explained',
  },
];

export default function ChatWorkflow() {
  return (
    <>
      <section className="chat-workflow-section viral-touch-stats-section" aria-labelledby="chat-workflow-title">
        <div className="chat-workflow-story">
          <div className="chat-story-item chat-story-broken">
            <RiCloseCircleLine />
            <div>
              <h2 id="chat-workflow-title">Your competitors saw that career change too.</h2>
              <p>Three weeks later, in a database update. You saw it the day it happened.</p>
              <div className="viral-touch-mobile-stats" aria-label="Real-Time Alert lead-time metrics">
                {storyStats.slice(0, 2).map(({ value, label, description, descriptionSpan }) => (
                  <article className="team-touch-story-stat viral-touch-story-stat" key={label}>
                    <span>{label}</span>
                    <h3>{value}</h3>
                    <p>{description} <strong>{descriptionSpan}</strong></p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="chat-story-line" aria-hidden="true" />

          <div className="chat-story-item chat-story-fixed">
            <RiCheckboxCircleLine />
            <div>
              <h2>We fixed it.</h2>
              <p>Real-Time Alert monitors every signal around your target founders — and notifies you the moment one proves they&apos;re worth backing.</p>
              <strong>With AI-powered signal intelligence. <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Real-Time Alert signal intelligence metrics">
                {storyStats.slice(2).map(({ value, label, description, descriptionSpan }) => (
                  <article className="team-touch-story-stat viral-touch-story-stat" key={label}>
                    <span>{label}</span>
                    <h3>{value}</h3>
                    <p>{description} <strong>{descriptionSpan}</strong></p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="viral-touch-stats-panel" aria-label="Real-Time Alert impact metrics">
          {storyStats.map(({ value, label, description, descriptionSpan }) => (
            <article className="team-touch-story-stat viral-touch-story-stat" key={label}>
              <span>{label}</span>
              <h3>{value}</h3>
              <p>{description} <strong>{descriptionSpan}</strong></p>
            </article>
          ))}
        </div>
      </section>

      <FeatureDetails />
    </>
  );
}
