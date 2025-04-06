import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import BannerBoxV2 from '../BannerBoxV2';

const AdsBannerSliderV2 = (props) => {
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
                    <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1741663363237_1737020916820_New_Project_52.jpg"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"} link={"/"} />
                </SwiperSlide>
                <SwiperSlide>
                    <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"} link={"/"} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AdsBannerSliderV2;