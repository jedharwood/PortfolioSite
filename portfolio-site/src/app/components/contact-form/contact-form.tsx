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
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('Contact.successReport');
    const [formState, dispatch] = useReducer(formStateReducer, initialState);

    const onSubmit = async (data: ContactFormData): Promise<void> => {
        dispatch({ type: actionTypes.FORM_SUBMITTED });
        const res = await contactFormSubmitHandler(data);

        if (res.success) {
            dispatch({ type: actionTypes.SUBMISSION_SUCCEEDED });
            reset();
        } else {
            dispatch({ type: actionTypes.SUBMISSION_FAILED });
        }
    };

    // conditionally set/unset tab index for hidden elements or does pointer-events take care of this?
    // extract into new component
    // Should the message box have an outline?

    const focusClasses: string =
        'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

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

    return formState.isSuccess ? (
        <div className='flex justify-center'>
            <div
                className={`relative flex w-fit flex-col items-center gap-4 md:flex-row`}
            >
                <button
                    className='svg-button absolute top-0 right-0'
                    onClick={() => dispatch({ type: actionTypes.FORM_RESET })}
                    aria-label={t('closeButton')}
                >
                    {closeButtonSvg}
                </button>
                <SvgButton
                    onClickFunction={() =>
                        dispatch({ type: actionTypes.FORM_RESET })
                    }
                    label={t('success.svgLabel')}
                    buttonType='form-success'
                    size='xl'
                />
                <div className='flex flex-col px-2 text-center md:text-left'>
                    <h1 className='text-2xl font-semibold'>
                        {t('success.title')}
                    </h1>
                    <p>{t('success.message')}</p>
                </div>
            </div>
        </div>
    ) : (
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
            <SubmitButton
                isSending={formState.isSending}
                focusClasses={focusClasses}
            />
        </form>
    );
};

export default ContactForm;
