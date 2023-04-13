const { Router } = require("express");
const chatsController = require("../controllers/chats");
const chatsRouter = Router();

chatsRouter.get("/", chatsController.getChats);


module.exports = chatsRouter;
