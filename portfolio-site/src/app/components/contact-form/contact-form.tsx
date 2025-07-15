'use client';
import { ContactFormData, contactFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSubmitHandler } from '@/actions';
import { useTranslations } from 'next-intl';
import Spinner from './spinner';

// error styling

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onChange',
    });
    const [isSending, setIsSending] = useState(false);
    const t = useTranslations('Contact');

    const onSubmit = async (data: ContactFormData) => {
        console.log({ data });
        setIsSending(true);
        const res = await contactFormSubmitHandler(data);
        console.log('clientSide', res);
        // maybe handle these two conditionally...
        setIsSending(false);
        reset();
        // display success message
    };

    const focusClasses: string =
        'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

    const formInput = (
        inputId: 'name' | 'email' | 'subject' | 'message',
        inputType: 'text' | 'email' | 'text-area',
    ): JSX.Element => {
        const inputBaseClasses: string =
            'bg-[var(--background)] py-2.5 px-5 w-full rounded-4xl border-2 border-[var(--accent)] outline-none text-lg';
        const inputHoverClasses: string =
            'hover:border-[var(--accent-hover)] hover:ring-3 hover:ring-offset-2 hover:ring-[var(--accent-hover)] hover:ring-offset-[var(--background)]';
        const placeholder: string = t(`form.inputs.${inputId}.placeholder`);

        return (
            <div className='mb-3'>
                <label htmlFor={inputId} className='text-md mb-1 block pl-6'>
                    {t(`form.inputs.${inputId}.label`)}
                </label>
                {inputType === 'text-area' ? (
                    <textarea
                        rows={6}
                        id={inputId}
                        className={`${inputBaseClasses} ${inputHoverClasses} ${focusClasses} min-h-13`}
                        placeholder={placeholder}
                        {...register(inputId)}
                    />
                ) : (
                    <input
                        type={inputType}
                        id={inputId}
                        className={`${inputBaseClasses} ${inputHoverClasses} ${focusClasses}`}
                        placeholder={placeholder}
                        {...register(inputId)}
                    />
                )}
                {errors[inputId] && (
                    <span className='pl-6 text-sm'>
                        {errors[inputId].message}
                    </span>
                )}
            </div>
        );
    };

    // Maybe I move this out...
    const submitButton = (): JSX.Element => {
        const buttonBaseClasses: string =
            'min-w-3xs rounded-4xl bg-[var(--accent)] px-5 py-2.5 text-center text-white sm:w-auto outline-none';
        const buttonHoverClasses: string = 'hover:bg-[var(--accent-hover)]';

        return (
            <button
                type='submit'
                disabled={isSending}
                className={`${buttonBaseClasses} ${buttonHoverClasses} ${focusClasses}`}
            >
                {isSending ? (
                    <div className='flex items-center justify-center gap-x-2'>
                        <span>{t('form.buttons.sending')}</span>
                        <Spinner />
                    </div>
                ) : (
                    t('form.buttons.send')
                )}
            </button>
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-x-6 md:grid-cols-2'>
                {formInput('name', 'text')}
                {formInput('email', 'email')}
            </div>
            {formInput('subject', 'text')}
            {formInput('message', 'text-area')}
            {submitButton()}
        </form>
    );
};

export default ContactForm;
