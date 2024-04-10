'use client';

import { motion } from 'framer-motion';
import React from 'react';

export const Bloc5: React.FC = () => (
  <div className="relative flex h-[50rem] w-full items-center justify-center bg-white bg-grid-stone-500/[0.2] dark:bg-stone-400 dark:bg-grid-white/[0.2]">
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] dark:bg-stone-400" />
    <div className="mx-auto flex min-h-[33vh] flex-col items-center p-12 font-bold sm:px-40 xl:mt-32 xl:max-w-screen-2xl 2xl:mx-auto ">
      <motion.h2
        className="mb-20 text-center text-3xl font-black md:text-6xl"
        initial={{ opacity: 0, transform: 'scale3d(1.2, 1.2, 1.2)' }}
        whileInView={{ opacity: 1, transform: 'scale3d(1, 1, 1)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Chez Liva Maçonnerie, nous comprenons que chaque projet est unique.
      </motion.h2>
      <motion.p className="z-10">
        C&apos;est pourquoi nous travaillons en étroite collaboration avec nos
        clients, écoutant attentivement leurs besoins et leurs aspirations.
        Notre approche personnalisée garantit non seulement la satisfaction de
        nos clients, mais aussi la réalisation de projets qui dépassent les
        attentes.
      </motion.p>
    </div>
  </div>
);
