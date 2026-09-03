document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('carouselTrack');
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Função para mover o carrossel
    const updateCarousel = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Atualizar bolinhas (dots)
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentIndex = index;
    };

    // Evento botão Próximo
    nextButton.addEventListener('click', () => {
        let index = currentIndex + 1;
        if (index >= slides.length) index = 0; // Volta para o início
        updateCarousel(index);
    });

    // Evento botão Anterior
    prevButton.addEventListener('click', () => {
        let index = currentIndex - 1;
        if (index < 0) index = slides.length - 1; // Vai para o último
        updateCarousel(index);
    });

    // Evento clicar nas bolinhas
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateCarousel(i);
        });
    });

    // Autoplay (Opcional - muda a cada 5 segundos)
    setInterval(() => {
        let index = currentIndex + 1;
        if (index >= slides.length) index = 0;
        updateCarousel(index);
    }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});