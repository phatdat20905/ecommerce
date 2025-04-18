'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        static associate(models) {
            Payment.belongsTo(models.Order, { foreignKey: 'order_id' });
        }
    }
    Payment.init({
        payment_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        method: {
            type: DataTypes.ENUM('cod', 'card', 'bank_transfer'),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'failed'),
            defaultValue: 'pending',
        },
        payment_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        transaction_id: {
            type: DataTypes.STRING(100),
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
        modelName: 'Payment',
        tableName: 'payments',
        timestamps: false,
    });
    return Payment;
};