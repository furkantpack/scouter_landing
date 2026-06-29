import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Profile scored',
    value: 'avg. 0-100',
    description: 'background + sacrifice',
    descriptionSpan: '+ timing',
  },
  {
    label: 'Early detection',
    value: 'Before',
    description: 'company',
    descriptionSpan: 'formation',
  },
  {
    label: 'Manual research',
    value: 'Zero',
    description: 'manual checks',
    descriptionSpan: 'needed',
  },
  {
    label: 'Signals monitored',
    value: '24/7',
    description: 'job changes, exits,',
    descriptionSpan: 'stealth activity, layoffs',
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
              <h2 id="chat-workflow-title">Your competitors saw that job change too.</h2>
              <p>They sent a LinkedIn congrats. You already knew why this person was worth backing.</p>
              <div className="viral-touch-mobile-stats" aria-label="Scouter founder score metrics">
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
              <p>Founder Success Score turns scattered career signals into a single predictive score — before the window closes.</p>
              <strong>With AI-powered founder intelligence <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Scouter founder signal metrics">
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

        <div className="viral-touch-stats-panel" aria-label="Scouter founder intelligence metrics">
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
