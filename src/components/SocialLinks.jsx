import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="join join-horizontal rounded-none border-none z-20">
      <a
        href="https://www.linkedin.com/in/mahmudul-hasan-shihan"
        target="_blank"
      >
        <button className="btn btn-sm border join-item border-none text-zinc-50 bg-transparent">
          <FaLinkedinIn className="text-lg " />
        </button>
      </a>
      <a href="https://www.facebook.com/mhshihan20/" target="_blank">
        <button className="btn btn-sm border join-item border-none text-zinc-50 bg-transparent">
          <FaFacebookSquare className="text-lg " />
        </button>
      </a>
      <a href="https://github.com/mh-shihan" target="_blank">
        <button className="btn btn-sm border join-item border-none text-zinc-50 bg-transparent">
          <FaGithub className="text-lg" />
        </button>
      </a>
      <a href="https://x.com/mh_shihan" target="_blank">
        <button className="btn btn-sm border border-none join-item text-zinc-50 bg-transparent">
          <FaSquareXTwitter className="text-lg" />
        </button>
      </a>
    </div>
  );
};

export default SocialLinks;
