'use client';

import { useEffect, useRef, useState } from 'react';
import { RiCheckLine, RiGift2Line, RiMailLine } from '@remixicon/react';

const states = {
  dark: {
    label: 'The cold side',
    title: 'Still relying on cold email?',
    description:
      "Hours of research. Carefully crafted sequences. And a reply rate that barely moves. Cold outreach isn't broken because of bad copy — it's broken because it feels cold.",
  },
  light: {
    label: 'The light side',
    title: 'Make every touch count.',
    description:
      'Gently turns the right signal into the right moment — a thoughtful, personalized physical touch that lands on the right desk at exactly the right time. Not another email. A reason to reply.',
  },
};

export default function SwitchBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / travel));
      setIsLight(progress > 0.42);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const content = isLight ? states.light : states.dark;

  return (
    <section className="gift-switch-story-section" ref={sectionRef} aria-labelledby="gift-switch-story-title">
      <div className="gift-switch-story-sticky">
        <div className={`gift-switch-story-card${isLight ? ' is-light' : ''}`}>
          <div className="gift-switch-story-control">
            <div className="gift-switch-story-icons" aria-hidden="true">
              <span className="gift-switch-story-icon gift-switch-story-email"><RiMailLine /></span>
              <button
                type="button"
                className="gift-switch-toggle"
                role="switch"
                aria-checked={isLight}
                aria-label="Switch between cold outreach and thoughtful gifting"
                onClick={() => setIsLight((current) => !current)}
              >
                <i><RiCheckLine /></i>
              </button>
              <span className="gift-switch-story-icon gift-switch-story-gift"><RiGift2Line /></span>
            </div>
            <small>Scroll to switch sides</small>
          </div>

          <div className="gift-switch-story-copy" aria-live="polite">
            <span>{content.label}</span>
            <h2 id="gift-switch-story-title">{content.title}</h2>
            <p>{content.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
