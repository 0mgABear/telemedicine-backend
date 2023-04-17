'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("prescriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "doctors",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      diagnosis: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      drug_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dose: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      frequency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      remarks: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivered: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("prescriptions");
  }
};
