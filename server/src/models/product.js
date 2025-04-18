'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            Product.belongsTo(models.Category, { foreignKey: 'category_id' });
            Product.belongsTo(models.Brand, { foreignKey: 'brand_id' });
            Product.hasMany(models.ProductImage, { foreignKey: 'product_id' });
            Product.hasMany(models.ProductReview, { foreignKey: 'product_id' });
            Product.hasMany(models.OrderDetail, { foreignKey: 'product_id' });
            Product.hasMany(models.Cart, { foreignKey: 'product_id' });
            Product.hasMany(models.Wishlist, { foreignKey: 'product_id' });
        }
    }
    Product.init({
        product_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discount_price: {
            type: DataTypes.DECIMAL(10, 2),
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        size: {
            type: DataTypes.STRING(100), // Lưu kích thước dạng chuỗi, ví dụ: "S,M,L"
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        is_future: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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
        modelName: 'Product',
        tableName: 'products',
        timestamps: false,
    });
    return Product;
};