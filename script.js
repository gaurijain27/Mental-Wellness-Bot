const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");

function sendMessage() {
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  addMessage("You", userMessage);
  inputField.value = "";

  setTimeout(() => {
    const botReply = getBotReply(userMessage);
    addMessage("Bot", botReply);
  }, 500);
}

function addMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  message = message.toLowerCase();
  if (message.includes("anxious") || message.includes("nervous")) {
    return "I'm sorry you're feeling this way. Try some deep breathing and grounding exercises. Would you like a few tips?";
  }
  if (message.includes("sad") || message.includes("down")) {
    return "I'm here for you. Remember, it's okay to feel sad. Would you like me to suggest some uplifting activities?";
  }
  if (message.includes("happy") || message.includes("good")) {
    return "That's wonderful! Celebrate this moment and share your happiness with others!";
  }
  if (message.includes("stressed") || message.includes("tired")) {
    return "Stress is tough. Let's pause, take a deep breath, and maybe plan a short break. Would you like a quick relaxation exercise?";
  }
  return "I hear you. I'm always here to listen. Would you like a motivational quote?";
}

function logMood(mood) {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.push({ mood, date: new Date().toLocaleDateString() });
  localStorage.setItem("moods", JSON.stringify(moods));
  alert(`Mood logged: ${mood}`);
}
