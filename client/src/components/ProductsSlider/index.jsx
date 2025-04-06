import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import ProductItem from '../ProductItem';
const ProductsSlider = (props) => {
    return (
        <div className='productsSlider pt-1 lg:pt-3 pb-0'>
            <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductsSlider;