import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./home.css";

function SecondSection() {
  return (
    <div className="second-section content-center w-100">
      <div className="second-section-content content">
        <div className="second-section-content-1">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0644053_Cleaning-Item-TSW.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0645650_Branded-Cosmetics-Banner-TSW.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0639713_new top gif banner.gif"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0646091_Travello-Top-Slider-W.jpeg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0611327_Diaper-Top-Slider-Web.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.othoba.com/images/thumbs/0646101_Ac-April-TSW.jpeg"
                alt=""
              />
            </SwiperSlide>
         
          </Swiper>
        </div>
        <div className="second-section-content-2">
          <div className="second-section-content-2-1">
            <img
              src="https://images.othoba.com/images/thumbs/0645722_Wardrobe-RSW.jpeg"
              alt=""
            />
          </div>
          <div className="second-section-content-2-2">
            <img
              src="https://images.othoba.com/images/thumbs/0642491_Blender-RSW.jpeg"
              alt=""
            />
          </div>
          <div className="second-section-content-2-3">
            <div>
              <img
                src="https://images.othoba.com/images/thumbs/0645727_Walkar-Ledis-Shoe-RSW.jpeg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.othoba.com/images/thumbs/0646222_RSW.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
