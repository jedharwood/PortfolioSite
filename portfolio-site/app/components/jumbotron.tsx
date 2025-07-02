import Image from 'next/image';
import hakkei from '../../public/hakkei-lanterns.jpg';
import { JSX } from 'react';

// dynamically import image

export const Jumbotron = (): JSX.Element => {
    return (
        <div className='relative'>
            <Image
                src={hakkei}
                alt='Lanterns outside Hakkei'
                priority
                className='w-full shadow-lg'
                placeholder='blur'
                width='500'
                height='100'
            />
        </div>
    );
};
