'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Terrassement et Préparation de Terrain',
    description:
      "Le terrassement est la base de tout aménagement extérieur réussi. Nous préparons votre terrain pour accueillir vos projets, qu'il s'agisse de nivellement, de déblaiement ou de création de plateformes.",
    types: [
      {
        name: 'Nivellement de Terrain',
        description:
          'Nous assurons une surface plane et stable pour vos futures constructions ou aménagements paysagers.',
      },
      {
        name: 'Déblaiement',
        description:
          'Évacuation des terres et des matériaux pour préparer votre site.',
      },
      {
        name: 'Création de Plateformes',
        description:
          'Mise en place de surfaces planes pour terrasses, allées ou autres éléments.',
      },
    ],
    features: [
      "Utilisation d'équipements adaptés",
      'Respect des contraintes du terrain',
      'Optimisation des coûts et des délais',
    ],
    image: '/assets/images/services/amenagement-exterieur.webp',
    imageAlt: 'Terrassement en cours',
  },
  {
    id: 2,
    title: 'Pose de Clôtures et Murs de Soutènement',
    description:
      'Délimitez votre propriété et structurez votre jardin avec nos solutions de clôtures et de murs de soutènement, alliant esthétique et fonctionnalité.',
    types: [
      {
        name: 'Clôtures Rigides et Ornementales',
        description:
          'Installation de clôtures pour sécuriser et embellir votre extérieur.',
      },
      {
        name: 'Murs de Soutènement en Pierre ou en Béton',
        description:
          'Construction de murs pour retenir les terres et créer des espaces.',
      },
      {
        name: 'Gabions',
        description:
          'Installation de structures en gabions pour un aspect moderne et une bonne stabilité.',
      },
    ],
    features: [
      'Large choix de matériaux et de styles',
      'Installation durable et résistante',
      'Valorisation de votre propriété',
    ],
    image: '/assets/images/services/cloture.jpg',
    imageAlt: 'Pose de clôtures',
  },
  {
    id: 3,
    title: "Création d'Allées et de Terrasses",
    description:
      "Aménagez des espaces de circulation et de détente avec nos services de création d'allées et de terrasses, en utilisant des matériaux de qualité et des techniques éprouvées.",
    types: [
      {
        name: 'Allées en Pavés, Dalles ou Gravier',
        description:
          "Conception et réalisation d'allées pratiques et esthétiques.",
      },
      {
        name: 'Terrasses en Bois, Béton ou Carrelage',
        description:
          'Construction de terrasses sur mesure pour profiter de votre extérieur.',
      },
      {
        name: 'Bordures et Accès',
        description:
          "Amélioration des finitions et de l'accessibilité de vos espaces.",
      },
    ],
    features: [
      'Personnalisation des matériaux et des designs',
      'Intégration harmonieuse à votre environnement',
      "Création d'espaces conviviaux",
    ],
    image: '/assets/images/services/amenagement_exterieur.jpg',
    imageAlt: "Création d'allées et de terrasses",
  },
];

const AmenagementExterieurService: React.FC = () => {
  return (
    <section className="bg-gray-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900">
          Nos Services d&apos;Aménagement Extérieur
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

export default AmenagementExterieurService;
