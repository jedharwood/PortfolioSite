'use client';
import {
    ContactFormData,
    contactFormSchema,
} from '../../../../schemas/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReducer, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSubmitHandler } from '@/actions';
import FormInput from './input-field';
import SubmitButton from './submit-button';
import SvgButton from '../svg-button/svg-button';

const actionTypes = {
    FORM_SUBMITTED: 'FORM_SUBMITTED',
    SUBMISSION_SUCCEEDED: 'SUBMISSION_SUCCEEDED',
    SUBMISSION_FAILED: 'SUBMISSION_FAILED',
    FORM_RESET: 'FORM_RESET',
} as const;

type FormAction =
    | { type: typeof actionTypes.FORM_SUBMITTED }
    | { type: typeof actionTypes.SUBMISSION_SUCCEEDED }
    | { type: typeof actionTypes.SUBMISSION_FAILED }
    | { type: typeof actionTypes.FORM_RESET };

type FormState = {
    isSending: boolean;
    isSuccess: boolean;
    isFailure: boolean;
};

const initialState: FormState = {
    isSending: false,
    isSuccess: false,
    isFailure: false,
};

const formStateReducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case actionTypes.FORM_SUBMITTED: {
            return {
                isSending: true,
                isSuccess: false,
                isFailure: false,
            };
        }
        case actionTypes.SUBMISSION_SUCCEEDED: {
            return {
                isSending: false,
                isSuccess: true,
                isFailure: false,
            };
        }
        case actionTypes.SUBMISSION_FAILED: {
            return {
                isSending: false,
                isSuccess: false,
                isFailure: true,
            };
        }
        case actionTypes.FORM_RESET: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

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
    const [formState, dispatch] = useReducer(formStateReducer, initialState);

    const onSubmit = async (data: ContactFormData) => {
        dispatch({ type: actionTypes.FORM_SUBMITTED });
        const res = await contactFormSubmitHandler(data);

        if (res.success) {
            dispatch({ type: actionTypes.SUBMISSION_SUCCEEDED });
            reset();
        } else {
            dispatch({ type: actionTypes.SUBMISSION_FAILED });
        }
    };

    // conditionally set/unset tab index for hidden elements
    const focusClasses: string =
        'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

    const closeButtonSvg: JSX.Element = (
        <svg
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='h-6 w-6'
        >
            <path
                strokeLinecap='round'
                d='M6 18L18 6M6 6l12 12'
            />
        </svg>
    );

    return (
        <>
            <div
                className={`relative flex flex-col items-center justify-center gap-4 transition-opacity duration-300 md:flex-row ${!formState.isSuccess ? 'pointer-events-none max-h-0 opacity-0' : 'pointer-events-auto max-h-[300px] opacity-100'}`}
            >
                <button
                    className='svg-button absolute top-2 right-2'
                    onClick={() => dispatch({ type: actionTypes.FORM_RESET })}
                >
                    {closeButtonSvg}
                </button>
                <SvgButton
                    onClickFunction={() =>
                        dispatch({ type: actionTypes.FORM_RESET })
                    }
                    label='Need to internationalize this'
                    buttonType='form-success'
                    size='xl'
                />
                <div className='flex flex-col justify-center text-center'>
                    {/* Extract into component */}
                    <h1 className='text-2xl font-semibold'>
                        Thanks for your message
                    </h1>
                    <p>Youll be hearing from me real soon.</p>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`transition-opacity duration-300 ${formState.isSuccess ? 'pointer-events-none max-h-0 opacity-0' : 'pointer-events-auto max-h-[600px] opacity-100'}`} // make untabbable
            >
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
                <SubmitButton
                    isSending={formState.isSending}
                    focusClasses={focusClasses}
                />
            </form>
        </>
    );
};

export default ContactForm;
