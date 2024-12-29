'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Chape Traditionnelle',
    description:
      'La chape traditionnelle est une couche de mortier appliquée sur la dalle de béton pour niveler le sol et fournir une base solide pour les revêtements de sol. Elle est idéale pour les grandes surfaces et offre une excellente durabilité.',
    types: [
      {
        name: 'Chape Ciment',
        description:
          "Composée de ciment, de sable et d'eau, elle est robuste et adaptée aux pièces humides.",
      },
      {
        name: 'Chape Anhydrite',
        description:
          'À base de sulfate de calcium, elle offre une surface très lisse et un séchage rapide.',
      },
    ],
    features: [
      'Excellente planéité',
      'Bonne isolation thermique et acoustique',
      'Adaptée à tous types de revêtements',
    ],
    image: '/assets/images/services/chape.webp',
    imageAlt: "Application d'une chape traditionnelle",
  },
  {
    id: 2,
    title: 'Ragréage',
    description:
      'Le ragréage consiste àSurfacer un sol irrégulier pour obtenir une surface lisse et plane avant la pose du revêtement de sol. Il est indispensable pour les rénovations et permet de corriger les défauts de planéité.',
    types: [
      {
        name: 'Ragréage Autolissant',
        description:
          "Pour les défauts de planéité importants, il s'étale facilement et offre un résultat impeccable.",
      },
      {
        name: 'Ragréage Pâteux',
        description:
          "Pour les petites imperfections, il s'appliqueLocalement et sèche rapidement.",
      },
    ],
    features: [
      'Correction des irrégularités',
      "Amélioration de l'adhérence du revêtement",
      'Préparation idéale pour tous types de sols',
    ],
    image: '/assets/images/services/ragreage.webp',
    imageAlt: "Application d'un ragréage",
  },
];

const ChapeEtRagreageService: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Nos Services de Chape et Ragréage
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

export default ChapeEtRagreageService;
