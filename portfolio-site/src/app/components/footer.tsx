'use client';
import { JSX } from 'react';
import { SvgButton } from './svg-button';
import { SvgAnchor } from './svg-anchor';
import { githubUrl, linkedInUrl } from '../utilities/resources';

const scrollToTop = (): void => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = (): JSX.Element => (
    <footer className='flex w-full justify-center gap-2 px-2 py-4'>
        <SvgAnchor
            label='Link to LinkedIn page'
            href={linkedInUrl}
            buttonType='linked-in'
        />
        <SvgAnchor
            label='Link to github page'
            href={githubUrl}
            buttonType='github'
        />
        <SvgButton
            onClickFunction={scrollToTop}
            label='Scroll to top'
            buttonType='scroll-to-top'
            size='large'
        />
    </footer>
);
