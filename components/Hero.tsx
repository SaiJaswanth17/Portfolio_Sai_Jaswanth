'use client';

import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/lib/constants';
import ShinyText from './ShinyText';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for work
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <ShinyText
              text="Hi, I'm Saladi Sai Jaswanth"
              speed={2}
            />
          </h1>

          <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm md:text-base shadow-sm">
            <p className="text-purple-600 dark:text-purple-400">const <span className="text-slate-900 dark:text-slate-200">developer</span> = <span className="text-slate-700 dark:text-slate-300">{'{'}</span></p>
            <p className="pl-4 text-slate-700 dark:text-slate-300">
              role: <span className="text-green-600 dark:text-green-400">"Full Stack Developer"</span>,
            </p>
            <p className="pl-4 text-slate-700 dark:text-slate-300">
              passion: <span className="text-green-600 dark:text-green-400">"AI & Web Tech"</span>
            </p>
            <p className="text-slate-700 dark:text-slate-300">{'};'}</p>
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
            Enthusiastic and detail-oriented developer eager to apply modern web technologies to build seamless user experiences.
            I leverage my background in Artificial Intelligence to make code robust and scalable.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="cursor-target flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-sm group">
              <Mail className="group-hover:scale-110 transition-transform" size={20} />
              <span>Email Me</span>
            </a>
            <a href={`tel:${SOCIAL_LINKS.phone}`} className="cursor-target flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-sm group">
              <Phone className="group-hover:scale-110 transition-transform" size={20} />
              <span>Call Me</span>
            </a>
            <a href={SOCIAL_LINKS.github} className="cursor-target flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-sm group">
              <Github className="group-hover:scale-110 transition-transform" size={20} />
              <span>GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="cursor-target flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all shadow-sm group">
              <Linkedin className="group-hover:scale-110 transition-transform" size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Right Visual (CSS 3D Illustration) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square animate-float">
            {/* Glass Container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/50 to-white/20 dark:from-slate-800/50 dark:to-slate-900/20 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-slate-700/40 shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.2),transparent)]"></div>

              {/* Computer Illustration SVG */}
              <svg viewBox="0 0 400 300" className="w-3/4 h-auto drop-shadow-2xl z-10">
                {/* Base Stand */}
                <path d="M160 250 L240 250 L260 280 L140 280 Z" fill="#334155" className="dark:fill-slate-600" />

                {/* Monitor Frame */}
                <rect x="50" y="50" width="300" height="200" rx="12" fill="#1e293b" className="dark:fill-slate-800" stroke="#475569" strokeWidth="2" />

                {/* Screen */}
                <rect x="60" y="60" width="280" height="180" rx="4" fill="#0f172a" className="dark:fill-slate-950" />

                {/* Code Lines Animation */}
                <g className="opacity-80">
                  <line x1="80" y1="90" x2="200" y2="90" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="x2" values="80;200;200" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="80" y1="110" x2="240" y2="110" stroke="#64748b" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="x2" values="80;240;240" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="100" y1="130" x2="220" y2="130" stroke="#10b981" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="x2" values="100;220;220" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1" dur="2.2s" repeatCount="indefinite" />
                  </line>
                  <line x1="100" y1="150" x2="180" y2="150" stroke="#a855f7" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="x2" values="100;180;180" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1" dur="1.8s" repeatCount="indefinite" />
                  </line>
                  <line x1="80" y1="170" x2="140" y2="170" stroke="#ef4444" strokeWidth="4" strokeLinecap="round">
                    <animate attributeName="x2" values="80;140;140" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1" dur="2s" repeatCount="indefinite" />
                  </line>
                </g>
              </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -right-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce delay-1000">
              <span className="text-3xl">☕</span>
            </div>
            <div className="absolute -top-6 -left-6 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl animate-bounce delay-500">
              <span className="text-3xl">🚀</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
