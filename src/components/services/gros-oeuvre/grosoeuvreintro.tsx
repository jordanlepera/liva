import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

const GrosOeuvreIntro: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-900">
          Services de Gros Œuvre
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
              <BreadcrumbItem>Gros Œuvre</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>
        <p className="mt-4 text-lg text-gray-500">
          Chez <span className="font-semibold">Liva Maçonnerie</span>, nous
          réalisons tous vos travaux de gros œuvre avec une expertise reconnue.
          De la fondation à la toiture, nous construisons des structures solides
          et durables, en respectant les normes de construction les plus
          strictes. Notre équipe de professionnels qualifiés vous accompagne à
          chaque étape de votre projet.
        </p>
      </div>
    </section>
  );
};

export default GrosOeuvreIntro;
