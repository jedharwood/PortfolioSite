import { JSX, ReactNode } from 'react';

type ExperienceSectionProps = {
    label: string;
    children: ReactNode;
};

const ExperienceSection = ({
    label,
    children,
}: ExperienceSectionProps): JSX.Element => (
    <section className='flex flex-col space-y-2' aria-label={label}>
        {children}
    </section>
);

export default ExperienceSection;
