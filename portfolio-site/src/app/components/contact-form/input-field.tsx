import React from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { ContactFormData } from './schema';

interface InputFieldProps {
    inputId: 'name' | 'email' | 'subject' | 'message';
    inputType: 'text' | 'email' | 'text-area';
    register: UseFormRegister<ContactFormData>;
    errors: FieldErrors;
    focusClasses: string;
}

const InputField: React.FC<InputFieldProps> = ({
    inputId,
    inputType,
    register,
    errors,
    focusClasses,
}) => {
    const t = useTranslations('Contact.form.inputs');
    const inputBaseClasses =
        'bg-[var(--background)] py-2.5 px-5 w-full rounded-4xl border-2 border-[var(--accent)] outline-none text-lg';
    const inputHoverClasses =
        'hover:border-[var(--accent-hover)] hover:ring-3 hover:ring-offset-2 hover:ring-[var(--accent-hover)] hover:ring-offset-[var(--background)]';
    const placeholder = t(`${inputId}.placeholder`);

    return (
        <div className='mb-3'>
            <label htmlFor={inputId} className='text-md mb-1 block pl-6'>
                {t(`${inputId}.label`)}
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
                // Sort out error classes
                <span className='pl-6 text-sm text-red-500'>
                    {errors[inputId]?.message?.toString()}
                </span>
            )}
        </div>
    );
};

export default InputField;
