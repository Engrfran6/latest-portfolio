import {workHistory} from '@/data';
import Heading1 from './Heading1';
import Heading2 from './Heading2';

import Text from './Text';

const WorkHistory = () => {
  return (
    <section className="p-6 md:px-8 md:pt-8 md:pb-14  border-x-2 border-b-2 border-gray-300">
      <Heading1 title="Work History" />

      <div className="flex flex-col gap-6 mt-3">
        {workHistory.map((w, index) => (
          <div key={index}>
            <div className="flex justify-between">
              <Heading2 title={w.job} />
              <span className="text-sm  italic font-medium">{w.date}</span>
            </div>

            <div className="flex items-center gap-2 text-md mb-2">
              <Heading2 title={w.organisation} />

              <span className="text-xl text-gray-600">
                {'-'} {w.location}
              </span>
            </div>

            <Text text={w.workDescription} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistory;
