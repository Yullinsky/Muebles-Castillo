import "./style.css";

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Form Submission Handler
const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value;

    // "Hola Arturo, mi nombre es [Nombre]. Me interesa cotizar [Servicio]. [Mensaje]."
    const whatsappMessage = `Hola Arturo, mi nombre es ${name}. Me interesa cotizar: ${interest}. ${message}`;

    const phone = "529991422032"; // 9991422032 with MX country code
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  });
}
