const { patients } = require("../db/models");

module.exports = {
  async getAllPatients(req, res) {
    const retrievePatients = await patients.findAll();
    return res.json(retrievePatients);
  },
}

