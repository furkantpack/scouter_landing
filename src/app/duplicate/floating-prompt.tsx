'use client';

import { FormEvent, useEffect, useState } from 'react';

const examples = [
  "Automate my team's reporting workflow",
  'Build a customer onboarding system',
  'Create a weekly market intelligence brief',
  'Find follow-ups that need my attention',
  'Prepare our next product launch plan',
  'Turn customer feedback into clear priorities',
];

export default function FloatingPrompt() {
  const [value, setValue] = useState('');
  const [exampleIndex, setExampleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!value) setExampleIndex((current) => (current + 1) % examples.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [value]);

  useEffect(() => {
    const updateVisibility = () => {
      const pageBottom = document.documentElement.scrollHeight - window.innerHeight;
      const awayFromHeader = window.scrollY > 420;
      const awayFromFooter = pageBottom - window.scrollY > 180;
      setIsVisible(awayFromHeader && awayFromFooter);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const submitPrompt = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    setIsSubmitted(true);
    window.setTimeout(() => setIsSubmitted(false), 650);
  };

  return (
    <form
      className={`floating-prompt ${isVisible ? 'is-visible' : ''} ${isSubmitted ? 'is-submitted' : ''}`}
      aria-label="Scout prompt"
      onSubmit={submitPrompt}
    >
      <label htmlFor="floating-scout-input" className="sr-only">Ask Scout</label>
      <input
        id="floating-scout-input"
        type="text"
        value={value}
        placeholder={examples[exampleIndex]}
        autoComplete="off"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" disabled={!value.trim()}>Scout</button>
    </form>
  );
}
