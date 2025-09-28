import { udateGreeting } from "./date.js";
document.addEventListener("DOMContentLoaded", udateGreeting);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelectorAll(".project-header").forEach((header) => {
  header.addEventListener("click", () => {
    const desc = header.nextElementSibling;
    const btn = header.querySelector(".toogle-btn");
    desc.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

function alert(message, type) {
  const popup = document.getElementById("alertPopup");
  if (!popup) return;

  popup.textContent = message;
  popup.className = `alert-popup alert-${type} show`;
  setTimeout(() => {
    popup.classList.remove("show");
    popup.textContent = "";
  }, 3000);
}
document
  .getElementById("submit-feedback")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("word").value.trim();

    if (!name || !email || !comment) {
      alert("Please fill all infor", "error");
      return;
    }
    alert(`Dear ${name} Your message is sent`, "success");
  });

document.getElementById("theme-toogle").addEventListener("click", (event) => {
  event.preventDefault();
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.classList.replace("fa-moon", "fa-lightbulb");
  } else {
    themeToggle.classList.replace("fa-lightbulb", "fa-moon");
  }
});
