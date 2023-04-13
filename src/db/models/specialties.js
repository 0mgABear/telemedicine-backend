"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class specialties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ doctors }) {
      this.hasMany(doctors);
    }
  }
  specialties.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "specialties",
      underscored: true,
    }
  );
  return specialties;
};
