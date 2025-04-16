import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const totalScrollableHeight = documentHeight - windowHeight;
      const currentScroll = scrollTop / totalScrollableHeight;

      setScrollPercentage(Math.round(currentScroll * 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle parameters
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - scrollPercentage / 100);

  return (
    <div
      className="scroll-progress"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        opacity: scrollPercentage > 0 ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
      onClick={scrollToTop}
    >
      <svg
        width="50"
        height="50"
        fill="#AFD138"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle (optional) */}
        {/* <circle
             cx="25"
             cy="25"
             r={radius}
             fill="none"
             stroke="#ddd"
             strokeWidth="2"
         /> */}

        {/* Progress circle */}
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#AFD138"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 25 25)"
          style={{
            transition: "stroke-dashoffset 0.3s ease",
          }}
        />

        {/* Double upward chevron icon */}
        <path
          d="M25 14L18 21L20 23L25 18L30 23L32 21L25 14ZM25 24L18 31L20 33L25 28L30 33L32 31L25 24Z"
          fill="#AFD138"
        />
      </svg>
    </div>
  );
};

export default ScrollProgress;

// import { useState, useEffect } from "react";

// const easeInOutCubic = (t) => {
//   return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
// };

// const ScrollProgress = () => {
//   const [scrollPercentage, setScrollPercentage] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = document.documentElement.scrollTop;
//       const windowHeight = document.documentElement.clientHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       const totalScrollableHeight = documentHeight - windowHeight;
//       const currentScroll = scrollTop / totalScrollableHeight;

//       setScrollPercentage(Math.round(currentScroll * 100));
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     const startPosition = window.pageYOffset;
//     const duration = 500;
//     const startTime = performance.now();

//     const animateScroll = (currentTime) => {
//       const elapsedTime = currentTime - startTime;
//       const progress = Math.min(elapsedTime / duration, 1);
//       const easedProgress = easeInOutCubic(progress);

//       const newScrollTop = startPosition * (1 - easedProgress);
//       window.scrollTo(0, newScrollTop);

//       const windowHeight = document.documentElement.clientHeight;
//       const documentHeight = document.documentElement.scrollHeight;
//       const totalScrollableHeight = documentHeight - windowHeight;
//       const currentScroll = newScrollTop / totalScrollableHeight;
//       const newPercentage = Math.round(currentScroll * 100);

//       setScrollPercentage(newPercentage);

//       if (progress < 1) {
//         requestAnimationFrame(animateScroll);
//       } else {
//         setScrollPercentage(0);
//       }
//     };

//     requestAnimationFrame(animateScroll);
//   };

//   // Circle parameters
//   const radius = 20;
//   const circumference = 2 * Math.PI * radius;
//   const offset = circumference * (1 - scrollPercentage / 100);

//   return (
//     <div
//       className="scroll-progress"
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "20px",
//         cursor: "pointer",
//         opacity: scrollPercentage > 0 ? 1 : 0,
//         transition: "opacity 0.3s ease",
//       }}
//       onClick={scrollToTop}
//     >
//       <svg width="50" height="50">
//         {/* Background circle */}
//         {/* <circle
//           cx="25"
//           cy="25"
//           r={radius}
//           fill="none"
//           stroke="#ddd"
//           strokeWidth="2"
//         /> */}
//         {/* Progress circle */}
//         <circle
//           cx="25"
//           cy="25"
//           r={radius}
//           fill="none"
//           stroke="#2196f3"
//           strokeWidth="2"
//           strokeDasharray={circumference}
//           strokeDashoffset={offset}
//           transform="rotate(-90 25 25)"
//           style={{
//             transition: "stroke-dashoffset 0.3s ease",
//           }}
//         />

//         {/* Arrow icon */}
//         <path
//           d="M25 20L20 25H30L25 20M25 35V15"
//           fill="#2196f3"
//           stroke="#2196f3"
//           strokeWidth="2"
//         />
//       </svg>
//     </div>
//   );
// };

// export default ScrollProgress;
