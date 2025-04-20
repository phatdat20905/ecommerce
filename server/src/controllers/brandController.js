import * as brandService from '../services/brandService.js';

export const createBrand = async (req, res) => {
    try {
        const result = await brandService.createBrand(req.body);
        return res.status(result.errCode === 0 ? 201 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};

export const updateBrand = async (req, res) => {
    try {
        const result = await brandService.updateBrand(req.params.brand_id, req.body);
        return res.status(result.errCode === 0 ? 200 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};

export const deleteBrand = async (req, res) => {
    try {
        const result = await brandService.deleteBrand(req.params.brand_id);
        return res.status(result.errCode === 0 ? 200 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};

export const getBrandById = async (req, res) => {
    try {
        const result = await brandService.getBrandById(req.params.brand_id);
        return res.status(result.errCode === 0 ? 200 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};

export const getAllBrands = async (req, res) => {
    try {
        const result = await brandService.getAllBrands();
        return res.status(result.errCode === 0 ? 200 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};

export const uploadBrandImage = async (req, res) => {
    try {
        const result = await brandService.uploadBrandImage(req.params.brand_id, req.file);
        return res.status(result.errCode === 0 ? 200 : 400).json({
            errCode: result.errCode,
            errMessage: result.errMessage,
            data: result.data,
        });
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: `Server error: ${error.message}`,
        });
    }
};