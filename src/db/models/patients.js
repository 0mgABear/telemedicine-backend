'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patients.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      ic_number: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
      postal_code: DataTypes.INTEGER,
      medical_history: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patients",
      underscored: true,
    }
  );
  return patients;
};