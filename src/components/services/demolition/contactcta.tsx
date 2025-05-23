// components/ContactCTA.tsx

import Link from 'next/link';
import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-stone-600 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-white">
          Obtenez un devis gratuit
        </h2>
        <p className="mb-8 text-lg text-stone-100">
          Prêt à démarrer votre projet sur de bonnes bases ?
          <br />
          Contactez-nous dès aujourd&apos;hui pour obtenir un devis gratuit.
          Nous sommes là pour répondre à toutes vos questions et vous aider à
          planifier les prochaines étapes de votre projet de construction ou de
          rénovation.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-stone-600 hover:bg-stone-50"
          >
            Demandez un devis gratuit
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-stone-500"
          >
            Découvrez nos autres services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
