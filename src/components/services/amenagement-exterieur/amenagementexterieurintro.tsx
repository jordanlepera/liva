import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const AmenagementExterieurIntro: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
          Services d&apos;Aménagement Extérieur
        </h1>
        <nav
          className="flex w-full items-center justify-center"
          aria-label="Back"
        >
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services">Services</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Aménagement Extérieur</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <p className="mt-4 text-lg text-gray-500">
          Chez <span className="font-semibold">Liva Maçonnerie</span>, nous
          transformons vos espaces extérieurs en Havens esthétiques et
          fonctionnels. Nos services d&apos;aménagement extérieur sont conçus
          pour embellir votre propriété, améliorer votre qualité de vie et
          augmenter la valeur de votre bien. De la conception à la réalisation,
          notre équipe d&apos;experts vous accompagne dans la création de
          l&apos;extérieur de vos rêves.
        </p>
      </div>
    </section>
  );
};

export default AmenagementExterieurIntro;
