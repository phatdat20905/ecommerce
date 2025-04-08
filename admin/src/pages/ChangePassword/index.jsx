import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const ChangePassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);




    return (
        <section className="bg-white w-full">
            <header className="w-full static lg:fixed top-0 left-0  px-4 py-3 flex items-center justify-center sm:justify-between z-50">
                <Link to="/">
                    <img src="https://serviceapi.spicezgold.com/download/1741660733567_logo.jpg" className="w-[200px]" />
                </Link>
                <div className="hidden sm:flex items-center gap-0">
                    <NavLink to="/login" exact={true} activeClassName="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <CgLogIn className="text-[18px]" /> Login
                        </Button>
                    </NavLink>
                    <NavLink to="/sign-up" exact={true} activeClassName="isActive">
                        <Button className='!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1'>
                            <FaRegUser className="text-[18px]" /> Sign up
                        </Button>
                    </NavLink>
                </div>
            </header>
            <img src="/patern.webp" className="w-full fixed top-0 left-0 opacity-5" />
            <div className="loginBox card w-full md:w-[600px] h-[auto] pb-20 mx-auto pt-5 lg:pt-20 relative z-50">
                <div className="text-center">
                    <img src="/icon.svg" className="m-auto" />
                </div>
                <h1 className="text-center text-[18px] sm:text-[35px] font-[800] mt-4">
                    Welcome Back!<br />You can change your password from here.
                </h1>
                <br />

                <form className="w-full px-8 mt-3">
                    <div className="form-group mb-4 w-full">
                        <h4 className="text-[14px] font-[500] mb-1">New Password</h4>
                        <div className="relative w-full">
                            <input
                                type={isShowPassword ? 'text' : 'password'}
                                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                name="password"
                                value="ggg" />

                            <Button className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                            >
                                {
                                    isShowPassword ?
                                        <FaRegEyeSlash className="text-[18px]" />
                                        :
                                        <FaRegEye className="text-[18px]" />
                                }
                            </Button>
                        </div>
                    </div>
                    <div className="form-group mb-4 w-full">
                        <h4 className="text-[14px] font-[500] mb-1">Confirm Password</h4>
                        <div className="relative w-full">
                            <input
                                type={isShowPassword2 ? 'text' : 'password'}
                                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                                name="password"
                                value="ggg" />

                            <Button className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-600"
                                onClick={() => setIsShowPassword2(!isShowPassword2)}
                            >
                                {
                                    isShowPassword2 ?
                                        <FaRegEyeSlash className="text-[18px]" />
                                        :
                                        <FaRegEye className="text-[18px]" />
                                }
                            </Button>
                        </div>
                    </div>
                    <Button className="btn-blue btn-lg w-full">
                        CHANGE PASSWORD
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default ChangePassword;