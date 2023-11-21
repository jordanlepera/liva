'use client';

import type { FC } from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/lib/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
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
  );
};

export default Contact;
