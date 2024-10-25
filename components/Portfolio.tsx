'use client';

import {projects} from '@/data';
import PortfolioCard from './PortfolioCard';
import Heading1 from './Heading1';
import {useState} from 'react';

const Portfolio = () => {
  const [projectLenght, setProjectLenght] = useState(3);
  const allProjectLenght = projects.length;

  return (
    <section className="p-6 md:px-8 md:pt-8 md:pb-14  border-x-2 border-b-2 border-gray-300">
      <Heading1 title="Portfolio" />

      <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-4 mt-3 md:mt-5">
        {projects?.slice(0, projectLenght).map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}

        {projectLenght === 3 && (
          <div className="flex md:hidden flex-col justify-center items-center gap-3 border-2 border-gray-200 rounded-xl">
            <p className="text-[12px]">Want to see more?</p>
            <button
              onClick={() => setProjectLenght(allProjectLenght)}
              className="text-[10px] border-2 border-gray-500 py-1 px-3 rounded-[7px]">
              Click here
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Portfolio;
