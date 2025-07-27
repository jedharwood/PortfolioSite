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
import { maskSvg } from './contact-form-images';
import FormInput from './input-field';
import SubmitButton from './submit-button';
import SuccessReport from './success-report';
import SvgButton from '../svg-button/svg-button';
import SvgAnchor from '../svg-anchor';

const actionTypes = {
    FORM_SUBMITTED: 'FORM_SUBMITTED',
    SUBMISSION_SUCCEEDED: 'SUBMISSION_SUCCEEDED',
    SUBMISSION_FAILED: 'SUBMISSION_FAILED',
    FORM_STATE_RESET: 'FORM_STATE_RESET',
} as const;

type FormAction =
    | { type: typeof actionTypes.FORM_SUBMITTED }
    | { type: typeof actionTypes.SUBMISSION_SUCCEEDED }
    | { type: typeof actionTypes.SUBMISSION_FAILED }
    | { type: typeof actionTypes.FORM_STATE_RESET };

type FormState = {
    isSending: boolean;
    isSuccess: boolean;
    isFailure: boolean;
    failureCount: number;
};

const initialState: FormState = {
    isSending: false,
    isSuccess: false,
    isFailure: false,
    failureCount: 0,
};

const formStateReducer = (state: FormState, action: FormAction) => {
    switch (action.type) {
        case actionTypes.FORM_SUBMITTED: {
            return {
                ...state,
                isSending: true,
            };
        }
        case actionTypes.SUBMISSION_SUCCEEDED: {
            return {
                ...state,
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
                failureCount: state.failureCount + 1,
            };
        }
        case actionTypes.FORM_STATE_RESET: {
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

    const resetFormAndFormState = (): void => {
        dispatch({ type: actionTypes.FORM_STATE_RESET });
        reset();
    };

    const focusClasses: string =
        'focus:ring-3 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

    if (formState.isSuccess) {
        return (
            <SuccessReport
                onClickClose={() =>
                    dispatch({ type: actionTypes.FORM_STATE_RESET })
                }
                reportType='success'
                imageElement={
                    <SvgButton
                        onClickFunction={() =>
                            dispatch({ type: actionTypes.FORM_STATE_RESET })
                        }
                        label={t('success.svgLabel')}
                        buttonType='form-success'
                        size='xl'
                    />
                }
            />
        );
    }

    if (formState.isFailure && formState.failureCount > 3) {
        return (
            <SuccessReport
                onClickClose={() =>
                    dispatch({ type: actionTypes.FORM_STATE_RESET })
                }
                reportType='completeFailure'
                imageElement={
                    <SvgButton
                        onClickFunction={() => resetFormAndFormState()}
                        label={t('completeFailure.svgLabel')}
                        buttonType='complete-failure'
                        size='xl'
                    />
                }
            >
                <SvgAnchor type='linked-in' />
            </SuccessReport>
        );
    }

    if (formState.isFailure) {
        return (
            <SuccessReport
                onClickClose={() =>
                    dispatch({ type: actionTypes.FORM_STATE_RESET })
                }
                reportType='failure'
                imageElement={
                    // this might want some kind of label/alt text...
                    <div className='svg-button h-50 w-50 p-2'>{maskSvg}</div>
                }
            >
                <SubmitButton
                    isSending={formState.isSending}
                    focusClasses={focusClasses}
                    buttonType='retry'
                    onClickFunction={handleSubmit(onSubmit)}
                />
            </SuccessReport>
        );
    }

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
            <SubmitButton
                isSending={formState.isSending}
                focusClasses={focusClasses}
                buttonType='submit'
            />
        </form>
    );
};

export default ContactForm;
