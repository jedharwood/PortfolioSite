import React, {JSX} from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ContactFormData } from '../../../../schemas/contact-form';

type InputFieldProps = {
    inputId: 'name' | 'email' | 'subject' | 'message';
    inputType: 'text' | 'email' | 'text-area';
    register: UseFormRegister<ContactFormData>;
    errors: FieldErrors;
    focusClasses: string;
}

const InputField = ({
    inputId,
    inputType,
    register,
    errors,
    focusClasses,
}: InputFieldProps): JSX.Element => {
    const t = useTranslations('Contact.form.inputs');
    const error = errors[inputId]?.message;
    const baseClasses = `${error ? 'bg-red-500 text-white' : 'bg-[var(--background)]'} py-2.5 px-5 w-full rounded-4xl border-2 border-[var(--accent)] outline-none text-lg`;
    const hoverClasses =
        'hover:border-[var(--accent-hover)] hover:ring-3 hover:ring-offset-2 hover:ring-[var(--accent-hover)] hover:ring-offset-[var(--background)]';
    const placeholder = t(`${inputId}.placeholder`);

    return (
        <div className='mb-3'>
            <label
                htmlFor={inputId}
                className={`text-md mb-1 block pl-6 ${error && 'text-red-500'}`}
            >
                {t(`${inputId}.label`)}
            </label>
            {inputType === 'text-area' ? (
                <textarea
                    rows={6}
                    id={inputId}
                    className={`${baseClasses} ${hoverClasses} ${focusClasses} min-h-13`}
                    placeholder={placeholder}
                    {...register(inputId)}
                />
            ) : (
                <input
                    type={inputType}
                    id={inputId}
                    className={`${baseClasses} ${hoverClasses} ${focusClasses}`}
                    placeholder={placeholder}
                    {...register(inputId)}
                />
            )}
            {errors[inputId] && (
                <span className='pl-6 text-sm text-red-500'>
                    {error?.toString()}
                </span>
            )}
        </div>
    );
};

export default InputField;
