import { JSX } from 'react';

type ExpandableHeaderButtonProps = {
    id: string;
    headerProps: AccordionHeaderProps;
    accordionIsOpen: boolean;
    onClickFunction: () => void;
    isNestingAccordion?: boolean;
};

const ExpandableHeaderButton = ({
    id,
    headerProps,
    accordionIsOpen,
    onClickFunction,
    isNestingAccordion = false,
}: ExpandableHeaderButtonProps): JSX.Element => {
    const expandableHeaderButtonClassNames: string = `flex w-full items-center justify-between text-left${isNestingAccordion && ' py-2'}`;
    const { jobTitle, companyName, location, dateRange } = headerProps;

    const accordionHeader: JSX.Element = (
        <div className='flex w-full flex-col gap-1 font-semibold text-xl'>
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

    const rectClassNames: string = `origin-center transform transition duration-200 ease-out ${accordionIsOpen && '!rotate-180'}`;
    const expandAccordionSvg: JSX.Element = (
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

    return (
        <button
            className={expandableHeaderButtonClassNames}
            onClick={onClickFunction}
            aria-expanded={accordionIsOpen}
            aria-controls={id}
        >
            {accordionHeader}
            {expandAccordionSvg}
        </button>
    );
};

export default ExpandableHeaderButton;
