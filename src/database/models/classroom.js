'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {

    static associate(models) {
      // define association here
      Classroom.belongsTo(models.Academy,{
        as: "Academies",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      Classroom.belongsTo(models.Teacher,{
        as: "Teachers",
        foreignKey: "teacher_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Student, {
        as: "Students",
        foreignKey: "classroom_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Lecture, {
        as: "Lectures",
        foreignKey: "classroom_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Notice, {
        as: "Notices",
        foreignKey: "classroom_id",
        onDelete: "cascade",
      });
    }
  }
  Classroom.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    // academy_id: {
    //   type:DataTypes.INTEGER,
    // },
    // teacher_id: {
    //   type: DataTypes.INTEGER,
    // }
  }, {
    sequelize,
    modelName: 'Classroom',
    timestamps: false,
  });
  return Classroom;
};