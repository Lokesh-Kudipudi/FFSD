// const rooms = [
//   {
//     number: 101,
//     type: "Super Deluxe",
//     bed: "King Bed",
//     guests: "2 Adults, 2 Children",
//     status: "booked",
//   },
//   {
//     number: 102,
//     type: "Deluxe",
//     bed: "Queen Bed",
//     guests: "2 Adults",
//     status: "available",
//   },
//   {
//     number: 103,
//     type: "Standard",
//     bed: "Double Bed",
//     guests: "1 Adult",
//     status: "available",
//   },
//   {
//     number: 104,
//     type: "Deluxe",
//     bed: "King Bed",
//     guests: "2 Adults",
//     status: "booked",
//   },
//   {
//     number: 105,
//     type: "Suite",
//     bed: "King Bed",
//     guests: "2 Adults, 1 Child",
//     status: "available",
//   },
//   {
//     number: 106,
//     type: "Suite",
//     bed: "Queen Bed",
//     guests: "2 Adults, 2 Children",
//     status: "booked",
//   },
//   {
//     number: 201,
//     type: "Family Suite",
//     bed: "King Bed",
//     guests: "2 Adults, 3 Children",
//     status: "available",
//   },
//   {
//     number: 202,
//     type: "Business Room",
//     bed: "Single Bed",
//     guests: "1 Adult",
//     status: "available",
//   },
//   {
//     number: 203,
//     type: "Super Deluxe",
//     bed: "King Bed",
//     guests: "2 Adults, 2 Children",
//     status: "booked",
//   },
//   {
//     number: 204,
//     type: "Super Deluxe",
//     bed: "Single Bed",
//     guests: "1 Adult",
//     status: "available",
//   },
//   {
//     number: 205,
//     type: "Suite",
//     bed: "King Bed",
//     guests: "2 Adults, 1 Child",
//     status: "booked",
//   },
//   {
//     number: 206,
//     type: "Deluxe",
//     bed: "Double Bed",
//     guests: "2 Adults",
//     status: "available",
//   },
// ];
// function renderRooms(filteredRooms) {
//   const roomGrid = document.getElementById("roomGrid");
//   roomGrid.innerHTML = "";
//   filteredRooms.forEach((room) => {
//     roomGrid.innerHTML += `
//                 <div class="room-card">
//                     <div class="status ${room.status}">${
//       room.status.charAt(0).toUpperCase() + room.status.slice(1)
//     }</div>
//                     <h2>Room ${room.number}</h2>
//                     <p><strong>${room.type}</strong></p>
//                     <p>${room.bed}</p>
//                     <p>${room.guests}</p>
//                     <button class="${
//                       room.status === "booked"
//                         ? "guest-details"
//                         : "add-guest"
//                     }">${
//       room.status === "booked" ? "Guest Details" : "Add Guest"
//     }</button>
//                 </div>
//             `;
//   });
// }
// function applyFilters() {
//   const statusFilter =
//     document.getElementById("statusFilter").value;
//   const roomTypeFilter =
//     document.getElementById("roomTypeFilter").value;
//   let filteredRooms = rooms;
//   if (statusFilter !== "all") {
//     filteredRooms = filteredRooms.filter(
//       (room) => room.status === statusFilter
//     );
//   }
//   if (roomTypeFilter !== "all") {
//     filteredRooms = filteredRooms.filter(
//       (room) => room.type === roomTypeFilter
//     );
//   }
//   renderRooms(filteredRooms);
// }
// renderRooms(rooms);
