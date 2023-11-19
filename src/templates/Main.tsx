import 'animate.css';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import logo from '@/public/assets/images/liva-logo-inline.svg';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

type MenuItem = {
  href: string;
  text: string;
  target?: string;
};

const menuItems: Array<MenuItem> = [
  {
    href: '/',
    text: 'Accueil',
  },
  {
    href: '/about',
    text: 'Nos services',
  },
  {
    href: '/galerie',
    text: 'Galerie',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61551818345356',
    text: 'Facebook',
    target: '_blank',
  },
];

let hideMenuTimeout: NodeJS.Timeout | null = null;

function openMenu() {
  document.getElementById('menu')?.classList.toggle('block');
  document.getElementById('menu')?.classList.toggle('hidden');
  document.getElementById('menu')?.classList.toggle('animate__fadeInLeftBig');
  return () => {
    if (hideMenuTimeout) {
      clearTimeout(hideMenuTimeout);
    }
  };
}

function closeMenuWithTransition() {
  document.getElementById('menu')?.classList.toggle('animate__fadeInLeftBig');
  document.getElementById('menu')?.classList.toggle('animate__fadeOutLeftBig');
  hideMenuTimeout = setTimeout(() => {
    document.getElementById('menu')?.classList.toggle('block');
    document.getElementById('menu')?.classList.toggle('hidden');
    document
      .getElementById('menu')
      ?.classList.toggle('animate__fadeOutLeftBig');
  }, 100);
  return () => {
    if (hideMenuTimeout) {
      clearTimeout(hideMenuTimeout);
    }
  };
}

function closeMenuWithoutTransition() {
  document.getElementById('menu')?.classList.toggle('animate__fadeInLeftBig');
  document.getElementById('menu')?.classList.toggle('block');
  document.getElementById('menu')?.classList.toggle('hidden');
}

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto">
      <header className="sticky top-0 z-10 border-b border-stone-300/30 bg-stone-100/30 backdrop-blur-xl">
        <div>
          <nav className="flex items-center justify-between py-4">
            <div className="px-8">
              <Link href="/">
                <Image src={logo} alt="Liva Maçonnerie" priority />
              </Link>
            </div>
            <div className="mx-8 flex flex-col items-center justify-center rounded-sm border-stone-500 transition-all focus:ring focus:ring-stone-300 xl:hidden">
              <button
                type="button"
                className="flex flex-col items-center justify-center  border-none text-xs font-bold uppercase text-gray-700 hover:text-gray-900"
                onClick={() => openMenu()}
              >
                <Menu />
                Menu
              </button>
            </div>
            <ul className="hidden flex-wrap text-xl xl:flex">
              {menuItems.map((item, index) => {
                return (
                  <li
                    className="mr-6"
                    key={`menu-item-${index + Math.random()}`}
                  >
                    <Link
                      href={item.href}
                      className="border-none uppercase text-gray-700 hover:text-gray-900"
                      target={item.target}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      <main className="text-xl">{props.children}</main>

      <Footer />
      <nav
        id="menu"
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="animate__animated animate__faster fixed left-0 top-0 z-10 hidden h-full w-full bg-stone-300"
      >
        <button
          className="absolute right-4 top-4 flex flex-col items-center justify-center"
          onClick={() => closeMenuWithTransition()}
          type="button"
        >
          <X />
          FERMER
        </button>
        <ul className="flex h-full flex-col items-center justify-center">
          <div className="mb-8 max-w-[70%]">
            <Link href="/" onClick={() => closeMenuWithoutTransition()}>
              <Image src={logo} alt="Liva Maçonnerie" priority />
            </Link>
          </div>
          {menuItems.map((item, index) => {
            return (
              <li className="mb-8" key={`menu-item-${index + Math.random()}`}>
                <Link
                  href={item.href}
                  className="border-none uppercase text-gray-700 hover:text-gray-900"
                  target={item.target}
                  onClick={() => closeMenuWithoutTransition()}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  </div>
);

export { Main };
