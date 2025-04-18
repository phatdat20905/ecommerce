'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Wishlist extends Model {
        static associate(models) {
            Wishlist.belongsTo(models.User, { foreignKey: 'user_id' });
            Wishlist.belongsTo(models.Product, { foreignKey: 'product_id' });
        }
    }
    Wishlist.init({
        wishlist_id: {
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
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'Wishlist',
        tableName: 'wishlists',
        timestamps: false,
    });
    return Wishlist;
};