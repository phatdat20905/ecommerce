'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: 'role_id' });
      User.hasMany(models.Address, { foreignKey: 'user_id' });
      User.hasMany(models.Order, { foreignKey: 'user_id' });
      User.hasMany(models.Cart, { foreignKey: 'user_id' });
      User.hasMany(models.Wishlist, { foreignKey: 'user_id' });
      User.hasMany(models.ProductReview, { foreignKey: 'user_id' });
      User.hasMany(models.OtpToken, { foreignKey: 'user_id' });
      User.hasMany(models.RefreshToken, { foreignKey: 'user_id' });
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    full_name: {
      type: DataTypes.STRING(100),
    },
    avatar_url: {
      type: DataTypes.STRING(255),
    },
    role_id: {
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
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
  });
  return User;
};