document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return; // Run only on contact.html

  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();
    let isValid = true;

    // Validation
    if (!name) {
      document.getElementById("nameError").textContent = "Full name is required.";
      isValid = false;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (!subject) {
      document.getElementById("subjectError").textContent = "Subject is required.";
      isValid = false;
    }

    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    // Success
    if (isValid) {
      successMessage.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }
  });
});