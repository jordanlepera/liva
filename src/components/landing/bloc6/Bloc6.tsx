import Link from 'next/link';
import React from 'react';

export const Bloc6: React.FC = () => {
  return (
    <div className="px-12 lg:px-40 xl:max-w-screen-2xl 2xl:mx-auto">
      <div className="my-8">
        <p>
          Explorez notre portfolio pour découvrir nos réalisations précédentes
          et laissez-vous inspirer.
        </p>
        <br />
        <p>
          Pour des services de maçonnerie fiables et de haute qualité dans le
          secteur de Belfort et ses alentours, choisissez Liva Maçonnerie – où
          l&apos;excellence prend vie.
        </p>
      </div>
      <Link href="/galerie">
        <div className="mx-auto flex max-w-96 items-center justify-center border-4 border-stone-800 bg-stone-800 p-4 text-3xl text-white transition-all duration-300 hover:cursor-pointer hover:bg-stone-50 hover:text-stone-800">
          Visiter la galerie
        </div>
      </Link>
      <div className="mt-8 border-white pb-8">
        <p>
          Contactez-nous dès aujourd&apos;hui pour discuter de votre projet et
          laissez-nous transformer vos idées en une réalité solide et durable.
        </p>
      </div>
    </div>
  );
};
