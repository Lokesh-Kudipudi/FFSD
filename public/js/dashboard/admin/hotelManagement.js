document.addEventListener("DOMContentLoaded", function () {
  // Get search input field
  const searchInput = document.querySelector(
    '.hotel-filters-container input[type="text"]'
  );

  // Get all table rows
  const tableRows = document.querySelectorAll(".hotel-table tbody tr");

  // Function to filter hotels based on search input
  function filterBySearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    tableRows.forEach((row) => {
      const hotelName = row
        .querySelector(".hotel-details span")
        .textContent.toLowerCase();
      const hotelLocation = row
        .querySelector(".hotel-location")
        .textContent.toLowerCase();

      // Show row if it matches the search term
      if (
        hotelName.includes(searchTerm) ||
        hotelLocation.includes(searchTerm) ||
        searchTerm === ""
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  // Attach event listener to search input field
  searchInput.addEventListener("input", filterBySearch);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get location dropdown
  const locationSelect = document.querySelector(
    ".hotel-filters-container select:nth-of-type(1)"
  );

  // Get all table rows
  const tableRows = document.querySelectorAll(".hotel-table tbody tr");

  // Function to filter by location
  function filterByLocation() {
    const selectedLocation = locationSelect.value.toLowerCase();

    tableRows.forEach((row) => {
      const hotelLocation = row
        .querySelector(".hotel-location")
        .textContent.toLowerCase();

      if (selectedLocation === "" || hotelLocation.includes(selectedLocation)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  // Attach event listener to location dropdown
  locationSelect.addEventListener("change", filterByLocation);
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  console.log("hotelManagement.js loaded!");

  // Get references to the Status filter dropdown and Apply Filters button using existing classes
  const statusFilter = document.querySelector(
    ".hotel-filter-group:nth-child(3) .hotel-filter-input"
  );
  const applyFiltersButton = document.querySelector(
    ".hotel-filter-actions .hotel-btn-primary"
  );
  const resetFiltersButton = document.querySelector(
    ".hotel-filter-actions .hotel-btn-outline"
  );

  // Debugging: Log selected elements
  console.log("Status Filter:", statusFilter);
  console.log("Apply Filters Button:", applyFiltersButton);
  console.log("Reset Filters Button:", resetFiltersButton);

  // Add event listener to the Apply Filters button
  applyFiltersButton.addEventListener("click", function () {
    console.log("Apply Filters Button Clicked!");
    filterHotelsByStatus();
  });

  // Add event listener to the Reset Filters button
  resetFiltersButton.addEventListener("click", function () {
    console.log("Reset Filters Button Clicked!");
    resetFilters();
  });

  // Function to filter hotels by status
  function filterHotelsByStatus() {
    const selectedStatus = statusFilter.value.toLowerCase();
    console.log("Selected Status:", selectedStatus);

    const tableRows = document.querySelectorAll(".hotel-table tbody tr");
    console.log("Total Rows:", tableRows.length);

    tableRows.forEach((row) => {
      const statusCell = row.querySelector(".hotel-status-badge");
      const rowStatus = statusCell.textContent.toLowerCase();
      console.log("Row Status:", rowStatus);

      if (selectedStatus === "" || rowStatus === selectedStatus) {
        row.style.display = "";
        console.log("Row Shown:", row);
      } else {
        row.style.display = "none";
        console.log("Row Hidden:", row);
      }
    });
  }

  // Function to reset filters
  function resetFilters() {
    // Reset the dropdown to "All Status"
    statusFilter.value = "";

    // Show all rows
    const tableRows = document.querySelectorAll(".hotel-table tbody tr");
    tableRows.forEach((row) => {
      row.style.display = "";
    });

    console.log("Filters Reset!");
  }
});
