import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import SectionTitle from "../../shared/SectionTitle";
import Project from "../../components/Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [projects] = useFetchData("/projects", "projects");
  var settings = {
    // dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <SectionTitle sectionName={"My Portfolios"}></SectionTitle>
      <div className="mx-6">
        <Slider {...settings}>
          {projects?.map((project, idx) => (
            <Project project={project} key={idx}></Project>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
