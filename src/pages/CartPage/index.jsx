import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import { BsFillBagCheckFill } from 'react-icons/bs';
import CartItems from './cartItem';
const CartPage = () => {

    return (
        <section className="section py-4 lg:py-8 pb-10">
            <div className='container w-[80%] max-w-[80%] flex gap-5 flex-col lg:flex-row'>
                <div className='leftPart w-full lg:w-[70%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
                            <h2>Your Cart</h2>
                            <p className="mt-0 mb-0">
                                There are
                                <span className="font-bold text-primary"> 2 </span>
                                products in your cart
                            </p>
                        </div>
                        <CartItems size={"S"} Qty={1} />
                        <CartItems size={"S"} Qty={1} />
                        <CartItems size={"S"} Qty={1} />
                        <CartItems size={"S"} Qty={1} />
                        <CartItems size={"S"} Qty={1} />
                    </div>
                </div>
                <div className='rightPart w-full lg:w-[30%]'>
                    <div className='shadow-md rounded-md bg-white p-5 sticky top-[155px] z-[90]'>
                        <h3 className="pb-3">Cart Totals</h3>
                        <hr />
                        <p className='flex items-center justify-between'>
                            <span className="text-[14px] font-[500]">Subtotal</span>
                            <span className="text-primary font-bold">₹5,150.00</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className="text-[14px] font-[500]">Shiping</span>
                            <span className="font-bold">Free</span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className="text-[14px] font-[500]">Estimate for</span>
                            <span className="font-bold"></span>
                        </p>
                        <p className='flex items-center justify-between'>
                            <span className="text-[14px] font-[500]">Total</span>
                            <span className="text-primary font-bold">₹5,150.00</span>
                        </p>
                        <br />
                        <Link to="/checkou">
                            <Button className='btn-org btn-lg w-full flex gap-2'>
                                <BsFillBagCheckFill className='text-[20px]' /> CheckOut
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;