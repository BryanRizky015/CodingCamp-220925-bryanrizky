
function WelcomeMessage() {
  let username = prompt("Enter your Name: ");

  if (username) {
    document.getElementById("welcome").textContent = `Hi ${username}, Welcome!`;
    document.getElementById("subtitle").textContent = `Welcome to my portfolio, ${username}`;
    alert(`Welcome to my portfolio, ${username}`);
  } else {
    document.getElementById("welcome").textContent = "Hi Visitor, Welcome!";
    alert("Welcome To My Portfolio");
  }
}
window.onload = WelcomeMessage;
const form = document.getElementById("messageForm");
const result = document.getElementById("formResult");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const userName = document.getElementById("name").value;
  const userMessage = document.getElementById("message").value;
  console.log("Name:", userName);
  console.log("Message:", userMessage);
  alert(`Thank you, ${userName}! Your message: "${userMessage}" has been received.`);
  form.reset();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  if (hamburger.textContent === "☰") {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});
