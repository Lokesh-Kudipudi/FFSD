let currIndex = 0;
const totalCards = document.querySelectorAll(".card1").length;
const visibleCards = 5;
const cardWidth =
  document.querySelector(".card1").offsetWidth + 10; // card width + margin
const container = document.getElementById("card-container");

document
  .getElementById("nextBtn")
  .addEventListener("click", () => {
    if (currIndex < totalCards - visibleCards) {
      currIndex++;
      container.style.transform = `translateX(-${
        currIndex * cardWidth
      }px)`;
    }
  });

document
  .getElementById("prevBtn")
  .addEventListener("click", () => {
    if (currIndex > 0) {
      currIndex--;
      container.style.transform = `translateX(-${
        currIndex * cardWidth
      }px)`;
    }
  });

// document.addEventListener("DOMContentLoaded", function () {
//   const hotelCardsContainer =
//     document.querySelector(".hotel-cards");
//   const leftArrow = document.getElementById("leftArrow");
//   const rightArrow = document.getElementById("rightArrow");

//   const hotels = [
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "JW Marriott Mumbai Sahar",
//       location: "Mumbai",
//       rating: "⭐ 9.2 Superb (927 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "JW Marriott Mumbai Juhu",
//       location: "Juhu",
//       rating: "⭐ 8.8 Fabulous (886 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "The Leela Mumbai",
//       location: "Andheri",
//       rating: "⭐ 9.2 Superb (1,003 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "SoBar",
//       location: "Mumbai",
//       rating: "⭐ 9.1 Excellent (950 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//     {
//       image:
//         "https://imgs.search.brave.com/79Jv16CuXlIx0SLUgUvvGdNtecF__awMDcfauKRE8MY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zml2ZXN0YXJhbGxp/YW5jZS5jb20vZmls/ZXMvZml2ZXN0YXJh/bGxpYW5jZS5jb20v/ZmllbGQvaW1hZ2Uv/bm9kZXMvMjAxOC80/NjA0Ny8wX0VYVEVS/SU9SLVhMLmpwZw",
//       name: "Trident Bandra Kurla Mumbai",
//       location: "Bandra Kurla Complex",
//       rating: "⭐ 9.2 Superb (1,000 reviews)",
//     },
//   ];

//   let currentIndex = 0;
//   const cardsPerPage = 4;

//   function renderCards() {
//     hotelCardsContainer.innerHTML = "";
//     const visibleHotels = hotels.slice(
//       currentIndex,
//       currentIndex + cardsPerPage
//     );

//     visibleHotels.forEach((hotel) => {
//       const card = document.createElement("div");
//       card.classList.add("card");

//       card.innerHTML = `
//         <img src="${hotel.image}" alt="${hotel.name}">
//         <h3>${hotel.name}</h3>
//         <p>${hotel.location}</p>
//         <span class="rating">${hotel.rating}</span>
//       `;

//       hotelCardsContainer.appendChild(card);
//     });
//   }

//   leftArrow.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       currentIndex -= cardsPerPage;
//       renderCards();
//     }
//   });

//   rightArrow.addEventListener("click", function () {
//     if (currentIndex < hotels.length - cardsPerPage) {
//       currentIndex += cardsPerPage;
//       renderCards();
//     }
//   });

//   // Initial render
//   renderCards();
// });

