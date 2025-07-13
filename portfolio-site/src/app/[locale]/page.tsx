import { FC } from 'react';
import { useTranslations } from 'next-intl';
import SvgIcon from '../components/svg-icon';

const HomePage: FC = () => {
    const t = useTranslations('Home');

    return (
        <div className='px-4 lg:px-0'>
            <h1 className='text-4xl font-bold'>{t('title')}</h1>
            <h2 className='text-lg'>{t('subTitle')}</h2>
            <p>{t('paragraphOne')}</p>
            <p>{t('paragraphTwo')}</p>
            <p>{t('paragraphThree')}</p>
            <p>{t('experiencedWith')}</p>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
                <div className='flex flex-col space-y-2'>
                    <SvgIcon type='typescript' />
                    <SvgIcon type='javascript' />
                    <SvgIcon type='react' />
                    <SvgIcon type='vue' />
                    <SvgIcon type='next' />
                    <SvgIcon type='html' />
                    <SvgIcon type='a11y' />
                </div>
                <div className='flex flex-col space-y-2'>
                    <SvgIcon type='node' />
                    <SvgIcon type='dotnet' />
                    <SvgIcon type='fastify' />
                    <SvgIcon type='rails' />
                </div>
                <div className='flex flex-col space-y-2'>
                    <SvgIcon type='css' />
                    <SvgIcon type='tailwind' />
                    <SvgIcon type='bootstrap' />
                    <SvgIcon type='sass' />
                    <SvgIcon type='less' />
                    <SvgIcon type='styledcomponents' />
                </div>
                <div className='flex flex-col space-y-2'>
                    <SvgIcon type='sequelize' />
                    <SvgIcon type='mongo' />
                    <SvgIcon type='mysql' />
                    <SvgIcon type='tsql' />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
