import * as userService from '../services/userService.js';
import { upload } from '../config/cloudinaryConfig.js';

export const registerUser = async (req, res) => {
    try {
        const result = await userService.registerUser(req.body);
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

export const loginUser = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body.email, req.body.password);
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

export const firebaseGoogleLogin = async (req, res) => {
    try {
        const result = await userService.firebaseGoogleLogin(req.body.idToken);
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

export const logoutUser = async (req, res) => {
    try {
        const result = await userService.logoutUser(req.body.refreshToken);
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

export const refreshAccessToken = async (req, res) => {
    try {
        const result = await userService.refreshAccessToken(req.body.refreshToken);
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

export const updateUser = async (req, res) => {
    try {
        const result = await userService.updateUser(req.body);
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

export const deleteUser = async (req, res) => {
    try {
        const result = await userService.deleteUser(req.params.user_id);
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

export const getUserById = async (req, res) => {
    try {
        const result = await userService.getUserById(req.params.user_id);
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

export const getAllUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsers();
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

export const requestOtp = async (req, res) => {
    try {
        const result = await userService.requestOtp(req.body.email);
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

export const verifyOtp = async (req, res) => {
    try {
        const result = await userService.verifyOtp(req.body.email, req.body.otp);
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

export const resetPassword = async (req, res) => {
    try {
        const result = await userService.resetPassword(req.body.email, req.body.otp, req.body.newPassword);
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

export const uploadAvatar = async (req, res) => {
    try {
        const result = await userService.uploadAvatar(req.user.user_id, req.file);
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