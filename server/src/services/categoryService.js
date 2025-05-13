import db from '../models/index.js';
import { deleteFromCloudinary, getPublicIdFromUrl } from '../config/cloudinaryConfig.js';

// Hàm kiểm tra tên category
const checkCategoryName = async (name) => {
    const category = await db.Category.findOne({ where: { name } });
    return category !== null;
};

// Hàm tạo mới category
export const createCategory = async (categoryData) => {
    try {
        const { name, parent_id, image_url } = categoryData;

        if (!name) {
            return {
                errCode: 1,
                errMessage: 'Category name is required',
            };
        }

        const nameExists = await checkCategoryName(name);
        if (nameExists) {
            return {
                errCode: 2,
                errMessage: 'Category name already exists',
            };
        }

        if (parent_id) {
            const parentCategory = await db.Category.findOne({ where: { category_id: parent_id } });
            if (!parentCategory) {
                return {
                    errCode: 3,
                    errMessage: 'Parent category not found',
                };
            }
        }

        const category = await db.Category.create({
            name,
            parent_id: parent_id || null,
            image_url,
        });

        return {
            errCode: 0,
            errMessage: 'Category created successfully',
            data: category,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error creating category: ${error.message}`,
        };
    }
};

// Hàm cập nhật category
export const updateCategory = async (category_id, data) => {
    try {
        if (!category_id || isNaN(category_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid category ID',
            };
        }

        const category = await db.Category.findOne({ where: { category_id } });
        if (!category) {
            return {
                errCode: 2,
                errMessage: 'Category not found',
            };
        }

        const { name, parent_id, image_url } = data;

        if (name && name !== category.name) {
            const nameExists = await checkCategoryName(name);
            if (nameExists) {
                return {
                    errCode: 3,
                    errMessage: 'Category name already exists',
                };
            }
        }

        if (parent_id && parent_id !== category.parent_id) {
            const parentCategory = await db.Category.findOne({ where: { category_id: parent_id } });
            if (!parentCategory) {
                return {
                    errCode: 4,
                    errMessage: 'Parent category not found',
                };
            }
        }

        await db.Category.update(
            { name, parent_id: parent_id || null, image_url },
            { where: { category_id } }
        );

        const updatedCategory = await db.Category.findOne({ where: { category_id } });

        return {
            errCode: 0,
            errMessage: 'Category updated successfully',
            data: updatedCategory,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error updating category: ${error.message}`,
        };
    }
};

// Hàm xóa category
export const deleteCategory = async (category_id) => {
    try {
        if (!category_id || isNaN(category_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid category ID',
            };
        }

        const category = await db.Category.findOne({ where: { category_id } });
        if (!category) {
            return {
                errCode: 2,
                errMessage: 'Category not found',
            };
        }

        // Cập nhật parent_id của các subcategory liên quan thành null
        await db.Category.update(
            { parent_id: null },
            { where: { parent_id: category_id } }
        );

        // Cập nhật category_id của các sản phẩm liên quan thành null
        await db.Product.update(
            { category_id: null },
            { where: { category_id } }
        );

        // Xóa hình ảnh trên Cloudinary nếu có
        if (category.image_url) {
            const publicId = getPublicIdFromUrl(category.image_url);
            if (publicId) {
                await deleteFromCloudinary(publicId);
            }
        }

        await db.Category.destroy({ where: { category_id } });

        return {
            errCode: 0,
            errMessage: 'Category deleted successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error deleting category: ${error.message}`,
        };
    }
};

// Hàm lấy category theo ID
export const getCategoryById = async (category_id) => {
    try {
        if (!category_id || isNaN(category_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid category ID',
            };
        }

        const category = await db.Category.findOne({ where: { category_id } });
        if (!category) {
            return {
                errCode: 2,
                errMessage: 'Category not found',
            };
        }

        return {
            errCode: 0,
            errMessage: 'Category retrieved successfully',
            data: category,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving category: ${error.message}`,
        };
    }
};

// Hàm lấy tất cả category
export const getAllCategories = async () => {
    try {
        const categories = await db.Category.findAll();
        return {
            errCode: 0,
            errMessage: 'Categories retrieved successfully',
            data: categories,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving categories: ${error.message}`,
        };
    }
};

// Hàm upload hình ảnh category
export const uploadCategoryImage = async (category_id, file) => {
    try {
        console.log('category_id:', category_id);
        console.log('file:', file);

        if (!category_id || isNaN(category_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid category ID',
            };
        }

        if (!file || !file.path) {
            return {
                errCode: 2,
                errMessage: 'No file uploaded or file path missing',
            };
        }

        const category = await db.Category.findOne({ where: { category_id } });
        if (!category) {
            return {
                errCode: 3,
                errMessage: 'Category not found',
            };
        }

        // Xóa hình ảnh cũ trên Cloudinary nếu có
        if (category.image_url) {
            const publicId = getPublicIdFromUrl(category.image_url);
            if (publicId) {
                console.log('Deleting old image from Cloudinary:', publicId);
                const deleteResult = await deleteFromCloudinary(publicId);
                if (deleteResult.errCode !== 0 && deleteResult.errCode !== 1) {
                    return deleteResult;
                }
            }
        }

        // URL hình ảnh mới từ Cloudinary
        const image_url = file.path;
        console.log('New image URL:', image_url);

        await db.Category.update({ image_url }, { where: { category_id } });
        const updatedCategory = await db.Category.findOne({ where: { category_id } });

        return {
            errCode: 0,
            errMessage: 'Category image uploaded successfully',
            data: updatedCategory,
        };
    } catch (error) {
        console.error('Error in uploadCategoryImage:', error);
        return {
            errCode: -1,
            errMessage: `Error uploading category image: ${error.message}`,
        };
    }
};