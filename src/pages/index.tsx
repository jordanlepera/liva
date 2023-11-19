import Contact from '@/components/contact/Contact';
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
    <main className="flex flex-col items-center justify-center bg-white p-8">
      <section id="contact_index">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Contactez nous !
        </h1>
        <Contact />
      </section>
    </main>
  </Main>
);

export default Index;
