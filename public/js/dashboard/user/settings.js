function showToast(message, type = "info") {
  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById(
    "toast-container"
  );
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";

    // Style the container
    Object.assign(toastContainer.style, {
      position: "fixed",
      right: "20px",
      top: "20px",
      zIndex: "1000",
    });

    document.body.appendChild(toastContainer);
  }

  // Create the toast element
  const toast = document.createElement("div");

  // Set background color based on type
  let backgroundColor;
  switch (type.toLowerCase()) {
    case "success":
      backgroundColor = "#4CAF50"; // Green
      break;
    case "error":
      backgroundColor = "#F44336"; // Red
      break;
    case "warning":
      backgroundColor = "#FF9800"; // Orange
      break;
    case "info":
    default:
      backgroundColor = "#2196F3"; // Blue
      break;
  }

  // Style the toast
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

  // Add message text
  const messageText = document.createElement("span");
  messageText.textContent = message;
  toast.appendChild(messageText);

  // Add close button
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
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  };

  toast.appendChild(closeBtn);

  // Add toast to container
  toastContainer.appendChild(toast);

  // Trigger CSS transition by setting opacity after a small delay
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 10);

  // Auto remove after 2 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 2000);

  return toast;
}

const saveBtn = document.querySelector("#save-button");

function validateForm({ fullName, email, phone, address }) {
  const errors = [];

  // Name starts with number
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!fullName || !nameRegex.test(fullName)) {
    errors.push("Name must contain only letters and spaces.");
  }

  if (!fullName || fullName.length < 2) {
    errors.push("fullName must be at least 2 characters.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Invalid email address.");
  }

  const phoneRegex = /^\+?\d{10,12}$/;
  if (!phone || !phoneRegex.test(phone)) {
    errors.push("Invalid phone number.");
  }

  if (!address || address.length < 5) {
    errors.push("Address must be at least 5 characters.");
  }

  if (errors.length > 0) {
    throw new Error(errors[0]);
  }
}

saveBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const firstName = document
    .getElementById("first-name")
    .value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document
    .getElementById("address")
    .value.trim();

  try {
    validateForm({ fullName: firstName, email, phone, address });

    const response = await fetch("/dashboard/settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: firstName,
        email,
        phone,
        address,
      }),
    });

    if (response.status != 200) {
      return showToast("Error Updating Settings", "info");
    }

    const result = await response.json();
    showToast("User Updated successfully", "success");

    // Optionally, redirect or refresh:
    window.location.reload(true);
  } catch (error) {
    console.error("Error updating settings:", error);
    showToast(`Error : ${error.message}`, "error");
  }
});
