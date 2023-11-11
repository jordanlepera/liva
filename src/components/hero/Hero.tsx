'use client';

import 'animate.css';

import Image from 'next/image';
import Link from 'next/link';
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
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`animate__animated overflow-hidden object-cover object-top brightness-50 ${
              sliderIndex === index ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
          />
        );
      })}
      <div className="absolute top-64 z-10 flex w-full flex-col justify-center md:top-64">
        <div className="text-lg font-extrabold md:text-5xl">
          <h1 className="text-center text-white">
            Construisons l&apos;avenir, pierre par pierre.
            <br />
            Votre vision, notre expertise.
          </h1>
        </div>
        <Link href="/contact" className="mx-auto mt-8">
          <button
            type="button"
            className="rounded-sm bg-red-700 p-4 text-base font-bold uppercase text-white transition-all hover:bg-red-600 md:text-lg"
          >
            Contactez nous
          </button>
        </Link>
      </div>
    </div>
  );
};

export { Hero };