document.addEventListener("DOMContentLoaded", function () {
  // Load filter state from URL on page load
  loadFilterState();
  
  // Add event listeners to filter checkboxes to update count
  const filterCheckboxes = document.querySelectorAll('input[data-filter]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateActiveFilterCount);
  });
  
  // Filters dropdown behavior - using global function now
  // (toggleFilterDropdown is now defined globally and called via onclick)
  const swipeCards = document.querySelector(".swipe-cards");
  const leftNavBtn = document.querySelector(".left-nav-btn");
  const rightNavBtn = document.querySelector(".right-nav-btn");
  let currentIndex = 0;
  const cardsPerPage = 1; // Adjust based on how many cards you want to show at once

  leftNavBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateSwipe();
    }
  });

  rightNavBtn.addEventListener("click", function () {
    if (
      currentIndex <
      swipeCards.children.length - cardsPerPage
    ) {
      currentIndex += cardsPerPage;
      updateSwipe();
    }
  });

  function updateSwipe() {
    const translateX = -currentIndex * (300 + 20); // 300px card width + 20px margin
    swipeCards.style.transform = `translateX(${translateX}px)`;
  }

  // Touch swipe functionality
  let startX,
    isSwiping = false;

  swipeCards.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
    isSwiping = true;
  });

  swipeCards.addEventListener("touchmove", function (e) {
    if (!isSwiping) return;
    const touchX = e.touches[0].clientX;
    const deltaX = startX - touchX;

    if (
      deltaX > 50 &&
      currentIndex < swipeCards.children.length - cardsPerPage
    ) {
      currentIndex += cardsPerPage;
      updateSwipe();
      isSwiping = false;
    } else if (deltaX < -50 && currentIndex > 0) {
      currentIndex -= cardsPerPage;
      updateSwipe();
      isSwiping = false;
    }
  });

  swipeCards.addEventListener("touchend", function () {
    isSwiping = false;
  });

  // Image carousel navigation
});
// Add this to your JS file or in a script tag
function setupImageCarousels() {
  const carousels = document.querySelectorAll(
    ".card-img-wrapper"
  );

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(
      ".image-carousel img"
    );
    const leftBtn = carousel.querySelector(".left-img-nav");
    const rightBtn = carousel.querySelector(".right-img-nav");
    let currentImageIndex = 0;

    // Show first image initially
    if (images.length > 0) {
      images[0].style.display = "block";
    }

    leftBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      images[currentImageIndex].style.display = "none";
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      images[currentImageIndex].style.display = "block";
    });

    rightBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      images[currentImageIndex].style.display = "none";
      currentImageIndex =
        (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.display = "block";
    });
  });
}

// Run the function when the document is loaded
document.addEventListener(
  "DOMContentLoaded",
  setupImageCarousels
);

const currentImageIndices = [0, 0, 0, 0, 0];

// Navigate image within a card
function navigateImage(cardIndex, direction) {
  const wrapper = document.getElementById(
    `imageWrapper${cardIndex}`
  );
  const images = wrapper.querySelectorAll("img");

  if (direction === "next") {
    currentImageIndices[cardIndex] =
      (currentImageIndices[cardIndex] + 1) % images.length;
  } else {
    currentImageIndices[cardIndex] =
      (currentImageIndices[cardIndex] - 1 + images.length) %
      images.length;
  }

  wrapper.style.transform = `translateX(-${
    currentImageIndices[cardIndex] * 100
  }%)`;
}

// Scroll cards carousel
function scrollCards(direction) {
  const container = document.getElementById("cardsContainer");
  const cardWidth =
    document.querySelector(".mns-card").offsetWidth;
  const scrollAmount = cardWidth + 20; // card width + gap

  if (direction === "right") {
    container.scrollLeft += scrollAmount;
  } else {
    container.scrollLeft -= scrollAmount;
  }
}

// Touch swipe functionality for card carousel
const cardsContainer = document.getElementById("cardsContainer");
let startX, scrollLeft;

cardsContainer.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX - cardsContainer.offsetLeft;
  scrollLeft = cardsContainer.scrollLeft;
});

cardsContainer.addEventListener("touchmove", (e) => {
  if (!startX) return;
  const x = e.touches[0].pageX - cardsContainer.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed multiplier
  cardsContainer.scrollLeft = scrollLeft - walk;
});

cardsContainer.addEventListener("touchend", () => {
  startX = null;
});

// Touch swipe functionality for individual image carousels
document
  .querySelectorAll(".rty-image-carousel")
  .forEach((carousel, index) => {
    let touchStartX, touchEndX;

    carousel.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;

      if (touchStartX - touchEndX > 50) {
        // Swiped left, show next image
        navigateImage(index, "next");
      } else if (touchEndX - touchStartX > 50) {
        // Swiped right, show previous image
        navigateImage(index, "prev");
      }
    });
  });

// Search Handler

function handleSearch() {
  const input = document.querySelector("#location");
  if (input.value.length == 0) {
    window.location.href = `/hotels/search`;
  } else {
    window.location.href = `/hotels/search?q=${input.value}`;
  }
}

