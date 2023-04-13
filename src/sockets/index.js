const { MessageService, RoomService } = require("../services");

const messageService = new MessageService();
const roomService = new RoomService();

module.exports = {
  initializeSockets(io){

    io.on("connection", async (socket) => {
      let chatroom = 1;

      socket.on("subscribe", async (doctorNumber, patientNumber) => {

        // todo: create room
        let room = await roomService.getRoomByName(doctorNumber, patientNumber);
        if (!room) {
          room = await roomService.createRoom(doctorNumber, patientNumber);
        }
        const messages = await messageService.listMessagesByRoom(room.id);
        socket.join(room.id);
 
        let roomnow = room.id;

        // todo: send back room and messages object
        // emitting event back to app.js to change room name HTML
        io.to(chatroom).emit("joinRoom", { roomnow, messages });
      });

      socket.on("chatMessage", async (data) => {
        const message = data[0];
        const sender = data[1];
        const room = data[2];

        console.log(sender + " says: " + message);

        await messageService.createMessage(room, sender, message);
        io.to(chatroom).emit("chatMessage", data);
      });
    });
  },
};
