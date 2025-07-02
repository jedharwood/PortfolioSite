import { JSX } from 'react';

type SvgButtonProps = {
    onClickFunction: () => void;
    label: string;
    buttonType: 'burger-menu';
};

export const SvgButton = ({
    onClickFunction,
    label,
    buttonType,
}: SvgButtonProps): JSX.Element => {
    return (
        <button
            type='button'
            className='svg-button h-10 w-10 p-2'
            aria-controls={buttonType}
            aria-expanded='false'
            aria-label={label}
            onClick={onClickFunction}
        >
            <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
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
