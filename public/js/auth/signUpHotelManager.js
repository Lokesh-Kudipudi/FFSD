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

const form = document.querySelector("#authForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const addressInput = document.querySelector("#address");
const passwordInput = document.querySelector("#password");

async function handleSignUp(event) {
  event.preventDefault(); // To prevent reload

  if (nameInput.value === "") {
    showToast("Name is required", "error");
    nameInput.focus();
    return;
  }

  if (emailInput.value === "") {
    showToast("Email is required", "error");
    emailInput.focus();
    return;
  }

  if (phoneInput.value === "") {
    showToast("Phone is required", "error");
    phoneInput.focus();
    return;
  }

  if (addressInput.value === "") {
    showToast("Address is required", "error");
    addressInput.focus();
    return;
  }

  if (passwordInput.value === "") {
    showToast("Password is required", "error");
    passwordInput.focus();
    return;
  }

  if (passwordInput.value?.length < 8) {
    showToast("Password Length is less than 8", "warning");
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  try {
    const response = await fetch("/signUpHotelManager", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
      }),
    });

    const data = await response.json();

    if (response.ok === false) {
      throw new Error(data.message);
    } else {
      showToast(
        "User signed in successfully, Redirecting to Home Page.",
        "success"
      );
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    }
  } catch (err) {
    showToast(err.message, "error");
    return;
  }

  // showToast("Success!", "success");
}

form.addEventListener("submit", handleSignUp);
