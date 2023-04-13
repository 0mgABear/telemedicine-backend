"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "rooms",
      [
        {
          doctor_id: 1,
          patient_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 1,
          patient_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 2,
          patient_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 2,
          patient_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("rooms", null, {});
  },
};
