'use client';

import { useRef } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import Image from 'next/image';

const stories = [
  {
    company: 'OpenAI',
    name: 'Keith Jones',
    role: 'GTM Systems Lead',
    cardImage: '/customer-card-keith.png',
    imageWidth: 1060,
    imageHeight: 1484,
    color: '#cce600',
  },
  {
    company: 'Vanta',
    name: 'Stevie Case',
    role: 'Chief Revenue Officer',
    cardImage: '/customer-card-vanta.png',
    imageWidth: 1060,
    imageHeight: 1484,
    color: '#ff7015',
  },
  {
    company: 'Bolt',
    name: 'Eric Sim',
    role: 'Head of Revenue Operations',
    cardImage: '/customer-card-bolt.png',
    imageWidth: 1060,
    imageHeight: 1484,
    color: '#8d6bff',
  },
  {
    company: 'Webflow',
    name: 'Erin Lee',
    role: 'Head of Partner Marketing',
    cardImage: '/customer-card-webflow.png',
    imageWidth: 1045,
    imageHeight: 1505,
    color: '#ffd200',
  },
  {
    company: 'Ramp',
    name: 'Talia Brooks',
    role: 'Head of People Operations',
    cardImage: '/customer-card-ramp.png',
    imageWidth: 1076,
    imageHeight: 1462,
    color: '#163cae',
  },
];

export default function CustomerStories() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>('.gift-story-card');
    if (!track || !card) return;
    track.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: 'smooth' });
  };

  return (
    <section className="gift-stories-section" aria-labelledby="gift-stories-title">
      <div className="gift-stories-header">
        <h2 id="gift-stories-title">What our customers<br />say about us...</h2>
        <div className="gift-stories-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous customer story"><RiArrowLeftSLine /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next customer story"><RiArrowRightSLine /></button>
        </div>
      </div>

      <div className="gift-stories-track" ref={trackRef}>
        {stories.map((story) => (
          <article className="gift-story-card is-image-card" style={{ background: story.color }} key={story.company}>
            <Image
              src={story.cardImage}
              alt={`${story.name}, ${story.role} at ${story.company}`}
              width={story.imageWidth}
              height={story.imageHeight}
              loading="eager"
              className="gift-story-card-image"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
