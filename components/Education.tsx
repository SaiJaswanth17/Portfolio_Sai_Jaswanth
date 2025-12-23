'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, PUBLICATION } from '@/lib/constants';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-10"
            >
              <span className="w-2 h-8 bg-purple-500 mr-4 rounded-full"></span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                    <span className="text-sm font-mono text-purple-600 dark:text-purple-400">{edu.period}</span>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{edu.institution}</div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">{edu.score}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-10"
            >
              <span className="w-2 h-8 bg-amber-500 mr-4 rounded-full"></span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Publication</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 p-8 rounded-xl border border-amber-200 dark:border-amber-800/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Award size={100} className="text-amber-600" />
              </div>

              <div className="flex items-center gap-2 mb-4 text-amber-700 dark:text-amber-500">
                <BookOpen size={24} />
                <h3 className="text-xl font-bold">Patent Publication</h3>
              </div>

              <p className="italic text-slate-700 dark:text-slate-300 text-lg mb-6 font-serif">
                {PUBLICATION.title}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono text-slate-500 dark:text-slate-400 mb-4">
                <div>
                  <span className="block text-xs uppercase text-slate-400 dark:text-slate-500 mb-1">Application No</span>
                  {PUBLICATION.appNo}
                </div>
                <div>
                  <span className="block text-xs uppercase text-slate-400 dark:text-slate-500 mb-1">Date</span>
                  {PUBLICATION.date}
                </div>
              </div>

              <a href={PUBLICATION.link} className="inline-flex items-center text-amber-600 dark:text-amber-500 hover:underline text-sm font-medium mt-2">
                View Patent Link
                <ExternalLink size={14} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;