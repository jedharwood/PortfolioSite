import { JSX } from 'react';

const burgerMenuSvg: JSX.Element = (
    <svg
        className='h-12 w-12'
        aria-hidden='true'
        focusable='false'
        fill='currentColor'
        viewBox='0 0 17 14'
    >
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
        />
    </svg>
);

const upChevronSvg: JSX.Element = (
    <svg
        className='h-20 w-20'
        aria-hidden='true'
        focusable='false'
        viewBox='0 0 24 24'
        fill='none'
    >
        <path d='M6 15L12 9L18 15' stroke='currentColor' strokeWidth='2' />
    </svg>
);

type SvgButtonProps = {
    onClickFunction: () => void;
    label: string;
    buttonType: 'burger-menu' | 'scroll-to-top';
    size?: 'regular' | 'large';
};

const SvgButton = ({
    onClickFunction,
    label,
    buttonType,
    size = 'regular',
}: SvgButtonProps): JSX.Element => {
    return (
        <button
            type='button'
            className={`svg-button p-2 ${size === 'large' ? 'h-20 w-20' : 'h-12 w-12'}`}
            aria-controls={buttonType}
            aria-expanded='false'
            aria-label={label}
            onClick={onClickFunction}
        >
            {buttonType === 'burger-menu' ? burgerMenuSvg : upChevronSvg}
        </button>
    );
};

export default SvgButton;
