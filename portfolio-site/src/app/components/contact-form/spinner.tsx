import { JSX } from 'react';

const Spinner = (): JSX.Element => (
    <div
        className='text-surface inline-block h-5 w-5 animate-spin rounded-full border-3 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
    />
);

export default Spinner;
