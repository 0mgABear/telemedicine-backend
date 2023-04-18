const { drugs } = require("../db/models");

module.exports = {
  async getAllDrugs(req, res) {
    const retrieveDrugs = await drugs.findAll();
    return res.json(retrieveDrugs);
  },
};
