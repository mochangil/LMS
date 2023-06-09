'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsTo(models.Academy,{
        as: "Academies",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      Student.belongsTo(models.Classroom,{
        as: "Classrooms",
        foreignKey: "classroom_id",
        onDelete: "cascade",
      });
    }
  }
  Student.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    snsId: DataTypes.STRING,
    provider: DataTypes.STRING
    // classroom_id: DataTypes.INTEGER,
    // academy_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    timestamps: false,
  });
  return Student;
};