
document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
  });

  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });

  // Typing animation
  const typingText = document.getElementById("typingText");
  const words = [
    "Software Engineer",
    "Web Developer",
    "WordPress Developer",
    "Creative Designer"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];

    typingText.textContent = deleting
      ? currentWord.substring(0, charIndex--)
      : currentWord.substring(0, charIndex++);

    let delay = deleting ? 45 : 90;

    if (!deleting && charIndex > currentWord.length) {
      deleting = true;
      delay = 1200;
    } else if (deleting && charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
      delay = 400;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();

  // Profile image fallback
  const profileImage = document.getElementById("profileImage");
  const imageFallback = document.getElementById("imageFallback");

  profileImage.addEventListener("error", function () {
    profileImage.style.display = "none";
    imageFallback.style.display = "grid";
  });

  if (profileImage.complete && profileImage.naturalWidth === 0) {
    profileImage.style.display = "none";
    imageFallback.style.display = "grid";
  }

  // Footer year
  document.getElementById("year").textContent =
    new Date().getFullYear();

  // WhatsApp contact form
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Replace with your real WhatsApp number
    const phone = "8801XXXXXXXXX";

    if (phone.includes("X")) {
      alert("Please add your WhatsApp number in script.js first.");
      return;
    }

    const text = "Hello Masud!\n\nName: " + name +
      "\nEmail: " + email +
      "\nMessage: " + message;

    const url = "https://wa.me/" + phone +
      "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
  });

});
