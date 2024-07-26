import {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {FreeMode, Pagination} from "swiper/modules";
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
      <div className="flex justify-center mt-12 font-semibold text-5xl">
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

      <div className="mt-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {recommendations.map((each, index) => (
            <SwiperSlide key={index}>
              <RecommendationsCard {...each} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Recommendations;
