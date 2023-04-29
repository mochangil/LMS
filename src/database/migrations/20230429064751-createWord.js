'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Words', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      word: {
        type: Sequelize.STRING
      },
      meaning: {
        type: Sequelize.STRING
      },
      chapter: {
        type: Sequelize.INTEGER
      },
      academy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Academies",
          key: "id",
        },
        onDelete: "cascade",
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Words');
  }
};