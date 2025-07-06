'use client';
import { useState, useEffect, JSX } from 'react';
import Image, { StaticImageData } from 'next/image';

type AccordionProps = {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    dateRange: string;
    description: string[];
    bulletPoints: string[];
    technologies: string;
    image: StaticImageData;
    altText: string;
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
        altText
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

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='accordion col-span-1 space-y-4 py-2 lg:col-span-2'>
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
                    {/* {accordionIsOpen && (<div className='lg:hidden'>Mobile Image</div>)} */}
                    {accordionIsOpen && (<Image
                        src={image}
                        alt={altText}
                        priority
                        // fill
                        className='lg:hidden'
                        placeholder='blur'
                        width={200}
                        height={200}
                    />)}
                </div>
            </div>
            {accordionIsOpen && (
                <div className="relative col-span-1 hidden lg:contents aspect-[1964/3024]">
                    <Image
                        src={image}
                        alt={altText}
                        placeholder="blur"
                        className='rounded-md my-2'
                    />
                </div>
            )}
        </div>
    );
};
