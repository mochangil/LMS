'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color_theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Color_theme.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    color1: DataTypes.STRING,
    color2: DataTypes.STRING,
    color3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color_theme',
    timestamps: false,
  });
  return Color_theme;
};