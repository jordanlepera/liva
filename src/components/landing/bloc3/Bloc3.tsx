'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Block3 from '@/public/assets/images/blocks/block3.jpg';

export const Bloc3: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden shadow-2xl lg:rounded-b-[75px] xl:max-w-screen-2xl 2xl:mx-auto">
      <div className="inset-0 size-full border-x border-stone-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] p-12 py-32 text-stone-900 [background-size:16px_16px] md:p-32 md:py-48">
        <motion.h2
          className="mb-20 text-3xl font-black md:text-6xl"
          initial={{ opacity: 0, transform: 'scale3d(1.2, 1.2, 1.2)' }}
          whileInView={{ opacity: 1, transform: 'scale3d(1, 1, 1)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Nos services vont au-delà de la simple maçonnerie.
        </motion.h2>
        <motion.p
          className="text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          Du coulage de chape à la création d&apos;aménagements extérieurs
          élégants, en passant par les petites démolitions et les travaux de
          coffrage, Liva Maçonnerie est votre partenaire polyvalent pour tous
          vos besoins en construction.
        </motion.p>
        <br />
        <motion.p
          className="mb-12 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          Nous sommes fiers de notre capacité à réaliser des projets de grande
          envergure tout en accordant une attention particulière aux détails.
        </motion.p>
        <br />
        <Link href="/services" className="">
          <div className="mx-auto flex max-w-96 items-center justify-center border-4 border-stone-800 bg-stone-800 p-4 text-3xl text-white transition-all duration-300 hover:cursor-pointer hover:bg-stone-50 hover:text-stone-800">
            Consulter nos services
          </div>
        </Link>
      </div>
      <div className="relative h-[500px] overflow-hidden">
        <Image
          src={Block3}
          alt="illustration renovation liva maçonnerie"
          priority
          className="size-full scale-125 object-cover object-center sepia transition-all duration-500 hover:scale-100 hover:sepia-0"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
};
