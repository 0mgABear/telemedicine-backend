const { specialties } = require("../db/models");

module.exports = {
  async getAllSpecialties(req, res) {
    const retrieveSpecialties = await specialties.findAll();
    return res.json(retrieveSpecialties);
  },
  async getSpecialty(req, res) {
    const specialty = await specialties.findOne({
      where: {
        id: req.params.specialty_id,
      },
    });
    return res.json(specialty);
  },
};
