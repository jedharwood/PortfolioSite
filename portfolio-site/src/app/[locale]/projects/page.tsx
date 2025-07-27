import { FC } from 'react';
import { useTranslations } from 'next-intl';
import CommonMainLayout from '../../components/common-main-layout';

export const metadata = {
    title: 'Jed Harwood | Projects',
    description:
        'Showcasing a curated selection of web and software development projects — including open-source tools, client apps and experimental work.',
};

const ProjectsPage: FC = () => {
    const t = useTranslations('Projects');

    return <CommonMainLayout title={t('title')} subTitle={t('subTitle')} />;
};

export default ProjectsPage;
