import type { Metadata } from 'next';
import React from 'react';

import ServiceIntro from '@/components/services/coffrage-et-coulage-beton/coffrageetcoulagebetonintro';
import ServiceContent from '@/components/services/coffrage-et-coulage-beton/coffrageetcoulagebetonservice';
import ContactCTA from '@/components/services/demolition/contactcta';
import WhyChooseUs from '@/components/services/demolition/whychooseus';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services de coffrage et coulage béton`,
  };
}

const CoffrageEtCoulageBetonPage: React.FC = () => (
  <main className="bg-stone-50">
    <ServiceIntro />
    <ServiceContent />
    <WhyChooseUs />
    <ContactCTA />
  </main>
);

export default CoffrageEtCoulageBetonPage;
