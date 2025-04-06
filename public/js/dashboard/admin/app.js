/*analytics js */

// Export button functionality
// document
//   .getElementById("export-btn")
//   .addEventListener("click", function () {
//     alert(
//       "Exporting data... This would download a CSV or Excel file in a real implementation."
//     );
//   });

// Period select functionality
// document
//   .getElementById("period-select")
//   .addEventListener("change", function () {
//     if (this.value === "custom") {
//       alert(
//         "This would open a date range picker in a real implementation."
//       );
//     } else {
//       // This would update the dashboard data based on the selected period
//       console.log("Period changed to:", this.value);
//     }
//   });

// Trend type select functionality
// document
//   .getElementById("trend-type")
//   .addEventListener("change", function () {
//     // This would update the revenue chart based on the selected trend type
//     console.log("Trend type changed to:", this.value);

//     // Example of how data would change - in a real implementation this would
//     // fetch actual data for the selected period
//     if (this.value === "daily") {
//       revenueChart.data.labels = [
//         "Mon",
//         "Tue",
//         "Wed",
//         "Thu",
//         "Fri",
//         "Sat",
//         "Sun",
//       ];
//       revenueChart.data.datasets[0].data = [
//         4200, 4500, 5100, 3900, 4700, 6200, 5600,
//       ];
//       revenueChart.data.datasets[1].data = [
//         3800, 4100, 4600, 3500, 4200, 5500, 5100,
//       ];
//       revenueChart.update();
//     } else if (this.value === "weekly") {
//       revenueChart.data.labels = [
//         "Week 1",
//         "Week 2",
//         "Week 3",
//         "Week 4",
//       ];
//       revenueChart.data.datasets[0].data = [
//         29450, 34210, 31760, 32072,
//       ];
//       revenueChart.data.datasets[1].data = [
//         24850, 29210, 26760, 27072,
//       ];
//       revenueChart.update();
//     } else if (this.value === "monthly") {
//       revenueChart.data.labels = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//       ];
//       revenueChart.data.datasets[0].data = [
//         85000, 92000, 107000, 94000, 110000, 127492,
//       ];
//       revenueChart.data.datasets[1].data = [
//         78000, 84000, 99000, 89000, 103000, 112000,
//       ];
//       revenueChart.update();
//     }
//   });

/*indexjs*/

// document.addEventListener("DOMContentLoaded", function () {
//   const sidebar = document.getElementById("sidebar");
//   const toggleBtn = document.getElementById("toggle-sidebar");
//   const mobileMenuBtn = document.getElementById("mobile-menu-btn");
//   const main = document.getElementById("main");
//   const linkTexts = document.querySelectorAll(".link-text");

//   // Toggle sidebar
//   toggleBtn.addEventListener("click", function () {
//     sidebar.classList.toggle("sidebar-collapsed");
//     main.classList.toggle("expanded");

//     linkTexts.forEach((text) => {
//       text.style.opacity = sidebar.classList.contains("sidebar-collapsed")
//         ? "0"
//         : "1";
//       text.style.display = sidebar.classList.contains("sidebar-collapsed")
//         ? "none"
//         : "inline";
//     });
//   });

//   // Mobile menu toggle
//   mobileMenuBtn.addEventListener("click", function () {
//     sidebar.classList.toggle("active");
//   });

//   // Close sidebar when clicking outside on mobile
//   document.addEventListener("click", function (event) {
//     const isClickInsideSidebar = sidebar.contains(event.target);
//     const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);

//     if (
//       !isClickInsideSidebar &&
//       !isClickOnMenuBtn &&
//       window.innerWidth <= 480
//     ) {
//       sidebar.classList.remove("active");
//     }
//   });

//   // Responsive handling
//   function handleResize() {
//     if (window.innerWidth <= 768) {
//       sidebar.classList.add("sidebar-collapsed");
//       main.classList.add("expanded");

//       linkTexts.forEach((text) => {
//         text.style.opacity = "0";
//         text.style.display = "none";
//       });
//     } else {
//       sidebar.classList.remove("sidebar-collapsed");
//       main.classList.remove("expanded");

//       linkTexts.forEach((text) => {
//         text.style.opacity = "1";
//         text.style.display = "inline";
//       });
//     }
//   }

//   // Initial check
//   handleResize();

//   // Listen for window resize
//   window.addEventListener("resize", handleResize);
// });

