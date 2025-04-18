'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductReview extends Model {
        static associate(models) {
            ProductReview.belongsTo(models.Product, { foreignKey: 'product_id' });
            ProductReview.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }
    ProductReview.init({
        review_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
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
        modelName: 'ProductReview',
        tableName: 'product_reviews',
        timestamps: false,
    });
    return ProductReview;
};