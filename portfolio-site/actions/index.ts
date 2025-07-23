'use server';
import { ContactFormData, contactFormSchema } from '../schemas/contact-form';
// import nodemailer from 'nodemailer';

type FormResponse = {
    success: boolean;
};

export const contactFormSubmitHandler = async (
    data: ContactFormData,
): Promise<FormResponse> => {
    try {
        const validation = contactFormSchema.safeParse(data);
        if (!validation.success) throw new Error('Invalid data');

        // const userEmail = process.env.SMTP_USER;
        // const transporter = nodemailer.createTransport({
        //     service: process.env.SMTP_SERVICE,
        //     secure: true,
        //     auth: {
        //         user: userEmail,
        //         pass: process.env.SMTP_PASS,
        //     },
        // });

        // const { name, email, message, subject } = validation.data;
        // await transporter.sendMail({
        //     from: `"Contact Form" <${userEmail}>`,
        //     to: userEmail,
        //     replyTo: email,
        //     subject: subject,
        //     html: `
        //         <h3>Hey there!</h3>
        //         <p>You received a new message from your contact form.</p>
        //         <p><strong>Name:</strong> ${name}</p>
        //         <p><strong>Email:</strong> ${email}</p>
        //         <p><strong>Subject:</strong> ${subject}</p>
        //         <p><strong>Message:</strong><br>${message}</p>
        //     `,
        //     text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage:\n${message}`,
        // });

        return {
            success: true,
        };
    } catch (error) {
        console.error('e', error);
        return {
            success: false,
        };
    }
};
