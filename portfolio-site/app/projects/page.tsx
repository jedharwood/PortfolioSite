import { FC } from 'react';
import Navbar from '../components/nav-bar';
import Image from 'next/image';
import hakkei from '../../public/hakkei-lanterns.jpg';

const ProjectsPage: FC = () => {
  return (
    <main className="px-0 lg:px-16 xl:px-48 2xl:px-64">
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
      <Navbar />
      <div className='px-4 lg:px-0'>
          <h1 className="text-4xl font-bold">Projects Page</h1>
      </div>
      <div>FOOTER</div>
    </main>
  );
}

export default ProjectsPage;