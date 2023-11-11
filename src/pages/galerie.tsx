import Image from 'next/image';

import { Meta } from '@/layouts/Meta';
import photo6 from '@/public/assets/images/galerie/20220628_192820.jpg';
import photo1 from '@/public/assets/images/galerie/20230617_072226.jpg';
import photo2 from '@/public/assets/images/galerie/20230617_090438.jpg';
import photo3 from '@/public/assets/images/galerie/20231006_110639.jpg';
import photo5 from '@/public/assets/images/galerie/20231012_145939.jpg';
import photo4 from '@/public/assets/images/galerie/20231014_105626.jpg';
import photo7 from '@/public/assets/images/galerie/20231014_121041.jpg';
import photo9 from '@/public/assets/images/galerie/20231015_145309.jpg';
import photo8 from '@/public/assets/images/galerie/20231111_121335.jpg';
import { Main } from '@/templates/Main';

const Galerie = () => (
  <Main meta={<Meta title="Galerie" description="Galerie photo" />}>
    <div className="relative p-8">
      <h1 className="w-full text-center text-xl font-bold md:text-4xl">
        Galerie
      </h1>
      <div className="relative grid grid-cols-1 gap-4 p-2 pt-8 md:grid-cols-3 md:p-16">
        <div className="grid grid-cols-1 gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo1}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo2}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo3}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo4}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo5}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo6}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo9}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo8}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo7}
              sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        {/* <div className="grid gap-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo1}
                            sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo1}
                            sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              className="h-auto max-w-full transition-all duration-500 ease-in-out hover:scale-110"
              src={photo1}
                            sizes="100vw"
              loading="lazy"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  </Main>
);

export default Galerie;
