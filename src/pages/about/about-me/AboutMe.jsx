import aboutImg from "../../../assets/about.jpeg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <section id="About">
      <section className="min-h-screen flex items-center justify-between">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column - Profile Image */}
            <div className="flex justify-center col-span-4">
              <img
                src={aboutImg}
                alt="Mahmudul Hasan Shihan"
                className="w-full md:w-96 text-center rounded-lg mt-4 shadow-lg"
              />
            </div>

            {/* Right Column - Introduction */}
            <div className="text-left col-span-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#c0eb4a] to-zinc-950 bg-clip-text text-transparent">
                About Me
              </h2>

              <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                Hi, I'm{" "}
                <span className="font-semibold">Mahmudul Hasan Shihan</span>, a
                passionate web developer skilled in building responsive,
                user-friendly, and modern websites. I specialize in front-end
                and back-end technologies, including React, Tailwind, Node.js,
                and MongoDB. My goal is to create digital experiences that help
                businesses grow online.
              </p>
              <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                I’m constantly learning and expanding my skills, staying
                up-to-date with the latest trends in web development to deliver
                innovative solutions. When I’m not coding, I enjoy exploring new
                tech tools and brainstorming ideas to improve user experiences.
                Let’s connect and build something amazing together!
              </p>

              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#c0eb4a] to-zinc-950 bg-clip-text text-transparent mt-2">
                My Learning Journey
              </h2>
              <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                My journey in web development started with a deep interest in
                creating visually appealing and functional websites. I began by
                mastering the fundamentals of HTML, CSS, and JavaScript, which
                laid the groundwork for my transition into advanced technologies
                like React for front-end development and Node.js with Express
                for back-end solutions.
              </p>
              <p className="mt-4 text-gray-300 text-justify leading-relaxed">
                Additionally, my{" "}
                <span className="bg-[#829a2c] font-bold">
                  graphic design background
                </span>{" "}
                played a crucial role in shaping my UI/UX skills, allowing me to
                merge design with functionality seamlessly. Currently, I am
                pursuing a Bachelor’s degree in Computer Science, which helps me
                deepen my understanding of algorithms, data structures, and
                software development principles.
              </p>

              {/* Social Links */}
              <div className="join join-horizontal gap-2 mt-5 rounded-none border-none z-20">
                <a
                  href="https://www.linkedin.com/in/mahmudul-hasan-shihan"
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
                <a href="https://x.com/mh_shihan" target="_blank">
                  <button className="btn border-none join-item bg-[#afd138] text-zinc-50">
                    <FaSquareXTwitter className="text-xl" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
