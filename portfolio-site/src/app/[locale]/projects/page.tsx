import { FC } from 'react';
import { useTranslations } from 'next-intl';
import CommonMainLayout from '../../components/common-main-layout';

const ProjectsPage: FC = () => {
    const t = useTranslations('Projects');

    return (
        <CommonMainLayout title={t('title')} subTitle={t('subTitle')} />
    );
};

export default ProjectsPage;
