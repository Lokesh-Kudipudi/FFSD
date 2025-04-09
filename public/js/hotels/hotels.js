document.addEventListener("DOMContentLoaded", function () {
  // Load filter state from URL on page load
  loadFilterState();
  
  // Add event listeners to filter checkboxes to update count
  const filterCheckboxes = document.querySelectorAll('input[data-filter]');
  filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateActiveFilterCount);
  });
  
  // Dropdown functionality
  const filterHeaders = document.querySelectorAll(".filter-header");
  filterHeaders.forEach((header) => {
    header.addEventListener("click", toggleDropdown);
  });

  function toggleDropdown() {
    const filterSection = this.closest(".filter-section");
    const options = filterSection.querySelector(
      ".filter-options"
    );
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
});

const input = document.querySelector("#location-header");

function handleHotelClick(hotelId) {
  window.location.href = `${window.location.protocol}//${window.location.host}/hotels/hotel/${hotelId}`;
}

function handleSearch() {
  if (input.value.length == 0) {
    window.location.href = `/hotels/search`;
  } else {
    window.location.href = `/hotels/search?q=${input.value}`;
  }
}

function setInputValue() {
  const url = new URLSearchParams(window.location.search);
  const query = url.get("q");
  if (query) {
    input.value = query;
  }
}

setInputValue();

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
  // Get current search query and preserve it
  const currentParams = new URLSearchParams(window.location.search);
  const query = currentParams.get('q');
  window.location.href = query ? `/hotels/search?q=${query}` : '/hotels/search';
}

function applyHotelFilters() {
  const params = new URLSearchParams();
  
  // Preserve search query if exists
  const currentParams = new URLSearchParams(window.location.search);
  const query = currentParams.get('q');
  if (query) {
    params.set('q', query);
  }

  // Collect selected locations
  const selectedLocations = Array.from(
    document.querySelectorAll('input[data-filter="location"]:checked')
  ).map((el) => el.value);

  // Collect selected accessibility features (maps to amenities includes)
  const selectedAccessibility = Array.from(
    document.querySelectorAll('input[data-filter="accessibility"]:checked')
  ).map((el) => el.value);

  // Collect selected beds
  const selectedBeds = Array.from(
    document.querySelectorAll('input[data-filter="beds"]:checked')
  ).map((el) => el.value);

  // Collect selected property types
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
