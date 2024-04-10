import type { Metadata } from 'next';

import Contact from '@/components/contact/Contact';
import { Features } from '@/components/landing/features/Features';
import { Hero } from '@/components/landing/hero/Hero';
import { Landing } from '@/components/landing/landing/Landing';
import { AppConfig } from '@/utils/AppConfig';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${AppConfig.title} | Construisons l'avenir, pierre par pierre. Votre vision, notre expertise`,
  };
}

const IndexPage = () => (
  <>
    <Hero />
    <Features />
    <Landing />
    <div className="xl:max-w-screen-2xl 2xl:mx-auto">
      <Contact />
    </div>
  </>
);

export default IndexPage;
