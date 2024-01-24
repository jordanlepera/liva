import React from 'react';

import { Feature } from '@/components/feature/Feature';

const featureList = [
  {
    icon: '📝',
    title: 'Devis',
    description: 'Nous vous proposons un devis gratuit et sans engagement',
  },
  {
    icon: '🛠',
    title: 'Expertise',
    description: 'Nous mettons à votre disposition une expertise de qualité',
  },
  {
    icon: '🤝',
    title: 'Conseil',
    description:
      'Nous vous accompagnons et vous conseillons pour tout vos projets',
  },
  {
    icon: '⏳',
    title: 'Délais',
    description: 'Nous nous engageons sur les délais de réalisation',
  },
];

const Features = () => (
  <div className="m-auto mt-6 w-[90%]">
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {featureList.map((feature) => (
        <Feature
          key={feature.title}
          title={feature.title}
          icon={feature.icon}
          description={feature.description}
        />
      ))}
    </div>
  </div>
);

export { Features };
