import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";

const SocialIcon = () => {
  return (
    <div className="join join-vertical left-0 bottom-0 md:bottom-28 rounded-none border-none z-20">
      <a href="https://www.linkedin.com/in/mh-shihan" target="_blank">
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
        <button className="btn join-item border-none bg-[#afd138] text-zinc-50">
          <FaSquareXTwitter className="text-xl" />
        </button>
      </a>
    </div>
  );
};

export default SocialIcon;
