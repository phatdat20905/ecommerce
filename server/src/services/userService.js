import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index.js';
import { sendEmail } from '../config/emailConfig.js';
import { deleteFromCloudinary, getPublicIdFromUrl } from '../config/cloudinaryConfig.js';
import admin from 'firebase-admin';

const saltRounds = 10;

// Hàm băm mật khẩu
const hashUserPassword = async (password) => {
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds);
        return hashPassword;
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error hashing password: ${error.message}`,
        };
    }
};

// Hàm kiểm tra email
export const checkEmail = async (email) => {
    const user = await db.User.findOne({ where: { email } });
    return user !== null;
};

// Hàm kiểm tra số điện thoại
export const checkPhone = async (phone) => {
    if (!phone) return false;
    const user = await db.User.findOne({ where: { phone } });
    return user !== null;
};

// Hàm đăng nhập bằng Google Firebase
export const firebaseGoogleLogin = async (idToken) => {
    try {
        if (!idToken) {
            return {
                errCode: 1,
                errMessage: 'ID token is required',
            };
        }

        // Xác thực Firebase ID token
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const { email, name, picture } = decodedToken;

        // Tìm hoặc tạo user
        let user = await db.User.findOne({ where: { email } });
        if (!user) {
            user = await db.User.create({
                email,
                full_name: name,
                avatar_url: picture,
                phone: null, // Số điện thoại để trống khi đăng nhập bằng Google
                provider: 'google',
                role_id: 2, // User thường
            });
        } else if (user.provider !== 'google') {
            return {
                errCode: 2,
                errMessage: 'Email already registered with another provider',
            };
        }

        // Tạo access token
        const accessToken = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        // Tạo refresh token
        const refreshToken = jwt.sign(
            { user_id: user.user_id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '7d' }
        );

        // Xóa refresh token cũ
        await db.RefreshToken.destroy({ where: { user_id: user.user_id } });
        await db.RefreshToken.create({
            user_id: user.user_id,
            token: refreshToken,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        // Trả về user không có password
        const userWithoutPassword = { ...user.dataValues };
        delete userWithoutPassword.password;

        return {
            errCode: 0,
            errMessage: 'Google login successful',
            data: {
                accessToken,
                refreshToken,
                user: userWithoutPassword,
            },
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error during Google login: ${error.message}`,
        };
    }
};

// Hàm đăng ký người dùng
export const registerUser = async (userData) => {
    try {
        const { email, password, full_name, phone, avatar_url, role_id } = userData;

        if (!email || !password) {
            return {
                errCode: 1,
                errMessage: 'Missing required fields: email and password are required',
            };
        }

        const emailExists = await checkEmail(email);
        if (emailExists) {
            return {
                errCode: 2,
                errMessage: 'Email already exists',
            };
        }

        if (phone) {
            const phoneExists = await checkPhone(phone);
            if (phoneExists) {
                return {
                    errCode: 3,
                    errMessage: 'Phone number already exists',
                };
            }
        }

        const hashedPassword = await hashUserPassword(password);
        if (hashedPassword.errCode) return hashedPassword;

        const user = await db.User.create({
            email,
            password: hashedPassword,
            full_name,
            phone,
            avatar_url,
            role_id: role_id || 2,
        });

        const userWithoutPassword = { ...user.dataValues };
        delete userWithoutPassword.password;

        return {
            errCode: 0,
            errMessage: 'User registered successfully',
            data: userWithoutPassword,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error registering user: ${error.message}`,
        };
    }
};

// Hàm đăng nhập người dùng
export const loginUser = async (email, password) => {
    try {
        if (!email || !password) {
            return {
                errCode: 1,
                errMessage: 'Missing email or password',
            };
        }

        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return {
                errCode: 3,
                errMessage: 'Invalid password',
            };
        }

        const accessToken = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { user_id: user.user_id },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '7d' }
        );

        await db.RefreshToken.destroy({ where: { user_id: user.user_id } });
        await db.RefreshToken.create({
            user_id: user.user_id,
            token: refreshToken,
            expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        const userWithoutPassword = { ...user.dataValues };
        delete userWithoutPassword.password;

        return {
            errCode: 0,
            errMessage: 'Login successful',
            data: {
                accessToken,
                refreshToken,
                user: userWithoutPassword,
            },
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error logging in: ${error.message}`,
        };
    }
};

