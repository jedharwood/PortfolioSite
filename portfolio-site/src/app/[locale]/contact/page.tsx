import { FC } from 'react';
import ContactForm from '../../components/contact-form/contact-form';

const ContactPage: FC = () => {
    return (
        <div className='mb-4 space-y-4 px-4 text-lg lg:px-0'>
            <header>
                <h1 className='text-4xl font-bold'>Contact Page</h1>
            </header>
            <ContactForm />
        </div>
    );
};

export default ContactPage;
