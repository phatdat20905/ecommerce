import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { CgLogIn } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import OTPInput from '../../components/OTPInput';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../store/slices/authSlice';

const VerifyAccount = () => {
    const [otp, setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { otpRequestedEmail, isLoading } = useSelector((state) => state.auth);

    // Lấy email từ location.state hoặc otpRequestedEmail
    const email = location.state?.email || otpRequestedEmail;

    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!email || !otp) {
            alert("Email or OTP is missing");
            return;
        }

        const result = await dispatch(verifyOtp({ email, otp }));
        if (verifyOtp.fulfilled.match(result)) {
            navigate('/change-password', { state: { email, otp } });
        }
    };

    return (
        <section className="bg-white w-full">
            <header className="w-full static lg:fixed top-0 left-0 px-4 py-3 flex items-center justify-center sm:justify-between z-50">
                <Link to="/">
                    <img src="https://serviceapi.spicezgold.com/download/1741660733567_logo.jpg" className="w-[200px]" alt="Logo" />
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
            <img src="/patern.webp" className="w-full fixed top-0 left-0 opacity-5" alt="Pattern" />
            <div className="loginBox card w-full md:w-[600px] h-[auto] pb-20 mx-auto pt-5 lg:pt-20 relative z-50">
                <div className="text-center">
                    <img src="/verify3.png" className="w-[100px] m-auto" alt="Verify Icon" />
                </div>
                <h1 className="text-center text-[18px] sm:text-[35px] font-[800] mt-4">
                    Welcome Back!<br />Please Verify your Email.
                </h1>
                <br />
                <p className="text-center text-[15px]">
                    OTP sent to&nbsp;
                    <span className="text-primary font-bold text-[12px] sm:text-[14px]">
                        {email || 'tiktokidol800@gmail.com'}
                    </span>
                </p>
                <br />
                <form onSubmit={handleVerifyOTP}>
                    <OTPInput length={6} onChange={handleOtpChange} />
                    <br />
                    <div className='w-[100%] px-3 sm:w-[300px] sm:px-0 m-auto'>
                        <Button className='btn-blue w-full' disabled={isLoading}>
                            {isLoading ? 'Verifying...' : 'Verify OTP'}
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default VerifyAccount;