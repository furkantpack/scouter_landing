'use client';

import { useState } from 'react';
import {
  RiAddLine,
  RiArrowLeftSLine,
  RiArrowRightDownLine,
  RiArrowRightSLine,
  RiCheckDoubleLine,
  RiFileAddLine,
  RiSendPlane2Line,
} from '@remixicon/react';

const prompts = [
  'Catch me up',
  'What needs my attention?',
  'Prepare my launch update',
  'Show my open commitments',
  'Plan the rest of my week',
  'What did I miss?',
];

const actions = [
  'Pull up the budget numbers for Dana',
  'Open the DocuSign contract',
  "Show everything I’ve committed to this week",
];

export default function AIContextComparison() {
  const [activePrompt, setActivePrompt] = useState(0);

  const movePrompt = (direction: number) => {
    setActivePrompt((current) => (current + direction + prompts.length) % prompts.length);
  };

  return (
    <section className="ai-context-section" aria-labelledby="ai-context-title">
      <div className="ai-context-shell">
        <div className="ai-context-eyebrow">YOUR CONTEXT</div>

        <div className="ai-context-intro">
          <h2 id="ai-context-title">The AI that always<br />works with your work.</h2>
          <div className="ai-context-intro-copy">
            <p>
              Every other AI starts at zero. Brain<sup>2</sup> starts with
              everything your company knows.
            </p>
            <a href="#ai-context-demo">Get started</a>
          </div>
        </div>

        <div className="ai-prompt-stage" aria-label="Prompt examples">
          <div className="ai-prompt-stack" aria-hidden="true" />
          <div className="ai-prompt-card">
            <p key={prompts[activePrompt]}>{prompts[activePrompt]}</p>
            <button type="button" className="ai-prompt-add" aria-label="Add attachment">
              <RiAddLine />
            </button>
            <button type="button" className="ai-prompt-send" aria-label="Send prompt">
              <RiSendPlane2Line />
            </button>
          </div>
          <div className="ai-prompt-controls">
            <button type="button" aria-label="Previous prompt" onClick={() => movePrompt(-1)}>
              <RiArrowLeftSLine />
            </button>
            <div className="ai-prompt-dots" role="tablist" aria-label="Choose prompt">
              {prompts.map((prompt, index) => (
                <button
                  key={prompt}
                  type="button"
                  role="tab"
                  aria-label={`Show prompt ${index + 1}`}
                  aria-selected={activePrompt === index}
                  className={activePrompt === index ? 'is-active' : ''}
                  onClick={() => setActivePrompt(index)}
                />
              ))}
            </div>
            <button type="button" aria-label="Next prompt" onClick={() => movePrompt(1)}>
              <RiArrowRightSLine />
            </button>
          </div>
        </div>

        <div className="ai-comparison-frame" id="ai-context-demo">
          <article className="ai-comparison-panel ai-generic-panel">
            <header className="ai-comparison-header">
              <div className="ai-model-tabs" aria-label="AI model examples">
                <span className="ai-model-tab is-active"><span className="ai-chat-mark">◎</span> ChatGPT</span>
                <span className="ai-model-tab"><span className="ai-claude-mark">✳</span> Claude</span>
                <span className="ai-model-tab"><span className="ai-gemini-mark">✦</span> Gemini</span>
              </div>
              <span className="ai-response-label">ACTUAL RESPONSE</span>
            </header>
            <div className="ai-generic-response">
              <p>Maybe. The usual suspects are:</p>
              <p>
                Keys / wallet / phone. Chargers and meds. Water bottle. Any deadlines or
                replies you meant to send. That one thing you deliberately put “somewhere safe.”
              </p>
              <p>
                If you mean for a specific trip, project, event, or task, tell me what you’re
                preparing for and I’ll help you do a quick gap check.
              </p>
            </div>
          </article>

          <article className="ai-comparison-panel ai-brain-panel">
            <header className="ai-comparison-header ai-brain-header">
              <div className="ai-brain-brand">
                <span className="ai-brain-logo" aria-hidden="true">
                  <i /><i /><i /><i /><i />
                </span>
                <strong>Brain<sup>2</sup></strong>
              </div>
              <span className="ai-brain-label">CONTEXT AND PERSONALITY WINS</span>
            </header>
            <div className="ai-brain-content">
              <p className="ai-brain-answer">
                Two things before your weekend: you told <strong>@Dana</strong> you’d send her
                the budget numbers, and there’s a signed contract sitting in DocuSign that
                needs your counter today or the deal expires.
              </p>
              <div className="ai-action-card">
                <div className="ai-action-tags">
                  <span>Send budget to Dana</span>
                  <span>Signed contract</span>
                </div>
                <div className="ai-action-icons" aria-hidden="true">
                  <RiCheckDoubleLine />
                  <RiFileAddLine />
                </div>
                <div className="ai-action-list">
                  {actions.map((action) => (
                    <button type="button" key={action}>
                      <RiArrowRightDownLine />
                      <span>{action}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
