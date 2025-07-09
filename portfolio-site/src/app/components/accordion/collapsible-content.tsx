import { JSX, ReactNode } from 'react';

type CollapsibleContentProps = {
    id: string;
    children: ReactNode;
    headerProps: AccordionHeaderProps;
    accordionIsOpen: boolean;
    isNestedAccordion?: boolean;
};

export const CollapsibleContent = ({
    id,
    children,
    headerProps,
    accordionIsOpen,
    isNestedAccordion = false,
}: CollapsibleContentProps): JSX.Element => {
    const { jobTitle, companyName, dateRange } = headerProps;
    const baseClasses: string = 'overflow-hidden transition-all duration-300';
    const nestedClasses: string = isNestedAccordion ? 'col-span-3 ml-8 lg:mr-4' : '';
    const openStateClasses: string = accordionIsOpen
        ? 'max-h-[800px] opacity-100'
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
