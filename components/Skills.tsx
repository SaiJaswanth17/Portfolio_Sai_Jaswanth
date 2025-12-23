'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';
import { Code, Database, Cpu } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Database: <Database size={24} />,
  Cpu: <Cpu size={24} />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-12"
        >
          <span className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Technical Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-center gap-3 mb-6 text-blue-600 dark:text-blue-400">
                {icons[category.icon]}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white dark:bg-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
