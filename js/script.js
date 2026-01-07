// Holidae - simple interactivity

// 1) Quote form message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm");
  const msg = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = document.getElementById("fullName")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const month = document.getElementById("month")?.value;
      const people = document.getElementById("people")?.value;

      if (!fullName || !email || !month || !people) {
        msg.textContent = "Please complete all fields.";
        msg.classList.remove("success");
        msg.classList.add("error");
        return;
      }

      msg.textContent = `Thank you, ${fullName}! We received your request. We will contact you at ${email} soon.`;
      msg.classList.remove("error");
      msg.classList.add("success");

      form.reset();
    });
  }

  // 2) Simple image gallery click-to-preview (optional)
  const thumbs = document.querySelectorAll("[data-full]");
  const preview = document.getElementById("galleryPreview");

  thumbs.forEach((img) => {
    img.addEventListener("click", () => {
      if (preview) preview.src = img.getAttribute("data-full");
    });
  });
});
<nav class="nav">
  <a href="index.html">Home</a>
  <a href="packages.html">Packages</a>
  <a href="about.html">About</a>
  <a href="contact.html">Request a quote</a>
</nav>
