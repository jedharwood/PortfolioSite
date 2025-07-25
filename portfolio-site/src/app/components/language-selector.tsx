'use client';
import { JSX } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '../../i18n/routing';

const LanguageSelector = (): JSX.Element => {
    const t = useTranslations('Components.languageSelector');
    const locale = useLocale();
    const pathname = usePathname();

    const languages: Record<
        string,
        { code: string; name: string; ariaLabel: string }
    > = {
        en: {
            code: 'en',
            name: 'English',
            ariaLabel: t('en'),
        },
        ja: {
            code: 'ja',
            name: '日本語',
            ariaLabel: t('ja'),
        },
    };

    const targetLanguage =
        locale === languages.en.code ? languages.ja : languages.en;

    return (
        <Link
            key={targetLanguage.code}
            href={pathname}
            locale={targetLanguage.code}
            aria-label={targetLanguage.ariaLabel}
            className='svg-button inline-flex items-center gap-1 p-2'
        >
            <svg
                className='h-8 w-8 flex-shrink-0'
                fill='currentColor'
                aria-hidden='true'
                viewBox='0 0 24 24'
            >
                <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='0'
                    d='M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M9.5,17c0.6,3.1,1.7,5,2.5,5s1.9-1.9,2.5-5H9.5z M16.6,17c-0.3,1.7-0.8,3.3-1.4,4.5c2.3-0.8,4.3-2.4,5.5-4.5H16.6z M3.3,17c1.2,2.1,3.2,3.7,5.5,4.5c-0.6-1.2-1.1-2.8-1.4-4.5H3.3 z M16.9,15h4.7c0.2-0.9,0.4-2,0.4-3s-0.2-2.1-0.5-3h-4.7c0.2,1,0.2,2,0.2,3S17,14,16.9,15z M9.2,15h5.7c0.1-0.9,0.2-1.9,0.2-3 S15,9.9,14.9,9H9.2C9.1,9.9,9,10.9,9,12C9,13.1,9.1,14.1,9.2,15z M2.5,15h4.7c-0.1-1-0.1-2-0.1-3s0-2,0.1-3H2.5C2.2,9.9,2,11,2,12 S2.2,14.1,2.5,15z M16.6,7h4.1c-1.2-2.1-3.2-3.7-5.5-4.5C15.8,3.7,16.3,5.3,16.6,7z M9.5,7h5.1c-0.6-3.1-1.7-5-2.5-5 C11.3,2,10.1,3.9,9.5,7z M3.3,7h4.1c0.3-1.7,0.8-3.3,1.4-4.5C6.5,3.3,4.6,4.9,3.3,7z'
                />
            </svg>

            <span className='w-[2ch] text-center text-sm font-semibold'>
                {targetLanguage.code.toUpperCase()}
            </span>
        </Link>
    );
};

export default LanguageSelector;
