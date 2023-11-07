import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("https://library-management-server-ashen.vercel.app/reviews").then((res) => setReviews(res.data));
  }, []);
  console.log(reviews);

  return (
    <div className="bg-[#f7f1e6] mt-16">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className=" px-5 text-center ">
          <div className="">
            <h4 className="text-[#FF6A25] text-2xl font-semibold mb-3">Testimonial</h4>
            <h2 className="text-5xl font-bold text-[#2d373c] mb-4">What People say about</h2>
            <div className="text-xl md:text-4xl font-bold ">
              <span className="text-[#FF6A25] font-extrabold">Auto</span>
              <span className="">WheelsToday</span>
            </div>
            <p className="text-base text-gray-600 font-medium mt-2 mb-7">Steer Toward Confidence: Reviews to Help You Choose Your Dream Car</p>
          </div>
          <div className="flex gap-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {reviews?.map((review) => (
                <SwiperSlide key={review._id}>
                  <ReviewCard reviewCard={review}></ReviewCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
