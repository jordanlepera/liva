import type { Metadata } from 'next';

import Contact from '@/components/contact/Contact';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Contactez-nous`,
  };
}

const ContactPage = () => (
  <div className="relative mx-auto xl:max-w-screen-2xl">
    <Contact />
  </div>
);

export default ContactPage;
