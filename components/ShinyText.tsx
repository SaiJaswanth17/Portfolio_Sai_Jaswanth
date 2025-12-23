'use client';

import React from 'react';

interface ShinyTextProps {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
    text,
    disabled = false,
    speed = 5,
    className = ''
}) => {
    const animationDuration = `${speed}s`;

    return (
        <span
            className={`bg-clip-text text-transparent inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage:
                    'linear-gradient(120deg, #3b82f6 30%, #8b5cf6 40%, #ec4899 50%, #8b5cf6 60%, #3b82f6 70%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                animationDuration: animationDuration
            }}
        >
            {text}
        </span>
    );
};

export default ShinyText;
