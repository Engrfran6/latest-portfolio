interface headingProps {
  title: string;
}

const Heading1 = ({title}: headingProps) => {
  return <h1 className="text-xl md:text-2xl font-semibold text-[rgb(24, 24, 24)]">{title}</h1>;
};
export default Heading1;
