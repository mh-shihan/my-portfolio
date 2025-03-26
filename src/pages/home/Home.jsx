import UserFeedback from "../about/user-feedback/UserFeedback";
import About from "./About";
import Banner from "./Banner";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="pt-24 max-w-[2520px] mx-auto px-0 md:px-6 xl:px-20">
      <Banner></Banner>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <UserFeedback></UserFeedback>
    </div>
  );
};

export default Home;
