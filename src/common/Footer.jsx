import logo from "../../public/assets/mhs-logo.png";
const Footer = () => {
  return (
    <div className="bg-zinc-900 mt-10">
      <footer className="max-w-7xl mx-auto footer footer-center bg-zinc-900 text-zinc-50 p-10">
        <aside>
          <a href="/">
            <img className="w-32 h-32" src={logo} alt="" />
          </a>
          <p className="font-bold -mt-4">
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
