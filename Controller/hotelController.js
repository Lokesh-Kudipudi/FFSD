const { Hotel } = require("../Model/hotelModel");

async function getAllHotels() {
  try {
    const hotels = await Hotel.find().lean();
    return {
      status: "success",
      data: hotels,
    };
  } catch (error) {
    throw new Error("Error fetching hotels: " + error.message);
  }
}

async function getHotelById(hotelId) {
  try {
    const hotel = await Hotel.findById(hotelId).lean();
    if (!hotel) {
      throw new Error("Hotel not Found!");
    }
    return {
      status: "success",
      data: hotel,
    };
  } catch (error) {
    throw new Error(
      "Error fetching Hotel by Id: " + error.message
    );
  }
}

async function addRoomType(hotelId, roomTypeData) {
  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      throw new Error("Hotel not found");
    }

    hotel.roomType.push(roomTypeData);
    await hotel.save();

    return {
      status: "success",
      message: "Room type added successfully",
      data: hotel,
    };
  } catch (error) {
    throw new Error("Error adding room type: " + error.message);
  }
}

async function updateRoomType(hotelId, roomId, roomTypeData) {
  try {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      throw new Error("Hotel not found");
    }

    const roomIndex = hotel.roomType.findIndex(
      (room) => room._id.toString() === roomId
    );
    if (roomIndex === -1) {
      throw new Error("Room type not found");
    }

    hotel.roomType[roomIndex] = {
      ...hotel.roomType[roomIndex]._doc,
      ...roomTypeData,
    };
    await hotel.save();

    return {
      status: "success",
      message: "Room type updated successfully",
      data: hotel,
    };
  } catch (error) {
    throw new Error(
      "Error updating room type: " + error.message
    );
  }
}

async function getRoomTypesByHotelId(hotelId) {
  try {
    const hotel = await Hotel.findById(hotelId).lean();
    if (!hotel) {
      throw new Error("Hotel not found");
    }

    return {
      status: "success",
      data: hotel.roomType,
    };
  } catch (error) {
    throw new Error(
      "Error fetching room types by hotel ID: " + error.message
    );
  }
}

module.exports = {
  getAllHotels,
  getHotelById,
  addRoomType,
  updateRoomType,
  getRoomTypesByHotelId,
};
