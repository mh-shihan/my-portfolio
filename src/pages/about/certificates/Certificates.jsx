import SectionTitle from "../../../shared/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchData from "../../../hooks/useFetchData";

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

      <Slider {...settings}>
        {certificates?.map((certificate) => (
          <a
            key={certificate._id}
            href={certificate?.credential || ""}
            target="_blank"
          >
            <div className="px-2" key={certificate._id}>
              <div className="card card-compact bg-zinc-900 shadow-xl border border-zinc-50/10 group p-2">
                <figure className="overflow-hidden ">
                  <img
                    className=" group-hover:scale-110 transition rounded-md w-full md:h-[280px]"
                    src={certificate?.image}
                    alt={certificate?.title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-zinc-50 font-bold">
                    {certificate?.title}
                  </h2>
                  <p>{certificate?.platform}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Certificates;
