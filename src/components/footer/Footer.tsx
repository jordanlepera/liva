import 'animate.css';

import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8 text-center text-sm">
      © Copyright {new Date().getFullYear()} {AppConfig.title}
    </footer>
  );
};

export { Footer };
