import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import instance from "../../axios";
import RecommendationsCard from "./RecommendationCard";

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    instance
      .get("recommendations")
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="flex justify-center mt-12 font-semibold text-3xl sm:text-5xl">
        Recommendations
      </div>
      <div className="mt-6">
        <p className="text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        </p>
        <p className="text-center">
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>

      <div className="mt-12 overflow-auto h-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          style={{
            "--swiper-navigation-color": "#FFB400",
            "--swiper-pagination-color": "#FFB400",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {recommendations.map((each, index) => (
            <SwiperSlide key={index} className="w-96">
              <RecommendationsCard {...each} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Recommendations;
