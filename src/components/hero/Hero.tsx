'use client';

import 'animate.css';

import Image from 'next/image';
import React from 'react';

import hero from '@/public/assets/images/hero.jpg';
import hero2 from '@/public/assets/images/hero-2.jpg';

const sliderImages = [hero.src, hero2.src];

const Hero = () => {
  const [sliderIndex, setSliderIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((sliderIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        maxHeight: '70vh',
        height: '70vh',
      }}
      className="w-full xl:h-[70vh] xl:max-h-[70vh]"
    >
      {sliderImages.map((image, index) => {
        return (
          <Image
            key={`hero-slider-${index + Math.random()}`}
            id="hero-slider"
            src={image}
            alt="hero liva maçonnerie"
            loading="lazy"
            fill
            sizes="100vw"
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`animate__animated overflow-hidden object-cover object-top ${
              sliderIndex === index ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
          />
        );
      })}
    </div>
  );
};

export { Hero };
