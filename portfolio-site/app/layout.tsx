import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Jumbotron } from './components/jumbotron';
import { Navbar } from './components/nav-bar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Jed Harwood - Portfolio',
    description:
        'Showcasing the work and projects of Jed Harwood, software engineer.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <main className='px-0 lg:px-16 xl:px-48 2xl:px-64'>
                    <Jumbotron />
                    <Navbar />
                    {children}
                    <h4>Footer</h4>
                </main>
            </body>
        </html>
    );
}
