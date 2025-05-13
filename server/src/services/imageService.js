import { v2 as cloudinary } from 'cloudinary';

export const uploadImageForDescription = async (file) => {
    try {
        if (!file) {
            return {
                errCode: 1,
                errMessage: 'No file uploaded',
            };
        }

        // URL ảnh từ Cloudinary (đã được multer-storage-cloudinary xử lý)
        const image_url = file.path;

        if (!image_url) {
            return {
                errCode: 2,
                errMessage: 'Failed to upload image to Cloudinary',
            };
        }

        return {
            errCode: 0,
            errMessage: 'Image uploaded successfully',
            data: { image_url },
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error uploading image: ${error.message}`,
        };
    }
};