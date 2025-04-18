import jwt from 'jsonwebtoken';
import db from '../models/index.js';

// Middleware xác thực access token
export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            errCode: 1,
            errMessage: 'No token provided',
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await db.User.findOne({
            where: { user_id: decoded.user_id },
            attributes: ['user_id', 'email', 'role_id', 'full_name', 'avatar_url'],
        });

        if (!user) {
            return res.status(404).json({
                errCode: 2,
                errMessage: 'User not found',
            });
        }

        req.user = user.dataValues;
        next();
    } catch (error) {
        const status = error.name === 'TokenExpiredError' ? 403 : 401;
        const message =
            error.name === 'TokenExpiredError' ? 'Token has expired' : 'Invalid token';
        return res.status(status).json({
            errCode: 3,
            errMessage: `${message}: ${error.message}`,
        });
    }
};

// Middleware kiểm tra vai trò (role)
export const authorizeRole = (roleIds) => {
    return async (req, res, next) => {
        try {
            if (!req.user) {
                return res.status(401).json({
                    errCode: 6,
                    errMessage: 'User not authenticated',
                });
            }

            const userRoleId = req.user.role_id;

            if (!userRoleId) {
                return res.status(403).json({
                    errCode: 4,
                    errMessage: 'No role assigned to user',
                });
            }

            const hasRole = roleIds.includes(userRoleId);
            if (!hasRole) {
                return res.status(403).json({
                    errCode: 5,
                    errMessage: 'Permission denied: insufficient role',
                });
            }

            next();
        } catch (error) {
            return res.status(500).json({
                errCode: -1,
                errMessage: `Error checking role: ${error.message}`,
            });
        }
    };
};