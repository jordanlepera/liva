'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Block2 from '@/public/assets/images/blocks/block2.jpg';

export const Bloc2: React.FC = () => {
  return (
    <div className="w-full bg-stone-800">
      <div className="relative p-12 text-white sm:rounded-3xl md:p-32 md:py-48 xl:max-w-screen-2xl 2xl:mx-auto">
        <motion.h2
          className="text-3xl font-black md:text-6xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          La rénovation est notre passion.
        </motion.h2>
        <br />
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          Nous comprenons l&apos;importance de donner une nouvelle vie à vos
          espaces, et notre équipe qualifiée excelle dans la restauration de
          bâtiments anciens tout en intégrant des solutions modernes et
          durables.
        </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          Que ce soit pour une rénovation intérieure ou extérieure, nous mettons
          notre expérience au service de la préservation de votre patrimoine.
        </motion.p>
      </div>
      <div className="relative h-[500px] overflow-hidden md:rounded-t-[75px] xl:max-w-screen-2xl 2xl:mx-auto">
        <Image
          src={Block2}
          alt="illustration renovation liva maçonnerie"
          priority
          className="size-full overflow-hidden object-cover object-center sepia transition-all duration-500 hover:scale-125 hover:sepia-0"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
};
