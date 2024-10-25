interface textProps {
  text: string;
}

const Text2 = ({text}: textProps) => {
  return <p className="text-sm leading-5 font-medium">{text}</p>;
};
export default Text2;
