'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-12"
        >
          <span className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience & Internships</h2>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-3 space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${index === 0 ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'}`}></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                <span className="text-sm font-mono text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{exp.period}</span>
              </div>

              <div className="text-md font-medium text-slate-700 dark:text-slate-300 mb-2">{exp.company}</div>

              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">
                {exp.description}
              </p>

              {exp.type && (
                <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
                  {exp.type}
                </span>
              )}

              {exp.certificateLink && (
                <a
                  href={exp.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 ml-2 text-xs font-semibold px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                >
                  View Certificate
                  <ExternalLink size={12} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
