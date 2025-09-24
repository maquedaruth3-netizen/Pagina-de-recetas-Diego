document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-up");
      }
    });
  }, { threshold: 0.2 });

  images.forEach(img => observer.observe(img));
});
