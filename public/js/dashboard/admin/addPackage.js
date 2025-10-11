// Client-side validation for Create Package form (mirrors signUp.js style)

function showToast(message, type = "info") {
  let toastContainer = document.getElementById(
    "toast-container"
  );
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    Object.assign(toastContainer.style, {
      position: "fixed",
      right: "20px",
      top: "20px",
      zIndex: "1000",
    });
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  let backgroundColor;
  switch (type.toLowerCase()) {
    case "success":
      backgroundColor = "#4CAF50";
      break;
    case "error":
      backgroundColor = "#F44336";
      break;
    case "warning":
      backgroundColor = "#FF9800";
      break;
    case "info":
    default:
      backgroundColor = "#2196F3";
      break;
  }

  Object.assign(toast.style, {
    backgroundColor: backgroundColor,
    color: "white",
    padding: "16px",
    borderRadius: "4px",
    marginTop: "10px",
    minWidth: "250px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    opacity: "0",
    transition: "opacity 0.3s ease-in-out",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const messageText = document.createElement("span");
  messageText.textContent = message;
  toast.appendChild(messageText);

  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  Object.assign(closeBtn.style, {
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  });

  closeBtn.onclick = function () {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  };

  toast.appendChild(closeBtn);
  toastContainer.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 10);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 2000);
}

// Form elements
const createForm = document.getElementById(
  "create-package-form"
);
const titleInput = document.getElementById("title");
const tagsInput = document.getElementById("tags");
const mainImageInput = document.getElementById("mainImage");
const imagesInput = document.getElementById("images");
const ratingInput = document.getElementById("rating");
const durationInput = document.getElementById("duration");
const startLocationInput =
  document.getElementById("startLocation");
const descriptionInput = document.getElementById("description");
const languageInput = document.getElementById("language");
const priceAmountInput = document.getElementById("priceAmount");
const priceDiscountInput =
  document.getElementById("priceDiscount");
const includesInput = document.getElementById("includes");
const availableMonthsInput = document.getElementById(
  "availableMonths"
);
const statusSelect = document.getElementById("status");

function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}

function validatePackageForm() {
  // Title
  if (!titleInput.value || titleInput.value.trim() === "") {
    showToast("Title cannot be empty", "error");
    titleInput.focus();
    return false;
  }
  if (titleInput.value.length < 3) {
    showToast(
      "Title must be at least 3 characters long",
      "error"
    );
    titleInput.focus();
    return false;
  }
  if (titleInput.value.length > 150) {
    showToast("Title cannot exceed 150 characters", "error");
    titleInput.focus();
    return false;
  }

  // Rating (optional but if provided must be between 1 and 5)
  if (ratingInput && ratingInput.value) {
    const r = parseFloat(ratingInput.value);
    if (isNaN(r) || r < 1 || r > 5) {
      showToast(
        "Rating must be a number between 1 and 5",
        "error"
      );
      ratingInput.focus();
      return false;
    }
  }

  // Price amount
  if (!priceAmountInput || !priceAmountInput.value) {
    showToast("Price amount is required", "error");
    priceAmountInput.focus();
    return false;
  }
  const amount = parseFloat(priceAmountInput.value);
  if (isNaN(amount) || amount < 0) {
    showToast(
      "Price amount must be a non-negative number",
      "error"
    );
    priceAmountInput.focus();
    return false;
  }

  // Price discount
  if (priceDiscountInput && priceDiscountInput.value) {
    const d = parseFloat(priceDiscountInput.value);
    if (isNaN(d) || d < 0 || d >= 1) {
      showToast(
        "Price discount must be a number between 0 (inclusive) and 1 (exclusive)",
        "error"
      );
      priceDiscountInput.focus();
      return false;
    }
  }

  // Main image url (optional)
  if (mainImageInput && mainImageInput.value) {
    if (!isValidUrl(mainImageInput.value.trim())) {
      showToast("Main image must be a valid URL", "error");
      mainImageInput.focus();
      return false;
    }
  }

  // Images list (if provided, each must be a valid url)
  if (imagesInput && imagesInput.value) {
    const imgs = imagesInput.value
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    for (const img of imgs) {
      if (!isValidUrl(img)) {
        showToast("All images must be valid URLs", "error");
        imagesInput.focus();
        return false;
      }
    }
  }

  // Destinations: ensure at least one destination exists when present in DOM
  const destinations = document.querySelectorAll(
    ".destination-entry"
  );
  if (destinations.length > 0) {
    for (const dest of destinations) {
      const nameEl = dest.querySelector('input[name$="[name]"]');
      const imageEl = dest.querySelector(
        'input[name$="[image]"]'
      );
      if (!nameEl || !nameEl.value.trim()) {
        showToast("Each destination must have a name", "error");
        nameEl && nameEl.focus();
        return false;
      }
      if (
        imageEl &&
        imageEl.value &&
        !isValidUrl(imageEl.value.trim())
      ) {
        showToast(
          "Destination images must be valid URLs",
          "error"
        );
        imageEl.focus();
        return false;
      }
    }
  }

  // Itinerary: if present, basic checks
  const itineraries = document.querySelectorAll(
    ".itinerary-entry"
  );
  if (itineraries.length > 0) {
    for (const it of itineraries) {
      const dayEl = it.querySelector('input[name$="[day]"]');
      const locationEl = it.querySelector(
        'input[name$="[location]"]'
      );
      if (!dayEl || !dayEl.value) {
        showToast(
          "Each itinerary day must have a day number",
          "error"
        );
        dayEl && dayEl.focus();
        return false;
      }
      if (isNaN(parseInt(dayEl.value))) {
        showToast(
          "Itinerary day must be a valid number",
          "error"
        );
        dayEl.focus();
        return false;
      }
      if (!locationEl || !locationEl.value.trim()) {
        showToast(
          "Each itinerary day must have a location",
          "error"
        );
        locationEl && locationEl.focus();
        return false;
      }
    }
  }

  // Booking details: if present, ensure start and end dates
  const bookings = document.querySelectorAll(".booking-entry");
  if (bookings.length > 0) {
    for (const b of bookings) {
      const startDateEl = b.querySelector(
        'input[name$="[startDate]"]'
      );
      const endDateEl = b.querySelector(
        'input[name$="[endDate]"]'
      );
      if (!startDateEl || !startDateEl.value.trim()) {
        showToast(
          "Each booking must have a start date",
          "error"
        );
        startDateEl && startDateEl.focus();
        return false;
      }
      if (!endDateEl || !endDateEl.value.trim()) {
        showToast("Each booking must have an end date", "error");
        endDateEl && endDateEl.focus();
        return false;
      }
    }
  }

  // All checks passed
  return true;
}

if (createForm) {
  createForm.addEventListener("submit", function (event) {
    if (!validatePackageForm()) {
      event.preventDefault();
      return false;
    }
    // allow submission to continue
  });
}
