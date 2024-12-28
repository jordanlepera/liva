// components/WhyChooseUs.tsx

import React from 'react';
import { HiGlobeAlt, HiShieldCheck, HiThumbUp, HiUsers } from 'react-icons/hi';

const features = [
  {
    name: "Main d'oeuvre Expérimentée",
    description:
      "Nous sommes experts en démolition avec des années d'expérience, garantissant que chaque travail est réalisé en toute sécurité et efficacement.",
    icon: HiUsers,
  },
  {
    name: 'Sécurité Avant Tout',
    description:
      'Nous priorisons la sécurité dans chaque projet de démolition, en mettant en place des mesures de contrôle de la poussière, de gestion des débris et des protocoles de sécurité pour protéger à la fois notre équipe et votre propriété.',
    icon: HiShieldCheck,
  },
  {
    name: 'Pratiques Écologiques',
    description:
      "Nous sommes engagés dans une démolition respectueuse de l'environnement, en recyclant les matériaux autant que possible et en assurant une élimination appropriée des déchets.",
    icon: HiGlobeAlt,
  },
  {
    name: 'Satisfaction Client',
    description:
      'Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins et livrer des résultats qui dépassent vos attentes.',
    icon: HiThumbUp,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
          Pourquoi Nous Choisir ?
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center">
              <feature.icon
                className="mb-4 size-12 text-stone-600"
                aria-hidden="true"
              />
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="text-center text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
