const { rooms } = require("../db/models");

class RoomService {
  async getRoomByName(doctorNumber, patientNumber) {
    const room = await rooms.findOne({
      where: {
        doctor_id: doctorNumber,
        patient_id: patientNumber,
      },
    });

    if (!room) return null;
    return room.toJSON();
  }

  async createRoom(doctorNumber, patientNumber) {
    const newRoom = await rooms.create({
      doctor_id: doctorNumber,
      patient_id: patientNumber,
    });

    return newRoom.toJSON();
  }
}

module.exports = RoomService;
