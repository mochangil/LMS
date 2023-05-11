'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.belongsTo(models.Academy,{
        as: "Academies",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Classroom, {
        as: "Classrooms",
        foreignKey: "classroom_id",
        onDelete: "cascade",
      });
    }
  }
  Teacher.init({
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
    // academy_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teacher',
    timestamps: false,
  });
  return Teacher;
};