import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaRegHeart } from 'react-icons/fa';
import { MdZoomOutMap } from 'react-icons/md';
import { IoGitCompareOutline } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import './style.css';
import { MyContext } from '../../App';
const ProductItemListView = () => {
    const context = useContext(MyContext);
    return (
        <div className='productItem p-4 shadow-md bg-[#f1f1f1] rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center flex-col lg:flex-row'>
            <div className='group imgWrapper w-full lg:w-[25%]  overflow-hidden  rounded-md relative'>
                <Link to={"/"}>
                    <div className="img  overflow-hidden">
                        <img src="https://serviceapi.spicezgold.com/download/1742446875533_app3.jpeg" className="w-full" />
                        <img src="https://serviceapi.spicezgold.com/download/1742446875533_app2.jpeg" className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                </Link>
                <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg p-1 text-[12px] font-[500]">12%</span>
                <div className='actions absolute top-[-20px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100'>
                    <Button className='w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <MdZoomOutMap
                            onClick={() => context.setOpenProductDetailsModal(true)}
                            className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <IoGitCompareOutline className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-primary hover:text-white group'>
                        <FaRegHeart className='text-[18px] !text-black group-hover:text-white hover:!text-white' />
                    </Button>
                </div>
            </div>
            <div className='info p-3 py-5 pb-0 px-3 lg:px-8  w-full lg:w-[75%]'>
                <h6 className="text-[15px] !font-[400]" ><span className="link transition-all">Apple</span></h6>
                <h3 className="text-[18px] title mt-3 font-[500] mb-1 text-[#000]">
                    <a className="link transition-all" href="/product/67dba11d6e949cc6cd6546a1" data-discover="true">Apple iPhone 13 (Blue, 12...</a>
                </h3>
                <p className='text-[14px] mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">₹38,500.00</span>
                    <span className="price text-primary text-[15px]  font-[600]">₹38,650.00</span>
                </div>
                <div className='mt-3 w-[180px]'>
                    <Button className='btn-org btn-border flex w-full btn-sm gap-2'>
                        <MdOutlineShoppingCart className='text-[18px]' />
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProductItemListView;