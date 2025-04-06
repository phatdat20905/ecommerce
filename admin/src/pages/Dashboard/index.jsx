import React, { useState } from 'react';
import DashboardBoxex from '../../components/DashboardBoxes';
import Button from '@mui/material/Button';
import { LuPlus } from "react-icons/lu";
import Badge from '../../components/Badge';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Dashboard = () => {
    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
    const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null);
        } else {
            setIsOpenOrderProduct(index);
        }
    }
    return (
        <>
            <div className='w-full py-4 lg:py-1 px-5 border bg-[#f1faff] border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md'>
                <div className='info'>
                    <h1 className="text-[26px] lg:text-[35px] font-bold leading-8 lg:leading-10 mb-3">
                        Welcome,
                        <br />
                        <span className="text-primary">
                            idol tiktok
                        </span>
                    </h1>
                    <p>Here’s What happening on your store today. See the statistics at once.</p>
                    <br />
                    <Button className='btn-blue btn !capitalize'>
                        <LuPlus /> Add Product
                    </Button>
                </div>
                <img src="/shop-illustration.webp" className="w-[250px] hidden lg:block" />
            </div>
            <DashboardBoxex />
            <div className='flex items-center justify-between px-2 py-0 mt-5'>
                <h2 class="text-[18px] font-[600]">Products <span class="font-[400] text-[14px]"></span></h2>
                <div className='col w-[75%] ml-auto flex items-center justify-end gap-3'>
                    <Button className='btn-blue !text-white'>Add Product</Button>
                </div>
            </div>
            <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
                <div className='grid grid-cols-1 lg:grid-cols-2 px-5 py-5 flex-col sm:flex-row'>
                    <h2 class="text-[18px] font-[600] text-left mb-2 lg:mb-0">Recent Orders</h2>
                    <div className='ml-auto w-full'>
                        <div className='w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]"
                                placeholder="Search here..."
                                value="" />
                        </div>
                    </div>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    &nbsp;
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Payment ID
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Products
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Address
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    PINCODE
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Total Amount
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    User Id
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Order Status
                                </th>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-4 font-[500]">
                                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                        onClick={() => isShowOrderProduct(0)}
                                    >
                                        {
                                            isOpenOrderProduct === 0 ? (
                                                <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                            ) : (
                                                <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                                            )
                                        }

                                    </Button>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    Laptop
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">sdgfhjfdgsdfg</span>
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    <Badge status="delivered" />
                                </td>
                                <td className="px-6 py-4 font-[500]">
                                    $2999
                                </td>
                            </tr>
                            {
                                isOpenOrderProduct === 0 &&
                                <tr>
                                    <td className="pl-20" colSpan={6}>
                                        <div className="relative overflow-x-auto shadow-md">
                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3">
                                                            Product Id
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Product Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Image
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Quantity
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Price
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            SubTotal
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 font-[500] dark:text-white">
                                                            <span className="text-gray-500">234242525</span>
                                                        </th>
                                                        <td className="px-6 py-4 font-[500]">
                                                            <span className="text-gray-500">gsghdg</span>
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            <img src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                                                className="w-[80px] h-[80px] object-cover rounded-md"
                                                            />
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            2
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            $2999
                                                        </td>
                                                        <td className="px-6 py-4 font-[500]">
                                                            $2999
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Dashboard;