import React from "react";
import HomeSlider from "../../components/client/HomeSlider";
import HomeCatSlider from "../../components/client/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/client/AdsBannerSilder";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProductsSlider from "../../components/client/ProductsSlider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper/modules';
import BlogItem from "../../components/client/BlogItem";
import HomeSliderV2 from "../../components/client/HomeSliderV2";
import BannerBoxV2 from "../../components/client/BannerBoxV2";
import AdsBannerSliderV2 from "../../components/client/AdsBannerSilderV2";
const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <HomeSlider />
            <HomeCatSlider />

            <section className="bg-white py-3 lg:py-8">
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">
                        <div className="leftSec w-full lg:w-[40%]">
                            <h2 className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-[600]">Popular Products</h2>
                            <p className="text-[12px] sm:text-[14px] md:text-[13px] lg:text-[14px] font-[400] mt-0 mb-0">Do not miss the current offers until the end of March.</p>
                        </div>

                        <div className="rightSec w-full lg:w-[60%]">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                                <Tab label="Item Four" />
                                <Tab label="Item Five" />
                                <Tab label="Item Six" />
                                <Tab label="Item Seven" />
                            </Tabs>
                        </div>
                    </div>
                    <div className="min-h-max lg:min-h-[60vh]">
                        <ProductsSlider items={6} />
                    </div>
                </div>
            </section>
            <section className="py-6 pt-0 bg-white">
                <div className="container flex flex-col lg:flex-row gap-5">
                    <div className="part1 w-full lg:w-[70%]">
                        <HomeSliderV2 />
                    </div>
                    <div className="part2 scrollableBox w-full lg:w-[30%] flex items-center gap-5 justify-between flex-row lg:flex-col">
                        <BannerBoxV2 info="right" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"} />
                        <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"} />
                    </div>
                </div>
            </section>

            <section className="py-0 lg:py-4 pt-0 lg:pt-8 pb-0 bg-white">
                <div className="container">
                    <div className="freeShipping w-full md:w-[80%] m-auto py-4 p-4  border-2 border-[#ff5252] flex items-center justify-center lg:justify-between flex-col lg:flex-row rounded-md mb-7">
                        <div className="col1 flex items-center gap-4">
                            <LiaShippingFastSolid className="text-[30px] lg:text-[50px]" />
                            <span className="text-[16px] lg:text-[20px] font-[600] uppercase">Free Shipping</span>
                        </div>
                        <div className="col2">
                            <p className="mb-0 mt-0 font-[500] text-center">Free Delivery Now On Your First Order and over $200</p>
                        </div>
                        <p className="font-bold text-[20px] lg:text-[25px]">- Only $200*</p>
                    </div>
                    <AdsBannerSliderV2 items={4} />
                </div>



            </section>

            <section className="py-3 lg:py-2 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Latest Products</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
            <section className="py-2 lg:py-0 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Featured Products</h2>
                    <ProductsSlider items={6} />
                    <AdsBannerSlider items={4} />
                </div>
            </section>
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Wellness</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Electronics</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Footwear</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[20px] font-[600]">Groceries</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
            <section className="py-5 pb-8 pt-0 bg-white blogSection">
                <div className="container">
                    <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>

    );
}

export default Home;
