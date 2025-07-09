import { JSX } from "react";

type ExpandAccordionSvgProps = {
    accordionIsOpen: boolean;
};

export const ExpandAccordionSvg = ({accordionIsOpen}: ExpandAccordionSvgProps): JSX.Element => {
    const rectClassNames: string = `origin-center transform transition duration-200 ease-out ${accordionIsOpen && '!rotate-180'}`;
    
    return (
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
};