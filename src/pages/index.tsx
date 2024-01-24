import Contact from '@/components/contact/Contact';
import { Features } from '@/components/features/Features';
import { Hero } from '@/components/hero/Hero';
import { Introduction } from '@/components/introduction/Introduction';
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
    <Introduction />
    <Contact />
  </Main>
);

export default Index;
