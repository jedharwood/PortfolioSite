import { JSX } from 'react';

export const AccordionHeader = ({
    jobTitle,
    companyName,
    location,
    dateRange,
}: AccordionHeaderProps): JSX.Element => (
    <div className='flex w-full flex-col gap-1 font-semibold'>
        <div className='flex w-full flex-wrap space-x-2'>
            <span className='whitespace-nowrap'>{`${jobTitle},`}</span>
            <span className='whitespace-nowrap'>{companyName}</span>
        </div>
        <div className='flex w-full flex-wrap justify-between space-x-4 text-sm'>
            <span className='whitespace-nowrap'>{location}</span>
            <span className='whitespace-nowrap'>{dateRange}</span>
        </div>
    </div>
);
