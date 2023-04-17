"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class prescriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {}
  }
  prescriptions.init(
    {
      doctor_id: DataTypes.INTEGER,
      patient_id: DataTypes.INTEGER,
      diagnosis: DataTypes.STRING,
      drug_name: DataTypes.STRING,
      dose: DataTypes.STRING,
      frequency: DataTypes.STRING,
      remarks: DataTypes.STRING,
      delivered: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "prescriptions",
      underscored: true,
    }
  );
  return prescriptions;
};
