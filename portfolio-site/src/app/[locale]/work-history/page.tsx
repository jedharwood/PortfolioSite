import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { workHistoryPageUrls as urls } from '../../utilities/resources';
import accurateScreenshot from '../../../../public/work-history/accurate-screenshot.webp';
import appliedSystemsScreenshot from '../../../../public/work-history/applied-systems-screenshot.webp';
import axaScreenshot from '../../../../public/work-history/axa-screenshot.webp';
import dacJapanScreenshot from '../../../../public/work-history/dac-japan-screenshot.webp';
import nycmcScreenshot from '../../../../public/work-history/nycmc-screenshot.webp';
import rakutenScreenshot from '../../../../public/work-history/rakuten-screenshot.webp';
import soundrawScreenshot from '../../../../public/work-history/soundraw-screenshot.webp';
import Accordion from '../../components/accordion/accordion';
import AccordionNest from '../../components/accordion/accordion-nest';

const WorkHistoryPage: FC = () => {
    const t = useTranslations('WorkHistory');

    return (
        <div className='mb-4 space-y-4 px-4 lg:px-0 text-lg'>
            <header>
                <h1 className='text-4xl font-bold'>{t('title')}</h1>
            </header>
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
                href={urls.appliedSystemsUrl}
            />
            <AccordionNest
                id='freelance-japan-accordion-nest'
                headerProps={{
                    jobTitle: t('frontendEngineer'),
                    companyName: t('japan.companyName'),
                    location: t('japan.location'),
                    dateRange: t('japan.dateRange'),
                }}
            >
                <Accordion
                    id='axa-japan-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('japan.contracting.axa.companyName'),
                        location: t('location.tokyo'),
                        dateRange: t('japan.contracting.axa.dateRange'),
                    }}
                    description={[
                        t('japan.contracting.axa.descriptionOne'),
                        t('japan.contracting.axa.descriptionTwo'),
                    ]}
                    bulletPoints={[
                        t('japan.contracting.axa.bulletPointOne'),
                        t('japan.contracting.axa.bulletPointTwo'),
                    ]}
                    technologies={t('japan.contracting.axa.technologies')}
                    image={{
                        src: axaScreenshot,
                        alt: t('japan.contracting.axa.imageAltText'),
                    }}
                    href={urls.axaJapanUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='soundraw-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('japan.freelance.soundraw.companyName'),
                        location: t('location.tokyo'),
                        dateRange: t('japan.freelance.dateRange'),
                    }}
                    description={[
                        t('japan.freelance.freelanceText'),
                        t('japan.freelance.soundraw.descriptionOne'),
                    ]}
                    technologies={t('japan.freelance.soundraw.technologies')}
                    image={{
                        src: soundrawScreenshot,
                        alt: t('japan.freelance.soundraw.imageAltText'),
                    }}
                    href={urls.soundrawUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='new-york-city-motorcycles-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('japan.freelance.nycmc.companyName'),
                        location: t('japan.freelance.nycmc.location'),
                        dateRange: t('japan.freelance.dateRange'),
                    }}
                    description={[
                        t('japan.freelance.freelanceText'),
                        t('japan.freelance.nycmc.descriptionOne'),
                    ]}
                    technologies={t('japan.freelance.nycmc.technologies')}
                    image={{
                        src: nycmcScreenshot,
                        alt: t('japan.freelance.nycmc.imageAltText'),
                    }}
                    href={urls.nycmcUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='dark-arts-coffee-japan-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('japan.freelance.dac.companyName'),
                        location: t('japan.freelance.dac.location'),
                        dateRange: t('japan.freelance.dateRange'),
                    }}
                    description={[
                        t('japan.freelance.freelanceText'),
                        t('japan.freelance.dac.descriptionOne'),
                    ]}
                    technologies={t('japan.freelance.dac.technologies')}
                    image={{
                        src: dacJapanScreenshot,
                        alt: t('japan.freelance.dac.imageAltText'),
                    }}
                    href={urls.dacJapanUrl}
                    isNestedAccordion={true}
                />
                <Accordion
                    id='rakuten-ichiba-accordion'
                    headerProps={{
                        jobTitle: t('frontendEngineer'),
                        companyName: t('japan.contracting.rakuten.companyName'),
                        location: t('location.tokyo'),
                        dateRange: t('japan.contracting.rakuten.dateRange'),
                    }}
                    description={[
                        t('japan.contracting.rakuten.descriptionOne'),
                        t('japan.contracting.rakuten.descriptionTwo'),
                    ]}
                    bulletPoints={[
                        t('japan.contracting.rakuten.bulletPointOne'),
                        t('japan.contracting.rakuten.bulletPointTwo'),
                        t('japan.contracting.rakuten.bulletPointThree'),
                        t('japan.contracting.rakuten.bulletPointFour'),
                    ]}
                    technologies={t('japan.contracting.rakuten.technologies')}
                    image={{
                        src: rakutenScreenshot,
                        alt: t('japan.contracting.rakuten.imageAltText'),
                    }}
                    href={urls.rakutenIchibaUrl}
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
                description={[t('appliedSystems.payments.descriptionOne')]}
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
                href={urls.appliedSystemsUrl}
            />
            <Accordion
                id='vero-screening-accordion'
                headerProps={{
                    jobTitle: t('jrSoftwareDeveloper'),
                    companyName: t('vero.companyName'),
                    location: t('location.brighton'),
                    dateRange: t('vero.dateRange'),
                }}
                description={[t('vero.descriptionOne')]}
                technologies={t('vero.technologies')}
                image={{
                    src: accurateScreenshot,
                    alt: t('vero.imageAltText'),
                }}
                href={urls.accurateUrl}
            />
        </div>
    );
};

export default WorkHistoryPage;
