import type { Metadata } from 'next';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services de démolition`,
  };
}

const DemolitionPage: React.FC = () => (
  <main className="mx-auto px-8 py-4 xl:max-w-screen-2xl">
    <h1 className="mb-4 text-2xl font-bold">Nos services de démolition</h1>
    <p>
      Liva maçonnerie est votre entreprise pour tout vos travaux de rénovations
    </p>
  </main>
);

export default DemolitionPage;
