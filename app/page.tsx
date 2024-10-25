import Certifications from '@/components/Certifications';
import Description from '@/components/Description';
import Educations from '@/components/Educations';
import GithubProfile from '@/components/GithubProfile';
import Languages from '@/components/Languages';
import Portfolio from '@/components/Portfolio';
import ProfileHeader from '@/components/ProfileHeader';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import VideoIntro from '@/components/VideoIntro';
import WorkHistory from '@/components/WorkHistory';

export default function Home() {
  return (
    <section className="relative p-0 md:px-80 md:my-6">
      <ProfileHeader />

      <section className="flex w-full">
        <div className="md:w-[25%] hidden md:block border-l-2 border-b-2 border-gray-300">
          <div className="p-8">
            <Educations />

            <VideoIntro />
            <Languages />

            <Certifications />
          </div>
          <GithubProfile />
        </div>

        <div className="md:w-[75%] ">
          <Description />

          <Portfolio />

          <Skills />

          <WorkHistory />

          <div className=" md:hidden ">
            <GithubProfile />
          </div>
        </div>
      </section>
      <Testimonials />
    </section>
  );
}
