'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { sendEmail } from '@/lib/send-email';
import contact from '@/public/assets/images/contact/contact.jpg';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const phoneNum = '07 66 30 29 65';

const Contact: FC = () => {
  const [displayPhoneNumber, setDisplayPhoneNumber] =
    React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [statusMessage, setStatusMessage] = React.useState<string>('');
  const [statusType, setStatusType] = React.useState<'success' | 'error' | ''>(
    '',
  );
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setStatusMessage('');
    setStatusType('');
    try {
      const response = await sendEmail(data);
      const result = await response.json();
      console.log(result);
      console.log(response);
      console.log(result.error);
      if (!response.ok) {
        throw new Error(result.error || "Échec de l'envoi du message");
      }
      setStatusMessage(result.message);
      setStatusType('success');
    } catch (error) {
      setStatusMessage(
        "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
      );
      setStatusType('error');
      console.log(error);
      console.log((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  function togglePhoneNumber() {
    const phone = document.getElementById('phone');
    if (phone && !displayPhoneNumber) {
      phone.innerText = phoneNum;
    } else if (phone && displayPhoneNumber) {
      phone.innerText = 'Cliquez ici pour afficher';
    }
    setDisplayPhoneNumber(!displayPhoneNumber);
  }

  return (
    <main className="flex flex-col justify-center bg-white p-8">
      <section id="contact_index">
        <div className="sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="relative mb-6 h-64 w-full rounded-lg sm:hidden">
            <Image
              src={contact}
              alt="contact liva maçonnerie"
              priority
              className="rounded-lg object-cover"
              fill
              sizes="100vw"
            />
          </div>
          <div>
            <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
              Contactez nous
            </h1>
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
                  onClick={() => togglePhoneNumber()}
                  className="cursor-pointer rounded-sm bg-stone-500 px-2 py-1 text-white transition-colors hover:bg-stone-600"
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
            <div className="">
              <div className="">
                {statusMessage && (
                  <div
                    className={`mb-4 rounded-lg p-4 ${
                      statusType === 'success'
                        ? 'border border-green-400 bg-green-100 text-green-700'
                        : 'border border-red-400 bg-red-100 text-red-700'
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
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
                      disabled={isLoading}
                      className="w-full rounded-md bg-stone-500 px-8 py-3 text-base font-semibold text-white outline-none transition-colors hover:bg-stone-600 disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="inline-block size-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                      ) : (
                        'Envoyer'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="relative hidden h-auto overflow-hidden rounded-lg sm:block">
            <Image
              src={contact}
              alt="contact liva maçonnerie"
              priority
              fill
              className="rounded-lg object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
