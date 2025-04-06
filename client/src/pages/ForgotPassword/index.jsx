import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdOutlineMail } from 'react-icons/md';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast'
const ForgotPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const history = useNavigate();
    return (
        <section className="section py-5 sm:py-10">
            <div className='container'>
                <div className='card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10'>
                    <h3 className="text-center text-[18px] text-black">Forget Password</h3>
                    <form className="w-full mt-5">
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={isShowPassword ? 'text' : 'password'}
                                id="password"
                                label="New Password"
                                variant="outlined"
                                className='w-full'
                                name='email'
                            />
                            <Button
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'>
                                {isShowPassword ? <IoMdEyeOff className='text-[20px] opacity-75' /> : <IoMdEye className='text-[20px] opacity-75' />}
                            </Button>
                        </div>
                        <div className='form-group w-full mb-5 relative'>
                            <TextField
                                type={isShowPassword2 ? 'text' : 'password'}
                                id="confirmPassword"
                                label="Confirm Password"
                                variant="outlined"
                                className='w-full'
                                name='password'
                            />
                            <Button
                                onClick={() => setIsShowPassword2(!isShowPassword2)}
                                className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black'>
                                {isShowPassword2 ? <IoMdEyeOff className='text-[20px] opacity-75' /> : <IoMdEye className='text-[20px] opacity-75' />}
                            </Button>
                        </div>
                        <div className='flex items-center w-full mt-3 mb-3'>
                            <Button className='btn-org btn-lg w-full flex gap-3'>CHANGE PASSWORD</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword;