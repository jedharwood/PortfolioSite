'use client';
import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gotokuji from '../../../public/jumbotron/gotokuji-cats.webp';
import hakkei from '../../../public/jumbotron/hakkei-lanterns.webp';

const Jumbotron = (): JSX.Element | null => {
    const t = useTranslations('Components.jumbotron');

    return (
        <div className='relative aspect-[2762/911] w-full overflow-hidden'>
            <Image
                src={gotokuji}
                alt={t('gotokuji')}
                className='object-cover shadow-lg dark:hidden'
                placeholder='blur'
                priority
                fill
                sizes='100vw'
            />
            <Image
                src={hakkei}
                alt={t('hakkei')}
                className='hidden object-cover shadow-lg dark:block'
                placeholder='blur'
                priority
                fill
                sizes='100vw'
            />
        </div>
    );
};

export default Jumbotron;
