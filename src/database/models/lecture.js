'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lecture.belongsTo(models.Class,{
        as: "Classes",
        foreignKey: "class_id",
        onDelete: "cascade",
      });
    }
  }
  Lecture.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    link: DataTypes.STRING,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lecture',
  });
  return Lecture;
};