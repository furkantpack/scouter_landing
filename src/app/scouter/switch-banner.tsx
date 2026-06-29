'use client';

import { useEffect, useRef, useState } from 'react';
import { RiCheckLine, RiGift2Line, RiMailLine } from '@remixicon/react';

const states = {
  dark: {
    label: 'The cold side',
    title: 'Still relying on a spreadsheet and a hunch?',
    description:
      "Hours scrolling LinkedIn. A handful of names from a demo day. A deal you only heard about after the round closed. Sourcing isn't broken because investors aren't trying - it's broken because the best founders are invisible until it's too late.",
  },
  light: {
    label: 'The light side',
    title: 'Find them before the round.',
    description:
      'Scouter turns scattered career signals into the right founder, scored and surfaced at exactly the right moment - before they pitch, before they raise, before anyone else even knows they are building.',
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
                aria-label="Switch between manual sourcing and founder signal intelligence"
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
