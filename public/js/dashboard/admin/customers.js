const customerModal = document.getElementById("customerModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const viewCustomerBtns =
  document.querySelectorAll(".view-customer");

viewCustomerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    customerModal.classList.add("show");
  });
});

closeModalBtn.addEventListener("click", () => {
  customerModal.classList.remove("show");
});

window.addEventListener("click", (event) => {
  if (event.target === customerModal) {
    customerModal.classList.remove("show");
  }
});

const tabs = document.querySelectorAll(".tab");
const tabPanes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    tab.classList.add("active");
    document
      .getElementById(tab.getAttribute("data-tab"))
      .classList.add("active");
  });
});

// Get references to the status filter and customers table
const statusFilter = document.querySelector(
  ".filter-group:nth-child(1) .filter-input"
);
const customerRows = document.querySelectorAll(
  ".customers-table tbody tr"
);

// Add event listener to the status filter
statusFilter.addEventListener("change", function () {
  const selectedStatus = this.value.toLowerCase();

  // Loop through each customer row
  customerRows.forEach((row) => {
    // Get the status cell text (removing whitespace)
    const statusCell = row.querySelector(".status-badge");
    const rowStatus = statusCell.textContent
      .trim()
      .toLowerCase();

    // Show/hide row based on filter selection
    if (selectedStatus === "" || rowStatus === selectedStatus) {
      row.style.display = ""; // Show row
    } else {
      row.style.display = "none"; // Hide row
    }
  });

  // Update the pagination info based on visible rows
  updatePaginationInfo();
});

// Function to update pagination info based on visible rows
function updatePaginationInfo() {
  const visibleRows = document.querySelectorAll(
    '.customers-table tbody tr:not([style*="display: none"])'
  );
  const pageInfo = document.querySelector(".page-info");

  if (pageInfo) {
    pageInfo.textContent = `Showing 1 to ${visibleRows.length} of ${visibleRows.length} entries`;
  }
}

