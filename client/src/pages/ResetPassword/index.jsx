import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../store/slices/authSlice';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);
    const [formFields, setFormFields] = useState({
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, otpRequestedEmail, verifiedOtp } = useSelector((state) => state.auth);

    const handleInputChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!otpRequestedEmail || !verifiedOtp) {
            toast.error('Invalid session. Please request OTP again.');
            navigate('/forgot-password');
            return;
        }
        if (formFields.password !== formFields.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        const result = await dispatch(
            resetPassword({
                email: otpRequestedEmail,
                password: formFields.password, // Backend expects 'newPassword', handled in thunk
                otp: verifiedOtp,
            })
        );
        if (resetPassword.fulfilled.match(result)) {
            navigate('/login');
        }
    };

    return (
        <section className="section py-5 sm:py-10">
            <div className="container">
                <div className="card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className="text-center text-[18px] text-black">Reset Password</h3>
                    <form className="w-full mt-5" onSubmit={handleResetPassword}>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                type={isShowPassword ? 'text' : 'password'}
                                id="password"
                                label="New Password"
                                variant="outlined"
                                className="w-full"
                                name="password"
                                value={formFields.password}
                                onChange={handleInputChange}
                                required
                            />
                            <Button
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                            >
                                {isShowPassword ? (
                                    <IoMdEyeOff className="text-[20px] opacity-75" />
                                ) : (
                                    <IoMdEye className="text-[20px] opacity-75" />
                                )}
                            </Button>
                        </div>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                type={isShowPassword2 ? 'text' : 'password'}
                                id="confirmPassword"
                                label="Confirm Password"
                                variant="outlined"
                                className="w-full"
                                name="confirmPassword"
                                value={formFields.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                            <Button
                                onClick={() => setIsShowPassword2(!isShowPassword2)}
                                className="!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-black"
                            >
                                {isShowPassword2 ? (
                                    <IoMdEyeOff className="text-[20px] opacity-75" />
                                ) : (
                                    <IoMdEye className="text-[20px] opacity-75" />
                                )}
                            </Button>
                        </div>
                        <div className="flex items-center w-full mt-3 mb-3">
                            <Button
                                type="submit"
                                className="btn-org btn-lg w-full flex gap-3"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Resetting...' : 'CHANGE PASSWORD'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ResetPassword;