import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
const HomeSlider = () => {
    return (
        <div className="homeSlider pb-3 pt-3 lg:pb-5 lg:pt-5 relative z-[99]">
            <div className='container'>
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="sliderHome">
                    <SwiperSlide>
                        <div className='item rounded-[10px] overflow-hidden'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg" alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[10px] overflow-hidden'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg" alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[10px] overflow-hidden'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg" alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[10px] overflow-hidden'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg" alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[10px] overflow-hidden'>
                            <img src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg" alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default HomeSlider;