import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const ChapeEtRagreageIntro: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
          Services de Chape et Ragréage
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
              <BreadcrumbItem>Chape et Ragréage</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <p className="mt-4 text-lg text-gray-500">
          Chez <span className="font-semibold">Liva Maçonnerie</span>, nous
          préparons vos sols avec expertise grâce à nos services de chape et
          ragréage. Une base solide est essentielle pour la durabilité et
          l&apos;esthétique de vos revêtements de sol. Notre équipe assure une
          surface parfaitement nivelée et lisse, prête à accueillir le
          revêtement de votre choix.
        </p>
      </div>
    </section>
  );
};

export default ChapeEtRagreageIntro;
