import { JSX } from 'react';

type SvgButtonProps = {
    onClickFunction: () => void;
    label: string;
    buttonType: 'burger-menu' | 'up-chevron';
    size?: 'regular' | 'large';
};

export const SvgButton = ({
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
            {buttonType === 'burger-menu' ? (
                <svg
                    className='h-12 w-12'
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
            ) : (
                <svg
                    className='h-20 w-20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <g id='SVGRepo_bgCarrier' strokeWidth='0' />
                    <g
                        id='SVGRepo_tracerCarrier'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                    <g id='SVGRepo_iconCarrier'>
                        <path
                            d='M6 15L12 9L18 15'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </g>
                </svg>
            )}
        </button>
    );
};
