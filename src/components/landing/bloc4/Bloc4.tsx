'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import Block4 from '@/public/assets/images/blocks/block4.jpg';

export const Bloc4: React.FC = () => {
  return (
    <>
      <motion.div
        className="relative hidden h-full overflow-hidden transition-all duration-500 hover:translate-y-1 hover:scale-105 hover:shadow-2xl md:block lg:rounded-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        <Image
          src={Block4}
          alt="illustration description liva maçonnerie"
          priority
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <motion.div
        className="flex min-h-64 flex-col items-center justify-center p-16 text-white md:rounded-bl-none"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="mb-8 text-3xl font-bold">
          L&apos;isolation est également au cœur de notre engagement envers
          l&apos;efficacité énergétique et le confort de votre habitat.
        </h2>
        <p>
          Nous utilisons des matériaux de haute qualité pour assurer une
          isolation optimale, contribuant ainsi à la réduction de votre
          empreinte écologique et à des économies d&apos;énergie significatives.
        </p>
      </motion.div>
      <div className="relative h-[500px] w-full overflow-hidden p-12 md:hidden">
        <Image
          src={Block4}
          alt="illustration description liva maçonnerie"
          priority
          fill
          className="overflow-hidden object-cover object-center"
          sizes="100vw"
        />
      </div>
    </>
  );
};
