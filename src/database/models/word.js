'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Word.belongsTo(models.Academy,{
        as: "Academies",
        foreignKey: "academy_id",
        onDelete: "cascade",
      });
    }
  }
  Word.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    word: DataTypes.STRING,
    meaning: DataTypes.STRING,
    chapter: DataTypes.INTEGER,
    // academy_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Word',
    timestamps: false,
  });
  return Word;
};