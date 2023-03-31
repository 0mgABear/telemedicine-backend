"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          full_name: "Yeo Yi",
          specialty_id: 4,
          mcr: "M123321",
          email: "yeoyi94@gmail.com",
        },
        {
          full_name: "Aadon Ang",
          specialty_id: 1,
          mcr: "M123456",
          email: "aadon_ang@gmail.com",
        },
        {
          full_name: "Brandon Boo",
          specialty_id: 2,
          mcr: "M234567",
          email: "brandon_boog@gmail.com",
        },
        {
          full_name: "Charles Chan",
          specialty_id: 3,
          mcr: "M345678",
          email: "charles_chan@gmail.com",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