// Responsive JavaScript solution
document.addEventListener("DOMContentLoaded", function () {
  // Create a style element to add dynamic CSS
  const styleElement = document.createElement("style");
  document.head.appendChild(styleElement);

  // Function to update styles based on screen width
  function updateResponsiveStyles() {
    const width = window.innerWidth;
    let css = "";

    // Base styles for all responsive sizes
    css += `
      /* Dynamic responsive styles */
      @media (max-width: 1200px) {
        .filters-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 992px) {
        .page-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }
        
        .action-buttons {
          width: 100%;
          justify-content: space-between;
        }
        
        .customers-table th, 
        .customers-table td {
          padding: 12px 8px;
        }
        
        .sidebar {
          position: fixed;
          left: -250px;
          top: 0;
          height: 100vh;
          transition: left 0.3s ease;
          z-index: 1000;
          box-shadow: none;
        }
        
        .sidebar.open {
          left: 0;
          box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .main {
          margin-left: 0 !important;
          width: 100%;
        }
        
        .toggle-btn {
          display: flex !important;
          align-items: center;
          justify-content: center;
        }
        
        .modal-content {
          width: 95%;
          max-width: 650px;
        }
        
        .customer-profile {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .customer-profile-stats {
          justify-content: center;
        }
      }
      
      @media (max-width: 768px) {
        .filters-grid {
          grid-template-columns: 1fr;
        }
        
        .filter-actions {
          flex-direction: column;
          gap: 10px;
        }
        
        .filter-actions .btn {
          width: 100%;
          justify-content: center;
        }
        
        .pagination {
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
        }
        
        .page-controls {
          width: 100%;
          justify-content: center;
        }
        
        .modal {
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
        }
        
        .travel-details {
          flex-direction: column;
          gap: 8px;
        }
      }
      
      @media (max-width: 576px) {
        .btn {
          padding: 8px 12px;
          font-size: 0.8rem;
        }
        
        .table-responsive-mobile {
          display: block;
        }
        
        .table-responsive-mobile thead {
          display: none;
        }
        
        .table-responsive-mobile tbody, 
        .table-responsive-mobile tr {
          display: block;
          width: 100%;
        }
        
        .table-responsive-mobile tr {
          margin-bottom: 15px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          border-radius: 8px;
          padding: 10px;
          background-color: #fff;
        }
        
        .table-responsive-mobile td {
          display: flex;
          text-align: right;
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .table-responsive-mobile td:last-child {
          border-bottom: none;
        }
        
        .table-responsive-mobile td:before {
          content: attr(data-label);
          font-weight: 600;
          margin-right: auto;
          text-align: left;
        }
        
        .avatar-cell {
          justify-content: flex-end;
        }
        
        .customer-profile-avatar {
          width: 80px;
          height: 80px;
          font-size: 2rem;
        }
        
        .details-row {
          flex-direction: column;
          gap: 5px;
        }
        
        .details-label {
          width: 100%;
        }
      }
      
      @media (max-width: 992px) {
        .modal {
          align-items: center;
          justify-content: center;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transform: none;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
      
      @media (min-width: 993px) {
        .toggle-btn {
          display: none !important;
        }
      }
    `;

    // Apply the styles
    styleElement.textContent = css;

    // Apply table responsive class at small screens
    const customersTable = document.querySelector(
      ".customers-table"
    );
    if (customersTable) {
      if (width <= 576) {
        customersTable.classList.add("table-responsive-mobile");
      } else {
        customersTable.classList.remove(
          "table-responsive-mobile"
        );
      }
    }
  }

  // Add data attributes to table cells for mobile view
  function addTableDataAttributes() {
    const table = document.querySelector(".customers-table");
    if (!table) return;

    const headerCells = table.querySelectorAll("thead th");
    const headerTexts = Array.from(headerCells).map((cell) =>
      cell.textContent.trim()
    );

    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      cells.forEach((cell, index) => {
        if (headerTexts[index]) {
          cell.setAttribute("data-label", headerTexts[index]);
        }
      });
    });
  }

  // Setup sidebar toggle functionality
  function setupSidebarToggle() {
    const toggleBtn = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("open");
      });

      // Close sidebar when clicking outside
      // document.addEventListener("click", function (event) {
      //   const isMobile = window.innerWidth < 992;
      //   if (
      //     isMobile &&
      //     !sidebar.contains(event.target) &&
      //     event.target !== toggleBtn
      //   ) {
      //     sidebar.classList.remove("open");
      //   }
      // });
    }
  }

  // Adjust modal position based on screen size
  function setupModalResponsiveness() {
    const modal = document.getElementById("customerModal");
    if (!modal) return;

    function updateModalPosition() {
      if (window.innerWidth <= 992) {
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.right = "0";
        modal.style.bottom = "0";
        modal.style.transform = "none";
      } else {
        modal.style.position = "absolute";
        modal.style.top = "50%";
        modal.style.left = "35%";
        modal.style.right = "";
        modal.style.bottom = "";
        modal.style.transform = "translateY(-50%)";
      }
    }

    // Initial position
    updateModalPosition();

    // Update on resize
    window.addEventListener("resize", updateModalPosition);
  }

  // Run all setup functions
  addTableDataAttributes();
  setupSidebarToggle();
  setupModalResponsiveness();
  updateResponsiveStyles();

  // Update styles when window is resized
  window.addEventListener("resize", updateResponsiveStyles);
});

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the membership filter dropdown - using more specific selector
  const membershipFilter = document.querySelector(
    ".filter-group .filter-input"
  );

  if (!membershipFilter) {
    console.error(
      "Membership filter element not found. Check your HTML structure."
    );
    return;
  }

  // Add event listener to the membership filter
  membershipFilter.addEventListener("change", function () {
    console.log("Filter changed to:", this.value);
    filterCustomersByMembership(this.value);
  });

  // Function to filter customers based on membership type
  function filterCustomersByMembership(membershipType) {
    console.log("Filtering by membership:", membershipType);

    // Get all customer elements - adjust this selector to match your actual customer elements
    const customerElements = document.querySelectorAll(
      "[data-membership]"
    ); // Find elements with data-membership attribute

    console.log(
      "Found",
      customerElements.length,
      "customer elements"
    );

    if (customerElements.length === 0) {
      console.warn(
        "No customer elements found. Check your customer element selector."
      );
    }

    // Loop through all customer elements
    customerElements.forEach((customerElement) => {
      // Get the membership value from the customer element
      const customerMembership = customerElement
        .getAttribute("data-membership")
        .toLowerCase();

      console.log(
        "Customer membership:",
        customerMembership,
        "Selected filter:",
        membershipType
      );

      if (
        membershipType === "" ||
        customerMembership === membershipType.toLowerCase()
      ) {
        // Show the customer if "All Memberships" is selected or if membership matches
        customerElement.style.display = "";
        console.log("Showing customer:", customerElement);
      } else {
        // Hide customers that don't match the selected membership
        customerElement.style.display = "none";
        console.log("Hiding customer:", customerElement);
      }
    });
  }

  // Initialize the filter on page load
  console.log(
    "Initializing filter with value:",
    membershipFilter.value
  );
  filterCustomersByMembership(membershipFilter.value);
});

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to filter elements
  const membershipFilter = document.querySelector(
    ".filter-group:nth-child(2) .filter-input"
  );
  const dateFilter = document.querySelector(
    ".filter-group:nth-child(3) .filter-input"
  );
  const countryFilter = document.querySelector(
    ".filter-group:nth-child(4) .filter-input"
  );
  const statusFilter = document.querySelector(
    ".filter-group:nth-child(1) .filter-input"
  );

  // Get references to filter action buttons
  const applyFiltersBtn = document.querySelector(
    ".filter-actions .btn-primary"
  );
  const resetFiltersBtn = document.querySelector(
    ".filter-actions .btn-outline"
  );

  // Add event listeners to buttons
  applyFiltersBtn.addEventListener("click", applyFilters);
  resetFiltersBtn.addEventListener("click", resetFilters);

  // Function to apply all filters
  function applyFilters() {
    const membershipValue = membershipFilter.value;
    const dateValue = dateFilter.value;
    const countryValue = countryFilter.value;
    const statusValue = statusFilter.value;

    // Get all customer rows
    const customerRows = document.querySelectorAll(
      ".customers-table tbody tr"
    );

    // Loop through each customer row
    customerRows.forEach((row) => {
      let showRow = true;

      // Filter by membership
      if (membershipValue !== "") {
        const membershipCell = row.querySelector(
          "td:nth-child(4) .tier-badge"
        );
        const membershipText = membershipCell.textContent
          .trim()
          .toLowerCase();
        if (membershipText !== membershipValue.toLowerCase()) {
          showRow = false;
        }
      }

      // Filter by status
      if (statusValue !== "" && showRow) {
        const statusCell = row.querySelector(
          "td:nth-child(5) .status-badge"
        );
        const statusText = statusCell.textContent
          .trim()
          .toLowerCase();
        if (statusText !== statusValue.toLowerCase()) {
          showRow = false;
        }
      }

      // Improved date filter code
      if (dateValue !== "" && showRow) {
        const lastTravelCell = row.querySelector(
          "td:nth-child(6)"
        );
        const lastTravelText = lastTravelCell.textContent.trim(); // "Mar 1, 2025"

        // Convert display date format to a proper date object
        const lastTravelParts = lastTravelText.split(", ");
        const yearPart = lastTravelParts[1]; // "2025"
        const monthDayPart = lastTravelParts[0]; // "Mar 1"

        // Create a proper date string that JS can parse reliably
        const lastTravelDateStr = `${monthDayPart}, ${yearPart}`; // "Mar 1, 2025"
        const lastTravelDate = new Date(lastTravelDateStr);

        const filterDate = new Date(dateValue);

        // Compare year, month, and day instead of full dates
        const sameYear =
          lastTravelDate.getFullYear() ===
          filterDate.getFullYear();
        const sameMonth =
          lastTravelDate.getMonth() === filterDate.getMonth();
        const sameDay =
          lastTravelDate.getDate() === filterDate.getDate();

        if (!(sameYear && sameMonth && sameDay)) {
          showRow = false;
        }
      }
      // Filter by country (would need to add country data to the table rows)
      // This is a placeholder - you'll need to add country data to your HTML
      if (countryValue !== "" && showRow) {
        // For demonstration, we'll assume the country is stored in a data attribute
        const country = row.getAttribute("data-country");
        if (country && country !== countryValue) {
          showRow = false;
        }
      }

      // Show or hide the row based on filter results
      row.style.display = showRow ? "" : "none";
    });

    // Update the "Showing X entries" text
    updatePaginationInfo();
  }

  // Function to reset all filters
  function resetFilters() {
    // Reset all filter values
    membershipFilter.value = "";
    dateFilter.value = "";
    countryFilter.value = "";
    statusFilter.value = "";

    // Show all rows
    const customerRows = document.querySelectorAll(
      ".customers-table tbody tr"
    );
    customerRows.forEach((row) => {
      row.style.display = "";
    });

    // Update the "Showing X entries" text
    updatePaginationInfo();
  }

  // Function to update pagination info
  function updatePaginationInfo() {
    const totalRows = document.querySelectorAll(
      ".customers-table tbody tr"
    ).length;
    const visibleRows = document.querySelectorAll(
      '.customers-table tbody tr[style=""]'
    ).length;
    const pageInfo = document.querySelector(".page-info");

    if (pageInfo) {
      pageInfo.textContent = `Showing 1 to ${visibleRows} of ${totalRows} entries`;
    }
  }

  // For convenience, add change event listeners to each filter for instant filtering
  membershipFilter.addEventListener("change", function () {
    // Apply only membership filter
    const membershipValue = this.value;
    const customerRows = document.querySelectorAll(
      ".customers-table tbody tr"
    );

    customerRows.forEach((row) => {
      if (membershipValue === "") {
        // Show all rows if no membership filter
        row.style.display = "";
      } else {
        const membershipCell = row.querySelector(
          "td:nth-child(4) .tier-badge"
        );
        const membershipText = membershipCell.textContent
          .trim()
          .toLowerCase();

        if (membershipText === membershipValue.toLowerCase()) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      }
    });

    updatePaginationInfo();
  });

  // Optionally add similar change event listeners for other filters
  dateFilter.addEventListener("change", function () {
    applyFilters(); // Reapply all filters when date changes
  });

  countryFilter.addEventListener("change", function () {
    applyFilters(); // Reapply all filters when country changes
  });

  statusFilter.addEventListener("change", function () {
    applyFilters(); // Reapply all filters when status changes
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all view customer buttons
  const viewButtons =
    document.querySelectorAll(".view-customer");
  const modal = document.getElementById("customerModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Add click event to each view button
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get the current row
      const row = this.closest("tr");

      // Extract customer information from the row
      const customerName =
        row.querySelector(".customer-name").textContent;
      const customerEmail = row.querySelector(
        "td:nth-child(2)"
      ).textContent;
      const customerPhone = row.querySelector(
        "td:nth-child(3)"
      ).textContent;
      const customerMembership =
        row.querySelector(".tier-badge").textContent;
      const lastTravel = row.querySelector(
        "td:nth-child(6)"
      ).textContent;
      const totalBookings = row.querySelector(
        "td:nth-child(7)"
      ).textContent;
      const amountSpent = row.querySelector(
        "td:nth-child(8)"
      ).textContent;

      // Get customer initials for avatar
      const initials = customerName
        .split(" ")
        .map((name) => name[0])
        .join("");

      // Update modal with customer information
      modal.querySelector(
        ".customer-profile-avatar"
      ).textContent = initials;
      modal.querySelector(".customer-profile-name").textContent =
        customerName;
      modal.querySelector(
        ".customer-profile-email"
      ).textContent = customerEmail;

      // Update customer stats
      const statValues = modal.querySelectorAll(
        ".customer-stat-value"
      );
      statValues[0].textContent = totalBookings;
      statValues[1].textContent = amountSpent;
      statValues[2].textContent = customerMembership;

      // Update profile tab details
      const detailsValues =
        modal.querySelectorAll(".details-value");
      detailsValues[0].textContent = customerName;
      detailsValues[1].textContent = customerEmail;
      detailsValues[2].textContent = customerPhone;

      // For the address, we don't have this information in the table
      // So we'll keep it as a placeholder or set to "Not available"
      // detailsValues[3].textContent = "Not available";

      // Show the modal
      modal.style.display = "flex";
    });
  });

  // Close modal when clicking the close button
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Tab functionality in the modal
  const tabs = document.querySelectorAll(".tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and panes
      tabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      // Add active class to current tab
      this.classList.add("active");

      // Show corresponding tab pane
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all view and edit buttons
  const viewButtons = document.querySelectorAll(
    ".action-btn.view-customer"
  );
  const editButtons = document.querySelectorAll(
    ".action-btn:nth-child(2)"
  ); // Edit buttons
  const modal = document.getElementById("customerModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Track current mode and customer row
  let isEditMode = false;
  let currentRow = null;

  // Function to fill modal with customer data
  function fillModalWithCustomerData(row, editMode = false) {
    // Store current row for potential updates
    currentRow = row;
    isEditMode = editMode;

    // Extract customer information from the row
    const customerName =
      row.querySelector(".customer-name").textContent;
    const customerEmail = row.querySelector(
      "td:nth-child(2)"
    ).textContent;
    const customerPhone = row.querySelector(
      "td:nth-child(3)"
    ).textContent;
    const customerMembership =
      row.querySelector(".tier-badge").textContent;
    const lastTravel = row.querySelector(
      "td:nth-child(6)"
    ).textContent;
    const totalBookings = row.querySelector(
      "td:nth-child(7)"
    ).textContent;
    const amountSpent = row.querySelector(
      "td:nth-child(8)"
    ).textContent;

    // Get customer initials for avatar
    const initials = customerName
      .split(" ")
      .map((name) => name[0])
      .join("");

    // Update modal title based on mode
    modal.querySelector(".modal-title").textContent = editMode
      ? "Edit Customer"
      : "Customer Details";

    // Update modal with customer information
    modal.querySelector(".customer-profile-avatar").textContent =
      initials;

    // Update profile fields based on mode (editable or not)
    if (editMode) {
      // Create editable fields
      modal.querySelector(
        ".customer-profile-name"
      ).innerHTML = `<input type="text" class="edit-input" id="edit-name" value="${customerName}">`;
      modal.querySelector(
        ".customer-profile-email"
      ).innerHTML = `<input type="email" class="edit-input" id="edit-email" value="${customerEmail}">`;

      // Update customer stats (keep as text but could be made editable)
      const statValues = modal.querySelectorAll(
        ".customer-stat-value"
      );
      statValues[0].textContent = totalBookings;
      statValues[1].textContent = amountSpent;
      statValues[2].innerHTML = `
        <select id="edit-membership" class="edit-input">
          <option value="Platinum" ${
            customerMembership === "Platinum" ? "selected" : ""
          }>Platinum</option>
          <option value="Gold" ${
            customerMembership === "Gold" ? "selected" : ""
          }>Gold</option>
          <option value="Silver" ${
            customerMembership === "Silver" ? "selected" : ""
          }>Silver</option>
          <option value="Bronze" ${
            customerMembership === "Bronze" ? "selected" : ""
          }>Bronze</option>
        </select>
      `;

      // Update profile tab details
      const detailsValues =
        modal.querySelectorAll(".details-value");
      detailsValues[0].innerHTML = `<input type="text" class="edit-input" id="edit-fullname" value="${customerName}">`;
      detailsValues[1].innerHTML = `<input type="email" class="edit-input" id="edit-profile-email" value="${customerEmail}">`;
      detailsValues[2].innerHTML = `<input type="tel" class="edit-input" id="edit-phone" value="${customerPhone}">`;
      detailsValues[3].innerHTML = `<input type="text" class="edit-input" id="edit-address" value="${detailsValues[3].textContent}">`;

      // Add save button to modal
      if (!document.getElementById("saveChangesBtn")) {
        const saveBtn = document.createElement("button");
        saveBtn.className = "btn btn-primary";
        saveBtn.id = "saveChangesBtn";
        saveBtn.textContent = "Save Changes";
        modal
          .querySelector(".modal-header")
          .appendChild(saveBtn);

        // Add event listener to save button
        saveBtn.addEventListener("click", saveCustomerChanges);
      } else {
        document.getElementById("saveChangesBtn").style.display =
          "block";
      }
    } else {
      // View mode - display as text
      modal.querySelector(".customer-profile-name").textContent =
        customerName;
      modal.querySelector(
        ".customer-profile-email"
      ).textContent = customerEmail;

      // Update customer stats
      const statValues = modal.querySelectorAll(
        ".customer-stat-value"
      );
      statValues[0].textContent = totalBookings;
      statValues[1].textContent = amountSpent;
      statValues[2].textContent = customerMembership;

      // Update profile tab details
      const detailsValues =
        modal.querySelectorAll(".details-value");
      detailsValues[0].textContent = customerName;
      detailsValues[1].textContent = customerEmail;
      detailsValues[2].textContent = customerPhone;

      // Hide save button if it exists
      if (document.getElementById("saveChangesBtn")) {
        document.getElementById("saveChangesBtn").style.display =
          "none";
      }
    }

    // Show the modal
    modal.style.display = "flex";
  }

  // Function to save changes
  function saveCustomerChanges() {
    if (!currentRow) return;

    // Get edited values
    const editedName =
      document.getElementById("edit-name").value;
    const editedEmail =
      document.getElementById("edit-email").value;
    const editedPhone =
      document.getElementById("edit-phone").value;
    const editedMembership = document.getElementById(
      "edit-membership"
    ).value;

    // Update the row in the table
    currentRow.querySelector(".customer-name").textContent =
      editedName;
    currentRow.querySelector("td:nth-child(2)").textContent =
      editedEmail;
    currentRow.querySelector("td:nth-child(3)").textContent =
      editedPhone;

    // Update membership with the correct class
    const membershipBadge =
      currentRow.querySelector(".tier-badge");
    membershipBadge.textContent = editedMembership;

    // Remove all tier classes and add the correct one
    membershipBadge.classList.remove(
      "tier-platinum",
      "tier-gold",
      "tier-silver",
      "tier-bronze"
    );
    membershipBadge.classList.add(
      `tier-${editedMembership.toLowerCase()}`
    );

    // Improved date filter code
    if (dateValue !== "" && showRow) {
      const lastTravelCell = row.querySelector(
        "td:nth-child(6)"
      );
      const lastTravelText = lastTravelCell.textContent.trim(); // "Mar 1, 2025"

      // Convert display date format to a proper date object
      const lastTravelParts = lastTravelText.split(", ");
      const yearPart = lastTravelParts[1]; // "2025"
      const monthDayPart = lastTravelParts[0]; // "Mar 1"

      // Create a proper date string that JS can parse reliably
      const lastTravelDateStr = `${monthDayPart}, ${yearPart}`; // "Mar 1, 2025"
      const lastTravelDate = new Date(lastTravelDateStr);

      const filterDate = new Date(dateValue);

      // Compare year, month, and day instead of full dates
      const sameYear =
        lastTravelDate.getFullYear() ===
        filterDate.getFullYear();
      const sameMonth =
        lastTravelDate.getMonth() === filterDate.getMonth();
      const sameDay =
        lastTravelDate.getDate() === filterDate.getDate();

      if (!(sameYear && sameMonth && sameDay)) {
        showRow = false;
      }
    }
    // Update initials in avatar if name changed
    const initials = editedName
      .split(" ")
      .map((name) => name[0])
      .join("");
    currentRow.querySelector(".customer-avatar").textContent =
      initials;

    // Close the modal or switch to view mode
    modal.style.display = "none";

    // Optional: Show a success message
    alert("Customer information updated successfully!");
  }

  // Add click event to each view button
  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.closest("tr");
      fillModalWithCustomerData(row, false);
    });
  });

  // Add click event to each edit button
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.closest("tr");
      fillModalWithCustomerData(row, true);
    });
  });

  // Close modal when clicking the close button
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Tab functionality in the modal
  const tabs = document.querySelectorAll(".tab");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and panes
      tabs.forEach((t) => t.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));

      // Add active class to current tab
      this.classList.add("active");

      // Show corresponding tab pane
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
});

