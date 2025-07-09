'use client';
import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import { AccordionHeader } from './accordion-header';

type AccordionProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    description: string[];
    bulletPoints: string[];
    technologies: string;
    image: GlobalImage;
    href: string;
};

export const Accordion = ({
    id,
    headerProps,
    description,
    bulletPoints,
    technologies,
    image,
    href,
}: AccordionProps) => {
    const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionIsOpen(false);
    }, []);

    const { jobTitle, companyName, dateRange } = headerProps;

    const rectClassNames: string = `origin-center transform transition duration-200 ease-out ${accordionIsOpen && '!rotate-180'}`;
    const plusMinusSvg: JSX.Element = (
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

    const renderAccordionImageAnchor = (
        screenSize: 'mobile' | 'desktop',
    ): JSX.Element | null => {
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

    const collapsibleContent: JSX.Element = (
        <div
            id={id}
            role='region'
            aria-labelledby={`${jobTitle}, ${companyName} ${dateRange}`}
            className={`overflow-hidden transition-all duration-300 ${
                accordionIsOpen
                    ? 'max-h-[800px] opacity-100'
                    : 'max-h-0 opacity-0'
            }`}
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
                    <span className='font-semibold'>Technologies: </span>
                    {technologies}
                </p>
            </div>
            {renderAccordionImageAnchor('mobile')}
        </div>
    );

    return (
        <div className='grid grid-cols-3 gap-6'>
            <div
                className={`accordion col-span-3 space-y-2 py-2 lg:col-span-2`}
            >
                <h2>
                    <button
                        className='justify-betweentext-left flex w-full items-center'
                        onClick={() => setAccordionIsOpen(!accordionIsOpen)}
                        aria-expanded={accordionIsOpen}
                        aria-controls={id}
                    >
                        <AccordionHeader {...headerProps} />
                        {plusMinusSvg}
                    </button>
                </h2>
                {collapsibleContent}
            </div>
            {renderAccordionImageAnchor('desktop')}
        </div>
    );
};
