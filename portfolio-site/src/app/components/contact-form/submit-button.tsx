import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import Spinner from './spinner';

type SubmitButtonProps = {
    isSending: boolean;
    focusClasses: string;
    buttonType: 'submit' | 'retry';
    onClickFunction?: () => void;
};

const SubmitButton = ({
    isSending,
    focusClasses,
    buttonType,
    onClickFunction,
}: SubmitButtonProps): JSX.Element => {
    const t = useTranslations('Contact.form.buttons');
    const baseClasses: string =
        'w-full min-w-3xs rounded-4xl bg-[var(--accent)] px-5 py-2.5 text-center text-white sm:w-auto outline-none';
    const hoverClasses: string = 'hover:bg-[var(--accent-hover)]';
    const buttonText: string = buttonType === 'submit' ? t('send') : t('retry');

    return (
        <button
            type={buttonType === 'submit' ? 'submit' : 'button'}
            disabled={isSending}
            className={`${baseClasses} ${hoverClasses} ${focusClasses} cursor-pointer`}
            {...(onClickFunction && { onClick: onClickFunction })}
        >
            {isSending ? (
                <div className='flex items-center justify-center gap-x-2'>
                    <span>{t('sending')}</span>
                    <Spinner />
                </div>
            ) : (
                buttonText
            )}
        </button>
    );
};

export default SubmitButton;
