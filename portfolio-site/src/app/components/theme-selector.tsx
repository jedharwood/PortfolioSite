import { JSX } from 'react';
import { useTheme } from '../../app/theme-provider';
import { useTranslations } from 'next-intl';
import SvgButton from './svg-button/svg-button';

const ThemeSelector = (): JSX.Element => {
    const t = useTranslations('Components.themeSelector');
    const { theme, setTheme } = useTheme();

    return theme === 'light' ? (
        <SvgButton
            onClickFunction={() => setTheme('dark')}
            label={t('dark')}
            buttonType={'dark-theme'}
        />
    ) : (
        <SvgButton
            onClickFunction={() => setTheme('light')}
            label={t('light')}
            buttonType={'light-theme'}
        />
    );
};

export default ThemeSelector;
// update context to read from browser
// test context
