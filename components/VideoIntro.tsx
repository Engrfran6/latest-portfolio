import Heading1 from './Heading1';

const VideoIntro = () => {
  return (
    <section className="mt-8">
      <Heading1 title="V. Introduction" />
      <video width="250" height="200" controls className="mt-8">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};
export default VideoIntro;
