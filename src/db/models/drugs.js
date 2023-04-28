"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class drugs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  drugs.init(
    {
      name: DataTypes.STRING,
      max_dose_per_frequency: DataTypes.INTEGER,
      max_dose_per_day: DataTypes.INTEGER,
      unit: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "drugs",
      underscored: true,
    }
  );
  return drugs;
};
