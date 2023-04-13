require("express-async-errors");
const { Router } = require("express");

const patientsRouter = require("./patients");
const chatsRouter = require("./chats");

const appRouter = Router();

appRouter.use("/", patientsRouter);
appRouter.use("/chat", chatsRouter);

module.exports = appRouter;
