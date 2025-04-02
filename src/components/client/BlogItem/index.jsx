import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { Link } from 'react-router-dom';

const BlogItem = () => {
    return (
        <div className='blogItem group'>
            <Link to={"/"}>
                <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
                    <span className=' lazy-load-image-background blur lazy-load-image-loaded'>
                        <img alt="image" className="w-full transition-all group-hover:scale-105 group-hover:rotate-1" src='/blog1.png' />
                    </span>
                    <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[11px] font-[500] gap-1'>
                        <IoMdTime className='text-[16px]' />
                        2025-04-01
                    </span>
                </div>
            </Link>
            <div className='info py-4 text-left'>
                <h2 className='text-[15px] font-[600] text-black mb-1  lg:mb-3'>
                    <Link to={"/"} className='text-[15px] font-[600] text-black hover:text-primary'>
                        deeawaed
                    </Link>
                </h2>
                <div className="mb-3 text-[14px] lg:text-[16px]">fcgvhkjl;...</div>
                <Link to={"/"} className='text-[14px] font-[500] text-black hover:text-primary'>
                    Read More
                    <span className='ml-2 text-[10px] font-[500]'>
                        &#8594;
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BlogItem;