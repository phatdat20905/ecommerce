'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        static associate(models) {
            Cart.belongsTo(models.User, { foreignKey: 'user_id' });
            Cart.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }
    Cart.init({
        cart_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
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
        modelName: 'Cart',
        tableName: 'carts',
        timestamps: false,
    });
    return Cart;
};