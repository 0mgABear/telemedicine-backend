"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "drugs",
      [
        {
          name: "paracetamol",
          max_dose: 4000,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "bisoprolol",
          max_dose: 20,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "simvastatin",
          max_dose: 40,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "calcium",
          max_dose: 1000,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "vitamin D",
          max_dose: 400,
          unit: "IU",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("drugs", null, {});
  },
};
