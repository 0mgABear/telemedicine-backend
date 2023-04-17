const { doctors } = require("../db/models");

module.exports = {
  async getAllDoctors(req, res) {
    const retrieveDoctors = await doctors.findAll();
    return res.json(retrieveDoctors);
  },
  async getLoggedInDoctorProfile(req, res) {
    const loggedInDoctorProfile = await doctors.findOne({
      where: {
        email: req.params.user_email,
      },
    });
    return res.json(loggedInDoctorProfile);
  },
};