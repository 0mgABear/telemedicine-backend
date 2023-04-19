"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ doctors }) {
      this.belongsToMany(doctors, { through: "prescriptions" });
    }
  }
  patients.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      ic_number: DataTypes.STRING,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      medical_history: DataTypes.STRING,
      email: DataTypes.STRING,
      drug_allergy: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patients",
      underscored: true,
    }
  );
  return patients;
};
