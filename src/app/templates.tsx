'use client';

import { RiArrowRightLongLine } from '@remixicon/react';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    id: 'pitch-deck',
    label: 'Pitch deck',
    covers: ['Funding pitch template', 'Mobile pitch deck template', 'Series B pitch template'],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    covers: ['Campaign strategy template', 'Social media report', 'Brand launch template'],
  },
  {
    id: 'design',
    label: 'Design',
    covers: ['Creative direction template', 'Portfolio presentation', 'Design system template'],
  },
  {
    id: 'startups',
    label: 'Startups',
    covers: ['Investor update template', 'Product roadmap template', 'Seed round template'],
  },
];

const coverClasses = ['template-cover-funding', 'template-cover-mobile', 'template-cover-series'];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section className="templates-section">
      <div className="templates-layout">
        <div className="templates-copy">
          <div className="templates-title-row">
            <h2>Templates</h2>
            <span>(150+)</span>
          </div>
          <p>
            Choose from 150+ fully customizable templates crafted by experts.
            You can also start with AI or import your existing PPTX file.
          </p>
          <Link href="/" className="templates-button">
            Browse templates
            <RiArrowRightLongLine />
          </Link>
        </div>

        <div className="templates-showcase" aria-label="Template categories">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            const panelId = `template-panel-${category.id}`;

            return (
              <div
                key={category.id}
                className={`template-accordion-item ${isActive ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="template-category-trigger"
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>

                <div
                  id={panelId}
                  className="template-panel"
                  aria-hidden={!isActive}
                >
                  <div className={`template-covers template-covers-${category.id}`}>
                    {category.covers.map((cover, index) => (
                      <div
                        key={cover}
                        role="img"
                        aria-label={cover}
                        className={`template-cover ${coverClasses[index]}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
