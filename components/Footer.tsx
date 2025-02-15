import {FaLocationArrow} from 'react-icons/fa6';
import {socialMedia} from '@/data';
import Link from 'next/link';
import Button from './ui/Button';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative w-full pt-20 pb-10 bg-black text-white px-4 md:px-60 text-balance">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital presence to the next
          level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
        </p>

        <Button
          link="mailto:deulo.dev@gmail.com"
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          isLeft
          isPrimary
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col gap-2 justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {currentYear} Francis U. Okpoluaefe
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-300 rounded-lg border border-black-300">
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
