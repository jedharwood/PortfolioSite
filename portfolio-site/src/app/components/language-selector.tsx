'use client';
import { JSX } from 'react';
import { Link, usePathname } from '../../i18n/routing';
import { useLocale } from 'next-intl';

export const LanguageSelector = (): JSX.Element => {
    const locale = useLocale();
    const pathname = usePathname();

    const languages: Record<string, { code: string; name: string }> = {
        en: { code: 'en', name: 'English' },
        ja: { code: 'ja', name: '日本語' },
    };

    const targetLanguage =
        locale === languages.en.code ? languages.ja : languages.en;

    return (
        <Link
            key={targetLanguage.code}
            href={pathname}
            locale={targetLanguage.code}
        >
            {targetLanguage.name}
        </Link>
    );
};
