'use client';
import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gotokuji from '../../../public/gotokuji-cats.webp';
import hakkei from '../../../public/hakkei-lanterns.webp';

const Jumbotron = (): JSX.Element | null => {
    const t = useTranslations('Components.jumbotron');

    return (
        <div className='relative aspect-[2762/911] w-full overflow-hidden'>
            <Image
                src={gotokuji}
                alt={t('gotokuji')}
                className='dark:hidden object-cover shadow-lg'
                placeholder='blur'
                priority
                fill
                sizes='100vw'
            />
            <Image
                src={hakkei}
                alt={t('hakkei')}
                className='hidden dark:block object-cover shadow-lg'
                placeholder='blur'
                priority
                fill
                sizes='100vw'
            />
        </div>
    );
};

export default Jumbotron;
