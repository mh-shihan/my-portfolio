import logo from "../assets/shihan-logo.png";
const Footer = () => {
  return (
    <div className="bg-zinc-900 mt-10">
      <footer className="max-w-7xl mx-auto footer footer-center bg-zinc-900 text-zinc-50 p-10">
        <aside>
          <a href="/">
            <img width="200" height="200" src={logo} alt="" />
          </a>
          <p className="font-bold">
            <span className="text-base">Full stack developer</span>
            <br />
          </p>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved{" "}
            <span className="text-[#afd138] font-semibold">
              Mahmudul Hasan Shihan
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
