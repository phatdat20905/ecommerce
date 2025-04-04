import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { MdZoomOutMap } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import './style.css';
const ProductItem = () => {
    return (
        <div className='productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
            <div className='group imgWrapper w-[100%]  overflow-hidden  rounded-md rounded-bl-none rounded-br-none relative'>
                <Link to={"/"}>
                    <div className="img h-[200px] overflow-hidden">
                        <img src="https://serviceapi.spicezgold.com/download/1742446875533_app3.jpeg" className="w-full" />
                        <img src="https://serviceapi.spicezgold.com/download/1742446875533_app2.jpeg" className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">12%</span>
                <div className='actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <MdZoomOutMap className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                </div>
            </div>
            <div className='info p-3 py-5 relative pb-[50px] h-[190px] text-left'>
                <h6 className="text-[13px] !font-[400]"><span className="link transition-all">Apple</span></h6>
                <h3 className="text-[12px] lg:text-[13px] title mt-1 font-[500] mb-1 text-[#000]">
                    <a className="link transition-all" href="/product/67dba11d6e949cc6cd6546a1" data-discover="true">Apple iPhone 13 (Blue, 12...</a>
                </h3>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
                <div className="flex items-center gap-4 justify-between">
                    <span className="oldPrice line-through text-gray-500 text-[12px] lg:text-[14px] font-[500]">₹38,500.00</span>
                    <span className="price text-primary text-[12px] lg:text-[14px]  font-[600]">₹38,650.00</span>
                </div>
                <div className='!absolute bottom-[15px] left-0 pl-3 pr-3 w-full'>
                    <Button className='btn-org addToCartBtn btn-border flex w-full btn-sm gap-2'>
                        <MdOutlineShoppingCart className='text-[18px]' />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;