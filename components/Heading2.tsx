interface headingProps {
  title: string;
}

const Heading2 = ({title}: headingProps) => {
  return <h2 className="text-lg md:text-xl font-semibold text-[rgb(24, 24, 24)]">{title}</h2>;
};
export default Heading2;
