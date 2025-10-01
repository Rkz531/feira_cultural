const slides = document.querySelectorAll('.carousel-slide');
let slideAtual = 0;

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        // Define a posição inicial para o próximo slide
        slide.style.left = `${(i - index) * 100}%`; 
    });
    slides[index].classList.add('active');
}

function proximoSlide() {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
}

// Mostra o primeiro slide ao carregar
mostrarSlide(slideAtual);

// Faz a transição automática a cada 3 segundos
setInterval(proximoSlide, 3000); // Altere 3000 para a duração desejada (em milissegundos)

