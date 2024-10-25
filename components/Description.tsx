'use client';

import {useState} from 'react';
import {myJob} from '@/data';
import Heading1 from './Heading1';
import Text from './Text';
import {Separator} from './ui/separator';

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 538;

  return (
    <div className="flex flex-col gap-5 md:gap-5 p-6 md:px-8 md:py-8  border-x-2 border-b-2 border-green-500">
      <Heading1 title={myJob.jobTitle} />

      <Text text={isExpanded ? myJob.jobDesc : `${myJob.jobDesc.slice(0, maxLength)}...`} />

      <span className="text-blue-600 cursor-pointer" onClick={toggleReadMore}>
        {isExpanded ? 'Read less' : 'Read more'}
      </span>

      <div className="flex flex-wrap gap-3 justify-center items-center text-white font-extrabold text-sm bg-[#6B5C39] py-1 px-3 rounded-xl">
        <span>NextJs</span>
        <Separator orientation="vertical" />
        <span>ReactJs</span>
        <Separator orientation="vertical" />
        <span>JavaScript</span>
        <Separator orientation="vertical" />
        <span>TypeScript</span>
        <Separator orientation="vertical" />
        <span>NodeJs</span>
        <Separator orientation="vertical" />
        <span>ExpressJs</span>
        <Separator orientation="vertical" />
        <span>MongoDb</span>
        <Separator orientation="vertical" />
        <span>Prisma ORM</span>
        <Separator orientation="vertical" />
        <span>MySQL</span>
      </div>
    </div>
  );
};

export default Description;
