import Heading2 from './Heading2';
import Text2 from './Text2';

const Languages = () => {
  return (
    <section className="mt-8">
      <Heading2 title="Languages" />

      <div className="flex mt-5 items-center">
        <h2 className="font-bold text-sm pr-1">English: </h2>

        <Text2 text="Conversational" />
      </div>
    </section>
  );
};
export default Languages;
