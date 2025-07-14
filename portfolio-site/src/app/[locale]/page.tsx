import { FC } from 'react';
import { useTranslations } from 'next-intl';
import SvgIcon from '../components/svg-icon/svg-icon';

const HomePage: FC = () => {
    const t = useTranslations('Home');
    // might need to translate the aria labels

    return (
        <div className='px-4 lg:px-0'>
            <h1 className='text-4xl font-bold'>{t('title')}</h1>
            <h2 className='text-lg'>{t('subTitle')}</h2>
            <p>{t('paragraphOne')}</p>
            <p>{t('paragraphTwo')}</p>
            <p>{t('paragraphThree')}</p>
            <p>{t('experiencedWith')}</p>
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='Frontend frameworks'
                >
                    <SvgIcon type='react' />
                    <SvgIcon type='next' />
                    <SvgIcon type='typescript' />
                    <SvgIcon type='javascript' />
                    <SvgIcon type='vue' />
                    <SvgIcon type='html' />
                </section>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='Styling libraries'
                >
                    <SvgIcon type='css' />
                    <SvgIcon type='styledcomponents' />
                    <SvgIcon type='tailwind' />
                    <SvgIcon type='bootstrap' />
                    <SvgIcon type='sass' />
                    <SvgIcon type='less' />
                </section>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='Database technologies'
                >
                    <SvgIcon type='sequelize' />
                    <SvgIcon type='mysql' />
                    <SvgIcon type='mongo' />
                    <SvgIcon type='postgres' />
                    <SvgIcon type='tsql' />
                </section>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='Backend frameworks'
                >
                    <SvgIcon type='node' />
                    <SvgIcon type='dotnet' />
                    <SvgIcon type='fastify' />
                    <SvgIcon type='rails' />
                </section>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='Design considerations'
                >
                    <SvgIcon type='a11y' />
                    <SvgIcon type='responsivedesign' />
                </section>
                <section
                    className='flex flex-col space-y-2'
                    aria-label='End-to-end testing libraries'
                >
                    <SvgIcon type='cypress' />
                    <SvgIcon type='specflow' />
                </section>
            </div>
        </div>
    );
};

export default HomePage;
