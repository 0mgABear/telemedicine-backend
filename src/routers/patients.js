const { Router } = require("express");
const patientsController = require("../controllers/patients");
const authMiddleware = require("../middleware/auth");

const patientsRouter = Router();

//everything below requires auth
patientsRouter.use(authMiddleware);
patientsRouter.get("/", patientsController.getAllPatients);



module.exports = patientsRouter;