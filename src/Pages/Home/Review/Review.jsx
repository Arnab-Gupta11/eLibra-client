import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
// import Marquee from "react-fast-marquee";
// import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import required modules
// import { Autoplay } from "swiper/modules";

import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("https://library-management-server-ashen.vercel.app/reviews").then((res) => setReviews(res.data));
  }, []);
  console.log(reviews);
  const backgroundStyle = {
    // minHeight: "100vh",
    backgroundImage: 'url("https://i.ibb.co/GF1St2z/section-bg-5.png")',
    backgroundSize: "cover",
  };
  return (
    <div className="mt-16" style={backgroundStyle}>
      <div className="max-w-screen-xl mx-auto py-20">
        <div className=" px-5 ">
          <div className="ml-5">
            <h4 className="text-[#2ECA7F] text-2xl font-semibold mb-3">Testimonial</h4>
            <h2 className="text-5xl font-bold text-[#1A2D62] mb-4">
              What People <span className="text-[#2ECA7F]">says</span>
            </h2>
          </div>
          <div className="">
            <Marquee pauseOnHover="ture">
              {reviews?.map((review) => (
                <ReviewCard key={review._id} reviewCard={review}></ReviewCard>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
