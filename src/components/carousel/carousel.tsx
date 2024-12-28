'use client';

import Autoplay from 'embla-carousel-autoplay';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type LivaCarouselProps = {
  carouselImages: StaticImageData[];
};

export function LivaCarousel(props: LivaCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, playOnInit: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-h-[80vh] max-w-[80%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {props.carouselImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center overflow-hidden rounded-md p-0">
                  <Image
                    className="h-auto w-full"
                    src={image}
                    sizes="100vw"
                    loading="eager"
                    priority
                    alt=""
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
