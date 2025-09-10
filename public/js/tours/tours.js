// Update active filter count display for tours
function updateActiveFilterCount() {
  const checkedFilters = document.querySelectorAll('input[data-filter]:checked');
  const filterButton = document.querySelector('button.apply-filters-btn');
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
const buttonLeft = document.querySelector(".buttonLeft");
const buttonRight = document.querySelector(".buttonRight");
const allToursContainer = document.querySelector(
  ".allToursContainer"
);
const ratingHeader = document.querySelector(
  ".dropdown-header-rating"
);
const input = document.querySelector("#location");

// Add event listeners for filter functionality on page load
document.addEventListener("DOMContentLoaded", function () {
  // Load filter state from URL on page load
  loadFilterState();
// Load filter state from URL parameters for tours
function loadFilterState() {
  const params = new URLSearchParams(window.location.search);

  // Helper to set checked for a filter
  function setChecked(filterName) {
    const values = params.getAll(filterName);
    values.forEach(val => {
      const checkbox = document.querySelector(`input[data-filter="${filterName}"][value="${val}"]`);
      if (checkbox) checkbox.checked = true;
    });
  }

  setChecked('startLocation');
  setChecked('duration');
  setChecked('language');
  setChecked('tags');
  setChecked('priceRange');
  setChecked('availableMonths');
  setChecked('rating');

  updateActiveFilterCount && updateActiveFilterCount();
}

  // Add event listeners to filter checkboxes to update count
  const filterCheckboxes = document.querySelectorAll('input[data-filter]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateActiveFilterCount);
  });

  // Attach dropdown toggle to all filter headers
  const filterHeaders = document.querySelectorAll('.filter-header');
  filterHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const filterSection = this.closest('.filter-section');
      const options = filterSection.querySelector('.filter-options');
      const arrow = filterSection.querySelector('.arrow');
      if (options.style.maxHeight && options.style.maxHeight !== '0px') {
        options.style.maxHeight = '0px';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        options.style.maxHeight = options.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
      }
    });
  });
});


buttonRight.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page")) || 0; // Default to page 0 if not present
  let nextPage = currentPage + 1;
  urlParams.set("page", nextPage);
  window.location.search = urlParams.toString();
});

buttonLeft.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page")) || 0; // Default to page 0 if not present
  let nextPage = currentPage - 1;
  urlParams.set("page", nextPage);
  window.location.search = urlParams.toString();
});

// document
//   .getElementById("dropdownContentLocation")
//   .addEventListener("change", function (event) {
//     if (event.target.type === "checkbox") {
//       console.log(event.target.parentElement.textContent.trim());
//     }
//   });

document
  .getElementById("dropdownContentRating")
  .addEventListener("change", function (event) {
    if (event.target.type === "checkbox") {
      let urlParams = new URLSearchParams(
        window.location.search
      );
      let rating = urlParams.get("rating");
      let ratingArray = [];

      if (rating) {
        ratingArray = rating.split(",");
      } else {
        ratingArray.push(event.target.value);
      }

      if (rating) {
        if (ratingArray.includes(event.target.value)) {
          ratingArray = ratingArray.filter(
            (rat) => rat != event.target.value
          );
        } else {
          ratingArray = [...ratingArray, event.target.value];
        }
      }

      console.log(ratingArray);
      ratingArray.length == 0
        ? urlParams.delete("rating")
        : urlParams.set("rating", ratingArray.join(","));

      window.location.search = urlParams.toString();
    }
  });

function toggleDropdown(filter) {
  let content = document.getElementById(
    `dropdownContent${filter}`
  );
  let arrow = document.getElementById(`arrow${filter}`);
  if (
    content.style.maxHeight === "0px" ||
    content.style.maxHeight === ""
  ) {
    content.style.maxHeight = "300px";
    content.style.padding = "10px";
    arrow.innerHTML = "&#9660;"; // Down arrow
  } else {
    content.style.maxHeight = "0px";
    content.style.padding = "0px 10px";
    arrow.innerHTML = "&#9650;"; // Up arrow
  }
}


if (ratingHeader) {
  ratingHeader.addEventListener("click", () => {
    toggleDropdown("Rating");
  });
}

// locationHeader.addEventListener("click", () => {
//   toggleDropdown("Location");
// });

// Function to Handle Tour Card click

function handleTourClick(tourId) {
  window.location.href = `${window.location.protocol}//${window.location.host}/tours/tour/${tourId}`;
}

// Funtion to set intial Filter height by default

function initialHeaderHeight(filter) {
  let content = document.getElementById(
    `dropdownContent${filter}`
  );
  let arrow = document.getElementById(`arrow${filter}`);

  let url = new URLSearchParams(window.location.search);
  const rating = url.get("rating");

  if (rating) {
    content.style.maxHeight = "300px";
    content.style.padding = "10px";
    arrow.innerHTML = "&#9660;";
  } else {
    content.style.maxHeight = "0px";
    content.style.padding = "0px 10px";
    arrow.innerHTML = "&#9650;";
  }
}

function setCheckedRatingInputs() {
  let url = new URLSearchParams(window.location.search);
  let rating = url.get("rating")?.split(",");
  let inputFields = document.querySelectorAll(".rating-input");

  if (rating) {
    rating.forEach((x) => {
      let i = parseInt(x);
      console.log(x);
      inputFields[5 - i].setAttribute("checked", "true");
    });
  }
}

// Funtion to manage search in tours

function handleSearch() {
  if (input.value.length == 0) {
    window.location.href = `/tours/search`;
  } else {
    window.location.href = `/tours/search?q=${input.value}`;
  }
}

function setInputValue() {
  const url = new URLSearchParams(window.location.search);
  const query = url.get("q");
  if (query) {
    input.value = query;
  }
}

initialHeaderHeight("Rating");
setCheckedRatingInputs();
setInputValue();
// --- Client-side filter functionality ---

function applyTourFilters() {
  const params = new URLSearchParams();
  // Preserve search query if exists
  const currentParams = new URLSearchParams(window.location.search);
  const query = currentParams.get('q');
  if (query) {
    params.set('q', query);
  }

  // Collect selected filters using data-filter attributes
  function appendChecked(filterName) {
    document.querySelectorAll(`input[data-filter="${filterName}"]:checked`).forEach(input => {
      params.append(filterName, input.value);
    });
  }

  appendChecked('startLocation');
  appendChecked('duration');
  appendChecked('language');
  appendChecked('tags');
  appendChecked('priceRange');
  appendChecked('availableMonths');
  appendChecked('rating');

  // Reset page to 0 when applying filters
  params.set('page', 0);

  // Go to /tours/search with filters
  const queryString = params.toString();
  window.location.href = `/tours/search${queryString ? `?${queryString}` : ''}`;
}

function clearAllFilters() {
  // Uncheck all checkboxes in filter sidebar
  const sidebar = document.querySelector('.filter-sidebar');
  if (sidebar) {
    sidebar.querySelectorAll('input[data-filter]').forEach(input => {
      input.checked = false;
    });
  }
  // Get current search query and preserve it
  const currentParams = new URLSearchParams(window.location.search);
  const query = currentParams.get('q');
  window.location.href = query ? `/tours/search?q=${query}` : '/tours/search';
}
