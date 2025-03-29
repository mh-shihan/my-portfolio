import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-1 md:bottom-2 lg:bottom-4 right-1 md:right-2 lg:right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="inline-flex items-center p-2 rounded-lg shadow-sm text-white bg-lime-400 transition-opacity duration-300 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-lime-500 text-2xl"
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
