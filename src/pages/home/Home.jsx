import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Feedbacks from "./Feedbacks";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <Feedbacks></Feedbacks>
      <Contact></Contact>
    </div>
  );
};

export default Home;
