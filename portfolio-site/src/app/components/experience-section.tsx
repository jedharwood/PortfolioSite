import { FC, PropsWithChildren } from 'react';

const ExperienceSection: FC<PropsWithChildren<{ label: string }>> = ({
    label,
    children,
}) => (
    <section className='flex flex-col space-y-2' aria-label={label}>
        {children}
    </section>
);

export default ExperienceSection;
