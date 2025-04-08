import React, { useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { IoMdClose } from "react-icons/io";
const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        subCategory: '',
        thirdLevelCategory: '',
        price: '',
        oldPrice: '',
        isFeatured: '',
        stock: '',
        brand: '',
        discount: '',
        weight: '',
        size: '',
        rating: 1, // Giá trị mặc định cho Rating
        images: [], // Lưu danh sách URL hình ảnh (hiện tại là mảng trống, bạn có thể thêm logic upload)
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRatingChange = (e, newValue) => {
        setFormData((prev) => ({ ...prev, rating: newValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic để lưu sản phẩm (gọi API hoặc lưu vào state)
        console.log('New Product:', formData);
    };

    return (
        <section className="p-5 bg-gray-50">
            <form className="form py-1 p-1 md:p-8 md:py-1" onSubmit={handleSubmit}>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
                    {/* Product Name */}
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Name</h3>
                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Description</h3>
                            <textarea
                                className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Grid các trường còn lại */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-3 gap-4">
                        {/* Category */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Category By</h3>
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

                        {/* Sub Category */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Sub Category By</h3>
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

                        {/* Third Level Category */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Third Level Sub Category By</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formData.thirdLevelCategory}
                                onChange={handleInputChange}
                                name="thirdLevelCategory"
                                size="small"
                            >
                                <MenuItem value="T-Shirts">T-Shirts</MenuItem>
                                <MenuItem value="Casual Shirts">Casual Shirts</MenuItem>
                                <MenuItem value="Blazers & Coats">Blazers & Coats</MenuItem>
                                <MenuItem value="Jeans">Jeans</MenuItem>
                                <MenuItem value="Kurtas & Suits">Kurtas & Suits</MenuItem>
                                <MenuItem value="Sarees">Sarees</MenuItem>
                                <MenuItem value="Tops">Tops</MenuItem>
                                <MenuItem value="Jeans">Jeans</MenuItem>
                            </Select>
                        </div>

                        {/* Product Price */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Price</h3>
                            <input
                                type="number"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Product Old Price */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Old Price</h3>
                            <input
                                type="number"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="oldPrice"
                                value={formData.oldPrice}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Is Featured */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Is Featured?</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formData.isFeatured}
                                onChange={handleInputChange}
                                name="isFeatured"
                                size="small"
                            >
                                <MenuItem value="True">True</MenuItem>
                                <MenuItem value="False">False</MenuItem>
                            </Select>
                        </div>

                        {/* Product Stock */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Stock</h3>
                            <input
                                type="number"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="stock"
                                value={formData.stock}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Product Brand */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Brand</h3>
                            <input
                                type="text" // Đổi type thành "text" vì brand không phải là số
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="brand"
                                value={formData.brand}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Product Discount */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Discount</h3>
                            <input
                                type="number"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="discount"
                                value={formData.discount}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Product Weight */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Weight</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formData.weight}
                                onChange={handleInputChange}
                                name="weight"
                                size="small"
                            >
                                <MenuItem value="1KG">1KG</MenuItem>
                                <MenuItem value="2KG">2KG</MenuItem>
                                <MenuItem value="3KG">3KG</MenuItem>
                                <MenuItem value="4KG">4KG</MenuItem>
                            </Select>
                        </div>

                        {/* Product Size */}
                        <div className="col">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Size</h3>
                            <Select
                                className="w-full"
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={formData.size}
                                onChange={handleInputChange}
                                name="size"
                                size="small"
                            >
                                <MenuItem value="S">S</MenuItem>
                                <MenuItem value="M">M</MenuItem>
                                <MenuItem value="L">L</MenuItem>
                                <MenuItem value="XL">XL</MenuItem>
                                <MenuItem value="XXL">XXL</MenuItem>
                            </Select>
                        </div>
                    </div>

                    {/* Product Rating */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mb-3 gap-4">
                        <div className="col">
                            <div className="text-[14px] font-[500] mb-1 text-black">
                                <h3 className="text-[14px] font-[500] mb-1 text-black">Product Rating</h3>
                                <Rating
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleRatingChange}
                                    size="small"
                                    precision={0.5}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Media & Images */}
                    <div className="col w-full p-5 px-0">
                        <h3 className="font-[700] text-[18px] mb-3">Media & Images</h3>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                            <div className="uploadBoxWrapper relative">
                                <span className="absolute w-[20px] h-[20px] rounded-full  overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                                    <IoMdClose className="text-white text-[17px]" />
                                </span>
                                <div className="uploadBox p-3 
                                    rounded-md overflow-hidden 
                                    border border-dashed border-[rgba(0,0,0,0.3)] 
                                    h-[150px] w-[100%] bg-gray-100 cursor-pointer
                                     hover:bg-gray-200 flex items-center justify-center flex-col relative"
                                >
                                    <LazyLoadImage
                                        className="w-full h-full object-cover"
                                        alt={"image"}
                                        effect="blur"
                                        src={"https://serviceapi.spicezgold.com/download/1742463984453_protinex-powder-creamy-vanilla-flavour-jar-400-gm-prod-o1091133-p608300882-0-202403020216.webp"}
                                    />
                                </div>
                            </div>
                            <UploadBox multiple={false} />
                        </div>
                    </div>
                    <div className="col w-full p-5 px-0">
                        <div className="bg-gray-100 p-4 w-full">
                            <div className="flex items-center gap-8">
                                <h3 className="font-[700] text-[18px] mb-3">Banner Images</h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                                <div className="uploadBoxWrapper relative">
                                    <span className="absolute w-[20px] h-[20px] rounded-full  overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer">
                                        <IoMdClose className="text-white text-[17px]" />
                                    </span>
                                    <div className="uploadBox p-3 
                                    rounded-md overflow-hidden 
                                    border border-dashed border-[rgba(0,0,0,0.3)] 
                                    h-[150px] w-[100%] bg-gray-100 cursor-pointer
                                     hover:bg-gray-200 flex items-center justify-center flex-col relative"
                                    >
                                        <LazyLoadImage
                                            className="w-full h-full object-cover"
                                            alt={"image"}
                                            effect="blur"
                                            src={"https://serviceapi.spicezgold.com/download/1742463984453_protinex-powder-creamy-vanilla-flavour-jar-400-gm-prod-o1091133-p608300882-0-202403020216.webp"}
                                        />
                                    </div>
                                </div>
                                <UploadBox multiple={false} />
                            </div>
                            <br />
                            <h3 className="font-[700] text-[18px] mb-3">Banner Title</h3>

                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="bannerTitleName"
                                value=""
                            />
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                {/* Nút Save */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="btn-blue btn-lg w-full flex gap-2"
                >
                    <FaCloudUploadAlt className="text-[25px] text-white" />Publish and View
                </Button>
            </form>
        </section>
    );
};

export default AddProduct;