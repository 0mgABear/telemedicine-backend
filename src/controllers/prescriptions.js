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
    // const patientPrescriptions = [];
    const patientPrescriptions = await prescriptions.findAll({
      where: {
        doctor_id: req.params.doctor_id,
        patient_id: req.params.patient_id,
      },
      // this lengthy attributes method is needed as 'id' isn't retrieved using the normal code as shown above
      attributes: [
        "id",
        "doctor_id",
        "patient_id",
        "diagnosis",
        "drug_name",
        "dose",
        "frequency",
        "remarks",
        "delivered",
        "created_at",
        "updated_at",
      ],
    });

    return res.json(patientPrescriptions);
  },
  async getAllPrescriptionsOfPatient(req, res) {
    const patientPrescriptions = await prescriptions.findAll({
      where: {
        patient_id: req.params.patient_id,
      },
    });
    return res.json(patientPrescriptions);
  },
  async createPrescription(req, res) {
    const { body: payload } = req;
    if (payload.drug_name === "vitamin D") {
      payload.dose = payload.dose + "IU";
    } else {
      payload.dose = payload.dose + "mg";
    }

    payload.doctorId = +payload.doctor_id;
    payload.patientId = +payload.patient_id;

    if (payload.frequency === 0) {
      payload.frequency = "PRN";
    } else if (payload.frequency === 1) {
      payload.frequency = "ON";
    } else if (payload.frequency === 2) {
      payload.frequency = "BD";
    } else if (payload.frequency === 3) {
      payload.frequency = "TDS";
    } else if (payload.frequency === 4) {
      payload.frequency = "QDS";
    } else if (payload.frequency === 6) {
      payload.frequency = "4 hourly";
    } else if (payload.frequency === 12) {
      payload.frequency = "2 hourly";
    }

    const currentDate = new Date();

    const newPrescription = await prescriptions.create({
      ...payload,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return res.json(newPrescription);
  },
  async deletePrescription(req, res) {
    const deleteResult = await prescriptions.destroy({
      where: {
        id: req.params.singlePrescription,
      },
    });
    return res.json(deleteResult);
  },
};
