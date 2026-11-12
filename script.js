
document.addEventListener("DOMContentLoaded", () => {

  // 1. MOBILE NAVIGATION
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("active");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }


  // 2. TYPING ANIMATION
  const typingText = document.getElementById("typingText");

  if (typingText) {
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

      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingText.textContent = currentWord.substring(0, charIndex);

      let delay = deleting ? 45 : 90;

      if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        delay = 1400;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      setTimeout(typeEffect, delay);
    }

    typeEffect();
  }


  // 3. SCROLL REVEAL
  const revealElements = document.querySelectorAll(
    ".content-section, .neon-card, .hero-content, .hero-visual"
  );

  revealElements.forEach(element => {
    element.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => {
      element.classList.add("visible");
    });
  }


  // 4. PROFILE IMAGE FALLBACK
  const profileImage = document.getElementById("profileImage");

  if (profileImage) {
    profileImage.addEventListener("error", () => {
      profileImage.style.display = "none";
      console.error("Profile image not found. Check assets/profile.png");
    });
  }


  // 5. COMPANY LOGO FALLBACK
  const companyLogo = document.querySelector(".company-logo");

  if (companyLogo) {
    companyLogo.addEventListener("error", () => {
      companyLogo.style.display = "none";
    });
  }


  // 6. WHATSAPP CONTACT FORM
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Replace with your own WhatsApp number
      const phone = "8801XXXXXXXXX";

      const whatsappMessage =
        `Hello, I am ${name}.\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;

      const whatsappURL =
        "https://wa.me/" + phone +
        "?text=" + encodeURIComponent(whatsappMessage);

      window.open(whatsappURL, "_blank");
    });
  }

});
