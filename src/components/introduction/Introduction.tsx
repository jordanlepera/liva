import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Block1 from '@/public/assets/images/blocks/block1.jpg';
import Block2 from '@/public/assets/images/blocks/block2.jpg';
import Block3 from '@/public/assets/images/blocks/block3.jpg';
import Block4 from '@/public/assets/images/blocks/block4.jpg';

const Introduction: React.FC = () => {
  return (
    <div className="m-auto my-8 w-[90%]">
      <div className="grid min-h-96 grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 w-full overflow-hidden rounded-tl-3xl md:hidden">
          <Image
            src={Block1}
            alt="illustration description liva maçonnerie"
            priority
            fill
            className="overflow-hidden object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="flex min-h-64 items-center justify-center rounded-br-3xl bg-stone-700 p-12 text-white md:rounded-bl-3xl md:rounded-br-none md:rounded-tl-md">
          Bienvenue chez Liva Maçonnerie, votre partenaire de confiance pour
          tous vos projets de maçonnerie dans le secteur de Belfort et ses
          environs.
          <br />
          <br />
          Notre équipe dévouée s&apos;engage à donner vie à vos idées en alliant
          expertise, créativité et savoir-faire artisanal.
        </div>
        <div className="relative hidden h-auto overflow-hidden md:block md:rounded-br-md md:rounded-tr-3xl">
          <Image
            src={Block1}
            alt="illustration description liva maçonnerie"
            priority
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="relative mt-8 rounded-t-md bg-stone-100 p-12 sm:rounded-3xl sm:pb-40">
        La rénovation est notre passion. Nous comprenons l&apos;importance de
        donner une nouvelle vie à vos espaces, et notre équipe qualifiée excelle
        dans la restauration de bâtiments anciens tout en intégrant des
        solutions modernes et durables. Que ce soit pour une rénovation
        intérieure ou extérieure, nous mettons notre expérience au service de la
        préservation de votre patrimoine.
      </div>
      <div className="relative h-80 sm:top-[-125px] sm:mx-auto sm:w-[90%]">
        <Image
          src={Block2}
          alt="illustration renovation liva maçonnerie"
          priority
          className="size-full overflow-hidden rounded-b-md object-cover object-center sm:rounded-md"
          fill
          sizes="100vw"
        />
      </div>
      <div className="mt-[-50px] flex flex-col justify-center rounded-md bg-gradient-to-b from-stone-300">
        <div className="relative bg-stone-800 p-20 text-center text-white md:right-[-150px] md:w-1/2">
          Nos services vont au-delà de la simple maçonnerie. Du coulage de chape
          à la création d&apos;aménagements extérieurs élégants, en passant par
          les petites démolitions et les travaux de coffrage, Liva Maçonnerie
          est votre partenaire polyvalent pour tous vos besoins en construction.
          Nous sommes fiers de notre capacité à réaliser des projets de grande
          envergure tout en accordant une attention particulière aux détails.
        </div>
        <div className="relative h-96 md:left-[-150px] md:top-[-40px] md:w-1/2 md:self-end">
          <Image
            src={Block3}
            alt="illustration renovation liva maçonnerie"
            priority
            className="size-full overflow-hidden rounded-b-md object-cover object-center sm:rounded-3xl"
            fill
            sizes="100vw"
          />
        </div>
      </div>
      <div className="mt-8 grid min-h-96 grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 w-full overflow-hidden rounded-tl-3xl md:hidden">
          <Image
            src={Block4}
            alt="illustration description liva maçonnerie"
            priority
            fill
            className="overflow-hidden object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative hidden h-auto overflow-hidden md:block md:rounded-bl-3xl md:rounded-tl-md">
          <Image
            src={Block4}
            alt="illustration description liva maçonnerie"
            priority
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="flex min-h-64 items-center justify-center rounded-br-3xl bg-stone-900 p-12 text-white md:rounded-bl-none md:rounded-br-md md:rounded-tr-3xl">
          L&apos;isolation est également au cœur de notre engagement envers
          l&apos;efficacité énergétique et le confort de votre habitat. Nous
          utilisons des matériaux de haute qualité pour assurer une isolation
          optimale, contribuant ainsi à la réduction de votre empreinte
          écologique et à des économies d&apos;énergie significatives.
        </div>
      </div>
      <div className="mx-auto mt-8 flex min-h-[33vh] items-center rounded-b-md bg-gradient-to-t from-stone-200 p-8 pb-12 font-bold sm:px-40">
        Chez Liva Maçonnerie, nous comprenons que chaque projet est unique.
        C&apos;est pourquoi nous travaillons en étroite collaboration avec nos
        clients, écoutant attentivement leurs besoins et leurs aspirations.
        Notre approche personnalisée garantit non seulement la satisfaction de
        nos clients, mais aussi la réalisation de projets qui dépassent les
        attentes.
      </div>
      <div className="my-8">
        Explorez notre portfolio pour découvrir nos réalisations précédentes et
        laissez-vous inspirer. Pour des services de maçonnerie fiables et de
        haute qualité dans le secteur de Belfort et ses alentours, choisissez
        Liva Maçonnerie – où l&apos;excellence prend vie.
      </div>
      <Link href="/galerie">
        <div className="mx-auto flex w-80 items-center justify-center border-4 border-stone-800 bg-stone-800 p-4 text-3xl text-white transition-all duration-300 hover:cursor-pointer hover:bg-stone-50 hover:text-stone-800">
          Visiter la galerie
        </div>
      </Link>
      <div className="mt-8 border border-white border-b-stone-200 pb-8">
        Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et
        laissez-nous transformer vos idées en une réalité solide et durable.
        Liva Maçonnerie, bâtissons ensemble votre avenir !
      </div>
    </div>
  );
};

export { Introduction };
