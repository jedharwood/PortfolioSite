'use client';
import { useState, useEffect, JSX, ReactNode } from 'react';
import { ExpandableHeaderButton } from './expandable-header-button';
import { CollapsibleContent } from './collapsible-content';

type AccordionNestProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    children: ReactNode;
};

export const AccordionNest = ({
    id,
    headerProps,
    children,
}: AccordionNestProps): JSX.Element => {
    const [accordionIsOpen, setAccordionIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setAccordionIsOpen(false);
    }, []);

    return (
        <div className={'grid grid-cols-3 gap-x-6'}>
            <h2 className='accordion col-span-3 space-y-2 pb-2 lg:col-span-2'>
                <ExpandableHeaderButton
                    id={id}
                    headerProps={headerProps}
                    accordionIsOpen={accordionIsOpen}
                    onClickFunction={() => setAccordionIsOpen(!accordionIsOpen)}
                    isNestingAccordion={true}
                />
            </h2>
            <CollapsibleContent
                id={id}
                headerProps={headerProps}
                accordionIsOpen={accordionIsOpen}
                isNestingAccordion={true}
            >
                {children}
            </CollapsibleContent>
        </div>
    );
};
