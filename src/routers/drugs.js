const { Router } = require("express");
const drugsController = require("../controllers/drugs");
const authMiddleware = require("../middleware/auth");

const drugsRouter = Router();

drugsRouter.get("/alldrugs", drugsController.getAllDrugs);

module.exports = drugsRouter;
