'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            Category.belongsTo(models.Category, { as: 'parent', foreignKey: 'parent_id' });
            Category.hasMany(models.Product, { foreignKey: 'category_id' });
        }
    }
    Category.init({
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        parent_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'Category',
        tableName: 'categories',
        timestamps: false,
    });
    return Category;
};