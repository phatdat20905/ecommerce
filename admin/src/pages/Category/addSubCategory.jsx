import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const AddSubCategory = () => {
    const [formData, setFormData] = useState({
        category: '',
        subCategory: '',
        thirdLevelCategory: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic để lưu sản phẩm (gọi API hoặc lưu vào state)
        console.log('New Product:', formData);
    };
    return (
        <section className="p-5 bg-gray-50 grid grid-cols-1 md:grid-cols-2  gap-10">
            <form className="form py-1 p-1 md:p-8 md:py-1">
                <h4 class="font-[600]">Add Sub Category</h4>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 mb-3 gap-5">
                        <div className="col">
                            <h3 class="text-[14px] font-[500] mb-1 text-black">Product Category</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="productCatDrop"
                                value={formData.category}
                                onChange={handleInputChange}
                                name="category"
                                size="small"
                            >
                                <MenuItem value="Fashion">Fashion</MenuItem>
                                <MenuItem value="Electronics">Electronics</MenuItem>
                                <MenuItem value="Bags">Bags</MenuItem>
                                <MenuItem value="Footwear">Footwear</MenuItem>
                                <MenuItem value="Groceries">Groceries</MenuItem>
                                <MenuItem value="Beauty">Beauty</MenuItem>
                                <MenuItem value="Wellness">Wellness</MenuItem>
                                <MenuItem value="Jewellery">Jewellery</MenuItem>
                            </Select>
                        </div>
                        <div class="col">
                            <h3 class="text-[14px] font-[500] mb-1 text-black">Sub Category  Name</h3>
                            <input
                                type="text"
                                class="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="name" value="" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="w-[250px]">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="btn-blue btn-lg w-full flex gap-2"
                    >
                        <FaCloudUploadAlt className="text-[25px] text-white" />Publish and View
                    </Button>
                </div>
            </form>
            <form className="form py-1 p-1 md:p-8 md:py-1">
                <h4 class="font-[600]">Add Third Lavel Category</h4>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 mb-3 gap-5">
                        <div className="col">
                            <h3 class="text-[14px] font-[500] mb-1 text-black">Product Category</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="productSubCat"
                                value={formData.subCategory}
                                onChange={handleInputChange}
                                name="subCategory"
                                size="small"
                            >
                                <MenuItem value="Men">Men</MenuItem>
                                <MenuItem value="Women">Women</MenuItem>
                                <MenuItem value="Girls">Girls</MenuItem>
                                <MenuItem value="Mobiles">Mobiles</MenuItem>
                                <MenuItem value="Laptops">Laptops</MenuItem>
                                <MenuItem value="Smart Watch">Smart Watch</MenuItem>
                                <MenuItem value="Cameras">Cameras</MenuItem>
                                <MenuItem value="Men Bags">Men Bags</MenuItem>
                            </Select>
                        </div>
                        <div class="col">
                            <h3 class="text-[14px] font-[500] mb-1 text-black">Sub Category  Name</h3>
                            <input
                                type="text"
                                class="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="name" value="" />
                        </div>
                    </div>
                </div>
                <br />
                <div className="w-[250px]">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="btn-blue btn-lg w-full flex gap-2"
                    >
                        <FaCloudUploadAlt className="text-[25px] text-white" />Publish and View
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default AddSubCategory;