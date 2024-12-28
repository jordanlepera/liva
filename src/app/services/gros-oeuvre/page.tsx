import type { Metadata } from 'next';
import React from 'react';

import ContactCTA from '@/components/services/demolition/contactcta';
import WhyChooseUs from '@/components/services/demolition/whychooseus';
import ServiceIntro from '@/components/services/gros-oeuvre/grosoeuvreintro';
import ServiceContent from '@/components/services/gros-oeuvre/grosoeuvreservice';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services de gros oeuvre`,
  };
}

const GrosOeuvrePage: React.FC = () => (
  <main className="bg-stone-50">
    <ServiceIntro />
    <ServiceContent />
    <WhyChooseUs />
    <ContactCTA />
  </main>
);

export default GrosOeuvrePage;
