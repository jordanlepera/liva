'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Fondations',
    description:
      'Les fondations sont la base de toute construction. Nous réalisons des fondations solides et adaptées à la nature du sol et aux spécificités de votre projet.',
    types: [
      {
        name: 'Semelles Filantes',
        description:
          'Pour les murs porteurs, elles répartissent la charge sur une large surface.',
      },
      {
        name: 'Semelles Isolées',
        description:
          'Pour les poteaux, elles supportent des charges ponctuelles.',
      },
      {
        name: 'Radier Général',
        description:
          'Pour les sols instables, il assure une répartition uniforme des charges.',
      },
    ],
    features: [
      'Étude de sol préalable',
      'Respect des normes de construction',
      'Garantie de stabilité',
    ],
    image: '/assets/images/services/fondation.webp',
    imageAlt: 'Réalisation de fondations',
  },
  {
    id: 2,
    title: 'Murs Porteurs',
    description:
      'Les murs porteurs assurent la stabilité de la structure. Nous construisons des murs en béton, en parpaings ou en briques, en respectant les plans et les normes en vigueur.',
    types: [
      {
        name: 'Murs en Béton Armé',
        description:
          'Pour une résistance maximale, ils sont coulés avec une armature en acier.',
      },
      {
        name: 'Murs en Parpaings',
        description:
          'Économiques et rapides à mettre en œuvre, ils sont adaptés aux constructions courantes.',
      },
      {
        name: 'Murs en Briques',
        description:
          'Esthétiques et isolantes, elles sont utilisées pour les constructions traditionnelles.',
      },
    ],
    features: [
      'Choix des matériaux adaptés',
      'Respect des plans de construction',
      'Garantie de solidité',
    ],
    image: '/assets/images/services/gros-oeuvre-murs.jpg',
    imageAlt: 'Construction de murs porteurs',
  },
  {
    id: 3,
    title: 'Planchers et Dalles',
    description:
      'Les planchers et les dalles assurent la séparation entre les niveaux et supportent les charges. Nous réalisons des planchers en béton armé, en bois ou en acier, en fonction de vos besoins.',
    types: [
      {
        name: 'Planchers en Béton Armé',
        description:
          'Résistants et durables, ils sont adaptés à tous types de constructions.',
      },
      {
        name: 'Planchers en Bois',
        description:
          'Légers et esthétiques, ils sont utilisés pour les constructions traditionnelles.',
      },
      {
        name: 'Planchers en Acier',
        description:
          'Pour les grandes portées, ils offrent une grande résistance.',
      },
    ],
    features: [
      'Choix des matériaux adaptés',
      'Respect des plans de construction',
      'Garantie de solidité',
    ],
    image: '/assets/images/services/plancher-beton.webp',
    imageAlt: 'Construction de planchers et dalles',
  },
];

const GrosOeuvreService: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Nos Services de Gros Œuvre
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
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

export default GrosOeuvreService;
