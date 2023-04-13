const { messages } = require("../db/models");

class MessageService {
  async listMessagesByRoom(roomId) {
    const allMessages = await messages.findAll({
      where: {
        room_id: roomId,
      },
    });
    return allMessages.map((message) => message.toJSON());
  }

  async createMessage(roomId, sender, message) {
    const newMessage = await messages.create({
      room_id: roomId,
      sender: sender,
      message: message,
    });
    return newMessage.toJSON();
  }
}

module.exports = MessageService;
