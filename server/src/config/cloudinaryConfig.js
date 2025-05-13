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

// Cấu hình lưu trữ Cloudinary cho avatar
const avatarStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ecommerce_avatars', // Thư mục lưu ảnh avatar trên Cloudinary
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `${req.user.user_id}_${Date.now()}`, // Tên file: user_id_timestamp
        transformation: [
            { width: 200, height: 200, crop: 'fill', quality: 'auto' }, // Resize và tối ưu ảnh
        ],
    },
});

// Cấu hình lưu trữ Cloudinary cho Brand
const brandStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ecommerce_brands',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `brand_${Date.now()}`,
        transformation: [
            { width: 200, height: 200, crop: 'fill', quality: 'auto' },
        ],
    },
});

// Cấu hình lưu trữ Cloudinary cho Category
const categoryStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'ecommerce_categories',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `category_${Date.now()}`,
        transformation: [
            { width: 200, height: 200, crop: 'fill', quality: 'auto' },
        ],
    },
});

// Cấu hình lưu trữ Cloudinary cho ảnh trong description
const descriptionStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'description_images',
        allowed_formats: ['jpg', 'png', 'jpeg'],
        public_id: (req, file) => `desc_${Date.now()}`,
        transformation: [
            { quality: 'auto' },
        ],
    },
});

// Khởi tạo multer với Cloudinary storage cho từng loại
export const uploadAvatar = multer({
    storage: avatarStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
    fileFilter,
});

export const uploadBrandImage = multer({
    storage: brandStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
    fileFilter,
});

export const uploadCategoryImage = multer({
    storage: categoryStorage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
    fileFilter,
});

export const uploadDescriptionImage = multer({
    storage: descriptionStorage,
    limits: { fileSize: 5 * 1024 * 1024 },
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

// Hàm lấy public_id từ URL ảnh
export const getPublicIdFromUrl = (url) => {
    if (!url) return null;
    const parts = url.split('/');
    const fileName = parts[parts.length - 1];
    const publicId = fileName.split('.')[0];
    const folder = parts[parts.length - 2];
    return `${folder}/${publicId}`;
};