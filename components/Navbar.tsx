'use client';
import CustomSwitch from './ui/CustonSwitch';
import Image from 'next/image';

const Navbar = () => {
  return (
    <section className="flex justify-between items-center py-4 px-4 md:px-60 drop-shadow-2xl sticky top-0 z-50 text-white bg-black">
      <div className="flex gap-20 items-center">
        <a href="/" className="flex items-center text-4xl font-semibold cursor-pointer">
          DeuL
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden border-2 border-[#6B5C39]">
            <Image
              src="/francis.png"
              width={30}
              height={30}
              alt="Francis U. O"
              className="object-cover"
            />
          </div>
        </a>
        <ul className="md:flex gap-10 hidden h-6">
          <li className="cursor-pointer hover:border-b-2 hover:border-gray-400 transition-all duration-300">
            Linkedin
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-gray-400 transition-all duration-300">
            X
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-gray-400 transition-all duration-300">
            Github
          </li>
          <li className="cursor-pointer hover:border-b-2 hover:border-gray-400 transition-all duration-300">
            Email
          </li>
        </ul>
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <div className="flex items-center space-x-2">
          <CustomSwitch />
        </div>
      </div>
    </section>
  );
};
export default Navbar;
