import { FC } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '../../components/contact-form/contact-form';
import CommonMainLayout from '../../components/common-main-layout';

const ContactPage: FC = () => {
    const t = useTranslations('Contact');

    return (
        <CommonMainLayout title={t('title')}>
            <ContactForm />
        </CommonMainLayout>
    );
};

export default ContactPage;
