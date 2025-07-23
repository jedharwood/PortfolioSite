import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '../components/footer';
import Jumbotron from '../components/jumbotron';
import Navbar from '../components/nav-bar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Jed Harwood',
    description:
        'A full-stack software developer portfolio showcasing expertise in modern web technologies, with a strong focus on frontend development and clean UI design.',
};

interface LocaleLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}
export default async function LocaleLayout({
    children,
    params,
}: LocaleLayoutProps) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col px-0 antialiased lg:px-16 xl:px-48 2xl:px-64`}
            >
                <NextIntlClientProvider messages={messages}>
                    <Jumbotron />
                    <Navbar />
                    <main className='flex-grow'>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
