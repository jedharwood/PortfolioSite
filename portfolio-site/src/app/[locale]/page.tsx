import { FC } from 'react';
import { useTranslations } from 'next-intl';
import ExperienceSection from '../components/experience-section';
import SvgIcon from '../components/svg-icon/svg-icon';

const HomePage: FC = () => {
    const t = useTranslations('Home');

    return (
        <div className='px-4 lg:px-0'>
            <h1 className='text-4xl font-bold'>{t('title')}</h1>
            <h2 className='text-lg'>{t('subTitle')}</h2>
            <p>{t('paragraphOne')}</p>
            <p>{t('paragraphTwo')}</p>
            <p>{t('paragraphThree')}</p>
            <p>{t('experiencedWith.subTitle')}</p>
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                <ExperienceSection
                    label={t('experiencedWith.sections.frontendFrameworks')}
                >
                    <SvgIcon type='react' />
                    <SvgIcon type='next' />
                    <SvgIcon type='typescript' />
                    <SvgIcon type='javascript' />
                    <SvgIcon type='vue' />
                    <SvgIcon type='html' />
                </ExperienceSection>
                <ExperienceSection
                    label={t('experiencedWith.sections.stylingLibraries')}
                >
                    <SvgIcon type='css' />
                    <SvgIcon type='styledcomponents' />
                    <SvgIcon type='tailwind' />
                    <SvgIcon type='bootstrap' />
                    <SvgIcon type='sass' />
                    <SvgIcon type='less' />
                </ExperienceSection>
                <ExperienceSection
                    label={t('experiencedWith.sections.databaseTechnologies')}
                >
                    <SvgIcon type='sequelize' />
                    <SvgIcon type='mysql' />
                    <SvgIcon type='mongo' />
                    <SvgIcon type='postgres' />
                    <SvgIcon type='tsql' />
                </ExperienceSection>
                <ExperienceSection
                    label={t('experiencedWith.sections.backendFrameworks')}
                >
                    <SvgIcon type='node' />
                    <SvgIcon type='dotnet' />
                    <SvgIcon type='fastify' />
                    <SvgIcon type='rails' />
                </ExperienceSection>
                <ExperienceSection
                    label={t('experiencedWith.sections.designConsiderations')}
                >
                    <SvgIcon type='a11y' />
                    <SvgIcon type='responsivedesign' />
                </ExperienceSection>
                <ExperienceSection
                    label={t('experiencedWith.sections.endToEndtestLibraries')}
                >
                    <SvgIcon type='cypress' />
                    <SvgIcon type='specflow' />
                </ExperienceSection>
            </div>
        </div>
    );
};

export default HomePage;
