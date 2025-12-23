import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import TargetCursor from '@/components/TargetCursor';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Saladi Sai Jaswanth | Full Stack Developer',
    description: 'Portfolio of Saladi Sai Jaswanth, a Full Stack Developer specializing in AI & Web Tech.',
    keywords: 'Full Stack Developer, AI, Web Development, React, Next.js, Portfolio',
    authors: [{ name: 'Saladi Sai Jaswanth' }],
    metadataBase: new URL('https://yourwebsite.com'),
    openGraph: {
        title: 'Saladi Sai Jaswanth | Full Stack Developer',
        description: 'Portfolio of Saladi Sai Jaswanth, a Full Stack Developer specializing in AI & Web Tech.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`${inter.variable} antialiased`}>
                <ThemeProvider>
                    <TargetCursor />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
