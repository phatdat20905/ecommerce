import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchBox = () => {
    return (
        <div className='w-full' style={{ alignSelf: "end" }}>
            <div className='w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
                <IoSearchOutline className='absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-80' />
                <input
                    type="text"
                    className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
                    placeholder="Search here..." value=""
                />
            </div>
        </div>
    )
}
export default SearchBox;