'use client';

import Heading1 from './Heading1';
import {MapPin} from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import {FaLocationArrow} from 'react-icons/fa6';
import {RiShareCircleFill} from 'react-icons/ri';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

const ProfileHeader: React.FC = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Africa/Lagos',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  const localTime = new Intl.DateTimeFormat('en-US', options).format(new Date());

  return (
    <section className="flex justify-between p-6 md:px-8 md:pt-8 md:pb-14 border-2 border-gray-300 md:rounded-t-2xl">
      <div className="flex md:items-center gap-4">
        <div className="relative">
          {/* <div className="absolute z-10 w-5 h-5 bg-green-500 rounded-full border-4 border-white" /> */}
          <div className="w-[80px] h-[80px] rounded-full overflow-hidden relative">
            <Image src="/francis.png" fill alt="Francis U. O" className="object-cover" />
          </div>
        </div>

        <div>
          <div className="hidden md:block">
            <Heading1 title="Francis U. Okpoluaefe" />
          </div>
          <div className="md:hidden block">
            <Heading1 title="Francis Uloho. O" />
          </div>
          <span className="flex gap-2 mt-0 md:mt-2">
            <MapPin size={24} color="rgb(103, 103, 103)" />
            <span className="inline-flex gap-1 text-[12px] md:text-[16px] font-medium text-[rgb(103, 103, 103)]">
              Port Harcourt, Nigeria
              <span className="hidden md:flex">
                {'-'} {localTime} local time
              </span>
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6 items-end">
        <div className=" hidden md:flex gap-4">
          <Button
            handleClick={() =>
              window.open(
                'https://calendly.com/deulo-careers/meeting-with-francis-u-okpoluaefe',
                '_blank'
              )
            }
            title="Book a call"
            isLeft
            icon={<FaLocationArrow />}
          />
          <Button
            handleClick={() => (window.location.href = 'mailto:deulo.dev@gmail.com')}
            title="message"
            isPrimary
            isLeft
            icon={<FaLocationArrow />}
          />
        </div>

        <Popover>
          <PopoverTrigger>
            <span className="flex gap-2 items-center text-[#6B5C39]">
              <span className="hidden md:flex"> Share</span> <RiShareCircleFill />
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-max bg-[#6B5C39]">
            <div className="flex flex-col gap-2 justify-center ">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  ' https://linkedin.com/in/deulo'
                )}&text=${encodeURIComponent(
                  'Check him 👍, i strongly recommend him for any web development role!'
                )}`}
                target="_blank"
                rel="noopener noreferrer">
                <Image src="/link.svg" width={20} height={20} alt="linkedin icon" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  ' https://x.com/deulo'
                )}&text=${encodeURIComponent(
                  'Check him 👍, i strongly recommend him for any web development role!'
                )}`}
                target="_blank"
                rel="noopener noreferrer">
                <Image src="/twit.svg" width={20} height={20} alt="twitter icon" />
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  );
};
export default ProfileHeader;
