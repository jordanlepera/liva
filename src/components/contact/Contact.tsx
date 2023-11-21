'use client';

import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/lib/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const phoneNum = '07 66 30 29 65';

let displayPrivateData = false;

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  function displayPhoneNumber() {
    const phone = document.getElementById('phone');
    displayPrivateData = !displayPrivateData;
    if (phone && displayPrivateData === false) {
      phone.innerText = phoneNum;
    } else if (phone && displayPrivateData === true) {
      phone.innerText = 'Cliquez ici pour afficher';
    }
  }

  return (
    <div>
      <div className="text-center">
        <div>Liva Maçonnerie</div>
        <div>90800 Bavilliers</div>
        <br />
        <div>
          <h4 className="font-bold">Horaires d&apos;ouvertures</h4>
          Lundi au vendredi : 8h - 18h
          <br />
        </div>
        <div>
          Téléphone:{' '}
          <button
            id="phone"
            type="button"
            onClick={() => displayPhoneNumber()}
            className="cursor-pointer rounded-md bg-stone-500 px-2 py-1 text-white"
          >
            Cliquez ici pour afficher
          </button>
        </div>
        <br />
        <div>
          Vous avez une question ?
          <br />
          Contactez nous également par message
          <br />
          avec le formulaire ci-dessous
        </div>
      </div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-black"
            inputMode="text"
          >
            Nom et prénom
            <input
              type="text"
              placeholder="Nom et prénom"
              className="w-full rounded-md border border-gray-300 bg-white p-3 text-base font-medium text-gray-700 outline-none focus:border-stone-500 focus:shadow-md"
              {...register('name', { required: true })}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-black"
          >
            Adresse e-mail
            <input
              type="email"
              placeholder="exemple@gmail.com"
              className="w-full rounded-md border border-gray-300 bg-white p-3 text-base font-medium text-gray-700 outline-none focus:border-stone-500 focus:shadow-md"
              {...register('email', { required: true })}
            />
          </label>
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-base font-medium text-black"
          >
            Message
            <textarea
              rows={4}
              placeholder="Votre message"
              className="w-full resize-none rounded-md border border-gray-300 bg-white p-3 text-base font-medium text-gray-700 outline-none focus:border-stone-500 focus:shadow-md"
              {...register('message', { required: true })}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-stone-500 px-8 py-3 text-base font-semibold text-white outline-none"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
