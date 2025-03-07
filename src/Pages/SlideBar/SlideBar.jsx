import img1 from "../../assets/Images/SlideBar/Rectangle 22 (1).png";
import img2 from "../../assets/Images/SlideBar/Rectangle 22 (2).png";
import img3 from "../../assets/Images/SlideBar/Rectangle 22 (3).png";
import img4 from "../../assets/Images/SlideBar/Rectangle 22 (7).png";
import img5 from "../../assets/Images/SlideBar/Rectangle 22 (5).png";
import img6 from "../../assets/Images/SlideBar/Rectangle 22 (6).png";
import img8 from "../../assets/Images/SlideBar/Rectangle 22 (9).png";
import img7 from "../../assets/Images/SlideBar/Rectangle 22 (8).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SlideBar.css";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const SlideBar = () => {
  const [valueOfWidth, setValueOfWidth] = useState(false);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setValueOfWidth(true);
    } else {
      setValueOfWidth(false);
    }
  };

  useEffect(() => {
    // Define An Event When Load A Component
    window.addEventListener("resize", handleResize);

    // Execute A Function Once When A Function Is Uploaded
    handleResize();

    // Clean Event When End Event
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-[var(--white-blue)] h-auto min-h-[120vh] flex flex-col  items-center max-md:flex-col ">
      <h1 className="font-bold text-[var(--blue)] text-4xl leading-10 p-14 title-slide">
        مجالات الكورسات المتاحة
      </h1>
      {/* Begin a slider  */}
      <div className="w-full h-[100vh] flex items-end max-md:items-center max-md:px-10 max-md:h-[140vh] max-sm:h-[120vh]">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={valueOfWidth == true ? 1 : 3.5}
          spaceBetween={80}
          className="mySwiper w-full min-h-[80%]  "
        >
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5 max-md:flex-col ">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img4} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              الطب والصحة
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img7} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img6} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img5} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img3} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img1} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img2} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
          <SwiperSlide className="  bg-[var(--light-blue)]  rounded-2xl flex justify-center items-center p-5">
            <div className="bg-[var(--sugar)] pt-4 px-1.5 pb-0.5 rounded-xl">
              <img src={img8} alt="" className="h-fit w-full " />
            </div>
            <h4 className="w-full p-3 text-center text-black font-semibold text-2xl">
              التصميم والفنون
            </h4>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default SlideBar;
