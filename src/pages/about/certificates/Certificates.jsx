import SectionTitle from "../../../shared/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../../../hooks/useFetchData";
import Loader from "../../../shared/Loader";
import Certificate from "./Certificate";

const Certificates = () => {
  const [certificates, isLoading] = useFetchData(
    "certificates",
    "certificates"
  );

  var settings = {
    // dots: true,
    infinite: true,
    arrows: false,
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
      <SectionTitle
        sectionName={"Professional Certificates & License"}
      ></SectionTitle>
      {isLoading && <Loader></Loader>}

      <Slider {...settings}>
        {certificates?.map((certificate) => (
          <Certificate
            certificate={certificate}
            key={certificate._id}
          ></Certificate>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
