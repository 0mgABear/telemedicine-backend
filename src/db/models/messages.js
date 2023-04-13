"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ rooms }) {
      this.belongsTo(rooms);
    }
  }
  messages.init(
    {
      room_id: DataTypes.INTEGER,
      sender: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "messages",
      underscored: true,
    }
  );
  return messages;
};
