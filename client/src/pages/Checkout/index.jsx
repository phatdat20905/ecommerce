import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Drawer from '@mui/material/Drawer';
import { IoCloseSharp } from 'react-icons/io5';
import AddressPanel from '../../components/AddressPanel';


const Checkout = () => {
    const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
    const [fullWidth, setFullWidth] = useState(true);
    const [maxWidth, setMaxWidth] = useState('lg');

    const [openAddressPanel, setOpenAddressPanel] = useState(false);

    const toggleAddressPanel = (newOpen) => () => {
        setOpenAddressPanel(newOpen);
    };
    const handleCloseProductDetailsModal = () => {
        setOpenProductDetailsModal(false);
    };
    return (
        <>
            <section className='py-3 lg:py-10 px-3'>
                <form>
                    <div className='w-full lg:w-[70%] m-auto flex flex-col md:flex-row gap-5'>
                        <div className='leftCol w-full md:w-[60%]'>
                            <div className='card bg-white shadow-md p-5 rounded-md w-full'>
                                <div className="flex items-center justify-between">
                                    <h2>Select Delivery Address</h2>
                                </div>
                                <br />
                                <div className='flex flex-col gap-4'>
                                    <div className='flex items-center mt-5 justify-between flex-col p-5'>
                                        <img src="/map.png" width="100" />
                                        <h2 className="text-center">No Addresses found in your account!</h2>
                                        <p className="mt-0">Add a delivery address.</p>
                                        <Button
                                            onClick={toggleAddressPanel(true)}
                                            className='btn-org'>ADD ADDRESS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rightCol w-full md:w-[40%]'>
                            <div className='card shadow-md bg-white p-5 rounded-md'>
                                <h2 className="mb-4">Your Order</h2>
                                <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                                    <span className="text-[14px] font-[600]">Product</span>
                                    <span className="text-[14px] font-[600]">Subtotal</span>
                                </div>
                                <div className='mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2'>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                    <div className='flex items-center justify-between py-2'>
                                        <div className='part1 flex items-center gap-3'>
                                            <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                                <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" className="w-full transition-all group-hover:scale-105" />
                                            </div>
                                            <div className="info">
                                                <h4 className="text-[14px]" title="Men Opaque Casual Shirt">Men Opaque Casual Sh... </h4>
                                                <span className="text-[13px]">Qty : 1</span>
                                            </div>
                                        </div>
                                        <span className="text-[14px] font-[500]">₹1,450.00</span>
                                    </div>
                                </div>
                                <div className='flex items-center flex-col gap-3 mb-2'>
                                    <Button className='btn-org btn-lg w-full flex gap-2 items-center'>
                                        <BsFillBagCheckFill className='text-[20px]' /> CheckOut
                                    </Button>
                                    <Button className='btn-dark btn-lg w-full flex gap-2 items-center'>
                                        <BsFillBagCheckFill className='text-[20px]' /> Cash on Delivery
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Drawer
                open={openAddressPanel}
                onClose={toggleAddressPanel(false)}
                anchor="right"
                className="addressPanel overflow-hidden"
            >
                <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
                    <h4>Add Delivery Address</h4>
                    <IoCloseSharp className="text-[20px] cursor-pointer" onClick={toggleAddressPanel(false)} />
                </div>
                {/* <div className="flex items-center justify-center flex-col pt-[100px] gap-5">
          <img src="/empty-cart.png" className="w-[150px]" />
          <h4>Your Cart is currently empty</h4>
          <Button className="btn-org btn-sm">
            Continue Shopping
          </Button>
        </div> */}

                <AddressPanel />
            </Drawer>
        </>

    )
}

export default Checkout;