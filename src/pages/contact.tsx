import Contact from '@/components/contact/Contact';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const ContactPage = () => (
  <Main
    meta={
      <Meta
        title="Liva Maçonnerie | Contactez nous"
        description="Formulaire de contact"
      />
    }
  >
    <div className="relative max-w-[90%]">
      <Contact />
    </div>
  </Main>
);

export default ContactPage;
