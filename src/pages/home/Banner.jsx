import { FaDownload } from "react-icons/fa6";
import banner from "../../assets/banner.png";
import { TbArrowLoopRight2 } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import useFetchResume from "../../hooks/useFetchResume";
import SocialIcon from "../../components/SocialIcon";

const Banner = () => {
  const { resume_url } = useFetchResume();
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center sm:pt-10 md:pt-0 ">
      <div className="col-span-12 lg:col-span-5 hidden lg:block">
        <img
          className=" max-w-96 max-h-[460px] sm:w-3/4 mx-auto md:w-full text-center rounded-md mt-6"
          src={banner}
          alt="Mahmudul Hasan Shihan Portrait"
        />
      </div>
      <div className="my-2 md:my-10 mt-8 sm:mt-16 md:mt-24 lg:my-6 col-span-10 lg:col-span-7 text-left">
        <h2 className="ml-2 md:ml-8 xl:ml-0 text-2xl font-semibold">
          Hello - I&apos;m
        </h2>
        <h1 className="inline-block text-left text-4xl md:text-7xl font-semibold ml-2 md:ml-8 xl:ml-0 mb-2 bg-gradient-to-r from-[#c0eb4a] to-zinc-950 bg-clip-text text-transparent">
          Mahmudul Hasan Shihan
        </h1>
        <h4 className="ml-2 md:ml-8 xl:ml-0 text-xl mb-3 text-white">
          A MERN Stack Developer.
        </h4>
        <div className="space-x-2 flex justify-center md:block mx-4 ml-2 md:ml-8 xl:ml-0">
          <a
            href={`${resume_url}`}
            target="_blank"
            className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
          >
            Download Resume <FaDownload></FaDownload>
          </a>
          <a
            href="#Contact"
            className=" btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
          >
            Contact <TbArrowLoopRight2 className="text-xl" />
          </a>
        </div>
        <Marquee speed={40} className="mt-4">
          &quot;Crafting seamless digital experiences, one line of code at a
          time.&quot; - &quot;Where creativity meets code welcome to my
          portfolio.&quot; - &quot;Turning ideas into impactful web
          solutions.&quot; -
        </Marquee>
      </div>

      {/* social icons */}
      <div className="fixed bottom-0 left-0 md:bottom-28 rounded-none border-none z-20 hidden lg:block">
        <SocialIcon></SocialIcon>
      </div>
    </section>
  );
};

export default Banner;
