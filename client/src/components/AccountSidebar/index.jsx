import Button from '@mui/material/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
const AccountSideBar = () => {
    return (
        <div className='card bg-white shadow-md rounded-md sticky top-[160px]'>
            <div className='w-full p-5 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200'>
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocLzFkk_gTgWWe_-y9QpySySNSyeF8IFUa21Uny8NMksPh_hMA=s96-c" className="w-full h-full object-cover" />
                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100'>
                        <FaCloudUploadAlt className='text-[#fff] text-[25px]' />
                        <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" accept="image/*" name="avatar"></input>
                    </div>
                </div>
                <h3>idol tiktok</h3>
                <h6 className="text-[13px] font-[500]">tiktokidol800@gmail.com</h6>
            </div>
            <ul className='list-none pb-5 bg-[#f1f1f1] myAccountTabs'>
                <li className='w-full'>
                    <NavLink to="/my-account" exact={true} activeClassName="isActive">
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'>
                            <FaRegUser className='text-[15px]' /> My Profile
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/address" exact={true} activeClassName="isActive">
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'>
                            <CiLocationOn className='text-[15px]' /> Address
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/my-list" exact={true} activeClassName="isActive">
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'>
                            <IoMdHeartEmpty className='text-[15px]' /> My List
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/my-orders" exact={true} activeClassName="isActive">
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'>
                            <IoBagCheckOutline className='text-[15px]' /> My Orders
                        </Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to="/logout" exact={true} activeClassName="isActive">
                        <Button className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'>
                            <IoIosLogOut className='text-[15px]' /> Logout
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AccountSideBar;