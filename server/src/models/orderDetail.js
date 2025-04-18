'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        static associate(models) {
            OrderDetail.belongsTo(models.Order, { foreignKey: 'order_id' });
            OrderDetail.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }
    OrderDetail.init({
        order_detail_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        product_image: {
            type: DataTypes.STRING(255),
        },
    }, {
        sequelize,
        modelName: 'OrderDetail',
        tableName: 'order_details',
        timestamps: false,
    });
    return OrderDetail;
};