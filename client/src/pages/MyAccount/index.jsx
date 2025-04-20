import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountSideBar from '../../components/AccountSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fetchUser, updateUser } from '../../store/slices/authSlice';

const MyAccount = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isLoading, error } = useSelector((state) => state.auth);

    const [formFields, setFormFields] = useState({
        full_name: '',
        email: '',
        phone: '',
    });

    // Kiểm tra đăng nhập
    useEffect(() => {
        if (!user) {
            toast.error('Please log in to view your profile');
            navigate('/login');
        }
    }, [user, navigate]);

    // Load thông tin user khi component mount
    useEffect(() => {
        if (user) {
            setFormFields({
                full_name: user.full_name || '',
                email: user.email || '',
                phone: user.phone || '',
            });
        } else if (user?.user_id) {
            dispatch(fetchUser(user.user_id));
        }
    }, [user, dispatch]);

    // Cập nhật formFields khi user thay đổi
    useEffect(() => {
        if (user) {
            setFormFields({
                full_name: user.full_name || '',
                email: user.email || '',
                phone: user.phone || '',
            });
        }
    }, [user]);

    const handleInputChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value });
    };

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        if (!formFields.full_name || !formFields.email) {
            toast.error('Please fill in all required fields');
            return;
        }
        const result = await dispatch(updateUser({ user_id: user.user_id, ...formFields }));
        if (updateUser.fulfilled.match(result)) {
            toast.success(result.payload.errMessage);
        } else {
            toast.error(result.payload.errMessage);
        }
    };

    const handleChangePassword = () => {
        if (user?.email) {
            navigate('/forgot-password', { state: { email: user.email } });
        } else {
            toast.error('Please log in to change password');
            navigate('/login');
        }
    };

    return (
        <section className="py-3 lg:py-10 w-full">
            <div className="container flex flex-col lg:flex-row gap-5">
                <div className="col1 w-full lg:w-[20%]">
                    <AccountSideBar />
                </div>
                <div className="col2 w-full lg:w-[50%]">
                    <div className="card bg-white p-5 shadow-md rounded-md mb-5">
                        <div className="flex items-center pb-3">
                            <h2 className="pb-0">My Profile</h2>
                            <Button
                                className="!ml-auto"
                                onClick={handleChangePassword}
                                disabled={isLoading}
                            >
                                CHANGE PASSWORD
                            </Button>
                        </div>
                        <hr />
                        <form className="mt-8" onSubmit={handleUpdateProfile}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="col">
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        size="small"
                                        className="w-full"
                                        name="full_name"
                                        value={formFields.full_name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        size="small"
                                        className="w-full"
                                        name="email"
                                        value={formFields.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="col">
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        size="small"
                                        className="w-full"
                                        name="phone"
                                        type="tel"
                                        value={formFields.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="flex items-center gap-4">
                                <Button
                                    type="submit"
                                    className="btn-org btn-sm w-[200px]"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Updating...' : 'UPDATE PROFILE'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyAccount;