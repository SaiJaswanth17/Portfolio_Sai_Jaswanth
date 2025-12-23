'use client';

import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center transition-colors">
      <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center justify-center gap-1">
        © 2025 Saladi Sai Jaswanth. Built with <Heart size={14} className="text-red-500 fill-red-500" /> and React.
      </p>
    </footer>
  );
};

export default Footer;
