// import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../shared/Container";
import SectionTitle from "../../shared/SectionTitle";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../shared/Loader";

const Feedbacks = () => {
  const [feedbacks, isLoading] = useFetchData("/feedbacks", "feedbacks");
  return (
    <div>
      {isLoading && <Loader></Loader>}
      <Container>
        <div className="my-8">
          <SectionTitle sectionName={"What People Say"} />
        </div>

        <div>
          <Swiper
            cssMode={true}
            slidesPerView={2}
            loop={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              230: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          >
            {feedbacks?.map((feed) => (
              <SwiperSlide key={feed?._id} className="px-6">
                <div className="p-6 rounded-lg border-b-2 border-t-2 shadow-lime-400 shadow-sm border-lime-400">
                  {/* User Info */}
                  <div className="flex gap-4 items-center">
                    <img
                      src={feed.image}
                      alt={feed.name}
                      className="w-16 h-16 border-[#B9FF00] border-2 object-cover rounded-full mb-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{feed.name}</h2>
                      <h4 className="text-gray-500 text-sm">
                        {feed.title || ""}
                      </h4>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="mt-3 text-gray-300">
                    {feed?.review.length > 100
                      ? `${feed.review.slice(0, 100)}...`
                      : feed?.review}
                  </p>

                  {/* Rating */}
                  <div className="mt-3 flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < feed.rating ? "opacity-100" : "opacity-30"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Feedbacks;
