require("express-async-errors");
const { Router } = require("express");

const patientsRouter = require("./patients");


const appRouter = Router();

appRouter.use("/", patientsRouter);


module.exports = appRouter;
