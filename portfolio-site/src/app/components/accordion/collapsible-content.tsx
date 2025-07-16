import { FC, PropsWithChildren } from 'react';

type CollapsibleContentProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    accordionIsOpen: boolean;
    isNestingAccordion?: boolean;
};

const CollapsibleContent: FC<PropsWithChildren<CollapsibleContentProps>> = ({
    id,
    children,
    headerProps,
    accordionIsOpen,
    isNestingAccordion = false,
}) => {
    const { jobTitle, companyName, dateRange } = headerProps;
    const baseClasses: string = 'overflow-hidden transition-all duration-300';
    const nestedClasses: string = isNestingAccordion ? 'col-span-3' : '';
    const openStateClasses: string = accordionIsOpen
        ? 'max-h-[4300px] opacity-100'
        : 'max-h-0 opacity-0';

    return (
        <div
            id={id}
            role='region'
            aria-labelledby={`${jobTitle}, ${companyName} ${dateRange}`}
            className={`${baseClasses} ${nestedClasses} ${openStateClasses}`}
        >
            {children}
        </div>
    );
};

export default CollapsibleContent;
