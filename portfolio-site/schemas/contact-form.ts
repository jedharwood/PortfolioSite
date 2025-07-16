import { z } from 'zod';

// will I need to internationalize these???
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Input is too short').max(50, 'Input is too long'),
    subject: z
        .string()
        .min(2, 'Input is too short')
        .max(50, 'Input is too long'),
    email: z.string().email('Please input a valid email address'),
    message: z
        .string()
        .min(2, 'Input is too short')
        .max(500, 'Input is too long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
