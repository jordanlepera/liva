'use client';

import 'animate.css';

import Image from 'next/image';
import React, { Suspense } from 'react';

import { Loading } from '@/components/loading/Loading';
import hero2 from '@/public/assets/images/hero/hero-4.webp';
import hero1 from '@/public/assets/images/hero/hero-5.avif';

const sliderImages = [hero1.src, hero2.src];

const Hero = () => {
  const [sliderIndex, setSliderIndex] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((sliderIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderIndex]);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden p-16 md:h-[60vh] xl:h-[70vh] xl:max-h-[70vh]">
      <Suspense fallback={<Loading />}>
        {sliderImages.map((image, index) => {
          return (
            <Image
              key={`hero-slider-${index + Math.random()}`}
              id="hero-slider"
              src={image}
              alt="hero liva maçonnerie"
              sizes="100vw"
              fill
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`animate__animated overflow-hidden object-cover object-top brightness-[0.40] ${
                sliderIndex === index ? 'animate__fadeIn' : 'animate__fadeOut'
              }`}
            />
          );
        })}
      </Suspense>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
        <div className="text-xl font-extrabold md:text-5xl">
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <h1 className="animate__animated animate__fadeInDown text-center text-white">
            Construisons l&apos;avenir, pierre par pierre.
            <br />
            Votre vision, notre expertise.
          </h1>
        </div>
        <button
          type="button"
          /* eslint-disable-next-line tailwindcss/no-custom-classname */
          className="animate__animated animate__fadeIn animate__delay-1s mx-auto mt-8 rounded-sm bg-red-700 p-4 text-base font-bold uppercase text-white transition-all hover:bg-red-600 md:text-lg"
          onClick={() =>
            document
              .getElementById('contact_index')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contactez nous
        </button>
      </div>
    </div>
  );
};

export { Hero };
