"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patients_diseases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patients_diseases.init(
    {
      patient_id: DataTypes.INTEGER,
      disease_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "patients",
      underscored: true,
    }
  );
  return patients_diseases;
};
