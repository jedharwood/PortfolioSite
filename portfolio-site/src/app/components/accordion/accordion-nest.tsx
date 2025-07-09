'use client';
import { useState, useEffect, JSX, ReactNode } from 'react';
import { AccordionHeader } from './accordion-header';

type AccordionNestProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    children: ReactNode;
};

export const AccordionNest = ({
    id,
    headerProps,
    children,
}: AccordionNestProps) => {
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

    const collapsibleContent: JSX.Element =
        (
            <div
                id={id}
                role='region'
                aria-labelledby={`${jobTitle}, ${companyName} ${dateRange}`}
                className={`col-span-3 ml-8 overflow-hidden transition-all duration-300 lg:mr-4 ${
                    accordionIsOpen
                        ? 'max-h-[800px] opacity-100'
                        : 'max-h-0 opacity-0'
                }`}
            >
                {children}
            </div>
        );

    return (
        <div className={'grid grid-cols-3 gap-x-6'}>
            <h2 className='accordion col-span-3 space-y-2 pb-2 lg:col-span-2'>
                <button
                    className='flex w-full items-center justify-between py-2 text-left'
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
    );
};
