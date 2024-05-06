document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-slide");

  function showSlide(n) {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
  }

  function nextSlide() {
    showSlide(slideIndex + 1);
  }

  function prevSlide() {
    showSlide(slideIndex - 1);
  }

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  setInterval(nextSlide, 10000); // Cambia la imagen cada 10 segundos
});
