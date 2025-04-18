'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        static associate(models) {
            Brand.hasMany(models.Product, { foreignKey: 'brand_id' });
        }
    }
    Brand.init({
        brand_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image_url: {
            type: DataTypes.STRING(255),
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
        modelName: 'Brand',
        tableName: 'brands',
        timestamps: false,
    });
    return Brand;
};