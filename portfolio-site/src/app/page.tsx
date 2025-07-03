import { FC } from 'react';

const generatePageContent = () => {
    return (
        <ul>
            {Array.from({ length: 100 }, (_, index) => (
                <li key={index}>content</li>
            ))}
        </ul>
    );
};

const HomePage: FC = () => {
    return (
        <>
            <div className='px-4 lg:px-0'>
                <h1 className='text-4xl font-bold'>Jed Harwood</h1>
                <h2 className='text-lg text-gray-600'>Software Engineer</h2>
                <h3>
                    Full stack software engineer with a passion for creating
                    great, accessible user experiences with ReactJs and other
                    modern JavaScript frameworks
                </h3>
                {generatePageContent()}
            </div>
        </>
    );
};

export default HomePage;
