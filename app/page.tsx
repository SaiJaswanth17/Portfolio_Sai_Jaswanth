'use client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
            <Navbar />
            <main className="space-y-0">
                <Hero />
                <Skills />
                <Projects />
                <Experience />
                <Education />
            </main>
            <Footer />
        </div>
    );
}
