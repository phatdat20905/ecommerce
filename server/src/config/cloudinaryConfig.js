import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Cấu hình Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Hàm validate file
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Only JPG, PNG, and JPEG files are allowed'), false);
    }
    cb(null, true);
};

// Cấu hình lưu trữ Cloudinary cho multer
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ecommerce_avatars', // Thư mục lưu ảnh trên Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `${req.user.user_id}_${Date.now()}`, // Tên file: user_id_timestamp
        transformation: [
            { width: 200, height: 200, crop: 'fill', quality: 'auto' }, // Resize và tối ưu ảnh
        ],
    },
});

// Khởi tạo multer với Cloudinary storage
export const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
    fileFilter,
});

// Hàm xóa ảnh trên Cloudinary
export const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        if (result.result === 'ok') {
            return {
                errCode: 0,
                errMessage: 'Image deleted successfully',
            };
        }
        return {
            errCode: 1,
            errMessage: 'Image not found or already deleted',
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error deleting image: ${error.message}`,
        };
    }
};