// Global function for dropdown toggle
function toggleFilterDropdown(header) {
  const filterSection = header.closest(".filter-section");
  const options = filterSection.querySelector(".filter-options");
  const arrow = filterSection.querySelector(".arrow");

  // Toggle the dropdown visibility
  if (options.style.maxHeight && options.style.maxHeight !== "0px") {
    options.style.maxHeight = "0px"; // Close dropdown
    arrow.style.transform = "rotate(0deg)"; // Reset arrow
  } else {
    options.style.maxHeight = options.scrollHeight + "px"; // Open dropdown
    arrow.style.transform = "rotate(180deg)"; // Rotate arrow
  }
}

// Load filter state from URL parameters
function loadFilterState() {
  const params = new URLSearchParams(window.location.search);
  
  // Set location filters
  const locations = params.getAll('location');
  locations.forEach(location => {
    const checkbox = document.querySelector(`input[data-filter="location"][value="${location}"]`);
    if (checkbox) checkbox.checked = true;
  });
  
  // Set amenities filters (accessibility)
  const amenities = params.getAll('amenities');
  amenities.forEach(amenity => {
    const checkbox = document.querySelector(`input[data-filter="accessibility"][value="${amenity}"]`);
    if (checkbox) checkbox.checked = true;
  });
  
  // Set beds filters
  const beds = params.getAll('beds');
  beds.forEach(bed => {
    const checkbox = document.querySelector(`input[data-filter="beds"][value="${bed}"]`);
    if (checkbox) checkbox.checked = true;
  });
  
  // Set property type filters
  const propertyTypes = params.getAll('propertyType');
  propertyTypes.forEach(propertyType => {
    const checkbox = document.querySelector(`input[data-filter="propertyType"][value="${propertyType}"]`);
    if (checkbox) checkbox.checked = true;
  });
  
  // Update filter counts
  updateActiveFilterCount();
}

// Update active filter count display
function updateActiveFilterCount() {
  const checkedFilters = document.querySelectorAll('input[data-filter]:checked');
  const filterButton = document.querySelector('button.availability');
  
  if (checkedFilters.length > 0) {
    if (filterButton) {
      filterButton.textContent = `Apply Filters (${checkedFilters.length})`;
      filterButton.style.backgroundColor = '#007bff';
    }
  } else {
    if (filterButton) {
      filterButton.textContent = 'Apply Filters';
      filterButton.style.backgroundColor = '';
    }
  }
}

// Clear all filters
function clearAllFilters() {
  const checkboxes = document.querySelectorAll('input[data-filter]');
  checkboxes.forEach(checkbox => checkbox.checked = false);
  updateActiveFilterCount();
  window.location.href = '/hotels/search';
}

// Filters (mirror of search page)
function applyHotelFilters() {
  const params = new URLSearchParams();
  
  // Preserve search query if exists
  const currentParams = new URLSearchParams(window.location.search);
  const query = currentParams.get('q');
  if (query) {
    params.set('q', query);
  }

  const selectedLocations = Array.from(
    document.querySelectorAll('input[data-filter="location"]:checked')
  ).map((el) => el.value);

  const selectedAccessibility = Array.from(
    document.querySelectorAll('input[data-filter="accessibility"]:checked')
  ).map((el) => el.value);

  const selectedBeds = Array.from(
    document.querySelectorAll('input[data-filter="beds"]:checked')
  ).map((el) => el.value);

  const selectedPropertyTypes = Array.from(
    document.querySelectorAll('input[data-filter="propertyType"]:checked')
  ).map((el) => el.value);

  // Append arrays (repeat param style)
  selectedLocations.forEach((loc) => params.append("location", loc));
  selectedAccessibility.forEach((a) => params.append("amenities", a));
  selectedBeds.forEach((b) => params.append("beds", b));
  selectedPropertyTypes.forEach((pt) =>
    params.append("propertyType", pt)
  );

  const queryString = params.toString();
  const base = `/hotels/search`;
  const url = queryString ? `${base}?${queryString}` : base;
  window.location.href = url;
}
