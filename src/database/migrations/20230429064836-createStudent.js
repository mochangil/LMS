'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      classroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "classrooms",
          key: "id",
        },
        onDelete: "cascade",
      },
      academy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Academies",
          key: "id",
        },
        onDelete: "cascade",
      },
      snsId: {
        type: Sequelize.STRING
      },
      provider: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};