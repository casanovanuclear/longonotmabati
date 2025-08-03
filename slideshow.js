document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".gallery img");
  let current = 0;

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
});
