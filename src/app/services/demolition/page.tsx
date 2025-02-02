import type { Metadata } from 'next';
import React from 'react';

import ContactCTA from '@/components/services/demolition/contactcta';
import DemolitionIntro from '@/components/services/demolition/demolitionintro';
import DemolitionService from '@/components/services/demolition/demolitionservice';
import WhyChooseUs from '@/components/services/demolition/whychooseus';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services de démolition`,
  };
}

const DemolitionPage: React.FC = () => (
  <main className="bg-stone-50">
    <DemolitionIntro />
    <DemolitionService />
    <WhyChooseUs />
    <ContactCTA />
  </main>
);

export default DemolitionPage;
