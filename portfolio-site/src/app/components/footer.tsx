'use client';
import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import SvgAnchor from './svg-anchor';
import SvgButton from './svg-button/svg-button';

const scrollToTop = (): void => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = (): JSX.Element => {
    const t = useTranslations('Components.footer');

    return (
        <footer className='flex w-full justify-center gap-2 px-2 py-4'>
            <SvgAnchor type='linked-in' />
            <SvgAnchor type='github' />
            <SvgButton
                onClickFunction={scrollToTop}
                label={t('scrollToTop')}
                buttonType='scroll-to-top'
                size='large'
            />
        </footer>
    );
};

export default Footer;
