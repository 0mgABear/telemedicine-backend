const express = require("express");
const app = express();


const { createServer } = require("http");
const http = createServer(app);
const { Server } = require("socket.io");
const io = new Server(http,{
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST","PUT","DELETE"],
  }
});
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { errorHandler } = require("./middleware");
const appRouter = require("./routers");
const { initializeSockets } = require("./sockets");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(appRouter);
app.use(errorHandler);
initializeSockets(io);

http.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

