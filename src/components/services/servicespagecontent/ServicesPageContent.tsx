import type { StaticImageData } from 'next/image';
import React from 'react';

import amenagement_exterieur from '@/public/assets/images/services/amenagement-exterieur.webp';
import beton from '@/public/assets/images/services/coffrage.webp';
import gros_oeuvre from '@/public/assets/images/services/gros-oeuvre.webp';
import petite_demolition from '@/public/assets/images/services/petite_demolition.jpg';
import chape from '@/public/assets/images/services/ragreage.webp';

import { ServiceCard } from '../servicecard/ServiceCard';

type Service = {
  name: string;
  bgImage: StaticImageData;
  uri: string;
};

const services: Array<Service> = [
  {
    name: 'Démolition',
    bgImage: petite_demolition,
    uri: 'demolition',
  },
  {
    name: 'Aménagement extérieur',
    bgImage: amenagement_exterieur,
    uri: 'amenagement-exterieur',
  },
  {
    name: 'Gros oeuvre',
    bgImage: gros_oeuvre,
    uri: 'gros-oeuvre',
  },
  {
    name: 'Chape et ragréage',
    bgImage: chape,
    uri: 'chape-et-ragreage',
  },
  {
    name: 'Coffrage et coulage béton',
    bgImage: beton,
    uri: 'coffrage-et-coulage-beton',
  },
];

export const ServicesPageContent: React.FC = () => (
  <main className="mx-auto px-8 py-4 xl:max-w-screen-2xl">
    <h1 className="mb-4 text-2xl font-bold">Nos services</h1>
    <p>
      Liva maçonnerie est votre entreprise pour tout vos travaux de rénovations
    </p>
    <p>Parcourez la liste de nos services pour découvrir nos prestations</p>
    <div className="grid w-full gap-8 py-8 sm:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard
          key={`service-${service.name}`}
          name={service.name}
          bgImage={service.bgImage}
          uri={service.uri}
        />
      ))}
    </div>
  </main>
);
