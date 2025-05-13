import React, { useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import toast from "react-hot-toast";

const UploadBox = ({ multiple = false, onFilesSelected }) => {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) {
            toast.error("Please select at least one image");
            return;
        }

        setImagePreviews(files.map(file => URL.createObjectURL(file)));
        if (onFilesSelected) onFilesSelected(files); // Truyền file lên parent
    };

    const handleRemoveImage = (index) => {
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        if (onFilesSelected) {
            const remainingFiles = imagePreviews
                .filter((_, i) => i !== index)
                .map((_, i) => imagePreviews[i].file);
            onFilesSelected(remainingFiles);
        }
    };

    return (
        <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col relative">
            {imagePreviews.length > 0 ? (
                <div className="uploadBoxWrapper relative w-full h-full overflow-x-auto flex space-x-2">
                    {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative inline-block">
                            <span
                                className="absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center z-50 cursor-pointer"
                                onClick={() => handleRemoveImage(index)}
                            >
                                <svg
                                    className="text-white text-[17px]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </span>
                            <img
                                className="w-[140px] h-[140px] object-cover"
                                src={preview}
                                alt={`Uploaded image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <>
                    <FaRegImages className="text-[40px] opacity-35 pointer-events-none" />
                    <h4 className="text-[14px] pointer-events-none">Image Upload</h4>
                </>
            )}
            <input
                type="file"
                accept="image/*"
                multiple={multiple}
                className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
                onChange={handleImageChange}
                disabled={uploading}
            />
            {uploading && (
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <span className="text-white">Uploading...</span>
                </div>
            )}
        </div>
    );
};

export default UploadBox;