'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
            Order.belongsTo(models.User, { foreignKey: 'user_id' });
            Order.belongsTo(models.Address, { foreignKey: 'address_id' });
            Order.belongsTo(models.Coupon, { foreignKey: 'coupon_id' }); // Thêm quan hệ với Coupon
            Order.hasMany(models.OrderDetail, { foreignKey: 'order_id' });
            Order.hasOne(models.Payment, { foreignKey: 'order_id' });
        }
    }
    Order.init({
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        shipping_fee: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
        },
        coupon_id: {
            type: DataTypes.INTEGER, // Thêm từ OrderCoupons
            allowNull: true, // Có thể không áp dụng coupon
        },
        discount_amount: {
            type: DataTypes.DECIMAL(10, 2), // Thêm từ OrderCoupons
            allowNull: true, // Có thể không có giảm giá
        },
        status: {
            type: DataTypes.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
            defaultValue: 'pending',
        },
        order_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        delivery_date: {
            type: DataTypes.DATE,
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
        modelName: 'Order',
        tableName: 'orders',
        timestamps: false,
    });
    return Order;
};