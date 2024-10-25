import {reviews} from '@/data';
import Heading1 from './Heading1';
import Text from './Text';

const Testimonials = () => {
  return (
    <section className="p-6 md:px-8 md:pt-8 md:pb-14 md:mt-5  border-2 border-gray-300">
      <Heading1 title="Testimonials" />
      <p className="font-medium mb-5">Endorsement from past client</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {reviews.map((r, i) => (
          <div className=" border-2 p-4" key={i}>
            <Text text={r.review} />
            <div className="flex items-center gap-2 mt-3">
              <div className="w-8 h-8 rounded-full bg-slate-500"></div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">{r.name}</span>
                <span className="text-sm">
                  {r.role} since <span className="italic">{r.date}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
