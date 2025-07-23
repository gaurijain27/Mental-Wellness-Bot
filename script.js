const chatBox = document.getElementById("chat-box");
const inputField = document.getElementById("user-input");
const quoteElement = document.getElementById("quote");

const quotes = [
  "Take a deep breath. You’re stronger than you think.",
  "Every day is a new beginning.",
  "Small steps every day lead to big changes.",
  "You deserve peace, kindness, and self-love.",
  "Focus on progress, not perfection."
];

window.onload = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
};

function sendMessage() {
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  addMessage("You", userMessage, "user-message");
  inputField.value = "";

  setTimeout(() => {
    const botReply = getBotReply(userMessage);
    addMessage("Bot", botReply, "bot-message");
  }, 500);
}

function addMessage(sender, message, className) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${className}`;
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
    return "I'm here for you. It's okay to feel sad. Would you like me to suggest some uplifting activities?";
  }
  if (message.includes("happy") || message.includes("good")) {
    return "That's wonderful! Celebrate this moment and share your happiness with others!";
  }
  if (message.includes("stressed") || message.includes("tired")) {
    return "Stress is tough. Let's pause, take a deep breath, and maybe plan a short break. Want a relaxation exercise?";
  }
  return "I hear you. I'm always here to listen. Would you like a motivational quote?";
}

function logMood(mood) {
  const moods = JSON.parse(localStorage.getItem("moods")) || [];
  moods.push({ mood, date: new Date().toLocaleDateString() });
  localStorage.setItem("moods", JSON.stringify(moods));
  alert(`Mood logged: ${mood}`);
}
