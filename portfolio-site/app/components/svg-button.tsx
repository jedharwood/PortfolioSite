import { JSX } from 'react';

type SvgButtonProps = {
    onClickFunction: () => void;
};

export const SvgButton = ({ onClickFunction }: SvgButtonProps): JSX.Element => {
    return (
        <button
            type='button'
            className='svg-button inline-flex h-10 w-10 items-center justify-center rounded-lg p-2'
            aria-controls='navbar-hamburger'
            aria-expanded='false'
            onClick={onClickFunction}
        >
            <span className='sr-only'>Open main menu</span>
            <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
            >
                <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 1h15M1 7h15M1 13h15'
                />
            </svg>
        </button>
    );
};
