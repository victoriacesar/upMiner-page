import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Banner } from '../Banner';

const backgrounds = [
  'https://placehold.jp/10/cc9999/cc9999/1300x200.png',
  'https://placehold.jp/10/939406/939406/1300x200.png',
  'https://placehold.jp/10/062E94/062E94/1300x200.png',
  'https://placehold.jp/10/942006/942006/1300x200.png',
  'https://placehold.jp/10/125863/125863/1300x200.png',
];

export function Slider() {
  return (
    <div className="slider">
      <Carousel
        itemsToShow={1}
        itemsToScroll={1}
        enableAutoPlay
        autoPlaySpeed={4000}
      >
        {backgrounds.map((bg, i) => (
          <Banner key={i} bg={bg} />
        ))}
      </Carousel>
    </div>
  );
}
