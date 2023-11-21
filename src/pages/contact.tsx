import Contact from '@/components/contact/Contact';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const ContactPage = () => (
  <Main
    meta={<Meta title="Contactez nous" description="Formulaire de contact" />}
  >
    <div className="relative p-8">
      <h1 className="w-full text-center text-xl font-bold md:text-4xl">
        Contactez nous !
      </h1>
      <main className="flex flex-col items-center justify-center bg-white pt-8">
        <Contact />
      </main>
    </div>
  </Main>
);

export default ContactPage;
