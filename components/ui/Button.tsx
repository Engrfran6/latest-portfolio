import {cn} from '@/lib/utils';
import {ReactNode} from 'react';

interface ButtonProps {
  title: string;
  isPrimary?: boolean;
  icon?: ReactNode;
  link?: string;
  isLeft?: boolean;
  handleClick?: () => void;
}

const Button = ({link, title, isPrimary, icon, isLeft, handleClick}: ButtonProps) => {
  return (
    <a
      href={link}
      onClick={handleClick}
      className={cn(
        'rounded-xl text-[16px] font-medium py-1 px-6 w-max h-max flex items-center gap-2 cursor-pointer border-2 border-[#6B5C39]',
        isPrimary ? 'bg-[#6B5C39] text-white' : 'text-[#6B5C39]',
        isLeft ? 'flex flex-row-reverse' : ''
      )}>
      {icon && <span>{icon}</span>}
      {title}
    </a>
  );
};

export default Button;
