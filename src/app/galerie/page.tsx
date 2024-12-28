import type { Metadata } from 'next';
// import Image from 'next/image';
// import { Suspense } from 'react';
import * as React from 'react';

import { LivaCarousel } from '@/components/carousel/carousel';
// import { Loading } from '@/components/loading/Loading';
import photo6 from '@/public/assets/images/galerie/20220628_192820.webp';
import photo1 from '@/public/assets/images/galerie/20230617_072226.webp';
import photo2 from '@/public/assets/images/galerie/20230617_090438.webp';
import photo3 from '@/public/assets/images/galerie/20231006_110639.webp';
import photo5 from '@/public/assets/images/galerie/20231012_145939.webp';
import photo4 from '@/public/assets/images/galerie/20231014_105626.webp';
import photo7 from '@/public/assets/images/galerie/20231014_121041.webp';
import photo9 from '@/public/assets/images/galerie/20231015_145309.webp';
import photo8 from '@/public/assets/images/galerie/20231111_121335.webp';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Galerie photo`,
  };
}

const Galerie = () => {
  return (
    <div className="flex justify-center">
      <LivaCarousel
        carouselImages={[
          photo1,
          photo2,
          photo3,
          photo4,
          photo5,
          photo6,
          photo7,
          photo8,
          photo9,
        ]}
      />
    </div>
  );
  // <div className="relative p-8">
  //   <h1 className="w-full text-center text-xl font-bold md:text-4xl">
  //     Galerie
  //   </h1>
  //   <Suspense
  //     fallback={
  //       <div className="m-12">
  //         <Loading />
  //       </div>
  //     }
  //   >
  //     <div className="relative grid grid-cols-1 gap-4 p-2 pt-8 md:grid-cols-3 md:p-16">
  //       <div className="grid grid-cols-1 gap-4">
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${0 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo1}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${1 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo2}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${2 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo3}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //       <div className="grid gap-4">
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${3 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo4}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${4 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo5}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${5 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo6}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //       <div className="grid gap-4">
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${6 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo9}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${7 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo8}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //         <div
  //           className="overflow-hidden rounded-lg opacity-0"
  //           style={{
  //             animation: 'slideInDownAndFadeIn 0.5s ease-in-out',
  //             animationDelay: `${8 * 100}ms`,
  //             animationFillMode: 'forwards',
  //           }}
  //         >
  //           <Image
  //             className="h-auto max-w-full transition-all duration-500 hover:scale-110"
  //             src={photo7}
  //             sizes="100vw"
  //             loading="eager"
  //             priority
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </Suspense>
  // </div>
};

export default Galerie;
