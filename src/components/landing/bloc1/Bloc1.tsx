'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Block1 from '@/public/assets/images/blocks/block1-2.jpg';
// import { ScrollAnimate } from '@/components/scrollanimate/ScrollAnimate';

export const Bloc1: React.FC = () => {
  return (
    <>
      <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-2xl md:hidden">
        <Image
          src={Block1}
          alt="illustration description liva maçonnerie"
          priority
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
      <motion.div
        className="flex min-h-80 flex-col items-center justify-center py-12 2xl:p-32"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <p className="text-3xl font-bold">
          Bienvenue chez Liva Maçonnerie, votre partenaire de confiance pour
          tous vos projets de maçonnerie dans le secteur de Belfort et ses
          environs.
        </p>
        <br />
        <br />
        <p className="text-xl">
          Notre équipe dévouée s&apos;engage à donner vie à vos idées en
          expertise, créativité et savoir-faire artisanal.
        </p>
      </motion.div>
      <motion.div
        className="relative hidden h-auto overflow-hidden rounded-xl opacity-0 transition-all duration-500 hover:translate-y-1 hover:scale-105 hover:shadow-2xl md:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <Image
          src={Block1}
          alt="illustration description liva maçonnerie"
          id="image_block_1"
          priority
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
    </>
  );
};
