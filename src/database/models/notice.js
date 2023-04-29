'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notice.belongsTo(models.Class,{
        as: "Classes",
        foreignKey: "class_id",
        onDelete: "cascade",
      });
    }
  }
  Notice.init({
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    context: DataTypes.STRING,
    endDate: DataTypes.STRING,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notice',
  });
  return Notice;
};