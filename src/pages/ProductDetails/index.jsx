import React, { useState } from "react";
import ProductZoom from "../../components/client/ProductZoom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

import ProductsSlider from "../../components/client/ProductsSlider";
import ProductDetailsComponent from "../../components/client/ProductDetailsComponent";
const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState(1);
    return (
        <section className="bg-white py-5">
            <div className="container flex gap-8 flex-col lg:flex-row items-start lg:items-center">
                <div className="productZoomContainer w-full lg:w-[40%]">
                    <ProductZoom />
                </div>
                <div className="productContent w-full lg:w-[60%] pr-2 pl-2 lg:pr-10 lg:pl-10">
                    <ProductDetailsComponent />
                </div>
            </div>
            <div className="container pt-10">
                <div className="flex items-center gap-8 mb-5">
                    <span
                        onClick={() => setActiveTab(1)}
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 ? 'text-primary' : ''}`}
                    >Description</span>
                    <span
                        onClick={() => setActiveTab(2)}
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 ? 'text-primary' : ''}`}
                    >Product Details (1)</span>
                    <span
                        onClick={() => setActiveTab(3)}
                        className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 3 ? 'text-primary' : ''}`}
                    >Reviews (1)</span>
                </div>
                {
                    activeTab === 1 &&
                    <div className="shadow-md w-full py-5 px-8 rounded-md text-[14px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                }
                {
                    activeTab === 2 &&
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                        White
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                        $1999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                        Black
                                    </td>
                                    <td className="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                        $99
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Google Pixel Phone
                                    </th>
                                    <td className="px-6 py-4">
                                        Gray
                                    </td>
                                    <td className="px-6 py-4">
                                        Phone
                                    </td>
                                    <td className="px-6 py-4">
                                        $799
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Apple Watch 5
                                    </th>
                                    <td className="px-6 py-4">
                                        Red
                                    </td>
                                    <td className="px-6 py-4">
                                        Wearables
                                    </td>
                                    <td className="px-6 py-4">
                                        $999
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
                {
                    activeTab === 3 &&
                    <div className="shadow-none lg:shadow-md w-full sm:w-[80%] py-0  lg:py-5 px-0 lg:px-8 rounded-md">
                        <div className="w-full productReviewsContainer">
                            <h2 className="text-[16px] lg:text-[18px]">Customer questions &amp; answers</h2>
                            <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                                <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                                    <div className="info w-[80%] flex items-center gap-3">
                                        <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                                            <img src="/user.jpg" className="w-full" />
                                        </div>
                                        <div className="w-[80%]">
                                            <h4 className="text-[16px]">Nina</h4>
                                            <h5 className="text-[13px] mb-0">2025-03-22</h5>
                                            <p className="mt-0 mb-0 text-[13px]">Good</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                                </div>
                                <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                                    <div className="info w-[80%] flex items-center gap-3">
                                        <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                                            <img src="/user.jpg" className="w-full" />
                                        </div>
                                        <div className="w-[80%]">
                                            <h4 className="text-[16px]">Nina</h4>
                                            <h5 className="text-[13px] mb-0">2025-03-22</h5>
                                            <p className="mt-0 mb-0 text-[13px]">Good</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                                </div>
                                <div className="review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                                    <div className="info w-[80%] flex items-center gap-3">
                                        <div className="img w-[60px] h-[60px] overflow-hidden rounded-full">
                                            <img src="/user.jpg" className="w-full" />
                                        </div>
                                        <div className="w-[80%]">
                                            <h4 className="text-[16px]">Nina</h4>
                                            <h5 className="text-[13px] mb-0">2025-03-22</h5>
                                            <p className="mt-0 mb-0 text-[13px]">Good</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                                </div>
                            </div>
                            <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                                <h2 className="text-[18px]">Add a review</h2>
                                <form className="w-full mt-5">
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Write a review..."
                                        className="w-full"
                                        multiline
                                        rows={4}
                                    />
                                    <br />
                                    <br />
                                    <Rating name="size-small" defaultValue={4} />
                                    <div className="flex items-center mt-5">
                                        <Button className="btn-org flex gap-2">SUBMIT REVIEW</Button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="container pt-8">
                <h2 className="text-[20px] font-[600] pb-0">Related Products</h2>
                <ProductsSlider items={6} />
            </div>
        </section>
    );
}

export default ProductDetails;