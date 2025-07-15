import { z } from 'zod';
// maybe I need to move this to a shared space

export const contactFormSchema = z.object({
    name: z.string().min(2, 'Too short').max(50, 'Too long'),
    subject: z.string().min(5, 'Too short').max(50, 'Too long'), // maybe make optional
    email: z.string().email('Invalid email'),
    message: z.string().min(10, 'Too short').max(500, 'Too long'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
