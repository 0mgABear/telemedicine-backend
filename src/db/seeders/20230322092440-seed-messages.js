"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          room_id: 1,
          sender: "Jin Jia",
          message: "hi",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 1,
          sender: "Jin Jia",
          message: "this is test message",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 1,
          sender: "Jin Jia",
          message: "hope you can see this!",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("messages", null, {});
  },
};
