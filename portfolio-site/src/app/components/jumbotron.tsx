'use client';
import { JSX, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gotokuji from '../../../public/gotokuji-cats.webp';
import hakkei from '../../../public/hakkei-lanterns.webp';

const Jumbotron = (): JSX.Element | null => {
    const t = useTranslations('Components.jumbotron');
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) =>
            setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const jumbotronImage: GlobalImage = isDarkMode
        ? { src: hakkei, alt: t('hakkei') }
        : { src: gotokuji, alt: t('gotokuji') };

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

export default Jumbotron;
