import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import SectionTitle from "../../shared/SectionTitle";
import Project from "../../components/Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../../shared/Container";

const Projects = () => {
  const [projects] = useFetchData("/projects", "projects");
  console.log(projects);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div>
      <SectionTitle sectionName={"My Portfolios"}></SectionTitle>
      <Container>
        <Slider {...settings}>
          {projects?.map((project, idx) => (
            <Project project={project} key={idx}></Project>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Projects;
