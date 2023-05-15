'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Academies',[{
    id:1,
    logo: 'cat',
    name: 'beastAcademy',
    theme_id: 1,
    createdAt: '2023-04-26',
    updatedAt: '2023-04-26'
   },{
    id:2,
    logo: 'dolphin',
    name: 'waterAcademy',
    theme_id: 2,
    createdAt: '2023-04-26',
    updatedAt: '2023-04-26'
   }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Academies',null,{});
  }
};
