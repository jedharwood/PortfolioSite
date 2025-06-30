import { FC } from 'react';

import Image from 'next/image';

import hakkei from '../public/hakkei-lanterns.jpg'

const HomePage: FC = () => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div className='relative'>
            <Image
                src={hakkei}
                alt='Lanterns outside Hakkei'
                priority
                className='w-full rounded-md shadow-lg'
                placeholder='blur'
                width='500'
                height='100'
            />
        </div>
      <h1 className="text-4xl font-bold">Jed Harwood</h1>
      <h2 className="text-lg text-gray-600">
        Software Engineer
      </h2>
      <h3>
        Full stack software engineer with a passion for creating great, accessible user experiences with ReactJs and other modern JavaScript frameworks
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}

export default HomePage;