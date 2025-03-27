import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import banner from "../../assets/banner.png";
import { TbArrowLoopRight2 } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center sm:pt-10 md:pt-0 ">
      <div className="col-span-12 lg:col-span-5 hidden lg:block">
        <img
          className=" max-h-96 sm:w-3/4 mx-auto md:w-full pt-10 text-center"
          src={banner}
          alt="Mahmudul Hasan Shihan Portrait"
        />
      </div>
      <div className="my-2 md:my-10 mt-8 sm:mt-16 md:mt-24 lg:my-6 col-span-10 lg:col-span-7 text-left">
        <h2 className="ml-2 md:ml-8 xl:ml-0 text-2xl font-semibold">
          Hello - I'm
        </h2>
        <h1 className="inline-block text-left text-4xl md:text-7xl font-semibold ml-2 md:ml-8 xl:ml-0 mb-2 bg-gradient-to-r from-[#c0eb4a] to-zinc-950 bg-clip-text text-transparent">
          Mahmudul Hasan Shihan
        </h1>
        <h4 className="ml-2 md:ml-8 xl:ml-0 text-xl mb-3 text-white">
          A MERN Stack Developer.
        </h4>
        <div className="space-x-2 flex justify-center md:block mx-4 ml-2 md:ml-8 xl:ml-0">
          <a
            href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view"
            target="_blank"
            className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
          >
            Download Resume <FaDownload></FaDownload>
          </a>
          <a
            href="#About"
            className=" btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
          >
            Learn More <TbArrowLoopRight2 className="text-xl" />
          </a>
        </div>
        <Marquee speed={40} className="mt-4">
          "Crafting seamless digital experiences, one line of code at a time." -
          "Where creativity meets code welcome to my portfolio." - "Turning
          ideas into impactful web solutions." -
        </Marquee>
      </div>

      {/* social icons */}
      <div className="join join-vertical fixed left-0 bottom-0 md:bottom-28 rounded-none border-none z-20">
        <a
          href="https://www.linkedin.com/in/mahmudul-hasan-shihan/"
          target="_blank"
        >
          <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
            <FaLinkedinIn className="text-xl " />
          </button>
        </a>
        <a href="https://www.facebook.com/mhshihan20/" target="_blank">
          <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
            <FaFacebookSquare className="text-xl " />
          </button>
        </a>
        <a href="https://github.com/mh-shihan" target="_blank">
          <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
            <FaGithub className="text-xl" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Banner;
