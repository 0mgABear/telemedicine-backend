"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patients_drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patients_drugs.init(
    {
      patient_id: DataTypes.INTEGER,
      drug_id: DataTypes.INTEGER,
      dose: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "patients",
      underscored: true,
    }
  );
  return patients_drugs;
};
