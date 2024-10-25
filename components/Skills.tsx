import {mySkills} from '@/data';
import Heading1 from './Heading1';

const Skills = () => {
  return (
    <section className="border-x-2 border-b-2 border-gray-300 p-6 md:px-8 md:pt-8 md:pb-14">
      <Heading1 title="Skills" />

      <ul className="flex flex-wrap gap-3 mt-3 md:mt-5">
        {mySkills.map((s, i) => (
          <li
            className="bg-gray-300 text-[12px] md:text-sm font-medium px-4 py-1 rounded-full"
            key={i}>
            {s}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
