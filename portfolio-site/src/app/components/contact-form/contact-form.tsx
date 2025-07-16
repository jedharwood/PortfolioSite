'use client';
import {
    ContactFormData,
    contactFormSchema,
} from '../../../../schemas/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSubmitHandler } from '@/actions';
import FormInput from './input-field';
import SubmitButton from './submit-button';

const ContactForm = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onChange',
    });
    const [isSending, setIsSending] = useState<boolean>(false);

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
            <SubmitButton isSending={isSending} focusClasses={focusClasses} />
        </form>
    );
};

export default ContactForm;
