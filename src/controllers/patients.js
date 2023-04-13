const { patients } = require("../db/models");

module.exports = {
  async getAllPatients(req, res) {
    const retrievePatients = await patients.findAll();
    return res.json(retrievePatients);
  },
  async getLoggedInPatientProfile(req, res){
    const loggedInPatientProfile = await patients.findOne({
      where: {
        email: req.params.user_email,
      },
    });
    return res.json(loggedInPatientProfile);
  }
}

