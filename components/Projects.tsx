'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';
import { Sun, LayoutDashboard, Users, Radio, ExternalLink, Github, Code } from 'lucide-react';
import TechIcon from './TechIcon';
import CustomProjectCursor from './CustomProjectCursor';

const icons: Record<string, React.ReactNode> = {
  Sun: <Sun size={48} />,
  LayoutDashboard: <LayoutDashboard size={48} />,
  Users: <Users size={48} />,
  Radio: <Radio size={48} />,
  Code: <Code size={48} />,
};

// Color mapping for background tints
const colorMap: Record<string, string> = {
  'violet-500': '139 92 246',
  'purple-500': '168 85 247',
  'orange-500': '249 115 22',
  'red-500': '239 68 68',
  'emerald-500': '16 185 129',
  'teal-500': '20 184 166',
  'indigo-500': '99 102 241',
  'blue-500': '59 130 246',
  'cyan-500': '6 182 212',
};

// Extract RGB values from gradient class for background tint
const getCardBackgroundColor = (gradientClass: string): string => {
  const match = gradientClass.match(/from-(\w+-\d+)/);
  if (match && colorMap[match[1]]) {
    return colorMap[match[1]];
  }
  return '59 130 246'; // default blue
};

interface CardTilt {
  rotateX: number;
  rotateY: number;
}

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Custom Cursor */}
      <CustomProjectCursor />

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
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [tilt, setTilt] = useState<CardTilt>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      data-project-card
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="group relative h-full cursor-none"
    >
      {/* Animated gradient border */}
      <div
        className={`absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'animate-gradient-rotate' : ''
          }`}
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
          backgroundSize: '300% 300%',
          filter: 'blur(4px)',
        }}
      />

      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-cyan-500/30 transition-all duration-300 flex flex-col h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Colored background overlay with theme-aware opacity */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.08] dark:opacity-[0.15] transition-opacity"
          style={{
            background: `linear-gradient(135deg, rgb(${getCardBackgroundColor(project.color)}) 0%, transparent 50%)`,
          }}
        />
        {/* Card Header / Gradient Background */}
        <motion.div
          className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          <motion.div
            className="text-white/30 group-hover:text-white/50 transition-colors duration-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icons[project.icon]}
          </motion.div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative" style={{ transform: 'translateZ(20px)' }}>
          <motion.div
            className="flex justify-between items-start mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                  title="Live Demo"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
              {project.repoLink && (
                <motion.a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400 hover:scale-110 transition-all"
                  title="Repository"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.p
            className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-col gap-3 mt-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {/* Status Badge */}
            {project.status && (
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded font-medium inline-flex items-center gap-1 ${project.status === 'Ongoing'
                  ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                  : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  }`}>
                  {project.status === 'Ongoing' && (
                    <span className="w-2 h-2 bg-yellow-500 dark:bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                  {project.status}
                </span>
              </div>
            )}

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 items-center">
              {project.tech.map((tech, techIndex) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 + techIndex * 0.05 }}
                >
                  <TechIcon techName={tech} size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
