'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Démolition Intérieure',
    description:
      "La démolition intérieure comprend le retrait des murs, plafonds, sols et autres structures à l'intérieur d'un bâtiment pour préparer une rénovation ou un réaménagement. Nous nous occupons de tout, qu'il s'agisse de démolitions partielles ou de déposes complètes.",
    types: [
      {
        name: 'Retrait de Murs',
        description:
          'Que ce soit un mur non-porteur ou un mur nécessitant un support soigneux, nous pouvons retirer les murs pour ouvrir les espaces ou reconfigurer les agencements.',
      },
      {
        name: 'Retrait de Plafonds',
        description:
          'Des plafonds suspendus aux conceptions plus complexes, nous les retirons en toute sécurité sans perturber les zones environnantes.',
      },
      {
        name: 'Retrait de Sols',
        description:
          'Nous nous chargeons du retrait des anciens carrelages, parquets, moquettes ou autres types de sols pour préparer de nouvelles installations.',
      },
    ],
    features: [
      'Mesures de contrôle de la poussière et du bruit',
      'Élimination sécurisée des matériaux',
      "Attention aux détails pour éviter d'endommager les structures environnantes",
    ],
    image: '/assets/images/services/etai-murporteur.webp',
    imageAlt:
      'Démolition intérieure en cours avec mesures de sécurité en place',
  },
  {
    id: 2,
    title: 'Petite Démolition Extérieure',
    description:
      'Nos services de démolition extérieure sont parfaits pour les petits projets tels que le retrait de cabanons, terrasses ou autres structures externes. Nous veillons à ce que la démolition soit effectuée rapidement et proprement, en minimisant les perturbations sur votre propriété.',
    types: [
      {
        name: 'Retrait de Cabanon',
        description:
          "Nous démontons et retirons les cabanons de toutes tailles, libérant ainsi l'espace pour un nouvel aménagement paysager ou de nouvelles structures.",
      },
      {
        name: 'Retrait de Terrasse',
        description:
          'Que vous remplaciez une ancienne terrasse ou réimaginiez complètement votre espace extérieur, nous retirerons soigneusement votre terrasse existante.',
      },
      {
        name: 'Retrait de Clôture',
        description:
          'Les clôtures obsolètes ou endommagées peuvent être retirées efficacement pour laisser place à de nouveaux designs ou pour ouvrir votre jardin.',
      },
    ],
    features: [
      'Perturbation minimale des zones environnantes',
      'Nettoyage complet et élimination des débris',
      "Élimination responsable des matériaux respectueuse de l'environnement",
    ],
    image: '/assets/images/services/couper-dalle-beton.jpg',
    imageAlt: "Retrait d'une terrasse avec un espace propre laissé derrière",
  },
];

const DemolitionService: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Nos Services de Démolition
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

export default DemolitionService;
