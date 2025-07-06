'use client';
import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';

type AccordionProps = {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    dateRange: string;
    description: string[];
    bulletPoints: string[];
    technologies: string;
    image: GlobalImage;
    href: string;
};

const renderAccordionHeader = (props: AccordionProps): JSX.Element => {
    const { jobTitle, companyName, location, dateRange } = props;

    return (
        <div className='flex w-full flex-col gap-1 font-semibold'>
            <div className='flex w-full flex-wrap space-x-2'>
                <span className='whitespace-nowrap'>{`${jobTitle},`}</span>
                <span className='whitespace-nowrap'>{companyName}</span>
            </div>
            <div className='flex w-full flex-wrap justify-between space-x-4 text-sm'>
                <span className='whitespace-nowrap'>{location}</span>
                <span className='whitespace-nowrap'>{dateRange}</span>
            </div>
        </div>
    );
};

export const Accordion = (props: AccordionProps) => {
    const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionIsOpen(false);
    }, []);

    const {
        id,
        jobTitle,
        companyName,
        dateRange,
        description,
        bulletPoints,
        technologies,
        image,
        href
    } = props;

    const renderPlusMinusSvg = (): JSX.Element => {
        const rectClassNames: string = `origin-center transform transition duration-200 ease-out ${accordionIsOpen && '!rotate-180'}`;

        return (
            <svg
                className='svg-button ml-4 shrink-0 lg:ml-6'
                width='16'
                height='16'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
            >
                <rect
                    y='7'
                    width='20'
                    height='2'
                    rx='1'
                    className={rectClassNames}
                />
                <rect
                    y='7'
                    width='20'
                    height='2'
                    rx='1'
                    className={`${rectClassNames} rotate-90`}
                />
            </svg>
        );
    };

    const renderAccordionImageAnchor = (
        screenSize: 'mobile' | 'desktop',
    ): JSX.Element => {
        const accordionImageClassNames: string = `relative col-span-1 overflow-hidden transition-all duration-300 ease-in-out ${screenSize === 'mobile' ? 'lg:hidden' : 'hidden lg:block'} ${accordionIsOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'} hover:scale-98`;

        return (
            <a className={accordionImageClassNames} href={href}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    placeholder='blur'
                    className='my-2 h-auto w-full rounded-md object-contain'
                />
            </a>
        );
    };

    return (
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
            <div className='accordion col-span-1 space-y-2 py-2 lg:col-span-2'>
                <h2>
                    <button
                        className='justify-betweentext-left flex w-full items-center'
                        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
                        aria-expanded={accordionIsOpen}
                        aria-controls={id}
                    >
                        {renderAccordionHeader(props)}
                        {renderPlusMinusSvg()}
                    </button>
                </h2>
                <div
                    id={id}
                    role='region'
                    aria-labelledby={`${jobTitle}, ${companyName} ${dateRange}`}
                    className={`col-span-1 grid overflow-hidden text-sm transition-all duration-300 ease-in-out lg:col-span-2 ${accordionIsOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                    <div className='space-y-2 overflow-hidden'>
                        {description.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                        <ul className='list-inside list-disc space-y-1'>
                            {bulletPoints.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <p className='pb-2'>
                            <span className='font-semibold'>
                                Technologies:{' '}
                            </span>
                            {technologies}
                        </p>
                    </div>
                    {renderAccordionImageAnchor('mobile')}
                </div>
            </div>
            {renderAccordionImageAnchor('desktop')}
        </div>
    );
};
