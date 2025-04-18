'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductImage extends Model {
        static associate(models) {
            ProductImage.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }
    ProductImage.init({
        image_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        is_primary: {
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
        modelName: 'ProductImage',
        tableName: 'product_images',
        timestamps: false,
    });
    return ProductImage;
};