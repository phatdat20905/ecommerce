import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdOutlineMail } from 'react-icons/md';
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { requestOtp } from '../../store/slices/authSlice';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [formFields, setFormFields] = useState({
        email: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoading } = useSelector((state) => state.auth);

    const emailFromState = location.state?.email || '';
    if (emailFromState && !formFields.email) {
        setFormFields({ email: emailFromState });
    }

    const handleInputChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    };

    const handleRequestOtp = async (e) => {
        e.preventDefault();
        if (!formFields.email) {
            toast.error('Please enter your email');
            return;
        }
        const result = await dispatch(requestOtp(formFields.email));
        if (requestOtp.fulfilled.match(result)) {
            navigate('/verify', { state: { email: formFields.email } });
        }
    };

    return (
        <section className="section py-5 sm:py-10">
            <div className="container">
                <div className="card shadow-md w-full sm:w-[400px] m-auto rounded-md bg-white p-5 px-10">
                    <h3 className="text-center text-[18px] text-black">Forgot Password</h3>
                    <form className="w-full mt-5" onSubmit={handleRequestOtp}>
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
                        <div className="flex items-center w-full mt-3 mb-3">
                            <Button
                                type="submit"
                                className="btn-org btn-lg w-full flex gap-3"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Sending OTP...' : 'SEND OTP'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;