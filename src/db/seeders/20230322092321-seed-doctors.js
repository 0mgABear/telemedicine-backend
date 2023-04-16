"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "doctors",
      [
        {
          full_name: "Aadon Ang",
          specialty_id: 1,
          mcr: "M123456",
          email: "aadon_ang@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          full_name: "Brandon Boo",
          specialty_id: 2,
          mcr: "M234567",
          email: "brandon_boog@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          full_name: "Charles Chan",
          specialty_id: 3,
          mcr: "M345678",
          email: "charles_chan@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          full_name: "Ang Boon Ching",
          specialty_id: 4,
          mcr: "M123321",
          email: "drabchealthathand@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("doctors", null, {});
  },
};
