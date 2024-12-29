'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Coffrage Traditionnel',
    description:
      'Le coffrage traditionnel consiste à construire des moules en bois sur mesure pour accueillir le béton. Cette méthode est idéale pour les formes complexes et les projets personnalisés.',
    types: [
      {
        name: 'Coffrage de Fondations',
        description:
          'Réalisation de coffrages pour les semelles, les longrines et les radiers.',
      },
      {
        name: 'Coffrage de Murs',
        description:
          'Construction de coffrages pour les murs porteurs et non-porteurs.',
      },
      {
        name: 'Coffrage de Poteaux et Poutres',
        description:
          'Mise en place de coffrages pour les éléments verticaux et horizontaux.',
      },
    ],
    features: [
      'Adaptabilité aux formes complexes',
      'Personnalisation des dimensions',
      'Solidité et précision',
    ],
    image: '/assets/images/services/coffrage.webp',
    imageAlt: 'Coffrage traditionnel en bois',
  },
  {
    id: 2,
    title: 'Coulage de Béton',
    description:
      "Le coulage de béton est l'étape finale où le béton est versé dans les coffrages. Nous assurons un coulage précis et homogène pour une structure solide et durable.",
    types: [
      {
        name: 'Coulage de Béton Standard',
        description:
          "Utilisation de béton prêt à l'emploi pour les structures courantes.",
      },
      {
        name: 'Coulage de Béton Spécial',
        description:
          'Utilisation de béton haute performance pour les ouvrages spécifiques.',
      },
      {
        name: 'Vibration du Béton',
        description:
          "Technique pour éliminer les bulles d'air et assurer une bonne compacité.",
      },
    ],
    features: [
      'Respect des normes de construction',
      'Utilisation de béton de qualité',
      'Contrôle de la mise en œuvre',
    ],
    image: '/assets/images/services/coulage.webp',
    imageAlt: 'Coulage de béton dans un coffrage',
  },
  {
    id: 3,
    title: "Création d'Escaliers en Béton",
    description:
      "Nous réalisons des escaliers en béton sur mesure, alliant fonctionnalité et esthétique. Nos escaliers sont conçus pour s'intégrer parfaitement à votre intérieur ou extérieur.",
    types: [
      {
        name: 'Escaliers Droits',
        description: "Conception et réalisation d'escaliers droits en béton.",
      },
      {
        name: 'Escaliers Tournants',
        description:
          "Création d'escaliers tournants en béton, optimisant l'espace.",
      },
      {
        name: 'Escaliers Balancés',
        description:
          "Fabrication d'escaliers balancés en béton pour un design unique.",
      },
    ],
    features: [
      'Création sur mesure',
      'Durabilité et résistance',
      'Adaptabilité à différents styles architecturaux',
    ],
    image: '/assets/images/services/beton.webp',
    imageAlt: 'Escalier en béton',
  },
];

const CoffrageEtCoulageBetonService: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Nos Services de Coffrage et Coulage Béton
        </h2>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={600}
                    height={400}
                    className="mr-8 rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
              <div className="mt-8 pr-8 lg:mt-0 lg:w-1/2 lg:pl-12">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-700">{service.description}</p>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                  Types de {service.title} :
                </h4>
                <ul className="mb-6 list-inside list-disc space-y-2">
                  {service.types.map((type) => (
                    <li key={type.name}>
                      <span className="font-medium text-gray-900">
                        {type.name}:
                      </span>{' '}
                      {type.description}
                    </li>
                  ))}
                </ul>
                <h4 className="mb-2 text-xl font-semibold text-gray-800">
                  Principales Caractéristiques :
                </h4>
                <ul className="list-inside list-disc space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffrageEtCoulageBetonService;
