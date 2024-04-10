import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ServiceCardProps = {
  name: string;
  bgImage: StaticImageData;
  uri: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = (props) => (
  <Link href={`services/${props.uri}`}>
    <div className="relative flex h-72 w-full select-none items-end overflow-hidden rounded-lg border border-stone-200 bg-stone-700 [&>*]:hover:bg-black">
      <Image
        src={props.bgImage}
        alt="illustration renovation liva maçonnerie"
        priority
        className="size-full overflow-hidden rounded-b-md object-cover object-center transition-all hover:scale-110 hover:brightness-75"
        fill
        sizes="100vw"
      />
      <div className="absolute bottom-0 h-fit w-full bg-black/70 p-4 text-white transition-all">
        {props.name}
      </div>
    </div>
  </Link>
);
