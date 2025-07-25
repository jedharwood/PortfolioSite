'use client';
import {
    ContactFormData,
    contactFormSchema,
} from '../../../../schemas/contact-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useReducer, JSX } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { contactFormSubmitHandler } from '@/actions';
import FormInput from './input-field';
import SubmitButton from './submit-button';
import SuccessReport from './success-report';
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

    const focusClasses: string =
        'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

    return formState.isSuccess ? (
        <SuccessReport
            onClickClose={() => dispatch({ type: actionTypes.FORM_RESET })}
            title={t('success.title')}
            message={t('success.message')}
        >
            <SvgButton
                onClickFunction={() =>
                    dispatch({ type: actionTypes.FORM_RESET })
                }
                label={t('success.svgLabel')}
                buttonType='form-success'
                size='xl'
            />
        </SuccessReport>
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
