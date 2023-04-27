const { Router } = require("express");
const prescriptionsController = require("../controllers/prescriptions");
const authMiddleware = require("../middleware/auth");

const prescriptionsRouter = Router();

prescriptionsRouter.get(
  "/prescriptions/:doctor_id",
  prescriptionsController.getAllPrescriptionsByDoctor
);
prescriptionsRouter.get(
  "/prescriptions/patient/:doctor_id/:patient_id",
  prescriptionsController.getAllPrescriptionsOfPatientByDoctor
);
prescriptionsRouter.get("/prescriptions/patientown/:patient_id", prescriptionsController.getAllPrescriptionsOfPatient);
prescriptionsRouter.post("/createprescription", prescriptionsController.createPrescription);
prescriptionsRouter.delete(
  "/deleteprescription/:singlePrescription",
  prescriptionsController.deletePrescription
);

module.exports = prescriptionsRouter;
