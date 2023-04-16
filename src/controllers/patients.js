const { patients } = require("../db/models");


module.exports = {
  async getAllPatients(req, res) {
    const retrievePatients = await patients.findAll();
    return res.json(retrievePatients);
  },
  async getLoggedInPatientProfile(req, res) {
    const loggedInPatientProfile = await patients.findOne({
      where: {
        email: req.params.user_email,
      },
    });
    return res.json(loggedInPatientProfile);
  },
  async getPatientUsingId(req, res) {
    const patient = await patients.findOne({
      where: {
        id: req.params.patient_id,
      },
    });
    return res.json(patient);
  },
  async createPatient(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();

    const newPatient = await patients.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return res.json(newPatient);
  },
  async editPatient(req, res) {
    const { body: payload } = req;
    const currentDate = new Date();
    const editedData = await patients.update(
      {
        ...payload,
        updated_at: currentDate,
      },
      {
        where: {
          email: req.params.user_email,
        },
      }
    );
    return res.json(editedData);
  },
};

