import React, { useState } from 'react';
import OTPInput from '../../components/client/OTPInput';
import Button from '@mui/material/Button';

const Verify = () => {
    const [otp, setOtp] = useState("");
    const handleOtpChange = (value) => {
        setOtp(value);
    }
    const VerifyOTP = (e) => {
        e.preventDefault();
        alert(otp)
    }
    return (
        <section className="section py-5 sm:py-10">
            <div className='container'>
                <div className='card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <div className='text-center flex items-center justify-center'>
                        <img src='/verify3.png' width="80" />
                    </div>
                    <h3 className="text-center text-[18px] text-black">Verify OTP</h3>
                    <p class="text-center mt-0 mb-4">
                        OTP send to <span class="text-primary font-bold">tiktokidol800@gmail.com</span>
                    </p>
                    <form onSubmit={VerifyOTP}>
                        <OTPInput length={6} onChange={handleOtpChange} />
                        <div className='flex items-center justify-center mt-5 px-3'>
                            <Button className='w-full btn-org btn-lg'>Verify OTP</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Verify;