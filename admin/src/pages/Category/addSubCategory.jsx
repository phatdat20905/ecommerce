import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, uploadCategoryImage, fetchCategories } from '../../store/slices/categorySlice';
import toast from 'react-hot-toast';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const AddSubCategory = ({ onClose }) => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector((state) => state.category);
    const [formData, setFormData] = useState({
        name: '',
        parent_id: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error('Subcategory name is required');
            return;
        }
        if (!formData.parent_id) {
            toast.error('Please select a parent category');
            return;
        }

        try {
            const result = await dispatch(createCategory(formData));
            if (createCategory.fulfilled.match(result)) {
                const newCategory = result.payload.data;

                if (imageFile) {
                    const uploadResult = await dispatch(uploadCategoryImage({
                        categoryId: newCategory.category_id,
                        file: imageFile,
                    }));
                    if (!uploadCategoryImage.fulfilled.match(uploadResult)) {
                        toast.error(uploadResult.payload.errMessage || 'Failed to upload image');
                    }
                }

                toast.success('Subcategory created successfully');
                onClose();
            } else {
                toast.error(result.payload.errMessage || 'Failed to create subcategory');
            }
        } catch (err) {
            toast.error('An unexpected error occurred');
        }
    };

    return (
        <section className="p-5 bg-gray-50">
            <form className="form py-1 p-1 md:p-8 md:py-1" onSubmit={handleSubmit}>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col w-full md:w-[25%]">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Subcategory Name</h3>
                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col w-full md:w-[25%]">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Parent Category</h3>
                            <Select
                                value={formData.parent_id}
                                onChange={(e) => setFormData((prev) => ({ ...prev, parent_id: e.target.value }))}
                                displayEmpty
                                className="w-full h-[40px]"
                                required
                            >
                                <MenuItem value="" disabled>Select Parent Category</MenuItem>
                                {categories
                                    .filter((cat) => !cat.parent_id)
                                    .map((cat) => (
                                        <MenuItem key={cat.category_id} value={cat.category_id}>
                                            {cat.name}
                                        </MenuItem>
                                    ))}
                            </Select>
                        </div>
                    </div>
                    <br />
                    <h3 className="text-[14px] font-[500] mb-2 text-black">Subcategory Image</h3>
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                        {imagePreview && (
                            <div className="uploadBoxWrapper relative">
                                <span
                                    className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"
                                    onClick={handleRemoveImage}
                                >
                                    <IoMdClose className="text-white text-[17px]" />
                                </span>
                                <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
                                    <LazyLoadImage
                                        className="w-full h-full object-cover"
                                        alt="image"
                                        effect="blur"
                                        src={imagePreview}
                                    />
                                </div>
                            </div>
                        )}
                        <UploadBox multiple={false} onChange={handleImageChange} />
                    </div>
                    <br />
                    <br />
                    <div className="w-[250px]">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="btn-blue btn-lg w-full flex gap-2"
                            disabled={loading}
                        >
                            <FaCloudUploadAlt className="text-[25px] text-white" />
                            {loading ? 'Publishing...' : 'Publish and View'}
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddSubCategory;