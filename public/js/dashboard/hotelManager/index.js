const tableBody = document.querySelector(
  ".available-rooms-info-table-body"
);

let bookingsInfo = [];

async function fetchBookings() {
  const hotelIDs = await fetch(
    "/dashboard/api/hotelManager/owner",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const hotelIDsData = await hotelIDs.json();

  let hotelId = hotelIDsData.hotelIds;

  const bookings = await fetch(
    "/dashboard/api/hotelManager/booking",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hotelId: hotelId,
      }),
    }
  );

  const bookingsData = await bookings.json();

  bookingsInfo = bookingsData.bookings;

  bookingsInfo.forEach((booking) => {
    const stylesForBookingStatus = function () {
      if (
        booking.bookingDetails.status.toLowerCase() === "booked"
      ) {
        return "style=color:lightgreen";
      } else if (
        booking.bookingDetails.status.toLowerCase() ===
        "cancelled"
      ) {
        return "style=color:red";
      } else if (
        booking.bookingDetails.status.toLowerCase() === "pending"
      ) {
        return "style=color:lightblue";
      } else if (
        booking.bookingDetails.status.toLowerCase() ===
        "checkout"
      ) {
        return "style=color:orange";
      }
      return "";
    };
    const template = `<tr>
                    <td>${booking.userId.fullName}</td>
                    <td>${
                      booking.bookingDetails.checkInDate
                    }</td>
                    <td>${
                      booking.bookingDetails.checkOutDate
                    }</td>
                    <td>${booking.userId.phone}</td>
                    <td>${booking.userId.email}</td>
                    <td ${stylesForBookingStatus(
                      booking.status
                    )} >${booking.bookingDetails.status}</td>
                  </tr>`;

    tableBody.insertAdjacentHTML("beforeend", template);
  });
}

fetchBookings();