document
  .getElementById("toggle-sidebar")
  .addEventListener("click", function () {
    document
      .getElementById("sidebar")
      .classList.toggle("collapsed");
  });

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggle-sidebar");
  const linkTexts = document.querySelectorAll(".link-text");
  const sidebarLinks = document.querySelectorAll(
    ".sidebar-links a"
  );
  const notificationIcon = document.querySelector(
    ".notification-icon"
  );
  const notificationBadge = document.querySelector(
    ".notification-badge"
  );
  const searchInput = document.querySelector(
    ".search-bar input"
  );

  // Sidebar Toggle Functionality
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");
    updateSidebarTextVisibility();
  });

  // Open Sidebar on Click (if collapsed)
  sidebar.addEventListener("click", function (e) {
    // Prevent expanding if a link is clicked
    if (!e.target.closest("a")) {
      if (sidebar.classList.contains("collapsed")) {
        sidebar.classList.remove("collapsed");
        updateSidebarTextVisibility();
      }
    }
  });

  // Function to update sidebar text visibility
  function updateSidebarTextVisibility() {
    linkTexts.forEach((text) => {
      text.style.opacity = sidebar.classList.contains(
        "collapsed"
      )
        ? "0"
        : "1";
      text.style.display = sidebar.classList.contains(
        "collapsed"
      )
        ? "none"
        : "inline";
    });
  }

  // Ensure navigation works on smaller screens
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 768 &&
        sidebar.classList.contains("collapsed")
      ) {
        // Temporarily expand the sidebar to allow navigation
        sidebar.classList.remove("collapsed");
        updateSidebarTextVisibility();

        // Collapse the sidebar after a short delay
        setTimeout(() => {
          sidebar.classList.add("collapsed");
          updateSidebarTextVisibility();
        }, 500); // Adjust delay as needed
      }
    });
  });

  // Clear Notifications
  // notificationIcon.addEventListener("click", function () {
  //   notificationBadge.textContent = "0";
  //   notificationBadge.style.display = "none";
  // });

  // Search Functionality
  // searchInput.addEventListener("input", function (e) {
  //   const searchTerm = e.target.value.toLowerCase().trim();

  //   // Remove previous highlights
  //   document.querySelectorAll(".highlight").forEach((el) => {
  //     el.classList.remove("highlight");
  //   });

  //   if (searchTerm) {
  //     // Search in sidebar links
  //     sidebarLinks.forEach((link) => {
  //       const linkText = link
  //         .querySelector(".link-text")
  //         .textContent.toLowerCase();
  //       if (linkText.includes(searchTerm)) {
  //         link.classList.add("highlight");
  //         link.scrollIntoView({ behavior: "smooth", block: "center" });
  //       }
  //     });

  //     // Search in dashboard sections
  //     const sections = document.querySelectorAll(".dashboard-content > div");
  //     sections.forEach((section) => {
  //       const sectionTitle = section
  //         .querySelector("h2")
  //         ?.textContent.toLowerCase();
  //       if (sectionTitle && sectionTitle.includes(searchTerm)) {
  //         section.classList.add("highlight");
  //         section.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }
  //     });
  //   }
  // });

  // Responsive Behavior
  function handleResize() {
    if (window.innerWidth <= 768) {
      sidebar.classList.add("collapsed");
      updateSidebarTextVisibility();
    } else {
      sidebar.classList.remove("collapsed");
      updateSidebarTextVisibility();
    }
  }

  // Initial check for responsiveness
  handleResize();

  // Listen for window resize
  window.addEventListener("resize", handleResize);

  // Simulate Dynamic Chart Updates
  const chartBars = document.querySelectorAll(".chart-bar");
  function updateChart() {
    chartBars.forEach((bar) => {
      const randomHeight = Math.floor(Math.random() * 80) + 20; // Random height between 20% and 100%
      bar.style.height = `${randomHeight}%`;
      bar.querySelector(".chart-bar-value").textContent =
        Math.floor((randomHeight / 100) * 300); // Simulate value update
    });
  }

  // Update chart every 5 seconds (for demo purposes)
  setInterval(updateChart, 5000);
});

document
  .getElementById("toggle-sidebar")
  .addEventListener("click", function () {
    document
      .getElementById("sidebar")
      .classList.toggle("collapsed");
  });

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(
    ".search-bar input"
  );

  // Search Functionality
  // searchInput.addEventListener("input", function (e) {
  //   const searchTerm = e.target.value.toLowerCase().trim();

  //   // Remove previous highlights
  //   document.querySelectorAll(".highlight").forEach((el) => {
  //     el.classList.remove("highlight");
  //   });

  //   if (searchTerm) {
  //     // Search in sidebar links
  //     const sidebarLinks = document.querySelectorAll(
  //       ".sidebar-links a"
  //     );
  //     sidebarLinks.forEach((link) => {
  //       const linkText = link
  //         .querySelector(".link-text")
  //         .textContent.toLowerCase();
  //       if (linkText.includes(searchTerm)) {
  //         link.classList.add("highlight");
  //       }
  //     });

  //     // Search in dashboard sections
  //     const sections = document.querySelectorAll(
  //       ".dashboard-content > div"
  //     );
  //     sections.forEach((section) => {
  //       const sectionTitle = section
  //         .querySelector("h2")
  //         ?.textContent.toLowerCase();
  //       if (sectionTitle && sectionTitle.includes(searchTerm)) {
  //         section.classList.add("highlight");
  //         section.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //     });
  //   }
  // });
});
