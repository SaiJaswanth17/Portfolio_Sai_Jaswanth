'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { Sun, LayoutDashboard, Users, Radio, ExternalLink, Github } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Sun: <Sun size={48} />,
  LayoutDashboard: <LayoutDashboard size={48} />,
  Users: <Users size={48} />,
  Radio: <Radio size={48} />,
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center mb-12"
        >
          <span className="w-2 h-8 bg-blue-500 mr-4 rounded-full"></span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Header / Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white/30 group-hover:text-white/50 transition-colors duration-500 transform group-hover:scale-110">
                  {icons[project.icon]}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.repoLink && (
                      <a href={project.repoLink} className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" title="Repository">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.status && (
                    <span className={`text-xs px-2 py-1 rounded font-medium ${project.status === 'Ongoing'
                        ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      }`}>
                      {project.status}
                    </span>
                  )}
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded text-slate-500 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
