import { FC } from 'react';

import Image from 'next/image';

import hakkei from '../public/hakkei-lanterns.jpg'
import Navbar from './components/nav-bar';

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
    <main className="px-0 lg:px-16 xl:px-48 2xl:px-64">
      {/* Jumbotron */}
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

      {/* Nav Bar */}
      {/* <div className="sticky top-0 bg-black z-10 shadow-md flex justify-end items-center h-16 px-4 lg:px-0">Nav Bar</div> */}
      <Navbar />

      {/* Page Body */}
      <div className='px-4 lg:px-0'>
          <h1 className="text-4xl font-bold">Jed Harwood</h1>
          <h2 className="text-lg text-gray-600">
            Software Engineer
          </h2>
          <h3>
            Full stack software engineer with a passion for creating great, accessible user experiences with ReactJs and other modern JavaScript frameworks
          </h3>
          {generatePageContent()}
      </div>
      
      <div>FOOTER</div>
    </main>
  );
}

export default HomePage;