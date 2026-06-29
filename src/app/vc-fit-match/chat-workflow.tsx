import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Matches with a warm path',
    value: '1 in 3',
    description: 'Fit Matches surface',
    descriptionSpan: 'a connection you already have',
  },
  {
    label: 'Time to first conversation',
    value: 'avg. 4 days',
    description: 'from match surfaced',
    descriptionSpan: 'to intro made',
  },
  {
    label: 'Zero guesswork',
    value: 'Personalized',
    description: 'fit model',
    descriptionSpan: 'from day one',
  },
  {
    label: 'One model',
    value: 'Endless matches',
    description: 'The same thesis',
    descriptionSpan: 'scales with your pipeline',
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
              <h2 id="chat-workflow-title">Everyone is using the same generic list.</h2>
              <p>A broad database. A keyword search. A cold outbound sequence. Nobody remembers — and nobody gets the warm path.</p>
              <div className="viral-touch-mobile-stats" aria-label="Fit Match warm path metrics">
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
              <p>Fit Match turns your own portfolio history into a model so precise — that the founders it surfaces feel handpicked, because they are.</p>
              <strong>With your own deal history and a warm-path map, end to end. <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Fit Match model metrics">
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

        <div className="viral-touch-stats-panel" aria-label="Fit Match impact metrics">
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
