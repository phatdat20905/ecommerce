import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdOutlineMail } from 'react-icons/md';
import Button from '@mui/material/Button';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slices/authSlice';

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector((state) => state.auth);

    const handleInputChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser(formFields));
        if (loginUser.fulfilled.match(result)) {
            navigate('/'); // Chuyển hướng sau khi đăng nhập thành công
        }
    };

    const handleForgotPassword = () => {
        if (formFields.email) {
            navigate('/forgot-password', { state: { email: formFields.email } });
        } else {
            toast.error('Please enter your email first');
        }
    };

    return (
        <section className="section py-5 sm:py-10">
            <div className="container">
                <div className="card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className="text-center text-[18px] text-black">Login to your account</h3>
                    <form className="w-full mt-5" onSubmit={handleLogin}>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                type="email"
                                id="email"
                                label="Email ID"
                                variant="outlined"
                                className="w-full"
                                name="email"
                                value={formFields.email}
                                onChange={handleInputChange}
                                required
                            />
                            <MdOutlineMail className="!absolute top-[16px] right-[16px] !text-black text-[20px] opacity-75" />
                        </div>
                        <div className="form-group w-full mb-5 relative">
                            <TextField
                                type={isShowPassword ? 'text' : 'password'}
                                id="password"
                                label="Password"
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
                        <a
                            className="link cursor-pointer text-[14px] font-[600]"
                            onClick={handleForgotPassword}
                        >
                            Forgot Password?
                        </a>
                        <div className="flex items-center w-full mt-3 mb-3">
                            <Button
                                type="submit"
                                className="btn-org btn-lg w-full flex gap-3"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Logging in...' : 'LOGIN'}
                            </Button>
                        </div>
                        <p className="text-center">
                            Not Registered?
                            <Link to="/register" className="link text-[14px] font-[600] text-primary">
                                {' '}
                                Sign Up
                            </Link>
                        </p>
                        <p className="text-center font-[500]">Or continue with social account</p>
                        <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black">
                            <FcGoogle className="text-[20px]" />
                            Login with Google
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;