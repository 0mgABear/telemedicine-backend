require("express-async-errors");
const { Router } = require("express");

const doctorsRouter = require("./doctors");
const specialtyRouter = require("./specialties");
const patientsRouter = require("./patients");
const chatsRouter = require("./chats");
const prescriptionsRouter = require("./prescriptions");

const appRouter = Router();
appRouter.use("/", doctorsRouter);
appRouter.use("/", specialtyRouter);
appRouter.use("/", prescriptionsRouter);
appRouter.use("/", patientsRouter);
appRouter.use("/chat", chatsRouter);

module.exports = appRouter;
