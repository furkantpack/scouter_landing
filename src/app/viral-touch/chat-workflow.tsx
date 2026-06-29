import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Recipients share it',
    value: '1 in 3',
    description: 'Viral Touch recipients post',
    descriptionSpan: 'on LinkedIn without being asked',
  },
  {
    label: 'Booked in days',
    value: 'avg. 4 days',
    description: 'From first delivery',
    descriptionSpan: 'to booked meeting',
  },
  {
    label: 'Zero guesswork',
    value: 'Dedicated',
    description: 'creative director',
    descriptionSpan: 'from day one',
  },
  {
    label: 'One concept',
    value: 'Endless sends',
    description: 'Same signature gift',
    descriptionSpan: 'scales with your list',
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
              <h2 id="chat-workflow-title">Everyone is sending the same gift.</h2>
              <p>A branded mug. A generic hamper. A Starbucks card. Nobody remembers — and nobody shares.</p>
              <div className="viral-touch-mobile-stats" aria-label="Viral Touch sharing metrics">
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
              <p>Viral Touch turns your brand into a physical object so unexpected, so perfectly you — that prospects photograph it before you even follow up.</p>
              <strong>With a dedicated creative director and end-to-end production. <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Viral Touch production metrics">
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

        <div className="viral-touch-stats-panel" aria-label="Viral Touch impact metrics">
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
