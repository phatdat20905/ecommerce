import Button from '@mui/material/Button';
import React from 'react';
import TextField from '@mui/material/TextField';
import AccountSideBar from '../../components/AccountSidebar';
const MyAccount = () => {
    return (
        <section className='py-3 lg:py-10 w-full'>
            <div className='container flex flex-col lg:flex-row gap-5'>
                <div className='col1 w-full lg:w-[20%]'>
                    <AccountSideBar />
                </div>
                <div className='col2 w-full lg:w-[50%]'>
                    <div className='card bg-white p-5 shadow-md rounded-md mb-5'>
                        <div className='flex items-center pb-3'>
                            <h2 className="pb-0">My Profile</h2>
                            <Button className='!ml-auto'>CHANGE PASSWORD</Button>
                        </div>
                        <hr />
                        <form className='mt-8'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 '>
                                <div className='col'>
                                    <TextField
                                        label="Full Name"
                                        variant="outlined"
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                                <div className='col'>
                                    <TextField
                                        label="Email"
                                        variant="outlined"
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                                <div className='col'>
                                    <TextField
                                        label="Outlined"
                                        variant="outlined"
                                        size='small'
                                        className='w-full'
                                    />
                                </div>
                            </div>
                            <br />
                            <div className='class="flex items-center gap-4"'>
                                <Button className='btn-org btn-sm w-[200px]'>
                                    UPDATE PROFILE
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;