const { Tour } = require("../Model/tourModel");

async function getAllTours() {
  try {
    const tours = await Tour.find().lean();
    return {
      status: "success",
      data: tours,
    };
  } catch (error) {
    throw new Error("Error fetching tours: " + error.message);
  }
}

async function getTourById(tourId) {
  try {
    const tour = await Tour.findById(tourId).lean();
    if (!tour) {
      return {
        status: "fail",
        message: "Tour not found",
      };
    }
    return {
      status: "success",
      data: tour,
    };
  } catch (error) {
    throw new Error("Error fetching tour: " + error.message);
  }
}

async function updateTour(tourId, updateData) {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      tourId,
      updateData,
      {
        new: true,
      }
    ).lean();
    if (!updatedTour) {
      return {
        status: "fail",
        message: "Tour not found",
      };
    }
    return {
      status: "success",
      data: updatedTour,
    };
  } catch (error) {
    throw new Error("Error updating tour: " + error.message);
  }
}

module.exports = {
  getAllTours,
  getTourById,
  updateTour,
};
