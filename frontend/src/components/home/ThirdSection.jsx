import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {Link} from "react-router-dom"

import "./home.css"
function ThirdSection() {
  return (
    <>
     <div class="customer-support content-center w-100">
        <div class="customer-support-content content">
        <div class="customer-support-1">
            <div>
                <i class="fa-solid fa-truck"></i>
            </div>
            <div>
                <span>Cancellation & Returns</span>
                <span>If products not matched</span>
            </div>
            </div>
            <div class="customer-support-1">
            <div><i class="fa-solid fa-briefcase"></i></div>
            <div>
                <span>Privacy Policy</span>
                <span>Check before dealing</span>
            </div>
            </div>
            <div class="customer-support-1">
            <div><i class="fa-solid fa-sack-dollar"></i></div>
            <div>
                <span>EMI Policy</span>
                <span>We provide 0% EMI facillities</span>
            </div>
            </div>
            <div class="customer-support-1">
            <div><i class="fa-regular fa-message"></i></div>
            <div>
                <span>Customer Support</span>
                <span>Call us at 09613800800</span>
            </div>
            </div>
        </div>
    </div>
     <div className="third-section-2 content-center w-100">
        <div className="third-section-2-content content">
           <img src="https://s3.ap-southeast-1.amazonaws.com/images.othoba.com/Content/Images/HomepageGIF/KitchenWeb.jpg" alt="" />
        </div>
     </div>
      
      <div className="third-section-3 content-center w-100">
        <div className="third-section-3-content content">
          <div className="third-section-3-content-title">
            <span>Hot Deals of the Day</span>
            <span><Link to="/">More Product <i class="fa-solid fa-arrow-right"></i></Link></span>
          </div>
          <div className="third-section-3-main">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0646224_nima-electric-2-in-1-blender-and-grinder_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0597148_digital-scale-machine-10kg-kitchen-scale-digital-machine-sf-400-electronic-scale-digital-lcd-weight-_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0597215_-3-1200mah-5v-usb-309883009-309883009_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
             
            </SwiperSlide>
            <SwiperSlide>

              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0646107_yhx-11-portable-solar-torchlight-fan_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0597148_digital-scale-machine-10kg-kitchen-scale-digital-machine-sf-400-electronic-scale-digital-lcd-weight-_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
              <div className='image-item-1'>
                <Link to="/">
                    <div className='image-item-1-1'>
                      < img src="https://images.othoba.com/images/thumbs/0597215_-3-1200mah-5v-usb-309883009-309883009_300.webp" alt="" />
                    </div>
                    <div className='image-item-1-2'>
                        <span>Nima Electric 2 in 1 Blender and Grinder</span>
                        <span>Tk 900 <del>2500</del></span>
                        <div className="rating">
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star active"></i>
                          <i class="zmdi zmdi-star"></i>
                          <i class="zmdi zmdi-star"></i>
                        </div>
                    </div>
                
                </Link>
              </div>
             
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default ThirdSection

