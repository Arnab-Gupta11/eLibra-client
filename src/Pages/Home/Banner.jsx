import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide className="">
          <div className="w-full">
            <div className="w-full -z-10">
              <img src="https://i.ibb.co/BwBj5Rt/girl-reading-book-sitting-library.jpg" className="w-full h-[400px] lg:h-[700px]" />
              <div className="absolute flex items-end lg:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-7 md:pl-24 w-2/3 lg:w-1/2">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
                    Welcome to Our <span className="text-[#2ECA7F]">Library</span> Commun<span className="text-[#2ECA7F]">ity</span>
                  </h2>
                  <p className="hidden lg:block">
                    eLibra simplifies library management, making it easier than ever to connect readers with their next great read.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className="w-full -z-10">
              <img src="https://i.ibb.co/hXPLrJf/jacket-banknote-education-dollar-wealth.jpg" className="w-full h-[400px] lg:h-[700px]" />
              <div className="absolute flex items-end lg:items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-7 md:pl-24 w-2/3 lg:w-1/2">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
                    Welcome to Our <span className="text-[#2ECA7F]">Library</span> Commun<span className="text-[#2ECA7F]">ity</span>
                  </h2>
                  <p className="hidden lg:block">
                    We are thrilled to have you here! Step into a world of knowledge and exploration as we invite you to join our library community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className="w-full -z-10">
              <img src="https://i.ibb.co/XkDQMJP/teen-boy-enjoying-reading-near-bookcase.jpg" className="w-full h-[400px] lg:h-[700px]" />
              <div className="absolute flex items-end lg:items-center h-full left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-7 md:pl-24 w-2/3 lg:w-1/2">
                  <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-10">
                    Welcome to Our <span className="text-[#2ECA7F]">Library</span> Commun<span className="text-[#2ECA7F]">ity</span>
                  </h2>
                  <p className="hidden lg:block">
                    Together, we will discover, learn, and grow. Welcome to a place where stories come alive and minds flourish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
