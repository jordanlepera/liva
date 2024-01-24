import Contact from '@/components/contact/Contact';
import { Features } from '@/components/features/Features';
import { Hero } from '@/components/hero/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Liva Maçonnerie"
        description="Votre entreprise spécialisée dans la maçonnerie générale."
      />
    }
  >
    <Hero />
    <Features />
    <Contact />
  </Main>
);

export default Index;
