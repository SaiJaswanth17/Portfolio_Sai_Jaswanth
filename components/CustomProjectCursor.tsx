'use client';

import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

type CursorState = 'default' | 'card' | 'link';

const CustomProjectCursor: React.FC = () => {
    const [cursorState, setCursorState] = useState<CursorState>('default');
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const target = e.target;

            // Type guard: ensure target is an HTMLElement
            if (!(target instanceof HTMLElement)) {
                return;
            }

            // Check if we're in the projects section
            const projectsSection = target.closest('#projects');
            if (projectsSection) {
                setIsVisible(true);

                // Determine cursor state based on element
                if (target.closest('a, button')) {
                    setCursorState('link');
                } else if (target.closest('[data-project-card]')) {
                    setCursorState('card');
                } else {
                    setCursorState('default');
                }
            } else {
                setIsVisible(false);
            }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
            setCursorState('default');
        };

        // Add listeners
        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mousemove', handleMouseMove);
        document.querySelector('#projects')?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mousemove', handleMouseMove);
            document.querySelector('#projects')?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    const cursorConfig = {
        default: { size: 32, text: '' },
        card: { size: 64, text: 'View' },
        link: { size: 48, text: 'Click' },
    };

    const config = cursorConfig[cursorState];

    return (
        <>
            {/* Custom cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        width: config.size,
                        height: config.size,
                    }}
                    transition={{ duration: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Outer ring */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-slate-800 dark:border-cyan-400"
                        animate={{
                            scale: cursorState === 'default' ? 1 : 1.2,
                            opacity: cursorState === 'default' ? 0.5 : 0.8,
                        }}
                    />

                    {/* Inner dot */}
                    <motion.div
                        className="absolute bg-slate-800 dark:bg-cyan-400 rounded-full"
                        animate={{
                            width: cursorState === 'default' ? 6 : 0,
                            height: cursorState === 'default' ? 6 : 0,
                        }}
                    />

                    {/* Text */}
                    {config.text && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-slate-800 dark:text-cyan-400 text-xs font-medium"
                        >
                            {config.text}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>
        </>
    );
};

export default CustomProjectCursor;
