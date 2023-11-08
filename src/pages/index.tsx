import { Hero } from '@/components/hero/Hero';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => (
  <Main
    meta={
      <Meta
        title="Liva Maçonnerie"
        description="Liva Maçonnerie, votre entreprise spécialisée dans la maçonnerie générale."
      />
    }
  >
    <Hero />
  </Main>
);

export default Index;
