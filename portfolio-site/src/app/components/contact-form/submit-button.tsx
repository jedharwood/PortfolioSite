import { JSX } from 'react';
import { useTranslations } from 'next-intl';
import Spinner from './spinner';

type SubmitButtonProps = {
    isSending: boolean;
    focusClasses: string;
}

const SubmitButton = ({
    isSending,
    focusClasses,
}: SubmitButtonProps): JSX.Element => {
    const t = useTranslations('Contact.form.buttons');
    const baseClasses: string =
        'w-full min-w-3xs rounded-4xl bg-[var(--accent)] px-5 py-2.5 text-center text-white sm:w-auto outline-none';
    const hoverClasses: string = 'hover:bg-[var(--accent-hover)]';

    return (
        <button
            type='submit'
            disabled={isSending}
            className={`${baseClasses} ${hoverClasses} ${focusClasses} cursor-pointer`}
        >
            {isSending ? (
                <div className='flex items-center justify-center gap-x-2'>
                    <span>{t('sending')}</span>
                    <Spinner />
                </div>
            ) : (
                t('send')
            )}
        </button>
    );
};

export default SubmitButton;
