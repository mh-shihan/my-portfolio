import { Helmet } from "react-helmet";
import AboutMe from "../about-me/AboutMe";
import Certificates from "../certificates/Certificates";
import Educations from "../education/Educations";
import UserFeedback from "../user-feedback/UserFeedback";

const AboutPage = () => {
  return (
    <div className="px-4 md:px-12">
      <Helmet>
        <title>About | Shihan&apos;s Portfolio </title>
      </Helmet>
      <AboutMe></AboutMe>
      <Educations></Educations>
      <Certificates></Certificates>
      <UserFeedback></UserFeedback>
    </div>
  );
};

export default AboutPage;
