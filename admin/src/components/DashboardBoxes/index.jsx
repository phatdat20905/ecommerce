import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChart } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
const DashboardBoxex = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="dashboardBoxesSlider"
            >
                <SwiperSlide>
                    <div className='box bg-[#10b981] p-5 py-6  cursor-pointer hover:bg-[#289974] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 !min-w-[210px] !min-h-[130px]'>
                        <FiPieChart className='text-[40px] text-[#fff]' />
                        <div className='info w-[80%]'>
                            <h3 className="text-white">Total Users</h3>
                            <b className="text-white text-[20px]">519</b>
                        </div>
                        <IoStatsChart className='text-[45px] text-[#fff]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box bg-[#3872fa] p-5 py-6 cursor-pointer hover:bg-[#346ae8] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 !min-w-[200px] !min-h-[130px]'>
                        <AiTwotoneGift className='text-[40px] text-[#fff]' />
                        <div className='info w-[80%]'>
                            <h3 className="text-white">Total Orders</h3>
                            <b className="text-white text-[20px]">127</b>
                        </div>
                        <FiPieChart className='text-[45px] text-[#fff]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box p-5 bg-[#312be1d8]  py-6  cursor-pointer hover:bg-[#423eadd8] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 !min-w-[200px] !min-h-[130px]'>
                        <RiProductHuntLine className='text-[40px] text-[#fff]' />
                        <div className='info w-[80%]'>
                            <h3 className="text-white">Total Products</h3>
                            <b className="text-white text-[20px]">519</b>
                        </div>
                        <IoStatsChart className='text-[45px] text-[#fff]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='box p-5  bg-[#f22c61]  py-6 cursor-pointer hover:bg-[#d52c59] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4 !min-w-[200px] !min-h-[130px] '>
                        <BiCategory className='text-[40px] text-[#fff]' />
                        <div className='info w-[80%]'>
                            <h3 className="text-white">Total Category</h3>
                            <b className="text-white text-[20px]">519</b>
                        </div>
                        <IoStatsChart className='text-[45px] text-[#fff]' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default DashboardBoxex;