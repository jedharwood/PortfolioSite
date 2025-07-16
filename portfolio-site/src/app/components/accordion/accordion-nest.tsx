'use client';
import { useState, useEffect, FC, PropsWithChildren } from 'react';
import CollapsibleContent from './collapsible-content';
import ExpandableHeaderButton from './expandable-header-button';

type AccordionNestProps = {
    id: string;
    headerProps: AccordionHeaderProps;
};

const AccordionNest: FC<PropsWithChildren<AccordionNestProps>> = ({
    id,
    headerProps,
    children,
}) => {
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

export default AccordionNest;
