'use client';

import React from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiOpenjdk,
    SiCplusplus,
    SiKotlin,
    SiReact,
    SiNextdotjs,
    SiVite,
    SiSpringboot,
    SiNodedotjs,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiGit,
    SiApachekafka,
    SiTailwindcss,
    SiFramer,
    SiPytorch,
    SiTensorflow,
    SiJsonwebtokens,
} from 'react-icons/si';
import { Code, Radio, Cpu, Zap } from 'lucide-react';

const techIconMap: Record<string, { icon: React.ReactNode; color: string }> = {
    // Languages
    'JavaScript': { icon: <SiJavascript />, color: '#F7DF1E' },
    'TypeScript': { icon: <SiTypescript />, color: '#3178C6' },
    'Python': { icon: <SiPython />, color: '#3776AB' },
    'Java': { icon: <SiOpenjdk />, color: '#007396' },
    'C++': { icon: <SiCplusplus />, color: '#00599C' },
    'Kotlin': { icon: <SiKotlin />, color: '#7F52FF' },

    // Frameworks & Libraries
    'React': { icon: <SiReact />, color: '#61DAFB' },
    'Next.js': { icon: <SiNextdotjs />, color: '#000000' },
    'Vite': { icon: <SiVite />, color: '#646CFF' },
    'Spring Boot': { icon: <SiSpringboot />, color: '#6DB33F' },
    'Node.js': { icon: <SiNodedotjs />, color: '#339933' },
    'Tailwind CSS': { icon: <SiTailwindcss />, color: '#06B6D4' },
    'Framer Motion': { icon: <SiFramer />, color: '#0055FF' },

    // Databases
    'MongoDB': { icon: <SiMongodb />, color: '#47A248' },
    'MySQL': { icon: <SiMysql />, color: '#4479A1' },
    'PostgreSQL': { icon: <SiPostgresql />, color: '#4169E1' },

    // Tools & Others
    'Git': { icon: <SiGit />, color: '#F05032' },
    'Kafka': { icon: <SiApachekafka />, color: '#231F20' },
    'JWT': { icon: <SiJsonwebtokens />, color: '#000000' },

    // ML/AI
    'ML': { icon: <SiPytorch />, color: '#EE4C2C' },
    'ANN': { icon: <SiTensorflow />, color: '#FF6F00' },

    // IoT & Hardware
    'IoT': { icon: <Radio size={16} />, color: '#00979D' },
    'RFID': { icon: <Radio size={16} />, color: '#FF6B35' },
    'Automation': { icon: <Zap size={16} />, color: '#FFB800' },
};

interface TechIconProps {
    techName: string;
    size?: number;
}

const TechIcon: React.FC<TechIconProps> = ({ techName, size = 20 }) => {
    const tech = techIconMap[techName] || {
        icon: <Code size={16} />,
        color: '#6B7280'
    };

    return (
        <div
            className="group/icon relative inline-flex items-center justify-center"
            title={techName}
        >
            <div
                className="flex items-center justify-center transition-all duration-300 hover:scale-125 hover:rotate-12"
                style={{
                    fontSize: `${size}px`,
                    color: tech.color,
                    filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1))'
                }}
            >
                {tech.icon}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10">
                {techName}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700"></div>
            </div>
        </div>
    );
};

export default TechIcon;
