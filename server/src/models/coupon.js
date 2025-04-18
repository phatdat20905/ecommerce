'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Coupon extends Model {
        static associate(models) {
            Coupon.hasMany(models.Order, { foreignKey: 'coupon_id' }); // Cập nhật quan hệ
        }
    }
    Coupon.init({
        coupon_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        discount_type: {
            type: DataTypes.ENUM('percentage', 'fixed'),
            allowNull: false,
        },
        discount_value: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        min_order_value: {
            type: DataTypes.DECIMAL(10, 2),
        },
        max_discount: {
            type: DataTypes.DECIMAL(10, 2),
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        usage_limit: {
            type: DataTypes.INTEGER,
        },
        usage_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Coupon',
        tableName: 'coupons',
        timestamps: false,
    });
    return Coupon;
};