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
});