// Select all delete buttons
document.addEventListener("DOMContentLoaded", function () {
  // Add event listeners to all delete buttons
  const deleteButtons = document.querySelectorAll(
    ".action-btn.delete"
  );

  deleteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the customer row
      const row = this.closest("tr");

      // Get customer name for confirmation message
      const customerName =
        row.querySelector(".customer-name").textContent;

      // Show confirmation dialog
      if (
        confirm(
          `Are you sure you want to delete customer "${customerName}"?`
        )
      ) {
        // Visual feedback - fade out effect
        row.style.transition = "opacity 0.5s";
        row.style.opacity = "0";

        // Remove the row after animation completes
        setTimeout(() => {
          row.remove();

          // Update the page info count
          updateCustomerCount();

          // Show success notification
          showNotification(
            `Customer "${customerName}" has been deleted successfully.`
          );
        }, 500);

        // Here you would typically make an API call to delete the customer from your database
        // Example:
        // deleteCustomerFromDatabase(customerId);
      }
    });
  });

  // Function to update customer count in pagination area
  function updateCustomerCount() {
    const totalRows = document.querySelectorAll(
      ".customers-table tbody tr"
    ).length;
    const pageInfo = document.querySelector(".page-info");

    if (pageInfo) {
      // Extract the total number from the existing text
      const currentText = pageInfo.textContent;
      const totalMatch = currentText.match(/of (\d+) entries/);

      if (totalMatch && totalMatch[1]) {
        const totalEntries = parseInt(totalMatch[1]) - 1;
        pageInfo.textContent = `Showing 1 to ${totalRows} of ${totalEntries} entries`;
      }
    }
  }

  // Function to show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "delete-notification";
    notification.innerHTML = `
          <i class="fas fa-check-circle"></i>
          <span>${message}</span>
      `;

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px 24px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: "9999",
      opacity: "0",
      transition: "opacity 0.3s ease-in-out",
    });

    // Add to the document
    document.body.appendChild(notification);

    // Fade in
    setTimeout(() => {
      notification.style.opacity = "1";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
});

