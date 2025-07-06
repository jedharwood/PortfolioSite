import { FC } from 'react';
import { Accordion } from '../../components/accordion';
import { useTranslations } from 'next-intl';
import screenshot from '../../../../public/saved-screenshots-desktop.jpg'

const WorkHistoryPage: FC = () => {
    const t = useTranslations('WorkHistory');

    return (
        <div className='px-4 lg:px-0'>
            <h1 className='text-4xl font-bold'>{t('title')}</h1>
            <Accordion
                id='appliedsystems-embeddedrating-accordion'
                jobTitle={t('softwareEngineer')}
                companyName='Applied Systems Inc.'
                location='Brighton, UK'
                dateRange='Oct 23 - Aug 25'
                description={[
                    t('appliedSystems.embeddedRating.descriptionOne'),
                ]}
                bulletPoints={[
                    t('appliedSystems.embeddedRating.bulletPointOne'),
                    t('appliedSystems.embeddedRating.bulletPointTwo'),
                    t('appliedSystems.embeddedRating.bulletPointThree'),
                ]}
                technologies={t('appliedSystems.embeddedRating.technologies')}
                image={screenshot}
                altText='A placeholder image of a screenshot'
            />
            <Accordion
                id='freelance-japan-accordion'
                jobTitle={t('frontEndEngineer')}
                companyName='Contracting/Freelance'
                location='Japan'
                dateRange='Sep 21 - Oct 23'
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={screenshot}
                altText='A placeholder image of a screenshot'
            />
            <Accordion
                id='appliedsystems-payments-accordion'
                jobTitle={t('softwareEngineer')}
                companyName='Applied Systems Inc.'
                location='Brighton, UK'
                dateRange='Jul 20 - Jun 21'
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={screenshot}
                altText='A placeholder image of a screenshot'
            />
            <Accordion
                id='vero-screening-accordion'
                jobTitle={t('jrSoftwareDeveloper')}
                companyName='Vero Screening Ltd.'
                location='Brighton, UK'
                dateRange='Aug 19 - Jul 20'
                description={['A description of the job']}
                bulletPoints={[]}
                technologies=''
                image={screenshot}
                altText='A placeholder image of a screenshot'
            />
        </div>
    );
};

export default WorkHistoryPage;
