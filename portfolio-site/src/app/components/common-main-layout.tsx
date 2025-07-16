import { FC, PropsWithChildren } from 'react';

type CommonMainLayoutProps = {
    title: string;
    subTitle?: string;
};

const CommonMainLayout: FC<PropsWithChildren<CommonMainLayoutProps>> = ({
    children,
    title,
    subTitle,
}) => {
    return (
        <div className='mb-4 space-y-4 px-4 text-lg lg:px-0'>
            <header>
                <h1 className='text-4xl font-bold'>{title}</h1>
                {subTitle && (
                    <h2 className='text-2xl font-semibold'>{subTitle}</h2>
                )}
            </header>
            {children}
        </div>
    );
};

export default CommonMainLayout;
