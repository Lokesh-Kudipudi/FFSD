function validatePhoneNumber() {
  const phoneInput = document.getElementById("phone");
  const phoneValue = phoneInput.value;
  const phonePattern = /^\d{10}$/;

  if (!phonePattern.test(phoneValue)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".form")
    .addEventListener("submit", async function (e) {
      e.preventDefault(); // prevent default form submission

      console.log("Form submitted");

      // Validate phone number before proceeding
      if (!validatePhoneNumber()) {
        return alert(
          "Invalid phone number format. Please enter a valid 10-digit mobile number."
        );
      }

      // Validate other fields if necessary (e.g., name, email, etc.)
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const reasonInput = document.getElementById("reason");
      const queryInput = document.getElementById("query");
      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const reasonValue = reasonInput.value.trim();
      const queryValue = queryInput.value.trim();

      if (
        !nameValue ||
        !emailValue ||
        !reasonValue ||
        !queryValue
      ) {
        return alert("Please fill in all required fields.");
      }

      // valid email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        return alert("Please enter a valid email address.");
      }

      const form = e.target;
      const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        reason: form.reason.value,
        query: form.query.value.trim(),
      };

      try {
        const response = await fetch("/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
          alert(result.message); // e.g., "Form submitted successfully!"
          form.reset(); // optionally reset form
        } else {
          alert(
            "Error: " + (result.error || "Submission failed")
          );
        }
      } catch (err) {
        console.error("Fetch error:", err);
        alert("An unexpected error occurred. Please try again.");
      }
    });
});
