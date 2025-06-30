import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
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