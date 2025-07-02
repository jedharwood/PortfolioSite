'use client';
import { JSX } from 'react';
import { SvgButton } from './svg-button';
import { SvgAnchor } from './svg-anchor';

const scrollToTop = (): void => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = (): JSX.Element => (
    <footer className='flex w-full justify-center gap-2 px-2 py-4'>
        <SvgAnchor
            label='Link to LinkedIn page'
            href='https://uk.linkedin.com/in/jed-harwood-39aaba194'
            buttonType='linked-in'
        />
        <SvgAnchor
            label='Link to github page'
            href='https://github.com/jedharwood'
            buttonType='github'
        />
        <SvgButton
            onClickFunction={scrollToTop}
            label='Scroll to top'
            buttonType='up-chevron'
            size='large'
        />
    </footer>
);
