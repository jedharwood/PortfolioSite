'use client';
import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import { githubUrl, linkedInUrl } from '../utilities/resources';
import SvgAnchor from './svg-anchor';
import SvgButton from './svg-button';

const scrollToTop = (): void => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = (): JSX.Element => {
    const t = useTranslations('Components.footer')
    return (
    <footer className='flex w-full justify-center gap-2 px-2 py-4'>
        <SvgAnchor
            label={t('linkedIn')}
            href={linkedInUrl}
            buttonType='linked-in'
        />
        <SvgAnchor
            label={t('github')}
            href={githubUrl}
            buttonType='github'
        />
        <SvgButton
            onClickFunction={scrollToTop}
            label={t('scrollToTop')}
            buttonType='scroll-to-top'
            size='large'
        />
    </footer>
);};

export default Footer;
