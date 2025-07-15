'use client';
import { ContactFormData, contactFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    // useState,
    JSX,
} from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        // reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onChange',
    });
    // const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: ContactFormData) => {
        console.log(data);
    };

    const formInput = (
        inputId: 'name' | 'email' | 'subject' | 'message',
        inputType: 'text' | 'email' | 'text-area',
        label: string,
        placeholder: string,
    ): JSX.Element => {
        const inputBaseClasses: string =
            'bg-[var(--background)] py-2.5 px-5 w-full rounded-4xl border-2 border-[var(--accent)] outline-none';
        const inputHoverClasses: string =
            'hover:border-[var(--accent-hover)] hover:ring-3 hover:ring-offset-2 hover:ring-[var(--accent-hover)] hover:ring-offset-[var(--background)]';
        const inputFocusClasses: string =
            'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

        return (
            <div>
                <label htmlFor={inputId} className='text-md mb-1 block pl-6'>
                    {label}
                    {/* // internationalize this... */}
                </label>
                <input
                    type={inputType}
                    id={inputId}
                    className={`${inputBaseClasses} ${inputHoverClasses} ${inputFocusClasses}`}
                    placeholder={placeholder} // internationalize this...
                    required
                    {...register(inputId)}
                />
                {errors[inputId] && (
                    <span className='pl-6 text-sm'>
                        {errors[inputId].message}
                    </span>
                )}
            </div>
        );
    };

    return (
        <form
        className='space-y-3' 
            onSubmit={handleSubmit(onSubmit)}>
            <div className='grid gap-6 md:grid-cols-2'>
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
            <button
                type='submit'
                className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
