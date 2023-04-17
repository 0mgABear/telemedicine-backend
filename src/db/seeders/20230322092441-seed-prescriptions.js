"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "prescriptions",
      [
        {
          doctor_id: 4,
          patient_id: 1,
          diagnosis: "leg pain, flu, cough",
          drug_name: "paracetamol",
          dose: "500mg",
          frequency: "QDS",
          remarks:
            "Take when needed for pain control. Stop when there is no more pain.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 1,
          diagnosis: "leg pain, flu, cough",
          drug_name: "codeine",
          dose: "60mg",
          frequency: "4 hourly",
          remarks:
            "Take when needed for cough suppression. May cause drowsiness. Do not drive or operate heavy machinery",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 1,
          diagnosis: "leg pain, flu, cough",
          drug_name: "pseudoephedrine",
          dose: "60mg",
          frequency: "QDS",
          remarks: "Take when needed for runny nose. Symptomatic relief.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 2,
          diagnosis: "headache, flu, cough",
          drug_name: "paracetamol",
          dose: "500mg",
          frequency: "QDS",
          remarks:
            "Take when needed for pain control. Stop when there is no more pain.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 2,
          diagnosis: "headache, flu, cough",
          drug_name: "codeine",
          dose: "60mg",
          frequency: "4 hourly",
          remarks:
            "Take when needed for cough suppression. May cause drowsiness. Do not drive or operate heavy machinery",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 4,
          patient_id: 2,
          diagnosis: "headache, flu, cough",
          drug_name: "pseudoephedrine",
          dose: "60mg",
          frequency: "QDS",
          remarks: "Take when needed for runny nose. Symptomatic relief.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 3,
          patient_id: 1,
          diagnosis: "shingles",
          drug_name: "paracetamol",
          dose: "500mg",
          frequency: "QDS",
          remarks:
            "Take when needed for pain control. Stop when there is no more pain.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 3,
          patient_id: 2,
          diagnosis: "elbow pain",
          drug_name: "paracetamol",
          dose: "500mg",
          frequency: "QDS",
          remarks:
            "Take when needed for pain control. Stop when there is no more pain.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          doctor_id: 3,
          patient_id: 3,
          diagnosis: "knee pain",
          drug_name: "paracetamol",
          dose: "500mg",
          frequency: "QDS",
          remarks:
            "Take when needed for pain control. Stop when there is no more pain.",
          delivered: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("prescriptions", null, {});
  },
};