// Add Customer Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Get the "Add New Customer" button
  const addCustomerBtn = document.querySelector(
    ".btn.btn-primary i.fas.fa-plus"
  ).parentElement;

  // Get the customer modal (we'll reuse the existing modal)
  const customerModal = document.getElementById("customerModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Create a new modal specific for adding customers
  const addCustomerModal = createAddCustomerModal();
  document.body.appendChild(addCustomerModal);

  // Add event listener to the "Add New Customer" button
  addCustomerBtn.addEventListener("click", function () {
    // Show the add customer modal
    addCustomerModal.style.display = "flex";
  });

  // Close modal when clicking the close button
  addCustomerModal
    .querySelector(".modal-close")
    .addEventListener("click", function () {
      addCustomerModal.style.display = "none";
      // Reset the form
      addCustomerModal.querySelector("form").reset();
    });

  // Close modal when clicking outside the modal content
  addCustomerModal.addEventListener("click", function (e) {
    if (e.target === addCustomerModal) {
      addCustomerModal.style.display = "none";
      // Reset the form
      addCustomerModal.querySelector("form").reset();
    }
  });

  // Handle form submission
  addCustomerModal
    .querySelector("form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const customerData = {
        name: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        membership: formData.get("membership"),
        status: formData.get("status"),
      };

      // Add new customer to the table
      addCustomerToTable(customerData);

      // Close modal and reset form
      addCustomerModal.style.display = "none";
      this.reset();

      // Show success notification
      showNotification(
        `Customer "${customerData.name}" has been added successfully.`
      );
    });

  // Function to create Add Customer Modal
  function createAddCustomerModal() {
    const modalDiv = document.createElement("div");
    modalDiv.className = "modal";
    modalDiv.id = "addCustomerModal";

    modalDiv.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Add New Customer</h2>
                    <button class="modal-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="addCustomerForm">
                        <div class="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" required>
                        </div>
                        <div class="form-group">
                            <label for="membership">Membership</label>
                            <select id="membership" name="membership" required>
                                <option value="Platinum">Platinum</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Bronze">Bronze</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="status">Status</label>
                            <select id="status" name="status" required>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div class="form-actions">
                            <button type="button" class="btn btn-outline cancel-btn">Cancel</button>
                            <button type="submit" class="btn btn-primary">Add Customer</button>
                        </div>
                    </form>
                </div>
            </div>
        `;

    return modalDiv;
  }

  // Function to add customer to the table
  function addCustomerToTable(customerData) {
    const tableBody = document.querySelector(
      ".customers-table tbody"
    );

    // Create new row
    const newRow = document.createElement("tr");

    // Get initials for avatar
    const initials = getInitials(customerData.name);

    // Determine membership class
    const membershipClass = `tier-${customerData.membership.toLowerCase()}`;

    // Determine status class
    const statusClass = `status-${customerData.status.toLowerCase()}`;

    // Set the HTML for the new row
    newRow.innerHTML = `
            <td>
                <div class="avatar-cell">
                    <div class="customer-avatar">${initials}</div>
                    <div class="customer-details">
                        <span class="customer-name">${customerData.name}</span>
                    </div>
                </div>
            </td>
            <td>${customerData.email}</td>
            <td>${customerData.phone}</td>
            <td>
                <span class="tier-badge ${membershipClass}">${customerData.membership}</span>
            </td>
            <td>
                <span class="status-badge ${statusClass}">${customerData.status}</span>
            </td>
            <td>Not traveled yet</td>
            <td>0</td>
            <td>$0</td>
            <td class="action-cell">
                <button class="action-btn view-customer" data-id="new">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="action-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

    // Add event listener to the new delete button
    const deleteButton = newRow.querySelector(
      ".action-btn.delete"
    );
    deleteButton.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        confirm(
          `Are you sure you want to delete customer "${customerData.name}"?`
        )
      ) {
        // Visual feedback - fade out effect
        newRow.style.transition = "opacity 0.5s";
        newRow.style.opacity = "0";

        // Remove the row after animation completes
        setTimeout(() => {
          newRow.remove();
          updateCustomerCount();
          showNotification(
            `Customer "${customerData.name}" has been deleted successfully.`
          );
        }, 500);
      }
    });

    // Add the new row to the table
    tableBody.insertBefore(newRow, tableBody.firstChild);

    // Update customer count
    updateCustomerCount();
  }

  // Helper function to get initials from name
  function getInitials(name) {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
  }

  // Function to update customer count in pagination area
  function updateCustomerCount() {
    const totalRows = document.querySelectorAll(
      ".customers-table tbody tr"
    ).length;
    const pageInfo = document.querySelector(".page-info");

    if (pageInfo) {
      // Extract the total number from the existing text
      const currentText = pageInfo.textContent;
      const totalMatch = currentText.match(/of (\d+) entries/);

      if (totalMatch && totalMatch[1]) {
        const totalEntries = parseInt(totalMatch[1]);
        pageInfo.textContent = `Showing 1 to ${totalRows} of ${
          totalEntries + 1
        } entries`;
      }
    }
  }

  // Function to show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "12px 24px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: "9999",
      opacity: "0",
      transition: "opacity 0.3s ease-in-out",
    });

    // Add to the document
    document.body.appendChild(notification);

    // Fade in
    setTimeout(() => {
      notification.style.opacity = "1";
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }
});

