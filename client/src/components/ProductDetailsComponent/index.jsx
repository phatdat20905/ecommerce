import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import QtyBox from '../QtyBox';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
const ProductDetailsComponent = () => {
    const [productActionIndex, setProductActionIndex] = useState(null);
    return (
        <>
            <h1 className="text-[18px] sm:text-[22px] font-[600] mb-2">Men Opaque Casual Shirt</h1>
            <div className="flex items-start sm:items-center lg:items-center flex-col sm:flex-row md:flex-row lg:flex-row gap-3 justify-start">
                <span className="text-gray-400 text-[13px]">
                    Brands :
                    <span className="font-[500] text-black opacity-75">CLAFOUTIS</span>
                </span>
                <Rating name="size-small" defaultValue={2} size="small" readOnly />
                <span className="text-[13px] cursor-pointer">Review (1)</span>

            </div>
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start sm:items-center gap-4 mt-4">
                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[20px] lg:text-[14px] font-[500]">₹38,500.00</span>
                    <span className="price text-primary text-[20px] lg:text-[14px]  font-[600]">₹38,650.00</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[14px]">Available In Stock: <span className="text-green-600 text-[14px] font-bold">4778 Items</span></span>
                </div>
            </div>
            <p className="mt-3 pr-10 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="flex items-center gap-3">
                <span className="text-[16px]">SIZE:</span>
                <div className="flex items-center gap-1 actions">
                    <Button className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                </div>
            </div>
            <p className="text-[14px] mt-5 mb-2 text-[#000]">Free Shipping (Est. Delivery Time 2-3 Days)</p>
            <div className="flex items-center gap-4 py-4">
                <div className="qtyBoxWrapper w-[70px]">
                    <QtyBox />
                </div>
                <Button className="btn-org flex gap-2 !min-w-[150px]">Add to Cart</Button>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <span className='flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[500]'>
                    <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white" />
                    Add to Wishlist
                </span>
                <span className='flex items-center gap-2 text-[14px] sm:text-[15px] link cursor-pointer font-[500]'>
                    <IoGitCompareOutline className="text-[18px]" />
                    Add to Compare
                </span>
            </div>
        </>
    );
}

export default ProductDetailsComponent;