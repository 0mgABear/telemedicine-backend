'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({specialties}) {
      this.belongsTo(specialties);
    }
  }
  doctors.init(
    {
      full_name: DataTypes.STRING,
      specialty_id: DataTypes.INTEGER,
      mcr: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "doctors",
      underscored: true,
    }
  );
  return doctors;
};