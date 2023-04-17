const { Router } = require("express");
const patientsController = require("../controllers/patients");
const authMiddleware = require("../middleware/auth");

const patientsRouter = Router();

//everything below requires auth
// patientsRouter.use(authMiddleware);
patientsRouter.get("/allpatients", patientsController.getAllPatients);
patientsRouter.get(
  "/patients/:user_email",
  patientsController.getLoggedInPatientProfile
);
patientsRouter.get(
  "/patientid/:patient_id",
  patientsController.getPatientUsingId
);
patientsRouter.post("/createpatient", patientsController.createPatient);
patientsRouter.put("/editpatient/:user_email", patientsController.editPatient);

module.exports = patientsRouter;
