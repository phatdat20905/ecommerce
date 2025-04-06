import React, { useRef, useState } from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();
    const GoTools = (index) => {
        setSlideIndex(index);
        zoomSliderBig.current.swiper.slideTo(index);
        zoomSliderSml.current.swiper.slideTo(index);
    };
    return (
        <div className="flex flex-col lg:flex-row gap-3">
            <div className="slider w-full lg:w-[15%] order-2 lg:order-1">
                <Swiper
                    ref={zoomSliderSml}
                    direction={'vertical'}
                    slidesPerView={4}
                    spaceBetween={10}
                    // navigation={true}
                    modules={[Navigation]}
                    className="zoomProductSliderThumbs h-auto lg:h-[500px] overflow-hidden "
                >
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden h-[80px] cursor-pointer group h-[100%] ${slideIndex === 0 ? 'opacity-1' : 'opacity-30'}`}
                            onClick={() => GoTools(0)}
                        >
                            <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden h-[80px] cursor-pointer group h-[100%] ${slideIndex === 1 ? 'opacity-1' : 'opacity-30'}`}
                            onClick={() => GoTools(1)}
                        >
                            <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden h-[80px] cursor-pointer group h-[100%]  ${slideIndex === 2 ? 'opacity-1' : 'opacity-30'}`}
                            onClick={() => GoTools(2)}
                        >
                            <img src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item rounded-md overflow-hidden h-[80px] cursor-pointer group h-[100%] ${slideIndex === 3 ? 'opacity-1' : 'opacity-30'}`}
                            onClick={() => GoTools(3)}
                        >
                            <img src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg" />
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                            <div className="item">
                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg" />
                            </div>
                        </SwiperSlide> */}
                </Swiper>
            </div>
            <div className="zoomContainer w-full lg:w-[85%] h-auto lg:h-[500px] overflow-hidden rounded-md  order-1 lg:order-2">
                <Swiper
                    ref={zoomSliderBig}
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                >
                    <SwiperSlide>
                        <InnerImageZoom
                            zoomType="hover"
                            zoomScale={1}
                            src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom
                            zoomType="hover"
                            zoomScale={1}
                            src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom
                            zoomType="hover"
                            zoomScale={1}
                            src="https://serviceapi.spicezgold.com/download/1742463096960_hbhb3.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <InnerImageZoom
                            zoomType="hover"
                            zoomScale={1}
                            src="https://serviceapi.spicezgold.com/download/1742463096961_hbhb4.jpg"
                        />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
}

export default ProductZoom;