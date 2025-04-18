'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class RefreshToken extends Model {
        static associate(models) {
            RefreshToken.belongsTo(models.User, { foreignKey: 'user_id' });
        }
    }
    RefreshToken.init({
        token_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        token: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'RefreshToken',
        tableName: 'refresh_tokens',
        timestamps: false,
    });
    return RefreshToken;
};