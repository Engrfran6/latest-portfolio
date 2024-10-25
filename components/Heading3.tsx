interface headingProps {
  title: string;
}

const Heading3 = ({title}: headingProps) => {
  return <h1 className="text-sm md:text-[16px] font-semibold text-[rgb(24, 24, 24)]">{title}</h1>;
};
export default Heading3;
