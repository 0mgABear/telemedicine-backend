const { chats } = require("../db/models");

module.exports = {
  async getChats(req, res) {
    const allChats = await chats.findAll();
    return res.json(allChats);
  }
}

