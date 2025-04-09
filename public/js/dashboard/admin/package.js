// // Sidebar toggle functionality
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleButton = document.getElementById("toggle-sidebar");
//   const sidebar = document.getElementById("sidebar");
//   const mainContent = document.querySelector(".main");

//   if (!toggleButton || !sidebar) {
//     console.error("Sidebar elements not found");
//     return;
//   }

//   // Function to toggle sidebar
//   toggleButton.addEventListener("click", function () {
//     sidebar.classList.toggle("collapsed");
//     mainContent.classList.toggle("expanded");

//     // Log to verify the click handler is working
//     console.log("Sidebar toggle clicked");
//   });

//   // Check if sidebar should be collapsed by default on small screens
//   function checkScreenSize() {
//     if (window.innerWidth < 768) {
//       sidebar.classList.add("collapsed");
//       mainContent.classList.add("expanded");
//     } else {
//       sidebar.classList.remove("collapsed");
//       mainContent.classList.remove("expanded");
//     }
//   }

//   // Run on page load
//   checkScreenSize();

//   // Run on window resize
//   window.addEventListener("resize", checkScreenSize);

//   console.log("Responsive sidebar script loaded");
// });

// // Add this to your package.js file
