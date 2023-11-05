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
        <SwiperSlide>
          <div className="w-full">
            <div className=" relative w-full">
              <img src="https://i.ibb.co/BwBj5Rt/girl-reading-book-sitting-library.jpg" className="w-full h-[700px]" />
              <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-24 w-1/2">
                  <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className=" relative w-full">
              <img src="https://i.ibb.co/BwBj5Rt/girl-reading-book-sitting-library.jpg" className="w-full h-[700px]" />
              <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-24 w-1/2">
                  <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <div className=" relative w-full">
              <img src="https://i.ibb.co/BwBj5Rt/girl-reading-book-sitting-library.jpg" className="w-full h-[700px]" />
              <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className="text-white space-y-7 pl-24 w-1/2">
                  <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
                  <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
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
