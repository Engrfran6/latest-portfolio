interface textProps {
  text: string;
}

const Text = ({text}: textProps) => {
  return <p className="text-[16px] leading-7 font-medium">{text}</p>;
};
export default Text;
