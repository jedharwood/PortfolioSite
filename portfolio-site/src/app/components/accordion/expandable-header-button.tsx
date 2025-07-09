import { JSX } from 'react';
import { AccordionHeader } from './accordion-header';
import { ExpandAccordionSvg } from './expand-accordion-svg';

type ExpandableHeaderButtonProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    accordionIsOpen: boolean;
    onClickFunction: () => void;
    isNestedAccordion?: boolean;
};

export const ExpandableHeaderButton = ({
    id,
    headerProps,
    accordionIsOpen,
    onClickFunction,
    isNestedAccordion = false,
}: ExpandableHeaderButtonProps): JSX.Element => {
    const expandableHeaderButtonClassNames: string = `flex w-full items-center justify-between text-left${isNestedAccordion && ' py-2'}`;

    return (
        <button
            className={expandableHeaderButtonClassNames}
            onClick={onClickFunction}
            aria-expanded={accordionIsOpen}
            aria-controls={id}
        >
            <AccordionHeader {...headerProps} />
            <ExpandAccordionSvg accordionIsOpen={accordionIsOpen} />
        </button>
    );
};
