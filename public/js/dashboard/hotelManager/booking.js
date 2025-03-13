const tableBody = document.querySelector(".main-bookings-table-body");

let hotelId;

let bookingsInfo = [];

const loadBookingDetails = () => {
  // Generate table rows dynamically
  bookingsInfo.forEach((booking, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${booking.userId.fullName}</td>
      <td style="${stylesForBookingStatus(booking.bookingDetails.status)}">${
      booking.bookingDetails.status
    }</td>
      <td>${booking.bookingDetails.checkInDate}</td>
      <td>${booking.bookingDetails.checkOutDate}</td>
      <td>
        <span class="material-symbols-outlined" style="color: #aa1419;">email</span> ${
          booking.userId.email
        }
      </td>
      <td>
        <span class="material-symbols-outlined" style="color: #7e9b3b;">phone</span> ${
          booking.userId.phone
        }
      </td>
      
    `;

    /*
      <td>
        <span class="action-btn" data-id="${index}">⋮</span>
        <div class="action-menu" id="menu-${index}">
          <a href="editBooking.html?id=${index}"><span class="material-symbols-outlined icon">edit</span> Edit Booking</a>
          <a href="deleteBooking.html?id=${index}" class="delete"><span class="material-symbols-outlined icon">delete</span> Delete Booking</a>
          <a href="cancelBooking.html?id=${index}"><span class="material-symbols-outlined icon">cancel</span> Cancel Booking</a>
        </div>
      </td>
    */

    tableBody.appendChild(row);
  });
};

async function fetchBookings() {
  const hotelIDs = await fetch("/dashboard/api/hotelManager/owner", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const hotelIDsData = await hotelIDs.json();

  hotelId = hotelIDsData.hotelIds;

  const bookings = await fetch("/dashboard/api/hotelManager/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hotelId: hotelId,
    }),
  });

  const bookingsData = await bookings.json();

  bookingsInfo = bookingsData.bookings;

  console.log(bookingsInfo);

  loadBookingDetails();
}

fetchBookings();

// Function to apply styles to statuses
const stylesForBookingStatus = (status) => {
  const statusLower = status.toLowerCase();
  return statusLower === "booked"
    ? "color: lightgreen;"
    : statusLower === "cancelled"
    ? "color: red;"
    : statusLower === "checkin"
    ? "color: lightblue;"
    : statusLower === "checkout"
    ? "color: orange;"
    : "";
};

// Function to apply styles to payment statuses
const stylesForPaymentStatus = (payment) => {
  return payment.toLowerCase() === "paid"
    ? "color: lightgreen;"
    : "color: red;";
};

// document.addEventListener("click", function (event) {
//   // Close any open menus
//   document.querySelectorAll(".action-menu").forEach((menu) => {
//     menu.style.display = "none";
//   });

//   // Open menu only if the action button was clicked
//   if (event.target.classList.contains("action-btn")) {
//     const menuId = event.target.getAttribute("data-id");
//     const menu = document.getElementById(`menu-${menuId}`);
//     menu.style.display = "block";
//   }
// });
