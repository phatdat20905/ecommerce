'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OtpToken extends Model {
        static associate(models) {
            OtpToken.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }
    OtpToken.init({
        token_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        otp: {
            type: DataTypes.STRING(6), // Lưu mã OTP 6 chữ số
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'OtpToken',
        tableName: 'otp_tokens',
        timestamps: false,
    });
    return OtpToken;
};