// Add this code to ensure modal stays in view

document.addEventListener("DOMContentLoaded", function () {
  // Function to check if modal is positioned correctly
  function ensureModalVisibility() {
    const addCustomerModal = document.getElementById(
      "addCustomerModal"
    );
    if (!addCustomerModal) return;

    const modalContent =
      addCustomerModal.querySelector(".modal-content");

    // Only proceed if modal is visible
    if (addCustomerModal.style.display === "flex") {
      // Get viewport dimensions
      const viewportHeight = window.innerHeight;

      // Get modal dimensions
      const modalRect = modalContent.getBoundingClientRect();
      const modalHeight = modalRect.height;

      // If modal is taller than viewport, adjust scrolling behavior
      if (modalHeight > viewportHeight * 0.9) {
        // Ensure the modal starts at the top of the screen with some padding
        addCustomerModal.scrollTop = 0;
      }
    }
  }

  // Add event listener to reposition modal when shown
  const addCustomerBtn = document.querySelector(
    ".btn.btn-primary i.fas.fa-plus"
  )?.parentElement;

  if (addCustomerBtn) {
    addCustomerBtn.addEventListener("click", function () {
      // Wait a tiny bit for modal to be display:flex before positioning
      setTimeout(ensureModalVisibility, 10);
    });
  }

  // Also check on window resize
  window.addEventListener("resize", ensureModalVisibility);
});
