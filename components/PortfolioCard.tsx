'use client';

import Image, {StaticImageData} from 'next/image';
import {MdAccessTime} from 'react-icons/md';
import {useEffect, useState} from 'react';
import {calculateReadingTime} from '@/lib/utils';
import {Dialog, DialogContent, DialogTrigger} from '@/components/ui/dialog';
import Heading1 from './Heading1';
import Text from './Text';
import {Share2Icon} from 'lucide-react';
import {projects} from '@/data';
import Heading3 from './Heading3';

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

export interface ProjectCardProps {
  image: StaticImageData | string;
  tech: string[];
  title: string;
  role: string;
  description: string;
  snapshots: string[];
  livepreview: string;
}

export default function PortfolioCard({
  image,
  tech,
  title,
  description,
  role,
  snapshots,
  livepreview,
}: ProjectCardProps) {
  const [readingTime, setReadingTime] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const time = calculateReadingTime(description);
    setReadingTime(time);
  }, [description]);

  const handleProjectClick = (project: ProjectCardProps) => {
    setLoading(true); // Start loading
    setTimeout(() => {
      setSelectedProject(project); // Update project after delay
      setLoading(false); // Stop loading
    }, 400); // Simulate 2 seconds delay
  };

  return (
    <Dialog>
      <div className="block md:hidden border-2 border-gray-200 rounded-xl shadow-2xl pb-2">
        <div className="overflow-hidden rounded-xl w-full">
          <Image
            src={image}
            width={500}
            height={500}
            layout="responsive"
            alt={title}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        <div className="md:pt-4 md:pb-1 text-start pl-1 mt-3">
          <span className="flex items-center  text-[12px] gap-1">
            <MdAccessTime />
            {readingTime} min read
          </span>
          <h2 className="text-sm md:text-lg  text-[rgba(255, 255, 255, 0.125)] font-extrabold">
            {title}
          </h2>
        </div>
      </div>
      <DialogTrigger className="hidden md:block">
        <div className="border-2 border-gray-200 rounded-xl shadow-2xl pb-2">
          <div className="overflow-hidden rounded-xl w-full h-full">
            <Image
              src={image}
              width={500}
              height={500}
              layout="responsive"
              alt={title}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>

          <div className="md:pt-4 md:pb-1 text-start pl-1">
            <span className="flex items-center  text-[12px] gap-1">
              <MdAccessTime />
              {readingTime} min read
            </span>
            <h2 className="text-sm md:text-lg  text-[rgba(255, 255, 255, 0.125)] font-extrabold">
              {title}
            </h2>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="hidden md:flex gap-10 w-[85vw] h-[80vh] !max-w-none p-16 bg-slate-200 !rounded-2xl">
        <div className="flex flex-col gap-6 w-[33.33%]">
          {/* Show loading spinner or selected project content */}
          {loading ? (
            <div className="animate-pulse h-full">
              <div className="h-10 bg-gray-300 rounded mb-4"></div>
              <div className="h-6 bg-gray-300 rounded mb-2"></div>
              <div className="h-40 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
          ) : (
            <>
              <Heading1 title={selectedProject?.title || title} />
              <p className="text-gray-600">My role: {selectedProject?.role || role}</p>
              <Text text={`Project description: ${selectedProject?.description || description}`} />

              <div className="flex flex-col gap-3">
                <Heading3 title="Skills and deliverables" />
                <ul className="flex gap-2 flex-wrap">
                  {(selectedProject?.tech || tech).map((t) => (
                    <li key={t} className="py-1 px-2 bg-gray-300 text-sm rounded-full">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          <div className="border-t-2 border-gray-300 ">
            <p className="text-sm mt-14">
              Want me to improve on something?
              <Sheet>
                <SheetTrigger>
                  <span className="pl-1 underline underline-offset-4 text-[#9c3def] cursor-pointer">
                    Give a feedback
                  </span>
                </SheetTrigger>
                <SheetContent side="left" className="bg-gray-100">
                  <h2>To be implemented</h2>
                </SheetContent>
              </Sheet>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 w-[66.66%]">
          {/* Live preview and snapshots */}
          {loading ? (
            <div className="animate-pulse">
              <div className="border-b-2 border-gray-300 py-6" />
              <div className="h-10 bg-gray-300 rounded mb-4"></div>
              <div className="border-b-2 border-gray-300 py-9" />
              <div className="h-64 bg-gray-300 rounded"></div>
            </div>
          ) : (
            <>
              <div className="flex justify-between w-full p-4 bg-slate-50 rounded-xl ">
                <a href={selectedProject?.livepreview || livepreview}>
                  {selectedProject?.livepreview || livepreview}
                </a>
                <Share2Icon />
              </div>
              <div className="border-b-2 border-gray-300" />
              <div>
                <h2 className="mb-2">Snapshots of - {selectedProject?.title || title}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {(selectedProject?.snapshots || snapshots).slice(0, 2).map((s, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl w-full h-[265px] shadow-2xl border-2 border-gray-900">
                      <Image
                        src={s}
                        width={500}
                        height={500}
                        layout="responsive"
                        alt={s}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          <div className="border-b-2 border-gray-300" />
          {/* Other project previews */}
          <div className="flex gap-2">
            {projects
              .filter((i) => i.title !== (selectedProject?.title || title))
              .slice(0, 6)
              .map((p, idx) => (
                <div
                  className="border-2 border-gray-200 rounded-xl cursor-pointer"
                  key={idx}
                  onClick={() => handleProjectClick(p)}>
                  <div className="overflow-hidden rounded-xl w-full">
                    <Image
                      src={p.image}
                      width={500}
                      height={500}
                      alt={p.title}
                      className="rounded-xl"
                    />
                  </div>

                  <span className="flex gap-1 items-center text-[10px] mt-2">
                    <MdAccessTime />
                    {readingTime} min read
                  </span>
                  <h5 className="text-[10px] text-[rgba(255, 255, 255, 0.125)] font-extrabold">
                    {p.title}
                  </h5>
                </div>
              ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
