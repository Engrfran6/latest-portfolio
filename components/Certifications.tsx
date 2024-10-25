import {certifications} from '@/data';
import Heading2 from './Heading2';
import Text2 from './Text2';
import Heading3 from './Heading3';

const Certifications = () => {
  return (
    <section className="mt-8">
      <Heading2 title="Certifications" />

      <div className="flex flex-col gap-2 mt-5">
        {certifications.map((c, i) => (
          <div key={i}>
            <Heading3 title={c.program} />
            <Text2 text={c.issuer} />
            <Text2 text={c.Issued} />
            <Text2 text={c.certId} />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certifications;
