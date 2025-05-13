import db from '../models/index.js';
import { deleteFromCloudinary, getPublicIdFromUrl } from '../config/cloudinaryConfig.js';

// Hàm kiểm tra tên brand
const checkBrandName = async (name) => {
    const brand = await db.Brand.findOne({ where: { name } });
    return brand !== null;
};

// Hàm tạo mới brand
export const createBrand = async (brandData) => {
    try {
        const { name, description, image_url } = brandData;

        if (!name) {
            return {
                errCode: 1,
                errMessage: 'Brand name is required',
            };
        }

        const nameExists = await checkBrandName(name);
        if (nameExists) {
            return {
                errCode: 2,
                errMessage: 'Brand name already exists',
            };
        }

        const brand = await db.Brand.create({
            name,
            description,
            image_url,
        });

        return {
            errCode: 0,
            errMessage: 'Brand created successfully',
            data: brand,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error creating brand: ${error.message}`,
        };
    }
};

// Hàm cập nhật brand
export const updateBrand = async (brand_id, data) => {
    try {
        if (!brand_id || isNaN(brand_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid brand ID',
            };
        }

        const brand = await db.Brand.findOne({ where: { brand_id } });
        if (!brand) {
            return {
                errCode: 2,
                errMessage: 'Brand not found',
            };
        }

        const { name, description, image_url } = data;

        if (name && name !== brand.name) {
            const nameExists = await checkBrandName(name);
            if (nameExists) {
                return {
                    errCode: 3,
                    errMessage: 'Brand name already exists',
                };
            }
        }

        await db.Brand.update(
            { name, description, image_url },
            { where: { brand_id } }
        );

        const updatedBrand = await db.Brand.findOne({ where: { brand_id } });

        return {
            errCode: 0,
            errMessage: 'Brand updated successfully',
            data: updatedBrand,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error updating brand: ${error.message}`,
        };
    }
};

// Hàm xóa brand
export const deleteBrand = async (brand_id) => {
    try {
        if (!brand_id || isNaN(brand_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid brand ID',
            };
        }

        const brand = await db.Brand.findOne({ where: { brand_id } });
        if (!brand) {
            return {
                errCode: 2,
                errMessage: 'Brand not found',
            };
        }

        // Cập nhật brand_id của các sản phẩm liên quan thành null
        await db.Product.update(
            { brand_id: null },
            { where: { brand_id } }
        );

        // Xóa hình ảnh trên Cloudinary nếu có
        if (brand.image_url) {
            const publicId = getPublicIdFromUrl(brand.image_url);
            if (publicId) {
                await deleteFromCloudinary(publicId);
            }
        }

        await db.Brand.destroy({ where: { brand_id } });

        return {
            errCode: 0,
            errMessage: 'Brand deleted successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error deleting brand: ${error.message}`,
        };
    }
};

// Hàm lấy brand theo ID
export const getBrandById = async (brand_id) => {
    try {
        if (!brand_id || isNaN(brand_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid brand ID',
            };
        }

        const brand = await db.Brand.findOne({ where: { brand_id } });
        if (!brand) {
            return {
                errCode: 2,
                errMessage: 'Brand not found',
            };
        }

        return {
            errCode: 0,
            errMessage: 'Brand retrieved successfully',
            data: brand,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving brand: ${error.message}`,
        };
    }
};

// Hàm lấy tất cả brand
export const getAllBrands = async () => {
    try {
        const brands = await db.Brand.findAll();
        return {
            errCode: 0,
            errMessage: 'Brands retrieved successfully',
            data: brands,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving brands: ${error.message}`,
        };
    }
};

// Hàm upload hình ảnh brand
export const uploadBrandImage = async (brand_id, file) => {
    try {
        if (!brand_id || isNaN(brand_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid brand ID',
            };
        }

        const brand = await db.Brand.findOne({ where: { brand_id } });
        if (!brand) {
            return {
                errCode: 3,
                errMessage: 'Brand not found',
            };
        }

        let image_url = null;
        if (file) {
            // Xóa hình ảnh cũ trên Cloudinary nếu có
            if (brand.image_url) {
                const publicId = getPublicIdFromUrl(brand.image_url);
                if (publicId) {
                    const deleteResult = await deleteFromCloudinary(publicId);
                    if (deleteResult.errCode !== 0 && deleteResult.errCode !== 1) {
                        return deleteResult;
                    }
                }
            }

            // URL hình ảnh mới từ Cloudinary
            image_url = file.path;
        }

        await db.Brand.update({ image_url }, { where: { brand_id } });
        const updatedBrand = await db.Brand.findOne({ where: { brand_id } });

        return {
            errCode: 0,
            errMessage: 'Brand image uploaded successfully',
            data: updatedBrand,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error uploading brand image: ${error.message}`,
        };
    }
};