window.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.gallery-container img');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 3000);
});
