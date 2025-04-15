const cancelButtons = document.querySelectorAll(".cancel-trip");
const viewDetailsButtons = document.querySelectorAll(".view-details-trip");

cancelButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = button.getAttribute("data-itemId");
    const bookingId = button.getAttribute("data-bookingId");
    
    try {
      const response = await fetch(`/dashboard/api/bookings/cancel/${bookingId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.status === "success") {
        alert("Booking cancelled successfully.");
        window.location.reload();
      } else {
        alert("Failed to cancel booking.");
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
      alert("An error occurred while cancelling the booking.");
    }
  });
});

viewDetailsButtons.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const itemId = button.getAttribute("data-itemId");
    window.location.href = `/tours/tour/${itemId}`;
  });
});


