'use client';
import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gotokuji from '../../../public/jumbotron/gotokuji-cats.webp';
import hakkei from '../../../public/jumbotron/hakkei-lanterns.webp';
import { useTheme } from '../theme-provider';

const Jumbotron = (): JSX.Element | null => {
    const t = useTranslations('Components.jumbotron');
    const { theme } = useTheme();

    return (
        <div className='relative aspect-[2762/911] w-full overflow-hidden'>
            {theme === 'light' ? (
                <Image
                    src={gotokuji}
                    alt={t('gotokuji')}
                    className='object-cover shadow-lg'
                    placeholder='blur'
                    priority
                    fill
                    sizes='100vw'
                />
            ) : (
                <Image
                    src={hakkei}
                    alt={t('hakkei')}
                    className='object-cover shadow-lg'
                    placeholder='blur'
                    priority
                    fill
                    sizes='100vw'
                />
            )}
        </div>
    );
};

export default Jumbotron;
