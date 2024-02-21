import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.scss";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="container">
      <h1 className="heading">Galeria</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="./cimentacion.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./edificio.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./focos.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pararrayos.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./torre.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./tablero.jpg" alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
