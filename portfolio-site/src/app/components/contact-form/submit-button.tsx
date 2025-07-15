import { useTranslations } from 'next-intl';
import Spinner from './spinner';

interface SubmitButtonProps {
    isSending: boolean;
    focusClasses: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    isSending,
    focusClasses,
}) => {
    const t = useTranslations('Contact.form.buttons');

    const buttonBaseClasses =
        'w-full min-w-3xs rounded-4xl bg-[var(--accent)] px-5 py-2.5 text-center text-white sm:w-auto outline-none';
    const buttonHoverClasses = 'hover:bg-[var(--accent-hover)]';

    return (
        <button
            type='submit'
            disabled={isSending}
            className={`${buttonBaseClasses} ${buttonHoverClasses} ${focusClasses}`}
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
