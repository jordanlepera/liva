import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const CoffrageEtCoulageBetonIntro: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
          Services de Coffrage et Coulage Béton
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
              <BreadcrumbItem>Coffrage et Coulage Béton</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <p className="mt-4 text-lg text-gray-500">
          Chez <span className="font-semibold">Liva Maçonnerie</span>, nous
          sommes experts en coffrage et coulage de béton, assurant des
          structures solides et durables pour tous vos projets de construction.
          Que ce soit pour des fondations, des murs, des dalles ou des éléments
          architecturaux, notre équipe maîtrise les techniques les plus avancées
          pour un résultat impeccable.
        </p>
      </div>
    </section>
  );
};

export default CoffrageEtCoulageBetonIntro;
