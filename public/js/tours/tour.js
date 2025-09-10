const itineraryAccordion = document.querySelector(
  ".itinerary-accordion"
);

const choiceSelectionContainer = document.querySelector(
  ".choice-selection-container"
);

itineraryAccordion.addEventListener("click", (e) => {
  const divClicked = e.target.closest(".itinerary-item");
  divClicked.classList.toggle("itinerary-open");
});

choiceSelectionContainer.addEventListener("click", (e) => {
  document
    .querySelectorAll(".choice-month")
    .forEach((btn) => btn.classList.remove("choice-selected"));
  const button = e.target.closest("button");
  if (button) {
    button.classList.toggle("choice-selected");
  }
});

async function makeBooking(tourId, bookingDetails) {
  try {
    const response = await fetch("/tours/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tourId: tourId,
        startDate: bookingDetails.startDate,
        endDate: bookingDetails.endDate,
      }),
    });

    const data = await response.json();

    if (data.status == "fail") {
      alert(data.message);
    } else {
      window.location.href = "/dashboard/myTrips";
    }
  } catch (error) {
    console.log("Error making booking:", error);
  }

  // window.location.href = "/dashboard/myTrips";
}

document
  .querySelectorAll(".booking-card-confirm-btn")
  .forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const bookingString = btn.getAttribute(
        "data-booking-string"
      );
      const [startDate, endDate, discount, tourId] =
        bookingString.split("_");

      makeBooking(tourId, {
        startDate: startDate,
        endDate: endDate,
      });
    });
  });
