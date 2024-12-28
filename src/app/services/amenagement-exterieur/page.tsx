import type { Metadata } from 'next';
import React from 'react';

import ServiceIntro from '@/components/services/amenagement-exterieur/amenagementexterieurintro';
import ServiceContent from '@/components/services/amenagement-exterieur/amenagementexterieurservice';
import ContactCTA from '@/components/services/demolition/contactcta';
import WhyChooseUs from '@/components/services/demolition/whychooseus';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services d'aménagement extérieur`,
  };
}

const AmenagementExterieurPage: React.FC = () => (
  <main className="bg-stone-50">
    <ServiceIntro />
    <ServiceContent />
    <WhyChooseUs />
    <ContactCTA />
  </main>
);

export default AmenagementExterieurPage;
