import {
  RiCheckboxCircleLine,
  RiCloseCircleLine,
  RiSparkling2Fill,
} from '@remixicon/react';
import FeatureDetails from './feature-details';

const storyStats = [
  {
    label: 'Reply rate lift',
    value: '3x',
    description: 'Higher than cold',
    descriptionSpan: 'email sequences',
  },
  {
    label: 'Sent with precision',
    value: '1 touch',
    description: 'Per person, per moment',
    descriptionSpan: 'never batch, never blast',
  },
  {
    label: 'Signals monitored',
    value: '15+',
    description: 'Per contact, across',
    descriptionSpan: 'web, news & social',
  },
  {
    label: 'AI-personalized',
    value: '100%',
    description: 'Every gift, every note',
    descriptionSpan: 'unique to that person',
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
              <h2 id="chat-workflow-title">They ignored your email.</h2>
              <p>Because it looked exactly like the other 47 they got that day.</p>
              <div className="viral-touch-mobile-stats" aria-label="Personal Touch reply metrics">
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
              <p>Personal Touch monitors every signal around your prospect — and sends the one thing that proves you actually paid attention.</p>
              <strong>With AI-powered signal intelligence. <RiSparkling2Fill /></strong>
              <div className="viral-touch-mobile-stats" aria-label="Personal Touch personalization metrics">
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

        <div className="viral-touch-stats-panel" aria-label="Personal Touch impact metrics">
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
