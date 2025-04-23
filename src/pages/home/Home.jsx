import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Feedbacks from "./Feedbacks";
import Projects from "./Projects";
import Technologies from "./Technologies";

const Home = () => {
  return (
    <div className="space-y-28">
      <Helmet>
        <title>Shihan&apos;s Portfolio | Home</title>
      </Helmet>
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
