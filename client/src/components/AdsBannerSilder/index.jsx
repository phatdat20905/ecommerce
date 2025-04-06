import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return (
        <div className='py-5 w-full'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="smBtn"
            >
                <SwiperSlide>
                    <BannerBox img={"/banner1.webp"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"/banner2.webp"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"/banner3.webp"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"/banner4.webp"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBox img={"/banner4.webp"} link={"/"} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsBannerSlider;