import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Whole account reached',
    value: 'avg. 4.2',
    description: 'contacts per',
    descriptionSpan: 'coordinated send',
  },
  {
    label: 'Perfect timing',
    value: '48 hrs',
    description: 'From signal detected',
    descriptionSpan: 'to delivery dispatched',
  },
  {
    label: 'Zero manual research',
    value: '100%',
    description: 'of company signals',
    descriptionSpan: 'caught automatically',
  },
  {
    label: 'Signals monitored',
    value: '24/7',
    description: 'Funding, awards,',
    descriptionSpan: 'launches, new hires',
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
              <h2 id="chat-workflow-title">Your competitors saw the funding announcement too.</h2>
              <p>They sent a congratulations email. You sent something they put on the office shelf.</p>
              <div className="viral-touch-mobile-stats" aria-label="Team Touch account reach metrics">
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
              <p>Team Touch turns company signals into coordinated physical moments — reaching the whole account before the window closes.</p>
              <strong>With AI-powered account intelligence <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Team Touch signal metrics">
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

        <div className="viral-touch-stats-panel" aria-label="Team Touch impact metrics">
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
