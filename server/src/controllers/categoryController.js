import * as categoryService from '../services/categoryService.js';

export const createCategory = async (req, res) => {
    try {
        const result = await categoryService.createCategory(req.body);
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

export const updateCategory = async (req, res) => {
    try {
        const result = await categoryService.updateCategory(req.params.category_id, req.body);
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

export const deleteCategory = async (req, res) => {
    try {
        const result = await categoryService.deleteCategory(req.params.category_id);
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

export const getCategoryById = async (req, res) => {
    try {
        const result = await categoryService.getCategoryById(req.params.category_id);
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

export const getAllCategories = async (req, res) => {
    try {
        const result = await categoryService.getAllCategories();
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

export const uploadCategoryImage = async (req, res) => {
    try {
        const result = await categoryService.uploadCategoryImage(req.params.category_id, req.file);
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