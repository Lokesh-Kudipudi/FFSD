const chatHistory = [];

// Toggle chat container visibility
document
  .getElementById("chatIcon")
  .addEventListener("click", function () {
    const chatContainer =
      document.getElementById("chatContainer");
    chatContainer.style.display =
      chatContainer.style.display === "none" ? "block" : "none";
  });

// Handle sending messages
async function sendChatMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  try {
    if (message) {
      console.log(chatHistory);

      // Add user message
      addMessage(message, "user");

      // Clear input
      userInput.value = "";

      chatHistory.push({
        role: "user",
        parts: [{ text: message }],
      });

      const response = await fetch("/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput: message,
          history: chatHistory,
        }),
      });

      const data = await response.json();

      console.log("Response:", data);

      addMessage(data.data.message, "bot");

      chatHistory.push({
        role: "model",
        parts: [{ text: data.googleResponse }],
      });

      if (data.data.redirect == "yes") {
        setTimeout(() => {
          window.location.href = "/recommendation";
        }, 3000);
        addMessage("Redirecting...", "bot");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    addMessage("An error occurred. Please try again.", "error");
  }
}

// Add message to chat
function addMessage(text, sender) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}-message`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);

  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle Enter key
document
  .getElementById("userInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendChatMessage();
    }
  });
