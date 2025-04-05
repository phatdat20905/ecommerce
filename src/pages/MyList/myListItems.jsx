import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import { IoCloseSharp } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
const MyListItems = (props) => {
    return (
        <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]'>
            <div className='img w-[30%] sm:w-[20%] lg:w-[15%] rounded-md overflow-hidden'>
                <Link to='/product/1'>
                    <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full hover:scale-105 transition-all"></img>
                </Link>
            </div>
            <div className='info  w-[70%]  sm:w-[80%]  lg:w-[85%] relative'>
                <IoCloseSharp className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all' />
                <span className="text-[13px]">CLAFOUTIS</span>
                <h3 className='text-[13px] sm:text-[15px] w-[80%]'>
                    <Link to='/product/1' className='link transition-all'>
                        Men Opaque Casual Shirt with Pockets
                    </Link>
                </h3>
                <Rating name="size-small" defaultValue={5} size="small" readOnly />
                <div className='flex items-center gap-4 mt-2'>
                    <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">₹1650</span>
                    <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">₹1650</span>
                    <span className="price text-primary text-[14px]  font-[600]">10% OFF</span>
                </div>
                <br />
                <Link to="/cart" className='link transition-all'>
                    <Button className='btn-org btn-sm'>Add to Cart</Button>
                </Link>

            </div>
        </div>
    )
}

export default MyListItems;