"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "patients",
      [
        {
          first_name: "Jin Jia",
          last_name: "Pang",
          weight: 67,
          height: 174,
          age: 33,
          gender: "Male",
          ic_number: "S1234567A",
          medical_history: "kidney stones @ 24yo, dengue fever @ 12yo",
          address: "Blk 123 JJ North Road",
          postal_code: 123123,
          email: "frostarcher7@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Ah Kow",
          last_name: "Tan",
          weight: 100,
          height: 170,
          age: 65,
          gender: "Male",
          ic_number: "S2345678A",
          medical_history: "chest pain @ 43yo",
          address: "Blk 456 South Road",
          postal_code: 123456,
          email: "tanahkow@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          first_name: "Ah Beng",
          last_name: "Soh",
          weight: 80,
          height: 180,
          age: 60,
          gender: "Male",
          ic_number: "S3456789A",
          medical_history:
            "fractured ulnar @ 30yo, urinary tract infection @ 55yo",
          address: "Blk 789 West Road",
          postal_code: 123789,
          email: "sohahbeng@gmail.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("patients", null, {});
  },
};
