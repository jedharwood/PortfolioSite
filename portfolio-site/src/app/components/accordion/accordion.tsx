'use client';
import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import { ExpandableHeaderButton } from './expandable-header-button';
import { CollapsibleContent } from './collapsible-content';

type AccordionProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    description: string[];
    bulletPoints: string[];
    technologies: string;
    image: GlobalImage;
    href: string;
    isNestedAccordion?: boolean;
};

export const Accordion = ({
    id,
    headerProps,
    description,
    bulletPoints,
    technologies,
    image,
    href,
    isNestedAccordion = false
}: AccordionProps) => {
    const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionIsOpen(false);
    }, []);

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

    return (
        <div className='grid grid-cols-3 gap-6'>
            <div
                className={`accordion col-span-3 space-y-2 py-2 lg:col-span-2 ${isNestedAccordion && 'pl-10'}`}
            >
                <h2>
                    <ExpandableHeaderButton
                        id={id}
                        headerProps={headerProps}
                        accordionIsOpen={accordionIsOpen}
                        onClickFunction={() =>
                            setAccordionIsOpen(!accordionIsOpen)
                        }
                    />
                </h2>
                <CollapsibleContent
                    id={id}
                    headerProps={headerProps}
                    accordionIsOpen={accordionIsOpen}
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
                </CollapsibleContent>
            </div>
            {renderAccordionImageAnchor('desktop')}
        </div>
    );
};
