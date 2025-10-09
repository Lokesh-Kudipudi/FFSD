const { Booking } = require("../Model/bookingModel");
const { Tour } = require("../Model/tourModel");
const { Hotel } = require("../Model/hotelModel");

async function getUserBookings(userId) {
  try {
    const bookings = await Booking.find({ userId: userId })
      .populate("userId")
      .populate({
        path: "itemId",
        // This will use the refPath to determine which model to populate
      })
      .lean();

    if (!bookings || bookings.length === 0) {
      return {
        status: "success",
        data: [],
        message: "No bookings found for this user.",
      };
    }

    // Filter out bookings where itemId failed to populate (null)
    const validBookings = bookings.filter(
      (booking) => booking.itemId !== null
    );

    if (validBookings.length !== bookings.length) {
      console.warn(
        `${
          bookings.length - validBookings.length
        } bookings had invalid itemId references`
      );
    }

    return {
      status: "success",
      data: validBookings,
    };
  } catch (error) {
    console.error("Error in getUserBookings:", error);
    return {
      status: "error",
      message: error.message,
    };
  }
}

async function getHotelBookings(hotelId) {
  try {
    const bookings = await Booking.find({ itemId: hotelId })
      .populate("userId")
      .lean();

    if (!bookings) {
      throw new Error("No bookings found for this hotel.");
    }

    return {
      status: "success",
      data: bookings,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
}

module.exports = {
  getUserBookings,
  getHotelBookings,
};
