"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "specialties",
      [
        { name: "urology", created_at: new Date(), updated_at: new Date() },
        { name: "respiratory", created_at: new Date(), updated_at: new Date() },
        { name: "cardiology", created_at: new Date(), updated_at: new Date() },
        { name: "neurology", created_at: new Date(), updated_at: new Date() },
        { name: "orthopedics", created_at: new Date(), updated_at: new Date() },
        { name: "dermatology", created_at: new Date(), updated_at: new Date() },
        { name: "pediatrics", created_at: new Date(), updated_at: new Date() },
        {
          name: "endocrinology",
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: "geriatrics", created_at: new Date(), updated_at: new Date() },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("specialties", null, {});
  },
};
