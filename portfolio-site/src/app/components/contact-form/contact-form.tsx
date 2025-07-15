'use client';
import { ContactFormData, contactFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSubmitHandler } from '@/actions';
import { useTranslations } from 'next-intl';
import Spinner from './spinner';
import FormInput from './input-field';

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
                <FormInput
                    inputId='name'
                    inputType='text'
                    register={register}
                    errors={errors}
                    focusClasses={focusClasses}
                />
                <FormInput
                    inputId='email'
                    inputType='email'
                    register={register}
                    errors={errors}
                    focusClasses={focusClasses}
                />
            </div>{' '}
            <FormInput
                inputId='subject'
                inputType='text'
                register={register}
                errors={errors}
                focusClasses={focusClasses}
            />
            <FormInput
                inputId='message'
                inputType='text-area'
                register={register}
                errors={errors}
                focusClasses={focusClasses}
            />
            {submitButton()}
        </form>
    );
};

export default ContactForm;
