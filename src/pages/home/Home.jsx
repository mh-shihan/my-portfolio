import About from "./About";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="pt-24 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
      <Banner></Banner>
      <About></About>
    </div>
  );
};

export default Home;
