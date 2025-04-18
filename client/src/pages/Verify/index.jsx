import React, { useState } from 'react';
import OTPInput from '../../components/OTPInput';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOtp } from '../../store/slices/authSlice';
import toast from 'react-hot-toast';

const Verify = () => {
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoading, otpRequestedEmail } = useSelector((state) => state.auth);

    // Lấy email từ state (truyền từ forgot-password)
    const email = location.state?.email || otpRequestedEmail || '';

    const handleOtpChange = (value) => {
        setOtp(value);
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Email is missing. Please request OTP again.');
            navigate('/forgot-password');
            return;
        }
        if (otp.length !== 6) {
            toast.error('Please enter a valid 6-digit OTP');
            return;
        }
        const result = await dispatch(verifyOtp({ email, otp }));
        if (verifyOtp.fulfilled.match(result)) {
            navigate('/reset-password', { state: { email, otp } });
        }
    };

    return (
        <section className="section py-5 sm:py-10">
            <div className="container">
                <div className="card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <div className="text-center flex items-center justify-center">
                        <img src="/verify3.png" width="80" />
                    </div>
                    <h3 className="text-center text-[18px] text-black">Verify OTP</h3>
                    <p className="text-center mt-0 mb-4">
                        OTP sent to{' '}
                        <span className="text-primary font-bold">{email || 'your email'}</span>
                    </p>
                    <form onSubmit={handleVerifyOTP}>
                        <OTPInput length={6} onChange={handleOtpChange} />
                        <div className="flex items-center justify-center mt-5 px-3">
                            <Button
                                type="submit"
                                className="w-full btn-org btn-lg"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Verifying...' : 'Verify OTP'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Verify;