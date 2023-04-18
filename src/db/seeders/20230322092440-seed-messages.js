"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "messages",
      [
        {
          room_id: 5,
          sender: "Jin Jia",
          message: "hi doctor",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Jin Jia",
          message: "I am having very bad fever, 38.5 degree, and cough",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Jin Jia",
          message: "can I have some medicine?",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Boon Ching",
          message:
            "sure, do you have any other symptoms? how many days have this been?",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Jin Jia",
          message: "no other symptoms. about 2-3 days?",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Boon Ching",
          message:
            "okay, I will prescribe in a while. Let me know if there are any changes in symptoms or anything of concern!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          room_id: 5,
          sender: "Jin Jia",
          message: "thanks, Doc!",
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
