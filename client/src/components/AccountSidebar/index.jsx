import Button from '@mui/material/Button';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser, updateUser } from '../../store/slices/authSlice';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoIosLogOut, IoMdHeartEmpty } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import api from '../../utils/customAxios';
import toast from 'react-hot-toast';

const AccountSideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    const handleAvatarUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            toast.error('Please select an image');
            return;
        }
        const formData = new FormData();
        formData.append('avatar', file);

        try {
            const response = await api.post('/api/users/upload-avatar', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            if (response.data.errCode === 0) {
                dispatch(updateUser(response.data.data));
                toast.success(response.data.errMessage);
            } else {
                toast.error(response.data.errMessage);
            }
        } catch (error) {
            toast.error(error.response?.data?.errMessage || 'Failed to upload avatar');
        }
    };

    const handleLogout = async () => {
        try {
            await dispatch(logoutUser()).unwrap();
            navigate('/login');
            toast.success('Logged out successfully');
        } catch (error) {
            toast.error(error.errMessage || 'Logout failed');
        }
    };

    return (
        <div className='card bg-white shadow-md rounded-md sticky top-[160px]'>
            <div className='w-full p-5 flex items-center justify-center flex-col'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200'>
                    <img
                        src={user?.avatar_url || 'https://lh3.googleusercontent.com/a/ACg8ocLzFkk_gTgWWe_-y9QpySySNSyeF8IFUa21Uny8NMksPh_hMA=s96-c'}
                        className="w-full h-full object-cover"
                        alt="Avatar"
                    />
                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100'>
                        <FaCloudUploadAlt className='text-[#fff] text-[25px]' />
                        <input
                            type="file"
                            className="absolute top-0 left-0 w-full h-full opacity-0"
                            accept="image/*"
                            name="avatar"
                            onChange={handleAvatarUpload}
                        />
                    </div>
                </div>
                <h3>{user?.full_name || 'idol tiktok'}</h3>
                <h6 className="text-[13px] font-[500]">{user?.email || 'tiktokidol800@gmail.com'}</h6>
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
                    <Button
                        className='w-full !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2'
                        onClick={handleLogout}
                    >
                        <IoIosLogOut className='text-[15px]' /> Logout
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default AccountSideBar;