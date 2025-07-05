'use client';
import { useState, useEffect } from 'react';

type AccordionProps = {
    id: string;
    jobTitle: string;
    companyName: string;
    location: string;
    dateRange: string;
    description: string[];
};

export const Accordion = ({
    id,
    jobTitle,
    companyName,
    location,
    dateRange,
    description,
}: AccordionProps) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionOpen(false);
    }, []);

    return (
        <div className='accordion py-2'>
            <h2>
                <button
                    className='flex w-full items-center justify-between py-2 text-left font-semibold'
                    onClick={() => setAccordionOpen(!accordionOpen)}
                    aria-expanded={accordionOpen}
                    aria-controls={id}
                >
                    <div className='flex w-full flex-col gap-1'>
                        <div className='flex w-full flex-wrap space-x-2 font-semibold'>
                            <span className='whitespace-nowrap'>{`${jobTitle},`}</span>
                            <span className='whitespace-nowrap'>
                                {companyName}
                            </span>
                        </div>
                        <div className='flex w-full flex-wrap justify-between space-x-4 text-sm'>
                            <span className='whitespace-nowrap'>
                                {location}
                            </span>
                            <span className='whitespace-nowrap'>
                                {dateRange}
                            </span>
                        </div>
                    </div>
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
                            className={`origin-center transform transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
                        />
                        <rect
                            y='7'
                            width='20'
                            height='2'
                            rx='1'
                            className={`origin-center rotate-90 transform transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`}
                        />
                    </svg>
                </button>
            </h2>
            <div
                id={id}
                role='region'
                aria-labelledby={`${jobTitle}, ${location} ${dateRange}`}
                className={`grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className='overflow-hidden'>
                    {description.map((text, i) => (
                        <p key={i} className='pb-2'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};
