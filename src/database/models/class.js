'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Class.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    academy_id: {
      type:DataTypes.INTEGER,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Class',
    timestamps: false,
  });
  return Class;
};