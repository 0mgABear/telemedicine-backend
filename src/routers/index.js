require("express-async-errors");
const { Router } = require("express");

const doctorsRouter = require("./doctors");
const specialtyRouter = require("./specialties");
const patientsRouter = require("./patients");
const prescriptionsRouter = require("./prescriptions");
const drugsRouter = require("./drugs");

const appRouter = Router();
appRouter.use("/", doctorsRouter);
appRouter.use("/", specialtyRouter);
appRouter.use("/", prescriptionsRouter);
appRouter.use("/", patientsRouter);
appRouter.use("/", drugsRouter);

module.exports = appRouter;

