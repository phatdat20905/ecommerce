import React, { useState } from "react";
import AccountSideBar from '../../components/AccountSidebar';
import Badge from '../../components/Badge';
import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const Orders = () => {
    const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
    const isShowOrderProduct = (index) => {
        if (isOpenOrderProduct === index) {
            setIsOpenOrderProduct(null);
        } else {
            setIsOpenOrderProduct(index);
        }
    }
    return (
        <section className="py-5 lg:py-10 w-full">
            <div className='container flex flex-col md:flex-row gap-5'>
                <div className='col1 w-[20%] hidden lg:block'>
                    <AccountSideBar />
                </div>
                <div className='col2 w-full lg:w-[80%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className="py-5 px-3 border-b border-[rgba(0,0,0,0.1)]">
                            <h2>My Orders</h2>
                            <p className="mt-0 mb-0">
                                There are
                                <span className="font-bold text-primary"> 4 </span>
                                orders
                            </p>
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

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orders;