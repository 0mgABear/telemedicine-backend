"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "drugs",
      [
        {
          name: "paracetamol",
          max_dose_per_frequency: 500,
          max_dose_per_day: 4000,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "bisoprolol",
          max_dose_per_frequency: 10,
          max_dose_per_day: 20,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "simvastatin",
          max_dose_per_frequency: 40,
          max_dose_per_day: 40,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "calcium",
          max_dose_per_frequency: 500,
          max_dose_per_day: 1000,
          unit: "mg",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "vitamin D",
          max_dose_per_frequency: 200,
          max_dose_per_day: 400,
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
