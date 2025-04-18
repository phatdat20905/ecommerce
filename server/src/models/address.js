'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Address extends Model {
        static associate(models) {
            Address.belongsTo(models.User, { foreignKey: 'user_id' });
            Address.hasMany(models.Order, { foreignKey: 'address_id' });
        }
    }
    Address.init({
        address_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        full_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        address_line: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        postal_code: {
            type: DataTypes.STRING(20),
        },
        is_default: {
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
        modelName: 'Address',
        tableName: 'addresses',
        timestamps: false,
    });
    return Address;
};