import React, { useState } from "react";
import Button from '@mui/material/Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { createBrand, uploadBrandImage } from '../../store/slices/brandSlice';
import toast from 'react-hot-toast';
import { Editor } from '@tinymce/tinymce-react';
import api from '../../utils/customAxios';

const AddBrand = ({ onClose }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);

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
            toast.error('Brand name is required');
            return;
        }

        setLoading(true);
        try {
            const result = await dispatch(createBrand(formData));
            if (createBrand.fulfilled.match(result)) {
                const newBrand = result.payload.data;

                if (imageFile) {
                    const uploadResult = await dispatch(uploadBrandImage({
                        brandId: newBrand.brand_id,
                        file: imageFile,
                    }));
                    if (!uploadBrandImage.fulfilled.match(uploadResult)) {
                        toast.error(uploadResult.payload.errMessage || 'Failed to upload image');
                    }
                }

                toast.success('Brand created successfully');
                onClose();
            } else {
                toast.error(result.payload.errMessage || 'Failed to create brand');
            }
        } catch (err) {
            toast.error('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    const uploadImageToCloudinary = async (blobInfo, success, failure) => {
        try {
            const formData = new FormData();
            formData.append('image', blobInfo.blob(), blobInfo.filename());

            const response = await api.post('/api/images/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.errCode === 0) {
                success(response.data.data.image_url);
            } else {
                failure(response.data.errMessage || 'Failed to upload image');
            }
        } catch (error) {
            failure('Error uploading image: ' + error.message);
        }
    };

    return (
        <section className="p-5 bg-gray-50">
            <form className="form py-1 p-1 md:p-8 md:py-1" onSubmit={handleSubmit}>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col w-full md:w-[25%]">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Brand Name</h3>
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
                        <div className="col w-full">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">Description</h3>
                            <Editor
                                apiKey="gr2vop27c6s5a5f55z5ixylmvm3crpnvxwku0o28q11zej9m"
                                value={formData.description}
                                onEditorChange={(content) => setFormData((prev) => ({ ...prev, description: content }))}
                                init={{
                                    height: 300,
                                    menubar: false,
                                    plugins: [
                                        'advlist autolink lists link image charmap print preview anchor',
                                        'searchreplace visualblocks code fullscreen',
                                        'insertdatetime media table paste code help wordcount',
                                    ],
                                    toolbar:
                                        'undo redo | formatselect | bold italic underline | \
                                        alignleft aligncenter alignright alignjustify | \
                                        bullist numlist outdent indent | link image | removeformat | help',
                                    images_upload_handler: uploadImageToCloudinary,
                                }}
                            />
                        </div>
                    </div>
                    <br />
                    <h3 className="text-[14px] font-[500] mb-2 text-black">Brand Image</h3>
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

export default AddBrand;