// Hàm đăng xuất
export const logoutUser = async (refreshToken) => {
    try {
        if (!refreshToken) {
            return {
                errCode: 1,
                errMessage: 'Refresh token is required',
            };
        }

        const storedToken = await db.RefreshToken.findOne({ where: { token: refreshToken } });
        if (!storedToken) {
            return {
                errCode: 2,
                errMessage: 'Refresh token not found',
            };
        }

        await db.RefreshToken.destroy({ where: { token: refreshToken } });
        return {
            errCode: 0,
            errMessage: 'Logout successful',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error logging out: ${error.message}`,
        };
    }
};

// Hàm làm mới access token
export const refreshAccessToken = async (refreshToken) => {
    try {
        if (!refreshToken) {
            return {
                errCode: 1,
                errMessage: 'Refresh token is required',
            };
        }

        const storedToken = await db.RefreshToken.findOne({ where: { token: refreshToken } });
        if (!storedToken) {
            return {
                errCode: 2,
                errMessage: 'Invalid refresh token',
            };
        }

        if (new Date() > storedToken.expires_at) {
            await db.RefreshToken.destroy({ where: { token: refreshToken } });
            return {
                errCode: 3,
                errMessage: 'Refresh token expired',
            };
        }

        const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await db.User.findOne({ where: { user_id: decoded.user_id } });
        if (!user) {
            return {
                errCode: 4,
                errMessage: 'User not found',
            };
        }

        const newAccessToken = jwt.sign(
            { user_id: user.user_id, role_id: user.role_id },
            process.env.JWT_SECRET,
            { expiresIn: '15m' }
        );

        return {
            errCode: 0,
            errMessage: 'Access token refreshed successfully',
            data: {
                accessToken: newAccessToken,
                refreshToken,
            },
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error refreshing token: ${error.message}`,
        };
    }
};

