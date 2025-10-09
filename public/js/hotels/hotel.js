const faqItems = document.querySelectorAll(".faq-item");
const sectionsNavbar = document.querySelector(".section-navbar");
const sectionsNavbarLinks = document.querySelectorAll(
  ".section-navbar-link"
);

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close other open items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle the clicked item
    item.classList.toggle("active");
  });
});

sectionsNavbar.addEventListener("click", (e) => {
  sectionsNavbarLinks.forEach((el) => {
    el.classList.remove("active");
  });

  e.target.classList.add("active");
});

const reserveButtons = document.querySelectorAll(
  ".room-card .reserve-btn"
);

reserveButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const roomCard = button.closest(".room-card");
    const hotelId = roomCard.getAttribute("data-hotelId");
    const checkInDate =
      document.getElementById("check-in").value;
    const checkOutDate =
      document.getElementById("check-out").value;
    const price = roomCard.querySelector(".price").textContent;
    const priceValue = price.replace(/[^0-9.-]+/g, "");
    const priceNumber = parseFloat(priceValue);

    if (!checkInDate || !checkOutDate) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    const today = new Date();
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);

    if (checkIn < today) {
      alert("Check-in date cannot be in the past.");
      return;
    }

    if (checkOut < today) {
      alert("Check-out date cannot be in the past.");
      return;
    }

    const totalPrice =
      (priceNumber * (checkOut - checkIn)) /
      (1000 * 60 * 60 * 24);
    const bookingDetails = {
      checkInDate,
      checkOutDate,
      price: totalPrice,
      status: "pending",
    };

    // Send booking details to the server
    const response = await fetch(`/hotels/booking/${hotelId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    });
    const data = await response.json();

    if (data.status == "fail") {
      alert("Booking failed: " + data.message);
      return;
    }

    if (data.status === "success") {
      alert("Booking successful!");
      window.location.href = "/dashboard/myTrips";
    } else {
      alert("Booking failed: " + data.message);
    }
  });
});
