// components/WhyChooseUs.tsx

import React from 'react';
import { HiGlobeAlt, HiShieldCheck, HiThumbUp, HiUsers } from 'react-icons/hi';

const features = [
  {
    name: "Main d'oeuvre expérimentée",
    description:
      "Notre équipe qualifiée possède des années d'expérience dans le domaine, garantissant un travail de qualité et des prestations irréprochables.",
    icon: HiUsers,
  },
  {
    name: 'Sécurité avant tout',
    description:
      'Nous priorisons la sécurité dans chaque projet, en mettant en place des mesures de contrôle appropriées pour protéger à la fois notre équipe et votre propriété.',
    icon: HiShieldCheck,
  },
  {
    name: 'Engagement environnemental',
    description:
      "Nous adoptons une approche éco-responsable dans tous nos projets, en privilégiant des pratiques durables et respectueuses de l'environnement.",
    icon: HiGlobeAlt,
  },
  {
    name: 'Satisfaction client',
    description:
      'Votre satisfaction est notre priorité. Nous vous accompagnons à chaque étape du projet pour garantir des résultats à la hauteur de vos attentes.',
    icon: HiThumbUp,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-8 text-3xl font-extrabold text-gray-900">
          Pourquoi nous choisir ?
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
