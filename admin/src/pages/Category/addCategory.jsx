import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadBox from "../../components/UploadBox";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../store/slices/categorySlice";
import api from "../../utils/customAxios";
import toast from "react-hot-toast";

const AddCategory = ({ onClose }) => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.category);
    const [formData, setFormData] = useState({
        name: "",
    });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadLoading, setUploadLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFilesSelected = (files) => {
        setSelectedFiles(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error("Category name is required");
            return;
        }

        try {
            setUploadLoading(true);
            const result = await dispatch(createCategory(formData));
            if (createCategory.fulfilled.match(result)) {
                const category = result.payload.data;
                const categoryId = category.category_id;

                // Upload ảnh nếu có file
                if (selectedFiles.length > 0) {
                    for (const file of selectedFiles) {
                        const formDataUpload = new FormData();
                        formDataUpload.append("image", file);

                        const uploadResult = await api.post(
                            `/api/categories/upload-image/${categoryId}`,
                            formDataUpload,
                            {
                                headers: { "Content-Type": "multipart/form-data" },
                            }
                        );

                        if (uploadResult.data.errCode !== 0) {
                            toast.error(uploadResult.data.errMessage || "Failed to upload image");
                            return;
                        }
                    }
                    toast.success("Category and images uploaded successfully");
                } else {
                    toast.success("Category created successfully");
                }

                onClose();
            } else {
                toast.error(result.payload.errMessage || "Failed to create category");
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
        } finally {
            setUploadLoading(false);
        }
    };

    return (
        <section className="p-5 bg-gray-50">
            <form className="form py-1 p-1 md:p-8 md:py-1" onSubmit={handleSubmit}>
                <div className="scroll max-h-[72vh] overflow-y-scroll pr-4 pt-4">
                    <div className="grid grid-cols-1 mb-3">
                        <div className="col w-full md:w-[25%]">
                            <h3 className="text-[14px] font-[500] mb-1 text-black">
                                Category Name
                            </h3>
                            <input
                                type="text"
                                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <h3 className="text-[14px] font-[500] mb-2 text-black">
                        Category Image
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
                        <UploadBox
                            multiple={false} // Có thể đổi thành true để upload nhiều ảnh
                            onFilesSelected={handleFilesSelected}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-sm mt-2">{error}</div>
                    )}
                    <br />
                    <br />
                    <div className="w-[250px]">
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="btn-blue btn-lg w-full flex gap-2"
                            disabled={loading || uploadLoading}
                        >
                            <FaCloudUploadAlt className="text-[25px] text-white" />
                            {(loading || uploadLoading) ? "Processing..." : "Publish and Upload"}
                        </Button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddCategory;