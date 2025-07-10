import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { appliedSystemsUrl } from '../../utilities/resources';
import screenshot from '../../../../public/saved-screenshots-desktop.jpg';
import Accordion from '../../components/accordion/accordion';
import AccordionNest from '../../components/accordion/accordion-nest';

const WorkHistoryPage: FC = () => {
    const t = useTranslations('WorkHistory');

    return (
        <div className='px-4 lg:px-0'>
            <h1 className='text-4xl font-bold'>{t('title')}</h1>
            <Accordion
                id='appliedsystems-embeddedrating-accordion'
                headerProps={{
                    jobTitle: t('softwareEngineer'),
                    companyName: 'Applied Systems Inc.',
                    location: 'Brighton, UK',
                    dateRange: 'Oct 23 - Aug 25',
                }}
                description={[
                    t('appliedSystems.embeddedRating.descriptionOne'),
                ]}
                bulletPoints={[
                    t('appliedSystems.embeddedRating.bulletPointOne'),
                    t('appliedSystems.embeddedRating.bulletPointTwo'),
                    t('appliedSystems.embeddedRating.bulletPointThree'),
                ]}
                technologies={t('appliedSystems.embeddedRating.technologies')}
                image={{
                    src: screenshot,
                    alt: 'A placeholder image of a screenshot',
                }}
                href={appliedSystemsUrl}
            />
            <Accordion
                id='freelance-japan-accordion'
                headerProps={{
                    jobTitle: t('frontEndEngineer'),
                    companyName: 'Contracting/Freelance',
                    location: 'Japan',
                    dateRange: 'Sep 21 - Oct 23',
                }}
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={{
                    src: screenshot,
                    alt: 'A placeholder image of a screenshot',
                }}
                href={appliedSystemsUrl}
            />
            <AccordionNest
                id='vero-screening-accordion'
                headerProps={{
                    jobTitle: 'Nested Accordion',
                    companyName: 'Vero Screening Ltd.',
                    location: 'Brighton, UK',
                    dateRange: 'Aug 19 - Jul 20',
                }}
            >
                <Accordion
                    id='vero-screening-accordion'
                    headerProps={{
                        jobTitle: t('jrSoftwareDeveloper'),
                        companyName: 'Vero Screening Ltd.',
                        location: 'Brighton, UK',
                        dateRange: 'Aug 19 - Jul 20',
                    }}
                    description={['A description of the job']}
                    bulletPoints={[]}
                    technologies=''
                    image={{
                        src: screenshot,
                        alt: 'A placeholder image of a screenshot',
                    }}
                    href={appliedSystemsUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='vero-screening-accordion'
                    headerProps={{
                        jobTitle: t('jrSoftwareDeveloper'),
                        companyName: 'Vero Screening Ltd.',
                        location: 'Brighton, UK',
                        dateRange: 'Aug 19 - Jul 20',
                    }}
                    description={['A description of the job']}
                    bulletPoints={[]}
                    technologies=''
                    image={{
                        src: screenshot,
                        alt: 'A placeholder image of a screenshot',
                    }}
                    href={appliedSystemsUrl}
                    isNestedAccordion={true}
                />
            </AccordionNest>
            <Accordion
                id='appliedsystems-payments-accordion'
                headerProps={{
                    jobTitle: t('softwareEngineer'),
                    companyName: 'Applied Systems Inc.',
                    location: 'Brighton, UK',
                    dateRange: 'Jul 20 - Jun 21',
                }}
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={{
                    src: screenshot,
                    alt: 'A placeholder image of a screenshot',
                }}
                href={appliedSystemsUrl}
            />
            <Accordion
                id='vero-screening-accordion'
                headerProps={{
                    jobTitle: t('jrSoftwareDeveloper'),
                    companyName: 'Vero Screening Ltd.',
                    location: 'Brighton, UK',
                    dateRange: 'Aug 19 - Jul 20',
                }}
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={{
                    src: screenshot,
                    alt: 'A placeholder image of a screenshot',
                }}
                href={appliedSystemsUrl}
            />
        </div>
    );
};

export default WorkHistoryPage;
