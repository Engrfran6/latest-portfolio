import {education} from '@/data';
import Heading2 from './Heading1';
import Heading3 from './Heading3';
import Text2 from './Text2';

const Educations = () => {
  return (
    <section>
      <Heading2 title="Education" />

      <div className="mt-5">
        <Heading3 title={education.institution} />
        <Text2 text={education.degree} />
        <p className="pt-1 text-sm font-medium">{education.year}</p>
      </div>
    </section>
  );
};
export default Educations;
