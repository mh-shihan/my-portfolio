import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import logo from "../assets/shihan-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );

  const mobileLinks = (
    <>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          onClick={() => setIsOpen(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:text-lime-400"
          style={({ isActive, isTransitioning }) => {
            return {
              background: isActive ? "transparent" : "",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#afd138" : "white",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          onClick={() => setIsOpen(false)}
          to="/about"
        >
          About
        </NavLink>
      </li>

      <li>
        <a
          href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
          target="_blank"
          className="btn border border-[#afd138]  rounded-none text-[#afd138] hover:bg-[#afd138]"
        >
          Download <br />
          Resume <FaDownload />
        </a>
      </li>
    </>
  );
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-zinc-950 to-zinc-900/0 ">
      <div className=" navbar flex items-center max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
        {/* Logo and Navigation for Larger Devices */}
        <div className="navbar-start lg:flex">
          <a href="/" className="text-xl">
            <img className="w-20 h-16" src={logo} alt="Logo" />
          </a>
        </div>

        {/* Horizontal Links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Download Resume Button */}
        <div className="navbar-end flex flex-row">
          <div className="hidden md:inline-block">
            {/* <div className="">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div> */}

            <a
              href="https://drive.google.com/file/d/1PFXraJNWyzpTFun3tzu1ZarCrqr9hY8j/view?usp=sharing"
              target="_blank"
              className="btn btn-outline rounded-none text-[#afd138] hover:bg-[#afd138]"
            >
              Download Resume <FaDownload />
            </a>
          </div>

          <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} color="#B9FF00" />
            {/* Mobile Menu */}
            {isOpen && (
              <motion.div
                initial={{ x: "100%" }} // Start off-screen (right side)
                animate={{ x: "50%" }} // Slide into view (left)
                exit={{ x: "20%" }} // Slide out to the right when closing
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex flex-col pl-4 text-white text-xl z-50"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="pt-4 text-white hover:text-[#B9FF00]"
                >
                  <X size={40} />
                </button>

                <ul className="space-y-4 text-left pt-10">{mobileLinks}</ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
