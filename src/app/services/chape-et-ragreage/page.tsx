import type { Metadata } from 'next';
import React from 'react';

import ServiceIntro from '@/components/services/chape-et-ragreage/chapeetragreageintro';
import ServiceContent from '@/components/services/chape-et-ragreage/chapeetragreageservice';
import ContactCTA from '@/components/services/demolition/contactcta';
import WhyChooseUs from '@/components/services/demolition/whychooseus';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services de chape et ragréage`,
  };
}

const ChapeEtRagreagePage: React.FC = () => (
  <main className="bg-stone-50">
    <ServiceIntro />
    <ServiceContent />
    <WhyChooseUs />
    <ContactCTA />
  </main>
);

export default ChapeEtRagreagePage;
