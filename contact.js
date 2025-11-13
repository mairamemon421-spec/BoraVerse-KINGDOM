// Toggle Navbar
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Form submission (demo only)
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = "#ff6666";
    formMessage.textContent = "Please fill out all fields!";
    return;
  }

  formMessage.style.color = "#00ff99";
  formMessage.textContent = "Thank you 💜 Your message has been sent!";
  contactForm.reset();
});
