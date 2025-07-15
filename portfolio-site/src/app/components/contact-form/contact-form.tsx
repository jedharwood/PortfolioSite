'use client';
import { ContactFormData, contactFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    useState,
    JSX,
} from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSubmitHandler } from '@/actions';

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);
    const res = await contactFormSubmitHandler(data);
    console.log('clientSide', res.status)
    // maybe handle these two conditionally...
    setIsSending(false);
    reset();
    // display success message
};

    const formInput = (
        inputId: 'name' | 'email' | 'subject' | 'message',
        inputType: 'text' | 'email' | 'text-area',
        label: string,
        placeholder: string,
    ): JSX.Element => {
        // set min-h
        const inputBaseClasses: string =
            'bg-[var(--background)] py-2.5 px-5 w-full rounded-4xl border-2 border-[var(--accent)] outline-none text-lg';
        const inputHoverClasses: string =
            'hover:border-[var(--accent-hover)] hover:ring-3 hover:ring-offset-2 hover:ring-[var(--accent-hover)] hover:ring-offset-[var(--background)]';
        const inputFocusClasses: string =
            'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';
        // reuse focus classes

        return (
            <div>
                <label htmlFor={inputId} className='text-md mb-1 block pl-6'>
                    {label}
                    {/* // internationalize this... */}
                </label>
                {inputType === 'text-area' ? (<textarea
                rows={6}
                        id={inputId}
                    className={`${inputBaseClasses} ${inputHoverClasses} ${inputFocusClasses}`}
                    placeholder={placeholder} // internationalize this...
                    {...register(inputId)}
                />) : (
                    <input
                    type={inputType}
                    id={inputId}
                    className={`${inputBaseClasses} ${inputHoverClasses} ${inputFocusClasses}`}
                    placeholder={placeholder} // internationalize this...
                    {...register(inputId)}
                    // required?
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

    const submitButton = (): JSX.Element => {
        const buttonBaseClasses: string = 'min-w-3xs rounded-4xl bg-[var(--accent)] px-5 py-2.5 text-center text-white sm:w-auto outline-none';
        const buttonHoverClasses: string = 'hover:bg-[var(--accent-hover)]';
        const buttonFocusClasses: string = 'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';
        return (<button
                type='submit'
                // work on button classes
                // disabled state
                // loading state
                disabled={isSending}
                className={`${buttonBaseClasses} ${buttonHoverClasses} ${buttonFocusClasses}`}
            >
                {isSending ? 'Sending...' : 'Submit'}
            </button>)
    };

    return (
        <form className='space-y-3' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-x-6 md:grid-cols-2 space-y-3'>
                {formInput('name', 'text', 'Name', 'John Doe')}
                {formInput(
                    'email',
                    'email',
                    'Email Address',
                    'jason@jasonseggs.co.uk',
                )}
            </div>
            {formInput('subject', 'text', 'Subject', 'Subject')}
            {formInput('message', 'text-area', 'Message', 'Your message')}
            {submitButton()}
        </form>
    );
};

export default ContactForm;
