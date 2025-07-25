import { FC, JSX } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import CommonMainLayout from '../components/common-main-layout';
import ExperienceSection from '../components/experience-section';
import SvgIcon from '../components/svg-icon/svg-icon';

const emailSvg: JSX.Element = (
    <svg
        viewBox='0 0 512 512'
        fill='currentColor'
        aria-hidden='true'
        focusable='false'
    >
        <path d='M510.678,112.275c-2.308-11.626-7.463-22.265-14.662-31.054c-1.518-1.915-3.104-3.63-4.823-5.345 c-12.755-12.818-30.657-20.814-50.214-20.814H71.021c-19.557,0-37.395,7.996-50.21,20.814c-1.715,1.715-3.301,3.43-4.823,5.345 C8.785,90.009,3.63,100.649,1.386,112.275C0.464,116.762,0,121.399,0,126.087V385.92c0,9.968,2.114,19.55,5.884,28.203 c3.497,8.26,8.653,15.734,14.926,22.001c1.59,1.586,3.169,3.044,4.892,4.494c12.286,10.175,28.145,16.32,45.319,16.32h369.958 c17.18,0,33.108-6.145,45.323-16.384c1.718-1.386,3.305-2.844,4.891-4.43c6.27-6.267,11.425-13.741,14.994-22.001v-0.064 c3.769-8.653,5.812-18.171,5.812-28.138V126.087C512,121.399,511.543,116.762,510.678,112.275z M46.509,101.571 c6.345-6.338,14.866-10.175,24.512-10.175h369.958c9.646,0,18.242,3.837,24.512,10.175c1.122,1.129,2.179,2.387,3.112,3.637 L274.696,274.203c-5.348,4.687-11.954,7.002-18.696,7.002c-6.674,0-13.276-2.315-18.695-7.002L43.472,105.136 C44.33,103.886,45.387,102.7,46.509,101.571z M36.334,385.92V142.735L176.658,265.15L36.405,387.435 C36.334,386.971,36.334,386.449,36.334,385.92z M440.979,420.597H71.021c-6.281,0-12.158-1.651-17.174-4.552l147.978-128.959 l13.815,12.018c11.561,10.046,26.028,15.134,40.36,15.134c14.406,0,28.872-5.088,40.432-15.134l13.808-12.018l147.92,128.959 C453.137,418.946,447.26,420.597,440.979,420.597z M475.666,385.92c0,0.529,0,1.051-0.068,1.515L335.346,265.221L475.666,142.8 V385.92z' />
    </svg>
);

export const metadata = {
  title: 'Jed Harwood | Home',
  description: 'A full-stack software developer portfolio showcasing expertise in modern web technologies, with a strong focus on frontend development and clean UI design.'
};

const HomePage: FC = () => {
    const t = useTranslations('Home');

    return (
        <CommonMainLayout title={t('title')} subTitle={t('subTitle')}>
            <section className='space-y-1'>
                <p>{t('paragraphOne')}</p>
                <p>{t('paragraphTwo')}</p>
            </section>
            <section className='space-y-1'>
                <p>{t('paragraphThree')}</p>
                <div className='flex justify-center sm:justify-start'>
                    <div className='email-svg h-20 w-20'>
                        <Link href='/contact' aria-label={t('emailLabel')}>
                            {emailSvg}
                        </Link>
                    </div>
                </div>
            </section>
            <h3 className='text-2xl font-semibold'>
                {t('experiencedWith.subTitle')}
            </h3>
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
        </CommonMainLayout>
    );
};

export default HomePage;
