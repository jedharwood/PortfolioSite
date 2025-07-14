import { JSX } from 'react';
import * as images from './svg-images';

type SvgIconProps = {
    type:
        | 'typescript'
        | 'javascript'
        | 'react'
        | 'vue'
        | 'node'
        | 'next'
        | 'dotnet'
        | 'rails'
        | 'fastify'
        | 'html'
        | 'a11y'
        | 'tailwind'
        | 'css'
        | 'bootstrap'
        | 'sass'
        | 'less'
        | 'styledcomponents'
        | 'sequelize'
        | 'mongo'
        | 'mysql'
        | 'tsql'
        | 'postgres'
        | 'responsivedesign'
        | 'cypress'
        | 'specflow';
};

const svgIconContentMap: Record<
    SvgIconProps['type'],
    { label: string; icon: JSX.Element }
> = {
    typescript: { label: 'Typescript', icon: images.typescriptSvg },
    javascript: { label: 'Javascript', icon: images.javascriptSvg },
    react: { label: 'React', icon: images.reactSvg },
    vue: { label: 'Vue.js', icon: images.vueSvg },
    node: { label: 'Node.js', icon: images.nodeSvg },
    next: { label: 'Next.js', icon: images.nextSvg },
    dotnet: { label: '.NET C#', icon: images.dotnetSvg },
    rails: { label: 'Ruby on Rails', icon: images.railsSvg },
    fastify: { label: 'Fastify', icon: images.fastifyIcon },
    html: { label: 'HTML', icon: images.htmlIcon },
    a11y: { label: 'Web Accessibility', icon: images.a11yIcon },
    tailwind: { label: 'Tailwind', icon: images.tailwindSvg },
    css: { label: 'CSS', icon: images.cssIcon },
    bootstrap: { label: 'Bootstrap', icon: images.bootstrapIcon },
    sass: { label: 'SASS', icon: images.sassSvg },
    less: { label: 'LESS', icon: images.lessSvg },
    styledcomponents: {
        label: 'Styled Components',
        icon: images.styledComponentsSvg,
    },
    sequelize: { label: 'Sequelize', icon: images.sequelizeSvg },
    mongo: { label: 'MongoDB', icon: images.mongoSvg },
    mysql: { label: 'MySQL', icon: images.mySqlSvg },
    tsql: { label: 'Transact-SQL', icon: images.tSqlSvg },
    postgres: { label: 'PostgreSQl', icon: images.postgresQlSvg },
    responsivedesign: {
        label: 'Responsive Design',
        icon: images.responsiveDesignSvg,
    },
    cypress: { label: 'Cypress', icon: images.cypressSvg },
    specflow: { label: 'SpecFlow', icon: images.specFlowSvg },
};

const SvgIcon = ({ type }: SvgIconProps): JSX.Element => {
    const svgIconContent = svgIconContentMap[type];

    return (
        <div className='svg-icon inline-flex origin-center transform gap-4 transition-transform duration-300 hover:scale-105'>
            <div className='flex items-center'>
                <div className='h-10 w-10'>{svgIconContent.icon}</div>
            </div>
            <span className='primary-text-hoverable content-center text-xl font-semibold'>
                {svgIconContent.label}
            </span>
        </div>
    );
};

export default SvgIcon;
