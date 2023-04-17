const { prescriptions } = require("../db/models");

module.exports = {
  async getAllPrescriptionsByDoctor(req, res) {
    const retrievePrescriptions = await prescriptions.findAll({
      where: {
        doctor_id: req.params.doctor_id,
      },
    });
    return res.json(retrievePrescriptions);
  },
  async getAllPrescriptionsOfPatientByDoctor(req, res) {
    const patientPrescriptions = await prescriptions.findAll({
      where: {
        doctor_id: req.params.doctor_id,
        patient_id: req.params.patient_id,
      },
    });
    return res.json(patientPrescriptions);
  },
};
