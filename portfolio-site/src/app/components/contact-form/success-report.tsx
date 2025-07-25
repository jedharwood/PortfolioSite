import { FC, JSX, PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';

type SuccessReportProps = {
    onClickClose: () => void;
    title: string;
    message: string;
};

const closeButtonSvg: JSX.Element = (
    <svg
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        className='h-6 w-6'
        aria-hidden='true'
        focusable='false'
    >
        <path strokeLinecap='round' d='M6 18L18 6M6 6l12 12' />
    </svg>
);

const SuccessReport: FC<PropsWithChildren<SuccessReportProps>> = ({
    onClickClose,
    children,
    title,
    message,
}) => {
    const t = useTranslations('Contact.successReport');

    return (
        <div className='flex justify-center'>
            <div
                className={`relative flex min-h-[200px] w-fit flex-col items-center gap-4 md:flex-row`}
            >
                <button
                    className='svg-button absolute top-0 right-0'
                    onClick={onClickClose}
                    aria-label={t('closeButton')}
                >
                    {closeButtonSvg}
                </button>
                {children}
                <div className='flex flex-col px-2 text-center md:text-left'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessReport;
