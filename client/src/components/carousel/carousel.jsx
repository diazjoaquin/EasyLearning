import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./carousel.module.css"


// import required modules
import { Pagination, Navigation } from "swiper";
import CourseCard from "../card/CourseCard";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        // spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={s.swiper}
        autoplay={true}
        autoplayDelay={3}
      >
        <SwiperSlide>
          <CourseCard />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
