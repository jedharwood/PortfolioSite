import { FC } from 'react';
import { useTranslations } from 'next-intl';
import {
    appliedSystemsUrl,
    axaJapanUrl,
    rakutenIchibaUrl,
} from '../../utilities/resources';
import appliedSystemsScreenshot from '../../../../public/work-history/applied-systems-screenshot.png';
import axaScreenShot from '../../../../public/work-history/axa-screenshot.png';
import rakutenScreenShot from '../../../../public/work-history/rakuten-screenshot.png';
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
                    companyName: t('appliedSystems.companyName'),
                    location: t('location.brighton'),
                    dateRange: t('appliedSystems.embeddedRating.dateRange'),
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
                    src: appliedSystemsScreenshot,
                    alt: t('appliedSystems.imageAltText'),
                }}
                href={appliedSystemsUrl}
            />
            <AccordionNest
                id='freelance-japan-accordion-nest'
                headerProps={{
                    jobTitle: t('frontendEngineer'),
                    companyName: t('freelanceContracting.companyName'),
                    location: t('location.japan'),
                    dateRange: t('freelanceContracting.dateRange'),
                }}
            >
                <Accordion
                    id='axa-japan-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('axa.companyName'),
                        location: t('location.tokyo'),
                        dateRange: t('axa.dateRange'),
                    }}
                    description={[t('axa.descriptionOne')]}
                    bulletPoints={[
                        t('axa.bulletPointOne'),
                        t('axa.bulletPointTwo'),
                    ]}
                    technologies={t('axa.technologies')}
                    image={{
                        src: axaScreenShot,
                        alt: t('axa.imageAltText'),
                    }}
                    href={axaJapanUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='rakuten-ichiba-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('rakuten.companyName'),
                        location: t('location.tokyo'),
                        dateRange: t('rakuten.dateRange'),
                    }}
                    description={[t('rakuten.descriptionOne')]}
                    bulletPoints={[
                        t('rakuten.bulletPointOne'),
                        t('rakuten.bulletPointTwo'),
                        t('rakuten.bulletPointThree'),
                        t('rakuten.bulletPointFour'),
                    ]}
                    technologies={t('rakuten.technologies')}
                    image={{
                        src: rakutenScreenShot,
                        alt: t('rakuten.imageAltText'),
                    }}
                    href={rakutenIchibaUrl}
                    isNestedAccordion={true}
                />
            </AccordionNest>
            <Accordion
                id='appliedsystems-payments-accordion'
                headerProps={{
                    jobTitle: t('softwareEngineer'),
                    companyName: t('appliedSystems.companyName'),
                    location: t('location.brighton'),
                    dateRange: t('appliedSystems.payments.dateRange'),
                }}
                description={[
                    t('appliedSystems.payments.descriptionOne'),
                ]}
                bulletPoints={[
                    t('appliedSystems.payments.bulletPointOne'),
                    t('appliedSystems.payments.bulletPointTwo'),
                    t('appliedSystems.payments.bulletPointThree'),
                ]}
                technologies={t('appliedSystems.payments.technologies')}
                image={{
                    src: appliedSystemsScreenshot,
                    alt: t('appliedSystems.imageAltText'),
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
                    src: appliedSystemsScreenshot,
                    alt: 'A placeholder image of a screenshot',
                }}
                href={appliedSystemsUrl}
            />
        </div>
    );
};

export default WorkHistoryPage;
