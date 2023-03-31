'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "diseases",
      [
        {
          name: "hypertension",
          created_at: new Date(),
          updated_at: new Date(),
        },
        { name: "hypotension", created_at: new Date(), updated_at: new Date() },
        {
          name: "hyperlipidemia",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "diabetes mellitus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "presbyopia",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "presbycusis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "atrial fibrillation",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "atrial flutter",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "urinary tract infection",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "upper respiratory tract infection",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "lower respiratory tract infection",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "pyrexia",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "cancer",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "osteoarthritis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "osteoporosis",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "dementia",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("diseases", null, {});
  },
};
