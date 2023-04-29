'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      academy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Academies",
          key: "id",
        },
        onDelete: "cascade",
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Teachers",
          key: "id",
        },
        onDelete: "cascade",
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};