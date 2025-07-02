'use client';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import hakkei from '../../public/hakkei-lanterns.jpg';
import gotokuji from '../../public/gotokuji-cats.webp';
import { JSX, useState, useEffect } from 'react';

export const Jumbotron = (): JSX.Element | null => {
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);
        
        const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    type JumbotronImage = {
        src: StaticImport;
        alt: string;
    };

    const jumbotronImage: JumbotronImage = isDarkMode
        ? { src: hakkei, alt: 'Lanterns outside Seto shrine, Kanazawa Hakkei' }
        : { src: gotokuji, alt: 'Manekineko at Gotokuji shrine, Tokyo' };

    return !isMounted ? null : (
        <div className='relative aspect-[2762/911] w-full overflow-hidden'>
            <Image
                src={jumbotronImage.src}
                alt={jumbotronImage.alt}
                priority
                fill
                className='object-cover shadow-lg'
                placeholder='blur'
                sizes='100vw'
            />
        </div>
    );
};
