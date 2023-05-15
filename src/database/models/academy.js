'use strict';
const {
  Model, DataTypes
} = require('sequelize');
const { sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Academy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Classroom, {
        as: "Classrooms",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Teacher, {
        as: "Teachers",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Student, {
        as: "Students",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
      this.hasMany(models.Word, {
        as: "Words",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
    }
  }
  Academy.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type : DataTypes.INTEGER
    },
    logo: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    theme_id:{
      allowNull: true,
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Academy',
    timestamps: false,

  });
  return Academy;
};