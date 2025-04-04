import React from "react";
import ProductZoom from "../../components/client/ProductZoom";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
const ProductDetails = () => {
    return (
        <section className="bg-white py-5">
            <div className="container flex gap-8 flex-col lg:flex-row items-start lg:items-center">
                <div className="productZoomContainer w-full lg:w-[40%]">
                    <ProductZoom />
                </div>
                <div className="productContent w-full lg:w-[60%] pr-2 pl-2 lg:pr-10 lg:pl-10">
                    <h1 className="text-[18px] sm:text-[22px] font-[600] mb-2">Men Opaque Casual Shirt</h1>
                    <div className="flex items-start sm:items-center lg:items-center flex-col sm:flex-row md:flex-row lg:flex-row gap-3 justify-start">
                        <span className="text-gray-400 text-[13px]">
                            Brands :
                            <span className="font-[500] text-black opacity-75">CLAFOUTIS</span>
                        </span>
                        <Rating name="size-small" defaultValue={2} size="small" readOnly />
                        <span className="text-[13px] cursor-pointer">Review (1)</span>

                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start sm:items-center gap-4 mt-4">
                        <div className="flex items-center gap-4">
                            <span className="oldPrice line-through text-gray-500 text-[20px] lg:text-[14px] font-[500]">₹38,500.00</span>
                            <span className="price text-primary text-[20px] lg:text-[14px]  font-[600]">₹38,650.00</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span class="text-[14px]">Available In Stock: <span class="text-green-600 text-[14px] font-bold">4778 Items</span></span>
                        </div>
                    </div>
                    <p class="mt-3 pr-10 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="flex items-center gap-3">
                        <span class="text-[16px]">SIZE:</span>
                        <div className="flex items-center gap-1 actions">
                            <Button >S</Button>
                            <Button>M</Button>
                            <Button>L</Button>
                        </div>
                    </div>
                    <p class="text-[14px] mt-5 mb-2 text-[#000]">Free Shipping (Est. Delivery Time 2-3 Days)</p>
                    <div className="flex items-center gap-4 py-4">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;