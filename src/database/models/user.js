'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  User.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    snsId: DataTypes.STRING,
    provider: DataTypes.STRING,
    role: DataTypes.STRING,
    // academy_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};