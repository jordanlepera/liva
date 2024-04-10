import type { Metadata } from 'next';

import { ServicesPageContent } from '@/components/services/servicespagecontent/ServicesPageContent';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Nos services`,
  };
}

const ServicesPage = () => <ServicesPageContent />;

export default ServicesPage;
