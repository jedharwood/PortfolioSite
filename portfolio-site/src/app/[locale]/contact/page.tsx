import { FC } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '../../components/contact-form/contact-form';
import CommonMainLayout from '../../components/common-main-layout';

export const metadata = {
  title: 'Jed Harwood | Contact',
  description: 'Get in touch with Jed Harwood for freelance projects, job opportunities or tech collaborations via the contact form.'
};

const ContactPage: FC = () => {
    const t = useTranslations('Contact');

    return (
        <CommonMainLayout title={t('title')}>
            <ContactForm />
        </CommonMainLayout>
    );
};

export default ContactPage;
