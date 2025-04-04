import Button from '@mui/material/Button';
import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './style.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Collapse } from 'react-collapse';
import Rating from '@mui/material/Rating';
const Sidebar = () => {
    const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
    return (
        <aside className="sidebar py-3  lg:py-5 static lg:sticky top-[130px] z-[50] pr-0 lg:pr-5">
            <div className='sidebarScroll max-h-[60vh] lg:max-h-max  lg:overflow-visible overflow-auto  w-full'>
                <div className='box'>
                    <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
                        Shop by Category
                        <Button
                            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
                            className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'>
                            {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
                        </Button>
                    </h3>
                    <Collapse isOpened={isOpenCategoryFilter}>
                        <div className='scroll px-4 relative -left-[13px]'>
                            <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Electronics" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Bags" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Footwwear" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Groceies" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Beauty" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Wellness" className='w-full' />
                            <FormControlLabel control={<Checkbox size="small" />} label="Jewellyry" className='w-full' />
                        </div>
                    </Collapse>
                </div>
                <div className='box mt-4'>
                    <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">Filter By Price</h3>
                    <RangeSlider />
                </div>
                <div className="flex pt-4 pb-2 priceRange">
                    <span className="text-[13px]">
                        From:
                        <strong className="text-dark"> Rs: 0</strong>
                    </span><span className="ml-auto text-[13px]">
                        From: <strong className="text-dark"> Rs: 60000</strong>
                    </span>
                </div>
            </div>
            <div className='box mt-4'>
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>
                    Filter By Price
                    <Button
                        onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
                        className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]'>
                        {isOpenCategoryFilter ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className='flex items-center pl-2 lg:pl-1'>
                        <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={5} size="small" readOnly />} className='w-full' />
                    </div>
                    <div className='flex items-center pl-2 lg:pl-1'>
                        <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={4} size="small" readOnly />} className='w-full' />
                    </div>
                    <div className='flex items-center pl-2 lg:pl-1'>
                        <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={3} size="small" readOnly />} className='w-full' />
                    </div>
                    <div className='flex items-center pl-2 lg:pl-1'>
                        <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={2} size="small" readOnly />} className='w-full' />
                    </div>
                    <div className='flex items-center pl-2 lg:pl-1'>
                        <FormControlLabel control={<Checkbox size="small" />} label={<Rating name="size-small" defaultValue={1} size="small" readOnly />} className='w-full' />
                    </div>
                </Collapse>
            </div>
        </aside>
    )
}

export default Sidebar;