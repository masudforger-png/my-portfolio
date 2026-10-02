// =========================
// VERRONIC PORTFOLIO JS
// =========================


// =========================
// MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");

});


// Close menu after clicking a link

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});


// =========================
// TYPING EFFECT
// =========================

const typingText = document.getElementById("typingText");

const messages = [
    "I design digital experiences.",
    "I turn ideas into interfaces.",
    "I create with purpose.",
    "I love clean visual systems.",
    "Let's build something memorable."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentMessage = messages[messageIndex];

    if (!deleting) {

        typingText.textContent =
            currentMessage.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentMessage.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentMessage.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            messageIndex++;

            if (messageIndex >= messages.length) {
                messageIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );
}

typeEffect();


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        contactForm.querySelector('input[type="text"]').value.trim();

    const email =
        contactForm.querySelector('input[type="email"]').value.trim();

    const message =
        contactForm.querySelector("textarea").value.trim();


    const phoneNumber = "01887006224";

    const whatsappMessage =
`Hello meherab hossain,

Name: ${name}
Email: ${email}

Project:
${message}`;


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

});


// =========================
// SIMPLE SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section, .work-card, .service-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================
// IMAGE PARALLAX
// =========================

const imageFrame =
    document.querySelector(".image-frame");

if (imageFrame) {

    document.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5) * 8;

        const y =
            (event.clientY / window.innerHeight - 0.5) * 8;

        imageFrame.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


// =========================
// LOGO EFFECT
// =========================

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("mouseenter", () => {

        logo.style.textShadow =
            "0 0 15px rgba(0,234,255,.7)";

    });

    logo.addEventListener("mouseleave", () => {

        logo.style.textShadow = "none";

    });

}


// =========================
// ESC KEY CLOSE MENU
// =========================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menu.classList.remove("active");

    }

});



