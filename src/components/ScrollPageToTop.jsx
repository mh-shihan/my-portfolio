import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollPageToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return;
};

export default ScrollPageToTop;
