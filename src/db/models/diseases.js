'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class diseases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({patients}) {
      this.belongsToMany(patients, { through: "patients_diseases" });
    }
  }
  diseases.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'diseases',
    underscored: true,
  });
  return diseases;
};