// Hàm chỉnh sửa thông tin người dùng
export const updateUser = async (data) => {
    try {
        const { user_id, email, password, full_name, phone, avatar_url, role_id } = data;
        if (!user_id || isNaN(user_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid user ID',
            };
        }

        const user = await db.User.findOne({ where: { user_id } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        if (phone && phone !== user.phone) {
            const phoneExists = await checkPhone(phone);
            if (phoneExists) {
                return {
                    errCode: 3,
                    errMessage: 'Phone number already exists',
                };
            }
        }

        const updateData = { email, full_name, phone, avatar_url, role_id };
        if (password) {
            const hashedPassword = await hashUserPassword(password);
            if (hashedPassword.errCode) return hashedPassword;
            updateData.password = hashedPassword;
        }

        await db.User.update(updateData, { where: { user_id } });
        const updatedUser = await db.User.findOne({
            where: { user_id },
            attributes: { exclude: ['password'] },
        });

        return {
            errCode: 0,
            errMessage: 'User updated successfully',
            data: updatedUser,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error updating user: ${error.message}`,
        };
    }
};

// Hàm xóa người dùng
export const deleteUser = async (user_id) => {
    try {
        if (!user_id || isNaN(user_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid user ID',
            };
        }

        const user = await db.User.findOne({ where: { user_id } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        // Xóa ảnh đại diện trên Cloudinary nếu có
        if (user.avatar_url) {
            const publicId = getPublicIdFromUrl(user.avatar_url);
            if (publicId) {
                await deleteFromCloudinary(publicId);
            }
        }

        await db.RefreshToken.destroy({ where: { user_id } });
        await db.User.destroy({ where: { user_id } });

        return {
            errCode: 0,
            errMessage: 'User deleted successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error deleting user: ${error.message}`,
        };
    }
};

// Hàm lấy thông tin người dùng theo ID
export const getUserById = async (user_id) => {
    try {
        if (!user_id || isNaN(user_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid user ID',
            };
        }

        const user = await db.User.findOne({
            where: { user_id },
            attributes: { exclude: ['password'] },
            include: [{ model: db.Role, attributes: ['name'] }],
        });

        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        return {
            errCode: 0,
            errMessage: 'User retrieved successfully',
            data: user,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving user: ${error.message}`,
        };
    }
};

// Hàm lấy danh sách tất cả người dùng
export const getAllUsers = async () => {
    try {
        const users = await db.User.findAll({
            attributes: { exclude: ['password'] },
            include: [{ model: db.Role, attributes: ['name'] }],
        });

        return {
            errCode: 0,
            errMessage: 'Users retrieved successfully',
            data: users,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error retrieving users: ${error.message}`,
        };
    }
};

// Hàm yêu cầu OTP
export const requestOtp = async (email) => {
    try {
        if (!email) {
            return {
                errCode: 1,
                errMessage: 'Email is required',
            };
        }

        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

        await db.OtpToken.destroy({ where: { user_id: user.user_id } });
        await db.OtpToken.create({
            user_id: user.user_id,
            otp,
            expires_at: expiresAt,
        });

        const emailResult = await sendEmail(
            email,
            'Your OTP for Password Reset',
            otp
        );
        if (emailResult.errCode !== 0) {
            return emailResult;
        }

        return {
            errCode: 0,
            errMessage: 'OTP sent successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error sending OTP: ${error.message}`,
        };
    }
};

// Hàm xác minh OTP
export const verifyOtp = async (email, otp) => {
    try {
        if (!email || !otp) {
            return {
                errCode: 1,
                errMessage: 'Email and OTP are required',
            };
        }

        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        const otpRecord = await db.OtpToken.findOne({
            where: { user_id: user.user_id, otp },
        });
        if (!otpRecord) {
            return {
                errCode: 3,
                errMessage: 'Invalid OTP',
            };
        }

        if (new Date() > otpRecord.expires_at) {
            await db.OtpToken.destroy({ where: { user_id: user.user_id } });
            return {
                errCode: 4,
                errMessage: 'OTP has expired',
            };
        }

        return {
            errCode: 0,
            errMessage: 'OTP verified successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error verifying OTP: ${error.message}`,
        };
    }
};

// Hàm đặt lại mật khẩu
export const resetPassword = async (email, otp, newPassword) => {
    try {
        if (!email || !otp || !newPassword) {
            return {
                errCode: 1,
                errMessage: 'Email, OTP, and new password are required',
            };
        }

        const user = await db.User.findOne({ where: { email } });
        if (!user) {
            return {
                errCode: 2,
                errMessage: 'User not found',
            };
        }

        const otpRecord = await db.OtpToken.findOne({
            where: { user_id: user.user_id, otp },
        });
        if (!otpRecord) {
            return {
                errCode: 3,
                errMessage: 'Invalid OTP',
            };
        }

        if (new Date() > otpRecord.expires_at) {
            await db.OtpToken.destroy({ where: { user_id: user.user_id } });
            return {
                errCode: 4,
                errMessage: 'OTP has expired',
            };
        }

        const hashedPassword = await hashUserPassword(newPassword);
        if (hashedPassword.errCode) return hashedPassword;

        await db.User.update(
            { password: hashedPassword },
            { where: { user_id: user.user_id } }
        );

        await db.OtpToken.destroy({ where: { user_id: user.user_id } });

        const emailResult = await sendEmail(
            email,
            'Password Reset Successful',
            null
        );
        if (emailResult.errCode !== 0) {
            return emailResult;
        }

        return {
            errCode: 0,
            errMessage: 'Password reset successfully',
            data: {},
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error resetting password: ${error.message}`,
        };
    }
};

// Hàm upload ảnh đại diện
export const uploadAvatar = async (user_id, file) => {
    try {
        if (!user_id || isNaN(user_id)) {
            return {
                errCode: 1,
                errMessage: 'Invalid user ID',
            };
        }

        if (!file) {
            return {
                errCode: 2,
                errMessage: 'No file uploaded',
            };
        }

        const user = await db.User.findOne({ where: { user_id } });
        if (!user) {
            return {
                errCode: 3,
                errMessage: 'User not found',
            };
        }

        // Xóa ảnh cũ trên Cloudinary nếu có
        if (user.avatar_url) {
            const publicId = getPublicIdFromUrl(user.avatar_url);
            if (publicId) {
                const deleteResult = await deleteFromCloudinary(publicId);
                if (deleteResult.errCode !== 0 && deleteResult.errCode !== 1) {
                    return deleteResult;
                }
            }
        }

        // URL ảnh mới từ Cloudinary
        const avatar_url = file.path;

        await db.User.update({ avatar_url }, { where: { user_id } });
        const updatedUser = await db.User.findOne({
            where: { user_id },
            attributes: { exclude: ['password'] },
        });

        return {
            errCode: 0,
            errMessage: 'Avatar uploaded successfully',
            data: updatedUser,
        };
    } catch (error) {
        return {
            errCode: -1,
            errMessage: `Error uploading avatar: ${error.message}`,
        };
    }
};