const { Router } = require("express");
const doctorsController = require("../controllers/doctors");
const authMiddleware = require("../middleware/auth");

const doctorsRouter = Router();

doctorsRouter.get("/alldoctors", doctorsController.getAllDoctors);
doctorsRouter.get(
  "/doctors/:user_email",
  doctorsController.getLoggedInDoctorProfile
);

module.exports = doctorsRouter;
