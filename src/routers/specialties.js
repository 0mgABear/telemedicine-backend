const { Router } = require("express");
const specialtyController = require("../controllers/specialties");
const authMiddleware = require("../middleware/auth");

const specialtyRouter = Router();

specialtyRouter.get("/allspecialties", specialtyController.getAllSpecialties);
specialtyRouter.get(
  "/specialty/:specialty_id",
  specialtyController.getSpecialty
);

module.exports = specialtyRouter;
